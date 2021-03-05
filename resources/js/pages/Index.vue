<template>
    <!-- App Capsule -->
    <div id="appCapsule">

        <div class="header-large-title d-flex justify-content-between align-items-center">
            <div>
                <h1 class="title">Travel<span style="color:orange;font-weight:bold;">Club</span></h1>
                <h4 class="subtitle">Добро пожаловать к нам!</h4>
            </div>

            <div>
                <button type="button" class="btn btn-orange rounded mr-1" data-toggle="modal" aria-label="О Travel Club"
                        data-target="#AboutModal"><i class="far fa-question-circle"></i>
                </button>
            </div>

        </div>

        <header-anim-section/>

        <div class="section full mt-3 mb-3">

            <carousel :items="1" :nav="false">


                <div class="item">
                    <div class="card">
                        <a href="/m/tours" class="travel-card" aria-label="Подобрать путеествие">
                            <img src="/img/travel/1.png" class="card-img-top" alt="image">
                        </a>

                        <div class="card-body pt-2">
                            <h4 class="mb-0 text-center text-uppercase">Подобрать путеествие</h4>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="card">
                        <a href="/m/flies" class="travel-card" aria-label="Подобрать авиобилеты">
                            <img src="/img/travel/2.png" class="card-img-top" alt="image">
                        </a>
                        <div class="card-body pt-2">
                            <h4 class="mb-0 text-center text-uppercase">Подобрать авиобилеты</h4>
                        </div>
                    </div>
                </div>


                <div class="item">
                    <div class="card">
                        <a href="/m/hotels" class="travel-card" aria-label="Подобрать отель">
                            <img src="/img/travel/3.png" class="card-img-top" alt="image">
                        </a>
                        <div class="card-body pt-2">
                            <h4 class="mb-0 text-center text-uppercase">Подобрать отель</h4>
                        </div>
                    </div>
                </div>


                <div class="item">
                    <div class="card card-with-blue-line" text="Новинка">
                        <a href="/m/adventure" class="travel-card" aria-label="Туры по России">
                            <img src="/img/travel/4.png" class="card-img-top" alt="image">
                        </a>
                        <div class="card-body pt-2">
                            <h4 class="mb-0 text-center text-uppercase">Туры по России</h4>
                        </div>
                    </div>
                </div>


            </carousel>


        </div>


        <div class="section mt-3 mb-3">
            <div class="card">
                <div class="card-body d-flex justify-content-between align-items-end">
                    <div>
                        <h6 class="card-subtitle">Используй удобства!</h6>
                        <h5 class="card-title mb-0 d-flex align-items-center justify-content-between">
                            Ночная тема
                        </h5>
                    </div>
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input dark-mode-switch" id="darkmodeswitch">
                        <label class="custom-control-label" for="darkmodeswitch"></label>
                    </div>

                </div>
            </div>
        </div>


        <div class="section mt-3 mb-3">
            <div class="card">
                <img src="/img/travel/s1.png" class="card-img-top" alt="image">
                <div class="card-body">
                    <h6 class="card-subtitle">Путешествуй</h6>
                    <h5 class="card-title">С TravelClub</h5>
                    <p class="card-text">
                        Данный раздел позволяет сделать подбор пакетного тура по всему миру от ведущих туристических
                        оператов.

                        Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.

                        Вам также будут доступны реальные отзывы на каждый объект размещения.
                    </p>
                    <a href="app-components.html" class="btn btn-orange w-100" aria-label="Начать прямо сейчас">
                        <i class="fas fa-arrow-right mr-2"></i>
                        НАЧАТЬ ПРЯМО СЕЙЧАС
                    </a>
                </div>
            </div>
        </div>

        <div class="section mt-3 mb-3">
            <div class="card">
                <img src="/img/travel/s2.png" class="card-img-top" alt="image">
                <div class="card-body">
                    <h6 class="card-subtitle">Летай</h6>
                    <h5 class="card-title">С TravelClub</h5>
                    <p class="card-text">
                        В данном разделе Вы сможете приобрести авиабилет в любую точку.

                        Возможна оплата онлайн или сделать заказ с сайта.
                    </p>
                    <a href="app-pages.html" class="btn btn-orange w-100" aria-label="Начать прямо сейчас">
                        <i class="fas fa-arrow-right mr-2"></i>
                        НАЧАТЬ ПРЯМО СЕЙЧАС
                    </a>
                </div>
            </div>
        </div>

        <div class="section mt-3 mb-3">
            <div class="card">
                <img src="/img/travel/s3.png" class="card-img-top" alt="image">
                <div class="card-body">
                    <h6 class="card-subtitle">Туры</h6>
                    <h5 class="card-title">По России</h5>
                    <p class="card-text">
                        Путешествуй с Travel Club по всей России.

                        Возможна оплата онлайн или сделать заказ с сайта.
                    </p>
                    <a href="app-pages.html" class="btn btn-orange w-100" aria-label="Начать прямо сейчас">
                        <i class="fas fa-arrow-right mr-2"></i>
                        НАЧАТЬ ПРЯМО СЕЙЧАС

                    </a>
                </div>
            </div>
        </div>

        <div class="section mt-3 mb-3">
            <div class="error-page">
                <div class="mb-2">
                    <img src="/img/travel/family-illustration.png" alt="alt" class="imaged square w200">
                </div>
                <h1 class="title">Наша семья</h1>
                <div class="text mb-3">
                    <h4>Стань частью нашей семьи</h4>
                    <p>С нами путешествует семья тревел-блогеров Любава и Алеша <a
                        href="https://www.instagram.com/goodiets/">@goodiets</a></p>
                </div>
                <div class="mb-2 ">
                    <img src="/img/travel/goodiets.png" alt="alt" class="imaged square w200">

                    <div class="coming-soon-img"></div>

                </div>

                <div id="countDown" class="mb-5">
                    <div>655<span>Days</span></div>
                    <div>19<span>Hours</span></div>
                    <div>49<span>Minutes</span></div>
                    <div>58<span>Seconds</span></div>
                </div>


            </div>
        </div>

        <div class="section">

        </div>
        <!-- app footer -->
        <div class="appFooter">
            <img src="/img/logo.png" alt="icon" class="footer-logo mb-2">
            <text-callback-form/>

            <div class="footer-title">
                Copyright © DoIt 2021. All Rights Reserved.
            </div>


            <div>Разработано команией Donbass IT</div>
           Доступные технологии для вашего бизнеса;)

            <div class="mt-2">

                <a href="https://t.me/travelclubtours" rel="noreferrer" target="_blank"
                   class="btn btn-icon btn-lg btn-twitter" aria-label="Ссылка на телеграм">
                    <i class="fab fa-telegram-plane"></i>
                </a>

                <a href="https://www.instagram.com/travelclub_tours" rel="noreferrer" target="_blank"
                   class="btn btn-icon btn-lg btn-instagram" aria-label="Ссылка на инстаграм">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://invite.viber.com/?g2=AQBfafsk6TeJiEi4vi0HBbxlHq6j9KfenRbLYssiFJrvfsZPLMirR07MSoBBPQpR"
                   target="_blank" rel="noreferrer" class="btn btn-icon btn-lg btn-whatsapp" aria-label="Ссылка на вотсап">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <a href="#" rel="noreferrer" class="btn btn-icon btn-lg btn-secondary goTop" aria-label="Переход к верху сайта">
                    <i class="fas fa-arrow-up"></i>
                </a>
            </div>


            <button type="button" class="btn btn-orange rounded mt-5" data-toggle="modal" data-target="#ContactModal" aria-label="Модальное окно контактов">
                Наши контакты
            </button>


        </div>
        <!-- * app footer -->


        <footer-anim-section/>
    </div>
    <!-- * App Capsule -->

