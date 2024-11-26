<template>
    <div id="tour-info" v-show="!load">
        <div class="modal fade" id="reviewModalBox" tabindex="-1" role="dialog" aria-labelledby="reviewModalBoxLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" id="client">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="reviewModalBoxLabel">Оставить отзыв</h5>
                        <button type="button" class="close"  data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-5 mx-auto">
                            <div class="col-md-12">
                                <div class="row align-items-center justify-content-center mx-auto mt-3" style="width: 100%;">
                                    <label class="control-label">Напишите Ваши впечатления</label>
                                    <b-form-textarea rows="6" cols="80"
                                              class="travel-input"
                                              placeholder="Напишите Ваши впечатления..."
                                              v-model="review"
                                              style="padding: 5px 15px; border: 1px solid #f08b23; border-radius: 20px !important;"
                                    >
                                    </b-form-textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-md-12 contact-btn">
                                <button type="submit" class="btn btn-travel" style="width: 100%" @click="addReview" :disabled="loading">
                                    <div class="row align-items-center m-auto w-100 h-100">
                                        <span v-if="loading" class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                                       Отправить
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center m-auto" style="width: 100%; height: 100%;">
            <button class="btn btn-tour-info" @click="toBalance"><i class="fas fa-wallet me-2"></i>Баланс</button>
            <button class="btn btn-tour-info" v-if="!tour.Archive" @click="addToArchive(tour)"><i class="fas fa-archive me-2"></i>Отправить в архив</button>
            <button class="btn btn-tour-info" v-else @click="returnFromArchive(tour)"><i class="fas fa-archive me-2"></i>Вернуть из архива</button>
            <button class="btn btn-tour-info" :disabled="invalid" data-bs-toggle="modal" data-bs-target="#reviewModalBox"><i class="fas fa-comment-dots me-2"></i>Написать отзыв</button>
        </div>
        <div class="row align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
            <div class="col-md-6 p-0">
                <div class="row mx-auto mt-5 mb-5  align-items-center" style="width: 100%;height: 100%;border-top: 4px solid #f08b23;">
                    <span class="white--text active-tour ml-5" style="background:#062348; font-size: 18px;position: absolute">Страна</span>
                </div>
                <div class="row features align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
                    <div class="col-12">
                        <div class="row align-items-center w-100 m-auto">
                            <div class="col-12">
                                <div class="row align-items-center w-100 m-auto">
                                    <b class="me-3" style="border: 1px solid #063065" :class="'tc-flag-'+tour.TourInfo.country.Id"></b>
                                    <div class="subtitle">{{tour.TourInfo.country.Name}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 p-0">
                <div class="row mx-auto mt-5 mb-5  align-items-center" style="width: 100%;height: 100%;border-top: 4px solid #f08b23;">
                    <span class="white--text active-tour ml-5" style="background:#062348; font-size: 18px;position: absolute">Курорт</span>
                </div>
                <div class="row features align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
                    <div class="col-12">
                        <div class="row align-items-center w-100 m-auto">
                            <div class="col-12">
                                <div class="subtitle">{{tour.TourInfo.resort.Name}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="row mx-auto mt-5 mb-5  align-items-center" style="width: 100%;height: 100%;border-top: 4px solid #f08b23;">
            <span class="white--text active-tour ml-5" style="background:#062348; font-size: 18px;position: absolute">Отель</span>
        </div>
        <div class="row features align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
            <div class="col-12">
                <div class="row align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
                    <div class="col-12">
                        <div class="title">
                            <i class="icon-icon-list me-1" style="font-size: 11px;">
                                <span class="path1">
                                    <span class="path2"></span>
                                </span>
                            </i>название отеля:
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row align-items-center w-100 m-auto">
                            <div class="subtitle">{{tour.TourInfo.hotel.Name}} <span class="ml-3" style="color: #0f213d">{{tour.TourInfo.hotel.StarName}}</span></div>
                            <svg class="icon-star my-auto ml-1" style="width: 20px;height: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                <path fill="#ffca00" d="M9.5 0l3.131 5.97 6.367 1.29-4.432 4.97.804 6.77-5.87-2.9L3.63 19l.804-6.77L.002 7.26l6.367-1.29L9.5 0"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
                    <div class="col-12">
                        <div class="title">
                            <i class="icon-icon-list me-1" style="font-size: 11px;">
                                <span class="path1">
                                    <span class="path2"></span>
                                </span>
                            </i>
                            категория номера:
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="subtitle">{{tour.TourInfo.room_type}}</div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
                    <div class="col-12">
                        <div class="title">
                            <i class="icon-icon-list me-1" style="font-size: 11px;">
                                <span class="path1">
                                    <span class="path2"></span>
                                </span>
                            </i>
                            питание
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="subtitle">{{tour.TourInfo.meal.Name}}<span class="my-auto" style="color: #0f213d; font-size:14px"> - {{tour.TourInfo.meal.desc}}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mx-auto mt-5 mb-5  align-items-center" style="width: 100%;height: 100%;border-top: 4px solid #f08b23;">
            <span class="white--text active-tour ml-5" style="background:#062348; font-size: 18px;position: absolute">Даты</span>
        </div>
        <div class="row m-auto align-items-center justify-content-center" style="width: 100%;height: 100%;">
            <div class="col-md-5 col-sm-12 m-auto">
                <div class="row mx-auto mt-5 mb-5 align-items-center justify-content-center" style="width: 100%;height: 100%;">
                    <functional-calendar
                        ref="Calendar"
                        :marked-date-range="{start: tour.TourInfo.date_range.start, end: tour.TourInfo.date_range.end}"
                    ></functional-calendar>
                </div>
            </div>
            <div class="col-md-5 col-sm-12 m-auto">
<!--                <span class="white&#45;&#45;text active-tour ml-5" style="background:#062348; font-size: 18px;position: absolute">-->
<!--                    <div class="icon icon-calendar me-2"></div>{{tour.StartAt | moment("DD.MM")}} - {{tour.EndAt | moment("DD.MM")}}-->
<!--                </span>-->
                <add-to-calendar title="Тур"
                                 :location="tour.TourInfo.resort.Name + ', ' + tour.TourInfo.country.Name"
                                 :start="start"
                                 :end="end"
                                 details="Тур от ВПУТЬ"
                                 inline-template
                >
                    <div class="calendars row w-100 m-auto">
                        <div class="col-12 mb-2">
                            <google-calendar id="google-calendar">
                                <i class="icon-google"></i> Добавить в Google календарь
                            </google-calendar>
                        </div>
                        <div class="col-12 mb-2">
                            <microsoft-calendar id="microsoft-calendar">
                                <i class="icon-windows"></i> Добавить в Microsoft live календарь
                            </microsoft-calendar>
                        </div>
                        <div class="col-12 mb-2">
                            <office365-calendar id="office365-calendar">
                                <i class="icon-microsoftoutlook"></i> Добавить в  Office365 outlook календарь
                            </office365-calendar>
                        </div>
                    </div>
                </add-to-calendar>
            </div>
        </div>

        <div class="row mx-auto mt-5 mb-5  align-items-center" v-if="tour.TourInfo.avia_tickets.length>0" style="width: 100%;height: 100%;border-top: 4px solid #f08b23;">
            <span class="white--text active-tour ml-5" style="background:#062348; font-size: 18px;position: absolute">Авиабилеты</span>
        </div>
        <div class="row features align-items-center justify-content-center m-auto" v-if="tour.TourInfo.avia_tickets.length>0" style="width: 100%; height: 100%;">
            <div class="col-12">
                <div class="lists">
                    <section class="main" v-show="tour.TourInfo.avia_tickets.length" v-cloak>
                        <ul class="ticket-list">
                            <li
                                v-for="ticket in tour.TourInfo.avia_tickets"
                                class="ticket"
                                :key="ticket.id"
                            >
                                <div class="view">
                                    <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                                        <div class="col-4 p-0">
                                            <label>{{ ticket.date }}</label>
                                        </div>
                                        <div class="col-8 p-0" style="border-left: 1px solid #f08b23">
                                            <label>{{ ticket.description }}</label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
        <div class="row mx-auto mt-5 mb-5  align-items-center" v-if="tour.TourInfo.passengers.length>0" style="width: 100%;height: 100%;border-top: 4px solid #f08b23;">
            <span class="white--text active-tour ml-5" style="background:#062348; font-size: 18px;position: absolute">Пассажиры</span>
        </div>
        <div class="row features align-items-center justify-content-center m-auto" v-if="tour.TourInfo.passengers.length>0" style="width: 100%; height: 100%;">
            <div class="col-12">
                <div class="lists">
                    <section class="main" v-show="tour.TourInfo.passengers.length" v-cloak>
                        <ul class="passenger-list">
                            <li
                                v-for="passenger in tour.TourInfo.passengers"
                                class="passenger"
                                :key="passenger.id"
                            >
                                <div class="view">
                                    <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                                        <div class="col-4 p-0" style="border-right: 1px solid #f08b23">
                                            <label>{{ passenger.Name }}</label>
                                        </div>
                                        <div class="col-2 p-0" style="border-left: 1px solid #f08b23">
                                            <label>{{ passenger.DoB }}</label>
                                        </div>
                                        <div class="col-2 p-0" style="border-left: 1px solid #f08b23">
                                            <label>{{ passenger.Passport }}</label>
                                        </div>
                                        <div class="col-2 p-0" style="border-left: 1px solid #f08b23">
                                            <label>{{ passenger.Date }}</label>
                                        </div>
                                        <div class="col-2 p-0" style="border-left: 1px solid #f08b23">
                                            <label>{{ passenger.ExpiryDate }}</label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>

            </div>
        </div>
        <div class="row mx-auto mt-5 mb-5 justify-content-center align-items-center" v-if="tour.TourInfo.services.trim() != ''" style="width: 100%;height: 100%;border-top: 4px solid #f08b23;">
            <span class="white--text active-tour ml-5" style="background:#062348; font-size: 18px; width: 330px; position: absolute">Дополнительные услуги</span>
        </div>
        <div class="row features align-items-center justify-content-center mx-auto mt-auto mb-5" v-if="tour.TourInfo.services.trim() != ''"  style="width: 100%; height: 100%;">
            <div class="col-12">
                <div class="row align-items-center w-100 m-auto">
                    <div class="title">{{tour.TourInfo.services}}</div>
                </div>
            </div>
        </div>
        <div class="row mx-auto mt-5 mb-5 justify-content-center align-items-center" v-if="tour.TourInfo.files.length>0" style="width: 100%;height: 100%;border-top: 4px solid #f08b23;">
            <span class="white--text active-tour ml-5" style="background:#062348; font-size: 18px; width: 330px; position: absolute">Файлы</span>
        </div>
        <div class="file-listing" v-if="tour.TourInfo.files.length>0">
            <div class="list-group-item" v-for="(file, index) in tour.TourInfo.files" :key="file.name">
                <div class="row m-auto w-100 align-items-center justify-content-center">
                    <div class="col-4 text-center">
                        <img class="preview" v-if="/\.(jpe?g|png|svg)$/i.test(file.name)" :src="file.path"/>
                        <img class="preview" v-else src="/images/LOGO-1.png"/>
                    </div>
                    <div class="col-8">
                        <div v-if="file.type=='file'">
                            <a :href="file.path" style="color: #f08b23"><p class="control-label">{{file.name}}</p></a>
                        </div>
                        <div v-if="file.type=='audio'">
                            <audio-player :audio="file"></audio-player>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "TourInfo",
        data: () => ({
            tour:'',
            markedDates: [
                '2020-8-12',
                '14/08/2020',
            ],
            start: new Date(),
            end: new Date((new Date).setDate((new Date).getDate() + 7)),
            review:'',
            loading: false,
            load: false,
            invalid:true
        }),
        computed:
        {
            menu() {
                return this.$store.getters.menu
            },
            user() {
                return this.$store.getters.user
            },

        },
        created() {
            this.getTour()
            // this.start = new Date(this.tour.TourInfo.date_range.start)
            // console.log(this.start)
            // this.end = new Date(this.tour.TourInfo.date_range.end)

        },
        mounted() {
            // this.$refs.Calendar;
            // console.log(this.$refs.Calendar)
            // console.log(this.$refs['Calendar'])
            // console.log(this.$refs.Calendar.calendar)
            // let self = this
            // this.$nextTick(()=>{
            //
            //     console.log(self.$refs)
            //     console.log(self.$refs.Calendar)
            // });
            this.toCalendar()
        },
        methods:{
            async getTour () {
                this.load = true;
                if (!this.user) {
                     await this.$store.dispatch('getUser').then( () => {
                        this.tour = this.user.tours.find((tour) => tour.id == this.$route.params.id);
                        this.start = moment(this.tour.TourInfo.date_range.start, "DD-MM-YYYY").toDate()
                        this.end = moment(this.tour.TourInfo.date_range.end, "DD-MM-YYYY").toDate()
                        var now = moment(new Date());
                        var end = moment(this.tour.EndAt).add(3, 'days');
                        var after = now.isAfter(end) ? true : false;
                        if(after == true)
                        {
                            this.invalid = false;
                        }
                        this.load=false;
                    })
                }
                else{
                    this.tour = this.user.tours.find((tour) => tour.id == this.$route.params.id);
                    this.start = moment(this.tour.TourInfo.date_range.start, "DD-MM-YYYY").toDate()
                    this.end = moment(this.tour.TourInfo.date_range.end, "DD-MM-YYYY").toDate()
                    var now = moment(new Date());
                    var end = moment(this.tour.EndAt).add(3, 'days');
                    var after = now.isAfter(end) ? true : false;
                    if(after == true)
                    {
                        this.invalid = false;
                    }
                    this.load=false;
                }
            },
            toCalendar() {
                if(this.$refs.Calendar == undefined) {
                    setTimeout(() => this.$refs.Calendar.ChooseDate(this.start), 2000);
                }
                else {
                    this.$refs.Calendar.ChooseDate(this.start)
                }

                // this.$nextTick(function() {
                //     console.log(this.$refs.Calendar)
                //     this.$refs.Calendar.ChooseDate(this.start);
                //     // this.$refs.Calendar.ChooseDate('25/10/2020');
                // });
            },
            toBalance(){
                this.$router.push('/client/balance/'+this.$route.params.id)
            },
            addToArchive(tour) {
                var data = {
                    id: tour.id,
                    UserId: tour.UserId,
                    Archive: true,
                    status: 'add'
                }
                this.$store.dispatch('updateArchive', data).then(()=> {
                    console.log('updateArchive', 'true')
                    tour.Archive=true;
                    this.$store.dispatch('sendNotification',
                        {message: 'Тур успешно перемещен в архив'});
                })
            },
            returnFromArchive(tour) {
                var data = {
                    id: tour.id,
                    UserId: tour.UserId,
                    Archive: false,
                    status: 'return'
                }
                this.$store.dispatch('updateArchive', data).then(()=> {
                    tour.Archive=false;
                    this.$store.dispatch('sendNotification',
                        { message: 'Тур успешно перемещен из архива'});
                })
            },
            async addReview() {
                this.loading=true;
                var data = {
                   review: this.review,
                    date: new Date()
                }
                if(this.tour.Comment.length>0){
                    this.tour.Comment.push(data);
                }
                else {
                    this.tour.Comment = []
                    this.tour.Comment.push(data);
                }
                await this.$store.dispatch('updateReview', this.tour).then(()=> {
                    this.$store.dispatch('sendNotification',
                        {message: 'Новый отзыв успешно добавлен'});
                    this.loading = false
                })
                this.loading = false
                this.$store.dispatch('closeModal', '#reviewModalBox');
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от ВПУТЬ',
                    text: message
                });
            },
        }
    }
