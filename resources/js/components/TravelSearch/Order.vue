<template>
    <div class="section">
        <h4 class="section-title">Заполните заявку</h4>
        <p>Остался один маленький шаг - заполнить контактную информацию!</p>
        <ValidationObserver v-slot="{ invalid }">
            <form v-on:submit.prevent="onSubmit">
                <div class="input-wrapper mt-2">
                    <h4>Ваше имя</h4>
                    <ValidationProvider name="name" rules="required" v-slot="{ errors }"
                                        style="width: 100%;text-align: center;">


                        <input type="text" class="form-control " v-model="name" placeholder="Ваше имя"
                               required/>

                        <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="input-wrapper  mt-2">
                    <h4>Ваш номер телефона</h4>
                    <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }"
                                        style="width:100%;text-align: center;">

                        <input type="text" class="form-control"
                               v-model="phone"
                               v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                               placeholder="Номер телефона"
                               required/>

                        <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="input-wrapper  mt-2">
                    <h4>Дополнительная информация</h4>


                    <textarea name="message" v-model="message" class="form-control"
                              placeholder="Дополнительная информация"></textarea>
                </div>

                <div class="input-wrapper mt-2">
                    <button type="submit" class="btn btn-orange w-100" :disabled="invalid">Отправить</button>
                </div>

                <div class="input-wrapper mt-2 d-flex justify-content-center" >
                <a href="#rules" data-target="#RulesModal" data-toggle="modal" class="btn btn-link mr-1 mb-1" title="Пользовательское соглашение" aria-label="Пользовательское соглашение">
                    <i class="icon ion-ios-filing"></i>
                    Пользовательское соглашение!
                </a>
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
            onSubmit() {
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
                    title: 'TravelClub',
                    text: message,
                    group: 'main'
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
        color: #062348;
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
        color: white;
        font-family: 'Open Sans' !important;
        font-weight: 900;
        font-size: 25px;
    }

    .title-2 span {
        text-transform: uppercase;
    }

    .orange-brush {
        top: 5px;
        left: 0px;
        width: 265px;
    }

    .blue-brush {
        top: 10px;
        left: -55px;
        width: 330px;
        height: 50px;
        opacity: 1;
    }

    .multiselect__tags .price:focus {
        outline: none !important;
        box-shadow: none !important;
    }

    .multiselect__tags .price:required {
        outline: none !important;
        box-shadow: none !important;
    }
</style>

