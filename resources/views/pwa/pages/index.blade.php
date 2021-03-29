@extends('pwa.layout.mobile')

@section('content')

    <preloader :time="2000"></preloader>

    <header-block></header-block>

    <index-page></index-page>

    <bottom-menu></bottom-menu>

@endsection




@section("scripts")
    <!--End of Tawk.to Script-->
    <script src="https://embed.tawk.to/6011a65ac31c9117cb73211e/1et2f3ktl" defer></script>


@endsection







