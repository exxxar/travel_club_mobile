<template>
    <div class="modal fade modalbox" id="CommentsModal" data-backdrop="true" tabindex="-1" style="display: none;"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Комментарии и отзывы</h5>
                    <a href="javascript:;" data-dismiss="modal">Закрыть</a>
                </div>
                <div class="modal-body" style="padding:0px;">

                    <iframe :src="src"
                            class="comment-iframe"></iframe>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            post_id:{
                type:Number,
                default: 344
            }
        },
        data(){
            return {
                src:""
            }
        },
        mounted(){
           // this.src = `https://t.me/travelclubtours/${this.post_id}?embed=1&discussion=1&comments_limit=50`;

            this.src = 'https://comments.app/embed/view?website=8DME3nOg&page_url=https://m.travel-club.tours&origin=https://m.travel-club.tours&page_title=%D0%A1%D0%B5%D1%82%D1%8C%20%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85%20%D0%B0%D0%B3%D0%B5%D0%BD%D1%81%D1%82%D0%B2%20-%20Travel%20Club&limit=50';
        }
    }
</script>
<style lang="scss">

    .comment-iframe {
        padding: 0px 0px 0px 0px;
        width: 100%;
        height: 100vh;
        border: none;
    }
</style>
