<template>
    <div>
        <b-row>
            <b-col lg="6" class="my-1">
                <b-form-group
                    label="Сортировка"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    label-for="sortBySelect1"
                    class="mb-0"
                >
                    <b-input-group size="sm">
                        <b-form-select v-model="sortBy" id="sortBySelect1" :options="sortOptions" class="w-75">
                            <template v-slot:first>
                                <option value="">-- none --</option>
                            </template>
                        </b-form-select>
                        <b-form-select v-model="sortDesc" size="sm" :disabled="!sortBy" class="w-25">
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
            :items="messages"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :filterIncludedFields="filterOn"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            @filtered="onFiltered"
            :busy="loading"
            empty-text="Нет записей для отображения"
            empty-filtered-text="Нет записей, соответствующих вашему запросу"
        >
            <template v-slot:cell(created_at)="data">
                {{data.item.created_at | moment('DD.MM.YYYY')}}
            </template>
            <template v-slot:cell(message_type)="data">
                <div
                    class="tag text-center"
                    v-bind:class="[
                        {red: data.item.message_type=='Голосовая заявка' },
                        {blue: data.item.message_type=='Обратная связь' },
                        {green: data.item.message_type=='Обратный звонок' },
                        {darkblue: data.item.message_type=='Заявка менеджера' },
                    ]"
                >
                    <span>{{data.item.message_type}}</span>
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
                    <div class="row align-items-center justify-content-center m-auto">
                        <div v-if="row.item.message_type === 'Голосовая заявка'" style="width: 100%; height: 100%">
                            <audio-player :audio="row.item.file_path"></audio-player>
                        </div>
                        <div v-if="row.item.message_type === 'Обратная связь'">
                            <p>{{row.item.message}}</p>
                        </div>
                        <div v-if="row.item.message_type === 'Обратный звонок'">
                            <p>Дополнительная информация отсутствует</p>
                        </div>
                        <div v-if="row.item.message_type === 'Заявка менеджера' && row.item.user!=null && isAdmin">
                            <div class="row w-100 p-2 m-auto">
                                <div class="col-md-4 pr-md-1">
                                    <b-input-group label="Фамилия">
                                        {{row.item.user.info.LastName}}
                                    </b-input-group>
                                </div>
                                <div class="col-md-4 px-md-1">
                                    <b-input-group label="Имя">
                                        {{row.item.user.info.FirstName}}
                                    </b-input-group>
                                </div>
                                <div class="col-md-4 pl-md-1">
                                    <b-input-group label="Отчество">
                                        {{row.item.user.info.MiddleName}}
                                    </b-input-group>
                                </div>
                            </div>
                            <div class="row w-100 p-2 m-auto">
                                <b-input-group label="Email">
                                    {{row.item.user.email}}
                                </b-input-group>
                                <div class="col-md-4 px-md-1">
                                    <b-input-group label="Телефон">
                                        {{row.item.user.info.Phone}}
                                    </b-input-group>
                                </div>
                            </div>
                            <div class="row w-100 p-2 m-auto">
                                <div class="col-md-4 pr-md-1">
                                    <b-input-group label="Город">
                                        {{row.item.user.info.City.city}}
                                    </b-input-group>
                                </div>
                                <div class="col-md-4 px-md-1">
                                    <b-input-group label="Отделение">
                                        {{row.item.user.info.Department.address}}
                                    </b-input-group>
                                </div>
                            </div>
                            <div class="row w-100 p-2 m-auto">
                                <b-button v-if="row.item.user.is_manager==false">Подтвердить менеджера</b-button>
                                <b-button v-else>Отменить менеджера</b-button>
                            </div>
                        </div>
                    </div>
                </b-card>
            </template>
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
            messages: {
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
                sortBy: 'id',
                sortDesc: false,
                currentPage: 1,
                perPage: 5,
                sortDirection: 'asc',
                filter: null,
                filterOn: [],
                pageOptions: [5, 10, 15, 25, 50, 100],
                tags: [
                    {tag:'Голосовая заявка', style:'background:blue; color:white;'},
                    {tag:'Обратная связь', style:'background:green; color:white;'},
                    {tag:'Обратный звонок', style:'background:red; color:white;'},
                    {tag:'Заявка менеджера', style:'background:#0d274b; color:white;'},
                ],
                fields: [
                    {key: 'id', label: 'ID', sortable: true, sortDirection: 'desc'},
                    {key: 'created_at', label: 'Дата', sortable: true, sortDirection: 'desc'},
                    {key: 'name', label: 'Имя', sortable: true, sortDirection: 'desc'},
                    {key: 'phone', label: 'Телефон', sortable: true, sortDirection: 'desc'},
                    {key: 'message_type', label: 'Тип сообщения', sortable: true, sortDirection: 'desc'},
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
            async remove(id) {
                this.$store.dispatch('removeMessage', id).then(resp => {
                    this.sendMessage(resp.data.message)
                })
            },

            async destroy(id) {
                this.$store.dispatch('forceDeleteMessage', id).then(resp => {
                    this.sendMessage(resp.data.message)
                })
            },

            async restore(id) {
                this.$store.dispatch('restoreMessage', id)
                    .then(resp => {
                        this.sendMessage(resp.data.message)
                    });
            },
            verifyManager(id){
                this.$store.dispatch('saveUser', {id:id, value:1, key:'is_manager'})
            },
            unverifyManager(id){
                this.$store.dispatch('saveUser', {id:id, value:0, key:'is_manager'})
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Туры пользователей',
                    text: message
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
        background: #006f23;
    }
    .darkblue {
        background:#0d274b;
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
