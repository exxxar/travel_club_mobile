<template>
    <div class="section">
        <h4 class="section-title">Выбираем путешествие</h4>
        <p>Для начала стоит определиться с местом отправления</p>

        <div class="input-wrapper mt-2">
            <h4 class="multiselect-title">Куда</h4>
            <multiselect
                v-model="resort_country"
                :options="countries"
                :option-height="25"
                placeholder="Выберете страну"
                :show-labels="false"
                :maxHeight="200"
                label="Name"
                track-by="Name"
                :loading="isCountriesLoading"
                :disabled="isCountriesLoading"
                :allow-empty="false"
                @input="chooseResortCountry"
            >
                <template slot="singleLabel" slot-scope="props">
                    <b :class="'slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_'+props.option.Id"></b>
                    <span class="option__desc">
                                <span class="option__title">{{ props.option.Name }}</span>
                            </span>
                </template>
                <template slot="option" slot-scope="props">
                    <b :class="'slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_'+props.option.Id"></b>
                    <span class="option__desc">
                                <span class="option__title">{{ props.option.Name }}</span>
                            </span>
                </template>
            </multiselect>
        </div>

        <div class="input-wrapper mt-2">
            <h4 class="multiselect-title">Курорт</h4>
            <multiselect
                :value="resorts"
                :options="cities"
                placeholder="Введите название курорта"
                :show-labels="false"
                :limit="2"
                :maxHeight="200"
                label="Name"
                track-by="Name"
                :multiple="true" :close-on-select="false" :clear-on-select="false"
                :loading="isCountriesLoading || isCitiesLoading"
                :disabled="isCountriesLoading || isCitiesLoading"
                @input="chooseResorts"
                @select="whateverResort"
                @remove="removeResort"
                :preselectFirst="true"
            >
                <template slot="limit"><span class="multiselect__single"> и ещё {{ resorts.length-2 }} {{resorts.length-2 | pluralizeResorts}}</span>
                </template>
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
                                                                                         v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeResorts }} {{values.length | pluralizeChoose}}</span>
                </template>
            </multiselect>
        </div>


        <div class="input-wrapper mt-2">
            <h4 class="multiselect-title">Выбор отеля</h4>
            <multiselect
                :value="chosen_hotels"
                :options="hotels"
                placeholder="Введите название отеля"
                :show-labels="false"
                :limit="2"
                :maxHeight="200"
                label="Name"
                track-by="Name"
                :multiple="true" :close-on-select="false" :clear-on-select="false"
                :loading="isCountriesLoading || isHotelsLoading"
                :disabled="isCountriesLoading || isHotelsLoading"
                @input="chooseHotel"
                @remove="removeHotels"
                :preselectFirst="true"
            >
                <template slot="limit"><span class="multiselect__single"> и ещё {{ chosen_hotels.length-2 }} {{chosen_hotels.length-2 | pluralizeHotels}}</span>
                </template>
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
                                                                                         v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeHotels}} {{values.length | pluralizeChoose}}</span>
                </template>
                <template slot="singleLabel" slot-scope="props">
                                    <span class="option__desc">
                                        <span class="option__title">{{ props.option.Name }}</span>
                                        <span class="option__title" style="float:right"
                                              v-if="props.option.CommonRate!=0">{{ props.option.CommonRate }}</span>
                                        <span class="values__hotel-rating" style="float:right"
                                              v-if="props.option.StarName">{{ props.option.StarName }}</span>
                                    </span>
                </template>
                <template slot="option" slot-scope="props">
                    <div class="option__desc">
                        <span class="option__title">{{ props.option.Name }}</span>
                        <span class="option__title" style="float:right" v-if="props.option.CommonRate!=0">{{ props.option.CommonRate }}</span>
                        <span class="values__hotel-rating" style="float:right" v-if="props.option.StarName">{{ props.option.StarName }}</span>
                    </div>
                </template>
            </multiselect>
        </div>

        <div class="input-wrapper mt-2">
            <h4 class="multiselect-title">Туроператоры</h4>
            <multiselect
                v-model="chosen_tour_operators"
                :options="tour_operators"
                placeholder="Введите название туроператора"
                :show-labels="false"
                :limit="2"
                :maxHeight="200"
                label="Name"
                track-by="Name"
                :multiple="true" :close-on-select="false" :clear-on-select="false"
                :loading="isCountriesLoading || isTourOperatorsLoading"
                :disabled="isCountriesLoading || isTourOperatorsLoading"
                @input="chooseTourOperator"
                @remove="removeTourOperators"
                :preselectFirst="true"
            >
                <template slot="limit"><span class="multiselect__single"> и ещё {{ chosen_tour_operators.length-2 }} {{chosen_tour_operators.length-2 | pluralizeTourOperators}}</span>
                </template>
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
                                                                                         v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeTourOperators}} {{values.length | pluralizeChoose}}</span>
                </template>
            </multiselect>
        </div>

        <div class="input-wrapper mt-2">
            <h4 class="multiselect-title">Интервал дат вылета</h4>
            <VueHotelDatepicker
                :startDate="start"
                :endDate="end"
                :placeholder="'Интервал дат вылета'"
                :format="'DD-MM-YYYY'"
                :weekList="['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.']"
                :monthList="['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май.', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт', 'Ноя.', 'Дек.']"
                :fromText="'С'"
                :toText="'По'"
                :resetText="'Очистить'"
                :confirmText="'Подтвердить'"
                @update="changeDateRange"
                @reset="resetDateRange"
            />
        </div>

        <div class="input-wrapper mt-2">
            <h4 class="multiselect-title">Взрослые</h4>
            <div class="d-flex align-items-center justify-content-between flex-nowrap">
                <button type="button" class="btn btn-orange mr-2" :disabled="adults===1"
                        @click="decrementAdults()">-
                </button>
                <input type="number" class="form-control" name="qty" v-model="adults" step="1" min="1"
                       @change="changeAdults">
                <button type="button" class="btn btn-orange ml-2"
                        @click="incrementAdults()">+
                </button>

            </div>
        </div>

        <div class="input-wrapper mt-2">
            <h4 class="multiselect-title">Дети</h4>
            <div class="d-flex align-items-center justify-content-between flex-nowrap">
                <button type="button" class="btn btn-orange mr-2" :disabled="children===0"
                        @click="decrementChildren()">-
                </button>
                <input type="number" class="form-control" name="qty" v-model="children" step="1" min="0"
                       @change="changeChildren">
                <button type="button" class="btn btn-orange ml-2"
                        @click="incrementChildren()">+
                </button>

            </div>
        </div>


        <div class="input-wrapper mt-2">
            <div class="d-flex align-items-center justify-content-between flex-nowrap">
                <div class="p-1">
                    <h4 class="multiselect-title">Цена от</h4>
                    <input type="number" class="form-control" v-model="price_from" step="1"
                           min="0" @input="changePriceFrom">
                </div>
                <div class="p-1">
                    <h4 class="multiselect-title">Цена до</h4>


                    <input type="number" class="form-control" v-model="price_to" step="1"
                           min="0" @change="changePriceTo">
                </div>
            </div>
        </div>

        <div class="input-wrapper mt-2">
            <div class="d-flex align-items-center justify-content-between flex-nowrap">
                <div class="p-1 w-100">
                    <h4 class="multiselect-title">Ночей от</h4>

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
                    />
                </div>


                <div class="p-1 w-100">
                    <h4 class="multiselect-title">Ночей до</h4>
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
                    />
                </div>
            </div>
        </div>


    </div>


