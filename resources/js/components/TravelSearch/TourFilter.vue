<template>
    <div class="section mb-2" style="height:100vh">
        <div class="section-title">Поиск тура</div>

        <h4 class="multiselect-title">Куда</h4>
        <multiselect
            v-model="resort_country"
            :options="countries"
            :option-height="25"
            placeholder="Выберете страну"
            :show-labels="false"
            :maxHeight="200"
            label="Name"
            track-by="Name"
            :loading="isCountriesLoading"
            :disabled="isCountriesLoading"
            :allow-empty="false"
            @input="chooseResortCountry"
        >
            <template slot="singleLabel" slot-scope="props">
                <b :class="'slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_'+props.option.Id"></b>
                <span class="option__desc">
                                <span class="option__title">{{ props.option.Name }}</span>
                            </span>
            </template>
            <template slot="option" slot-scope="props">
                <b :class="'slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_'+props.option.Id"></b>
                <span class="option__desc">
                                <span class="option__title">{{ props.option.Name }}</span>
                            </span>
            </template>
        </multiselect>



    </div>
</template>
<script>
    import Multiselect from 'vue-multiselect'

    export default {
        components: {Multiselect},
        data() {
            return {
                resort_country: null ,
                resorts:[] ,
                chosen_hotels: [] ,
                chosen_tour_operators: [] ,
                adults:1,
                children:0,
                nights:[],
                price_from:null,
                price_to:null,
                nights_from: 1,
                nights_to: 10,
                start:new Date(),
                end: new Date((new Date).setDate((new Date).getDate() + 7)),
                meals: [
                    { name: 'Vue.js', language: 'JavaScript' },
                    { name: 'Rails', language: 'Ruby' },
                    { name: 'Sinatra', language: 'Ruby' },
                    { name: 'Laravel', language: 'PHP' },
                    { name: 'Phoenix', language: 'Elixir' }
                ],
            }
        }
    }
</script>
