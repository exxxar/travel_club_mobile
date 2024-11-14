<template>
    <base-modal id="contactModalBox" title="Напишите нам сообщение" :close_button_disabled="loading"
                title_class="tc-modal__title-promo">
        <template #body>
            <base-input v-model="name" name="name" label="Ваше Ф.И.О." rules="required">
                <template #icon>
                    <base-icon name="User" color="secondary"/>
                </template>
            </base-input>
            <base-input v-model="phone" name="phone" label="Номер телефона" rules="required|phone"
                        :mask="['+# ### ### ####','+## ### ### ####', '+## ### #### ####']"
            >
                <template #icon>
                    <base-icon name="Phone" color="secondary"/>
                </template>
            </base-input>
            <base-select v-model="type" name="question-type" label="Тип вопроса" :options="question_types"
                         rules="required">
                <!--            <template #group-item>-->
                <!--                <base-icon name="Help" color="secondary"/>-->
                <!--            </template>-->
            </base-select>
            <base-input v-model="message" name="message" label="Текст сообщения" rules="required" tag="textarea"
                        no_group_item>
                <!--            <template #icon>-->
                <!--                <base-icon name="Comment" color="secondary"/>-->
                <!--            </template>-->
            </base-input>
        </template>
        <template #footer="{invalid}">
            <base-button class="w-100" @click="sendRequest" :loading="loading" :disabled="invalid||loading">Отправить</base-button>
        </template>
    </base-modal>
</template>
<script>
    export default {
        data() {
            return {
                name: '',
                phone: '',
                type: null,
                message: '',
                question_types: [
                    "Общий вопрос",
                    "Подобрать тур",
                    "Подобрать авиабилеты",
                    "Подобрать отель",
                    "Стать партнёром",
                    "Реклама и продвижение",
                    "Тех. поддержка"
                ],
                loading: false
            };
        },
        methods: {
            async sendRequest() {
                this.loading = true;
                await axios
                    .post('/sendCallback', {
                        name: this.name,
                        phone: this.phone,
                        message: this.message,
                        question_type: this.type
                    })
                    .then(response => {
                        this.$store.commit('closeModal', '#contactModalBox');
                        this.$store.dispatch('sendNotification', {type:'success', message: 'Сообщение успешно отправлено'});
                        this.loading = false;
                    }).catch(error => {
                        this.loading = false;
                        this.$store.dispatch('sendNotification', {type: 'error', message: 'Произошла ошибка!'});
                    });
            },
        }
    }
</script>
<style>

</style>
