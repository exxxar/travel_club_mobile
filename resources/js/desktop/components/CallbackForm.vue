<template>
    <form class="form" @submit="sendRequest">
        <div class="card-body m-auto row" style="width: 100%">
            <div class="col-md-12 mb-2">
                <div class="form-group bmd-form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="material-icons">person</i>
                            </span>
                        </div>
                        <input type="text" name="name" class="form-control" v-model="name" placeholder="Ваше Ф.И.О."
                               required>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-2">
                <div class="form-group bmd-form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="material-icons">phone</i>
                            </span>
                        </div>
                        <input type="text" name="phone" class="form-control" v-model="phone"
                               pattern="[\+]\d{2} [\(]\d{3}[\)] \d{3}[\-]\d{2}[\-]\d{2}"
                               v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                               placeholder="Номер телефона" required>
                    </div>
                </div>
            </div>

            <div class="col-md-12 mb-2">
                <div class="form-group bmd-form-group">
                    <div class="input-group select">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="material-icons">help_outline</i>
                            </span>
                        </div>

                            <select name="question-type" v-model="type" class="form-control" :options="question_types" required>
                                <option v-for="(option,index) in question_types" :value="index">
                                    {{option}}
                                </option>
                            </select>


                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group bmd-form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="material-icons">message</i>
                            </span>
                        </div>
                        <textarea name="message" v-model="message" class="form-control"
                                  placeholder="Текст сообщения" required>
                        </textarea>
                    </div>
                </div>
            </div>
            <div class=" col-md-12 contact-btn">
                <button type="submit" class="btn btn-primary" style="width: 100%">Отправить</button>
            </div>
        </div>
    </form>
</template>
<script>
    import {mask} from 'vue-the-mask'

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
                ]
            };
        },
        methods: {

            sendRequest: function (e) {
                e.preventDefault();
                // axios
                //     .post('../api/v1/wish', {
                //         from: this.name,
                //         phone: this.phone,
                //         message: "*" + this.question_types[this.type] + "*:\n" + this.message + "\n"
                //     })
                //     .then(response => {
                //         this.sendMessage("Сообщение успешно отправлено");
                //         $('#contactModalBox').modal('hide')
                //         this.name = "";
                //         this.phone = "";
                //         this.message = "";
                //     })

                axios
                    .post('/sendCallback', {
                        name: this.name,
                        phone: this.phone,
                        message: this.message,
                        question_type: this.question_types[this.type]
                    })
                    .then(response => {

                        // this.name = "";
                        // this.phone = "";
                        // this.message = "";
                    })
                this.sendMessage("Сообщение успешно отправлено");
                $('#contactModalBox').modal('hide')
                // this.sendMessage("Сообщение успешно отправлено");
                // $('#contactModalBox').modal('hide')

            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Отправка сообщений TravelClub',
                    text: message
                });
            },
        },
        directives: {mask}
    }
</script>
<style>

</style>
