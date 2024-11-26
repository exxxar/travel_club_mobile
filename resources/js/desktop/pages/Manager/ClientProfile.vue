<template>
    <div id="client">
        <div class="container m-auto" style="height: 100%;">
            <div class="row mx-auto">
                <div class="col-md-12">
                    <div class="row mx-auto mt-3 mb-5 justify-content-center align-items-center" style="width: 100%;border-top: 4px solid #f08b23;">
                        <span class="white--text active-tour" style="background:#062348; font-size: 24px;position: absolute">Профиль</span>
                    </div>
                </div>
                <div class="col-md-12">
                    <ValidationObserver v-slot="{ invalid }">
                        <card id="client-profile">
                            <div class="row w-100 p-2 m-auto">
                                <div class="col-md-4 pe-md-1">
                                    <ValidationProvider name="lastName" rules="required" v-slot="{ errors }" style="width:100%;">
                                        <b-form-group label="Фамилия" label-size="sm" class="mb-0">
                                            <b-form-input label="Фамилия"
                                                          v-model="client.info.LastName"
                                                          placeholder="Фамилия"
                                                          class="mb-0 travel-input"
                                            >
                                            </b-form-input>
                                        </b-form-group>
                                        <span class="validate-error">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="col-md-4 px-md-1">
                                    <ValidationProvider name="firstName" rules="required" v-slot="{ errors }" style="width:100%;">
                                        <b-form-group label="Имя" label-size="sm" class="mb-0">
                                            <b-form-input label="Имя"
                                                          v-model="client.info.FirstName"
                                                          placeholder="Имя"
                                                          class="mb-0 travel-input"
                                            >
                                            </b-form-input>
                                        </b-form-group>
                                        <span class="validate-error">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="col-md-4 ps-md-1">
                                    <b-form-group label="Отчество" label-size="sm" class="mb-0">
                                        <b-form-input label="Отчество"
                                                      v-model="client.info.MiddleName"
                                                      placeholder="Отчество"
                                                      class="mb-0 travel-input"
                                        >
                                        </b-form-input>
                                    </b-form-group>
                                </div>
                            </div>
                            <div class="row w-100 p-2 m-auto">
                                <!--                            <div class="col-md-4 pe-md-1">-->
                                <!--                                <ValidationProvider name="login" rules="required" v-slot="{ errors }" style="width:100%;">-->
                                <!--                                    <b-form-input label="Логин"-->
                                <!--                                                placeholder="Логин"-->
                                <!--                                                v-model="user.login"-->
                                <!--                                                disabled-->
                                <!--                                                class="mb-0"-->
                                <!--                                    >-->
                                <!--                                    </b-form-input>-->
                                <!--                                    <span class="validate-error">{{ errors[0] }}</span>-->
                                <!--                                </ValidationProvider>-->
                                <!--                            </div>-->
                                <div class="col-md-4 pe-md-1">
                                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }" style="width:100%;">
                                        <b-form-group label="Email" label-size="sm" class="mb-0">
                                            <b-form-input label="Email"
                                                          type="email"
                                                          placeholder="client@email.com"
                                                          v-model="client.email"
                                                          class="mb-0 travel-input"
                                            >
                                            </b-form-input>
                                        </b-form-group>
                                        <span class="validate-error">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="col-md-4 px-md-1">
                                    <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;">
                                        <b-form-group label="Телефон" label-size="sm" class="mb-0">
                                            <b-form-input label="Телефон"
                                                          placeholder="Телефон"
                                                          v-model="client.info.Phone"
                                                          v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                                          class="mb-0 travel-input"
                                            >
                                            </b-form-input>
                                        </b-form-group>
                                        <span class="validate-error">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="row w-100 p-2 m-auto">
                                <div class="col-md-4 pe-md-1">
                                    <ValidationProvider name="City" rules="required" v-slot="{ errors }" style="width:100%;">
                                        <b-form-group label="Город" label-size="sm" class="mb-0">
                                            <multiselect
                                                v-model="client.info.City"
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
                                                @input="selectCity(client.info)"
                                            >
                                                <template slot="singleLabel" slot-scope="props">
                                                <span class="option__desc">
                                                    <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571" v-if="props.option.city">{{ props.option.city}}</span>
                                                </span>
                                                </template>
                                                <template slot="option" slot-scope="props">
                                                <span class="option__desc">
                                                    <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571">{{ props.option.city}}</span>
                                                </span>
                                                </template>
                                            </multiselect>
                                        </b-form-group>
                                        <span class="validate-error">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="col-md-4 px-md-1">
                                    <ValidationProvider name="department" rules="required" v-slot="{ errors }" style="width:100%;">
                                        <b-form-group label="Отделение" label-size="sm" class="mb-0">
                                            <multiselect
                                                v-model="client.info.Department"
                                                :options="client.info.City.departments"
                                                :option-height="25"
                                                placeholder="Выберите отделение"
                                                :show-labels="false"
                                                :maxHeight="200"
                                                :disabled="client.info.City.departments.length===0"
                                                :allow-empty="false"
                                                label="address"
                                                track-by="address"
                                            >
                                                <template slot="singleLabel" slot-scope="props">
                                                    <span class="option__desc">
                                                        <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571">{{ props.option.address}}</span>
                                                    </span>
                                                </template>
                                                <template slot="option" slot-scope="props">
                                                    <span class="option__desc">
                                                        <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571">{{ props.option.address }}</span>
                                                    </span>
                                                </template>
                                            </multiselect>
                                        </b-form-group>
                                        <span class="validate-error">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="row w-100 p-2 m-auto">
                                <div class="col-md-12">
                                    <b-form-group label="Дополнительная информация" label-size="sm" class="mb-0">
                                        <b-form-textarea rows="4" cols="80"
                                                  class="travel-input p-2"
                                                  placeholder="Дополнительная информация о клиенте"
                                                  v-model="client.info.About"
                                                  style="border-radius: 20px !important;"
                                        >
                                        </b-form-textarea>
                                    </b-form-group>
                                </div>
                            </div>
                            <b-button slot="footer" class="btn btn-travel float-right" @click="updateClientInfo" :disabled="invalid">Сохранить</b-button>
                        </card>
                    </ValidationObserver>
                </div>
                <div class="col-md-12">
                    <div class="row mx-auto mt-5 mb-5 justify-content-center align-items-center" style="width: 100%;border-top: 4px solid #f08b23;">
                        <span class="white--text active-tour" style="background:#062348; font-size: 24px;position: absolute">Туры</span>
                    </div>
                </div>
                <div class="col-md-12" v-if="client != null">
