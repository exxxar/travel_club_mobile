<template>
    <!-- App Capsule -->
    <div id="appCapsule" style="padding-top: 0px">

        <div class="section full mt-2" v-if="article">
            <div class="card article" style="box-shadow: none">
                <div class="card-body">
                    <news-single-item-block :article="article"/>
                </div>
            </div>
        </div>

        <div class="section full mt-2" v-else>
            <h3>Новость еще не добавлена</h3>
            <img v-lazy="'/img/logo.png'" class="w-100">
        </div>


        <div class="appFooter">

            <a href="/">
                <img v-lazy="'/img/logo.png'" alt="icon" class="footer-logo mb-2">
            </a>



            <div class="mt-2">

                <a href="https://t.me/travelclubtours" rel="noreferrer" target="_blank"
                   class="btn btn-icon btn-lg btn-twitter" aria-label="Ссылка на телеграм">
                    <i class="fab fa-telegram-plane"></i>
                </a>

                <a href="https://www.instagram.com/travelclub_tours" rel="noreferrer" target="_blank"
                   class="btn btn-icon btn-lg btn-instagram" aria-label="Ссылка на инстаграм">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://invite.viber.com/?g2=AQBfafsk6TeJiEi4vi0HBbxlHq6j9KfenRbLYssiFJrvfsZPLMirR07MSoBBPQpR"
                   target="_blank" rel="noreferrer" class="btn btn-icon btn-lg btn-whatsapp"
                   aria-label="Ссылка на вотсап">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <a href="#" rel="noreferrer" class="btn btn-icon btn-lg btn-secondary goTop"
                   aria-label="Переход к верху сайта">
                    <i class="fas fa-arrow-up"></i>
                </a>
            </div>


            <button type="button" class="btn btn-orange rounded mt-5" data-toggle="modal" data-target="#ContactModal"
                    aria-label="Модальное окно контактов">
                Наши контакты
            </button>

        </div>
    </div>
</template>
<script>
export default {
    props: {
        newsId: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            article: null
        }
    },
    mounted() {
        this.loadNews()
    },
    methods: {
        loadNews() {
            axios.get("/single-news/"+this.newsId).then(resp => {
                this.article = resp.data
            })
        }
    }
}
</script>
