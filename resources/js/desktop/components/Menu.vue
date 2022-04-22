<template>
    <div class="header_area sticky menu row align-items-center justify-content-center ml-auto mr-auto pl-5 pr-5 pt-2 pb-2"
        style="width: 100%;"
    >
        <div class="row ml-2 mr-auto mt-auto mb-auto">
            <a href="/">
                <h4 style="z-index: 1; font-family:'Bello Pro'; color:#0d274b;" class="float-left menu-title">
                    Travel<span style="color: #f08b23; font-family: 'Open Sans';font-weight:900;">Club</span>
                </h4>
            </a>
        </div>
        <div class="row m-auto desktop d-flex align-items-center">

            <p class="mr-5 mb-0" style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase">8-800-101-96-66</p>
<!--            <phone-by-city-form class="mr-5 mb-0"></phone-by-city-form>-->
       <!--     <a class="mr-5 mb-0"
               :href="'tel:'+unformatted_phone"
               style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase"
            >
                {{phone}}</a>-->
            <!--          <p class="mr-5 mb-0" style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase">8 800 500 5 500</p>-->
            <!--          <p class="mb-0" style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase">travel-club@gmail.com</p>-->
            <!--          <p class="mb-0" style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase">bp.pink.donetsk@gmail.com</p>-->
            <a href="mailto:tours@travel-club.tours" class="mb-0"
               style="color:#0d274b; font-family: 'Open Sans';font-weight:900; font-size: 16px; text-transform: lowercase">
                travelclubrnd@bk.ru</a>
        </div>
        <div class="row m-auto desktop">
            <!--          <a href="#" class="icon icon-vk ml-auto mr-3" target="_blank" style="color: #f08b23; font-size: 25px; text-decoration: none"></a>-->
            <a href="https://www.instagram.com/travelclub_tours" target="_blank" class="icon icon-instagram inst-icon" ></a>
            <a href="https://t.me/travelclubtours" target="_blank" class="icon icon-telegram ml-3 mr-auto tg-icon" ></a>
            <a href="https://invite.viber.com/?g2=AQBfafsk6TeJiEi4vi0HBbxlHq6j9KfenRbLYssiFJrvfsZPLMirR07MSoBBPQpR" target="_blank" class="icon fab fa-viber ml-3 mr-auto tg-icon" ></a>
        </div>

       <!-- <div class="row m-auto desktop" style="color: #063065">
&lt;!&ndash;            <b-form-checkbox v-model="theme" name="check-button" switch>&ndash;&gt;
                <p class="mb-0" style="font-family: Open Sans;font-weight: 900;font-size: 16px;cursor: pointer" v-if="theme" @click="theme= !theme">Дневная тема</p>
                <p class="mb-0" style="font-family: Open Sans;font-weight: 900;font-size: 16px;cursor: pointer" v-if="!theme" @click="theme= !theme">Ночная тема</p>
&lt;!&ndash;            </b-form-checkbox>&ndash;&gt;
        </div>-->

        <div class="ml-auto mr-2 mt-auto mb-auto">
            <slider
                right
                @openMenu="openMenu()"
                @closeMenu="closeMenu()"
                width="400"
                :burger-icon="false"
                :closeOnNavigation="true"
            >
          <!--      <div class="nav-link account-link" style="cursor:pointer; border-radius: 5px; max-width: 300px" v-if="isLoggedIn" @click="toProfile">
                    <span><i class="icon icon-person"></i>Личный кабинет</span>
                </div>-->
                <a class="nav-link account-link bm-custom-active" style="cursor:pointer; border-radius: 5px; max-width: 300px" href="/simple-profile">
                    <span><i class="icon icon-person"></i>Личный кабинет</span>
                </a>
                <a v-if="$route.name=='landing'" class="nav-link" v-for="link in landing_links" href=""
                   v-scroll-to="link.scroll">
                    <span><i v-if="link.icon" :class="link.icon"></i> {{link.name}}</span>
                </a>
                <a v-if="$route.name!='landing'" class="nav-link" v-for="link in module_tour_links"
                   :href="link.url">
                    <span><i v-if="link.icon" :class="link.icon"></i> {{link.name}}</span>
                </a>
                <a class="nav-link" href="#" @click="logout" v-if="isLoggedIn">
                    <span> <i class="icon-exit_to_app"></i> Выйти</span>
                </a>
                <div class="nav-link">
                    <span class="tablet mobile">
<!--                        <b-form-checkbox class="slider-theme-switch" v-model="theme" name="check-button" switch>-->
                            <p class="mb-0" v-if="theme" @click="theme= !theme">Дневная тема</p>
                            <p class="mb-0" v-if="!theme" @click="theme= !theme">Ночная тема</p>
<!--                        </b-form-checkbox>-->
                    </span>
                </div>
            </slider>
        </div>
    </div>
</template>

<script>
    export default {
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
                {name: 'TravelClub Family', scroll: '#family', icon: "fas fa-users"},
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
                {name: 'Главная', url: '/', icon: "icon-home"},
                {name: 'Подобрать путешествие', url: '/tour-search', icon: "far fa-compass"},
                {name: 'Подобрать авиабилеты', url: '/avia-search', icon: "fas fa-plane-departure"},
                // {name: 'Подобрать отель', url: '/hotel-module', icon: "fas fa-hotel"},
                {name: 'Подобрать туры по России', url: '/russia-tour-search', icon: "fas fa-map-marked-alt"},
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
        watch: {
            theme: function () {
                this.changeTheme()
            }
        },
        methods:
            {
                changeTheme() {
                    let cssId = 'myCss';  // you could encode the css path itself to generate id..
                    if (!document.getElementById(cssId)&&!this.theme) {
                        let head = document.getElementsByTagName('head')[0];
                        let link = document.createElement('link');
                        link.id = cssId;
                        link.rel = 'stylesheet';
                        link.type = 'text/css';
                        link.href = '/css/black-them.css';
                        link.media = 'all';
                        head.appendChild(link);

                        localStorage.setItem("theme", "dark")

                    } else {
                        document.getElementById(cssId).remove();
                        localStorage.setItem("theme", "light")
                    }
                },
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
                            this.phone = '+38 (071) 235-33-22';
                            this.unformatted_phone = '+380712353322';
                        } else {
                            this.phone = '8 800 500 5 500';
                            this.unformatted_phone = '+88005005500';
                        }
                    });
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
        color:  #f08b23 !important;
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
