import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)

export default {
    state: {
        chats: [],
        available_users:[]
    },
    mutations: {
        setChats (state, payload) {
            // payload["0"] = {name: "Default"}
            state.chats = payload
        },
        addChat (state, payload) {
            state.chats.push(payload);
        },
        addChatMessage (state, payload) {
            let foundIndex = state.chats.findIndex(item => item.id === payload.conversation_id);
            payload.sender_info = this.state.auth.user.info
            state.chats[foundIndex].messages.push(payload)
        },
        setAvailableUsers (state, payload) {
            state.available_users = payload
        },
        removeAvailableUser (state, payload) {
            let foundIndex = state.available_users.findIndex(item => item.id === payload);
            if (foundIndex >= 0) {
                state.available_users.splice(foundIndex, 1);
            }
        },
    },
    actions: {
        async sendMessage ({commit, context}, payload) {
            // let chatID = payload.chatID
            // const message = {
            //     conversation_id: payload.chat_id,
            //     sender_id: payload.user_id,
            //     message_text: payload.message_text,
            //     files: payload.files,
            //     data_files: payload.data_files,
            //     // date: payload.date
            // }
            // firebase.database().ref('messages').child(chatID).child('messages').push(message)
            //     .then(
            //         (data) => {
            //         }
            //     )
            //     .catch(
            //         (error) => {
            //             console.log(error)
            //         }
            //     )
           return await axios.post('/auth/sendChatMessage', payload
                , {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            // commit('addChatMessage', resp.data.message);
            // ).then((response)=> {
            //     // commit('addChatMessage', response.data.message);
            // });
        },
        async loadUserChats ({commit}) {
            // let user = context.getters.user
            try {
                const resp = await axios.get('/auth/chats')
                    .then((response) => {
                        console.log(response.data.chats)
                        commit('setChats', response.data.chats);
                        commit('setAvailableUsers', response.data.users);
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
            // firebase.database().ref('users').child(user.id).child('chats').orderByChild("timestamp").once("value", function(snapshot) {
            //     let chats = snapshot.val()
            //     if(chats == null) {
            //         chats = {}
            //     }
            //
            //     for(let chatId in chats) {
            //         chats[chatId].name = "Loading..."
            //         firebase.database().ref('chats').child(chatId).once('value', function (snapshot) {
            //             chats[chatId].name = snapshot.val().name
            //             context.commit('setChats', chats)
            //         })
            //     }
            // })
        },
        async loadClientChat ({commit}) {
            try {
                const resp = await axios.get('/auth/loadClientChat')
                    .then((response) => {
                        commit('setChats', [response.data.chat]);
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async createChat ({commit}, payload) {
            try {
                console.log('createChat', payload)
                return await axios.post('/auth/newChat', payload)

            } catch (error) {
                console.log(error)
                throw error
            }
        }
    },
    getters: {
        chats (state) {
            return state.chats
        },
        available_users (state) {
            return state.available_users
        }
    }
}
