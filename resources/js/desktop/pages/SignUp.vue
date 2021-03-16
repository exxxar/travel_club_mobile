<template>
    <div style="width: 100%; height: 100vh; background: #f08b23">
        <notifications :position="'top left'" :group="'info'" classes="my-style"></notifications>
        <div class="row m-auto justify-content-center align-items-center" style="width: 100%; min-height: 100%; background: #f08b23">
            <div class="row m-auto justify-content-center align-items-center" style="width: 100%;height: 100%;background: #f08b23">
                <div class="container">
                    <div class="row m-auto justify-content-center align-items-center w-100">
                        <div class="col-sm-12 col-md-4 col-lg-6 p-0 mx-auto">
    <!--                        <img src="/images/5.png" v-if="step1"/>-->
                            <div class="row m-auto justify-content-center align-items-center w-100 h-100">
                                <h1 class="m-auto text-center" style="color: #fff; font-size:80px;font-weight: 900; text-transform: uppercase; font-family:VAGWorld-Bold, VAG World;" v-if="step1">Шаг 1</h1>
                                <h1 class="m-auto text-center" style="color: #fff; font-size:80px;font-weight: 900; text-transform: uppercase; font-family:VAGWorld-Bold, VAG World;" v-if="step2">Шаг 2</h1>
                            </div>
                           <!--                        <img src="/images/5.png" v-if="step2"/>-->
                        </div>
                        <div class="col-sm-12 col-md-8 col-lg-6 p-0 mx-auto">
                            <div class="card card-signin my-5" style="max-height: none">
                                <div class="card-body">
                                    <div class="row m-auto justify-content-center align-items-center" v-show="step1" style="width: 100%; height: 100%;">
                                        <div class="col-12 col-md-12 col-sm-12 p-0">
                                            <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                                                <div class="col-md-10 p-0">
                                                    <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                                        <h1 class="title-1"><span>П</span>рисоединись</h1>
                                                        <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 p-0">
                                                    <div class="row ml-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:280px;">
                                                        <h1 class="title-2">к <span>TravelClub Family</span></h1>
                                                        <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mx-auto mb-3 justify-content-center align-items-center" v-show="step2" style="width: 100%; height: 100%;">
                                        <div class="col-6 col-md-6 col-sm-6 p-0">
                                            <div class="action-button" @click="prevStep">
                                                <div class="icon icon-keyboard_arrow_left"></div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-6 col-sm-6 p-0">
                                            <p class="m-auto text-center">Уже есть аккаунт? <router-link to="/login" style="color: #f8a105">Войти</router-link> </p>
                                        </div>
                                    </div>
                                    <div class="form-signin" v-show="step1">
                                        <ValidationObserver v-slot="{ invalid }">
                                            <div class="form-label-group">
                                                <h4 class="multiselect-title">Email</h4>
                                                <ValidationProvider name="email" rules="required|email" v-slot="{ errors }" style="width: 100%;text-align: center; margin-bottom: 17px">
                                                    <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                                        <input type="text" class="multiselect__input travel-text-control form-control" v-model="email" placeholder="Email">
                                                    </div>
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>

                                            <div class="form-label-group">
                                                <h4 class="multiselect-title">Пароль</h4>
                                                <ValidationProvider name="password" rules="required|min:6|password:@confirm_password" v-slot="{ errors }" style="width:100%; text-align: center;">
                                                    <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                        <input :type="passwordFieldType" class="multiselect__input travel-text-control form-control"
                                                               v-model="password"
                                                               placeholder="Пароль"
                                                               v-on:keyup.enter="nextStep"
                                                        >
                                                        <button v-if="passwordFieldType === 'password'" type="password" class="btn-visibility icon icon-eye"  @click="switchVisibility"></button>
                                                        <button v-else type="password" class="btn-visibility icon icon-eye-slash" @click="switchVisibility"></button>
                                                    </div>
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>

                                            <div class="form-label-group">
                                                <h4 class="multiselect-title">Подтверждение пароля</h4>
                                                <ValidationProvider name="confirm_password" rules="required|password:@password" v-slot="{ errors }" style="width:100%; text-align: center;">
                                                    <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                        <input :type="passwordFieldType1" class="multiselect__input travel-text-control form-control"
                                                               v-model="confirm_password"
                                                               placeholder="Пароль"
                                                               v-on:keyup.enter="nextStep"
                                                        >
                                                        <button v-if="passwordFieldType1 === 'password'" type="password" class="btn-visibility icon icon-eye"  @click="switchVisibility1"></button>
                                                        <button v-else type="password" class="btn-visibility icon icon-eye-slash" @click="switchVisibility1"></button>
                                                    </div>
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <button class="btn btn-lg btn-travel btn-block text-uppercase mt-3 mx-auto mb-2" :disabled="invalid" @click="nextStep">Далее</button>
                                            <p class="text-center m-auto">Уже есть аккаунт? <router-link to="/login" style="color: #f8a105">Войти</router-link> </p>
                                        </ValidationObserver>
                                    </div>
                                    <div class="form-signin" v-show="step2">
                                        <ValidationObserver v-slot="{ invalid }">

                                            <div class="form-label-group">
                                                <h4 class="multiselect-title">* Фамилия</h4>
                                                    <ValidationProvider name="lastName" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center; margin-bottom: 17px">
                                                        <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                            <input
                                                                v-model="LastName"
                                                                placeholder="Фамилия"
                                                                class="multiselect__input travel-text-control form-control"
                                                            >
                                                        </div>
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                            </div>
                                            <div class="form-label-group">
                                                <h4 class="multiselect-title">* Имя</h4>
                                                    <ValidationProvider name="firstName" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center; margin-bottom: 17px">
                                                        <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                            <input
                                                                v-model="FirstName"
                                                                placeholder="Имя"
                                                                class="multiselect__input travel-text-control form-control"
                                                            >
                                                        </div>
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            <div class="form-label-group">
                                                <h4 class="multiselect-title">Отчество</h4>
                                                <span style="width: 100%; text-align: center; margin-bottom: 17px;">
                                                    <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                        <input
                                                            v-model="MiddleName"
                                                            placeholder="Отчество"
                                                            class="multiselect__input travel-text-control form-control"
                                                        >
                                                    </div>
                                                </span>
                                            </div>
                                            <div class="form-label-group">
                                                <h4 class="multiselect-title">* Номер телефона</h4>
                                                <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width: 100%;text-align: center; margin-bottom: 17px">
                                                    <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                        <input type="text" class="multiselect__input travel-text-control form-control"
                                                               v-model="Phone"
                                                               v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                                               placeholder="Номер телефона"
                                                               required
                                                        >
                                                    </div>
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>

                                            <button class="btn btn-lg btn-travel btn-block text-uppercase text-center mt-3 mx-auto mb-2" :disabled="invalid" @click="signup">
                                                <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                                                    <span v-if="loading" role="status" aria-hidden="true" class="spinner-border spinner-border-sm mx-2"></span>
                                                    <span v-if="loading" class="sr-only">Loading...</span>
                                                    Зарегистрироваться
                                                </div>
                                            </button>
                                            <p class="text-center m-auto">Уже есть аккаунт? <router-link to="/login" style="color: #f8a105">Войти</router-link> </p>
                                        </ValidationObserver>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mask} from 'vue-the-mask'
    export default {
        name: "SignUp",
        data: () => ({
            // login:'',
            email:'',
            password:'',
            confirm_password:'',
            wrongCredentials:'',
            passwordFieldType: 'password',
            passwordFieldType1: 'password',
            step1:true,
            step2: false,
            FullName:'',
            FirstName:'',
            MiddleName:'',
            LastName:'',
            Phone:'',
            loading: false
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
            switchVisibility1() {
                this.passwordFieldType1 = this.passwordFieldType1 === 'password' ? 'text' : 'password'
            },
            nextStep() {
              this.step1=false;
              this.step2=true;
            },
            prevStep() {
                this.step1=true;
                this.step2=false;
            },
            async signup() {
                this.wrongCredentials = '';

                if(this.email !=''){
                    this.FullName= this.LastName+' '+ this.FirstName+' '+this.MiddleName;
                    var promo = localStorage.getItem('promo');
                    if(promo === 'true')
                    {
                        promo=1;
                    }
                    else {
                        promo=0;
                    }
                    let data = {
                        // login: this.login,
                        email: this.email,
                        password: this.password,
                        FullName:this.FullName,
                        FirstName:this.FirstName,
                        MiddleName:this.MiddleName,
                        LastName:this.LastName,
                        Phone:this.Phone,
                        Promocode: localStorage.getItem('promo')
                    }
                    this.loading = true;
                    await this.$store.dispatch('register', data)
                        .then(() => {
                            this.loading = false;
                            localStorage.setItem('promo', false);
                            // this.$store.dispatch('getUser')
                            if (this.isAdmin == true) {
                                this.$router.push('/admin')
                            }
                            else if(this.isManager == true) {
                                this.$router.push('/manager')
                            }
                            else {
                                this.$router.push('/client')
                            }
                            // this.$store.commit('setMenu', false)
                        })
                        .catch(err => {
                            this.loading = false;
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
        },
        directives: {mask}
    }
</script>

<style scoped>
    .action-button {
        display: inline-flex;
        width: 50px;
        height: 50px;
        margin-left: -5px;
        margin-right: -5px;
        align-items: center;
        justify-content: center;
        border-radius: 200px;
        background: #f08b23;
        color: white;
        font-size: 40px;
        outline: none !important;
        text-decoration: none !important;
        box-shadow: none !important;
    }
    .action-button:focus {
        outline: none !important;
        text-decoration: none !important;
        box-shadow: none !important;
    }
    .btn-visibility{
        position: absolute;
        background: transparent;
        border: none;
        outline: none!important;
        color: #063065;
        font-size: 20px;
    }
    .card-signin {
        border: 0;
        border-radius: 1rem;
        box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    }

    .card-signin .card-title {
        margin-bottom: 2rem;
        font-weight: 300;
        font-size: 1.5rem;
    }

    .card-signin .card-body {
        padding: 2rem;
    }

    .form-signin {
        width: 100%;
    }

    .form-signin .btn {
        font-size: 80%;
        border-radius: 5rem;
        letter-spacing: .1rem;
        font-weight: bold;
        padding: 1rem;
        transition: all 0.2s;
    }

    .form-label-group {
        position: relative;
        margin-bottom: 1rem;
    }

    .form-label-group input {
        height: auto;
        border-radius: 2rem;
    }

    .form-label-group>input,
    .form-label-group>label {
        padding: var(--input-padding-y) var(--input-padding-x);
    }

    .form-label-group>label {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        margin-bottom: 0;
        /* Override default `<label>` margin */
        line-height: 1.5;
        color: #495057;
        border: 1px solid transparent;
        border-radius: .25rem;
        transition: all .1s ease-in-out;
    }

    .form-label-group input::-webkit-input-placeholder {
        color: transparent;
    }

    .form-label-group input:-ms-input-placeholder {
        color: transparent;
    }

    .form-label-group input::-ms-input-placeholder {
        color: transparent;
    }

    .form-label-group input::-moz-placeholder {
        color: transparent;
    }

    .form-label-group input::placeholder {
        color: transparent;
    }

    .form-label-group input:not(:placeholder-shown) {
        padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
        padding-bottom: calc(var(--input-padding-y) / 3);
    }

    .form-label-group input:not(:placeholder-shown)~label {
        padding-top: calc(var(--input-padding-y) / 3);
        padding-bottom: calc(var(--input-padding-y) / 3);
        font-size: 12px;
        color: #777;
    }


    /* Fallback for Edge
    -------------------------------------------------- */

    @supports (-ms-ime-align: auto) {
        .form-label-group>label {
            display: none;
        }
        .form-label-group input::-ms-input-placeholder {
            color: #777;
        }
    }

    /* Fallback for IE
    -------------------------------------------------- */

    @media all and (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
        .form-label-group>label {
            display: none;
        }
        .form-label-group input:-ms-input-placeholder {
            color: #777;
        }
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
    .multiselect-title {
        color: #062348 !important;
        font-family: "Bello Pro";
        /*font-weight: 700;*/
    }
    .multiselect__tags {
        border: 1px solid #f08b23;
        border-radius: 20px;
        font-size: 1rem;
        min-height: 40px;
    }
    .multiselect__tags .travel-text-control{
        color: #062348;
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
    }

    .multiselect__tags .travel-text-control:focus{
        outline: none!important;
        box-shadow: none !important;
    }
    .validate-error{
        display: block !important;
        height: 17px;
    }
    .btn {
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
    .btn:focus {
        outline: none !important;
        box-shadow: none !important;
    }
    .btn-travel {
        border-radius: 50px;
        background: #f08b23;
        color: white;
        text-transform: uppercase;
        font-family: "Open Sans";
        font-weight: 900;
        font-size: 20px;
    }
</style>
