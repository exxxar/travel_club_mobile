<template>
    <div id="sky">
        <!--            <transition name="fade">-->


        <!--                <div class="new-body" style="">-->
        <!--                <div class="modal fade" id="contactModalBox" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"-->
        <!--                     aria-hidden="true">-->
        <!--                    <div class="modal-dialog custom-modal-dialog" role="document">-->
        <!--                        <div class="modal-content">-->
        <!--                            <div class="modal-header">-->

        <!--                                <button type="button" class="close"  data-bs-dismiss="modal" aria-label="Close">-->
        <!--                                    <span aria-hidden="true">&times;</span>-->
        <!--                                </button>-->
        <!--                            </div>-->
        <!--                            <div class="modal-body">-->
        <!--                                <h5 class="modal-title" id="exampleModalLabel">Свяжись с нами</h5>-->
        <!--                                <contact-form></contact-form>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="modal fade " id="customPhoneModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"-->
        <!--                     aria-hidden="true">-->
        <!--                    <div class="modal-dialog modal-main custom-modal-dialog" role="document">-->
        <!--                        <div class="modal-content">-->
        <!--                            <div class="modal-header">-->
        <!--                                <button type="button" class="close"  data-bs-dismiss="modal" aria-label="Close">-->
        <!--                                    <span aria-hidden="true">&times;</span>-->
        <!--                                </button>-->
        <!--                            </div>-->
        <!--                            <div class="modal-body">-->
        <!--                                <h5 class="modal-title" id="exampleModalLabel">Закажи у нас</h5>-->
        <!--                                <phone-order></phone-order>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="modal fade " id="customVoiceModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"-->
        <!--                     aria-hidden="true">-->
        <!--                    <div class="modal-dialog modal-main custom-modal-dialog" role="document">-->
        <!--                        <div class="modal-content">-->
        <!--                            <div class="card card-signup card-plain">-->
        <!--                                <div class="modal-header">-->
        <!--                                    <div class="card-header card-header-primary text-center">-->
        <!--                                        <button type="button" class="close"  data-bs-dismiss="modal" aria-hidden="true"><i class="material-icons">clear</i></button>-->
        <!--                                        <h4 class="card-title">Запиши голосовое сообщение</h4>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                                <div class="modal-body">-->
        <!--                                    <voice-callback-form :phone="phone"></voice-callback-form>-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <modal :id="'contactModalBox'" :title="'Напишите нам сообщение'">-->
        <!--                    <template slot="body">-->
        <!--                        <contact-form></contact-form>-->
        <!--                    </template>-->
        <!--                </modal>-->
        <!--                <modal :id="'customVoiceModal'" :title="'Свяжитесь с нами'">-->
        <!--                    <template slot="body">-->
        <!--                        <voice-callback-form></voice-callback-form>-->
        <!--                    </template>-->
        <!--                </modal>-->
        <!--                <modal :id="'customPhoneModal'" :title="'Заказать звонок'">-->
        <!--                    <template slot="body">-->
        <!--                        <phone-order></phone-order>-->
        <!--                    </template>-->
        <!--                </modal>-->
        <notifications :position="'top left'" classes="my-style"></notifications>
        <!--  <main-menu></main-menu>-->
<!--        <transition name="fade">-->
<!--            <preloader v-show="preloader"></preloader>-->
<!--        </transition>-->
<!--        <div style="min-height: 100vh">-->
<!--            &lt;!&ndash;        <div class="col-md-2 d-none d-md-block">&ndash;&gt;-->
<!--            <main-menu/>-->
<!--            <router-view class="tc-wrapper tc-wrapper-nowrap" style="min-height: calc( 100vh - 52px );">-->

<!--            </router-view>-->
<!--        </div>-->
        <router-view>
        </router-view>
        <!-- <div class='div' v-bind:style='{"background-color": (isActive? "yellow" : "orange" )}' @click="isActive = !isActive"></div>; -->
        <!--    <div class="row align-items-center justify-content-center ms-auto mr-auto" style="width: 100%;">-->
        <!--      <transition name="fade" mode="out-in">-->
        <!--        <router-view></router-view>-->
        <!--      </transition>-->
        <!--    </div>-->

        <!--        <div v-if="isMobile">-->
        <!--            <component :is="layout">-->
        <!--                <transition v-if="layout!=='default-layout'" name="fade" mode="out-in">-->
        <!--                    <router-view v-if="!isMobile"/>-->
        <!--                    <router-view v-else name="mobile"/>-->
        <!--                </transition>-->
        <!--                <transition v-else name="fade" mode="out-in">-->
        <!--                    <router-view></router-view>-->
        <!--                </transition>-->
        <!--            </component>-->
        <!--        </div>-->
        <!--        <div v-if="!isMobile">-->
        <!--            <default-layout>-->
        <!--                <transition v-if="layout!=='default-layout'" name="fade" mode="out-in">-->
        <!--                    <router-view v-if="!isMobile"/>-->
        <!--                    <router-view v-else name="mobile"/>-->
        <!--                </transition>-->
        <!--                <transition v-else name="fade" mode="out-in">-->
        <!--                    <router-view></router-view>-->
        <!--                </transition>-->
        <!--            </default-layout>-->
        <!--        </div>-->


        <!--        <component :is="layout">-->
        <!--            <transition v-if="layout!=='default-layout'" name="fade" mode="out-in">-->
        <!--                <router-view v-if="!isMobile"/>-->
        <!--                <router-view v-else name="mobile"/>-->
        <!--            </transition>-->
        <!--            <transition v-else name="fade" mode="out-in">-->
        <!--                <router-view></router-view>-->
        <!--            </transition>-->
        <!--        </component>-->


        <!--      <div class="row align-items-center justify-content-center mr-auto ms-auto" style="width:100%;overflow: hidden;">-->
        <!--&lt;!&ndash;      <div class="ms-auto mr-auto" style="z-index: 1">&ndash;&gt;-->
        <!--&lt;!&ndash;          <a href="#" class="icon icon-vk ms-auto mr-3" style="color: yellow;font-size: xx-large;"></a>&ndash;&gt;-->
        <!--&lt;!&ndash;          <a href="#" class="icon icon-instagram" style="color: yellow;font-size: xx-large;"></a>&ndash;&gt;-->
        <!--&lt;!&ndash;          <a href="#" class="icon icon-telegram ms-3 mr-auto" style="color: yellow;font-size: xx-large;"></a>&ndash;&gt;-->
        <!--&lt;!&ndash;      </div>&ndash;&gt;-->


        <!--                  <div class="socials text-center">-->
        <!--                      <ul class="social-buttons" id="demo1">-->
        <!--                          <li>-->
        <!--&lt;!&ndash;                              <a href="#" class="icon icon-vk"></a>&ndash;&gt;-->
        <!--                              <a href="#" class="icon icon-vk" style="font-size: xx-large;"></a>-->
        <!--                          </li>-->
        <!--                          <li>-->
        <!--&lt;!&ndash;                              <a href="#" class="icon icon-instagram"></a>&ndash;&gt;-->
        <!--                              <a href="#" class="icon icon-instagram" style="font-size: xx-large;"></a>-->
        <!--                          </li>-->
        <!--                          <li>-->
        <!--&lt;!&ndash;                              <a href="#" class="icon icon-instagram"></a>&ndash;&gt;-->
        <!--                              <a href="#" class="icon icon-telegram" style="font-size: xx-large;"></a>-->
        <!--                          </li>-->
        <!--                      </ul>-->
        <!--                  </div>-->

        <!--      &lt;!&ndash; <ul class="social-buttons" id="demo2">-->
        <!--        <li>-->
        <!--          <a href="#" class="brandico-twitter-bird"></a>-->
        <!--        </li>-->
        <!--        <li>-->
        <!--          <a href="#" class="brandico-facebook"></a>-->
        <!--        </li>-->
        <!--      </ul> &ndash;&gt;-->
        <!--  </div>-->

        <!--      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"-->
        <!--           viewBox="0 0 1920.000000 525.000000"-->
        <!--           preserveAspectRatio="xMidYMid meet"style="position: absolute; bottom: 0;z-index: -1;">-->

        <!--          <g transform="translate(0.000000,912.000000) scale(0.100000,-0.100000)"-->
        <!--             fill="#000000" stroke="none">-->
        <!--              <path d="M19170 5375 c0 -34 -1 -35 -37 -35 -45 -1 -181 -20 -348 -50 -66 -11-->
        <!-- -172 -30 -235 -41 -63 -11 -131 -23 -150 -26 -19 -2 -80 -13 -135 -23 -212-->
        <!-- -39 -387 -67 -710 -115 -60 -8 -135 -20 -165 -25 -77 -13 -338 -46 -510 -65-->
        <!-- -358 -38 -473 -46 -755 -52 -420 -8 -576 6 -1165 108 -36 6 -290 55 -565 109-->
        <!-- -559 109 -585 114 -775 141 -358 51 -390 53 -805 53 -394 0 -534 -8 -730 -43-->
        <!-- -27 -5 -86 -15 -130 -21 -69 -10 -267 -46 -430 -78 -60 -12 -341 -71 -555-->
        <!-- -118 -668 -144 -1031 -194 -1405 -194 -215 0 -370 13 -635 51 -307 45 -315 46-->
        <!-- -445 74 -437 95 -1157 242 -1250 256 -400 60 -442 63 -845 64 -433 0 -539 -8-->
        <!-- -910 -72 -126 -21 -533 -103 -740 -147 -794 -172 -1082 -215 -1500 -223 -359-->
        <!-- -7 -768 19 -1180 77 -74 10 -187 26 -250 35 -63 9 -160 24 -215 34 -55 10-->
        <!-- -158 29 -230 41 -252 43 -1114 222 -1293 268 l-72 18 0 -2688 0 -2688 9600 0-->
        <!--9600 0 0 2705 c0 2398 -2 2705 -15 2705 -10 0 -15 -11 -15 -35z"/>-->
        <!--          </g>-->

        <!--      </svg>-->


        <!--  </div>-->
        <!--    </transition>-->
    </div>
