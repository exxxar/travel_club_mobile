<template>
    <b-container fluid>
        <div class="row w-100 my-3">
            <b-button variant="primary" class="btn-travel" @click="toCreateTour">Создать тур</b-button>
<!--            <create></create>-->
        </div>
        <div class="row w-100 mt-3">
            <user-table
                :tours="client.tours"
                :loading="loading"
                :totalRows="toursTotalRows"
            />
        </div>
    </b-container>
</template>

<script>
    import UserTable from '@/js/desktop/pages/Manager/Tours/Table'
    // import Create from "./Create";
    export default {
        components: {
            UserTable,
            // Create
        },
        data() {
            return {
                loading: false,
                toursTotalRows: 0,
                deletedToursTotalRows: 0,
                current_client: {},
                clientTours:[],
            }
        },
        computed: {
            menu() {
                return this.$store.getters.menu
            },
            isAdmin : function(){ return this.$store.getters.isAdmin},
            isManager : function(){ return this.$store.getters.isManager},
            clients() {
                return this.$store.getters.clients
            },
            client() {
                return this.current_client
            },
            managers() {
                return this.$store.getters.managers
            },
            manager() {
                return this.current_manager
            },
            tourModule() {
                return this.$store.getters.tourModule
            },
            countries() {
                return this.$store.getters.countries;
            },
            cities() {
                return this.$store.getters.cities;
            },
            hotels() {
                return this.$store.getters.hotels;
            },
            branches(){
                return this.$store.getters.branches
            },

            //loadings
            isCountriesLoading() {
                return this.$store.getters.isCountriesLoading;
            },
            isCitiesLoading() {
                return this.$store.getters.isCitiesLoading;
            },
            isHotelsLoading() {
                return this.$store.getters.isHotelsLoading;
            },
        },
        created() {
            if (this.countries.length===0) {
                this.$store.dispatch('getCountries', {town_id:0});
            }
            if (this.clients.length>0) {
                this.loading = true;
                this.current_client = this.clients.find((client) => client.id == this.$route.params.id);
                this.loading = false;
            } else {
                this.getClient();
            }
        },
        mounted() {

        },
        methods: {
            toCreateTour() {
                if(this.isAdmin){
                    this.$router.push('/admin/client-tours/'+this.$route.params.id+'/create')
                }
                if(this.isManager){
                    this.$router.push('/manager/client-tours/'+this.$route.params.id+'/create')
                }
            },
            async getClient() {
                this.loading = true;
                await this.$store.dispatch('setClients').then(resp => {
                    this.$store.commit('setClients', resp.data.users);
                    this.$store.commit('setDeletedClients', resp.data.deleted_users);
                    this.current_client = this.clients.find((client) => client.id == this.$route.params.id);
                    this.toursTotalRows =  this.current_client.tours.length;
                    this.loading = false;
                })
            },

            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Туры пользователей',
                    text: message
                });
            },
        }


    }
</script>

<style>
.nav-link {
   color: #f08b23;
}
.nav-link:hover {
   color: #0d274b;
}
</style>
