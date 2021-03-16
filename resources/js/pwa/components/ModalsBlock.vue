<template>
    <div>
        <modal-about/>
        <modal-contact/>
        <modal-rules/>
        <modal-add-to-home/>
        <modal-comments/>
    </div>
</template>
<script>
    import ModalAbout from './Modals/ModalAbout'
    import ModalContact from './Modals/ModalContact'
    import ModalRules from './Modals/ModalRules'
    import ModalAddToHome from './Modals/ModalAddToHome'
    import ModalComments from './Modals/ModalComment'


    export default {
        components: {
            ModalAbout, ModalContact, ModalRules, ModalAddToHome, ModalComments
        }
    }
</script>
<style lang="scss">

</style>
