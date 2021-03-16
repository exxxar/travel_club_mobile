<template>
    <div>
        <quick-menu
            :menu-count="3"
            :icon-class="icons"
            :titles="titles"
            :menuUrlList="menuUrlList"
            position="'bottom-left'"
            backgroundColor="#f08b23"
        >
        </quick-menu>
        <div class="row w-100 m-auto align-items-center justify-content-center">

            <div class="container" style="min-height: 100px;">
                <div class="s-partnership" style="display:none;margin-top:60px;min-height: 200px">d4nkQzPS4yIglQZgPqBun3HHLdRjZQH4ZfuI%2BTKaYkI%3D</div>
            </div>

        </div>

        <section class="mb-5" style="height: 100%;">
            <div class="container m-auto" style="height: 100%;">
                <div class="row m-auto justify-content-center align-items-center w-100 h-100">
                    <div class="col-md-6">
                        <promocode-image title1="Оформи" title2="тур" pos="310"></promocode-image>
                    </div>
                    <div class="col-md-6">
                        <div class="row family-row family-description m-auto" style="width: 80%; color: #062348;font-size: 17px;font-weight: 900; font-family:'Open Sans';">
                            <p class="text-center">
                                Не получилось определиться самому? Оформи заявку и наш менеджер тебе поможет!
                            </p>
                            <b-button class="btn-travel btn-group-lg mt-2 mx-auto" href="/tour-module">
                                Оформить заявку
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="footer" id="contacts" style="overflow: hidden">
            <!--Waves Container-->
            <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,153, 0.7)" />
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,204,102, 0.6)" />
                        <!--<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,153, 0.7)" />-->
                        <use xlink:href="#gentle-wave" x="48" y="6" fill="rgba(255,153,0, 1)" />
                    </g>
                </svg>
            </div>
            <!--Waves end-->
            <div class="footer-content flex">
                <div class="row mb-5">
                    <div class="col-12 mb-3">
                        <h1>Готовы к незабываемым приключениям?</h1>
                    </div>
                    <div class="col-12">
                        <button class="footer-btn" type="text" data-toggle="modal" data-target="#customPhoneModal">Заказать звонок</button>
                    </div>
                </div>
            </div>
            <div class="inner-content inner-flex">
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="1" fill="#062348" />
                    </g>
                </svg>
                <div class="row w-100 m-auto" style="height:100%; width:100%">
                    <div class="col-12 col-md-5 tablet-footer-col-12 mx-auto">
                        <div class="row w-100 mx-auto mt-5 justify-content-center">
                            <div class="col-12">
                                <span
                                    class="my-3 mx-auto"
                                    style="background: #f08b23; padding: 5px 10px; border-radius: 50px; font-family: 'Open Sans Extrabold'; text-transform: uppercase; display: inline-block"
                                >
                                    Контакты
                                </span>
                            </div>
                            <div class="col-12 col-sm-6 p-0" v-if="locationByIp.region == 'Donetsk'">
                                <div class="row w-100 m-auto" style="font-family: 'Open Sans';font-weight: 600;">
                                    <div class="col-12 px-1">
                                        <div class="row w-100 m-auto">
                                            <div class="col-1 p-0">
                                                <div class="contact-icon icon icon-mail_outline mr-1"></div>
                                            </div>
                                            <div class="col-11 p-0">
                                                <div class="row w-100 m-auto">
                                                    <a class="ml-2 mb-0" style="color:white" href="mailto:travelclubdonetsk@gmail.com">travelclubdonetsk@gmail.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 px-1">
                                        <div class="row w-100 m-auto">
                                            <div class="col-1 p-0">
                                                <div class="contact-icon icon icon-building mr-1"></div>
                                            </div>
                                            <div class="col-11 p-0">
                                                <div class="row w-100 m-auto" style="text-align: start;">
                                                    <p class="ml-2 mb-0">Г. Донецк, ул. Артема 100Д</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 px-1">
                                        <div class="row w-100 m-auto">
                                            <div class="col-1 p-0">
                                                <div class="contact-icon icon icon-phone mr-1"></div>
                                            </div>
                                            <div class="col-11 p-0">
                                                <div class="row w-100 m-auto">
                                                    <a class="ml-2 mb-0" style="color:white" href="tel:+380713399089">071-339-90-89</a><i class=" mx-1 icon fab fa-viber" style="font-weight: 500;"></i><i class="icon icon-whatsapp"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 px-1" >
                                        <div class="row w-100 m-auto" style="font-size: 10px; text-align: start">
                                         <p class="ml-1 mb-0">Режим работы:</p>
                                            <div class="mb-0 flex"><span style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Пн-Пт 10:00 – 18:00</div>
                                            <div class="mb-0 flex"><span style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Суббота 10:00 – 17:00</div>
                                            <div class="mb-0 flex"><span style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Воскресенье – выходной</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 p-0" v-if="locationByIp.region == 'Donetsk'">
                                <div class="row w-100 m-auto" style="font-family: 'Open Sans';font-weight: 600;">
                                    <div class="col-12 px-1">
                                        <div class="row w-100 m-auto">
                                            <div class="col-1 p-0">
                                                <div class="contact-icon icon icon-building mr-1"></div>
                                            </div>
                                            <div class="col-11 p-0">
                                                <div class="row w-100 m-auto" style="text-align: start;">
                                                    <p class="ml-2 mb-0">Г. Донецк, Бульвар Пушкина 23</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 px-1">
                                        <div class="row w-100 m-auto">
                                            <div class="col-1 p-0">
                                                <div class="contact-icon icon icon-phone mr-1"></div>
                                            </div>
                                            <div class="col-11 p-0">
                                                <div class="row w-100 m-auto">
                                                    <a class="ml-2 mb-0" style="color:white" href="tel:+380712353322">071-235-33-22</a>
                                                    <i class=" mx-1 icon fab fa-viber" style="font-weight: 500;"></i>
                                                    <i class="icon icon-whatsapp"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row w-100 m-auto">
                                            <div class="col-1 p-0">
                                                <div class="contact-icon icon icon-phone mr-1"></div>
                                            </div>
                                            <div class="col-11 p-0">
                                                <div class="row w-100 m-auto">
                                                    <a class="ml-2 mb-0" style="color:white" href="tel:+380959359990">095-935-99-90</a>
                                                    <i class=" mx-1 icon fab fa-viber" style="font-weight: 500;"></i>
                                                    <i class="icon icon-whatsapp"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 px-1" style="font-size: 10px">
                                        <div class="row w-100 m-auto">
                                            <p class="ml-1 mb-0">Режим работы:</p>
                                            <div class="mb-0 flex"><span style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Пн-Пт 10:00 – 18:00</div>
                                            <div class="mb-0 flex"><span style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Суббота 10:00 – 17:00</div>
                                            <div class="mb-0 flex"><span style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Воскресенье – выходной</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-10 col-12 p-0" v-if="locationByIp.region != 'Donetsk'">
                                <div class="row w-100 m-auto" style="font-family: 'Open Sans';font-weight: 600; color:white">
                                    <div class="col-12">
                                        <div class="row w-100 m-auto">
                                            <div class="col-1 p-0">
                                                <div class="contact-icon icon icon-mail_outline mr-1"></div>
                                            </div>
                                            <div class="col-11 p-0">
                                                <div class="row w-100 m-auto">
                                                    <a class="ml-2 mb-0" style="color:white" href="mailto:travelclubrnd@bk.ru">travelclubrnd@bk.ru</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row w-100 m-auto">
                                            <div class="col-1 p-0">
                                                <div class="contact-icon icon icon-building mr-1"></div>
                                            </div>
                                            <div class="col-11 p-0">
                                                <div class="row w-100 m-auto" style="text-align: start;">
                                                    <p class="ml-2 mb-0">Г. Ростов–на–Дону, Социалистическая 11 оф 2А</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row w-100 m-auto">
                                            <div class="col-1 p-0">
                                                <div class="contact-icon icon icon-phone mr-1"></div>
                                            </div>
                                            <div class="col-11 p-0">
                                                <div class="row w-100 m-auto">
                                                    <a class="ml-2 mb-0" style="color:white" href="tel:+79882534149">+7-988-253-41-49</a><i class="mx-1 icon fab fa-viber" style="font-weight: 500;"></i><i class="icon icon-whatsapp"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12" style="font-size: 10px">
                                        <div class="row w-100 mx-auto mt-2">
                                            <p class="ml-1 mb-0">Режим работы:</p>
                                            <div class="mb-0 flex"><span style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Пн-Пт 10:00 – 18:00</div>
                                            <div class="mb-0 flex"><span style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Суббота 10:00 – 17:00</div>
                                            <div class="mb-0 flex"><span style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Воскресенье – выходной</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col-sm-12 tablet-footer-col mx-auto">
                        <div class="row mt-5 mx-auto" style="height:70%; width:100%">
                            <div class="col-12 mb-3 mx-auto">
                                <div class="row m-auto" style="height:50px">
                                    <a class="more-text m-auto" style="color: #f08b23;" @click="toTourSearch">Путешествуй</a>
                                </div>
                            </div>
                            <div class="col-12 mb-3">
                                <div class="row m-auto" style="height:50px">
                                    <a class="more-text m-auto" style="color: #f08b23;" @click="toAviaSearch">Летай</a>
                                </div>
                            </div>
                            <div class="col-12 mb-3">
                                <div class="row m-auto" style="height:50px">
                                    <a class="more-text m-auto" style="color: #f08b23;" @click="toHotelSearch">Познавай</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-sm-12 tablet-footer-col mx-auto" >
                        <div class="row w-100 mt-5 mx-auto" style="height:70%; width:100%">
                            <!--                            <div class="col-12 mb-3 mx-auto">-->
                            <!--                                <div class="row m-auto">-->
                            <!--                                    <div class="more-button ml-5 mr-4">-->
                            <!--                                        &lt;!&ndash;<a href="#" class="icon icon-vk"></a>&ndash;&gt;-->
                            <!--                                        <div class="icon icon-vk"></div>-->
                            <!--                                    </div>-->
                            <!--                                     <h1 class="more-text mr-auto">Lorem ipsum</h1>-->
                            <!--                                </div>-->
                            <!--                            </div>-->
                            <div class="col-12 p-0 mb-3">
                                <div class="row w-100 m-auto align-items-center">
                                    <div class="col-2">
                                        <div class="more-button m-auto">
                                            <!--<a href="#" class="icon icon-instagram"></a>-->
                                            <div class="icon icon-instagram"></div>
                                        </div>
                                    </div>
                                    <div class="col-10">
                                        <a class="more-text m-auto float-left" target="_blank" href="https://www.instagram.com/travelclub_tours">
                                            <h1 class="more-text mr-auto">
                                                @travelclub_tours
                                            </h1>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 p-0 mb-3">
                                <div class="row w-100 m-auto align-items-center">
                                    <div class="col-2">
                                        <div class="more-button m-auto">
                                            <!--<a href="#" class="icon icon-instagram"></a>-->
                                            <div class="icon icon-telegram"></div>
                                        </div>
                                    </div>
                                    <div class="col-10">
                                        <a class="more-text m-auto float-left" target="_blank" href="https://t.me/travelclubtours">
                                            <h1 class="more-text mr-auto">Travel Club Telegram</h1>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 p-0 mb-3">
                                <div class="row w-100 m-auto align-items-center">
                                    <div class="col-2">
                                        <div class="more-button m-auto">
                                            <!--<a href="#" class="icon icon-instagram"></a>-->
                                            <div class="fab fa-viber"></div>
                                        </div>
                                    </div>
                                    <div class="col-10">
                                        <a class="more-text m-auto float-left" target="_blank" href="https://invite.viber.com/?g2=AQBfafsk6TeJiEi4vi0HBbxlHq6j9KfenRbLYssiFJrvfsZPLMirR07MSoBBPQpR">
                                            <h1 class="more-text mr-auto">Travel Club Viber</h1>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12" style="background: #041e3f;border-top: 1px solid #d9d9d942;">
                        <div class="row w-100 m-auto align-items-center justify-content-center">
                            <a class="mx-auto my-2" target="_blank" href="https://donbassit.ru" style="color:white; font-family: 'Open Sans'; font-weight: 900">Made by  <img src="/images/do-it.png" class="mb-2" style="height: 20px;"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        name: "RussiaTourSearch",
        data: () => ({
            icons:["fa fa-comment","fas fa-microphone","fas fa-phone"],
            menuUrlList:["#contactModalBox","#customVoiceModal","#customPhoneModal"],
            titles:["Написать сообщение","Записать голосовое","Заказать звонок"],
        }),
        computed:{
            locationByIp() {
                return this.$store.getters.locationByIp
            },
        },
        mounted() {

            },
        methods:{
            toTourSearch() {
                this.$router.push('/tour-search')
            },
            toAviaSearch() {
                this.$router.push('/avia-search')
                // this.$router.push('/avia-module')

            },
            toHotelSearch() {
                // this.$router.push('/hotel-search')
                // this.$router.push('/hotel-module')
                this.$router.push('/russia-tour-search')
            },
        }
    }
