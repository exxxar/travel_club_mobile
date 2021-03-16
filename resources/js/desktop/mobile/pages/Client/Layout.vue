<template>
    <div class="white-content">
        <div class="main-panel w-100" style="min-height: 100%;">
            <div class="content" style="padding: 0px">
                <transition name="fade" mode="out-in">
                    <router-view v-if="!isMobile"/>
                    <router-view v-else name="mobile"/>
                </transition>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss" src="@/sass/desktop/black-dashboard.scss">
</style>
<script>
    export default {
        methods: {
        },
        computed:
            {
                isMobile : function(){ return this.$store.getters.isMobile},
            },
    };
</script>
