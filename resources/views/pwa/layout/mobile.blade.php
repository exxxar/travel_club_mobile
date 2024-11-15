<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <meta property="og:locale" content="ru_RU" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta property="og:locale:alternate" content="zh_CN" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Travel Club" />
    <meta property="og:description" content="Сеть туристических агенств - Travel Club" />
    <meta property="og:url" content="https://travel-club.tours" />
    <meta property="og:site_name" content="Travel Club" />
    <meta property="og:image" content="https://travel-club.tours/img/icons/icon-72x72.png" />
    <meta property="og:image:width" content="790" />
    <meta property="og:image:height" content="808" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="Сеть туристических агенств - Travel Club" />
    <meta name="twitter:title" content="Сеть туристических агенств - Travel Club" />
    <meta name="twitter:image" content="https://travel-club.tours/img/icons/icon-72x72.png" />


    <meta name="description"
          content="Сеть туристических агенств - Travel Club">
    <title>TravelClub</title>
    <meta name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=0.9, maximum-scale=1, viewport-fit=cover"/>

    <meta name="keywords" content="туризм"/>
    <!-- Favicons -->
    <link rel="shortcut icon" href="{{asset('img/icons/icon-72x72.png')}}">
    <link rel="apple-touch-icon" href="{{asset('img/icons/icon-72x72.png')}}">

    <link rel="apple-touch-icon" sizes="152x152" href="{{asset('img/icons/icon-152x152.png')}}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('img/icons/icon-192x192.png')}}">
    <link rel="apple-touch-icon" sizes="167x167" href="{{asset('img/icons/icon-152x152.png')}}">

    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='yes' name='mobile-web-app-capable'/>

    <meta name="theme-color" content="#000000">

    <link rel="icon" type="image/png" href="/img/icons/icon-72x72.png" sizes="32x32">
    <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/icon-72x72.png">

    <link href="{{asset('img/icons/splash-2048x2732.png')}}" sizes="2048x2732" rel="apple-touch-startup-image"/>
    <link href="{{asset('img/icons/splash-1668x2224.png')}}" sizes="1668x2224" rel="apple-touch-startup-image"/>
    <link href="{{asset('img/icons/splash-1536x2048.png')}}" sizes="1536x2048" rel="apple-touch-startup-image"/>
    <link href="{{asset('img/icons/splash-1125x2436.png')}}" sizes="1125x2436" rel="apple-touch-startup-image"/>
    <link href="{{asset('img/icons/splash-1242x2208.png')}}" sizes="1242x2208" rel="apple-touch-startup-image"/>
    <link href="{{asset('img/icons/splash-750x1334.png')}}" sizes="750x1334" rel="apple-touch-startup-image"/>
    <link href="{{asset('img/icons/splash-640x1136.png')}}" sizes="640x1136" rel="apple-touch-startup-image"/>

    <!-- Stylesheets -->
    @laravelPWA

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
{{--    <link rel="stylesheet" href="{{ env("APP_DEBUG")?mix('/css/pwa/app.css'):mix('/css/pwa/app.min.css') }}">--}}
{{--    <link rel="stylesheet" href="{{ env("APP_DEBUG")?asset('/css/pwa/theme.css'):asset('/css/pwa/theme.min.css') }}?ver={{env("APP_VERSION")}}">--}}

</head>

<body class="dark-mode-active">


<div id="app">
{{--    <div id="appCapsule">--}}
    @yield("before-content")
    @yield("content")
    @yield("after-content")
{{--            </div>--}}
    <sidebar></sidebar>

    <travel-notification></travel-notification>

    <modals-block></modals-block>
</div>

@yield("scripts")
<script src="{{asset('js/bootstrap.bundle.min.js')}}"></script>
{{--<script src="{{env("APP_DEBUG")?mix('/js/pwa/app.js'):mix('/js/pwa/app.min.js')}}" async></script>--}}
{{--<script src="{{asset('/js/assets/app.js')}}?ver={{env("APP_VERSION")}}" defer></script>--}}


</body>

</html>
