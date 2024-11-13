<template>
    <div>
<!--        <modal :id="'tourOrderModal'" :title="'Заказать тур'">-->
<!--            <template slot="body">-->
<!--                <ValidationObserver v-slot="{ invalid }">-->

<!--                    <div class="card-body m-auto row" style="width: 100%">-->
<!--                        <div class="col-md-12 mb-2">-->
<!--                            <div class="form-group bmd-form-group">-->
<!--                                <div class="input-group">-->
<!--                                    <div class="input-group-prepend">-->
<!--                                        <span class="input-group-text">-->
<!--                                          <i class="material-icons">person</i>-->
<!--                                        </span>-->
<!--                                    </div>-->
<!--                                    <ValidationProvider name="name" rules="required" v-slot="{ errors }" style="width: 85%;">-->
<!--                                        <input type="text" name="name" class="form-control" v-model="order.name" placeholder="Ваше Ф.И.О."-->
<!--                                               required>-->
<!--                                        <span class="validate-error">{{ errors[0] }}</span>-->
<!--                                    </ValidationProvider>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-12 mb-2">-->
<!--                            <div class="form-group bmd-form-group">-->
<!--                                <div class="input-group">-->
<!--                                    <div class="input-group-prepend">-->
<!--                                        <span class="input-group-text">-->
<!--                                            <i class="material-icons">phone</i>-->
<!--                                        </span>-->
<!--                                    </div>-->
<!--                                    <ValidationProvider name="phone" rules="required" v-slot="{ errors }" style="width: 85%;">-->
<!--                                        <input type="text" name="phone" class="form-control" v-model="order.phone"-->
<!--                                               pattern="[\+]\d{2} [\(]\d{3}[\)] \d{3}[\-]\d{2}[\-]\d{2}"-->
<!--                                               maxlength="19"-->
<!--                                               v-mask="['+38 (###) ###-##-##']"-->
<!--                                               placeholder="Номер телефона" required>-->
<!--                                        <span class="validate-error">{{ errors[0] }}</span>-->
<!--                                    </ValidationProvider>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-12 mb-2">-->
<!--                            <div class="form-group bmd-form-group">-->
<!--                                <div class="input-group">-->
<!--                                    <div class="input-group-prepend">-->
<!--                                <span class="input-group-text">-->
<!--                                  <i class="material-icons">mail</i>-->
<!--                                </span>-->
<!--                                    </div>-->
<!--                                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }" style="width: 85%;">-->
<!--                                    <input type="text" name="email" class="form-control" v-model="order.email"-->
<!--                                           placeholder="Email" required>-->
<!--                                        <span class="validate-error">{{ errors[0] }}</span>-->
<!--                                    </ValidationProvider>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-12">-->
<!--                            <div class="form-group bmd-form-group">-->
<!--                                <div class="input-group">-->
<!--                                    <div class="input-group-prepend">-->
<!--                                <span class="input-group-text">-->
<!--                                  <i class="material-icons">message</i>-->
<!--                                </span>-->
<!--                                    </div>-->
<!--                                    <textarea name="message" v-model="order.message" class="form-control"-->
<!--                                              placeholder="Текст сообщения">-->
<!--                                    </textarea>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class=" col-md-12 contact-btn">-->
<!--                            <button type="submit" class="btn btn-primary" style="width: 100%" :disabled="invalid" @click="sendRequest(chosen_tour)">Отправить</button>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                </ValidationObserver>-->
<!--            </template>-->
<!--        </modal>-->


