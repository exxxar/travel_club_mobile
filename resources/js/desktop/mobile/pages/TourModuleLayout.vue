<template>
    <div>
        <tour-module-menu></tour-module-menu>
        <div id="appCapsule">
<!--            <div class="appContent" >-->
                <slot></slot>
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    // import "~/css/mobile/mobile-style.css";
    export default {
        name: "TourModuleLayout"
    }
</script>

<style lang="scss" scoped>
    #appCapsule {
        padding: 52px 0;
        margin-bottom: env(safe-area-inset-bottom);
        margin-top: env(safe-area-inset-top);
    }
</style>
