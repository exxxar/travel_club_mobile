<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Travel Club</title>
    <style>
        @font-face {
            font-family: "Bello Pro"; /* Имя шрифта */
            src: url(/fonts/BelloPro.otf); /* Путь к файлу со шрифтом */
            font-display: swap;
        }

        @font-face {
            font-family: "VAGWorld-Bold"; /* Имя шрифта */
            src: url(/fonts/vag-world-bold.ttf); /* Путь к файлу со шрифтом */
            font-display: swap;
        }
    </style>
    <!-- Fonts -->

    <link rel="shortcut icon" href="{{asset('images/icons/icon-72x72.png')}}">
    <link rel="apple-touch-icon" href="{{asset('images/icons/icon-72x72.png')}}">

    <link rel="apple-touch-icon" sizes="152x152" href="{{asset('images/icons/icon-152x152.png')}}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('images/icons/icon-192x192.png')}}">
    <link rel="apple-touch-icon" sizes="167x167" href="{{asset('images/icons/icon-152x152.png')}}">

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link href="{{asset('images/icons/splash-2048x2732.png')}}" sizes="2048x2732" rel="apple-touch-startup-image" />
    <link href="{{asset('images/icons/splash-1668x2224.png')}}" sizes="1668x2224" rel="apple-touch-startup-image" />
    <link href="{{asset('images/icons/splash-1536x2048.png')}}" sizes="1536x2048" rel="apple-touch-startup-image" />
    <link href="{{asset('images/icons/splash-1125x2436.png')}}" sizes="1125x2436" rel="apple-touch-startup-image" />
    <link href="{{asset('images/icons/splash-1242x2208.png')}}" sizes="1242x2208" rel="apple-touch-startup-image" />
    <link href="{{asset('images/icons/splash-750x1334.png')}}" sizes="750x1334" rel="apple-touch-startup-image" />
    <link href="{{asset('images/icons/splash-640x1136.png')}}" sizes="640x1136" rel="apple-touch-startup-image" />

    @laravelPWA

    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,800,900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css">

    <link rel="stylesheet" href="{{asset('fonts/icomoon/style.css')}}">
    <link rel="stylesheet" href="{{asset('fonts/icomoon-v1.0/style.css')}}">
    <link rel="stylesheet" href="{{asset('fonts/flaticon/flaticon.css')}}">
    <link rel="stylesheet" href="{{asset('css/ui_narrowtpl_flags_20x13_sprite.min.css')}}">

    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/desktop/main.css?ver=')}}{{env("APP_VERSION")}}">
    <link rel="stylesheet" href="{{asset('css/desktop/app.css?ver=')}}{{env("APP_VERSION")}}">



</head>
<body class="pr-0">


<div id="app">

</div>



<script src="{{asset('js/bootstrap.min.js')}}"></script>

<script src="https://front.sletat.ru/modules/module6/latest/module.js" async></script>
<script id="__biletix__wl__script" src="https://ps.biletix.ru/static/wl/build/biletix_wl.min.js" async></script>
<script type="text/javascript" charset="utf-8" src="https://stells.info/assets/js/partner.fire.js" defer></script>

<script src="{{asset('/js/desktop/app.js?ver=')}}{{env("APP_VERSION")}}" defer></script>



</body>


</html>
