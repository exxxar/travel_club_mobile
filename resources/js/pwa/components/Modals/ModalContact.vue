<template>
    <div class="modal fade modalbox" id="ContactModal"  data-bs-backdrop="true" tabindex="-1" style="display: none;"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Наши контакты</h5>
                    <a href="javascript:;" rel="noreferrer"  data-bs-dismiss="modal">Закрыть</a>
                </div>
                <div class="modal-body">
                    <phone-by-city-form></phone-by-city-form>
                    <ul class="nav nav-tabs style1" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" rel="noreferrer"  data-bs-toggle="tab" href="#home-1" role="tab"
                               aria-selected="true">
                                Донецк
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"  data-bs-toggle="tab" rel="noreferrer" href="#home-2" role="tab" aria-selected="false">
                                Ростов-на-Дону
                            </a>
                        </li>

                    </ul>
                    <div class="tab-content mt-2">
                        <div class="tab-pane fade active show" id="home-1" role="tabpanel">
                            <p>Бульвар Пушкина 23
                                <button class="btn btn-link" @click="showOnMap(1)" rel="noreferrer">Показать на карте</button>
                            </p>
                            <p>+7 949 235-33-22
                                <span class="ms-2"><i class="fab fa-whatsapp"></i></span>
                            </p>
                            <h4> Режим работы:</h4>
                            <p> Пн-Птн 10 00 – 18 00</p>
                            <p>Суббота 10 00 – 17 00</p>
                            <p> Воскресенье - выходной</p>


                            <employee-list :city="'Донецк'"/>


                        </div>
                        <div class="tab-pane fade" id="home-2" role="tabpanel">
                            <p>Горького 140</p>
                            <p>+7 906 416-78-72</p>
                            <p>travelclubrnd@bk.ru</p>
                            <h4> Режим работы:</h4>
                            <p>Пн-Птн 10 00 – 18 00</p>
                            <p>Суббота 10 00 – 17 00</p>
                            <p>Воскресенье – выходной</p>

                            <employee-list :city="'Ростов-на-Дону'"/>

                        </div>


                    </div>


<!--                    <yandex-map ref="map" :coords="center">-->
<!--                        <ymap-marker :key="index" v-for="(location, index) in locations"-->
<!--                                     :marker-id="'id'+index"-->
<!--                                     :coords="location.coords"-->
<!--                                     :icon="location.markerIcon"-->
<!--                        />-->
<!--                    </yandex-map>-->

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // import {yandexMap, ymapMarker} from 'vue-yandex-maps'

    export default {
        data() {
            return {
                settings: {
                    apiKey: 'c3ddaef1-2a3e-4aea-bd55-698a8735fc7d',
                    lang: 'ru_RU',
                    coordorder: 'latlong',
                    version: '2.1'
                },

                center: [48.017686, 37.801844],
                locations: [
                    {
                        coords: [48.017686, 37.801844],
                        markerIcon: {
                            layout: 'default#imageWithContent',
                            imageHref: '../img/travel/logo-1.png',
                            imageSize: [53, 70],
                            imageOffset: [0, 0],

                        }
                    },

                    {
                        coords: [48.002929, 37.802194],
                        markerIcon: {
                            layout: 'default#imageWithContent',
                            imageHref: '../img/travel/logo-1.png',
                            imageSize: [53, 70],
                            imageOffset: [0, 0],

                        }
                    },

                    {
                        coords: [47.217476, 39.700415],
                        markerIcon: {
                            layout: 'default#imageWithContent',
                            imageHref: '../img/travel/logo-1.png',
                            imageSize: [53, 70],
                            imageOffset: [0, 0],
                        }
                    }
                ]


            }
        },
        mounted() {
            this.center = this.locations[0].coords
        },
        methods: {
            showOnMap(index) {

                this.center = this.locations[index].coords

                $('.modal-body').animate({
                    scrollTop: 1000
                }, 1000);
            }
        },
        // components: {yandexMap, ymapMarker}
    }
</script>
<style lang="scss">
    .ymap-container {
        height: 400px;
    }
</style>
