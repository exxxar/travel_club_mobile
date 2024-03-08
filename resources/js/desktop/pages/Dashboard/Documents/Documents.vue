<template>
    <div class="tc-page container" v-if="isLoggedIn">
        <h1 class="tc-page__title">
            Документы
        </h1>
        <card-list :name="'Documents'" class="tc-wrapper-column tc-gap-column-medium" no_infinite
                   :fields="fields" :current_component="'CardDocument'" :loading="loading"
        >
            <template #actions>
                <base-button class="ms-auto" data-bs-toggle="modal" data-bs-target="#documentModal" v-role="'manager|admin'">Загрузить документ</base-button>
            </template>
        </card-list>
    </div>
</template>

<script>
    import CardList from "../../../components/CardList";
    export default {
        name: "Documents",
        components: {CardList},
        data() {
            return {
                fields: [
                    //example of nested object
                    // {key: 'test.name', label: 'Test', filterable: true, filter_method:'Object',
                    //     filterable_fields: [{text:'Apple', value: "appleIdToken"},{text:'Google', value: "googleIdToken"}]
                    // },
                    {key: 'id', label: 'ID', searchable:true, sortable: true,
                        sortable_fields: [
                            {text:'По возрастанию', value: 'asc'},
                            {text:'По убыванию', value: 'desc'},
                        ]
                    },
                    {key: 'title', label: 'Имя', searchable:true, sortable: true,
                        sortable_fields: [{text:'От А до Я', value: 'asc'},{text:'От Я до А', value: 'desc'},]
                    },
                    {key: 'created_at', label: 'Дата создания', searchable:true, sortable: true,
                        sortable_fields: [{text:'По возрастанию', value: 'asc'},{text:'По убыванию', value: 'desc'},]
                    },
                ]
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            },
            user() {
                return this.$store.getters.user
            },
            loading() {
                return this.$store.getters.loading_user
            }
        },
    }
</script>

<style scoped>

</style>
