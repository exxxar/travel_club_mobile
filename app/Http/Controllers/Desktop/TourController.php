<?php

namespace App\Http\Controllers\Desktop;

use App\Country;
use App\Http\Controllers\Controller;
use App\Jobs\LoadState;
use App\Tour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Telegram\Bot\Laravel\Facades\Telegram;

class TourController extends Controller
{
    public function all()
    {
        $tours = Tour::all();
        return response()->json([
            "tours" => $tours
        ], 200);
    }
    public function get($id)
    {
        $tour = Tour::whereId($id)->first();
        return response()->json([
            "tour" => $tour
        ], 200);
    }
    public function new(Request $request)
    {
        $tour = Tour::create($request->only(["title", "description", "rating", "price","is_hot", "src"]));
        return response()->json([
            "tour" => $tour
        ], 200);
    }
    public function update(Request $request)
    {
        $tour = Tour::findOrFail($request->id);
        $tour->update($request->only(["title", "description", "rating", "price","is_hot", "src"]));
        return response()->json([
            "tour" => $tour
        ], 200);
    }
    public function delete($id)
    {
        $tour = Tour::findOrFail($id);
        $tour->delete();
        return '';
    }

    public function getPopularTours()
    {
//         $json = new \sletatru\JsonGate([
//             'login' => env('LOGIN_SLETAT_RU'),
//             'password' => env('PASS_SLETAT_RU'),
//         ]);
//        $json->config([
//            'login' => env('LOGIN_SLETAT_RU'),
//            'password' => env('PASS_SLETAT_RU'),
//        ]);
         $xml = new \sletatru\XmlGate([
     'login' => 'infinitySoul13@gmail.com',
             'password' =>'Never1',
 ]);
 //получаем список городов вылета
 $tours = $xml->GetDepartCities();
 $err = $xml->getErrors();
//$tours = $xml->GetCountries('1254');
         $cityFrom = 'Москва';
         $countryTo = 150;
         //получаем список горящих ткров по фильтру
//         $tours = $json->GetTours($cityFrom, $countryTo);
        return response()->json([
            "mes" => 'Tours do not exist yet',
            "tours" => $tours,
            "err" => $err
        ], 200);
    }
    public function getDepartCities()
    {
        $response = Http::get('https://module.sletat.ru/Main.svc/GetDepartCities');
        $res = $response->json()["GetDepartCitiesResult"]["Data"];
        return response()->json([
            "res" => $res
        ], 200);
    }
    public function getCountries($town_id = '0')
    {
        if( $town_id == 0 || $town_id == '0')
        {
//            $response = Http::get('https://module.sletat.ru/Main.svc/GetCountries');
            $res = Country::all();
        }
        else {
            $response = Http::get('https://module.sletat.ru/Main.svc/GetCountries?townFromId='.$town_id);
            $res = $response->json()["GetCountriesResult"]["Data"];
        }


        return response()->json([
            "res" => $res
        ], 200);
    }

