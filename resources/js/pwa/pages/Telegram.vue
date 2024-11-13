<template>

    <div id="appCapsule" class="chat-window">

        <div class="message-divider">
            {{new Date().toLocaleString()}}
        </div>

        <div class="message-item" v-for="message in messages" v-bind:class="{'user':(message.result?false:true)}">
            <img v-lazy="message.result?'/img/logo.png':'/img/travel/avatar.png'" alt="avatar" class="avatar">
            <div class="content">
                <div class="title">{{message.result?'ВПУТЬ':'Вы'}}</div>
                <div class="bubble">
                    <img v-lazy="message.photo" alt="photo" class="imaged w160" v-if="message.photo">
                    <vue-markdown>{{message.text}}</vue-markdown>

                    <ul v-if="message.type===2">
                        <li v-for="row in message.keyboard" class="row">
                            <div class="btn-wrapper" v-for="button in row">
                                <button v-if="button.callback_data" @click="buttonSend(button.callback_data)">
                                    {{button.text}}
                                </button>
                                <a v-if="button.url" :href="button.url" target="_blank">{{button.text}}</a>
                            </div>

                        </li>
                    </ul>
                </div>
                <div class="footer">{{new Date().toLocaleString()}}</div>
            </div>
        </div>

    </div>

</template>

<script>

    import VueMarkdown from 'vue-markdown'
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import "vue-custom-scrollbar/dist/vueScrollbar.css"

    export default {
        components: {
            VueMarkdown, vueCustomScrollbar
        },
        watch: {
            messages: function (newVal) {
                this.$nextTick(function () {
                    window.scrollTo({
                        top: document.querySelector("#appCapsule").offsetHeight ,
                        behavior: "smooth"
                    });
                });
            },

        },
        data() {
            return {
                is_active: true,
                is_keyboard: true,
                text: '/start',
            }
        },

        computed: {
            messages() {
                return this.$store.getters.getMessages;
            },
            buttons() {
                return this.$store.getters.getButtons;
            }
        },

    }


</script>

<style>
    .chat-window {
        padding: 56px 0 200px 0 !important;
    }
</style>
