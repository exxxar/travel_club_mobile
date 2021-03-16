import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default {
    state: {
        messages: [],
        deleted_messages: [],
    },
    getters: {
        messages(state) {
            return state.messages;
        },
        deleted_messages(state) {
            return state.deleted_messages;
        },
    },
    mutations: {
        addMessage(state, payload) {
            state.messages.push(payload)
        },
        setMessages(state, payload) {
            state.messages = payload;
        },
        setDeletedMessages(state, payload) {
            state.deleted_messages = payload;
        },
        deleteMessage(state, payload) {
            let foundIndex = state.messages.findIndex(x => x.id === payload);
            state.messages.splice(foundIndex, 1);
        },
        removeMessage(state, payload) {
            let message = state.messages.findIndex(x => x.id === payload);
            if (message >= 0) {
                let item = state.messages[message];
                item.deleted_at = "-";
                state.messages.splice(message, 1);
                state.deleted_messages.push(item);
            }
        },
        forceDeleteMessage(state, payload) {
            let message = state.deleted_messages.findIndex(x => x.id === payload);
            state.deleted_messages.splice(message, 1);
        },
        restoreMessage(state, payload) {
            let message = state.deleted_messages.findIndex(x => x.id === payload);
            if (message >= 0) {
                let item = state.deleted_messages[message];
                item.deleted_at = null;
                state.deleted_messages.splice(message, 1);
                state.messages.push(item);
            }
        },
    },
    actions: {
        addMessage ({commit}, payload) {
            commit('addMessage', payload)
        },
        async setMessages({commit}) {
            try {
                const resp = await axios.get('auth/messages')
                    .then((response) => {
                        // response.data.messages.forEach( item =>
                        // {
                        //     item.show = false;
                        //     item.isLoading = false;
                        //     if(!item.user){
                        //         item.user='';
                        //     }
                        //     if( item.message_type == 'Голосовая заявка')
                        //    {
                        //        item.expand= {file_path:item.file_path, message:''}
                        //    }
                        //    if( item.message_type == 'Обратная связь') {
                        //        item.expand= {message: item.message, file_path:''};
                        //    }
                        //     if( item.message_type == 'Обратный звонок') {
                        //         item.expand= {message: '', file_path:''};
                        //     }
                        //     if( item.message_type == 'Заявка менеджера') {
                        //         item.expand= {user: item.user, message: '', file_path:''};
                        //     }
                        // });
                        commit('setMessages', response.data.messages);
                        commit('setDeletedMessages', response.data.deleted_messages);
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },

        async newMessage({commit}, payload) {
            try{
                const resp = await axios.post('/auth/messages/new', payload)
                    .then((response) => {
                        commit('addMessage', response.data.message)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async deleteMessage({commit}, payload) {
            try{
                const resp = await axios.post('/auth/messages/delete/'+ payload)
                    .then((response) => {
                        commit('deleteMessage', payload)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async removeMessage({state, commit}, id) {
            commit('removeMessage', id)
            return await axios
                .post(`/auth/messages/delete/${id}`)
        },
        async forceDeleteMessage({state, commit}, id) {
            commit('forceDeleteMessage', id)
            return await axios
                .post(`/auth/messages/forceDelete/${id}`)
        },
        async restoreMessage({state, commit}, id) {
            commit('restoreMessage', id)
            return await axios
                .post(`/auth/messages/restore/${id}`)
        },
        // async updateMessage ({commit}, payload) {
        //     const resp = await axios.post('messages/update', payload)
        // },
    }
};
