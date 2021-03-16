<template>
    <div class="section">

        <form v-on:submit.prevent="request">

            <p v-if="message.length>0" class="alert alert-danger w-100 mb-2">{{message}}</p>

            <div class="form-group boxed">
                <div class="input-wrapper">
                    <label class="label" for="promo-admin">Ваш промокод</label>
                    <input type="text" id="promo-admin" placeholder="Введите ваш промокод"
                           class="form-control col-12"
                           v-model="code" required>
                    <i class="clear-input">
                        <i class="fas fa-hand-holding-usd"></i>
                    </i>
                </div>
            </div>


            <div class="form-group boxed">
                <div class="input-wrapper">
                    <label class="label" for="promo-pass">Ваш пароль</label>
                    <input type="password" id="promo-pass" placeholder="Введите ваш индивидуальный пароль"
                           class="form-control col-12" v-model="password" required>
                    <i class="clear-input">
                        <i class="fas fa-hand-holding-usd"></i>
                    </i>
                </div>
            </div>

            <div class="form-group boxed">
                <div class="input-wrapper">
                    <button class="btn btn-danger col-12">Получить сводку</button>
                </div>
            </div>
        </form>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                code: '',
                password: '',
                message: '',
            }
        },
        methods: {
            request() {
                this.message = "";
                this.sendMessage("Спасибо! Мы обрабатываем Ваш запрос")
                axios.defaults.baseURL = '/';
                axios
                    .post('/api/v1/statistic/promocode', {
                        code: this.code,
                        password: this.password
                    }, {responseType: 'blob'}).then(resp => {
                    this.sendMessage("Мы успешно обработали Ваш запрос! Генериуем pdf-документ.")
                    const FileDownload = require('js-file-download');
                    FileDownload(resp.data, 'report.pdf')
                    this.message = "Статистика успешно сгенерирована!";
                }).catch(error => {
                    this.message = "Ошибка генерации статистики";
                    this.sendMessage(this.message, "error")
                })
            },
            sendMessage(message, type = 'success') {
                this.$notify({
                    group: 'info',
                    type: type,
                    title: 'Travel Club',
                    text: message
                });
            }
        }
    }
</script>

