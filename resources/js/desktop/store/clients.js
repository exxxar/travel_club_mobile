import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default {
    state: {
        clients:[],
        deleted_clients:[],
    },
    getters: {
        clients(state) {
            return state.clients;
        },
        deleted_clients(state) {
            return state.deleted_clients;
        },
    },
    mutations: {
        //client
        addClient(state, payload) {
            state.clients.unshift(payload)
        },
        setClients(state, payload) {
            state.clients = payload
        },
        setDeletedClients(state, payload) {
            state.deleted_clients = payload
        },
        deleteClient(state, payload) {
            let foundIndex = state.clients.findIndex(item => item.id === payload);
            state.clients.splice(foundIndex, 1);
        },
        saveClient(state, payload) {
            let client = state.clients.findIndex(x => x.id === payload.id);
            state.clients[client] = payload;
        },
        removeClient(state, payload) {
            let client = state.clients.findIndex(x => x.id === payload);
            if (client >= 0) {
                let item = state.clients[client];
                item.deleted_at = "-";
                state.clients.splice(client, 1);
                state.deleted_clients.push(item);
            }
        },
        forceDeleteClient(state, payload) {
            state.deleted_clients.filter(client => client.id !== payload);
        },
        restoreClient(state, payload) {
            let client = state.deleted_clients.findIndex(x => x.id === payload);
            if (client >= 0) {
                let item = state.deleted_clients[client];
                item.deleted_at = null;
                state.deleted_clients.splice(client, 1);
                state.clients.push(item);
            }
        },


        //client-info
        saveClientInfo(state, payload) {
            let client = state.clients.findIndex(x => x.id === payload.UserId);
            state.clients[client].info = payload;
        },

        //client-tour
        addClientTour(state, payload) {
            let foundIndex = state.clients.findIndex(item => item.id === payload.UserId);
            state.clients[foundIndex].tours.unshift(payload)
        },
        deleteClientTour(state, payload) {
            let index = state.clients.findIndex(item => item.id === payload.UserId);
            let foundIndex = state.clients[index].tours.findIndex(item => item.id === payload.id);
            state.clients[index].tours.splice(foundIndex, 1);
        },
        updateClientTour(state, payload) {
            let index = state.clients.findIndex(item => item.id === payload.UserId);
            let foundIndex = state.clients[index].tours.findIndex(item => item.id === payload.id);
            state.clients[index].tours[foundIndex] = payload;
        },
        addToArchive(state, payload) {
            // let index = state.user.findIndex(item => item.id === payload.UserId);
            let index = this.state.auth.user.tours.findIndex(item => item.id === payload.id);
            this.state.auth.user.tours[index].Archive = payload.Archive;
            this.state.auth.user.archive.push(payload)
            // state.user.tours.splice(index, 1);
        },
        removeFromArchive(state, payload) {
            let index = this.state.auth.user.archive.findIndex(item => item.id === payload.id);
            this.state.auth.user.archive.splice(index, 1)
            let foundIndex = this.state.auth.user.tours.findIndex(item => item.id === payload.id);
            this.state.auth.user.tours[foundIndex].Archive = payload.Archive;
            // state.user.tours.splice(index, 1);
        },
        saveClientTour(state, payload) {
            let client = state.clients.findIndex(x => x.id === payload.UserId);
            let tour = state.clients[client].tours.findIndex(x => x.id === payload.id);
            state.clients[client].tours[tour] = payload;
        },
        saveClientTourInfo(state, payload) {
            let client = state.clients.findIndex(x => x.id === payload.UserId);
            let tour = state.clients[client].tours.findIndex(x => x.id === payload.id);
            state.clients[client].tours[tour].TourInfo = payload;
        },
        forceDeleteClientTour(state, payload) {
            let client = state.clients.findIndex(x => x.id === payload.client_id);
            // let tour = state.clients[client].tours.findIndex(x => x.id === payload.id);
            let tour = state.clients[client].tours.findIndex(tour => tour.id !== payload.id);
            state.clients[client].tours.splice(tour, 1);
        },
    },
    actions: {
        //client
        async setClients({commit}) {
            try {
                return await axios.get('/auth/manager/clients')
                    // .then((response) => {
                    //     // console.log(response.data.users)
                    //     // response.data.users.forEach( item => {
                    //     //     item.show = false;
                    //     //     item.isLoading = false;
                    //     //     item.expand = {id: item.id, name:item.name, email:item.email};
                    //     //     item.tours.forEach( tour => {
                    //     //         tour.show = false;
                    //     //         tour.isLoading = false;
                    //     //         tour.expand = {
                    //     //             country: tour.TourInfo.country,
                    //     //             resort: tour.TourInfo.resort,
                    //     //             hotel: tour.TourInfo.hotel,
                    //     //             meal:tour.TourInfo.meal,
                    //     //             room_type:tour.TourInfo.room_type,
                    //     //             tour_operator:tour.TourInfo.tour_operator,
                    //     //             date_range:{start:tour.TourInfo.date_range.start, end:tour.TourInfo.date_range.end},
                    //     //             price:tour.TourInfo.price,
                    //     //             paid:tour.TourInfo.paid,
                    //     //             left:tour.TourInfo.left,
                    //     //             services:tour.TourInfo.services,
                    //     //             avia_tickets:tour.TourInfo.avia_tickets,
                    //     //             passengers:tour.TourInfo.passengers,
                    //     //             files:tour.TourInfo.files,
                    //     //         }
                    //     //     })
                    //     // })
                    // });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        addClient ({commit}, payload) {
            commit('addClient', payload)
        },
        async getClient({commit}, payload) {
            try{
                const resp = await axios.get('auth/manager/clients/'+payload)
                .then((response) => {

                });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async newClient({commit, context}, payload) {
            try{
                const resp = await axios.post('/auth/admin/users/new', payload)
                    .then((response) => {
                        var client = response.data.user;
                        client.isLoading = false;
                        commit('addClient', client)
                        if(response.data.chat != null) {
                            context.commit('addChat', response.data.chat)
                        }
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async updateClient ({commit}, payload) {
            const resp = await axios.post('/auth/admin/users/update', payload)
        },
        async deleteClient({commit}, payload) {
            try{
                const resp = await axios.post('/auth/admin/users/delete/'+ payload)
                    .then((response) => {
                        commit('deleteClient', payload)
                        commit('deleteUser', payload)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async saveClient({state, commit}, param) {
            return axios
                .put(`/auth/admin/users/${param.id}`, {
                    param: param.key,
                    value: param.value
                });
        },
        async removeClient({state, commit}, id) {
            commit('removeClient', id)
            return await axios
                .delete(`/auth/admin/users/${id}`)
        },
        async forceDeleteClient({state, commit}, id) {
            commit('forceDeleteClient', id)
            return await axios
                .post(`/auth/admin/users/forceDelete/${id}`)
        },
        async restoreClient({state, commit}, id) {
            commit('restoreClient', id)
            return await axios
                .post(`/auth/admin/users/restore/${id}`)
        },


        //client-info
        async newClientInfo({commit}, payload) {
            try {
                const resp = await axios.post('/auth/manager/clients/user-info/new', payload)
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async updateClientInfo({commit}, payload) {
            try {
                console.log(payload)
                return await axios.post('/auth/manager/clients/user-info/update', payload)
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async saveClientInfo({state, commit}, param) {
            return axios
                .put(`/auth/admin/users/user-info/${param.id}`, {
                    param: param.key,
                    value: param.value
                });
        },


        //client-tour
        async newClientTour({commit, state}, payload) {
            try {
                // if(state.clients.length==0){
                //     commit('setClients')
                // }
                const resp = await axios.post('/auth/manager/clients/user-tour/new', payload, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                })

                var tour = resp.data.tour;
                tour.show = false;
                tour.isLoading = false;
                tour.expand = {
                    country: tour.TourInfo.country,
                    resort: tour.TourInfo.resort,
                    hotel: tour.TourInfo.hotel,
                    meal:tour.TourInfo.meal,
                    room_type:tour.TourInfo.room_type,
                    tour_operator:tour.TourInfo.tour_operator,
                    date_range:{start:tour.TourInfo.date_range.start, end:tour.TourInfo.date_range.end},
                    price:tour.TourInfo.price,
                    paid:tour.TourInfo.paid,
                    left:tour.TourInfo.left,
                    services:tour.TourInfo.services,
                    avia_tickets:tour.TourInfo.avia_tickets,
                    passengers:tour.TourInfo.passengers,
                    files:tour.TourInfo.files,
                }
                if(state.clients.length>0) {
                    commit('addClientTour', tour)
                }

            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async updateClientTour({commit}, payload) {
            try {
                const resp = await axios.post('/auth/manager/clients/user-tour/update', payload)
                var tour = resp.data.tour;
                tour.show = false;
                tour.isLoading = false;
                tour.expand = {
                    country: tour.TourInfo.country,
                    resort: tour.TourInfo.resort,
                    hotel: tour.TourInfo.hotel,
                    meal:tour.TourInfo.meal,
                    room_type:tour.TourInfo.room_type,
                    tour_operator:tour.TourInfo.tour_operator,
                    date_range:{start:tour.TourInfo.date_range.start, end:tour.TourInfo.date_range.end},
                    price:tour.TourInfo.price,
                    paid:tour.TourInfo.paid,
                    left:tour.TourInfo.left,
                    services:tour.TourInfo.services,
                    avia_tickets:tour.TourInfo.avia_tickets,
                    passengers:tour.TourInfo.passengers,
                    files:tour.TourInfo.files,
                }
                commit('updateClientTour', tour)
                return tour
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async updateArchive({commit}, payload) {
            try {
                const resp = await axios.post('/auth/manager/clients/user-tour/updateArchive', payload)
                if(payload.status == 'add'){
                    commit('addToArchive', resp.data.tour)
                }
                else {
                    commit('removeFromArchive', resp.data.tour)

                }

                // commit('deleteClientTour', payload)
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async updateReview({commit}, payload) {
            try {
                const resp = await axios.post('/auth/manager/clients/user-tour/updateReview', payload)
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async deleteClientTour({commit}, payload) {
            try{
                const resp = await axios.post('/auth/manager/clients/user-tour/delete/'+ payload.id)
                    .then((response) => {
                        commit('deleteClientTour', payload)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async getClientTours({commit}, payload) {
            try {
                const resp = await axios.get('/auth/manager/clients/user-tour/getClientTours/'+ payload)
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async saveClientTour({state, commit}, param) {
            return axios
                .put(`/auth/manager/users/user-tour/${param.id}`, {
                    param: param.key,
                    value: param.value
                });
        },
        async saveClientTourInfo({state, commit}, param) {
            return axios
                .put(`/auth/manager/users/user-tour/${param.id}`, param
                //     {
                //     param: param.key,
                //     value: param.value
                // }
                );
        },
        async forceDeleteClientTour({state, commit}, payload) {
            commit('forceDeleteClientTour', payload)
            return await axios
                .post(`/auth/manager/users/user-tour/forceDelete/${payload.id}`)
        }
    }
};
