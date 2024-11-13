<template>
    <base-modal id="modalAccountDetails" title="Реквизиты" title_class="tc-modal__title-promo">
        <template #body>
            <div class="tc-wrapper-column tc-gap-small">
                <div class="tc-card__title">ИП КЛИМЕНКО М. М.</div>

                <div class="tc-feature" v-for="detail in details">
                    <div class="tc-feature__title">{{detail.label}}</div>
                    <div class="tc-feature__text">{{detail.value}}</div>
                </div>
            </div>
        </template>
        <template #footer>
            <base-button class="w-100" @click="onSubmit">Закрыть</base-button>
        </template>
    </base-modal>
</template>

<script>
    export default {
        name: "ModalAccountDetails",
        data() {
            return {
                details: [
                    {label:'ИНН', value:'616814736851'},
                    {label:'Расчетный счет', value:'40802810426070006689'},
                    {label:'Банк', value:'ФИЛИАЛ "РОСТОВСКИЙ" АО "АЛЬФА-БАНК"'},
                    {label:'БИК', value:'046015207'},
                    {label:'Кор. счёт', value:'30101810500000000207'},
                    {label:'Юридический адрес компании', value:'Донецкая Народная Республика, р-н Донецк, г. Донецк, улица Песочная, д. 47'},
                ]
            }
        },
        methods: {
            async onSubmit() {
                this.$store.commit('closeModal', '#modalAccountDetails');
            },
        }
    }
</script>

<style scoped>

</style>
