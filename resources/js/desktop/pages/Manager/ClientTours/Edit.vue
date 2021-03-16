<template>
    <ValidationObserver v-slot="{ invalid }">
        <b-modal id="editUserTourModalBox" title="Редактировать тур клиента" centered scrollable size="lg">
            <div class="row mb-5 mx-auto">
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
                            <b :class="'slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_'+props.option.Id"></b>
                            <span class="option__desc">
                                        <span class="option__title">{{ props.option.Name }}</span>
                                    </span>
                        </template>
                        <template slot="option" slot-scope="props">
                            <b :class="'slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_'+props.option.Id"></b>
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
                    <div class="row align-items-center w-100 mx-auto" style="width: 100%;">
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
                    <div class="row align-items-center w-100 m-auto" style="width: 100%;height: 100%;">
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
                    <div class="row align-items-center w-100 m-auto" style="width: 100%;height: 100%;">
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
                    <div class="row align-items-center w-100 mx-auto mt-3" style="width: 100%;">
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
                    <div class="form-group row mt-2">
                        <div class="col-md-12">
                            <div class="large-12 medium-12 small-12 filezone">
                                <input type="file" id="files" ref="edit_tour_files" multiple v-on:change="handleEditFiles()"/>
                                <p>
                                    Перетащите файл(ы) сюда<br>или нажмите для поиска
                                </p>
                            </div>
                            <label class="control-label">Или запишите голосовое сообщение</label>
                            <div class="d-flex justify-content-center mt-2">
                                <vue-record-audio :mode="'press'" @stream="onStream" @result="onEditResult"/>
                            </div>
                            <div class="file-listing">
                                <div
                                    class="list-group-item"
                                    v-for="(file, index) in edit_tour.TourInfo.files"
                                    :key="file.name"
                                >
                                    <div class="row m-auto w-100 align-items-center justify-content-center">
                                        <div class="col-4 text-center">
                                            <img class="preview" v-if="/\.(jpe?g|png|svg)$/i.test(file.name)" :src="file.path"/>
                                            <img class="preview" v-else src="/images/LOGO-1.png"/>
                                        </div>
                                        <div class="col-8">
                                            <div v-if="file.type=='file'">
                                                <p class="control-label">{{file.name}}</p>
                                            </div>
                                            <div v-if="file.type=='audio'">
                                                <audio-player :audio="file"></audio-player>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="remove-container">
                                        <a class="remove" v-on:click="deleteFile(file, index)" v-if="loading == false">Удалить</a>
                                    </div>
                                </div>
                            </div>
                            <div class="file-listing">
                                <div class="list-group-item" v-for="(file, index) in new_files">
                                    <div class="row m-auto w-100 align-items-center justify-content-center">
                                        <div class="col-4 text-center">
                                            <img class="preview" v-bind:ref="'preview'+parseInt(index)"/>
                                        </div>
                                        <div class="col-8">
                                            <div v-if="file.type=='file'">
                                                <p class="control-label">{{file.data.name}}</p>
                                            </div>
                                            <div v-if="file.type=='audio'">
                                                <audio-player :audio="file"></audio-player>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="remove-container">
                                        <a class="remove" v-on:click="removeFile(new_files, index)" v-if="loading == false">Отменить</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <template #modal-footer>
                <div class="row w-100 m-auto">
                    <div class="col-6 col-md-6 contact-btn text-center">
                        <button class="btn btn-travel" style="width: 100%" @click="$bvModal.hide('editUserTourModalBox')">
                            Отмена
                        </button>
                    </div>
                    <div class="col-6 col-md-6 contact-btn text-center">
                        <button type="submit" class="btn btn-travel" style="width: 100%" @click="updateClientTour" :disabled="invalid||loading">
                            <div class="row align-items-center justify-content-center m-auto w-100 h-100 text-center">
                                <span v-if="loading" role="status" aria-hidden="true" class="spinner-border spinner-border-sm mx-2"></span>
                                <span v-if="loading" class="sr-only">Loading...</span>
                                Сохранить
                            </div>
                        </button>
                    </div>
                </div>
            </template>
        </b-modal>
    </ValidationObserver>
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
                seconds:0,
                interval:'',
                flag:false,
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
                this.getImagePreviews(this.new_files);
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
                        this.$bvModal.hide('editUserTourModalBox')

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

<style>
    .btn-travel {
        color: #fff !important;
        background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);
        background-color: rgba(0, 0, 0, 0);
        background-color: #f08b23 !important;
        border-color: #f08b23 !important;
        box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;
    }
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
