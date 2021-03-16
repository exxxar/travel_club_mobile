<?php

namespace App\Http\Controllers\Desktop;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserTourStoreRequest;
use App\Http\Requests\UserTourUpdateRequest;
use App\Http\Resources\UserTour as UserTourResource;
use App\Http\Resources\UserTourCollection;
use App\UserTour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserTourController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \App\Http\Resources\UserTourCollection
     */
    public function index(Request $request)
    {
        $userTours = UserTour::all();

        return new UserTourCollection($userTours);
    }

    /**
     * @param \App\Http\Requests\UserTourStoreRequest $request
     * @return \App\Http\Resources\UserTour
     */
    public function store(Request $request)
    {
        $userTour = json_decode($request->UserTour, true);
//        array_map('unlink', glob(storage_path("app/public/users/*")));
//        $user_path = Hash::make('user'.$userTour['UserId']);
        $user_path = 'user'.$userTour['UserId'];
        $path='/users/'.$user_path;
        if(!Storage::exists($path)) {
            Storage::makeDirectory($path);
        }
        $TourInfo = $userTour['TourInfo'];
        $new_files = [];
        $files = $request->file('files');
        if ($request->hasFile('files')) {
            foreach ($files as $key=>$file) {
//                $name = Hash::make($file->getClientOriginalName());
//                $ext = $file->getClientOriginalExtension();
//                $file->storeAs("/public", $path.'/'.$name.'.'.$ext);
                $new_file = (object)[];
                $new_file->name = $TourInfo['files'][$key]['name'];
                $new_file->type = $TourInfo['files'][$key]['type'];
                $new_file->date = $TourInfo['files'][$key]['date'];

                if($TourInfo['files'][$key]['type'] == 'audio'){
                    $name = Crypt::encryptString($file->getClientOriginalName());
                    $name .= ".mp3";
                    $file->storeAs("/public", $path.'/'.$name);
                    $new_file->path = '/storage/app/public'.$path.'/'.$name;
                }
                else{
                    $name = Crypt::encryptString($file->getClientOriginalName());
                    $ext = $file->getClientOriginalExtension();
                    $file->storeAs("/public", $path.'/'.$name.'.'.$ext);
                    $new_file->path = '/storage/app/public'.$path.'/'.$name.'.'.$ext;
                }

//                $new_file->path = '/storage'.$path.'/'.$name.'.'.$ext;
                array_push($new_files, $new_file );
            }
        }

        $TourInfo['files'] = $new_files;
        $userTour = UserTour::create([
//            $request->all()
            'UserId' => $userTour['UserId'],
//            'TourId' => '',
            'TourInfo' => $TourInfo,
            'StartAt' => $userTour['StartAt'],
            'EndAt' =>  $userTour['EndAt'],
            'Comment' =>  $userTour['Comment'],
        ]);

//        return new UserTourResource($userTour);
        return response()
            ->json([
                "message" => "success",
                "status" => 200,
                'tour' => $userTour
            ]);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \App\UserTour $userTour
     * @return \App\Http\Resources\UserTour
     */
    public function show(Request $request, UserTour $userTour)
    {
        return new UserTourResource($userTour);
    }

    public function save($id, Request $request)
    {
        $param = $request->get("param");
        $value = $request->get("value");

        $tour = UserTour::withTrashed()->find($id);
        $tourInfo = $tour->TourInfo;
        $tourInfo[$param] = $value;

        $tour->save();

        return response()
            ->json([
                'tour' => $tour,
                "message" => "Изменения сохранены",
            ], 200);

    }

    public function saveTourInfo($id, Request $request)
    {
        $param = $request->get("param");

        $tour = UserTour::withTrashed()->find($id);

        if($param != 'files')
        {
            $value = $request->get("value");
            $tourInfo = $tour->TourInfo;
            $tourInfo[$param] = $value;
            $tour->TourInfo = $tourInfo;
        }
        else {
            $user_path = 'user'.$tour->UserId;
            $path='/users/'.$user_path;
            if(!Storage::exists($path)) {
                Storage::makeDirectory($path);
            }
            if ($request->hasFile('files')) {
                $tourInfo = $request->get("TourInfo");
                $files = $request->file('files');
                $action = $request->get("action");
                foreach ($files as $key=>$file) {
                    if ($action == 1) {
                        $new_file = (object)[];
                        $new_file->name = $file['name'];
                        $new_file->type = $file['type'];
                        $new_file->date = $file['date'];
                        $name = Crypt::encryptString($file->getClientOriginalName());
                        $ext = $file->getClientOriginalExtension();
                        $file->storeAs("/public", $path . '/' . $name . '.' . $ext);
                        $new_file->path = '/storage/app/public' . $path . '/' . $name . '.' . $ext;
                        array_push($tourInfo['files'], $new_file);
                    } else {
                        $rest = substr($file['path'], 8);
                        Storage::delete($rest);
                    }
                }
                $tour->TourInfo = $tourInfo;
            }
        }

        $tour->save();

        return response()
            ->json([
                'tour' => $tour,
                "message" => "Изменения сохранены",
            ], 200);

    }

    /**
     * @param \App\Http\Requests\UserTourUpdateRequest $request
     * @param \App\UserTour $userTour
     * @return \App\Http\Resources\UserTour
     */
    public function update(Request $request)
    {
//        $userTour->update($request->validated());
        $editUserTour = json_decode($request->UserTour, true);
        $userTour = UserTour::findOrFail($editUserTour['id']);
        $TourInfo = $editUserTour['TourInfo'];
//        $user_path = Crypt::encryptString('user'.$editUserTour['UserId']);
        $user_path = 'user'.$editUserTour['UserId'];
        $path='/users/'.$user_path;
        if(!Storage::exists($path)) {
            Storage::makeDirectory($path);
        }
        $files = $request->file('new_files');
        if ($request->hasFile('new_files')) {
            foreach ($files as $key=>$file) {
                $new_file = (object)[];
                $new_file->name = $editUserTour['new_files'][$key]['name'];
                $new_file->type = $editUserTour['new_files'][$key]['type'];
                $new_file->date = $editUserTour['new_files'][$key]['date'];
                if($editUserTour['new_files'][$key]['type'] == 'audio'){
                    $name = Crypt::encryptString($file->getClientOriginalName());
                    $name .= ".mp3";
                    $file->storeAs("/public", $path.'/'.$name);
                    $new_file->path = '/storage/app/public'.$path.'/'.$name;
                }
                else{
                    $name = Crypt::encryptString($file->getClientOriginalName());
                    $ext = $file->getClientOriginalExtension();
                    $file->storeAs("/public", $path.'/'.$name.'.'.$ext);
                    $new_file->path = '/storage/app/public'.$path.'/'.$name.'.'.$ext;
                }


//                $new_file->path = '/storage'.$path.'/'.$name.'.'.$ext;
//                $new_file->path = Storage::url($name.'.'.$ext);
                array_push($TourInfo['files'], $new_file );
            }
        }
        if(count($TourInfo['delete_files']))
        {
            foreach ($TourInfo['delete_files'] as $file) {
                $rest = substr($file['path'], 8);
                Storage::delete($rest);
            }
        }

//        $userTour->update($request->all());
        $userTour->update([
//            $request->all()
            'UserId' => $editUserTour['UserId'],
//            'TourId' => '',
            'TourInfo' => $TourInfo,
            'StartAt' => $editUserTour['StartAt'],
            'EndAt' => $editUserTour['EndAt'],
            'Comment' => $editUserTour['Comment'],
        ]);
        return response()->json([
            "tour" => $userTour
        ], 200);
//        return new UserTourResource($userTour);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \App\UserTour $userTour
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
//        $userTour->delete();
        $userTour = UserTour::findOrFail($id);
        $TourInfo = $userTour->TourInfo;
        if(count($TourInfo->files))
        {
            foreach ($TourInfo->files as $file) {
                $rest = substr($file->path, 8);
                Storage::delete($rest);
            }
        }

        $userTour->delete();

        return response()->noContent(200);
    }
    public function updateArchive(Request $request) {
        $userTour = UserTour::findOrFail($request->id);
        $userTour->Archive = $request->Archive;
        $userTour->save();
        return response()->json([
            "tour" => $userTour
        ], 200);
    }
    public function updateReview(Request $request) {
        $userTour = UserTour::findOrFail($request->id);
        $userTour->Comment = $request->Comment;
        $userTour->save();
        return response()->json([
            "tour" => $userTour
        ], 200);
    }
    public function files() {
        if(Auth::check()) {
            $files=[];
            $userTours = UserTour::where('UserId', Auth::user()->id)->get();
            foreach ($userTours as $userTour) {
                $TourInfo = $userTour->TourInfo;
                if (count($TourInfo['files'])) {
                    foreach ($TourInfo['files'] as $file) {
                        array_push($files, $file);
                    }
                }
            }
            return response()->json([
                "files" => $files
            ], 200);
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    public function forceDelete($id)
    {
        $userTour = UserTour::withTrashed()->find($id);
        if (!is_null($userTour)) {
            $TourInfo = $userTour->TourInfo;
            if(count($TourInfo->files))
            {
                foreach ($TourInfo->files as $file) {
                    $rest = substr($file->path, 8);
                    Storage::delete($rest);
                }
            }
            $userTour->forceDelete();
        }

        return response()
            ->json([
                "message" => "Тур пользователя успешно полностью удалён",
            ], 200);
    }
}
