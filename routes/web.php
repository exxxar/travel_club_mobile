<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Jenssegers\Agent\Facades\Agent;

use Illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (Agent::isMobile())
        return view('pwa.pages.index');

    return view('desktop.welcome');
})->name("desktop");

Route::get('/offline', function () {
    return view("pwa.pages.maintenance");
})->name("offline");

Route::group(["prefix" => "/m"], function () {
    //Route::view('/', 'pwa.pages.index')->name("index");

    Route::get("/",function (){

        if (!Agent::isMobile())
            return view('desktop.welcome');

        return view('pwa.pages.index');
    })->name("index");

    Route::view("/desktop","pwa.welcome")->name("m.desktop");

    Route::view('/about', "pwa.pages.about")->name("about");
    Route::view('/contact', "pwa.pages.contact")->name("contact");
    Route::view('/chat', "pwa.pages.chat")->name("chat");
    Route::view('/faq', "pwa.pages.faq")->name("faq");

    Route::view('/tours', "pwa.pages.tours")->name("tours");
    Route::view('/profile', "pwa.pages.profile")->name("profile");
    Route::view('/adventure', "pwa.pages.adventure")->name("adventure");
    Route::view('/hotels', "pwa.pages.hotels")->name("hotels");
    Route::view('/flies', "pwa.pages.flies")->name("flies");
    Route::view('/promo', "pwa.pages.promo")->name("promo");
    Route::view('/maintenance', "pwa.pages.maintenance")->name("maintenance");
    Route::view('/tour-search', "pwa.pages.tour-search")->name("tour-search");
    Route::view('/avia-search', "pwa.pages.avia-search")->name("avia-search");
    Route::view('/comments', "pwa.pages.comments")->name("comments");
});

Route::get("/file/{name}", function ($name) {

    $file = Storage::disk('local')->get("public/uploads/$name");
    return (new Response($file, 200))
        ->header('Content-Type', 'audio/mpeg');

});

Route::get('/{any?}', function () {
    return view('desktop.welcome');
})->where('any', '^(?!api\/)[\/\w\.-]*');




