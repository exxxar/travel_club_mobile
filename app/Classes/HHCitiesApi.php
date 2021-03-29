<?php


namespace App\Classes;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class  HHCitiesApi
{

    const HH_CITIES_API_URL = "https://api.hh.ru/areas";

    public function getCitiesByCountry($id)
    {
        $response = Http::get(self::HH_CITIES_API_URL . '/'.$id);
        return $response->json();
    }


}
