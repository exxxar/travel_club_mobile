<template>
    <div class="section country-section">
        <h4 class="section-title">Выбираем страну вылета</h4>
        <p>Для начала стоит определиться с местом отправления</p>
        <div class="row mt-2">
            <div class="col-6">
                <img src="/img/travel/ukraine1.png" alt="" class="img-fluid rounded-country" v-if="country===0">
                <img src="/img/travel/ukraine0.png" alt="" class="img-fluid rounded-country" v-else>
            </div>
            <div class="col-6">
                <img src="/img/travel/russia1.png" alt="" class="img-fluid rounded-country" v-if="country===1">
                <img src="/img/travel/russia0.png" alt="" class="img-fluid rounded-country" v-else>
            </div>
        </div>

        <div class="input-list mt-2">
            <div class="custom-control custom-radio custom-radio-country">
                <input type="radio" id="radio-country-1" name="radio-country" class="custom-control-input "
                       @click="country=0" checked>
                <label class="custom-control-label" for="radio-country-1">Украина</label>
            </div>
            <div class="custom-control custom-radio custom-radio-country">
                <input type="radio" id="radio-country-2" name="radio-country" class="custom-control-input custom-radio-country"
                       @click="country=1">
                <label class="custom-control-label" for="radio-country-2">Россия</label>
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

    .rounded-country {
        border-radius: 115px !important;
    }
    .country-section {
        height: 100vh;
        padding: 0 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .custom-radio-country {

        background: orange;
        border-radius: 30px;
        color: white;
        margin-bottom: 9px;

        label {
            text-transform:uppercase;
            font-weight: 900;
        }
        input:checked ~ label{
            background: #001e48;
            border-radius: 30px;
            color: white;

            border: 4px orange solid;
        }

        input:not(:checked) ~ label {
            border-radius: 30px;
            border: 4px #001e48 solid;
        }

    }
</style>
