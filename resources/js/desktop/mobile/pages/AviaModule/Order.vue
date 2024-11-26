<template>
    <div class="mx-auto mt-3">
        <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
            <div class="col-12 col-md-12 col-sm-12">
                <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                    <div class="col-md-7 p-0">
                        <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                            <h1 class="title-1">Заполните</h1>
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
            <div class="row justify-content-center mx-auto mt-auto mb-5" style="width: 100%;height: 100%;">
                <div class="col-11 mt-3">
                    <div class="row align-items-center m-auto" style="width: 100%;">
                        <h6 class="avia-title">Ваше имя</h6>
                        <ValidationProvider name="name" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                <b-form-input type="text" class="travel-input" v-model="name" placeholder="Ваше имя"></b-form-input>
                            </div>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-11 mt-3">
                    <div class="row align-items-center m-auto" style="width: 100%;">
                        <h6 class="avia-title">Ваш номер телефона</h6>
                        <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;text-align: center;">
                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                                <b-form-input type="text" class="travel-input"
                                       v-model="phone"
                                       v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                       placeholder="Номер телефона"
                                >
                                </b-form-input>
                            </div>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-11 mt-3">
                    <div class="row align-items-center m-auto" style="width: 100%;height: 100%;">
                        <h6 class="avia-title">Дополнительная информация</h6>
                        <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                            <b-form-textarea name="message" v-model="message"
                                      style="min-height: 70px; border-radius: 20px !important;" class="travel-input p-2"
                                      placeholder="Дополнительная информация">
                            </b-form-textarea>
                        </div>
                    </div>
                </div>
<!--                <div class="form-button-group">-->
<!--                    <button class="btn btn-primary btn-wd btn-lg" style="width:100%" :disabled="invalid||loading" @click="onSubmit">Отправить</button>-->
<!--                </div>-->
            </div>
            <div class="appBottomMenu">
                <div class="item ps-4 pe-2 ml-0 mr-auto">
                    <div class="col">
                        <div class="row">
                            <div class="ell mr-1"></div>
                            <div class="ell active mr-1"></div>
                        </div>
                    </div>
                </div>
                <button class="btn item mr-0 ml-auto ps-2 pe-2">
                    <div class="col">
                        <div class="action-button" @click="onSubmit" :disabled="invalid||loading">
                            <div class="icon icon-keyboard_arrow_right" v-if="!loading"></div>
                            <b-spinner small v-if="loading"></b-spinner>
                            <span class="sr-only" v-if="loading">Loading...</span>
                        </div>
                    </div>
                </button>
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
                // email: '',
                message: '',
                loading: false,
            }
        },
        mounted() {
            if(this.avia_steps.step2 == false)
            {
                this.$router.push('/avia-module/avia')
            }
            this.name = this.aviaModule.name;
            this.phone = this.aviaModule.phone;
        },
        computed:
            {
                aviaModule() {
                    return this.$store.getters.aviaModule
                },
                avia_steps() {
                    return this.$store.getters.avia_steps
                },
            },
        methods: {
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
                    this.sendMessage("Заявка на подбор авиабилетов успешно отправлена!");
                    this.$store.dispatch('changeAviaSteps', {key:'step3', value:true});
                    this.$router.push('/avia-module/end')
                });
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
    .multiselect__tags .price{
        color: #062348;
        font-family: "Open Sans" !important;
        font-weight: 900 !important;
    }

    .multiselect__tags .price:focus{
        outline: none!important;
        box-shadow: none !important;
    }
    .form-button-group .btn.btn-primary {
        color: #fff !important;
        background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);
        background-color: rgba(0, 0, 0, 0);
        background-color: #f08b23 !important;
        border-color: #f08b23 !important;
        box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;
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
        max-height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: env(safe-area-inset-bottom);
    }
    .form-button-group .btn {
        color: white;
        text-transform: uppercase;
        font-size: 24px;
        font-family: "Open Sans";
        font-weight: 900;
        border: 0;
        border-radius: 50px;
        outline: none;
    }
    form-button-group .btn:focus {
        outline: none !important;
        box-shadow: none !important;
    }
    .appBottomMenu {
        max-height: 56px;
        position: fixed;
        z-index: 2;
        bottom: 0;
        left: 0;
        right: 0;
        background: #FFF;
        border-top: none !important;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: env(safe-area-inset-bottom);
    }
    .appBottomMenu .item .ell {
        width: 13px;
        height: 13px;
        background: #fff;
        border: 2px solid #062348;
        border-radius: 50%;
    }
    .appBottomMenu .item .ell.active {
        background: #f08b23;
        border: 2px solid #f08b23;
    }
    .appBottomMenu .item .action-button {
        display: inline-flex;
        width: 56px;
        height: 56px;
        margin-left: -5px;
        margin-right: -5px;
        align-items: center;
        justify-content: center;
        border-radius: 200px;
        background: #f08b23;
        color: white;
        font-size: 40px;
    }
    .appBottomMenu .item {
        outline: none !important;
        text-decoration: none !important;
        box-shadow: none !important;
    }
    .appBottomMenu .item:focus {
        outline: none !important;
        text-decoration: none !important;
        box-shadow: none !important;
    }
</style>

