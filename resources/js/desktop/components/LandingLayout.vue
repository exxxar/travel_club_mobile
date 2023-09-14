<template>
    <div>
        <div class="modal fade pr-0" id="customPhoneModal" tabindex="-1" role="dialog" aria-labelledby="customPhoneModalLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-main" role="document">
                <div class="modal-content" style="border-radius:20px">
                    <div class="modal-header" style="border:none">

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center modal-travel mt-0 pt-0">
                        <!--                        <img src="/images/PhonePenguin.png" style="height: 230px">-->
                        <h5 class="modal-title mt-3" style="font-family: Open Sans;font-weight: 900;text-align: center;margin: auto;color: #f08b23;text-transform: uppercase;">Заказать звонок</h5>
                        <phone-order></phone-order>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade pr-0" id="contactModalBox" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-main" role="document">
                <div class="modal-content" style="border-radius:20px">
                    <div class="modal-header" style="border:none">

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center modal-travel mt-0 pt-0">
                        <h5 class="modal-title" style="font-family: Open Sans;font-weight: 900;text-align: center;margin: auto;color: #f08b23;text-transform: uppercase;">Напишите нам сообщение</h5>
                        <contact-form></contact-form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade pr-0" id="customVoiceModal" tabindex="-1" role="dialog" aria-labelledby="customVoiceModalLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-main" role="document">
                <div class="modal-content" style="border-radius:20px">
                    <div class="modal-header" style="border:none">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center modal-travel mt-0 pt-0">
                        <voice-callback-form></voice-callback-form>
                    </div>
                </div>
            </div>
        </div>
        <quick-menu
            :menu-count="3"
            :icon-class="icons"
            :titles="titles"
            :menuUrlList="menuUrlList"
            position="'bottom-left'"
            backgroundColor="#f08b23"
        >
        </quick-menu>
        <slot></slot>
        <Footer/>
    </div>
</template>

<script>
    export default {
        name: "LandingLayout",
        data: () => ({
            icons: ["fa fa-comment", "fas fa-microphone", "fas fa-phone"],
            menuUrlList: ["#contactModalBox", "#customVoiceModal", "#customPhoneModal"],
            titles: ["Написать сообщение", "Записать голосовое", "Заказать звонок"],
        }),
    }
</script>

<style scoped>

</style>
