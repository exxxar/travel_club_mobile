<template>
    <div>
        <modal-about/>
        <modal-contact/>
        <modal-rules/>
    </div>
</template>
<script>
    import ModalAbout from './Modals/ModalAbout'
    import ModalContact from './Modals/ModalContact'
    import ModalRules from './Modals/ModalRules'


    export default {
        components: {
            ModalAbout, ModalContact, ModalRules
        }
    }
</script>
<style lang="scss">

</style>
