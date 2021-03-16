@extends('pwa.layout.mobile')

@section('content')
    <preloader :time="3500"></preloader>

    <header-block></header-block>

    <adventure-page></adventure-page>

    <bottom-menu></bottom-menu>

@endsection

@section("scripts")

    <script type="text/javascript" charset="utf-8" src="https://stells.info/assets/js/partner.fire.js" defer></script>
@endsection











