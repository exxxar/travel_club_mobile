<?php

namespace App\Http\Controllers\Desktop;

//use App\Avia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AviaController extends Controller
{
//    public function all()
//    {
//        $avias = Avia::all();
//        return response()->json([
//            "avias" => $avias
//        ], 200);
//    }
//    public function get($id)
//    {
//        $avia = Avia::whereId($id)->first();
//        return response()->json([
//            "avia" => $avia
//        ], 200);
//    }
//    public function new(Request $request)
//    {
//        $avia = Avia::create($request->only(["title", "description", "rating", "price","is_hot", "src"]));
//        return response()->json([
//            "avia" => $avia
//        ], 200);
//    }
//    public function update(Request $request)
//    {
//        $avia = Avia::findOrFail($request->id);
//        $avia->update($request->only(["title", "description", "rating", "price","is_hot", "src"]));
//        return response()->json([
//            "avia" => $avia
//        ], 200);
//    }
//    public function delete($id)
//    {
//        $avia = Avia::findOrFail($id);
//        $avia->delete();
//        return '';
//    }

//for autocomplete
    public function getAviaCities($term)
    {
        $response = Http::get("http://autocomplete.travelpayouts.com/places2?term=".$term."&locale=ru&types[]=city,airport");
        $res=$response->json();
        return response()->json([
            "res" => $res,
        ], 200);
    }

    public function getCountries()
    {
        $response = Http::get('https://module.sletat.ru/Main.svc/GetCountries');
        $res = $response->json()["GetCountriesResult"]["Data"];
        return response()->json([
            "res" => $res
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
    public function getCities($id)
    {
        $response = Http::get("https://module.sletat.ru/Main.svc/GetCities?countryId=".$id);
        $res= $response->json()["GetCitiesResult"]["Data"];
        return response()->json([
            "res" => $res,
        ], 200);
    }
    public function getHotels($country_id, $town_id = '', $star_id = '')
    {
        $response = Http::get("https://module.sletat.ru/Main.svc/GetHotels?all=-1&towns=".$town_id."&stars=".$star_id."&countryId=" . $country_id);
        $res = $response->json()["GetHotelsResult"]["Data"];
        return response()->json([
            "res" => $res
        ], 200);
    }
    public function getHotelStars($id, $town_id = '')
    {
        $response = Http::get("https://module.sletat.ru/Main.svc/GetHotelStars?countryId=". $id."&towns=".$town_id);
        $res = $response->json()["GetHotelStarsResult"]["Data"];
        return response()->json([
            "res" => $res
        ], 200);
    }
    public function getAviaOperators($city_id,$country_id)
    {
        $response = Http::get("https://module.sletat.ru/Main.svc/GetAviaOperators?townFromId=" . $city_id . "&countryId=" . $country_id);
        $res = $response->json()["GetAviaOperatorsResult"]["Data"];
        return response()->json([
            "res" => $res
        ], 200);
    }
    public function getAviaDates($city_id,$country_id)
    {
        $response = Http::get("https://module.sletat.ru/Main.svc/GetAviaDates?dptCityId=" . $city_id . "&countryId=" . $country_id);
        $res = $response->json()["GetAviaDatesResult"]["Data"]["dates"];
        return response()->json([
            "res" => $res
        ], 200);
    }

}
