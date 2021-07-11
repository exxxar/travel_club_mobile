<template>


    <div class="blog-post">
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
            {{new Date(article.created_at)}}
        </div>
        <div class="post-body" v-html="article.content">

        </div>
    </div>


    <!--     <div class="section mt-4">
             <button type="button" class="btn btn-outline-primary btn-block" data-bs-toggle="modal" data-bs-target="#actionSheetShare">
                 <i class="fas fa-share-alt"></i>
                 Поделиться в соц. сетях
             </button>
         </div>-->

    <!--   <div class="divider mt-4 mb-3"></div>

       <div class="section">
           <div class="section-title mb-1">
               <h3 class="mb-0">Comments (3)</h3>
           </div>
           <div class="pt-2 pb-2">
               &lt;!&ndash; comment block &ndash;&gt;
               <div class="comment-block">
                   &lt;!&ndash;item &ndash;&gt;
                   <div class="item">
                       <div class="avatar">
                           <img src="assets/img/sample/avatar/avatar1.jpg" alt="avatar" class="imaged w32 rounded">
                       </div>
                       <div class="in">
                           <div class="comment-header">
                               <h4 class="title">Diego Morata</h4>
                               <span class="time">just now</span>
                           </div>
                           <div class="text">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           </div>
                           <div class="comment-footer">
                               <a href="#" class="comment-button">
                                   <i class="far fa-heart"></i>
                                   Like (523)
                               </a>
                               <a href="#" class="comment-button">
                                   <i class="fas fa-reply"></i>
                                   Reply
                               </a>
                           </div>
                       </div>
                   </div>
                   &lt;!&ndash; * item &ndash;&gt;
                   &lt;!&ndash;item &ndash;&gt;
                   <div class="item">
                       <div class="avatar">
                           <img src="assets/img/sample/avatar/avatar3.jpg" alt="avatar" class="imaged w32 rounded">
                       </div>
                       <div class="in">
                           <div class="comment-header">
                               <h4 class="title">Henry Itondo</h4>
                               <span class="time">05:50 PM</span>
                           </div>
                           <div class="text">
                               Sed laoreet leo eget maximus ultricies.
                           </div>
                           <div class="comment-footer">
                               <a href="#" class="comment-button">
                                   <i class="far fa-heart"></i>
                                   Like (4)
                               </a>
                               <a href="#" class="comment-button">
                                   <i class="fas fa-reply"></i>
                                   Reply
                               </a>
                           </div>
                       </div>
                   </div>
                   &lt;!&ndash; * item &ndash;&gt;
                   &lt;!&ndash;item &ndash;&gt;
                   <div class="item">
                       <div class="avatar">
                           <img src="assets/img/sample/avatar/avatar4.jpg" alt="avatar" class="imaged w32 rounded">
                       </div>
                       <div class="in">
                           <div class="comment-header">
                               <h4 class="title">Carmelita Marsham</h4>
                               <span class="time">Sep 23, 2020</span>
                           </div>
                           <div class="text">
                               Vivamus lobortis, orci et commodo pulvinar, eros nibh volutpat ipsum, in rhoncus risus
                               dolor.
                           </div>
                           <div class="comment-footer">
                               <a href="#" class="comment-button">
                                   <i class="far fa-heart"></i>
                                   Like (5)
                               </a>
                               <a href="#" class="comment-button">
                                   <i class="fas fa-reply"></i>
                                   Reply
                               </a>
                           </div>
                       </div>
                   </div>
                   &lt;!&ndash; * item &ndash;&gt;
               </div>
               &lt;!&ndash; * comment block &ndash;&gt;
           </div>
       </div>

       <div class="divider mt-2 mb-3"></div>

       <div class="section mt-2">
           <h3 class="mb-0">Send a Comment</h3>
           <div class="pt-2 pb-2">
               <form>
                   <div class="form-group boxed">
                       <div class="input-wrapper">
                           <input type="text" class="form-control" id="name5" placeholder="Name">
                           <i class="clear-input">
                               <i class="fas fa-times"></i>
                           </i>
                       </div>
                   </div>

                   <div class="form-group boxed">
                       <div class="input-wrapper">
                           <input type="email" class="form-control" id="email5" placeholder="Email">
                           <i class="clear-input">
                               <i class="fas fa-times"></i>
                           </i>
                       </div>
                   </div>

                   <div class="form-group boxed">
                       <div class="input-wrapper">
                           <textarea id="comment" rows="4" class="form-control" placeholder="Comment"></textarea>
                           <i class="clear-input">
                               <i class="fas fa-times"></i>
                           </i>
                       </div>
                   </div>

                   <div class="mt-1">
                       <button type="submit" class="btn btn-primary btn-lg btn-block">
                           Send
                       </button>
                   </div>

               </form>

           </div>
       </div>-->


</template>
<script>


    export default {
        props: ["article"],
        data() {
            return {
                img: null,
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
