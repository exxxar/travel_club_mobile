<template>
    <div>
        <h1>Test</h1>

        <iframe
            :src="'https://crm.travel-club.tours/clients?s='+styles"
            class="profile-style"></iframe>
    </div>
</template>
<script>
    import VueCountdown from '@chenfengyuan/vue-countdown';
    import carousel from 'vue-owl-carousel'

    export default {
        components: {carousel, VueCountdown},
        computed: {
            styles() {
                return window.btoa(JSON.stringify({
                    first_text_color: "white",
                    second_text_color: "#495057",
                    title_text_color: "#363636",
                    first_primary_color: "#2196F3",
                    second_primary_color: "#2196F3",
                    border_color: "#2196F3",
                    box_shadow_color: "#a6d5fa",
                    background_color:   "white"
                }));
            }
        }
    }
</script>

<style lang="scss">
    .profile-style {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        border: none;
    }

    .custom-app-capsule {
        padding: 0 !important;
        padding-bottom: 100px !important;
    }
</style>
