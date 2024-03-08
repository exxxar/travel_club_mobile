<template>
    <footer id="footer">
        <section class="footer" id="contacts" style="overflow: hidden">
            <!--Waves Container-->
            <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave"
                              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,153, 0.7)"/>
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,204,102, 0.6)"/>
                        <!--<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,153, 0.7)" />-->
                        <use xlink:href="#gentle-wave" x="48" y="6" fill="rgba(255,153,0, 1)"/>
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
                        <button class="footer-btn" type="text" data-bs-toggle="modal" data-bs-target="#customPhoneModal">
                            Заказать звонок
                        </button>
                    </div>
                </div>
            </div>
            <div class="inner-content inner-flex">
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave"
                              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="1" fill="#062348"/>
                    </g>
                </svg>
<!--                <div class="row w-100 footer-last m-auto">-->
<!--                    <div class="col-12 col-md-12">-->
<!--                        <button class="btn btn-orange rounded btn-footer-contact" @click="sidebarOpen">-->
<!--                            Контакты-->
<!--                        </button>-->

<!--                    </div>-->
<!--                    &lt;!&ndash;    <div class="col-12 col-md-3 col-sm-12 ">-->
<!--                            <div class="row mt-5 mx-auto" style="height:70%; width:100%">-->
<!--                                <div class="col-12 mb-3 mx-auto">-->
<!--                                    <div class="row m-auto" style="height:50px">-->
<!--                                        <a class="more-text m-auto" style="color: #f08b23;"-->
<!--                                           v-scroll-to="'#travel'">Путешествуй</a>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-12 mb-3">-->
<!--                                    <div class="row m-auto" style="height:50px">-->
<!--                                        <a class="more-text m-auto" style="color: #f08b23;" v-scroll-to="'#avia'">Летай</a>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-12 mb-3">-->
<!--                                    <div class="row m-auto" style="height:50px">-->
<!--                                        <a class="more-text m-auto" style="color: #f08b23;"-->
<!--                                           v-scroll-to="'#russia'">Познавай</a>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-12 col-md-4 col-sm-12">-->
<!--                            <div class="row w-100 mt-5 mx-auto" style="height:70%; width:100%">-->

<!--                                <div class="col-12 p-0 mb-3">-->
<!--                                    <div class="row w-100 m-auto align-items-center">-->
<!--                                        <div class="col-2">-->
<!--                                            <div class="more-button m-auto">-->

