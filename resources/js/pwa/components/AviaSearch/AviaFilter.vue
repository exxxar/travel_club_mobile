<template>
    <div class="section">

        <div class="input-wrapper mt-2" v-if="!aviaModule.is_multi_city">

            <h4 class="avia-title">Город вылета <i class="fas fa-random" @click="toggleAviaCities"></i></h4>
            <multiselect
                v-model="selectedOriginCity"
                label="name"
                track-by="code"
                placeholder="Город вылета"
                :options="options"
                :multiple="false"
                :searchable="true"
                :loading="isAviaCitiesLoading"
                :internal-search="false"
                :clear-on-select="false"
                :close-on-select="true"
                :options-limit="300"
                :max-height="300"
                :show-no-results="false"
                :hide-selected="false"
                :show-labels="false"
                @search-change="getAviaCities"
                @input="changeCityFrom"
            >
                <template slot="singleLabel" v-if="options.length>0 || selectedOriginCity!=null" slot-scope="props">
                    <div v-if="!props.option.city_name">
                         <span class="option__desc">
                            <span class="option__title">{{ props.option.name }}, {{ props.option.country_name }}</span>
                         </span>
                        <span class="option__desc float-right">{{props.option.code}}</span>
                    </div>

                    <div v-if="props.option.city_name">
                         <span class="option__desc">
                             <span
                                 class="option__title">{{ props.option.city_name }}, {{ props.option.country_name }}</span>
                         </span>
                        <span class="option__desc float-right">{{props.option.code}}</span>
                    </div>
                </template>
                <template slot="option" slot-scope="props">
                    <div v-if="!props.option.city_name">
                                    <span class="option__desc">
                                        <span class="option__title">{{ props.option.name }}</span>
                                    </span>
                        <div class="row align-items-center option__desc" style="width: 100%; height: 100%">
                            <div class="col-6">
                                <span class="option__desc">Все аэропорты</span>
                            </div>
                            <div class="col-6">
                                <span class="option__desc float-right">{{props.option.code}}</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="props.option.city_name">
                         <span class="option__desc">
                            <span class="option__title">{{ props.option.city_name }}</span>
                        </span>
                        <div class="row align-items-center" style="width: 100%; height: 100%">
                            <div class="col-6">
                                <span class="option__desc">{{ props.option.name }}</span>
                            </div>
                            <div class="col-6">
                                <span class="option__desc float-right">{{props.option.code}}</span>
                            </div>
                        </div>
                    </div>
                </template>
                <span
                    slot="noResult">Упс! Ничего не найдено. Рассмотрите возможность изменения поискового запроса..</span>
                <span slot="noOptions">Начните печатать название города...</span>
            </multiselect>
        </div>

        <div class="input-wrapper mt-2">
            <h4 class="avia-title">Город прибытия</h4>
            <multiselect
                v-model="selectedDestinationCity"
                label="name"
                track-by="code"
                placeholder="Город вылета"
                :options="options"
                :multiple="false"
                :searchable="true"
                :loading="isAviaCitiesLoading"
                :internal-search="false"
                :clear-on-select="false"
                :close-on-select="true"
                :options-limit="300"
                :max-height="300"
                :show-no-results="false"
                :hide-selected="false"
                :show-labels="false"
                @search-change="getAviaCities"
                @input="changeCityTo"
            >
                <template slot="singleLabel" v-if="options.length>0 || selectedDestinationCity!=null"
                          slot-scope="props">
                    <div v-if="!props.option.city_name">
                                             <span class="option__desc">
                                                <span class="option__title">{{ props.option.name }}, {{ props.option.country_name }}</span>
                                             </span>
                        <span class="option__desc float-right">{{props.option.code}}</span>
                    </div>

                    <div v-if="props.option.city_name">
                                             <span class="option__desc">
                                                 <span class="option__title">{{ props.option.city_name }}, {{ props.option.country_name }}</span>
                                             </span>
                        <span class="option__desc float-right">{{props.option.code}}</span>
                    </div>
                </template>
                <template slot="option" slot-scope="props">
                    <div v-if="!props.option.city_name">
                                             <span class="option__desc">
                                                <span class="option__title">{{ props.option.name }}</span>
                                             </span>
                        <div class="row align-items-center option__desc" style="width: 100%; height: 100%">
                            <div class="col-6">
                                <span class="option__desc">Все аэропорты</span>
                            </div>
                            <div class="col-6">
                                <span class="option__desc float-right">{{props.option.code}}</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="props.option.city_name">
                                             <span class="option__desc">
                                                <span class="option__title">{{ props.option.city_name }}</span>
                                            </span>
                        <div class="row align-items-center" style="width: 100%; height: 100%">
                            <div class="col-6">
                                <span class="option__desc">{{ props.option.name }}</span>
                            </div>
                            <div class="col-6">
                                <span class="option__desc float-right">{{props.option.code}}</span>
                            </div>
                        </div>
                    </div>
                </template>
                <span
                    slot="noResult">Упс! Ничего не найдено. Рассмотрите возможность изменения поискового запроса..</span>
                <span slot="noOptions">Начните печатать название города...</span>
            </multiselect>
        </div>

        <div class="input-wrapper mt-2">
            <h4 class="avia-title">Туда</h4>
            <datepicker v-model="depart_date" name="depart_date" @input="changeDepartDate" :language="languages['ru']"
                        :disabled-dates="disabledDates1"></datepicker>
        </div>


        <div class="input-wrapper mt-2">
            <h4 class="avia-title">Обратно</h4>
            <datepicker v-model="return_date" name="return_date" @input="changeReturnDate" :clear-button="true"
                        :language="languages['ru']" :disabled-dates="disabledDates2"></datepicker>
        </div>
        <div class="input-wrapper mt-2">
            <h4 class="avia-title">Класс</h4>

            <multiselect
                v-model="avia_class"
                :options="classes"
                :option-height="25"
                placeholder="Класс"
                :show-labels="false"
                :maxHeight="200"
                :allow-empty="false"
                :searchable="false"
                @input="changeClass"
            >
            </multiselect>

        </div>
        <div class="input-wrapper mt-2">

            <h4 class="avia-title">Взрослые</h4>
            <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-orange mr-1" :disabled="adults===0"
                        @click="decrementAdults()">-
                </button>
                <input type="number" class="form-control" name="qty" v-model="adults" step="1" min="1"
                       @change="changeAdults">
                <button type="button" class="btn btn-orange ms-1"
                        @click="incrementAdults()">+
                </button>
            </div>
        </div>

        <div class="input-wrapper mt-2">
            <h4 class="avia-title">Дети до 12 лет</h4>
            <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-orange mr-1" :disabled="children_under_12===0"
                        @click="decrementChildrenUnder12()">-
                </button>
                <input type="number" class="form-control" name="qty" v-model="children_under_12" step="1" min="0"
                       @change="changeChildrenUnder12">
                <button type="button" class="btn btn-orange ms-1"
                        @click="incrementChildrenUnder12()">+
                </button>
            </div>
        </div>

        <div class="input-wrapper mt-2">
            <h4 class="avia-title">Дети до 2 лет</h4>
            <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-orange mr-1" :disabled="children_under_2===0"
                        @click="decrementChildrenUnder2()">-
                </button>
                <input type="number" class="form-control" name="qty" v-model="children_under_2" step="1" min="0"
                       @change="changeChildrenUnder2">
                <button type="button" class="btn btn-orange ms-1"
                        @click="incrementChildrenUnder2()">+
                </button>
            </div>
        </div>

    </div>

