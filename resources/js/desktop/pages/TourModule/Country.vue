<template>
    <div class='cont m-auto'>
        <div class="row m-auto justify-content-center align-items-center" style="width: 100%;">
            <div class="col-12 col-md-8 col-sm-12">
                <div class="row align-items-center justify-content-center m-auto travel-card-title-row" style="height:100px;width:100%;">
                    <div class="col-md-7 p-0">
                        <div class="row mr-auto ms-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                            <h1 class="title-1"><span>В</span>ыберите страну</h1>
                            <img src="/images/blue-brush.svg" class="blue-brush" style="position: absolute;"/>
                        </div>
                    </div>
                    <div class="col-md-7 p-0">
                        <div class="row ms-auto mr-0 my-auto travel-card-title" style="position:relative;height:50px;width:250px;">
                            <h1 class="title-2"><span>отправления</span></h1>
                            <img src="/images/orange-brush.svg" class="orange-brush" style="position: absolute;"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-center country-choice m-auto" style="width: 80%;height: 80%;">
            <div class="col-md-5 col-sm-6 col-6 p-0">
                <div class="row m-auto align-items-center justify-content-center text-center " style="width: 100%; height: 100%">
                    <div class="col-12 p-0">
                        <img v-if="tourModule.country=='Украина'" src="/images/ukraine1.png" style="max-width:250px; width: 90%;cursor: pointer; min-width: 160px" @click="chooseUkraine"/>
                        <img v-else src="/images/ukraine0.png" style="max-width:250px; width: 90%;cursor: pointer;min-width: 160px" @click="chooseUkraine"/>
                    </div>
                    <div class="col-12 p-0 text-center">
                        <h1 v-bind:class="[tourModule.country=='Украина' ? 'active' : '', 'title']" @click="chooseUkraine">Украина</h1>
                    </div>
                </div>
            </div>
            <div class="col-md-2 d-md-block d-none">
                <div class="row m-auto align-items-center justify-content-center text-center" style="width: 100%; height: 100%">
                    <img src="/images/plane.png" style="width: 80px; height: 80px" :class="[tourModule.country=='Украина' ? 'left' : 'right', 'switch']" @click="toggleChoice"/>
                </div>
            </div>
            <div class="col-md-5 col-sm-6 col-6 p-0">
                <div class="row m-auto align-items-center justify-content-center text-center" style="width: 100%; height: 100%">
                    <div class="col-12 p-0">
                        <img v-if="tourModule.country=='Россия'" src="/images/russia1.png" style="max-width:250px; width: 90%; cursor: pointer;min-width: 160px" @click="chooseRussia"/>
                        <img v-else src="/images/russia0.png" style="max-width:250px; width: 90%;cursor: pointer;min-width: 160px" @click="chooseRussia"/>
                    </div>
                    <div class="col-12 p-0 text-center">
                        <h1 v-bind:class="[tourModule.country=='Россия' ? 'active' : '', 'title']" @click="chooseRussia">Россия</h1>
                    </div>
                </div>
            </div>
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
        },
        methods:
        {
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
    @media screen and (max-width: 576px) {
        .country-choice {
            width: 100% !important;
        }
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
</style>
