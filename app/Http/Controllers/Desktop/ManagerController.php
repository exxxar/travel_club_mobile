<?php

namespace App\Http\Controllers\Desktop;

use Allanvb\LaravelSemysms\Facades\SemySMS;
use App\ChatMessage;
use App\Conversation;
use App\Events\SendSmsEvent;
use App\Http\Controllers\Controller;
use App\Message;
use App\Participant;
use App\PhonesImport;
use App\User;
use App\UserInfo;
use App\UserTour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;
use Telegram\Bot\Laravel\Facades\Telegram;

class ManagerController extends Controller
{
    public function all()
    {
        $users = User::where('role', 'manager')->with(['info', 'isManagerFor'])->orderBy('created_at', 'desc')->get();
        foreach ($users as $user) {
            $user->isManagerForCount = $user->isManagerFor->count();
        }
        return response()->json([
            "users" => $users
        ], 200);
    }
    public function get($id)
    {
        $manager = User::where('role', 'manager')->whereId($id)->with(['info', 'isManagerFor'])->orderBy('created_at', 'desc')->first();
        $manager->isManagerForCount = $manager->isManagerFor->count();
        return response()->json([
            "manager" => $manager
        ], 200);
    }
    public function update(Request $request)
    {
        $user = User::findOrFail($request->id);
        $user->update($request->only(["login"]));
        return response()->json([
            "user" => $user
        ], 200);
    }
    public function delete($id)
    {
        $user = User::findOrFail($id);
        $userInfo = UserInfo::where('UserId', $id)->delete();
        $userParticipant = Participant::where('user_id', $id)->get();
        $conversations_ids = [];
        foreach ($userParticipant as $participant)
        {
            array_push($conversations_ids, $participant->conversation_id);
        }
        $userChatMessages = ChatMessage::whereIn('conversation_id', $conversations_ids)->delete();
        $userParticipant = Participant::whereIn('conversation_id', $conversations_ids)->delete();
        $userConversation = Conversation::whereIn('id', $conversations_ids)->delete();
        $user->delete();
        return '';
    }
    public function clients()
    {
        $users = User::where('role', 'client')->with(['info', 'tours', 'archive'])->orderBy('created_at', 'desc')->get();
        $deleted_users = User::onlyTrashed()->where('role', 'client')->with(['info', 'tours', 'archive'])->orderBy('created_at', 'desc')->get();
        foreach ($users as $client)
        {
            if($client->info['ManagerId'] != null)
            {
                $manager = User::withTrashed()->where('role', 'manager')->whereId($client->info['ManagerId'])->with(['info'])->first();
                $client->info['ManagerName'] = $manager->info['FullName'];
                $client->info['ManagerPhone'] = $manager->info['Phone'];
            }
        }
        foreach ($deleted_users as $client)
        {
            if($client->info['ManagerId'] != null)
            {
                $manager = User::withTrashed()->where('role', 'manager')->whereId($client->info['ManagerId'])->with(['info'])->first();
                $client->info['ManagerName'] = $manager->info['FullName'];
                $client->info['ManagerPhone'] = $manager->info['Phone'];
            }
        }
        return response()->json([
            "users" => $users,
            "deleted_users" => $deleted_users,
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
        return response()->json([
            "manager" => $manager
        ], 200);
    }
    public function statistics()
    {
        $managers = User::where('role', 'manager')->count();
        $clients = User::where('role', 'client')->count();
        return response()->json([
            "managers" => $managers,
            "clients" => $clients
        ], 200);
    }
    public function uploadPhones(Request $request)
    {
        $excel_phones = Excel::toArray(new PhonesImport, $request->file);
        $phones = array();
        foreach ($excel_phones[0] as $phone) {
            array_push($phones, $phone[0]);
        }

        return response()
            ->json([
                "message" => "Телефоны успешно загружены",
                'phones' => $phones,
                "status" => 200,
            ]);
    }
    public function preparePhone($phone)
    {
        $vowels = array("(", ")", "-", " ");
        return str_replace($vowels, "", $phone ?? '');
    }
    public function sendSmsMessage(Request $request)
    {
        $phones =array();
        foreach ($request->phones as $phone) {
            $tmp = $this->preparePhone($phone);
            array_push($phones, $tmp);
        }
//        SemySMS::sendMultiple([
//            'to' => $phones,
//            'text' => $request->message,
//            'device_id' => 'active'
//        ]);

//        $messages = SemySMS::multiple();

        foreach ($phones as $phone) {
            event(new SendSmsEvent($phone, $request->message));
//            $messages->addRecipient([
//                'to' => $phone,
//                'text' => $request->message,
//            ]);

        }
//        $messages->send();


        return response()
            ->json([
                "message" => "Сообщения отправлены",
                "status" => 200,
                'phones' => $phones,
            ]);
    }
    public function changeClientPassword(Request $request)
    {
        $user = User::find($request->id);
        $user->password = bcrypt($request->password);
        $user->save();

        return response()
            ->json([
                "message" => "success",
                "status" => 200,
            ]);
    }
    public function sendAuthCode(Request $request)
    {
        $user = User::find($request->id);
        SemySMS::sendOne([
            'to' => $user->phone,
            'text' => "Ваш пароль для доступа к ресурсу https://travel-club.tours: $user->code"
        ]);
        return response()
            ->json([
                "message" => "success",
                "status" => 200,
            ]);
    }
    public function getPhones(Request $request)
    {
        $users = User::where('role', 'client')->with(['info'])->get();
        $phones = array();
        foreach ($users as $user) {
            array_push($phones, $user->info->Phone);
        }

        return response()
            ->json([
                "message" => "Телефоны успешно подгружены",
                'phones' => $phones,
                "status" => 200,
            ]);
    }

}
