<template>
    <b-container fluid>
        <div class="row w-100 my-3">
            <b-button variant="primary" class="btn-travel" @click="toCreateOrder">Создать заказ</b-button>
        </div>
        <b-tabs content-class="mt-3">
            <b-tab title="Все" active>
                <orders-table
                    :orders="orders"
                    :loading="loading"
                    :totalRows="ordersTotalRows"
                />
            </b-tab>
            <b-tab title="Удаленные">
                <orders-table
                    :orders="deleted_orders"
                    :loading="loading"
                    :totalRows="deletedOrdersTotalRows"
                />
            </b-tab>
        </b-tabs>
    </b-container>
</template>

<script>
    import OrdersTable from '@/js/desktop/pages/Admin/Orders/Table'
    export default {
        components: {
            OrdersTable
        },
        data() {
            return {
                loading: false,
                ordersTotalRows: 0,
                deletedOrdersTotalRows: 0
            }
        },
        computed: {
            isAdmin : function() { return this.$store.getters.isAdmin},
            isManager : function() { return this.$store.getters.isManager},
            menu() {
                return this.$store.getters.menu
            },
            orders() {
                return this.$store.getters.moduleOrders
            },
            deleted_orders() {
                return this.$store.getters.deleted_moduleOrders
            },
            countries() {
                return this.$store.getters.countries;
            },
        },
        mounted() {
            if (this.orders.length===0) {
                this.loadModuleOrders()
            }
            if (this.countries.length===0) {
                this.$store.dispatch('getCountries', {town_id:0});
            }
        },
        methods: {
            async loadModuleOrders() {
                this.loading=true;
                await this.$store.dispatch('setModuleOrders').then(resp =>{
                    this.$store.commit('setModuleOrders', resp.data.orders);
                    this.$store.commit('setDeletedModuleOrders',  resp.data.deleted_moduleOrders);
                    this.ordersTotalRows =  resp.data.orders.length;
                    this.deletedUsersTotalRows =  resp.data.deleted_moduleOrders.length;
                    this.loading = false;
                })
            },
            toCreateOrder() {
                if(this.isAdmin){
                    this.$router.push('/admin/orders/create')
                }
                if(this.isManager){
                    this.$router.push('/manager/orders/create')
                }
            },
            editOrder(row) {
                this.editItem = row;
                this.editItem.module.start = new Date(this.editItem.module.date_range.start);
                this.editItem.module.end = new Date(this.editItem.module.date_range.end);
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от TravelClub',
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
