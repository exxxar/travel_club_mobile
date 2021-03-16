<template>
    <div class="country-form mt-3">
        <div class="section">
            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%;">
                <div class="col-md-5 col-sm-6 col-6 p-0">
                    <div class="row m-auto align-items-center justify-content-center text-center " style="width: 100%; height: 100%">
                        <div class="col-12 p-0">
                            <img v-if="tourModule.country=='Украина'" src="/images/ukraine1.png" style="max-width:250px; width: 90%;cursor: pointer;" @click="chooseUkraine"/>
                            <img v-else src="/images/ukraine0.png" style="max-width:250px; width: 90%;cursor: pointer;" @click="chooseUkraine"/>
                        </div>
                        <div class="col-12 p-0 text-center">
                            <h2 v-bind:class="[tourModule.country=='Украина' ? 'active' : '', 'title']" @click="chooseUkraine">Украина</h2>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-sm-6 col-6 p-0">
                    <div class="row m-auto align-items-center justify-content-center text-center" style="width: 100%; height: 100%">
                        <div class="col-12 p-0">
                            <img v-if="tourModule.country=='Россия'" src="/images/russia1.png" style="max-width:250px; width: 90%; cursor: pointer;" @click="chooseRussia"/>
                            <img v-else src="/images/russia0.png" style="max-width:250px; width: 90%;cursor: pointer;" @click="chooseRussia"/>
                        </div>
                        <div class="col-12 p-0 text-center">
                            <h2 v-bind:class="[tourModule.country=='Россия' ? 'active' : '', 'title']" @click="chooseRussia">Россия</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
                <div class="col-12 col-md-12 col-sm-12">
                    <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row" style="height:100px;width:100%;">
                        <div class="col-md-7 p-0">
                            <div class="row mr-auto ml-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                <h1 class="title-1">Выберите страну</h1>
                                <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                            </div>
                        </div>
                        <div class="col-md-7 p-0">
                            <div class="row ml-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                                <h1 class="title-2"><span>отправления</span></h1>
                                <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="row m-auto justify-content-center align-items-center" style="width: 100%; height: 100%;">
                <div class="col-12 my-2">
                    <div class="row m-auto align-items-center p-3"
                         v-bind:class="[tourModule.country=='Украина' ? 'radio-active' : 'radio-noactive']"
                         style="width: 100%; height: 100%; cursor: pointer"
                        @click="chooseUkraine"
                    >
<!--                        <input type="radio" id="radio-1" class="radio-custom" name="country1" value="Украина" v-model="tourModule.country"/>-->
<!--                        <label for="radio-1" class="radio-custom-label"></label>-->
                        <div class="ell"></div>
                        <span class="radio-title m-auto">Украина</span>
                    </div>

                </div>
                <div class="col-12 my-2">
                    <div class="row m-auto align-items-center p-3"
                         v-bind:class="[tourModule.country=='Россия' ? 'radio-active' : 'radio-noactive']"
                         style="width: 100%; height: 100%; cursor: pointer"
                         @click="chooseRussia"
                    >
<!--                        <input type="radio" id="radio-2" class="radio-custom" name="country2" value="Россия" v-model="tourModule.country"/>-->
<!--                        <label for="radio-2" class="radio-custom-label"></label>-->
                        <div class="ell"></div>
                        <span class="radio-title m-auto">Россия</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="appBottomMenu">
            <div class="item pl-4 pr-2 ml-0 mr-auto">
                <div class="col">
                    <div class="row">
                        <div class="ell active mr-1"></div>
                        <div class="ell mr-1"></div>
                        <div class="ell mr-1"></div>
                    </div>
                </div>
            </div>
            <button class="btn item mr-0 ml-auto pl-2 pr-2">
                <div class="col">
                    <div class="action-button" @click="nextStep">
                        <div class="icon icon-keyboard_arrow_right"></div>
                    </div>
                </div>
            </button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Country",
        data: () => ({
            // choice: 'Россия',
        }),
        mounted() {
            // this.$store.dispatch('setUsers')
            // this.$store.commit('setPreloader', false)
            if(this.steps.step1 == false)
            {
                console.log('country')
                this.$router.push('/tour-module')
            }
            if(!this.tourModule.country){
                this.$store.dispatch('changeCountry', 'Россия')
            }
        },
        computed:
        {
            menu() {
                return this.$store.getters.menu
            },
            tourModule() {
                return this.$store.getters.tourModule
            },
            preloader() {
                return this.$store.getters.preloader
            },
            steps() {
                return this.$store.getters.steps
            }
        },
        methods:
        {
            nextStep() {
                this.$store.dispatch('changeStep2', true);
                this.$router.push('/tour-module/tour')
            },
            chooseUkraine() {
                    this.$store.dispatch('changeCountry', 'Украина')
            },
            chooseRussia() {
                    this.$store.dispatch('changeCountry', 'Россия')
            },
            toggleChoice() {
                if(this.tourModule.country=='Россия') {
                    // this.tourModule.country = 'Украина'
                    this.$store.dispatch('changeCountry', 'Украина')
                }
                else {
                    // this.tourModule.country='Россия'
                    this.$store.dispatch('changeCountry', 'Россия')
                }
            }
        }
    }
</script>

<style scoped>
    .title {
        font-family: 'Bello Pro';
        color:#85b8e7;
        cursor: pointer;
    }
    .active {
        color:#f08b23 !important;
    }
    .country-form {
        max-width: 500px;
        margin: auto;
        margin-top: auto;
        /*text-align: center;*/
    }
    .section {
        padding: 0 16px;
    }
    .title-1 {
        position: absolute;
        z-index: 1;
        left: 0px;
        top: 10px;
        color:#062348;
        font-family: 'Bello Pro' !important;
        font-size: 34px;
    }
    .title-1 span {
        font-size: 40px;
    }
    .title-2 {
        position: absolute;
        z-index: 1;
        left: 48px;
        top: 20px;
        color:white;
        font-family: 'Open Sans' !important;
        font-weight:900;
        font-size: 24px;
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
    .radio-active {
        border-radius: 50px;
        color:white;
        background: #0f213d;
        border: 2px solid #0f213d;
    }
    .radio-noactive {
        border-radius: 50px;
        background:white;
        color: #f08b23;
        border: 2px solid #f08b23;
    }
    .radio-title {
        font-weight: 900;
        font-family: "Open Sans";
        text-transform: uppercase;
        font-size: 20px;
    }
    .radio-active .ell {
        width: 20px;
        height: 20px;
        background: #f08b23;
        border: 2px solid #f08b23;
        border-radius: 50%;
    }
    .radio-noactive .ell {
        width: 20px;
        height: 20px;
        background: #fff;
        border: 2px solid #f08b23;
        border-radius: 50%;
    }

</style>
