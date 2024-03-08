<template>
    <div class="modal fade stories with-story-bar show" :id="'StoryDefault'+index"

          data-bs-backdrop="true" tabindex="-1"
         aria-modal="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="story-bar"></div>
                <div class="story-image">
                    <img v-lazy="image" alt="image">
                </div>
                <div class="modal-header">
                    <a href="#" class="profile-detail">
                        <img v-lazy="'/img/travel/logo-1.png'" alt="avatar" class="imaged w36 rounded mr-1">
                        <div>
                            <h4>Travel Club Family</h4>
                            <span class="text-muted">{{time}}</span>
                        </div>
                    </a>
                    <a href="#"  data-bs-dismiss="modal" class="close-stories">
                        <i class="far fa-times-circle"></i>
                    </a>
                </div>
                <div class="modal-body">
                    <div>
                        <h1 class="text-center" v-if="title">{{title}}</h1>
                        <p class="text-center" v-if="description">{{description}}</p>
                    </div>
                </div>
                <div class="story-bar"><span v-bind:style="{ overflow: 'hidden', width: progress+'%'}">
                ></span></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["index", "progress", "image", "time", "title", "description"],




    }
</script>
