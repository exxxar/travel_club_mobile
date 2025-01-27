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

Route::middleware('jwt.auth')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix("admin")->group(function () {
    Route::prefix('v1')->group(function () {
        Route::get("/list", "ArticleController@index");
        Route::post("/store", "ArticleController@store");
        Route::put("/update/{id}", "ArticleController@update");
        Route::delete("/remove/{id}", "ArticleController@destroy");
        Route::post('/article-auth', 'ArticleController@isAuth');
    });
});

Route::prefix("pwa")->group(function () {
    Route::prefix('v1')->group(function () {

        Route::get('/getCitiesUR', 'Desktop\HomeController@getCities');
        Route::get('/latest-news', 'ArticleController@getLatestNews');
        Route::get('/all-news', 'ArticleController@getAllNews');
        Route::get('/single-news/{id}', 'ArticleController@getSingleNews');


        Route::any('bot/{bot}', 'BotController@handle');
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

        Route::get('tours', 'UserTourController@index');
        Route::get('popularTours', 'TourController@getPopularTours');
        Route::get('tours/{id}', 'UserTourController@get');
        Route::post('tours/new', 'UserTourController@store');
        Route::post('tours/update', 'UserTourController@update');
        Route::post('tours/delete/{id}', 'UserTourController@delete');
        Route::get('getTours', 'TourController@testGetTours');
        Route::post('sendTourSearchOrder', 'TourController@sendTourSearchOrder');
        Route::post('saveTourOrder', 'TourController@saveTourOrder');

        //Promocodes
        Route::post('sendPromocode', 'MessageController@sendPromocode');
        Route::post('/statistic/promocode', 'PromocodeController@generate');


    });
});

