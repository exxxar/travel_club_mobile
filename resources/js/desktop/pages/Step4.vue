<template>
    <div class="container p-0 m-auto" style="height: 100vh;">
        <div class="row align-items-center justify-content-center m-auto" style="height: 100%; width: 100%">
            <form-wizard
                shape="circle"
                color="#f08b23"
                stepSize="sm"
                style="width: 100%;"
            >
                <tab-content title="Начало"
                     icon=""
                     checkedIcon="icon-check"
                >
                    <div class='cont m-auto'>
                        <div class="ml-auto mr-auto" style="position: relative; height: 40vh; width: 100%; background: url('/images/Resurs_7.svg') no-repeat center;" >
                            <div class='sky'>
                                <div class='cloud-1 cloud'>
                                    <div class='cloud--inner1'></div>
                                    <div class='cloud--inner4'></div>
                                    <div class='cloud--inner2'></div>
                                    <div class='cloud--inner3'></div>
                                </div>
                                <div class='cloud-2 cloud'>
                                    <div class='cloud--inner1'></div>
                                    <div class='cloud--inner4'></div>
                                    <div class='cloud--inner2'></div>
                                    <div class='cloud--inner3'></div>
                                </div>
                                <div class='cloud-3 cloud'>
                                    <div class='cloud--inner1'></div>
                                    <div class='cloud--inner4'></div>
                                    <div class='cloud--inner2'></div>
                                    <div class='cloud--inner3'></div>
                                </div>
                                <div class='ballon'>
                                    <div class='ballon-inner'><div class='ball-inner'></div>
                                        <div class='ballon-ball'>
                                            <div class='ballon-ball1'>
                                                <div class='ballon-ball2'>
                                                    <div class='ballon-ball3'>
                                                        <!-- <div class='ball-inner--0'></div>
                                                        <div class='ball-inner--1'></div>
                                                        <div class='ball-inner--2'></div>
                                                        <div class='ball-inner--3'></div>
                                                        <div class='ball-inner--4'></div> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class='ballon-rope'></div>
                                        <div class='ballon-rope1'></div>
                                        <div class='ballon-rope2'></div>
                                        <div class='ballon-rope3'></div>
                                        <div class='ballon-rope4'></div>
                                        <div class='ballon-rope5'></div>
                                        <div class='ballon-rope6'></div>
                                        <div class='ballon-rope7'></div>
                                        <div class='ballon-rope8'></div>
                                        <div class='ballon-rope9'></div>
                                        <div class='ballon-rope10'></div>
                                        <div class='ballon-seat'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row m-auto justify-content-center align-items-center" style="width: 100%;">
                            <div class="col-12 col-md-8 col-sm-12">
                                <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                                    <div class="col-md-7 p-0">
                                        <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:300px;">
                                            <h1 class="title-1"><span>Д</span>обро пожаловать</h1>
                                            <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                                        </div>
                                    </div>
                                    <div class="col-md-7 p-0">
                                        <div class="row ml-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:350px;">
                                            <h1 class="title-2"><span>в модуль подбора туров </span></h1>
                                            <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row m-auto justify-content-center align-items-center" style="width: 100%;">
                            <p style="color: #0f213d; font-family: 'Open Sans'; font-weight: 900; font-style: italic">Надоело искать, подбирать туры и следить за их ценой самостоятельно? Мы предлагаем заполнить заявку на подбор туров и наши менеджеры сделают всё за Вас!</p>
                        </div>
                    </div>
                </tab-content>
                <tab-content title="Выбор страны отправления"
                             icon=""
                             checkedIcon="icon-check"
                >
                    <div class='cont m-auto'>
                        <div class="row align-items-center justify-content-center country-choice m-auto" style="width: 80%;height: 100%;">
                            <div class="col-md-5 col-sm-6 col-6 p-0">
                                <div class="row m-auto align-items-center justify-content-center text-center " style="width: 100%; height: 100%">
                                    <div class="col-12 p-0">
                                        <img v-if="tourModule.country=='Украина'" src="/images/ukraine1.png" style="max-width:250px; width: 90%;cursor: pointer; min-width: 160px" @click="chooseUkraine"/>
                                        <img v-else src="/images/ukraine0.png" style="max-width:250px; width: 90%;cursor: pointer;min-width: 160px" @click="chooseUkraine"/>
                                    </div>
                                    <div class="col-12 p-0 text-center">
                                        <h1 v-bind:class="[tourModule.country=='Украина' ? 'active' : '', 'title']" @click="chooseUkraine">Украина</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2 d-md-block d-none">
                                <div class="row m-auto align-items-center justify-content-center text-center" style="width: 100%; height: 100%">
                                    <img src="/images/plane.png" style="width: 80px; height: 80px" :class="[tourModule.country=='Украина' ? 'left' : 'right', 'switch']" @click="toggleChoice"/>
                                </div>
                            </div>
                            <div class="col-md-5 col-sm-6 col-6 p-0">
                                <div class="row m-auto align-items-center justify-content-center text-center" style="width: 100%; height: 100%">
                                    <div class="col-12 p-0">
                                        <img v-if="tourModule.country=='Россия'" src="/images/russia1.png" style="max-width:250px; width: 90%; cursor: pointer;min-width: 160px" @click="chooseRussia"/>
                                        <img v-else src="/images/russia0.png" style="max-width:250px; width: 90%;cursor: pointer;min-width: 160px" @click="chooseRussia"/>
                                    </div>
                                    <div class="col-12 p-0 text-center">
                                        <h1 v-bind:class="[tourModule.country=='Россия' ? 'active' : '', 'title']" @click="chooseRussia">Россия</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </tab-content>
                <tab-content title="Подбор тура"
                             icon=""
                             checkedIcon="icon-check">
                    <div class="tour-module">
                        <div class="cont m-auto">
                            <div class="row justify-content-center mx-auto mt-auto mb-5" style="width: 80%;height: 100%;">
                                <div class="col-md-6 col-sm-12 col-12">
                                    <div class="row align-items-center justify-content-center mx-auto mt-2" style="width: 100%;height: 100%;">
                                        <div class="col-12">
                                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
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
                                        <div class="col-12">
                                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
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
                                                    <template slot="limit"><span class="multiselect__single"> и ещё {{ resorts.length-2 }} {{resorts.length-2 | pluralizeResorts}}</span></template>
                                                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeResorts }} {{values.length | pluralizeChoose}}</span></template>
                                                </multiselect>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
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
                                                    <template slot="limit" ><span class="multiselect__single"> и ещё {{ chosen_hotels.length-2 }} {{chosen_hotels.length-2 | pluralizeHotels}}</span></template>
                                                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeHotels}} {{values.length | pluralizeChoose}}</span></template>
                                                    <template slot="singleLabel" slot-scope="props">
                                    <span class="option__desc">
                                        <span class="option__title">{{ props.option.Name }}</span>
                                        <span class="option__title" style="float:right" v-if="props.option.CommonRate!=0">{{ props.option.CommonRate }}</span>
                                        <span class="values__hotel-rating" style="float:right" v-if="props.option.StarName">{{ props.option.StarName }}</span>
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
                                        </div>
                                        <div class="col-12">
                                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
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
                                                    <template slot="limit" ><span class="multiselect__single"> и ещё {{ chosen_tour_operators.length-2 }} {{chosen_tour_operators.length-2 | pluralizeTourOperators}}</span></template>
                                                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeTourOperators}} {{values.length | pluralizeChoose}}</span></template>
                                                </multiselect>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-12">
                                    <div class="row align-items-center justify-content-center mx-auto mt-2 mb-5" style="width: 100%;height: 100%;">
                                        <div class="col-md-12">
                                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
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
                                                    :mobile="'mobile'"
                                                    @update="changeDateRange"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;height: 100%;">
                                                <h4 class="multiselect-title">Взрослые</h4>
                                                <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                                    <button type="button" class="btn minus text-center " :disabled="adults===1"
                                                            @click="decrementAdults()">-
                                                    </button>
                                                    <input type="number" class="count" name="qty" v-model="adults" step="1" min="1" @change="changeAdults">
                                                    <button type="button" class="btn plus text-center"
                                                            @click="incrementAdults()">+
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;height: 100%;">
                                                <h4 class="multiselect-title">Дети</h4>
                                                <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                                    <button type="button" class="btn minus text-center " :disabled="children===0"
                                                            @click="decrementChildren()">-
                                                    </button>
                                                    <input type="number" class="count" name="qty" v-model="children" step="1" min="0" @change="changeChildren">
                                                    <button type="button" class="btn plus text-center"
                                                            @click="incrementChildren()">+
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                                <h4 class="multiselect-title">Цена от</h4>
                                                <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                                    <input type="number" class="multiselect__input price" v-model="price_from" step="1" min="0" @input="changePriceFrom">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                                <h4 class="multiselect-title">Цена до</h4>
                                                <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">

                                                    <input type="number" class=" multiselect__input price" v-model="price_to" step="1" min="0" @change="changePriceTo">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;height: 100%;">
                                                <h4 class="multiselect-title">Ночей от</h4>
                                                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
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
                                        <div class="col-md-6">
                                            <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;height: 100%;">
                                                <h4 class="multiselect-title">До</h4>
                                                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
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
                            </div>
                        </div>
                    </div>
                </tab-content>
                <tab-content title="Формирование заявки"
                             icon=""
                             checkedIcon="icon-check">
                    <div class="cont m-auto" id="order">
                        <ValidationObserver v-slot="{ invalid }">
                            <div class="row justify-content-center mx-auto mt-auto mb-5" style="width: 100%;height: 100%;">
                                <div class="col-11 mt-3">
                                    <div class="row align-items-center m-auto" style="width: 100%;">
                                        <h4 class="multiselect-title">Ваше имя</h4>
                                        <ValidationProvider name="name" rules="required" v-slot="{ errors }" style="width: 100%;">
                                            <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                                <input type="text" class="multiselect__input price form-control" v-model="name" placeholder="Ваше имя" required>
                                            </div>
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="col-11 mt-3">
                                    <div class="row align-items-center m-auto" style="width: 100%;">
                                        <h4 class="multiselect-title">Ваш номер телефона</h4>
                                        <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                            <ValidationProvider name="phone" rules="required" v-slot="{ errors }" style="width:100%;">
                                                <input type="text" class="multiselect__input price form-control"
                                                       v-model="phone"
                                                       pattern="[\+]\d{2} [\(]\d{3}[\)] \d{3}[\-]\d{2}[\-]\d{2}"
                                                       maxlength="19"
                                                       v-mask="['+38 (###) ###-##-##']"
                                                       placeholder="Номер телефона"
                                                       required
                                                >
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-11 mt-3">
                                    <div class="row align-items-center m-auto" style="width: 100%;height: 100%;">
                                        <h4 class="multiselect-title">Дополнительная информация</h4>
                                        <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                <textarea name="message" v-model="message" class="multiselect__input price form-control"
                                          style="min-height: 70px"
                                          placeholder="Дополнительная информация">
                                </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <button class="btn btn-primary btn-wd btn-lg" style="width:100%" :disabled="invalid" @click="onSubmit">Отправить</button>
                                </div>
                            </div>
                        </ValidationObserver>
                    </div>
                </tab-content>
                <tab-content title="Формирование заказа"
                             icon=""
                             checkedIcon="icon-check">
                    <div class='cont'>
                        <div class="ml-auto mr-auto" style="height: 100%; width: 100%; ">
                            step5
                        </div>
                    </div>
                </tab-content>

                <template slot="custom-buttons-left" slot-scope="props">
                    <span class="backSpan" v-if="props.activeTabIndex ">Назад</span>
                </template>

                <template slot="custom-buttons-right" slot-scope="props">
                    <span class="nextSpan">Далее</span>
                </template>

                <template slot="footer" slot-scope="props">
                    <div class="wizard-footer-left">
