<template>
    <div class="cont m-auto">
        <div class="row m-auto justify-content-center align-items-center" style="width: 100%;">
            <div class="col-12 col-md-8 col-sm-12">
                <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                    <div class="col-md-7 p-0">
                        <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                            <h1 class="title-1"><span>З</span>аполните</h1>
                            <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                        </div>
                    </div>
                    <div class="col-md-7 p-0">
                        <div class="row ml-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                            <h1 class="title-2"><span>заявку</span></h1>
                            <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ValidationObserver v-slot="{ invalid }">
            <div class="row justify-content-center mx-auto mt-auto mb-5" style="width: 80%;">
                <div class="col-md-8">
                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                        <h6 class="avia-title">Ваше имя</h6>
                        <ValidationProvider name="name" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                <b-form-input type="text" class="travel-input" v-model="name" placeholder="Ваше имя" required></b-form-input>
                            </div>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                        <h6 class="avia-title">Ваш номер телефона</h6>
                        <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;text-align: center;">
                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                                <b-form-input type="text" class="travel-input"
                                       v-model="phone"
                                       v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                       placeholder="Номер телефона"
                                       required
                                ></b-form-input>
                            </div>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                        <h6 class="avia-title">Дополнительная информация</h6>
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                            <b-form-textarea
                                name="message" v-model="message"
                                class="travel-input p-2"
                                style="border-radius: 20px !important;"
                                placeholder="Дополнительная информация">
                            </b-form-textarea>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row mx-auto my-2 w-100 align-items-center justify-content-center">
                        <button class="btn btn-primary btn-lg w-100" @click="onSubmit" :disabled="invalid||loading">
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </ValidationObserver>
    </div>
</template>

<script>
    import {mask} from 'vue-the-mask'

    export default {
        name: "Order",
        data() {
            return {
                name: '',
                phone: '',
                message: '',
                loading:false
            }
        },
        mounted() {
            this.name = this.aviaModule.name;
            this.phone = this.aviaModule.phone;
        },
        computed:
            {
                aviaModule() {
                    return this.$store.getters.aviaModule
                },
            },
        methods: {
            next() {
                this.$router.push('/avia-module/avia');
            },
            onSubmit(){
                this.loading = true;
                this.$store.dispatch('changeAviaName', this.name);
                this.$store.dispatch('changeAviaPhone', this.phone);

                this.$store.dispatch('sendAviaModuleOrder',
                    {
                        name: this.name,
                        phone: this.phone,
                        message: this.message,
                        aviaModule: this.aviaModule
                    }
                ).then(resp => {
                    this.loading = false;
                    this.sendMessage("Заявка на подбор авиабилетов успешно отправлена!")
                })
                this.loading = false;
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от ВПУТЬ',
                    text: message
                });
            },
        },
        directives: {mask}
    }
</script>

<style scoped>
    .btn.btn-primary {
        color: #fff !important;
        background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);
        background-color: rgba(0, 0, 0, 0);
        background-color: #f08b23 !important;
        border-color: #f08b23 !important;
        box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;
        border-radius: 50px;
    }
    .avia-title {
        color: #062348 !important;
        font-family: "Open Sans Extrabold";
        font-weight: 900;
    }
    .title-1 {
        position: absolute;
        z-index: 1;
        left: 20px;
        top: 10px;
        color:#062348;
        font-family: 'Bello Pro' !important;
        font-size: 35px;
    }
    .title-1 span {
        font-size: 40px;
    }
    .title-2 {
        position: absolute;
        z-index: 1;
        left: 87px;
        top: 18px;
        color:white;
        font-family: 'Open Sans' !important;
        font-weight:900;
        font-size: 25px;
    }
    .title-2 span {
        text-transform: uppercase;
    }
    .orange-brush{
        top: 5px;
        left: 0px;
        width: 265px;
    }
    .blue-brush{
        top: 10px;
        left: -55px;
        width: 330px;
        height: 50px;
        opacity: 1;
    }
</style>
