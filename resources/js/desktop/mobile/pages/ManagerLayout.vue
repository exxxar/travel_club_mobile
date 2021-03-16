<template>
    <div>
        <manager-menu></manager-menu>
        <div id="appCapsule">
            <div class="appContent" >
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManagerLayout"
    }
</script>

<style scoped>

</style>
