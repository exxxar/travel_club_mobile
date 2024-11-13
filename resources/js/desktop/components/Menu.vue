<template>
    <div class="tc-header px-3 px-md-5 py-2">
        <slot name="menu">
            <slot name="logo">
                <a href="/">
                    <!--                    <img src="/images/logo.svg" style="height: 40px"/>-->
                    <base-icon name="Logo" width="" height="45px"/>
                    <!--                    <h4 style="z-index: 1; color:#0d274b;font-weight:900;" class="float-left menu-title">-->
                    <!--                        В<span style="color: #f08b23;">ПУТЬ</span>-->
                    <!--                    </h4>-->
                </a>
            </slot>

            <!--                    <div class="row m-auto desktop d-flex align-items-center">-->

            <!--                        <p class="mr-5 mb-0" style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase">8-800-101-96-66</p>-->
            <!--            &lt;!&ndash;            <phone-by-city-form class="mr-5 mb-0"></phone-by-city-form>&ndash;&gt;-->
            <!--                   &lt;!&ndash;     <a class="mr-5 mb-0"-->
            <!--                           :href="'tel:'+unformatted_phone"-->
            <!--                           style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase"-->
            <!--                        >-->
            <!--                            {{phone}}</a>&ndash;&gt;-->
            <!--                        &lt;!&ndash;          <p class="mr-5 mb-0" style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase">8 800 500 5 500</p>&ndash;&gt;-->
            <!--                        &lt;!&ndash;          <p class="mb-0" style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase">travel-club@gmail.com</p>&ndash;&gt;-->
            <!--                        &lt;!&ndash;          <p class="mb-0" style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase">bp.pink.donetsk@gmail.com</p>&ndash;&gt;-->
            <!--                        <a href="mailto:tours@travel-club.tours" class="mb-0"-->
            <!--                           style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase">-->
            <!--                            travelclubrnd@bk.ru</a>-->
            <!--                    </div>-->

            <div class="d-flex">
                <!--                <div class="" @click="setTheme('light')">light</div>-->
                <!--                <div class="" @click="setTheme('dark')">dark</div>-->
                <slot name="socials" v-if="!no_socials">
                    <div class="d-flex desktop me-3">
                        <!--                        <div>-->
                        <!--                            <div class="banner pulse text-uppercase px-3 me-3"-->
                        <!--                                 style="color:white; background: #c30000; border-radius:10px; font-weight: 600;">-->
                        <!--                                мы в соц.сетях-->
                        <!--                            </div>-->
                        <!--                        </div>-->

<!--                                  <a href="#" class="icon icon-vk ml-auto mr-3" target="_blank" style="color: #f08b23; font-size: 25px; text-decoration: none"></a>-->
<!--                        <a href="https://www.instagram.com/travelclub_tours" target="_blank" class="ms-3">-->
<!--                            <base-icon name="Instagram" color="primary" height="25" width="25"/>-->
<!--                        </a>-->
                        <a href="https://instagram.com/put_club" target="_blank" class="ms-3">
                            <base-icon name="Instagram" color="primary" height="20" width="20"/>
                        </a>
                        <a href="https://t.me/put_club" target="_blank" class="ms-3 mr-auto" title="Telegram">
                            <base-icon name="Telegram" color="primary" height="20" width="20"/>
                        </a>
                        <a href="https://vk.com/put_club" target="_blank" class="ms-3 mr-auto" title="VK">
                            <base-icon name="Vk" color="primary" height="20" width="20"/>
                        </a>
                        <a href="https://youtube.com/@put_club" target="_blank" class="ms-3 mr-auto" title="YouTube">
                            <base-icon name="Youtube" color="primary" height="20" width="20"/>
                        </a>
                        <a href="https://www.tiktok.com/@put_club" target="_blank" class="ms-3 mr-auto" title="TikTok">
                            <base-icon name="TikTok" color="primary" height="20" width="20"/>
                        </a>
                        <a href="https://dzen.ru/put_club" target="_blank" class="ms-3 mr-auto" title="Dzen">
                            <base-icon name="Dzen" color="primary" height="20" width="20"/>
                        </a>
