<template>

    <div class="blog-post">
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
        <div v-html="article.content" class="post-body-simple">

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

  .post-body-simple {
      padding: 10px;
      p {
          font-size: 14px;
          line-height: 150%;
          text-align: justify;
          &:first-letter {
              margin-left: 50px;
          }

          img {
              margin-bottom: 10px;
          }
      }
  }
</style>
