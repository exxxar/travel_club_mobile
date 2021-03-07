<?php

namespace App\Http\Controllers;

use App\Classes\SletatRuApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AviaController extends Controller
{
    private $sletatRuApi;

    public function __construct()
    {
        $this->sletatRuApi = new SletatRuApi();
    }

    public function getAviaCities($term)
    {
        return response()->json($this->sletatRuApi->getAviaCities($term));
    }

    public function getCountries()
    {
        return response()->json($this->sletatRuApi->getCountries());
    }

    public function getDepartCities()
    {
        return response()->json($this->sletatRuApi->getDepartCities());
    }

    public function getCities($id)
    {
        return response()->json($this->sletatRuApi->getCities($id));
    }

    public function getHotels($country_id, $town_id = '', $star_id = '')
    {
        return response()->json($this->sletatRuApi->getHotels($country_id, $town_id, $star_id));
    }

    public function getHotelStars($id, $town_id = '')
    {
        return response()->json($this->sletatRuApi->getHotelStars($id, $town_id));
    }

    public function getAviaOperators($city_id, $country_id)
    {
        return response()->json($this->sletatRuApi->getAviaOperators($city_id, $country_id));
    }

    public function getAviaDates($city_id, $country_id)
    {
        return response()->json($this->sletatRuApi->getAviaDates($city_id, $country_id));
    }

}
