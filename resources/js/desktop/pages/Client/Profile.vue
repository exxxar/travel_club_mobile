<template>
    <div>
        <div class="container">
            <div class="row align-items-center justify-content-center mt-5 mx-auto" style="width: 100%; height: 100%;">
                <div class="col-md-6 col-sm-12 text-center">
                    <img src="/images/avatar.svg" class="avatar">
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="row features align-items-center m-auto" style="width: 100%; height: 100%;">
                        <div class="col-6 col-md-12 col-sm-6">
                            <div class="row align-items-center mx-auto mt-auto mb-3" style="width: 100%; height: 100%;">
                                <div class="col-8 col-sm-8 col-md-5 col-lg-4 p-0">
                                <div class="feature mr-4">
                                    <h4 class="feature-text">всего</h4>
                                    <h4 class="feature-text mb-0">туров</h4>
                                </div>
                                </div>
                                <div class="col-4">
                                <div class="count">
                                    <div class="text-center m-auto" style="width: 100%; height: 100%;">{{user.tours_count}}</div>
                                </div>
                                </div>
                            </div>
                        </div>
<!--                        <div class="col-6 col-md-12 col-sm-6">-->
<!--                            <div class="row align-items-center mx-auto mt-auto mb-3" style="width: 100%; height: 100%;">-->
<!--                                <div class="col-8 col-sm-8 col-md-5 col-lg-4 p-0">-->
<!--                                    <div class="feature mr-4">-->
<!--                                        <h4 class="feature-text">всего</h4>-->
<!--                                        <h4 class="feature-text mb-0">перелётов</h4>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-4">-->
<!--                                    <div class="count">-->
<!--                                        <div class="text-center m-auto" style="width: 100%; height: 100%;">63</div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
            <div class="row features align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
                <div class="col-12">
                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
                        <div class="col-12">
                            <div class="title">
                                <i class="icon-icon-list mr-1" style="font-size: 11px;">
                                    <span class="path1">
                                        <span class="path2"></span>
                                    </span>
                                </i>ваш контактный телефон:
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="subtitle">{{info.Phone}}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
                        <div class="col-12">
                            <div class="title">
                                <i class="icon-icon-list mr-1" style="font-size: 11px;">
                                    <span class="path1">
                                        <span class="path2"></span>
                                    </span>
                                </i>
                                выбранный город:
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="subtitle">{{info.City.city}}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
                        <div class="col-12">
                            <div class="title">
                                <i class="icon-icon-list mr-1" style="font-size: 11px;">
                                    <span class="path1">
                                        <span class="path2"></span>
                                    </span>
                                </i>
                                выбранное отделение
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
                                <div class="col-md-12 col-sm-12">
                                    <div class="subtitle" v-if="info.Department != null">{{info.Department.address}}</div>
                                </div>
<!--                                <div class="col-md-6 col-sm-12">-->
<!--                                    <div class="subtitle">Расписание</div>-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%; height: 100%;">
                        <div class="col-12">
                            <div class="title">
                                <i class="icon-icon-list mr-1" style="font-size: 11px;">
                                    <span class="path1">
                                        <span class="path2"></span>
                                    </span>
                                </i>
                                ваш менеджер
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="subtitle">{{info.ManagerName}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data: () => ({
            info:{}
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
            if (!this.user) {
                this.$store.dispatch('getUser').then( () => {
                    this.info = this.user.info;
                })
            }
            else{
                this.info = this.user.info;
            }
        },
    }
</script>

<style scoped>
    .avatar {
        max-width: 400px;
        max-height: 400px;
        width: 100%;
        height: 100%;
    }
    .features {
        font-family: "Open Sans";
        text-transform: uppercase;
        line-height: 2.25;
    }
    .feature {
        border-left: 4px solid #f08b23;
        margin-right: 1.5rem !important;
    }
    .feature-text {
        font-size: 15px;
        color: rgb(13, 39, 75);
        letter-spacing: 2px;
        font-weight: 900;
        margin-left: 5px;
    }
    .count {
        font-family: "Open Sans";
        font-weight: 900;
        width: 50px;
        height: 50px;
        display: block;
        border-radius: 50%;
        text-decoration: none;
        font-size: 23px;
        /*line-height: 50px;*/
        color:  white;
        background: #f08b23;
        padding: 0px !important;
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
        .count {
            width: 30px;
            height: 30px;
            font-size: 14px;
        }
        .feature {
            margin-right: .5rem !important;
        }
        .feature-text {
            font-size: 10px;
        }
        .title {
            font-size: 12px;
        }
        .subtitle {
            font-size: 15px;
        }
    }
</style>
