<?php

use Illuminate\Support\Facades\Route;
use Jenssegers\Agent\Facades\Agent;

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
        return redirect()->route("index");

    return view('welcome');
})->name("desktop");

Route::get('/offline', function () {
    return view("maintenance");
})->name("offline");


Route::view('/m/', 'pages.index')->name("index");

Route::view('/m/about', "pages.about")->name("about");
Route::view('/m/contact', "pages.contact")->name("contact");
Route::view('/m/chat', "pages.chat")->name("chat");
Route::view('/m/faq', "pages.faq")->name("faq");

Route::view('/m/tours', "pages.tours")->name("tours");
Route::view('/m/profile', "pages.profile")->name("profile");
Route::view('/m/adventure', "pages.adventure")->name("adventure");
Route::view('/m/hotels', "pages.hotels")->name("hotels");
Route::view('/m/flies', "pages.flies")->name("flies");
Route::view('/m/promo', "pages.promo")->name("promo");
Route::view('/m/maintenance', "pages.maintenance")->name("maintenance");
Route::view('/m/tour-search', "pages.tour-search")->name("tour-search");
Route::view('/m/avia-search', "pages.avia-search")->name("avia-search");
