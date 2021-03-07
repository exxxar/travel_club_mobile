export default {
    state: {
        aviaModule: JSON.parse(localStorage.getItem("aviaModule")) || {
            name:'',
            phone:'',
            adults: 1,
            city_from: null,
            city_to: null,
            children_under_12: 0,
            children_under_2: 0,
            depart_date:new Date(),
            return_date:null,
            is_multi_city:false,
            routes:[],//city_from, city_to, departure_date
            avia_class:'Эконом класс'
        },
        aviaCities:[],
        avia_step1: true,
        avia_step2: false,
        avia_step3: false,
        avia_steps: JSON.parse(localStorage.getItem("aviaModuleSteps")) || {
            step1: false,
            step2: false,
            step3: false,
        }
    },

    // getters
    getters : {
        aviaModule (state) {
            return state.aviaModule;
        },

        aviaCities(state) {
            return state.aviaCities;
        },

        isAviaCitiesLoading(state) {
            return state.isAviaCitiesLoading;
        },
        avia_step1(state) {
            return state.avia_step1
        },
        avia_step2(state) {
            return state.avia_step2
        },
        avia_step3(state) {
            return state.avia_step3
        },
        avia_steps(state) {
            return state.avia_steps
        },

    },

    // actions
    actions: {
        sendAviaModuleOrder({commit}, payload) {
            return axios.post('/sendAviaModuleOrder', payload)
        },

        changeAviaName({commit}, payload) {
            commit('changeAviaName', payload)
        },
        changeAviaPhone({commit}, payload) {
            commit('changeAviaPhone', payload)
        },
        changeAviaSteps ({commit}, payload) {
            commit('changeAviaSteps', payload)
        },
        changeAviaStep1 ({commit}, payload) {
            commit('changeAviaStep1', payload)
        },
        changeAviaStep2 ({commit}, payload) {
            commit('changeAviaStep2', payload)
        },
        changeAviaStep3 ({commit}, payload) {
            commit('changeAviaStep3', payload)
        },

        changeCityFrom ({commit}, payload) {
            commit('changeCityFrom', payload)
        },
        changeCityTo ({commit}, payload) {
            commit('changeCityTo', payload)
        },
        changeAviaAdults({commit}, payload) {
            commit('changeAviaAdults', payload)
        },
        changeChildrenUnder12({commit}, payload) {
            commit('changeChildrenUnder12', payload)
        },
        changeChildrenUnder2({commit}, payload) {
            commit('changeChildrenUnder2', payload)
        },
        changeDepartDate({commit}, payload) {
            commit('changeDepartDate', payload)
        },
        changeReturnDate({commit}, payload) {
            commit('changeReturnDate', payload)
        },
        changeClass({commit}, payload) {
            commit('changeClass', payload)
        },
        async getAviaCities({commit}, payload) {
            commit('isAviaCitiesLoading', true);
            await axios.get('/getAviaCities/'+payload).then((response) => {
                commit('getAviaCities', response.data);
                commit('isAviaCitiesLoading', false);
            });
        },



        incAviaAdults({commit}) {
            commit('incrementAviaAdults');
        },
        decAviaAdults({commit}) {
            commit('decrementAviaAdults');
        },
        incChildrenUnder12({commit}) {
            commit('incrementChildrenUnder12');
        },
        decChildrenUnder12({commit}) {
            commit('decrementChildrenUnder12');
        },
        incChildrenUnder2({commit}) {
            commit('incrementChildrenUnder2');
        },
        decChildrenUnder2({commit}) {
            commit('decrementChildrenUnder2');
        },

    },

    // mutations
    mutations: {
        changeAviaName(state, payload) {
            state.aviaModule.name = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        changeAviaPhone(state, payload) {
            state.aviaModule.phone = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        changeAviaStep1 (state, payload) {
            state.avia_step1 = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        changeAviaStep2 (state, payload) {
            state.avia_step2 = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        changeAviaStep3 (state, payload) {
            state.avia_step3 = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },

        changeCityFrom(state, payload) {
            state.aviaModule.city_from = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        changeCityTo(state, payload) {
            state.aviaModule.city_to = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },

        getAviaCities(state, payload) {
            state.aviaCities = payload;
        },

        changeAviaAdults(state, payload) {
            state.aviaModule.adults = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        changeChildrenUnder12(state, payload) {
            state.aviaModule.children_under_12 = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        changeChildrenUnder2(state, payload) {
            state.aviaModule.children_under_2 = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        changeDepartDate(state, payload) {
            state.aviaModule.depart_date = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        changeReturnDate(state, payload) {
            state.aviaModule.return_date = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        changeClass(state, payload) {
            state.aviaModule.avia_class = payload;
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },

        incrementAviaAdults(state) {
            state.aviaModule.adults++
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        decrementAviaAdults(state) {
            state.aviaModule.adults--
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        incrementChildrenUnder12(state) {
            state.aviaModule.children_under_12++
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        decrementChildrenUnder12(state) {
            state.aviaModule.children_under_12--
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },

        incrementChildrenUnder2(state) {
            state.aviaModule.children_under_2++
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },
        decrementChildrenUnder2(state) {
            state.aviaModule.children_under_2--
            localStorage.setItem("aviaModule", JSON.stringify(state.aviaModule));
        },

        isAviaCitiesLoading(state, payload) {
            state.isAviaCitiesLoading = payload;
        },

        changeAviaSteps(state, payload) {
            state.avia_steps[payload.key] = payload.value;
            localStorage.setItem("aviaModuleSteps", JSON.stringify(state.avia_steps));
        },
    }
};
