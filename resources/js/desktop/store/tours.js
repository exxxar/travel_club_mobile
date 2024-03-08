export default {
    state: {
        selected_tour: null,
        tours: [],
        tours_loading: false,
        tours_pagination: {},
        popularTours: [],
    },
    getters: {
        selected_tour(state) {
            return state.selected_tour;
        },
        tours(state) {
            return state.tours;
        },
        tours_loading(state) {
            return state.tours_loading;
        },
        tours_pagination(state) {
            return state.tours_pagination;
        },
        popularTours(state) {
            return state.popularTours;
        }
    },
    mutations: {
        addTour(state, payload) {
            state.tours.push(payload)
        },
        setTours(state, payload) {
            state.tours = payload;
            //Vue.set(state.tours, 'overlay', false);
        },
        setTour(state, payload) {
            state.selected_tour = payload;
        },
        saveTour(state, payload) {
            let tour = state.tours.findIndex(item => item.id === payload.id);
            if (tour >= 0) {
                Vue.set(state.tours, tour, payload)
            }
        },
        addPopularTour(state, payload) {
            state.popularTours.push(payload)
        },
        setPopularTours(state, payload) {

            state.popularTours = payload;
            /*if( state.popularTours.length==0)
            {*/
            // state.popularTours=[]
            // payload.forEach((item) => {
            //   if (item.is_hot==1)
            //   {
            //     state.popularTours.push(item)
            //   }
            //   //state.popularTours = payload;
            // });

            // state.popularTours.forEach((item) => {
            //    //Vue.set(item, 'overlay', false);
            //   //state.popularTours = payload;
            // });
            //}

        },
        removeTour(state, payload) {
            let tour = state.tours.findIndex(x => x.id === payload);
            if (tour >= 0) {
                state.tours.splice(tour, 1);
            }
        },
        setToursLoading(state, payload) {
            return (state.tours_loading = payload);
        },
        setToursPagination(state, payload) {
            return (state.tours_pagination = payload);
        },
    },
    actions: {
        addTour({commit}, payload) {
            commit('addTour', payload)
        },
        async setTours({dispatch, commit}, payload) {
            try {
                console.log('payload', payload);
                await axios.get('/tours', {params:payload})
                    .then((response) => {
                        commit('setTours', response.data.data);
                        dispatch('makePaginationObject', { key: 'tours', pagination: response.data});
                        // commit('setToursPagination', {...response.data.meta, ...response.data.links});
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async getTour({commit}, payload) {
            try {
                await axios.get('/tours/'+payload)
                    .then((response) => {
                        commit('setTour', response.data.userTour);
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        addPopularTour({commit}, payload) {
            commit('addPopularTour', payload)
        },
        async setPopularTours({commit}) {
            try {
                await axios.get('popularTours')
                    .then((response) => {
                        //commit('setTours', response.data.tours);
                        console.log(response.data)
                        commit('setPopularTours', response.data.tours);
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async newTour({commit}, payload) {
            try {
                await axios.post('tours/new', payload)
                    .then((response) => {
                        commit('addTour', response.data.tour)
                    });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async updateTour({commit}, payload) {
            await axios.post('tours/update', payload).then(resp => {
                commit('saveTour', resp.data.userTour);
            })
        },
        async removeTour({state, commit}, id) {
            return await axios
                .delete(`tours/delete/${id}`).then(resp => {
                    commit('removeTour', id)
                })
        },
        async searchTours({state, commit}, payload={}) {
            return await axios.post(`tours/search`, payload)
        },
    }
};
