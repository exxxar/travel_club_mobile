<template>
    <div style="width: 100%; background: #f08b23">
<!--        <div class="row m-auto justify-content-center align-items-center" style="width: 100%; min-height: 100%; background: #f08b23">-->
<!--            <div class="row m-auto justify-content-center align-items-center" style="width: 100%;height: 100%;background: #f08b23">-->
                <div class="container">
                    <div class="tc-row m-auto h-100 justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-4 col-lg-6 p-0 mx-auto">
    <!--                        <img src="/images/5.png" v-if="step1"/>-->
                            <div class="row m-auto justify-content-center align-items-center w-100 h-100">
                                <h1 class="m-auto text-center" style="color: #fff; font-size:80px;font-weight: 900; text-transform: uppercase; font-family:VAGWorld-Bold, VAG World;" v-if="step1">Шаг 1</h1>
                                <h1 class="m-auto text-center" style="color: #fff; font-size:80px;font-weight: 900; text-transform: uppercase; font-family:VAGWorld-Bold, VAG World;" v-if="step2">Шаг 2</h1>
                            </div>
                           <!--                        <img src="/images/5.png" v-if="step2"/>-->
                        </div>
                        <div class="col-sm-12 col-md-8 col-lg-6 p-0 mx-auto">
                            <div class="tc-card card-signin my-5" style="max-height: none">

                                    <h4 class="tc-card__title text-center mb-3" v-show="step1">Присоединись к Travel<span class="tc-text-primary">Club</span></h4>

                                    <div class="row mx-auto mb-3 justify-content-center align-items-center" v-show="step2" style="width: 100%; height: 100%;">
                                        <div class="col-6 col-md-6 col-sm-6 p-0">
                                            <div class="action-button tc-cursor-pointer" @click="prevStep">
                                                <base-icon name="ArrowRight" class="tc-rotate-180"/>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-6 col-sm-6 p-0">
                                            <p class="m-auto text-center">Уже есть аккаунт? <router-link to="/login" style="color: #f8a105">Войти</router-link> </p>
                                        </div>
                                    </div>
                                    <div class="form-signin" v-show="step1">
                                        <ValidationObserver v-slot="{ invalid }" tag="div" class="tc-wrapper-column">
                                            <base-input v-model="email" name="email" label="Email" rules="required|email"></base-input>
                                            <base-input v-model="password" :type="passwords_types.password" name="password"
                                                        label="Пароль" rules="required|min:8"
                                                        v-on:keyup.enter="nextStep(invalid)"
                                                        @click-group-item="switchVisibility('password')"
                                                        group_item_action
                                            >
                                                <template #icon>
                                                    <base-icon :name="passwords_types.password === 'password' ? 'Eye':'EyeSlash'"
                                                               color="secondary"/>
                                                </template>
                                            </base-input>
                                            <base-input v-model="confirm_password" :type="passwords_types.confirm" name="confirm_password"
                                                        label="Подтверждение пароля" @click-group-item="switchVisibility('confirm')"
                                                        :rules="'required|min:8|confirmed:password'"
                                                        group_item_action
                                                        v-on:keyup.enter="nextStep(invalid)"
                                            >
                                                <template #icon>
                                                    <base-icon :name="passwords_types.confirm === 'password' ? 'Eye':'EyeSlash'"
                                                               color="secondary"
                                                    />
                                                </template>
                                            </base-input>

                                            <base-button class="text-uppercase mt-3 mx-auto mb-2" :disabled="invalid" @click="nextStep(invalid)">Далее</base-button>
                                            <p class="text-center m-auto">Уже есть аккаунт? <router-link to="/login" style="color: #f8a105">Войти</router-link> </p>
                                        </ValidationObserver>
                                    </div>
                                    <div class="form-signin" v-show="step2">
                                        <ValidationObserver v-slot="{ invalid }" tag="div" class="tc-wrapper-column">
                                            <base-input v-model="last_name" name="last_name" label="Фамилия" rules="required"></base-input>
                                            <base-input v-model="first_name" name="first_name" label="Имя" rules="required"></base-input>
                                            <base-input v-model="middle_name" name="middle_name" label="Отчество" rules="required"></base-input>
                                            <base-input v-model="phone" name="phone" label="Номер телефона" rules="required|phone"  :mask="['+# ### ### ####','+## ### ### ####', '+## ### #### ####',]"></base-input>

                                            <base-button class="text-uppercase text-center mt-3 mx-auto mb-2" :disabled="invalid||loading" :loading="loading" @click="signup">
                                                    Зарегистрироваться
                                            </base-button>
                                            <p class="text-center m-auto">Уже есть аккаунт? <router-link to="/login" style="color: #f8a105">Войти</router-link> </p>
                                        </ValidationObserver>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "SignUp",
        data: () => ({
            email:'',
            password:'',
            confirm_password:'',
            step1:true,
            step2: false,
            first_name:'',
            middle_name:'',
            last_name:'',
            phone:'',
            loading: false,
            passwords_types: {
                password: 'password',
                confirm: 'password',
            },
            manager: false
        }),
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn
            },
        },
        watch: {
            '$route.query.role': function(newVal, oldVal) {
                if(newVal==='manager') {
                    this.manager = true;
                }
            },
        },
        mounted() {
            if(this.isLoggedIn)
            {
                this.$router.push('/dashboard')
            }
        },
        methods: {
            switchVisibility(type) {
                this.passwords_types[type] = this.passwords_types[type] === "password" ? "text" : "password";
            },
            nextStep(invalid) {
                if(!this.loading && !invalid) {
                    this.step1 = false;
                    this.step2 = true;
                }
            },
            prevStep() {
                if(!this.loading) {
                    this.step1=true;
                    this.step2=false;
                }
            },
            async signup() {
                let data = {
                    email: this.email,
                    password: this.password,
                    first_name: this.first_name,
                    middle_name: this.middle_name,
                    last_name: this.last_name,
                    phone: this.phone,
                    manager: this.manager,
                }
                this.loading = true;
                await this.$store.dispatch('register', data)
                    .then(() => {
                        this.loading = false;
                    })
                    .catch(err => {
                        this.loading = false;
                    })

            },
        },
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