<!--                        <a href="https://wa.me/79064167872" target="_blank" class="ms-3 mr-auto">-->
<!--                            <base-icon name="WhatsApp" color="primary" height="25" width="25"/>-->
<!--                        </a>-->
                    </div>
                </slot>
                <slot name="user-controls"></slot>
                <!-- <div class="row m-auto desktop" style="color: #063065">
         &lt;!&ndash;            <b-form-checkbox v-model="theme" name="check-button" switch>&ndash;&gt;
                         <p class="mb-0" style="font-family: Open Sans;font-weight: 900;font-size: 16px;cursor: pointer" v-if="theme" @click="theme= !theme">Дневная тема</p>
                         <p class="mb-0" style="font-family: Open Sans;font-weight: 900;font-size: 16px;cursor: pointer" v-if="!theme" @click="theme= !theme">Ночная тема</p>
         &lt;!&ndash;            </b-form-checkbox>&ndash;&gt;
                 </div>-->
                <!--            <slider-->
                <!--                    right-->
                <!--                    @openMenu="openMenu()"-->
                <!--                    @closeMenu="closeMenu()"-->
                <!--                    width="400"-->
                <!--                    :burger-icon="false"-->
                <!--                    :closeOnNavigation="true"-->
                <!--                >-->
                <!--                    &lt;!&ndash;      <div class="nav-link account-link" style="cursor:pointer; border-radius: 5px; max-width: 300px" v-if="isLoggedIn" @click="toProfile">-->
                <!--                              <span><i class="icon icon-person"></i>Личный кабинет</span>-->
                <!--                          </div>&ndash;&gt;-->
                <!--&lt;!&ndash;                    <a class="nav-link account-link bm-custom-active" style="cursor:pointer; border-radius: 5px; max-width: 300px" href="/simple-profile">&ndash;&gt;-->
                <!--&lt;!&ndash;                        <span><i class="icon icon-person"></i>Личный кабинет</span>&ndash;&gt;-->
                <!--&lt;!&ndash;                    </a>&ndash;&gt;-->
                <!--&lt;!&ndash;                    <a v-if="$route.name=='landing'" class="nav-link" v-for="link in landing_links" href=""&ndash;&gt;-->
                <!--&lt;!&ndash;                       v-scroll-to="link.scroll">&ndash;&gt;-->
                <!--&lt;!&ndash;                        <span><i v-if="link.icon" :class="link.icon"></i> {{link.name}}</span>&ndash;&gt;-->
                <!--&lt;!&ndash;                    </a>&ndash;&gt;-->
                <!--                    <a class="nav-link" v-for="link in module_tour_links" :href="link.url">-->
                <!--                        <span><i v-if="link.icon" :class="link.icon"></i> {{link.name}}</span>-->
                <!--                    </a>-->
                <!--                    <a class="nav-link" href="#" @click="logout" v-if="isLoggedIn">-->
                <!--                        <span> <i class="icon-exit_to_app"></i> Выйти</span>-->
                <!--                    </a>-->
                <!--                    <div class="nav-link">-->
                <!--                    <span class="tablet mobile">-->
                <!--&lt;!&ndash;                        <b-form-checkbox class="slider-theme-switch" v-model="theme" name="check-button" switch>&ndash;&gt;-->
                <!--                            <p class="mb-0" v-if="theme" @click="theme= !theme">Дневная тема</p>-->
                <!--                            <p class="mb-0" v-if="!theme" @click="theme= !theme">Ночная тема</p>-->
                <!--                        &lt;!&ndash;                        </b-form-checkbox>&ndash;&gt;-->
                <!--                    </span>-->
                <!--                    </div>-->
                <!--                </slider>-->
                <slot name="menu-icon" v-if="!no_menu_item">
                    <base-icon name="Menu" width="25" height="25" color="secondary" :class="menu_icon_class"
                               data-bs-toggle="offcanvas" :data-bs-target="'#'+menu_icon_target"
                    />
                </slot>
                <!--            <base-sidebar class="offcanvas offcanvas-end" :links="module_tour_links"></base-sidebar>-->
            </div>
        </slot>
    </div>
</template>

