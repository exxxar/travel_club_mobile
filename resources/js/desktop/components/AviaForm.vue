<template>
    <div>
<!--        <div class="row mx-auto justify-content-center" v-if="type!='module'" style="height: 100%; width: 100%;">-->
<!--            <div class="col-12 col-md-6 pr-md-1">-->
<!--                <label class="control-label">Имя</label>-->
<!--                <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">-->
<!--                    <input type="text" class="multiselect__input price" v-model="aviaModule.name" placeholder="Имя" required>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-12 col-md-6 pl-md-1">-->
<!--                <label class="control-label">Телефон</label>-->
<!--                <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">-->
<!--                    <input type="text" class=" multiselect__input price"-->
<!--                           v-model="aviaModule.phone"-->
<!--                           pattern="[\+]\d{2} [\(]\d{3}[\)] \d{3}[\-]\d{2}[\-]\d{2}"-->
<!--                           maxlength="19"-->
<!--                           v-mask="['+38 (###) ###-##-##']"-->
<!--                           placeholder="Номер телефона"-->
<!--                           required-->
<!--                    >-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div class="row mx-auto justify-content-center" style="height: 100%; width: 100%;">
            <div class="col-12 mb-2 mt-2">
                <h4 class="control-label">Город вылета</h4>
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
                    <span slot="noResult">Упс! Ничего не найдено. Рассмотрите возможность изменения поискового запроса..</span>
                    <span slot="noOptions">Начните печатать название города...</span>
                </multiselect>
            </div>
            <div class="col-12 mb-2 mt-2">
                <h4 class="control-label">Город прибытия</h4>
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
                    <template slot="singleLabel" v-if="options.length>0 || selectedDestinationCity!=null" slot-scope="props">
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
                    <span slot="noResult">Упс! Ничего не найдено. Рассмотрите возможность изменения поискового запроса..</span>
                    <span slot="noOptions">Начните печатать название города...</span>
                </multiselect>
            </div>
        </div>
        <div class="row mx-auto align-items-center justify-content-center" style="height: 100%; width: 100%;">
            <div class="col-12">
                <h4 class="control-label">Туда</h4>
                <datepicker v-model="depart_date" name="depart_date" @input="changeDepartDate" :language="languages['ru']" :disabled-dates="disabledDates1"></datepicker>
            </div>
            <div class="col-12 ">
                <h4 class="control-label">Обратно</h4>
                <datepicker v-model="return_date" name="return_date" @input="changeReturnDate" :clear-button="true" :language="languages['ru']" :disabled-dates="disabledDates2"></datepicker>
            </div>
            <div class="col-12 ">
                <h4 class="control-label">Класс</h4>
                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
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
            </div>
        </div>
        <div class="row mx-auto align-items-center justify-content-center" style="height: 100%; width: 100%;">
            <div class="col-12">
                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;height: 100%;">
                    <h4 class="control-label">Взрослые</h4>
                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                        <button type="button" class="btn minus text-center " :disabled="adults===0"
                                @click="decrementAdults()">-
                        </button>
                        <input type="number" class="count" name="qty" v-model="adults" step="1" min="1" @change="changeAdults">
                        <button type="button" class="btn plus text-center"
                                @click="incrementAdults()">+
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12 ">
                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;height: 100%;">
                    <h4 class="control-label">Дети до 12 лет</h4>
                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                        <button type="button" class="btn minus text-center " :disabled="children_under_12===0"
                                @click="decrementChildrenUnder12()">-
                        </button>
                        <input type="number" class="count" name="qty" v-model="children_under_12" step="1" min="0" @change="changeChildrenUnder12">
                        <button type="button" class="btn plus text-center"
                                @click="incrementChildrenUnder12()">+
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12 ">
                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;height: 100%;">
                    <h4 class="control-label">Дети до 2 лет</h4>
                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                        <button type="button" class="btn minus text-center " :disabled="children_under_2===0"
                                @click="decrementChildrenUnder2()">-
                        </button>
                        <input type="number" class="count" name="qty" v-model="children_under_2" step="1" min="0" @change="changeChildrenUnder2">
                        <button type="button" class="btn plus text-center"
                                @click="incrementChildrenUnder2()">+
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as lang from "vuejs-datepicker/dist/locale";
    import {mask} from 'vue-the-mask';
    export default {
        name: "AviaForm",
        props:['module', 'type'],
        data () {
            return {
                test_module:{
                    name:'',
                    phone:'',
                    adults: 1,
                    city_from: null,
                    city_to: null,
                    children_under_12: 0,
                    children_under_2: 0,
                    depart_date:new Date(),
                    return_date:null,
                    is_multi_city:false,
                    routes:[],//city_from, city_to, departure_date
                    avia_class:'Эконом класс'
                },
                selectedOriginCity:'',
                selectedDestinationCity:'',
                options: [],
                depart_date: new Date(),
                return_date: null,
                adults: 1,
                children_under_12: 0,
                children_under_2: 0,
                avia_class:'Эконом класс',
                classes: ['Эконом класс' , 'Бизнес класс'],
                languages: lang,
                disabledDates1: {
                    to: new Date(new Date().setDate(new Date().getDate() - 1)),
                },
                disabledDates2: {
                    to: new Date(new Date().setDate(new Date().getDate() - 1)),
                },
                disabled:true
            }
        },
        mounted() {
            if(this.type =='module') {
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
            }
            else
            {
                this.adults = this.module.adults;
                this.children_under_12 = this.module.children_under_12;
                this.children_under_2 = this.module.children_under_2;
                this.selectedOriginCity = this.module.city_from;
                this.selectedDestinationCity = this.module.city_to;
                this.depart_date = this.module.depart_date;
                if(this.module.return_date!=null){
                    this.return_date =this.module.return_date;
                }

                this.avia_class = this.module.avia_class;
            }


            // this.ru = ru;
        },
        computed: {
            aviaModule () {
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
            getAviaCities (term) {
                if( term.length > 1) {
                    this.$store.dispatch('getAviaCities', term).then(() => {
                        this.options = this.aviaCities;
                    })
                }
            },
            changeCityFrom (value) {
                if(this.type == 'module'){
                    this.$store.dispatch('changeCityFrom', this.selectedOriginCity)
                }
                else {
                    this.module.city_from = value;
                }

            },
            changeCityTo (value) {
                if(this.type == 'module') {
                    this.$store.dispatch('changeCityTo', this.selectedDestinationCity)
                }
                else {
                    this.module.city_to = value;
                }
            },
            toggleAviaCities() {
                var tempCity = this.selectedDestinationCity;
                this.selectedDestinationCity = this.selectedOriginCity;
                this.selectedOriginCity = tempCity;
                if(this.type == 'module') {
                    this.$store.dispatch('changeCityFrom', this.selectedOriginCity)
                    this.$store.dispatch('changeCityTo', this.selectedDestinationCity)
                }
                else {
                    this.module.city_from = this.selectedOriginCity;
                    this.module.city_to = this.selectedDestinationCity;
                }

            },
            changeDepartDate () {
                if(this.type == 'module') {
                    this.$store.dispatch('changeDepartDate', this.depart_date)
                }
                else {
                    this.module.depart_date = this.depart_date
                }

                if(this.return_date != null) {
                    var date1 = new Date(this.depart_date);
                    var date2 = new Date(this.return_date);

                    if(date1 > date2)
                    {
                        this.return_date = this.depart_date;
                        if(this.type == 'module') {
                            this.$store.dispatch('changeReturnDate', this.return_date)
                        }
                        else {
                            this.module.return_date = this.return_date
                        }
                        this.disabledDates2.to = this.depart_date;
                    }
                }
            },
            changeReturnDate () {
                if(this.type == 'module') {
                    this.$store.dispatch('changeReturnDate', this.return_date)
                }
                else {
                    this.module.return_date = this.return_date
                }

            },
            incrementAdults() {
                if(this.type == 'module') {
                    this.$store.dispatch("incAviaAdults")
                    this.adults = this.aviaModule.adults
                }
                else {
                    this.adults = this.adults++;
                    this.module.adults = this.adults
                }
            },
            decrementAdults() {
                if(this.type == 'module') {
                    this.$store.dispatch("decAviaAdults")
                    this.adults = this.aviaModule.adults
                }
                else {
                    this.adults = this.adults--;
                    this.module.adults = this.adults
                }

            },
            incrementChildrenUnder12() {
                if(this.type == 'module') {
                    this.$store.dispatch("incChildrenUnder12")
                    this.children_under_12 = this.aviaModule.children_under_12
                }
                else {
                    this.children_under_12 = this.children_under_12++;
                    this.module.children_under_12 = this.children_under_12
                }

            },
            decrementChildrenUnder12() {
                if(this.type == 'module') {
                    this.$store.dispatch("decChildrenUnder12")
                    this.children_under_12 = this.aviaModule.children_under_12
                }
                else {
                    this.children_under_12 = this.children_under_12--;
                    this.module.children_under_12 = this.children_under_12
                }

            },
            incrementChildrenUnder2() {
                if(this.type == 'module') {
                    this.$store.dispatch("incChildrenUnder2")
                    this.children_under_2 = this.aviaModule.children_under_2
                }
                else {
                    this.children_under_2 = this.children_under_2++;
                    this.module.children_under_2 = this.children_under_2
                }

            },
            decrementChildrenUnder2() {
                if(this.type == 'module') {
                    this.$store.dispatch("decChildrenUnder2")
                    this.children_under_2 = this.aviaModule.children_under_2
                }
                else {
                    this.children_under_2 = this.children_under_2--;
                    this.module.children_under_2 = this.children_under_2
                }

            },
            changeChildrenUnder12() {
                if(this.type == 'module') {
                    this.$store.dispatch("changeChildrenUnder12", this.children_under_12)
                    this.children_under_12 = this.aviaModule.children_under_12
                }
                else {
                    this.module.children_under_12 = this.children_under_12
                }

            },
            changeChildrenUnder2() {
                if(this.type == 'module') {
                    this.$store.dispatch("changeChildrenUnder2", this.children_under_2)
                    this.children_under_2 = this.aviaModule.children_under_2
                }
                else {
                    this.module.children_under_2 = this.children_under_2
                }

            },
            changeAdults() {
                if(this.type == 'module') {
                    this.$store.dispatch("changeAviaAdults", this.adults)
                    this.adults = this.aviaModule.adults
                }
                else {
                    this.module.adults = this.adults
                }

            },
            changeClass(value) {
                if(this.type == 'module') {
                    this.$store.dispatch("changeClass", this.avia_class)
                    this.avia_class = this.aviaModule.avia_class
                }
                else {
                    this.module.avia_class = value
                }

            },
        },
        directives: {mask}
    }
</script>

<style scoped>
    @media only screen and (max-width:767.98px) {
        .vdp-container:not(.desktop) .vdp-picker {
            width: 100% !important;
            padding: 8px
        }
        .tour-module .cont .row{
            width: 100% !important;
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
    @media screen and (max-width: 576px) {
        .tour-module .cont {
            height: 100% !important;
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

    .control-label {
        color: #062348 !important;
        font-family: "Open Sans";
        /*font-weight: 700;*/
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
    .qty button{
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

    .qty input{
        border: 0;
        width: 60%;
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
