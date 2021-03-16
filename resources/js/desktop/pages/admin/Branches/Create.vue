<template>
    <div>
        <b-modal id="new-branch" scrollable centered title="Создать новый филиал">
            <div class="row m-auto w-100 justify-content-center align-items-start" style="min-height: 210px">
                <div class="col-12">
                    <b-form-group label="Страна" class="mb-0">
                        <multiselect
                            v-model="new_branch.country"
                            :options="countries"
                            :option-height="25"
                            placeholder="Выберете страну"
                            :show-labels="false"
                            :maxHeight="150"
                            label="Name"
                            track-by="Name"
                            :loading="isCountriesLoading"
                            :disabled="isCountriesLoading"
                            :allow-empty="false"
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
                    </b-form-group>
                </div>
                <div class="col-12">
                    <b-form-group label="Город" class="mb-0">
                        <b-form-input
                            v-model="new_branch.city"
                            :placeholder="'Введите город'"
                            class="travel-input"
                        >
                        </b-form-input>
                    </b-form-group>
                </div>
            </div>

            <template v-slot:modal-footer>
                <div class="w-100">
                    <b-button
                        variant="primary"
                        class="float-right btn-travel"
                        @click="createBranch"
                        :disabled="new_branch.country==='' || new_branch.city===''"
                    >
                        <div class="row align-items-center justify-content-center m-auto w-100 h-100 text-center">
                            <span v-if="loading" class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                            <span v-if="loading" class="sr-only">Loading...</span>
                            Сохранить
                        </div>
                    </b-button>
                    <b-button
                        variant="primary"
                        class="float-right mr-2 btn-travel"
                        @click="cancel"
                    >
                        Отмена
                    </b-button>
                </div>
            </template>
        </b-modal>
        <b-button variant="primary" class="w-100 btn-travel" v-b-modal.new-branch>Создать филиал</b-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,

                new_branch: {
                    country: '',
                    country_alias: '',
                    city:'',
                },
                template: null,
            }
        },
        computed:{
            countries() {
                return this.$store.getters.countries;
            },
            isCountriesLoading() {
                return this.$store.getters.isCountriesLoading;
            },
            isCitiesLoading() {
                return this.$store.getters.isCitiesLoading;
            },
        },
        created() {
            this.$store.dispatch('getCountries', {town_id:0});
        },
        mounted() {
            this.template = JSON.parse(JSON.stringify(this.new_branch));
        },
        methods:{
            createBranch(){
                this.loading=true;
                this.new_branch.country_alias = this.new_branch.country.Alias;
                this.new_branch.country = this.new_branch.country.Name;

                this.$store.dispatch('addBranch', this.new_branch).then(resp =>{
                    this.sendMessage('Филиал успешно сохранён')
                    this.loading=false;
                    this.$bvModal.hide("new-branch");
                });
            },
            cancel(){
                this.$bvModal.hide("new-branch");
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Филиалы',
                    text: message
                });
            },
        }
    }
</script>

<style scoped>
    .btn-travel{
        background: #e17e4e;
        background-color: rgb(225, 126, 78);
        background-position-x: 0%;
        background-position-y: 0%;
        background-image: none;
        background-size: auto;
        background-image: linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e);
        background-size: 210% 210%;
        background-position: top right;
        background-color: #e17e4e;
        transition: all 0.15s ease;
        box-shadow: none;
        color: #ffffff;
        max-width: 300px;
        border: none;
    }
</style>
<style>
    /*.multiselect-title {*/
    /*    color: #062348 !important;*/
    /*    font-family: "Bello Pro";*/
    /*    !*font-weight: 700;*!*/
    /*}*/
    /*.multiselect__tags {*/
    /*    border: 1px solid #f08b23;*/
    /*    border-radius: 20px;*/
    /*    font-size: 1rem;*/
    /*    min-height: 40px;*/
    /*}*/
    /*.multiselect__tag {*/
    /*    background: #062348;*/
    /*}*/
    /*.multiselect__tag-icon::after {*/
    /*    color:#fff;*/
    /*}*/
    /*.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {*/
    /*    background: #f08b23;*/
    /*}*/
    /*.multiselect__option--highlight::after {*/
    /*    background: #f08b23;*/
    /*}*/
    /*.multiselect__option--highlight{*/
    /*    background: #f08b23;*/
    /*}*/
    /*.multiselect{*/
    /*    color: #062348;*/
    /*    font-family: "Open Sans" !important;*/
    /*    font-weight: 900;*/
    /*}*/
    /*.multiselect__placeholder {*/
    /*    color: #062348;*/
    /*}*/
    /*.multiselect__input:focus, .multiselect__single:focus {*/
    /*    border-color: #062348;*/
    /*}*/
    /*.multiselect__input::placeholder {*/
    /*    color: #062348 !important;*/
    /*    font-family: Open Sans !important;*/
    /*    font-weight: 700;*/
    /*}*/
    /*.multiselect--disabled {*/
    /*    background: white;*/
    /*}*/
    /*.multiselect--disabled .multiselect__select {*/
    /*    background: transparent;*/
    /*}*/
    /*.multiselect__spinner::after, .multiselect__spinner::before {*/
    /*    position: absolute;*/
    /*    content: "";*/
    /*    top: 50%;*/
    /*    left: 50%;*/
    /*    margin: -8px 0 0 -8px;*/
    /*    width: 16px;*/
    /*    height: 16px;*/
    /*    border-radius: 100%;*/
    /*    border: 3px solid transparent;*/
    /*    border-top-color: transparent;*/
    /*    border-top-color: #ffa500;*/
    /*    box-shadow: 0 0 0 1px transparent;*/
    /*    background: transparent;*/
    /*}*/
    /*.multiselect__spinner{*/
    /*    border-radius: 50px;*/
    /*}*/
</style>
