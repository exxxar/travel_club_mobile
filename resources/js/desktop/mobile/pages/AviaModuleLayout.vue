<template>
    <div>
        <avia-module-menu></avia-module-menu>
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
        name: "AviaModuleLayout"
    }
</script>

<style lang="scss" scoped>
    #appCapsule {
        padding: 60px 0;
        margin-bottom: env(safe-area-inset-bottom);
        margin-top: env(safe-area-inset-top);
    }
</style>