<script>
    // import BaseSidebar from "./Base/BaseSidebar";
    export default {
        // components: {BaseSidebar},
        name: "Menu",
        props: {
            no_socials: {
                type: Boolean,
                default: false
            },
            no_menu_item: {
                type: Boolean,
                default: false
            },
            menu_icon_class: {
                type: String,
                default: ''
            },
            menu_icon_target: {
                type: String,
                default: 'travelClubSidebar'
            }
        },
        data: () => ({
            // preloader:false
            phone: '',
            unformatted_phone: '',
            theme: true,
            landing_links: [
                {name: 'Подобрать путешествие', scroll: '#travel', icon: "far fa-compass"},
                {name: 'Подобрать авиабилеты', scroll: '#avia', icon: "fas fa-plane-departure"},
                // {name: 'Подобрать отель', scroll: '#hotel', icon: "fas fa-hotel"},
                {name: 'Подобрать туры по России', scroll: '#russia', icon: "fas fa-map-marked-alt"},
                // {name: 'TravelClub Family', scroll: '#family', icon: "fas fa-users"},
                {name: 'Контакты', scroll: '#contacts', icon: "fas fa-address-book"},
            ],
            client_links: [
                {name: 'Главная панель', url: '/client'},
                {name: 'Мой профиль', url: '/client/profile'},
                {name: 'Мои отзывы', url: '/client/review'},
            ],
            manager_links: [
                {name: 'Главная', url: '/'},
                {name: 'Клиенты', url: '/manager'},
                {name: 'Заказы', url: '/manager/orders'},
                {name: 'Задачи', url: '/manager/todos'},
            ],
            module_tour_links: [
                // {name: 'Главная', url: '/', icon: "icon-home"},
                // {name: 'Подобрать путешествие', url: '/tours', icon: "far fa-compass"},
                // {name: 'Подобрать горячие туры', url: '/hot-tours', icon: "fas fa-plane-departure"},
                // {name: 'Подобрать туры по России', url: '/russia-tours', icon: "fas fa-map-marked-alt"},
                {
                    path: '/',
                    icon: 'Home',
                    code: "Landing",
                    label: "Главная",
                    color: 'primary',
                    type: 'ordinary'
                },
                {
                    path: '/tours',
                    icon: 'Location',
                    code: "TourSearch",
                    label: "Подобрать путешествие",
                    color: 'primary',
                    type: 'ordinary'
                },
                {
                    path: '/hot-tours',
                    icon: 'Location',
                    code: "AviaSearch",
                    label: "Подобрать горящие туры",
                    color: 'primary',
                    type: 'ordinary'
                },
                {
                    path: '/russia-tours',
                    icon: 'Location',
                    code: "RussiaTourSearch",
                    label: "Подобрать туры по России",
                    color: 'primary',
                    type: 'ordinary'
                },
            ]
        }),
        created() {
            this.locationByIp()
        },
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn
            },
            isAdmin: function () {
                return this.$store.getters.isAdmin
            },
            isManager: function () {
                return this.$store.getters.isManager
            },
            menu() {
                return this.$store.getters.menu
            },
            showForms: function () {
                return this.$store.getters.showForms
            },
        },
        methods:
            {
                openForms() {
                    this.$store.commit('setShowForms', true)
                },
                openMenu() {
                    this.$store.commit('setMenu', true)
                    // this.$store.commit('setShowForms', false)
                },
                closeMenu() {
                    this.$store.commit('setMenu', false)
                    // this.$store.commit('setShowForms', false)
                },
                toProfile() {
                    // console.log('here')
                    if (this.isAdmin == true) {
                        this.$router.push('/admin')
                    }
                    if (this.isManager == true) {
                        this.$router.push('/manager')
                    }
                    if (!this.isAdmin && !this.isManager) {
                        this.$router.push('/client')
                    }
                    this.closeMenu()
                },
                logout: function () {
                    this.$store.dispatch('logout')
                        .then(() => {
                            this.closeMenu()
                            this.$router.push('/login')
                        })
                },
                async locationByIp() {
                    await axios.get('locationByIp').then(resp => {
                        console.log(resp.data.result)
                        this.$store.dispatch('setLocationByIp', resp.data.result);
                        if (resp.data.result.region == 'Donetsk') {
                            this.phone = '+7 (949) 235-33-22';
                            this.unformatted_phone = '+79492353322';
                        } else {
                            this.phone = '8 800 500 5 500';
                            this.unformatted_phone = '+88005005500';
                        }
                    });
                },
                setTheme(theme) {
                    const html = document.querySelector('html');
                    html.setAttribute('data-theme', theme);
                }
            },

        mounted() {
            if (localStorage.getItem("theme") === "dark")
                this.theme = false;
        }
    }
