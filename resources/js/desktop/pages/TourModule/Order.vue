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
        <form v-on:submit.prevent="onSubmit">
            <div class="row justify-content-center mx-auto mt-auto mb-5" style="width: 80%;height: 100%;">
                <div class="col-md-8">
                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                        <h6 class="travel-label">Ваше имя</h6>
                        <ValidationProvider name="name" rules="required" v-slot="{ errors }" style="width: 100%;text-align: center;">
                            <div class="row  align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                                <b-form-input type="text" class="travel-input " v-model="name" placeholder="Ваше имя" required></b-form-input>
                            </div>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                        <h6 class="travel-label">Ваш номер телефона</h6>
                        <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;text-align: center;">
                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;">
                                <b-form-input type="text" class=" travel-input "
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
                        <h6 class="travel-label">Дополнительная информация</h6>
                        <div class="row  align-items-center justify-content-center m-auto" style="width: 100%;">
                            <b-form-textarea name="message" v-model="message" class="p-2 travel-input" style="border-radius: 20px !important;"
                                      placeholder="Дополнительная информация">
                            </b-form-textarea>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-3">
                    <button type="submit" class="btn btn-primary btn-lg" style="width:100%" :disabled="invalid" ><span>Отправить</span></button>
                </div>
            </div>
        </form>
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
            this.name = this.tourModule.name;
            this.phone = this.tourModule.phone;
        },
        computed:
        {
            tourModule() {
                return this.$store.getters.tourModule
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
                })
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от TravelClub',
                    text: message
                });
            },
        },
        directives: {mask}
    }
</script>

<style scoped>
    .travel-label {
        font-weight: 900;
    }
    .btn.btn-primary {
        color: #fff !important;
        background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);
        background-color: rgba(0, 0, 0, 0);
        background-color: #f08b23 !important;
        border-color: #f08b23 !important;
        box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;
        border-radius: 50px;
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
    .multiselect__tags .price:focus{
        outline: none!important;
        box-shadow: none !important;
    }
    .multiselect__tags .price:required{
        outline: none!important;
        box-shadow: none !important;
    }
</style>

