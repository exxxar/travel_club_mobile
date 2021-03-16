<?php

namespace App\Http\Controllers\Desktop;

use Allanvb\LaravelSemysms\Facades\SemySMS;
use App\ChatMessage;
use App\Conversation;
use App\Events\SendSmsEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserTicket;
use App\Message;
use App\Participant;
use App\PhonesImport;
use App\User;
use App\UserInfo;
use App\UserTour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;
use Telegram\Bot\Laravel\Facades\Telegram;

class ClientController extends Controller
{
    public function all()
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
    public function get($id)
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
    public function new(Request $request)
    {
        $user = User::create([
            'login' => '',
            'password' =>'',
            'role' => 'client',
            'id_admin' => 0
        ]);
        $user->login = "TravelClubClient-".$user->id;
        $user->password = Hash::make($user->login);
        $user->save();
        $userInfo = UserInfo::create([
            'UserId' => $user->id,
            'FullName' => $request->FullName,
            'FirstName' => $request->FirstName,
            'MiddleName' => $request->MiddleName,
            'LastName' => $request->LastName,
            'Phone' => $request->Phone,
            'ManagerId' => $request->ManagerId
        ]);
        $userInfo->save();
        $new_user = User::where('role', 'client')->whereId($user->id)->with(['info', 'tours', 'archive'])->first();
        $auth_user = User::whereId(Auth::user()->id)->with(['info'])->first();
        $info = $auth_user->info;
        $conversation = null;
        if ($auth_user->role == 'manager') {
            $conversation = Conversation::create([
                'manager_title' => 'Беседа с клиентом '.$request->FullName.' ('.$new_user->login.')',
                'client_title' => 'Беседа с менеджером '.$info->FullName.' ('.$auth_user->login.')',
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
                'message_text' => 'Здравствуйте, Вас приветствует турагенство TravelClub! Эта беседа с Вашим менеджером, здесь Вы сможете задать любые интересующие Вас вопросы.'
            ]);
        }
        else {
            $conversation = Conversation::create([
                'manager_title' => 'Беседа с клиентом '.$request->FullName.' ('.$user->login.')',
                'client_title' => 'Беседа с администратором сайта',
                'creator_id' => 0
            ]);
            $paticipant_manager = Participant::create([
                'conversation_id'=>$conversation->id,
                'user_id'=> 0,
                'status'=>''
            ]);
            $paticipant_client = Participant::create([
                'conversation_id'=>$conversation->id,
                'user_id'=>$user->id,
                'status'=>''
            ]);
            $objDateTime = new DateTime('NOW');
            $first_message =  ChatMessage::create([
                'conversation_id' => $conversation->id,
                'sender_id' => 0,
                'date' => $objDateTime,
                'message_text' => 'Здравствуйте, Вас приветствует турагенство TravelClub! Эта беседа с администратором сайта, здесь Вы сможете задать любые интересующие Вас вопросы.'
            ]);
        }
        return response()->json([
            "user" => $new_user,
            "conversation" => $conversation,
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
        $userTour = UserTour::where('UserId', $id)->delete();
        //$userTicket = UserTicket::where('UserId', $id)->delete();
        //$userHotel = UserHotel::where('UserId', $id)->delete();
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
    public function getClientChat() {
        $user=User::whereId(Auth::user()->id)->with(['info', 'conversations', 'isParticipant'])->first();
        $conversation = Conversation::where('id', $user->isParticipant[0]['id'])->first();
        $messages = ChatMessage::where('conversation_id',  $conversation->id)->get();
        $conversation->messages=$messages;
    }

}
