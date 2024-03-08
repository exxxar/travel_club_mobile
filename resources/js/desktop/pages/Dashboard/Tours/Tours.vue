<template>
    <div class="tc-page container" v-if="isLoggedIn && user">
        <h1 class="tc-page__title">
            Туры
        </h1>
<!--        <div class="tc-wrapper-column tc-gap-column-medium">-->
            <card-list :name="'Tours'" class="tc-wrapper-column tc-gap-column-medium" no_infinite
                       :fields="fields" :current_component="'CardTour'"
            >
                <template #actions>
<!--                    <div class="tc-card tc-wrapper">-->
                        <base-button class="ms-auto" data-bs-toggle="modal" data-bs-target="#tourModal" v-role="'manager|admin'">Создать тур</base-button>
<!--                    </div>-->
                </template>
            </card-list>
<!--        </div>-->
    </div>

</template>

<script>
    import CardTour from "./CardTour";
    import CardList from "../../../components/CardList";
    export default {
        name: "Tours",
        components: {CardTour, CardList},
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
                    {key: 'review', label: 'Отзыв', filterable: true,  filter_method:'isNull', clearable: true,
                        control:'select',
                        filterable_fields: [{text:'Есть отзыв', value: "not_null"},{text:'Нет отзыва', value: "null"}]
                    },
                    {key: 'status', label: 'Статус', filterable: true, filter_method:'ArrayObject', multiple: true,
                        control:'select',
                        filterable_fields: [
                            {text: 'Открыт', value: 'open'},
                            {text: 'Отменен', value: 'canceled'},
                            {text: 'Несостоялся', value: 'error'},
                            {text: 'Закрыт', value: 'closed'}
                        ]
                    },

                    // {key: 'created_at', label: 'Дата создания', filterable: true, filter_method:'isNull',
                    //     filterable_fields: [
                    //         {text:'Заблокирован', value: 'not_null'},
                    //         {text:'Не заблокирован', value: 'null'}
                    //     ]
                    // },
                ],
                method_name: 'getTours'
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            },
            user() {
                return this.$store.getters.user
            },
        },
    }
</script>

<style scoped>

</style>
