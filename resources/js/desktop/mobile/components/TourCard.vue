<template>
    <div>
        <div class="modal fade modalbox show"
             :id="'ModalForm'+tour[0]"  data-bs-backdrop="static"
             tabindex="-1" role="dialog"
             aria-modal="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Купить тур №{{tour[0]}}</h5>
                        <a href="javascript:;"  data-bs-dismiss="modal" style="text-decoration: none">Закрыть</a>
                    </div>
                    <div class="modal-body">
                        <div class="start-form">
                            <div class="section mx-auto">
                                <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
                                    <div class="col-12 col-8 col-sm-12">
                                        <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                                            <div class="col-7 p-0">
                                                <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                                    <h1 class="title-1"><span>З</span>аполните</h1>
                                                    <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                                                </div>
                                            </div>
                                            <div class="col-7 p-0">
                                                <div class="row ml-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                                    <h1 class="title-2"><span>форму</span></h1>
                                                    <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section mt-2 text-center">
<!--                                <h1>Заполните форму</h1>-->
                                <p>Данные нужны для уточнения оплаты и оформления договора</p>
                            </div>
                            <div class="section mt-4 mb-5">
                                <ValidationObserver v-slot="{ invalid }">

                                    <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label">Ваше Ф.И.О.</label>
                                                    <ValidationProvider name="name" rules="required" v-slot="{ errors }" style="width: 85%;">
                                                        <input type="text" name="name" class="form-control" v-model="order.name" placeholder="Ваше Ф.И.О."
                                                               required>
                                                        <i class="clear-input icon icon-close" v-show="order.name.length >0" @click="order.name=''">
                                                        </i>
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                    </div>
                            </div>
                                        <div class="form-group basic">
                                        <div class="input-wrapper">
                                            <label class="label">Номер телефона</label>
                                                    <ValidationProvider name="phone" rules="required" v-slot="{ errors }" style="width: 85%;">
                                                        <input type="text" name="phone" class="form-control" v-model="order.phone"
                                                               pattern="[\+]\d{2} [\(]\d{3}[\)] \d{3}[\-]\d{2}[\-]\d{2}"
                                                               maxlength="19"
                                                               v-mask="['+38 (###) ###-##-##']"
                                                               placeholder="Номер телефона" required>
                                                        <i class="clear-input icon icon-close" v-show="order.phone.length >0" @click="order.phone=''">
                                                        </i>
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                        </div>
                                        </div>
                                    <div class="form-group basic">
                                        <div class="input-wrapper">
                                            <label class="label">E-mail</label>
                                                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }" style="width: 85%;">
                                                        <input type="text" name="email" class="form-control" v-model="order.email"
                                                               placeholder="Email" required>
                                                        <i class="clear-input icon icon-close" v-show="order.email.length >0" @click="order.email=''">
                                                        </i>
                                                            <span class="validate-error">{{ errors[0] }}</span>
                                                    </ValidationProvider>

                                        </div>
                                    </div>
                                    <div class="form-group basic">
                                        <div class="input-wrapper">
                                            <label class="label">Дополнительная информация</label>
                                                    <textarea name="message" v-model="order.message" class="form-control"
                                                              placeholder="Текст сообщения" style="min-height: 100px">
                                                    </textarea>
                                            <i class="clear-input icon icon-close" v-show="order.message.length >0" @click="order.message=''">
                                            </i>
                                        </div>
                                    </div>
                                        <div class="col-12 contact-btn form-button-group">
                                            <button type="submit" class="btn btn-block btn-lg" style="width: 100%" :disabled="invalid" @click="sendRequest(chosen_tour)">Отправить</button>
                                        </div>
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mx-auto my-2  travel-card justify-content-center" style="width: 100%;height: 100%;">
            <div class="col-12" style="border-bottom: 2px solid antiquewhite;">
                <div class="travel-card-description row m-auto justify-content-center" style="width: 100%;height: 100%;">
                    <div class="col-12">
                        <div class="row mx-auto mt-3 align-items-center" style="color:#f08b23; font-size: 15px;">
                            <div class="icon icon-calendar mr-2" style="color:#0f213d"></div> <span>{{tour[12]}} - {{tour[13]}}</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row mx-auto mt-1 align-items-center" style="color:rgb(15, 33, 61); font-size: 15px;">
                            <div class="icon icon-clock-o mr-2" style="color:#0f213d"></div> <span>{{tour[14]}} ночей</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row mx-auto align-items-center">
                            <div class="col-8 p-0">
                                <div class="row mx-auto mt-1 align-items-center" style="color:#f08b23; font-size: 15px;">
                                    <div class="icon fas fa-plane-departure mr-2" style="color:#0f213d"></div> <span> {{tour[18]}}</span>
                                </div>
                            </div>
                            <div class="col-4 p-0">
                                <div class="row m-auto align-items-center justify-content-center h-100 w-100">
                                    <div class="col-12 p-0">
                                        <div class="row mx-auto align-items-center ">
                                            <img class="ml-auto mr-0" :src="tour[34]" style="height: 26px;object-fit: contain;" >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="travel-card-description row m-auto align-items-center justify-content-center" style="width: 100%;height: 100%;">
                        <div class="row mx-auto mt-3 mb-3 align-items-center" style="">
                            <div class="icon fas fa-hotel mr-2" style="color:#0f213d;  font-size: 13px;"></div>{{tour[7]}}  <span class="values__hotel-rating ml-2" style="color: #0f213d">{{tour[8]}}</span>
                        </div>
                        <div class="row m-auto align-items-center px-3">
                            <p style="font-size: 13px; font-weight:600;">{{tour[36]}}, {{tour[37]}}</p>
                        </div>
                        <div class="row mx-auto mt-2 mb-2 align-items-center">
                            {{tour[19]}}, {{tour[31]}}
                        </div>
                </div>
            </div>
            <div class="col-12">
                <div class="travel-card-description row m-auto align-items-center justify-content-center h-100 w-100">
                    <div class="col-12 p-0 text-center">
                        <div class="row my-auto align-items-center justify-content-center">
                            <span class="white--text active-tour m-auto" style="font-size: 20px">{{tour[42]}} ₽</span>
                        </div>
                        <div class="row m-auto align-items-center justify-content-center">
                            <p style="font-size: 13px; font-weight:600;">За {{tour[16]}} {{tour[16] | pluralizeAdults}} <span v-if="tour[17]!=0">, за {{tour[17]}} {{tour[17] | pluralizeChildren}}</span></p>
                        </div>
                    </div>
                    <div class="col-12 p-0">
                        <div class="row mx-auto mb-2 align-items-center justify-content-center">
                            <button class="btn btn-block btn-lg" @click="buy"  data-bs-toggle="modal" :data-bs-target="'#ModalForm'+tour[0]">Купить</button>
                        </div>
                    </div>
                </div>
            </div>



            <!--            если будут отели-->
            <!--            <div class="col-4 col-sm-12 p-0">-->
            <!--                <div class="mx-auto v-card elevation-24" style="height: 250px; max-width: 100%; border-radius: 20px;">-->
            <!--                    <div class="v-responsive v-image" style="height: 100%;">-->
            <!--                        <div class="v-responsive__sizer">-->
            <!--                        </div>-->
            <!--                        <div class="v-image__image v-image__image&#45;&#45;cover" style="background-image: url('/images/test.jpg'); background-position: center center;">-->
            <!--                        <img :src="tour[29]" v-if="tour[29]!=''" style="width: 100%;height: 100%;"/>-->
            <!--                        </div>-->
            <!--                        <div class="v-responsive__content">-->
            <!--                            <div class="v-card__title">-->
            <!--                                <div class="white&#45;&#45;text active-tour d-sm-block d-none"></div>-->

            <!--                            </div>-->
            <!--                            <div class="v-card__subtitle white&#45;&#45;text d-sm-block d-none">-->
            <!--                                <div class="row">-->
            <!--                                    <div class="col-12">-->
            <!--                                        <h3>{{tour[7]}}</h3>-->
            <!--                                        <p>{{tour[19]}}, {{tour[31]}}</p>-->
            <!--                                    </div>-->
            <!--                                    <div class="col-12">-->
            <!--                                        <span class="white&#45;&#45;text active-tour float-right">{{tour[42]}} ₽</span>-->
            <!--                                    </div>-->
            <!--                                </div>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="col-12">-->
            <!--                <div class="travel-card-description row m-auto justify-content-center" style="width: 100%;height: 100%;">-->
            <!--                    <div class="col-8">-->
            <!--                        <div class="row mx-auto mt-3 mb-3 align-items-center" style="color:#f08b23; font-size: 24px;">-->
            <!--                            {{tour[7]}}  <span class="ml-2" style="color: #0f213d">{{tour[8]}}</span>-->
            <!--                            <svg class="icon-star my-auto ml-1" style="width: 20px;height: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">-->
            <!--                                <path fill="#ffca00" d="M9.5 0l3.131 5.97 6.367 1.29-4.432 4.97.804 6.77-5.87-2.9L3.63 19l.804-6.77L.002 7.26l6.367-1.29L9.5 0"></path>-->
            <!--                            </svg>-->
            <!--                        </div>-->
            <!--                        <div class="row mx-auto mt-3 mb-3 align-items-center">-->
            <!--                            {{tour[19]}}, {{tour[31]}}-->
            <!--                        </div>-->
            <!--                        <div class="row mx-auto mt-3 mb-3 align-items-center">{{tour[36]}}, {{tour[37]}}</div>-->
            <!--                    </div>-->
            <!--                    <div class="col-4">-->
            <!--                        <div class="row mx-auto mt-3 mb-3 align-items-center justify-content-center">-->
            <!--                            <span class="white&#45;&#45;text active-tour" style="font-size: 20px">{{tour[42]}} ₽</span>-->
            <!--                        </div>-->
            <!--                        <div class="row mx-auto mt-3 mb-3 align-items-center justify-content-center">-->
            <!--                            {{tour[12]}} - {{tour[13]}}-->
            <!--                        </div>-->
            <!--                        <div class="row mx-auto mt-3 mb-3 align-items-center justify-content-center">-->
            <!--                            {{tour[14]}} ночей-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>
    </div>
   <!--    <div class="grouped-results__item">-->