</template>
<script>
    import NProgress from 'nprogress'
    import 'nprogress/nprogress.css';

    NProgress.configure({showSpinner: false, speed: 1000});
    // import axios from "axios";

    const default_layout = 'default'
    export default {
        name: 'App',
        data() {
            return {}
        },
        mounted() {
            console.log('app mounted')
            // this.getUser();
            this.onResize();
            window.addEventListener('resize', this.onResize, {passive: true})
        },
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn
            },
            // isAdmin: function () {
            //     return this.$store.getters.isAdmin
            // },
            // isManager: function () {
            //     return this.$store.getters.isManager
            // },
            // isMobile: function () {
            //     return this.$store.getters.isMobile
            // },

            preloader() {
                return this.$store.getters.preloader;
            },
            // layout() {
            //     return (this.$route.meta.layout || default_layout) + '-layout'
            // },
            user() {
                return this.$store.getters.user
            },
            fromRoute() {
                return this.$store.getters.fromRoute
            }
        },
        created() {
            // if (this.isLoggedIn)
            // {
            //     this.$store.dispatch('refresh')
            // }
            console.log('app created')
            this.getUser();
            this.$store.commit('setPreloader', true);
            // this.$http.interceptors.request.use(config => {
            //     // NProgress.start();
            //     return config
            // })
            // this.$http.interceptors.response.use(undefined, function (err) {
            //     // NProgress.done();
            //     return new Promise(function (resolve, reject) {
            //         // console.log(err)
            //         // console.log(err.response)
            //         // console.log(err.status)
            //         // console.log( err.response.config)
            //         // console.log(err.response.config.__isRetryRequest)&& !err.response.config.__retry
            //         if (err.response.status === 401 && err.config && !err.response.config.__isRetryRequest) {
            //             localStorage.removeItem('token');
            //             // localStorage.removeItem('admin');
            //             // localStorage.removeItem('manager');
            //             // store.dispatch('logout');
            //             // localStorage.removeItem('uid')
            //             delete axios.defaults.headers.common['Authorization'];
            //             // location.reload();
            //             router.push('/login')
            //             // store.dispatch('setMenu', false)
            //             // store.dispatch('setShowForms', false)
            //         }
            //         throw err;
            //     });
            // });

            // axios.interceptors.response.use(undefined, function (err) {
            //   if (err.response.status === 401 && err.config) {
            //     logout()
            // console
            // this.$store.dispatch('logout')
            //   .then(() => {
            //     console.log('here')
            //     router.push('/')
            //     store.dispatch('setMenu', false)
            //     store.dispatch('setShowForms', false)
            //   })
            // }
            // return new Promise(function (resolve, reject) {
            //  console.log(err.response)
            //   if (err.response.status === 401 && err.config) {
            //     this.$store.dispatch('logout')
            //     .then(() => {
            //       console.log('here')
            //       this.$router.push('/')
            //       this.$store.dispatch('setMenu', false)
            //       this.$store.dispatch('setShowForms', false)
            //     })
            //   }
            //   throw err;
            // });
            // });

        },
        methods: {
            async checkAuth() {
                await this.$store.dispatch('checkAuth').then(resp => {
                    if (resp.data.status) {
                        this.getUser();
                    } else {
                        this.$store.commit('logout')
                        localStorage.removeItem('token')
                        localStorage.removeItem('admin')
                        localStorage.removeItem('manager')
                        delete axios.defaults.headers.common['Authorization']
                    }
                    // this.getUser();
                })
            },
            async getUser() {
                console.log('getUser');
                // if (!this.user) {
                await this.$store.dispatch('getUser')
                    //     .then(() => {
                    //     // this.loadChat()
                    // })
                // } else {
                //     // this.loadChat()
                // }
            },
            async loadChat() {
                await this.$store.dispatch('loadUserChats').then(() => {
                })
            },
            onResize() {
                this.$store.dispatch('setAppMode', window.innerWidth < 900)
                // this.isMobile = window.innerWidth < 600
            },
            closeMenu() {
                this.isActive = false;
                this.showForms = false;
            },
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/')
                        this.$store.dispatch('setMenu', false)
                        this.$store.dispatch('setShowForms', false)
                    })
            }
        },
        beforeDestroy() {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', this.onResize, {passive: true})
            }
        }
    }
</script>
<style lang="scss">


    button:focus {
        text-decoration: none !important;
        outline: none !important;
        box-shadow: none !important;
    }

    a:focus {
        text-decoration: none !important;
        outline: none !important;
    }

    a {
        text-decoration: none !important;
        outline: none !important;
    }

    .my-style {
        padding: 10px;
        margin: 0 5px 5px;

        font-size: 15px;

        color: #ffffff;
        background: #44A4FC;
        border-left: 5px solid #187FE7;
        border-radius: 20px;

        &.warn {
            background: #ffb648;
            border-left-color: #f48a06;
        }

        &.error {
            background: #E54D42;
            border-left-color: #B82E24;
        }

        &.success {
            background: #68CD86;
            border-left-color: #42A85F;
        }

        &.travel {
            background: #0d274b;
            border-left-color: #f08b23;
        }
    }
