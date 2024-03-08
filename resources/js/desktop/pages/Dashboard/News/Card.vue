<template>
<!--    <div class="tc-card">-->
<!--        <h6>Новость #{{ item.id }} </h6>-->
<!--        <p><small>Дата добавления <strong>{{  item.created_at }}</strong></small></p>-->
<!--        <hr>-->
<!--        <h5>{{ item.title }}</h5>-->
<!--        <h6>{{ item.subtitle }}</h6>-->
<!--        <p><small>Автор: <strong>{{ item.author }}</strong></small></p>-->
<!--        <p v-if="item.publish_at"><small>Дата публикации: <strong>{{item.publish_at}}</strong></small></p>-->
<!--        <p class="simple-news" v-html="item.content"></p>-->
<!--        <div class="row">-->
<!--            <div class="col-6">-->
<!--                <base-button @click="select">Редактировать</base-button>-->
<!--            </div>-->
<!--            <div class="col-6">-->
<!--                <base-button @click="remove">Удалить</base-button>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="tc-wrapper w-100">-->
            <div class="tc-card tc-row w-100 mx-auto mx-0" @click.self="navigate('mobile')">
<!--                <div class="bkt-wrapper-between bkt-card__heading w-100" v-if="item && item.trade">-->
<!--                    <h5 class="me-auto">торги №-->
<!--                        <skeleton type_name="spoiler" tag="span" :loading="rules && !rules.trade.externalId">-->
<!--                            {{item.trade.externalId ? item.trade.externalId : '0'}}-->
<!--                        </skeleton>-->
<!--                        <span class="bkt-text-neutral-dark"> • </span>-->
<!--                        <skeleton type_name="spoiler" tag="span" :loading="rules && !rules.trade.publishDate">-->
<!--                        <span v-if="item.trade.publishDate">-->
<!--                            {{item.trade.publishDate | moment('DD MMMM YYYY HH:mm')}}-->
<!--                        </span>-->
<!--                        </skeleton>-->
<!--                    </h5>-->
<!--                </div>-->
<!--                <div class="col-12 col-lg-11 p-0">-->
<!--                    <div class="row h-100 w-100 mx-auto row-cols-1 row-cols-lg-4 bkt-card-trade__gap">-->
                        <div class="col-12 col-lg-4 p-0 pe-md-2">
                            <div class="tc-wrapper-down-lg tc-nowrap tc-gap align-items-start">
                                <div class="tc-article__image-wrapper h-100">
<!--                                        <div class="tc-cursor-pointer" @click="navigate('desktop')">@click="navigate('desktop')"-->
<!--&lt;!&ndash;                                            <card-image-category :categories="item.categories"></card-image-category>&ndash;&gt;-->
<!--                                        </div>-->
                                        <hooper :itemsToShow="1" :centerMode="true" class="tc-article__image-slider">
                                            <slide v-for="photo in item.files" :key="photo.id">
                                                <img :src="photo.storage_link" class="tc-article__image tc-cursor-pointer" alt=""/>
                                            </slide>
                                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                                        </hooper>
<!--                                        <div class="tc-card__image-status bkt-cursor-pointer" v-if="item.isWatched">-->
<!--                                            Просмотрено-->
<!--                                        </div>-->
                                </div>
                                <div class="tc-wrapper-column d-lg-none">
                                    <div class="tc-wrapper-between tc-gap-large tc-gap-down-sm tc-nowrap">
                                        <router-link :to="'/dashboard/news/update/'+item.id" class="tc-card__title tc-text-truncate-1"
                                                     style="word-break: break-all">
                                            {{item && item.title ? item.title:'Новость'}}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-8 p-0 px-lg-2">
                            <div class="tc-card__head d-none d-lg-block">
                                <router-link :to="'/dashboard/news/update/'+item.id" class="tc-card__title tc-text-truncate-1">
                                    {{item && item.title ? item.title:'Новость'}}
                                </router-link>
                            </div>
                            <div class="tc-card-trade__gap tc-wrapper-column">
                                <div class="tc-wrapper">
                                    <div class="tc-feature">
                                        <div class="tc-feature__title">Дата добавления</div>
                                        <div class="tc-feature__text">
                                            {{  item.created_at }}
                                        </div>
                                    </div>
                                    <div class="tc-feature">
                                        <div class="tc-feature__title">Дата публикации</div>
                                        <div class="tc-feature__text">
                                            {{ item.publish_at }}
                                        </div>
                                    </div>
                                    <div class="tc-feature">
                                        <div class="tc-feature__title">Автор</div>
                                        <div class="tc-feature__text">
                                            {{ item.author }}
                                        </div>
                                    </div>
                                </div>
                                <div class="tc-card__feature" v-if="item.content">
                                    <h5 class="tc-card__text tc-text-truncate-8" v-html="item.content">
                                    </h5>
                                </div>
                                <div class="tc-wrapper justify-content-end">
                                    <base-button :disabled="loading"
                                        @click="navigate('desktop')"
                                    >
                                        Подробнее
                                    </base-button>
                                    <base-button @click="remove" :disabled="loading" :loading="loading">Удалить</base-button>
                                </div>
                            </div>
                        </div>
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-2 col-lg-1 p-0 d-none d-lg-block">-->
<!--                    <card-actions :item="item" class="bkt-card vertical m-0 gap-0 py-0" button_type="-ellipse"-->
<!--                                  @changeStatus="changeStatus" main_bg="bkt-bg-body" icon_color="main"-->
<!--                    >-->
<!--                    </card-actions>-->
<!--                </div>-->
            </div>
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "CardArticle",
        props: ['item'],
        data() {
            return {
                // item: {
                //     content: '<h1>Напиши свою новость</h1>',
                //     title: 'Test',
                //     subtitle: 'testic',
                //     author: 'Author',
                //     publish_at: new Date(),
                //     photos:[],
                //     created_at: new Date()
                // },
                loading: false
            }
        },
        methods: {
            navigate(type='desktop') {
                if ((this.isMobile && type === 'mobile') || type === 'desktop') {
                    this.$store.commit('setArticle', this.item)
                    this.$router.push('/dashboard/news/update/' + this.item.id)
                }
            },
            select() {

            },
            async remove() {
                this.loading = true;
                await this.$store.dispatch("removeArticle", this.item.id)
                    .finally(() => {
                        this.loading = false;
                    })
            }
        }
    }
</script>

<style scoped>

</style>
