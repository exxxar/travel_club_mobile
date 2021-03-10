<template>
    <div class="card mb-3">
        <form @submit="sendRequest" class="card-body">
            <h5 class="card-title">Форма обратной связи</h5>
            <div class="form-group boxed">
                <div class="input-wrapper">
                    <input type="text" name="name" class="form-control" v-model="name" placeholder="Ваше Ф.И.О."
                           required>
                    <i class="clear-input">
                        <i class="far fa-times-circle"></i>
                    </i>
                </div>
            </div>

            <div class="form-group boxed">
                <div class="input-wrapper">
                    <select name="question-type" v-model="type" class="form-control" required>
                        <option v-for="(option,index) in question_types" :value="index">
                            {{option}}
                        </option>
                    </select>
                    <i class="clear-input">
                        <i class="far fa-times-circle"></i>
                    </i>
                </div>
            </div>


            <div class="form-group boxed">
                <div class="input-wrapper">
                    <input type="text" name="phone" class="form-control" v-model="phone"
                           pattern="[\+]\d{2} [\(]\d{3}[\)] \d{3}[\-]\d{2}[\-]\d{2}"
                           maxlength="19"
                           v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                           placeholder="Номер телефона" required>
                    <i class="clear-input">
                        <i class="far fa-times-circle"></i>
                    </i>
                </div>
            </div>

            <div class="form-group boxed">
                <div class="input-wrapper">
                  <textarea name="message" v-model="message" class="form-control"
                            placeholder="Текст сообщения" required></textarea>
                    <i class="clear-input">
                        <i class="far fa-times-circle"></i>
                    </i>
                </div>
            </div>

            <div class="form-group boxed">
                <div class="input-wrapper">
                    <h4 class="text-center">Выберите месенджеры для ответа</h4>
                    <ul class="messagers">
                        <li>

                            <input type="checkbox" id="telegram-check" name="answer-check">
                            <label for="telegram-check">
                                <i class="fab fa-telegram-plane"></i>
                            </label>
                        </li>
                        <li>

                            <input type="checkbox" id="inta-check" name="answer-check">
                            <label for="inta-check">
                                <i class="fab fa-instagram"></i>
                            </label>

                        </li>
                        <li>

                            <input type="checkbox" id="whatsapp-check" name="answer-check">
                            <label for="whatsapp-check">
                                <i class="fab fa-whatsapp"></i>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="form-group mb-2">
                <voice-callback-form :phone="phone" :cansend="cansend"></voice-callback-form>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-orange mr-1 mb-1 w-100">
                    <i class="icon ion-md-mail"></i>
                    Отправить
                </button>
            </div>
            <div class="form-group mb-2 d-flex justify-content-center">

                <a href="#rules" data-target="#RulesModal" data-toggle="modal" class="btn btn-link mr-1 mb-1"
                   title="Пользовательское соглашение" aria-label="Пользовательское соглашение">
                    <i class="icon ion-ios-filing"></i>
                    Пользовательское соглашение!
                </a>

            </div>


        </form>
    </div>
</template>
<script>
    import {mask} from 'vue-the-mask'


    export default {
        props: {
            qType: {
                type: Number,
                default: 0
            },
            hiddenMessage: {
                type: String,
                default: ''
            },
        },

        data() {
            return {
                name: localStorage.getItem("food_first_name", ''),
                phone: localStorage.getItem("fastoran_phone", ''),
                type: 0,
                city: 0,
                message: '',
                cansend: false,
                cities: [
                    "Донецк",
                    "Ростов-на-Дону"
                ],
                question_types: [
                    "Вопросы по туру",
                    "Вопросы по перелету",
                    "Вопросы по отелю",
                    "Активация прмокода",
                    "Стать партнером",
                    "Реклама и продвижение",
                    "Другие вопросы"
                ]
            };
        },
        mounted() {
            this.type = this.qType < this.question_types.length && this.qType >= 0 ? this.qType : 0;
        },
        methods: {

            sendRequest: function (e) {
                e.preventDefault();
                this.cansend = true;
                axios
                    .post('../api/v1/wish', {
                        from: this.name,
                        phone: this.phone,
                        message: "*" + this.question_types[this.type] + "*:\n" + this.message + "\n" + this.hiddenMessage
                    })
                    .then(response => {
                        this.sendMessage("Сообщение успешно отправлено");
                        $('#contactModalBox').modal('hide')
                        this.name = "";
                        this.phone = "";
                        this.message = "";
                        this.cansend = false;
                    })


            }
            ,
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'success',
                    title: 'Отправка сообщений Fastoran',
                    text: message
                });
            }
            ,
        }
        ,
        directives: {
            mask
        }
    }
</script>
<style lang="scss">
    .messagers {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;

        li {
            list-style: none;
            padding: 10px;

            label {
                width: 70px;
                height: 70px;
                background: #fff;
                border: 3px solid #d3d3d3;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #d3d3d3;
                font-size: 24px;
            }

            input {
                display: none;
            }

            input:checked ~ label {
                border: 3px orange solid;
                color: orange;
            }

        }


    }
</style>
