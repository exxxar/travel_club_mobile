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
<!--                    <a class="" href="" v-if="isLoggedIn" v-on:click="toProfile()">-->
<!--                        <i class="icon icon-person"></i><span>Личный кабинет</span>-->
<!--                    </a>-->
<!--                    <a class="" href="/login" v-if="!isLoggedIn">-->
<!--                        <i class="icon icon-person"></i><span>Личный кабинет</span>-->
<!--                    </a>-->
                    <a class="nav-link" v-for="link in manager_links" :href="link.url">
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
             manager_links: [
                 {name: 'Главная панель', url: '/manager', icon:"icon icon-home"},
                 {name: 'Клиенты', url: '/manager/clients', icon:"icon icon-people"},
                 {name: 'Заказы', url:'/manager/orders', icon:"icon icon-list-alt"},
                 {name:'Сообщения', url:"/manager/messages", icon: "icon icon-message"},
                 {name: 'Задачи', url: '/manager/todos', icon:"icon icon-check-square-o"},
                 {name:'Чаты', url: "/manager/chats" , icon:"icon icon-chat"},

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
         },
         mounted() {
             if (localStorage.getItem("theme") === "dark")
                 this.theme = false;
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
         }
     }
 </script>

 <style scoped>

 </style>
