<template>
    <!-- App Capsule -->
    <div id="appCapsule">

        <div class="section full mt-2" >
            <h1 class="section-title">Последние 20 новостей</h1>
            <div class="card article" v-for="article in articles">
                <div class="card-body">
            <news-item-block :article="article" />

                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                articles: []
            }
        },
        mounted() {
            this.loadNews()
        },
        methods: {
            loadNews() {
                axios.get("/all-news").then(resp => {
                    this.articles = resp.data
                })
            }
        }
    }
</script>