<!--        <div class="schema-script">-->
<!--            <script type="application/ld+json">-->
<!--                {-->
<!--                    "@context": "http://schema.org",-->
<!--                    "@type": "Hotel",-->
<!--                    "name" : "Reydel Hotel",-->
<!--                    "description" : "",-->
<!--                    "address" : { "@type" : "PostalAddress",-->
<!--                        "addressCountry" : "Турция",-->
<!--                        "addressLocality" : "Стамбул"-->
<!--                    },-->
<!--                    "telephone" :  "",-->
<!--                    "image": ["https://hotels.sletat.ru/i/im/109091_0.jpg","https://hotels.sletat.ru/i/im/109091_1.jpg","https://hotels.sletat.ru/i/im/109091_2.jpg","https://hotels.sletat.ru/i/im/109091_3.jpg","https://hotels.sletat.ru/i/im/109091_4.jpg","https://hotels.sletat.ru/i/im/109091_5.jpg","https://hotels.sletat.ru/i/im/109091_6.jpg","https://hotels.sletat.ru/i/im/109091_7.jpg","https://hotels.sletat.ru/i/im/109091_8.jpg"],-->
<!--                    "starRating" : { "@type" : "Rating",-->
<!--                        "ratingValue" : "7.16"},-->
<!--                    "priceRange" : "34721 RUB"-->
<!--                }-->
<!--            </script>-->
<!--        </div>-->

