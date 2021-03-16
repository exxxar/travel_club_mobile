<template>
    <div id="client">
        <div class="container m-auto" style="height: 100%;">
            <div id="main-title" class="row m-auto justify-content-center align-items-center" style="width: 100%;height: 100%;">
                <div class="col-12">
                    <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
                        <div class="col-12 col-md-8 col-sm-12">
                            <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                                <div class="col-md-7 p-0">
                                    <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                        <h1 class="title-1"><span>З</span>дравствуйте,</h1>
                                        <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                                    </div>
                                </div>
                                <div class="col-md-7 p-0">
                                    <div class="row ml-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                        <h1 class="title-2"><span>{{user.info.FullName}}</span></h1>
                                        <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-auto mt-3 mb-3 justify-content-center align-items-center" style="width: 100%;height: 100%;">
            <div class="float-right center3 text-center" style="width: 100%;height: 100%;">
                <div class='float-right no-right-pad no-left-pad swith-row'>
                    <div class="switch-one">
                        <input type="radio" class="switch-input user_radio_btn" name="type" value="user" id="one" checked @click="tab='tours'">
                        <label for="one" class="switch-label switch-label-off">
                            <span>Туры</span>
                        </label>
                        <input type="radio" class="switch-input admin_radio_btn" name="type" value="admin" id="two" @click="tab='files'">
                        <label for="two" class="switch-label switch-label-on">
                            <span>Файлы</span>
                        </label>
                        <span class="slider2"></span>
                    </div>
                </div>
            </div>
            </div>

            <div class="" v-if="tab=='tours'">
                <div class="row mx-auto mt-3 mb-3 justify-content-center align-items-center" v-if="tours.length>0" style="width: 100%;height: 100%;">
                    <hooper class="mr-auto ml-auto tablet" style="height: 100%;" :itemsToShow="2" :infiniteScroll="false">
                        <slide v-for="tour in tours" @click="toTourInfo(tour.id)" :key="tour.id">
                            <div class="mx-auto v-card elevation-24" @click="toTourInfo(tour.id)" style="height: 350px; max-width: 100%; width: 350px; border-radius: 20px; cursor:pointer;">
                                <div class="v-responsive v-image" style="height: 100%;">
                                    <div class="v-responsive__sizer">
                                    </div>
                                    <div class="v-image__image v-image__image--cover" style="background-image: url('/images/test.jpg'); background-position: center center;">
                                    </div>
                                    <div class="v-responsive__content">
                                        <div class="v-card__title">
                                            <!--                                <div class="white&#45;&#45;text active-tour">Текущий</div>-->
                                            <div class="ml-auto white--text active-tour">
                                                <div class="row m-auto align-items-center justify-content-center" style="height: 100%; width: 100%;">
                                                    <div class="icon icon-calendar mr-2"></div>{{tour.StartAt | moment("DD.MM")}} - {{tour.EndAt | moment("DD.MM")}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="v-card__subtitle white--text">
                                            <div class="row">
                                                <div class="col-md-12 mb-2">

                                                    <h4>{{tour.TourInfo.resort.Name}}, {{tour.TourInfo.country.Name}}</h4>
                                                    <!--                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed-->
                                                    <!--                                                    do eiusmod tempor incididunt ut labore et dolore magna-->
                                                    <!--                                                    aliqua-->
                                                    <!--                                                </p>-->
                                                </div>
                                                <div class="col-md-12">
                                                    <span class="white--text active-tour float-right">{{tour.TourInfo.price}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    </hooper>
                    <hooper class="mr-auto ml-auto mobile" style="height: 100%;" :itemsToShow="1" :infiniteScroll="true">
                        <slide v-for="tour in tours" @click="toTourInfo(tour.id)" :key="tour.id">
                            <div class="mx-auto v-card elevation-24" @click="toTourInfo(tour.id)" style="height: 350px; max-width: 100%; width: 350px; border-radius: 20px; cursor:pointer;">
                                <div class="v-responsive v-image" style="height: 100%;">
                                    <div class="v-responsive__sizer">
                                    </div>
                                    <div class="v-image__image v-image__image--cover" style="background-image: url('/images/test.jpg'); background-position: center center;">
                                    </div>
                                    <div class="v-responsive__content">
                                        <div class="v-card__title">
                                            <div class="ml-auto white--text active-tour">
                                                <div class="row m-auto align-items-center justify-content-center" style="height: 100%; width: 100%;">
                                                    <div class="icon icon-calendar mr-2"></div>{{tour.StartAt | moment("DD.MM")}} - {{tour.EndAt | moment("DD.MM")}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="v-card__subtitle white--text">
                                            <div class="row">
                                                <div class="col-md-12 mb-2">
                                                    <h4>{{tour.TourInfo.resort.Name}}, {{tour.TourInfo.country.Name}}</h4>
                                                    <!--                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed-->
                                                    <!--                                                    do eiusmod tempor incididunt ut labore et dolore magna-->
                                                    <!--                                                    aliqua-->
                                                    <!--                                                </p>-->
                                                </div>
                                                <div class="col-md-12">
                                                    <span class="white--text active-tour float-right">{{tour.TourInfo.price}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    </hooper>
                </div>
                <div class="row mx-auto mt-3 mb-3 justify-content-center align-items-center" v-if="tours.length==0" style="width: 100%;height: 100%;">
                    У Вас пока нет туров :( Возможно они все в архиве.
                </div>
            </div>
            <div class="" v-if="tab=='files'">
                <div class="row mx-auto mt-3 mb-3 justify-content-center align-items-center" v-if="files.length>0" style="width: 100%;height: 100%;">
                    <div class="file-listing">
                        <div class="list-group-item" v-for="(file, index) in files" :key="file.name">
                            <div class="row m-auto w-100 align-items-center justify-content-center">
                                <div class="col-4 text-center">
                                    <img class="preview" v-if="/\.(jpe?g|png|svg)$/i.test(file.name)" :src="file.path"/>
                                    <img class="preview" v-else src="/images/LOGO-1.png"/>
                                </div>
                                <div class="col-8">
                                    <div v-if="file.type=='file'|| file.type=='image'">
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
                <div class="row mx-auto mt-3 mb-3 justify-content-center align-items-center" v-if="files.length==0" style="width: 100%;height: 100%;">
                    У Вас пока нет файлов
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "ClientProfile",
        data: () => ({
            perPage: ['10', '25', '50'],
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                },
                {
                    label: 'Name',
                    field: 'name',
                },
                {
                    label: 'Email',
                    field: 'email',
                },
            ],
            window: {
                width: 0,
                height: 0
            },
            countItems:3,
            tours:[],
            current_tour:{},
            tour_title:'Текущий',
            tab:'tours',
            files:[]
        }),
        computed:
            {
                menu() {
                    return this.$store.getters.menu
                },
                user() {
                    return this.$store.getters.user
                },
                preloader() {
                    return this.$store.getters.preloader
                },
            },
        created() {
            // this.$store.commit('setPreloader', true)
            this.getUser()
            // if (!this.user) {
            //     this.$store.dispatch('getUser').then( () => {
            //         this.tours = this.user.tours;
            //     })
            // }
            // else{
            //     this.tours = this.user.tours;
            // }
            // this.tours.sort(function(a,b){
            //     return new Date(b.EndAt) - new Date(a.EndAt);
            // });
        },

        mounted() {
            // this.$store.dispatch('getUser')
            // this.$store.commit('setPreloader', false)
            // if( this.tours.length>0){
            //     var now = moment(new Date());
            //     this.current_tour = this.tours.find((tour) => {
            //
            //         var start = moment(tour.StartAt);
            //         var end = moment(tour.EndAt);
            //         var before = start.isBefore(now) ? true : false;
            //         var after = end.isAfter(now) ? true : false;
            //         if(before==true && after==true)
            //         {
            //             return true
            //         }
            //     });
            //     if(!this.current_tour)
            //     {
            //         this.current_tour = this.tours[0];
            //     }
            // }


        },
        methods:
        {
            toTourInfo(id) {
                this.$router.push('/client/tour-info/' + id);
            },
            async getUser() {
                if (!this.user) {
                    await this.$store.dispatch('getUser').then( () => {
                        this.getFiles()
                        this.tours = this.user.tours.filter((item) => {
                            if(item.Archive == false) {
                                return true
                            }
                        });
                    })
                }
                else{
                    this.getFiles();
                    this.tours = this.user.tours.filter((item) => {
                        if(item.Archive == false) {
                            return true
                        }
                    });
                }
                if( this.tours.length>0){
                    this.tours.sort(function(a,b){
                        return new Date(b.EndAt) - new Date(a.EndAt);
                    });
                    var now = moment(new Date());
                    this.current_tour = this.tours.find((tour) => {

                        var start = moment(tour.StartAt);
                        var end = moment(tour.EndAt);
                        var before = start.isBefore(now) ? true : false;
                        var after = end.isAfter(now) ? true : false;
                        if(before==true && after==true)
                        {
                            return true
                        }
                    });
                    if(!this.current_tour)
                    {
                        this.current_tour = this.tours.find((tour) => {

                            var start = moment(tour.StartAt);
                            var end = moment(tour.EndAt);
                            var before = start.isBefore(now) ? true : false;
                            var after = end.isAfter(now) ? true : false;
                            if(before==false && after==true)
                            {
                                this.tour_title = 'Следующий';
                                return true
                            }
                        });
                        if(!this.current_tour) {
                            this.current_tour = this.tours[0];
                            this.tour_title = 'Последний'
                        }
                    }
                }
            },
            async getFiles() {
                await axios.get('/auth/files').then((resp) => {
                    this.files = resp.data.files;
                });
            },
        }
    }
</script>


<style scoped>
    .center3:before{
        display: flex;
        align-items: center;
        resize: both;
    }

    .switch-one {
        display:inline-block;
        transition: all 0.1s ease;
        height: 100%;
        position: relative;
        background-color: #ffffff;
        width: 50%;
        border: 2px solid #f08b23;
        border-radius: 50px;
        /*margin-top:50px;*/
    }

    .switch-label{
        direction: rtl;
        position: relative;
        z-index: 2;
        float: left;
        width: 50%;
        height:100%;
        padding:0.7rem 0px;
        font-size: 15px;
        color:#f08b23;
        text-align: center;
        cursor: pointer;
        font-family: "Open Sans";
        font-weight: 900;
    }

    .switch-input {
        display: none;
    }

    .switch-input:checked + .switch-label {
        color: #fff;
        width: 50%;
    }

    .switch-input:checked + .switch-label-on ~ .slider2 {
        left: 50%;
        border-radius: 50px;
    }

    .switch-label-on{
        border-radius: 50px;
    }

    .switch-label-off,.switch-input:checked + .switch-label-off ~ .slider2{
        border-radius: 50px;
    }

    .swith-row{
        height: 45px;
        direction: ltr;
        width: 100%;
    }

    .slider2{
        display: block;
        position: absolute;
        z-index: 1;
        color: #ffffff;
        top: 0%;
        left: 0%;
        width: 50%;
        height: 100%;
        background: #063065;
        -webkit-transition:  500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
        -moz-transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
        -ms-transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
        -o-transition: 500ms cubic-bezier(0.75, 0.820, 0.165, 1.000);
        transition: 500ms cubic-bezier(0.75, 0.820, 0.165, 1.000);
    }


    .slide-right {
        -webkit-animation: slide-right 0.5s infinite alternate-reverse both;
        animation: slide-right 0.5s infinite alternate-reverse both;
    }

    @-webkit-keyframes slide-right {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            -webkit-transform: translateX(20px);
            transform: translateX(20px);
        }
    }
    @keyframes slide-right {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            -webkit-transform: translateX(20px);
            transform: translateX(20px);
        }
    }

    .title-1 {
        position: absolute;
        z-index: 1;
        left: 0px;
        top: 10px;
        color:#062348;
        font-family: 'Bello Pro' !important;
        font-size: 35px;
    }
    .title-1 span {
        font-size: 40px;
    }
    .title-2 {
        position: absolute;
        z-index: 1;
        left: 52px;
        top: 25px;
        color:white;
        font-family: 'Open Sans' !important;
        font-weight:900;
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .title-2 span {
        text-transform: uppercase;
    }
    .orange-brush{
        top: 5px;
        left: 10px;
        width: 265px;
    }
    .blue-brush{
        top: 10px;
        left: -55px;
        width: 330px;
        height: 50px;
        opacity: 1;
    }
    .title {
        font-size: 15px;
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
</style>
<style>
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
    #client .hooper-slide {
        padding-left: 5px !important;
        padding-right: 5px !important;
    }
    /*#client .tablet .hooper-slide {*/
    /*    padding-left: 5px !important;*/
    /*    padding-right: 5px !important;*/
    /*}*/
    #client .hooper-next{
        outline: 0 !important;
    }
    #client .hooper-prev{
        outline: 0 !important;
    }
    #client .desktop .hooper-next{
        outline: 0 !important;
        right: -5% !important;
    }
    #client .desktop .hooper-prev{
        outline: 0 !important;
        left: -5% !important;
    }
    #client .tablet .hooper-next{
        outline: 0 !important;
        right: -10% !important;
    }
    #client .tablet .hooper-prev{
        outline: 0 !important;
        left: -10% !important;
    }
    #client .hooper-next svg{
        fill: #062348;
        height: 40px;
        width: 40px;
    }
    #client .mobile .hooper-next svg{
        fill: white;
    }
    #client .mobile .hooper-prev svg{
        fill: white;
    }
    #client .hooper-prev svg{
        fill: #062348;
        height: 40px;
        width: 40px;
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
    .v-card__subtitle h4{
        font-weight: 900;
        font-family: 'Open Sans';
    }
    .white--text {
        color: #fff !important;
        caret-color: #fff !important;
    }
    /*#main-title {*/
    /*    position: relative;*/
    /*}*/
    /*#main-title svg {*/
    /*    position: absolute;*/
    /*}*/
    /*#main-title .title-1 {*/
    /*    position: absolute;*/
    /*    z-index: 1;*/
    /*    left: 30px;*/
    /*    top: 10px;*/
    /*    color:#062348;*/
    /*    font-family: 'Bello Pro' !important;*/
    /*    font-size: 30px;*/
    /*}*/
    /*#main-title .title-1 span {*/
    /*    font-size: 40px;*/
    /*}*/
    /*#main-title .title-2 {*/
    /*    position: absolute;*/
    /*    z-index: 1;*/
    /*    left: 40px;*/
    /*    top: 79px;*/
    /*    color:white;*/
    /*    font-family: 'Open Sans' !important;*/
    /*    font-weight:900;*/
    /*    font-size: 13px;*/
    /*}*/
    /*#main-title .title-2 span {*/
    /*    text-transform: uppercase;*/
    /*}*/
    /*#main-title .orange-brush{*/
    /*    top: 52px;*/
    /*    left: -65px;*/
    /*}*/
    /*#main-title .blue-brush{*/
    /*    top: 5px;*/
    /*    left: 10px;*/
    /*}*/
</style>
