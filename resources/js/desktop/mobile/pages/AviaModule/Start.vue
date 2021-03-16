<template>
    <div class="start-form mt-1">
        <div class="section">
            <img class="form-image" src="/images/avatar.svg" style="width: 100%; height: 40vh"/>
        </div>
        <div class="section">
            <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
                <div class="col-12 col-md-12 col-sm-12">
                    <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                        <div class="col-md-7 p-0">
                            <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                <h1 class="title-1">Подберите авиабилеты</h1>
                                <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                            </div>
                        </div>
                        <div class="col-md-7 p-0">
                            <div class="row ml-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                <h1 class="title-2">с <span>TravelClub</span></h1>
                                <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
                <p style="color: #0f213d; font-family: 'Open Sans'; font-weight: 900">
                    Надоело искать, подбирать авиабилеты и следить за их ценой самостоятельно? Мы предлагаем заполнить заявку на подбор авиабилетов и наши менеджеры сделают всё за Вас!
                </p>
            </div>
        </div>
        <div class="form-button-group">
            <button type="submit" class="btn btn-block btn-lg" @click="start">Начать</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Start",
        data: () => ({
        }),
        mounted() {

        },
        computed:
            {
                menu() {
                    return this.$store.getters.menu
                },
                aviaModule() {
                    return this.$store.getters.aviaModule
                },
                preloader() {
                    return this.$store.getters.preloader
                },
                avia_steps() {
                    return this.$store.getters.avia_steps
                }
            },
        methods:
            {
                start() {
                    this.$store.dispatch('changeAviaSteps', {key:'step1', value:true});
                    this.$router.push('/avia-module/avia')
                }
            }
    }
</script>

<style scoped>
    #appCapsule {
        padding: 56px 0;
        margin-bottom: env(safe-area-inset-bottom);
        margin-top: env(safe-area-inset-top);
    }
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
    .form-button-group .btn {
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
    form-button-group .btn:focus {
        outline: none !important;
        box-shadow: none !important;
    }
    .title-1 {
        position: absolute;
        z-index: 1;
        left: 0px;
        top: 16px;
        color:#062348;
        font-family: 'Bello Pro' !important;
        font-size: 27px;
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
