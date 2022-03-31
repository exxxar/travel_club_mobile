@extends('pwa.layout.mobile')

@section('content')

    @isset($_GET["id"])
        <single-news-page :news-id="{{$_GET["id"]}}"></single-news-page>
    @else
        <h1>Новость не найдена:(</h1>
    @endisset

@endsection



@section("scripts")



@endsection