</script>

<style scoped>
    .btn-tour-info {
        border: 2px solid #f08b23;
        border-radius: 20px;
        padding: 3px 20px;
        font-weight: 900;
        text-transform: uppercase;
        font-family: 'Open Sans';
        min-width: 206px;
        text-align: center;
        color: #f08b23;
        margin-right: 5px;
        margin-left: 5px;
    }
    .btn-tour-info:hover{
        border: 2px solid rgb(13, 39, 75);
        background: rgb(13, 39, 75);
        color: #fff !important;
    }
    .btn-tour-info:disabled {
        border: 2px solid #c6e2f7;
        color: #c6e2f7;
    }
    .btn-tour-info:disabled:hover{
        border: 2px solid #c6e2f7;
        color: #c6e2f7 !important;
        background: white;
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
        width: 206px;
        text-align: center;
        float: left;
    }
    .features {
        font-family: "Open Sans";
        text-transform: uppercase;
        line-height: 2.25;
    }
    .title {
        font-size: 13px;
        color: rgb(13, 39, 75);
        letter-spacing: 2px;
        font-weight: 900;
    }
    .subtitle {
        font-size: 18px;
        color: #f08b23;
        font-weight: 900;
    }
    @media screen and (max-width: 576px) {
        .title {
            font-size: 12px;
        }
        .subtitle {
            font-size: 15px;
        }
    }
    .main {
        position: relative;
        z-index: 2;
        /*border-top: 1px solid #f08b23;*/
        padding: 0px 15px;
    }

    .ticket-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .ticket-list li {
        position: relative;
        font-size: 14px;
        border-bottom: 1px solid #f08b23;
        border-top: 1px solid #f08b23;
    }

    /*.ticket-list li:last-child {*/
    /*    border-bottom: none;*/
    /*}*/
    .ticket-list li label {
        word-break: break-all;
        padding: 5px 5px 5px 10px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
        color: #0d274b;
        font-family: "Open Sans";
        font-weight: 700;
    }
    .passenger-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .passenger-list li {
        position: relative;
        font-size: 14px;
        border-bottom: 1px solid #f08b23;
        border-top: 1px solid #f08b23;
    }
    /*.passenger-list li:last-child {*/
    /*    border-bottom: none;*/
    /*}*/
    .passenger-list li label {
        word-break: break-all;
        padding: 5px 5px 5px 5px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
        color: #0d274b;
        font-family: "Open Sans";
        font-weight: 700;
        text-align: center;
    }
    .lists {
        background: #fff;
        position: relative;
        border-radius: 20px;
        border: 1px solid #f08b23;
        font-weight: 700;
        font-family: "Open Sans";
    }
    .preview{
        height: 100px;
        max-width: 90%;
    }
