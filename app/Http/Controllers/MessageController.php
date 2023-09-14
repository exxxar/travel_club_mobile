<?php

namespace App\Http\Controllers;

use App\Events\PromocodeEvent;
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

        $order = "<b>Заявка на подбор тура</b>\n"
            . "<b>Имя:</b>" . $name . "\n"
            . "<b>Телефон:</b> " . $phone . "\n"
            . "<b>Дополнительная информация:</b>" . $message . "\n"
            . "<b>Страна отправления:</b>" . $tourModule['country'] . "\n"
            . "<b>Страна назначения:</b>" . $tourModule['resort_country']['Name'] . "\n";
        $order .= "<b>Курорт(ы):</b>";
        foreach ($tourModule['resorts'] as $resort) {
            $order .= $resort['Name'] . ",";
        }
        $order .= "\n<b>Отель(и):</b>";
        foreach ($tourModule['hotels'] as $hotel) {
            $order .= $hotel['Name'] . ",";
        }
        $order .= "\n<b>Туроператоры:</b>";
        foreach ($tourModule['tour_operators'] as $tour_operator) {
            $order .= $tour_operator['Name'] . ",";
        }
        $order .= "\n<b>Интервал дат вылета:</b>" . $tourModule['date_range']['start'] . " - " . $tourModule['date_range']['end'] . "\n"
            . "<b>Ночей от:</b>" . $tourModule['nights_from'] . "  <b>До:</b>" . $tourModule['nights_to'] . "\n"
            . "<b>Цена от:</b>" . $tourModule['price_from'] . "  <b>До:</b>" . $tourModule['price_to'] . "\n"
            . "<b>Взрослых:</b>" . $tourModule['adults'] . "  <b>Детей:</b>" . $tourModule['children'] . "\n";
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


        $order = "<b>Заявка на подбор авиабилетов</b>\n"
            . "<b>Имя:</b>" . $name . "\n"
            . "<b>Телефон:</b> " . $phone . "\n"
            . "<b>Дополнительная информация:</b>" . $message . "\n";
        if ($aviaModule['is_multi_city'] == false) {
            if (isset($aviaModule['city_from']['city_name'])) {
                $order .= "<b>Город вылета:</b>" . $aviaModule['city_from']['city_name'] . "," . $aviaModule['city_from']['name'] . "," . $aviaModule['city_from']['code'] . "\n";
            }
            if (!isset($aviaModule['city_from']['city_name'])) {
                $order .= "<b>Город вылета:</b>" . $aviaModule['city_from']['name'] . ", Все аэропорты, " . $aviaModule['city_from']['code'] . "\n";
            }
            if (isset($aviaModule['city_to']['city_name'])) {
                $order .= "<b>Город прибытия:</b>" . $aviaModule['city_from']['city_name'] . "," . $aviaModule['city_from']['name'] . "," . $aviaModule['city_from']['code'] . "\n";
            }
            if (!isset($aviaModule['city_to']['city_name'])) {
                $order .= "<b>Город прибытия:</b>" . $aviaModule['city_from']['name'] . ", Все аэропорты, " . $aviaModule['city_from']['code'] . "\n";
            }
            $order .= "<b>Туда:</b>" . Carbon::parse($aviaModule['depart_date'])->format('d-m-Y') . "  <b>Обратно:</b>" . Carbon::parse($aviaModule['return_date'])->format('d-m-Y') . "\n";
        } else {
            $order .= "<b>Сложный маршрут\n</b>";
            $index = 1;
            foreach ($aviaModule['routes'] as $resort) {
                $order .= "<b>Маршрут № " . $index . "</b>\n";
                if (isset($resort['city_from']['city_name'])) {
                    $order .= "<b>Город вылета:</b>" . $resort['city_from']['city_name'] . "," . $resort['city_from']['name'] . "," . $resort['city_from']['code'] . "\n";
                }
                if (!isset($resort['city_from']['city_name'])) {
                    $order .= "<b>Город вылета:</b>" . $resort['city_from']['name'] . ", Все аэропорты, " . $resort['city_from']['code'] . "\n";
                }
                if (isset($resort['city_to']['city_name'])) {
                    $order .= "<b>Город прибытия:</b>" . $resort['city_from']['city_name'] . "," . $resort['city_from']['name'] . "," . $resort['city_from']['code'] . "\n";
                }
                if (!isset($resort['city_to']['city_name'])) {
                    $order .= "<b>Город прибытия:</b>" . $resort['city_from']['name'] . ", Все аэропорты, " . $resort['city_from']['code'] . "\n";
                }
                $order .= "<b>Дата вылета:</b>" . $aviaModule['depart_date'] . "\n";
                $index++;
            }
        }

//            ."*Город вылета:*".$aviaModule['city_from']."\n"
//            ."*Город прибытия:*".$aviaModule['city_to']['Name']."\n";

        $order .= "<b>Класс:</b>" . $aviaModule['avia_class'] . "\n"
            . "<b>Взрослых:</b>" . $aviaModule['adults'] . "  <b>Детей до 12:</b>" . $aviaModule['children_under_12'] . "  <b>Детей до 2:</b>" . $aviaModule['children_under_2'] . "\n";

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
                $request->get("code"))
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

        $code = $request->get("code") ?? '';

        if (mb_strlen($code) > 0)
            event(new PromocodeEvent($code, "$message", 0.0, $from, $phone));

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
