<template>
    <div>
        <mobile-menu></mobile-menu>
        <div id="appCapsule">
            <div class="appContent" >
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MobileLayout"
    }
</script>

<style lang="scss">
    #appCapsule {
        /*padding: 52px 0;*/
        padding-top: 52px;
        margin-bottom: env(safe-area-inset-bottom);
        margin-top: env(safe-area-inset-top);
        min-height: calc(100vh - 3.5rem);
        height: 100%;
    }
</style>
