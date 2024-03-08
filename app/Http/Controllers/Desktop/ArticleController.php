<?php

namespace App\Http\Controllers\Desktop;

use App\Article;
use App\ArticleFile;
use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\ArticleCollection;
use App\Traits\FileTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    use FileTrait;
    /**
     * @param \Illuminate\Http\Request $request
     * @return \App\Http\Resources\ArticleCollection
     */
    public function all(Request $request)
    {
        $articles = Article::with('files')->when(request()->get('search'), function (Builder $query) {
            $query->where('title', 'like', '%' . request()->get('search') . '%')
                ->orWhere('subtitle', 'like', '%' . request()->get('search') . '%');
        })->orderBy('created_at', 'desc');

        return $articles->paginate(request()->get('limit', 20));
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \App\Article $article
     * @return \Illuminate\Http\JsonResponse
     */
    public function get(Article $article)
    {
        return response()
            ->json([
                'article' => new ArticleResource($article)
            ], 200);
    }

    /**
     * @param \App\Http\Requests\ArticleStoreRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        try {
            $validator = Validator::make(request()->all(), [
                'title' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => $validator->messages()], 501);
            }

            $article = new Article();
            foreach (request()->all() as $key => $value) {
                if (in_array($key, $article->getFillable())) {
                    $article->$key = $value;
                    if($key == 'publish_at') {
                        $article->publish_at = $request->publish_at ? Carbon::parse($request->publish_at) : null;
                    }
                }
            }
            $article->save();

            if ($request->hasFile('files')) {
                $files = $request->file('files');
                foreach ($files as $key => $file) {
                    $articleFile = new ArticleFile();
                    $articleFile->article_id = $article->id;
                    $storageLink = $this->saveToStorage($file, null, 'articles', null, 'public');
                    $this->saveImage($storageLink, $file, $articleFile);
                }
            }

            return response()
                ->json([
                    "message" => "Новость успешно создана",
                    'article' => new ArticleResource($article)
                ], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \App\Article $article
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        try {
            $validator = Validator::make(request()->all(), [
                'id' => 'required|integer',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => $validator->messages()], 501);
            }
            $article = Article::find($request->id);
            foreach (request()->all() as $key => $value) {
                if (in_array($key, $article->getFillable())) {
                    $article->$key = $value;
                }
            }
            $article->save();

            return response()
                ->json([
                    "message" => "Новость успешно обновлена",
                    'article' => new ArticleResource($article)
                ], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function save($id, Request $request)
    {
        $param = $request->get("param");
        $value = $request->get("value");

        $article = Article::find($id);
        $article->{$param} = $value;

        $article->save();

        return response()
            ->json([
                'article' => $article,
                "message" => "Изменения сохранены",
            ], 201);

    }

    public function delete(Article $article)
    {
        try {
            $articleFiles = $article->files();
            foreach ($articleFiles as $file) {
                $this->deleteImage($file);
            }
            $article->delete();
            return response()->json(["message" => "Новость успешно удалена"], 201);
        } catch (\Exception  $e) {
            return response()->json(["message" => $e->getMessage()], 500);
        }
    }

    // ArticleFile
   /* public function saveArticleFile(Request $request)
    {
        try {
            $validator = Validator::make(request()->all(), [
                'article_id' => 'required',
                'file' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => $validator->messages()], 501);
            }

            $article = Article::find($request->article_id);

            $articleFile = new ArticleFile();
            $articleFile->article_id = $article->id;
            $file = $request->file('file');
            $storageLink = $this->saveToStorage($file, null, 'articles');
            $this->saveImage($storageLink, $file, $articleFile);

            return response()
                ->json([
                    "message" => "Файл успешно добавлен",
                    'article' => new ArticleResource($article),
                    'files' => $article->files()
                ], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }*/
    public function saveArticleFile(Request $request)
    {
        try {
            $validator = Validator::make(request()->all(), [
                'article_id' => 'required',
                'files' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => $validator->messages()], 501);
            }

            $article = Article::find($request->article_id);

            if ($request->hasFile('files')) {
                $files = $request->file('files');
                foreach ($files as $key => $file) {
                    $articleFile = new ArticleFile();
                    $articleFile->article_id = $article->id;
//                    $storageLink = $this->saveToStorage($file, null, 'articles');
                    $this->saveImage('articles', $file, $articleFile);
                }
            }

            return response()
                ->json([
                    "message" => "Файл успешно добавлен",
                    'article' => new ArticleResource($article),
                    'files' => $article->images
                ], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    public function deleteArticleFile(Request $request)
    {
        try {
            $validator = Validator::make(request()->all(), [
                'id' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => $validator->messages()], 501);
            }
            $articleFile = ArticleFile::find($request->id);
            $article = Article::find($articleFile->article_id);
            $this->deleteImage($articleFile);
            $articleFile->delete();

            return response()
                ->json([
                    "message" => "Файл успешно удалён",
                    'article' => $article ? new ArticleResource($article) : null,
                    'files' => $article->images
                ], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function saveImage($dest, $image, $model){
        $path = Storage::disk('public')->put($dest, $image);
        $this->generatePreview($dest, basename($path));
        $previewPath = $dest. '/previews/' . basename($path);
        $preview = '/storage/' . $dest. '/previews/' . basename($path);
//        $imageAssets = ['main' => 'storage/' . $path, 'preview' => $preview];
        $model->storage_link = '/storage/' . $path;
        $model->path = $path;
        $model->preview = $preview;
        $model->preview_path = $previewPath;
        $model->type = 'image';
//        $model->url = json_encode($imageAssets);
        $model->save();
    }
    public function deleteImage($model){
        Storage::disk('public')->delete($model->path);
        if($model->preview_path) {
            Storage::disk('public')->delete($model->preview_path);
        }
    }

}
