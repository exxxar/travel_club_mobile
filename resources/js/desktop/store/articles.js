export default {
    state: {
        selected_article: null,
        articles: [],
        articles_loading: false,
        articles_pagination: {},
    },
    getters: {
        selected_article(state) {
            return state.selected_article;
        },
        articles(state) {
            return state.articles;
        },
        articles_loading(state) {
            return state.articles_loading;
        },
        articles_pagination(state) {
            return state.articles_pagination;
        },
    },
    mutations: {
        createArticle(state, payload) {
            state.articles.push(payload)
        },
        setArticles(state, payload) {
            state.articles = payload;
            //Vue.set(state.articles, 'overlay', false);
        },
        setArticle(state, payload) {
            state.selected_article = payload;
        },
        removeArticle(state, payload) {
            let article = state.articles.findIndex(x => x.id === payload);
            if (article >= 0) {
                state.articles.splice(article, 1);
            }
        },
        setArticlesLoading(state, payload) {
            return (state.articles_loading = payload);
        },
        setArticlesPagination(state, payload) {
            return (state.articles_pagination = payload);
        },
    },
    actions: {
        addArticle({commit}, payload) {
            commit('createArticle', payload)
        },
        async setArticles({dispatch, commit}) {
            try {
                await axios.get('/auth/articles')
                    .then((response) => {
                        commit('setArticles', response.data.data);
                        dispatch('makePaginationObject', { key: 'articles', pagination: response.data});
                        // commit('setArticlesPagination', {...response.data.meta, ...response.data.links});
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async getArticle({commit}, payload) {
            try {
                return await axios.get('/auth/articles/'+payload)
                    .then((response) => {
                        commit('setArticle', response.data.article);
                        console.log(' here ', response.data.article)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async createArticle({commit}, payload) {
            try {
                let formData = new FormData();
                Object.keys(payload).forEach(key => {
                    if(!Array.isArray(payload[key])) {
                        formData.append(key, payload[key]);
                    }
                    else {
                        payload[key].forEach(item => {
                            formData.append(key+'[]', item);
                        });
                    }
                });
                await axios.post('/auth/articles/create', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then((response) => {
                        // commit('createArticle', response.data.article)
                    });
            } catch (error) {
                console.log(error);
                throw error
            }
        },
        async updateArticle({commit}, payload) {
            await axios.post('/auth/articles/update', payload)
        },
        async removeArticle({state, commit}, id) {
            return await axios
                .delete(`/auth/articles/delete/${id}`).then(resp => {
                    commit('removeArticle', id)
                })
        },
        async saveArticleFile({commit}, payload) {
            let formData = new FormData();
            Object.keys(payload).forEach(key => {
                if(!Array.isArray(payload[key])) {
                    formData.append(key, payload[key]);
                }
                else {
                    payload[key].forEach(item => {
                        formData.append(key+'[]', item);
                    });
                }
            });
            return await axios.post('/auth/articles/file/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        },
        async deleteArticleFile({commit}, payload) {
            return await axios.post('/auth/articles/file/delete', payload)
        },
    }
};