<!--        <div class="grouped-results__illustration">-->
<!--            <div class="grouped-results__carousel">-->
<!--                <div class="hotel-photo-slider">-->
<!--                    <div class="uikit-gallery uikit-gallery_results hotel-photo-slider__hotel-preview">-->
<!--                        <div class="uikit-gallery__container uikit-gallery__container_results">-->
<!--                            <div class="uikit-gallery__carousel uikit-gallery__carousel_results">-->
<!--                                <div class="uikit-gallery__counter uikit-gallery__counter_results">-->
<!--                                    1 / 9-->
<!--                                </div>-->
<!--                                <div class="uikit-carousel uikit-carousel_results">-->
<!--                                    <div class="uikit-carousel__container uikit-carousel__container_results">-->
<!--                                        <div class="uikit-carousel__wrap-content uikit-carousel__wrap-content_results">-->
<!--                                            <div class="uikit-carousel__content uikit-carousel__content_results" style="width: 3375px; left: 0px;">-->
<!--                                                <div class="uikit-carousel__slide uikit-carousel__slide_results" style="width: 375px; opacity: 1; margin-right: 0px; margin-left: 0px;">-->
<!--                                                    <div class="uikit-image-with-loader">-->
<!--                                                        <img alt="Reydel Hotel" style="display: block;" class="uikit-image-with-loader__img" src="//hotels.sletat.ru/i/im/109091_0_750_417_1_0.jpg">-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <div class="uikit-carousel__slide uikit-carousel__slide_results" style="width: 375px; opacity: 0.3; margin-right: 0px; margin-left: 0px;">-->
<!--                                                    <div class="uikit-image-with-loader">-->
<!--                                                        <div class="uikit-image-with-loader__loader">-->
<!--                                                            <div class="uikit-loader">-->
<!--                                                                <div class="uikit-loader__spinner">-->
<!--                                                                    <div>-->
<!--                                                                    </div>-->
<!--                                                                    <div>-->
<!--                                                                    </div>-->
<!--                                                                    <div>-->
<!--                                                                    </div>-->
<!--                                                                    <div>-->
<!--                                                                    </div>-->
<!--                                                                    <div>-->
<!--                                                                    </div>-->
<!--                                                                </div>-->
<!--                                                            </div>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <div class="uikit-carousel__slide uikit-carousel__slide_results" style="width: 375px; opacity: 0.3; margin-right: 0px; margin-left: 0px;">-->
<!--                                                    <div class="uikit-image-with-loader">-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <div class="uikit-carousel__slide uikit-carousel__slide_results" style="width: 375px; opacity: 0.3; margin-right: 0px; margin-left: 0px;">-->
<!--                                                    <div class="uikit-image-with-loader">-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <div class="uikit-carousel__slide uikit-carousel__slide_results" style="width: 375px; opacity: 0.3; margin-right: 0px; margin-left: 0px;">-->
<!--                                                    <div class="uikit-image-with-loader">-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <div class="uikit-carousel__slide uikit-carousel__slide_results" style="width: 375px; opacity: 0.3; margin-right: 0px; margin-left: 0px;">-->
<!--                                                    <div class="uikit-image-with-loader">-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <div class="uikit-carousel__slide uikit-carousel__slide_results" style="width: 375px; opacity: 0.3; margin-right: 0px; margin-left: 0px;">-->
<!--                                                    <div class="uikit-image-with-loader">-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <div class="uikit-carousel__slide uikit-carousel__slide_results" style="width: 375px; opacity: 0.3; margin-right: 0px; margin-left: 0px;">-->
<!--                                                    <div class="uikit-image-with-loader">-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <div class="uikit-carousel__slide uikit-carousel__slide_results" style="width: 375px; opacity: 0.3; margin-right: 0px; margin-left: 0px;">-->
<!--                                                    <div class="uikit-image-with-loader">-->
<!--                                                        <div class="uikit-image-with-loader__loader">-->
<!--                                                            <div class="uikit-loader">-->
<!--                                                                <div class="uikit-loader__spinner">-->
<!--                                                                    <div>-->
<!--                                                                    </div>-->
<!--                                                                    <div>-->
<!--                                                                    </div>-->
<!--                                                                    <div>-->
<!--                                                                    </div>-->
<!--                                                                    <div>-->
<!--                                                                    </div>-->
<!--                                                                    <div>-->
<!--                                                                    </div>-->
<!--                                                                </div>-->
<!--                                                            </div>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="grouped-results__tags">-->
<!--                <div class="tags">-->
<!--                    <span class="tags__item tags__item_type">Молодежный</span>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="grouped-results__header">-->
<!--            <p class="grouped-results__title">-->
<!--                    <span class="grouped-results__stars">-->
<!--                        <span class="hotel-stars">-->
<!--                            <span>-->
<!--                                <span class="hotel-stars__number">3</span>-->
<!--                                <span class="hotel-stars__icon">-->
<!--                                    <svg width="100%" height="100%">-->
<!--                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="//sletat.ru/Files/mobile-site/icons/star.svg#icon-star">-->

