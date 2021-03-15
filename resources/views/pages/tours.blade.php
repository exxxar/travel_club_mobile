@extends('layout.mobile')

@section('content')
    <preloader :time="3500"></preloader>

    <header-block></header-block>

    <tours-page></tours-page>

    <bottom-menu></bottom-menu>

@endsection

@section("scripts")
    <script charset="utf-8" src="https://front.sletat.ru/modules/module6/latest/module.js" defer></script>
@endsection













