<template>
    <b-container fluid>
        <b-tabs content-class="mt-3 w-100">
            <b-tab title="Все" active>
                <messages-table
                    :messages="messages"
                    :loading="loading"
                    :totalRows="messagesTotalRows"
                />
            </b-tab>
            <b-tab title="Удаленные">
                <messages-table
                    :messages="deleted_messages"
                    :loading="loading"
                    :totalRows="deletedMessagesTotalRows"
                />
            </b-tab>
        </b-tabs>
    </b-container>
</template>

<script>
    import MessagesTable from '@/js/desktop/pages/Manager/Messages/Table'
    export default {
        components: {
            MessagesTable,
        },
        data() {
            return {
                loading: false,
                messagesTotalRows: 0,
                deletedMessagesTotalRows: 0,
            }
        },
        computed: {
            menu() {
                return this.$store.getters.menu
            },
            isAdmin : function(){ return this.$store.getters.isAdmin},
            isManager : function(){ return this.$store.getters.isManager},
            messages() {
                return this.$store.getters.messages
            },
            deleted_messages() {
                return this.$store.getters.deleted_messages
            },

        },
        created() {
            if (this.messages.length<=0) {
                this.setMessages();
            }
        },
        mounted() {

        },
        methods: {
            async setMessages(){
                this.loading=true;
                if(this.messages.length<=0){
                    await this.$store.dispatch('setMessages').then(() => {
                        this.messagesTotalRows = this.messages.length;
                        this.deletedMessagesTotalRows = this.deleted_messages.length;
                        this.loading = false;
                    })
                }
                this.loading = false;
            },
            verifyManager(id){
                this.$store.dispatch('saveUser', {id:id, value:1, key:'is_manager'})
            },
            unverifyManager(id){
                this.$store.dispatch('saveUser', {id:id, value:0, key:'is_manager'})
            },
            sendMessage(message) {

                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от ВПУТЬ',
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
