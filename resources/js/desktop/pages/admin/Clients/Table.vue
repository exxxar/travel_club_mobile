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
            :items="users"
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
            <template v-slot:cell(info.FullName)="data">
                <b-input-group size="sm">
                    <b-form-input
                        :value="data.item.info.FullName"
                        @blur="saveInfo($event.target.value,data.item.info.id,'FullName')"
                        placeholder="Введите ФИО"
                        class="travel-input"
                    />
                </b-input-group>
            </template>
            <template v-slot:cell(email)="data">
                <b-input-group size="sm">
                    <b-form-input
                        v-model="data.item.email"
                        disabled
                        type="email"
                        @blur="save($event.target.value, data.item.id,'email')"
                        class="travel-input"
                    >
                    </b-form-input>
                </b-input-group>
            </template>
            <template v-slot:cell(info.Phone)="data">
                <b-input-group size="sm">
                    <b-form-input
                        type="text"
                        v-model="data.item.info.Phone"
                        v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                        @blur="saveInfo($event.target.value, data.item.info.id,'Phone')"
                        class="travel-input"
                    >
                    </b-form-input>
                </b-input-group>
            </template>
            <template v-slot:cell(role)="data">
                <b-input-group size="sm">
                    <b-form-select
                        v-model="data.item.role"
                        :disabled="data.item.id===null"
                        :options="roles"
                        @blur="save(data.item.role,data.item.id,'role')"
                        class="travel-input"
                    >
                    </b-form-select>
                </b-input-group>
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
                    <b-button v-if="data.item.role == 'client'" @click="seeClientTours(data.item.id)" class="btn btn-info mr-1 mb-1 btn-travel w-100"
                              :disabled="data.item.id===null">
                           Туры
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
                    <div class="row align-items-center justify-content-center m-auto">
                        <div class="col-sm-12 px-1 col-md-4 mb-2">
                            <b-form-group label="Фамилия" label-size="sm" class="mb-0">
                                <b-form-input
                                    label="Фамилия"
                                    v-model="row.item.info.LastName"
                                    placeholder="Фамилия"
                                    class="mb-0 travel-input"
                                    @blur="saveInfo($event.target.value, row.item.info.id,'LastName')"
                                >
                                </b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-sm-12 px-1 col-md-4 mb-2">
                            <b-form-group label="Имя" label-size="sm" class="mb-0">
                                <b-form-input
                                    label="Имя"
                                    v-model="row.item.info.FirstName"
                                    placeholder="Имя"
                                    class="mb-0 travel-input"
                                    @blur="saveInfo($event.target.value, row.item.info.id,'FirstName')"
                                >
                                </b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-sm-12 px-1 col-md-4 mb-2">
                            <b-form-group label="Отчество" label-size="sm" class="mb-0">
                                <b-form-input
                                    label="Отчество"
                                    v-model="row.item.info.MiddleName"
                                    placeholder="Отчество"
                                    class="mb-0 travel-input"
                                    @blur="saveInfo($event.target.value, row.item.info.id,'MiddleName')"
                                >
                                </b-form-input>
                            </b-form-group>
                        </div>
                    </div>
                    <div class="row align-items-center justify-content-center m-auto">
                        <div class="col-sm-12 px-1 col-md-4 mb-2">
                            <b-form-group label="Город" label-size="sm" class="mb-0">
                                <multiselect
                                    v-model="row.item.info.City"
                                    :options="branches"
                                    :option-height="25"
                                    placeholder="Выберите город"
                                    :show-labels="false"
                                    :maxHeight="200"
                                    :loading="branches.length===0"
                                    :disabled="branches.length===0"
                                    :allow-empty="false"
                                    track-by="city"
                                    label="city"
                                    @input="selectCity(row.item.info.City, row.item.info)"
                                >
                                    <template slot="singleLabel" slot-scope="props">
                                        <span class="option__desc">
                                            <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571" v-if="props.option.city">{{ props.option.city}}</span>
    <!--                                        <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571" v-else>{{row.item.info.City}}</span>-->
                                        </span>
                                    </template>
                                    <template slot="option" slot-scope="props">
                                        <span class="option__desc">
                                            <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571">{{ props.option.city}}</span>
                                        </span>
                                    </template>
                                </multiselect>
                            </b-form-group>
                        </div>
                        <div class="col-sm-12 px-1 col-md-4 mb-2">
                            <b-form-group label="Отделение" label-size="sm" class="mb-0">
                                <multiselect
                                    v-model="row.item.info.Department"
                                    :options="row.item.info.City.departments"
                                    :option-height="25"
                                    placeholder="Выберите отделение"
                                    :show-labels="false"
                                    :maxHeight="200"
                                    :loading="departments_loading"
                                    :disabled="row.item.info.City.departments.length===0"
                                    :allow-empty="false"
                                    label="address"
                                    track-by="address"
                                    @input="selectDepartment(row.item.info.Department, row.item.info)"
                                >
                                    <template slot="singleLabel" slot-scope="props">
                                        <span class="option__desc">
                                            <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571">{{ props.option.address}}</span>
    <!--                                        <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571" v-else>{{row.item.info.Department}}</span>-->
                                        </span>
                                    </template>
                                    <template slot="option" slot-scope="props">
                                        <span class="option__desc">
                                            <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571">{{ props.option.address}}</span>
                                        </span>
                                    </template>
                                </multiselect>
                            </b-form-group>
                        </div>
                        <div class="col-sm-12 px-1 col-md-4 mb-2">
                            <b-form-group label="Менеджер" label-size="sm" class="mb-0" v-if="row.item.role=='client'">
                                <b-form-select
                                    v-model="row.item.info.ManagerId"
                                    :options="managers"
                                    value-field="id"
                                    text-field="info.FullName"
                                    @input="selectManager(row.item.info.ManagerId, row.item.info)"
                                    style="min-height: 40px"
                                    class="travel-input"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-sm-12 px-1 col-md-12 mb-2">
                            <b-form-group label="Дополнительная информация" label-size="sm" class="mb-0">
                                <b-form-textarea
                                    rows="4" cols="80"
                                    class="travel-input"
                                    placeholder="Дополнительная информация"
                                    v-model="row.item.info.About"
                                    style="padding: 5px 15px; border: 1px solid #f08b23;border-radius: 20px !important;"
                                    @blur="saveInfo($event.target.value, row.item.info.id,'About')"
                                >
                                </b-form-textarea>
                            </b-form-group>
                        </div>
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
            users: {
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

                // totalRows: 1,
                currentPage: 1,
                perPage: 5,
                sortDirection: 'asc',
                filter: null,
                filterOn: [],

                pageOptions: [5, 10, 15, 25, 50, 100],

                fields: [
                    {key: 'id', label: 'ID', sortable: true, sortDirection: 'desc'},
                    {key: 'info.FullName', label: 'ФИО', sortable: true, sortDirection: 'desc'},
                    {key: 'email', label: 'Email', sortable: true, sortDirection: 'desc'},
                    {key: 'info.Phone', label: 'Телефон', sortable: true, sortDirection: 'desc'},
                    {key: 'role', label: 'Роль', sortable: true, sortDirection: 'desc'},
                    {key: 'action1', label: 'Показать'},
                    {key: 'action2', label: 'Действия'}
                ],

                in_process: [],
                isLoading: false,
                isNewLoading: false,
                roles: [
                    { value: 'client', text: 'Клиент' },
                    { value: 'manager', text: 'Менеджер' },
                    { value: 'admin', text: 'Администратор' },
                ],
                city_options: [
                    'Донецк',
                    'Ростов-на-Дону'
                ],
                addresses:[
                    {city:'Донецк' , department:'Артёма 100д'},
                    {city:'Донецк' , department:'Бульвар Пушкина 23'},
                    {city: 'Ростов-на-Дону', department:'Not found'},
                ],
                branches:[
                    {country:'Украина', city:'Донецк' ,
                        departments: [
                            {address:'Артёма 100д', phone:'', sheldue:''},
                            {address:'Бульвар Пушкина 23', phone:'', sheldue:''}
                        ]
                    },
                    {country:'Россия', city: 'Ростов-на-Дону',  departments: [] },
                ],
                branch:[],
                cities:[],
                departments:[],
                departments_loading:false,
            }
        },
        mounted() {
            // this.totalRows = this.users.length;
            // this.cities
        },
        computed: {
            sortOptions() {
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return {text: f.label, value: f.key}
                    })
            },
            managers() {
                return this.$store.getters.managers
            },
        },
        methods: {
            seeClientTours(id) {
                this.$router.push('/admin/client-tours/'+id)
            },
            seeClientProfile(id) {
                this.$router.push('/admin/client-profile/'+id)
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Пользователи',
                    text: message
                });
            },
            // city(user) {
            //     var city = user.info.City;
            //     var tmp = this.branches.filter(item => {
            //         return item.city === city;
            //     });
            //     return tmp
            // },
            // department(user) {
            //     var city = user.info.City;
            //     var dep = user.info.Department;
            //
            //     var tmp = this.branches.filter(item => {
            //         return item.city === city;
            //     });
            //     var temp = tmp.filter(item => {
            //         return item.address === dep;
            //     });
            //     return temp
            // },
            async selectCity(value, item) {
                // var tmp = value;
                // this.branch = tmp.departments;
                this.departments_loading = true;
                await this.saveInfo(value, item.id, 'City')
                item.Department = '';
                // item.info.City = this.city(item);
            },
            selectDepartment(value, item) {
               this.saveInfo(value, item.id, 'Department')
                // item.info.Department = this.department(item);
            },
            selectManager(value, item) {
                this.saveInfo(value, item.id, 'ManagerId')
            },
            async remove(id) {
                this.$store.dispatch('removeUser', id).then(resp => {
                    this.sendMessage(resp.data.message)
                })
            },

            async destroy(id) {
                this.$store.dispatch('forceDeleteUser', id).then(resp => {
                    this.sendMessage(resp.data.message)
                })
            },

            async restore(id) {
                this.$store.dispatch('restoreUser', id)
                    .then(resp => {
                        this.sendMessage(resp.data.message)
                    });
            },

            async save(value, id, key) {
                console.log('save', key)
                this.$store.dispatch('saveUser', {
                    id: id,
                    key: key,
                    value: value
                }).then(resp => {
                    this.$store.commit('saveUser', resp.data.user);
                    this.sendMessage(resp.data.message)
                });
            },

            async saveInfo(value, id, key) {
                this.$store.dispatch('saveUserInfo', {
                    id: id,
                    key: key,
                    value: value
                }).then(resp => {
                    if(key == 'City') {
                        this.saveInfo('', id, 'Department')
                        this.departments_loading = false;
                    }
                    // this.$store.commit('saveUserInfo', resp.data.info);
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
