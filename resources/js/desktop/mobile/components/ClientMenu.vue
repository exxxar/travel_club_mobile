<template>
    <div>
        <div class="appHeader menu row align-items-center justify-content-center ml-auto mr-auto px-2 py-1" style="width: 100%;">
            <div class="row ml-2 mr-auto mt-auto mb-auto">
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
            <div class="ml-auto mr-2 mt-auto mb-auto">
                <slider
                    right
                    @openMenu="openMenu()"
                    @closeMenu="closeMenu()"
                    width="400"
                    :burger-icon="false"
                    :closeOnNavigation="true"
                >
<!--                    <a class="" href="" v-if="isLoggedIn" v-on:click="toProfile()">-->
<!--                        <i class="icon icon-person"></i><span>Личный кабинет</span>-->
<!--                    </a>-->
<!--                    <a class="" href="/login" v-if="!isLoggedIn">-->
<!--                        <i class="icon icon-person"></i><span>Личный кабинет</span>-->
<!--                    </a>-->
                    <a class="nav-link" v-for="link in client_links" :href="link.url">
                        <span><i v-if="link.icon" :class="link.icon"></i> {{link.name}}</span>
                    </a>
                    <a class="nav-link" href="/login" @click="logout" v-if="isLoggedIn">
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
         name: "ClientMenu",
         data: () => ({
             client_links: [
                 {name: 'Главная панель', url: '/client', icon:"icon-home"},
                 {name: 'Мой профиль', url: '/client/profile',icon:"icon-person"},
                 {name:'Архив туров', url: "/client/archive" , icon:"icon-archive"},
                 {name:'Чаты', url: "/client/chats" , icon:"icon-chat"},
                 // {name:'История заказов', url: "/client/orders" ,icon:"icon-list-alt"},
                 // {name: 'Мои отзывы', url: '/client/review',icon:},
             ],
             theme:true,
         }),
         computed: {
             isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
             isAdmin : function(){ return this.$store.getters.isAdmin},
             isManager : function(){ return this.$store.getters.isManager},
             menu () {
                 return this.$store.getters.menu
             },
             fromRoute() {
                 return this.$store.getters.fromRoute
             }
         },
         mounted() {
             if (localStorage.getItem("theme") === "dark")
                 this.theme = false;
         },
         watch: {
             theme: function () {
                 this.changeTheme()
             }
         },
         methods:
         {
             back() {
                 if (!this.fromRoute.name) {
                     this.$router.push('/client');
                 } else {
                     this.$router.back();
                 }
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
                 if (this.isAdmin == true) {
                     this.$router.push('/admin')
                 }
                 else if(this.isManager == true){
                     this.$router.push('/manager')
                 }
                 else {
                     this.$router.push('/client')
                 }
                 this.closeMenu()
             },
             logout: function () {
                 this.$store.dispatch('logout')
                     .then(() => {
                         this.$router.push('/login')
                         this.closeMenu()
                     })
             },
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
         }
     }
 </script>

 <style scoped>
     .appHeader {
         max-height: 56px;
         display: flex;
         justify-content: center;
         align-items: center;
         position: fixed;
         top: env(safe-area-inset-top);
         left: 0;
         right: 0;
         z-index: 3;
         background: #FFF;
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