    public function getCities($id)
    {
        $response = Http::get("https://module.sletat.ru/Main.svc/GetCities?countryId=".$id);
        $res= $response->json()["GetCitiesResult"]["Data"];
        return response()->json([
            "res" => $res,
            'id' => $id
        ], 200);
    }
    public function getHotels($country_id, $town_id = '0', $star_id = '0')
    {
        $url = "https://module.sletat.ru/Main.svc/GetHotels?all=-1&countryId=" . $country_id;
        if( $town_id != '' && $town_id != '0' && $town_id != 0)
        {
            $url .= "&towns=".$town_id;
        }
        if( $star_id != '' && $star_id != '0' && $star_id != 0)
        {
            $url .= "&stars=".$star_id;
        }
//        $response = Http::get("https://module.sletat.ru/Main.svc/GetHotels?all=-1&towns=".$town_id."&stars=".$star_id."&countryId=" . $country_id);
        $response = Http::get($url);
        $res = $response->json()["GetHotelsResult"]["Data"];
        return response()->json([
            "res" => $res,
            "url" => $url
        ], 200);
    }
    public function getHotelStars($country_id, $town_id = '')
    {
        $url ="https://module.sletat.ru/Main.svc/GetHotelStars?countryId=". $country_id;
        if( $town_id != '')
        {
            $url .= "&towns=".$town_id;
        }
//        $response = Http::get("https://module.sletat.ru/Main.svc/GetHotelStars?countryId=". $country_id."&towns=".$town_id);
        $response = Http::get($url);
        $res = $response->json()["GetHotelStarsResult"]["Data"];
        return response()->json([
            "res" => $res
        ], 200);
    }
    public function getTourOperators($city_id,$country_id)
    {
        $response = Http::get("https://module.sletat.ru/Main.svc/GetTourOperators?townFromId=" . $city_id . "&countryId=" . $country_id);
        $res = $response->json()["GetTourOperatorsResult"]["Data"];
        return response()->json([
            "res" => $res
        ], 200);
    }
    public function getTourDates($city_id,$country_id)
    {
        $response = Http::get("https://module.sletat.ru/Main.svc/GetTourDates?dptCityId=" . $city_id . "&countryId=" . $country_id);
        $res = $response->json()["GetTourDatesResult"]["Data"]["dates"];
        return response()->json([
            "res" => $res
        ], 200);
    }
//Группировка по отелям
    public function getToursByHotels(Request $request)
    {
        //request = tourModule
        // надо преобразовать даты в формат 19/09/2019
        $url = "https://module.sletat.ru/Main.svc/GetTours?login=". env('LOGIN_SLETAT_RU')."&password=". env('PASS_SLETAT_RU');
        $url .="&s_hasTickets=true&currencyAlias=RUB&s_ticketsIncluded=true&includeOilTaxesAndVisa=1&cityFromId=".$request->city_id. "&countryId=".$request->country_id;
        $url .="&s_adults=".$request->adults."s_kids".$request->children."&s_nightsMin=".$request->nights_from."&s_nightsMax=".$request->nights_to."&s_departFrom=".$request->date_range->start."&s_departTo=".$request->date_range->end;
        $url .="&requestId=0&pageSize=10&pageNumber=1&updateResult=0&includeDescriptions=1&s_hotelIsNotInStop=true&showHotelFacilities=1&groupBy=all_sortedHotels";
        $response = Http::get($url);
        $res = $response->json()["GetToursResult"]["Data"];
        return response()->json([
            "res" => $res
        ], 200);
    }

    //Туры будут отсортированы по цене
    public function getTours(Request $request)
    {
        //request = tourModule
        // надо преобразовать даты в формат 19/09/2019
        $url = "https://module.sletat.ru/Main.svc/GetTours?login=". env('LOGIN_SLETAT_RU')."&password=". env('PASS_SLETAT_RU');
        $url .="&s_hasTickets=true&currencyAlias=RUB&s_ticketsIncluded=true&includeOilTaxesAndVisa=1&cityFromId=".$request->city_id. "&countryId=".$request->country_id;
        $url .="&s_adults=".$request->adults."s_kids".$request->children."&s_nightsMin=".$request->nights_from."&s_nightsMax=".$request->nights_to."&s_departFrom=".$request->date_range->start."&s_departTo=".$request->date_range->end;
        $url .="&requestId=0&pageSize=10&pageNumber=1&updateResult=0&includeDescriptions=1&s_hotelIsNotInStop=true&showHotelFacilities=1&groupBy=so_price";
        $response = Http::get($url);
        $res = $response->json()["GetToursResult"]["Data"];
//        LoadState::dispatchUnless($accountSuspended === false, $res->requestId);
        return response()->json([
            "res" => $res
        ], 200);
    }