<!--                                        </use>-->
<!--                                    </svg>-->
<!--                                </span>-->
<!--                            </span>-->
<!--                        </span>-->
<!--                    </span>-->
<!--                Reydel Hotel-->
<!--            </p>-->
<!--            <p class="grouped-results__subtitle">Стамбул, Турция</p>-->
<!--            <div class="grouped-results__price">-->
<!--                <span class="price-with-currency price-with-currency_rub">34 721</span>-->
<!--            </div>-->
<!--            <div class="grouped-results__reviews">-->
<!--            </div>-->
<!--            <div class="grouped-results__counter">102 тура-->
<!--            </div>-->
<!--        </div>-->
<!--        <div id="hotel_details_navbar_NzY3MTY4Njc3enhnc2FVNXFKTllZUUozT3FkTTZkQT09RGVfVmlzdTEwOTA5MQ&#45;&#45;" class="hotel-tabs__item">-->
<!--            <div class="hotel-tabs__item">-->
<!--                <ul class="tabs-nav">-->
<!--                    <li class="tabs-nav__item">Туры</li>-->
<!--                    <li class="tabs-nav__item">Описание</li>-->
<!--                    <li class="tabs-nav__item">Отзывы</li>-->
<!--                </ul>-->
<!--            </div>-->
<!--            <div>-->
<!--                <div class="hotel-tabs__content">-->
<!--                    <div class="tour-view-grouped">-->
<!--                        <a href="//sletat.ru/m/tour/165-767168677-1078871897/" target="_blank" class="tour-view-grouped__item">-->
<!--                            <p class="tour-view-grouped__tour-description">-->
<!--                                <span class="tour-view-grouped__text tour-view-grouped__text_bolder">2 ночи</span>-->
<!--                                <span class="tour-view-grouped__text tour-view-grouped__text_light">14 авг.(пт) - 16 авг.</span>-->
<!--                                <span class="tour-view-grouped__text tour-view-grouped__text_bold">Завтрак по системе «шведский стол»</span>-->
<!--                                <span class="tour-view-grouped__text tour-view-grouped__text_bold">двухместный номер</span>-->
<!--                            </p>-->
<!--                            <p class="tour-view-grouped__tour-info">-->
<!--                                <span class="tour-view-grouped__price">-->
<!--                                    <span class="price-with-currency price-with-currency_rub">34 721</span>-->
<!--                                </span>-->
<!--                                <span class="tour-view-grouped__text tour-view-grouped__text_green">Топл. сбор включён</span>-->
<!--                                <span class="tour-view-grouped__operator">De Visu</span>-->
<!--                            </p>-->
<!--                        </a>-->