Route::prefix("desktop")->group(function () {
    Route::prefix('v1')->namespace('Desktop')->group(function () {

        Route::get('/getCitiesUR', 'HomeController@getCities');

        //Promocode
        Route::post('sendPromocode', 'HomeController@sendPromocode');
        Route::post('/statistic/promocode', 'PromocodeController@generate');

        Route::get('locationByIp', 'HomeController@locationByIp');

        //Message
        Route::post('sendCallback', 'MessageController@sendCallback');
        Route::post('sendPhoneCallback', 'MessageController@sendPhoneCallback');
        Route::post('sendVoiceCallback', 'MessageController@sendVoiceCallback');

        //TourModule
        Route::get('getDepartCities', 'TourController@getDepartCities');
        Route::get('getCountries/{town_id}', 'TourController@getCountries');
        Route::get('getCities/{id}', 'TourController@getCities');
        Route::get('getHotels/{country_id}/{town_id?}/{star_id?}', 'TourController@getHotels');
        Route::get('getHotelStars/{country_id}/{town_id?}', 'TourController@getHotelStars');
        Route::get('getTourOperators/{city_id}/{country_id}', 'TourController@getTourOperators');
        Route::get('getTourDates/{city_id}/{country_id}', 'TourController@getTourDates');
        Route::post('testGetToursByHotels', 'TourController@testGetToursByHotels');
        Route::post('testGetTours', 'TourController@testGetTours');

//    Route::post('sendTourModuleOrder', 'TourController@sendTourModuleOrder');

        //AviaModule
        Route::get('getAviaCities/{term}', 'AviaController@getAviaCities');

        //ModuleOrders
        Route::post('sendTourModuleOrder', 'ModuleOrderController@sendTourModuleOrder');
        Route::post('sendAviaModuleOrder', 'ModuleOrderController@sendAviaModuleOrder');
        Route::post('sendHotelModuleOrder', 'ModuleOrderController@sendHotelModuleOrder');


        Route::get('tours', 'UserTourController@index');
        Route::get('popularTours', 'UserTourController@getPopularTours');
        Route::get('tours/{userTour}', 'UserTourController@show');
        Route::post('tours/new', 'UserTourController@store');
        Route::post('tours/update', 'UserTourController@update');
        Route::post('tours/delete/{id}', 'UserTourController@delete');
        Route::get('getTours', 'TourController@testGetTours');
        Route::post('sendTourSearchOrder', 'TourController@sendTourSearchOrder');
        Route::post('saveTourOrder', 'TourController@saveTourOrder');


        Route::apiResource('city', 'CityController');

        Route::apiResource('user-ticket', 'UserTicketController');


        Route::prefix('auth')->group(function () {
            // Below mention routes are public, user can access those without any restriction.
            // Create New User
            Route::post('register', 'AuthController@register');
            // Login User
            Route::post('login', 'AuthController@login');
            // Refresh the JWT Token
            Route::get('refresh', 'AuthController@refresh');
            Route::post('checkAuth', 'AuthController@checkAuth');
            // Send reset password mail
            Route::post('reset-password', 'AuthController@sendPasswordResetLink');
            // handle reset password form process
            Route::post('call-reset', 'AuthController@callResetPassword');

            // Below mention routes are available only for the authenticated users.
            Route::middleware( 'jwt.auth')->group(function () {
//                Route::middleware('auth:api')->group(function () {
                    // Get user info
                    Route::post('user', 'AuthController@user');
                    // Logout user from application
                    Route::post('logout', 'AuthController@logout');

                    //Message
                    Route::get('messages', 'MessageController@all');
                    Route::get('messages/{id}', 'MessageController@get');
                    Route::post('messages/new', 'MessageController@new');
                    Route::post('messages/update', 'MessageController@update');
                    Route::post('messages/delete/{id}', 'MessageController@delete');
                    Route::post('messages/restore/{id}', 'MessageController@restore');
                    Route::post('messages/forceDelete/{id}', 'MessageController@forceDelete');

                    //ModuleOrders
                    Route::get('moduleOrders', 'ModuleOrderController@all');
                    Route::get('moduleOrders/{id}', 'ModuleOrderController@get');
                    Route::post('moduleOrders/new', 'ModuleOrderController@new');
                    Route::post('moduleOrders/update', 'ModuleOrderController@update');
                    Route::post('moduleOrders/delete/{id}', 'ModuleOrderController@delete');
                    Route::post('moduleOrders/restore/{id}', 'UserController@restore');
                    Route::post('moduleOrders/forceDelete/{id}', 'UserController@forceDelete');

                    //Chats
                    Route::get('chats', 'ChatController@all');
                    Route::get('loadClientChat', 'ChatController@loadClientChat');
                    Route::post('sendChatMessage', 'ChatController@new');
                    Route::post('newChat', 'ChatController@newChat');

                    Route::get('statistics', 'UserController@statistics');
                    Route::get('files', 'UserTourController@files');

                    Route::prefix('documents')->group(function () {
                        Route::get('/', 'UserDocumentController@all');
                        Route::get('/{id}', 'UserDocumentController@get');
                        Route::post('/new', 'UserDocumentController@new');
                        Route::post('/update', 'UserDocumentController@update');
                        Route::post('/delete/{id}', 'UserDocumentController@delete');
                    });

                    Route::prefix('reviews')->group(function () {
                        Route::get('/', 'ReviewController@all');
                        Route::get('/{id}', 'ReviewController@get');
                        Route::post('/create', 'ReviewController@create');
                        Route::put('/update/{id}', 'ReviewController@update');
                        Route::put('/save/{id}', 'ReviewController@save');
                        Route::post('/delete/{id}', 'ReviewController@delete');
                    });

                    Route::prefix('articles')->group(function () {
                        Route::get('/', 'ArticleController@all');
                        Route::get('/{article}', 'ArticleController@get');
                        Route::post('/create', 'ArticleController@create');
                        Route::post('/update', 'ArticleController@update');
                        Route::post('/delete/{article}', 'ArticleController@delete');
                        Route::post('/file/create', 'ArticleController@saveArticleFile');
                        Route::post('/file/delete', 'ArticleController@deleteArticleFile');
                    });

                    Route::prefix('client')->group(function () {

                    });

                    Route::prefix('manager')->group(function () {
                        Route::get('managers', 'ManagerController@all');
                        Route::get('clients', 'ManagerController@clients');
                        Route::get('clients/{id}', 'ClientController@get');
                        Route::post('clients/user-tour/new', 'UserTourController@store');
                        Route::post('clients/user-tour/update', 'UserTourController@update');
                        Route::post('clients/user-tour/save', 'UserTourController@save');
                        Route::post('clients/user-tour/saveTourInfo', 'UserTourController@saveTourInfo');
                        Route::post('clients/user-tour/updateArchive', 'UserTourController@updateArchive');
                        Route::post('clients/user-tour/updateReview', 'UserTourController@updateReview');
                        Route::post('clients/user-tour/delete/{id}', 'UserTourController@destroy');
                        Route::post('clients/user-tour/forceDelete/{id}', 'UserTourController@forceDelete');
                        Route::post('clients/user-info/new', 'UserInfoController@store');
                        Route::post('clients/user-info/update', 'UserInfoController@update');
                        Route::post('clients/user-info/delete/{id}', 'UserInfoController@destroy');

                        Route::post('uploadPhones', 'ManagerController@uploadPhones');

                        Route::get('getPhones', 'ManagerController@getPhones');
                        Route::post('sendSmsMessage', 'ManagerController@sendSmsMessage');
//          Route::apiResource('user-info', 'UserInfoController');
//          Route::apiResource('user-tour', 'UserTourController');
                    });
                    Route::prefix('admin')->group(function () {
                        Route::prefix('users')->group(function () {
                            Route::get('/', 'UserController@all');
                            Route::get('/search', 'UserController@search');
                            Route::get('/{id}', 'UserController@get');
                            Route::post('/new', 'UserController@new');
                            Route::put('/{id}', 'UserController@update');
                            Route::put('/user-info/{id}', 'UserInfoController@save');
                            Route::delete('/{id}', 'UserController@delete');
                            Route::post('/restore/{id}', 'UserController@restore');
                            Route::post('/forceDelete/{id}', 'UserController@forceDelete');

                        });

                        Route::prefix('branches')->group(function () {
                            Route::get('/', 'BranchController@all');
                            Route::get('/{id}', 'BranchController@get');
                            Route::post('/new', 'BranchController@new');
                            Route::put('/{id}', 'BranchController@update');
                            Route::delete('/{id}', 'BranchController@delete');
                        });
                    });
//                });
            });
        });

    });
});

