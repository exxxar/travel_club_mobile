<?php

namespace App\Http\Controllers\Desktop;

use App\Classes\Telegram;
use App\Http\Controllers\Controller;
use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class MessageController extends Controller
{
    use Telegram;

    public function all()
    {
        $messages = Message::withoutTrashed()->orderBy('created_at', 'desc')->get();
        $deleted_messages = Message::onlyTrashed()->orderBy('created_at', 'desc')->get();
        //        foreach ($messages as $message)
        //        {
        //            $expand = (object)[];
        //            if( $message->message_type == 'Голосовая заявка')
        //            {
        //                $expand->message = '';
        //                $expand->file_path = $message->file_path;
        //            }
        //            if( $message->message_type == 'Обратная связь') {
        //                $expand->message = $message->message;
        //            }
        //            $message->expand=$expand;
        //        }
        return response()->json([
            "messages" => $messages,
            "deleted_messages" => $deleted_messages
        ], 200);
    }
    public function get($id)
    {
        $message = Message::whereId($id)->first();
        return response()->json([
            "message" => $message
        ], 200);
    }
    public function new(Request $request)
    {
//        $message = Message::create($request->only(['user_id', 'name', 'phone', 'email','message_type','message', 'file_path']));
        $message = Message::create($request->all());
        return response()->json([
            "message" => $message
        ], 200);
    }
    public function update(Request $request)
    {
        $message = Message::findOrFail($request->id);
//        $message->update($request->only(['user_id', 'name', 'phone', 'email','message_type','message', 'file_path']));
        $message->update($request->all());
        return response()->json([
            "message" => $message
        ], 200);
    }
    public function delete($id)
    {
        $message = Message::findOrFail($id);
        if($message->message_type == 'Голосовая заявка')
        {
            Storage::delete($message->file_path);
        }
        $message->delete();
        return response()
            ->json([
                "message" => "Сообщение успешно удалено",
            ], 200);
    }
    public function restore($id)
    {
        $message = Message::onlyTrashed()->where('id', $id)->restore();
        return response()
            ->json([
                "mes" => $message,
                "message" => "Сообщение восстановлено",
            ], 200);
    }
    public function forceDelete($id)
    {
        $message = Message::withTrashed()->find($id);
        if (!is_null($message)) {
            $message->forceDelete();
        }
        return response()
            ->json([
                "message" => "Сообщение успешно полностью удалено",
            ], 200);
    }
    public function sendCallback(Request $request)
    {
        $name = $request->get("name") ?? '';
        $phone = $request->get("phone") ?? '';
        $message = $request->get("message") ?? '';
        $question_type = $request->get("question_type") ?? '';

       $this->sendMessage(sprintf("<b>Обратная связь</b>\n<i>%s</i>\n<i>%s</i>\n<b>Тип вопроса:</b> %s\n%s", $name, $phone, $question_type, $message));

        return response()
            ->json([
                "message" => "success",
                "status" => 200
            ]);
    }

    public function sendPhoneCallback(Request $request)
    {
        $name = $request->get("name") ?? '';
        $phone = $request->get("phone") ?? '';


        $this->sendMessage(
            sprintf("<b>Заявка на обратный звонок</b>\n<i>%s</i>\n<i>%s</i>", $name, $phone)
        );


        return response()
            ->json([
                "message" => "success",
                "status" => 200
            ]);
    }

    public function sendVoiceCallback(Request $request)
    {
        $phone = $request->phone ?? "+79490000000";
        $user_name = $request->name ?? "";
        $messengers = $request->messengers ?? "";
        $files = $request->file('files');
        if ($request->hasFile('files')) {
            foreach ($files as $file) {
                $name = "record-" . time() . ".mp3";
                $file->storeAs("/public/uploads/", $name);

                $this->sendAudio(sprintf("<b>Голосовая заявка от пользователя</b>\nИмя:<i>%s</i>\nНомер телефона:<i>%s</i>\nМессенджеры:<i>%s</i>",
                    $user_name, $phone, $messengers
                ), $name);

//                Storage::delete("/uploads/$name");
            }
        }
        return "success";
    }

}
