<template>
    <div class="container-fluid" style="padding: 0;">
        <b-modal id="new-chat" title="Создать чат">
            <div class="row w-100 mt-2 mx-auto">
                <multiselect
                    v-model="new_chat.user"
                    placeholder="Начать чат с..."
                    :optionHeight=29
                    :showLabels=false
                    :options="available_users"
                    style="line-height: 1.5; font-size: 0.765625rem; margin:auto;"
                    :multiple="false"
                    label="info.FullName"
                    track-by="id"
                    :taggable="true"
                    :searchable="true"
                    :hideSelected="true"
                >
                    <template slot="singleLabel" slot-scope="props">
                        <span class="option__title">{{ props.option.info.FullName }}</span>
                    </template>
                    <template slot="option" slot-scope="props">
                        <span class="option__title">{{ props.option.info.FullName }}</span>
                    </template>
                </multiselect>
            </div>
            <template v-slot:modal-footer>
                <div class="w-100">
                    <b-button
                        style="background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%); background-color: rgba(0, 0, 0, 0); background-color: #f08b23 !important; border-color: #f08b23 !important;"
                        class="float-right"
                        @click="createChat"
                        :disabled="new_chat.user==null ||new_chat.user==''||loading"
                    >
                        <b-spinner small v-if="loading"></b-spinner>
                        <span class="sr-only" v-if="loading">Loading...</span>
                        Создать
                    </b-button>
                    <b-button
                        style="background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%); background-color: rgba(0, 0, 0, 0); background-color: #f08b23 !important; border-color: #f08b23 !important;"
                        class="float-right mr-2"
                        @click="cancel"
                    >
                        Отмена
                    </b-button>
                </div>
            </template>
        </b-modal>
        <div class="row w-100 m-auto align-items-start justify-content-center">
            <div class="col-sm-4 desktop scrollable" style="position: relative">
                <div class="row w-100 m-auto">
                    <div class="col-12 pt-3 px-0">
                        <div class="row w-100 mx-auto" style="position: sticky; z-index:3; top: 0px">
                            <div class="col-12 p-0">
                                <div class="row w-100 m-auto justify-content-center align-items-center py-2" style="background: #f08b23; color: white; border-radius: 5px">
                                    <div class="col-6 col-sm-6">
                                        <p class="my-auto">
                                            <span class="chat-name">Чаты</span>
                                        </p>
                                    </div>
                                    <div class="col-6 col-sm-6">
                                <span class="chat-name ml-auto mr-0" style="font-size: 25px; float:right" v-if="available_users.length>0 && user.role != 'client'" @click="open" >
                                        <b-icon icon="plus-circle-fill"></b-icon>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 p-0">
                                <div class="row w-100 mx-auto mt-2">
                                    <b-form-input
                                        v-model="search"
                                        :placeholder="'Поиск чата'"
                                        class="mb-0 travel-input"
                                        @input="runSearch"
                                    >
                                    </b-form-input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 pt-2 px-0" v-if="chats.length<=0&&load==false">
                        <div class="row w-100 m-auto">
                            <div class="col-12 skeleton-tr pt-2 px-0" v-for="n in 5" :key="n">
                                <div class="list-group">
                                    <div class="list-group-item list-group-item-action flex-column align-items-start">
                                        <div class="d-flex w-100 justify-content-between">
                                            <div class="row m-auto w-100">
                                                <div class="col-8 skeleton-tr p-2 mr-auto">
                                                    <tb-skeleton :height="15" theme="opacity" bg-color="#dcdbdc" shape="radius" />
                                                </div>
                                                <div class="col-2 skeleton-tr p-2 ml-auto float-right">
                                                    <tb-skeleton :height="15" theme="opacity" bg-color="#dcdbdc" shape="radius" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="row m-auto w-100">
                                                <div class="col-4 skeleton-tr p-2">
                                                    <tb-skeleton :height="10" theme="opacity" bg-color="#dcdbdc" shape="radius" />
                                                </div>
                                            </div>
                                            <div class="row m-auto w-100">
                                                <div class="col-2 skeleton-tr p-2">
                                                    <tb-skeleton :height="5" theme="opacity" bg-color="#dcdbdc" shape="radius" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 pt-2 px-0" v-if="chats.length<=0&&load==true">
                        <div class="row w-100 mx-auto mb-2">
                            <p>Пока у Вас нет никаких чатов</p>
                        </div>
                    </div>
                    <div class="col-12 pt-2 px-0" v-for="chat in filteredChats" :key="chat.id">
                        <div class="list-group">
                            <div class="list-group-item list-group-item-action flex-column align-items-start" style="cursor: pointer" :class="{active: chat.id == $route.params.id}" @click="toChat(chat.id)">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1" v-if="chat.creator_id == user.id">{{chat.manager_title}}</h5>
                                    <h5 class="mb-1" v-else>{{chat.client_title}}</h5>
                                    <small v-if="chat.messages.length>0">{{chat.messages[chat.messages.length-1].created_at | moment("from", "now") }}</small>
                                </div>
                                <div v-if="chat.messages.length>0">
                                    <p class="mb-1 last_message">{{chat.messages[chat.messages.length-1].message_text}}</p>
                                    <small>{{chat.messages[chat.messages.length-1].senderInfo.FirstName}}
                                        <span v-if="chat.messages[chat.messages.length-1].senderInfo.MiddleName !='' || chat.messages[chat.messages.length-1].senderInfo.MiddleName != null">
                                            {{chat.messages[chat.messages.length-1].senderInfo.MiddleName}}
                                        </span>
                                    </small>
                                </div>
                                <div v-else>
                                    <p class="mb-1 last_message">В этой беседе ещё нет сообщений</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-8" style="position: relative;">
                <div class="chat-container" v-on:scroll="onScroll" ref="chatContainer">
                    <!--                    <infinite-loading direction="top" @infinite="infiniteHandler" spinner="waveDots">-->
                    <!--                        <span slot="no-results">-->
                    <!--                        </span>-->
                    <!--                        <span slot="no-more">-->
                    <!--                        </span>-->
                    <!--                    </infinite-loading>-->
                    <message :messages="chatMessages"></message>
                </div>
                <div class="typer" v-if="message_mode=='text'">
                    <b-button class="rounded-circle border p-0 mx-1 paperclip-button" :disabled="message_loading">
                        <input type="file" id="file" ref="file" v-on:change="handleFile()"/>
                        <b-icon icon="paperclip" scale="2" aria-hidden="true"></b-icon>
                    </b-button>
                    <b-form-textarea
                        id="textarea"
                        class="mx-1"
                        v-model="message_text"
                        size="sm"
                        placeholder="Напишите сообщение..."
                        rows="1"
                        max-rows="2"
                        no-resize
                        @keydown.enter.exact.prevent="sendChatMessage('text')"
                    >
                    </b-form-textarea>
                    <vue-record-audio v-if="message_text.trim()==''&&message_mode=='text'" :mode="'press'" @stream="onStream" @result="onResult" class="audio-button mx-1"/>
                    <b-button v-else class="audio-button rounded-circle p-2 mx-1 text-white border-0" :disabled="message_loading" @click="sendChatMessage('text')">
                        <i class="bi-blank icon-send b-icon bi m-0 w-auto h-auto" style="font-size: 25px;" v-if="!message_loading"></i>
                        <b-spinner small v-if="message_loading"></b-spinner>
                        <span class="sr-only" v-if="message_loading">Loading...</span>
                    </b-button>
                </div>
                <div class="typer" v-if="message_mode=='image'">
                    <b-button class="rounded-circle border p-0 mx-1 paperclip-button" :disabled="message_loading" @click="clearMessage">
                        <b-icon icon="x" scale="2" aria-hidden="true"></b-icon>
                    </b-button>
                    <div class="row m-auto p-2 w-100 h-100 align-items-center justify-content-center">
                        <div class="col-4 h-100 text-center">
                            <img class="preview" :src="preview"/>
                        </div>
                        <div class="col-8 p-0 p-sm-1 p-md-2 h-100">
                            <div style="text-overflow: ellipsis;overflow: hidden;width: 100%;height: 100%;">{{image_record.name}}</div>
                        </div>
                    </div>
                    <b-button class="audio-button rounded-circle p-2 mx-1 text-white border-0" :disabled="message_loading" @click="sendChatMessage('image')">
                        <i class="bi-blank icon-send b-icon bi m-0 w-auto h-auto" style="font-size: 25px;" v-if="!message_loading"></i>
                        <b-spinner small v-if="message_loading"></b-spinner>
                        <span class="sr-only" v-if="message_loading">Loading...</span>
                    </b-button>
                </div>
                <div class="typer" v-if="message_mode=='file'">
                    <b-button class="rounded-circle border p-0 mx-1 paperclip-button" :disabled="message_loading" @click="clearMessage">
                        <b-icon icon="x" scale="2" aria-hidden="true"></b-icon>
                    </b-button>
                    <div class="row m-auto p-2 w-100 h-100 align-items-center justify-content-center">
                        <div class="col-4 h-100 text-center">
                            <img class="preview" :src="preview"/>
                        </div>
                        <div class="col-8 p-0 p-sm-1 p-md-2 h-100">
                            <div style="text-overflow: ellipsis;overflow: hidden;width: 100%;height: 100%;">{{file_record.name}}</div>
                        </div>
                    </div>
                    <b-button class="audio-button rounded-circle p-2 mx-1 text-white border-0" :disabled="message_loading" @click="sendChatMessage('file')">
                        <i class="bi-blank icon-send b-icon bi m-0 w-auto h-auto" style="font-size: 25px;" v-if="!message_loading"></i>
                        <b-spinner small v-if="message_loading"></b-spinner>
                        <span class="sr-only" v-if="message_loading">Loading...</span>
                    </b-button>
                </div>
                <div class="typer justify-content-between" v-if="message_mode=='audio'">
                    <b-button class="rounded-circle border p-0 mx-1 paperclip-button" :disabled="message_loading" @click="clearMessage">
                        <b-icon icon="x" scale="2" aria-hidden="true"></b-icon>
                    </b-button>
                    <audio-player :audio="audio_record" :type="'file'" style="width:60%"></audio-player>
                    <b-button class="audio-button rounded-circle p-2 mx-1 text-white border-0" :disabled="message_loading" @click="sendChatMessage('audio')">
                        <i class="bi-blank icon-send b-icon bi m-0 w-auto h-auto" style="font-size: 25px;" v-if="!message_loading"></i>
                        <b-spinner small v-if="message_loading"></b-spinner>
                        <span class="sr-only" v-if="message_loading">Loading...</span>
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message_text: '',
                audio_record: null,
                image_record: null,
                file_record: null,
                message_mode:'text',
                preview:'',
                message_loading:false,
                flag:false,
                seconds:0,
                interval:'',
                files: [],
                currentChat: {},
                chatMessages: [],
                emojiPanel: false,
                currentRef: {},
                loading: false,
                totalChatHeight: 0,
                search:'',
                results:[],
                options: {
                    // minMatchCharLength: 2,
                    shouldSort: true,
                    threshold: 0.2,
                    keys: ['manager_title', 'client_title']
                },
                new_chat:{
                    name:'',
                    user:null
                },
                load:false,
            }
        },
        mounted () {
            this.chatMessages=[]
            // this.$store.dispatch('loadUserChats').then(()=>{
            //     this.loadChat()
            // })
            this.loadChat()
            this.getUser()
            console.log('this.chatMessages', this.chatMessages)
            console.log('this.currentChat', this.currentChat)
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
            },
            available_users() {
                return this.$store.getters.available_users
            },
            filteredChats() {
                if(this.search.trim() === '')
                {
                    return this.chats
                }
                else {
                    return this.results
                }
            }
            // onNewMessageAdded () {
            //     const that = this
            //     let onNewMessageAdded = function (snapshot, newMessage = true) {
            //         let message = {};
            //         /*eslint-disable */
            //         var urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
            //         /*eslint-enable */
            //         message.message_text = message.message_text
            //             .replace(/&/g, '&amp;')
            //             .replace(/</g, '&lt;')
            //             .replace(/>/g, '&gt;')
            //             .replace(/"/g, '&quot;')
            //             .replace(/'/g, '&#039;')
            //         message.message_text = message.message_text.replace(urlPattern, "<a href='$1'>$1</a>")
            //         if (!newMessage) {
            //             // that.chatMessages.unshift(that.processMessage(message))
            //             that.chatMessages.unshift(message)
            //             that.scrollTo()
            //         } else {
            //             that.chatMessages.push(message)
            //             that.scrollToEnd()
            //         }
            //     }
            //     return onNewMessageAdded
            // }
        },
        watch: {
            '$route.params.id' (newId, oldId) {
                // this.currentRef.off('child_added', this.onNewMessageAdded)
                console.log('here wattch')
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
                        this.load=true
                        if (this.$route.params.id !== undefined) {
                            this.chatMessages = []
                            this.currentChat = this.chats.find((chat) => {if(chat.id == this.$route.params.id)
                            {
                                return true;
                            }});
                            // this.chatMessages = this.currentChat.messages;
                            this.currentChat.messages.forEach((item) => {
                                this.onNewMessageAdded(item, false);
                            })
                            // let chatID = this.id
                            // this.currentRef = firebase.database().ref('messages').child(chatID).child('messages').limitToLast(20)
                            // this.currentRef.on('child_added', this.onNewMessageAdded)
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
                    // let chatID = this.id
                    let currentTopMessage = this.chatMessages[0]
                    if (currentTopMessage === undefined) {
                        this.loading = false
                        return
                    }
                    // firebase.database().ref('messages').child(chatID).child('messages').orderByKey().endAt(currentTopMessage.key).limitToLast(20).once('value').then(
                    //     function (snapshot) {
                    //         let tempArray = []
                    //         snapshot.forEach(function (item) {
                    //             tempArray.push(item)
                    //         })
                    //         if (tempArray[0].key === tempArray[1].key) return
                    //         tempArray.reverse()
                    //         tempArray.forEach(function (child) { that.onNewMessageAdded(child, false) })
                    that.loading = false
                    //     }
                    // )
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
                    // that.chatMessages.unshift(that.processMessage(message))
                    // this.chatMessages.unshift(message)
                    this.chatMessages.push(message)
                    console.log('!newMessage')
                    this.scrollTo()
                } else {
                    this.chatMessages.push(message)
                    console.log('newMessage')
                    this.scrollToEnd()
                }

            },
            async sendChatMessage (type) {
                this.message_loading = true;
                // if (this.message_text !== '') {
                if(this.audio_record!=null){
                    this.files.push(this.audio_record)
                }
                if(this.image_record!=null){
                    this.files.push(this.image_record)
                }
                if(this.file_record!=null){
                    this.files.push(this.file_record)
                }
                var message = {
                    message_text: this.message_text,
                    date: new Date().toString(),
                    conversation_id: this.currentChat.id,
                    sender_id: this.user.id,
                    type: type,
                    files: this.files,
                    senderInfo: this.user.info,
                    selfMessage: true
                }
                let formData = new FormData();
                formData.append("message", JSON.stringify(message));

                for (var i = 0; i < this.files.length; i++) {
                    let file = this.files[i].data;

                    formData.append('files[' + i + ']', file);
                }
                await this.$store.dispatch('sendMessage', formData).then(resp=>{
                    this.onNewMessageAdded(resp.data.message, true);
                    this.$store.commit('addChatMessage', resp.data.message);
                    this.message_loading = false;
                });
                this.clearMessage();
                // }
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
            },
            onStream(stream) {
                console.log('before countSeconds')
                this.countSeconds();
                console.log('after countSeconds')
                console.log('Got a stream object:', stream);
                console.log('after stream object')

            },
            onResult(data) {
                var time = Date.now();
                var date = new Date();
                // this.files.push({
                //     type: 'audio',
                //     name: 'record-'+time+'.mp3',
                //     src: window.URL.createObjectURL(data),
                //     data: data,
                //     date: date,
                // })
                this.audio_record = {
                    type: 'audio',
                    name: 'record-'+time+'.mp3',
                    src: window.URL.createObjectURL(data),
                    data: data,
                    date: date,
                    seconds: this.seconds
                }
                this.countSeconds();
                this.message_mode='audio';

            },
            handleFile() {
                var time = Date.now();
                var date = new Date();
                let uploadedFile = this.$refs.file.files;
                if (/\.(jpe?g|png|svg)$/i.test(uploadedFile[0].name))
                {
                    let reader = new FileReader();
                    reader.addEventListener("load", function() {
                        this.preview = reader.result;
                    }.bind(this), false);
                    reader.readAsDataURL(uploadedFile[0]);
                    // this.image_record = uploadedFile[0];
                    this.image_record = {
                        type: 'image',
                        name: uploadedFile[0].name,
                        data: uploadedFile[0],
                        date: date,
                    }
                    this.message_mode = 'image';
                }
                else if(/\.(pdf|txt|docx|doc)$/i.test(uploadedFile[0].name))
                {
                    // let reader = new FileReader();
                    // reader.addEventListener("load", function() {
                    //     this.preview = reader.result;
                    // }.bind(this), false);
                    // reader.readAsDataURL(uploadedFile[0]);
                    // this.file_record = uploadedFile[0];
                    this.file_record = {
                        type: 'file',
                        name: uploadedFile[0].name,
                        data: uploadedFile[0],
                        date: date,
                    }
                    this.message_mode = 'file';
                    this.$nextTick(function() {
                        this.preview = '/images/LOGO-1.png';
                    });
                }
                else
                {
                    // this.$nextTick(function() {
                    //     this.preview = '/images/LOGO-1.png';
                    // });
                    this.sendMessage('Неверный формат файла')
                    this.clearMessage();
                }
            },
            clearMessage() {
                this.message_text='';
                this.image_record=null;
                this.audio_record=null;
                this.file_record=null;
                this.message_mode='text'
            },
            countSeconds() {
                console.log('this.flag 1', this.flag )
                this.flag = !this.flag
                console.log('this.flag ', this.flag )
                if (this.flag == true) {
                    this.seconds=0;
                    this.interval = setInterval(this.incrementSeconds, 1000);
                }
                else {
                    clearInterval(this.interval)
                    this.audio_record.seconds = this.seconds
                }
            },
            incrementSeconds() {
                this.seconds += 1;
            },
            runSearch () {
                if(this.search.trim() === '')
                {
                    this.results = this.chats
                }
                else {
                    // if(this.search.length > 2){
                    //     this.options.minMatchCharLength=this.search.length
                    // }
                    this.$search(this.search, this.chats, this.options).then(result => {
                        this.results = []
                        result.forEach(item=>{
                            this.results.push(item)
                        })
                    })
                }
                console.log(this.results)
            },
            open(){
                this.$bvModal.show("new-chat");
            },
            cancel(){
                this.$bvModal.hide("new-chat");
            },
            async createChat() {
                this.loading = true;
                var payload = {
                    user_id: this.new_chat.user.id,
                    name: this.new_chat.user.info.FullName
                }
                await this.$store.dispatch('createChat', payload).then( resp => {
                    this.$store.commit('addChat', resp.data.chat)
                    this.$store.commit('removeAvailableUser', this.new_chat.user.id)
                    this.loading=false;
                    this.new_chat = {
                        name:'',
                        user:null
                    };
                    this.cancel();
                })
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от TravelClub',
                    text: message
                });
            },
        }
    }