<!--        с сортировкой по отелям-->
<!--        <div class="row mx-auto my-2  travel-card justify-content-center" style="width: 100%;height: 100%;">-->
<!--            <div class="col-md-12" style="border-bottom: 2px solid antiquewhite;">-->
<!--                <div class="travel-card-description row m-auto justify-content-center" style="width: 100%;height: 100%;">-->
<!--                    <div class="col-md-8">-->
<!--                        <div class="row mx-auto mt-3 mb-3 align-items-center" style="color:#f08b23; font-size: 17px;">-->
<!--                            <div class="icon icon-calendar mr-2" style="color:#0f213d"></div> <span>{{tour[12]}} - {{tour[13]}}</span>-->
<!--                            <div class="icon icon-clock-o ml-2 mr-2" style="color:#0f213d"></div> <span>{{tour[14]}} ночей</span>-->
<!--                            <div class="icon fas fa-plane-departure ml-2 mr-2" style="color:#0f213d"></div> <span> {{tour[18]}}</span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-4 p-0">-->
<!--                        <div class="row m-auto align-items-center justify-content-center h-100 w-100">-->
<!--                            <div class="col-12 p-0">-->
<!--                                <div class="row mx-auto align-items-center ">-->
<!--                                    <img class="ml-auto mr-0" :src="tour[34]" style="height: 50px;width: 100px;object-fit: contain;" >-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-md-12">-->
<!--                <div class="travel-card-description row m-auto align-items-center justify-content-center" style="width: 100%;height: 100%;">-->
<!--                    <div class="col-md-8">-->
<!--                        <div class="row mx-auto mt-3 mb-3 align-items-center" style="">-->
<!--                            <div class="icon fas fa-hotel mr-2" style="color:#0f213d;  font-size: 17px;"></div>{{tour[7]}}  <span class="values__hotel-rating ml-2" style="color: #0f213d">{{tour[8]}}</span>-->
<!--                        </div>-->
<!--                        <div class="row mr-auto mt-3 mb-3 align-items-center ml-2 "><p style="font-size: 13px; font-weight:600;">{{tour[36]}}, {{tour[37]}}</p></div>-->
<!--                        <div class="row mx-auto mt-3 mb-3 align-items-center">-->
<!--                            {{tour[19]}}, {{tour[31]}}-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-4">-->
<!--                        <div class="row m-auto align-items-center justify-content-center h-100 w-100">-->
<!--                            <div class="col-12 p-0 text-center">-->
<!--                                <div class="row my-auto align-items-center justify-content-center">-->
<!--                                    <span class="white&#45;&#45;text active-tour m-auto" style="font-size: 20px">{{tour[42]}} ₽</span>-->
<!--                                </div>-->
<!--                                <div class="row m-auto align-items-center justify-content-center">-->
<!--                                    <p style="font-size: 13px; font-weight:600;">За {{tour[16]}} {{tour[16] | pluralizeAdults}} <span v-if="tour[17]!=0">, за {{tour[17]}} {{tour[17] | pluralizeChildren}}</span></p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-12 p-0">-->

<!--                                <div class="row mx-auto mb-2 align-items-center justify-content-center">-->
<!--                                    <button class="btn btn-block btn-lg" @click="buy"  data-bs-toggle="modal" data-bs-target="#tourOrderModal">Купить</button>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->


