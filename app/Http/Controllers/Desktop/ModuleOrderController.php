<?php

namespace App\Http\Controllers\Desktop;

use App\Http\Controllers\Controller;
use App\ModuleOrder;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Telegram\Bot\Laravel\Facades\Telegram;

class ModuleOrderController extends Controller
{
    public function all()
    {
        $moduleOrders = ModuleOrder::withoutTrashed()->orderBy('created_at', 'desc')->get();
        $deleted_moduleOrders = ModuleOrder::onlyTrashed()->orderBy('created_at', 'desc')->get();
        return response()->json([
            "orders" => $moduleOrders,
            'deleted_moduleOrders' => $deleted_moduleOrders
        ], 200);
    }
    public function get($id)
    {
        $moduleOrder = ModuleOrder::whereId($id)->first();
        return response()->json([
            "moduleOrder" => $moduleOrder
        ], 200);
    }
    public function new(Request $request)
    {
        $moduleOrder = ModuleOrder::create($request->only(['name','phone','order_type','message','module']));
        return response()->json([
            "moduleOrder" => $moduleOrder
        ], 200);
    }
    public function update(Request $request)
    {
        $moduleOrder = ModuleOrder::findOrFail($request->id);
        $moduleOrder->update($request->only(['name','phone','order_type','message','module']));
        return response()->json([
            "moduleOrder" => $moduleOrder
        ], 200);
    }
    public function delete($id)
    {
        $moduleOrder = ModuleOrder::withTrashed()->findOrFail($id);
        $moduleOrder->delete();
        return response()
            ->json([
                "message" => "Заказ успешно удалён",
            ], 200);
    }

