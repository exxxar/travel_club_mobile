<template>
    <div>
        <div class="appHeader menu row align-items-center justify-content-center ml-auto me-auto ps-2 pe-2 pt-2 pb-2" style="width: 100%;">
            <div class="row ml-2 me-auto mt-auto mb-auto">
                <div class="action-button" @click="back">
                    <div class="icon icon-keyboard_arrow_left"></div>
                </div>
            </div>
            <div class="row m-auto">
                <a href="/">
                    <h4 style="z-index: 1; font-family:'Bello Pro'; color:#0d274b;" class="text-center menu-title mb-0">
                        Travel<span style="color: #f08b23; font-family: 'Open Sans';font-weight:900;">Club</span>
                    </h4>
                </a>
            </div>
            <div class="ml-auto me-2 my-auto">
                <slider
                    right
                    @openMenu="openMenu()"
                    @closeMenu="closeMenu()"
                    width="400"
                    :burger-icon="false"
                    :closeOnNavigation="true"
                >
                    <div class="nav-link" style="cursor:pointer;background: green; border-radius: 5px; max-width: 300px" v-if="isLoggedIn" @click="toProfile">
                        <span><i class="icon icon-person"></i>Личный кабинет</span>
                    </div>
                    <a class="nav-link" style="cursor:pointer;background: green; border-radius: 5px; max-width: 300px" href="/login" v-if="!isLoggedIn">
                        <span><i class="icon icon-person"></i>Личный кабинет</span>
                    </a>
                    <a class="nav-link" v-for="link in module_avia_links" :href="link.url">
                        <span><i v-if="link.icon" :class="link.icon"></i> {{link.name}}</span>
                    </a>
                    <a class="nav-link" href="#" @click="logout" v-if="isLoggedIn">
                        <span> <i class="icon-exit_to_app"></i> Выйти</span>
                    </a>
                    <div class="nav-link tablet mobile">
                        <span>
                            <b-form-checkbox class="slider-theme-switch" v-model="theme" name="check-button" switch>
                                <p class="mb-0" v-if="theme">Дневная тема</p>
                                <p class="mb-0" v-if="!theme">Ночная тема</p>
                            </b-form-checkbox>
                        </span>
                    </div>
                </slider>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AviaModuleMenu",
        data: () => ({
            module_avia_links: [
                {name: 'Главная', url: '/', icon:"icon-home"},
                {name: 'Подобрать путешествие', url: '/tour-search', icon:"far fa-compass"},
                {name: 'Подобрать авиабилеты', url: '/avia-search', icon:"fas fa-plane-departure"},
                // {name: 'Подобрать отель', url: '/hotel-module', icon:"fas fa-hotel"},
                {name: 'Подобрать туры по России', url: '/russia-tour-search', icon: "fas fa-map-marked-alt"},
            ],
            theme:true,
        }),
        mounted() {
            if (localStorage.getItem("theme") === "dark")
                this.theme = false;
        },
        computed: {
            isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
            isAdmin : function(){ return this.$store.getters.isAdmin},
            menu () {
                return this.$store.getters.menu
            },
            fromRoute() {
                return this.$store.getters.fromRoute
            }
        },
        methods:
        {
            back() {
                if (!this.fromRoute.name) {
                    this.$router.push('/avia-module');
                } else {
                    this.$router.back();
                }
            },
            openForms() {
                this.$store.commit('setShowForms', true)
            },
            openMenu() {
                this.$store.commit('setMenu', true)
            },
            closeMenu() {
                this.$store.commit('setMenu', false)
            },
            toProfile() {
                this.$router.push('/dashboard');
                this.closeMenu();
            },
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.closeMenu()
                        this.$router.push('/login')
                    })
            },
        }
    }
</script>

<style scoped>
    .appHeader {
        min-height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: env(safe-area-inset-top);
        left: 0;
        right: 0;
        z-index: 3;
        background: #FFF;
        /*color: #141515;*/
        /*box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);*/
    }
    .action-button {
        display: inline-flex;
        width: 50px;
        height: 50px;
        margin-left: -5px;
        margin-right: -5px;
        align-items: center;
        justify-content: center;
        border-radius: 200px;
        background: #f08b23;
        color: white;
        font-size: 40px;
        outline: none !important;
        text-decoration: none !important;
        box-shadow: none !important;
    }
    .action-button:focus {
        outline: none !important;
        text-decoration: none !important;
        box-shadow: none !important;
    }
</style>
