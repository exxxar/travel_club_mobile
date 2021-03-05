<template>
    <div>
        <modal-about/>
        <modal-contact/>
        <modal-rules/>
        <modal-add-to-home/>
    </div>
</template>
<script>
    import ModalAbout from './Modals/ModalAbout'
    import ModalContact from './Modals/ModalContact'
    import ModalRules from './Modals/ModalRules'
    import ModalAddToHome from './Modals/ModalAddToHome'


    export default {
        components: {
            ModalAbout, ModalContact, ModalRules, ModalAddToHome
        }
    }
</script>
<style lang="scss">

</style>
