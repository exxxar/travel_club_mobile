<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('v1')->group(function () {

    //Message
    Route::post('sendCallback', 'MessageController@sendCallback');
    Route::post('sendPhoneCallback', 'MessageController@sendPhoneCallback');
    Route::post('sendVoiceCallback', 'MessageController@sendVoiceCallback');

    Route::post('sendWish', 'MessageController@sendWish')->name("wish");


    //ModuleOrders
    Route::post('sendTourModuleOrder', 'MessageController@sendTourModuleOrder2');
    Route::post('sendAviaModuleOrder', 'MessageController@sendAviaModuleOrder');
    Route::post('sendHotelModuleOrder', 'MessageController@sendHotelModuleOrder');

    //TourModule
    Route::get('getDepartCities', 'TourController@getDepartCities');
    Route::get('getCountries/{town_id}', 'TourController@getCountries');
    Route::get('getCities/{id}', 'TourController@getCities');
    Route::get('getHotels/{country_id}/{town_id?}/{star_id?}', 'TourController@getHotels');
    Route::get('getHotelStars/{country_id}/{town_id?}', 'TourController@getHotelStars');
    Route::get('getTourOperators/{city_id}/{country_id}', 'TourController@getTourOperators');
    Route::get('getTourDates/{city_id}/{country_id}', 'TourController@getTourDates');

    //AviaModule
    Route::get('getAviaCities/{term}', 'AviaController@getAviaCities');

    Route::get('tours', 'TourController@all');
    Route::get('popularTours', 'TourController@getPopularTours');
    Route::get('tours/{id}', 'TourController@get');
    Route::post('tours/new', 'TourController@new');
    Route::post('tours/update', 'TourController@update');
    Route::post('tours/delete/{id}', 'TourController@delete');
    Route::get('getTours', 'TourController@testGetTours');
    Route::post('sendTourSearchOrder', 'TourController@sendTourSearchOrder');
    Route::post('saveTourOrder', 'TourController@saveTourOrder');

    //Promocodes
    Route::post('sendPromocode', 'MessageController@sendPromocode');
    Route::post('/statistic/promocode', 'PromocodeController@generate');




});
