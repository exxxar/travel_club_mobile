<template>
    <div>

        <StoryModalImage
            v-if="current"
            :index="current"
            :image="stories[current-1].image"
            :time="stories[current-1].time"
            :progress="progress"

        />

<!--
        <div v-if="active">
            <div class="swap-history-left" @click="prev()"></div>
            <div class="swap-history-right" @click="next()"></div>
            <div class="swap-history-bottom" @click="close()"></div>
        </div>-->

    </div>
</template>
<script>
    import StoryModalImage from "./Modals/StoryModalImage";

    export default {

        props: ["active"],
        data() {
            return {

                current: null,
                progress: 0,
                interval: null,
            }
        },
        mounted() {
            eventBus.$on("right-swipe", () => {

                this.next()

            });


            eventBus.$on("left-swipe", () => {

                this.prev()
            });


        },
        computed: {
            stories() {
                return this.$store.getters.getStories;
            }
        },
        watch: {
            active(newValue, oldValue) {
                this.current = newValue
                this.start()

            }
        },
        methods: {
            close(){
                // $(".stories").modal("hide");
                this.$store.dispatch('closeModal', '.stories');
            },
            swipeHandler() {
                console.log("testttt")
            },
            prev() {
                this.current = this.current > 1 ? this.current - 1 : this.stories.length - 1;
                this.start()
            },
            next() {
                this.current = this.current < this.stories.length - 1 ? this.current + 1 : 1;
                this.start()
            },
            start() {
                clearInterval(this.interval)
                this.progress = 0;
                this.interval = setInterval(() => {

                    if (this.progress >= 99) {

                        if (this.current < this.stories.length - 1) {
                            this.current += 1;
                            this.$store.dispatch('openModal', '#StoryDefault' + this.current);
                        } else {
                            this.$store.dispatch('closeModal', '#StoryDefault' + this.current);
                            this.current = null
                            clearInterval(this.interval)
                            return;
                        }
                        this.start()
                    }

                    if (this.progress < 100)
                        this.progress += 0.1

                }, 10)
            }
        },
        components: {
            StoryModalImage
        }
    }
</script>

<style lang="scss">

  /* .swap-history-bottom {
        position: fixed;
        z-index: 99999999999!important;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 150px;

    }

   .swap-history-left {
        position: fixed;
        z-index: 99999999999!important;
        top: 100px;
        left: 0;
        width: 150px;
        height: 500px;

    }

    .swap-history-right {
        position: fixed;
        z-index: 99999999999!important;
        top: 100px;
        right: 0;
        width: 150px;
        height: 500px;

    }*/
</style>
