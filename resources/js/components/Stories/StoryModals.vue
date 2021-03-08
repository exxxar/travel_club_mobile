<template>
    <div>
        <StoryModalImage
            v-if="current"
            :index="current"
            :image="stories[current-1].image"
            :time="stories[current-1].time"
            :progress="progress"

        />

        <div class="swap-history-left" @click="prev()"></div>
        <div class="swap-history-right" @click="next()"></div>
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
        computed:{
            stories(){
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
            prev() {
                this.current = this.current > 1 ? this.current - 1 : this.stories.length-1;
                this.start()
            },
            next() {
                this.current = this.current < this.stories.length-1 ? this.current + 1 : 1;
                this.start()
            },
            start() {
                clearInterval(this.interval)
                this.progress = 0;
                this.interval = setInterval(() => {

                    if (this.progress >= 99) {

                        if (this.current < this.stories.length-1) {
                            this.current += 1;
                            $('#StoryDefault' + this.current).modal('show');
                        } else {
                            $('#StoryDefault' + this.current).modal('hide');
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


    .modal.show.stories ~ .swap-history-left {
        position: fixed;
        z-index: 9999;
        top: 100px;
        left: 0;
        width: 150px;
        height: 500px;

    }

    .modal.show.stories ~ .swap-history-right {
        position: fixed;
        z-index: 9999;
        top: 100px;
        right: 0;
        width: 150px;
        height: 500px;

    }
</style>
