<template>
    <div>
        <div class="row w-100 m-auto align-items-center justify-content-center">
            <div class="col-8">
                <ValidationObserver v-slot="{ invalid }">
                    <div class="row w-100 m-auto">
                        <div class="col-md-6 pr-md-1">
                            <ValidationProvider name="name" rules="required" v-slot="{ errors }" style="width: 100%;">
                                <b-form-group class="mb-0" label="Имя" label-size="sm">
                                    <b-form-input type="text" class="travel-input" v-model="editItem.name" placeholder="Имя" required>
                                    </b-form-input>
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col-md-6 pl-md-1">
                            <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;">
                                <b-form-group class="mb-0" label="Телефон" label-size="sm">
                                    <b-form-input type="text" class=" travel-input"
                                           v-model="editItem.phone"
                                           v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                           placeholder="Номер телефона"
                                           required
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="row w-100 m-auto" v-if="editItem.order_type=='Тур'">
                        <div class="col-md-12">
                            <b-form-group class="mb-0" label="Страна отправления" label-size="sm">
                                <multiselect
                                    v-model="editItem.module.country"
                                    :options="depart_countries"
                                    :option-height="25"
                                    placeholder="Выберете страну отправления"
                                    :show-labels="false"
                                    :maxHeight="200"
                                    :allow-empty="false"
                                    :loading="isCountriesLoading"
                                    :disabled="isCountriesLoading"
                                >
                                </multiselect>
                            </b-form-group>
                        </div>
                        <div class="col-md-12">
                            <b-form-group class="mb-0" label="Куда" label-size="sm">
                                <multiselect
                                    v-model="editItem.module.resort_country"
                                    :options="countries"
                                    :option-height="25"
                                    placeholder="Выберете страну"
                                    :show-labels="false"
                                    :maxHeight="200"
                                    label="Name"
                                    track-by="Name"
                                    :loading="isCountriesLoading"
                                    :disabled="isCountriesLoading || editItem.module.country == null"
                                    :allow-empty="false"
                                    @input="chooseEditResortCountry"
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
                            </b-form-group>
                        </div>
                        <div class="col-md-12">
                            <b-form-group class="mb-0" label="Курорт" label-size="sm">
                                <multiselect
                                    :value="editItem.module.resorts"
                                    :options="cities"
                                    placeholder="Введите название курорта"
                                    :show-labels="false"
                                    :limit="2"
                                    :maxHeight="200"
                                    label="Name"
                                    track-by="Name"
                                    :multiple="true" :close-on-select="false" :clear-on-select="false"
                                    :loading="isCountriesLoading || isCitiesLoading"
                                    :disabled="isCountriesLoading || isCitiesLoading || editItem.module.resort_country == null"
                                    @input="chooseEditResorts"
                                    @select="whateverResort"
                                    @remove="removeEditResort"
                                    :preselectFirst="true"
                                >
                                    <template slot="limit">
                            <span class="multiselect__single"> и ещё {{ editItem.module.resorts.length-2 }} {{editItem.module.resorts.length-2 | pluralizeResorts}}
                            </span>
                                    </template>
                                    <template slot="selection" slot-scope="{ values, search, isOpen }">
                            <span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeResorts }} {{values.length | pluralizeChoose}}
                            </span>
                                    </template>
                                </multiselect>
                            </b-form-group>
                        </div>
                        <div class="col-md-12">
                            <b-form-group class="mb-0" label="Выбор отеля" label-size="sm">
                                <multiselect
                                    :value="editItem.module.hotels"
                                    :options="hotels"
                                    placeholder="Введите название отеля"
                                    :show-labels="false"
                                    :limit="2"
                                    :maxHeight="200"
                                    label="Name"
                                    track-by="Name"
                                    :multiple="true" :close-on-select="false" :clear-on-select="false"
                                    :loading="isCountriesLoading || isHotelsLoading"
                                    :disabled="isCountriesLoading || isHotelsLoading || editItem.module.resorts == null"
                                    :allow-empty="false"
                                    @input="chooseEditHotel"
                                    @remove="removeEditHotels"
                                    :preselectFirst="true"
                                >
                                    <template slot="limit">
                            <span class="multiselect__single"> и ещё {{ editItem.module.hotels.length-2 }} {{editItem.module.hotels.length-2 | pluralizeHotels}}
                            </span>
                                    </template>
                                    <template slot="selection" slot-scope="{ values, search, isOpen }">
                            <span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeHotels}} {{values.length | pluralizeChoose}}
                            </span>
                                    </template>
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
                            </b-form-group>
                        </div>
                        <div class="col-md-12">
                            <b-form-group class="mb-0" label="Туроператоры" label-size="sm">
                                <multiselect
                                    v-model="editItem.module.tour_operators"
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
                                    :allow-empty="false"
                                    @input="chooseEditTourOperator"
                                    @remove="removeEditTourOperators"
                                    :preselectFirst="true"
                                >
                                    <template slot="limit" ><span class="multiselect__single"> и ещё {{ editItem.module.tour_operators-2 }} {{editItem.module.tour_operators-2 | pluralizeTourOperators}}</span></template>
                                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeTourOperators}} {{values.length | pluralizeChoose}}</span></template>
                                </multiselect>
                            </b-form-group>
                        </div>
                        <div class="col-md-12">
                            <b-form-group class="mb-0" label="Интервал дат вылета" label-size="sm">
                                <VueHotelDatepicker
                                    :startDate="editItem.module.start"
                                    :endDate="editItem.module.end"
                                    :placeholder="'Интервал дат вылета'"
                                    :format="'DD-MM-YYYY'"
                                    :weekList="['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.']"
                                    :monthList="['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май.', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт', 'Ноя.', 'Дек.']"
                                    :fromText="'С'"
                                    :toText="'По'"
                                    :resetText="'Очистить'"
                                    :confirmText="'Подтвердить'"
                                    :mobile="'mobile'"
                                    @update="changeEditDateRange"
                                />
                            </b-form-group>
                        </div>
                        <div class="col-12 col-md-6">
                            <ValidationProvider name="adults" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                <b-form-group class="mb-0" label="Взрослые" label-size="sm">
                                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;">
                                        <button type="button" class="minus text-center " :disabled="editItem.module.adults===0"
                                                @click="decrementItem('adults')">-
                                        </button>
                                        <b-form-input type="number" class="count" name="qty" v-model="editItem.module.adults" step="1" min="1"></b-form-input>
                                        <button type="button" class=" plus text-center"
                                                @click="incrementItem('adults')">+
                                        </button>
                                    </div>
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6">
                            <ValidationProvider name="children" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                <b-form-group class="mb-0" label="Дети" label-size="sm">
                                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;">
                                        <button type="button" class="minus text-center " :disabled="editItem.module.children===0"
                                                @click="decrementItem('children')">-
                                        </button>
                                        <b-form-input type="number" class="count" name="qty" v-model="editItem.module.children" step="1" min="0"></b-form-input>
                                        <button type="button" class="plus text-center"
                                                @click="incrementItem('children')">+
                                        </button>
                                    </div>
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6">
                            <ValidationProvider name="price_from" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                <b-form-group class="mb-0" label="Цена от" label-size="sm">
                                    <b-form-input type="number" class="travel-input" v-model="editItem.module.price_from" step="1" min="0" >
                                    </b-form-input>
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6">
                            <ValidationProvider name="price_to" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                <b-form-group class="mb-0" label="Цена до" label-size="sm">
                                    <b-form-input type="number" class="travel-input" v-model="editItem.module.price_to" step="1" min="0">
                                    </b-form-input>
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6">
                            <ValidationProvider name="nights_from" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                <b-form-group class="mb-0" label="Ночей от" label-size="sm">
                                    <multiselect
                                        v-model="editItem.module.nights_from"
                                        :options="nights"
                                        :option-height="25"
                                        placeholder="От"
                                        :show-labels="false"
                                        :maxHeight="200"
                                        :allow-empty="false"
                                        :searchable="false"
                                    >
                                    </multiselect>
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                <ValidationProvider name="nights_to" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                    <b-form-group class="mb-0" label="До" label-size="sm">
                                        <multiselect
                                            v-model="editItem.module.nights_to"
                                            :options="nights"
                                            :option-height="25"
                                            placeholder="До"
                                            :show-labels="false"
                                            :maxHeight="200"
                                            :allow-empty="false"
                                            :searchable="false"
                                        >
                                        </multiselect>
                                    </b-form-group>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                    <div class="row w-100 mx-auto mb-5" v-if="editItem.order_type=='Авиабилеты'">
                        <div class="col-12">
                            <ValidationProvider name="city_from" rules="required" v-slot="{ errors }" style="width: 100%;">
                                <b-form-group class="mb-0" label="Город вылета" label-size="sm">
                                    <multiselect
                                        v-model="editItem.module.city_from"
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
                                        <template slot="singleLabel" v-if="options.length>0 || editItem.module.city_from!=null" slot-scope="props">
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
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col-12">
                            <ValidationProvider name="city_to" rules="required" v-slot="{ errors }" style="width: 100%;">
                                <b-form-group class="mb-0" label="Город прибытия" label-size="sm">
                                    <multiselect
                                        v-model="editItem.module.city_to"
                                        label="name"
                                        track-by="code"
                                        placeholder="Город прибытия"
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
                                        <template slot="singleLabel" v-if="options.length>0 || editItem.module.city_to!=null" slot-scope="props">
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
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col-12">
                            <b-form-group class="mb-0" label="Туда" label-size="sm">
                                <datepicker
                                    v-model="editItem.module.depart_date"
                                    name="depart_date" @input="changeDepartDate"
                                    :language="languages['ru']"
                                    :disabled-dates="disabledDates1"
                                >
                                </datepicker>
                            </b-form-group>
                        </div>
                        <div class="col-12">
                            <b-form-group class="mb-0" label="Обратно" label-size="sm">
                                <datepicker
                                    v-model="editItem.module.return_date"
                                    name="return_date"
                                    :clear-button="true"
                                    :language="languages['ru']"
                                    :disabled-dates="disabledDates2"
                                >
                                </datepicker>
                            </b-form-group>
                        </div>
                        <div class="col-12">
                            <b-form-group class="mb-0" label="Класс" label-size="sm">
                                <multiselect
                                    v-model="editItem.module.avia_class"
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
                            </b-form-group>
                        </div>
                        <div class="col-12">
                            <ValidationProvider name="adults" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                <b-form-group class="mb-0" label="Взрослые" label-size="sm">
                                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                        <button type="button" class="btn minus text-center " :disabled="editItem.module.adults===0"
                                                @click="decrementItem('adults')">-
                                        </button>
                                        <b-form-input type="number" class="count" name="qty" v-model="editItem.module.adults" step="1" min="1"></b-form-input>
                                        <button type="button" class="btn plus text-center"
                                                @click="incrementItem('adults')">+
                                        </button>
                                    </div>
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col-12">
                            <ValidationProvider name="children_under_12" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                <b-form-group class="mb-0" label="Дети до 12 лет" label-size="sm">
                                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                        <button type="button" class="btn minus text-center" :disabled="editItem.module.children_under_12===0"
                                                @click="decrementItem('children_under_12')">-
                                        </button>
                                        <b-form-input type="number" class="count" name="qty" v-model="editItem.module.children_under_12" step="1" min="0"></b-form-input>
                                        <button type="button" class="btn plus text-center"
                                                @click="incrementItem('children_under_12')">+
                                        </button>
                                    </div>
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col-12">
                            <ValidationProvider name="children_under_2" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                <b-form-group class="mb-0" label="Дети до 2 лет" label-size="sm">
                                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                        <button type="button" class="btn minus text-center " :disabled="editItem.module.children_under_2===0"
                                                @click="decrementItem('children_under_2')">-
                                        </button>
                                        <b-form-input
                                            type="number"
                                            class="count"
                                            name="qty"
                                            v-model="editItem.module.children_under_2"
                                            step="1"
                                            min="0"
                                        >
                                        </b-form-input>
                                        <button type="button" class="btn plus text-center"
                                                @click="incrementItem('children_under_2')">+
                                        </button>
                                    </div>
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div v-if="editItem.order_type=='Отель'">
                    </div>

                    <div class="row w-100 mx-auto mb-5">
                        <div class="col-6 col-md-6 contact-btn">
                            <b-button class="btn btn-primary" style="width: 100%" @click="back">
                                Отмена
                            </b-button>
                        </div>
                        <div class="col-6 col-md-6 contact-btn">
                            <b-button type="submit" class="btn btn-primary" style="width: 100%" :disabled="invalid||loading" @click="updateOrder">
                                <div class="row align-items-center justify-content-center m-auto w-100 h-100 text-center">
                                    <span v-if="loading" class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                                    <span v-if="loading" class="sr-only">Loading...</span>
                                    Сохранить
                                </div>
                            </b-button>
                        </div>
                    </div>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>

