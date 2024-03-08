<template>
    <div id="client">
        <div class="container m-auto" style="height: 100%;">
            <div id="main-title" class="row m-auto justify-content-center align-items-center" style="width: 100%;height: 100%;">
                <div class="col-12">
                    <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
                        <div class="col-12 col-md-8 col-sm-12">
                            <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                                <div class="col-md-7 p-0">
                                    <div class="row me-auto ms-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                        <h1 class="title-1"><span>З</span>дравствуйте,</h1>
                                        <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                                    </div>
                                </div>
                                <div class="col-md-7 p-0">
                                    <div class="row ms-auto me-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                        <h1 class="title-2"><span>{{user.info.FullName | empty_filter}}</span></h1>
                                        <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-auto mt-3 mb-3 justify-content-center align-items-center" v-if="tours.length>0" style="width: 100%;height: 100%;">
                <div class="col-md-12 p-0">
                    <div class="row m-auto travel-card justify-content-center" style="width: 100%;height: 100%;">
                        <div class="col-md-6 col-sm-12 p-0" @click="toTourInfo(current_tour.id)">
                            <div class="mx-auto v-card elevation-24" style="height: 400px; max-width: 100%; border-radius: 20px;">
                                <div class="v-responsive v-image" style="height: 100%;">
                                    <div class="v-responsive__sizer">
                                    </div>
                                    <div class="v-image__image v-image__image--cover" style="background-image: url('/images/test.jpg'); background-position: center center;">
                                    </div>
                                    <div class="v-responsive__content">
                                        <div class="v-card__title">
                                            <div class="white--text active-tour d-sm-block d-md-none">{{tour_title | empty_filter}}</div>
<!--                                            <div class="ms-auto white&#45;&#45;text active-tour">-->
<!--                                                <div class="row m-auto align-items-center justify-content-center" style="height: 100%; width: 100%;">-->
<!--                                                    <div class="icon icon-calendar me-2"></div>13.07 - 13.08-->
<!--                                                </div>-->
<!--                                            </div>-->
                                        </div>
                                        <div class="v-card__subtitle white--text d-sm-block d-md-none">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <h3>{{current_tour.TourInfo.resort.Name | empty_filter}}, {{current_tour.TourInfo.country.Name | empty_filter}}</h3>
