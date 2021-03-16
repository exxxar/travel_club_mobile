<?php

namespace App\Http\Controllers\Desktop;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserInfoStoreRequest;
use App\Http\Requests\UserInfoUpdateRequest;
use App\Http\Resources\UserInfo as UserInfoResource;
use App\Http\Resources\UserInfoCollection;
use App\UserInfo;
use Illuminate\Http\Request;

class UserInfoController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function all(Request $request)
    {
        $userInfos = UserInfo::all();

        return response()
            ->json([
                'infos' => $userInfos
            ]);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $userInfo = UserInfo::create($request->all());
        return response()
            ->json([
                "message" => "success",
                "status" => 200,
                'info' => $userInfo
            ]);
    }

    /**
     * @param integer $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $userInfo = UserInfo::findOrFail($id);
        return response()
            ->json([
                'info' => $userInfo
            ]);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $userInfo = UserInfo::whereId($request->id)->first();
        $userInfo->update($request->all());
        $userInfo->save();
        return response()
            ->json([
                "message" => "success",
                "status" => 200,
                'info' => $userInfo
            ]);
    }

    public function save($id, Request $request)
    {
        $param = $request->get("param");
        $value = $request->get("value");


        $userInfo = UserInfo::withTrashed()->find($id);
        $userInfo[$param] = $value;
        $userInfo->save();

        return response()
            ->json([
                'info' => $userInfo,
                "message" => "Изменения сохранены",
            ], 200);

    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \App\UserInfo $userInfo
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $userInfo = UserInfo::findOrFail($id);
        $userInfo->delete();

        return response()->noContent(200);
    }
}
