<template>
    <div>
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
            :items="orders"
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
            <template v-slot:cell(order_type)="data">
                <div
                    class="tag text-center"
                    v-bind:class="[
                        {red: data.item.order_type=='Тур' },
                        {blue: data.item.order_type=='Авиабилеты' },
                        {green: data.item.order_type=='Отель' }
                    ]"
                >
                    <span>{{data.item.order_type}}</span>
                </div>
            </template>

            <template v-slot:cell(action1)="data">
                <b-input-group size="sm">
                    <b-button @click="data.toggleDetails" class="w-100 btn btn-travel mr-1 mb-1 btn-travel">
                        {{ data.detailsShowing ? 'Свернуть' : 'Развернуть' }}
                    </b-button>
                </b-input-group>
            </template>
            <template v-slot:cell(action2)="data">
                <b-input-group size="sm" >
                    <b-button @click="toEditOrder(data.item.id)" class="w-100 btn btn-travel mr-1 mb-1 btn-travel">
                        Редактировать
                    </b-button>
                    <b-button v-if="data.item.deleted_at==null" @click="remove(data.item.id)" class="btn btn-info mr-1 mb-1 btn-travel w-100"
                              :disabled="data.item.id===null">
                            Удалить
                    </b-button>
                    <b-button v-else @click="restore(data.item.id)" class="btn btn-info mr-1 mb-1 btn-travel w-100"
                              :disabled="data.item.id===null">
                        Восстановить
                    </b-button>
                    <b-button v-if="data.item.deleted_at!=null" @click="destroy(data.item.id)" class="btn btn-info mr-1 mb-1 btn-travel w-100"
                              :disabled="data.item.id===null">
                        Удалить
                    </b-button>
                </b-input-group>
            </template>
            <template v-slot:row-details="row">
                <b-card>
                    <div v-if="row.item.order_type === 'Тур'" style="width: 100%; height: 100%">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%">
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Страна отправления" label-size="sm" class="mb-0">
                                    {{row.item.module.country}}
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Страна назначения" label-size="sm" class="mb-0">
                                    {{row.item.module.resort_country.Name}}
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Курорт(ы)" label-size="sm" class="mb-0">
                                     <span v-for="resort in row.item.module.resorts">
                                            {{resort.Name}},
                                     </span>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%">
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Отель(и)" label-size="sm" class="mb-0">
                                     <span v-for="hotel in row.item.module.hotels">
                                            {{hotel.Name}},
                                     </span>
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Туроператор(ы)" label-size="sm" class="mb-0">
                                    <span v-for="tour_operator in row.item.module.tour_operators">
                                            {{tour_operator.Name}},
                                        </span>
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Интервал дат вылета" label-size="sm" class="mb-0">
                                   {{ row.item.module.date_range.start}} - {{ row.item.module.date_range.end}}
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%">
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Цена" label-size="sm" class="mb-0">
                                    От: {{ row.item.module.price_from}} - До: {{ row.item.module.price_to}}
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Ночей" label-size="sm" class="mb-0">
                                    От: {{ row.item.module.nights_from}} - До: {{ row.item.module.nights_to}}
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Взрослые" label-size="sm" class="mb-0">
                                    {{ row.item.module.adults}}
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%">
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Дети" label-size="sm" class="mb-0">
                                    {{ row.item.module.children}}
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="" label-size="sm" class="mb-0">
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="" label-size="sm" class="mb-0">
                                </b-form-group>
                            </div>
                        </div>
                    </div>
                    <div v-if="row.item.order_type === 'Авиабилеты'" style="width: 100%; height: 100%">
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%">
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Город вылета" label-size="sm" class="mb-0">
                                    {{row.item.module.city_from.name}}
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Город прибытия" label-size="sm" class="mb-0">
                                    {{row.item.module.city_to.name}}
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Класс" label-size="sm" class="mb-0">
                                    {{ row.item.module.avia_class}}
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%">
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Туда" label-size="sm" class="mb-0">
                                    {{row.item.module.depart_date | moment('DD.MM.YYYY')}}
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Обратно" label-size="sm" class="mb-0">
                                    {{row.item.module.return_date | moment('DD.MM.YYYY')}}
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Взрослые" label-size="sm" class="mb-0">
                                    {{ row.item.module.adults}}
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%">
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Дети до 12 лет" label-size="sm" class="mb-0">
                                    {{ row.item.module.children_under_12}}
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="Дети до 2 лет" label-size="sm" class="mb-0">
                                    {{ row.item.module.children_under_2}}
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 px-1 col-md-4 mb-2">
                                <b-form-group label="" label-size="sm" class="mb-0">

                                </b-form-group>
                            </div>
                        </div>
                    </div>
                    <div v-if="row.item.order_type === 'Отель'">
                        <p>Дополнительная информация отсутствует</p>
                    </div>
                </b-card>
            </template>
            <template v-slot:table-busy>
                <div class="text-center text-warning my-2">
                    <b-spinner class="align-middle" variant="warning"/>
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
            orders: {
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
                    {key: 'created_at', label: 'Дата', sortable: true, order_direction: 'desc'},
                    {key: 'name', label: 'Имя', sortable: true, order_direction: 'desc'},
                    {key: 'phone', label: 'Телефон', sortable: true, order_direction: 'desc'},
                    {key: 'order_type', label: 'Тип сообщения', sortable: true, order_direction: 'desc'},
                    {key: 'action1', label: 'Показать'},
                    {key: 'action2', label: 'Действия'}
                ],
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
        },
        methods: {
            toEditOrder(id) {
                if(this.isAdmin){
                    this.$router.push('/admin/orders/edit/'+id)
                }
                if(this.isManager){
                    this.$router.push('/manager/orders/edit/'+id)
                }
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Пользователи',
                    text: message
                });
            },
            async remove(id) {
                this.$store.dispatch('removeModuleOrder', id).then(resp => {
                    this.sendMessage(resp.data.message)
                })
            },

            async destroy(id) {
                this.$store.dispatch('forceDeleteModuleOrder', id).then(resp => {
                    this.sendMessage(resp.data.message)
                })
            },

            async restore(id) {
                this.$store.dispatch('restoreModuleOrder', id)
                    .then(resp => {
                        this.sendMessage(resp.data.message)
                    });
            },

            onFiltered(filteredItems) {
                this.totalRows = filteredItems.length;
                this.currentPage = 1
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
    .tag{
        padding: 5px 10px;
        background: #f8a105;
        color: white;
        border-radius: 50px;
    }
    .red {
        background: red;
    }
    .blue {
        background: darkblue;
    }
    .green {
        background: #004a16;
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
</style>
