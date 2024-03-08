<template>
    <div class="w-100 m-auto">
        <b-row>
            <b-col lg="6" class="my-1">
                <b-form-group
                    label="Сортировка"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    label-for="order_bySelect1"
                    class="mb-0"
                >
                    <b-input-group size="sm">
                        <b-form-select v-model="order_by" id="order_bySelect1" :options="sortOptions" class="w-75">
                            <template v-slot:first>
                                <option value="">-- none --</option>
                            </template>
                        </b-form-select>
                        <b-form-select v-model="sortDesc" size="sm" :disabled="!order_by" class="w-25">
                            <option :value="false">Asc</option>
                            <option :value="true">Desc</option>
                        </b-form-select>
                    </b-input-group>
                </b-form-group>
            </b-col>

            <b-col lg="6" class="my-1">
                <b-form-group
                    label="Поиск"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    label-for="filterInput"
                    class="mb-0"
                >
                    <b-input-group size="sm">
                        <b-form-input
                            v-model="filter"
                            type="search"
                            id="filterInput"
                            placeholder="Введите для поиска"
                        />
                        <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''">Очистить</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </b-col>

            <b-col sm="5" md="6" class="my-1">
                <b-form-group
                    label="На странице"
                    label-cols-sm="6"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label-align-sm="right"
                    label-size="sm"
                    label-for="perPageSelect1"
                    class="mb-0"
                >
                    <b-form-select
                        v-model="perPage"
                        id="perPageSelect1"
                        size="sm"
                        :options="pageOptions"
                    />
                </b-form-group>
            </b-col>

            <b-col sm="7" md="6" class="my-1">
                <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    align="fill"
                    size="sm"
                    class="my-0"
                >
                </b-pagination>
            </b-col>
        </b-row>
        <b-table
            show-empty
            small
            stacked="md"
            :items="tours"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :filterIncludedFields="filterOn"
            :sort-by.sync="order_by"
            :sort-desc.sync="sortDesc"
            :sort-direction="order_direction"
            @filtered="onFiltered"
            :busy="loading"
            empty-text="Нет записей для отображения"
            empty-filtered-text="Нет записей, соответствующих вашему запросу"
        >
            <template v-slot:cell(created_at)="data">
                {{data.item.created_at | moment('DD.MM.YYYY')}}
            </template>
