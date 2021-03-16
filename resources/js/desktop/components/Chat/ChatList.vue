<template>
    <div>
        <div class="container">
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
                            :disabled="new_chat.user==null ||new_chat.user==''"
                        >
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
            <div class="row w-100 mx-auto mt-3">
                <div class="col-12 p-0">
                    <div class="row w-100 m-auto justify-content-center align-items-center py-2" style="background: #f08b23; color: white; border-radius: 5px">
                        <div class="col-6 col-sm-6">
                            <p class="my-auto">
                                <span class="chat-name">Чаты</span>
                            </p>
                        </div>
                        <div class="col-6 col-sm-6">
                        <span class="chat-name" style="font-size: 25px; float:right" v-if="available_users.length>0 && user.role != 'client'" @click="open">
                                <b-icon icon="plus-circle-fill"></b-icon>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row w-100 mx-auto my-2">
                <b-form-input
                    v-model="search"
                    :placeholder="'Поиск чата'"
                    class="mb-0 travel-input"
                    @input="runSearch"
                >
                </b-form-input>
            </div>
            <div class="row w-100 mx-auto mb-2">
                <div class="col-12 pt-3 px-0" v-for="chat in filteredChats" :key="chat.id">
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action flex-column align-items-start" @click="toChat(chat.id)">
                            <div class="d-flex w-100 justify-content-between">
<!--                                <h6 class="mb-1" v-if="user.role =='manager'||user.role =='admin'">{{chat.manager_title}}</h6>-->
<!--                                <h6 class="mb-1" v-if="user.role =='client'">{{chat.client_title}}</h6> -->
                                <h6 class="mb-1" v-if="chat.creator_id == user.id">{{chat.manager_title}}</h6>
                                <h6 class="mb-1" v-else>{{chat.client_title}}</h6>
                                <small v-if="chat.messages.length>0">{{chat.messages[chat.messages.length-1].created_at | moment("from", "now") }}</small>
                            </div>
                            <div v-if="chat.messages.length>0">
                                <p class="mb-1 last_message" style="color: #f8a105;font-size: 95%;">{{chat.messages[chat.messages.length-1].message_text}}</p>
                                <small>{{chat.messages[chat.messages.length-1].senderInfo.FirstName}}
                                    <span v-if="chat.messages[chat.messages.length-1].senderInfo.MiddleName !='' || chat.messages[chat.messages.length-1].senderInfo.MiddleName != null">
                                            {{chat.messages[chat.messages.length-1].senderInfo.MiddleName}}
                                        </span>
                                </small>
                            </div>
                            <div v-else>
                                <p class="mb-1 last_message" style="color: #f8a105;font-size: 95%;">В этой беседе ещё нет сообщений</p>
<!--                                <small>{{chat.messages[chat.messages.length-1].user.FirstName}} {{chat.messages[chat.messages.length-1].user.MiddleName}}</small>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="chats.length<=0&&load==false">
                <div class="col-12 skeleton-tr pt-3 px-3" v-for="n in 5"  :key="n">
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
            <div class="row w-100 mx-auto mb-2" v-if="chats.length<=0&&load==true">
                <p>Пока у Вас нет никаких чатов</p>
            </div>
        </div>
    </div>

</template>

<script>
    import 'tb-skeleton/dist/skeleton.css';
    import { TbSkeleton } from 'tb-skeleton';
    export default {
        data: () => ({
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
            loading:false,
            load:false
        }),
        created () {
            this.getUser()
            // window.addEventListener('scroll', this.onScroll)
        },
        mounted() {
            this.loadChats()
        },
        // destroyed () {
        //     // window.removeEventListener('scroll', this.onScroll)
        // },
        computed: {
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
        },
        methods: {
            toChat(id)
            {
                this.$router.push('/'+this.user.role+'/chat/'+id)
            },
            async getUser() {
                if (!this.user) {
                    await this.$store.dispatch('getUser').then( () => {
                        // this.tours = this.user.tours.filter((item) => {
                        //     if(item.Archive == false) {
                        //         return true
                        //     }
                        // });
                    })
                }
                else{
                    // this.tours = this.user.tours.filter((item) => {
                    //     if(item.Archive == false) {
                    //         return true
                    //     }
                    // });
                }
            },
            async loadChats() {
                if(this.chats.length<=0) {

                    await this.$store.dispatch('loadUserChats').then(()=>{
                        this.load = true
                    })
                }
            },
            runSearch () {
                if(this.search.trim() === '')
                {
                    this.results = this.chats
                }
                else {
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
                console.log()
                var payload = {
                    user_id: this.new_chat.user.id,
                    name: this.new_chat.user.info.FullName
                }
                await this.$store.dispatch('createChat', payload).then( resp => {
                    this.$store.commit('addChat', resp.data.chat);
                    this.$store.commit('removeAvailableUser', this.new_chat.user.id)
                    this.new_chat = {
                        name:'',
                        user:null
                    };
                    this.loading=false;
                    this.cancel();
                })
            }
            // onScroll() {
            //     if(window.top.scrollY + window.innerHeight >= document.body.scrollHeight - 100 && !this.loading) {
            //         this.loadRecentChatsByLastKey(this.loadedChats[this.loadedChats.length - 1].key)
            //     }
            // },
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
    .active-chat {
        background: #f08b23 !important;
        border-color: #f08b23 !important;
    }
</style>
