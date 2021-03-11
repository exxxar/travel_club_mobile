<template>
    <div class="modal fade modalbox" id="CommentsModal" data-backdrop="static" tabindex="-1" style="display: none;"
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
            this.src = `https://t.me/travelclubtours/${this.post_id}?embed=1&discussion=1&comments_limit=50`;
        }
    }
</script>
<style lang="scss">

    .comment-iframe {
        padding: 0px 0px 50px 0px;
        width: 100%;
        height: 100vh;
        border: none;
    }
</style>
