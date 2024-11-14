export default {
    state: {
        selected_item: null,
        controllers: [],
        signals: [],
    },

    getters: {
        controllers(state) {
            return state.controllers;
        },
        signals(state) {
            return state.signals;
        },
    },

    actions: {
        sendNotification({commit}, payload) {
            // if(typeof payload === 'object' && payload !== null)
            // {
            // }
            // if (!payload.type){ payload.type='travel';}
            // if (!payload.message){ payload.message='Ошибка';}
            // if (!payload.title){ payload.title='Сообщение от TravelClub';}
           this._vm.$notify({
                // group: 'message',
                type: typeof payload === 'object' && payload.type ? payload.type : "travel",
                title: typeof payload === 'object' && payload.title ? payload.title : "Сообщение от ВПУТЬ",
                text: typeof payload === 'object' && payload.message ? payload.message : payload,
                duration: payload.duration|5000
            });
        },
        sendAuthNotification({commit}, payload) {
            this._vm.$notify({
                type: 'error',
                title: 'ВПУТЬ',
                text: 'Необходима авторизация',
                duration: 5000
            });
        },
        saveDataProperty({commit, rootState}, payload) {
            let schema = rootState[payload.module_key];
            if(payload.state_key) {
                schema = rootState[payload.module_key][payload.state_key]
            }
            if(schema) {
                let pList = payload.key.split('.');
                let len = pList.length;
                for (let i = 0; i < len - 1; i++) {
                    let elem = pList[i];
                    if (!schema[elem]) schema[elem] = {};
                    schema = schema[elem];
                }
                // schema[pList[len-1]] = payload.value;
                // if (pList[len - 1]) {
                    Vue.set(schema, pList[len - 1], payload.value);
                // }
            }
        },
        checkDataProperty({commit, rootState}, payload) {
            let schema = rootState[payload.module_key];
            if(payload.state_key) {
                schema = rootState[payload.module_key][payload.state_key]
            }
            if(schema) {
                let pList = payload.key.split('.');
                let len = pList.length;
                for (let i = 0; i < len - 1; i++) {
                    let elem = pList[i];
                    if (!schema[elem]) schema[elem] = {};
                    schema = schema[elem];
                }
                // schema[pList[len-1]] = payload.value;
                // if (pList[len - 1]) {
                // }
                return !!schema[pList[len - 1]]
            }
            return false;
        },
        getDataProperty({commit, rootState}, payload) {
            let schema = rootState[payload.module_key];
            if(payload.state_key) {
                schema = rootState[payload.module_key][payload.state_key]
            }
            if(schema) {
                let pList = payload.key.split('.');
                let len = pList.length;
                for (let i = 0; i < len - 1; i++) {
                    let elem = pList[i];
                    if (!schema[elem]) schema[elem] = {};
                    schema = schema[elem];
                }
                // schema[pList[len-1]] = payload.value;
                // if (pList[len - 1]) {
                // }
                return schema[pList[len - 1]]
            }
            return null;
        },
        setAborts({commit, state}, payload) {
            state.controllers[payload.method] = payload.controller;
            state.signals[payload.method] = payload.signal;
        },
        checkAbort({commit, state}, payload) {
            if (state.signals[payload]) {
                state.controllers[payload].abort();
            }
        },
        makePaginationObject({dispatch, commit}, payload) {
            let pagination = payload.pagination;
            delete pagination.data;
            if(pagination.meta) {
                pagination = {...pagination.meta, ...pagination.links}
            }
            dispatch('saveDataProperty',{ module_key: payload.key, key:payload.key+'_pagination', value: pagination })
        },
    },

    mutations: {
        openModal(state, payload) {
            let modal = bootstrap.Modal.getOrCreateInstance(document.querySelector(''+payload));
            modal.show();
        },
        closeModal(state, payload) {
            let modal = bootstrap.Modal.getOrCreateInstance(document.querySelector(''+payload));
            modal.hide();
            let backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove()
            }
        },
    }
};
