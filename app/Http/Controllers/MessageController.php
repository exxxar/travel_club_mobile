<?php

namespace App\Http\Controllers;

use App\Message;
use App\ModuleOrder;
use App\Promocode;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Telegram\Bot\Laravel\Facades\Telegram;

class MessageController extends Controller
{
    use \App\Classes\Telegram;

    public function sendTourModuleOrder1(Request $request)
    {
        $this->sendMessage($request->tourModule);
    }

    public function sendTourModuleOrder2(Request $request)
    {
        $name = $request->get("name") ?? '';
        $phone = $request->get("phone") ?? '';
        $message = $request->get("message") ?? '';
        $tourModule = $request->get("tourModule") ?? '';

        $order = "*Заявка на подбор тура*\n"
            . "*Имя:*" . $name . "\n"
            . "*Телефон:* " . $phone . "\n"
            . "*Дополнительная информация:*" . $message . "\n"
            . "*Страна отправления:*" . $tourModule['country'] . "\n"
            . "*Страна назначения:*" . $tourModule['resort_country']['Name'] . "\n";
        $order .= "*Курорт(ы):*";
        foreach ($tourModule['resorts'] as $resort) {
            $order .= $resort['Name'] . ",";
        }
        $order .= "\n*Отель(и):*";
        foreach ($tourModule['hotels'] as $hotel) {
            $order .= $hotel['Name'] . ",";
        }
        $order .= "\n*Туроператоры:*";
        foreach ($tourModule['tour_operators'] as $tour_operator) {
            $order .= $tour_operator['Name'] . ",";
        }
        $order .= "\n*Интервал дат вылета:*" . $tourModule['date_range']['start'] . " - " . $tourModule['date_range']['end'] . "\n"
            . "*Ночей от:*" . $tourModule['nights_from'] . "  *До:*" . $tourModule['nights_to'] . "\n"
            . "*Цена   от:*" . $tourModule['price_from'] . "  *До:*" . $tourModule['price_to'] . "\n"
            . "*Взрослых:*" . $tourModule['adults'] . "  *Детей:*" . $tourModule['children'] . "\n";
//            "*Курорт(ы):*".$tourModule['resorts'][0]['Name']."\n"
//            ."*Отель(и):*".$tourModule['hotels'][0]['Name']."\n"
//            ."*Туроператоры:*".$tourModule['tour_operators'][0]['Name']."\n"

        $this->sendMessage($order);

        return response()
            ->json([
                "message" => "success",
                "status" => 200
            ]);
    }

    public function sendAviaModuleOrder(Request $request)
    {
        $name = $request->get("name") ?? '';
        $phone = $request->get("phone") ?? '';
        $message = $request->get("message") ?? '';
        $aviaModule = $request->get("aviaModule") ?? '';


        $order = "*Заявка на подбор авиабилетов*\n"
            . "*Имя:*" . $name . "\n"
            . "*Телефон:* " . $phone . "\n"
            . "*Дополнительная информация:*" . $message . "\n";
        if ($aviaModule['is_multi_city'] == false) {
            if (isset($aviaModule['city_from']['city_name'])) {
                $order .= "*Город вылета:*" . $aviaModule['city_from']['city_name'] . "," . $aviaModule['city_from']['name'] . "," . $aviaModule['city_from']['code'] . "\n";
            }
            if (!isset($aviaModule['city_from']['city_name'])) {
                $order .= "*Город вылета:*" . $aviaModule['city_from']['name'] . ", Все аэропорты, " . $aviaModule['city_from']['code'] . "\n";
            }
            if (isset($aviaModule['city_to']['city_name'])) {
                $order .= "*Город прибытия:*" . $aviaModule['city_from']['city_name'] . "," . $aviaModule['city_from']['name'] . "," . $aviaModule['city_from']['code'] . "\n";
            }
            if (!isset($aviaModule['city_to']['city_name'])) {
                $order .= "*Город прибытия:*" . $aviaModule['city_from']['name'] . ", Все аэропорты, " . $aviaModule['city_from']['code'] . "\n";
            }
            $order .= "*Туда:*" . Carbon::parse($aviaModule['depart_date'])->format('d-m-Y') . "  *Обратно:*" . Carbon::parse($aviaModule['return_date'])->format('d-m-Y') . "\n";
        } else {
            $order .= "*Сложный маршрут\n*";
            $index = 1;
            foreach ($aviaModule['routes'] as $resort) {
                $order .= "*Маршрут № " . $index . "*\n";
                if (isset($resort['city_from']['city_name'])) {
                    $order .= "*Город вылета:*" . $resort['city_from']['city_name'] . "," . $resort['city_from']['name'] . "," . $resort['city_from']['code'] . "\n";
                }
                if (!isset($resort['city_from']['city_name'])) {
                    $order .= "*Город вылета:*" . $resort['city_from']['name'] . ", Все аэропорты, " . $resort['city_from']['code'] . "\n";
                }
                if (isset($resort['city_to']['city_name'])) {
                    $order .= "*Город прибытия:*" . $resort['city_from']['city_name'] . "," . $resort['city_from']['name'] . "," . $resort['city_from']['code'] . "\n";
                }
                if (!isset($resort['city_to']['city_name'])) {
                    $order .= "*Город прибытия:*" . $resort['city_from']['name'] . ", Все аэропорты, " . $resort['city_from']['code'] . "\n";
                }
                $order .= "*Дата вылета:*" . $aviaModule['depart_date'] . "\n";
                $index++;
            }
        }

//            ."*Город вылета:*".$aviaModule['city_from']."\n"
//            ."*Город прибытия:*".$aviaModule['city_to']['Name']."\n";

        $order .= "*Класс:*" . $aviaModule['avia_class'] . "\n"
            . "*Взрослых:*" . $aviaModule['adults'] . "  *Детей до 12:*" . $aviaModule['children_under_12'] . "  *Детей до 2:*" . $aviaModule['children_under_2'] . "\n";

        $this->sendMessage($order);

        return response()
            ->json([
                "message" => "success",
                "status" => 200
            ]);
    }


    public function sendPromocode(Request $request)
    {
        return response()->json([
            "res" => !is_null(Promocode::where("code",
                $request->promocode)
                ->first())
        ], 200);

    }

    public function sendWish(Request $request)
    {
        $request->validate([
            'phone' => "required",
            'email' => "nullable|email",
            "from" => "string|required",
            "message" => "required"
        ]);

        $phone = $request->get("phone") ?? '';
        $email = $request->get("email") ?? '';
        $from = $request->get("from") ?? '';
        $message = $request->get("message") ?? '';

        $this->sendMessage(sprintf("<b>Заявка на перезвон:</b>\nТелефон: %s\nПочта: %s\nФ.И.О.: %s\nСообщение: %s",
            $phone,
            $email,
            $from,
            $message
        ));
        return response()
            ->json([
                "message" => "success",
                "status" => 200
            ]);
    }

    public function sendCallback(Request $request)
    {
        $name = $request->get("name") ?? '';
        $phone = $request->get("phone") ?? '';
        $message = $request->get("message") ?? '';
        $question_type = $request->get("question_type") ?? '';

        $this->sendMessage(
            sprintf("<b>Обратная связь</b>\n<i>%s</i>\n<i>%s</i>\n<b>Тип вопроса:</b> %s\n%s",
                $name, $phone, $question_type, $message)
        );

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
        $phone = $request->phone ?? "+380710000000";
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
