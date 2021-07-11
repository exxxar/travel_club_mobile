<template>
    <div class="container">

        <div class="row mt-2" v-if="checkCodeAuth">
            <div class="col-md-8">
                <form v-on:submit.prevent="!selected?save():update()">
                    <h4>Редактор новостей</h4>
                    <div class="row mt-2">
                        <div class="col-sm-12">
                            <h6 class="mt-2">Заголовок новости</h6>
                            <input type="text" class="form-control" placeholder="Введите заголовок" v-model="title"
                                   required>
                            <h6 class="mt-2">Подзаголовок новости</h6>
                            <input type="text" class="form-control" placeholder="Введите подзаголовок"
                                   v-model="subtitle" required>
                            <h6 class="mt-2">Имя автора</h6>
                            <input type="text" class="form-control" placeholder="Введите имя автора" v-model="author"
                                   required>
                            <h6 class="mt-2">Отложенная дата публикации</h6>
                            <input type="datetime-local" class="form-control" placeholder="Введите дату публикации"
                                   v-model="publish_at" required>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-12">
                            <vue-editor
                                v-model="content">
                            </vue-editor>
                        </div>

                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-4 col-12">
                            <button type="submit" class="btn btn-outline-primary w-100" v-if="!selected">Добавить
                                новость
                            </button>
                            <button type="submit" class="btn btn-outline-primary w-100 mb-2" v-if="selected">Обновить
                            </button>

                        </div>

                        <div class="col-sm-4 col-12">
                            <button class="btn btn-outline-warning w-100" @click="cancel" v-if="selected">Отмена
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <h4>Последние 20 новостей</h4>
                <div class="row mb-2">
                    <div class="col-12">
                        <input type="search" v-model="search" class="form-control w-100"
                               placeholder="Поиск по новостям">
                    </div>
                </div>
                <ul class="list-group simple-list-group">
                    <li class="list-group-item" :key="article.id" v-for="article in filteredArticles">
                        <h6>Новость #{{article.id}} </h6>
                        <p><small>Дата добавления <strong>{{new Date(article.created_at)}}</strong></small></p>
                        <hr>
                        <h5>{{article.title}}</h5>
                        <h6>{{article.subtitle}}</h6>
                        <p><small>Автор: <strong>{{article.author}}</strong></small></p>
                        <p v-if="article.publish_at"><small>Дата публикации: <strong>{{new
                            Date(article.publish_at)}}</strong></small></p>
                        <p class="simple-news" v-html="article.content"></p>
                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-outline-primary w-100" @click="select(article)">Редактировать
                                </button>
                            </div>
                            <div class="col-6">
                                <button class="btn btn-outline-primary  w-100" @click="remove(article.id)">Удалить
                                </button>
                            </div>
                        </div>

                    </li>

                </ul>
                <nav aria-label="Page navigation" class="mt-2">
                    <ul class="pagination" v-if="paginate">

                        <li class="page-item" v-if="paginate.current_page>1">
                            <a class="page-link" href="#" aria-label="First" @click="goToPage(1)">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>

                        <li class="page-item" v-for="page in filteredPaginate"
                            :class="{'active':page===paginate.current_page}"><a class="page-link" href="#"
                                                                                @click="goToPage(page)">{{page}}</a>
                        </li>


                        <li class="page-item" v-if="paginate.current_page!=paginate.last_page">
                            <a class="page-link" href="#" aria-label="Last" @click="goToPage(paginate.last_page)">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>

                    </ul>
                </nav>

            </div>
        </div>


        <div class="row d-flex justify-content-center mt-2" v-if="!checkCodeAuth&&message">

            <div class="col-12 col-md-6">
                <div class="alert alert-danger" role="alert">
                    {{message}}
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-2" v-if="!checkCodeAuth">
            <div class="col-12 col-md-6">
                <input type="text" class="form-control" v-model="code" placeholder="Код авторизации">
            </div>
        </div>

        <div class="row d-flex justify-content-center mt-2" v-if="!checkCodeAuth">
            <div class="col-12 col-md-6">
                <button class="btn btn-primary w-100" @click="auth">Вперед</button>
            </div>
        </div>

    </div>
