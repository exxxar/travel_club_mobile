@extends('layout.mobile')

@section('content')
    <preloader :time="3500"></preloader>

    <header-block></header-block>

    <tours-page></tours-page>

    <bottom-menu></bottom-menu>

@endsection











