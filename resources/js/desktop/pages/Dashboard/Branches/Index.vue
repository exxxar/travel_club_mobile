<template>
    <b-container fluid>
        <div class="row w-100 my-3 mx-auto">
            <div class="col-12 col-md-4 col-lg-6">
                <create></create>
            </div>
        </div>
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
                />
            </b-col>
        </b-row>
        <b-table
            show-empty
            small
            stacked="md"
            :items="branches"
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
            <template v-slot:cell(country)="data">
                <b-input-group size="sm">
                    {{data.item.country}}
<!--                    <b-form-input :value="data.item.country"-->
<!--                                  @blur="save($event.target.value,data.item.id,'country')"-->
<!--                                  placeholder="Введите "/>-->
<!--                    <multiselect-->
<!--                        v-model="data.item.country"-->
<!--                        :options="countries"-->
<!--                        :option-height="25"-->
<!--                        placeholder="Выберете страну"-->
<!--                        :show-labels="false"-->
<!--                        :maxHeight="200"-->
<!--                        label="Name"-->
<!--                        track-by="Name"-->
<!--                        :loading="isCountriesLoading"-->
<!--                        :disabled="isCountriesLoading"-->
<!--                        :allow-empty="false"-->
<!--                        @input="save($event.target.value,data.item.id,'country')"-->
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
                </b-input-group>
            </template>
            <template v-slot:cell(city)="data">
                <b-input-group size="sm">
                    <b-form-input
                        v-model="data.item.city"
                        @blur="save($event.target.value, data.item.id,'city')"
                        placeholder="Введите город"
                        class="travel-input"
                    >
                    </b-form-input>
                </b-input-group>
            </template>
            <template v-slot:cell(action1)="data">
                <b-input-group size="sm" >
                    <b-button  @click="seeDepartments(data.item.id)" class="btn btn-info mr-1 mb-1 btn-travel w-100"
                              :disabled="data.item.id===null">
                        Отделения
                    </b-button>
                </b-input-group>
            </template>
            <template v-slot:cell(action2)="data">
                <b-input-group size="sm" >
                    <b-button  @click="remove(data.item.id)" class="btn btn-info mr-1 mb-1 btn-travel w-100"
                              :disabled="data.item.id===null">
                        Удалить
                    </b-button>
                </b-input-group>
            </template>
            <template v-slot:table-busy>
                <div class="text-center text-warning my-2">
                    <b-spinner class="align-middle" variant="warning"/>
                    <strong>Загрузка...</strong>
                </div>
            </template>
        </b-table>
    </b-container>
</template>

<script>
    import Create from "./Create";
    export default {
        name: "Index",
        components: {
            Create
        },
        data() {
            return {
                order_by: 'id',
                sortDesc: false,
                totalRows: 1,
                currentPage: 1,
                perPage: 5,
                order_direction: 'asc',
                filter: null,
                filterOn: [],

                pageOptions: [5, 10, 15, 25, 50, 100],

                fields: [
                    {key: 'id', label: 'ID', sortable: true, order_direction: 'desc'},
                    {key: 'country', label: 'Страна', sortable: true, order_direction: 'desc'},
                    {key: 'city', label: 'Город', sortable: true, order_direction: 'desc'},
                    {key: 'action1', label: 'Показать'},
                    {key: 'action2', label: 'Действия'}
                ],
                 loading:false,
            }
        },
        computed: {
            sortOptions() {
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return {text: f.label, value: f.key}
                    })
            },
            branches() {
                return this.$store.getters.branches;
            },
            countries() {
                return this.$store.getters.countries;
            },
            isCountriesLoading() {
                return this.$store.getters.isCountriesLoading;
            },
            isCitiesLoading() {
                return this.$store.getters.isCitiesLoading;
            },
        },
        mounted() {
            if(this.branches.length<=0){
                this.loadBranches();
            }
        },
        methods: {
            seeDepartments(id) {
                this.$router.push('/admin/branches/'+id)
            },
            async loadBranches() {
                await this.$store.dispatch('setBranches')
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Филиалы',
                    text: message
                });
            },async remove(id) {
                this.$store.dispatch('removeBranch', id).then(resp => {
                    this.$store.dispatch('sendNotification',
                        {message: resp.data.message});
                })
            },

            async save(value, id, key) {
                this.$store.dispatch('saveBranch', {
                    id: id,
                    key: key,
                    value: value
                }).then(resp => {
                    this.$store.commit('saveBranch', resp.data.branch);
                    this.$store.dispatch('sendNotification',
                        {message: resp.data.message});
                });
            },

            onFiltered(filteredItems) {
                this.totalRows = filteredItems.length;
                this.currentPage = 1
            },
        }
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
