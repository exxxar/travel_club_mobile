<?php

namespace App\Http\Controllers\Desktop;

use App\Http\Resources\UserDocumentCollection;
use App\Http\Resources\UserDocumentResource;
use App\User;
use App\UserDocument;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;

class UserDocumentController extends Controller
{
    public function all(Request $request)
    {
        $key='user_id';
        if(request()->get('dashboard_user_id'))
        {
            $key = Auth::user()->hasRole('manager') ? 'manager_id' : 'user_id';
        }

        $userDocuments = UserDocument::when(request()->get('user_id'), function (Builder $query) {
            $query->where('user_id', request()->get('user_id'));
        })
            ->when(request()->get('manager_id'), function (Builder $query) {
                $query->where('manager_id', request()->get('manager_id'));
            })
            ->when(request()->get('dashboard_user_id'), function (Builder $query, string $key) {
                $query->where($key, request()->get('dashboard_user_id'));
            })
            ->when(request()->get('user_tour_id'), function (Builder $query) {
                $query->where('user_tour_id', request()->get('user_tour_id'));
            })
            ->when(request()->get('limit'), function (Builder $query) {
                $query->limit(request()->get('limit'));
            })
            ->orderBy('created_at', 'desc');
        return UserDocumentResource::collection($userDocuments->paginate(request()->get('limit',20)));
//        return new UserDocumentCollection($userDocuments->paginate(request()->get('limit',20)));
    }
    public function get($id)
    {
        $userDocument = UserDocument::find($id);
        return response()->json([
            "userDocument" => $userDocument
        ], 200);
    }
    public function new(Request $request)
    {
//        $userDocument = UserDocument::create([$request->all()]);
        $path = 'public/user_documents/';
        $userId = $request->get('user_id');
        $userName = '';
        if($userId)
        {
            $user = User::find($userId);
            $userName = implode('_', [$user->last_name, $user->first_name, $user->middle_name]);
        }
        if ($request->hasFile('files')) {
            $files = $request->file('files');
            foreach ($files as $key=>$file) {
                $time = Carbon::now();
                $timeFormat = $time->format('Y-m-d_H-s-i');
                if(!$userName) {
                    $userName = $file->getClientOriginalName();
                }
                $ext = $file->getClientOriginalExtension();
                $fileName = $timeFormat . $userName . '.'. $ext;
                Storage::disk('local')->put($path . $fileName, $file, 'public');
                UserDocument::create([
                    'user_id'=> $request->get('user_id', null),
                    'manager_id'=> Auth::id(),
                    'user_tour_id'=>  $request->get('user_tour_id', null),
                    'title' => $fileName,
                    'type' => $ext,
                    'storage_link' => 'storage/user_documents/'.$fileName,
                    'path' => $path.$fileName,
                ]);
            }
        }
        return response()->json([
//            "userDocument" => $userDocument,
        'message' => 'Файлы сохранены'
        ], 201);

    }
    public function update($id, Request $request)
    {
        $param = $request->get("param");
        $value = $request->get("value");

        $userDocument = UserDocument::find($id);
        $userDocument[$param] = $value;
        $userDocument->save();

        return response()
            ->json([
                'userDocument' => $userDocument,
                "message" => "Изменения сохранены",
            ], 201);

    }
    public function delete($id)
    {
        $userDocument = UserDocument::find($id);
        Storage::disk('local')->delete($userDocument->path);
        $userDocument->delete();

        return response()
            ->json([
                "message" => "Документ успешно удален"
            ],201);
    }

    public function download(Request $request) {
//        return Storage::download($request->path);
        return response()->download($request->path);
    }

    public function getAuthFile(Request $request) {
        $userDocument = UserDocument::find($request->id);
        if(Auth::user()->hasRole('user'))
        {
            if(Auth::id() === $userDocument->user_id)
            {
                return Storage::disk('local')->get($userDocument->path);
            }
        }
        if(Auth::user()->hasRole(['manager', 'admin']))
        {
            return Storage::disk('local')->get($userDocument->path);
        }
        return 'Неавторизованый запрос';
    }
}