<!--                        <span class="nextSpan">Далее</span>-->
                        <wizard-button v-if="props.activeTabIndex > 0" @click.native="props.prevTab()" class="backButton" style="background-color: orange; color: white;"><span class="icon-keyboard_arrow_left"></span></wizard-button>
                    </div>
                    <div class="wizard-footer-right">
<!--                        <span class="backSpan" v-if="props.activeTabIndex">Назад</span>-->
                        <wizard-button @click.native="props.nextTab()" class="nextButton wizard-footer-right" style="background-color: orange; color: white;"><span class="icon-keyboard_arrow_right"></span></wizard-button>
                    </div>
                </template>
            </form-wizard>
        </div>
    </div>
</template>

<script>
    import {mask} from "vue-the-mask";

    export default {
        data: () => ({
            name: '',
            phone: '',
            // email: '',
            message: '',
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
            end: new Date((new Date).setDate((new Date).getDate() + 1)),

            meals: [
                { name: 'Vue.js', language: 'JavaScript' },
                { name: 'Rails', language: 'Ruby' },
                { name: 'Sinatra', language: 'Ruby' },
                { name: 'Laravel', language: 'PHP' },
                { name: 'Phoenix', language: 'Elixir' }
            ],
        }),
        created() {
            this.$store.dispatch('getCountries', {town_id:0});
            for (var i = 1; i < 31; i++) {
                this.nights.push(i);
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
        mounted() {
            if(!this.tourModule.country){
                this.$store.dispatch('changeCountry', 'Россия')
            }
            this.adults = this.tourModule.adults;
            this.children = this.tourModule.children;
            this.price_from = this.tourModule.price_from;
            this.price_to = this.tourModule.price_to;
            this.nights_from = this.tourModule.nights_from;
            this.nights_to = this.tourModule.nights_to;
            this.start = this.tourModule.date_range.start;
            this.end = this.tourModule.date_range.end;
            if(this.tourModule.resort_country) {
                this.resort_country = this.tourModule.resort_country;
                this.$store.dispatch('getCities', this.resort_country.Id);
                // this.$store.dispatch('getHotels', {country_id:this.resort_country.Id});
                this.$store.dispatch('getTourOperators', {city_id: '832', country_id: this.resort_country.Id});
                this.$store.dispatch('getTourDates', {city_id: '832', country_id: this.resort_country.Id});
                //если есть выбранные курорты
                if (this.tourModule.resorts.length > 0) {
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
                        star_id: ''
                    });
                } else {
                    //если городов-курортов не выбрано, то поиск отелей по стране
                    this.$store.dispatch('getHotels', {country_id: this.resort_country.Id, town_id: '', star_id: ''});
                }
                //если есть выбранные отели
                if (this.tourModule.hotels.length > 0) {
                    // фильтруем выбранные отели по городам курортам
                    //т.е если выбранные отели находятся в выборке отелей по городам-курортам
                    this.chosen_hotels = this.tourModule.hotels;
                }

                //если есть выбранные туроператоры
                if (this.tourModule.tour_operators.length > 0) {
                    this.chosen_tour_operators = this.tourModule.tour_operators
                }
            }
            this.name = this.tourModule.name;
            this.phone = this.tourModule.phone;
        },
        filters: {
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
        methods:
        {
            chooseUkraine() {
                this.$store.dispatch('changeCountry', 'Украина')
            },
            chooseRussia() {
                this.$store.dispatch('changeCountry', 'Россия')
            },
            toggleChoice() {
                if(this.tourModule.country=='Россия') {
                    // this.tourModule.country = 'Украина'
                    this.$store.dispatch('changeCountry', 'Украина')
                }
                else {
                    // this.tourModule.country='Россия'
                    this.$store.dispatch('changeCountry', 'Россия')
                }
            },
            chooseResortCountry() {
                this.$store.dispatch('changeResortCountry', this.resort_country);
                this.resorts=[{Name: 'Любой'}];
                this.chosen_hotels=[{Name: 'Любой'}];
                this.chosen_tour_operators=[{Name: 'Любой'}];
                this.$store.dispatch('changeResorts', this.resorts);
                this.$store.dispatch('changeHotels', this.chosen_hotels);
                this.$store.dispatch('changeTourOperator', this.chosen_tour_operators);

                this.$store.dispatch('getCities', this.resort_country.Id);
                this.$store.dispatch('getHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                this.$store.dispatch('getTourOperators', {city_id:'832', country_id:this.resort_country.Id});
                this.$store.dispatch('getTourDates', {city_id:'832', country_id:this.resort_country.Id});

                // this.$store.dispatch('getCities', {id:this.resort_country.Id});
                // this.$store.dispatch('getHotels', {id:this.resort_country.Id});
                // this.$store.dispatch('getHotelStars', {id:this.resort_country.Id});
                // this.$store.dispatch('getTourOperators', {city_id:'832', country_id:this.resort_country.Id});
                // this.$store.dispatch('getTourDates', {city_id:'832', country_id:this.resort_country.Id});

            },
            chooseResorts(value) {
                this.resorts = value;
                if(this.resorts.length>0){
                    if (value[this.resorts.length-1].Name==='Любой')
                    {
                        this.resorts=[{Name: 'Любой'}];
                        // this.$store.dispatch('getHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                        this.$store.dispatch('changeResorts', this.resorts);
                    }
                    else {
                        this.resorts = this.resorts.filter(item=>{
                            if(item.Name !== 'Любой')
                            {
                                return true;
                            }
                        });
                        this.$store.dispatch('changeResorts', this.resorts);
                        var town_id = '';
                        this.resorts.forEach(item =>
                            {
                                town_id += ''+item.Id+',';
                            }
                        );
                        town_id = town_id.slice(0, -1);
                        //поиск отелей по городам-курортам
                        this.$store.dispatch('getHotels', {country_id:this.resort_country.Id, town_id:town_id, star_id:''}).then(() => {
                            // фильтруем выбранные отели по городам курортам
                            this.chosen_hotels = this.chosen_hotels.filter( item =>
                            {
                                if(this.hotels.findIndex(i=> i.Id == item.Id) !== -1)
                                {
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
                this.$store.dispatch('changeHotels', this.chosen_hotels)
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
                this.$store.dispatch('changeTourOperator', this.chosen_tour_operators)
            },

            whateverResort(actionName) {
                if (actionName.Name=='Любой') {
                    this.$store.dispatch('getHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
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
            removeResort(removedOption, id){
                if (removedOption.Name!='Любой') {
                    if (this.resorts.length == 1) {
                        console.log('1',this.resorts)
                        this.resorts.push({Name: 'Любой'});
                        this.$store.dispatch('changeResorts', this.resorts);
                        this.$store.dispatch('getHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                        console.log('2',this.resorts);
                    }
                }
                else {
                    console.log('here')
                    console.log('1',this.resorts)
                    this.resorts.push({Name: 'Любой'});
                    console.log('2',this.resorts);
                    // this.resorts.push({Name: 'Любой'});
                }
            },
            removeHotels(removedOption, id){
                if (removedOption.Name!='Любой') {
                    console.log('remove option')
                    if (this.chosen_hotels.length == 1) {
                        console.log('remove push')
                        this.chosen_hotels.push({Name: 'Любой'});
                        this.$store.dispatch('changeHotels', this.chosen_hotels);
                    }
                }
                else {
                    console.log('remove hotels')
                    this.chosen_hotels.push({Name: 'Любой'});
                }
            },
            removeTourOperators(removedOption, id){
                if (removedOption.Name!='Любой') {
                    if (this.chosen_tour_operators.length == 1) {
                        this.chosen_tour_operators.push({Name: 'Любой'});
                        this.$store.dispatch('changeTourOperators', this.chosen_tour_operators);
                    }
                }
                else {
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
                if(this.nights_from>this.nights_to)
                {
                    this.nights_to = this.nights_from
                    this.$store.dispatch("changeNightsTo", this.nights_to)
                }
            },
            changeNightsTo() {
                this.$store.dispatch("changeNightsTo", this.nights_to)
                this.nights_to = this.tourModule.nights_to
                if(this.nights_to<this.nights_from)
                {
                    this.nights_from = this.nights_to;
                    this.$store.dispatch("changeNightsFrom", this.nights_from)
                }
            },

            changeDateRange(date_object) {
                this.$store.dispatch("changeDateRange", date_object)
            },
            onSubmit(){
                this.$store.dispatch('changeName', this.name);
                this.$store.dispatch('changePhone', this.phone);

                this.$store.dispatch('sendTourModuleOrder',
                    {
                        name: this.name,
                        phone: this.phone,
                        message: this.message,
                        tourModule: this.tourModule
                    }
                ).then(resp => {
                    this.sendMessage("Заявка на подбор тура успешно отправлена!")
                })
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от ВПУТЬ',
                    text: message
                });
            },
        },
        directives: {mask}
    }
</script>
<style scoped>
    .title-1 {
        position: absolute;
        z-index: 1;
        left: 20px;
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
        left: 36px;
        top: 18px;
        color:white;
        font-family: 'Open Sans' !important;
        font-weight:900;
        font-size: 19px;
    }
    .title-2 span {
        text-transform: uppercase;
    }
    .orange-brush{
        top: 2px;
        left: 0px;
        width: 350px;
        height: 50px;
    }
    .blue-brush{
        top: 10px;
        left: -55px;
        width: 425px;
        height: 50px;
        opacity: 1;
    }
    .btn.btn-primary {
        color: #fff !important;
        background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);
        background-color: rgba(0, 0, 0, 0);
        background-color: #f08b23 !important;
        border-color: #f08b23 !important;
        box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;
    }
    .title {
        font-family: 'Bello Pro';
        color:#85b8e7;
        cursor: pointer;
    }
    .active {
        color:#f08b23 !important;
    }
    .switch{
        transition: all .5s;
        cursor:pointer;
    }
    .right{
        transform: rotate(30deg);
    }
    .left{
        transform: rotate(-108deg);
    }
    .vue-form-wizard .wizard-tab-content {
        min-height: 100px;
        padding: 30px 0px 10px;
    }
    @media screen and (min-width: 800px) {
        .backButton {
            width: 60px !important;
            height: 60px !important;
            min-width: 60px !important;
            display: block !important;
            border-radius: 50px !important;
            text-decoration: none !important;
            font-size: 30px !important;
            line-height: 50px !important;
            color: white !important;
            background: #9df !important;
            padding: 0px !important;
            top: 40% !important;
            /*left: 10px;*/
            left: 15% !important;
            position: absolute !important;
        }
        .nextButton {
            width: 60px !important;
            height: 60px !important;
            min-width: 60px !important;
            display: block !important;
            border-radius: 50px !important;
            text-decoration: none !important;
            font-size: 30px !important;
            font-weight: 600 !important;
            line-height: 50px !important;
            color: white !important;
            background: #9df !important;
            padding: 0px !important;
            top: 40% !important;
            /* right: 10px;*/
            right: 15% !important;
            position: absolute !important;

        }
        .nextButton span {
            font-size: 45px;
            top: 4px !important;
            position: relative;
        }
        .backButton span {
            font-size: 45px;
            top: 4px !important;
            position: relative;
        }
    }
    @media screen and (max-width: 800px) {
        .nextSpan {
            display: none;
        }
        /*.nextButton {*/
        /*    display: inline-block !important;*/
        /*    margin-bottom: 0 !important;*/
        /*    font-weight: 400 !important;*/
        /*    text-align: center !important;*/
        /*    vertical-align: middle !important;*/
        /*    -ms-touch-action: manipulation !important;*/
        /*    touch-action: manipulation !important;*/
        /*    cursor: pointer !important;*/
        /*    background-image: none !important;*/
        /*    border: 1px solid transparent !important;*/
        /*    border-top-color: transparent !important;*/
        /*    border-top-width: 1px !important;*/
        /*    border-right-color: transparent !important;*/
        /*    border-right-width: 1px !important;*/
        /*    border-bottom-color: transparent !important;*/
        /*    border-bottom-width: 1px !important;*/
        /*    border-left-color: transparent !important;*/
        /*    border-left-width: 1px !important;*/
        /*    white-space: nowrap !important;*/
        /*    padding: 6px 12px !important;*/
        /*    font-size: 14px !important;*/
        /*    line-height: 1.42857 !important;*/
        /*    border-radius: 4px !important;*/
        /*    background: orange !important;*/
        /*    color: white;*/
        /*}*/
        .backSpan {
            display: none;
        }
    }

    .backButton span {
        font-size: 45px;
        top: 0px;
        position: relative;
    }
    .backSpan{
        top: 43%;
        left: 25%;
        /*left: 30px;*/
        position: absolute;
        text-transform: uppercase;
        font-weight: 600;
    }


    .nextButton span {
        font-size: 45px;
        top: 0px;
        position: relative;
    }
    .nextSpan{
        top: 43%;
        /*right: 30px;*/
        right: 25%;
        position: absolute;
        text-transform: uppercase;
        font-weight: 600;
    }
    #ua {
        width: 100%;
        height: 40vh;
        position: relative;
        overflow: visible;
    }
    #russia {
        /*width: 50vw;*/
        width: 100%;
        height: 40vh;
        position: relative;
        overflow: visible;
    }
    button:focus {
        outline: 0;
    }
    button:hover {
        cursor: pointer;
    }

    .style-two.switch-button.left button.left {
        color: #fff;
    }
    .style-two.switch-button.left .switch {
        left: 5%;
    }
    .style-two.switch-button.right button.right {
        color: #fff;
    }
    .style-two.switch-button.right .switch {
        left: 55%;
    }
    .style-two.switch-button .switch {
        transition: all 0.5s;
        float: left;
        text-align: center;
        z-index: 0;
        background-color: orange;
        width: 40%;
        height: 80%;
        font-weight: 800;
        position: absolute;
        top: 10%;
        border-radius: 100px;
    }
    .style-two.switch-button button {
        float: left;
        background-color: transparent !important;
        color: orange;
        border: 0;
        font-size: 1em;
        padding: 2%;
        width: 50%;
        height: 3em;
        font-weight: 500;
        z-index: 1;
        text-align: center;
        position: relative;
        transition-delay: 0.2s;
    }
    .style-two.switch-button {
        position: relative;
        font-size: 1.2em;
        overflow: hidden;
        width: 300px;
        float: left;
    }
    .style-two.switch-button input {
        display: none;
    }

    .cont {
        height: 68vh;
    }

    .ballon {
        margin: 0 auto;
        width: 150px;
        position: relative;
        top: 45%;
        -webkit-transform: translateY(-45%);
        transform: translateY(-45%);
    }

    .ballon-inner {
        -webkit-animation: drift 5s ease-in-out infinite;
        animation: drift 5s ease-in-out infinite;
    }

    .ballon-ball {
        height: 150px;
        width: 150px;
        position: relative;
        /*background: yellow;*/
        border-radius:150%;
        border-bottom-left-radius: 425%;
        border-bottom-right-radius: 425%;
        border-top-left-radius: 425%;
        border-top-radius: 220%;
        background: orange;
        transform: rotate(135deg);
        /*border-radius: 50%;
        border: 3px solid #bf5caa;*/
        overflow: hidden;
    }
    .ballon-ball1 {
        height: 150px;
        width: 150px;
        position: relative;
        /*background: yellow;*/
        border-bottom-left-radius: 100%;
        border-bottom-right-radius: 220%;
        border-top-left-radius: 220%;
        background: yellow;
        overflow: hidden;
    }
    .ballon-ball2 {
        height: 150px;
        width: 150px;
        position: relative;
        border-bottom-left-radius: 0%;
        border-bottom-right-radius: 530%;
        border-top-left-radius: 530%;
        background: orange;
        overflow: hidden;
    }
    .ballon-ball3 {
        height: 175px;
        width: 37px;
        position: relative;
        background:yellow;
        border-bottom-left-radius: 1000%;
        border-bottom-right-radius: 1000%;
        border-top-left-radius: 1000%;
        overflow: hidden;
        transform: rotate(45deg);
        border-top-right-radius: 1000%;
        margin-left: 64px;
        margin-top: -20px
    }

    .ball-inner {
        position: absolute;
        height: 38px;
        top: 60px;
        left: 0;
        width: 100%;
        overflow: hidden;
        border-radius: 50%;
        border-bottom: 5px solid black;
        z-index: 1;
    }
    .ballon-rope {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 117px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(28deg);
        top: 76px;
        /*height: 55.5555555556px;
        width: 55.5555555556px;
        position: absolute;
        z-index: -1;
        left: 23.2558139535px;
        top: 55.5555555556px;
        border: #cd7856 solid 3px;
        border-right: #cd7856 solid 3px;
        -webkit-transform: rotate(53deg) skew(18deg);
                transform: rotate(53deg) skew(18deg);*/
    }

    .ballon-rope1 {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 32px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(-28deg);
        top: 76px;
    }
    .ballon-rope2 {
        height: 120px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 41px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(-25deg);
        top: 84px;
    }
    .ballon-rope3 {
        height: 120px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 108px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(25deg);
        top: 84px;
    }
    .ballon-rope4 {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 54px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(-20deg);
        top: 90px;
    }
    .ballon-rope5 {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 94px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(20deg);
        top: 90px;
    }
    .ballon-rope6 {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 66px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(-9deg);
        top: 93px;
    }
    .ballon-rope7 {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 82px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(9deg);
        top: 93px;
    }

    .ballon-rope8 {
        height: 120px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 74.5px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(0deg);
        top: 97px;
    }
    .ballon-rope9 {
        height: 30px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 85px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(-3deg);
        top: 167px;
    }
    .ballon-rope10 {
        height: 30px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 63px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(3deg);
        top: 167px;
    }
    .ballon-seat {
        width: 28.5714285714px;
        height: 28.5714285714px;
        position: relative;
        border: 3px solid #633421;
        border-radius: 0 0 6px 6px;
        margin: 25px auto;
        background: -webkit-gradient(linear, left top, right top, from(#987359), color-stop(50%, #89534d), color-stop(85%, #4a2b21));
        background: linear-gradient(to right, #987359 0%, #89534d 50%, #4a2b21 85%);
        top: 20px;
    }
    .ballon-seat:before {
        content: '';
        width: 28.5714285714px;
        height: 14.2857142857px;
        position: absolute;
        border-radius: 0 0 6px 6px;
        bottom: 0;
        left: -2px;
        border-top: 3px solid #633421;
        background: transparent;
    }

    .sky {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        max-width: 650px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
        margin: 0 auto;
    }
    .cloud {
        position: absolute;
        background: #dcf6ff;
        border-radius: 200px;
    }
    .cloud--inner1:before, .cloud--inner1:after {
        content: '';
        position: absolute;
        background:#dcf6ff;
        width: 48%;
        height: 100%;
        position: absolute;
        top: -34%;
        left: 2%;
        border-radius: 300px;
    }
    .cloud--inner1:after {
        width: 65%;

        height: 120%;
        top: -21%;
        left: auto;
        right: 2%;
    }

    .cloud--inner3:before, .cloud--inner3:after {
        content: '';
        position: absolute;
        background: #dcf6ff;
        width: 55%;
        height: 91%;
        position: absolute;
        top: 21%;
        left: -9%;
        border-radius: 300px;
    }
    .cloud--inner3:after {
        width: 55%;
        height: 100%;
        top: 34%;
        left: auto;
        right: 8%;
    }

    .cloud--inner2:before, .cloud--inner2:after {
        content: '';
        position: absolute;
        background: #ace7f9;
        width: 61%;
        height: 100%;
        position: absolute;
        top: 30%;
        left: -12%;
        border-radius: 200px;
    }
    .cloud--inner2:after {
        width: 55%;
        height: 100%;
        top: 54%;
        left: auto;
        right: 10%;
    }

    .cloud--inner4:before, .cloud--inner4:after {
        content: '';
        position: absolute;
        border-radius: 200px;
    }
    .cloud--inner4:before {
        background: #ace7f9;
        width: 50%;
        height: 89%;
        top: 19%;
        left: auto;
        right: -20%;
    }
    .cloud--inner4:after {
        background: #dcf6ff;
        width: 50%;
        height: 74%;
        top: 18%;
        left: auto;
        right: -19%;
    }
    .cloud-1 {
        width: 110px;
        height: 55px;
        bottom: 50%;
        left: 105%;
        -webkit-animation: moveClouds 17s linear infinite;
        animation: moveClouds 17s linear infinite;
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
    }

    .cloud-2 {
        width: 83.3333333333px;
        height: 41.6666666667px;
        bottom: 15%;
        left: 105%;
        -webkit-animation: moveClouds 12s linear infinite;
        animation: moveClouds 12s linear infinite;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }

    .cloud-3 {
        width: 66.6666666667px;
        height: 33.3333333333px;
        top: 5%;
        left: 105%;
        -webkit-animation: moveClouds 15s linear infinite;
        animation: moveClouds 15s linear infinite;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
    }

    @-webkit-keyframes moveClouds {
        0% {
            -webkit-transform: translateX(-15vw);
            transform: translateX(-15vw);
            opacity: 0;
        }
        5% { opacity: 0.1; }
        10% { opacity: 0.5; }
        15% { opacity: 0.8; }
        20% { opacity: 1; }
        70% { opacity: 0.8; }
        80% { opacity: 0.5; }
        90% { opacity: 0.1; }
        100% {
            -webkit-transform: translateX(-650px);
            transform: translateX(-650px);
            opacity: 0;
        }
    }

    @keyframes moveClouds {
        0% {
            -webkit-transform: translateX(-15vw);
            transform: translateX(-15vw);
            opacity: 0;
        }
        5% { opacity: 0.1; }
        10% { opacity: 0.5; }
        15% { opacity: 0.8; }
        20% { opacity: 1; }
        70% { opacity: 0.8; }
        80% { opacity: 0.5; }
        90% { opacity: 0.1; }
        100% {
            -webkit-transform: translateX(-650px);
            transform: translateX(-650px);
            opacity: 0;
        }
    }


    @-webkit-keyframes drift {
        0% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
        50% {
            -webkit-transform: translateY(-20px) rotate(-3deg);
            transform: translateY(-20px) rotate(-3deg);
        }
        100% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
    }
    @keyframes drift {
        0% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
        50% {
            -webkit-transform: translateY(-20px) rotate(-3deg);
            transform: translateY(-20px) rotate(-3deg);
        }
        100% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
    }
</style>
<style>

    #order .multiselect__tags .price{
        color: #062348;
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
    }

    #order .multiselect__tags .price:focus{
        outline: none!important;
        box-shadow: none !important;
    }
    #order .multiselect__tags .price:active{
        outline: none!important;
        box-shadow: none !important;
    }
    @media screen and (max-width: 576px) {
        .country-choice {
            width: 100% !important;
        }
    }
    @media only screen and (max-width:767.98px) {
        .vhd-container:not(.desktop) .vhd-picker {
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
        .vhd-input {
            min-width: 100% !important;
        }
        .vhd-container {
            width: 100% !important;
        }
    }
    @media screen and (max-width: 576px) {
        .tour-module .cont {
            height: 100% !important;
        }

    }
    .vhd-picker {
        z-index: 2!important;
        min-height: 362px!important;
        padding: 18px!important;
    }
    .vhd-input {
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

    .multiselect-title {
        color: #062348 !important;
        font-family: "Bello Pro";
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