</script>
<style>
    .bm-custom-active {
        max-width: 300px;
        background: linear-gradient(#1d8cf8, #5eacff);

        text-align: center;
        color: white;

        box-shadow: 1px 1px 3px 0px #777777;
    }


    .slider-theme-switch .custom-control-input:checked ~ .custom-control-label::before {
        color: #f08b23 !important;
        border-color: #f1e5d9 !important;
        background-color: #fff !important;
        outline: none;
    }

    .slider-theme-switch .custom-control-input:checked ~ .custom-control-label::after {
        background-color: #f08b23 !important;
        transform: translateX(0.75rem);
    }

    .custom-control-input:checked ~ .custom-control-label::before {
        color: #fff !important;
        border-color: #f08b23 !important;
        background-color: #f08b23 !important;
        outline: none;
    }

    .custom-control-input:not(:disabled):active ~ .custom-control-label::before {
        color: #fff;
        background-color: rgb(255, 191, 152) !important;
        border-color: rgb(255, 191, 152) !important;
    }

    .custom-control-input:focus ~ .custom-control-label::before {
        box-shadow: 0 0 0 0.2rem rgba(248, 161, 5, 0.25) !important;
    }
</style>
<style type="text/css" scoped>
    .tg-icon {
        color: #f08b23;
        font-size: 25px;
        text-decoration: none;
    }

    .inst-icon {
        color: #f08b23;
        font-size: 25px;
        text-decoration: none;
    }

    .custom-switch {
        top: 10px;
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

    @media screen and (max-width: 992px) {
        /*.desktop {*/
        /*    display: none;*/
        /*}*/
        /*.mobile {*/
        /*    display: flex;*/
        /*}*/
        .menu {
            padding-left: 10px !important;
            padding-right: 10px !important;
        }
    }

    .overlay {
        height: 100vh;
        width: 0;
        position: fixed;
        z-index: 4;
        top: 0;
        right: 0;
        /*background: linear-gradient(to right, #fff342,#ff894f);*/
        /*background-color: rgb(0,0,0);
        background-color: rgba(0,0,0);*/
        /*background-color: rgb(255,255,255);*/
        /*    background-color: rgba(255, 255, 255, 0.91);*/
        background-color: rgba(0, 0, 0, 0.82);
        overflow-x: hidden;
        transition: 0.5s;
    }

    /*.night .overlay a {*/
    /*    color: #0525ae !important;*/
    /*}*/

    .overlay a {
        /*padding: 8px;*/
        text-decoration: none;
        font-size: 36px;
        color: orange;
        /*color: white;*/
        /*display: block;*/
        transition: 0.3s;
        margin: auto;
        text-transform: uppercase;
    }

    .links {
        text-align: center;
    }

    .links a button span {
        /*color: linear-gradient(to right, rgba(255,130,130,1) 0%,rgba(225,120,237,1) 100%);*/
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 25px;
        letter-spacing: 0.045em;
        /*color: #fff;*/
    }

    @media (max-width: 448px) {

        .links a button span {
            font-size: 20px;
        }
    }

    /*.overlay a:hover span, .overlay a:focus span{
      background: rgb(255,130,130);
      background: -moz-linear-gradient(left,  rgba(255,130,130,1) 0%, rgba(225,120,237,1) 100%);
      background: -webkit-linear-gradient(left,  rgba(255,130,130,1) 0%,rgba(225,120,237,1) 100%);
      background: linear-gradient(to right,  rgba(255,130,130,1) 0%,rgba(225,120,237,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8282', endColorstr='#e178ed',GradientType=1 );

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    */
    /*.overlay .closebtn {
        position: absolute;
        //top: 20px;
        font-size: 40px;
        right: 0px;
    }*/

    /*.overlay .closebtn:hover {*/
    /*    color: white;*/
    /*}*/
    /*@media screen and (max-height: 450px) {*/
    /*  .overlay a {font-size: 20px}*/

    /*  !*.overlay .closebtn {*/
    /*    font-size: 40px;*/
    /*    top: -3px;*/
    /*    right: 20px;*/
    /*  }*!*/
    /*}*/
</style>
