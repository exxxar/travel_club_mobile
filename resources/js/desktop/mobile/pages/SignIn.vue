<template>
    <div class="start-form mt-1 pt-0" style="min-height: calc(100vh - 3.5rem); height: 100%">
        <ValidationObserver v-slot="{ invalid }" style="height: 100%; width: 100%">
            <div class="section text-center pt-1">
                <img class="form-image m-auto" src="/images/family-illustration.png" style="width: 90%; height: 90%"/>
            </div>
            <div class="section">
                <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
                    <div class="col-12 col-md-8 col-sm-12">
                        <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                            <div class="col-md-7 p-0">
                                <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                    <h1 class="title-1"><span>Д</span>обро пожаловать</h1>
                                    <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                                </div>
                            </div>
                            <div class="col-md-7 p-0">
                                <div class="row ml-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:280px;">
                                    <h1 class="title-2">в <span>TravelClub Family</span></h1>
                                    <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section mb-2">
<!--                <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">-->
<!--                    <p class="validate-error">{{wrongCredentials}}</p>-->
<!--                </div>-->
                <div class="row justify-content-center mx-auto mt-auto mb-3" style="width: 100%;height: 100%;">
                    <div class="col-12">
                        <div class="row align-items-center m-auto" style="width: 100%;">
                            <h4 class="travel-input-title">Email</h4>
                            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }" style="width: 100%;text-align: center;">
                                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                    <input type="text" class="travel-input form-control" v-model="email" placeholder="Email">
                                </div>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="row align-items-center m-auto" style="width: 100%;">
                            <h4 class="travel-input-title">Пароль</h4>
                            <ValidationProvider name="password" rules="required" v-slot="{ errors }" style="width:100%; text-align: center;">
                                <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                                    <input
                                        :type="passwordFieldType"
                                        class="travel-input form-control"
                                        v-model="password"
                                        placeholder="Пароль"
                                    >
                                    <button v-if="passwordFieldType === 'password'" type="password" class="btn-visibility icon icon-eye"  @click="switchVisibility"></button>
                                    <button v-else type="password" class="btn-visibility icon icon-eye-slash" @click="switchVisibility"></button>
                                </div>
                                <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
            </div>
            <p class="text-center mb-1 mx-auto" style="font-style: normal;font-size: 17px;">
                Нет аккаунта? <router-link to="/signup" style="color: #f8a105">Зарегистрироваться</router-link>
            </p>
            <p class="text-center mx-auto" style="font-style: normal;font-size: 17px;margin-bottom: 1.9rem">
                Забыли пароль? <router-link to="/reset-password" style="color: #f8a105">Сменить пароль</router-link>
            </p>
            <div class="form-button-group">
                <button type="submit" class="btn btn-block btn-lg" :disabled="invalid" @click="signin">Войти</button>
            </div>
        </ValidationObserver>
    </div>
</template>

<script>
    export default {
        name: "SignIn",
        data: () => ({
            email:'',
            password:'',
            wrongCredentials:'',
            passwordFieldType: 'password'
        }),
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn
            },
            isAdmin: function () {
                return this.$store.getters.isAdmin
            },
            isManager: function () {
                return this.$store.getters.isManager
            },
        },
        mounted() {
            if(this.isLoggedIn)
            {
                if (this.isAdmin == true) {
                    this.$router.push('/admin')
                }
                else if(this.isManager == true) {
                    this.$router.push('/manager')
                }
                else {
                    this.$router.push('/client')
                }
            }
        },
        methods: {
            switchVisibility() {
                this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
            },
            async signin() {
                this.wrongCredentials = '';
                if(this.email !=''){
                    let data = {
                        email: this.email,
                        password: this.password,
                    }
                    await this.$store.dispatch('login', data)
                        .then(resp => {
                            if(resp.data.status == 'success') {
                                if (this.isAdmin == true) {
                                    this.$router.push('/admin')
                                }
                                else if(this.isManager == true) {
                                    this.$router.push('/manager')
                                }
                                else {
                                    this.$router.push('/client')
                                }
                            }
                            else {
                                this.wrongCredentials = 'Неверные учетные данные'
                                this.sendMessage(this.wrongCredentials);
                            }
                        })
                        .catch(err => {
                            if (err.response != undefined) {
                                if (err.response.data.error)
                                {
                                    this.wrongCredentials = 'Неверные учетные данные'
                                    this.sendMessage(this.wrongCredentials);
                                }
                            }
                            else {
                                this.wrongCredentials = 'Произошла ошибка, попробуйте снова'
                                this.sendMessage(this.wrongCredentials);
                            }

                        })
                }
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'error',
                    title: 'Сообщение от TravelClub',
                    text: message
                });
            },
        }
    }
</script>

<style scoped>
    .btn-visibility{
        position: absolute;
        background: transparent;
        border: none;
        outline: none!important;
        color: #063065;
        font-size: 20px;
        right: 30px;
    }
    .travel-input-title {
        color: #062348 !important;
        font-family: "Bello Pro";
        /*font-weight: 700;*/
    }
    .travel-input {
        border: 1px solid #f08b23;
        border-radius: 50px;
        font-size: 1rem;
        min-height: 40px;
        color: #062348;
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
        padding-top: 23px;
        padding-bottom: 23px;
    }
    .travel-input:focus{
        outline: none!important;
        box-shadow: none !important;
    }
    #appCapsule {
        padding: 56px 0;
        margin-bottom: env(safe-area-inset-bottom);
        margin-top: env(safe-area-inset-top);
    }
    .start-form {
        max-width: 500px;
        margin: auto;
        margin-top: auto;
        padding: 56px 0;
        margin-bottom: env(safe-area-inset-bottom);
        margin-top: env(safe-area-inset-top);
        /*text-align: center;*/
    }
    .section {
        padding: 0 16px;
    }
    .start-form p {
        font-style: italic;
        font-size: 12px;
    }
    .form-button-group {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
        background: #FFF;
        min-height: 84px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: env(safe-area-inset-bottom);
    }
    .form-button-group .btn {
        background: #0f213d;
        color: white;
        text-transform: uppercase;
        font-size: 24px;
        font-family: "Open Sans";
        font-weight: 900;
        border: 0;
        border-radius: 50px;
        outline: none;
    }
    .form-button-group .btn:focus {
        outline: none !important;
        box-shadow: none !important;
    }
    .title-1 {
        position: absolute;
        z-index: 1;
        left: 0px;
        top: 10px;
        color:#062348;
        font-family: 'Bello Pro' !important;
        font-size: 30px;
    }
    .title-1 span {
        font-size: 40px;
    }
    .title-2 {
        position: absolute;
        z-index: 1;
        left: 42px;
        top: 22px;
        color: white;
        font-family: 'Open Sans' !important;
        font-weight: 900;
        font-size: 20px;
    }
    .title-2 span {
        text-transform: uppercase;
    }
    .orange-brush {
        top: 2px;
        left: 10px;
        width: 283px;
        height: 60px;
    }
    .blue-brush{
        top: 10px;
        left: -55px;
        width: 330px;
        height: 50px;
        opacity: 1;
    }
    .form-image {
        width: 100%;
        /*max-width: 200px;*/
        height: auto;
    }
</style>
