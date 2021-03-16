@extends('pwa.layout.mobile')

@section('content')
    <preloader :time="3500"></preloader>

    <header-block></header-block>

    <div class="comments pb-5">
        <script async src="https://comments.app/js/widget.js?3" data-comments-app-website="8DME3nOg" data-limit="100" data-color="E22F38" data-dislikes="1" data-colorful="1"></script>

    </div>


    <bottom-menu></bottom-menu>

@endsection