<!--&lt;!&ndash;            если будут отели&ndash;&gt;-->
        <div class="row mx-auto my-2  travel-card justify-content-center" style="width: 100%;height: 100%;">
            <div class="col-md-3 p-0">
                <div class="mx-auto v-card elevation-24" style="height: 250px; max-width: 100%; border-radius: 20px;">
                    <div class="v-responsive v-image" style="height: 100%;">
                        <div class="v-responsive__sizer">
                        </div>
                        <div class="v-image__image v-image__image--cover" style="background-image: url('/images/test.jpg'); background-position: center center;">
                        <img :src="tour[29]" v-if="tour[29]!=''" style="width: 100%;height: 100%;"/>
                        </div>
                        <div class="v-responsive__content">
                            <div class="v-card__title">
                                <div class="white--text active-tour d-sm-block d-md-none"></div>

                            </div>
                            <div class="v-card__subtitle white--text d-sm-block d-md-none">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3>{{tour[7]}}</h3>
                                        <p>{{tour[19]}}, {{tour[31]}}</p>
                                    </div>
                                    <div class="col-md-12">
                                        <span class="white--text active-tour float-right">{{tour[42]}} ₽</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="travel-card-description row m-auto justify-content-center" style="width: 100%;height: 100%;">
                    <div class="col-md-8">
                        <div class="row mx-auto mt-3 mb-3 align-items-center" style="color:#f08b23; font-size: 1rem;">
                            {{tour[7]}}  <span class="ml-2" style="color: #0f213d">{{tour[8]}}</span>
                            <svg class="icon-star my-auto ml-1" style="width: 15px;height: 15px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill="#ffca00" d="M9.5 0l3.131 5.97 6.367 1.29-4.432 4.97.804 6.77-5.87-2.9L3.63 19l.804-6.77L.002 7.26l6.367-1.29L9.5 0"></path>
                            </svg>
                        </div>
                        <div class="row mx-auto mt-3 mb-3 align-items-center">
                            {{tour[19]}}, {{tour[31]}}
                        </div>
                        <div class="search-result__full-group-dates">
                            <div class="search-result-text search-result-text_big search-result-text_bold mb-3" style="font-size:1rem;">Вылеты {{tour[12]}} - {{tour[13]}}</div>
                            <div class="search-result-text search-result-text_grey">{{tour[14]}} - 9 ночей</div>
                        </div>
<!--                        <div class="row mx-auto mt-3 mb-3 align-items-center">{{tour[36]}}, {{tour[37]}}</div>-->
                        <div class="search-result__full-group-facility-preview">
                            <ul class="hotel-services hotel-services_search-result-full">
                                <li class="hotel-services__item hotel-services__item_search-result-full">
                                    <span class="hotel-services__icon hotel-services__icon_search-result-full" style="width:30px; height:30px">
                                    </span>
                                    <div class="hotel-services__description hotel-services__description_search-result-full">
                                        <p class="hotel-services__title hotel-services__title_search-result-full">Интернет:</p>
                                        <ul class="hotel-services__list hotel-services__list_search-result-full">
                                            <li>Wi-Fi  по всей территории</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row mx-auto mt-3 mb-3 align-items-center justify-content-center">
                             <span class="white--text active-tour" style="font-size: 20px"><span class="mr-2" style="font-size: 1rem;">от</span>{{tour[42]}} ₽</span>
                        </div>
                        <div class="row mx-auto mt-3 mb-3 align-items-center justify-content-center">
                            <div class="search-result-text search-result-text_normal">
                                63 тура
                            </div>
                        </div>
                        <div class="row mx-auto mb-2 align-items-center justify-content-center">
                            <button class="btn btn-block btn-lg" style="font-size:17px;">
                                <span class="row m-auto align-items-center justify-content-center w-100">
                                    Показать туры
                                    <i class="material-icons white-text">
                                        keyboard_arrow_down
                                    </i>
                                </span>
                            </button>
<!--                            <button class="btn btn-block btn-lg" style="font-size:17px;">-->
<!--                                <span class="row m-auto align-items-center justify-content-center w-100">-->
<!--                                    Скрыть туры -->
<!--                                    <i class="material-icons white-text">-->
<!--                                        keyboard_arrow_up-->
<!--                                    </i>-->
<!--                                </span>-->
<!--                            </button>-->
                        </div>
                            <!--                        <div class="row mx-auto mt-3 mb-3 align-items-center justify-content-center">-->
<!--                            {{tour[12]}} - {{tour[13]}}-->
<!--                        </div>-->
<!--                        <div class="row mx-auto mt-3 mb-3 align-items-center justify-content-center">-->
<!--                            {{tour[14]}} ночей-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        </div>
<!--        </div>-->


