<template>
    <div class="white-content wrapper">
        <side-bar :backgroundColor="'travel'">
            <template slot="links">
                <sidebar-link to="/client/" :name="'Главная'" icon="icon-home"/>
                <sidebar-link to="/client/profile" :name="'Мой профиль'" icon="icon-person"/>
                <sidebar-link to="/client/archive" :name="'Архив туров'" icon="icon-archive"/>
                <sidebar-link to="/client/chats" :name="'Чаты'" icon="icon icon-chat"/>

                <!--                <sidebar-link to="/client/orders" :name="'История заказов'" icon="icon-list-alt"/>-->
                <!--                <sidebar-link to="/client/profile" :name="'Мои отзывы'" icon="icon-review"/>-->
<!--                <sidebar-link to="/icons" :name="'Messages'" icon="tim-icons icon-atom"/>-->
<!--                <sidebar-link to="/icons" :name="'Tasks'" icon="tim-icons icon-atom"/>-->
<!--                <sidebar-link to="/icons" :name="'Calendar'" icon="tim-icons icon-atom"/>-->
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
    // import "@/sass/black-dashboard.scss";
    // import TopNavbar from "./TopNavbar.vue";
    // import MobileMenu from "./MobileMenu";
    export default {
        // components: {
        //     TopNavbar,
        //     MobileMenu
        // },
        methods: {
            toggleSidebar() {
                // if (this.$sidebar.showSidebar) {
                //     this.$sidebar.displaySidebar(false);
                // }
            }
        }
    };
</script>
