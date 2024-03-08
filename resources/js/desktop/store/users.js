import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default {
    state: {
        users: [],
        selected_user: null,
        users_loading: false,
        users_pagination: {}
        // deleted_users: [],
        // managers:[],
        // clients:[],
    },
    getters: {
        users(state) {
            return state.users;
        },
        users_loading(state) {
            return state.users_loading;
        },
        users_pagination(state) {
            return state.users_pagination;
        },
        // clients(state) {
        //     return state.clients;
        // },
        // managers(state) {
        //     return state.managers;
        // },
        // deleted_users: (state, getters, rootState) => {
        //     return state.deleted_users;
        // },
    },
    mutations: {
        addUser(state, payload) {
            state.users.push(payload)
        },
        setUsers(state, payload) {
            state.users = payload
        },
        setUsersLoading(state, payload) {
            return (state.users_loading = payload);
        },
        setUsersPagination(state, payload) {
            return (state.users_pagination = payload);
        },
        // setDeletedUsers(state, payload) {
        //     state.deleted_users = payload
        // },
        // setClients(state, payload) {
        //     state.clients = payload
        // },
        // setManagers(state, payload) {
        //     state.managers = payload
        // },
        // deleteUser(state, payload) {
        //     let foundIndex = state.users.findIndex(item => item.id === payload);
        //     state.users.splice(foundIndex, 1);
        // },
        // deleteClient(state, payload) {
        //     let foundIndex = state.clients.findIndex(item => item.id === payload);
        //     state.clients.splice(foundIndex, 1);
        // },

        saveUser(state, payload) {
            let user = state.users.findIndex(x => x.id === payload.id);
            state.users[user] = payload;
        },
        saveUserInfo(state, payload) {
            let user = state.users.findIndex(x => x.id === payload.UserId);
            state.users[user].info = payload;
        },
        removeUser(state, payload) {
            let user = state.users.findIndex(x => x.id === payload);
            if (user >= 0) {
                let item = state.users[user];
                item.deleted_at = "-";
                state.users.splice(user, 1);
                state.deleted_users.push(item);
            }
        },
        // forceDeleteUser(state, payload) {
        //     let user = state.deleted_users.findIndex(x => x.id === payload);
        //     state.deleted_users.splice(user, 1);
        // },
        // restoreUser(state, payload) {
        //     let user = state.deleted_users.findIndex(x => x.id === payload);
        //     if (user >= 0) {
        //         let item = state.deleted_users[user];
        //         item.deleted_at = null;
        //         state.deleted_users.splice(user, 1);
        //         state.users.push(item);
        //     }
        // },
    },
    actions: {
        async setUsers({commit}) {
            try {
                commit('setUsersLoading', true);
                await axios.get('/auth/admin/users')
                    .then((response) => {
                    commit('setUsers', response.data.data);
                    commit('setUsersPagination', {...response.data.meta, ...response.data.links});
                }).finally(() => {
                    commit('setUsersLoading', false);
                });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async newUser({commit}, payload) {
            try {
                return await axios.post('/auth/admin/users/new', payload)
                    .then((response) => {
                        commit('addUser', response.data.user)
                        if (response.data.chat != null) {
                            commit('addChat', response.data.chat)
                        }
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async updateUser ({commit}, payload) {
          return await axios.post('/auth/admin/users/update', payload)
        },
        // async setClients({commit}) {
        //     try {
        //         const resp = await axios.get('/auth/manager/clients')
        //             .then((response) => {
        //                 console.log(response.data.users)
        //                 var users = response.data.users.forEach( item => {
        //                     item.show = false;
        //                     item.isLoading = false;
        //                     item.expand = {id: item.id, name:item.name, email:item.email}
        //                 })
        //                 commit('setClients', response.data.users);
        //             });
        //     } catch (error) {
        //         console.log(error)
        //         throw error
        //     }
        // },
        // async setManagers({commit}) {
        //     try {
        //         const resp = await axios.get('/auth/manager/managers')
        //             .then((response) => {
        //                 // var users = response.data.users.forEach( item => {
        //                 //     item.show = false;
        //                 //     item.isLoading = false;
        //                 //     item.expand = {id: item.id, name:item.name, email:item.email}
        //                 // })
        //                 commit('setManagers', response.data.users);
        //             });
        //     } catch (error) {
        //         console.log(error)
        //         throw error
        //     }
        // },
        async deleteUser({commit}, payload) {
            try {
                const resp = await axios.post('/auth/admin/users/delete/' + payload)
                    .then((response) => {
                        commit('deleteUser', payload)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        // async deleteClient({commit}, payload) {
        //     try{
        //         const resp = await axios.post('users/delete/'+ payload)
        //             .then((response) => {
        //                 commit('deleteClient', payload)
        //                 commit('deleteUser', payload)
        //             });
        //     } catch (error) {
        //         console.log(error)
        //         throw error
        //     }
        // },

        async addUser({state, commit}, payload) {
            try {
                const resp = await axios.post('/auth/admin/users/new', payload)
                    .then((response) => {
                        commit('addUser', response.data.user)
                        if (response.data.chat != null) {
                            commit('addChat', response.data.chat)
                        }
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async removeUser({state, commit}, id) {
            commit('removeUser', id)
            return await axios
                .delete(`/auth/admin/users/${id}`)
        },
        async forceDeleteUser({state, commit}, id) {
            commit('forceDeleteUser', id)
            return await axios
                .post(`/auth/admin/users/forceDelete/${id}`)
        },
        async restoreUser({state, commit}, id) {
            commit('restoreUser', id)
            return await axios
                .post(`/auth/admin/users/restore/${id}`)
        },
        async saveUser({state, commit}, param) {
            return axios
                .put(`/auth/admin/users/${param.id}`, {
                    param: param.key,
                    value: param.value
                });
        },
        async saveUserInfo({state, commit}, param) {
            return axios
                .put(`/auth/admin/users/user-info/${param.id}`, {
                    param: param.key,
                    value: param.value
                });
        },

    }
};