</template>
<script>
    import {VueEditor} from 'vue2-editor'


    export default {
        components: {
            VueEditor
        },
        computed: {
            checkCodeAuth: function () {
                return localStorage.getItem("is_code_auth") || this.isAuth;

            },
            filteredPaginate: function () {


                let last_page = this.paginate.last_page
                let current_page = this.paginate.current_page
                let total = this.paginate.total
                let per_page = this.paginate.per_page
                let pages = []


                let min = Math.max(current_page - 5, 1)
                let max = Math.min(current_page + 5, last_page + 1)

                for (let i = min; i < max; i++)
                    pages.push(i)

                return pages;
            },
            filteredArticles: function () {
                if (!this.search)
                    return this.articles

                return this.articles.filter(item => item.content.indexOf(this.search) != -1)
            }
        },

        data() {
            return {
                isAuth: false,
                paginate: {},
                selected: null,
                search: null,
                articles: [],
                content: '<h1>Напиши свою новость</h1>',
                title: '',
                subtitle: '',
                author: '',
                publish_at: null,
                code: null,
                message: null,
            }
        },

        mounted() {
            this.load()
        },
        methods: {
            auth() {
                axios.post("https://travel-club.tours/api/admin/v1/article-auth", {
                    code: this.code
                }).then(resp => {
                    console.log(resp)
                    this.isAuth = resp.data.is_auth


                    if (!this.isAuth)
                        this.message = "Ошибка авторизации!"

                    if (this.isAuth)
                        localStorage.setItem("is_code_auth", true)
                })
            },
            select(item) {
                this.selected = item
                this.content = this.selected.content
                this.title = this.selected.title
                this.subtitle = this.selected.subtitle
                this.author = this.selected.author

                let isoStr = new Date(this.selected.publish_at).toISOString()
                this.publish_at = isoStr.substring(0, isoStr.length - 1);

            },
            update() {
                axios.put(`https://travel-club.tours/api/admin/v1/update/${this.selected.id}`, {
                    content: this.content,
                    title: this.title,
                    subtitle: this.subtitle,
                    author: this.author,
                    publish_at: this.publish_at,
                }).then(resp => {
                    window.location.reload()
                })
            },
            cancel() {
                this.selected = null;
                this.content = null;
                this.title = null;
                this.subtitle = null;
                this.author = null;
                this.publish_at = null;
            },
            load(page = 1) {
                axios.get(`https://travel-club.tours/api/admin/v1/list?page=${page}`).then(resp => {
                    console.log(resp)
                    this.paginate = resp.data

                    this.articles = resp.data.data

                    delete this.paginate.data
                })
            },
            goToPage(page) {
                this.load(page)
            },
            remove(id) {
                axios.delete(`https://travel-club.tours/api/admin/v1/remove/${id}`).then(resp => {
                    window.location.reload()
                })
            },
            save() {
                axios.post("/store", {
                    content: this.content,
                    title: this.title,
                    subtitle: this.subtitle,
                    author: this.author,
                    publish_at: this.publish_at
                }).then(resp => {
                    window.location.reload()
                })
            }
        }

    }
</script>
<style lang="scss">

    .quillWrapper {
        max-height: 500px;


        #quill-container {
            max-height: 400px;
            overflow-y: scroll;
        }
    }

    .simple-news {
        width: 100%;
        max-height: 100px;
        white-space: nowrap; /* Запрещаем перенос строк */
        overflow: hidden; /* Обрезаем все, что не помещается в область */
        text-overflow: ellipsis; /* Добавляем многоточие */

        & > * {
            font-size: 10px;

        }

        & img {
            width: 100%;
        }
    }

    .simple-list-group {
        height: 540px;
        overflow-y: scroll;
    }
</style>
