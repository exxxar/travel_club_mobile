<template>
    <div class="tc-page container">
        <h1 class="tc-page__title">
            Новости
        </h1>
        <card-list :name="'Articles'" class="tc-wrapper-column tc-gap-column-medium" no_infinite
                   :current_component="'CardArticle'" :loading="loading"
        >
            <template #actions>
                <base-button class="ms-auto" @click="createArticle">Создать</base-button>
            </template>
        </card-list>
    </div>
</template>

<script>
    import CardArticle from "./Card";
    export default {
        name: "News",
        components:{CardArticle},
        computed: {
            loading() {
                return this.$store.getters.loading_user
            }
        },
        methods: {
            createArticle() {
                this.$router.push({name:'dashboard-news-create'});
            }
        }
    }
</script>

<style scoped>

</style>
