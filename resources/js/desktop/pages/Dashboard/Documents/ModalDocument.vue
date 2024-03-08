<template>
    <base-modal id="documentModal" title="Загрузить файл" :right_action="save" :left_action="exit" @close-modal="exit">
        <template #body>
            <base-select v-model="document.user_id" name="user_id" label="Клиент" :disabled="loading||clients_loading" rules="required"
                         :options="clients" option_label="full_name" :reduce="item=>item.id" @mounted="getClients"
                         searchable infinite
            />
            <base-select v-model="document.user_tour_id" name="user_id" label="Тур" :disabled="loading||tours_loading" rules="required"
                         :options="tours" option_label="title" :reduce="item=>item.id" @mounted="getTours"
                         searchable infinite
            />
        </template>
    </base-modal>
</template>

<script>
    const initialState = {
        user_id: null,
        // manager_id: null,
        user_tour_id: null,
        files: [],
    };
    export default {
        name: "ModalDocument",
        data() {
            return {
                document: initialState,
                loading: false,
            }
        },
        computed: {
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
            async save() {
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
                this.$store.commit('openModal', '#documentModal')
            },
            exit() {
                this.$store.commit('closeModal', '#documentModal');
            },
            getClients() {
                this.$store.dispatch('setClients');
            },
            getTours() {
                this.$store.dispatch('searchTours', {user_id: this.document.user_id}).then(resp => {

                });
            }
        }
    }
</script>

<style scoped>

</style>