<!--            <template v-slot:cell(TourInfo.date_range)="data">-->
<!--                <b-input-group size="sm">-->
<!--                    <VueHotelDatepicker-->
<!--                        ref="datepickerId"-->
<!--                        :startDate="data.item.TourInfo.start"-->
<!--                        :endDate="data.item.TourInfo.end"-->
<!--                        :placeholder="'Даты тура'"-->
<!--                        :format="'DD/MM/YYYY'"-->
<!--                        :weekList="['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.']"-->
<!--                        :monthList="['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май.', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт', 'Ноя.', 'Дек.']"-->
<!--                        :fromText="'С'"-->
<!--                        :toText="'По'"-->
<!--                        :resetText="'Очистить'"-->
<!--                        :confirmText="'Подтвердить'"-->
<!--                        :mobile="'mobile'"-->
<!--                        class="w-100"-->
<!--                        @update="save($event,data.item.id,'date_range')"-->
<!--                    />-->
<!--                </b-input-group>-->
<!--            </template>-->
<!--            <template v-slot:cell(TourInfo.country)="data">-->
<!--                <b-input-group size="sm">-->
<!--                    <multiselect-->
<!--                        v-model="data.item.TourInfo.country"-->
<!--                        :options="countries"-->
<!--                        :option-height="25"-->
<!--                        placeholder="Выберите страну"-->
<!--                        :show-labels="false"-->
<!--                        :maxHeight="200"-->
<!--                        label="Name"-->
<!--                        track-by="Name"-->
<!--                        :loading="isCountriesLoading"-->
<!--                        :disabled="isCountriesLoading"-->
<!--                        :allow-empty="false"-->
<!--                        @input="save($event,data.item.id,'country')"-->
<!--                    >-->
<!--                        <template slot="singleLabel" slot-scope="props">-->
<!--                            <b :class="'tc-flag-'+props.option.Id"></b>-->
<!--                            <span class="option__desc">-->
<!--                                <span class="option__title">{{ props.option.Name }}</span>-->
<!--                            </span>-->
<!--                        </template>-->
<!--                        <template slot="option" slot-scope="props">-->
<!--                            <b :class="'tc-flag-'+props.option.Id"></b>-->
<!--                            <span class="option__desc">-->
<!--                                <span class="option__title">{{ props.option.Name }}</span>-->
<!--                            </span>-->
<!--                        </template>-->
<!--                    </multiselect>-->
<!--                </b-input-group>-->
<!--            </template>-->
<!--            <template v-slot:cell(TourInfo.resort)="data">-->
<!--                <b-input-group size="sm">-->
<!--                    <multiselect-->
<!--                        :value="data.item.TourInfo.resort"-->
<!--                        :options="cities"-->
<!--                        placeholder="Введите название курорта"-->
<!--                        :show-labels="false"-->
<!--                        :maxHeight="200"-->
<!--                        label="Name"-->
<!--                        track-by="Name"-->
<!--                        :close-on-select="true" :clear-on-select="true"-->
<!--                        :loading="isCountriesLoading || isCitiesLoading"-->
<!--                        :disabled="isCountriesLoading || isCitiesLoading"-->
<!--                        @input="save($event,data.item.id,'resort')"-->
<!--                        :allow-empty="false"-->
<!--                        :preselectFirst="true"-->
<!--                    >-->
<!--                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeResorts }} {{values.length | pluralizeChoose}}</span></template>-->
<!--                    </multiselect>-->
<!--                </b-input-group>-->
<!--            </template>-->
<!--            <template v-slot:cell(TourInfo.price)="data">-->
<!--                <b-input-group size="sm">-->
<!--                    <b-form-input :value="data.item.TourInfo.price"-->
<!--                                  type="number"-->
<!--                                  min="0"-->
<!--                                  @blur="save($event.target.value,data.item.id,'price')"-->
<!--                                  placeholder="Цена"/>-->
<!--                </b-input-group>-->
<!--            </template>-->
<!--            <template v-slot:cell(TourInfo.paid)="data">-->
<!--                <b-input-group size="sm">-->
<!--                    <b-form-input :value="data.item.TourInfo.paid"-->
<!--                                  type="number"-->
<!--                                  min="0"-->
<!--                                  @blur="save($event.target.value,data.item.id,'paid')"-->
<!--                                  placeholder="Выплачено"/>-->
<!--                </b-input-group>-->
<!--            </template>  <template v-slot:cell(TourInfo.date_range)="data">-->
<!--            <b-input-group size="sm">-->
<!--                <VueHotelDatepicker-->
<!--                    ref="datepickerId"-->
<!--                    :startDate="data.item.TourInfo.start"-->
<!--                    :endDate="data.item.TourInfo.end"-->
<!--                    :placeholder="'Даты тура'"-->
<!--                    :format="'DD/MM/YYYY'"-->
<!--                    :weekList="['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.']"-->
<!--                    :monthList="['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май.', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт', 'Ноя.', 'Дек.']"-->
<!--                    :fromText="'С'"-->
<!--                    :toText="'По'"-->
<!--                    :resetText="'Очистить'"-->
<!--                    :confirmText="'Подтвердить'"-->
<!--                    :mobile="'mobile'"-->
<!--                    class="w-100"-->
<!--                    @update="save($event,data.item.id,'date_range')"-->
<!--                />-->
<!--            </b-input-group>-->
<!--        </template>-->
<!--            <template v-slot:cell(TourInfo.country)="data">-->
<!--                <b-input-group size="sm">-->
<!--                    <multiselect-->
<!--                        v-model="data.item.TourInfo.country"-->
<!--                        :options="countries"-->
<!--                        :option-height="25"-->
<!--                        placeholder="Выберите страну"-->
<!--                        :show-labels="false"-->
<!--                        :maxHeight="200"-->
<!--                        label="Name"-->
<!--                        track-by="Name"-->
<!--                        :loading="isCountriesLoading"-->
<!--                        :disabled="isCountriesLoading"-->
<!--                        :allow-empty="false"-->
<!--                        @input="save($event,data.item.id,'country')"-->
<!--                    >-->
<!--                        <template slot="singleLabel" slot-scope="props">-->
<!--                            <b :class="'tc-flag-'+props.option.Id"></b>-->
<!--                            <span class="option__desc">-->
<!--                                <span class="option__title">{{ props.option.Name }}</span>-->
<!--                            </span>-->
<!--                        </template>-->
<!--                        <template slot="option" slot-scope="props">-->
<!--                            <b :class="'tc-flag-'+props.option.Id"></b>-->
<!--                            <span class="option__desc">-->
<!--                                <span class="option__title">{{ props.option.Name }}</span>-->
<!--                            </span>-->
<!--                        </template>-->
<!--                    </multiselect>-->
<!--                </b-input-group>-->
<!--            </template>-->
<!--            <template v-slot:cell(TourInfo.resort)="data">-->
<!--                <b-input-group size="sm">-->
<!--                    <multiselect-->
<!--                        :value="data.item.TourInfo.resort"-->
<!--                        :options="cities"-->
<!--                        placeholder="Введите название курорта"-->
<!--                        :show-labels="false"-->
<!--                        :maxHeight="200"-->
<!--                        label="Name"-->
<!--                        track-by="Name"-->
<!--                        :close-on-select="true" :clear-on-select="true"-->
<!--                        :loading="isCountriesLoading || isCitiesLoading"-->
<!--                        :disabled="isCountriesLoading || isCitiesLoading"-->
<!--                        @input="save($event,data.item.id,'resort')"-->
<!--                        :allow-empty="false"-->
<!--                        :preselectFirst="true"-->
<!--                    >-->
<!--                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeResorts }} {{values.length | pluralizeChoose}}</span></template>-->
<!--                    </multiselect>-->
<!--                </b-input-group>-->
<!--            </template>-->
<!--            <template v-slot:cell(TourInfo.price)="data">-->
<!--                <b-input-group size="sm">-->
<!--                    <b-form-input :value="data.item.TourInfo.price"-->
<!--                                  type="number"-->
<!--                                  min="0"-->
<!--                                  @blur="save($event.target.value,data.item.id,'price')"-->
<!--                                  placeholder="Цена"/>-->
<!--                </b-input-group>-->
<!--            </template>-->
<!--            <template v-slot:cell(TourInfo.paid)="data">-->
<!--                <b-input-group size="sm">-->
<!--                    <b-form-input :value="data.item.TourInfo.paid"-->
<!--                                  type="number"-->
<!--                                  min="0"-->
<!--                                  @blur="save($event.target.value,data.item.id,'paid')"-->
<!--                                  placeholder="Выплачено"/>-->
<!--                </b-input-group>-->
<!--            </template>-->
            <template v-slot:cell(action1)="data">
                <b-input-group size="sm">
