<template>
    <div class="modal fade modalbox" id="ContactModal" data-backdrop="true" tabindex="-1" style="display: none;"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Наши контакты</h5>
                    <a href="javascript:;" rel="noreferrer" data-dismiss="modal">Закрыть</a>
                </div>
                <div class="modal-body">
                    <phone-by-city-form></phone-by-city-form>
                    <ul class="nav nav-tabs style1" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" rel="noreferrer" data-toggle="tab" href="#home-1" role="tab"
                               aria-selected="true">
                                Донецк
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" rel="noreferrer" href="#home-2" role="tab" aria-selected="false">
                                Ростов-на-Дону
                            </a>
                        </li>

                    </ul>
                    <div class="tab-content mt-2">
                        <div class="tab-pane fade active show" id="home-1" role="tabpanel">
                            <p>Ул. Артема 100Д
                                <button class="btn btn-link" @click="showOnMap(0)" rel="noreferrer">Показать на карте</button>
                            </p>
                            <p> 071-339-90-89 <span class="ml-2"><i class="fab fa-whatsapp"></i> <i
                                class="fab fa-viber"></i></span></p>
                            <h4> Режим работы:</h4>
                            <p> Пн-Птн 10 00 – 18 00</p>
                            <p>Суббота 10 00 – 17 00</p>
                            <p>Воскресенье – выходной</p>


                            <hr>
                            <p>Бульвар Пушкина 23
                                <button class="btn btn-link" @click="showOnMap(1)" rel="noreferrer">Показать на карте</button>
                            </p>
                            <p>071-235-33-22 <span class="ml-2"><i class="fab fa-whatsapp"></i> <i
                                class="fab fa-viber"></i></span></p>
                            <p>095-935-99-90</p>
                            <h4> Режим работы:</h4>
                            <p> Пн-Птн 10 00 – 18 00</p>
                            <p>Суббота 10 00 – 17 00</p>
                            <p> Воскресенье - выходной</p>


                            <employee-list :city="'Донецк'"/>


                        </div>
                        <div class="tab-pane fade" id="home-2" role="tabpanel">
                            <p>Социалистическая 11 оф 2А
                                <button class="btn btn-link" @click="showOnMap(2)">Показать на карте</button>
                            </p>
                            <p>8 800 222-89-68</p>
                            <p>travelclubrnd@bk.ru</p>
                            <p>+7-988-253-41-49</p>
                            <h4> Режим работы:</h4>
                            <p>Пн-Птн 10 00 – 18 00</p>
                            <p>Суббота 10 00 – 17 00</p>
                            <p>Воскресенье – выходной</p>

                            <employee-list :city="'Ростов-на-Дону'"/>

                        </div>


                    </div>


                    <yandex-map ref="map" :coords="center">
                        <ymap-marker :key="index" v-for="(location, index) in locations"
                                     :marker-id="'id'+index"
                                     :coords="location.coords"
                                     :icon="location.markerIcon"
                        />
                    </yandex-map>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {yandexMap, ymapMarker} from 'vue-yandex-maps'

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
        components: {yandexMap, ymapMarker}
    }
</script>
<style lang="scss">
    .ymap-container {
        height: 400px;
    }
</style>
