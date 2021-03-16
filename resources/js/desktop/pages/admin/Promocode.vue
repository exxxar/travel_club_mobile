<template>
    <div class="container justify-content-center d-flex align-items-center promocodes">
        <div class="row justify-content-center d-flex align-items-center">
            <div class="col-sm-6 col-12">
                <form v-on:submit.prevent="request" class="promocode-form row">
                    <p v-if="message.length>0" class="alert alert-danger w-100 mb-2">{{message}}</p>

                    <input type="text" placeholder="Введите ваш промокод" class="form-control col-12 mb-2"
                           v-model="code" required>
                    <input type="password" placeholder="Введите ваш индивидуальный пароль"
                           class="form-control col-12 mb-2" v-model="password" required>
                    <button class="btn btn-danger col-12">Получить сводку</button>
                </form>


            </div>
        </div>
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
                    this.message="Статистика успешно сгенерирована!";
                }).catch(error=>{
                    this.message="Ошибка генерации статистики";
                    this.sendMessage(this.message,"error")
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
<style lang="scss">
    .promocodes {
        height: 100vh;
    }
</style>
