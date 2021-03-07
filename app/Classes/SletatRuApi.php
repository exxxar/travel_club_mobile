<?php


namespace App\Classes;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class  SletatRuApi
{

    const SLETAT_RU_API_URL = "'http://module.sletat.ru/Main.svc";

    public static function getDepartCities()
    {
        $response = Http::get(self::SLETAT_RU_API_URL . '/GetDepartCities');
        return $response->json()["GetDepartCitiesResult"]["Data"];
    }

    public function getCountries($town_id = '0')
    {
        $response = Http::get(self::SLETAT_RU_API_URL . '/GetCountries?townFromId=' . $town_id);
        return $response->json()["GetCountriesResult"]["Data"];

    }

    public function getCities($id)
    {
        $response = Http::get(self::SLETAT_RU_API_URL . "/GetCities?countryId=" . $id);
        return $response->json()["GetCitiesResult"]["Data"];

    }

    public function getHotels($country_id, $town_id = '0', $star_id = '0')
    {
        $url = self::SLETAT_RU_API_URL . "/GetHotels?all=-1&countryId=" . $country_id;
        if ($town_id != '' && $town_id != '0' && $town_id != 0) {
            $url .= "&towns=" . $town_id;
        }
        if ($star_id != '' && $star_id != '0' && $star_id != 0) {
            $url .= "&stars=" . $star_id;
        }

        $response = Http::get($url);
        return $response->json()["GetHotelsResult"]["Data"];

    }

    public function getHotelStars($country_id, $town_id = '')
    {
        $url = self::SLETAT_RU_API_URL . "GetHotelStars?countryId=" . $country_id;
        if ($town_id != '') {
            $url .= "&towns=" . $town_id;
        }
        $response = Http::get($url);
        return $response->json()["GetHotelStarsResult"]["Data"];

    }

    public function getTourOperators($city_id, $country_id)
    {
        $response = Http::get(self::SLETAT_RU_API_URL . "/GetTourOperators?townFromId=" . $city_id . "&countryId=" . $country_id);
        return $response->json()["GetTourOperatorsResult"]["Data"];

    }

    public function getTourDates($city_id, $country_id)
    {
        $response = Http::get(self::SLETAT_RU_API_URL . "/GetTourDates?dptCityId=" . $city_id . "&countryId=" . $country_id);
        return $response->json()["GetTourDatesResult"]["Data"]["dates"];

    }


    public function getToursByHotels($adults, $children, $night_from, $night_to, $date_start, $date_end, $country_id, $city_id)
    {
        //request = tourModule
        // надо преобразовать даты в формат 19/09/2019
        $url = self::SLETAT_RU_API_URL . "/GetTours?login=" . env('LOGIN_SLETAT_RU') . "&password=" . env('PASS_SLETAT_RU');
        $url .= "&s_hasTickets=true&currencyAlias=RUB&s_ticketsIncluded=true&includeOilTaxesAndVisa=1&cityFromId=" . $city_id . "&countryId=" . $country_id;
        $url .= "&s_adults=" . $adults . "s_kids" . $children . "&s_nightsMin=" . $night_from . "&s_nightsMax=" . $night_to . "&s_departFrom=" . $date_start . "&s_departTo=" . $date_end;
        $url .= "&requestId=0&pageSize=10&pageNumber=1&updateResult=0&includeDescriptions=1&s_hotelIsNotInStop=true&showHotelFacilities=1&groupBy=all_sortedHotels";
        $response = Http::get($url);
        return $response->json()["GetToursResult"]["Data"];

    }

    //Туры будут отсортированы по цене
    public function getTours($adults, $children, $night_from, $night_to, $date_start, $date_end, $country_id, $city_id)
    {
        //request = tourModule
        // надо преобразовать даты в формат 19/09/2019
        $url = self::SLETAT_RU_API_URL . "/GetTours?login=" . env('LOGIN_SLETAT_RU') . "&password=" . env('PASS_SLETAT_RU');
        $url .= "&s_hasTickets=true&currencyAlias=RUB&s_ticketsIncluded=true&includeOilTaxesAndVisa=1&cityFromId=" . $city_id . "&countryId=" . $country_id;
        $url .= "&s_adults=" . $adults . "s_kids" . $children . "&s_nightsMin=" . $night_from . "&s_nightsMax=" . $night_to . "&s_departFrom=" . $date_start . "&s_departTo=" . $date_end;
        $url .= "&requestId=0&pageSize=10&pageNumber=1&updateResult=0&includeDescriptions=1&s_hotelIsNotInStop=true&showHotelFacilities=1&groupBy=so_price";
        $response = Http::get($url);
        return $response->json()["GetToursResult"]["Data"];
//
    }

    public function getAviaOperators($city_id, $country_id)
    {
        $response = Http::get(self::SLETAT_RU_API_URL . "/GetAviaOperators?townFromId=" . $city_id . "&countryId=" . $country_id);
        return $response->json()["GetAviaOperatorsResult"]["Data"];

    }

    public function getAviaDates($city_id, $country_id)
    {
        $response = Http::get(self::SLETAT_RU_API_URL . "/GetAviaDates?dptCityId=" . $city_id . "&countryId=" . $country_id);
        return $response->json()["GetAviaDatesResult"]["Data"]["dates"];

    }


    public function getLoadState(Request $request)
    {
        $response = Http::get(self::SLETAT_RU_API_URL . '/GetLoadState?requestId=' . $request->request_id . '&userId=');
        return $response->json()["GetLoadStateResult"]["Data"];

    }

    public function getAviaCities($term)
    {
        $response = Http::get("http://autocomplete.travelpayouts.com/places2?term=" . $term . "&locale=ru&types[]=city,airport");
        return $response->json();

    }

}
