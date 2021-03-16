<template>
    <div class="row m-auto" style="height: 80vh">
        <div class="col-12" style="position: relative; height: 100%; z-index: 0;">
            <div class="chat-container" v-on:scroll="onScroll" ref="chatContainer">
                <div class="message" v-for="(message,index) in messages" v-bind:key="index" :class="{own: message.selfMessage == true}">
                    <div class="username mb-1" v-if="index>0 && messages[index-1].sender_info != message.sender_info">{{message.sender_info.FirstName}} {{message.sender_info.MiddleName}}</div>
                    <div class="username mb-1" v-if="index == 0">{{message.sender_info.FirstName}} {{message.sender_info.MiddleName}}</div>
                    <div class="content mb-1">
                        <div v-html="message.message_text"></div>
                    </div>
                </div>
            </div>
            <div class="typer">
                <input class="ml-2" type="text" placeholder="Напишите сообщение..." v-on:keyup.enter="sendMessage" v-model="message_text">
                <button class="btn emoji-panel" @click="sendMessage">
                    <i class="icon icon-send"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message_text: '',
                files: [],
                currentChat: {},
                chatMessages: [],
                emojiPanel: false,
                currentRef: {},
                loading: false,
                totalChatHeight: 0
            }
        },
        mounted () {
            this.chatMessages=[]
            this.loadChat()
            this.getUser()
        },
        computed: {
            messages () {
                return this.chatMessages
            },
            chats () {
                return this.$store.getters.chats
            },
            user() {
                return this.$store.getters.user
            }
        },
        watch: {
            '$route.params.id' (newId, oldId) {
                this.loadChat()
            }
        },
        methods: {
            toChat(id)
            {
                this.$router.push('/'+this.user.role+'/chat/'+id)
            },
            async getUser() {
                if (!this.user) {
                    await this.$store.dispatch('getUser').then( () => {
                    })
                }
            },
            async loadChat () {
                if(this.chats.length<=0){
                    await this.$store.dispatch('loadUserChats').then(()=>{
                        this.totalChatHeight = this.$refs.chatContainer.scrollHeight
                        this.loading = false
                        if (this.$route.params.id !== undefined) {
                            this.chatMessages = []
                            this.currentChat = this.chats.find((chat) => {if(chat.id == this.$route.params.id)
                            {
                                return true;
                            }});
                            this.currentChat.messages.forEach((item) => {
                                this.onNewMessageAdded(item, false);
                            })
                        }
                    })
                }
                else{
                    this.totalChatHeight = this.$refs.chatContainer.scrollHeight
                    this.loading = false
                    if (this.$route.params.id !== undefined) {
                        this.chatMessages = []
                        this.currentChat = this.chats.find((chat) => {if(chat.id == this.$route.params.id)
                        {
                            return true;
                        }});
                        this.currentChat.messages.forEach((item) => {
                            this.onNewMessageAdded(item, false);
                        })
                    }
                }

            },
            onScroll () {
                let scrollValue = this.$refs.chatContainer.scrollTop
                const that = this
                if (scrollValue < 100 && !this.loading) {
                    this.totalChatHeight = this.$refs.chatContainer.scrollHeight
                    this.loading = true
                    let currentTopMessage = this.chatMessages[0]
                    if (currentTopMessage === undefined) {
                        this.loading = false
                        return
                    }
                    that.loading = false
                }
            },
            processMessage (message) {
                /*eslint-disable */
                var imageRegex = /([^\s\']+).(?:jpg|jpeg|gif|png)/i
                /*eslint-enable */
                if (imageRegex.test(message.message_text)) {
                    message.image = imageRegex.exec(message.message_text)[0]
                }
                var emojiRegex = /([\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{2934}-\u{1f18e}])/gu
                if (emojiRegex.test(message.message_text)) {
                    message.message_text = message.message_text.replace(emojiRegex, '<span class="emoji">$1</span>')
                }
                return message
            },
            onNewMessageAdded (message, newMessage = true) {
                /*eslint-disable */
                var urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
                /*eslint-enable */
                message.message_text = message.message_text
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#039;')
                message.message_text = message.message_text.replace(urlPattern, "<a href='$1'>$1</a>")
                if (!newMessage) {
                    this.chatMessages.push(message)
                    this.scrollTo()
                } else {
                    this.chatMessages.push(message)
                    this.scrollToEnd()
                }

            },
            sendMessage () {
                if (this.message_text !== '') {
                    var message = {
                        message_text: this.message_text,
                        date: new Date().toString(),
                        conversation_id: this.$route.params.id,
                        sender_id: this.user.id,
                        files: this.files,
                        sender_info: this.user.info,
                        selfMessage: true
                    }
                    this.onNewMessageAdded(message, true);
                    this.$store.dispatch('sendMessage', message)
                    this.message_text = ''
                }
            },
            scrollToEnd () {
                this.$nextTick(() => {
                    var container = this.$el.querySelector('.chat-container')
                    container.scrollTop = container.scrollHeight
                })
            },
            scrollTo () {
                this.$nextTick(() => {
                    let currentHeight = this.$refs.chatContainer.scrollHeight
                    let difference = currentHeight - this.totalChatHeight
                    var container = this.$el.querySelector('.chat-container')
                    container.scrollTop = difference
                })
            },
            addEmojiToMessage (emoji) {
                this.message_text += emoji.value
            },
            toggleEmojiPanel () {
                this.emojiPanel = !this.emojiPanel
            }
        }
    }
</script>

<style scoped>
    .last_message{
        max-height: 50px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .active {
        background: #f08b23 !important;
        border-color: #f08b23 !important;
    }
    .scrollable {
        overflow-y: auto;
        height: 90vh;
    }
    .typer{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        bottom: 0;
        height: 4.9rem;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
    }
    .typer input[type=text]{
        position: absolute;
        left: 2.5rem;
        padding: 1rem;
        width: 80%;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 1rem;
    }
    .typer button {
        color: #fff;
        background-color: #f8a105;
        border-color: #f8a105;
        outline: none !important;
    }
    .typer button:hover{
        color: #fff;
        background-color: #063065;
        border-color: #063065;
    }
    .chat-container{
        box-sizing: border-box;
        height: 90%;
        overflow-y: auto;
        padding: 10px;
        background-color: #f2f2f2;
    }
    .message{
        margin-bottom: 8px;
    }
    .message.own{
        text-align: right;
    }
    .message.own .content{
        background-color: #ffc890;
    }
    .chat-container .username{
        font-size: 18px;
        font-weight: bold;
    }
    .chat-container .content{
        padding: 8px;
        /*background-color: lightgreen;*/
        background-color: lightskyblue;
        border-radius: 10px;
        display:inline-block;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
        max-width: 50%;
        word-wrap: break-word;
    }
    @media (max-width: 480px) {
        .chat-container .content{
            max-width: 60%;
        }
    }
</style>
