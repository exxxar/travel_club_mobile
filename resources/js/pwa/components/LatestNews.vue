<template>
    <div class="section mt-3 mb-3" v-if="article!=null">


        <div class="card article mb-2">
            <div class="card-body">

                <h6 class="card-subtitle">Будь в тренде с нами</h6>
                <h5 class="card-title mb-2 d-flex align-items-center justify-content-between">
                    Актуальные новости TravelClub
                </h5>

        <news-item-block :article="article"/>
                <hr>
        <div class="section mt-2">
            <a href="https://travel-club.tours/m/all-news" aria-label="Начать прямо сейчас"
               class="btn btn-orange w-100"><i class="fas fa-arrow-right mr-2"></i>
                ВСЕ НОВОСТИ
            </a>
        </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                article: null
            }
        },
        mounted() {
            this.loadLatestNews()
        },
        methods: {
            loadLatestNews() {
                axios.get("/latest-news").then(resp => {
                    this.article = resp.data
                })
            }
        }
    }
</script>
<style lang="scss">
    .article {
        img {
            width: 100%;
        }
    }

    .ql-align-center {
        text-align: center;
    }
</style>