<!--                    <client-tours :tours="client.tours" :load="load"></client-tours>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mask} from 'vue-the-mask'
    import moment from 'moment'
    import ClientTours from "./ClientTours/Index";
    export default {
        components: {ClientTours},
        data() {
            return {
                current_client: {},
                clientTours:[],
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
                city_options: [
                    'Донецк',
                    'Ростов-на-Дону'
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
                new_mode:false,
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
                edit_loading: false,
                new_loading: false,
                load:true,
                new_files:[],
                current_manager: null,
                start: undefined,
                end: undefined,
            }
        },
        created() {
            if (this.countries.length===0) {
                this.$store.dispatch('getCountries', {town_id:0});
            }
            if (this.clients.length>0) {
                this.load = true;
                this.current_client = this.clients.find((client) => client.id == this.$route.params.id);
                // this.clientTours=this.client.tours;
                this.load = false;
                if (this.managers.length>0)
                {
                    this.current_manager= this.managers.find((manager) => manager.id == this.current_client.info.ManagerId)

                }
                else {
                    this.getManagers()
                }
            } else {
               this.getClient();
            }
            // console.log(this.client)
        },
        mounted() {
            if(this.branches.length<=0){
                this.loadBranches();
            }
            // this.new_tour.TourInfo.country={Id:150,Name:"Россия",Alias:"Russia",Flags:8,HasTickets:true,HotelIsNotInStop:true,IsProVisa:false,IsVisa:false,OriginalName:"Russia",Rank:0,TicketsIncluded:true};
            // this.$store.dispatch('getCities', this.new_tour.TourInfo.country.Id);
            // this.$store.dispatch('getHotels', {country_id:this.new_tour.TourInfo.country.Id, town_id:'', star_id:''});
        },
        computed: {
            menu() {
                return this.$store.getters.menu
            },
            clients() {
                return this.$store.getters.clients
            },
            client() {
                return this.current_client
            },
            managers() {
                return this.$store.getters.managers
            },
            manager() {
                return this.current_manager
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
            //info
            updateClientInfo() {
                this.client.info.ManagerId = this.manager.id;
                var data ={
                    info: this.client.info,
                    id: this.client.id
                }

                this.$store.dispatch('updateClientInfo', this.client.info)
                    .then(response => {
                        this.sendMessage('Информация клиента успешно обновлена');
                    });
            },
            async getClient() {
                // await this.$http.get(`auth/manager/clients/${this.$route.params.id}`)
                //     .then((response) => {
                //         this.client = response.data.client;
                //         this.clientTours=this.client.tours;
                //         this.clientTours.forEach( tour => {
                //             tour.show = false;
                //             tour.isLoading = false;
                //             tour.expand = {
                //                 country: tour.TourInfo.country,
                //                 resort: tour.TourInfo.resort,
                //                 hotel: tour.TourInfo.hotel,
                //                 meal:tour.TourInfo.meal,
                //                 room_type:tour.TourInfo.room_type,
                //                 tour_operator:tour.TourInfo.tour_operator,
                //                 date_range:{start:tour.TourInfo.date_range.start, end:tour.TourInfo.date_range.end},
                //                 price:tour.TourInfo.price,
                //                 paid:tour.TourInfo.paid,
                //                 left:tour.TourInfo.left,
                //                 services:tour.TourInfo.services,
                //                 avia_tickets:tour.TourInfo.avia_tickets,
                //                 passengers:tour.TourInfo.passengers,
                //                 files:tour.TourInfo.files,
                //             }
                //         })
                //         this.load = false;
                //     });
                // console.log(this.clientTours)
                this.load = true;
                await this.$store.dispatch('setClients').then(response => {
                    this.current_client = this.clients.find((client) => client.id == this.$route.params.id);
                    // this.clientTours=this.client.tours;
                    this.load = false;
                    if (this.managers.length>0)
                    {
                        this.current_manager= this.managers.find((manager) => manager.id == this.current_client.info.ManagerId)
                    }
                    else {
                        this.getManagers()
                    }
                })
            },
            async getManagers() {
                await this.$store.dispatch('setManagers').then(() => {
                    this.current_manager= this.managers.find((manager) => manager.id == this.current_client.info.ManagerId)
                    console.log(this.managers)
                })
            },
            async loadBranches() {
                await this.$store.dispatch('setBranches')
            },
            async selectCity(item) {
                item.Department = '';
            },

            //edit
            editClientTour(row) {
                this.edit_tour = row;
                this.start = moment(this.edit_tour.TourInfo.date_range.start, "DD/MM/YYYY").toDate();
                this.end = moment(this.edit_tour.TourInfo.date_range.end, "DD/MM/YYYY").toDate();
                // this.start =this.edit_tour.TourInfo.date_range.start;
                // this.end =this.edit_tour.TourInfo.date_range.end
                // this.edit_tour.TourInfo.date_range.start= this.start;
                // this.edit_tour.TourInfo.date_range.end= this.end;

                this.edit_tour.TourInfo.delete_files=[];
                this.edit_tour.TourInfo.new_files=[];
                this.edit_tour.new_files=[];
                this.$store.dispatch('getCities', this.edit_tour.TourInfo.country.Id);
                this.$store.dispatch('getHotels', {country_id:this.edit_tour.TourInfo.country.Id, town_id:'0', star_id:'0'});
                this.$store.dispatch('openModal', '#editUserTourModalBox')

            },
            chooseEditResortCountry(value){
                this.edit_tour.TourInfo.resort={Name:'Любой'};
                this.edit_tour.TourInfo.hotel={Name:'Любой'};
                this.edit_tour.TourInfo.country = value;
                this.$store.dispatch('getCities', this.edit_tour.TourInfo.country.Id);
                this.$store.dispatch('getHotels', {country_id:this.edit_tour.TourInfo.country.Id, town_id:'0', star_id:'0'});
            },
            chooseEditResort(value) {
                this.edit_tour.TourInfo.resort = value;
                if(this.edit_tour.TourInfo.resort.Name != 'Любой')
                {
                    // this.new_tour.TourInfo.resort = this.tourModule.resorts[0];
                    var town_id = this.edit_tour.TourInfo.resort.Id;
                    //поиск отелей по городам-курортам
                    this.$store.dispatch('getHotels', {country_id:this.edit_tour.TourInfo.country.Id, town_id:town_id, star_id:'0'}).then(() => {
                        if(this.hotels.findIndex(item=> item.Id == this.edit_tour.TourInfo.hotel.Id) == -1)
                        {
                            this.edit_tour.TourInfo.hotel = {Name:'Любой'};
                        }
                    });
                }
                else {
                    //если городов-курортов не выбрано, то поиск отелей по стране
                    this.$store.dispatch('getHotels', {country_id:this.edit_tour.TourInfo.country.Id, town_id:'0', star_id:'0'});
                }
            },
            chooseEditHotel(value) {
                this.edit_tour.TourInfo.hotel = value;
            },
            changeEditDateRange(date_object) {
                this.edit_tour.TourInfo.date_range=date_object;
            },
            chooseEditMeal(value){
                this.edit_tour.TourInfo.meal = value;
            },
            deleteClientTour(row) {
                row.isLoading = true;
                this.$store.dispatch('deleteClientTour', row)
                    .then(response => {
                        row.isLoading = false;
                        this.sendMessage('Тур клиента успешно удалён');
                    });
            },
            changeEditPrice(){
                this.edit_tour.TourInfo.left = this.edit_tour.TourInfo.price - this.edit_tour.TourInfo.paid;
            },
            handleEditFiles() {
                let uploadedFiles = this.$refs.edit_tour_files.files;
                for(var i = 0; i < uploadedFiles.length; i++) {
                    if (/\.(jpe?g|png|svg|pdf|txt|docx|doc)$/i.test(uploadedFiles[i].name))
                    {
                        var date = new Date();
                        this.new_files.push({type:'file', name:uploadedFiles[i].name, data:uploadedFiles[i], date: date });
                        this.getImagePreviews(this.new_files);
                    }
                    else
                    {
                        break;
                    }
                }
            },
            onEditResult(data) {
                var time = Date.now();
                var date = new Date();
                this.new_files.push({
                    type: 'audio',
                    name: 'record-'+time+'.mp3',
                    src: window.URL.createObjectURL(data),
                    data: data,
                    date: date
                })
                this.getImagePreviews(this.new_files);
            },
            deleteFile(file, key) {
                // var data = {
                //     name: file.name,
                //     path: file.path
                // };
                // try {
                // const response = await axios.post('auth/manager/clients/tours/deleteFile',data);
                this.edit_tour.TourInfo.delete_files.push(file);
                this.edit_tour.TourInfo.files.splice( key, 1 );
                // this.getImagePreviews(this.edit_tour.TourInfo.files);
                // }
                // catch (error) {
                // }
            },
            updateClientTour(){
                this.edit_loading = true;
                this.edit_tour.StartAt = moment(this.edit_tour.TourInfo.date_range.start, "DD-MM-YYYY");
                this.edit_tour.EndAt = moment(this.edit_tour.TourInfo.date_range.end, "DD-MM-YYYY");
                console.log(this.edit_tour.EndAt)
                this.edit_tour.new_files = this.new_files;
                let formData = new FormData();
                formData.append("UserTour", JSON.stringify(this.edit_tour));

                for (var i = 0; i < this.new_files.length; i++) {
                    let file = this.new_files[i].data;

                    formData.append('new_files[' + i + ']', file);
                }

                this.$store.dispatch('updateClientTour', formData)
                    .then(response => {
                        console.log('response', response)
                        this.edit_tour.TourInfo.delete_files=[];
                        this.edit_tour.TourInfo.new_files=[];
                        this.edit_tour.TourInfo.files = response.TourInfo.files;
                        this.edit_tour.expand = response.expand;
                        this.sendMessage('Тур клиента успешно обновлён');
                        this.edit_tour={
                            UserId:'',
                            TourId:'',
                            TourInfo: {
                                country:'',
                                resort:'',
                                hotel:'',
                                meal:'',
                                tour_operator:'',
                                date_range:{start:'', end:''},
                                price:0,
                                paid:0,
                                left:0,
                                services:'',
                                avia_tickets:[],
                                passengers:[],
                                files:[],
                            },
                            new_files:[],
                            StartAt:'',
                            EndAt:'',
                            Comment:''
                        };
                            this.edit_loading = false;
                        this.$store.dispatch('closeModal', '#editUserTourModalBox');
                    });
            },

            //new
            addClientTour: function(){
                this.$store.dispatch('getCities', this.new_tour.TourInfo.country.Id);
                this.$store.dispatch('getHotels', {country_id:this.new_tour.TourInfo.country.Id, town_id:'0', star_id:'0'});
                this.$store.dispatch('openModal', '#newUserTourModalBox')
            },
            chooseNewResortCountry(value){
                this.new_tour.TourInfo.resort={Name:'Любой'};
                this.new_tour.TourInfo.hotel={Name:'Любой'};
                this.new_tour.TourInfo.country = value;
                this.$store.dispatch('getCities', this.new_tour.TourInfo.country.Id);
                this.$store.dispatch('getHotels', {country_id:this.new_tour.TourInfo.country.Id, town_id:'0', star_id:'0'});

            },
            chooseNewResorts(value){
                this.new_tour.TourInfo.resort = value;
                if(this.new_tour.TourInfo.resort.Name != 'Любой')
                {
                    // this.new_tour.TourInfo.resort = this.tourModule.resorts[0];
                    var town_id = this.new_tour.TourInfo.resort.Id;
                    //поиск отелей по городам-курортам
                    this.$store.dispatch('getHotels', {country_id:this.new_tour.TourInfo.country.Id, town_id:town_id, star_id:'0'}).then(() => {
                        if(this.hotels.findIndex(item=> item.Id == this.new_tour.TourInfo.hotel.Id) == -1)
                        {
                            this.new_tour.TourInfo.hotel = {Name:'Любой'};
                        }
                    });
                }
                else {
                    //если городов-курортов не выбрано, то поиск отелей по стране
                    this.$store.dispatch('getHotels', {country_id:this.new_tour.TourInfo.country.Id, town_id:'0', star_id:'0'});
                }
            },
            chooseNewHotel(value) {
                this.new_tour.TourInfo.hotel = value;
            },
            changeNewDateRange(date_object) {
                this.new_tour.TourInfo.date_range=date_object;
            },
            chooseNewMeal(value){
                this.new_tour.TourInfo.meal = value;
            },
            changeNewPrice(){
                this.new_tour.TourInfo.left = this.new_tour.TourInfo.price - this.new_tour.TourInfo.paid;
            },
            handleNewFiles() {
                let uploadedFiles = this.$refs.new_tour_files.files;
                for(var i = 0; i < uploadedFiles.length; i++) {
                    if (/\.(jpe?g|png|svg|pdf|txt|docx|doc)$/i.test(uploadedFiles[i].name))
                    {
                        var date = new Date();
                        this.new_tour.TourInfo.files.push({type:'file', name:uploadedFiles[i].name, data:uploadedFiles[i], date:date});
                        this.getImagePreviews(this.new_tour.TourInfo.files);
                    }
                    else
                    {
                        break;
                    }
                }
            },
            onResult(data) {
                var time = Date.now();
                var date = new Date();
                this.new_tour.TourInfo.files.push({
                    type: 'audio',
                    name: 'record-'+time+'.mp3',
                    src: window.URL.createObjectURL(data),
                    data: data,
                    date: date,
                })
                this.getImagePreviews(this.new_tour.TourInfo.files);
            },
            saveClientTour(){
                this.new_loading = true;
                this.new_tour.UserId = this.$route.params.id;
                this.new_tour.StartAt = moment(this.new_tour.TourInfo.date_range.start, "DD-MM-YYYY");
                this.new_tour.EndAt = moment(this.new_tour.TourInfo.date_range.end, "DD-MM-YYYY");

                let formData = new FormData();
                formData.append("UserTour", JSON.stringify(this.new_tour));

                for (var i = 0; i < this.new_tour.TourInfo.files.length; i++) {
                    let file = this.new_tour.TourInfo.files[i].data;

                    formData.append('files[' + i + ']', file);
                }

                this.$store.dispatch('newClientTour', formData)
                    .then(response => {
                        this.sendMessage('Тур клиента успешно добавлен');

                        this.new_tour= {
                            UserId:'',
                            TourId:'',
                            TourInfo: {
                                country:'',
                                resort:'',
                                hotel:'',
                                meal:'',
                                tour_operator:'',
                                date_range:{start:'', end:''},
                                price:0,
                                paid:0,
                                left:0,
                                services:'',
                                avia_tickets:[],
                                passengers:[],
                                files:[],
                            },
                            StartAt:'',
                            EndAt:'',
                            Comment:'',
                            Archive:false
                        }

                        this.new_loading = false;
                        this.$store.dispatch('closeModal', '#newUserTourModalBox');
                    });

            },

            //both
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
            removeFile( arr, key ) {
                arr.splice( key, 1 );
                this.getImagePreviews(arr);
            },
            onStream(stream) {
                console.log('Got a stream object:', stream);
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
<!--<style scoped lang="scss" src="@/sass/black-dashboard.scss">-->

<!--</style>-->
<style>
    .modal-dialog{
        transform: none !important;
    }
    #client .modal-dialog{
        max-width: 900px !important;
    }
    .modal-title{
        color: #062348;
        font-weight: 900;
        font-family: "Open Sans";
    }
    .travel-card-description{
        color: #062348;
        font-size: 13px;
        font-weight: 900;
        font-family: "Open Sans";
    }
    .more-text {
        font-family: "Open Sans";
        text-transform: uppercase;
        color: #f08b23;
        font-weight: 600;
        font-size: 16px;
        cursor:pointer;
    }
    .more-button {
        cursor:pointer;
        margin: 0 10px;
        right: 10px;
    }
    .more-button div {
        width: 40px;
        height: 40px;
        display: block;
        border-radius: 50px;
        text-decoration: none;
        font-size: 40px;
        /*line-height: 50px;*/
        color:  white;
        background: #f08b23;
        padding: 0px !important;
    }
    .travel-card {
        border-radius: 20px;
        background: white;
        box-shadow: 0px 3px 15px #0000006b;
        -moz-box-shadow: 0px 3px 15px #0000006b;
        -webkit-box-shadow: 0px 3px 15px #0000006b;
    }

    .white--text {
        color: #fff !important;
        caret-color: #fff !important;
    }
    .active-tour {
        background: #f08b23;
        border-radius: 20px;
        padding: 3px 20px;
        -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        font-weight: 900;
        text-transform: uppercase;
        font-family: 'Open Sans';
    }
    /*.card label {*/
    /*    font-family: "Open Sans" !important;*/
    /*    font-weight: 900 !important;*/
    /*    font-size: 0.7500000025rem;*/
    /*}*/
    .control-label {
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
        color: #344675;
        font-size: 0.7500000025rem;
    }
    .white-content .form-control::placeholder {
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
    }
    .white-content .form-control{
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
        color: #062348;
    }
    .white-content  .form-control {
        border-color: #f08b23;
        border-radius: 20px;
    }
    .v-card > :last-child:not(.v-btn):not(.v-chip) {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
    .v-card > :first-child:not(.v-btn):not(.v-chip), .v-card > .v-card__progress + :not(.v-btn):not(.v-chip) {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
    .v-card > :last-child:not(.v-btn):not(.v-chip) {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
    .v-card > .v-card__progress + :not(.v-btn):not(.v-chip), .v-card > :first-child:not(.v-btn):not(.v-chip) {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
    .v-responsive {
        position: relative;
        overflow: hidden;
        flex: 1 0 auto;
        max-width: 100%;
        display: flex;
    }
    .v-image {
        z-index: 0;
    }
    .v-card {
        overflow-wrap: break-word;
        white-space: normal;
    }
    .v-responsive__sizer {
        background: #0d274b61;
        transition: padding-bottom .2s cubic-bezier(.25,.8,.5,1);
        flex: 1 0 0px;
    }
    .v-image__image--cover {
        background-size: cover;
    }
    .v-image__image {
        background-repeat: no-repeat;
    }
    .v-image__image, .v-image__placeholder {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .v-responsive__sizer ~ .v-responsive__content {
        margin-left: -100%;
    }
    .v-responsive__content {
        flex: 1 0 0px;
        max-width: 100%;
    }
    .elevation-24 {
        -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .v-card__title {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: .0125em;
        line-height: 2rem;
        word-break: break-all;
    }
    .v-card__subtitle, .v-card__text, .v-card__title {
        padding: 16px;
    }
    .v-card__subtitle {
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .v-card__subtitle h3{
        font-weight: 900;
        font-family: 'Open Sans';
    }
</style>
<style>
    @media only screen and (max-width:767.98px) {
        .vhd-container:not(.desktop) .vhd-picker {
            width: 100% !important;
            padding: 8px
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

    #client .vhd-picker {
        z-index: 3 !important;
        min-height: 362px!important;
        padding: 18px!important;
    }
    #client .vhd-container{
        width: 100% !important;
    }
    #client .vhd-input {
        min-width: 100px;
        padding: 8px;
        border: 1px solid #f08b23 !important;
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

    .multiselect__option.multiselect__option--group.multiselect__option--disabled{
        text-align: center;
        background: white !important;
        color:#f08b23 !important;
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
        font-family: "Open Sans";
        font-weight: 600;
        font-size: 1rem;
    }

    #client-profile .multiselect{
        min-height: 38px;
    }
    #client-profile .multiselect__tags {
        border: 1px solid #f08b23;
        border-radius: 20px;
        font-size: 0.7500000025rem;
        min-height: 38px;
        line-height: 1.428571 !important;
    }
    #client .multiselect__tags {
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
    .multiselect__option--selected.multiselect__option--highlight::after {
        background: #ff6a6a00;
        content: attr(data-deselect);
        color: #fff;
    }
    .multiselect__option--highlight::after {
        background: #f08b2300;
    }
    .multiselect__option--highlight{
        background: #f08b23;
    }
    .multiselect__option {
        white-space: break-spaces !important;
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
    #client-profile .multiselect__input::placeholder {
        color: #062348 !important;
        font-family: Open Sans !important;
        font-weight: 700;
        font-size: 0.7500000025rem !important;
        line-height: 1.428571 !important;
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
    #client .qty button{
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: pointer;
        display: inline-block;
        vertical-align: top;
        color: white;
        width: 20px;
        height: 20px;
        font: 20px/1 Arial,sans-serif;
        text-align: center;
        border-radius: 50%;
        padding: 0;
        background: #f08b23;
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

    #client .qty input{
        border: 0;
        width: 50%;
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
<style scoped>
    input[type="file"]{
        opacity: 0;
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }
    .filezone {
        outline: 2px dashed grey;
        outline-offset: -10px;
        background: #ccc;
        color: dimgray;
        padding: 10px 10px;
        min-height: 200px;
        position: relative;
        cursor: pointer;
    }
    .filezone:hover {
        background: #c0c0c0;
    }

    .filezone p {
        font-size: 1.2em;
        text-align: center;
        padding: 50px 50px 50px 50px;
    }
    div.file-listing img{
        max-width: 90%;
    }

    div.file-listing{
        margin: auto;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    div.file-listing img{
        height: 100px;
    }
    .preview{
        height: 100px;
        max-width: 90%;
    }
    div.success-container{
        text-align: center;
        color: green;
    }

    div.remove-container{
        text-align: center;
    }

    div.remove-container a{
        color: red;
        cursor: pointer;
    }

    a.submit-button{
        display: block;
        margin: auto;
        text-align: center;
        width: 200px;
        padding: 10px;
        text-transform: uppercase;
        background-color: green;
        color: white;
        font-weight: bold;
        margin-top: 20px;
    }
</style>