<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
    import {mask} from 'vue-the-mask'
    export default {
        name: "TourCard",
        props:['tour'],
        data () {
            return {
                order: {
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                    request_id: '',
                    tour_id: '',
                    tour_operator_id: '',
                    country_name: '',
                    city_name: '',
                },
                // chosen_tour: null,
            }
        },
        filters: {
            pluralizeAdults: function (n) {
                if (n === 1) {
                    return 'взрослого'
                }
                if (n > 1 && n < 20) {
                    return 'взрослых'
                }
                if (n > 19) {
                    var last = n % 10;
                    if (last === 1) {
                        return 'взрослого'
                    }
                    if (last > 1 && last < 10 && last === 0) {
                        return 'взрослых'
                    }
                    return 'взрослых'
                }
                return 'взрослых'
            },
            pluralizeChildren: function (n) {
                if (n === 1) {
                    return 'ребёнка'
                }
                if (n > 1 && n < 20) {
                    return 'детей'
                }
                if (n > 19) {
                    var last = n % 10;
                    if (last === 1) {
                        return 'ребёнка'
                    }
                    if (last > 1 && last < 10 && last === 0) {
                        return 'детей'
                    }
                    return 'детей'
                }
                return 'детей'
            }
        },
        computed: {
            request_id() {
                return this.$store.getters.request_id
            },
            tourSearch() {
                return this.$store.getters.tourSearch
            },
            chosen_tour() {
                return this.$store.getters.tour
            },
        },
        methods: {
            buy() {
                this.order.request_id = this.request_id;
                this.order.tour_id = this.tour[0];
                this.order.tour_operator_id = this.tour[1];
                this.order.country_name = this.tour[31];
                this.order.city_name = this.tour[33];
                // this.chosen_tour = this.tour;
                this.$store.dispatch('changeTour', this.tour)
                // console.log(this.chosen_tour)
            },
            sendRequest(){
                // console.log(this.chosen_tour)
                this.$store.dispatch('sendTourSearchOrder', {
                    name:this.order.name,
                    phone:this.order.phone,
                    email:this.order.email,
                    message:this.order.message,
                    tour: this.chosen_tour,
                    tourSearch: this.tourSearch,
                });
                // this.$store.dispatch('saveTourOrder', this.order);

                this.$store.dispatch('closeModal', '#ModalForm'+this.tour[0]);
                this.sendMessage("Тур успешно заказан. Ожидайте, наш менеждер свяжется с Вами");
                this.$store.dispatch('changeTour', []);
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Отправка сообщений ВПУТЬ',
                    text: message
                });
            },
            clear() {
                this.order.email = '';
            }
        },
        directives: {mask}
    }