<!--                                                <div class="icon icon-instagram"></div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="col-10">-->
<!--                                            <a class="more-text m-auto float-left p-2 text-center w-100" target="_blank"-->
<!--                                               href="https://www.instagram.com/travelclub_tours">-->
<!--                                                <h1 class="more-text mr-auto">-->
<!--                                                    @travelclub_tours-->
<!--                                                </h1>-->
<!--                                            </a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-12 p-0 mb-3">-->
<!--                                    <div class="row w-100 m-auto align-items-center">-->
<!--                                        <div class="col-2">-->
<!--                                            <div class="more-button m-auto">-->
<!--                                                &lt;!&ndash;<a href="#" class="icon icon-instagram"></a>&ndash;&gt;-->
<!--                                                <div class="icon icon-telegram"></div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="col-10">-->
<!--                                            <a class="more-text m-auto float-left p-2 text-center w-100" target="_blank"-->
<!--                                               href="https://t.me/travelclubtours">-->
<!--                                                <h1 class="more-text mr-auto">Travel Club Telegram</h1>-->
<!--                                            </a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-12 p-0 mb-3">-->
<!--                                    <div class="row w-100 m-auto align-items-center ">-->
<!--                                        <div class="col-2">-->
<!--                                            <div class="more-button m-auto">-->
<!--                                                &lt;!&ndash;<a href="#" class="icon icon-instagram"></a>&ndash;&gt;-->
<!--                                                <div class="fab fa-viber"></div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="col-10">-->
<!--                                            <a class="more-text m-auto float-left p-2 text-center w-100" target="_blank"-->
<!--                                               href="https://invite.viber.com/?g2=AQBfafsk6TeJiEi4vi0HBbxlHq6j9KfenRbLYssiFJrvfsZPLMirR07MSoBBPQpR">-->
<!--                                                <h1 class="more-text mr-auto">Travel Club Viber</h1>-->
<!--                                            </a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-12" style="background: #041e3f;border-top: 1px solid #d9d9d942;">-->
<!--                            <div class="row w-100 m-auto align-items-center justify-content-center">-->
<!--                                <a class="mx-auto my-2" target="_blank" href="https://donbassit.ru"-->
<!--                                   style="color:white; font-weight: 900"><img-->
<!--                                    src="/images/do-it.png" class="mb-2" style="height: 20px;"/></a>-->
<!--                            </div>-->
<!--                        </div>&ndash;&gt;-->
<!--                </div>-->


            </div>
        </section>
        <div class="zerogrid wrap-footer">
            <div class="row">
                <div class="col-12 col-md-4 footer-1">
                    <div class="wrap-col">
                        <h3 class="widget-title">О нас</h3>
                        <p class="text-white">Коллектив туристического агентства «TravelClub» рады приветствовать Вас на нашем сайте. Мы
                            поможем сделать Ваш долгожданный отпуск полным красочных впечатлений и ярких
                            воспоминаний. </p>
                        <p  class="text-white">Это может быть горящий тур в Египет, Турцию, Тунис, ОАЭ, Черногорию, Хорватию, Италию,
                            Болгарию, если Вы хотите понежиться под теплыми лучами солнца и поплавать в море. </p>
                        <ul class="quicklinks w-100 d-flex justify-content-end">
                            <!-- <li><a href="about.html">Подробнее</a></li>-->
                            <li><a target="_blank" href="https://yandex.ru/maps/142/donetsk/house/bulvar_pushkina_23/Z04YfgdiSEwDQFpifXxxc3VgYg==/?from=api-maps&ll=37.802265%2C48.002741&origin=jsapi21&z=18.9">Мы на карте</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 footer-2 d-flex justify-content-center">
                    <div class="wrap-col text-center">
                        <h3 class="widget-title">Контакты</h3>
                        <p  class="text-white">Телефоны:</p>
                        <strong style="font-size: 18px;color:#A9A9A9;">+7 (949) 235-33-22</strong>
                        <p class="text-white">Адрес:</p>
                        <strong style="color:#A9A9A9;">г.Донецк, Бульвар Пушкина, 23</strong>
                        <p class="text-white">Email:</p>
                        <strong style="color:#A9A9A9;">travelclubrnd@bk.ru</strong>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 footer-3 d-flex justify-content-center">
                    <div class="wrap-col text-center">
                        <h3 class="widget-title text-center">Мы в соцсетях</h3>
                        <ul class="social-buttons d-flex justify-content-center">
                            <!--                            <li><a href="https://vk.com/rozovyi_slon_donetsk"><i class="fab fa-vk"></i></a></li>-->
                            <li>
                                <a href="https://www.instagram.com/travelclub_tours/">
                                    <base-icon name="Instagram"></base-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/travelclubtours">
                                    <base-icon name="Telegram"></base-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/79064167872">
                                    <base-icon name="WhatsApp"></base-icon>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
        <div class="bottom-footer">
        <div class="copyright">
            www.travel-club.tours&nbsp;|&nbsp; 2017 – {{new Date() | moment('YYYY')}}
        </div>
    </div>
    </footer>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="scss">

    /* ---------------------------------------------------------------------------- */
    /* -------------------------------------Footer--------------------------------- */
    /* ---------------------------------------------------------------------------- */
    footer#footer {
        background: #001025;
        font-size: 14px;
        position: relative;
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        display: block;
        border-bottom: 2px white solid;
    }

    footer a {
        color: #ed6427
    }

    footer a:hover {
        color: #fff
    }

    footer .widget-title {
        text-transform: capitalize;
        margin-bottom: 30px;
        color: #ed6427;
    }

    footer .wrap-footer {
        padding: 70px 60px 0;
    }

    footer .brand-footer {
        font-size: 57px;
        text-transform: uppercase;
        letter-spacing: 5px;
        color: #777;
    }

    footer ul li {
        margin-bottom: 5px;
        padding: 10px 0 15px;
        display: inline-block;
    }

    footer ul.quicklinks li {
        position: relative;
        padding: 0 10px;
    }

    footer ul.quicklinks li:after {
        position: absolute;
        content: "";
        border-right: 1px solid #777;
        height: 16px;
        top: 5px;
        padding-left: 10px;
    }

    footer ul.quicklinks li:last-child:after {
        display: none;
    }

    footer ul.quicklinks li:first-child {
        padding-left: 0;
    }

    footer .col-footer-1 {
    }

    footer .col-footer-2 p {
        margin: 5px 0 0;
    }

    footer .col-footer-2 strong {
        font-size: 17px;
    }

    footer .col-footer-3 {
    }

    footer .col-footer-3 ul.social-buttons {
    }

    footer .col-footer-3 ul.social-buttons li a {
        font-size: 32px;
        margin: 15px;
    }

    footer .bottom-footer {
        margin-top: 50px;
    }

    .copyright {
        background: #1a1c1e;
        color: #777;
        padding: 20px;
        text-align: center;
    }

    @media all and (max-width: 768px) {
        footer#footer {
            position: relative;
        }
        .copyright {
            text-align: center;
        }
        .copyright ul.quick-link {
            float: none;
            margin-top: 10px;
        }
    }
</style>