<script>
    import {mask} from "vue-the-mask";
    import * as lang from "vuejs-datepicker/dist/locale";

    export default {
        name: "Edit",
        // props:['editItem'],
        data: () => ({
            editItem:'',
            start:new Date(),
            end: new Date((new Date).setDate((new Date).getDate() + 1)),
            nights:[],
            order_types: ['Тур', 'Авиабилеты', 'Отель'],
            depart_countries:['Украина', 'Россия'],
            loading:false,
            options: [],
            classes: ['Эконом класс' , 'Бизнес класс'],
            languages: lang,
            disabledDates1: {
                to: new Date(new Date().setDate(new Date().getDate() - 1)),
            },
            disabledDates2: {
                to: new Date(new Date().setDate(new Date().getDate() - 1)),
            },
        }),
        mounted() {
            if (this.countries.length===0) {
                this.$store.dispatch('getCountries', {town_id:0});
            }
            for (var i = 1; i < 31; i++) {
                this.nights.push(i);
            }
            if (this.moduleOrders.length>0) {
                this.loading = true;
                this.editItem = this.moduleOrders.find((item) => item.id == this.$route.params.id);
                if(this.editItem.module.date_range) {
                    this.editItem.module.start = new Date(this.editItem.module.date_range.start);
                    this.editItem.module.end = new Date(this.editItem.module.date_range.end);
                }

                this.loading = false;
            } else {
                this.loadModuleOrders();
            }
        },
        computed: {
            isAdmin : function(){ return this.$store.getters.isAdmin},
            isManager : function(){ return this.$store.getters.isManager},
            menu() {
                return this.$store.getters.menu
            },
            moduleOrders() {
                return this.$store.getters.moduleOrders
            },
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
            aviaCities() {
                return this.$store.getters.aviaCities;
            },
            isAviaCitiesLoading() {
                return this.$store.getters.isAviaCitiesLoading;
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
        methods: {
            back() {
                if(this.isAdmin){
                    this.$router.push('/admin/orders')
                }
                if(this.isManager){
                    this.$router.push('/manager/orders')
                }
            },
            async loadModuleOrders() {
                this.loading=true;
                await this.$store.dispatch('setModuleOrders').then(resp =>{
                    this.$store.commit('setModuleOrders', resp.data.orders);
                    this.$store.commit('setDeletedModuleOrders',  resp.data.deleted_orders);
                    this.editItem = this.moduleOrders.find((item) => item.id == this.$route.params.id);
                    if(this.editItem.module.date_range) {
                        this.editItem.module.start = new Date(this.editItem.module.date_range.start);
                        this.editItem.module.end = new Date(this.editItem.module.date_range.end);
                    }
                    this.loading = false;
                })
            },
            updateOrder() {
                this.loading = true;
                this.$store.dispatch('updateModuleOrder', this.editItem)
                    .then(response => {
                        this.sendMessage('Заказ успешно обновлён');
                        this.loading = false;
                        this.editItem={};
                        this.$bvModal.hide('editModalBox');
                    });
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от TravelClub',
                    text: message
                });
            },

            whateverResort(actionName) {
                if (actionName.Name=='Любой') {
                    this.$store.dispatch('getHotels', {country_id:this.resort_country.Id, town_id:'0', star_id:'0'});
                }
            },
            chooseEditResortCountry() {
                this.editItem.module.resorts=[];
                this.editItem.module.hotels=[];

                this.$store.dispatch('getCities', this.editItem.module.resort_country.Id);
                this.$store.dispatch('getHotels', {country_id:this.editItem.module.resort_country.Id, town_id:'0', star_id:'0'});
                this.$store.dispatch('getTourOperators', {city_id:'832', country_id:this.editItem.module.resort_country.Id});
                this.$store.dispatch('getTourDates', {city_id:'832', country_id:this.editItem.module.resort_country.Id});

            },
            chooseEditResorts(value) {
                this.editItem.module.resorts = value;
                if(this.editItem.module.resorts.length>0){
                    if (value[this.editItem.module.resorts.length-1].Name==='Любой')
                    {
                        this.editItem.module.resorts=[{Name: 'Любой'}];
                    }
                    else {
                        this.editItem.module.resorts = this.editItem.module.resorts.filter(item=>{
                            if(item.Name !== 'Любой')
                            {
                                return true;
                            }
                        });

                        var town_id = '';
                        this.editItem.module.resorts.forEach(item =>
                            {
                                town_id += ''+item.Id+',';
                            }
                        );
                        town_id = town_id.slice(0, -1);
                        //поиск отелей по городам-курортам
                        this.$store.dispatch('getHotels', {country_id:this.editItem.module.resort_country.Id, town_id:town_id, star_id:'0'}).then(() => {
                            // фильтруем выбранные отели по городам курортам
                            this.editItem.module.hotels = this.editItem.module.hotels.filter( item =>
                            {
                                if(this.hotels.findIndex(i=> i.Id == item.Id) !== -1)
                                {
                                    return true;
                                }
                            });
                        });
                    }
                }

            },
            chooseEditHotel(value) {
                this.editItem.module.hotels = value;
                if (value[this.editItem.module.hotels.length-1].Name==='Любой')
                {
                    this.editItem.module.hotels=[{Name: 'Любой'}];
                }
                else {
                    this.editItem.module.hotels = this.editItem.module.hotels.filter(item=>{
                        if(item.Name !== 'Любой')
                        {
                            return true
                        }
                    })
                }
            },
            chooseEditTourOperator(value) {
                this.editItem.module.tour_operators = value;

                if (value[this.editItem.module.tour_operators.length-1].Name==='Любой') {
                    this.editItem.module.tour_operators=[{Name: 'Любой'}];
                }
                else {
                    this.editItem.module.tour_operators = this.editItem.module.tour_operators.filter(item=>{
                        if(item.Name !== 'Любой')
                        {
                            return true
                        }
                    })
                }
            },
            removeEditResort(removedOption, id){
                if (removedOption.Name!='Любой') {
                    if (this.editItem.module.resorts.length == 1) {
                        this.editItem.module.resorts.push({Name: 'Любой'});

                        this.$store.dispatch('getHotels', {country_id:this.editItem.module.resort_country.Id, town_id:'0', star_id:'0'});
                    }
                }
                else {
                    this.editItem.module.resorts.push({Name: 'Любой'});
                }
            },
            removeEditHotels(removedOption, id){
                if (removedOption.Name!='Любой') {
                    if (this.editItem.module.hotels.length == 1) {
                        this.editItem.module.hotels.push({Name: 'Любой'});
                    }
                }
                else {
                    this.editItem.module.hotels.push({Name: 'Любой'});
                }
            },
            removeEditTourOperators(removedOption, id){
                if (removedOption.Name!='Любой') {
                    if (this.editItem.module.tour_operators.length == 1) {
                        this.editItem.module.tour_operators.push({Name: 'Любой'});
                    }
                }
                else {
                    this.editItem.module.tour_operators.push({Name: 'Любой'});
                }
            },
            changeEditDateRange(date_object) {
                this.editItem.module.date_range=date_object;
            },

            getAviaCities (term) {
                if( term.length > 1) {
                    this.$store.dispatch('getAviaCities', term).then(() => {
                        this.options = this.aviaCities;
                    })
                }
            },
            changeCityFrom (value) {
                this.editItem.module.city_from = value;
            },
            changeCityTo (value) {
                this.editItem.module.city_to = value;
            },
            toggleAviaCities() {
                var tempCity = this.editItem.module.city_to;
                this.editItem.module.city_to = this.editItem.module.city_from;
                this.editItem.module.city_from = tempCity;
            },
            changeDepartDate () {
                if(this.editItem.module.return_date != null) {
                    var date1 = new Date(this.editItem.module.depart_date);
                    var date2 = new Date(this.editItem.module.return_date);

                    if(date1 > date2)
                    {
                        var return_date = this.editItem.module.depart_date;
                        this.editItem.module.return_date = return_date;
                        this.disabledDates2.to = this.editItem.module.depart_date;
                    }
                }
            },
            incrementItem(item) {
                this.editItem.module[item]=this.editItem.module[item]+1;
            },
            decrementItem(item) {
                this.editItem.module[item]=this.editItem.module[item]-1;
            },
            changeClass(value) {
                this.editItem.module.avia_class = value
            },
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
    }
</style>
<style>
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
        border: 0;
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
<style>
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
    /*.qty .plus {*/
    /*    cursor: pointer;*/
    /*    display: inline-block;*/
    /*    vertical-align: top;*/
    /*    color: white;*/
    /*    width: 30px;*/
    /*    height: 30px;*/
    /*    font: 30px/1 Arial,sans-serif;*/
    /*    text-align: center;*/
    /*    border-radius: 50%;*/
    /*}*/
    /*.qty .minus {*/
    /*    cursor: pointer;*/
    /*    display: inline-block;*/
    /*    vertical-align: top;*/
    /*    color: white;*/
    /*    width: 30px;*/
    /*    height: 30px;*/
    /*    font: 30px/1 Arial,sans-serif;*/
    /*    text-align: center;*/
    /*    border-radius: 50%;*/
    /*    background-clip: padding-box;*/
    /*}*/
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