</script>

<style scoped>
    .start-form {
        max-width: 500px;
        margin: auto;
        margin-top: auto;
        /*text-align: center;*/
    }
    .section {
        padding: 0 16px;
    }
    .modalbox {
        padding-top: env(safe-area-inset-top);
        overflow: hidden;
    }

    .modalbox .modal-dialog {
        transform: translate(0, 100%) !important;
        min-width: 100%;
        margin: 0;
        transition: 0.5s all !important;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin-top: env(safe-area-inset-top);
    }

    .modalbox .modal-dialog .modal-content {
        border-radius: 0;
        border: 0;
        margin: auto;
        overflow: hidden;
        padding-top: 56px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }

    .modalbox .modal-dialog .modal-content .modal-header {
        border: 0;
        padding: 0;
        min-height: 56px;
        padding: 10px 16px;
        border-radius: 0;
        display: flex;
        border-bottom: 1px solid #E1E1E1;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 100;
        background: #FFF;
    }

    .modalbox .modal-dialog .modal-content .modal-header .modal-title {
        margin: 0;
        color: #063065;
        font-size: 17px;
        font-family: "Open Sans";
        font-weight: 900;
    }
    .modalbox .modal-dialog .modal-content .modal-header a{
        color: #063065;
    }

    .modalbox .modal-dialog .modal-content .modal-body {
        padding: 20px 16px;
        overflow: auto;
    }

    .modalbox.show .modal-dialog {
        transform: translate(0, 0) !important;
    }
    .btn {
        background:#0f213d;
        color: white;
        text-transform: uppercase;
        font-size: 20px;
        font-family: "Open Sans";
        font-weight: 900;
        border: 0;
        border-radius: 50px;
        outline: none;
    }
    .btn:focus {
        outline: none !important;
        box-shadow: none !important;
    }
    .travel-card-description{
        color: #062348;
        font-size: 13px;
        font-weight: 900;
        font-family: "Open Sans";
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
    .travel-card {
        border-radius: 20px;
        background: white;
        box-shadow: 0px 3px 15px #0000006b;
        -moz-box-shadow: 0px 3px 15px #0000006b;
        -webkit-box-shadow: 0px 3px 15px #0000006b;
    }
    .active-tour {
        background: #f08b23;
        border-radius: 20px;
        padding: 3px 20px;
        -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        font-weight: 900;
        text-transform: uppercase;
        font-family: 'Open Sans';
    }
    .v-card > :last-child:not(.v-btn):not(.v-chip) {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
    .v-card > :first-child:not(.v-btn):not(.v-chip), .v-card > .v-card__progress + :not(.v-btn):not(.v-chip) {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
    .v-card > :last-child:not(.v-btn):not(.v-chip) {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
    .v-card > .v-card__progress + :not(.v-btn):not(.v-chip), .v-card > :first-child:not(.v-btn):not(.v-chip) {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
    .v-responsive {
        position: relative;
        overflow: hidden;
        flex: 1 0 auto;
        max-width: 100%;
        display: flex;
    }
    .v-image {
        z-index: 0;
    }
    .v-card {
        overflow-wrap: break-word;
        white-space: normal;
    }
    .v-responsive__sizer {
        background: #0d274b61;
        transition: padding-bottom .2s cubic-bezier(.25,.8,.5,1);
        flex: 1 0 0px;
    }
    .v-image__image--cover {
        background-size: cover;
    }
    .v-image__image {
        background-repeat: no-repeat;
    }
    .v-image__image, .v-image__placeholder {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .v-responsive__sizer ~ .v-responsive__content {
        margin-left: -100%;
    }
    .v-responsive__content {
        flex: 1 0 0px;
        max-width: 100%;
    }
    .elevation-24 {
        -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .v-card__title {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: .0125em;
        line-height: 2rem;
        word-break: break-all;
    }
    .v-card__subtitle, .v-card__text, .v-card__title {
        padding: 16px;
    }
    .v-card__subtitle {
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .v-card__subtitle h3{
        font-weight: 900;
        font-family: 'Open Sans';
    }
    .white--text {
        color: #fff !important;
        caret-color: #fff !important;
    }
    .form-group {
        width: 100%;
    }

    .form-group .label {
        font-size: 12px;
        margin: 0;
        font-weight: 900;
        color: #063065;
        display: block;
        line-height: 1.2em;
        text-align: left;
        font-family: Open Sans;
    }

    .form-group textarea {
        resize: none;
    }

    .form-group .input-info {
        font-size: 11px;
        color: #A1A1A2;
    }

    .form-group .clear-input {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #4F5050;
        height: 38px;
        font-size: 22px;
        position: absolute;
        right: -10px;
        top: 15px;
        bottom: 0;
        width: 32px;
        opacity: 0.5;
    }

    .form-group .clear-input:hover, .form-group .clear-input:active {
        opacity: 0.8;
    }

    .form-group .input-wrapper {
        position: relative;
    }

    .form-group .input-wrapper.not-empty .clear-input {
        display: flex;
    }

    .form-group .input-wrapper.active .label {
        color: #f08b23 !important;
    }

    .form-group.basic {
        padding: 8px 0;
        margin: 0;
    }

    .form-group.basic .form-control,
    .form-group.basic .custom-select {
        background: transparent;
        border: none;
        border-bottom: 1px solid #E1E1E1;
        padding: 0 30px 0 0;
        border-radius: 0;
        height: 40px;
        color: #141515;
        font-size: 15px;
    }

    .form-group.basic .form-control:focus,
    .form-group.basic .custom-select:focus {
        border-bottom-color: #f08b23;
        box-shadow: inset 0 -1px 0 0 #f08b23;
    }

    .form-group.basic textarea.form-control {
        height: auto;
        padding: 7px 40px 7px 0;
    }

    .form-group.basic.animated .label {
        margin-top: 20px;
        opacity: 0;
        top: -3px;
        transition: 0.2s all;
        position: absolute;
    }

    .form-group.basic.animated .input-wrapper {
        padding-top: 5px;
    }

    .form-group.basic.animated .input-wrapper.not-empty .label {
        margin-top: 0;
        opacity: 1;
    }

    .form-button-group {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
        background: #FFF;
        min-height: 84px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: env(safe-area-inset-bottom);
    }
    .form-button-group .btn {
        background: #f08b23;
        color: white;
        text-transform: uppercase;
        font-size: 24px;
        font-family: "Open Sans";
        font-weight: 900;
        border: 0;
        border-radius: 50px;
        outline: none;
    }
    form-button-group .btn:focus {
        outline: none !important;
        box-shadow: none !important;
    }
    .title-1 {
        position: absolute;
        z-index: 1;
        right: 130px;
        top: 10px;
        color:#062348;
        font-family: 'Bello Pro' !important;
        font-size: 35px;
    }
    .title-1 span {
        font-size: 40px;
    }
    .title-2 {
        position: absolute;
        z-index: 1;
        left: 87px;
        top: 18px;
        color:white;
        font-family: 'Open Sans' !important;
        font-weight:900;
        font-size: 25px;
    }
    .title-2 span {
        text-transform: uppercase;
    }
    .orange-brush{
        top: 5px;
        left: 0px;
        width: 265px;
    }
    .blue-brush{
        top: 10px;
        right: 47px;
        width: 330px;
        height: 50px;
        opacity: 1;
    }
    .section p {
        font-family: "Open Sans";
        font-weight: 900;
        font-style: italic;
        font-size: 13px;
        color: #062348;
    }
</style>
