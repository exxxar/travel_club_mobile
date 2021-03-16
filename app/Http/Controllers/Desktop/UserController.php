<?php

namespace App\Http\Controllers\Desktop;

use App\ChatMessage;
use App\Conversation;
use App\Http\Controllers\Controller;
use App\Participant;
use App\User;
use App\UserInfo;
use App\UserTour;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function all()
    {
        $users = User::with(['info', 'tours', 'archive'])->orderBy('created_at', 'desc')->get();
        $deleted_users = User::onlyTrashed()->with(['info', 'tours', 'archive'])->orderBy('created_at', 'desc')->get();
        return response()->json([
            "users" => $users,
            "deleted_users" => $deleted_users,
        ], 200);
    }
    public function get($id)
    {
        $user = User::withTrashed()->whereId($id)->first();
        return response()->json([
            "user" => $user
        ], 200);
    }
    public function new(Request $request)
    {
//        $auth_user = User::whereId(Auth::user()->id)->with(['info'])->first();
        $auth_user = Auth::user();
        $info = $auth_user->info()->first();

        $user = User::create([
            'login' => '',
            'email' => $request->email,
            'password' =>Hash::make('TravelClub'),
            'role' => $request->role,
            'is_admin' => $request->is_admin,
            'is_manager' =>  $request->is_manager,
        ]);
        $userInfo = UserInfo::create([
            'UserId' => $user->id,
            'FullName' => $request->FullName,
            'FirstName' => $request->FirstName,
            'MiddleName' => $request->MiddleName,
            'LastName' => $request->LastName,
            'Phone' => $request->Phone,
            'ManagerId' => $request->ManagerId,
            'Promocode' => $request->Promocode
        ]);
        $userInfo->save();


        $conversation = null;
        $manager_title='Клиент '.$request->FullName;
        $client_title='Менеджер '.$info->FullName;
        $message_text= 'Здравствуйте, Вас приветствует турагенство TravelClub! Эта беседа с Вашим менеджером, здесь Вы сможете задать любые интересующие Вас вопросы.';

//        if ($auth_user->role == 'manager') {
//            $manager_title='Клиент '.$request->FullName;
//            $client_title='Менеджер '.$info->FullName;
//        }
        $new_user = User::where('role', $request->role)->whereId($user->id)->with(['info', 'tours', 'archive'])->first();

        if ($auth_user->role == 'admin') {
            if($request->role == 'admin')
            {
//                $manager_title='Aдминистратор '.$request->FullName;
//                $client_title='Aдминистратор '.$info->FullName;
                return response()->json([
                    "user" => $new_user,
                    "chat" => null,
                ], 200);
            }
            if($request->role == 'manager')
            {
                $manager_title='Mенеджер '.$request->FullName;
                $client_title='Aдминистратор '.$info->FullName;
                $message_text = 'Добро пожаловать в турагенство TravelClub!.';

            }
            if($request->role == 'client')
            {
                $client_title='Администратор '.$info->FullName;
                $message_text = 'Здравствуйте, Вас приветствует турагенство TravelClub! Эта беседа с администратором сайта, здесь Вы сможете задать любые интересующие Вас вопросы.';
            }

        }

        $conversation = Conversation::create([
            'manager_title' => $manager_title,
            'client_title' => $client_title,
            'creator_id' => $auth_user->id
        ]);
        $paticipant_manager = Participant::create([
            'conversation_id'=>$conversation->id,
            'user_id'=>$auth_user->id,
            'status'=>''
        ]);
        $paticipant_client = Participant::create([
            'conversation_id'=>$conversation->id,
            'user_id'=>$new_user->id,
            'status'=>''
        ]);
        $objDateTime = new DateTime('NOW');
        $first_message =  ChatMessage::create([
            'conversation_id' => $conversation->id,
            'sender_id' => $auth_user->id,
            'date' => $objDateTime,
            'message_text' => $message_text
        ]);

        $chat = Conversation::where('id', $conversation->id)->with(['messages', 'creator', 'participants'])->first();

        return response()->json([
            "user" => $new_user,
            "chat" => $chat,
        ], 200);

    }
    public function update($id, Request $request)
    {
//        $user = User::withTrashed()->findOrFail($request->id);
//        // "phone"
//        $user->update($request->only(["login"]));
        $param = $request->get("param");
        $value = $request->get("value");

        $user = User::withTrashed()->find($id);
        $user[$param] = $value;
        if($param == 'role') {
            if($value == 'manager') {
                $user->is_manager = true;
                $user->is_admin = false;
            }
            if($value == 'admin') {
                $user->is_manager = false;
                $user->is_admin = true;
            }
            if($value == 'client') {
                $user->is_manager = false;
                $user->is_admin = false;
            }
        }
        $user->save();

        return response()
            ->json([
                'user' => $user,
                "message" => "Изменения сохранены",
            ], 200);

    }
    public function delete($id)
    {
        $user = User::find($id);
//        $userInfo = UserInfo::where('UserId', $id)->get();
//        $userTour = UserTour::where('UserId', $id)->get();

        if (!is_null($user)) {
            UserInfo::where('UserId', $id)->delete();
            UserTour::where('UserId', $id)->delete();
            $user->delete();
        }

        return response()
            ->json([
                "message" => !is_null($user) ?
                    "Пользователь успешно удален" :
                    "Данный пользователь был уже удален ранее!"
            ],200);
    }

    public function restore($id)
    {
        $user = User::onlyTrashed()->where('id', $id)->restore();
        UserInfo::onlyTrashed()->where('UserId', $id)->restore();
        UserTour::onlyTrashed()->where('UserId', $id)->restore();
        return response()
            ->json([
                "user" => $user,
                "message" => "Пользователь восстановлен",
            ], 200);
    }
    public function forceDelete($id)
    {
        $user = User::withTrashed()->find($id);
//        $userInfo = UserInfo::withTrashed()->where('UserId', $user->id)->get();
//        $userTour = UserTour::withTrashed()->where('UserId', $user->id)->get();
        if (!is_null($user)) {
            UserInfo::where('UserId', $id)->forceDelete();
            UserTour::where('UserId', $id)->forceDelete();
            $user->forceDelete();
        }

        return response()
            ->json([
                "message" => "Пользователь успешно полностью удалён",
            ], 200);
    }

    public function clients()
    {
        $users = User::where('role', 'client')->with(['info', 'tours', 'archive'])->orderBy('created_at', 'desc')->get();
        foreach ($users as $client)
        {
            if($client->info['ManagerId'] != null)
            {
                $manager = User::where('role', 'manager')->whereId($client->info['ManagerId'])->with(['info'])->first();
                $client->info['ManagerName'] = $manager->info['FullName'];
                $client->info['ManagerPhone'] = $manager->info['Phone'];
            }
        }
        return response()->json([
            "users" => $users
        ], 200);
    }
    public function client($id)
    {
        $client = User::where('role', 'client')->whereId($id)->with(['info', 'tours', 'archive'])->first();
        if($client->info['ManagerId'] != null)
        {
            $manager = User::where('role', 'manager')->whereId($client->info['ManagerId'])->with(['info'])->first();
            $client->info['ManagerName'] = $manager->info['FullName'];
            $client->info['ManagerPhone'] = $manager->info['Phone'];
        }

        return response()->json([
            "client" => $client
        ], 200);
    }

    public function managers()
    {
        $users = User::where('role', 'manager')->with(['info', 'isManagerFor'])->orderBy('created_at', 'desc')->get();
        foreach ($users as $user) {
            $user->isManagerForCount = $user->isManagerFor->count();
        }
        return response()->json([
            "users" => $users
        ], 200);
    }
    public function manager($id)
    {
        $manager = User::where('role', 'manager')->whereId($id)->with(['info', 'isManagerFor'])->orderBy('created_at', 'desc')->first();
        $manager->isManagerForCount = $manager->isManagerFor->count();
//        $manager = User::findOrFail($client->info->ManagerId);
        return response()->json([
            "manager" => $manager
        ], 200);
    }
    public function statistics()
    {
        $managers = User::withoutTrashed()->where('role', 'manager')->count();
        $clients = User::withoutTrashed()->where('role', 'client')->count();
        $admins = User::withoutTrashed()->where('role', 'admin')->count();
        return response()->json([
            "managers" => $managers,
            "clients" => $clients,
            "admins" => $admins,
        ], 200);
    }
}
