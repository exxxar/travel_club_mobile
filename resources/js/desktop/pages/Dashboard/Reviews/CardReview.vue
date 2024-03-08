<template>
    <div class="tc-card tc-gap-medium">
        <div class="tc-wrapper">
            <div class="col-8 px-0">
                <h5 class="tc-card__title">{{item.topic ? item.topic : 'Отзыв №'+item.id}}</h5>
            </div>
            <div class="col-4 px-0">
                <div class="tc-badge" title="статус"
                     :class="item.is_approved ? 'tc-bg-green-lighter tc-text-green' : 'tc-bg-red-lighter tc-text-red'"
                >
                    {{item.is_approved ? 'Опубликован ' + item.published_at : 'Не опубликован'}}
                </div>
            </div>
        </div>
        <div class="tc-wrapper-between tc-wrapper-nowrap tc-gap-medium tc-gap-down-sm-small">
            <h6 class="tc-card__subtitle">
                <router-link
                    :to="'dashboard/clients/'+item.user.id"
                >
                    Клиент: {{item.user.full_name | empty_filter}}
                </router-link>
            </h6>
            <div>
                {{item.rate}}
                <star-rating :inline="true" :max-rating="1" :star-size="20" :read-only="true" :show-rating="false"/>
            </div>
        </div>
        <p class="tc-card__text">
            {{item.message | empty_filter}}
        </p>
        <div class="tc-wrapper tc-gap-medium tc-gap-down-sm-small align-items-center" v-if="!item.is_approved">
            <base-button v-role="'manager|admin'" icon bg="red-lighter" title="Опубликовать">
                Опубликовать
            </base-button>
        </div>
    </div>
</template>

<script>
    import StarRating from "vue-star-rating";

    export default {
        name: "CardReview",
        components: {
            StarRating
        },
        props: ['item'],
    }
</script>

<style scoped>

</style>
