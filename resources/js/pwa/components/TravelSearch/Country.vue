<template>
    <div class="section mt-5 mb-5">
        <h4 class="section-title">Выбираем страну вылета</h4>
        <p>Для начала стоит определиться с местом отправления</p>
        <div class="row mt-2">
            <div class="col-6" @click="country=0">
                <div class="country-block">
                    <img v-lazy="'/img/travel/ukraine1.png'" alt="" class="img-fluid rounded-country country-checked"
                         v-if="country===0">
                    <img v-lazy="'/img/travel/ukraine0.png'" alt="" class="img-fluid rounded-country" v-else>
                    <h4 class="country-title">Украина</h4>
                </div>
            </div>
            <div class="col-6" @click="country=1">
                <div class="country-block">
                    <img v-lazy="'/img/travel/russia1.png'" alt="" class="img-fluid rounded-country country-checked"
                         v-if="country===1">
                    <img v-lazy="'/img/travel/russia0.png'" alt="" class="img-fluid rounded-country" v-else>
                    <h4 class="country-title">Россия</h4>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                country: 0,
            }
        }
    }
</script>

<style lang="scss">

    .country-block {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .rounded-country {
        filter: drop-shadow(2px 1px 6px white);
    }

    .input-list .custom-control:after {
        content: none !important;;
    }

    .country-section {
        padding: 50px 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }


    .country-title {
        text-align: center;
        color: white;
        z-index: 1;

        font-weight: 900;
        text-transform: uppercase;

        position: absolute;
        width: 100%;

        /* margin-top: -60px; */

        font-size: 16px;
        bottom: 20px;

    }

    .country-checked ~ .country-title {
        color: orange;
    }
</style>
