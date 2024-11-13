<template>
    <desktop-layout>
        <template #modals>
            <modal-account-details></modal-account-details>
            <phone-order></phone-order>
            <contact-form></contact-form>
<!--            <voice-callback-form></voice-callback-form>-->
<!--            <quick-menu-->
<!--                :menu-count="3"-->
<!--                :icon-class="icons"-->
<!--                :titles="titles"-->
<!--                :menuUrlList="menuUrlList"-->
<!--                position="'bottom-left'"-->
<!--                backgroundColor="#f08b23"-->
<!--            >-->
<!--            </quick-menu>-->
        </template>
        <div class="w-100">
            <slot></slot>
            <Footer/>
        </div>
    </desktop-layout>
</template>

<script>
    import DesktopLayout from "../pages/DesktopLayout";
    import ModalAccountDetails from "./ModalAccountDetails";
    export default {
        name: "LandingLayout",
        components: {ModalAccountDetails, DesktopLayout},
        data: () => ({
            icons: ["Comment", "Microphone", "Phone"],
            menuUrlList: ["#contactModalBox", "#customVoiceModal", "#customPhoneModal"],
            titles: ["Написать сообщение", "Записать голосовое", "Заказать звонок"],
        }),
    }
</script>

<style scoped>

</style>
