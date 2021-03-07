<template>
    <div class="section mb-2" style="height:100vh">
        <div class="section-title">Поиск тура</div>

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
</template>

<script>

    import Multiselect from 'vue-multiselect'

    export default {
        components: {Multiselect},
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
