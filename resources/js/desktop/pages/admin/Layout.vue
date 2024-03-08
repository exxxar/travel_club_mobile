<template>
    <div class="white-content wrapper">
        <side-bar :backgroundColor="'travel'">
            <template slot="links">
                <sidebar-link to="/admin/" :name="'Главная панель'" icon="icon icon-home"/>
<!--                <sidebar-link to="/admin/branches" :name="'Филиалы'" icon="icon icon-building"/>-->
                <sidebar-link to="/admin/users" :name="'Пользователи'" icon="icon icon-people"/>
                <sidebar-link to="/admin/orders" :name="'Заказы'" :icon="'icon icon-list-alt'"/>
                <sidebar-link to="/admin/profile" :name="'Мой профиль'" icon="icon icon-person"/>
                <sidebar-link to="/admin/messages" :name="'Сообщения'" :icon="'icon icon-message'"/>
                <sidebar-link to="/admin/todos" :name="'Задачи'" :icon="'icon-check-square-o'"/>
                <sidebar-link to="/admin/chats" :name="'Чаты'" :icon="'icon icon-chat'"/>
<!--                <sidebar-link to="/admin/" :name="'Calendar'" icon="icon-calendar"/>-->
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
<style scoped lang="scss" src="@/sass/desktop/black-dashboard.scss">

</style>
<script>
    // import "@/sass/black-dashboard.scss"
    export default {
        methods: {

        }
    };
</script>
