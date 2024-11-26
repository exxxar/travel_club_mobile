<template>
    <div style="width: 100%; height: 100vh; background: #f08b23">
        <div class="row m-auto justify-content-center align-items-center" style="width: 100%; min-height: 100%; background: #f08b23">
            <div class="row m-auto justify-content-center align-items-center" style="width: 100%;height: 100%;background: #f08b23">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class="card card-signin mb-5" style="margin-top: 70px">
                                <div class="card-body">
                                    <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
                                        <div class="col-12 col-md-12 col-sm-12 p-0">
                                            <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                                                <div class="col-md-10 p-0">
                                                    <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                                        <h1 class="title-1"><span>О</span>бновите</h1>
                                                        <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 p-0">
                                                    <div class="row ml-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:280px;">
                                                        <h1 class="title-2"><span>свой пароль</span></h1>
                                                        <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-signin">
                                        <ValidationObserver v-slot="{ invalid }">
                                            <div class="form-group">
                                                <div class="form-label-group">
                                                    <h4 class="multiselect-title">Email</h4>
                                                    <ValidationProvider name="email" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center; margin-bottom: 17px">
                                                        <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                                            <input type="text" class="multiselect__input travel-text-control form-control" v-model="email" placeholder="Email">
                                                        </div>
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-label-group">
                                                <h4 class="multiselect-title">Пароль</h4>
                                                <ValidationProvider name="password" rules="required" v-slot="{ errors }" style="width:100%; text-align: center;">
                                                    <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                        <input
                                                            :type="passwordFieldType"
                                                            id="password"
                                                            class="multiselect__input travel-text-control form-control"
                                                            v-model="password"
                                                            placeholder="Пароль"
                                                        >
                                                        <button v-if="passwordFieldType === 'password'" type="password" class="btn-visibility icon icon-eye"  @click="switchVisibility"></button>
                                                        <button v-else type="password" class="btn-visibility icon icon-eye-slash" @click="switchVisibility"></button>
                                                    </div>
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="form-label-group">
                                                <h4 class="multiselect-title">Подтверждение пароля</h4>
                                                <ValidationProvider name="password_confirmation" rules="required|password:@password" v-slot="{ errors }" style="width:100%; text-align: center;">
                                                    <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                                        <input
                                                            :type="passwordFieldType1"
                                                            id="password_confirmation"
                                                            class="multiselect__input travel-text-control form-control"
                                                            v-model="password_confirmation"
                                                            placeholder="Пароль"
                                                        >
                                                        <button v-if="passwordFieldType1 === 'password'" type="password" class="btn-visibility icon icon-eye"  @click="switchVisibility1"></button>
                                                        <button v-else type="password" class="btn-visibility icon icon-eye-slash" @click="switchVisibility1"></button>
                                                    </div>
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <button class="btn btn-lg btn-travel btn-block text-uppercase mt-3" :disabled="invalid||loading" @click="resetPassword">
                                                <div class="row align-items-center justify-content-center m-auto w-100 h-100 text-center">
                                                    <span v-if="loading" class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                                                    Обновить
                                                </div>
                                            </button>

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
    export default {
        data() {
            return {
                token: null,
                email: null,
                password: null,
                password_confirmation: null,
                has_error: false,
                passwordFieldType: 'password',
                passwordFieldType1: 'password',
                loading:false,
            }
        },
        methods: {
            switchVisibility() {
                this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
            },
            switchVisibility1() {
                this.passwordFieldType1 = this.passwordFieldType1 === 'password' ? 'text' : 'password'
            },
            resetPassword() {
                this.loading=true;
                axios.post("/auth/call-reset", {
                    token: this.$route.params.token,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                    .then(result => {
                        // console.log(result.data);
                        this.loading=false;
                        this.sendMessage(result.data.message)
                        this.$router.push({name: 'login'})
                    }, error => {
                        console.error(error);
                        this.sendMessage(result.data.message)
                        this.loading=false;
                    });
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от ВПУТЬ',
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
        left: 50px;
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
        left: 70px;
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