<!--                    <b-button @click="data.toggleDetails" class="w-100 btn btn-travel mr-1 mb-1 btn-travel">-->
<!--                        {{ data.detailsShowing ? 'Свернуть' : 'Редактировать' }}-->
<!--                    </b-button> -->
                    <b-button @click="toEditTour(data.item.id)" class="w-100 btn btn-travel mr-1 mb-1 btn-travel">
                        Редактировать
                    </b-button>
                </b-input-group>
            </template>
            <template v-slot:cell(action2)="data">
                <b-input-group size="sm" >
                    <b-button v-if="data.item.deleted_at==null" @click="destroy(data.item.id)" class="btn btn-info mr-1 mb-1 btn-travel w-100"
                              :disabled="data.item.id===null">
                            Удалить
                    </b-button>
                </b-input-group>
            </template>
<!--            <template v-slot:row-details="row">-->
<!--                <b-card>-->
<!--                    <div class="row align-items-center justify-content-center m-auto">-->
<!--                        <div class="col-sm-12 px-1 col-md-4 mb-2">-->
<!--                            <b-form-group label="Даты тура" label-size="sm" class="mb-0">-->
<!--                                <VueHotelDatepicker-->
<!--                                    ref="datepickerId"-->
<!--                                    :startDate="row.item.StartAt"-->
<!--                                    :endDate="row.item.EndAt"-->
<!--                                    :placeholder="'Даты тура'"-->
<!--                                    :format="'DD/MM/YYYY'"-->
<!--                                    :weekList="['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.']"-->
<!--                                    :monthList="['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май.', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт', 'Ноя.', 'Дек.']"-->
<!--                                    :fromText="'С'"-->
<!--                                    :toText="'По'"-->
<!--                                    :resetText="'Очистить'"-->
<!--                                    :confirmText="'Подтвердить'"-->
<!--                                    :mobile="'mobile'"-->
<!--                                    class="w-100 tours"-->
<!--                                    @update="save($event,row.item.id,'date_range')"-->
<!--                                />-->
<!--                            </b-form-group>-->
<!--                        </div>-->
<!--                        <div class="col-sm-12 px-1 col-md-4 mb-2">-->
<!--                            <b-form-group label="Страна" label-size="sm" class="mb-0">-->
<!--                                <multiselect-->
<!--                                    v-model="row.item.TourInfo.country"-->
<!--                                    :options="countries"-->
<!--                                    :option-height="25"-->
<!--                                    placeholder="Выберите страну"-->
<!--                                    :show-labels="false"-->
<!--                                    :maxHeight="200"-->
<!--                                    label="Name"-->
<!--                                    track-by="Name"-->
<!--                                    :loading="isCountriesLoading"-->
<!--                                    :disabled="isCountriesLoading"-->
<!--                                    :allow-empty="false"-->
<!--                                    @input="save($event,row.item.id,'country')"-->
<!--                                >-->
<!--                                    <template slot="singleLabel" slot-scope="props">-->
<!--                                        <b :class="'tc-flag-'+props.option.Id"></b>-->
<!--                                        <span class="option__desc">-->
<!--                                <span class="option__title">{{ props.option.Name }}</span>-->
<!--                            </span>-->
<!--                                    </template>-->
<!--                                    <template slot="option" slot-scope="props">-->
<!--                                        <b :class="'tc-flag-'+props.option.Id"></b>-->
<!--                                        <span class="option__desc">-->
<!--                                <span class="option__title">{{ props.option.Name }}</span>-->
<!--                            </span>-->
<!--                                    </template>-->
<!--                                </multiselect>-->
<!--                            </b-form-group>-->
<!--                        </div>-->
<!--                        <div class="col-sm-12 px-1 col-md-4 mb-2">-->
<!--                            <b-form-group label="Курорт" label-size="sm" class="mb-0">-->
<!--                                <multiselect-->
<!--                                    :value="row.item.TourInfo.resort"-->
<!--                                    :options="cities"-->
<!--                                    placeholder="Введите название курорта"-->
<!--                                    :show-labels="false"-->
<!--                                    :maxHeight="200"-->
<!--                                    label="Name"-->
<!--                                    track-by="Name"-->
<!--                                    :close-on-select="true" :clear-on-select="true"-->
<!--                                    :loading="isCountriesLoading || isCitiesLoading"-->
<!--                                    :disabled="isCountriesLoading || isCitiesLoading"-->
<!--                                    @input="save($event,row.item.id,'resort')"-->
<!--                                    :allow-empty="false"-->
<!--                                    :preselectFirst="true"-->
<!--                                >-->
<!--                                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeResorts }} {{values.length | pluralizeChoose}}</span></template>-->
<!--                                </multiselect>-->
<!--                            </b-form-group>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="row align-items-center justify-content-center m-auto">-->
<!--                        <div class="col-sm-12 px-1 col-md-4 mb-2">-->
<!--                            <b-form-group label="Отель" label-size="sm" class="mb-0">-->
<!--                                <multiselect-->
<!--                                    :value="row.item.TourInfo.hotel"-->
<!--                                    :options="hotels"-->
<!--                                    placeholder="Введите название отеля"-->
<!--                                    :show-labels="false"-->
<!--                                    :limit="2"-->
<!--                                    :maxHeight="200"-->
<!--                                    label="Name"-->
<!--                                    track-by="Name"-->
<!--                                    :allow-empty="false"-->
<!--                                    :close-on-select="true" :clear-on-select="true"-->
<!--                                    :loading="isCountriesLoading || isHotelsLoading"-->
<!--                                    :disabled="isCountriesLoading || isHotelsLoading"-->
<!--                                    @input="save($event, row.item.id,'hotel')"-->
<!--                                >-->
<!--                                    <template slot="selection" slot-scope="{ values, search, isOpen }">-->
<!--                                    <span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeHotels}} {{values.length | pluralizeChoose}}-->
<!--                                    </span>-->
<!--                                    </template>-->
<!--                                    <template slot="singleLabel" slot-scope="props">-->
<!--                                    <span class="option__desc">-->
<!--                                        <span class="option__title">{{ props.option.Name }}</span>-->
<!--                                        <span class="option__title" style="float:right" v-if="props.option.CommonRate!=0">{{ props.option.CommonRate }}</span>-->
<!--                                        <span class="values__hotel-rating" style="float:right" v-if="props.option.StarName">{{ props.option.StarName }}</span>-->
<!--                                    </span>-->
<!--                                    </template>-->
<!--                                    <template slot="option" slot-scope="props">-->
<!--                                        <div class="option__desc">-->
<!--                                            <span class="option__title">{{ props.option.Name }}</span>-->
<!--                                            <span class="option__title" style="float:right" v-if="props.option.CommonRate!=0">{{ props.option.CommonRate }}</span>-->
<!--                                            <span class="values__hotel-rating" style="float:right" v-if="props.option.StarName">{{ props.option.StarName }}</span>-->
<!--                                        </div>-->
<!--                                    </template>-->
<!--                                </multiselect>-->
<!--                            </b-form-group>-->
<!--                        </div>-->
<!--                        <div class="col-sm-12 px-1 col-md-4 mb-2">-->
<!--                            <b-form-group label="Категория номера" label-size="sm" class="mb-0">-->
<!--                                <b-form-input-->
<!--                                    label="Категория номера"-->
<!--                                    v-model="row.item.TourInfo.room_type"-->
<!--                                    placeholder="Категория номера"-->
<!--                                    class="mb-0 travel-input"-->
<!--                                    @blur="save($event.target.value, row.item.id,'room_type')"-->
<!--                                >-->
<!--                                </b-form-input>-->
<!--                            </b-form-group>-->
<!--                        </div>-->
<!--                        <div class="col-sm-12 px-1 col-md-4 mb-2">-->
<!--                            <b-form-group label="Питание" label-size="sm" class="mb-0">-->
<!--                                <multiselect-->
<!--                                    v-model="row.item.TourInfo.meal"-->
<!--                                    :options="meals"-->
<!--                                    :option-height="25"-->
<!--                                    placeholder="Выберите питание"-->
<!--                                    :show-labels="false"-->
<!--                                    :maxHeight="200"-->
<!--                                    label="Name"-->
<!--                                    track-by="Name"-->
<!--                                    :close-on-select="true" :clear-on-select="true"-->
<!--                                    @input="save($event, row.item.id,'meal')"-->
<!--                                    :allow-empty="false"-->
<!--                                >-->
<!--                                    <template slot="singleLabel" slot-scope="props">-->
<!--                                        <span class="option__desc">-->
<!--                                            <span class="option__title">{{props.option.Name}}</span>-->
<!--                                        </span>-->
<!--                                    </template>-->
<!--                                    <template slot="option" slot-scope="props">-->
<!--                                        <div>-->
<!--                                            <div class="option__desc">-->
<!--                                                <span class="option__title">{{props.option.Name}}</span>-->
<!--                                            </div>-->
<!--                                            <div class="row align-items-center m-auto" style="width: 100%; height: 100%">-->
<!--                                                <p class="" style="font-size: 12px; margin:0px;">{{props.option.desc}}</p>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </template>-->
<!--                                </multiselect>-->
<!--                            </b-form-group>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="row align-items-center justify-content-center m-auto">-->
<!--                        <div class="col-sm-12 px-1 col-md-4 mb-2">-->
<!--                            <b-form-group label="Цена" label-size="sm" class="mb-0">-->
<!--                                <b-form-input-->
<!--                                    :value="row.item.TourInfo.price"-->
<!--                                    type="number"-->
<!--                                    min="0"-->
<!--                                    class="mb-0 travel-input"-->
<!--                                    @blur="save($event.target.value,row.item.id,'price')"-->
<!--                                    placeholder="Цена"-->
<!--                                >-->
<!--                                </b-form-input>-->
<!--                            </b-form-group>-->
<!--                        </div>-->
<!--                        <div class="col-sm-12 px-1 col-md-4 mb-2">-->
<!--                            <b-form-group label="Выплачено" label-size="sm" class="mb-0">-->
<!--                                <b-form-input-->
<!--                                    :value="row.item.TourInfo.paid"-->
<!--                                    type="number"-->
<!--                                    min="0"-->
<!--                                    class="mb-0 travel-input"-->
<!--                                    @blur="save($event.target.value,row.item.id,'paid')"-->
<!--                                    placeholder="Выплачено"-->
<!--                                >-->
<!--                                </b-form-input>-->
<!--                            </b-form-group>-->
<!--                        </div>-->
<!--                        <div class="col-sm-12 px-1 col-md-4 mb-2">-->
<!--                            <b-form-group label="Остаток" label-size="sm" class="mb-0">-->
<!--                                <b-form-input-->
<!--                                    :value="row.item.TourInfo.left"-->
<!--                                    type="number"-->
<!--                                    min="0"-->
<!--                                    class="mb-0 travel-input"-->
<!--                                    disabled-->
<!--                                    placeholder="Остаток"-->
<!--                                >-->
<!--                                </b-form-input>-->
<!--                            </b-form-group>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="row align-items-center justify-content-center m-auto">-->
<!--                        <div class="col-sm-12 px-1 col-md-12 mb-2">-->
<!--                            <b-form-group label="Дополнительные услуги" label-size="sm" class="mb-0">-->
<!--                                 <b-form-textarea rows="4" cols="80"-->
<!--                                           class="form-control"-->
<!--                                           placeholder="Дополнительные услуги"-->
<!--                                           v-model="row.item.TourInfo.services"-->
<!--                                           style="padding: 5px 15px; border: 1px solid #f08b23;border-radius: 20px"-->
<!--                                 >-->
<!--                                 </b-form-textarea>-->
<!--                            </b-form-group>-->
<!--                        </div>-->
<!--                        <div class="col-sm-12 px-1 col-md-12 mb-2">-->
<!--                            <label class="control-label">Авиабилеты</label>-->
<!--                            <avia-tickets-list :avia_tickets="row.item.TourInfo.avia_tickets"></avia-tickets-list>-->
<!--                        </div>-->
<!--                        <div class="col-sm-12 px-1 col-md-12 mb-2">-->
<!--                            <label class="control-label">Пассажиры</label>-->
<!--                            <passengers-list :passengers="row.item.TourInfo.passengers"></passengers-list>-->
<!--                        </div>-->
<!--                        <div class="col-sm-12 px-1 col-md-12 mb-2">-->
<!--                            <label class="control-label">Файлы для клиента</label>-->
<!--                            <div-->
<!--                                class="list-group-item"-->
<!--                                v-for="(file, index) in row.item.TourInfo.files"-->
<!--                                :key="file.name"-->
<!--                            >-->
<!--                                <div class="row m-auto w-100 align-items-center justify-content-center" v-if="file.type=='file'">-->
<!--                                    <div class="col-4 text-center">-->
<!--                                        <img class="preview" v-if="/\.(jpe?g|png|svg)$/i.test(file.name)" :src="file.path"/>-->
<!--                                        <img class="preview" v-else src="/images/LOGO-1.png"/>-->
<!--                                    </div>-->
<!--                                    <div class="col-8">-->
<!--                                        <div>-->
<!--                                            <p class="control-label">{{file.name}}</p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="row m-auto w-100 align-items-center justify-content-center" v-if="file.type=='audio'">-->
<!--                                    <div class="audio-container w-100">-->
<!--                                        <audio-player :audio="file" class="w-100" type="url"></audio-player>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="form-group row mt-2">-->
<!--                                <div class="col-md-12">-->
<!--                                    <div class="large-12 medium-12 small-12 filezone">-->
<!--                                        <input type="file" id="files" :ref="'tour_files'+row.item.id" multiple v-on:change="handleEditFiles(row.item)"/>-->
<!--                                        <p>-->
<!--                                            Перетащите файл(ы) сюда<br>или нажмите для поиска-->
<!--                                        </p>-->
<!--                                    </div>-->
<!--                                    <label class="control-label">Или запишите голосовое сообщение</label>-->
<!--                                    <div class="d-flex justify-content-center mt-2">-->
<!--                                        <vue-record-audio :mode="'press'" @stream="onStream" @result="onEditResult($event, row.item)"/>-->
<!--                                    </div>-->
<!--                                    <div class="file-listing">-->
<!--                                        <div-->
<!--                                            class="list-group-item"-->
<!--                                            v-for="(file, index) in row.item.TourInfo.files"-->
<!--                                            :key="file.name"-->
<!--                                        >-->
<!--                                            <div class="row m-auto w-100 align-items-center justify-content-center" v-if="file.type=='file'">-->
<!--                                                <div class="col-4 text-center">-->
<!--                                                    <img class="preview" v-if="/\.(jpe?g|png|svg)$/i.test(file.name)" :src="file.path"/>-->
<!--                                                    <img class="preview" v-else src="/images/LOGO-1.png"/>-->
<!--                                                </div>-->
<!--                                                <div class="col-8">-->
<!--                                                    <p class="control-label">{{file.name}}</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="row m-auto w-100 align-items-center justify-content-center" v-if="file.type=='audio'">-->
<!--                                                <div class="col-12">-->
<!--                                                    <audio-player :audio="file"></audio-player>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="remove-container">-->
<!--                                                <a class="remove" v-on:click="deleteFile(file, index)" v-if="loadingFiles == false">Удалить</a>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--&lt;!&ndash;                                    <div class="file-listing">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="list-group-item" v-for="(file, index) in row.item.new_files">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <div class="row m-auto w-100 align-items-center justify-content-center">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div class="col-4 text-center">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <img class="preview" v-bind:ref="'preview'+parseInt(index)"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div class="col-8">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div v-if="file.type=='file'">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <p class="control-label">{{file.data.name}}</p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div v-if="file.type=='audio'">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <audio-player :audio="file"></audio-player>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                                            <div class="remove-container">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                                                <a class="remove" v-on:click="removeFile(new_files, index)" v-if="loadingFiles == false">Отменить</a>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                                            </div>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </b-card>-->
<!--            </template>-->
            <template v-slot:table-busy>
                <div class="text-center text-warning my-2">
                    <b-spinner variant="warning" class="align-middle"/>
                    <strong>Загрузка...</strong>
                </div>
            </template>
        </b-table>
    </div>