</style>
<style>
    .calendars a {
        text-decoration: none;
        color: #063065;
        margin-right: 10px;
    }
    .calendars a:hover {
        text-decoration: none;
    }
    .icon-windows::before {
        color: #063065;
    }
    .icon-microsoftoutlook::before {
        color: #063065;
    }
    #tour-info .vfc-week .vfc-day span.vfc-span-day.vfc-today{
        color: black !important;
    }
    #tour-info .vfc-separately-navigation-buttons.vfc-space-between{
        background: #f08b23 !important;
    }
    #tour-info .vfc-week .vfc-day span.vfc-span-day.vfc-marked {
        background-color: #f08b23;

    }
    .vfc-week .vfc-day span.vfc-span-day.vfc-marked::before {
        background-color: #ffe7ce;
    }
    #tour-info .vfc-week .vfc-day .vfc-base-start, .vfc-week .vfc-day .vfc-base-end {
        background: #ffe7ce;
        background-color: rgb(255, 231, 206);
    }
    #tour-info .vfc-main-container {
        border-radius:20px;
    }
    #tour-info .vfc-calendars-container {
        border-radius:20px;
    }
    #tour-info .vfc-top-date span {
        cursor: default;
        text-decoration: unset;
        margin: 0 2px;
        color: #fff;
        font-family: "Open Sans";
        font-weight: 900;
    }
    #tour-info .vfc-navigation-buttons div .vfc-arrow-left, .vfc-separately-navigation-buttons div .vfc-arrow-left {
        width: 12px;
        height: 12px;
        border-top: 2px solid;
        border-top-color: currentcolor;
        border-left: 2px solid;
        border-left-color: currentcolor;
        border-color: #fff;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    #tour-info .vfc-navigation-buttons div, .vfc-separately-navigation-buttons div {
        z-index: 2;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        color: #fff;
        font-size: 18px;
        margin: 20px 10px;
    }
    #tour-info .vfc-navigation-buttons div .vfc-arrow-right, .vfc-separately-navigation-buttons div .vfc-arrow-right {
        width: 12px;
        height: 12px;
        border-top: 2px solid;
        border-top-color: currentcolor;
        border-right: 2px solid;
        border-right-color: currentcolor;
        border-color: #fff;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    #tour-info .vfc-content {
        margin: 0 20px;
        margin-bottom: 0px;
        z-index: 1;
    }
    .vfc-popover-container {
        width: 100%;
        max-width: 300px;
    }

</style>
