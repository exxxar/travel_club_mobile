<template>
    <div>
        <div class="header_area sticky menu row align-items-center justify-content-center ml-auto mr-auto ps-2 pe-2 pt-2 pb-2" style="width: 100%;">
            <div class="row ml-2 mr-auto mt-auto mb-auto">
                <a href="/">
                    <h4 style="z-index: 1; font-family:'Bello Pro'; color:#0d274b;" class="float-left menu-title">
                        Travel<span style="color: #f08b23; font-family: 'Open Sans';font-weight:900;">Club</span>
                    </h4>
                </a>
            </div>
            <div class="ml-auto mr-2 mt-auto mb-auto">
                <slider
                    right
                    @openMenu="openMenu()"
                    @closeMenu="closeMenu()"
                    width="400"
                    :burger-icon="false"
                    :closeOnNavigation="true"
                >
                    <div class="nav-link account-link" style="cursor:pointer;background: green; border-radius: 5px; max-width: 300px" v-if="isLoggedIn" @click="toProfile">
                        <span><i class="icon icon-person"></i>Личный кабинет</span>
                    </div>
                    <a class="nav-link account-link" style="cursor:pointer;background: green; border-radius: 5px; max-width: 300px" href="/login" v-if="!isLoggedIn">
                        <span><i class="icon icon-person"></i>Личный кабинет</span>
                    </a>
                    <a v-if="$route.name=='landing'" class="nav-link" v-for="link in landing_links" href="" v-scroll-to="link.scroll">
                        <span><i v-if="link.icon" :class="link.icon"></i> {{link.name}}</span>
                    </a>
                    <a v-if="$route.name!='landing'" class="nav-link" v-for="link in module_tour_links" :href="link.url">
                        <span><i v-if="link.icon" :class="link.icon"></i> {{link.name}}</span>
                    </a>
                    <a class="" href="/login" @click="logout" v-if="isLoggedIn">
                        <span> <i class="icon-exit_to_app"></i> Выйти</span>
                    </a>
                    <div class="nav-link tablet mobile">
                        <span>
<!--                            <b-form-checkbox class="slider-theme-switch" v-model="theme" name="check-button" switch>-->
                           <p class="mb-0" v-if="theme" @click="theme = !theme">Дневная тема</p>
                            <p class="mb-0" v-if="!theme" @click="theme = !theme">Ночная тема</p>
<!--                            </b-form-checkbox>-->
                        </span>
                    </div>
                </slider>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MobileMenu",
        data: () => ({
            landing_links: [
                {name: 'Подобрать путешествие', scroll: '#travel',  icon:"far fa-compass"},
                {name: 'Подобрать авиабилеты', scroll: '#avia', icon:"fas fa-plane-departure"},
                // {name: 'Подобрать отель', scroll: '#hotel', icon:"fas fa-hotel"},
                {name: 'Подобрать туры по России', scroll: '#russia', icon: "fas fa-map-marked-alt"},
                {name: 'ВПУТЬ Family', scroll: '#family', icon:"fas fa-users"},
                {name: 'Контакты', scroll: '#contacts', icon:"fas fa-address-book"},
            ],
            module_tour_links: [
                {name: 'Главная', url: '/', icon:"icon-home"},
                {name: 'Подобрать путешествие', url: '/tour-search', icon:"far fa-compass"},
                {name: 'Подобрать авиабилеты', url: '/avia-module', icon:"fas fa-plane-departure"},
                // {name: 'Подобрать отель', url: '/hotel-module', icon:"fas fa-hotel"},
                {name: 'Подобрать туры по России', url: '/russia-tour-search', icon: "fas fa-map-marked-alt"},
            ],
            theme: true,
        }),
        mounted() {
            if (localStorage.getItem("theme") === "dark")
                this.theme = false;
        },
        computed: {
            isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
            isAdmin : function(){ return this.$store.getters.isAdmin},
            isManager : function(){ return this.$store.getters.isManager},
            menu () {
                return this.$store.getters.menu
            },
        },
        methods:
            {
                openMenu() {
                    this.$store.commit('setMenu', true)
                    // this.$store.commit('setShowForms', false)
                },
                closeMenu() {
                    this.$store.commit('setMenu', false)
                    // this.$store.commit('setShowForms', false)
                },
                toProfile() {
                    console.log('here')
                    this.$router.push('/dashboard')

                    this.closeMenu()
                },
                logout: function () {
                    this.$store.dispatch('logout')
                        .then(() => {
                            this.$router.push('/login')
                            this.closeMenu()
                        })
                }
            }
    }
</script>

<style>
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
</style>
