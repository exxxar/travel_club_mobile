<?php

namespace App\Http\Controllers;

use App\Article;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax())
            return Article::orderBy("id", "desc")->paginate(20);

        return view("admin.pages.news-admin");
    }

    public function isAuth(Request $request)
    {
        $code = env("ADMIN_NEWS_CODE") ?? null;

        if (is_null($code))
            return response()->json(["is_auth" => false]);

        if ($code !== $request->code)
            return response()->json(["is_auth" => false]);

        return response()->json(["is_auth" => true]);
    }

    public function getAllNews()
    {
        return response()->json(Article::where("publish_at", "<=", Carbon::now("+3:00"))
            ->orderBy("id", "desc")
            ->take(20)
            ->skip(0)
            ->get());
    }

    public function getSingleNews($id)
    {

        $article = Article::where("id", $id)
            ->first();
        if (!is_null($article))
            return response()->json($article);
        return response()->noContent();

    }

    public function getLatestNews()
    {
        return response()->json(
            Article::where("publish_at", "<=", Carbon::now("+3:00"))->orderBy("id", "desc")->first()
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Article::create($request->all());

        return response()->noContent();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Article $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Article $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Article $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

        $article = Article::find($id);
        $article->update($request->all());

        return response()->noContent();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Article $article
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Article::find($id)->delete($id);

        return response()->noContent();
    }
}
