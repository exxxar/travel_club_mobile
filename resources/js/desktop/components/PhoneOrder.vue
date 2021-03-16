<template>
    <form v-on:submit.prevent="onSubmit">
        <div class="card-body ">
            <div class="row mb-2">
                <div class="col-12">
                    <div class="form-group bmd-form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="material-icons">person</i>
                                </span>
                            </div>
                            <input class="form-control" type="text" v-model="name" placeholder="Ваше имя" required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-12">
                    <div class="form-group bmd-form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="material-icons">phone</i>
                                </span>
                            </div>
                            <input class="form-control" type="text" v-model="phone" placeholder="Ваш номер телефона"
                                   v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']" required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary btn-wd btn-lg" style="width:100%"><span>Заказать</span></button>
                </div>
            </div>
        </div>
<!--        <h4 class="text-center">или</h4>-->
<!--        <voice-callback-form :phone="phone"></voice-callback-form>-->
<!--        <div class="row">-->
<!--            <div class="col-sm-12">-->
<!--                <a href="../terms" target="_blank">Перед началом работы советуем ознакомиться с соглашением на обработку-->
<!--                    пользовательских данных.</a>-->
<!--            </div>-->
<!--        </div>-->

    </form>
</template>

<script>
    import {mask} from 'vue-the-mask'

    export default {
        data() {
            return {
                name: '',
                phone: '',
            }
        },
        computed: {},
        methods: {
            onSubmit() {
                // ym(61797661, 'reachGoal', 'phone');
                // this.sendMessage("Заказ успешно отправлен")

                 axios
                    .post('/sendPhoneCallback', {
                        name: this.name,
                        phone: this.phone,
                    }).then(resp => {})
                this.sendMessage("Заявка на перезвон успешно отправлена!")
                $('#customPhoneModal').modal('hide')
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от TravelClub',
                    text: message
                });
            },
        },
        directives: {mask}
    }
</script>

<style lang="scss">

</style>
