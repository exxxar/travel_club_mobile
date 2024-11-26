<template>
    <div>
        <div id="client" class="row m-auto mb-4 justify-content-center align-items-center" style="width: 100%;height: 100%;">
            <modal :id="'editModalBox'" :title="'Редактировать'">
                <template slot="body">
                    <div class="row">
                        <div class="col-12 col-md-6 pe-md-1">
                            <label class="control-label">Имя</label>
                            <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                <input type="text" class="multiselect__input price" v-model="editItem.name" placeholder="Имя" required>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 ps-md-1">
                            <label class="control-label">Телефон</label>
                            <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                <input type="text" class=" multiselect__input price"
                                       v-model="editItem.phone"
                                       v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                       placeholder="Номер телефона"
                                       required
                                >
                            </div>
                        </div>
                    </div>
                    <div v-if="editItem.order_type=='Тур'">
                        <div class="row">
<!--                            <div class="col-md-6 pe-md-1">-->
<!--                                <label class="control-label">Имя</label>-->
<!--                                <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">-->
<!--                                    <input type="text" class="multiselect__input price" v-model="editItem.name" placeholder="Имя" required>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-md-6 ps-md-1">-->
<!--                                <label class="control-label">Телефон</label>-->
<!--                                <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">-->
<!--                                    <input type="text" class=" multiselect__input price"-->
<!--                                           v-model="editItem.phone"-->
<!--                                           pattern="[\+]\d{2} [\(]\d{3}[\)] \d{3}[\-]\d{2}[\-]\d{2}"-->
<!--                                           maxlength="19"-->
<!--                                           v-mask="['+38 (###) ###-##-##']"-->
<!--                                           placeholder="Номер телефона"-->
<!--                                           required-->
<!--                                    >-->
<!--                                </div>-->
<!--                            </div>-->
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
                                            @update="changeEditDateRange"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                    <label class="control-label">Взрослые</label>
                                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;">
                                        <button type="button" class="minus text-center " :disabled="editItem.module.adults===0"
                                                @click="decrementAdults(editItem)">-
                                        </button>
                                        <input type="number" class="count" name="qty" v-model="editItem.module.adults" step="1" min="1">
                                        <button type="button" class=" plus text-center"
                                                @click="incrementAdults(editItem)">+
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                    <label class="control-label">Дети</label>
                                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;">
                                        <button type="button" class="minus text-center " :disabled="editItem.module.children===0"
                                                @click="decrementChildren(editItem)">-
                                        </button>
                                        <input type="number" class="count" name="qty" v-model="editItem.module.children" step="1" min="0" >
                                        <button type="button" class="plus text-center"
                                                @click="incrementChildren(editItem)">+
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                    <label class="control-label">Цена от</label>
                                    <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                        <input type="number" class="multiselect__input price" v-model="editItem.module.price_from" step="1" min="0" >
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                    <label class="control-label">Цена до</label>
                                    <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                        <input type="number" class=" multiselect__input price" v-model="editItem.module.price_to" step="1" min="0">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                    <label class="control-label">Ночей от</label>
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
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                    <label class="control-label">До</label>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="editItem.order_type=='Авиабилеты'">
                        <avia-form :module="editItem.module" :type="'orders'"></avia-form>
                    </div>
                    <div v-if="editItem.order_type=='Отель'">

                    </div>
                    <div class="row mt-5">
                        <div class=" col-md-12 contact-btn">
                            <button type="submit" class="btn btn-primary" style="width: 100%" @click="updateOrder">Сохранить</button>
                        </div>
                    </div>
                </template>
            </modal>
            <modal :id="'newOrderModalBox'" :title="'Создать заказ'">
                <template slot="body">
                    <div class="row">
                        <div class="col-md-6 pe-md-1">
                            <label class="control-label">Имя</label>
                            <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                <input type="text" class="multiselect__input price " v-model="newItem.name" placeholder="Имя" required>
                            </div>
                        </div>
                        <div class="col-md-6 ps-md-1">
                            <label class="control-label">Телефон</label>
                            <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                <input type="text" class=" multiselect__input price "
                                       v-model="newItem.phone"
                                       v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                       placeholder="Номер телефона"
                                       required
                                >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <label class="control-label">Тип заказа</label>
                            <multiselect
                                v-model="newItem.order_type"
                                :options="order_types"
                                :option-height="25"
                                placeholder="Тип заказа"
                                :show-labels="false"
                                :maxHeight="200"
                                :allow-empty="false"
                                :searchable="false"
                                @input="changeOrderType"
                            >
                            </multiselect>
                        </div>
                    </div>
                    <div v-if="newItem.order_type=='Тур'">
                        <div class="row">
                            <div class="col-md-12">
                                <label class="control-label">Страна отправления</label>
                                <multiselect
                                    v-model="newItem.module.country"
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
                                    v-model="newItem.module.resort_country"
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
                                    @input="chooseNewResortCountry"
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
                            <div class="col-md-12">
                                <label class="control-label">Курорт</label>
                                <multiselect
                                    :value="newItem.module.resorts"
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
                                    @input="chooseNewResorts"
                                    @select="whateverResort"
                                    @remove="removeNewResort"
                                    :preselectFirst="true"
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
                            </div>
                            <div class="col-md-12">
                                <label class="control-label">Выбор отеля</label>
                                <multiselect
                                    :value="newItem.module.hotels"
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
                                    @input="chooseNewHotel"
                                    @remove="removeNewHotels"
                                    :preselectFirst="true"
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
                            </div>
                            <div class="col-md-12">
                                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                    <label class="control-label">Туроператоры</label>
                                    <multiselect
                                        v-model="newItem.module.tour_operators"
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
                                        @input="chooseNewTourOperator"
                                        @remove="removeNewTourOperators"
                                        :preselectFirst="true"
                                    >
                                        <template slot="limit" ><span class="multiselect__single"> и ещё {{ newItem.module.tour_operators-2 }} {{newItem.module.tour_operators-2 | pluralizeTourOperators}}</span></template>
                                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeTourOperators}} {{values.length | pluralizeChoose}}</span></template>
                                    </multiselect>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                    <label class="control-label">Интервал дат вылета</label>
                                    <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
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
                                            @update="changeNewDateRange"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                    <label class="control-label">Взрослые</label>
                                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                        <button type="button" class="minus text-center " :disabled="newItem.module.adults===1"
                                                @click="decrementAdults()">-
                                        </button>
                                        <input type="number" class="count" name="qty" v-model="newItem.module.adults" step="1" min="1">
                                        <button type="button" class="plus text-center"
                                                @click="incrementAdults()">+
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                    <label class="control-label">Дети</label>
                                    <div class="row qty align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                        <button type="button" class="minus text-center " :disabled="newItem.module.children===0"
                                                @click="decrementChildren()">-
                                        </button>
                                        <input type="number" class="count" name="qty" v-model="newItem.module.children" step="1" min="0" >
                                        <button type="button" class="plus text-center"
                                                @click="incrementChildren()">+
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                                    <label class="control-label">Цена от</label>
                                    <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                        <input type="number" class="multiselect__input price" v-model="newItem.module.price_from" step="1" min="0" >
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                                    <label class="control-label">Цена до</label>
                                    <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                        <input type="number" class=" multiselect__input price" v-model="newItem.module.price_to" step="1" min="0">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                    <label class="control-label">Ночей от</label>
                                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                                        <multiselect
                                            v-model="newItem.module.nights_from"
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
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                    <label class="control-label">До</label>
                                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                                        <multiselect
                                            v-model="newItem.module.nights_to"
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="newItem.order_type=='Авиабилеты'">
                        <avia-form :module="newItem.module" :type="'orders'"></avia-form>
                    </div>
                    <div v-if="newItem.order_type=='Отель'">

                    </div>
                    <div class="row mt-5">
                        <div class=" col-md-12 contact-btn">
                            <button type="submit" class="btn btn-primary" style="width: 100%" @click="saveOrder">Сохранить</button>
                        </div>
                    </div>
                </template>
            </modal>
            <data-table
                title="Заказы"
                :columns="columns"
                :rows="moduleOrders"
                :clickable="true"
                :perPage="[ 5, 10, 25, 50 ]"
                :expandMode="true"
                :tagBackgrounds="tags"
                :addButton="true"
                :addButtonClick="addOrder"
                :loadingAnimation="load"
            >
                <th slot="thead-tr" style="width: auto">
                    Действия
                </th>
                <template slot="tbody-tr" slot-scope="props">
                    <td data-title="Действия">
                        <button class="btn waves-effect" style="outline: none;"
                                @click="deleteOrder(props.row)"
                        >
                            <i class="material-icons" style="color: #0d274b;">delete</i>
                        </button>
                        <button class="btn waves-effect" style="outline: none;" data-bs-toggle="modal" data-bs-target="#editModalBox"
                                @click="editOrder(props.row)"
                        >
                            <i class="material-icons" style="color: #0d274b;" >edit</i>
                        </button>
                    </td>
                </template>
                <template slot="expand-panel" slot-scope="props">
                    <div v-if="props.row.order_type === 'Тур'" style="width: 100%; height: 100%">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%">
                            <div class="col-md-6 col-sm-12 mx-auto">
                                <div class="list-group">
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Страна отправления</label>
                                        </div>
                                        <p class="mb-1">{{props.row.expand.module.country}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Страна назначения</label>
                                        </div>
                                        <p class="mb-1">{{props.row.expand.module.resort_country.Name}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Курорт(ы)</label>
                                        </div>
                                        <p class="mb-1">
                                            <span v-for="resort in props.row.expand.module.resorts">
                                                {{resort.Name}},
                                            </span>
                                        </p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Отель(и)</label>
                                        </div>
                                        <p class="mb-1">
                                            <span v-for="hotel in props.row.expand.module.hotels">
                                                {{hotel.Name}},
                                            </span>
                                        </p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Туроператор(ы)</label>
                                        </div>
                                        <p class="mb-1">
                                            <span v-for="tour_operator in props.row.expand.module.tour_operators">
                                                {{tour_operator.Name}},
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 mx-auto">
                                <div class="list-group">
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Интервал дат вылета</label>
                                        </div>
                                        <p class="mb-1">{{ props.row.expand.module.date_range.start}} - {{ props.row.expand.module.date_range.end}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Цена</label>
                                        </div>
                                        <p class="mb-1">От: {{ props.row.expand.module.price_from}} - До: {{ props.row.expand.module.price_to}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Ночей</label>
                                        </div>
                                        <p class="mb-1">От: {{ props.row.expand.module.nights_from}} - До: {{ props.row.expand.module.nights_to}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Взрослые</label>
                                        </div>
                                        <p class="mb-1">{{ props.row.expand.module.adults}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Дети</label>
                                        </div>
                                        <p class="mb-1">{{ props.row.expand.module.children}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="props.row.order_type === 'Авиабилеты'" style="width: 100%; height: 100%">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%">
                            <div class="col-md-6 col-sm-12 mx-auto">
                                <div class="list-group">
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Город вылета</label>
                                        </div>
                                        <p class="mb-1">{{props.row.expand.module.city_from.name}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Город прибытия</label>
                                        </div>
                                        <p class="mb-1">{{props.row.expand.module.city_to.name}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Туда</label>
                                        </div>
                                        <p class="mb-1">{{props.row.expand.module.depart_date | moment('DD.MM.YYYY')}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Обратно</label>
                                        </div>
                                        <p class="mb-1">{{props.row.expand.module.return_date | moment('DD.MM.YYYY')}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 mx-auto">
                                <div class="list-group">
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Класс</label>
                                        </div>
                                        <p class="mb-1">{{ props.row.expand.module.avia_class}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Взрослые</label>
                                        </div>
                                        <p class="mb-1">{{ props.row.expand.module.adults}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Дети до 2 лет</label>
                                        </div>
                                        <p class="mb-1">{{ props.row.expand.module.children_under_2}}</p>
                                    </div>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <div class="d-flex w-100 justify-content-between">
                                            <label class="mb-1 control-label" style="color: #f08b23">Дети до 12 лет</label>
                                        </div>
                                        <p class="mb-1">{{ props.row.expand.module.children_under_12}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="props.row.order_type === 'Отель'">
                        <p>Дополнительная информация отсутствует</p>
                    </div>
                </template>
            </data-table>
        </div>
    </div>
</template>

<script>
    import {mask} from 'vue-the-mask'
    import AviaForm from "../../components/AviaForm";
    export default {
        name: "Orders",
        components: {AviaForm},
        data: () => ({
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                },
                {
                    label: 'Дата',
                    field: 'created_at',
                },
                {
                    label: 'Имя',
                    field: 'name',
                },
                {
                    label: 'Телефон',
                    field: 'phone',
                },
                {
                    label: 'Тип сообщения',
                    field: 'order_type',
                    tagged: true
                },
            ],
            // customButtons:[
            //     {
            //         hide: false, // Whether to hide the button
            //         icon: "plus", // Materialize icon
            //         onclick: this.addOrder() // Click handler
            //     }
            // ],
            tags: [
                {tag:'Тур', style:'background:blue; color:white;'},
                {tag:'Авиабилеты', style:'background:green; color:white;'},
                // {tag:'Отель', style:'background:red; color:white;'},
            ],
            newItem: {
                name: '',
                phone: '',
                order_type: null,
                module: {}
            },
            editItem: {},
            start:new Date(),
            end: new Date((new Date).setDate((new Date).getDate() + 1)),
            // edit_start:new Date(),
            // edit_end: new Date((new Date).setDate((new Date).getDate() + 1)),
            nights:[],
            order_types: ['Тур', 'Авиабилеты', 'Отель'],
            depart_countries:['Украина', 'Россия'],
            load: true,
        }),
        created() {
            if (this.moduleOrders.length===0) {
                this.$store.dispatch('setModuleOrders').then(() => {
                this.load = false;
                })
            }
            else{
                this.load = false;
            }
            if (this.countries.length===0) {
                this.$store.dispatch('getCountries', {town_id:0});
            }
            for (var i = 1; i < 31; i++) {
                this.nights.push(i);
            }

        },
        mounted() {

        },
        computed:
        {
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
            addOrder: function(){
                this.$store.dispatch('openModal', '#newOrderModalBox')
            },
            saveOrder: function(){
                this.$store.dispatch('newModuleOrder', this.newItem)
                    .then(response => {
                        this.sendMessage('Заказ успешно добавлен')

                        this.newItem={};
                    });
                this.$store.dispatch('closeModal', '#newOrderModalBox');
            },
            deleteOrder(row) {
                this.$store.dispatch('deleteModuleOrder', row.id)
                    .then(response => {
                        row.isLoading = false;
                        this.sendMessage('Заказ успешно удалён');
                    });
            },
            editOrder(row) {
                this.editItem = row;
                this.editItem.module.start = new Date(this.editItem.module.date_range.start);
                this.editItem.module.end = new Date(this.editItem.module.date_range.end);
                // this.edit_start = new Date(this.editItem.module.date_range.start);
                // this.edit_end = new Date(this.editItem.module.date_range.end);
                // this.sendMessage('Заказ успешно изменён')
            },
            updateOrder() {
                // this.editItem;
                this.$store.dispatch('updateModuleOrder', this.editItem)
                    .then(response => {
                        this.sendMessage('Заказ успешно обновлён');
                        this.editItem={};
                        this.$store.dispatch('closeModal', '#editModalBox');
                    });

                // this.sendMessage('Заказ успешно coxранён');
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от ВПУТЬ',
                    text: message
                });
            },
            changeOrderType() {
                if(this.newItem.order_type == 'Тур')
                {
                    this.newItem.module = {
                        name:'',
                        phone:'',
                        country: 'Россия',
                        resort_country: {},
                        resorts:  [{Name:'Любой'}],
                        hotels:  [{Name:'Любой'}],
                        meal: 'Любое',
                        price_from:  0,
                        price_to:  0,
                        adults: 1,
                        children: 0,
                        tour_operators: [{Name:'Любой'}],
                        // date_range: {start: new Date(), end: new Date((new Date).setDate((new Date).getDate() + 1))},
                        nights_from: 1,
                        nights_to: 10,
                    }
                }
                if(this.newItem.order_type == 'Авиабилеты')
                {
                    this.newItem.module = {
                        name:'',
                        phone:'',
                        city_from: null,
                        city_to: null,
                        adults: 1,
                        children_under_12: 0,
                        children_under_2: 0,
                        depart_date:new Date(),
                        return_date:null,
                        is_multi_city:false,
                        routes:[],
                        avia_class:'Эконом класс'
                    }
                }
                if(this.newItem.order_type == 'Отель')
                {

                }

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



            chooseNewResortCountry() {
                this.newItem.module.resorts=[];
                this.newItem.module.hotels=[];

                this.$store.dispatch('getCities', this.newItem.module.resort_country.Id);
                this.$store.dispatch('getHotels', {country_id:this.newItem.module.resort_country.Id, town_id:'', star_id:''});
                this.$store.dispatch('getTourOperators', {city_id:'832', country_id:this.newItem.module.resort_country.Id});
                this.$store.dispatch('getTourDates', {city_id:'832', country_id:this.newItem.module.resort_country.Id});

            },
            chooseNewResorts(value) {
                this.newItem.module.resorts = value;
                if(this.newItem.module.resorts.length>0){
                    if (value[this.newItem.module.resorts.length-1].Name==='Любой')
                    {
                        this.newItem.module.resorts=[{Name: 'Любой'}];
                    }
                    else {
                        this.newItem.module.resorts = this.newItem.module.resorts.filter(item=>{
                            if(item.Name !== 'Любой')
                            {
                                return true;
                            }
                        });

                        var town_id = '';
                        this.newItem.module.resorts.forEach(item =>
                            {
                                town_id += ''+item.Id+',';
                            }
                        );
                        town_id = town_id.slice(0, -1);
                        //поиск отелей по городам-курортам
                        this.$store.dispatch('getHotels', {country_id:this.newItem.module.resort_country.Id, town_id:town_id, star_id:''}).then(() => {
                            // фильтруем выбранные отели по городам курортам
                            this.newItem.module.hotels = this.newItem.module.hotels.filter( item =>
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
            chooseNewHotel(value) {
                this.newItem.module.hotels = value;
                if (value[this.newItem.module.hotels.length-1].Name==='Любой')
                {
                    this.newItem.module.hotels=[{Name: 'Любой'}];
                }
                else {
                    this.newItem.module.hotels = this.newItem.module.hotels.filter(item=>{
                        if(item.Name !== 'Любой')
                        {
                            return true
                        }
                    })
                }
            },
            chooseNewTourOperator(value) {
                this.newItem.module.tour_operators = value;

                if (value[this.newItem.module.tour_operators.length-1].Name==='Любой') {
                    this.newItem.module.tour_operators=[{Name: 'Любой'}];
                }
                else {
                    this.newItem.module.tour_operators = this.newItem.module.tour_operators.filter(item=>{
                        if(item.Name !== 'Любой')
                        {
                            return true
                        }
                    })
                }
            },
            removeNewResort(removedOption, id){
                if (removedOption.Name!='Любой') {
                    if (this.newItem.module.resorts.length == 1) {
                        this.newItem.module.resorts.push({Name: 'Любой'});

                        this.$store.dispatch('getHotels', {country_id:this.newItem.module.resort_country.Id, town_id:'', star_id:''});
                    }
                }
                else {
                    this.newItem.module.resorts.push({Name: 'Любой'});
                }
            },
            removeNewHotels(removedOption, id){
                if (removedOption.Name!='Любой') {
                    if (this.newItem.module.hotels.length == 1) {
                        this.newItem.module.hotels.push({Name: 'Любой'});
                    }
                }
                else {
                    this.newItem.module.hotels.push({Name: 'Любой'});
                }
            },
            removeNewTourOperators(removedOption, id){
                if (removedOption.Name!='Любой') {
                    if (this.newItem.module.tour_operators.length == 1) {
                        this.newItem.module.tour_operators.push({Name: 'Любой'});
                    }
                }
                else {
                    this.newItem.module.tour_operators.push({Name: 'Любой'});
                }
            },


            incrementAdults(item) {
                item.module.adults++;
            },
            decrementAdults(item) {
                item.module.adults--;
            },
            incrementChildren(item) {
                item.module.children++;
            },
            decrementChildren(item) {
                item.module.children--;
            },
            changeNewDateRange(date_object) {
                this.newItem.module.date_range=date_object;
            },
            changeEditDateRange(date_object) {
                this.editItem.module.date_range=date_object;
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
