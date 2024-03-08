<template>
    <div class="tc-page container" v-if="isLoggedIn && user">
        <h1 class="tc-page__title">
            {{$is('manager') ? 'Клиенты' : 'Пользователи'}}
        </h1>
        <card-list :name="'Users'" class="tc-wrapper-column tc-gap-column-medium" no_infinite :fields="fields">
            <template #list="{sortedItems, loading}">
                <base-table :fields="fields" :items="sortedItems" :loading="loading">
                    <template #head(tours_count)>
                        <div title="Кол-во туров">
                            <base-icon name="Location" color="orange" />
                        </div>
                    </template>
                    <template #head(documents_count)>
                        <div title="Кол-во документов">
                            <base-icon name="File" color="purple"/>
                        </div>
                    </template>
                    <template #cell(actions)="{item}">
                        <div class="tc-wrapper tc-gap-small">
                            <base-button @click="update(item.id)" icon bg="blue-lighter" title="Редактировать" class="tc-button-icon-small">
                                <base-icon name="Pencil" color="blue"/>
                            </base-button>
                            <base-button @click="remove(item.id)" icon bg="red-lighter" title="Удалить" class="tc-button-icon-small">
                                <base-icon name="Trash" color="red" :stroke="true" fill="transparent"/>
                            </base-button>
                        </div>
                    </template>
                </base-table>
            </template>
            <template #actions="{loading}">
                <base-button
                    class="ms-auto" data-bs-toggle="modal" data-bs-target="#modalUser" v-role="'manager|admin'"
                    :loading="loading" :title="'Создать ' + ($is('manager') ? 'клиента' : 'пользователя')"
                >
                    <span style="vertical-align: middle">
                        <base-icon name="Plus" v-if="!loading"></base-icon>
                    </span>
                    <span class="tc-d-down-md-none">
                        Создать {{$is('manager') ? 'клиента' : 'пользователя'}}
                    </span>
                </base-button>
            </template>
        </card-list>
    </div>
</template>

<script>
    import CardList from "../../../components/CardList";
    import BaseTable from "../../../components/Base/BaseTable";

    export default {
        name: "Users",
        components: {CardList, BaseTable},
        data() {
            return {
                fields: [
                    // sticky, draggable
                    //example of nested object
                    // {key: 'test.name', label: 'Test', filterable: true, filter_method:'Object',
                    //     filterable_fields: [{text:'Apple', value: "appleIdToken"},{text:'Google', value: "googleIdToken"}]
                    // },
                    {
                        key: 'id', label: 'ID', searchable: true, sortable: true, draggable: false,
                        sortable_fields: [
                            {text: 'По возрастанию', value: 'asc'},
                            {text: 'По убыванию', value: 'desc'},
                        ]
                    },
                    // {
                    //     key: 'last_name', label: 'Фамилия', searchable: true, sortable: true,  draggable: true,
                    //     sortable_fields: [{text: 'От А до Я', value: 'asc'}, {text: 'От Я до А', value: 'desc'},]
                    // },
                    // {
                    //     key: 'first_name', label: 'Имя', searchable: true, sortable: true, draggable: false,
                    //     sortable_fields: [{text: 'От А до Я', value: 'asc'}, {text: 'От Я до А', value: 'desc'},]
                    // },
                    // {
                    //     key: 'middle_name', label: 'Отчество', searchable: true, sortable: true,
                    //     sortable_fields: [{text: 'От А до Я', value: 'asc'}, {text: 'От Я до А', value: 'desc'},]
                    // },
                    {
                        label: 'ФИО', active: true, key: 'fio',
                        subfields: [
                            {
                                key: 'last_name', label: 'Фамилия', searchable: true, sortable: true, draggable: true,
                                sortable_fields: [{text: 'От А до Я', value: 'asc'}, {
                                    text: 'От Я до А',
                                    value: 'desc'
                                },]
                            },
                            {
                                key: 'first_name', label: 'Имя', searchable: true, sortable: true, draggable: true,
                                sortable_fields: [{text: 'От А до Я', value: 'asc'}, {
                                    text: 'От Я до А',
                                    value: 'desc'
                                },]
                            },
                            {
                                key: 'middle_name', label: 'Отчество', searchable: true, sortable: true,
                                sortable_fields: [{text: 'От А до Я', value: 'asc'}, {
                                    text: 'От Я до А',
                                    value: 'desc'
                                },]
                            }
                        ]
                    },
                    {
                        key: 'email', label: 'Email', active: true
                    },
                    {
                        key: 'phone', label: 'Телефон', active: true
                    },
                    {
                        key: 'tours_count', label: 'Кол-во туров', active: true, sortable: true,
                        sortable_fields: [{text:'По возрастанию', value: 'asc'}, {text:'По убыванию', value: 'desc'}]
                    },
                    {
                        key: 'documents_count', label: 'Кол-во документов', active: true, sortable: true,
                        sortable_fields: [{text:'По возрастанию', value: 'asc'}, {text:'По убыванию', value: 'desc'}]
                    },

                    // {
                    //     key: 'roles', label: 'Роль', condition: this.$is('admin'),
                    //     formatter: (item, key) =>{
                    //         return item[key].map(role => role.name).join(', ')
                    //     }
                    // },
                    {
                        key: 'created_at', label: 'Дата создания', searchable: true, sortable: true,
                        sortable_fields: [{text: 'По возрастанию', value: 'asc'}, {text: 'По убыванию', value: 'desc'},]
                    },
                    {
                        key: 'actions', label: 'Действия'
                    },
                ],
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
        methods: {
            update(id) {

            },
            remove(id) {

            }
        }
    }
</script>

<style scoped>

</style>