    public function sendTourModuleOrder(Request $request)
    {
        $name = $request->get("name") ?? '';
        $phone = $request->get("phone") ?? '';
        $message = $request->get("message") ?? '';
        $tourModule = $request->get("tourModule") ?? '';

        $moduleOrder = ModuleOrder::create([
            'name' => $name,
            'phone' => $phone,
            'message' => $message,
            'order_type' =>'Тур',
            'module' => $tourModule,
        ]);

        $order = "*Заявка на подбор тура*\n"
            ."*Имя:*".$name."\n"
            ."*Телефон:* ".$phone."\n"
            ."*Дополнительная информация:*".$message."\n"
            ."*Страна отправления:*".$tourModule['country']."\n"
            ."*Страна назначения:*".$tourModule['resort_country']['Name']."\n";
        $order .="*Курорт(ы):*";
        foreach ($tourModule['resorts'] as $resort){
            $order .= $resort['Name'] . ",";
        }
        $order .="\n*Отель(и):*";
        foreach ($tourModule['hotels'] as $hotel){
            $order .= $hotel['Name'] . ",";
        }
        $order .="\n*Туроператоры:*";
        foreach ($tourModule['tour_operators'] as $tour_operator){
            $order .= $tour_operator['Name'] . ",";
        }
        $order .= "\n*Интервал дат вылета:*".$tourModule['date_range']['start']." - ". $tourModule['date_range']['end'] ."\n"
            ."*Ночей от:*".$tourModule['nights_from']."  *До:*".$tourModule['nights_to']."\n"
            ."*Цена   от:*".$tourModule['price_from']."  *До:*".$tourModule['price_to']."\n"
            ."*Взрослых:*".$tourModule['adults']."  *Детей:*".$tourModule['children']."\n";
//            "*Курорт(ы):*".$tourModule['resorts'][0]['Name']."\n"
//            ."*Отель(и):*".$tourModule['hotels'][0]['Name']."\n"
//            ."*Туроператоры:*".$tourModule['tour_operators'][0]['Name']."\n"

        $params = array(
            'name' => $name,
            'phone' => $phone,
            'email' => '',
            'source' => 'Заявка на подбор тура',
            'fields' => array(
                array(
                    'name' => 'Параметры',
                    'values' => array($order)
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

        Telegram::sendMessage([
            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
            //'chat_id' => '-1001370191765',
            'parse_mode' => 'Markdown',
            'text' => sprintf($order),
            'disable_notification' => 'true'
        ]);

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

        $moduleOrder = ModuleOrder::create([
            'name' => $name,
            'phone' => $phone,
            'message' => $message,
            'order_type' =>'Авиабилеты',
            'module' => $aviaModule,
        ]);

        $order = "*Заявка на подбор авиабилетов*\n"
            ."*Имя:*".$name."\n"
            ."*Телефон:* ".$phone."\n"
            ."*Дополнительная информация:*".$message."\n";
        if($aviaModule['is_multi_city']==false)
        {
            if(isset($aviaModule['city_from']['city_name']))
            {
                $order .="*Город вылета:*".$aviaModule['city_from']['city_name'].",".$aviaModule['city_from']['name'].",".$aviaModule['city_from']['code']."\n";
            }
            if(!isset($aviaModule['city_from']['city_name']))
            {
                $order .="*Город вылета:*".$aviaModule['city_from']['name'].", Все аэропорты, ".$aviaModule['city_from']['code']."\n";
            }
            if(isset($aviaModule['city_to']['city_name']))
            {
                $order .="*Город прибытия:*".$aviaModule['city_from']['city_name'].",".$aviaModule['city_from']['name'].",".$aviaModule['city_from']['code']."\n";
            }
            if(!isset($aviaModule['city_to']['city_name']))
            {
                $order .="*Город прибытия:*".$aviaModule['city_from']['name'].", Все аэропорты, ".$aviaModule['city_from']['code']."\n";
            }
            $order .="*Туда:*".Carbon::parse($aviaModule['depart_date'])->format('d-m-Y')."  *Обратно:*".Carbon::parse($aviaModule['return_date'])->format('d-m-Y')."\n";
        }
        else {
            $order .="*Сложный маршрут\n*";
            $index=1;
            foreach ($aviaModule['routes'] as $resort){
                $order .="*Маршрут № ". $index."*\n";
                if(isset($resort['city_from']['city_name']))
                {
                    $order .="*Город вылета:*".$resort['city_from']['city_name'].",".$resort['city_from']['name'].",".$resort['city_from']['code']."\n";
                }
                if(!isset($resort['city_from']['city_name']))
                {
                    $order .="*Город вылета:*".$resort['city_from']['name'].", Все аэропорты, ".$resort['city_from']['code']."\n";
                }
                if(isset($resort['city_to']['city_name']))
                {
                    $order .="*Город прибытия:*".$resort['city_from']['city_name'].",".$resort['city_from']['name'].",".$resort['city_from']['code']."\n";
                }
                if(!isset($resort['city_to']['city_name']))
                {
                    $order .="*Город прибытия:*".$resort['city_from']['name'].", Все аэропорты, ".$resort['city_from']['code']."\n";
                }
                $order .="*Дата вылета:*".$aviaModule['depart_date']."\n";
                $index++;
            }
        }

//            ."*Город вылета:*".$aviaModule['city_from']."\n"
//            ."*Город прибытия:*".$aviaModule['city_to']['Name']."\n";

        $order .= "*Класс:*".$aviaModule['avia_class']."\n"
            ."*Взрослых:*".$aviaModule['adults']."  *Детей до 12:*".$aviaModule['children_under_12']."  *Детей до 2:*".$aviaModule['children_under_2']."\n";

        $params = array(
            'name' => $name,
            'phone' => $phone,
            'email' => '',
            'source' => 'Заявка на подбор авиабилетов',
            'fields' => array(
                array(
                    'name' => 'Параметры',
                    'values' => array($order)
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

        Telegram::sendMessage([
            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
            //'chat_id' => '-1001370191765',
            'parse_mode' => 'Markdown',
            'text' => sprintf($order),
            'disable_notification' => 'true'
        ]);

        return response()
            ->json([
                "message" => "success",
                "status" => 200
            ]);
    }
    public function sendHotelModuleOrder(Request $request){

    }

    public function restore($id)
    {
        $order = ModuleOrder::onlyTrashed()->where('id', $id)->restore();
        return response()
            ->json([
                "order" => $order,
                "message" => "Заказ восстановлен",
            ], 200);
    }
    public function forceDelete($id)
    {
        $order = ModuleOrder::withTrashed()->find($id);
        if (!is_null($order)) {
            $order->forceDelete();
        }

        return response()
            ->json([
                "message" => "Заказ успешно полностью удалён",
            ], 200);
    }
}
