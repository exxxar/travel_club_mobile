<template>
    <div class="container" id="mobile-search">
        <div class="row w-100 m-auto">
            <div class="col-12 p-0 mt-2">
                <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                    <div class="col-6 ps-0 pe-1">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                            <h4 class="multiselect-title">Город вылета</h4>
                            <multiselect
                                v-model="depart_city"
                                :options="search_depart_cities"
                                :option-height="25"
                                placeholder="Выберите город"
                                :show-labels="false"
                                :maxHeight="200"
                                label="Name"
                                track-by="Name"
                                :loading="search_isCountriesLoading"
                                :disabled="search_isCountriesLoading"
                                :allow-empty="false"
                                @input="chooseDepartCity"
                            >
                                <template slot="singleLabel" slot-scope="props">
                                    <b :class="'tc-flag-'+props.option.Id"></b>
                                    <span class="option__desc">
                                        <span class="option__title">{{ props.option.Name }}</span>
                                    </span>
                                </template>
                                <template slot="option" slot-scope="props">
                                    <b :class="'tc-flag-'+props.option.Id"></b>
                                    <span class="option__desc">
                                        <span class="option__title">{{ props.option.Name }}</span>
                                    </span>
                                </template>
                            </multiselect>
                        </div>
                    </div>
                    <div class="col-6 ps-1 pe-0">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                            <h4 class="multiselect-title">Страна отдыха</h4>
                            <multiselect
                                v-model="resort_country"
                                :options="search_countries"
                                :option-height="25"
                                placeholder="Выберите страну"
                                :show-labels="false"
                                :maxHeight="200"
                                label="Name"
                                track-by="Name"
                                :loading="search_isCountriesLoading"
                                :disabled="search_isCountriesLoading"
                                :allow-empty="false"
                                @input="chooseResortCountry"
                            >
                                <template slot="singleLabel" slot-scope="props">
                                    <b :class="'tc-flag-'+props.option.Id"></b>
                                    <span class="option__desc">
                                <span class="option__title">{{ props.option.Name }}</span>
                            </span>
                                </template>
                                <template slot="option" slot-scope="props">
                                    <b :class="'tc-flag-'+props.option.Id"></b>
                                    <span class="option__desc">
                                <span class="option__title">{{ props.option.Name }}</span>
                            </span>
                                </template>
                            </multiselect>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 p-0 mt-2">
                <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                    <div class="col-12 p-0">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                            <h4 class="multiselect-title">Интервал дат вылета</h4>
                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                                <VueHotelDatepicker
                                    :startDate="start"
                                    :endDate="end"
                                    :placeholder="'Интервал дат вылета'"
                                    :format="'DD/MM/YYYY'"
                                    :weekList="['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.']"
                                    :monthList="['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май.', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт', 'Ноя.', 'Дек.']"
                                    :fromText="'С'"
                                    :toText="'По'"
                                    :resetText="'Очистить'"
                                    :confirmText="'Подтвердить'"
                                    :mobile="'mobile'"
                                    :maxNight="44"
                                    @update="changeDateRange"
                                    @reset="resetDateRange"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 p-0 mt-2">
                <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                    <div class="col-6 ps-0 pe-1">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                            <h4 class="multiselect-title">Кол-во ночей (от)</h4>
                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                                <multiselect
                                    v-model="nights_from"
                                    :options="nights"
                                    :option-height="25"
                                    placeholder="От"
                                    :show-labels="false"
                                    :maxHeight="200"
                                    :allow-empty="false"
                                    :searchable="false"
                                    @input="changeNightsFrom"
                                >
                                </multiselect>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ps-1 pe-0">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                            <h4 class="multiselect-title">Кол-во ночей (до)</h4>
                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                                <multiselect
                                    v-model="nights_to"
                                    :options="nights"
                                    :option-height="25"
                                    placeholder="До"
                                    :show-labels="false"
                                    :maxHeight="200"
                                    :allow-empty="false"
                                    :searchable="false"
                                    @input="changeNightsTo"
                                >
                                </multiselect>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 p-0 mt-2">
                <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                    <div class="col-6 ps-0 pe-1">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                            <h4 class="multiselect-title">Курорт</h4>
                            <multiselect
                                :value="resorts"
                                :options="search_cities"
                                placeholder="Введите название курорта"
                                :show-labels="false"
                                :limit="2"
                                :maxHeight="200"
                                label="Name"
                                track-by="Name"
                                :close-on-select="true" :clear-on-select="true"
                                :loading="search_isCountriesLoading || search_isCitiesLoading"
                                :disabled="search_isCountriesLoading || search_isCitiesLoading"
                                @input="chooseResorts"
                                @select="whateverResort"
                                @remove="removeResort"
                                :preselectFirst="true"
                            >
    <!--                            <template slot="limit"><span class="multiselect__single"> и ещё {{ resorts.length-2 }} {{resorts.length-2 | pluralizeResorts}}</span></template>-->
                                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeResorts }} {{values.length | pluralizeChoose}}</span></template>
                            </multiselect>
                        </div>
                    </div>
                    <div class="col-6 ps-1 pe-0">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                            <h4 class="multiselect-title">Отель</h4>
                            <multiselect
                                :value="chosen_hotels"
                                :options="search_hotels"
                                placeholder="Введите название отеля"
                                :show-labels="false"
                                :limit="2"
                                :maxHeight="200"
                                label="Name"
                                track-by="Name"
                                :close-on-select="true" :clear-on-select="true"
                                :loading="search_isCountriesLoading || search_isHotelsLoading"
                                :disabled="search_isCountriesLoading || search_isHotelsLoading"
                                @input="chooseHotel"
                                @remove="removeHotels"
                            >
    <!--                            <template slot="limit">-->
    <!--                                <span class="multiselect__single"> и ещё {{ chosen_hotels.length-2 }} {{chosen_hotels.length-2 | pluralizeHotels}}-->
    <!--                                </span>-->
    <!--                            </template>-->
                                <template slot="selection" slot-scope="{ values, search, isOpen }">
                                    <span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeHotels}} {{values.length | pluralizeChoose}}
                                    </span>
                                </template>
    <!--                            <template slot="singleLabel" slot-scope="props">-->
    <!--                                <span class="option__desc">-->
    <!--                                    <span class="option__title">{{ props.option.Name }}</span>-->
    <!--                                    <span class="option__title" style="float:right" v-if="props.option.CommonRate!=0">{{ props.option.CommonRate }}</span>-->
    <!--                                    <span class="values__hotel-rating" style="float:right" v-if="props.option.StarName">{{ props.option.StarName }}</span>-->
    <!--                                </span>-->
    <!--                            </template>-->
    <!--                            <template slot="option" slot-scope="props">-->
    <!--                                <div class="option__desc">-->
    <!--                                    <span class="option__title">{{ props.option.Name }}</span>-->
    <!--                                    <span class="option__title" style="float:right" v-if="props.option.CommonRate!=0">{{ props.option.CommonRate }}</span>-->
    <!--                                    <span class="values__hotel-rating" style="float:right" v-if="props.option.StarName">{{ props.option.StarName }}</span>-->
    <!--                                </div>-->
    <!--                            </template>-->
                            </multiselect>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 p-0 mt-2">
                <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                    <div class="col-6 ps-0 pe-1">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                            <h4 class="multiselect-title">Питание</h4>
                            <multiselect
                                v-model="chosen_meals"
                                :options="meals"
                                :option-height="25"
                                placeholder="Выберите питание"
                                :show-labels="false"
                                :maxHeight="200"
                                label="Name"
                                track-by="Name"
                                :multiple="true" :close-on-select="false" :clear-on-select="false"
                                @input="chooseMeals"
                                @remove="removeMeals"
                            >
                                <template slot="selection" slot-scope="{ values, search, isOpen }">
                                    <span class="multiselect__single" v-if="values.length && !isOpen && values[0].Name != 'Любое'" >{{ values.length }} {{values.length | pluralizeMeals}}
                                    </span>
                                    <span class="multiselect__single" v-if="values.length && !isOpen && values[0].Name == 'Любое'">Любое
                                    </span>
                                </template>
    <!--                            <template slot="limit">-->
    <!--                                <span class="multiselect__single"> и ещё {{ chosen_meals.length-2 }}-->
    <!--                                </span>-->
    <!--                            </template>-->
    <!--                            <template slot="singleLabel" slot-scope="props">-->
    <!--                                <span class="option__desc">-->
    <!--                                    <span class="option__title">{{props.option.Name}}</span>-->
    <!--                                </span>-->
    <!--                            </template>-->
    <!--                            <template slot="option" slot-scope="props">-->
    <!--                                <div>-->
    <!--                                    <div class="option__desc">-->
    <!--                                        <span class="option__title">{{props.option.Name}}</span>-->
    <!--                                    </div>-->
    <!--                                    <div class="row align-items-center m-auto" style="width: 100%; height: 100%">-->
    <!--                                        <p class="" style="font-size: 12px; margin:0px;">{{props.option.desc}}</p>-->
    <!--                                    </div>-->
    <!--                                </div>-->
    <!--                            </template>-->
                            </multiselect>
                        </div>
                    </div>
                    <div class="col-6 ps-1 pe-0">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                            <h4 class="multiselect-title">Категория</h4>
                            <multiselect
                                v-model="chosen_hotel_stars"
                                :options="search_hotel_stars"
                                :option-height="25"
                                placeholder="Выберите категорию"
                                :show-labels="false"
                                :maxHeight="200"
                                label="Name"
                                track-by="Name"
                                :multiple="true" :close-on-select="false" :clear-on-select="false"
                                :loading="search_isHotelStarsLoading"
                                :disabled="search_isHotelStarsLoading"
                                @input="chooseHotelStars"
                                @remove="removeHotelStars"
                            >
    <!--                            <template slot="limit">-->
    <!--                                <span class="multiselect__single "> и ещё {{ chosen_hotel_stars.length-2 }}-->
    <!--                                </span>-->
    <!--                            </template>-->
                                <template slot="selection" slot-scope="{ values, search, isOpen }">
                                    <span class="multiselect__single" v-if="values.length && !isOpen && values[0].Name != 'Любая'">{{ values.length }} {{values.length | pluralizeHotelStars}}
                                    </span>
                                    <span class="multiselect__single" v-if="values.length && !isOpen && values[0].Name == 'Любая'">Любая
                                    </span>
                                </template>
    <!--                            <template slot="singleLabel" slot-scope="props">-->
    <!--                                <span class="option__desc">-->
    <!--                                    <span class="option__title values__hotel-rating" v-if="props.option.Name!='Любая'">{{props.option.Name}}</span>-->
    <!--                                    <span class="option__title" v-else>{{props.option.Name}}</span>-->
    <!--                                </span>-->
    <!--                            </template>-->
    <!--                            <template slot="tag" slot-scope="{ option, remove }">-->

    <!--                                <span class="multiselect__tag">-->
    <!--                                    <span class="option__title values__hotel-rating" v-if="option.Name!='Любая' && option.Name.length>1">{{option.Name}}</span>-->
    <!--                                <span class="option__title" v-else>{{option.Name}}</span>-->
    <!--                                    <i aria-hidden="true" tabindex="1" class="multiselect__tag-icon" @click="remove(option)"></i>-->
    <!--                                </span>-->
    <!--                            </template>-->
                                <template slot="option" slot-scope="props">
                                    <div class="option__desc">
                                        <span class="option__title values__hotel-rating" v-if="props.option.Name!='Любая'&& props.option.Name.length<2">{{props.option.Name}}</span>
                                        <span class="option__title" v-else>{{props.option.Name}}</span>
                                    </div>
                                </template>
                            </multiselect>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 p-0 mt-2">
                <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                    <div class="col-6 ps-0 pe-1">
                        <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                            <h4 class="multiselect-title">Взрослые</h4>
                            <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;">
                                <button type="button" class="btn minus text-center" :disabled="adults===1"
                                        @click="search_decrementAdults()">-
                                </button>
                                <input type="number" class="count" name="qty" v-model="adults" step="1" min="1" @change="changeAdults">
                                <button type="button" class="btn plus text-center"
                                        @click="search_incrementAdults()">+
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ps-1 pe-0">
                        <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                            <h4 class="multiselect-title">Дети</h4>
                            <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;">
                                <button type="button" class="btn minus text-center" :disabled="children===0"
                                        @click="search_decrementChildren()">-
                                </button>
                                <input type="number" class="count" name="qty" v-model="children" step="1" min="0" max="3" @change="changeChildren" :disabled="children===3">
                                <button type="button" class="btn plus text-center"
                                        @click="search_incrementChildren()" :disabled="children===3">+
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row align-items-center justify-content-center mx-auto mt-4" style="width: 100%;">
                    <button class="btn btn-primary btn-block btn-group-lg" style="height: 45px;" @click="search">Найти</button>
                </div>
            </div>
        </div>
        <div class="row w-100 m-auto">
            <div class="row justify-content-center m-auto" style="height: 100%;width: 100%;" v-if="isToursLoading">
                <loader></loader>
            </div>
            <div class="row justify-content-center m-auto" style="height: 100%;width: 100%;" v-if="tours_by_price && !isToursLoading">
                <div class="col-md-10" v-for="tour in tours_by_price.aaData">
                    <mobile-tour-card v-bind:tour="tour">
                    </mobile-tour-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mask} from 'vue-the-mask';
    import * as lang from "vuejs-datepicker/dist/locale";
    export default {
        name: "TourSearch",
        data () {
            return {
                name: '',
                phone:'',

                depart_city: null,
                resort_country: null ,
                resorts:[] ,
                chosen_hotels: [] ,
                chosen_tour_operators: [] ,
                adults:1,
                children:0,
                nights:[],
                price_from:null,
                price_to:null,
                nights_from: 1,
                nights_to: 10,
                start:new Date(),
                end: new Date((new Date).setDate((new Date).getDate() + 7)),

                chosen_hotel_stars:[],
                // categories: ['2', '3', '4', '5','Apts', 'Villas', 'HV-1', 'HV-2'],
                chosen_meals:[],
                meals: [
                    { Name:'Любое', desc:''},
                    { Id:'115', Name:'AI', desc:'завтраки, обеды, ужины, напитки'},
                    { Id:'114',Name:'BB', desc:'завтраки'},
                    { Id:'112',Name:'FB', desc:'завтраки, обеды, ужины'},
                    { Id:'121',Name:'FB+', desc:'завтраки, обеды, ужины - расширенное меню'},
                    { Id:'113',Name:'HB', desc:'завтраки, ужины'},
                    { Id:'122',Name:'HB+', desc:'завтраки, ужины - расширенное меню'},
                    { Id:'117',Name:'RO', desc:'без питания'},
                    { Id:'116',Name:'UAI', desc:'завтраки, обеды, ужины, напитки - расширенное меню'},
                    { Id:'129',Name:'SC', desc:'самообслуживание'},
                ],
                languages: lang,
                disabledDates1: {
                    to: new Date(new Date().setDate(new Date().getDate() - 1)),
                },
                disabledDates2: {
                    to: new Date(new Date().setDate(new Date().getDate() - 1)),
                },
            }
        },
        created() {
            this.$store.dispatch('getSearchDepartCities');
            this.$store.dispatch('changeSearch', false);

            for (var i = 1; i < 31; i++) {
                this.nights.push(i);
            }
        },
        mounted() {
            this.adults = this.tourSearch.adults;
            this.children = this.tourSearch.children;
            this.price_from = this.tourSearch.price_from;
            this.price_to = this.tourSearch.price_to;
            this.nights_from = this.tourSearch.nights_from;
            this.nights_to = this.tourSearch.nights_to;
            this.start = this.tourSearch.date_range.start;
            this.end = this.tourSearch.date_range.end;
            this.chosen_hotel_stars = this.tourSearch.hotel_stars;
            this.chosen_meals = this.tourSearch.meals;
            if(this.tourSearch.depart_city)
            {
                this.depart_city = this.tourSearch.depart_city;
                this.$store.dispatch('getSearchCountries', {town_id: this.depart_city.Id});
                if(this.tourSearch.resort_country)
                {
                    this.resort_country = this.tourSearch.resort_country;
                    this.$store.dispatch('getSearchCities', this.resort_country.Id);
                    // this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id});
                    this.$store.dispatch('getSearchTourOperators', {city_id:this.depart_city.Id, country_id:this.resort_country.Id});
                    this.$store.dispatch('getSearchTourDates', {city_id:this.depart_city.Id, country_id:this.resort_country.Id});
                    //если есть выбранные курорты
                    this.resorts = this.tourSearch.resorts;
                    if(this.resorts.length>0 && this.resorts[0].Name !="Любой")
                    {

                        var town_id = '';
                        this.resorts.forEach(item =>
                            {
                                town_id += ''+item.Id+',';
                            }
                        );
                        town_id = town_id.slice(0, -1);
                        //поиск отелей по городам-курортам
                        this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:town_id, star_id:''});
                        this.$store.dispatch('getSearchHotelStars', {country_id:this.resort_country.Id, town_id:town_id});
                    }
                    else {
                        //если городов-курортов не выбрано, то поиск отелей по стране
                        this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                        this.$store.dispatch('getSearchHotelStars', {country_id:this.resort_country.Id, town_id:''});
                    }
                    //если есть выбранные отели
                    if(this.tourSearch.hotels.length>0) {
                        // фильтруем выбранные отели по городам курортам
                        //т.е если выбранные отели находятся в выборке отелей по городам-курортам
                        this.chosen_hotels = this.tourSearch.hotels;
                    }
                    //если есть выбранные туроператоры
                    if(this.tourSearch.tour_operators.length>0)
                    {
                        this.chosen_tour_operators = this.tourSearch.tour_operators
                    }
                }
            }

        },
        computed: {
            menu() {
                return this.$store.getters.menu
            },
            tourSearch() {
                return this.$store.getters.tourSearch
            },
            preloader() {
                return this.$store.getters.preloader
            },

            //dictionaries Sletat.ru
            search_depart_cities() {
                return this.$store.getters.search_depart_cities;
            },
            search_countries() {
                return this.$store.getters.search_countries;
            },
            search_cities() {
                return this.$store.getters.search_cities;
            },
            search_hotels() {
                return this.$store.getters.search_hotels;
            },
            search_hotel_stars() {
                return this.$store.getters.search_hotel_stars;
            },
            search_tour_operators() {
                return this.$store.getters.search_tour_operators;
            },
            search_tour_dates() {
                return this.$store.getters.search_tour_dates;
            },

            //loadings
            search_isDepartCitiesLoading() {
                return this.$store.getters.search_isDepartCitiesLoading;
            },
            search_isCountriesLoading() {
                return this.$store.getters.search_isCountriesLoading;
            },
            search_isCitiesLoading() {
                return this.$store.getters.search_isCitiesLoading;
            },
            search_isHotelsLoading() {
                return this.$store.getters.search_isHotelsLoading;
            },
            search_isTourOperatorsLoading() {
                return this.$store.getters.search_isTourOperatorsLoading;
            },
            search_isHotelStarsLoading() {
                return this.$store.getters.search_isHotelStarsLoading;
            },
            tours_by_hotels() {
                return this.$store.getters.tours_by_hotels
            },
            tours_by_price() {
                return this.$store.getters.tours_by_price
            },
            isToursLoading() {
                return this.$store.getters.isToursLoading;
            },
            search_was() {
                return this.$store.getters.search_was
            }
        },
        filters: {
            pluralizeMeals: function(n) {
                if(n === 1)
                {
                    return 'тип'
                }
                if (n>1 && n<5) {
                    return 'типа'
                }
                if (n>4 && n<20) {
                    return 'типов'
                }
                return 'типов'
            },
            pluralizeHotelStars: function(n) {
                if(n === 1)
                {
                    return 'категория'
                }
                if (n>1 && n<5) {
                    return 'категории'
                }
                if (n>4 && n<20) {
                    return 'категорий'
                }
                return 'категорий'
            },
            pluralizeResorts: function(n) {
                if(n === 1)
                {
                    return 'курорт'
                }
                if (n>1 && n<5) {
                    return 'курорта'
                }
                if (n>4 && n<20) {
                    return 'курортов'
                }
                if (n>19) {
                    var last = n%10;
                    if(last === 1)
                    {
                        return 'курорт'
                    }
                    if(last>1 && last<5)
                    {
                        return 'курорта'
                    }
                    if (last>4 && last<10 && last === 0 ) {
                        return 'курортов'
                    }
                    return 'курортов'
                }
                return 'курортов'
            },
            pluralizeHotels: function(n) {
                if(n === 1)
                {
                    return 'отель'
                }
                if (n>1 && n<5) {
                    return 'отеля'
                }
                if (n>4 && n<20) {
                    return 'отелей'
                }
                if (n>19) {
                    var last = n%10;
                    if(last === 1)
                    {
                        return 'отель'
                    }
                    if(last>1 && last<5)
                    {
                        return 'отеля'
                    }
                    if (last>4 && last<10 && last === 0 ) {
                        return 'отелей'
                    }
                    return 'отелей'
                }
                return 'отелей'
            },
            pluralizeTourOperators: function(n) {
                if(n === 1)
                {
                    return 'туроператор'
                }
                if (n>1 && n<5) {
                    return 'туроператора'
                }
                if (n>4 && n<20) {
                    return 'туроператоров'
                }
                if (n>19) {
                    var last = n%10;
                    if(last === 1)
                    {
                        return 'туроператор'
                    }
                    if(last>1 && last<5)
                    {
                        return 'туроператора'
                    }
                    if (last>4 && last<10 && last === 0 ) {
                        return 'туроператоров'
                    }
                    return 'туроператоров'
                }
                return 'туроператоров'
            },
            pluralizeChoose: function(n) {
                if(n === 1)
                {
                    return 'выбран'
                }
                return 'выбрано'
            }
        },
        methods: {
test(value) {
    console.log(value)
},
            search() {
                this.$store.dispatch('getToursByPrice', {search: this.tourSearch});
            },
            chooseDepartCity() {
                this.$store.dispatch('changeSearchDepartCity', this.depart_city);
                this.$store.dispatch('getSearchCountries', {town_id: this.depart_city.Id});
                if(this.search_countries.findIndex(item=> item.Id == this.resort_country.Id) === -1){
                    this.resorts=[{Name: 'Любой'}];
                    this.chosen_hotels=[{Name: 'Любой'}];
                    this.chosen_tour_operators=[{Name: 'Любой'}];
                    this.chosen_hotel_stars=[{Name: 'Любая'}];
                    this.$store.dispatch('changeSearchResorts', this.resorts);
                    this.$store.dispatch('changeSearchHotels', this.chosen_hotels);
                    this.$store.dispatch('changeSearchTourOperator', this.chosen_tour_operators);
                    this.$store.dispatch('changeSearchHotelStars', this.chosen_hotel_stars);
                }
            },
            chooseResortCountry() {
                this.$store.dispatch('changeSearchResortCountry', this.resort_country);
                this.resorts=[{Name: 'Любой'}];
                this.chosen_hotels=[{Name: 'Любой'}];
                this.chosen_tour_operators=[{Name: 'Любой'}];
                this.chosen_hotel_stars=[{Name: 'Любая'}];
                // this.chosen_meals=[{Name: 'Любое'}]

                this.$store.dispatch('changeSearchResorts', this.resorts);
                this.$store.dispatch('changeSearchHotels', this.chosen_hotels);
                this.$store.dispatch('changeSearchTourOperator', this.chosen_tour_operators);
                this.$store.dispatch('changeSearchHotelStars', this.chosen_hotel_stars);
                // this.$store.dispatch('changeSearchMeals', this.chosen_meals);

                this.$store.dispatch('getSearchCities', this.resort_country.Id);
                this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                this.$store.dispatch('getSearchHotelStars', {country_id:this.resort_country.Id, town_id:''});

                this.$store.dispatch('getSearchTourOperators', {city_id:'832', country_id:this.resort_country.Id});
                this.$store.dispatch('getSearchTourDates', {city_id:'832', country_id:this.resort_country.Id});

                // this.$store.dispatch('getSearchCities', {id:this.resort_country.Id});
                // this.$store.dispatch('getSearchHotels', {id:this.resort_country.Id});
                // this.$store.dispatch('getSearchHotelStars', {id:this.resort_country.Id});
                // this.$store.dispatch('getSearchTourOperators', {city_id:'832', country_id:this.resort_country.Id});
                // this.$store.dispatch('getSearchTourDates', {city_id:'832', country_id:this.resort_country.Id});

            },
            chooseResorts(value) {
                this.resorts = value;
                if(this.resorts.length>0){
                    if (value[this.resorts.length-1].Name==='Любой')
                    {
                        this.resorts=[{Name: 'Любой'}];
                        // this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                        this.$store.dispatch('changeSearchResorts', this.resorts);
                    }
                    else {
                        this.resorts = this.resorts.filter(item=>{
                            if(item.Name !== 'Любой')
                            {
                                return true;
                            }
                        });
                        this.$store.dispatch('changeSearchResorts', this.resorts);
                        var town_id = '';
                        this.resorts.forEach(item =>
                            {
                                town_id += ''+item.Id+',';
                            }
                        );
                        town_id = town_id.slice(0, -1);
                        this.$store.dispatch('getSearchHotelStars', {country_id:this.resort_country.Id, town_id:town_id})
                            .then(() => {
                                // фильтруем выбранные категории по городам курортам
                                this.chosen_hotel_stars = this.chosen_hotel_stars.filter( item =>
                                {
                                    if(this.search_hotel_stars.findIndex(i=> i.Id == item.Id) !== -1)
                                    {
                                        return true;
                                    }
                                });
                                this.$store.dispatch('changeSearchHotels', this.chosen_hotels);

                                //если поиск ничего не вернул запрещаем поиск туров
                            });;
                        //собираем id выбранных категорий
                        var star_id = '';
                        this.chosen_hotel_stars.forEach(item => {
                                star_id += '' + item.Id + ',';
                            }
                        );
                        //поиск отелей по городам-курортам
                        this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:town_id, star_id:''}).then(() => {
                            // фильтруем выбранные отели по городам курортам
                            this.chosen_hotels = this.chosen_hotels.filter( item =>
                            {
                                if(this.search_hotels.findIndex(i=> i.Id == item.Id) !== -1)
                                {
                                    return true;
                                }
                            });
                            this.$store.dispatch('changeSearchHotels', this.chosen_hotels);

                            //если поиск ничего не вернул запрещаем поиск туров
                        });
                    }
                }
            },
            chooseHotel(value) {
                this.chosen_hotels = value;
                if (value[this.chosen_hotels.length-1].Name==='Любой')
                {
                    this.chosen_hotels=[{Name: 'Любой'}];
                }
                else {
                    this.chosen_hotels = this.chosen_hotels.filter(item=>{
                        if(item.Name !== 'Любой')
                        {
                            return true
                        }
                    })
                }
                this.$store.dispatch('changeSearchHotels', this.chosen_hotels)
            },
            whateverResort(actionName) {
                if (actionName.Name=='Любой') {
                    this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                    this.$store.dispatch('getSearchHotelStars', {country_id:this.resort_country.Id, town_id:''});
                }
            },
            removeResort(removedOption, id){
                if (removedOption.Name!='Любой') {
                    if (this.resorts.length == 1) {
                        this.resorts.push({Name: 'Любой'});
                        this.$store.dispatch('changeSearchResorts', this.resorts);
                        this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                        this.$store.dispatch('getSearchHotelStars', {country_id:this.resort_country.Id, town_id:''});
                    }
                }
                else {
                    this.resorts.push({Name: 'Любой'});
                }
            },
            removeHotels(removedOption, id){
                if (removedOption.Name!='Любой') {
                    if (this.chosen_hotels.length == 1) {
                        this.chosen_hotels.push({Name: 'Любой'});
                        this.$store.dispatch('changeSearchHotels', this.chosen_hotels);
                    }
                }
                else {
                    this.chosen_hotels.push({Name: 'Любой'});
                }
            },

            chooseTourOperator(value) {
                this.chosen_tour_operators = value;

                if (value[this.chosen_tour_operators.length-1].Name==='Любой') {
                    this.chosen_tour_operators=[{Name: 'Любой'}];
                }
                else {
                    this.chosen_tour_operators = this.chosen_tour_operators.filter(item=>{
                        if(item.Name !== 'Любой')
                        {
                            return true
                        }
                    })
                }
                this.$store.dispatch('changeSearchTourOperator', this.chosen_tour_operators)
            },
            removeTourOperators(removedOption, id){
                if (removedOption.Name!='Любой') {
                    if (this.chosen_tour_operators.length == 1) {
                        this.chosen_tour_operators.push({Name: 'Любой'});
                        this.$store.dispatch('changeSearchTourOperator', this.chosen_tour_operators);
                    }
                }
                else {
                    this.chosen_tour_operators.push({Name: 'Любой'});
                }
            },

            chooseHotelStars(value) {
                this.chosen_hotel_stars = value;
                if(this.chosen_hotel_stars.length>0){
                    //выбрана Любая категория
                    if (value[this.chosen_hotel_stars.length-1].Name==='Любая') {
                        this.chosen_hotel_stars = [{Name: 'Любая'}];
                        this.$store.dispatch('changeSearchHotelStars', this.chosen_hotel_stars);

                        //меняем список отелей по курортам без звезд
                        if (this.resorts.length > 0)
                        {
                            //есть выбранные курорты
                            if( this.resorts[0].Name != 'Любой'){
                                var town_id = '';
                                this.resorts.forEach(item => {
                                        town_id += '' + item.Id + ',';
                                    }
                                );
                                town_id = town_id.slice(0, -1);
                                this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:town_id, star_id:''});
                            }
                            //нет выбранных курортов
                            else {
                                this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                            }
                        }
                    }
                    //выбрана другая категория, не Любая категория
                    else {
                        this.chosen_hotel_stars = this.chosen_hotel_stars.filter(item=>{
                            if(item.Name !== 'Любая')
                            {
                                return true;
                            }
                        });
                        this.$store.dispatch('changeSearchHotelStars', this.chosen_hotel_stars);

                        //собираем id выбранных категорий
                        var star_id = '';
                        this.chosen_hotel_stars.forEach(item => {
                                star_id += '' + item.Id + ',';
                            }
                        );
                        star_id = star_id.slice(0, -1);

                        //меняем список отелей по курортам со звездами
                        if (this.resorts.length > 0) {
                            //есть выбранные курорты
                            if (this.resorts[0].Name != 'Любой') {
                                var town_id = '';
                                this.resorts.forEach(item => {
                                        town_id += '' + item.Id + ',';
                                    }
                                );
                                town_id = town_id.slice(0, -1);
                                this.$store.dispatch('getSearchHotels', {
                                    country_id: this.resort_country.Id,
                                    town_id: town_id,
                                    star_id: star_id
                                })
                                    .then(() => {
                                        // фильтруем выбранные отели по выбранной категории
                                        this.chosen_hotels = this.chosen_hotels.filter(item => {
                                            if (this.search_hotels.findIndex(i => i.Id == item.Id) !== -1) {
                                                return true;
                                            }
                                        });
                                        this.$store.dispatch('changeSearchHotels', this.chosen_hotels);
                                    });
                            }
                            //нет выбранных курортов
                            else {
                                this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:'', star_id:star_id}).then(() => {
                                    // фильтруем выбранные отели по выбранной категории
                                    this.chosen_hotels = this.chosen_hotels.filter( item =>
                                    {
                                        if(this.search_hotels.findIndex(i=> i.Id == item.Id) !== -1)
                                        {
                                            return true;
                                        }
                                    });
                                    this.$store.dispatch('changeSearchHotels', this.chosen_hotels);
                                });
                            }
                        }
                    }
                }

            },
            removeHotelStars(removedOption, id){
                if (removedOption.Name!='Любая') {
                    if (this.chosen_hotel_stars.length == 1) {
                        this.chosen_hotel_stars.push({Name: 'Любая'});
                        this.$store.dispatch('changeSearchHotelStars', this.chosen_hotel_stars);
                        //меняем список отелей по курортам без звезд
                        if (this.resorts.length > 0)
                        {
                            //есть выбранные курорты
                            if( this.resorts[0].Name != 'Любой'){
                                var town_id = '';
                                this.resorts.forEach(item => {
                                        town_id += '' + item.Id + ',';
                                    }
                                );
                                town_id = town_id.slice(0, -1);
                                this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:town_id, star_id:''});
                            }
                            //нет выбранных курортов
                            else {
                                this.$store.dispatch('getSearchHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                            }
                        }
                    }
                }
                else {
                    this.chosen_hotel_stars.push({Name: 'Любая'});
                }
            },
            chooseMeals(value) {
                this.chosen_meals = value;

                if (value[this.chosen_meals.length-1].Name==='Любое') {
                    this.chosen_meals=[{Name: 'Любое'}];
                }
                else {
                    this.chosen_meals = this.chosen_meals.filter(item=>{
                        if(item.Name !== 'Любое')
                        {
                            return true
                        }
                    })
                }
                this.$store.dispatch('changeSearchMeals', this.chosen_meals);
            },
            removeMeals(removedOption, id){
                if (removedOption.Name!='Любое') {
                    if (this.chosen_meals.length == 1) {
                        this.chosen_meals.push({Name: 'Любое'});
                        this.$store.dispatch('changeSearchMeals', this.chosen_meals);
                    }
                }
                else {
                    this.chosen_meals.push({Name: 'Любое'});
                }
            },

            search_incrementAdults() {
                this.$store.dispatch("search_incAdults")
                this.adults = this.tourSearch.adults
            },
            search_decrementAdults() {
                this.$store.dispatch("search_decAdults")
                this.adults = this.tourSearch.adults
            },
            search_incrementChildren() {
                this.$store.dispatch("search_incChildren")
                this.children = this.tourSearch.children
            },
            search_decrementChildren() {
                this.$store.dispatch("search_decChildren")
                this.children = this.tourSearch.children
            },
            changeChildren() {
                this.$store.dispatch("changeSearchChildren", this.children)
                this.children = this.tourSearch.children
            },
            changeAdults() {
                this.$store.dispatch("changeSearchAdults", this.adults)
                this.adults = this.tourSearch.adults
            },

            changePriceFrom() {
                this.$store.dispatch("changeSearchPriceFrom", this.price_from)
                this.price_from = this.tourSearch.price_from
            },
            changePriceTo() {
                this.$store.dispatch("changeSearchPriceTo", this.price_to)
                this.price_to = this.tourSearch.price_to
            },
            changeNightsFrom() {
                this.$store.dispatch("changeSearchNightsFrom", this.nights_from)
                this.nights_from = this.tourSearch.nights_from
                if(this.nights_from>this.nights_to)
                {
                    this.nights_to = this.nights_from
                    this.$store.dispatch("changeSearchNightsTo", this.nights_to)
                }
            },
            changeNightsTo() {
                this.$store.dispatch("changeSearchNightsTo", this.nights_to)
                this.nights_to = this.tourSearch.nights_to
                if(this.nights_to<this.nights_from)
                {
                    this.nights_from = this.nights_to;
                    this.$store.dispatch("changeSearchNightsFrom", this.nights_from)
                }
            },

            changeDateRange(date_object) {
                this.$store.dispatch("changeSearchDateRange", date_object)
            },
            resetDateRange() {
                var d1=new Date();
                this.start = ("0" + d1.getDate()).slice(-2) + "/" + ("0"+(d1.getMonth()+1)).slice(-2) + "/" + d1.getFullYear();
                var d2 = new Date((new Date).setDate((new Date).getDate() + 7));
                this.end = ("0" + d2.getDate()).slice(-2) + "/" + ("0"+(d2.getMonth()+1)).slice(-2) + "/" + d2.getFullYear();
                // var d1=new Date();
                // this.start = ("0" + d1.getDate()).slice(-2) + "/" + ("0"+(d1.getMonth()+1)).slice(-2) + "/" + d1.getFullYear();
                // var d2 = new Date((new Date).setDate((new Date).getDate() + 7));
                // // this.end = d2.getDate()  + "/" + (d2.getMonth()+1) + "/" + d2.getFullYear();
                // this.end = ("0" + d2.getDate()).slice(-2) + "/" + ("0"+(d2.getMonth()+1)).slice(-2) + "/" + d2.getFullYear();
                // //this.start = new Date();
                // // this.end = new Date((new Date).setDate((new Date).getDate() + 7));
                this.$store.dispatch("changeSearchDateRange", {start: this.start, end: this.end})
                // this.$refs.datepicker.confirm();
            },
            // changeDepartDate () {
            //     this.$store.dispatch("changeSearchDateRange", {start: this.start, end: this.end})
            //     if(this.end != null) {
            //         var date1 = new Date(this.start);
            //         var date2 = new Date(this.end);
            //
            //         if(date1 > date2)
            //         {
            //             this.end = this.start;
            //             this.$store.dispatch("changeSearchDateRange", {start: this.start, end: this.end})
            //             this.disabledDates2.to = this.start;
            //         }
            //     }
            // },
            // changeReturnDate () {
            //     this.$store.dispatch("changeSearchDateRange", {start: this.start, end: this.end})
            // },
        },
        directives: {mask}
    }
