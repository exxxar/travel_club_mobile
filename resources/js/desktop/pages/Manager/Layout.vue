<template>
    <div class="white-content wrapper">
        <side-bar :backgroundColor="'travel'">
            <template slot="links">
                <sidebar-link to="/manager/" :name="'Главная панель'" icon="icon icon-home"/>
                <sidebar-link to="/manager/clients" :name="'Клиенты'" :icon="'icon icon-people'"/>
                <sidebar-link to="/manager/orders" :name="'Заказы'" :icon="'icon icon-list-alt'"/>
                <!--                <sidebar-link to="/manager/profile" :name="'Мой профиль'" icon="icon icon-person"/>-->
                <sidebar-link to="/manager/messages" :name="'Сообщения'" :icon="'icon icon-message'"/>
                <sidebar-link to="/manager/todos" :name="'Задачи'" :icon="'icon-check-square-o'"/>
                <sidebar-link to="/manager/chats" :name="'Чаты'" :icon="'icon icon-chat'"/>
<!--                <sidebar-link to="/manager/" :name="'Calendar'" icon="icon-calendar"/>-->
            </template>
        </side-bar>
        <div class="main-panel">
<!--            <top-navbar></top-navbar>-->

            <div class="content">
                <transition name="fade" mode="out-in">
                    <!-- your content here -->
                    <router-view></router-view>
                </transition>
            </div>

        </div>
    </div>
</template>
<!--<style scoped lang="scss" >

</style>-->
<script>
     //import "@/sass/desktop/black-dashboard.scss"
    export default {
        methods: {

        }
    };
</script>
