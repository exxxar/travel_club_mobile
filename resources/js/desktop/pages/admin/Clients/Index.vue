<template>
    <b-container fluid>
        <div class="row w-100 my-3">
            <create></create>
        </div>
        <b-tabs content-class="mt-3">
            <b-tab title="Все" active>
                <user-table
                    :users="users"
                    :loading="loading"
                    :totalRows="usersTotalRows"
                />
            </b-tab>
            <b-tab title="Удаленные">
                <user-table
                    :users="deleted_users"
                    :loading="loading"
                    :totalRows="deletedUsersTotalRows"
                />
            </b-tab>
        </b-tabs>
    </b-container>
</template>

<script>
    import UserTable from '@/js/desktop/pages/admin/Clients/Table'
    import Create from "./Create";
    export default {
        components: {
            UserTable, Create
        },
        data() {
            return {
                loading: false,
                usersTotalRows: 0,
                deletedUsersTotalRows: 0
            }
        },
        computed: {
            users: function () {
                return this.$store.getters.users;
            },
            deleted_users: function () {
                return this.$store.getters.deleted_users;
            },
        },
        mounted() {
            if (this.users.length<=0)
            {
                this.loadUsers();
            }
        },
        methods: {
            async loadUsers() {
                this.loading=true;
                await this.$store.dispatch('setUsers').then(resp =>{
                    this.$store.commit('setUsers', resp.data.users);
                    this.$store.commit('setDeletedUsers',  resp.data.deleted_users);
                    this.usersTotalRows =  resp.data.users.length;
                    this.deletedUsersTotalRows =  resp.data.deleted_users.length;
                    this.loading = false;
                    var managers = resp.data.users.filter((user) => user.role=='manager')
                    this.$store.commit('setManagers', managers);
                    var clients = resp.data.users.filter((user) => user.role=='client')
                    this.$store.commit('setClients', clients);

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