</script>

<style scoped>
    .btn-travel {
        border-radius: 50px;
        background: #f08b23;
        color: white;
        text-transform: uppercase;
        font-family: "Open Sans";
        font-weight: 900;
        font-size: 20px;
        outline: none;
        border: none;
    }
    .footer {
        position: relative;
        text-align: center;
    //background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
        color: white;
        /*height: 65vh;*/
    }
    .inner-header {
        height: 65vh;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .flex {
        /*Flexbox for containers*/
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .waves {
        position: relative;
        width: 100%;
        height: 15vh;
        margin-bottom: -7px;
        /*Fix for safari gap*/
        min-height: 100px;
        max-height: 150px;
    }
    .footer-content {
        position: relative;
        height: 35vh;
        text-align: center;
        background-color: #ff9900;
    }
    .footer-content h1 {
        font-family: 'Open Sans Extrabold';
        /*font-family: 'Bello Pro';*/
    }
    .inner-content{
        position: relative;
        text-align: center;
        background-color: #062348;
        width:100%;
    }
    .inner-content .waves {
        position: absolute;
        top:-75px;
        height: 12vh;
        /*Fix for safari gap*/
        min-height: 70px;
        max-height: 120px;
    }
    .inner-flex{
        /*Flexbox for containers*/
        display: flex;
        justify-content: center;
        align-items: flex-end;
        text-align: center;
    }
    /* Animation */
    .parallax>use {
        animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
    }
    .parallax>use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
    }
    .parallax>use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
    }
    .parallax>use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
    }
    .parallax>use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
    }
    @keyframes move-forever {
        0% {
            transform: translate3d(-90px, 0, 0);
        }
        100% {
            transform: translate3d(85px, 0, 0);
        }
    }
    /*Shrinking for mobile*/
    @media (max-width: 768px) {
        .waves {
            height: 50px;
            min-height: 50px;
            margin-bottom: 0px;
        }
        .footer-content {
            height: 30vh;
        }
        .inner-content .waves {
            top: -45px;
            height: 50px;
            min-height: 50px;
        }
        .footer-content h1 {
            font-size: 27px;
        }
    }

    .footer-btn {
        background-color: #062348;
        border: none;
        color: white;
        font-family: 'Open Sans';
        font-weight: 900;
        font-size: 20px;
        border-radius: 50px;
        text-transform: uppercase;
        padding: 10px 32px;
        text-decoration: none;
        outline: none !important;

    }
    .footer-illustration {
        /*position:absolute;*/
        /*bottom:0px;*/
        /*left: 0px;*/
        width: 100%;
        /*height: 100%;*/
        display: block;
        object-fit: contain;
    }
    .more-text {
        font-family: "Open Sans";
        text-transform: uppercase;
        color: #f08b23;
        font-weight: 600;
        font-size: 16px;
        cursor:pointer;
    }
    .more-button {
        cursor:pointer;
        margin: 0 10px;
        right: 10px;
    }
    .more-button div {
        width: 40px;
        height: 40px;
        display: block;
        border-radius: 50px;
        text-decoration: none;
        font-size: 40px;
        /*line-height: 50px;*/
        color:  white;
        background: #f08b23;
        padding: 0px !important;
    }

    .footer .more-button div {
        width: 50px;
        height: 50px;
        font-size: 30px;
        padding-top: 10px !important
    }
    .footer .more-text {
        color: white;
        font-size: 20px;
        font-weight: 900;
        margin-top: auto;
        margin-bottom: auto;
    }
    @media screen and (max-width: 576px) {
        .tablet-footer-col {
            -ms-flex: 0 0 55%;
            flex: 0 0 55%;
            max-width: 55%;
        }
    }
    @media screen and (max-width: 992px) {
        .tablet-footer-col {
            -ms-flex: 0 0 50% ;
            flex: 0 0 50% ;
            max-width: 50%;
        }
    }
    @media screen and (max-width: 477px) {
        .tablet-footer-col {
            -ms-flex: 0 0 100% !important;
            flex: 0 0 100% !important;
            max-width: 100% !important;
        }
    }

</style>
