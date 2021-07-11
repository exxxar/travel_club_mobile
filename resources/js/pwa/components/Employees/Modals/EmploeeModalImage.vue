<template>
    <div class="modal fade employees stories with-story-bar show" :id="'EmployeeDefault'+index"

         data-backdrop="true" tabindex="-1"
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
                    <a href="#"  @click="hide()" class="close-stories">
                        <i class="far fa-times-circle"></i>
                    </a>
                </div>
                <div class="modal-body">
                    <div class="title-custom">
                        <h1 class="text-center" v-if="name">{{name}}</h1>
                        <h3 class="text-center" v-if="title">{{title}}</h3>
                        <h4 class="text-center" v-if="location">{{location}}</h4>
                    </div>
                </div>
                <div class="story-bar"><span v-bind:style="{ overflow: 'hidden', width: progress+'%'}">
                </span></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["index", "progress", "image", "time", "name", "title","location"],

        methods:{
            hide(){
                $(".employees").modal("hide");
            }
        }



    }
</script>
<style lang="scss" scoped>
    .title-custom {
       position: absolute;
        bottom: 0px;

        background: #484848ba;
    }
</style>
