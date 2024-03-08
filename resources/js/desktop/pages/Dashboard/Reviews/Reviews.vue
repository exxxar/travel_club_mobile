<template>
    <div class="tc-page container" v-if="isLoggedIn">
        <h1 class="tc-page__title">
            Отзывы
        </h1>
        <card-list :name="'Reviews'" class="tc-wrapper-column tc-gap-column-medium" no_infinite
                   :fields="fields" :current_component="'CardReview'" :loading="loading"
        >
        </card-list>
    </div>
</template>

<script>
    import CardList from "../../../components/CardList";
    import CardReview from "./CardReview";
    export default {
        name: "Reviews",
        components: {CardList, CardReview},
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
                    {key: 'client', label: 'Клиент', searchable:true, sortable: true,
                        sortable_fields: [{text:'От А до Я', value: 'asc'},{text:'От Я до А', value: 'desc'},]
                    },
                    {key: 'published_at', label: 'Дата публикации', searchable:true, sortable: true,
                        sortable_fields: [{text:'По возрастанию', value: 'asc'},{text:'По убыванию', value: 'desc'},]
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
            loading() {
                return this.$store.getters.reviews_loading
            }
        },
    }
</script>

<style scoped>

</style>