Route::prefix("api")->group(function () {

    Route::prefix('auth')->group(function () {
        Route::post('register', 'AuthController@register');
        Route::post('login', 'AuthController@login');
        Route::get('refresh', 'AuthController@refresh');
        Route::post('checkAuth', 'AuthController@checkAuth');
        // Send reset password mail
        Route::post('reset-password', 'AuthController@sendPasswordResetLink');
        // handle reset password form process
        Route::post('call-reset', 'AuthController@callResetPassword');
    });

    Route::middleware( 'jwt.auth')->group(function () {
//        Route::middleware('auth:api')->group(function () {

        //<editor-fold desc="Auth">
        Route::post('user', 'AuthController@user');
        Route::post('logout', 'AuthController@logout');
        Route::post('changePassword', 'AuthController@changePassword');
        Route::post('changeContact', 'AuthController@changeContact');
        //</editor-fold>

        //<editor-fold desc="Users">
        Route::prefix('users')->group(function () {
            Route::get('/', 'UserController@all');
            Route::get('/{id}', 'UserController@get');
            Route::post('/create', 'UserController@create');
            Route::put('/update', 'UserController@update');
            Route::delete('/delete/{id}', 'UserController@delete');
            Route::post('/restore/{id}', 'UserController@restore');
            Route::post('/forceDelete/{id}', 'UserController@forceDelete');
        });
        //</editor-fold>

        //<editor-fold desc="Tours">
        Route::prefix('tours')->group(function () {
            Route::get('/', 'UserTourController@all');
            Route::get('/{userTour}', 'UserTourController@get');
            Route::post('/create', 'UserTourController@create');
            Route::post('/update', 'UserTourController@update');
            Route::post('/delete/{userTour}', 'UserTourController@delete');
        });
        //</editor-fold>

        //<editor-fold desc="Documents">
        Route::prefix('documents')->group(function () {
            Route::get('/', 'UserDocumentController@all');
            Route::get('/{id}', 'UserDocumentController@get');
            Route::post('/create', 'UserDocumentController@create');
            Route::post('/update', 'UserDocumentController@update');
            Route::post('/delete/{id}', 'UserDocumentController@delete');
        });
        //</editor-fold>

        //<editor-fold desc="Reviews">
        Route::prefix('reviews')->group(function () {
            Route::get('/', 'ReviewController@all');
            Route::get('/{id}', 'ReviewController@get');
            Route::post('/create', 'ReviewController@create');
            Route::post('/update', 'ReviewController@update');
            Route::post('/save/{id}', 'ReviewController@save');
            Route::post('/delete/{id}', 'ReviewController@delete');
        });
        //</editor-fold>

//    });
    });
});

