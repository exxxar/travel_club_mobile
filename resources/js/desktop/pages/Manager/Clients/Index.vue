<template>
    <b-container fluid>
        <div class="row w-100 my-3">
            <create></create>
        </div>
        <b-tabs content-class="mt-3">
            <b-tab title="Все" active>
                <user-table
                    :users="clients"
                    :loading="loading"
                    :totalRows="clientsTotalRows"
                />
            </b-tab>
<!--            <b-tab title="Удаленные">-->
<!--                <user-table-->
<!--                    :users="deleted_clients"-->
<!--                    :loading="loading"-->
<!--                    :totalRows="deletedClientsTotalRows"-->
<!--                />-->
<!--            </b-tab>-->
        </b-tabs>
    </b-container>
</template>

<script>
    import UserTable from '@/js/desktop/pages/Manager/Clients/Table'
    import Create from "./Create";
    export default {
        components: {
            UserTable, Create
        },
        data() {
            return {
                loading: false,
                clientsTotalRows: 0,
                deletedClientsTotalRows: 0
            }
        },
        computed: {
            clients: function () {
                return this.$store.getters.clients;
            },
            deleted_clients: function () {
                return this.$store.getters.deleted_clients;
            },
            managers() {
                return this.$store.getters.managers
            },
        },
        created() {
            if (this.managers.length===0)
            {
                this.$store.dispatch('setManagers')
            }
        },
        mounted() {
            if (this.clients.length<=0)
            {
                this.loadClients();
            }
        },
        methods: {
            async loadClients() {
                this.loading=true;
                await this.$store.dispatch('setClients').then(resp =>{
                    this.$store.commit('setClients', resp.data.users);
                    // this.$store.commit('setDeletedClients', resp.data.deleted_users);
                    this.clientsTotalRows =  resp.data.users.length;
                    // this.deletedUsersTotalRows =  resp.data.deleted_users.length;
                    this.loading = false;
                })
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Пользователи',
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
