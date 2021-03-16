<template>
    <div class="start-form mt-5">
        <div class="section">
            <img src="/images/5.png" class="form-image" style="width: 100%;"/>
        </div>
        <div class="section">
            <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
                <div class="col-12 col-md-12 col-sm-12">
                    <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                        <div class="col-md-7 p-0">
                            <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                <h1 class="title-1">Заявка</h1>
                                <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                            </div>
                        </div>
                        <div class="col-md-7 p-0">
                            <div class="row ml-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                <h1 class="title-2"><span>отправлена</span></h1>
                                <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
                <p style="color: #0f213d; font-family: 'Open Sans'; font-weight: 900">Пожалуйста, ожидайте, наши менеджеры скоро с Вами свяжутся</p>
            </div>
        </div>
        <div class="section">
            <button class="btn btn-block btn-lg mt-3" @click="newOrder">Новая заявка</button>
        </div>
        <div class="section">
            <button class="btn btn-block btn-lg mt-3" style="background: #f08b23" @click="toHome">На главную</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "End",
        mounted() {
            if(this.steps.step4 == false)
            {
                this.$router.push('/tour-module')
            }
            this.$store.dispatch('changeStep2', false);
            this.$store.dispatch('changeStep3', false);
        },
        computed:
        {
            steps() {
                return this.$store.getters.steps
            },
        },
        methods: {
            newOrder() {
                this.$store.dispatch('changeStep4', false);
                this.$router.push('/tour-module')
            },
            toHome() {
                this.$store.dispatch('changeStep4', false);
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .start-form {
        max-width: 500px;
        margin: auto;
        margin-top: auto;
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
        max-height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: env(safe-area-inset-bottom);
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
    .title-1 {
        position: absolute;
        z-index: 1;
        left: 50px;
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
        left: 52px;
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
        left: 10px;
        width: 265px;
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