</template>

<script>

    import Multiselect from 'vue-multiselect'
    import VueHotelDatepicker from '@northwalker/vue-hotel-datepicker'
    import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';

    import "vue-multiselect/dist/vue-multiselect.min.css"

    export default {
        components: {
            Multiselect, VueHotelDatepicker
        },
        name: "Tour",
        data() {
            return {
                resort_country: null,
                resorts: [],
                chosen_hotels: [],
                chosen_tour_operators: [],
                adults: 1,
                children: 0,
                nights: [],
                price_from: null,
                price_to: null,
                nights_from: 1,
                nights_to: 10,
                start: new Date(),
                end: new Date((new Date).setDate((new Date).getDate() + 7)),
                meals: [
                    {name: 'Vue.js', language: 'JavaScript'},
                    {name: 'Rails', language: 'Ruby'},
                    {name: 'Sinatra', language: 'Ruby'},
                    {name: 'Laravel', language: 'PHP'},
                    {name: 'Phoenix', language: 'Elixir'}
                ],
            }
        },
        created() {
            this.$store.dispatch('getCountries', {town_id: 0});
            for (var i = 1; i < 31; i++) {
                this.nights.push(i);
            }
        },
        mounted() {
            this.adults = this.tourModule.adults;
            this.children = this.tourModule.children;
            this.price_from = this.tourModule.price_from;
            this.price_to = this.tourModule.price_to;
            this.nights_from = this.tourModule.nights_from;
            this.nights_to = this.tourModule.nights_to;
            this.start = this.tourModule.date_range.start;
            this.end = this.tourModule.date_range.end;
            if (this.tourModule.resort_country) {
                this.resort_country = this.tourModule.resort_country;
                this.$store.dispatch('getCities', this.resort_country.Id);
                // this.$store.dispatch('getHotels', {country_id:this.resort_country.Id});
                this.$store.dispatch('getTourOperators', {city_id: '832', country_id: this.resort_country.Id});
                this.$store.dispatch('getTourDates', {city_id: '832', country_id: this.resort_country.Id});
                //если есть выбранные курорты
                if (this.tourModule.resorts.length > 0 && this.tourModule.resorts[0].Name != 'Любой') {
                    this.resorts = this.tourModule.resorts;
                    var town_id = '';
                    this.resorts.forEach(item => {
                            town_id += '' + item.Id + ',';
                        }
                    );
                    town_id = town_id.slice(0, -1);
                    //поиск отелей по городам-курортам
                    this.$store.dispatch('getHotels', {
                        country_id: this.resort_country.Id,
                        town_id: town_id,
                        star_id: '0'
                    });
                } else {
                    this.resorts = this.tourModule.resorts;
                    //если городов-курортов не выбрано, то поиск отелей по стране
                    this.$store.dispatch('getHotels', {country_id: this.resort_country.Id, town_id: '0', star_id: '0'});
                }
                //если есть выбранные отели
                if (this.tourModule.hotels.length > 0) {
                    // фильтруем выбранные отели по городам курортам
                    //т.е если выбранные отели находятся в выборке отелей по городам-курортам
                    this.chosen_hotels = this.tourModule.hotels;
                    // this.chosen_hotels = this.tourModule.hotels.filter( item =>
                    // {
                    //     console.log('фильтруем выбранные отели по городам курортам')
                    //     if(this.hotels.indexOf(item) !== -1)
                    //     {
                    //         return true;
                    //     }
                    // });
                    // this.$store.dispatch('changeHotels', this.chosen_hotels)
                    // this.chosen_hotels = this.tourModule.hotels
                }
                // else {
                //     //если городов-курортов не выбрано, то поиск отелей по стране
                //     this.$store.dispatch('getHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                // }
                //если есть выбранные туроператоры
                if (this.tourModule.tour_operators.length > 0) {
                    this.chosen_tour_operators = this.tourModule.tour_operators
                }
            }
        },
        computed:
            {
                menu() {
                    return this.$store.getters.menu
                },
                tourModule() {
                    return this.$store.getters.tourModule
                },
                preloader() {
                    return this.$store.getters.preloader
                },
                //dictionaries Sletat.ru
                countries() {
                    return this.$store.getters.countries;
                },
                cities() {
                    return this.$store.getters.cities;
                },
                hotels() {
                    return this.$store.getters.hotels;
                },
                hotel_stars() {
                    return this.$store.getters.hotel_stars;
                },
                tour_operators() {
                    return this.$store.getters.tour_operators;
                },
                tour_dates() {
                    return this.$store.getters.tour_dates;
                },
                // adults() {
                //     return this.$store.getters.adults;
                // },
                // children() {
                //     return this.$store.getters.children;
                // },
                //loadings
                isCountriesLoading() {
                    return this.$store.getters.isCountriesLoading;
                },
                isCitiesLoading() {
                    return this.$store.getters.isCitiesLoading;
                },
                isHotelsLoading() {
                    return this.$store.getters.isHotelsLoading;
                },
                isTourOperatorsLoading() {
                    return this.$store.getters.isTourOperatorsLoading;
                },
            },
        filters: {
            pluralizeResorts: function (n) {
                if (n === 1) {
                    return 'курорт'
                }
                if (n > 1 && n < 5) {
                    return 'курорта'
                }
                if (n > 4 && n < 20) {
                    return 'курортов'
                }
                if (n > 19) {
                    var last = n % 10;
                    if (last === 1) {
                        return 'курорт'
                    }
                    if (last > 1 && last < 5) {
                        return 'курорта'
                    }
                    if (last > 4 && last < 10 && last === 0) {
                        return 'курортов'
                    }
                    return 'курортов'
                }
                return 'курортов'
            },
            pluralizeHotels: function (n) {
                if (n === 1) {
                    return 'отель'
                }
                if (n > 1 && n < 5) {
                    return 'отеля'
                }
                if (n > 4 && n < 20) {
                    return 'отелей'
                }
                if (n > 19) {
                    var last = n % 10;
                    if (last === 1) {
                        return 'отель'
                    }
                    if (last > 1 && last < 5) {
                        return 'отеля'
                    }
                    if (last > 4 && last < 10 && last === 0) {
                        return 'отелей'
                    }
                    return 'отелей'
                }
                return 'отелей'
            },
            pluralizeTourOperators: function (n) {
                if (n === 1) {
                    return 'туроператор'
                }
                if (n > 1 && n < 5) {
                    return 'туроператора'
                }
                if (n > 4 && n < 20) {
                    return 'туроператоров'
                }
                if (n > 19) {
                    var last = n % 10;
                    if (last === 1) {
                        return 'туроператор'
                    }
                    if (last > 1 && last < 5) {
                        return 'туроператора'
                    }
                    if (last > 4 && last < 10 && last === 0) {
                        return 'туроператоров'
                    }
                    return 'туроператоров'
                }
                return 'туроператоров'
            },
            pluralizeChoose: function (n) {
                if (n === 1) {
                    return 'выбран'
                }
                return 'выбрано'
            }
        },
        methods:
            {
                chooseResortCountry() {
                    this.$store.dispatch('changeResortCountry', this.resort_country);
                    this.resorts = [{Name: 'Любой'}];
                    this.chosen_hotels = [{Name: 'Любой'}];
                    this.chosen_tour_operators = [{Name: 'Любой'}];
                    this.$store.dispatch('changeResorts', this.resorts);
                    this.$store.dispatch('changeHotels', this.chosen_hotels);
                    this.$store.dispatch('changeTourOperator', this.chosen_tour_operators);
                    this.$store.dispatch('getCities', this.resort_country.Id);
                    this.$store.dispatch('getHotels', {country_id: this.resort_country.Id, town_id: '0', star_id: '0'});
                    this.$store.dispatch('getTourOperators', {city_id: '832', country_id: this.resort_country.Id});
                    this.$store.dispatch('getTourDates', {city_id: '832', country_id: this.resort_country.Id});
                    // this.$store.dispatch('getCities', {id:this.resort_country.Id});
                    // this.$store.dispatch('getHotels', {id:this.resort_country.Id});
                    // this.$store.dispatch('getHotelStars', {id:this.resort_country.Id});
                    // this.$store.dispatch('getTourOperators', {city_id:'832', country_id:this.resort_country.Id});
                    // this.$store.dispatch('getTourDates', {city_id:'832', country_id:this.resort_country.Id});
                },
                chooseResorts(value) {
                    this.resorts = value;
                    if (this.resorts.length > 0) {
                        if (value[this.resorts.length - 1].Name === 'Любой') {
                            this.resorts = [{Name: 'Любой'}];
                            // this.$store.dispatch('getHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                            this.$store.dispatch('changeResorts', this.resorts);
                        } else {
                            this.resorts = this.resorts.filter(item => {
                                if (item.Name !== 'Любой') {
                                    return true;
                                }
                            });
                            this.$store.dispatch('changeResorts', this.resorts);
                            var town_id = '';
                            this.resorts.forEach(item => {
                                    town_id += '' + item.Id + ',';
                                }
                            );
                            town_id = town_id.slice(0, -1);
                            //поиск отелей по городам-курортам
                            this.$store.dispatch('getHotels', {
                                country_id: this.resort_country.Id,
                                town_id: town_id,
                                star_id: '0'
                            }).then(() => {
                                // фильтруем выбранные отели по городам курортам
                                this.chosen_hotels = this.chosen_hotels.filter(item => {
                                    if (this.hotels.findIndex(i => i.Id == item.Id) !== -1) {
                                        return true;
                                    }
                                });
                                this.$store.dispatch('changeHotels', this.chosen_hotels);
                            });
                        }
                    }
                },
                chooseHotel(value) {
                    this.chosen_hotels = value;
                    if (value[this.chosen_hotels.length - 1].Name === 'Любой') {
                        this.chosen_hotels = [{Name: 'Любой'}];
                    } else {
                        this.chosen_hotels = this.chosen_hotels.filter(item => {
                            if (item.Name !== 'Любой') {
                                return true
                            }
                        })
                    }
                    this.$store.dispatch('changeHotels', this.chosen_hotels)
                },
                chooseTourOperator(value) {
                    this.chosen_tour_operators = value;
                    if (value[this.chosen_tour_operators.length - 1].Name === 'Любой') {
                        this.chosen_tour_operators = [{Name: 'Любой'}];
                    } else {
                        this.chosen_tour_operators = this.chosen_tour_operators.filter(item => {
                            if (item.Name !== 'Любой') {
                                return true
                            }
                        })
                    }
                    this.$store.dispatch('changeTourOperator', this.chosen_tour_operators)
                },
                whateverResort(actionName) {
                    if (actionName.Name == 'Любой') {
                        this.$store.dispatch('getHotels', {
                            country_id: this.resort_country.Id,
                            town_id: '0',
                            star_id: '0'
                        });
                    }
                    // else {
                    // console.log('notactionName')
                    // this.resorts = this.resorts.filter(item=>{
                    //     if(item.Name !== 'Любой')
                    //     {
                    //         return true;
                    //     }
                    // })
                    // }
                },
                removeResort(removedOption, id) {
                    if (removedOption.Name != 'Любой') {
                        if (this.resorts.length == 1) {
                            console.log('1', this.resorts)
                            this.resorts.push({Name: 'Любой'});
                            this.$store.dispatch('changeResorts', this.resorts);
                            this.$store.dispatch('getHotels', {
                                country_id: this.resort_country.Id,
                                town_id: '0',
                                star_id: '0'
                            });
                            console.log('2', this.resorts);
                        }
                    } else {
                        console.log('here')
                        console.log('1', this.resorts)
                        this.resorts.push({Name: 'Любой'});
                        console.log('2', this.resorts);
                        // this.resorts.push({Name: 'Любой'});
                    }
                },
                removeHotels(removedOption, id) {
                    if (removedOption.Name != 'Любой') {
                        console.log('remove option')
                        if (this.chosen_hotels.length == 1) {
                            console.log('remove push')
                            this.chosen_hotels.push({Name: 'Любой'});
                            this.$store.dispatch('changeHotels', this.chosen_hotels);
                        }
                    } else {
                        console.log('remove hotels')
                        this.chosen_hotels.push({Name: 'Любой'});
                    }
                },
                removeTourOperators(removedOption, id) {
                    if (removedOption.Name != 'Любой') {
                        if (this.chosen_tour_operators.length == 1) {
                            this.chosen_tour_operators.push({Name: 'Любой'});
                            this.$store.dispatch('changeTourOperators', this.chosen_tour_operators);
                        }
                    } else {
                        this.chosen_tour_operators.push({Name: 'Любой'});
                    }
                },
                // whateverHotel(actionName){
                //     // if (actionName.Name=='Любой') {
                //     //     this.chosen_hotels=[{Name: 'Любой'}];
                //     // }
                //     // else {
                //     //     this.chosen_hotels = this.chosen_hotels.filter(item=>{
                //     //         if(item.Name != 'Любой')
                //     //         {
                //     //             return true
                //     //         }
                //     //     })
                //     // }
                // }
                incrementAdults() {
                    this.$store.dispatch("incAdults")
                    this.adults = this.tourModule.adults
                },
                decrementAdults() {
                    this.$store.dispatch("decAdults")
                    this.adults = this.tourModule.adults
                },
                incrementChildren() {
                    this.$store.dispatch("incChildren")
                    this.children = this.tourModule.children
                },
                decrementChildren() {
                    this.$store.dispatch("decChildren")
                    this.children = this.tourModule.children
                },
                changeChildren() {
                    this.$store.dispatch("changeChildren", this.children)
                    this.children = this.tourModule.children
                },
                changeAdults() {
                    this.$store.dispatch("changeAdults", this.adults)
                    this.adults = this.tourModule.adults
                },
                changePriceFrom() {
                    this.$store.dispatch("changePriceFrom", this.price_from)
                    this.price_from = this.tourModule.price_from
                },
                changePriceTo() {
                    this.$store.dispatch("changePriceTo", this.price_to)
                    this.price_to = this.tourModule.price_to
                },
                changeNightsFrom() {
                    this.$store.dispatch("changeNightsFrom", this.nights_from)
                    this.nights_from = this.tourModule.nights_from
                    if (this.nights_from > this.nights_to) {
                        this.nights_to = this.nights_from
                        this.$store.dispatch("changeNightsTo", this.nights_to)
                    }
                },
                changeNightsTo() {
                    this.$store.dispatch("changeNightsTo", this.nights_to)
                    this.nights_to = this.tourModule.nights_to
                    if (this.nights_to < this.nights_from) {
                        this.nights_from = this.nights_to;
                        this.$store.dispatch("changeNightsFrom", this.nights_from)
                    }
                },
                changeDateRange(date_object) {
                    this.$store.dispatch("changeDateRange", date_object)
                },
                resetDateRange() {
                    var d1 = new Date();
                    this.start = ("0" + d1.getDate()).slice(-2) + "/" + ("0" + (d1.getMonth() + 1)).slice(-2) + "/" + d1.getFullYear();
                    var d2 = new Date((new Date).setDate((new Date).getDate() + 7));
                    this.end = ("0" + d2.getDate()).slice(-2) + "/" + ("0" + (d2.getMonth() + 1)).slice(-2) + "/" + d2.getFullYear();
                    this.$store.dispatch("changeDateRange", {start: this.start, end: this.end})
                },
            }
    }
</script>

<style lang="scss">
    .multiselect__tag {

        background: #ffa500 !important;

        span {
            color: black !important;
        }
    }

    .multiselect__tag-icon:after {
        color: #000000 !important;
    }

    .vhd-container {
        width: 100%;

        .vhd-input {
            width: 100%;
            text-align: center;
        }

        .vhd-picker {
            width: 100% !important;
            border-radius: 0px;
            text-align: center;
        }
    }
</style>
