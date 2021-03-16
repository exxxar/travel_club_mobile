<template>
    <div>
<!--        <transition name="fade">-->
<!--            <preloader v-if="preloader"></preloader>-->
<!--        </transition>-->
<!--        <transition name="fade" mode="out-in">-->
            Mobile
            <router-view></router-view>
<!--        </transition>-->
    </div>
</template>
<script>
    export default {
        name: 'index',
        data() {
            return {

            }
        },
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn
            },
            isAdmin: function () {
                return this.$store.getters.isAdmin
            },
            preloader() {
                return this.$store.getters.preloader;
            },
        },
    }
</script>
