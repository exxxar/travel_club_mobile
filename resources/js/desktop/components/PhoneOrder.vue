<template>
    <base-modal id="customPhoneModal" title="Заказать звонок" :close_button_disabled="loading" title_class="tc-modal__title-promo">
        <template #body>
            <base-input v-model="name" name="name" label="Ваше имя" rules="required">
                <template #icon>
                    <base-icon name="User" color="secondary"/>
                </template>
            </base-input>
            <base-input v-model="phone" name="phone" label="Ваш номер телефона" rules="required|phone" :masked="false"
                        :mask="['+# ### ### ####','+## ### ### ####', '+## ### #### ####']"
            >
                <template #icon>
                    <base-icon name="Smartphone" color="secondary"/>
                </template>
            </base-input>
        </template>
        <template #footer="{invalid}">
            <base-button class="w-100" @click="onSubmit" :loading="loading" :disabled="invalid||loading">Заказать</base-button>
        </template>
    </base-modal>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                phone: '',
                loading: false
            }
        },
        computed: {},
        methods: {
            async onSubmit() {
                this.loading = true;
                // ym(61797661, 'reachGoal', 'phone');

                 await axios
                    .post('/sendPhoneCallback', {
                        name: this.name,
                        phone: this.phone,
                    }).then(resp => {
                         this.$store.commit('closeModal', '#customPhoneModal');
                         this.$store.dispatch('sendNotification', {type:'success', message: 'Заявка на звонок успешно отправлена!'});
                         this.loading = false;
                     }).catch(error => {
                         this.loading = false;
                         this.$store.dispatch('sendNotification', {type: 'error', message: 'Произошла ошибка!'});
                     });
            },
        }
    }
</script>

<style lang="scss">
</style>
