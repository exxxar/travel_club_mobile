<template>
    <div>
        <div id="client" class="row m-auto mb-4 justify-content-center align-items-center" style="width: 100%;height: 100%;">
            <data-table
                title="История заказов"
                :columns="columns"
                :rows="users"
                :perPage="[ 5, 10, 25, 50 ]"
                :expandMode="true"
                :tagBackgrounds="tags"
            >
                <template slot="expand-panel" slot-scope="props">
                    <p>{{props.row.name}}</p>
                </template>
            </data-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Orders",
        data: () => ({
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                },
                {
                    label: 'Дата',
                    field: 'name',
                },
                {
                    label: 'Имя',
                    field: 'name',
                    tagged: true
                },
                {
                    label: 'Телефон',
                    field: 'email',
                },
                {
                    label: 'Тип заказа',
                    field: 'email',
                },
            ],
            window: {
                width: 0,
                height: 0
            },
            countItems:3,
            tags: [
                {tag:'User', style:'background:blue; color:white;'}
            ],
            showModal: false,
            editItem: {}
        }),
        created() {
        },

        mounted() {
            this.$store.dispatch('setUsers')
        },
        computed:
        {
            menu() {
                return this.$store.getters.menu
            },
            users() {
                return this.$store.getters.users
            },
            preloader() {
                return this.$store.getters.preloader
            },
        },
        methods:
        {
        }
    }
</script>

<style scoped>

</style>
