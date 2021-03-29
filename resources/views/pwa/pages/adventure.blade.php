@extends('pwa.layout.mobile')

@section('content')
    <preloader :time="3500"></preloader>

    <header-block></header-block>

    <adventure-page></adventure-page>

    <bottom-menu></bottom-menu>

@endsection

@section("scripts")
    <!--End of Tawk.to Script-->
    <script src="https://embed.tawk.to/6011a65ac31c9117cb73211e/1et2f3ktl" defer></script>

    <script type="text/javascript" charset="utf-8" src="https://stells.info/assets/js/partner.fire.js" defer></script>
@endsection












