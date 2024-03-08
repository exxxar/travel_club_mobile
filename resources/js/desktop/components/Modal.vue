<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-travel" role="document">
            <div class="modal-content">
                <div class="card card-signup card-plain">
                    <div class="modal-header">
                        <div class="card-header card-header-primary text-center">
                            <button type="button" class="close"  data-bs-dismiss="modal" aria-hidden="true">
                                <i class="material-icons" style="color:#fff !important; outline: none !important;">clear</i>
                            </button>
                            <h4 class="card-title">{{title}}</h4>
                        </div>
                    </div>
                    <div class="modal-body">
<!--                        <form class="form" method="" action="">-->
<!--                            <div class="card-body">-->
                                <slot name="body"></slot>
<!--                            </div>-->
<!--                        </form>-->
                    </div>
<!--                    <div class="modal-footer justify-content-center">-->
<!--                        <slot name="footer"></slot>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
      // import "~/css/bootstrap-material-design.min.css"
    export default {
        name: "Modal",
        props: ["id", "title"],
    }
</script>

<style>
    .modal-travel {
        font-family: "Roboto",sans-serif !important;
        /*max-width: 360px !important;*/
        font-weight: 900;
        margin-top:130px;
        transform: none !important;
    }

    .modal-travel .btn{
        position: relative;
        padding: 12px 30px !important;
        margin: 5px 1px !important;
        font-size: 12px !important;
        font-weight: 900 !important;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        outline: 0;
    }
    .modal-travel .btn:disabled {
        cursor: none;
    }
    .modal-travel .btn.btn-primary {
        color: #fff !important;
        background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);
        background-color: #f08b23 !important;
        border-color: #f08b23 !important;
        box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14),
        0 3px 1px -2px rgba(156, 39, 176, 0.2),
        0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;
    }

    .modal-travel .btn.btn-primary:hover{
        box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42),
        0 4px 23px 0px rgba(0, 0, 0, 0.12),
        0 8px 10px -5px rgba(156, 39, 176, 0.2);
    }
    .modal-travel .btn.btn-primary:active{
        box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42),
        0 4px 23px 0px rgba(0, 0, 0, 0.12),
        0 8px 10px -5px rgba(156, 39, 176, 0.2) !important;
    }

    .modal-travel .btn.btn-link{
        background-color: transparent;
        color: #999999;
        box-shadow: none;
        font-size: 14px !important;
    }

    .modal-travel .btn.btn-link:hover{
        background-color: transparent;
        color: #999999;
        text-decoration: none;
    }

    .modal-travel .btn.btn-danger.btn-link {
        background-color: transparent;
        color: #f44336;
        box-shadow: none;
    }

    .modal-travel .btn.btn-primary.btn-link{
        background-color: transparent !important;
        color: #f08b23 !important;
    }

    .modal-travel .btn.btn-primary.btn-link:hover{
        background-color: transparent !important;
        color: #f08b23 !important;
        box-shadow: none ;
    }

    .modal-travel .btn.btn-primary.btn-link:active{
        background-color: transparent !important;
        color: #f08b23 !important;
        box-shadow: none !important;
    }


    .modal-travel .btn-block {
        display: block;
        width: 100%;
    }

    .modal-travel .btn .material-icons{
        position: relative;
        display: inline-block;
        top: 0;
        margin-top: -1em;
        margin-bottom: -1em;
        font-size: 1.1rem;
        vertical-align: middle;
        color: #0d274b !important;
    }
    .modal-travel .material-icons{
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -moz-font-feature-settings: 'liga';
        -moz-osx-font-smoothing: grayscale;
        color: #0d274b !important;
    }

    .modal-travel .btn.btn-just-icon {
        font-size: 24px !important;
        height: 41px;
        min-width: 41px;
        width: 41px;
        padding: 0 !important;
        overflow: hidden;
        position: relative;
        line-height: 41px;
    }


    .modal-travel .btn.btn-just-icon .fa {
        color: #fff;
        margin-top: 0;
        position: absolute;
        width: 100%;
        transform: none;
        left: 0;
        top: 0;
        height: 100%;
        line-height: 41px;
        font-size: 20px;
    }

    .modal-travel .btn.btn-lg{
        padding: 18px !important;
    }

    .btn.btn-round {
        border-radius: 30px;
    }
    .modal-travel .modal-content{
        box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22) !important;
        border-radius: 20px !important;
        border: none !important;
    }
    .modal-travel .modal-header{
        border-bottom: none !important;
        padding-top: 24px !important;
        padding-right: 24px !important;
        padding-bottom: 0 !important;
        padding-left: 24px !important;
    }

    .modal-travel .modal-header .modal-title{
        font-size: 17px !important;
        font-weight: 300 !important;
        color: #0d274b !important;
        margin-bottom: 0;
        margin-top: 10px;
        line-height: 1.5;
    }

    .modal-travel .modal-body {
        padding-top: 16px !important;
        padding-right: 16px !important;
        padding-bottom: 16px !important;
        padding-left: 16px !important;
        color: #0d274b !important;
    }

     .modal-travel .modal-header .close i{
        font-size: 16px;
        color: white;
    }

    .modal-travel .modal-footer{
        border-top: none;
        padding: 24px !important;
    }

    .modal-travel .modal-body+.modal-footer{
        padding-top: 0 !important;
    }
    .modal-travel .modal-footer button{
        margin: 0 !important;
        padding-left: 16px !important;
        padding-right: 16px !important;
        width: auto;
    }

    .modal-travel footer{
        margin-top:200px;
        color: #555;
        background: #fff;
        padding: 25px;
        font-weight: 300;

    }
    .modal-travel .footer p{
        margin-bottom: 0;
    }
    .modal-travel footer p a{
        color: #555;
        font-weight: 400;
    }

    .modal-travel footer p a:hover{
        color: #f08b23;
        text-decoration: none;
    }


    .modal-travel .modal-content .card-signup .modal-header {
        padding-top: 0!important;
    }

    .modal-travel .modal-header .card-header{
        width: 100% !important;
    }

    .modal-travel .modal-header .close {
        color: #fff;
        top: -25px;
        right: 50px;
        text-shadow: none;
        position: absolute;
        outline: none;
    }

    .modal-travel .modal-header .close i{
        color: #fff;
    }

    .modal-travel .modal-footer {
        padding-bottom: 0 !important;
        padding-top: 0 !important;
    }

    .modal-travel .modal-body .form .description {
        padding-top: 15px;
        margin-bottom: -10px;
        color: #999;
    }
    .modal-travel .card {
        border: 0;
        margin-bottom: 0px !important;
        margin-top: 0px !important;
        border-radius: 20px !important;
        color: rgba(0,0,0,.87);
        background: #fff;
        width: 100%;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
        max-height: 100%;
    }


    .modal-travel .card .card-title{
        color: #fff !important;
        font-size: 18px !important;
        font-weight: 900 !important;
        font-family: "Roboto", sans-serif !important;
        text-transform: uppercase;
        /*font-family: Roboto Slab,Times New Roman,serif;*/
        margin-top:10px !important;
    }

    .modal-travel .card .card-header{
        border-radius: 3px !important;
        padding: 1rem 15px !important;
        margin-left: 15px !important;
        margin-right: 15px !important;
        margin-top: -30px !important;
        border: 0 !important;
    }
    .modal-travel .card .card-header-primary {
        box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px #ffbf00 !important;
        /*background: linear-gradient(60deg,#ab47bc,#7b1fa2) !important;*/
        background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);
        background-color: #f08b23;
    }

    /*.modal-travel .card-plain .card-body {*/
    /*    padding-left: 5px !important;*/
    /*    padding-right: 5px !important;*/
    /*}*/


    .modal-travel .card .card-body {
        padding: 15px !important;
    }

    .modal-travel .card form {
        margin: 0 !important;
    }

    .modal-travel .form-group {
        margin-bottom: 17px !important;
        position: relative;
    }

    .modal-travel .bmd-form-group {
        position: relative;
        padding-top: 27px !important;
    }

    .modal-travel .input-group-prepend {
        margin-right: -1px;
    }

    .modal-travel .input-group .input-group-text {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
        background-color: transparent;
        border-color: transparent;
    }


    .modal-travel select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 0;
        box-shadow: none;
        border: 0 !important;
        background-image: none;
    }
    /* Remove IE arrow */
    .modal-travel select::-ms-expand {
        display: none;
    }
    .modal-travel .select {
        position: relative;
        /*display: flex;*/
        /*width: 20em;*/
        height: calc(2.4375rem + 2px);
        line-height: 3;
        /*background: #2c3e50;*/
        /*overflow: hidden;*/
        /*border-radius: .25em;*/
    }
    .modal-travel select {
        display: flex;
        /*flex: 1;*/
        /*padding: 0 .5em;*/
        /*color: #fff;*/
        cursor: pointer;
    }
    /* Arrow */
    .modal-travel .select::after {
        content: '\25BC';
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 1em;
        cursor: pointer;
        color:#0d274b;
        pointer-events: none;
        -webkit-transition: .25s all ease;
        -o-transition: .25s all ease;
        transition: .25s all ease;
    }
    /* Transition */
    .select:hover::after {
        color: #f08b23;
    }
    .modal-travel select.form-control:not([size]):not([multiple]){height:calc(2.4375rem + 2px)}
    .modal-travel select.custom-file-control:focus::-ms-value, .modal-travel select.form-control:focus::-ms-value
    {
        color:#0d274b;background-color:transparent
    }
    .modal-travel .form-control::placeholder{
        color: #0d274b !important;
        font-size:14px !important;
    }

    .modal-travel .form-control:focus{
        box-shadow: none !important;
        background-image: linear-gradient(0deg, #f08b23 2px, rgba(156, 39, 176, 0) 0), linear-gradient(0deg, #d2d2d2 1px, rgba(209, 209, 209, 0) 0) !important;
    }


    .modal-travel .modal-footer button {
        margin: 0;
        padding-left: 16px;
        padding-right: 16px;
        width: auto;
    }
    /*.modal-travel .form-control:invalid {*/
    /*    background-image: linear-gradient(0deg,#d50000 2px,rgba(213,0,0,0) 0),linear-gradient(0deg,rgba(0,0,0,.26) 1px,transparent 0);*/
    /*}*/
    .modal-travel .bmd-form-group.is-focused .form-control,  .modal-travel .form-control:focus {
        background-size: 100% 100%, 100% 100%;
        transition-duration: .3s;
    }

    .modal-travel .form-control {
        font-family:"Open Sans" !important;
        font-weight: 700;
        background: no-repeat bottom,50% calc(100% - 1px);
        background-color: #0D274B;
        background-image: linear-gradient(0deg,#0d274b 2px, #0d274b 0),linear-gradient(0deg, #0d274b 1px,transparent 0);
        background-size: auto, auto;
        background-size: 0 100%,100% 100%;
        border: 0;
        transition: background 0s ease-out;
        transition-duration: 0s;
        padding-left: 0;
        padding-right: 0;
    }
    .modal-travel .form-control {
        /*display: block;*/
        /*width: 100%;*/
        padding: .4375rem 0;
        padding-right: 0px;
        padding-left: 0px;
        font-size: 1rem;
        line-height: 1.5;
        color: #0d274b;
        background-color: transparent;
        background-clip: padding-box;
        /*border: 1px solid rgba(0,0,0,.26);*/
        border-radius: 0;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        box-shadow: none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
</style>
