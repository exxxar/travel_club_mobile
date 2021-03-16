import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default {
    state: {
        branches: [],
    },
    getters: {
        branches(state) {
            return state.branches;
        },
    },
    mutations: {
        addBranch(state, payload) {
            state.branches.push(payload)
        },
        setBranches(state, payload) {
            state.branches = payload
        },
        saveBranch(state, payload) {
            let branch = state.branches.findIndex(x => x.id === payload.id);
            state.branches[branch] = payload;
        },
        removeBranch(state, payload) {
            let branch = state.branches.findIndex(x => x.id === payload);
            if (branch >= 0) {
                state.branches.splice(branch, 1);
            }
        },

    },
    actions: {
        async setBranches({commit}) {
            try {
                await axios.get('/auth/admin/branches') .then((response) => {
                    commit('setBranches', response.data.branches)
                });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async addBranch({state, commit}, payload) {
            try{
                const resp = await axios.post('/auth/admin/branches/new', payload)
                    .then((response) => {
                        commit('addBranch', response.data.branch)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async removeBranch({state, commit}, id) {
            commit('removeBranch', id)
            return await axios
                .delete(`/auth/admin/branches/${id}`)
        },
        async saveBranch({state, commit}, param) {
            return axios
                .put(`/auth/admin/branches/${param.id}`, {
                    param: param.key,
                    value: param.value
                });
        },
    }
};