    //Test
    public function testGetToursByHotels(Request $request)
    {
        $json = Storage::get('\public\toursByHotels.json');
        $data = json_decode($json, TRUE);
        $res = $data["GetToursResult"]["Data"];
        return response()->json([
            "res" => $res
        ], 200);
    }
    public function testGetTours(Request $request)
    {
        $json = Storage::get('/public/tours.json');
        $data = json_decode($json, TRUE);
        $res = $data["GetToursResult"]["Data"];
        return response()->json([
            "res" => $res
        ], 200);
    }
    public function getLoadState(Request $request) {
        $response = Http::get('https://module.sletat.ru/Main.svc/GetLoadState?requestId='.$request->request_id.'&userId=');
        $res = $response->json()["GetLoadStateResult"]["Data"];
        return response()->json([
            "res" => 'success'
        ], 200);
    }
    public function saveTourOrder(Request $request)
    {
        $url = "https://module.sletat.ru/Main.svc/SaveTourOrder?searchRequestId=".$request->request_id."&offerId=".$request->tour_id;
        $url .= "&sourceId=".$request->tour_operator_id."&user=".$request->name."&email=".$request->email."&phone=".$request->phone."&info=".$request->message;
        $url .= "&countryName=".$request->country_name."&cityFromName=".$request->city_name."&currencyAlias=RUB&userId=";
        $response = Http::get($url);
        return response()->json([
            "res" => 'success'
        ], 200);
    }

    public function sendTourSearchOrder(Request $request)
    {
        $name = $request->get("name") ?? '';
        $phone = $request->get("phone") ?? '';
        $email = $request->get("email") ?? '';
        $message = $request->get("message") ?? '';
        $tour = $request->get("tour") ?? (object)[];
        $tourSearch = $request->get("tourSearch") ?? '';

        $order = "*Заявка на покупку тура*\n"
            ."*Имя: *".$name."\n"
            ."*Телефон: *".$phone."\n"
            ."*Email: *".$email."\n"
            ."*Дополнительная информация: *".$message."\n";

        $order .= "\n*Детали тура*\n"
            ."*ID тура:* ".$tour[0]."\n"
            ."*Даты:* ".$tour[12]." - ".$tour[13]."\n"
            ."*Кол-во ночей:* ".$tour[14]." ночей\n"
            ."*Туроператор:* ".$tour[18]."\n"
            ."*Отель:* ".$tour[7]."\n"
            ."*Курорт:* ".$tour[19]."\n"
            ."*Страна:* ".$tour[31]."\n"
            ."*Туристы:* ".$tour[16]." взрослых, ".$tour[17]." детей\n"
            ."*Цена:* ".$tour[42]." ₽\n";

        $order .= "\n*Поисковой запрос*\n"
            ."*Город отправления:* ".$tourSearch['depart_city']['Name']."\n"
            ."*Страна назначения:* ".$tourSearch['resort_country']['Name']."\n";
        $order .="*Курорт(ы):* ";
        foreach ($tourSearch['resorts'] as $resort){
            $order .= $resort['Name'] . ",";
        }
        $order .="\n*Отель(и):* ";
        foreach ($tourSearch['hotels'] as $hotel){
            $order .= $hotel['Name'] . ",";
        }
        $order .="\n*Категория:* ";
        foreach ($tourSearch['hotel_stars'] as $hotel_star){
            $order .= $hotel_star['Name'] . ",";
        }
        $order .="\n*Питание:* ";
        foreach ($tourSearch['meals'] as $meal){
            $order .= $meal['Name'] . ",";
        }
        $order .="\n*Туроператоры:* ";
        foreach ($tourSearch['tour_operators'] as $tour_operator){
            $order .= $tour_operator['Name'] . ",";
        }
        $order .= "\n*Интервал дат вылета:* ".$tourSearch['date_range']['start']." - ". $tourSearch['date_range']['end'] ."\n"
            ."*Ночей от:*".$tourSearch['nights_from']."  *До:*".$tourSearch['nights_to']."\n"
            ."*Цена   от:*".$tourSearch['price_from']."  *До:*".$tourSearch['price_to']."\n"
            ."*Взрослых:*".$tourSearch['adults']."  *Детей:*".$tourSearch['children']."\n";

        Telegram::sendMessage([
            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
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
}
