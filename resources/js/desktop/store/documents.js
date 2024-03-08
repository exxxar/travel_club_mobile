export default {
    state: {
        documents: [],
        documents_loading: false,
        documents_pagination: null,
    },
    getters: {
        documents(state) {
            return state.documents;
        },
        documents_loading(state) {
            return state.documents_loading;
        },
        documents_pagination(state) {
            return state.documents_pagination;
        },
    },
    mutations: {
        addDocument(state, payload) {
            state.documents.push(payload)
        },
        setDocuments(state, payload) {
            state.documents = payload
        },
        saveDocument(state, payload) {
            let document = state.documents.findIndex(x => x.id === payload.id);
            state.documents[document] = payload;
        },
        removeDocument(state, payload) {
            let document = state.documents.findIndex(x => x.id === payload);
            if (document >= 0) {
                state.documents.splice(document, 1);
            }
        },
        setDocumentsLoading(state, payload) {
            return (state.documents_loading = payload);
        },

        setDocumentsPagination(state, payload) {
            return (state.documents_pagination = payload);
        },
    },
    actions: {
        async setDocuments({commit}) {
            try {
                await axios.get('/auth/documents').then((response) => {
                    commit('setDocuments', response.data.data)
                    commit('setDocumentsPagination', {...response.data.meta, ...response.data.links});
                });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        getDocuments({commit}, payload) {
            return axios.get('/auth/documents', {payload});
        },
        async addDocument({state, commit}, payload) {
            try {
                const resp = await axios.post('/auth/documents/new', payload)
                    .then((response) => {
                        commit('addDocument', response.data.document)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async removeDocument({state, commit}, id) {
            commit('removeDocument', id)
            return await axios
                .delete(`/auth/documents/${id}`)
        },
        async saveDocument({state, commit}, param) {
            return axios
                .put(`/auth/documents/${param.id}`, {
                    param: param.key,
                    value: param.value
                });
        },
    }
};