</template>
<script>
    import carousel from 'vue-owl-carousel'
    import Cookies from "js-cookie";

    export default {
        data() {
            return {
                deferredPrompt: null
            }
        },
        mounted() {

        },
        created() {
            window.addEventListener("beforeinstallprompt", e => {
                e.preventDefault();
                // Stash the event so it can be triggered later.

                if (Cookies.get("add-to-home-screen") === undefined) {
                    this.deferredPrompt = e;
                }
            });
            window.addEventListener("appinstalled", () => {
                this.deferredPrompt = null;
            });
        },
        methods: {
            async dismiss() {
                Cookies.set("add-to-home-screen", null, { expires: 15 });
                this.deferredPrompt = null;
            },
            async install() {
                this.deferredPrompt.prompt();
            }
        },
        components: {carousel},
    }
</script>
<style lang="scss">
    .owl-item {
        .item {
            padding: 40px;

            .travel-card {

                background: #f9e701;
                background: linear-gradient(
                        0deg, #f9e701 0%, #f89209 50%, #f87501 100%);
                min-height: 410px;
                position: relative;
                border-radius: 5px;
                height: 450px !important;

                img {
                    position: absolute;
                    bottom: 0px;
                    object-fit: contain;
                }
            }


        }

    }

    .orange-block {
        width: 100%;
        height: 53px;
        background: #ff9900;
        border: none;
        position: relative;
        /* top: -1px; */
        box-shadow: none;
        z-index: 0;

    }


    .info-card {
        height: 500px;
        background: orange !important;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
    }

</style>
