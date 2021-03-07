<?php

namespace App\Http\Controllers;

use App\Classes\SletatRuApi;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use sletatru\XmlGate;


class TourController extends Controller
{
    private $sletatRuApi;

    public function __construct()
    {
        $this->sletatRuApi = new SletatRuApi();
    }

    public function getDepartCities()
    {
        return response()->json($this->sletatRuApi->getDepartCities());
    }

    public function getCountries($town_id = '0')
    {
        return response()->json($this->sletatRuApi->getCountries($town_id));
    }

    public function getCities($id)
    {
        return response()->json($this->sletatRuApi->getCities($id));
    }

    public function getHotels($country_id, $town_id = '0', $star_id = '0')
    {
        return response()->json($this->sletatRuApi->getHotels($country_id, $town_id, $star_id));
    }

    public function getHotelStars($country_id, $town_id = '')
    {
        return response()->json($this->sletatRuApi->getHotelStars($country_id, $town_id));
    }

    public function getTourOperators($city_id, $country_id)
    {
        return response()->json($this->sletatRuApi->getTourOperators($city_id, $country_id));
    }

    public function getTourDates($city_id, $country_id)
    {
        return response()->json($this->sletatRuApi->getTourDates($city_id, $country_id));
    }


    public function getToursByHotels(Request $request)
    {

        $adults = $request->adults ?? 0;
        $children = $request->children ?? 0;
        $night_from = $request->nights_from ?? 1;
        $night_to = $request->nights_to ?? 1;
        $date_start = $request->date_range->start ?? Carbon::now("+3");
        $date_end = $request->date_range->end ?? Carbon::now("+3")->addDay();
        $country_id = $request->country_id;
        $city_id = $request->city_id;


        return response()->json($this->sletatRuApi->getToursByHotels(
            $adults,
            $children,
            $night_from,
            $night_to,
            $date_start,
            $date_end,
            $country_id,
            $city_id
        ));
    }

    //Туры будут отсортированы по цене
    public function getTours(Request $request)
    {

        $adults = $request->adults ?? 0;
        $children = $request->children ?? 0;
        $night_from = $request->nights_from ?? 1;
        $night_to = $request->nights_to ?? 1;
        $date_start = $request->date_range->start ?? Carbon::now("+3");
        $date_end = $request->date_range->end ?? Carbon::now("+3")->addDay();
        $country_id = $request->country_id;
        $city_id = $request->city_id;

        return response()->json($this->sletatRuApi->getTours(
            $adults,
            $children,
            $night_from,
            $night_to,
            $date_start,
            $date_end,
            $country_id,
            $city_id
        ));
    }


}