</script>
<style scoped>
    .btn.btn-primary {
        color: #fff !important;
        background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);
        background-color: rgba(0, 0, 0, 0);
        background-color: #f08b23 !important;
        border-color: #f08b23 !important;
        box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;
        border-radius: 50px;
        font-weight: 900;
        font-family: "Open Sans";
        text-transform: uppercase;
    }
    #mobile-search .qty .count {
        display: inline-block;
        vertical-align: top;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        padding: 0 2px;
        min-width: 35px;
        text-align: center;
        font-family: "Open Sans";
        color: #0f213d!important;
        border-radius: 50px;
    }
    #mobile-search .qty button{
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: pointer;
        display: inline-block;
        vertical-align: top;
        color: white;
        width: 30px;
        height: 30px;
        font: 30px/1 Arial,sans-serif;
        text-align: center;
        border-radius: 50%;
        padding: 0;
        background: #f08b23;
    }
    #mobile-search .qty .btn:focus{
        border:0;
        box-shadow: none;
    }
</style>
<style>
    #mobile-search .multiselect, .multiselect__input, .multiselect__single {
        font-family: inherit;
        font-size: 13px;
        touch-action: manipulation;
    }
    #mobile-search .multiselect__single {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #mobile-search .vhd-container.mobile {
        width: 100% !important;
    }
    @media only screen and (max-width:767.98px) {
        .vdp-container:not(.desktop) .vdp-picker {
            width: 100% !important;
            padding: 8px
        }
        .qty input {
            border: 0;
            width: 50%;
        }
    }
    @media screen and (max-width: 477px) {
        .vdp-input {
            min-width: 100% !important;
        }
        .vdp-container {
            width: 100% !important;
        }
    }

    .vdp-datepicker__calendar {
        position: absolute;
        z-index: 2!important;
        padding: 18px!important;
        background: #fff;
        width: 300px;
        border: 1px solid #ccc;
    }
    .vdp-datepicker input {
        /*min-width: 300px;*/
        padding: 8px;
        border: 1px solid #ffa500 !important;
        color: #062348!important;
        font-size: 16px;
        line-height: 32px;
        outline: none;
        border-radius: 20px;
        min-height: 40px;
        height: 40px !important;
        font-family: "Open Sans" !important;
        font-weight: 900;
        width: 100%;
    }
    .vdp-datepicker input::placeholder {
        color: #062348 !important;
    }
    .vdp-datepicker__calendar .day-header
    {
        color: #062348;
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
    }
    .vdp-datepicker__clear-button
    {
        position: absolute;
        right: 20px;
        top: -11px;
        color: #0f213d;
        font-size: 36px;
    }
    .vdp-datepicker__calendar .cell {
        display: inline-block;
        padding: 0 5px;
        width: 14.285714285714286%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        vertical-align: middle;
        border: 1px solid transparent;
    }

    .vdp-datepicker__calendar .day {
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        color: #0f213d;
        text-align: center;
        cursor: pointer;
    }
    .vdp-datepicker__calendar .day{
        background-image: none!important;
        height: 30px !important;
    }
    .vdp-datepicker__calendar .cell {
        display: inline-block;
        padding: 0 5px;
        width: 14.285714285714286%;
        height: 30px !important;
        line-height: 30px !important;
        text-align: center;
        vertical-align: middle;
        border: 1px solid transparent;
    }
    .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
    .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
    .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
        border: 1px solid #ffa500 !important;
    }
    .vdp-datepicker__calendar .cell.selected {
        background: #ffa50070 !important;
        background-image: none;
    }
    .vdp-datepicker__calendar .cell.selected:hover {
        background: #ffa50070 !important;
        background-image: none;
    }

    .vdp-calendar .calendar-date .week .day.start-date::before {
        background-color: #ffa500 !important;
    }
    .vdp-calendar .calendar-date .week .day.end-date::after{
        background-color: #ffa500 !important;
    }
    .vdp-calendar .calendar-date .week .day.in-date-range {
        background-color: #ffa50070 !important;
    }
    .vdp-calendar .calendar-date .week .day.start-date {
        background-color: #ffa50070 !important;
    }
    .vdp-calendar .calendar-date .week .day.end-date {
        background-color: #ffa50070 !important;
    }
    .vdp-calendar .calendar-date .week .day.today {
        border: 1px solid #ffa500 !important;
    }
    .vdp-calendar-footer .confirm, .vdp-calendar-footer .reset {
        font-family: "Open Sans" !important;
        font-weight: 900!important;
    }
    .vdp-calendar-footer .reset {
        color: #062348!important;
    }
    .vdp-calendar-footer .confirm{
        color: #ffa500 !important;
    }
    .vdp-calendar .calendar-week-item,  .vdp-calendar .calendar-month-title{
        color: #062348!important;
        font-family: "Open Sans" !important;
        font-weight: 900!important;
    }
    @media only screen and (max-width:767.98px) {
        .vhd-container:not(.desktop) .vhd-picker {
            width: 100% !important;
            padding: 8px
        }
        .qty input {
            border: 0;
            width: 50%;
        }
    }
    @media screen and (max-width: 477px) {
        .vhd-input {
            min-width: 100% !important;
        }
        .vhd-container {
            width: 100% !important;
        }
    }
    .vhd-picker {
        z-index: 2!important;
        min-height: 362px!important;
        padding: 18px!important;
    }
    #mobile-search .vhd-input {
        min-width: 100px;
        padding: 8px;
        border: 1px solid #ffa500 !important;
        color: #062348!important;
        font-size: 13px;
        line-height: 32px;
        outline: none;
        border-radius: 20px;
        min-height: 40px;
        height: 40px !important;
        font-family: "Open Sans" !important;
        font-weight: 900;
        width: 100%;
    }
    .vhd-input::placeholder {
        color: #062348 !important;
    }
    .vhd-container:not(.desktop) .vhd-picker {
        min-height: 362px;
    }
    .vhd-calendar .calendar-date .week .day[data-v-0cb4ff92] {
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        color: #505050;
        text-align: center;
        cursor: pointer;
    }
    .vhd-calendar .calendar-date .week .day{
        background-image: none!important;
        height: 30px !important;
    }
    .vhd-calendar-header {
        height: 20px!important;
    }
    .vhd-container:not(.desktop) .vhd-calendar-header {
        height:60px !important;
    }
    .vhd-container:not(.desktop) .vhd-calendar-header>.info {
        display:block;
        width:100%;
        height:60px;
        padding-top:32px!important;
    }
    .vhd-container:not(.desktop) .vhd-calendar-footer {
        height: 36px !important;
    }
    .vhd-calendar-footer {
        height: 24px!important;
    }
    .vhd-calendar .calendar-date .week {
        height: 30px !important;
    }
    .vhd-calendar .calendar-date .week .day.start-date::before {
        background-color: #ffa500 !important;
    }
    .vhd-calendar .calendar-date .week .day.end-date::after{
        background-color: #ffa500 !important;
    }
    .vhd-calendar .calendar-date .week .day.in-date-range {
        background-color: #ffa50070 !important;
    }
    .vhd-calendar .calendar-date .week .day.start-date {
        background-color: #ffa50070 !important;
    }
    .vhd-calendar .calendar-date .week .day.end-date {
        background-color: #ffa50070 !important;
    }
    .vhd-calendar .calendar-date .week .day.today {
        border: 1px solid #ffa500 !important;
    }
    .vhd-calendar-footer .confirm, .vhd-calendar-footer .reset {
        font-family: "Open Sans" !important;
        font-weight: 900!important;
    }
    .vhd-calendar-footer .reset {
        color: #062348!important;
    }
    .vhd-calendar-footer .confirm{
        color: #ffa500 !important;
    }
    .vhd-calendar .calendar-week-item,  .vhd-calendar .calendar-month-title{
        color: #062348!important;
        font-family: "Open Sans" !important;
        font-weight: 900!important;
    }
    .values__hotel-rating::after{
        content: '';
        display: inline-block;
        margin-left: 2px;
        width: 13px;
        height: 12px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);
        background-repeat: no-repeat;
        background-position: center;
    }
    .multiselect__tags .price{
        color: #062348;
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
    }

    .multiselect__tags .price:focus{
        outline: none!important;
        box-shadow: none !important;
    }

    #mobile-search  .multiselect-title {
        color: #062348 !important;
        font-family: "Open Sans" !important;
        font-weight: 900;
        font-size: 12px;
    }
    .multiselect__tags {
        border: 1px solid #f08b23;
        border-radius: 20px;
        font-size: 1rem;
        min-height: 40px;
    }
    .multiselect__tag {
        background: #062348;
    }
    .multiselect__tag-icon::after {
        color:#fff;
    }
    .multiselect__tag-icon:focus, .multiselect__tag-icon:hover {
        background: #f08b23;
    }
    .multiselect__option--highlight::after {
        background: #f08b23;
    }
    .multiselect__option--highlight{
        background: #f08b23;
    }
    .multiselect{
        color: #062348;
        font-family: "Open Sans" !important;
        font-weight: 900;
    }
    .multiselect__placeholder {
        color: #062348;
    }
    .multiselect__input:focus, .multiselect__single:focus {
        border-color: #062348;
    }
    .multiselect__input::placeholder {
        color: #062348 !important;
        font-family: Open Sans !important;
        font-weight: 700;
    }
    .multiselect--disabled {
        background: white;
    }
    .multiselect--disabled .multiselect__select {
        background: transparent;
    }
    .multiselect__spinner::after, .multiselect__spinner::before {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        margin: -8px 0 0 -8px;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        border: 3px solid transparent;
        border-top-color: transparent;
        border-top-color: #ffa500;
        box-shadow: 0 0 0 1px transparent;
        background: transparent;
    }
    .multiselect__spinner{
        border-radius: 50px;
    }
    .multiselect__option--selected {
        background: #ffe4c8;
        color: #062348;
        font-weight: 700;
    }
    .qty .count {
        display: inline-block;
        vertical-align: top;
        font-size: 25px;
        font-weight: 700;
        line-height: 30px;
        padding: 0 2px;
        min-width: 35px;
        text-align: center;
        font-family: "Open Sans";
        color: #0f213d!important;
    }

    .qty div {
        text-align: center;
    }
    .qty .minus:hover{
        background: #0f213d!important;
        color: white;
    }
    .qty .plus:hover{
        background: #0f213d !important;
        color: white;
    }

    #search .qty input{
        border: 0;
        width: 50%;
    }
    .qty input::-webkit-outer-spin-button,
    .qty input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .qty input:disabled{
        background-color:white;
    }
</style>
