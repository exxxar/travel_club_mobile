<template>
    <div class="section">


        <h4 class="section-title">Воспоминания</h4>
        <p>Наши истории из путешествий</p>

        <carousel :items="6" :nav="false" :dots="false" class="story-blocks">
            <div @click="show(index+1)" v-for="(story, index) in stories">
                <story :index="index+1" :image="story.image"/>
            </div>

        </carousel>


        <story-modals :active="active_index"/>
    </div>
</template>
<script>
    import Story from './Story'
    import carousel from 'vue-owl-carousel'
    import StoryModals from "./StoryModals";

    export default {
        data() {
            return {
                active_index: null,
            }
        },
        computed: {
            stories() {
                return this.$store.getters.getStories;
            }
        },
        methods: {
            show(index) {
                this.active_index = index
            }
        },
        components: {
            StoryModals, Story, carousel
        }
    }
</script>
<style>
    .story-blocks {
        width: calc(100% + 16px);
        margin-left: -16px
    }

    .story-blocks .item {
        padding-top: 5px;
        padding-bottom: 5px
    }

    .story-blocks .item img {
        box-shadow: 0 0 0 3px #ffffff, 0 0 0 5px #ec4433;
    }

    .story-blocks .seen img {
        box-shadow: 0 0 0 4px #ffffff, 0 0 0 5px #A1A1A2
    }

    .story-blocks .passive img {
        box-shadow: 0 0 0 4px #ffffff, 0 0 0 5px #A1A1A2;
        -webkit-filter: grayscale(100%) opacity(50%);
        filter: grayscale(100%) opacity(50%)
    }

    .modal.stories {
        padding-top: env(safe-area-inset-top);
        overflow: hidden
    }

    .modal.stories .modal-dialog {
        transform: translate(0, 100%) scale(0.1) !important;
        min-width: 100%;
        margin: 0;
        transition: 0.2s ease-in-out !important;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin-top: env(safe-area-inset-top)
    }

    .modal.stories .modal-dialog .modal-content {
        border-radius: 0;
        border: 0;
        margin: auto;
        overflow: hidden;
        padding-top: 56px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0
    }

    .modal.stories .modal-dialog .modal-content .modal-header {
        border: 0;
        padding: 0;
        min-height: 56px;
        padding: 16px 16px 42px 16px;
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 100;
        background: transparent;
        background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%)
    }

    .modal.stories .modal-dialog .modal-content .modal-header .modal-title {
        margin: 0;
        color: #141515;
        font-size: 17px
    }

    .modal.stories .modal-dialog .modal-content .modal-body {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding: 100px 24px
    }

    .modal.stories .modal-dialog .modal-content .modal-body p {
        text-shadow: 0 3px 6px rgba(0, 0, 0, 0.59);
        opacity: 0.9
    }

    .modal.stories .modal-dialog .modal-content .modal-body h1, .modal.stories .modal-dialog .modal-content .modal-body h2, .modal.stories .modal-dialog .modal-content .modal-body h3, .modal.stories .modal-dialog .modal-content .modal-body h4, .modal.stories .modal-dialog .modal-content .modal-body h5 {
        color: #fff;
        text-shadow: 0 3px 6px rgba(0, 0, 0, 0.59)
    }

    .modal.stories .modal-dialog .modal-content .modal-body .btn {
        margin-top: 10px
    }

    .modal.stories .modal-dialog .modal-content .modal-body .fixed-btn {
        position: absolute;
        left: 16px;
        right: 16px;
        bottom: 16px
    }

    .modal.stories.show .modal-dialog {
        transform: translate(0, 0) scale(1) !important
    }

    .modal.stories.with-story-bar .modal-content .modal-header {
        padding-top: 32px
    }

    .modal.stories .story-bar {
        height: 4px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.2);
        position: absolute;
        left: 16px;
        right: 16px;
        z-index: 1000;
        top: 16px;
        overflow: hidden
    }

    .modal.stories .story-bar span {
        display: block;
        height: 4px;
        width: 0%;
        background: #fff
    }

    @-webkit-keyframes storybar-animation {
        0% {
            width: 0
        }

        100% {
            width: 100%
        }
    }

    @keyframes storybar-animation {
        0% {
            width: 0
        }

        100% {
            width: 100%
        }
    }

    .modal.stories .story-image {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        background: #000
    }

    .modal.stories .story-image img, .modal.stories .story-image video {
        width: auto;
        height: 100vh;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        top: 0
    }

    .modal.stories .profile-detail {
        display: flex;
        align-items: center
    }

    .modal.stories .profile-detail h4 {
        color: #fff;
        margin: 0;
        line-height: 1.2em;
        display: block
    }

    .modal.stories .profile-detail .text-muted {
        display: block;
        font-size: 11px;
        color: #fff !important;
        opacity: 0.7;
        line-height: 1.3em
    }

    .modal.stories .close-stories {
        color: #fff;
        font-size: 24px
    }

    .modal.stories .close-stories:hover {
        opacity: .6
    }
</style>
