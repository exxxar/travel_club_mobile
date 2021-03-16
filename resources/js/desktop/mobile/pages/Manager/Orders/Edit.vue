<template>
    <div class="modal fade modalbox show"
         id="editModalBox" data-backdrop="static"
         tabindex="-1" role="dialog"
         aria-modal="true"
         v-if="editItem!=null || editItem!=undefined"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Редактировать</h5>
                    <a href="javascript:;" data-dismiss="modal" style="text-decoration: none">Закрыть</a>
                </div>
                <div class="modal-body">
                    <div class="start-form" style="margin-bottom: 110px">
                        <div class="section mx-auto">
                            <ValidationObserver v-slot="{ invalid }">
                                <div class="row w-100 m-auto">
                                    <div class="col-md-6 pr-md-1">
                                        <label class="control-label">Имя</label>
                                        <ValidationProvider name="name" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                            <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                <input type="text" class="multiselect__input price" v-model="editItem.name" placeholder="Имя" required>
                                            </div>
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-6 pl-md-1">
                                        <label class="control-label">Телефон</label>
                                        <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;text-align: center;">
                                            <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                <input type="text" class=" multiselect__input price"
                                                       v-model="editItem.phone"
                                                       v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                                       placeholder="Номер телефона"
                                                       required
                                                >
                                            </div>
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="row w-100 m-auto" v-if="editItem.order_type=='Тур'">
                                    <div class="col-md-12">
                                        <label class="control-label">Страна отправления</label>
                                        <multiselect
                                            v-model="editItem.module.country"
                                            :options="depart_countries"
                                            :option-height="25"
                                            placeholder="Выберете страну отправления"
                                            :show-labels="false"
                                            :maxHeight="200"
                                            :allow-empty="false"
                                        >
                                        </multiselect>
                                    </div>
                                    <div class="col-md-12">
                                        <label class="control-label">Куда</label>
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
                                            :disabled="isCountriesLoading"
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
                                    </div>
                                    <div class="col-md-12">
                                        <label class="control-label">Курорт</label>
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
                                            :disabled="isCountriesLoading || isCitiesLoading"
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
                                    </div>
                                    <div class="col-md-12">
                                        <label class="control-label">Выбор отеля</label>
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
                                            :disabled="isCountriesLoading || isHotelsLoading"
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
                                    </div>
                                    <div class="col-md-12">
                                        <label class="control-label">Туроператоры</label>
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
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                            <label class="control-label">Интервал дат вылета</label>
                                            <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                            <label class="control-label">Взрослые</label>
                                            <ValidationProvider name="adults" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;">
                                                    <button type="button" class="minus text-center " :disabled="editItem.module.adults===0"
                                                            @click="decrementItem('adults')">-
                                                    </button>
                                                    <input type="number" class="count" name="qty" v-model="editItem.module.adults" step="1" min="1">
                                                    <button type="button" class=" plus text-center"
                                                            @click="incrementItem('adults')">+
                                                    </button>
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                            <label class="control-label">Дети</label>
                                            <ValidationProvider name="children" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;">
                                                    <button type="button" class="minus text-center " :disabled="editItem.module.children===0"
                                                            @click="decrementItem('children')">-
                                                    </button>
                                                    <input type="number" class="count" name="qty" v-model="editItem.module.children" step="1" min="0">
                                                    <button type="button" class="plus text-center"
                                                            @click="incrementItem('children')">+
                                                    </button>
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                            <label class="control-label">Цена от</label>
                                            <ValidationProvider name="price_from" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                    <input type="number" class="multiselect__input price" v-model="editItem.module.price_from" step="1" min="0" >
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                            <label class="control-label">Цена до</label>
                                            <ValidationProvider name="price_to" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                    <input type="number" class=" multiselect__input price" v-model="editItem.module.price_to" step="1" min="0">
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                            <label class="control-label">Ночей от</label>
                                            <ValidationProvider name="nights_from" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
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
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                            <label class="control-label">До</label>
                                            <ValidationProvider name="nights_to" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
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
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </div>
                                <div class="row w-100 m-auto" v-if="editItem.order_type=='Авиабилеты'">
                                    <div class="col-12">
                                        <label class="control-label">Город вылета</label>
                                        <ValidationProvider name="city_from" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
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
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12">
                                        <label class="control-label">Город прибытия</label>
                                        <ValidationProvider name="city_to" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
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
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12">
                                        <label class="control-label">Туда</label>
                                        <datepicker v-model="editItem.module.depart_date" name="depart_date" @input="changeDepartDate" :language="languages['ru']" :disabled-dates="disabledDates1"></datepicker>
                                    </div>
                                    <div class="col-12">
                                        <label class="control-label">Обратно</label>
                                        <datepicker v-model="editItem.module.return_date" name="return_date" :clear-button="true" :language="languages['ru']" :disabled-dates="disabledDates2"></datepicker>
                                    </div>
                                    <div class="col-12">
                                        <label class="control-label">Класс</label>
                                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
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
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;height: 100%;">
                                            <label class="control-label">Взрослые</label>
                                            <ValidationProvider name="adults" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                                    <button type="button" class="btn minus text-center " :disabled="editItem.module.adults===0"
                                                            @click="decrementItem('adults')">-
                                                    </button>
                                                    <input type="number" class="count" name="qty" v-model="editItem.module.adults" step="1" min="1">
                                                    <button type="button" class="btn plus text-center"
                                                            @click="incrementItem('adults')">+
                                                    </button>
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;height: 100%;">
                                            <label class="control-label">Дети до 12 лет</label>
                                            <ValidationProvider name="children_under_12" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                                    <button type="button" class="btn minus text-center" :disabled="editItem.module.children_under_12===0"
                                                            @click="decrementItem('children_under_12')">-
                                                    </button>
                                                    <input type="number" class="count" name="qty" v-model="editItem.module.children_under_12" step="1" min="0">
                                                    <button type="button" class="btn plus text-center"
                                                            @click="incrementItem('children_under_12')">+
                                                    </button>
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;height: 100%;">
                                            <label class="control-label">Дети до 2 лет</label>
                                            <ValidationProvider name="children_under_2" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                                    <button type="button" class="btn minus text-center " :disabled="editItem.module.children_under_2===0"
                                                            @click="decrementItem('children_under_2')">-
                                                    </button>
                                                    <input type="number" class="count" name="qty" v-model="editItem.module.children_under_2" step="1" min="0">
                                                    <button type="button" class="btn plus text-center"
                                                            @click="incrementItem('children_under_2')">+
                                                    </button>
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="editItem.order_type=='Отель'">
                                </div>
                                <div class="row w-100 m-auto">
                                    <div class="col-12 contact-btn form-button-group">
                                        <button type="submit" class="btn btn-block btn-lg" style="width: 100%" :disabled="invalid||loading" @click="updateOrder">
                                            <div class="row align-items-center justify-content-center m-auto w-100 h-100 text-center">
                                                <span v-if="loading" class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                                                <span v-if="loading" class="sr-only">Loading...</span>
                                                Сохранить
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </ValidationObserver>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mask} from "vue-the-mask";
    import * as lang from "vuejs-datepicker/dist/locale";

    export default {
        name: "Edit",
        props:['editItem'],
        data: () => ({
            editItem: {},
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
        },
        computed: {
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
            updateOrder() {
                this.loading = true;
                this.$store.dispatch('updateModuleOrder', this.editItem)
                    .then(response => {
                        this.sendMessage('Заказ успешно обновлён');
                        this.loading = false;
                        $('#editModalBox').modal('hide');
                    });
                this.loading = false;
                // this.sendMessage('Заказ успешно coxранён');
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
                    this.$store.dispatch('getHotels', {country_id:this.resort_country.Id, town_id:'', star_id:''});
                }
            },
            chooseEditResortCountry() {
                this.editItem.module.resorts=[];
                this.editItem.module.hotels=[];

                this.$store.dispatch('getCities', this.editItem.module.resort_country.Id);
                this.$store.dispatch('getHotels', {country_id:this.editItem.module.resort_country.Id, town_id:'', star_id:''});
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
                        this.$store.dispatch('getHotels', {country_id:this.editItem.module.resort_country.Id, town_id:town_id, star_id:''}).then(() => {
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

                        this.$store.dispatch('getHotels', {country_id:this.editItem.module.resort_country.Id, town_id:'', star_id:''});
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
                this.editItem.module[item]=this.editItem.module[item]++;
            },
            decrementItem(item) {
                this.editItem.module[item]=this.editItem.module[item]--;
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
    .start-form {
        max-width: 500px;
        margin: auto;
        margin-top: auto;
        /*text-align: center;*/
    }
    .section {
        padding: 0 16px;
    }
    .modalbox {
        padding-top: env(safe-area-inset-top);
        overflow: hidden;
    }

    .modalbox .modal-dialog {
        transform: translate(0, 100%) !important;
        min-width: 100%;
        margin: 0;
        transition: 0.5s all !important;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin-top: env(safe-area-inset-top);
    }

    .modalbox .modal-dialog .modal-content {
        border-radius: 0;
        border: 0;
        margin: auto;
        overflow: hidden;
        padding-top: 56px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }

    .modalbox .modal-dialog .modal-content .modal-header {
        border: 0;
        padding: 0;
        min-height: 56px;
        padding: 10px 16px;
        border-radius: 0;
        display: flex;
        border-bottom: 1px solid #E1E1E1;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 100;
        background: #FFF;
    }

    .modalbox .modal-dialog .modal-content .modal-header .modal-title {
        margin: 0;
        color: #063065;
        font-size: 17px;
        font-family: "Open Sans";
        font-weight: 900;
    }
    .modalbox .modal-dialog .modal-content .modal-header a{
        color: #063065;
    }

    .modalbox .modal-dialog .modal-content .modal-body {
        padding: 20px 16px;
        overflow: auto;
    }

    .modalbox.show .modal-dialog {
        transform: translate(0, 0) !important;
    }
    .form-group {
        width: 100%;
    }

    .form-group .label {
        font-size: 12px;
        margin: 0;
        font-weight: 900;
        color: #063065;
        display: block;
        line-height: 1.2em;
        text-align: left;
        font-family: Open Sans;
    }

    .form-group textarea {
        resize: none;
    }

    .form-group .input-info {
        font-size: 11px;
        color: #A1A1A2;
    }

    .form-group .clear-input {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #4F5050;
        height: 38px;
        font-size: 22px;
        position: absolute;
        right: 6px;
        top: 0px;
        bottom: 0;
        width: 32px;
        opacity: 0.5;
    }

    .form-group .clear-input:hover, .form-group .clear-input:active {
        opacity: 0.8;
    }

    .form-group .input-wrapper {
        position: relative;
    }

    .form-group .input-wrapper.not-empty .clear-input {
        display: flex;
    }

    .form-group .input-wrapper.active .label {
        color: #f08b23 !important;
    }

    .form-group.basic {
        padding: 8px 0;
        margin: 0;
    }

    .form-group.basic .form-control,
    .form-group.basic .custom-select {
        background: transparent;
        border: none;
        border-bottom: 1px solid #E1E1E1;
        padding: 0 30px 0 0;
        border-radius: 0;
        height: 40px;
        color: #141515;
        font-size: 15px;
    }

    .form-group.basic .form-control:focus,
    .form-group.basic .custom-select:focus {
        border-bottom-color: #f08b23;
        box-shadow: inset 0 -1px 0 0 #f08b23;
    }

    .form-group.basic textarea.form-control {
        height: auto;
        padding: 7px 40px 7px 0;
    }

    .form-group.basic.animated .label {
        margin-top: 20px;
        opacity: 0;
        top: -3px;
        transition: 0.2s all;
        position: absolute;
    }

    .form-group.basic.animated .input-wrapper {
        padding-top: 5px;
    }

    .form-group.basic.animated .input-wrapper.not-empty .label {
        margin-top: 0;
        opacity: 1;
    }

    .form-button-group {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
        background: #FFF;
        min-height: 84px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: env(safe-area-inset-bottom);
    }
    .form-button-group .btn {
        background: #f08b23;
        color: white;
        text-transform: uppercase;
        font-size: 24px;
        font-family: "Open Sans";
        font-weight: 900;
        border: 0;
        border-radius: 50px;
        outline: none;
    }
    form-button-group .btn:focus {
        outline: none !important;
        box-shadow: none !important;
    }
    .btn.btn-primary {
        color: #fff !important;
        background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);
        background-color: rgba(0, 0, 0, 0);
        background-color: #f08b23 !important;
        border-color: #f08b23 !important;
        box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;
    }
</style>
