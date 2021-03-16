<template>
    <div class="container p-0 m-auto" style="height: 100vh;">
        <div class="row align-items-center justify-content-center m-auto" style="height: 100%; width: 100%">
            <form-wizard
                @on-complete="onComplete"
                shape="circle"
                color="#f08b23"
                stepSize="sm"
                style="width: 100%;"
            >
                <tab-content title="Начало"
                             route="/avia-module/"
                             icon=""
                             checkedIcon="icon-check"
                >
                </tab-content>
                <tab-content title="Подбор авиабилетов"
                             route="/avia-module/avia"
                             icon=""
                             checkedIcon="icon-check"
                >
                </tab-content>
                <tab-content title="Формирование заявки"
                             route="/avia-module/order"
                             icon=""
                             checkedIcon="icon-check"
                >
                </tab-content>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
                <template slot="custom-buttons-left" slot-scope="props">
                    <span class="backSpan" v-if="props.activeTabIndex > 0"></span>
                </template>

                <template slot="custom-buttons-right" slot-scope="props">
                    <span class="nextSpan"></span>
                </template>

                <template slot="footer" slot-scope="props">
                    <div class="row w-100 align-items-center justify-content-center" style="position: absolute; bottom: 18%;">
                        <div class="wizard-footer-left mx-1">
                            <!--                        <span class="nextSpan">Далее</span>-->
                            <!--                        <wizard-button v-if="props.activeTabIndex > 0" @click.native="props.prevTab()" class="backButton" style="background-color: #f08b23; color: white;"><span class="icon-keyboard_arrow_left"></span></wizard-button>-->
                            <wizard-button v-if="props.activeTabIndex > 0" @click.native="props.prevTab()" class="prevBtn" style="background-color: #f08b23; color: white;">
                                Назад
                            </wizard-button>
                        </div>
                        <div class="wizard-footer-right mx-1">
                            <!--                        <span class="backSpan" v-if="props.activeTabIndex">Назад</span>-->
                            <!--                        <wizard-button @click.native="props.nextTab()" v-if="!props.isLastStep" class="nextButton wizard-footer-right" style="background-color: #f08b23; color: white;"><span class="icon-keyboard_arrow_right"></span></wizard-button>-->
                            <wizard-button @click.native="props.nextTab()" v-if="!props.isLastStep" class="wizard-footer-right nextBtn" style="background-color: #f08b23; color: white;">
                                <span v-if="props.activeTabIndex==0">Начать</span><span v-else>Далее</span>
                            </wizard-button>
                        </div>
                    </div>
                </template>
            </form-wizard>
        </div>
    </div>

</template>

<script>
    export default {
        data: () => ({

        }),
        computed:
            {

            },
        methods:
            {
                onComplete: function(){
                    // alert('Yay. Done!');
                },
            }
    }
</script>
<style type="text/css">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
    .vue-form-wizard .wizard-tab-content {
        min-height: 100px;
        padding: 30px 0px 10px;
    }
    .vue-form-wizard {
        position: relative !important;
    }

    .prevBtn {
        /*position: absolute !important;*/
        float: unset !important;
        /*bottom: 20% !important;*/
        /*left: 45%;*/
    }
    .nextBtn {
        /*position: absolute !important;*/
        /*bottom: 20% !important;*/
        /*right: 45%;*/
        float: unset !important;
    }
    @media screen and (min-width: 800px) {
        .backButton {
            width: 60px !important;
            height: 60px !important;
            min-width: 60px !important;
            display: block !important;
            border-radius: 50px !important;
            text-decoration: none !important;
            font-size: 30px !important;
            line-height: 50px !important;
            color: white !important;
            background: #9df !important;
            padding: 0px !important;
            top: 40% !important;
            /*left: 10px;*/
            left: 5% !important;
            position: absolute !important;
        }
        .nextButton {
            width: 60px !important;
            height: 60px !important;
            min-width: 60px !important;
            display: block !important;
            border-radius: 50px !important;
            text-decoration: none !important;
            font-size: 30px !important;
            font-weight: 600 !important;
            line-height: 50px !important;
            color: white !important;
            background: #9df !important;
            padding: 0px !important;
            top: 40% !important;
            /* right: 10px;*/
            right: 5% !important;
            position: absolute !important;

        }
        .nextButton span {
            font-size: 45px;
            top: 4px !important;
            position: relative;
        }
        .backButton span {
            font-size: 45px;
            top: 4px !important;
            position: relative;
        }
    }
    @media screen and (max-width: 800px) {
        .nextSpan {
            display: none;
        }
        /*.nextButton {*/
        /*    display: inline-block !important;*/
        /*    margin-bottom: 0 !important;*/
        /*    font-weight: 400 !important;*/
        /*    text-align: center !important;*/
        /*    vertical-align: middle !important;*/
        /*    -ms-touch-action: manipulation !important;*/
        /*    touch-action: manipulation !important;*/
        /*    cursor: pointer !important;*/
        /*    background-image: none !important;*/
        /*    border: 1px solid transparent !important;*/
        /*    border-top-color: transparent !important;*/
        /*    border-top-width: 1px !important;*/
        /*    border-right-color: transparent !important;*/
        /*    border-right-width: 1px !important;*/
        /*    border-bottom-color: transparent !important;*/
        /*    border-bottom-width: 1px !important;*/
        /*    border-left-color: transparent !important;*/
        /*    border-left-width: 1px !important;*/
        /*    white-space: nowrap !important;*/
        /*    padding: 6px 12px !important;*/
        /*    font-size: 14px !important;*/
        /*    line-height: 1.42857 !important;*/
        /*    border-radius: 4px !important;*/
        /*    background: orange !important;*/
        /*    color: white;*/
        /*}*/
        .backSpan {
            display: none;
        }
    }

    .backButton span {
        font-size: 45px;
        top: 0px;
        position: relative;
    }
    .backSpan{
        top: 43%;
        left: 25%;
        /*left: 30px;*/
        position: absolute;
        text-transform: uppercase;
        font-weight: 600;
    }


    .nextButton span {
        font-size: 45px;
        top: 0px;
        position: relative;
    }
    .nextSpan{
        top: 43%;
        /*right: 30px;*/
        right: 25%;
        position: absolute;
        text-transform: uppercase;
        font-weight: 600;
    }

    button:focus {
        outline: 0;
    }
    button:hover {
        cursor: pointer;
    }

    .style-two.switch-button.left button.left {
        color: #fff;
    }
    .style-two.switch-button.left .switch {
        left: 5%;
    }
    .style-two.switch-button.right button.right {
        color: #fff;
    }
    .style-two.switch-button.right .switch {
        left: 55%;
    }
    .style-two.switch-button .switch {
        transition: all 0.5s;
        float: left;
        text-align: center;
        z-index: 0;
        background-color: #f08b23;
        width: 40%;
        height: 80%;
        font-weight: 800;
        position: absolute;
        top: 10%;
        border-radius: 100px;
    }
    .style-two.switch-button button {
        float: left;
        background-color: transparent !important;
        color: #f08b23;
        border: 0;
        font-size: 1em;
        padding: 2%;
        width: 50%;
        height: 3em;
        font-weight: 500;
        z-index: 1;
        text-align: center;
        position: relative;
        transition-delay: 0.2s;
    }
    .style-two.switch-button {
        position: relative;
        font-size: 1.2em;
        overflow: hidden;
        width: 300px;
        float: left;
    }
    .style-two.switch-button input {
        display: none;
    }

    .cont {
        height: 70vh;
    }


</style>
