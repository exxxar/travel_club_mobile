<template>
    <div class="modal employees stories with-story-bar show" :id="'EmployeeDefault'+index"
         data-backdrop="false"
         tabindex="-1"
         aria-modal="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="story-bar"></div>
                <div class="story-image">
                    <img :src="image" alt="image">
                </div>
                <div class="modal-header">
                    <a href="#" class="profile-detail">
                        <img src="/img/travel/logo-1.png" alt="avatar" class="imaged w36 rounded mr-1" style="width:50px;">
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
                        <h4 class="text-center p-2" v-if="name">{{name}}</h4>
                        <h5 class="text-center" v-if="title">{{title}}</h5>
                        <h6 class="text-center" v-if="location">{{location}}</h6>
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
        width: 100%;
        background: #484848ba;
    }
</style>
