<template>


    <div class="blog-post" @click="isOpened = !isOpened">
        <div class="mb-2">
            <img v-lazy="img" alt="image" class="imaged square w-100">
        </div>
        <h1 class="title">{{article.title}}</h1>

        <div class="post-header">
            <div>
                <a href="#">
                    <img src="/img/logo.png" alt="avatar" class="imaged w24 rounded me-05 post-img">
                    {{article.author}}
                </a>
            </div>
            {{new Date(article.created_at) | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
        </div>
        <div class="post-body" v-if="!isOpened">
            <button class="btn btn-outline-danger w-100">
                Читать новость
            </button>
        </div>
        <div class="post-body" v-html="article.content" v-if="isOpened">

        </div>
    </div>


</template>
<script>


    export default {
        props: ["article"],
        data() {
            return {
                img: null,
                isOpened: false,
            }
        },
        mounted() {
            const parser = new DOMParser();

            const str = this.article.content;
            const doc1 = parser.parseFromString(str, "text/html")

            let tmp = doc1.querySelector("img")
            if (tmp != null)
                this.img = doc1.querySelector("img").src;
        }
    }
</script>
<style lang="scss">
    .post-img {
        max-height: 200px;
        object-fit: cover;
    }
</style>
