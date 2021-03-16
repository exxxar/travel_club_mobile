<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view v-if="!isMobile"/>
            <router-view v-else name="mobile"/>
        </transition>
    </div>
</template>

<script>
  export default {
    data: () => ({

    }),
    computed:
    {
        isMobile : function() {
            return this.$store.getters.isMobile
        },
    },
    methods:
    {
    }
  }
</script>
<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
    .appBottomMenu {
        min-height: 56px;
        position: fixed;
        z-index: 9999;
        bottom: 0;
        left: 0;
        right: 0;
        background: #FFF;
        border-top: 1px solid #E5E9F2;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: env(safe-area-inset-bottom);
    }
</style>