</template>

<script>
    import {mask} from 'vue-the-mask'
    export default {
        props: {
            tours: {
                type: Array,
                required: true,
                default: function(){
                    return [];
                }
            },
            loading: {
                type: Boolean,
                default: true
            },
            totalRows: {
                type: Number,
                required: true,
                default: 0
            },
        },
        data() {
            return {
                order_by: 'id',
                sortDesc: false,
                // totalRows: 1,
                currentPage: 1,
                perPage: 5,
                order_direction: 'asc',
                filter: null,
                filterOn: [],

                pageOptions: [5, 10, 15, 25, 50, 100],

                fields: [
                    {key: 'id', label: 'ID', sortable: true, order_direction: 'desc'},
                    {key: 'created_at', label: 'Дата создания', sortable: true, order_direction: 'desc'},
                    // {key: 'TourInfo.date_range', label: 'Даты тура', sortable: true, order_direction: 'desc'},
                    {key: 'TourInfo.date_range.start', label: 'С', sortable: true, order_direction: 'desc'},
                    {key: 'TourInfo.date_range.end', label: 'По', sortable: true, order_direction: 'desc'},
                    {key: 'TourInfo.country.Name', label: 'Страна', sortable: true, order_direction: 'desc'},
                    {key: 'TourInfo.resort.Name', label: 'Курорт', sortable: true, order_direction: 'desc'},
                    {key: 'TourInfo.price', label: 'Цена', sortable: true, order_direction: 'desc'},
                    {key: 'TourInfo.paid', label: 'Выплачено', sortable: true, order_direction: 'desc'},
                    {key: 'action1', label: 'Показать'},
                    {key: 'action2', label: 'Действия'}
                ],
                meals: [
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
                seconds:0,
                interval:'',
                flag:false,
                loadingFiles:false
            }
        },
        mounted() {

        },
        computed: {
            isAdmin : function(){ return this.$store.getters.isAdmin},
            isManager : function(){ return this.$store.getters.isManager},
            sortOptions() {
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return {text: f.label, value: f.key}
                    })
            },

            tourModule() {
                return this.$store.getters.tourModule
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
            branches(){
                return this.$store.getters.branches
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
        },
        methods: {
            toEditTour(id) {
                if(this.isAdmin){
                    this.$router.push('/admin/client-tours/'+this.$route.params.id+'/edit/'+id)
                }
                if(this.isManager){
                    this.$router.push('/manager/client-tours/'+this.$route.params.id+'/edit/'+id)
                }
            },
            changeEditDateRange(date_object) {
                this.save(date_object);
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Туры пользователей',
                    text: message
                });
            },

            async destroy(id) {
                this.$store.dispatch('forceDeleteClientTour', {client_id:this.$route.params.id, id: id}).then(resp => {
                    this.sendMessage(resp.data.message)
                })
            },
            async save(value, id, key) {
                this.$store.dispatch('saveClientTour', {
                    id: id,
                    key: key,
                    value: value
                }).then(resp => {
                    this.$store.commit('saveClientTour', resp.data.user);
                    this.sendMessage(resp.data.message)
                });
            },
            async saveInfo(value, id, key) {
                if (key=='date_range')
                {
                    this.save(moment(value.start, "DD-MM-YYYY"), id, 'StartAt')
                    this.save(moment(value.end, "DD-MM-YYYY"), id, 'EndAt')
                }
                var payload ={
                    id: id,
                    param: key,
                    value: value
                };
                // if(key=='files')
                // {
                //     let payload = new FormData();
                //     payload.append('id',id);
                //     payload.append('param',key);
                //     payload.append('value',value);
                //     payload.append("TourInfo", JSON.stringify(this.edit_tour));
                //
                //     for (var i = 0; i < this.new_files.length; i++) {
                //         let file = this.new_files[i].data;
                //
                //         payload.append('files[' + i + ']', file);
                //     }
                // }
                this.$store.dispatch('saveClientTourInfo', payload).then(resp => {
                    this.sendMessage(resp.data.message)
                });
            },
            async saveFiles(item, action) {
                this.loadingFiles=true;
                let payload = new FormData();
                payload.append('id',item.id);
                payload.append('param','files');
                // payload.append('value', value);
                payload.append('action',action);
                payload.append("TourInfo", JSON.stringify(item.TourInfo));
                if(action == 1) {
                    for (var i = 0; i < item.new_files.length; i++) {
                        let file = item.new_files[i].data;

                        payload.append('files[' + i + ']', file);
                    }
                }
               else {
                    for (var i = 0; i < item.delete_files.length; i++) {
                        let file = item.delete_files[i].data;

                        payload.append('files[' + i + ']', file);
                    }
                }
                this.$store.dispatch('saveClientTourInfo', payload).then(resp => {
                    item.new_files=[];
                    item.deleted_files=[];
                    this.sendMessage(resp.data.message)
                });
            },
            onFiltered(filteredItems) {
                this.totalRows = filteredItems.length;
                this.currentPage = 1
            },
            chooseEditResortCountry(value, item){
                item.TourInfo.resort={Name:'Любой'};
                item.TourInfo.hotel={Name:'Любой'};
                item.TourInfo.country = value;
                this.$store.dispatch('getCities', item.TourInfo.country.Id);
                this.$store.dispatch('getHotels', {country_id:item.TourInfo.country.Id, town_id:'0', star_id:'0'});
                this.saveInfo(value, item.id, 'country');
                this.saveInfo({Name:'Любой'}, item.id, 'resort');
                this.saveInfo({Name:'Любой'}, item.id, 'hotel');
            },
            chooseEditResort(value, item) {
                item.TourInfo.resort = value;
                if(item.TourInfo.resort.Name != 'Любой')
                {
                    var town_id = item.TourInfo.resort.Id;
                    //поиск отелей по городам-курортам
                    this.$store.dispatch('getHotels', {country_id:item.TourInfo.country.Id, town_id:town_id, star_id:'0'}).then(() => {
                        if(this.hotels.findIndex(hotel=> hotel.Id == item.TourInfo.hotel.Id) == -1)
                        {
                            item.TourInfo.hotel = {Name:'Любой'};
                            this.saveInfo({Name:'Любой'}, item.id, 'hotel');
                        }
                    });
                }
                else {
                    //если городов-курортов не выбрано, то поиск отелей по стране
                    this.$store.dispatch('getHotels', {country_id:item.TourInfo.country.Id, town_id:'0', star_id:'0'});
                }
                this.saveInfo(value, item.id, 'resort');
            },
            changeEditPrice(item){
                item.TourInfo.left = item.TourInfo.price - item.TourInfo.paid;
                this.saveInfo(item.TourInfo.left, item.id,'left')
            },
            handleEditFiles(item) {
                let uploadedFiles = this.$refs['tour_files'+ item.id].files;
                for(var i = 0; i < uploadedFiles.length; i++) {
                    if (/\.(jpe?g|png|svg|pdf|txt|docx|doc)$/i.test(uploadedFiles[i].name))
                    {
                        var date = new Date();
                        item.new_files.push({type:'file', name:uploadedFiles[i].name, data:uploadedFiles[i], date: date });
                        item.TourInfo.files.push({type:'file', name:uploadedFiles[i].name, data:uploadedFiles[i], date: date });
                        this.getImagePreviews(item.TourInfo.files);
                        this.saveFiles(item, 1)
                    }
                    else
                    {
                        break;
                    }
                }
            },
            onEditResult(data, item) {
                var time = Date.now();
                var date = new Date();
                item.new_files.push({
                    type: 'audio',
                    name: 'record-'+time+'.mp3',
                    src: window.URL.createObjectURL(data),
                    data: data,
                    date: date,
                    seconds: this.seconds
                });
                item.TourInfo.files.push({
                    type: 'audio',
                    name: 'record-'+time+'.mp3',
                    src: window.URL.createObjectURL(data),
                    data: data,
                    date: date,
                    seconds: this.seconds
                });
                this.countSeconds();
                this.saveFiles(item, 1)
                this.getImagePreviews(item.new_files);
            },
            deleteFile(file, key, item) {
                item.delete_files.push(file);
                item.TourInfo.files.splice( key, 1 );
                this.saveFiles(item, 0)
            },
            getImagePreviews(arr) {
                for ( let i = 0; i < arr.length; i++ ) {
                    if ( /\.(jpe?g|png|svg)$/i.test(arr[i].name)) {
                        let reader = new FileReader();
                        reader.addEventListener("load", function() {
                            this.$refs['preview'+parseInt(i)][0].src = reader.result;
                        }.bind(this), false);
                        reader.readAsDataURL(arr[i].data);
                    }
                    else {
                        this.$nextTick(function() {
                            this.$refs['preview'+parseInt(i)][0].src = '/images/LOGO-1.png';
                        });
                    }
                }
            },
            onStream(stream) {
                this.countSeconds();
                console.log('Got a stream object:', stream);
            },
            countSeconds() {
                this.flag = !this.flag;
                if (this.flag == true) {
                    this.seconds=0;
                    this.interval = setInterval(this.incrementSeconds, 1000);
                }
                else {
                    clearInterval(this.interval)
                }
            },
            incrementSeconds() {
                this.seconds += 1;
            },
        },
        directives: {mask}
    }
</script>
<style scoped>
    .btn-travel{
        background: #e17e4e;
        background-color: rgb(225, 126, 78);
        background-position-x: 0%;
        background-position-y: 0%;
        background-image: none;
        background-size: auto;
        background-image: linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e);
        background-size: 210% 210%;
        background-position: top right;
        background-color: #e17e4e;
        transition: all 0.15s ease;
        box-shadow: none;
        color: #ffffff;
        max-width: 300px;
        border: none;
    }
</style>
<style>
    .page-item.active .page-link {
        background: #f08b23;
        border: 1px solid #f08b23;
        transition: all 0.15s ease;
        box-shadow: none;
        color: #ffffff;
    }
    .tours .vhd-input {
        min-width: 100%;
    }
</style>
