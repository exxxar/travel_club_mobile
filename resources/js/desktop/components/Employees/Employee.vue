<template>
    <div class="item story-item">
        <a @click="show(index)" data-component="employees" data-time="5000">
            <img v-if="image" :src="image" alt="alt" class="imaged w-100 rounded">
            <img v-else src="/img/travel/logo-1.png" class="imaged w-100 rounded" alt="логотип">
        </a>
    </div>
</template>
<script>
    export default {
        props: ['index','image'],
        data() {
            return {
                isOpened: false
            }
        },
        methods: {
            show(index) {
                console.log('show', index)
                this.active_index = index
                this.$store.commit('openModal', '#EmployeeDefault')
            }
        }
    }
</script>
<style lang="scss">

    .story-item {
        padding: 10px !important;
        height:80px !important;
        width: 80px !important;
        /*min-height: 80px !important;*/
        /*min-width: 80px !important;*/
        /*max-width: 300px !important;*/
        /*max-height: 300px !important;*/
        .landing-employees & {
            height:auto !important;
            width: auto !important;
        }
        &.opened {
            a {
                img {
                    box-shadow: 0 0 0 3px #ffffff, 0 0 0 5px #e1e1e1;
                }
            }

        }

        a {
            img {
                object-fit: cover;
                width: 100%;
                height: 100%;


            }
        }
    }
</style>
