<template>
    <div class="item story-item" v-bind:class="{opened:isOpened}" @click="isOpened = true">
        <a href="#"  data-bs-toggle="modal" data-component="employees" data-time="5000" :data-bs-target="'#EmployeeDefault'+index">
            <img v-if="image" v-lazy="image" alt="alt" class="imaged w-100 rounded">
            <img v-else v-lazy="'/img/travel/logo-1.png'" class="imaged w-100 rounded" alt="логотип">
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
        }
    }
</script>
<style lang="scss">
    .story-item {
        padding: 10px !important;
        height:80px !important;
        width: 80px !important;

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
