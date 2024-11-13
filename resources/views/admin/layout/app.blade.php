<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <meta name="description"
          content="Сеть туристических агенств - Travel Club">
    <title>TravelClub</title>
    <meta name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=0.9, maximum-scale=1, viewport-fit=cover"/>

    <meta name="keywords" content="туризм"/>
    <!-- Favicons -->
    <link rel="shortcut icon" href="{{asset('img/icons/icon-72x72.png')}}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
{{--    <link rel="stylesheet"--}}
{{--          href="{{ env("APP_DEBUG")?asset('/css/admin/app.css'):asset('/css/admin/app.min.css') }}?ver={{env("APP_VERSION")}}">--}}


</head>

<body>


<div id="app">
    @yield("content")
</div>

{{--<script src="{{env("APP_DEBUG")?asset('/js/admin/app.js'):asset('/js/admin/app.min.js')}}?ver={{env("APP_VERSION")}}"--}}
{{--        defer></script>--}}

</body>

</html>
