@extends('pwa.layout.mobile')

@section('before-content')
    <preloader :time="3500"></preloader>

    <header-block></header-block>

    <header-anim-section></header-anim-section>
@endsection
@include("hot-tours")
@section('after-content')
    <div class="section mt-2">

        <promo-image-block title1="Оформи" title2="тур" pos="310"></promo-image-block>
        <p class="text-center">
            Не получилось определиться самому? Оформи заявку и наш менеджер тебе поможет!
        </p>
        <a class="btn btn-orange w-100" href="/m/tour-search">
            Оформить заявку
        </a>

    </div>
    <footer-anim-section class="mt-5"></footer-anim-section>

    <bottom-menu></bottom-menu>

@endsection