<!--        <div class="row m-auto travel-card justify-content-center" style="width: 100%;height: 100%;">-->
<!--            <div class="col-md-6 col-sm-12 p-0">-->
<!--                <div class="mx-auto v-card elevation-24" style="height: 400px; max-width: 100%; border-radius: 20px;">-->
<!--                    <div class="v-responsive v-image" style="height: 100%;">-->
<!--                        <div class="v-responsive__sizer">-->
<!--                        </div>-->
<!--                        <div class="v-image__image v-image__image&#45;&#45;cover" style="background-image: url('/images/test.jpg'); background-position: center center;">-->
<!--                        </div>-->
<!--                        <div class="v-responsive__content">-->
<!--                            <div class="v-card__title">-->
<!--                                <div class="white&#45;&#45;text active-tour d-sm-block d-md-none">Текущий</div>-->
<!--                            </div>-->
<!--                            <div class="v-card__subtitle white&#45;&#45;text d-sm-block d-md-none">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-12">-->
<!--                                        <h3>Test</h3>-->
<!--                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed-->
<!--                                            do eiusmod tempor incididunt ut labore et dolore magna-->
<!--                                            aliqua-->
<!--                                        </p>-->
<!--                                    </div>-->
<!--                                    <div class="col-md-12">-->
<!--                                        <span class="white&#45;&#45;text active-tour float-right">13 000</span>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-md-6 d-none d-md-block">-->
<!--                <div class="row mx-auto mt-3 mb-3 align-items-center justify-content-center">-->
<!--                    <span class="white&#45;&#45;text active-tour" style="background:#062348; font-size: 24px">Текущий тур</span>-->
<!--                </div>-->
<!--                <div class="travel-card-description row m-auto align-items-center justify-content-center">-->
<!--                    <p>Lorem Ipsum dolor sit amet,-->
<!--                        consectetur adipiscing elit,-->
<!--                        sed do eiusmod tempor incididunt ut labore-->
<!--                        et dolore magna aliqua. Ut enim ad minim veniam,-->
<!--                        quis nostrud exercitation ullamco...</p>-->
<!--                </div>-->
<!--                <div class="travel-card-more row m-auto float-right align-items-center">-->
<!--                    <h5 class="more-text mt-auto mb-auto">подробнее</h5>-->
<!--                    <div class="more-button">-->
<!--                        <div class="icon icon-keyboard_arrow_right"></div>-->
<!--                    </div>-->
<!--                </div>-->

<!--            </div>-->
<!--        </div>-->
<!--без сортировки по отелям-->
       <ul class="search-result__list">
           <li class="search-result__list-item search-result__list-item_full-group">
