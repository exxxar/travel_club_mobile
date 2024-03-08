<template>
    <div class="tc-card">
        <div class="tc-wrapper tc-gap-medium align-items-center tc-wrapper-between">
            <div class="tc-wrapper tc-gap-medium tc-gap-down-sm-small align-items-center">
                <base-icon name="File" color="secondary" size="25px"/>
                <h6 class="mb-0">{{item.title}}</h6>
            </div>
            <div class="tc-wrapper tc-gap-medium tc-gap-down-sm-small align-items-center">
                <base-button icon bg="orange-lighter" title="Скачать">
                    <base-icon name="Download" title="Скачать" color="primary"/>
                </base-button>
                <base-button v-role="'manager|admin'" icon bg="red-lighter" title="Удалить">
                    <base-icon name="Trash" title="Удалить" color="red" :stroke="true" fill="transparent"/>
                </base-button>
            </div>
        </div>
        <template v-if="$is('manager|admin')">
            <hr/>
            <div class="tc-wrapper-between tc-gap-medium tc-gap-down-sm-small align-items-center">
            <div class="tc-wrapper tc-gap-medium tc-gap-down-sm-small align-items-center">
                <span class="tc-circle"></span>
                <router-link :to="'/dashboard/users/'+item.user_id" class="tc-card__subtitle" >
                    Клиент: {{item.user.full_name | empty_filter}}
                </router-link>
                <span class="tc-circle"></span>
                <router-link :to="'/dashboard/users/'+item.manager_id" class="tc-card__subtitle">
                    Менеджер: {{item.manager.full_name | empty_filter}}
                </router-link>
                <span class="tc-circle"></span>
                <template v-if="item.user_tour_id">
                    <router-link :to="'/dashboard/tour/'+item.user_tour_id" class="tc-card__subtitle">
                        Тур: {{item.tour.title | empty_filter}}
                    </router-link>
                    <span class="tc-circle"></span>
                </template>
            </div>
                <div class="tc-card__subtitle">
                    {{item.created_at | moment('HH:mm, DD.MM.YY')}}
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "CardDocument",
        props: ['item'],
    }
</script>

<style scoped>

</style>