</template>

<script>
    import * as lang from "vuejs-datepicker/src/locale";

    import Multiselect from 'vue-multiselect'
    import "vue-multiselect/dist/vue-multiselect.min.css"
    import Datepicker from 'vuejs-datepicker';

    export default {
        components: {
            Multiselect, Datepicker
        },
        name: "Avia",
        data() {
            return {

                selectedOriginCity: '',
                selectedDestinationCity: '',
                options: [],
                depart_date: new Date(),
                return_date: null,
                adults: 1,
                children_under_12: 0,
                children_under_2: 0,
                avia_class: 'Эконом класс',
                classes: ['Эконом класс', 'Бизнес класс'],
                languages: lang,
                disabledDates1: {
                    to: new Date(new Date().setDate(new Date().getDate() - 1)),
                },
                disabledDates2: {
                    to: new Date(new Date().setDate(new Date().getDate() - 1)),
                },
                disabled: true
            }
        },
        mounted() {
            this.adults = this.aviaModule.adults;
            this.children_under_12 = this.aviaModule.children_under_12;
            this.children_under_2 = this.aviaModule.children_under_2;
            this.selectedOriginCity = this.aviaModule.city_from;
            this.selectedDestinationCity = this.aviaModule.city_to;
            this.depart_date = this.aviaModule.depart_date;
            if (this.aviaModule.return_date != null) {
                this.return_date = this.aviaModule.return_date;
            }
            this.avia_class = this.aviaModule.avia_class;
            // this.ru = ru;
        },
        computed: {
            aviaModule() {
                return this.$store.getters.aviaModule;
            },
            aviaCities() {
                return this.$store.getters.aviaCities;
            },
            isAviaCitiesLoading() {
                return this.$store.getters.isAviaCitiesLoading;
            },
        },
        methods: {

            getAviaCities(term) {
                if (term.length > 1) {
                    this.$store.dispatch('getAviaCities', term).then(() => {
                        this.options = this.aviaCities;
                    })
                }
            },
            changeCityFrom() {
                this.$store.dispatch('changeCityFrom', this.selectedOriginCity)
            },
            changeCityTo() {
                this.$store.dispatch('changeCityTo', this.selectedDestinationCity)
            },
            toggleAviaCities() {
                var tempCity = this.selectedDestinationCity;
                this.selectedDestinationCity = this.selectedOriginCity;
                this.selectedOriginCity = tempCity;
                this.$store.dispatch('changeCityFrom', this.selectedOriginCity)
                this.$store.dispatch('changeCityTo', this.selectedDestinationCity)
            },
            changeDepartDate() {
                this.$store.dispatch('changeDepartDate', this.depart_date)
                if (this.return_date != null) {
                    var date1 = new Date(this.depart_date);
                    var date2 = new Date(this.return_date);
                    if (date1 > date2) {
                        this.return_date = this.depart_date;
                        this.$store.dispatch('changeReturnDate', this.return_date)
                        this.disabledDates2.to = this.depart_date;
                    }
                }
            },
            changeReturnDate() {
                this.$store.dispatch('changeReturnDate', this.return_date)
            },
            incrementAdults() {
                this.$store.dispatch("incAviaAdults")
                this.adults = this.aviaModule.adults
            },
            decrementAdults() {
                this.$store.dispatch("decAviaAdults")
                this.adults = this.aviaModule.adults
            },
            incrementChildrenUnder12() {
                this.$store.dispatch("incChildrenUnder12")
                this.children_under_12 = this.aviaModule.children_under_12
            },
            decrementChildrenUnder12() {
                this.$store.dispatch("decChildrenUnder12")
                this.children_under_12 = this.aviaModule.children_under_12
            },
            incrementChildrenUnder2() {
                this.$store.dispatch("incChildrenUnder2")
                this.children_under_2 = this.aviaModule.children_under_2
            },
            decrementChildrenUnder2() {
                this.$store.dispatch("decChildrenUnder2")
                this.children_under_2 = this.aviaModule.children_under_2
            },
            changeChildrenUnder12() {
                this.$store.dispatch("changeChildrenUnder12", this.children_under_12)
                this.children_under_12 = this.aviaModule.children_under_12
            },
            changeChildrenUnder2() {
                this.$store.dispatch("changeChildrenUnder2", this.children_under_2)
                this.children_under_2 = this.aviaModule.children_under_2
            },
            changeAdults() {
                this.$store.dispatch("changeAviaAdults", this.adults)
                this.adults = this.aviaModule.adults
            },
            changeClass() {
                this.$store.dispatch("changeClass", this.avia_class)
                this.avia_class = this.aviaModule.avia_class
            },
        }
    }
</script>

