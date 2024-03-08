<template>
    <div class="modal fade modalbox show"
         id="editUserTourModalBox"  data-bs-backdrop="static"
         tabindex="-1" role="dialog"
         aria-modal="true"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Редактировать тур клиента</h5>
                    <a href="javascript:;"  data-bs-dismiss="modal" style="text-decoration: none">Закрыть</a>
                </div>
                <div class="modal-body">
                    <div class="start-form" style="margin-bottom: 110px">
                        <div class="section mx-auto">
                            <div class="row my-3">
                                <ValidationObserver v-slot="{ invalid }">
                                    <div class="col-md-6 col-12">
                                        <label class="control-label">Куда</label>
                                        <multiselect
                                            v-model="edit_tour.TourInfo.country"
                                            :options="countries"
                                            :option-height="25"
                                            placeholder="Выберите страну"
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
                                    <div class="col-md-6 col-12">
                                        <label class="control-label">Курорт</label>
                                        <multiselect
                                            :value="edit_tour.TourInfo.resort"
                                            :options="cities"
                                            placeholder="Введите название курорта"
                                            :show-labels="false"
                                            :maxHeight="200"
                                            label="Name"
                                            track-by="Name"
                                            :close-on-select="true" :clear-on-select="true"
                                            :loading="isCountriesLoading || isCitiesLoading"
                                            :disabled="isCountriesLoading || isCitiesLoading"
                                            @input="chooseEditResort"
                                            :allow-empty="false"
                                            :preselectFirst="true"
                                        >
                                            <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length>3 && !isOpen">{{ values.length }} {{values.length | pluralizeResorts }} {{values.length | pluralizeChoose}}</span></template>
                                        </multiselect>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <label class="control-label">Отель</label>
                                        <multiselect
                                            :value="edit_tour.TourInfo.hotel"
                                            :options="hotels"
                                            placeholder="Введите название отеля"
                                            :show-labels="false"
                                            :limit="2"
                                            :maxHeight="200"
                                            label="Name"
                                            track-by="Name"
                                            :allow-empty="false"
                                            :close-on-select="true" :clear-on-select="true"
                                            :loading="isCountriesLoading || isHotelsLoading"
                                            :disabled="isCountriesLoading || isHotelsLoading"
                                            @input="chooseEditHotel"
                                        >
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
                                    <div class="col-md-6 col-12">
                                        <label class="control-label">Категория номера</label>
                                        <ValidationProvider name="room_type" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                            <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                <input type="text" class=" multiselect__input price" v-model="edit_tour.TourInfo.room_type" placeholder="Категория номера">
                                            </div>
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <label class="control-label">Питание</label>
                                        <ValidationProvider name="meal" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                            <multiselect
                                                v-model="edit_tour.TourInfo.meal"
                                                :options="meals"
                                                :option-height="25"
                                                placeholder="Выберите питание"
                                                :show-labels="false"
                                                :maxHeight="200"
                                                label="Name"
                                                track-by="Name"
                                                :close-on-select="true" :clear-on-select="true"
                                                @input="chooseEditMeal"
                                                :allow-empty="false"
                                            >
                                                <template slot="singleLabel" slot-scope="props">
                                <span class="option__desc">
                                    <span class="option__title">{{props.option.Name}}</span>
                                </span>
                                                </template>
                                                <template slot="option" slot-scope="props">
                                                    <div>
                                                        <div class="option__desc">
                                                            <span class="option__title">{{props.option.Name}}</span>
                                                        </div>
                                                        <div class="row align-items-center m-auto" style="width: 100%; height: 100%">
                                                            <p class="" style="font-size: 12px; margin:0px;">{{props.option.desc}}</p>
                                                        </div>
                                                    </div>
                                                </template>
                                            </multiselect>
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="row align-items-center justify-content-center mx-auto" style="width: 100%;">
                                            <label class="control-label">Даты тура</label>
                                            <ValidationProvider name="date_range" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row align-items-center justify-content-center m-auto w-100" style="width: 100%;">
                                                    <VueHotelDatepicker
                                                        ref="datepickerId"
                                                        :startDate="edit_tour.TourInfo.start"
                                                        :endDate="edit_tour.TourInfo.end"
                                                        :placeholder="'Даты тура'"
                                                        :format="'DD/MM/YYYY'"
                                                        :weekList="['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.']"
                                                        :monthList="['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май.', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт', 'Ноя.', 'Дек.']"
                                                        :fromText="'С'"
                                                        :toText="'По'"
                                                        :resetText="'Очистить'"
                                                        :confirmText="'Подтвердить'"
                                                        :mobile="'mobile'"
                                                        class="w-100"
                                                        @update="changeEditDateRange"
                                                    />
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                            <label class="control-label">Цена</label>
                                            <ValidationProvider name="price" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                    <input type="number" class="multiselect__input price" v-model="edit_tour.TourInfo.price" step="1" min="0" @input="changeEditPrice">
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                            <label class="control-label">Выплачено</label>
                                            <ValidationProvider name="paid" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                                <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                    <input type="number" class=" multiselect__input price" v-model="edit_tour.TourInfo.paid" step="1" min="0" @input="changeEditPrice">
                                                </div>
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                            <label class="control-label">Дополнительные услуги</label>
                                            <textarea rows="4" cols="80"
                                                      class="form-control"
                                                      placeholder="Дополнительные услуги"
                                                      v-model="edit_tour.TourInfo.services"
                                                      style="padding: 5px 15px; border: 1px solid #f08b23;border-radius: 20px"
                                            >
                        </textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <label class="control-label">Авиабилеты</label>
                                        <avia-tickets-list :avia_tickets="edit_tour.TourInfo.avia_tickets"></avia-tickets-list>

                                    </div>
                                    <div class="col-md-12">
                                        <label class="control-label">Пассажиры</label>
                                        <passengers-list :passengers="edit_tour.TourInfo.passengers"></passengers-list>
                                    </div>
                                    <div class="col-md-12">
                                        <label class="control-label">Файлы для клиента</label>
                                        <div class="row w-100 mx-auto mt-2">
                                            <div class="col-md-12">
                                                <div class="large-12 medium-12 small-12 filezone">
                                                    <input type="file" id="files" ref="edit_tour_files" multiple v-on:change="handleEditFiles()"/>
                                                    <p>
                                                        Перетащите файл(ы) сюда<br>или нажмите для поиска
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <label class="control-label">Или запишите голосовое сообщение</label>
                                        <div class="d-flex justify-content-center mt-2">
                                            <vue-record-audio :mode="'press'" @stream="onStream" @result="onEditResult"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="file-listing">
                                            <div
                                                class="list-group-item"
                                                v-for="(file, index) in edit_tour.TourInfo.files"
                                                :key="file.name"
                                            >
                                                <div class="row m-auto w-100 align-items-center justify-content-center" v-if="file.type=='file'">
                                                    <div class="col-4 text-center">
                                                        <img class="preview" v-if="/\.(jpe?g|png|svg)$/i.test(file.name)" :src="file.path"/>
                                                        <img class="preview" v-else src="/images/LOGO-1.png"/>
                                                    </div>
                                                    <div class="col-8">
                                                        <div>
                                                            <p class="control-label">{{file.name}}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row m-auto w-100 align-items-center justify-content-center" v-if="file.type=='audio'">
                                                    <div class="audio-container w-100">
                                                        <audio-player :audio="file" class="w-100"></audio-player>
                                                    </div>
                                                </div>

                                                <div class="remove-container">
                                                    <a class="remove" v-on:click="deleteFile(file, index)" v-if="loading == false">Удалить</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="file-listing">
                                            <div class="list-group-item" v-for="(file, index) in new_files">
                                                <div class="row m-auto w-100 align-items-center justify-content-center" v-if="file.type=='file'">
                                                    <div class="col-4 text-center">
                                                        <img class="preview" v-bind:ref="'preview'+parseInt(index)"/>
                                                    </div>
                                                    <div class="col-8">
                                                        <div>
                                                            <p class="control-label">{{file.data.name}}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row m-auto w-100 align-items-center justify-content-center" v-if="file.type=='audio'">
                                                    <div class="audio-container w-100">
                                                        <audio-player :audio="file" class="w-100"></audio-player>
                                                    </div>
                                                </div>
                                                <div class="remove-container">
                                                    <a class="remove" v-on:click="removeFile(new_files, index)" v-if="loading == false">Отменить</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 contact-btn form-button-group">
                                        <button type="submit" class="btn btn-block btn-lg" style="width: 100%" @click="updateClientTour" :disabled="invalid||loading">
                                            <div class="row align-items-center justify-content-center m-auto w-100 h-100 text-center">
                                                <span v-if="loading" role="status" aria-hidden="true" class="spinner-border spinner-border-sm mx-2"></span>
                                                <span v-if="loading" class="sr-only">Loading...</span>
                                                Сохранить
                                            </div>
                                        </button>
                                    </div>
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mask} from 'vue-the-mask'
    import moment from 'moment'

    export default {
        name: "Edit",
        props:['edit_tour'],
        data() {
            return {
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
                loading: false,
                start: undefined,
                end: undefined,
                new_files:[],
                flag:false,
                seconds:0,
                interval:'',
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
                    date: date,
                    seconds: this.seconds
                })
                this.countSeconds();
                // this.getImagePreviews(this.new_files);
            },
            deleteFile(file, key) {
                this.edit_tour.TourInfo.delete_files.push(file);
                this.edit_tour.TourInfo.files.splice( key, 1 );
            },
            updateClientTour(){
                this.loading = true;
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
                                price:'',
                                paid:'',
                                left:'',
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
                        this.loading = false;
                        this.$store.dispatch('closeModal', '#editUserTourModalBox');
                    });
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
            removeFile( arr, key ) {
                arr.splice( key, 1 );
                this.getImagePreviews(arr);
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
                    this.voice_record.seconds = this.seconds
                }
            },
            incrementSeconds() {
                this.seconds += 1;
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
