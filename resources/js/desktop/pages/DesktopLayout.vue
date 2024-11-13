<template>
    <layout :sidebar="sidebar">
        <template #modals>
            <slot name="modals"></slot>
        </template>
<!--        <template #sidebar-body-header>-->
<!--            <base-button class="tc-w-100 tc-d-block mb-2" tag="a" :href="$baseUrl+(isLoggedIn?'/dashboard':'/login')">-->
<!--                Личный Кабинет-->
<!--            </base-button>-->
<!--        </template>-->
        <slot>
            <router-view></router-view>
        </slot>
    </layout>
</template>

<script>
    import Layout from "../components/Layout";
    import BaseSidebar from "../components/Base/BaseSidebar";
    export default {
        name: "DesktopLayout",
        components: {
            BaseSidebar, Layout
        },
        data() {
            return {
                menu: {
                    class:'sticky',
                },
                sidebar: {
                    class: "offcanvas offcanvas-end",
                    links: [
                        // {name: 'Главная', url: '/', icon: "icon-home"},
                        // {name: 'Подобрать путешествие', url: '/tours', icon: "far fa-compass"},
                        // {name: 'Подобрать горящие туры', url: '/hot-tours', icon: "fas fa-plane-departure"},
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
                },
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            },
        },
        methods: {
            toDashboard() {
                if(this.isLoggedIn) {
                    this.$router.push('/dashboard');
                }
                else {
                    this.$router.push('/login');
                }
            }
        }
    }
</script>

<style scoped>

</style>
