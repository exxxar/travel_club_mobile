<template>
    <div id="mobile-table" v-if="tours != null || tours!=undefined">
        <create></create>
        <edit :edit_tour="edit_tour"></edit>
        <data-table
            title="Туры"
            :columns="columns"
            :rows="tours"
            :perPage="[ 5, 10, 25, 50 ]"
            :expandMode="true"
            :addButton="true"
            :addButtonClick="addClientTour"
            :loadingAnimation="load"
        >
            <th slot="thead-tr" style="width: auto">
                Действия
            </th>
            <template slot="tbody-tr" slot-scope="props">
                <td data-title="Действия">
                    <button v-if="!props.row.isLoading" class="btn waves-effect" style="outline: none;"
                            @click="deleteClientTour(props.row)"
                    >
                        <i class="material-icons" style="color: #0d274b;">delete</i>
                    </button>
                    <div v-if="props.row.isLoading" class="d-flex align-items-center float-left" style="padding: .375rem .75rem;">
                        <div class="spinner-border text-center" style="width: 24px; height: 24px;" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <button v-if="!props.row.isLoading" class="btn waves-effect" style="outline: none;" data-toggle="modal" data-target="#editUserTourModalBox"
                            @click="editClientTour(props.row)"
                    >
                        <i class="material-icons" style="color: #0d274b;" >edit</i>
                    </button>
                </td>
            </template>
            <template slot="expand-panel" slot-scope="props">
                <div style="width: 100%; height: 100%">
                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%">
                        <div class="col-md-6 col-sm-12 mx-auto">
                            <div class="list-group">
                                <div class="list-group-item flex-column align-items-start p-1">
                                    <div class="d-flex w-100 justify-content-between">
                                        <label class="mb-1 control-label" style="color: #f08b23">Страна</label>
                                    </div>
                                    <p class="mb-1">{{props.row.expand.country.Name}}</p>
                                </div>
                                <div class="list-group-item flex-column align-items-start p-1">
                                    <div class="d-flex w-100 justify-content-between">
                                        <label class="mb-1 control-label" style="color: #f08b23">Курорт</label>
                                    </div>
                                    <p class="mb-1">
                                        {{props.row.expand.resort.Name}}
                                    </p>
                                </div>
                                <div class="list-group-item flex-column align-items-start p-1">
                                    <div class="d-flex w-100 justify-content-between">
                                        <label class="mb-1 control-label" style="color: #f08b23">Отель</label>
                                    </div>
                                    <p class="mb-1">
                                        {{props.row.expand.hotel.Name}}
                                    </p>
                                </div>
                                <div class="list-group-item flex-column align-items-start p-1">
                                    <div class="d-flex w-100 justify-content-between">
                                        <label class="mb-1 control-label" style="color: #f08b23">Питание</label>
                                    </div>
                                    <p class="mb-1">
                                        {{props.row.expand.meal.Name}}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 mx-auto">
                            <div class="list-group">
                                <div class="list-group-item flex-column align-items-start p-1">
                                    <div class="d-flex w-100 justify-content-between">
                                        <label class="mb-1 control-label" style="color: #f08b23">Даты тура</label>
                                    </div>
                                    <p class="mb-1">{{ props.row.expand.date_range.start}} - {{ props.row.expand.date_range.end}}</p>
                                </div>
                                <div class="list-group-item flex-column align-items-start p-1">
                                    <div class="d-flex w-100 justify-content-between">
                                        <label class="mb-1 control-label" style="color: #f08b23">Цена</label>
                                    </div>
                                    <p class="mb-1">{{ props.row.expand.price}}</p>
                                </div>
                                <div class="list-group-item flex-column align-items-start p-1">
                                    <div class="d-flex w-100 justify-content-between">
                                        <label class="mb-1 control-label" style="color: #f08b23">Выплачено</label>
                                    </div>
                                    <p class="mb-1">{{ props.row.expand.paid}}</p>
                                </div>
                                <div class="list-group-item flex-column align-items-start p-1">
                                    <div class="d-flex w-100 justify-content-between">
                                        <label class="mb-1 control-label" style="color: #f08b23">Остаток</label>
                                    </div>
                                    <p class="mb-1">{{ props.row.expand.left}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 mx-auto">
                            <label class="mb-1 control-label" style="color: #f08b23">Дополнительные услуги</label>
                            <div class="list-group-item flex-column align-items-start p-1">
                                <p class="mb-1">{{ props.row.expand.services}}</p>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 mx-auto">
                            <label class="mb-1 control-label" style="color: #f08b23">Файлы</label>
                            <div
                                class="list-group-item"
                                v-for="(file, index) in props.row.expand.files"
                                :key="file.name"
                            >
                                <div class="row m-auto w-100 align-items-center justify-content-center" v-if="file.type=='file'">
                                    <div class="col-4 text-center">
                                        <img class="preview" v-if="/\.(jpe?g|png|svg)$/i.test(file.name)" :src="file.path"/>
                                        <img class="preview" v-else src="/images/LOGO-1.png"/>
                                    </div>
                                    <div class="col-8">
                                        <div v-if="file.type=='file'">
                                            <p class="control-label">{{file.name}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row m-auto w-100 align-items-center justify-content-center" v-if="file.type=='audio'">
                                    <div class="audio-container w-100">
                                        <audio-player :audio="file" class="w-100" type="url"></audio-player>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </data-table>
    </div>
</template>

<script>
    import moment from 'moment'
    import Edit from "./Edit";
    import Create from "./Create";
    export default {
        name: "Index",
        components: {Edit, Create},
        props:['tours', 'load'],
        data() {
            return {
                columns: [
                    {
                        label: 'ID тура',
                        field: 'id',
                    },
                    {
                        label: 'Дата',
                        field: 'created_at',
                    },
                    {
                        label: 'С',
                        field: 'TourInfo.date_range.start',
                    },
                    {
                        label: 'По',
                        field: 'TourInfo.date_range.end',
                    },
                    {
                        label: 'Страна',
                        field: 'TourInfo.country.Name',
                    },
                    {
                        label: 'Курорт',
                        field: 'TourInfo.resort.Name',
                    },
                    {
                        label: 'Цена',
                        field: 'TourInfo.price',
                    },
                    {
                        label: 'Выплачено',
                        field: 'TourInfo.paid',
                    },
                ],
                new_tour:{
                    UserId:'',
                    TourId:'',
                    TourInfo: {
                        country:{Id:150,Name:"Россия",Alias:"Russia",Flags:8,HasTickets:true,HotelIsNotInStop:true,IsProVisa:false,IsVisa:false,OriginalName:"Russia",Rank:0,TicketsIncluded:true},
                        resort:{Name:'Любой'},
                        hotel: {Name:'Любой'},
                        room_type:'',
                        meal:'',
                        tour_operator:'',
                        date_range:{start:'', end:''},
                        price:'',
                        paid:'',
                        left:0,
                        services:'',
                        avia_tickets:[],
                        passengers:[],
                        files:[],
                    },
                    StartAt:'',
                    EndAt:'',
                    Comment:''
                },
                edit_tour:{
                    UserId:'',
                    TourId:'',
                    TourInfo: {
                        country:'',
                        resort:'',
                        hotel:'',
                        room_type:'',
                        meal:'',
                        tour_operator:'',
                        date_range:{start:'', end:''},
                        price:'',
                        paid:'',
                        left:0,
                        services:'',
                        avia_tickets:[],
                        passengers:[],
                        files:[],
                        delete_files: [],
                        new_files: [],
                    },
                    StartAt:'',
                    EndAt:'',
                    Comment:''
                },
                // load:false,
            }
        },
        computed: {
            menu() {
                return this.$store.getters.menu
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
            //edit
            editClientTour(row) {
                this.edit_tour = row;
                this.edit_tour.TourInfo.start = moment(this.edit_tour.TourInfo.date_range.start, "DD/MM/YYYY").toDate();
                this.edit_tour.TourInfo.end = moment(this.edit_tour.TourInfo.date_range.end, "DD/MM/YYYY").toDate();
                // this.start =this.edit_tour.TourInfo.date_range.start;
                // this.end =this.edit_tour.TourInfo.date_range.end
                // this.edit_tour.TourInfo.date_range.start= this.start;
                // this.edit_tour.TourInfo.date_range.end= this.end;

                this.edit_tour.TourInfo.delete_files=[];
                this.edit_tour.TourInfo.new_files=[];
                this.edit_tour.new_files=[];
                this.$store.dispatch('getCities', this.edit_tour.TourInfo.country.Id);
                this.$store.dispatch('getHotels', {country_id:this.edit_tour.TourInfo.country.Id, town_id:'0', star_id:'0'});
                // $('#editUserTourModalBox').modal('show');
            },

            deleteClientTour(row) {
                row.isLoading = true;
                this.$store.dispatch('deleteClientTour', row)
                    .then(response => {
                        row.isLoading = false;
                        this.sendMessage('Тур клиента успешно удалён');
                    });
            },

            //new
            addClientTour: function(){
                this.$store.dispatch('getCities', this.new_tour.TourInfo.country.Id);
                this.$store.dispatch('getHotels', {country_id:this.new_tour.TourInfo.country.Id, town_id:'0', star_id:'0'});
                $('#newUserTourModalBox').modal('show');
            },

            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от TravelClub',
                    text: message
                });
            },
        },
    }
</script>

<style scoped>

</style>
