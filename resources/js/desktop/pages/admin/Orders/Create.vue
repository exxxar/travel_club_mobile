<template>
    <div class="row m-auto w-100 align-items-center justify-content-center">
        <div class="col-8">
            <ValidationObserver v-slot="{ invalid }">
                <div class="row m-auto w-100 justify-content-center align-items-start" style="min-height: 210px">
                    <div class="col-12 col-md-6 pe-md-1">
                        <ValidationProvider name="name" rules="required" style="width:100%;" v-slot="{ errors }">
                            <b-form-group class="mb-0" label="Имя" label-size="sm">
                                <b-form-input
                                    class="mb-0 travel-input"
                                    placeholder="Имя"
                                    v-model="newItem.name"
                                >
                                </b-form-input>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-12 col-md-6 ps-md-1">
                        <ValidationProvider name="phone" rules="required|phone" style="width:100%;"
                                            v-slot="{ errors }">
                            <b-form-group class="mb-0" label="Телефон" label-size="sm">
                                <b-form-input
                                    class="travel-input" placeholder="Номер телефона"
                                    required
                                    type="text"
                                    v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                    v-model="newItem.phone"
                                >

                                </b-form-input>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-12">
                        <ValidationProvider name="order_type" rules="required" style="width:100%;"
                                            v-slot="{ errors }">
                            <b-form-group class="mb-0" label="Тип заказа" label-size="sm">
                                <multiselect
                                    :allow-empty="false"
                                    :maxHeight="200"
                                    :option-height="25"
                                    :options="order_types"
                                    :searchable="false"
                                    :show-labels="false"
                                    @input="changeOrderType"
                                    placeholder="Тип заказа"
                                    v-model="newItem.order_type"
                                >
                                </multiselect>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="row w-100 mx-auto mb-5" v-if="newItem.order_type=='Тур'">
                    <div class="col-md-12">
                        <b-form-group class="mb-0" label="Страна отправления" label-size="sm">
                            <multiselect
                                :allow-empty="false"
                                :maxHeight="200"
                                :option-height="25"
                                :options="depart_countries"
                                :show-labels="false"
                                placeholder="Выберете страну отправления"
                                v-model="newItem.module.country"
                            >
                            </multiselect>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group class="mb-0" label="Куда" label-size="sm">
                            <multiselect
                                :allow-empty="false"
                                :disabled="isCountriesLoading"
                                :loading="isCountriesLoading"
                                :maxHeight="200"
                                :option-height="25"
                                :options="countries"
                                :show-labels="false"
                                @input="chooseNewResortCountry"
                                label="Name"
                                placeholder="Выберете страну"
                                track-by="Name"
                                v-model="newItem.module.resort_country"
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
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group class="mb-0" label="Курорт" label-size="sm">
                            <multiselect
                                :clear-on-select="false"
                                :close-on-select="false"
                                :disabled="isCountriesLoading || isCitiesLoading"
                                :limit="2"
                                :loading="isCountriesLoading || isCitiesLoading"
                                :maxHeight="200"
                                :multiple="true"
                                :options="cities"
                                :preselectFirst="true" :show-labels="false" :value="newItem.module.resorts"
                                @input="chooseNewResorts"
                                @remove="removeNewResort"
                                @select="whateverResort"
                                label="Name"
                                placeholder="Введите название курорта"
                                track-by="Name"
                            >
                                <template slot="limit">
                            <span class="multiselect__single"> и ещё {{ newItem.module.resorts.length-2 }} {{newItem.module.resorts.length-2 | pluralizeResorts}}
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
                                :allow-empty="false"
                                :clear-on-select="false"
                                :close-on-select="false"
                                :disabled="isCountriesLoading || isHotelsLoading"
                                :limit="2"
                                :loading="isCountriesLoading || isHotelsLoading"
                                :maxHeight="200"
                                :multiple="true"
                                :options="hotels" :preselectFirst="true" :show-labels="false"
                                :value="newItem.module.hotels"
                                @input="chooseNewHotel"
                                @remove="removeNewHotels"
                                label="Name"
                                placeholder="Введите название отеля"
                                track-by="Name"
                            >
                                <template slot="limit">
                            <span class="multiselect__single"> и ещё {{ newItem.module.hotels.length-2 }} {{newItem.module.hotels.length-2 | pluralizeHotels}}
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
                                :allow-empty="false"
                                :clear-on-select="false"
                                :close-on-select="false"
                                :disabled="isCountriesLoading || isTourOperatorsLoading"
                                :limit="2"
                                :loading="isCountriesLoading || isTourOperatorsLoading"
                                :maxHeight="200"
                                :multiple="true"
                                :options="tour_operators" :preselectFirst="true" :show-labels="false"
                                @input="chooseNewTourOperator"
                                @remove="removeNewTourOperators"
                                label="Name"
                                placeholder="Введите название туроператора"
                                track-by="Name"
                                v-model="newItem.module.tour_operators"
                            >
                                <template slot="limit"><span class="multiselect__single"> и ещё {{ newItem.module.tour_operators-2 }} {{newItem.module.tour_operators-2 | pluralizeTourOperators}}</span>
                                </template>
                                <template slot="selection" slot-scope="{ values, search, isOpen }"><span
                                    class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeTourOperators}} {{values.length | pluralizeChoose}}</span>
                                </template>
                            </multiselect>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group class="mb-0" label="Интервал дат вылета" label-size="sm">
                            <VueHotelDatepicker
                                :confirmText="'Подтвердить'"
                                :endDate="end"
                                :format="'DD-MM-YYYY'"
                                :fromText="'С'"
                                :mobile="'mobile'"
                                :monthList="['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май.', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт', 'Ноя.', 'Дек.']"
                                :placeholder="'Интервал дат вылета'"
                                :resetText="'Очистить'"
                                :startDate="start"
                                :toText="'По'"
                                :weekList="['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.']"
                                @update="changeNewDateRange"
                            />
                        </b-form-group>
                    </div>
                    <div class="col-12 col-md-6">
                        <ValidationProvider name="adults" rules="required" style="width: 100%; text-align: center" v-slot="{ errors }">
                            <b-form-group class="mt-2 mb-0" label="Взрослые" label-size="sm">
                                <div class="row qty align-items-center justify-content-center m-auto"
                                     style="width: 100%;height: 100%;">
                                    <button :disabled="newItem.module.adults===1" @click="decrementItem('adults')"
                                            class="minus text-center"
                                            type="button">-
                                    </button>
                                    <b-form-input class="count" min="1" name="qty" step="1"
                                                  type="number" v-model="newItem.module.adults">
                                    </b-form-input>
                                    <button @click="incrementItem('adults')" class="plus text-center"
                                            type="button">+
                                    </button>
                                </div>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-12 col-md-6">
                        <ValidationProvider name="children" rules="required" style="width: 100%;text-align: center;" v-slot="{ errors }">
                            <b-form-group class="mb-0" label="Дети" label-size="sm">
                                <div class="row qty align-items-center justify-content-center m-auto"
                                     style="width: 100%;height: 100%;">
                                    <button :disabled="newItem.module.children===0" @click="decrementItem('children')"
                                            class="minus text-center "
                                            type="button">-
                                    </button>
                                    <b-form-input class="count" min="0" name="qty"
                                                  step="1" type="number" v-model="newItem.module.children">
                                    </b-form-input>
                                    <button @click="incrementItem('children')" class="plus text-center"
                                            type="button">+
                                    </button>
                                </div>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-12 col-md-6">
                        <ValidationProvider name="price_from" rules="required" style="width: 100%;text-align: center;" v-slot="{ errors }">
                            <b-form-group class="mb-0" label="Цена от" label-size="sm">
                                <b-form-input
                                    class="travel-input"
                                    min="0"
                                    step="1"
                                    type="number"
                                    v-model="newItem.module.price_from"
                                >
                                </b-form-input>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-12 col-md-6">
                        <ValidationProvider name="price_to" rules="required" style="width: 100%;text-align: center;" v-slot="{ errors }">
                            <b-form-group class="mb-0" label="Цена до" label-size="sm">
                                <b-form-input
                                    class="travel-input"
                                    min="0"
                                    step="1"
                                    type="number"
                                    v-model="newItem.module.price_to"
                                >
                                </b-form-input>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-12 col-md-6">
                        <ValidationProvider name="nights_from" rules="required" style="width: 100%;text-align: center;" v-slot="{ errors }">
                            <b-form-group class="mb-0" label="Ночей от" label-size="sm">
                                <multiselect
                                    :allow-empty="false"
                                    :maxHeight="200"
                                    :option-height="25"
                                    :options="nights"
                                    :searchable="false"
                                    :show-labels="false"
                                    placeholder="От"
                                    v-model="newItem.module.nights_from"
                                >
                                </multiselect>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-12 col-md-6">
                        <ValidationProvider name="nights_to" rules="required" style="width: 100%;text-align: center;" v-slot="{ errors }">
                            <b-form-group class="mb-0" label="До" label-size="sm">
                                <multiselect
                                    :allow-empty="false"
                                    :maxHeight="200"
                                    :option-height="25"
                                    :options="nights"
                                    :searchable="false"
                                    :show-labels="false"
                                    placeholder="До"
                                    v-model="newItem.module.nights_to"
                                >
                                </multiselect>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="row w-100 mx-auto mb-5" v-if="newItem.order_type=='Авиабилеты'">
                    <div class="col-12">
                        <ValidationProvider name="city_from" rules="required" style="width: 100%;" v-slot="{ errors }">
                            <b-form-group class="mb-0" label="Город вылета" label-size="sm">
                                <multiselect
                                    :clear-on-select="false"
                                    :close-on-select="true"
                                    :hide-selected="false"
                                    :internal-search="false"
                                    :loading="isAviaCitiesLoading"
                                    :max-height="300"
                                    :multiple="false"
                                    :options="options"
                                    :options-limit="300"
                                    :searchable="true"
                                    :show-labels="false"
                                    :show-no-results="false"
                                    @input="changeCityFrom"
                                    @search-change="getAviaCities"
                                    label="name"
                                    placeholder="Город вылета"
                                    track-by="code"
                                    v-model="newItem.module.city_from"
                                >
                                    <template slot="singleLabel" slot-scope="props"
                                              v-if="options.length>0 || newItem.module.city_from!=null">
                                        <div v-if="!props.option.city_name">
                                    <span class="option__desc">
                                        <span
                                            class="option__title">{{ props.option.name }}, {{ props.option.country_name }}</span>
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
                                            <div class="row align-items-center option__desc"
                                                 style="width: 100%; height: 100%">
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
                        <ValidationProvider name="city_to" rules="required" style="width: 100%;" v-slot="{ errors }">
                            <b-form-group class="mb-0" label="Город прибытия" label-size="sm">
                                <multiselect
                                    :clear-on-select="false"
                                    :close-on-select="true"
                                    :hide-selected="false"
                                    :internal-search="false"
                                    :loading="isAviaCitiesLoading"
                                    :max-height="300"
                                    :multiple="false"
                                    :options="options"
                                    :options-limit="300"
                                    :searchable="true"
                                    :show-labels="false"
                                    :show-no-results="false"
                                    @input="changeCityTo"
                                    @search-change="getAviaCities"
                                    label="name"
                                    placeholder="Город прибытия"
                                    track-by="code"
                                    v-model="newItem.module.city_to"
                                >
                                    <template slot="singleLabel" slot-scope="props"
                                              v-if="options.length>0 || newItem.module.city_to!=null">
                                        <div v-if="!props.option.city_name">
                                    <span class="option__desc">
                                        <span
                                            class="option__title">{{ props.option.name }}, {{ props.option.country_name }}</span>
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
                                            <div class="row align-items-center option__desc"
                                                 style="width: 100%; height: 100%">
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
                                :disabled-dates="disabledDates1"
                                :language="languages['ru']"
                                @input="changeDepartDate"
                                name="depart_date" v-model="newItem.module.depart_date"
                            >
                            </datepicker>
                        </b-form-group>
                    </div>
                    <div class="col-12">
                        <b-form-group class="mb-0" label="Обратно" label-size="sm">
                            <datepicker
                                :clear-button="true"
                                :disabled-dates="disabledDates2"
                                :language="languages['ru']"
                                name="return_date"
                                v-model="newItem.module.return_date"
                            >
                            </datepicker>
                        </b-form-group>
                    </div>
                    <div class="col-12">
                        <b-form-group class="mb-0" label="Класс" label-size="sm">
                            <multiselect
                                :allow-empty="false"
                                :maxHeight="200"
                                :option-height="25"
                                :options="classes"
                                :searchable="false"
                                :show-labels="false"
                                @input="changeClass"
                                placeholder="Класс"
                                v-model="newItem.module.avia_class"
                            >
                            </multiselect>
                        </b-form-group>
                    </div>
                    <div class="col-12">
                        <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;height: 100%;">
                            <ValidationProvider name="adults" rules="required" style="width: 100%;text-align: center;" v-slot="{ errors }">
                                <b-form-group class="mb-0" label="Взрослые" label-size="sm">
                                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                        <button :disabled="newItem.module.adults===0" @click="decrementItem('adults')"
                                                class="btn minus text-center "
                                                type="button">-
                                        </button>
                                        <b-form-input class="count" min="1" name="qty" step="1"
                                                      type="number" v-model="newItem.module.adults">
                                        </b-form-input>
                                        <button @click="incrementItem('adults')" class="btn plus text-center"
                                                type="button">+
                                        </button>
                                    </div>
                                </b-form-group>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-12">
                        <ValidationProvider name="children_under_12" rules="required" style="width: 100%;text-align: center;" v-slot="{ errors }">
                            <b-form-group class="mb-0" label="Дети до 12 лет" label-size="sm">
                                <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                    <button :disabled="newItem.module.children_under_12===0"
                                            @click="decrementItem('children_under_12')"
                                            class="btn minus text-center"
                                            type="button">-
                                    </button>
                                    <b-form-input class="count" min="0" name="qty"
                                                  step="1" type="number"
                                                  v-model="newItem.module.children_under_12"
                                    >
                                    </b-form-input>
                                    <button @click="incrementItem('children_under_12')" class="btn plus text-center"
                                            type="button">+
                                    </button>
                                </div>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-12">
                        <ValidationProvider name="children_under_2" rules="required" style="width: 100%;text-align: center;" v-slot="{ errors }">
                            <b-form-group class="mb-0" label="Дети до 2 лет" label-size="sm">
                                <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                    <button :disabled="newItem.module.children_under_2===0"
                                            @click="decrementItem('children_under_2')"
                                            class="btn minus text-center "
                                            type="button">-
                                    </button>
                                    <b-form-input
                                        class="count"
                                        min="0"
                                        name="qty"
                                        step="1"
                                        type="number"
                                        v-model="newItem.module.children_under_2"
                                    >
                                    </b-form-input>
                                    <button @click="incrementItem('children_under_2')" class="btn plus text-center"
                                            type="button">+
                                    </button>
                                </div>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div v-if="newItem.order_type=='Отель'">

                </div>
                <div class="row w-100 mx-auto mb-5">
                    <div class="col-6 col-md-6 contact-btn">
                        <b-button @click="back" class="btn btn-primary" style="width: 100%">
                            Отмена
                        </b-button>
                    </div>
                    <div class="col-6 col-md-6 contact-btn">
                        <b-button :disabled="invalid||loading" @click="saveOrder" class="btn btn-primary" style="width: 100%" type="submit">
                            <div class="row align-items-center justify-content-center m-auto w-100 h-100 text-center">
                                <span aria-hidden="true" class="spinner-border spinner-border-sm mx-2" role="status" v-if="loading"></span>
                                <span class="sr-only" v-if="loading">Loading...</span>
                                Сохранить
                            </div>
                        </b-button>
                    </div>
                </div>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
    import * as lang from "vuejs-datepicker/dist/locale";
    import {mask} from "vue-the-mask";

    export default {
        name: "Create",
        data: () => ({
            newItem: {
                name: '',
                phone: '',
                order_type: '',
                module: null
            },
            start: new Date(),
            end: new Date((new Date).setDate((new Date).getDate() + 1)),
            nights: [],
            order_types: ['Тур', 'Авиабилеты', 'Отель'],
            depart_countries: ['Украина', 'Россия'],
            loading: false,
            options: [],
            classes: ['Эконом класс', 'Бизнес класс'],
            languages: lang,
            disabledDates1: {
                to: new Date(new Date().setDate(new Date().getDate() - 1)),
            },
            disabledDates2: {
                to: new Date(new Date().setDate(new Date().getDate() - 1)),
            },
        }),
        mounted() {
            if (this.countries.length === 0) {
                this.$store.dispatch('getCountries', {town_id: 0});
            }
            for (var i = 1; i < 31; i++) {
                this.nights.push(i);
            }
        },
        computed: {
            isAdmin: function () {
                return this.$store.getters.isAdmin
            },
            isManager: function () {
                return this.$store.getters.isManager
            },
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
                if (this.isAdmin) {
                    this.$router.push('/admin/orders')
                }
                if (this.isManager) {
                    this.$router.push('/manager/orders')
                }
            },
            saveOrder: function () {
                this.loading = true;
                this.$store.dispatch('newModuleOrder', this.newItem)
                    .then(response => {
                        this.sendMessage('Заказ успешно добавлен');
                        this.loading = false;
                        this.newItem = {
                            name: '',
                            phone: '',
                            order_type: '',
                            module: null
                        };
                    });
                this.loading = false;
            },
            changeOrderType() {
                if (this.newItem.order_type == 'Тур') {
                    this.newItem.module = {
                        name: '',
                        phone: '',
                        country: 'Россия',
                        resort_country: {},
                        resorts: [{Name: 'Любой'}],
                        hotels: [{Name: 'Любой'}],
                        meal: 'Любое',
                        price_from: 0,
                        price_to: 0,
                        adults: 1,
                        children: 0,
                        tour_operators: [{Name: 'Любой'}],
                        // date_range: {start: new Date(), end: new Date((new Date).setDate((new Date).getDate() + 1))},
                        nights_from: 1,
                        nights_to: 10,
                    }
                }
                if (this.newItem.order_type == 'Авиабилеты') {
                    this.newItem.module = {
                        name: '',
                        phone: '',
                        city_from: null,
                        city_to: null,
                        adults: 1,
                        children_under_12: 0,
                        children_under_2: 0,
                        depart_date: new Date(),
                        return_date: null,
                        is_multi_city: false,
                        routes: [],
                        avia_class: 'Эконом класс'
                    }
                }
                if (this.newItem.order_type == 'Отель') {

                }

            },
            whateverResort(actionName) {
                if (actionName.Name == 'Любой') {
                    this.$store.dispatch('getHotels', {country_id: this.resort_country.Id, town_id: '0', star_id: '0'});
                }
            },
            chooseNewResortCountry() {
                this.newItem.module.resorts = [];
                this.newItem.module.hotels = [];

                this.$store.dispatch('getCities', this.newItem.module.resort_country.Id);
                this.$store.dispatch('getHotels', {
                    country_id: this.newItem.module.resort_country.Id,
                    town_id: '0',
                    star_id: '0'
                });
                this.$store.dispatch('getTourOperators', {
                    city_id: '832',
                    country_id: this.newItem.module.resort_country.Id
                });
                this.$store.dispatch('getTourDates', {
                    city_id: '832',
                    country_id: this.newItem.module.resort_country.Id
                });

            },
            chooseNewResorts(value) {
                this.newItem.module.resorts = value;
                if (this.newItem.module.resorts.length > 0) {
                    if (value[this.newItem.module.resorts.length - 1].Name === 'Любой') {
                        this.newItem.module.resorts = [{Name: 'Любой'}];
                    } else {
                        this.newItem.module.resorts = this.newItem.module.resorts.filter(item => {
                            if (item.Name !== 'Любой') {
                                return true;
                            }
                        });

                        var town_id = '';
                        this.newItem.module.resorts.forEach(item => {
                                town_id += '' + item.Id + ',';
                            }
                        );
                        town_id = town_id.slice(0, -1);
                        //поиск отелей по городам-курортам
                        this.$store.dispatch('getHotels', {
                            country_id: this.newItem.module.resort_country.Id,
                            town_id: town_id,
                            star_id: '0'
                        }).then(() => {
                            // фильтруем выбранные отели по городам курортам
                            this.newItem.module.hotels = this.newItem.module.hotels.filter(item => {
                                if (this.hotels.findIndex(i => i.Id == item.Id) !== -1) {
                                    return true;
                                }
                            });
                        });
                    }
                }

            },
            chooseNewHotel(value) {
                this.newItem.module.hotels = value;
                if (value[this.newItem.module.hotels.length - 1].Name === 'Любой') {
                    this.newItem.module.hotels = [{Name: 'Любой'}];
                } else {
                    this.newItem.module.hotels = this.newItem.module.hotels.filter(item => {
                        if (item.Name !== 'Любой') {
                            return true
                        }
                    })
                }
            },
            chooseNewTourOperator(value) {
                this.newItem.module.tour_operators = value;

                if (value[this.newItem.module.tour_operators.length - 1].Name === 'Любой') {
                    this.newItem.module.tour_operators = [{Name: 'Любой'}];
                } else {
                    this.newItem.module.tour_operators = this.newItem.module.tour_operators.filter(item => {
                        if (item.Name !== 'Любой') {
                            return true
                        }
                    })
                }
            },
            removeNewResort(removedOption, id) {
                if (removedOption.Name != 'Любой') {
                    if (this.newItem.module.resorts.length == 1) {
                        this.newItem.module.resorts.push({Name: 'Любой'});

                        this.$store.dispatch('getHotels', {
                            country_id: this.newItem.module.resort_country.Id,
                            town_id: '0',
                            star_id: '0'
                        });
                    }
                } else {
                    this.newItem.module.resorts.push({Name: 'Любой'});
                }
            },
            removeNewHotels(removedOption, id) {
                if (removedOption.Name != 'Любой') {
                    if (this.newItem.module.hotels.length == 1) {
                        this.newItem.module.hotels.push({Name: 'Любой'});
                    }
                } else {
                    this.newItem.module.hotels.push({Name: 'Любой'});
                }
            },
            removeNewTourOperators(removedOption, id) {
                if (removedOption.Name != 'Любой') {
                    if (this.newItem.module.tour_operators.length == 1) {
                        this.newItem.module.tour_operators.push({Name: 'Любой'});
                    }
                } else {
                    this.newItem.module.tour_operators.push({Name: 'Любой'});
                }
            },
            changeNewDateRange(date_object) {
                this.newItem.module.date_range = date_object;
            },
            changeEditDateRange(date_object) {
                this.newItem.module.date_range = date_object;
            },

            getAviaCities(term) {
                if (term.length > 1) {
                    this.$store.dispatch('getAviaCities', term).then(() => {
                        this.options = this.aviaCities;
                    })
                }
            },
            changeCityFrom(value) {
                this.newItem.module.city_from = value;
            },
            changeCityTo(value) {
                this.newItem.module.city_to = value;
            },
            toggleAviaCities() {
                var tempCity = this.newItem.module.city_to;
                this.newItem.module.city_to = this.newItem.module.city_from;
                this.newItem.module.city_from = tempCity;
            },
            changeDepartDate() {
                if (this.newItem.module.return_date != null) {
                    var date1 = new Date(this.newItem.module.depart_date);
                    var date2 = new Date(this.newItem.module.return_date);

                    if (date1 > date2) {
                        var return_date = this.newItem.module.depart_date;
                        this.newItem.module.return_date = return_date;
                        this.disabledDates2.to = this.newItem.module.depart_date;
                    }
                }
            },
            incrementItem(item) {
                this.newItem.module[item] = this.newItem.module[item] + 1;
            },
            decrementItem(item) {
                this.newItem.module[item] = this.newItem.module[item] - 1;
            },
            changeClass(value) {
                this.newItem.module.avia_class = value
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
    @media only screen and (max-width: 767.98px) {
        .vdp-container:not(.desktop) .vdp-picker {
            width: 100% !important;
            padding: 8px
        }

        .tour-module .cont .row {
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
        z-index: 2 !important;
        padding: 18px !important;
        background: #fff;
        width: 300px;
        border: 1px solid #ccc;
    }

    .vdp-datepicker input {
        /*min-width: 300px;*/
        padding: 8px;
        border: 1px solid #ffa500 !important;
        color: #062348 !important;
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

    .vdp-datepicker__calendar .day-header {
        color: #062348;
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
    }

    .vdp-datepicker__clear-button {
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

    .vdp-datepicker__calendar .day {
        background-image: none !important;
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

    .vdp-calendar .calendar-date .week .day.end-date::after {
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
        font-weight: 900 !important;
    }

    .vdp-calendar-footer .reset {
        color: #062348 !important;
    }

    .vdp-calendar-footer .confirm {
        color: #ffa500 !important;
    }

    .vdp-calendar .calendar-week-item, .vdp-calendar .calendar-month-title {
        color: #062348 !important;
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
    }

    .values__hotel-rating::after {
        content: '';
        display: inline-block;
        margin-left: 2px;
        width: 13px;
        height: 12px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);
        background-repeat: no-repeat;
        background-position: center;
    }

    .multiselect__tags .price {
        color: #062348;
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
    }

    .multiselect__tags .price:focus {
        outline: none !important;
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
        color: #fff;
    }

    .multiselect__tag-icon:focus, .multiselect__tag-icon:hover {
        background: #f08b23;
    }

    .multiselect__option--highlight::after {
        background: #f08b23;
    }

    .multiselect__option--highlight {
        background: #f08b23;
    }

    .multiselect {
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

    .multiselect__spinner {
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
        color: #0f213d !important;
    }

    .qty button {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: pointer;
        display: inline-block;
        vertical-align: top;
        color: white;
        width: 30px;
        height: 30px;
        font: 30px/1 Arial, sans-serif;
        text-align: center;
        border-radius: 50%;
        padding: 0;
        background: #f08b23;
        border: 0;
    }

    .qty div {
        text-align: center;
    }

    .qty .minus:hover {
        background: #0f213d !important;
        color: white;
    }

    .qty .plus:hover {
        background: #0f213d !important;
        color: white;
    }

    .qty input {
        border: 0;
        width: 60%;
    }

    .qty input::-webkit-outer-spin-button,
    .qty input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .qty input:disabled {
        background-color: white;
    }
</style>
<style>
    @media only screen and (max-width: 767.98px) {
        .vhd-container:not(.desktop) .vhd-picker {
            width: 100% !important;
            padding: 8px
        }

        .tour-module .cont .row {
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
        z-index: 2 !important;
        min-height: 362px !important;
        padding: 18px !important;
    }

    .vhd-input {
        /*min-width: 300px;*/
        padding: 8px;
        border: 1px solid #ffa500 !important;
        color: #062348 !important;
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

    .vhd-calendar .calendar-date .week .day {
        background-image: none !important;
        height: 30px !important;
    }

    .vhd-calendar-header {
        height: 20px !important;
    }

    .vhd-container:not(.desktop) .vhd-calendar-header {
        height: 60px !important;
    }

    .vhd-container:not(.desktop) .vhd-calendar-header > .info {
        display: block;
        width: 100%;
        height: 60px;
        padding-top: 32px !important;
    }

    .vhd-container:not(.desktop) .vhd-calendar-footer {
        height: 36px !important;
    }

    .vhd-calendar-footer {
        height: 24px !important;
    }

    .vhd-calendar .calendar-date .week {
        height: 30px !important;
    }

    .vhd-calendar .calendar-date .week .day.start-date::before {
        background-color: #ffa500 !important;
    }

    .vhd-calendar .calendar-date .week .day.end-date::after {
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
        font-weight: 900 !important;
    }

    .vhd-calendar-footer .reset {
        color: #062348 !important;
    }

    .vhd-calendar-footer .confirm {
        color: #ffa500 !important;
    }

    .vhd-calendar .calendar-week-item, .vhd-calendar .calendar-month-title {
        color: #062348 !important;
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
    }

    .values__hotel-rating::after {
        content: '';
        display: inline-block;
        margin-left: 2px;
        width: 13px;
        height: 12px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);
        background-repeat: no-repeat;
        background-position: center;
    }

    .multiselect__tags .price {
        color: #062348;
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
    }

    .multiselect__tags .price:focus {
        outline: none !important;
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
        color: #fff;
    }

    .multiselect__tag-icon:focus, .multiselect__tag-icon:hover {
        background: #f08b23;
    }

    .multiselect__option--highlight::after {
        background: #f08b23;
    }

    .multiselect__option--highlight {
        background: #f08b23;
    }

    .multiselect {
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

    .multiselect__spinner {
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
        color: #0f213d !important;
    }

    .qty button {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: pointer;
        display: inline-block;
        vertical-align: top;
        color: white;
        width: 30px;
        height: 30px;
        font: 30px/1 Arial, sans-serif;
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

    .qty .minus:hover {
        background: #0f213d !important;
        color: white;
    }

    .qty .plus:hover {
        background: #0f213d !important;
        color: white;
    }

    .qty input {
        border: 0;
        width: 60%;
    }

    .qty input::-webkit-outer-spin-button,
    .qty input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .qty input:disabled {
        background-color: white;
    }
</style>