<!--                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed-->
<!--                                                        do eiusmod tempor incididunt ut labore et dolore magna-->
<!--                                                        aliqua-->
<!--                                                    </p>-->
                                                </div>
                                                <div class="col-md-12">
                                                    <span class="white--text active-tour float-right">{{current_tour.TourInfo.price | empty_filter}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 d-none d-md-block">
                            <div class="row mx-auto mt-3 mb-3 align-items-center justify-content-center">
                                <span class="white--text active-tour" style="background:#062348; font-size: 24px">{{tour_title  | empty_filter}} тур</span>
                            </div>
                            <div class="row m-auto align-items-center justify-content-center">
                                <h3 class="subtitle">{{current_tour.TourInfo.resort.Name | empty_filter}},
                                    <b class="ms-1 me-1" style="border: 1px solid #063065" :class="'tc-flag-'+current_tour.TourInfo.country.Id | empty_filter">
                                    </b>
                                    {{current_tour.TourInfo.country.Name | empty_filter}}
                                </h3>
                            </div>
                            <div class="row features align-items-center justify-content-center m-auto" style="width: 100%;">
                                <div class="col-12">
                                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
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
                                                <div class="subtitle">{{current_tour.TourInfo.hotel.Name | empty_filter}} <span class="ms-3" style="color: #0f213d">{{current_tour.TourInfo.hotel.StarName | empty_filter}}</span></div>
                                                <svg class="icon-star my-auto ms-1" style="width: 20px;height: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
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
                                            <div class="subtitle">{{current_tour.TourInfo.room_type | empty_filter}}</div>
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
                                            <div class="subtitle">{{current_tour.TourInfo.meal.Name | empty_filter}}<span class="my-auto" style="color: #0f213d; font-size:14px"> - {{current_tour.TourInfo.meal.desc | empty_filter}}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="travel-card-description row m-auto align-items-center justify-content-center">
<!--                                <p>Lorem Ipsum dolor sit amet,-->
<!--                                    consectetur adipiscing elit,-->
<!--                                    sed do eiusmod tempor incididunt ut labore-->
<!--                                    et dolore magna aliqua. Ut enim ad minim veniam,-->
<!--                                    quis nostrud exercitation ullamco...</p>-->
                            </div>
                            <div class="travel-card-more row m-auto float-right align-items-center">
                                <h5 class="more-text mt-auto mb-auto" @click="toTourInfo(current_tour.id)">подробнее</h5>
                                <div class="more-button" @click="toTourInfo(current_tour.id)">
                                    <div class="icon icon-keyboard_arrow_right"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-auto mt-5 mb-5 justify-content-center align-items-center" style="width: 100%;height: 100%;border-top: 4px solid #f08b23;">
                <span class="white--text active-tour" style="background:#062348; font-size: 24px;position: absolute">Туры</span>
            </div>
            <div class="row mx-auto mt-3 mb-3 justify-content-center align-items-center" v-if="tours.length>0" style="width: 100%;height: 100%;">
                <hooper class="me-auto ms-auto desktop" style="height: 100%;" :itemsToShow="3" :infiniteScroll="false">
                    <slide v-for="tour in tours" @click="toTourInfo(tour.id)" :key="tour.id">
                        <div class="mx-auto v-card elevation-24" @click="toTourInfo(tour.id)" style="height: 350px; max-width: 100%; width: 350px; border-radius: 20px; cursor:pointer">
                            <div class="v-responsive v-image" style="height: 100%;">
                                <div class="v-responsive__sizer">
                                </div>
                                <div class="v-image__image v-image__image--cover" style="background-image: url('/images/test.jpg'); background-position: center center;">
                                </div>
                                <div class="v-responsive__content">
                                    <div class="v-card__title">
                                        <!--                                <div class="white&#45;&#45;text active-tour">Текущий</div>-->
                                        <div class="ms-auto white--text active-tour">
                                            <div class="row m-auto align-items-center justify-content-center" style="height: 100%; width: 100%;">
                                                <div class="icon icon-calendar me-2"></div>{{tour.StartAt | moment("DD.MM")}} - {{tour.EndAt | moment("DD.MM")}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="v-card__subtitle white--text">
                                        <div class="row">
                                            <div class="col-md-12 mb-2">
                                                <h4>{{tour.TourInfo.resort.Name | empty_filter}}, {{tour.TourInfo.country.Name | empty_filter}}</h4>
<!--                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed-->
<!--                                                    do eiusmod tempor incididunt ut labore et dolore magna-->
<!--                                                    aliqua-->
<!--                                                </p>-->
                                            </div>
                                            <div class="col-md-12">
                                                <span class="white--text active-tour float-right">{{tour.TourInfo.price | empty_filter}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
                <hooper class="me-auto ms-auto tablet" style="height: 100%;" :itemsToShow="2" :infiniteScroll="false">
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
                                        <div class="ms-auto white--text active-tour">
                                            <div class="row m-auto align-items-center justify-content-center" style="height: 100%; width: 100%;">
                                                <div class="icon icon-calendar me-2"></div>{{tour.StartAt | moment("DD.MM")}} - {{tour.EndAt | moment("DD.MM")}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="v-card__subtitle white--text">
                                        <div class="row">
                                            <div class="col-md-12 mb-2">

                                                <h4>{{tour.TourInfo.resort.Name | empty_filter}}, {{tour.TourInfo.country.Name | empty_filter}}</h4>
<!--                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed-->
<!--                                                    do eiusmod tempor incididunt ut labore et dolore magna-->
<!--                                                    aliqua-->
<!--                                                </p>-->
                                            </div>
                                            <div class="col-md-12">
                                                <span class="white--text active-tour float-right">{{tour.TourInfo.price | empty_filter}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
                <hooper class="me-auto ms-auto mobile" style="height: 100%;" :itemsToShow="1" :infiniteScroll="true">
                    <slide v-for="tour in tours" @click="toTourInfo(tour.id)" :key="tour.id">
                        <div class="mx-auto v-card elevation-24" @click="toTourInfo(tour.id)" style="height: 350px; max-width: 100%; width: 350px; border-radius: 20px; cursor:pointer;">
                            <div class="v-responsive v-image" style="height: 100%;">
                                <div class="v-responsive__sizer">
                                </div>
                                <div class="v-image__image v-image__image--cover" style="background-image: url('/images/test.jpg'); background-position: center center;">
                                </div>
                                <div class="v-responsive__content">
                                    <div class="v-card__title">
                                        <div class="ms-auto white--text active-tour">
                                            <div class="row m-auto align-items-center justify-content-center" style="height: 100%; width: 100%;">
                                                <div class="icon icon-calendar me-2"></div>{{tour.StartAt | moment("DD.MM")}} - {{tour.EndAt | moment("DD.MM")}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="v-card__subtitle white--text">
                                        <div class="row">
                                            <div class="col-md-12 mb-2">
                                                <h4>{{tour.TourInfo.resort.Name | empty_filter}}, {{tour.TourInfo.country.Name | empty_filter}}</h4>
<!--                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed-->
<!--                                                    do eiusmod tempor incididunt ut labore et dolore magna-->
<!--                                                    aliqua-->
<!--                                                </p>-->
                                            </div>
                                            <div class="col-md-12">
                                                <span class="white--text active-tour float-right">{{tour.TourInfo.price | empty_filter}}</span>
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
<!--            <div class="row m-auto mb-4 justify-content-center align-items-center" style="width: 100%;height: 100%;">-->
<!--                <data-table-->
<!--                    title="Заказы"-->
<!--                    :columns="columns"-->
<!--                    :rows="users"-->
<!--                    :clickable="false"-->
<!--                    :perPage="[ 5, 10, 25, 50 ]"-->
<!--                    :expandMode="true"-->
<!--                >-->
<!--&lt;!&ndash;                    <th slot="thead-tr" style="width: auto">&ndash;&gt;-->
<!--&lt;!&ndash;                       Действия&ndash;&gt;-->
<!--&lt;!&ndash;                    </th>&ndash;&gt;-->
<!--&lt;!&ndash;                    <template slot="tbody-tr" slot-scope="props">&ndash;&gt;-->
<!--&lt;!&ndash;                        <td>&ndash;&gt;-->
<!--&lt;!&ndash;                            <button class="btn waves-effect" style="outline: none;"&ndash;&gt;-->
<!--&lt;!&ndash;                                    @click="props.row.show = !props.row.show"&ndash;&gt;-->
<!--&lt;!&ndash;                            >&ndash;&gt;-->
<!--&lt;!&ndash;                                <i class="material-icons" style="color: #0d274b;">delete</i>&ndash;&gt;-->
<!--&lt;!&ndash;                            </button>&ndash;&gt;-->
<!--&lt;!&ndash;                            <button class="btn waves-effect"&ndash;&gt;-->
<!--&lt;!&ndash;                                    @click="props.row.show = !props.row.show"&ndash;&gt;-->
<!--&lt;!&ndash;                            >&ndash;&gt;-->
<!--&lt;!&ndash;                                <i class="material-icons" style="color: #0d274b;">delete</i>&ndash;&gt;-->
<!--&lt;!&ndash;                            </button>&ndash;&gt;-->
<!--&lt;!&ndash;                        </td>&ndash;&gt;-->
<!--&lt;!&ndash;                    </template>&ndash;&gt;-->
<!--                    <template slot="expand-panel" slot-scope="props">-->
<!--                        <div class="container">-->
<!--                            <p>{{props.row}}</p>-->
<!--                        </div>-->
<!--                    </template>-->
<!--                </data-table>-->
<!--            </div>-->
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
            tour_title:'Текущий'
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
                branches() {
                    return this.$store.getters.branches;
                }
            },
        created() {
            // this.$store.commit('setPreloader', true)
            this.getUser();
            // if(this.branches.length<=0){
            //     this.loadBranches();
            // }
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
                        this.tours = this.user.tours.filter((item) => {
                            if(item.Archive == false) {
                                return true
                            }
                        });
                    })
                }
                else{
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
                        this.current_tour = this.tours[0];
                        this.tour_title = 'Последний'
                    }
                }
            },
            async loadBranches() {
                await this.$store.dispatch('setBranches')
            },
        }
    }
</script>


<style scoped>
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
