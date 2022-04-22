<template>
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
                    <button class="footer-btn" type="text" data-toggle="modal" data-target="#customPhoneModal">
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
                                                <a class="ml-2 mb-0" style="color:white"
                                                   href="mailto:travelclubdonetsk@gmail.com">travelclubdonetsk@gmail.com</a>
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
                                                <a class="ml-2 mb-0" style="color:white" href="tel:88001019666">8-800-101-96-66</a><i
                                                class=" mx-1 icon fab fa-viber" style="font-weight: 500;"></i><i
                                                class="icon icon-whatsapp"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 px-1">
                                    <div class="row w-100 m-auto" style="font-size: 10px; text-align: start">
                                        <p class="ml-1 mb-0">Режим работы:</p>
                                        <div class="mb-0 flex"><span
                                            style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Пн-Пт
                                            10:00 – 18:00
                                        </div>
                                        <div class="mb-0 flex"><span
                                            style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Суббота
                                            10:00 – 17:00
                                        </div>
                                        <div class="mb-0 flex"><span
                                            style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Воскресенье
                                            – выходной
                                        </div>

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
                                        <div class="mb-0 flex"><span
                                            style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Пн-Пт
                                            10:00 – 18:00
                                        </div>
                                        <div class="mb-0 flex"><span
                                            style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Суббота
                                            10:00 – 17:00
                                        </div>
                                        <div class="mb-0 flex"><span
                                            style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Воскресенье
                                            – выходной
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-10 col-12 p-0" v-if="locationByIp.region != 'Donetsk'">
                            <div class="row w-100 m-auto"
                                 style="font-family: 'Open Sans';font-weight: 600; color:white">
                                <div class="col-12">
                                    <div class="row w-100 m-auto">
                                        <div class="col-1 p-0">
                                            <div class="contact-icon icon icon-mail_outline mr-1"></div>
                                        </div>
                                        <div class="col-11 p-0">
                                            <div class="row w-100 m-auto">
                                                <a class="ml-2 mb-0" style="color:white"
                                                   href="mailto:travelclubrnd@bk.ru">travelclubrnd@bk.ru</a>
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
                                                <p class="ml-2 mb-0">Г. Ростов–на–Дону, Социалистическая 11 оф
                                                    2А</p>
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
                                                <a class="ml-2 mb-0" style="color:white" href="tel:+79882534149">+7-988-253-41-49</a><i
                                                class="mx-1 icon fab fa-viber" style="font-weight: 500;"></i><i
                                                class="icon icon-whatsapp"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12" style="font-size: 10px">
                                    <div class="row w-100 mx-auto mt-2">
                                        <p class="ml-1 mb-0">Режим работы:</p>
                                        <div class="mb-0 flex"><span
                                            style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Пн-Пт
                                            10:00 – 18:00
                                        </div>
                                        <div class="mb-0 flex"><span
                                            style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Суббота
                                            10:00 – 17:00
                                        </div>
                                        <div class="mb-0 flex"><span
                                            style="width: 8px; height: 8px; background: #f08b23; border-radius: 50%; margin: 0px 5px; display: block"></span>Воскресенье
                                            – выходной
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 col-sm-12 ">
                    <div class="row mt-5 mx-auto" style="height:70%; width:100%">
                        <div class="col-12 mb-3 mx-auto">
                            <div class="row m-auto" style="height:50px">
                                <a class="more-text m-auto" style="color: #f08b23;"
                                   v-scroll-to="'#travel'">Путешествуй</a>
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <div class="row m-auto" style="height:50px">
                                <a class="more-text m-auto" style="color: #f08b23;" v-scroll-to="'#avia'">Летай</a>
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <div class="row m-auto" style="height:50px">
                                <a class="more-text m-auto" style="color: #f08b23;"
                                   v-scroll-to="'#russia'">Познавай</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 col-sm-12">
                    <div class="row w-100 mt-5 mx-auto" style="height:70%; width:100%">

                        <div class="col-12 p-0 mb-3">
                            <div class="row w-100 m-auto align-items-center">
                                <div class="col-2">
                                    <div class="more-button m-auto">

                                        <div class="icon icon-instagram"></div>
                                    </div>
                                </div>
                                <div class="col-10">
                                    <a class="more-text m-auto float-left p-2 text-center w-100" target="_blank"
                                       href="https://www.instagram.com/travelclub_tours">
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
                                    <a class="more-text m-auto float-left p-2 text-center w-100" target="_blank"
                                       href="https://t.me/travelclubtours">
                                        <h1 class="more-text mr-auto">Travel Club Telegram</h1>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 p-0 mb-3">
                            <div class="row w-100 m-auto align-items-center ">
                                <div class="col-2">
                                    <div class="more-button m-auto">
                                        <!--<a href="#" class="icon icon-instagram"></a>-->
                                        <div class="fab fa-viber"></div>
                                    </div>
                                </div>
                                <div class="col-10">
                                    <a class="more-text m-auto float-left p-2 text-center w-100" target="_blank"
                                       href="https://invite.viber.com/?g2=AQBfafsk6TeJiEi4vi0HBbxlHq6j9KfenRbLYssiFJrvfsZPLMirR07MSoBBPQpR">
                                        <h1 class="more-text mr-auto">Travel Club Viber</h1>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12" style="background: #041e3f;border-top: 1px solid #d9d9d942;">
                    <div class="row w-100 m-auto align-items-center justify-content-center">
                        <a class="mx-auto my-2" target="_blank" href="https://donbassit.ru"
                           style="color:white; font-family: 'Open Sans'; font-weight: 900">Made by <img
                            src="/images/do-it.png" class="mb-2" style="height: 20px;"/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {

    }
</script>
