<?php

namespace App\Http\Controllers\Desktop;

use App\ChatMessage;
use App\Conversation;
use App\Http\Controllers\Controller;
use App\Participant;
use App\User;
use App\UserInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Telegram\Bot\Laravel\Facades\Telegram;

class ChatController extends Controller
{
    public function all()
    {
//        $user=User::whereId(Auth::user()->id)->with(['info', 'conversations', 'isParticipant'])->first();
//        $isParticipant = $user->isParticipant;
//        $chats =[];
//        $conversations =[];
//        if($isParticipant != null) {
////            $unique = $isParticipant->unique('conversation_id');
//            $unique=[];
//            foreach ($isParticipant as $participant)
//            {
//                array_push($unique, $participant->conversation_id);
//            }
//            $conversations = Conversation::whereIn('id', $unique )->get();
////        $conversations = $user->conversations;
////        $conversations = $user->conversations();
//            foreach ($conversations as $conversation)
//            {
////            $messages=$conversation->messages;
////            $messages=$conversation->messages();
//                $conv = Conversation::whereId($conversation->id)->with(['messages'])->first();
//                $chat = (object)[];
////                if(property_exists ($conv,'messages')) {
////                    $messages=$conv->messages;
//                    $messages=[];
//                    foreach ($conv->messages as $message)
//                    {
//                        $mes=ChatMessage::whereId($message->id)->with(['senderInfo'])->first();
////                        $message=$mes;
//                        array_push($messages,$mes);
////                        $message->user->info = UserInfo::where('UserId', $message->user->id )->first();
////                        $message->info = UserInfo::where('UserId', $message->user->id )->first();
////                $message->user = ChatMessage::whereId($message->id)->with(['user'])->get();
////                $message->user->info = $message->user->info();
//                    }
//                    $conv->messages =$messages;
////                    $chat->messages =[];
//                $chat->id = $conv->id ;
//                $chat->manager_title = $conv->manager_title ;
//                $chat->client_title = $conv->client_title ;
//                $chat->creator_id = $conv->creator_id;
//                $chat->messages =$messages;
//
////                }
////                else {
////                    $conv->messages = [];
////                }
//
//
////            $participants = $conversation->participants;
////            $participants = $conversation->participants();
////            foreach ($participants as $participant)
////            {
////                $participant->info = $participant->info();
////            }
//
////            $chat=(object)[];
////            $chat->messages = $messages;
////            $chat->participants = $participants;
//                array_push($chats,$chat);
//            }
//        }
//
////        $unique->values()->all();
////        foreach ( $isParticipant as $item) {
////
////        }
////        $messages = ChatMessage::orderBy('created_at', 'desc')->get();
        $user= Auth::user();
        $participants = $user->isParticipant()->get();
        $users_ids =[];
        $chats_ids =[];
        foreach ( $participants as $participant)
        {
            $item = Participant::where('conversation_id', $participant->conversation_id)->where('user_id', '!=', $user->id)->first();
            array_push($users_ids, $item->user_id);
            array_push($chats_ids, $participant->conversation_id);
        }
        array_push($users_ids, $user->id);
        $chats = Conversation::whereIn('id', $chats_ids)->with(['messages', 'creator', 'participants'])->get();
        $users = User::whereNotIn('id', $users_ids)->with(['info'])->get();
        return response()->json([
            "chats" => $chats,
            "user" => $user,
            'users' => $users,
            'users_ids' => $users_ids,
            'isParticipant'=> $participants
        ], 200);
    }
    public function get($id)
    {
        $message = ChatMessage::whereId($id)->first();
        return response()->json([
            "message" => $message
        ], 200);
    }
    public function new(Request $request)
    {
        $message = json_decode($request->message, true);

        $user=Auth::user();
        $user_path = Hash::make('user'.$user->id);
        $path='/users/'.$user_path;
        if(!Storage::exists($path)) {
            Storage::makeDirectory($path);
        }
        $new_files = [];
        $data_files = $request->file('files');
        if ($request->hasFile('files')) {
            foreach ($data_files as $key=>$file) {
//                $name = Hash::make($file->getClientOriginalName());
//                $ext = $file->getClientOriginalExtension();
//                $file->storeAs("/public", $path.'/'.$name.'.'.$ext);
                $new_file = (object)[];
                $new_file->name = $message['files'][$key]['name'];
                $new_file->type = $message['files'][$key]['type'];
                $new_file->date = $message['files'][$key]['date'];
//                $new_file->path = '/storage'.$path.'/'.$name.'.'.$ext;
                if($message['files'][$key]['type'] == 'audio'){
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
                array_push($new_files, $new_file );
            }
        }
////        $message = ChatMessage::create($request->only(['user_id', 'name', 'phone', 'email','message_type','message', 'file_path']));
        $message['files'] = $new_files;
        $mes = ChatMessage::create([
            'conversation_id' => $message['conversation_id'],
            'sender_id' => $message['sender_id'],
            'message_text'=> $message['message_text'],
            'files'=> $message['files'],
            'type' => $message['type'],
        ]);

//        $mes = ChatMessage::create([
//            'conversation_id' => $message->conversation_id,
//            'sender_id' => $message->sender_id,
//            'message_text'=> $message->message_text,
//            'files'=> $message->files,
//            'type' => $message->type,
//        ]);

//        $message = ChatMessage::create([
//            'conversation_id' => $request->conversation_id,
//            'sender_id' => $request->sender_id,
//            'message_text'=> $request->message_text,
////            'files'=> $request->files
//        ]);
        return response()->json([
            "message" => $mes,
        ], 200);
    }
    public function update(Request $request)
    {
        $message = ChatMessage::findOrFail($request->id);
        $message->update($request->only(['user_id', 'name', 'phone', 'email','message_type','message', 'file_path']));
        return response()->json([
            "message" => $message
        ], 200);
    }
    public function delete($id)
    {
        $message = ChatMessage::findOrFail($id);
//        if($message->message_type == 'Голосовая заявка')
//        {
//            Storage::delete($message->file_path);
//        }
        $message->delete();
        return '';
    }
    public function loadClientChat(Request $request)
    {
        $user= Auth::user();
        $participants = $user->isParticipant()->get();
//        $participants = Participant::where('user_id',$user->id)->first();
        $id=$participants[0]['conversation_id'];
        $chat = Conversation::where('id', $id)->with(['messages', 'creator', 'participants'])->first();
        return response()->json([
            "chat" => $chat,
//            'participants' => $participants,
//            'id' => $id
        ], 200);
    }
    public function newChat(Request $request)
    {
        $user= Auth::user();
        $info = $user->info()->first();
        $manager_title='Клиент '.$request->name;
        $client_title='Менеджер '.$info->FullName;
        if($user->role = 'manager'){
            if($request->user_id == 1){
                $manager_title='Администратор '.$request->name;
            }
        }
        if($user->role = 'admin'){
            $client_title='Администратор '.$info->FullName;
            $tmp = User::whereId($request->user_id)->first();
            if($tmp->role == 'manager'){
                $manager_title='Менеджер '.$request->name;
            }
        }
        $conversation = Conversation::create([
            'manager_title' => $manager_title,
            'client_title' => $client_title,
            'creator_id' =>$user->id,
        ]);
        $paticipant_manager = Participant::create([
            'conversation_id'=>$conversation->id,
            'user_id'=> $user->id,
            'status'=>''
        ]);
        $paticipant_client = Participant::create([
            'conversation_id'=>$conversation->id,
            'user_id'=> $request->user_id,
            'status'=>''
        ]);
        $chat = Conversation::where('id', $conversation->id)->with(['messages', 'creator', 'participants'])->first();
        return response()->json([
            "chat" => $chat,
        ], 200);
    }
}
