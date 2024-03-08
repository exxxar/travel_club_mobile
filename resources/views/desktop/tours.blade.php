@extends('desktop.landing')

@include('tours')

@section('after-content')
    <section class="mb-5" style="height: 100%;">
        <div class="container m-auto" style="height: 100%;">
            <div class="tc-row m-auto justify-content-center align-items-center w-100 h-100">
                <div class="col-md-4">
                    <promocode-image title1="Оформи" title2="тур" pos="310"></promocode-image>
                </div>
                <div class="col-md-6">
                    <div class="row family-row family-description m-auto"
                         style="width: 80%; color: #062348;font-size: 17px;font-weight: 900;">
                        <p class="text-center">
                            Не получилось определиться самому? Оформи заявку и наш менеджер тебе поможет!
                        </p>
                        <button class="tc-button mt-2 mx-auto" data-bs-toggle="modal" data-bs-target="#contactModalBox">
                            Оформить заявку
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

