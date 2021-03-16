import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default {
    state: {
        moduleOrders: [],
        deleted_moduleOrders: [],
    },
    getters: {
        moduleOrders(state) {
            return state.moduleOrders;
        },
        deleted_moduleOrders(state) {
            return state.deleted_moduleOrders;
        },
    },
    mutations: {
        addModuleOrder(state, payload) {
            state.moduleOrders.unshift(payload)
        },
        setModuleOrders(state, payload) {
            state.moduleOrders = payload;
        },
        setDeletedModuleOrders(state, payload) {
            state.deleted_moduleOrders = payload;
        },
        deleteModuleOrder(state, payload) {
            let foundIndex = state.moduleOrders.findIndex(x => x.id === payload);
            state.moduleOrders.splice(foundIndex, 1);
            // state.moduleOrders = state.moduleOrders.filter(item => item.id !== payload);
        },
        updateModuleOrder(state, payload) {
            let foundIndex = state.moduleOrders.findIndex(x => x.id === payload.id);
            state.moduleOrders[foundIndex] = payload;
        },
        removeModuleOrder(state, payload) {
            let moduleOrder = state.moduleOrders.findIndex(x => x.id === payload);
            if (moduleOrder >= 0) {
                let item = state.moduleOrders[moduleOrder];
                item.deleted_at = "-";
                state.moduleOrders.splice(moduleOrder, 1);
                state.deleted_moduleOrders.push(item);
            }
        },
        forceDeleteModuleOrder(state, payload) {
            let moduleOrder = state.deleted_moduleOrders.findIndex(x => x.id === payload);
            state.deleted_moduleOrders.splice(moduleOrder, 1);
        },
        restoreModuleOrder(state, payload) {
            let moduleOrder = state.deleted_moduleOrders.findIndex(x => x.id === payload);
            if (moduleOrder >= 0) {
                let item = state.deleted_moduleOrders[moduleOrder];
                item.deleted_at = null;
                state.deleted_moduleOrders.splice(moduleOrder, 1);
                state.moduleOrders.push(item);
            }
        },
    },
    actions: {
        addModuleOrder ({commit}, payload) {
            commit('addModuleOrder', payload)
        },
        async setModuleOrders({commit}) {
            try {
                return await axios.get('/auth/moduleOrders')
                    // .then((response) => {
                    //     // response.data.moduleOrders.forEach( item =>
                    //     // {
                    //     //     item.show = false;
                    //     //     item.isLoading = false;
                    //     //     if(item.order_type == 'Тур')
                    //     //     {
                    //     //         item.expand = {module:item.module}
                    //     //     }
                    //     //     if(item.order_type == 'Авиабилеты') {
                    //     //         item.expand = {module:item.module};
                    //     //     }
                    //     //     if(item.order_type == 'Отель') {
                    //     //         item.expand = {module:item.module};
                    //     //     }
                    //     // });
                    //     commit('setModuleOrders', response.data.moduleOrders);
                    //     commit('setDeletedModuleOrders', response.data.deleted_moduleOrders);
                    // //
                    // });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async newModuleOrder({commit}, payload) {
            try{
                const resp = await axios.post('/auth/moduleOrders/new', payload)
                    .then((response) => {
                        var item=response.data.moduleOrder;
                        // item.show = false;
                        // item.isLoading = false;
                        // item.expand = {module:item.module};
                        commit('addModuleOrder', item)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async deleteModuleOrder({commit}, payload) {
            try{
                const resp = await axios.post('/auth/moduleOrders/delete/'+ payload)
                    .then((response) => {
                        commit('deleteModuleOrder', payload)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async updateModuleOrder({commit}, payload) {
            try{
                const resp = await axios.post('/auth/moduleOrders/update', payload)
                    .then((response) => {
                        commit('updateModuleOrder', payload)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async removeModuleOrder({state, commit}, id) {
            commit('removeModuleOrder', id)
            return await axios
                .post(`/auth/moduleOrders/delete/${id}`)
        },
        async forceDeleteModuleOrder({state, commit}, id) {
            commit('forceDeleteModuleOrder', id)
            return await axios
                .post(`/auth/moduleOrders/forceDelete/${id}`)
        },
        async restoreModuleOrder({state, commit}, id) {
            commit('restoreModuleOrder', id)
            return await axios
                .post(`/auth/moduleOrders/restore/${id}`)
        },
    }
};
