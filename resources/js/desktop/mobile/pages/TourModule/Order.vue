<template>
    <div class="mx-auto mt-3">
        <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
            <div class="col-12 col-md-12 col-sm-12">
                <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                    <div class="col-md-7 p-0">
                        <div class="row mr-auto ms-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                            <h1 class="title-1">Заполните</h1>
                            <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                        </div>
                    </div>
                    <div class="col-md-7 p-0">
                        <div class="row ms-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
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
                        <h4 class="multiselect-title">Ваше имя</h4>
                        <ValidationProvider name="name" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                            <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                <input type="text" class="multiselect__input price form-control" v-model="name" placeholder="Ваше имя">
                            </div>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-11 mt-3">
                    <div class="row align-items-center m-auto" style="width: 100%;">
                        <h4 class="multiselect-title">Ваш номер телефона</h4>
                        <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;text-align: center;">
                            <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                                <input type="text" class="multiselect__input price form-control"
                                       v-model="phone"
                                       v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                       placeholder="Номер телефона"
                                >
                            </div>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-11 mt-3">
                    <div class="row align-items-center m-auto" style="width: 100%;height: 100%;">
                        <h4 class="multiselect-title">Дополнительная информация</h4>
                        <div class="row multiselect__tags align-items-center justify-content-center m-auto" style="width: 100%;">
                            <textarea name="message" v-model="message" class="multiselect__input price form-control"
                                      style="min-height: 70px"
                                      placeholder="Дополнительная информация">
                            </textarea>
                        </div>
                    </div>
                </div>
                <div class="form-button-group">
                    <button class="btn btn-primary btn-wd btn-lg" style="width:100%" :disabled="invalid" @click="onSubmit">Отправить</button>
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
                // email: '',
                message: '',
            }
        },
        mounted() {
            if(this.steps.step3 == false)
            {
                // console.log('order')
                this.$router.push('/tour-module/tour')
            }
            this.name = this.tourModule.name;
            this.phone = this.tourModule.phone;
        },
        computed:
            {
                tourModule() {
                    return this.$store.getters.tourModule
                },
                steps() {
                    return this.$store.getters.steps
                },
            },
        methods: {
            onSubmit(){
                this.$store.dispatch('changeName', this.name);
                this.$store.dispatch('changePhone', this.phone);

                this.$store.dispatch('sendTourModuleOrder',
                    {
                        name: this.name,
                        phone: this.phone,
                        message: this.message,
                        tourModule: this.tourModule
                    }
                ).then(resp => {
                    this.sendMessage("Заявка на подбор тура успешно отправлена!")
                    this.$store.dispatch('changeStep4', true);
                    this.$router.push('/tour-module/end')
                });
                // this.$store.dispatch('changeStep4', true);
                // this.$router.push('/tour-module/end')
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
