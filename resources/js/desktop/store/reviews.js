export default {
    state: {
        reviews: [],
        reviews_loading: false,
        reviews_pagination: null,
    },
    getters: {
        reviews(state) {
            return state.reviews;
        },
        reviews_loading(state) {
            return state.reviews_loading;
        },
        reviews_pagination(state) {
            return state.reviews_pagination;
        },
    },
    mutations: {
        addReview(state, payload) {
            state.reviews.push(payload)
        },
        setReviews(state, payload) {
            state.reviews = payload
        },
        saveReview(state, payload) {
            let review = state.reviews.findIndex(x => x.id === payload.id);
            if(review >=0) {
                state.reviews[review] = payload;
            }
        },
        removeReview(state, payload) {
            let review = state.reviews.findIndex(x => x.id === payload);
            if (review >= 0) {
                state.reviews.splice(review, 1);
            }
        },
        setReviewsLoading(state, payload) {
            return (state.reviews_loading = payload);
        },

        setReviewsPagination(state, payload) {
            return (state.reviews_pagination = payload);
        },
    },
    actions: {
        async setReviews({commit}) {
            try {
                commit('setReviewsLoading', true)
                await axios.get('/auth/reviews').then((response) => {
                    commit('setReviews', response.data.data)
                    commit('setReviewsPagination', {...response.data.meta, ...response.data.links});
                }).finally(() => {
                    commit('setReviewsLoading', false);
                });
            } catch (error) {
                commit('setReviewsLoading', false)
                console.log(error)
                throw error
            }
        },
        getReviews({commit}, payload) {
            return axios.get('/auth/reviews', {payload});
        },
        async addReview({state, commit}, payload) {
            return await axios.post('/auth/reviews/create', payload);
            // try {
            //     const resp = await axios.post('/auth/reviews/new', payload)
            //         .then((response) => {
            //             commit('addReview', response.data.review)
            //         });
            // } catch (error) {
            //     console.log(error)
            //     throw error
            // }
        },
        async updateReview({state, commit}, payload) {
            return await axios.post('/auth/reviews/update', payload);
        },
        async removeReview({state, commit}, id) {
            commit('removeReview', id)
            return await axios
                .delete(`/auth/reviews/${id}`)
        },
        async saveReview({state, commit}, param) {
            return axios
                .put(`/auth/reviews/${param.id}`, {
                    param: param.key,
                    value: param.value
                });
        },
    }
};
