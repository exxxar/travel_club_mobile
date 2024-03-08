<template>
    <div id="client" class="row m-auto mb-4 justify-content-center align-items-center" style="width: 100%;height: 100%;">
        <edit :edit-item="editItem"></edit>
        <create></create>
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
                    <button class="btn waves-effect" style="outline: none;" v-b-modal.editModalBox
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
                                        <label class="mb-1 control-label" style="color: #f08b23">Дети до 12 лет</label>
                                    </div>
                                    <p class="mb-1">{{ props.row.expand.module.children_under_12}}</p>
                                </div>
                                <div class="list-group-item flex-column align-items-start p-1">
                                    <div class="d-flex w-100 justify-content-between">
                                        <label class="mb-1 control-label" style="color: #f08b23">Дети до 2 лет</label>
                                    </div>
                                    <p class="mb-1">{{ props.row.expand.module.children_under_2}}</p>
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
</template>

<script>
    import Edit from "./Edit";
    import Create from "./Create";
    export default {
        name: "Index",
        components: {Edit, Create},
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
            tags: [
                {tag: 'Тур', style: 'background:blue; color:white;'},
                {tag: 'Авиабилеты', style: 'background:green; color:white;'},
                // {tag:'Отель', style:'background:red; color:white;'},
            ],
            load: true,
            editItem: {},
        }),
        mounted() {
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
        },
        methods: {
            addOrder: function () {
                // $('#newOrderModalBox').modal('show')
                this.$bvModal.show('newOrderModalBox')
            },
            deleteOrder(row) {
                this.$store.dispatch('deleteModuleOrder', row.id)
                    .then(response => {
                        row.isLoading = false;
                        this.$store.dispatch('sendNotification',
                            {message: 'Заказ успешно удалён'});
                    });
            },
            editOrder(row) {
                this.editItem = row;
                this.editItem.module.start = new Date(this.editItem.module.date_range.start);
                this.editItem.module.end = new Date(this.editItem.module.date_range.end);
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от TravelClub',
                    text: message
                });
            },
        }
    }
</script>

<style scoped>

</style>
