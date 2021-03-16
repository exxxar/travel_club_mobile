<?php

namespace App\Http\Controllers\Desktop;

use App\Http\Controllers\Controller;
use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Telegram\Bot\Laravel\Facades\Telegram;

class MessageController extends Controller
{
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
//        "*" + this.question_types[this.type] + "*:\n" + this.message + "\n",
        $mes = Message::create($request->all());
        $mes->message_type = 'Обратная связь';
        $mes->save();
        $params = array(
            'name' => $name,
            'phone' => $phone,
            'email' => '',
            'source' => 'Обратная связь с сайта',
            'fields' => array(
                array(
                    'name' => 'Телефон',
                    'values' => array($phone)
                ),
                array(
                    'name' => 'Тип вопроса',
                    'values' => array($question_type)
                ),
                array(
                    'name' => 'Сообщение',
                    'values' => array($message)
                ),

            ));
        $api_key = '3Dd6Nag08Plq74HKzYqE80xCrf1QE8nfxoQF6rKh9em7ke902sk0W0YM2UtkIpOb';
        $url = "https://travel-club.moidokumenti.ru/api/add-lead";
        $request1 = array(
            'params' => json_encode($params),
            'key' => $api_key
        );

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 600);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $request1);
        $result = curl_exec($ch);
        curl_close($ch);
//        var_dump($result);

        Telegram::sendMessage([
//            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
            'chat_id' => '-1001370191765',
            'parse_mode' => 'Markdown',
            'text' => sprintf("*Обратная связь*\n_%s_\n_%s_\n*Тип вопроса:* %s\n%s", $name, $phone, $question_type, $message),
            'disable_notification' => 'true'
        ]);

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

        $message = Message::create($request->all());
        $message->message_type = 'Обратный звонок';
        $message->save();

        $params = array(
            'name' => $name,
            'phone' => $phone,
            'email' => '',
            'source' => 'Заявка на обратный звонок с сайта',
            'fields' => array(
                array(
                    'name' => 'Телефон',
                    'values' => array($phone)
                ),
            )
        );
        $api_key = '3Dd6Nag08Plq74HKzYqE80xCrf1QE8nfxoQF6rKh9em7ke902sk0W0YM2UtkIpOb';
        $url = "https://travel-club.moidokumenti.ru/api/add-lead";
        $request1 = array(
            'params' => json_encode($params),
            'key' => $api_key
        );

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 600);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $request1);
        $result = curl_exec($ch);
        curl_close($ch);
//        var_dump($result);

        Telegram::sendMessage([
//            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
            'chat_id' => '-1001370191765',
            'parse_mode' => 'Markdown',
            'text' => sprintf("*Заявка на обратный звонок*\n_%s_\n_%s_", $name, $phone),
            'disable_notification' => 'true'
        ]);

        return response()
            ->json([
                "message" => "success",
                "status" => 200
            ]);
    }
    public function sendVoiceCallback(Request $request) {
        $phone = $request->phone ?? "+380710000000";
        $user_name = $request->name ?? "";
        $messengers = $request->messengers ?? "";
        $files = $request->file('files');
        if ($request->hasFile('files')) {
            foreach ($files as $file) {
                $name = "record-" . time() . ".mp3";
                $file->storeAs("/public/uploads/", $name);

                $message = Message::create($request->all());
                $message->message_type = 'Голосовая заявка';
                $message->file_path = "/storage/app/public/uploads/$name";
                $message->save();

                Telegram::sendAudio([
//                    'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
                    'chat_id' => '-1001370191765',
                    "caption" => "*Голосовая заявка от пользователя*\nИмя:_ $user_name _\nНомер телефона:_ $phone _\nМессенджеры:_ $messengers _",
                    'parse_mode' => 'Markdown',
                    'audio' => \Telegram\Bot\FileUpload\InputFile::create(storage_path('app/public') . "/uploads/$name"),
                ]);

                $params = array(
                    'name' => $user_name,
                    'phone' => $phone,
                    'email' => '',
                    'source' => 'Голосовая заявка с сайта',
                    'fields' => array(
                        array(
                            'name' => 'Телефон',
                            'values' => array($phone)
                        ),
                        array(
                            'name' => 'Мессенджеры',
                            'values' => array($messengers)
                        ),
                        array(
                            'name' => 'Ссылка',
                            'values' => array("https://travel-club.tours/file/$name")
                        ),

                    ));
                $api_key = '3Dd6Nag08Plq74HKzYqE80xCrf1QE8nfxoQF6rKh9em7ke902sk0W0YM2UtkIpOb';
                $request1 = array(
                    'params' => json_encode($params),
                    'key' => $api_key
                );
                $url = "https://travel-club.moidokumenti.ru/api/add-lead";
                $ch = curl_init($url);
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_TIMEOUT, 600);
                curl_setopt($ch, CURLOPT_POST, 1);
                curl_setopt($ch, CURLOPT_POSTFIELDS, $request1);
                $result = curl_exec($ch);
                curl_close($ch);

//                Storage::delete("/uploads/$name");
            }
        }
        return "success";
    }

}