</style>
<style>
    @media screen and (min-width: 993px) {
        .desktop {
            display: flex !important;
        }

        .tablet {
            display: none;
        }

        .mobile {
            display: none;
        }
    }

    @media screen and (max-width: 992px) {
        .desktop {
            display: none !important;
        }

        .tablet {
            display: flex !important;
        }

        .mobile {
            display: none;
        }
    }

    @media screen and (max-width: 576px) {
        .desktop {
            display: none !important;
        }

        .tablet {
            display: none !important;
        }

        .mobile {
            display: flex !important;
        }
    }

    #nprogress .bar {
        background: #f08b23 !important;
    }

    #nprogress .peg {
        box-shadow: 0 0 10px #f08b23, 0 0 5px #f08b23 !important;
    }

    .night {
        background-color: #fff;
        background: #4396ff;
        /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%230d29ee;%7D.b%7Bfill:%230724c0;%7D.c%7Bfill:%233b3b3b;%7D.d%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M1595.76,265c0,2.87-.08,3-3.08,3-3.74.08-15.06,1.69-29,4.22-5.49.93-14.31,2.53-19.56,3.46s-10.9,1.94-12.48,2.19-6.66,1.1-11.24,1.94c-17.65,3.29-32.22,5.66-59.1,9.71-5,.67-11.24,1.69-13.74,2.11-6.41,1.1-28.14,3.88-42.45,5.48-29.8,3.21-39.38,3.89-62.85,4.39-35,.68-48-.5-97-9.11-3-.51-24.14-4.64-47-9.2-46.53-9.2-48.7-9.62-64.51-11.9-29.81-4.31-32.47-4.47-67-4.47-32.8,0-44.46.67-60.77,3.63-2.25.42-7.16,1.26-10.82,1.77-5.75.84-22.23,3.88-35.8,6.58-5,1-28.38,6-46.2,10C857.57,300.82,827.35,305,796.22,305c-17.9,0-30.8-1.09-52.86-4.3-25.56-3.8-26.22-3.88-37.05-6.25-36.37-8-96.31-20.42-104-21.6-33.3-5.07-36.79-5.32-70.34-5.4-36,0-44.87.67-75.75,6.07-10.49,1.77-44.37,8.7-61.6,12.41-66.09,14.51-90.07,18.14-124.86,18.82-29.89.59-63.93-1.6-98.23-6.5-6.16-.84-15.57-2.19-20.81-3s-13.32-2-17.9-2.87S119.62,290,113.63,289c-21-3.63-92.74-18.74-107.64-22.62l-6-1.52V718.58H1598.26V490.29c0-202.38-.17-228.29-1.25-228.29C1596.18,262,1595.76,262.93,1595.76,265Z' transform='translate(1)'/%3E%3Cpath class='b' d='M1595.76,346c0,2.87-.08,3-3.08,3-3.74.08-15.06,1.69-29,4.22-5.49.93-14.31,2.53-19.56,3.46s-10.9,1.94-12.48,2.19-6.66,1.1-11.24,1.94c-17.65,3.3-32.22,5.66-59.1,9.71-5,.67-11.24,1.69-13.74,2.11-6.41,1.1-28.14,3.88-42.45,5.49-29.8,3.2-39.38,3.88-62.85,4.38-35,.68-48-.5-97-9.11-3-.51-24.14-4.64-47-9.2-46.53-9.2-48.7-9.62-64.51-11.9-29.81-4.3-32.47-4.47-67-4.47-32.8,0-44.46.67-60.77,3.63-2.25.42-7.16,1.26-10.82,1.77-5.75.84-22.23,3.88-35.8,6.58-5,1-28.38,6-46.2,10-55.6,12.15-85.82,16.37-116.95,16.37-17.9,0-30.8-1.09-52.86-4.3-25.56-3.8-26.22-3.88-37.05-6.25-36.37-8-96.31-20.42-104-21.6-33.3-5.07-36.79-5.32-70.34-5.4-36,0-44.87.67-75.75,6.07-10.49,1.78-44.37,8.7-61.6,12.41-66.09,14.52-90.07,18.14-124.86,18.82-29.89.59-63.93-1.6-98.23-6.5-6.16-.84-15.57-2.19-20.81-2.95s-13.32-2-17.9-2.87S119.62,371,113.63,370C92.65,366.4,20.89,351.29,6,347.41l-6-1.52V799.61H1598.26V571.31c0-202.38-.17-228.29-1.25-228.29C1596.18,343,1595.76,344,1595.76,346Z' transform='translate(1)'/%3E%3Cpath class='c' d='M1598.26,681.12h-3.33l-9.74,1.1c-5.41.59-12.4,1.6-15.65,2.19-6.41,1.27-20.56,3.8-32.88,5.91-4.33.76-11.65,2.11-16.23,3-12.82,2.36-31.47,5.4-53.28,8.77-88.9,13.76-141.18,16.38-188.54,9.37-22.56-3.37-28-4.39-78.75-14.43-54.19-10.72-59-11.56-89-15.28-14.9-1.85-71.42-2.11-85.74-.42-16.64,2-30.3,4.14-49.11,7.77-6.83,1.26-14.73,2.78-17.48,3.29s-11.07,2.28-18.48,3.88c-52.61,11.48-59.69,13-65.6,13.84-2.74.42-9.32,1.52-14.56,2.45-40.63,7.26-75.09,7.93-113.63,2.36-21.39-3.12-32-5.06-68.26-12.91-44.78-9.62-77.66-16-92-17.89-21.31-2.87-25-3-54.94-3-45.78,0-60.19,1.94-137.77,18.65-26.72,5.74-53.44,11.22-61.6,12.49-4.58.76-10.57,1.77-13.32,2.19-5.57.93-16.73,2.28-28.72,3.38-25.72,2.45-77.66-.17-118.62-5.91-6.82-1-17.56-2.53-23.72-3.37s-14.07-2.2-17.48-2.87-10.91-2-16.65-3c-19.06-3.46-62.1-12.32-91.57-18.91C16.4,682.46,10,681,7.49,680.52a30.41,30.41,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1598.26v-62c0-61.44,1.66-47.47,0-47.47A17.5,17.5,0,0,0,1598.26,681.12Z' transform='translate(1)'/%3E%3C/svg%3E");*/
        /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1601.5 800.61'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%2345597c;%7D.b%7Bfill:%233e5171;%7D.c%7Bfill:%232a3350;%7D.d%7Bfill:%233b3b3b;%7D.e%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eволны.туризм%3C/title%3E%3Cpath class='a' d='M1596.63,252.65c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.51-29,3.78-5.5.83-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,2.95-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.25-2.25.38-7.16,1.14-10.83,1.59-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.48-37.09-5.59-36.41-7.18-96.41-18.3-104.16-19.36-33.34-4.53-36.84-4.76-70.42-4.84-36.08,0-44.92.61-75.83,5.45-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.76-15.59-2-20.84-2.65s-13.33-1.81-17.91-2.57-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V659h1600V454.51c0-181.3-.17-204.51-1.25-204.51C1597.05,250,1596.63,250.83,1596.63,252.65Z' transform='translate(1)'/%3E%3Cpath class='b' d='M1596.63,322.94c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.51-29,3.78-5.5.83-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,2.95-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.26-2.25.37-7.16,1.13-10.83,1.58-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.47-37.09-5.59C669.8,342.22,609.8,331.1,602.05,330c-33.34-4.53-36.84-4.76-70.42-4.84-36.08,0-44.92.61-75.83,5.45-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.76-15.59-2-20.84-2.65s-13.33-1.81-17.91-2.57-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V729.31h1600V524.8c0-181.3-.17-204.51-1.25-204.51C1597.05,320.29,1596.63,321.12,1596.63,322.94Z' transform='translate(1)'/%3E%3Cpath class='c' d='M1596.63,393.23c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.52-29,3.78-5.5.84-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,3-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.26-2.25.37-7.16,1.13-10.83,1.58-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.47-37.09-5.59-36.41-7.18-96.41-18.3-104.16-19.36-33.34-4.53-36.84-4.76-70.42-4.83-36.08,0-44.92.6-75.83,5.44-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.75-15.59-2-20.84-2.64s-13.33-1.82-17.91-2.58-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V799.61h1600V595.09c0-181.3-.17-204.51-1.25-204.51C1597.05,390.58,1596.63,391.41,1596.63,393.23Z' transform='translate(1)'/%3E%3Cpath class='d' d='M1599.76,682.12h-3.33l-9.75,1.1c-5.41.59-12.41,1.6-15.66,2.19-6.41,1.27-20.57,3.8-32.9,5.91-4.33.76-11.66,2.11-16.24,3-12.83,2.36-31.49,5.4-53.31,8.77-89,13.76-141.27,16.38-188.66,9.37-22.58-3.37-28.07-4.39-78.8-14.43-54.22-10.72-59.06-11.56-89-15.28-14.91-1.85-71.47-2.11-85.79-.42-16.66,2-30.32,4.14-49.15,7.77-6.83,1.26-14.74,2.78-17.49,3.29s-11.08,2.28-18.49,3.88c-52.64,11.48-59.72,13-65.64,13.84-2.75.42-9.33,1.52-14.58,2.45-40.64,7.26-75.13,7.93-113.69,2.36-21.41-3.12-32-5.06-68.3-12.91-44.82-9.62-77.72-16-92-17.89-21.33-2.87-25-3-55-3-45.81,0-60.22,1.94-137.85,18.65-26.74,5.74-53.48,11.22-61.64,12.49-4.58.76-10.58,1.77-13.33,2.19-5.58.93-16.74,2.28-28.73,3.38-25.74,2.45-77.72-.17-118.7-5.91-6.83-1-17.57-2.53-23.74-3.37s-14.08-2.2-17.49-2.87-10.91-2-16.66-3c-19.07-3.46-62.14-12.32-91.62-18.91C16.91,683.46,10.5,682,8,681.52a30.56,30.56,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1599.76v-62c0-61.44,1.67-47.47,0-47.47A17.5,17.5,0,0,0,1599.76,682.12Z' transform='translate(1)'/%3E%3Crect class='e' width='1600' height='800'/%3E%3C/svg%3E");*/
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%25' height='100%25' viewBox='0 0 1601.37 800.61'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:url(%23a);%7D.b%7Bfill:%2345597c;%7D.c%7Bfill:%233e5171;%7D.d%7Bfill:%232a3350;%7D.e%7Bfill:%233b3b3b;%7D.f%7Bopacity:0.5;%7D.g%7Bfill:%23fff;%7D%3C/style%3E%3ClinearGradient id='a' x1='27.66' y1='-46.41' x2='1574.08' y2='846.41' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%236840be'/%3E%3Cstop offset='0.29' stop-color='%236545c3'/%3E%3Cstop offset='0.64' stop-color='%235d54d0'/%3E%3Cstop offset='1' stop-color='%23506be5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect class='a' x='0.87' width='1600' height='800'/%3E%3Cpath class='b' d='M1596.63,252.65c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.51-29,3.78-5.5.83-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,2.95-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.25-2.25.38-7.16,1.14-10.83,1.59-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.48-37.09-5.59-36.41-7.18-96.41-18.3-104.16-19.36-33.34-4.53-36.84-4.76-70.42-4.84-36.08,0-44.92.61-75.83,5.45-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.76-15.59-2-20.84-2.65s-13.33-1.81-17.91-2.57-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V659h1600V454.51c0-181.3-.17-204.51-1.25-204.51C1597.05,250,1596.63,250.83,1596.63,252.65Z' transform='translate(0.87)'/%3E%3Cpath class='c' d='M1596.63,322.94c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.51-29,3.78-5.5.83-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,2.95-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.26-2.25.37-7.16,1.13-10.83,1.58-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.47-37.09-5.59C669.8,342.22,609.8,331.1,602.05,330c-33.34-4.53-36.84-4.76-70.42-4.84-36.08,0-44.92.61-75.83,5.45-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.76-15.59-2-20.84-2.65s-13.33-1.81-17.91-2.57-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V729.31h1600V524.8c0-181.3-.17-204.51-1.25-204.51C1597.05,320.29,1596.63,321.12,1596.63,322.94Z' transform='translate(0.87)'/%3E%3Cpath class='d' d='M1596.63,393.23c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.52-29,3.78-5.5.84-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,3-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.26-2.25.37-7.16,1.13-10.83,1.58-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.47-37.09-5.59-36.41-7.18-96.41-18.3-104.16-19.36-33.34-4.53-36.84-4.76-70.42-4.83-36.08,0-44.92.6-75.83,5.44-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.75-15.59-2-20.84-2.64s-13.33-1.82-17.91-2.58-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V799.61h1600V595.09c0-181.3-.17-204.51-1.25-204.51C1597.05,390.58,1596.63,391.41,1596.63,393.23Z' transform='translate(0.87)'/%3E%3Cpath class='e' d='M1599.76,682.12h-3.33l-9.75,1.1c-5.41.59-12.41,1.6-15.66,2.19-6.41,1.27-20.57,3.8-32.9,5.91-4.33.76-11.66,2.11-16.24,3-12.83,2.36-31.49,5.4-53.31,8.77-89,13.76-141.27,16.38-188.66,9.37-22.58-3.37-28.07-4.39-78.8-14.43-54.22-10.72-59.06-11.56-89-15.28-14.91-1.85-71.47-2.11-85.79-.42-16.66,2-30.32,4.14-49.15,7.77-6.83,1.26-14.74,2.78-17.49,3.29s-11.08,2.28-18.49,3.88c-52.64,11.48-59.72,13-65.64,13.84-2.75.42-9.33,1.52-14.58,2.45-40.64,7.26-75.13,7.93-113.69,2.36-21.41-3.12-32-5.06-68.3-12.91-44.82-9.62-77.72-16-92-17.89-21.33-2.87-25-3-55-3-45.81,0-60.22,1.94-137.85,18.65-26.74,5.74-53.48,11.22-61.64,12.49-4.58.76-10.58,1.77-13.33,2.19-5.58.93-16.74,2.28-28.73,3.38-25.74,2.45-77.72-.17-118.7-5.91-6.83-1-17.57-2.53-23.74-3.37s-14.08-2.2-17.49-2.87-10.91-2-16.66-3c-19.07-3.46-62.14-12.32-91.62-18.91C16.91,683.46,10.5,682,8,681.52a30.56,30.56,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1599.76v-62c0-61.44,1.67-47.47,0-47.47A17.5,17.5,0,0,0,1599.76,682.12Z' transform='translate(0.87)'/%3E%3Cg class='f'%3E%3Cpath class='g' d='M1237.44,107.23c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1381.94,105c6.43,0,6.44-10,0-10s-6.45,10,0,10Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1432,183.49c6.43,0,6.45-10,0-10s-6.45,10,0,10Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M144.73,23.84c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M223.81,79.41c6.43,0,6.44-10,0-10s-6.45,10,0,10Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M297.61,92.22c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M386.24,47.83c6.43,0,6.44-10,0-10s-6.45,10,0,10Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M450.13,111c6.43,0,6.44-10,0-10s-6.45,10,0,10Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M306.59,183.81c6.43,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M144.73,21.84c3.87,0,3.87-6,0-6s-3.86,6,0,6Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M223.81,77.41c3.86,0,3.86-6,0-6s-3.87,6,0,6Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M297.18,90.21c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M386.29,45.39c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M449.71,106' transform='translate(0.87)'/%3E%3Cpath class='g' d='M449.71,107.46a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M306.64,181.37c3.86,0,3.86-6,0-6s-3.87,6,0,6Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1382,103c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1237,105.24c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1431.56,181.05c3.86,0,3.87-6,0-6s-3.86,6,0,6Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1431.56,181.05c3.86,0,3.87-6,0-6s-3.86,6,0,6Z' transform='translate(0.87)'/%3E%3C/g%3E%3Cpath class='g' d='M719.62,173.23c2.51,0,2.52-3.9,0-3.9s-2.51,3.9,0,3.9Z' transform='translate(0.87)'/%3E%3Cg class='f'%3E%3Cpolygon class='g' points='719.14 169.91 744.35 151.57 721.65 172.95 719.14 169.91'/%3E%3C/g%3E%3Cpath class='g' d='M974.07,187.49c2.51,0,2.51-3.9,0-3.9s-2.51,3.9,0,3.9Z' transform='translate(0.87)'/%3E%3Cg class='f'%3E%3Cpolygon class='g' points='973.37 184.24 1066.87 134 975.3 187.68 973.37 184.24'/%3E%3C/g%3E%3C/svg%3E");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    .day {
        background-color: #fff;
        background: #fff;
        /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23ffd05e;%7D.b%7Bfill:%23f6c053;%7D.c%7Bfill:%233b3b3b;%7D.d%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M1595.76,265c0,2.87-.08,3-3.08,3-3.74.08-15.06,1.69-29,4.22-5.49.93-14.31,2.53-19.56,3.46s-10.9,1.94-12.48,2.19-6.66,1.1-11.24,1.94c-17.65,3.29-32.22,5.66-59.1,9.71-5,.67-11.24,1.69-13.74,2.11-6.41,1.1-28.14,3.88-42.45,5.48-29.8,3.21-39.38,3.89-62.85,4.39-35,.68-48-.5-97-9.11-3-.51-24.14-4.64-47-9.2-46.53-9.2-48.7-9.62-64.51-11.9-29.81-4.31-32.47-4.47-67-4.47-32.8,0-44.46.67-60.77,3.63-2.25.42-7.16,1.26-10.82,1.77-5.75.84-22.23,3.88-35.8,6.58-5,1-28.38,6-46.2,10C857.57,300.82,827.35,305,796.22,305c-17.9,0-30.8-1.09-52.86-4.3-25.56-3.8-26.22-3.88-37.05-6.25-36.37-8-96.31-20.42-104-21.6-33.3-5.07-36.79-5.32-70.34-5.4-36,0-44.87.67-75.75,6.07-10.49,1.77-44.37,8.7-61.6,12.41-66.09,14.51-90.07,18.14-124.86,18.82-29.89.59-63.93-1.6-98.23-6.5-6.16-.84-15.57-2.19-20.81-3s-13.32-2-17.9-2.87S119.62,290,113.63,289c-21-3.63-92.74-18.74-107.64-22.62l-6-1.52V718.58H1598.26V490.29c0-202.38-.17-228.29-1.25-228.29C1596.18,262,1595.76,262.93,1595.76,265Z' transform='translate(1)'/%3E%3Cpath class='b' d='M1595.76,346c0,2.87-.08,3-3.08,3-3.74.08-15.06,1.69-29,4.22-5.49.93-14.31,2.53-19.56,3.46s-10.9,1.94-12.48,2.19-6.66,1.1-11.24,1.94c-17.65,3.3-32.22,5.66-59.1,9.71-5,.67-11.24,1.69-13.74,2.11-6.41,1.1-28.14,3.88-42.45,5.49-29.8,3.2-39.38,3.88-62.85,4.38-35,.68-48-.5-97-9.11-3-.51-24.14-4.64-47-9.2-46.53-9.2-48.7-9.62-64.51-11.9-29.81-4.3-32.47-4.47-67-4.47-32.8,0-44.46.67-60.77,3.63-2.25.42-7.16,1.26-10.82,1.77-5.75.84-22.23,3.88-35.8,6.58-5,1-28.38,6-46.2,10-55.6,12.15-85.82,16.37-116.95,16.37-17.9,0-30.8-1.09-52.86-4.3-25.56-3.8-26.22-3.88-37.05-6.25-36.37-8-96.31-20.42-104-21.6-33.3-5.07-36.79-5.32-70.34-5.4-36,0-44.87.67-75.75,6.07-10.49,1.78-44.37,8.7-61.6,12.41-66.09,14.52-90.07,18.14-124.86,18.82-29.89.59-63.93-1.6-98.23-6.5-6.16-.84-15.57-2.19-20.81-2.95s-13.32-2-17.9-2.87S119.62,371,113.63,370C92.65,366.4,20.89,351.29,6,347.41l-6-1.52V799.61H1598.26V571.31c0-202.38-.17-228.29-1.25-228.29C1596.18,343,1595.76,344,1595.76,346Z' transform='translate(1)'/%3E%3Cpath class='c' d='M1598.26,681.12h-3.33l-9.74,1.1c-5.41.59-12.4,1.6-15.65,2.19-6.41,1.27-20.56,3.8-32.88,5.91-4.33.76-11.65,2.11-16.23,3-12.82,2.36-31.47,5.4-53.28,8.77-88.9,13.76-141.18,16.38-188.54,9.37-22.56-3.37-28-4.39-78.75-14.43-54.19-10.72-59-11.56-89-15.28-14.9-1.85-71.42-2.11-85.74-.42-16.64,2-30.3,4.14-49.11,7.77-6.83,1.26-14.73,2.78-17.48,3.29s-11.07,2.28-18.48,3.88c-52.61,11.48-59.69,13-65.6,13.84-2.74.42-9.32,1.52-14.56,2.45-40.63,7.26-75.09,7.93-113.63,2.36-21.39-3.12-32-5.06-68.26-12.91-44.78-9.62-77.66-16-92-17.89-21.31-2.87-25-3-54.94-3-45.78,0-60.19,1.94-137.77,18.65-26.72,5.74-53.44,11.22-61.6,12.49-4.58.76-10.57,1.77-13.32,2.19-5.57.93-16.73,2.28-28.72,3.38-25.72,2.45-77.66-.17-118.62-5.91-6.82-1-17.56-2.53-23.72-3.37s-14.07-2.2-17.48-2.87-10.91-2-16.65-3c-19.06-3.46-62.1-12.32-91.57-18.91C16.4,682.46,10,681,7.49,680.52a30.41,30.41,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1598.26v-62c0-61.44,1.66-47.47,0-47.47A17.5,17.5,0,0,0,1598.26,681.12Z' transform='translate(1)'/%3E%3C/svg%3E");*/
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23ffe467;%7D.b%7Bfill:%23ffd05e;%7D.c%7Bfill:%23f6c053;%7D.d%7Bfill:%233b3b3b;%7D.e%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eволны.туризм%3C/title%3E%3Cpath class='a' d='M1597.63,252.65c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.51-29,3.78-5.5.83-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,2.95-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.25-2.25.38-7.16,1.14-10.83,1.59-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.48-37.09-5.59-36.41-7.18-96.41-18.3-104.16-19.36-33.34-4.53-36.84-4.76-70.42-4.84-36.08,0-44.92.61-75.83,5.45-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.76-15.59-2-20.84-2.65s-13.33-1.81-17.91-2.57-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V659h1600V454.51c0-181.3-.17-204.51-1.25-204.51C1598.05,250,1597.63,250.83,1597.63,252.65Z' transform='translate(1)'/%3E%3Cpath class='b' d='M1597.63,322.94c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.51-29,3.78-5.5.83-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,2.95-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.26-2.25.37-7.16,1.13-10.83,1.58-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.47-37.09-5.59C670.8,342.22,610.8,331.1,603.05,330c-33.34-4.53-36.84-4.76-70.42-4.84-36.08,0-44.92.61-75.83,5.45-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.76-15.59-2-20.84-2.65s-13.33-1.81-17.91-2.57-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V729.31h1600V524.8c0-181.3-.17-204.51-1.25-204.51C1598.05,320.29,1597.63,321.12,1597.63,322.94Z' transform='translate(1)'/%3E%3Cpath class='c' d='M1597.63,393.23c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.52-29,3.78-5.5.84-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,3-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.26-2.25.37-7.16,1.13-10.83,1.58-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.47-37.09-5.59-36.41-7.18-96.41-18.3-104.16-19.36-33.34-4.53-36.84-4.76-70.42-4.83-36.08,0-44.92.6-75.83,5.44-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.75-15.59-2-20.84-2.64s-13.33-1.82-17.91-2.58-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V799.61h1600V595.09c0-181.3-.17-204.51-1.25-204.51C1598.05,390.58,1597.63,391.41,1597.63,393.23Z' transform='translate(1)'/%3E%3Cpath class='d' d='M1599.76,682.12h-3.33l-9.75,1.1c-5.41.59-12.41,1.6-15.66,2.19-6.41,1.27-20.57,3.8-32.9,5.91-4.33.76-11.66,2.11-16.24,3-12.83,2.36-31.49,5.4-53.31,8.77-89,13.76-141.27,16.38-188.66,9.37-22.58-3.37-28.07-4.39-78.8-14.43-54.22-10.72-59.06-11.56-89-15.28-14.91-1.85-71.47-2.11-85.79-.42-16.66,2-30.32,4.14-49.15,7.77-6.83,1.26-14.74,2.78-17.49,3.29s-11.08,2.28-18.49,3.88c-52.64,11.48-59.72,13-65.64,13.84-2.75.42-9.33,1.52-14.58,2.45-40.64,7.26-75.13,7.93-113.69,2.36-21.41-3.12-32-5.06-68.3-12.91-44.82-9.62-77.72-16-92-17.89-21.33-2.87-25-3-55-3-45.81,0-60.22,1.94-137.85,18.65-26.74,5.74-53.48,11.22-61.64,12.49-4.58.76-10.58,1.77-13.33,2.19-5.58.93-16.74,2.28-28.73,3.38-25.74,2.45-77.72-.17-118.7-5.91-6.83-1-17.57-2.53-23.74-3.37s-14.08-2.2-17.49-2.87-10.91-2-16.66-3c-19.07-3.46-62.14-12.32-91.62-18.91C16.91,683.46,10.5,682,8,681.52a30.56,30.56,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1599.76v-62c0-61.44,1.67-47.47,0-47.47A17.5,17.5,0,0,0,1599.76,682.12Z' transform='translate(1)'/%3E%3Crect class='e' width='1600' height='800'/%3E%3C/svg%3E");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    .evening {
        background-color: #fff;
        /*background: #5f6b9d;*/
        background: rgb(95, 107, 157);
        /*background: rgb(159,124,166);*/

        /*background: linear-gradient(to right, rgba(95,107,157,1) 0%, rgba(159,124,166,1) 100%);*/
        /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1601.5 800.61'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23d1a0c0;%7D.b%7Bfill:%23b982a9;%7D.c%7Bfill:%236d4c5f;%7D.d%7Bfill:%233b3b3b;%7D.e%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eволны.туризм%3C/title%3E%3Cpath class='a' d='M1597.59,252.62c0,2.57-.09,2.65-3.09,2.65-3.75.07-15.08,1.51-29,3.78-5.5.83-14.33,2.27-19.58,3.1s-10.92,1.74-12.5,2-6.67,1-11.25,1.74c-17.67,2.95-32.25,5.07-59.17,8.7-5,.6-11.25,1.51-13.75,1.89-6.41,1-28.16,3.48-42.5,4.91-29.83,2.88-39.41,3.48-62.91,3.93-35,.61-48-.45-97.09-8.16-3-.46-24.16-4.16-47.08-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.84-3.86-32.5-4-67.09-4-32.83,0-44.5.6-60.83,3.25-2.25.38-7.17,1.13-10.83,1.59-5.75.75-22.25,3.48-35.84,5.9-5,.9-28.41,5.36-46.25,8.92-55.66,10.88-85.91,14.66-117.08,14.66-17.92,0-30.83-1-52.92-3.85-25.58-3.4-26.25-3.48-37.08-5.6-36.42-7.18-96.42-18.29-104.17-19.35-33.33-4.54-36.83-4.76-70.41-4.84-36.09,0-44.92.61-75.84,5.44-10.5,1.59-44.41,7.79-61.66,11.12-66.17,13-90.17,16.25-125,16.86a697.11,697.11,0,0,1-98.34-5.82c-6.16-.76-15.58-2-20.83-2.65S137.59,278,133,277.27s-13.16-2.19-19.16-3.1c-21-3.25-92.84-16.78-107.75-20.26l-6-1.36V659h1600V454.49c0-181.3-.17-204.51-1.25-204.51C1598,250,1597.59,250.81,1597.59,252.62Z' transform='translate(1)'/%3E%3Cpath class='b' d='M1597.59,322.92c0,2.58-.09,2.65-3.09,2.65-3.75.08-15.08,1.51-29,3.78-5.5.83-14.33,2.27-19.58,3.1s-10.92,1.74-12.5,2-6.67,1-11.25,1.74c-17.67,2.94-32.25,5.06-59.17,8.69-5,.6-11.25,1.51-13.75,1.89-6.41,1-28.16,3.48-42.5,4.91-29.83,2.88-39.41,3.48-62.91,3.94-35,.6-48-.46-97.09-8.17-3-.45-24.16-4.16-47.08-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.84-3.86-32.5-4-67.09-4-32.83,0-44.5.61-60.83,3.25-2.25.38-7.17,1.14-10.83,1.59-5.75.76-22.25,3.48-35.84,5.9-5,.91-28.41,5.37-46.25,8.92-55.66,10.89-85.91,14.67-117.08,14.67-17.92,0-30.83-1-52.92-3.86-25.58-3.4-26.25-3.48-37.08-5.59C670.75,342.2,610.75,331.09,603,330c-33.33-4.53-36.83-4.76-70.41-4.84-36.09,0-44.92.61-75.84,5.45-10.5,1.58-44.41,7.78-61.66,11.11-66.17,13-90.17,16.26-125,16.86a697.11,697.11,0,0,1-98.34-5.82c-6.16-.76-15.58-2-20.83-2.65s-13.33-1.81-17.92-2.57-13.16-2.19-19.16-3.1c-21-3.25-92.84-16.78-107.75-20.26l-6-1.36V729.3h1600V524.79c0-181.3-.17-204.51-1.25-204.51C1598,320.28,1597.59,321.11,1597.59,322.92Z' transform='translate(1)'/%3E%3Cpath class='c' d='M1597.59,393.23c0,2.57-.09,2.64-3.09,2.64-3.75.08-15.08,1.52-29,3.78-5.5.84-14.33,2.27-19.58,3.1s-10.92,1.74-12.5,2-6.67,1-11.25,1.74c-17.67,3-32.25,5.06-59.17,8.69-5,.61-11.25,1.51-13.75,1.89-6.41,1-28.16,3.48-42.5,4.92-29.83,2.87-39.41,3.47-62.91,3.93-35,.6-48-.46-97.09-8.17-3-.45-24.16-4.16-47.08-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.84-3.85-32.5-4-67.09-4-32.83,0-44.5.61-60.83,3.26-2.25.37-7.17,1.13-10.83,1.58-5.75.76-22.25,3.48-35.84,5.9-5,.91-28.41,5.37-46.25,8.92-55.66,10.89-85.91,14.67-117.08,14.67-17.92,0-30.83-1-52.92-3.86-25.58-3.4-26.25-3.47-37.08-5.59-36.42-7.18-96.42-18.3-104.17-19.36-33.33-4.53-36.83-4.76-70.41-4.83-36.09,0-44.92.6-75.84,5.44-10.5,1.59-44.41,7.79-61.66,11.11-66.17,13-90.17,16.26-125,16.86a695.61,695.61,0,0,1-98.34-5.82c-6.16-.75-15.58-2-20.83-2.64s-13.33-1.82-17.92-2.58-13.16-2.19-19.16-3.1C92.84,411.52,21,398,6.09,394.51l-6-1.36V799.61h1600V595.09c0-181.3-.17-204.51-1.25-204.51C1598,390.58,1597.59,391.41,1597.59,393.23Z' transform='translate(1)'/%3E%3Cpath class='d' d='M1599.76,682.12h-3.33l-9.75,1.1c-5.41.59-12.41,1.6-15.66,2.19-6.41,1.27-20.57,3.8-32.9,5.91-4.33.76-11.66,2.11-16.24,3-12.83,2.36-31.49,5.4-53.31,8.77-89,13.76-141.27,16.38-188.66,9.37-22.58-3.37-28.07-4.39-78.8-14.43-54.22-10.72-59.06-11.56-89-15.28-14.91-1.85-71.47-2.11-85.79-.42-16.66,2-30.32,4.14-49.15,7.77-6.83,1.26-14.74,2.78-17.49,3.29s-11.08,2.28-18.49,3.88c-52.64,11.48-59.72,13-65.64,13.84-2.75.42-9.33,1.52-14.58,2.45-40.64,7.26-75.13,7.93-113.69,2.36-21.41-3.12-32-5.06-68.3-12.91-44.82-9.62-77.72-16-92-17.89-21.33-2.87-25-3-55-3-45.81,0-60.22,1.94-137.85,18.65-26.74,5.74-53.48,11.22-61.64,12.49-4.58.76-10.58,1.77-13.33,2.19-5.58.93-16.74,2.28-28.73,3.38-25.74,2.45-77.72-.17-118.7-5.91-6.83-1-17.57-2.53-23.74-3.37s-14.08-2.2-17.49-2.87-10.91-2-16.66-3c-19.07-3.46-62.14-12.32-91.62-18.91C16.91,683.46,10.5,682,8,681.52a30.56,30.56,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1599.76v-62c0-61.44,1.67-47.47,0-47.47A17.5,17.5,0,0,0,1599.76,682.12Z' transform='translate(1)'/%3E%3Crect class='e' width='1600' height='800'/%3E%3C/svg%3E");*/
        /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%25' height='100%25' viewBox='0 0 1601.5 800.61'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:url(%23a);%7D.b%7Bfill:%23d1a0c0;%7D.c%7Bfill:%23b982a9;%7D.d%7Bfill:%236d4c5f;%7D.e%7Bfill:%233b3b3b;%7D.f%7Bopacity:0.5;%7D.g%7Bfill:%23fff;%7D%3C/style%3E%3ClinearGradient id='a' x1='26.79' y1='-46.41' x2='1573.21' y2='846.41' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%235f6b9d'/%3E%3Cstop offset='0.24' stop-color='%23686d9e'/%3E%3Cstop offset='0.63' stop-color='%238274a2'/%3E%3Cstop offset='0.99' stop-color='%239f7ca6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ctitle%3Eволны.туризм%3C/title%3E%3Crect class='a' width='1600' height='800'/%3E%3Cpath class='b' d='M1597.59,252.62c0,2.57-.09,2.65-3.09,2.65-3.75.07-15.08,1.51-29,3.78-5.5.83-14.33,2.27-19.58,3.1s-10.92,1.74-12.5,2-6.67,1-11.25,1.74c-17.67,2.95-32.25,5.07-59.17,8.7-5,.6-11.25,1.51-13.75,1.89-6.41,1-28.16,3.48-42.5,4.91-29.83,2.88-39.41,3.48-62.91,3.93-35,.61-48-.45-97.09-8.16-3-.46-24.16-4.16-47.08-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.84-3.86-32.5-4-67.09-4-32.83,0-44.5.6-60.83,3.25-2.25.38-7.17,1.13-10.83,1.59-5.75.75-22.25,3.48-35.84,5.9-5,.9-28.41,5.36-46.25,8.92-55.66,10.88-85.91,14.66-117.08,14.66-17.92,0-30.83-1-52.92-3.85-25.58-3.4-26.25-3.48-37.08-5.6-36.42-7.18-96.42-18.29-104.17-19.35-33.33-4.54-36.83-4.76-70.41-4.84-36.09,0-44.92.61-75.84,5.44-10.5,1.59-44.41,7.79-61.66,11.12-66.17,13-90.17,16.25-125,16.86a697.11,697.11,0,0,1-98.34-5.82c-6.16-.76-15.58-2-20.83-2.65S137.59,278,133,277.27s-13.16-2.19-19.16-3.1c-21-3.25-92.84-16.78-107.75-20.26l-6-1.36V659h1600V454.49c0-181.3-.17-204.51-1.25-204.51C1598,250,1597.59,250.81,1597.59,252.62Z' transform='translate(1)'/%3E%3Cpath class='c' d='M1597.59,322.92c0,2.58-.09,2.65-3.09,2.65-3.75.08-15.08,1.51-29,3.78-5.5.83-14.33,2.27-19.58,3.1s-10.92,1.74-12.5,2-6.67,1-11.25,1.74c-17.67,2.94-32.25,5.06-59.17,8.69-5,.6-11.25,1.51-13.75,1.89-6.41,1-28.16,3.48-42.5,4.91-29.83,2.88-39.41,3.48-62.91,3.94-35,.6-48-.46-97.09-8.17-3-.45-24.16-4.16-47.08-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.84-3.86-32.5-4-67.09-4-32.83,0-44.5.61-60.83,3.25-2.25.38-7.17,1.14-10.83,1.59-5.75.76-22.25,3.48-35.84,5.9-5,.91-28.41,5.37-46.25,8.92-55.66,10.89-85.91,14.67-117.08,14.67-17.92,0-30.83-1-52.92-3.86-25.58-3.4-26.25-3.48-37.08-5.59C670.75,342.2,610.75,331.09,603,330c-33.33-4.53-36.83-4.76-70.41-4.84-36.09,0-44.92.61-75.84,5.45-10.5,1.58-44.41,7.78-61.66,11.11-66.17,13-90.17,16.26-125,16.86a697.11,697.11,0,0,1-98.34-5.82c-6.16-.76-15.58-2-20.83-2.65s-13.33-1.81-17.92-2.57-13.16-2.19-19.16-3.1c-21-3.25-92.84-16.78-107.75-20.26l-6-1.36V729.3h1600V524.79c0-181.3-.17-204.51-1.25-204.51C1598,320.28,1597.59,321.11,1597.59,322.92Z' transform='translate(1)'/%3E%3Cpath class='d' d='M1597.59,393.23c0,2.57-.09,2.64-3.09,2.64-3.75.08-15.08,1.52-29,3.78-5.5.84-14.33,2.27-19.58,3.1s-10.92,1.74-12.5,2-6.67,1-11.25,1.74c-17.67,3-32.25,5.06-59.17,8.69-5,.61-11.25,1.51-13.75,1.89-6.41,1-28.16,3.48-42.5,4.92-29.83,2.87-39.41,3.47-62.91,3.93-35,.6-48-.46-97.09-8.17-3-.45-24.16-4.16-47.08-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.84-3.85-32.5-4-67.09-4-32.83,0-44.5.61-60.83,3.26-2.25.37-7.17,1.13-10.83,1.58-5.75.76-22.25,3.48-35.84,5.9-5,.91-28.41,5.37-46.25,8.92-55.66,10.89-85.91,14.67-117.08,14.67-17.92,0-30.83-1-52.92-3.86-25.58-3.4-26.25-3.47-37.08-5.59-36.42-7.18-96.42-18.3-104.17-19.36-33.33-4.53-36.83-4.76-70.41-4.83-36.09,0-44.92.6-75.84,5.44-10.5,1.59-44.41,7.79-61.66,11.11-66.17,13-90.17,16.26-125,16.86a695.61,695.61,0,0,1-98.34-5.82c-6.16-.75-15.58-2-20.83-2.64s-13.33-1.82-17.92-2.58-13.16-2.19-19.16-3.1C92.84,411.52,21,398,6.09,394.51l-6-1.36V799.61h1600V595.09c0-181.3-.17-204.51-1.25-204.51C1598,390.58,1597.59,391.41,1597.59,393.23Z' transform='translate(1)'/%3E%3Cpath class='e' d='M1599.76,682.12h-3.33l-9.75,1.1c-5.41.59-12.41,1.6-15.66,2.19-6.41,1.27-20.57,3.8-32.9,5.91-4.33.76-11.66,2.11-16.24,3-12.83,2.36-31.49,5.4-53.31,8.77-89,13.76-141.27,16.38-188.66,9.37-22.58-3.37-28.07-4.39-78.8-14.43-54.22-10.72-59.06-11.56-89-15.28-14.91-1.85-71.47-2.11-85.79-.42-16.66,2-30.32,4.14-49.15,7.77-6.83,1.26-14.74,2.78-17.49,3.29s-11.08,2.28-18.49,3.88c-52.64,11.48-59.72,13-65.64,13.84-2.75.42-9.33,1.52-14.58,2.45-40.64,7.26-75.13,7.93-113.69,2.36-21.41-3.12-32-5.06-68.3-12.91-44.82-9.62-77.72-16-92-17.89-21.33-2.87-25-3-55-3-45.81,0-60.22,1.94-137.85,18.65-26.74,5.74-53.48,11.22-61.64,12.49-4.58.76-10.58,1.77-13.33,2.19-5.58.93-16.74,2.28-28.73,3.38-25.74,2.45-77.72-.17-118.7-5.91-6.83-1-17.57-2.53-23.74-3.37s-14.08-2.2-17.49-2.87-10.91-2-16.66-3c-19.07-3.46-62.14-12.32-91.62-18.91C16.91,683.46,10.5,682,8,681.52a30.56,30.56,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1599.76v-62c0-61.44,1.67-47.47,0-47.47A17.5,17.5,0,0,0,1599.76,682.12Z' transform='translate(1)'/%3E%3Cg class='f'%3E%3Cpath class='g' d='M1198.43,85c6.43,0,6.44-10,0-10s-6.45,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1330.42,74.49c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1325.92,161.49c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M147,25c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M229.48,70c6.43,0,6.44-10,0-10s-6.45,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M310.47,70c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M405,16c6.43,0,6.44-10,0-10s-6.45,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M478.46,82c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M325.47,170.49c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M147,23c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M229.48,68c3.86,0,3.86-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M310,68c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M405,13.5c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M478,80c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M325.5,168c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1330.5,72.5c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1198,83c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1325.5,159c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1325.5,159c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3C/svg%3E");*/
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%25' height='100%25' viewBox='0 0 1601.5 800.61'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:url(%23a);%7D.b%7Bfill:%23d1a0c0;%7D.c%7Bfill:%23b982a9;%7D.d%7Bfill:%236d4c5f;%7D.e%7Bfill:%233b3b3b;%7D.f%7Bopacity:0.5;%7D.g%7Bfill:%23fff;%7D%3C/style%3E%3ClinearGradient id='a' x1='26.79' y1='-46.41' x2='1573.21' y2='846.41' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%235f6b9d'/%3E%3Cstop offset='0.24' stop-color='%23686d9e'/%3E%3Cstop offset='0.63' stop-color='%238274a2'/%3E%3Cstop offset='0.99' stop-color='%239f7ca6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect class='a' width='1600' height='800'/%3E%3Cpath class='b' d='M1597.59,252.62c0,2.57-.09,2.65-3.09,2.65-3.75.07-15.08,1.51-29,3.78-5.5.83-14.33,2.27-19.58,3.1s-10.92,1.74-12.5,2-6.67,1-11.25,1.74c-17.67,2.95-32.25,5.07-59.17,8.7-5,.6-11.25,1.51-13.75,1.89-6.41,1-28.16,3.48-42.5,4.91-29.83,2.88-39.41,3.48-62.91,3.93-35,.61-48-.45-97.09-8.16-3-.46-24.16-4.16-47.08-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.84-3.86-32.5-4-67.09-4-32.83,0-44.5.6-60.83,3.25-2.25.38-7.17,1.13-10.83,1.59-5.75.75-22.25,3.48-35.84,5.9-5,.9-28.41,5.36-46.25,8.92-55.66,10.88-85.91,14.66-117.08,14.66-17.92,0-30.83-1-52.92-3.85-25.58-3.4-26.25-3.48-37.08-5.6-36.42-7.18-96.42-18.29-104.17-19.35-33.33-4.54-36.83-4.76-70.41-4.84-36.09,0-44.92.61-75.84,5.44-10.5,1.59-44.41,7.79-61.66,11.12-66.17,13-90.17,16.25-125,16.86a697.11,697.11,0,0,1-98.34-5.82c-6.16-.76-15.58-2-20.83-2.65S137.59,278,133,277.27s-13.16-2.19-19.16-3.1c-21-3.25-92.84-16.78-107.75-20.26l-6-1.36V659h1600V454.49c0-181.3-.17-204.51-1.25-204.51C1598,250,1597.59,250.81,1597.59,252.62Z' transform='translate(1)'/%3E%3Cpath class='c' d='M1597.59,322.92c0,2.58-.09,2.65-3.09,2.65-3.75.08-15.08,1.51-29,3.78-5.5.83-14.33,2.27-19.58,3.1s-10.92,1.74-12.5,2-6.67,1-11.25,1.74c-17.67,2.94-32.25,5.06-59.17,8.69-5,.6-11.25,1.51-13.75,1.89-6.41,1-28.16,3.48-42.5,4.91-29.83,2.88-39.41,3.48-62.91,3.94-35,.6-48-.46-97.09-8.17-3-.45-24.16-4.16-47.08-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.84-3.86-32.5-4-67.09-4-32.83,0-44.5.61-60.83,3.25-2.25.38-7.17,1.14-10.83,1.59-5.75.76-22.25,3.48-35.84,5.9-5,.91-28.41,5.37-46.25,8.92-55.66,10.89-85.91,14.67-117.08,14.67-17.92,0-30.83-1-52.92-3.86-25.58-3.4-26.25-3.48-37.08-5.59C670.75,342.2,610.75,331.09,603,330c-33.33-4.53-36.83-4.76-70.41-4.84-36.09,0-44.92.61-75.84,5.45-10.5,1.58-44.41,7.78-61.66,11.11-66.17,13-90.17,16.26-125,16.86a697.11,697.11,0,0,1-98.34-5.82c-6.16-.76-15.58-2-20.83-2.65s-13.33-1.81-17.92-2.57-13.16-2.19-19.16-3.1c-21-3.25-92.84-16.78-107.75-20.26l-6-1.36V729.3h1600V524.79c0-181.3-.17-204.51-1.25-204.51C1598,320.28,1597.59,321.11,1597.59,322.92Z' transform='translate(1)'/%3E%3Cpath class='d' d='M1597.59,393.23c0,2.57-.09,2.64-3.09,2.64-3.75.08-15.08,1.52-29,3.78-5.5.84-14.33,2.27-19.58,3.1s-10.92,1.74-12.5,2-6.67,1-11.25,1.74c-17.67,3-32.25,5.06-59.17,8.69-5,.61-11.25,1.51-13.75,1.89-6.41,1-28.16,3.48-42.5,4.92-29.83,2.87-39.41,3.47-62.91,3.93-35,.6-48-.46-97.09-8.17-3-.45-24.16-4.16-47.08-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.84-3.85-32.5-4-67.09-4-32.83,0-44.5.61-60.83,3.26-2.25.37-7.17,1.13-10.83,1.58-5.75.76-22.25,3.48-35.84,5.9-5,.91-28.41,5.37-46.25,8.92-55.66,10.89-85.91,14.67-117.08,14.67-17.92,0-30.83-1-52.92-3.86-25.58-3.4-26.25-3.47-37.08-5.59-36.42-7.18-96.42-18.3-104.17-19.36-33.33-4.53-36.83-4.76-70.41-4.83-36.09,0-44.92.6-75.84,5.44-10.5,1.59-44.41,7.79-61.66,11.11-66.17,13-90.17,16.26-125,16.86a695.61,695.61,0,0,1-98.34-5.82c-6.16-.75-15.58-2-20.83-2.64s-13.33-1.82-17.92-2.58-13.16-2.19-19.16-3.1C92.84,411.52,21,398,6.09,394.51l-6-1.36V799.61h1600V595.09c0-181.3-.17-204.51-1.25-204.51C1598,390.58,1597.59,391.41,1597.59,393.23Z' transform='translate(1)'/%3E%3Cpath class='e' d='M1599.76,682.12h-3.33l-9.75,1.1c-5.41.59-12.41,1.6-15.66,2.19-6.41,1.27-20.57,3.8-32.9,5.91-4.33.76-11.66,2.11-16.24,3-12.83,2.36-31.49,5.4-53.31,8.77-89,13.76-141.27,16.38-188.66,9.37-22.58-3.37-28.07-4.39-78.8-14.43-54.22-10.72-59.06-11.56-89-15.28-14.91-1.85-71.47-2.11-85.79-.42-16.66,2-30.32,4.14-49.15,7.77-6.83,1.26-14.74,2.78-17.49,3.29s-11.08,2.28-18.49,3.88c-52.64,11.48-59.72,13-65.64,13.84-2.75.42-9.33,1.52-14.58,2.45-40.64,7.26-75.13,7.93-113.69,2.36-21.41-3.12-32-5.06-68.3-12.91-44.82-9.62-77.72-16-92-17.89-21.33-2.87-25-3-55-3-45.81,0-60.22,1.94-137.85,18.65-26.74,5.74-53.48,11.22-61.64,12.49-4.58.76-10.58,1.77-13.33,2.19-5.58.93-16.74,2.28-28.73,3.38-25.74,2.45-77.72-.17-118.7-5.91-6.83-1-17.57-2.53-23.74-3.37s-14.08-2.2-17.49-2.87-10.91-2-16.66-3c-19.07-3.46-62.14-12.32-91.62-18.91C16.91,683.46,10.5,682,8,681.52a30.56,30.56,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1599.76v-62c0-61.44,1.67-47.47,0-47.47A17.5,17.5,0,0,0,1599.76,682.12Z' transform='translate(1)'/%3E%3Cg class='f'%3E%3Cpath class='g' d='M1237.44,107.23c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1381.94,105c6.43,0,6.44-10,0-10s-6.45,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1432,183.49c6.43,0,6.45-10,0-10s-6.45,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M144.73,23.84c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M223.81,79.41c6.43,0,6.44-10,0-10s-6.45,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M297.61,92.22c6.44,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M386.24,47.83c6.43,0,6.44-10,0-10s-6.45,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M450.13,111c6.43,0,6.44-10,0-10s-6.45,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M306.59,183.81c6.43,0,6.45-10,0-10s-6.44,10,0,10Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M144.73,21.84c3.87,0,3.87-6,0-6s-3.86,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M223.81,77.41c3.86,0,3.86-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M297.18,90.21c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M386.29,45.39c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M449.71,109c3.86,0,3.86-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M306.64,181.37c3.86,0,3.86-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1382,103c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1237,105.24c3.86,0,3.87-6,0-6s-3.87,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1431.56,181.05c3.86,0,3.87-6,0-6s-3.86,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3Cg class='f'%3E%3Cpath class='g' d='M1431.56,181.05c3.86,0,3.87-6,0-6s-3.86,6,0,6Z' transform='translate(1)'/%3E%3C/g%3E%3C/svg%3E");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    .morning {
        background-color: #fff;
        background: #f7f894;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23ffe467;%7D.b%7Bfill:%23ffd05e;%7D.c%7Bfill:%23f6c053;%7D.d%7Bfill:%233b3b3b;%7D.e%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eволны.туризм%3C/title%3E%3Cpath class='a' d='M1597.63,252.65c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.51-29,3.78-5.5.83-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,2.95-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.25-2.25.38-7.16,1.14-10.83,1.59-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.48-37.09-5.59-36.41-7.18-96.41-18.3-104.16-19.36-33.34-4.53-36.84-4.76-70.42-4.84-36.08,0-44.92.61-75.83,5.45-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.76-15.59-2-20.84-2.65s-13.33-1.81-17.91-2.57-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V659h1600V454.51c0-181.3-.17-204.51-1.25-204.51C1598.05,250,1597.63,250.83,1597.63,252.65Z' transform='translate(1)'/%3E%3Cpath class='b' d='M1597.63,322.94c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.51-29,3.78-5.5.83-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,2.95-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.26-2.25.37-7.16,1.13-10.83,1.58-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.47-37.09-5.59C670.8,342.22,610.8,331.1,603.05,330c-33.34-4.53-36.84-4.76-70.42-4.84-36.08,0-44.92.61-75.83,5.45-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.76-15.59-2-20.84-2.65s-13.33-1.81-17.91-2.57-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V729.31h1600V524.8c0-181.3-.17-204.51-1.25-204.51C1598.05,320.29,1597.63,321.12,1597.63,322.94Z' transform='translate(1)'/%3E%3Cpath class='c' d='M1597.63,393.23c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.52-29,3.78-5.5.84-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,3-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.26-2.25.37-7.16,1.13-10.83,1.58-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.47-37.09-5.59-36.41-7.18-96.41-18.3-104.16-19.36-33.34-4.53-36.84-4.76-70.42-4.83-36.08,0-44.92.6-75.83,5.44-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.75-15.59-2-20.84-2.64s-13.33-1.82-17.91-2.58-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V799.61h1600V595.09c0-181.3-.17-204.51-1.25-204.51C1598.05,390.58,1597.63,391.41,1597.63,393.23Z' transform='translate(1)'/%3E%3Cpath class='d' d='M1599.76,682.12h-3.33l-9.75,1.1c-5.41.59-12.41,1.6-15.66,2.19-6.41,1.27-20.57,3.8-32.9,5.91-4.33.76-11.66,2.11-16.24,3-12.83,2.36-31.49,5.4-53.31,8.77-89,13.76-141.27,16.38-188.66,9.37-22.58-3.37-28.07-4.39-78.8-14.43-54.22-10.72-59.06-11.56-89-15.28-14.91-1.85-71.47-2.11-85.79-.42-16.66,2-30.32,4.14-49.15,7.77-6.83,1.26-14.74,2.78-17.49,3.29s-11.08,2.28-18.49,3.88c-52.64,11.48-59.72,13-65.64,13.84-2.75.42-9.33,1.52-14.58,2.45-40.64,7.26-75.13,7.93-113.69,2.36-21.41-3.12-32-5.06-68.3-12.91-44.82-9.62-77.72-16-92-17.89-21.33-2.87-25-3-55-3-45.81,0-60.22,1.94-137.85,18.65-26.74,5.74-53.48,11.22-61.64,12.49-4.58.76-10.58,1.77-13.33,2.19-5.58.93-16.74,2.28-28.73,3.38-25.74,2.45-77.72-.17-118.7-5.91-6.83-1-17.57-2.53-23.74-3.37s-14.08-2.2-17.49-2.87-10.91-2-16.66-3c-19.07-3.46-62.14-12.32-91.62-18.91C16.91,683.46,10.5,682,8,681.52a30.56,30.56,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1599.76v-62c0-61.44,1.67-47.47,0-47.47A17.5,17.5,0,0,0,1599.76,682.12Z' transform='translate(1)'/%3E%3Crect class='e' width='1600' height='800'/%3E%3C/svg%3E");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    .day .social-buttons li a {
        color: #f8e300;
    }

    .night .social-buttons li a {
        color: #f7d208;
    }

    .night .menu-title span {
        color: #f7d208 !important;
    }

    .evening .social-buttons li a {
        color: #d1a0c0;
    }

    .evening .menu-title span {
        color: #d1a0c0 !important;
    }

    .btn.btn-pill {
        border-radius: 30px;
    }

    .btnt {
        /*margin-top: calc(50% + 25px);*/
        position: relative;
        display: inline-block;
        width: 277px;
        height: 52px;
        font-size: 1em;
        font-weight: bold;
        line-height: 60px;
        text-align: center;
        text-transform: uppercase;
        background-color: transparent;
        cursor: pointer;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 17px;
        letter-spacing: 0.045em;
        outline: none;
    }

    .btnt:focus {
        outline: 0
    }

    .btnt svg {
        position: absolute;
        top: 0;
        left: 0;
        /*width: 277px;*/
        /*height: 62px;*/
    }

    .btnt svg rect {
        /*//stroke: #EC0033;*/
        stroke-width: 4;
        stroke-dasharray: 353, 0;
        stroke-dashoffset: 0;
        -webkit-transition: all 600ms ease;
        transition: all 600ms ease;
        width: 266px;
        height: 50px;
    }

    .btnt span {
        /*background: rgb(255,130,130);
        background: -moz-linear-gradient(left,  rgba(255,130,130,1) 0%, rgba(225,120,237,1) 100%);
        background: -webkit-linear-gradient(left,  rgba(255,130,130,1) 0%,rgba(225,120,237,1) 100%);
        background: linear-gradient(to right,  rgba(255,130,130,1) 0%,rgba(225,120,237,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8282', endColorstr='#e178ed',GradientType=1 );
        */
        /*background: white;*/
        background: rgba(248, 117, 1, 1);
        /*  background: rgb(249,231,1);*/
        /*  background: linear-gradient(to right, rgba(249,231,1,1) 0%, rgba(248,146,9,1) 50%, rgba(248,117,1,1) 100%);*/
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /*.night .btnt span{*/
    /*    background: #0525ae;*/
    /*    !*background: linear-gradient(to right, rgba(0,134,249,1) 0%, rgba(13,41,238,1) 50%, rgba(2,23,89,1) 100%);*!*/
    /*    -webkit-background-clip: text;*/
    /*    -webkit-text-fill-color: transparent;*/
    /*}*/

    .btnt:hover svg rect {
        stroke-width: 4;
        stroke-dasharray: 196, 543;
        stroke-dashoffset: 437;
        /*stroke-dasharray: 196, 828;*/
        /*stroke-dashoffset: 568;*/
        /*width: 366px;*/
        /*height: 70px;*/
    }

    @media (max-width: 448px) {

        .btnt {
            width: 100% !important;
        }

        /*.btnt svg {*/
        /*    width: 284px;*/
        /*}*/
        .btnt svg rect {
            /*width: 273px;*/
            display: none;
        }

        .btnt:hover svg rect {
            stroke-width: 4;
            stroke-dasharray: 353, 0;
            stroke-dashoffset: 0;
            display: none;
            /*width: 273px;*/
        }
    }

    /*@media (min-width: 748px) {*/
    /*    .night{*/
    /*        background-color: #fff;*/
    /*        background: #4396ff;*/
    /*        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%230d29ee;%7D.b%7Bfill:%230724c0;%7D.c%7Bfill:%233b3b3b;%7D.d%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M1595.76,265c0,2.87-.08,3-3.08,3-3.74.08-15.06,1.69-29,4.22-5.49.93-14.31,2.53-19.56,3.46s-10.9,1.94-12.48,2.19-6.66,1.1-11.24,1.94c-17.65,3.29-32.22,5.66-59.1,9.71-5,.67-11.24,1.69-13.74,2.11-6.41,1.1-28.14,3.88-42.45,5.48-29.8,3.21-39.38,3.89-62.85,4.39-35,.68-48-.5-97-9.11-3-.51-24.14-4.64-47-9.2-46.53-9.2-48.7-9.62-64.51-11.9-29.81-4.31-32.47-4.47-67-4.47-32.8,0-44.46.67-60.77,3.63-2.25.42-7.16,1.26-10.82,1.77-5.75.84-22.23,3.88-35.8,6.58-5,1-28.38,6-46.2,10C857.57,300.82,827.35,305,796.22,305c-17.9,0-30.8-1.09-52.86-4.3-25.56-3.8-26.22-3.88-37.05-6.25-36.37-8-96.31-20.42-104-21.6-33.3-5.07-36.79-5.32-70.34-5.4-36,0-44.87.67-75.75,6.07-10.49,1.77-44.37,8.7-61.6,12.41-66.09,14.51-90.07,18.14-124.86,18.82-29.89.59-63.93-1.6-98.23-6.5-6.16-.84-15.57-2.19-20.81-3s-13.32-2-17.9-2.87S119.62,290,113.63,289c-21-3.63-92.74-18.74-107.64-22.62l-6-1.52V718.58H1598.26V490.29c0-202.38-.17-228.29-1.25-228.29C1596.18,262,1595.76,262.93,1595.76,265Z' transform='translate(1)'/%3E%3Cpath class='b' d='M1595.76,346c0,2.87-.08,3-3.08,3-3.74.08-15.06,1.69-29,4.22-5.49.93-14.31,2.53-19.56,3.46s-10.9,1.94-12.48,2.19-6.66,1.1-11.24,1.94c-17.65,3.3-32.22,5.66-59.1,9.71-5,.67-11.24,1.69-13.74,2.11-6.41,1.1-28.14,3.88-42.45,5.49-29.8,3.2-39.38,3.88-62.85,4.38-35,.68-48-.5-97-9.11-3-.51-24.14-4.64-47-9.2-46.53-9.2-48.7-9.62-64.51-11.9-29.81-4.3-32.47-4.47-67-4.47-32.8,0-44.46.67-60.77,3.63-2.25.42-7.16,1.26-10.82,1.77-5.75.84-22.23,3.88-35.8,6.58-5,1-28.38,6-46.2,10-55.6,12.15-85.82,16.37-116.95,16.37-17.9,0-30.8-1.09-52.86-4.3-25.56-3.8-26.22-3.88-37.05-6.25-36.37-8-96.31-20.42-104-21.6-33.3-5.07-36.79-5.32-70.34-5.4-36,0-44.87.67-75.75,6.07-10.49,1.78-44.37,8.7-61.6,12.41-66.09,14.52-90.07,18.14-124.86,18.82-29.89.59-63.93-1.6-98.23-6.5-6.16-.84-15.57-2.19-20.81-2.95s-13.32-2-17.9-2.87S119.62,371,113.63,370C92.65,366.4,20.89,351.29,6,347.41l-6-1.52V799.61H1598.26V571.31c0-202.38-.17-228.29-1.25-228.29C1596.18,343,1595.76,344,1595.76,346Z' transform='translate(1)'/%3E%3Cpath class='c' d='M1598.26,681.12h-3.33l-9.74,1.1c-5.41.59-12.4,1.6-15.65,2.19-6.41,1.27-20.56,3.8-32.88,5.91-4.33.76-11.65,2.11-16.23,3-12.82,2.36-31.47,5.4-53.28,8.77-88.9,13.76-141.18,16.38-188.54,9.37-22.56-3.37-28-4.39-78.75-14.43-54.19-10.72-59-11.56-89-15.28-14.9-1.85-71.42-2.11-85.74-.42-16.64,2-30.3,4.14-49.11,7.77-6.83,1.26-14.73,2.78-17.48,3.29s-11.07,2.28-18.48,3.88c-52.61,11.48-59.69,13-65.6,13.84-2.74.42-9.32,1.52-14.56,2.45-40.63,7.26-75.09,7.93-113.63,2.36-21.39-3.12-32-5.06-68.26-12.91-44.78-9.62-77.66-16-92-17.89-21.31-2.87-25-3-54.94-3-45.78,0-60.19,1.94-137.77,18.65-26.72,5.74-53.44,11.22-61.6,12.49-4.58.76-10.57,1.77-13.32,2.19-5.57.93-16.73,2.28-28.72,3.38-25.72,2.45-77.66-.17-118.62-5.91-6.82-1-17.56-2.53-23.72-3.37s-14.07-2.2-17.48-2.87-10.91-2-16.65-3c-19.06-3.46-62.1-12.32-91.57-18.91C16.4,682.46,10,681,7.49,680.52a30.41,30.41,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1598.26v-62c0-61.44,1.66-47.47,0-47.47A17.5,17.5,0,0,0,1598.26,681.12Z' transform='translate(1)'/%3E%3C/svg%3E");*/
    /*        !*background-attachment: fixed;*!*/
    /*        background-size: cover;*/
    /*        background-position: bottom;*/

    /*    }*/
    /*    .day {*/
    /*        background-color: #fff;*/
    /*        background: #fff;*/
    /*        !*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23ffd05e;%7D.b%7Bfill:%23f6c053;%7D.c%7Bfill:%233b3b3b;%7D.d%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M1595.76,265c0,2.87-.08,3-3.08,3-3.74.08-15.06,1.69-29,4.22-5.49.93-14.31,2.53-19.56,3.46s-10.9,1.94-12.48,2.19-6.66,1.1-11.24,1.94c-17.65,3.29-32.22,5.66-59.1,9.71-5,.67-11.24,1.69-13.74,2.11-6.41,1.1-28.14,3.88-42.45,5.48-29.8,3.21-39.38,3.89-62.85,4.39-35,.68-48-.5-97-9.11-3-.51-24.14-4.64-47-9.2-46.53-9.2-48.7-9.62-64.51-11.9-29.81-4.31-32.47-4.47-67-4.47-32.8,0-44.46.67-60.77,3.63-2.25.42-7.16,1.26-10.82,1.77-5.75.84-22.23,3.88-35.8,6.58-5,1-28.38,6-46.2,10C857.57,300.82,827.35,305,796.22,305c-17.9,0-30.8-1.09-52.86-4.3-25.56-3.8-26.22-3.88-37.05-6.25-36.37-8-96.31-20.42-104-21.6-33.3-5.07-36.79-5.32-70.34-5.4-36,0-44.87.67-75.75,6.07-10.49,1.77-44.37,8.7-61.6,12.41-66.09,14.51-90.07,18.14-124.86,18.82-29.89.59-63.93-1.6-98.23-6.5-6.16-.84-15.57-2.19-20.81-3s-13.32-2-17.9-2.87S119.62,290,113.63,289c-21-3.63-92.74-18.74-107.64-22.62l-6-1.52V718.58H1598.26V490.29c0-202.38-.17-228.29-1.25-228.29C1596.18,262,1595.76,262.93,1595.76,265Z' transform='translate(1)'/%3E%3Cpath class='b' d='M1595.76,346c0,2.87-.08,3-3.08,3-3.74.08-15.06,1.69-29,4.22-5.49.93-14.31,2.53-19.56,3.46s-10.9,1.94-12.48,2.19-6.66,1.1-11.24,1.94c-17.65,3.3-32.22,5.66-59.1,9.71-5,.67-11.24,1.69-13.74,2.11-6.41,1.1-28.14,3.88-42.45,5.49-29.8,3.2-39.38,3.88-62.85,4.38-35,.68-48-.5-97-9.11-3-.51-24.14-4.64-47-9.2-46.53-9.2-48.7-9.62-64.51-11.9-29.81-4.3-32.47-4.47-67-4.47-32.8,0-44.46.67-60.77,3.63-2.25.42-7.16,1.26-10.82,1.77-5.75.84-22.23,3.88-35.8,6.58-5,1-28.38,6-46.2,10-55.6,12.15-85.82,16.37-116.95,16.37-17.9,0-30.8-1.09-52.86-4.3-25.56-3.8-26.22-3.88-37.05-6.25-36.37-8-96.31-20.42-104-21.6-33.3-5.07-36.79-5.32-70.34-5.4-36,0-44.87.67-75.75,6.07-10.49,1.78-44.37,8.7-61.6,12.41-66.09,14.52-90.07,18.14-124.86,18.82-29.89.59-63.93-1.6-98.23-6.5-6.16-.84-15.57-2.19-20.81-2.95s-13.32-2-17.9-2.87S119.62,371,113.63,370C92.65,366.4,20.89,351.29,6,347.41l-6-1.52V799.61H1598.26V571.31c0-202.38-.17-228.29-1.25-228.29C1596.18,343,1595.76,344,1595.76,346Z' transform='translate(1)'/%3E%3Cpath class='c' d='M1598.26,681.12h-3.33l-9.74,1.1c-5.41.59-12.4,1.6-15.65,2.19-6.41,1.27-20.56,3.8-32.88,5.91-4.33.76-11.65,2.11-16.23,3-12.82,2.36-31.47,5.4-53.28,8.77-88.9,13.76-141.18,16.38-188.54,9.37-22.56-3.37-28-4.39-78.75-14.43-54.19-10.72-59-11.56-89-15.28-14.9-1.85-71.42-2.11-85.74-.42-16.64,2-30.3,4.14-49.11,7.77-6.83,1.26-14.73,2.78-17.48,3.29s-11.07,2.28-18.48,3.88c-52.61,11.48-59.69,13-65.6,13.84-2.74.42-9.32,1.52-14.56,2.45-40.63,7.26-75.09,7.93-113.63,2.36-21.39-3.12-32-5.06-68.26-12.91-44.78-9.62-77.66-16-92-17.89-21.31-2.87-25-3-54.94-3-45.78,0-60.19,1.94-137.77,18.65-26.72,5.74-53.44,11.22-61.6,12.49-4.58.76-10.57,1.77-13.32,2.19-5.57.93-16.73,2.28-28.72,3.38-25.72,2.45-77.66-.17-118.62-5.91-6.82-1-17.56-2.53-23.72-3.37s-14.07-2.2-17.48-2.87-10.91-2-16.65-3c-19.06-3.46-62.1-12.32-91.57-18.91C16.4,682.46,10,681,7.49,680.52a30.41,30.41,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1598.26v-62c0-61.44,1.66-47.47,0-47.47A17.5,17.5,0,0,0,1598.26,681.12Z' transform='translate(1)'/%3E%3C/svg%3E");*!*/
    /*        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23ffe467;%7D.b%7Bfill:%23ffd05e;%7D.c%7Bfill:%23f6c053;%7D.d%7Bfill:%233b3b3b;%7D.e%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eволны.туризм%3C/title%3E%3Cpath class='a' d='M1597.63,252.65c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.51-29,3.78-5.5.83-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,2.95-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.25-2.25.38-7.16,1.14-10.83,1.59-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.48-37.09-5.59-36.41-7.18-96.41-18.3-104.16-19.36-33.34-4.53-36.84-4.76-70.42-4.84-36.08,0-44.92.61-75.83,5.45-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.76-15.59-2-20.84-2.65s-13.33-1.81-17.91-2.57-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V659h1600V454.51c0-181.3-.17-204.51-1.25-204.51C1598.05,250,1597.63,250.83,1597.63,252.65Z' transform='translate(1)'/%3E%3Cpath class='b' d='M1597.63,322.94c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.51-29,3.78-5.5.83-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,2.95-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.26-2.25.37-7.16,1.13-10.83,1.58-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.47-37.09-5.59C670.8,342.22,610.8,331.1,603.05,330c-33.34-4.53-36.84-4.76-70.42-4.84-36.08,0-44.92.61-75.83,5.45-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.76-15.59-2-20.84-2.65s-13.33-1.81-17.91-2.57-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V729.31h1600V524.8c0-181.3-.17-204.51-1.25-204.51C1598.05,320.29,1597.63,321.12,1597.63,322.94Z' transform='translate(1)'/%3E%3Cpath class='c' d='M1597.63,393.23c0,2.57-.08,2.64-3.08,2.64-3.75.08-15.09,1.52-29,3.78-5.5.84-14.34,2.27-19.59,3.1s-10.91,1.74-12.5,2-6.66,1-11.25,1.74c-17.66,3-32.25,5.06-59.16,8.69-5,.61-11.25,1.51-13.75,1.89-6.42,1-28.17,3.48-42.5,4.92-29.84,2.87-39.42,3.47-62.92,3.93-35,.6-48-.46-97.08-8.17-3-.45-24.17-4.16-47.09-8.24-46.58-8.24-48.75-8.62-64.58-10.66-29.83-3.85-32.5-4-67.08-4-32.84,0-44.5.61-60.84,3.26-2.25.37-7.16,1.13-10.83,1.58-5.75.76-22.25,3.48-35.83,5.9-5,.91-28.42,5.37-46.25,8.92-55.67,10.89-85.92,14.67-117.09,14.67-17.91,0-30.83-1-52.91-3.86-25.59-3.4-26.25-3.47-37.09-5.59-36.41-7.18-96.41-18.3-104.16-19.36-33.34-4.53-36.84-4.76-70.42-4.83-36.08,0-44.92.6-75.83,5.44-10.5,1.59-44.42,7.79-61.67,11.11-66.17,13-90.17,16.26-125,16.86a695.39,695.39,0,0,1-98.33-5.82c-6.17-.75-15.59-2-20.84-2.64s-13.33-1.82-17.91-2.58-13.17-2.19-19.17-3.1c-21-3.25-92.83-16.78-107.75-20.26l-6-1.36V799.61h1600V595.09c0-181.3-.17-204.51-1.25-204.51C1598.05,390.58,1597.63,391.41,1597.63,393.23Z' transform='translate(1)'/%3E%3Cpath class='d' d='M1599.76,682.12h-3.33l-9.75,1.1c-5.41.59-12.41,1.6-15.66,2.19-6.41,1.27-20.57,3.8-32.9,5.91-4.33.76-11.66,2.11-16.24,3-12.83,2.36-31.49,5.4-53.31,8.77-89,13.76-141.27,16.38-188.66,9.37-22.58-3.37-28.07-4.39-78.8-14.43-54.22-10.72-59.06-11.56-89-15.28-14.91-1.85-71.47-2.11-85.79-.42-16.66,2-30.32,4.14-49.15,7.77-6.83,1.26-14.74,2.78-17.49,3.29s-11.08,2.28-18.49,3.88c-52.64,11.48-59.72,13-65.64,13.84-2.75.42-9.33,1.52-14.58,2.45-40.64,7.26-75.13,7.93-113.69,2.36-21.41-3.12-32-5.06-68.3-12.91-44.82-9.62-77.72-16-92-17.89-21.33-2.87-25-3-55-3-45.81,0-60.22,1.94-137.85,18.65-26.74,5.74-53.48,11.22-61.64,12.49-4.58.76-10.58,1.77-13.33,2.19-5.58.93-16.74,2.28-28.73,3.38-25.74,2.45-77.72-.17-118.7-5.91-6.83-1-17.57-2.53-23.74-3.37s-14.08-2.2-17.49-2.87-10.91-2-16.66-3c-19.07-3.46-62.14-12.32-91.62-18.91C16.91,683.46,10.5,682,8,681.52a30.56,30.56,0,0,1-6-1.69c-1.42-.76-1.5,2.37-1.5,60v60.77H1599.76v-62c0-61.44,1.67-47.47,0-47.47A17.5,17.5,0,0,0,1599.76,682.12Z' transform='translate(1)'/%3E%3Crect class='e' width='1600' height='800'/%3E%3C/svg%3E");*/
    /*        !*background-attachment: fixed;*!*/
    /*        background-size: cover;*/
    /*        background-position: bottom;*/
    /*    }*/
    /*}*/

    @media screen and (max-width: 576px) {
        .modal .card-body {
            flex: 1 1 auto;
            min-height: 1px;
            padding: 0.25rem;
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    /*    .fade-enter-active, .fade-leave-active {*/
    /*        transition: opacity .5s;*/
    /*    }*/
    /*    .fade-enter, .fade-leave-to {*/
    /*        opacity: 0;*/
    /*        transform: translate(2em, 0);*/
    /*    }*/

    /*.fade-enter-active {*/
    /*    transition: opacity 1s ease-out;*/
    /*    transition-delay: 1s;*/
    /*}*/
    /*.fade-enter {*/
    /*    opacity: 0;*/
    /*}*/
    /*.fade-enter-to {*/
    /*    opacity: 1;*/
    /*}*/
    /*.fade-move {*/
    /*    transition: transform 1s;*/
    /*}*/

    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition-duration: 0.5s;
        transition-property: height, opacity, transform;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        overflow: hidden;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(2em, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-2em, 0);
    }

    @media (max-width: 767px) {
        .slider_area .single_slider {
            height: auto;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        .slider_area .single_slider {
            height: 700px;
        }
    }

    @media (max-width: 767px) {
        .slider_area .single_slider .slider_text {
            margin-top: 110px;
            margin-bottom: 20px;
        }
    }


    .slider_area .single_slider .slider_text h3 {
        font-size: 2.5rem;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
        font-weight: 700;

        margin-bottom: 40px;
        color: #fff;
        /*font-family: "Roboto", sans-serif;line-height: 74px;
        font-size: 60px;
        font-weight: 400;
        line-height: 74px;
        margin-bottom: 40px;
        color: #fff;*/
    }

    @media (max-width: 767px) {

        .slider_area .single_slider .slider_text h3 {
            font-size: 30px;
            margin-bottom: 30px;
            line-height: 45px;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {

        .slider_area .single_slider .slider_text h3 {
            font-size: 34px;
            line-height: 1.4;
            margin-bottom: 35px;
        }
    }

    @media (min-width: 992px) and (max-width: 1200px) {

        .slider_area .single_slider .slider_text h3 {
            font-size: 40px;
            line-height: 1.4;
        }
    }

    .slider_area .single_slider .slider_text p {

        font-size: 20px;
        font-weight: 400;
        color: #fff;

        margin-bottom: 24px;
    }

    @media (min-width: 992px) and (max-width: 1200px) {

        .slider_area .single_slider .slider_text p {
            font-size: 16px;
        }
    }

    @media (max-width: 767px) {

        .slider_area .single_slider .slider_text p {
            font-size: 16px;
        }
    }

    ul.social-buttons {
        text-align: center;
        /*margin-top: 60px !important;*/
        /*margin-bottom: 0;*/
        padding: 0;
        z-index: 1;
    }

    /*ul.social-buttons li {*/
        /*display: inline-block;*/
        /*display: block;*/
        /*margin: 0 10px;*/
    /*}*/

    /*ul.social-buttons li a {*/
    /*    width: 50px;*/
    /*    height: 50px;*/
    /*    display: block;*/
    /*    border-radius: 50px;*/
    /*    text-decoration: none;*/
    /*    font-size: 30px;*/
    /*    line-height: 50px;*/
    /*    color: white;*/
    /*    background: #f08b23;*/
    /*    padding: 0px !important;*/
    /*}*/

    /*Demo 1*/
    ul#demo1 li a {
        transition: transform 0.2s linear;
    }

    ul#demo1 li:hover a {
        transform: translateY(-10px);
    }

    @media screen and (max-width: 448px) {
        ul.social-buttons {
            text-align: center;
            margin-top: 40px !important;
            margin-bottom: 0;
            padding: 0;
            z-index: 1;
        }
    }

    /*Demo 2*/
    /*ul#demo2 li a {
      transition: transform 0.5s ease-in-out;
    }

    ul#demo2 li:hover a {
      transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
    }*/
    /*.overlay {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0, 0.9);
        overflow-x: hidden;
        transition: 0.5s;
    }*/

    .validate-error {
        width: 100%;
        margin-top: 0.25rem;
        font-size: 80%;
        color: #f23a2e;
    }

    .header_area.sticky {
        position: sticky;
        top: 0;
        width: 100%;
        height: 52px;
        left: 0;
        z-index: 4;
        background: white;
    }

    .header_area.sticky-border {
        box-shadow: 0px -4px 10px #f08b23;
        transition: all ease 0.3s;
    }

</style>