<!--               <div class="schema-script">-->
<!--                   <script type="application/ld+json">-->
<!--                       {-->
<!--                           "@context": "http://schema.org",-->
<!--                           "@type": "Hotel",-->
<!--                           "name" : "Kaya Madrid Hotel",-->
<!--                           "description" : "",-->
<!--                           "address" : { "@type" : "PostalAddress",-->
<!--                               "addressCountry" : "Турция",-->
<!--                               "addressLocality" : "Стамбул"-->
<!--                           },-->
<!--                           "telephone" :  "+90 (212) 635-78-91",-->
<!--                           "image": ["https://hotels.sletat.ru/i/im/96388_0.jpg","https://hotels.sletat.ru/i/im/96388_1.jpg","https://hotels.sletat.ru/i/im/96388_2.jpg","https://hotels.sletat.ru/i/im/96388_3.jpg","https://hotels.sletat.ru/i/im/96388_4.jpg","https://hotels.sletat.ru/i/im/96388_5.jpg","https://hotels.sletat.ru/i/im/96388_6.jpg","https://hotels.sletat.ru/i/im/96388_7.jpg","https://hotels.sletat.ru/i/im/96388_8.jpg","https://hotels.sletat.ru/i/im/96388_9.jpg","https://hotels.sletat.ru/i/im/96388_10.jpg","https://hotels.sletat.ru/i/im/96388_11.jpg","https://hotels.sletat.ru/i/im/96388_12.jpg"],-->
<!--                           "starRating" : { "@type" : "Rating",-->
<!--                               "ratingValue" : "6"},-->
<!--                           "priceRange" : "26022 RUB"-->
<!--                       }-->
<!--                   </script>-->
<!--               </div>-->
               <div class="search-result__list-item-info search-result__list-item-info_full-group">
                   <a class="search-result__hotel-photo-wrapper" rel="nofollow">
                       <img alt="Kaya Madrid Hotel" class="search-result__hotel-photo" src="//hotels.sletat.ru/i/im/96388_0_225_150_1.jpg">
                   </a>
                   <a class="search-result-text search-result-text_hotel search-result-text_full-group-hotel" href="/turkey/istanbul/kaya_madrid_hotel/?requestId=1078906158" target="_blank" title="Kaya Madrid Hotel">Kaya Madrid Hotel</a>
                   <div class="search-result-category search-result-category_stars-3">
                    <span class="search-result-category__star-container">
                        <svg class="search-result-category__star" height="14" width="12">
                            <use xlink:href="#icon-star"></use>
                        </svg>
                    </span>
                   </div>
                   <div class="search-result__full-hotel-name-subscription">
                       <div class="search-result-rating">
                           <span class="search-result-rating__number search-result-rating__number_average">6</span>
                           <div class="rating-tripadvisor search-result-rating__tripadvisor">
                               <ul class="rating-tripadvisor__wrapper rating-tripadvisor__wrapper_30">
                                   <li class="rating-tripadvisor__item"> </li>
                                   <li class="rating-tripadvisor__item"> </li>
                                   <li class="rating-tripadvisor__item"> </li>
                                   <li class="rating-tripadvisor__item"> </li>
                                   <li class="rating-tripadvisor__item"> </li>
                               </ul>
                               <span class="rating-tripadvisor__counter">44 отзыва</span>
                               <div class="rating-tripadvisor__tooltip">
                                   <div class="rating-tripadvisor__tooltip-title">Рейтинг TripAdvisor</div>
                                   <div class="rating-tripadvisor__tooltip-sign">На основе 44 отзывов</div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="search-result__full-group-destination">
                       <div class="search-result-text search-result-text_grey">Турция, Стамбул</div>
                   </div>
                   <div class="search-result__full-group-dates">
                       <div class="search-result-text search-result-text_big search-result-text_bold"> Вылеты 29 июля — 05 авг</div>
                       <div class="search-result-text search-result-text_grey">7 - 9 ночей</div>
                   </div>
                   <div class="search-result__full-group-facility-preview">
                       <ul class="hotel-services hotel-services_search-result-full">
                           <li class="hotel-services__item hotel-services__item_search-result-full">
                            <span class="hotel-services__icon hotel-services__icon_search-result-full">
                                <svg width="20" height="20">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-internet" xml:base="https://sletat.ru/">

                                    </use>
                                </svg>
                            </span>
                               <div class="hotel-services__description hotel-services__description_search-result-full">
                                   <p class="hotel-services__title hotel-services__title_search-result-full">Интернет:</p>
                                   <ul class="hotel-services__list hotel-services__list_search-result-full">
                                       <li>Wi-Fi  по всей территории
                                       </li>
                                   </ul>
                               </div>
                           </li>
                           <li class="hotel-services__item hotel-services__item_search-result-full">
                            <span class="hotel-services__icon hotel-services__icon_search-result-full">
                                <svg width="20" height="20">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-hotel-type" xml:base="https://sletat.ru/"></use>
                                </svg>
                            </span>
                               <div class="hotel-services__description hotel-services__description_search-result-full">
                                   <p class="hotel-services__title hotel-services__title_search-result-full">Тип отеля:</p>
                                   <ul class="hotel-services__list hotel-services__list_search-result-full">
                                       <li>одно здание</li>
                                   </ul>
                               </div>
                           </li>
                           <li class="hotel-services__item hotel-services__item_search-result-full">
                            <span class="hotel-services__icon hotel-services__icon_search-result-full">
                                <svg width="20" height="20">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-sofa" xml:base="https://sletat.ru/"></use>
                                </svg>
                            </span>
                               <div class="hotel-services__description hotel-services__description_search-result-full">
                                   <p class="hotel-services__title hotel-services__title_search-result-full">Удобства в номерах:</p>
                                   <ul class="hotel-services__list hotel-services__list_search-result-full">
                                       <li>Сейф</li>
                                       <li>Отопление</li>
                                       <li>Кондиционер</li>
                                       <li>Фен</li>
                                       <li>Телевизор</li>
                                       <li>Мини-бар</li>
                                       <li>Телефон</li>
                                       <li>Душ</li>
                                   </ul>
                               </div>
                           </li>
                           <li class="hotel-services__item hotel-services__item_search-result-full">
                            <span class="hotel-services__icon hotel-services__icon_search-result-full">
                                <svg width="20" height="20">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-meal" xml:base="https://sletat.ru/"></use>
                                </svg>
                            </span>
                               <div class="hotel-services__description hotel-services__description_search-result-full">
                                   <p class="hotel-services__title hotel-services__title_search-result-full">Питание:</p>
                                   <ul class="hotel-services__list hotel-services__list_search-result-full">
                                       <li>Ресторан</li>
                                       <li>Бар</li>
                                       <li>Шведский стол</li>
                                   </ul>
                               </div>
                           </li>
                           <li class="hotel-services__item hotel-services__item_search-result-full">
                            <span class="hotel-services__icon hotel-services__icon_search-result-full">
                                <svg width="20" height="20">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-main-services" xml:base="https://sletat.ru/"></use>
                                </svg>
                            </span>
                               <div class="hotel-services__description hotel-services__description_search-result-full">
                                   <p class="hotel-services__title hotel-services__title_search-result-full">Общие услуги:</p>
                                   <ul class="hotel-services__list hotel-services__list_search-result-full">
                                       <li>Круглосуточная стойка регистрации</li>
                                       <li>Лифт</li>
                                       <li>Отель с уникальным дизайном</li>
                                       <li>Экспресс-регистрация</li>
                                       <li>Камера хранения багажа</li>
                                   </ul>
                               </div>
                           </li>
                       </ul>
                   </div>
                   <span class="search-result__full-group-info-link">Описание отеля</span>
                   <span class="search-result__full-group-info-link">Отель на карте</span>
                   <span class="search-result__full-group-info-link">Отзывы туристов</span>
                   <div class="search-result__full-group-aside">
                       <div class="search-result__full-price">
                           <div class="search-result-text">от
                               <span class="search-result-text__standart-price">
                                <span class="sr-currency-rub">26 022
                                </span>
                            </span>
                               <div class="search-result-text search-result-text_normal">63 тура
                               </div>
                           </div>
                       </div>
                       <button class="uis-button uis-button_orange uis-button_small uis-button_show-more-info">Показать туры</button>
                       <div class="search-result__full-group-operators-amount">
                           <div class="search-result-text search-result-text_grey">от 7 операторов
                           </div>
                       </div>
                   </div>
               </div>
           </li>
       </ul>

    </div>

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
                console.log(this.tour_test)
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


                this.$store.dispatch('closeModal', '#tourOrderModal');
                this.sendMessage("Тур успешно заказан. Ожидайте, наш менеждер свяжется с Вами");
                this.$store.dispatch('changeTour', []);
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Отправка сообщений TravelClub',
                    text: message
                });
            },
        },
        directives: {mask}
    }
</script>

<style scoped>
    /*@import url("https://travel-club.tours/css/tour-search1.css");*/

    .btn {
        background: #0f213d;
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
</style>
