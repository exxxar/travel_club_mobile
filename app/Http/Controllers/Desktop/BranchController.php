<?php

namespace App\Http\Controllers\Desktop;

use App\Branch;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    //
    public function all()
    {
        $branches = Branch::orderBy('created_at', 'desc')->get();
        return response()->json([
            "branches" => $branches,
        ], 200);
    }
    public function get($id)
    {
        $branch = Branch::find($id);
        return response()->json([
            "branch" => $branch
        ], 200);
    }
    public function new(Request $request)
    {
//        $branch = Branch::create([
//            'city' => $request->city,
//            'country' => $request->country,
//
//        ]);
        $branch = Branch::create([$request->all()]);

        return response()->json([
            "branch" => $branch,
        ], 200);

    }
    public function update($id, Request $request)
    {
        $param = $request->get("param");
        $value = $request->get("value");

        $branch = Branch::find($id);
        $branch[$param] = $value;
        $branch->save();

        return response()
            ->json([
                'branch' => $branch,
                "message" => "Изменения сохранены",
            ], 200);

    }
    public function delete($id)
    {
        $branch = Branch::find($id);
        $branch->delete();

        return response()
            ->json([
                "message" => "Филиал успешно удален"
            ],200);
    }
}
