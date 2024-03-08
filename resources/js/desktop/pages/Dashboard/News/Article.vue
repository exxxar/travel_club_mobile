<template>
    <div class="tc-page container">
        <h1 class="tc-page__title" v-if="!initial_loading">
            {{item.id ? 'Редактировать' : 'Создать'}} новость
        </h1>
        <template v-if="!initial_loading">
            <ValidationObserver v-slot="{ invalid }" ref="observer" tag="div" class="tc-wrapper-column tc-gap-medium">
                <base-input name="title" label="Заголовок новости" placeholder="Введите заголовок" v-model="item.title" rules="required"/>
                <base-input name="subtitle" label="Подзаголовок новости" placeholder="Введите подзаголовок" v-model="item.subtitle" rules="required"/>
                <base-input name="author" label="Имя автора" placeholder="Введите имя автора" v-model="item.author" rules="required"/>

                <base-datepicker name="publish_at"  v-model="item.publish_at" label="Отложенная дата публикации" :singleDatePicker="true" auto-apply :min-date="today" timePicker/>
                <!--            <base-input name="publish_at" type="date-local" placeholder="Введите дату публикации" v-model="item.published_at" rules="required"/>-->
                <!--            <datepicker v-model="item.publish_at" name="return_date" :language="languages['ru']"></datepicker>-->
                <vue-editor v-model="item.content"/>

                <upload-file v-if="!item.id" v-model="item.files" multiple filePlace preview ref="upload"/>
                <template v-else>
                    <div class="tc-wrapper-column tc-gap-medium position-relative">
                        <hooper class="tc-slider" :itemsToShow="3" :infiniteScroll="true" v-if="item.files.length>0">
                            <slide v-for="file in item.files" :key="file.id">
                                <div class="tc-wrapper-column h-100 w-100 p-1">
                                    <img :src="file.preview" class="tc-card__image"
                                         style="width:100%; height: 130px; object-fit: cover;"/>
                                    <base-button @click="removeFile(file.id)" title="Удалить картинку">
                                        Удалить
                                    </base-button>
                                </div>
                            </slide>
                            <hooper-navigation slot="hooper-addons"/>
                        </hooper>
                        <upload-file v-model="upload_files" multiple :filePlace="false" @change="downloadFile"
                                     ref="upload"/>
                    </div>
                </template>

                <div class="tc-wrapper tc-gap-medium justify-content-center">
                    <base-button v-if="!item.id" @click="save" :loading="loading" :disabled="invalid||loading">Добавить новость</base-button>
                    <base-button v-if="item.id" @click="remove" :disabled="invalid||loading">Удалить</base-button>
                    <base-button v-if="item.id" @click="update" :loading="loading" :disabled="invalid||loading">Сохранить</base-button>
                    <!--                    <base-button @click="cancel" v-if="selected">Отмена</base-button>-->
                </div>
            </ValidationObserver>
        </template>

    </div>
</template>

<script>
    import moment from 'moment'
    import * as lang from "vuejs-datepicker/dist/locale";
    import Datepicker from 'vuejs-datepicker';
    import {VueEditor} from 'vue2-editor'
    import UploadFile from "../../../components/UploadFile";
    export default {
        name: "Article",
        components: {
            VueEditor, UploadFile, Datepicker
        },
        data() {
            return {
                selected: null,
                search: null,
                item: {
                    content: '<h1>Напиши свою новость</h1>',
                    title: '',
                    subtitle: '',
                    author: '',
                    publish_at: null,
                    files:[],
                },
                upload_files:[],
                initial_loading: false,
                loading: false,
                file_loading: false,
                languages: lang,
                today:moment().format()
            }
        },
        computed: {
            article() {
                // if (this.loading) {
                //     return {}
                // }
                return this.$store.getters.selected_article
            },
        },
        watch: {
            '$route.params.id': function(newVal, oldVal) {
                this.get(true)
            },
        },
        mounted() {
            this.get()
        },
        methods: {
            async get(change=false) {
                if((!this.article || change) && this.$route.params.id) {
                    this.clear();
                    this.initial_loading = true;
                    await this.$store.dispatch("getArticle", this.$route.params.id)
                        .then(resp => {
                            this.item = Object.assign({}, this.article);
                        })
                        .finally(() => {
                            this.initial_loading = false;
                        })
                }
                else {
                    this.item = Object.assign({}, this.article);
                }
            },
            async save() {
                this.loading = true;
                await this.$store.dispatch("createArticle", this.item).then(resp => {
                    this.clear();
                }).finally(() => {
                    this.loading = false;
                })
            },
            async update() {
                this.loading = true;
                this.$store.dispatch("updateArticle", this.item)
                    .then(resp => {
                    // window.location.reload()
                }).finally(() => {
                    this.loading = false;
                })
            },
            async remove() {
                this.loading = true;
                await this.$store.dispatch("removeArticle", this.item.id)
                    .finally(() => {
                        this.loading = false;
                    })
            },
            saveFile() {
                if(this.upload_files.length > 0) {
                    this.file_loading = true;
                    let payload = {
                        article_id: this.item.id,
                        files: this.upload_files
                    };
                    this.$store.dispatch("saveArticleFile", payload)
                        .then(resp => {
                            Vue.set(this.item, 'files', resp.data.files);
                            this.$refs.upload.clear();
                        }).finally(() => {
                        this.file_loading = false;
                    });
                }
            },
            removeFile(file) {
                this.file_loading = true;
                this.$store.dispatch("deleteArticleFile", {id:file})
                    .then(resp => {
                        this.item.files = resp.data.files;
                    }).finally(() => {
                    this.file_loading = false;
                });
            },
            downloadFile() {
                if(this.item.id) {
                    this.saveFile();
                    this.upload_files = [];
                }
            },
            clear() {
                this.$store.commit('setArticle', null);
                this.item = {
                    content: '',
                    title: '',
                    subtitle: '',
                    author: '',
                    publish_at: null,
                    files: []
                }
                this.$refs.upload.clear();
            },
        }
    }
</script>

<style scoped>

</style>
