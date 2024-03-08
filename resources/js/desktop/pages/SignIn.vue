<template>
    <div style="width: 100%; height: calc(100vh - 50px); background: #f08b23">
<!--        <div class="row m-auto justify-content-center align-items-center" style="width: 100%; min-height: 100%; background: #f08b23">-->
<!--            <div class="row m-auto justify-content-center align-items-center" style="width: 100%;height: 100%;background: #f08b23">-->
<!--                <div class="container">-->
                    <div class="tc-wrapper m-auto h-100">
                        <div class="col-sm-9 col-md-7 col-lg-5 col-xl-4 mx-auto">
                            <div class="tc-card card-signin my-5">
                                <h4 class="tc-card__title text-center mb-3">Добро пожаловать в Travel<span class="tc-text-primary">Club</span></h4>
<!--                                <div class="card-body">-->
<!--                                    <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">-->
<!--                                        <div class="col-12 col-md-12 col-sm-12 p-0">-->
<!--&lt;!&ndash;                                            <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div class="col-md-10 p-0">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div class="row me-auto ms-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <h1 class="title-1"><span>Д</span>обро пожаловать</h1>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div class="col-md-7 p-0">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div class="row ms-auto me-0 my-auto travel-card-title" style="position:relative;height:50px;width:280px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <h1 class="title-2">в <span>TravelClub Family</span></h1>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="form-signin">-->
                                        <ValidationObserver v-slot="{ invalid }" tag="div" class="tc-wrapper-column tc-gap-medium">
                                            <base-input
                                                v-model="email"
                                                name="email"
                                                :rules="'required|email'"
                                                label="Email"
                                                :disabled="loading"
                                                no_group_item
                                            />
                                            <base-input
                                                v-model="password"
                                                name="password"
                                                :type="passwordFieldType"
                                                label="Пароль"
                                                :disabled="loading"
                                                @click-group-item="switchVisibility"
                                                :rules="'required|min:8'"
                                                group_item_action
                                            >
                                                <template #icon>
                                                    <base-icon :name="passwordFieldType === 'password' ? 'Eye':'EyeSlash'"
                                                               color="secondary"></base-icon>
                                                </template>
                                            </base-input>

                                            <button class="tc-button text-uppercase mt-3 mx-auto mb-2" :disabled="invalid||loading" @click="signin">
                                                    <span v-if="loading" role="status" aria-hidden="true" class="spinner-border spinner-border-sm mx-2"></span>
                                                    Войти
                                            </button>
                                            <p class="text-center m-auto">Нет аккаунта? <router-link to="/signup" style="color: #f8a105">Зарегистрироваться</router-link> </p>
                                            <p class="text-center m-auto">Забыли пароль? <router-link to="/reset-password" style="color: #f8a105">Сменить пароль</router-link> </p>
                                        </ValidationObserver>
<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "SignIn",
        data: () => ({
            email:'',
            password:'',
            wrongCredentials:'',
            passwordFieldType: 'password',
            loading: false
        }),
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn
            },
        },
        mounted() {
            if(this.isLoggedIn)
            {
                this.$router.push('/dashboard')
            }
        },
        methods: {
            switchVisibility() {
                this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
            },
            async signin() {
                this.loading = true;
                let data = {
                    email: this.email,
                    password: this.password,
                };
                await this.$store.dispatch('login', data)
                    .then(resp => {
                        this.loading = false;
                        this.$router.push('/dashboard')
                    })
                    .catch(err => {
                        this.loading = false;
                    })

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
        right: 10px;
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
