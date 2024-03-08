<template>
    <base-modal id="tourModal" :title="(mode === 'new' ? 'Создать' :'Редактировать')+' тур'"
                :right_action="saveTour" :left_action="exit" @close-modal="exit"
    >
        <template #body>
            <base-input v-model="tour.title" name="title" label="Название" :disabled="loading" rules="required"/>
            <base-select v-model="tour.country" name="country" label="Страна" :disabled="loading" rules="required"
                          :options="countries" option_label="Name" :loading="countries_loading" @mounted="getCountries"
                         :reduce="item=>item.Name"
            />
            <base-input v-model="tour.city" name="city" label="Город" :disabled="loading"/>
            <base-select v-model="tour.status" name="status" label="Статус" :disabled="loading" rules="required"
                          :options="statuses" option_label="text" :reduce="item=>item.value"
            />
            <base-select v-model="tour.user_id" name="user_id" label="Клиент" :disabled="loading||clients_loading" rules="required"
                         :options="clients" option_label="full_name" :reduce="item=>item.id" method_name="setClients" @mounted="getClients"
                         :pagination="clients_pagination"
                         infinite
            />
            <base-textarea v-model="tour.description" name="description" label="Описание" :disabled="loading"/>
        </template>
    </base-modal>
</template>

<script>
    const initialState = {
        user_id: null,
        manager_id: null,
        title: '',
        country: '',
        city: '',
        description: '',
        type: '',
        status: '',
        is_archived: false,
        params: null,
        start_at: '',
        end_at: ''
    };
    export default {
        name: "TourModal",
        data() {
            return {
                tour: initialState,
                statuses: [
                    {text: 'Открыт', value: 'open'},
                    {text: 'Отменен', value: 'canceled'},
                    {text: 'Несостоялся', value: 'error'},
                    {text: 'Закрыт', value: 'closed'},
                    // {text: '', value: ''},
                ],
                loading: false,
                mode:'new',
            }
        },
        computed: {
            selected_tour() {
                return this.$store.getters.selected_tour;
            },
            countries() {
                return this.$store.getters.countries;
            },
            countries_loading() {
                return this.$store.getters.isCountriesLoading;
            },
            clients() {
                return this.$store.getters.clients;
            },
            clients_loading() {
                return this.$store.getters.clients_loading;
            },
            clients_pagination() {
                return this.$store.getters.clients_pagination;
            },
        },
        watch: {
            'selected_tour': function(newVal, oldVal) {
                if(newVal !== null) {
                    this.setData('update')
                }
                else {
                    this.setData('new')
                }
            },
        },
        methods: {
            setData(mode='new') {
                this.mode = mode;
                if(mode === 'update')
                {
                    this.tour = JSON.parse(JSON.stringify(this.selected_tour));
                }
                else {
                    this.tour = JSON.parse(JSON.stringify(initialState));
                }
            },
            async saveTour() {
                this.loading = true;
                await this.$store.dispatch(this.mode + 'Tour', this.tour)
                    .then((response) => {
                        this.loading = false;
                        this.exit();
                    }).catch(error => {
                        this.loading = false;
                    })
            },
            open() {
                this.$store.commit('openModal', '#tourModal')
            },
            exit() {
                this.tour = JSON.parse(JSON.stringify(initialState));
                this.$store.commit('closeModal', '#tourModal');
                this.$store.commit('setTour' , null);
            },
            getCountries() {
                this.$store.dispatch('getCountries', {town_id:0});
            },
            getClients() {
                this.$store.dispatch('setClients');
            }
        }
    }
</script>

<style scoped>

</style>
