<template>
    <!-- App Capsule -->
    <div id="appCapsule"
         v-touch:swipe.bottom="swipeHandlerBottomTop"
         v-touch:swipe.top="swipeHandlerBottomTop"
         v-touch:swipe.left="swipeHandlerLeft"
         v-touch:swipe.right="swipeHandlerRight">

        <div class="header-large-title d-flex justify-content-between align-items-center">
            <div>
                <h1 class="title">В<span style="color:orange;font-weight:bold;">ПУТЬ</span></h1>
                <h4 class="subtitle">Добро пожаловать к нам!</h4>
            </div>

            <div>
                <button type="button" class="btn btn-orange rounded mr-1"  data-bs-toggle="modal" aria-label="О ВПУТЬ"
                        data-bs-target="#AboutModal">О нас
                </button>
            </div>

        </div>

        <header-anim-section/>

        <div class="section full mt-3 mb-3">

            <carousel :loop="true" :items="1" :nav="false">


                <div class="item ">
                    <div class="card pulse">
                        <a href="https://travel-club.tours/m/tours" class="travel-card"
                           aria-label="Подобрать путеествие">
                            <img v-lazy="'/img/travel/1.png'" class="card-img-top" alt="image">
                        </a>

                        <div class="card-body pt-2">
                            <h4 class="mb-0 text-center text-uppercase">Подобрать путешествие</h4>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="card card-with-blue-line pulse" text="Новинка">
                        <a href="https://travel-club.tours/m/adventure" class="travel-card" aria-label="Туры по России">
                            <img v-lazy="'/img/travel/4.png'" class="card-img-top" alt="image">
                        </a>
                        <div class="card-body pt-2">
                            <h4 class="mb-0 text-center text-uppercase">Туры по России</h4>
                        </div>
                    </div>
                </div>


                <div class="item">
                    <div class="card card-with-red-line pulse" text="Скоро">
                        <a href="https://travel-club.tours/m/hot-tours" class="travel-card"
                           aria-label="Горящие туры">
                            <img v-lazy="'/img/travel/2.png'" class="card-img-top" alt="image">
                        </a>
                        <div class="card-body pt-2">
                            <h4 class="mb-0 text-center text-uppercase">Горящие туры</h4>
                        </div>
                    </div>
                </div>

                <!--
                                <div class="item">
                                    <div class="card">
                                        <a href="/m/hotels" class="travel-card" aria-label="Подобрать отель">
                                            <img src="/img/travel/3.png" class="card-img-top" alt="image">
                                        </a>
                                        <div class="card-body pt-2">
                                            <h4 class="mb-0 text-center text-uppercase">Подобрать отель</h4>
                                        </div>
                                    </div>
                                </div>-->


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

        <story-list/>

        <latest-news-block/>


        <div class="section mt-3 mb-3">
            <div class="card">
                <img v-lazy="'/img/travel/s1.png'" class="card-img-top" alt="image">
                <div class="card-body">
                    <h6 class="card-subtitle">Путешествуй</h6>
                    <h5 class="card-title">С ВПУТЬ</h5>
                    <p class="card-text">
                        Данный раздел позволяет сделать подбор пакетного тура по всему миру от ведущих туристических
                        операторов.

                        Вы с лёгкостью сможете провести оплату онлайн или сделать заказ с сайта.

                        Вам также будут доступны реальные отзывы на каждый объект размещения.
                    </p>
                    <a href="https://travel-club.tours/m/tours" class="btn btn-orange w-100"
                       aria-label="Начать прямо сейчас">
                        <i class="fas fa-arrow-right mr-2"></i>
                        НАЧАТЬ ПРЯМО СЕЙЧАС
                    </a>
                </div>
            </div>
        </div>

        <div class="section mt-3 mb-3">
            <div class="card">
                <img v-lazy="'/img/travel/s2.png'" class="card-img-top" alt="image">
                <div class="card-body">
                    <h6 class="card-subtitle">Летай</h6>
                    <h5 class="card-title">С ВПУТЬ</h5>
                    <p class="card-text">
                        В данном разделе Вы сможете приобрести авиабилет в любую точку.

                        Возможна оплата онлайн или сделать заказ с сайта.
                    </p>
                    <a href="https://travel-club.tours/m/hot-tours" class="btn btn-orange w-100"
                       aria-label="Начать прямо сейчас">
                        <i class="fas fa-arrow-right mr-2"></i>
                        НАЧАТЬ ПРЯМО СЕЙЧАС
                    </a>
                </div>
            </div>
        </div>

        <div class="section mt-3 mb-3">
            <div class="card">
                <img v-lazy="'/img/travel/s3.png'" class="card-img-top" alt="image">
                <div class="card-body">
                    <h6 class="card-subtitle">Туры</h6>
                    <h5 class="card-title">По России</h5>
                    <p class="card-text">
                        Путешествуй с ВПУТЬ по всей России.

                        Возможна оплата онлайн или сделать заказ с сайта.
                    </p>
                    <a href="https://travel-club.tours/m/russia-tours" class="btn btn-orange w-100"
                       aria-label="Начать прямо сейчас">
                        <i class="fas fa-arrow-right mr-2"></i>
                        НАЧАТЬ ПРЯМО СЕЙЧАС
                    </a>
                </div>
            </div>
        </div>

        <!-- app footer -->
        <div class="appFooter">
            <img v-lazy="'/img/logo.png'" alt="icon" class="footer-logo mb-2">
            <text-callback-form/>

            <div class="footer-title">
                Copyright © DoIt 2021. All Rights Reserved.
            </div>


            <div>Разработано компанией Donbass IT</div>
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
                <a href="https://wa.me/79064167872"
                   target="_blank" rel="noreferrer" class="btn btn-icon btn-lg btn-whatsapp"
                   aria-label="Ссылка на вотсап">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <a href="#" rel="noreferrer" class="btn btn-icon btn-lg btn-secondary goTop"
                   aria-label="Переход к верху сайта">
                    <i class="fas fa-arrow-up"></i>
                </a>
            </div>


            <button type="button" class="btn btn-orange rounded mt-5"  data-bs-toggle="modal" data-bs-target="#ContactModal"
                    aria-label="Модальное окно контактов">
                Наши контакты
            </button>

        </div>
        <!-- * app footer -->


        <footer-anim-section/>
    </div>
    <!-- * App Capsule -->

</template>
<script>
    import VueCountdown from '@chenfengyuan/vue-countdown';
    import carousel from 'vue-owl-carousel'

    export default {


        methods: {

            swipeHandlerRight() {
                eventBus.$emit("right-swipe");
            },
            swipeHandlerLeft() {
                eventBus.$emit("left-swipe");
            },
            swipeHandlerBottomTop() {
                this.$store.dispatch('closeModal', '.stories');
                // $(".stories").modal("hide");
                /*
                              this.$notify({
                                  title: 'Максим',
                                  text: 'Понравилась история? Давай также;)',
                                  group: 'main'
                              });*/
            }
        },
        components: {carousel, VueCountdown},
    }
</script>
<style lang="scss">

    .owl-item {
        display: flex;
        justify-content: center;

        .item {
            padding: 40px;
            width: 100%;
            //min-width: 480px;

            .travel-card {

                background: #f9e701;
                background: linear-gradient(
                        0deg, #f9e701 0%, #f89209 50%, #f87501 100%);
                min-height: 410px;
                position: relative;
                border-radius: 5px;
                height: 450px !important;
                overflow: hidden;

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