</script>

<style scoped>
    .form-control:focus {
        color: #495057;
        background-color: #fff;
        border-color: #f08b23;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(240, 139, 35, 0.25);
    }
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
        max-height:calc(100vh - 6.9rem);
        /*max-height:70vh;*/
    }
    .typer{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        bottom: 0;
        height: 4.9rem;
        width: 100%;
        background-color: #fff;
        /*box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);*/
        border: 2px solid #f08b23;
        border-radius: 5px;
    }
    .typer input[type=text]{
        position: absolute;
        left: 2.5rem;
        padding: 1rem;
        width: 80%;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 1.25rem;
    }
    /*.typer button {*/
    /*    color: #fff;*/
    /*    background-color: #f8a105;*/
    /*    border-color: #f8a105;*/
    /*    outline: none !important;*/
    /*}*/
    /*.typer button:hover{*/
    /*    color: #fff;*/
    /*    background-color: #063065;*/
    /*    border-color: #063065;*/
    /*}*/
    .chat-container{
        box-sizing: border-box;
        height: calc(95vh - 9.5rem);
        overflow-y: auto;
        padding: 10px;
        /*background-color: #f2f2f2;*/
        background-color: #fff;
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
    @media screen and (max-width: 576px) {
        .chat-container {
            height: calc(95vh - 6.8rem);
        }
    }
    ::-webkit-file-upload-button {
        cursor:pointer;
    }
    input[type="file"]{
        /*opacity: 0;*/
        /*width: 100%;*/
        /*height: 70px;*/
        /*position: absolute;*/
        /*cursor: pointer;*/
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
    }
    .preview{
        height: 100%;
        max-width: 90%;
    }
    .paperclip-button {
        position: relative;
        max-width: 45px;
        max-height: 45px;
        width: 100%;
        height: 100%;
        background: transparent;
        color: #f08b23;
        border-color: #f08b23 !important;
        overflow: hidden;
    }
    .paperclip-button:hover {
        color: #f08b23;
        border-color: #f08b23 !important;
    }
    .paperclip-button:active {
        background: #f08b23 !important;
        color: #fff !important;
    }
    .paperclip-button:focus {
        background: #f08b23 !important;
        color: #fff !important;
        outline: none !important;
    }
    .audio-button {
        max-width: 45px;
        max-height: 45px;
        height: 100%;
        width: 100%;
        background-color: #f08b23;
    }
    .audio-button:hover {
        background-color: #f08b23 !important;
    }
</style>
<style>
    .loading-wave-dots .wave-item:nth-child(2) {
        margin-left: -20px;
        -webkit-animation-delay: .14s !important;
        animation-delay: .14s !important;
    }
    .loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(3) {
        margin-left: -4px;
        -webkit-animation-delay: .28s !important;
        animation-delay: .28s !important;
    }
    .loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(4) {
        margin-left: 12px;
        -webkit-animation-delay: .42s !important;
        animation-delay: .42s !important;
    }
    .loading-wave-dots[data-v-46b20d22] .wave-item:last-child {
        margin-left: 28px;
        -webkit-animation-delay: .56s !important;
        animation-delay: .56s !important;
    }
    .loading-wave-dots .wave-item {
        -webkit-animation: wave-dots linear 2.8s infinite !important;
        animation: wave-dots linear 2.8s infinite !important;
    }
    @keyframes wave-dots {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            background: #5b43f3;
        }
        10% {
            -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
            background: #5b43f3;
        }
        20% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            background: #f3434b;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            background: #5b43f3;
        }
    }

</style>
