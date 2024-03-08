<?php

namespace App\Http\Controllers\Desktop;

use App\Classes\HHCitiesApi;
use App\Http\Controllers\Controller;
use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Telegram\Bot\Laravel\Facades\Telegram;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    private $hhCitiesApi;

    public function __construct()
    {
        $this->hhCitiesApi = new HHCitiesApi();
    }

    public function  getCities(){
        $tmp_ukr = $this->hhCitiesApi->getCitiesByCountry(5);
        $tmp_rf = $this->hhCitiesApi->getCitiesByCountry(113);
        $tmp_msk = $this->hhCitiesApi->getCitiesByCountry(1);
        $tmp_kv = $this->hhCitiesApi->getCitiesByCountry(115);
        return [$tmp_rf,$tmp_ukr,$tmp_msk, $tmp_kv ];
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
//    public function index()
//{
//    return view('home');
//}
    public function getOzonForm()
    {
        $result = file_get_contents("https://www.ozon.travel/");
        return $result;
//        return view('home');
    }

    public function sendTourModuleOrder(Request $request)
    {
        $text = $request->tourModule;
        Telegram::sendMessage([
            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
            'parse_mode' => 'HTML',
            'text' => sprintf($text),
            'disable_notification' => 'false'
        ]);
    }
    public function sendPromocode(Request $request)
    {
        $promocode = $request->promocode;

//        $promocodes = config('promo');
//        return response()->json([
//            'promocodes' => $promocodes,
//        ], 200);

        $json = Storage::get('promo.json');
        $data = json_decode($json, TRUE);
        $res = $data["promo"];
        $result = in_array($promocode, $res);
        return response()->json([
            "res" => $result
        ], 200);

    }

    public function locationByIp(Request $request)
    {
//        $client = new \GuzzleHttp\Client();
//        $response = $client->request('GET',"http://ipinfo.io");
//        $result = json_decode($response->getBody(), true);
        return response()->json([
//            "result" => $result,
            "result" => null,
        ], 200);
    }

}
