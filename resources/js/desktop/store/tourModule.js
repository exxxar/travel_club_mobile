export default {
    state: {
        tourModule: JSON.parse(localStorage.getItem("tourModule")) || {
            name:'',
            phone:'',
            country: 'Россия',
            resort_country: {Id:150,Name:"Россия",Alias:"Russia",Flags:8,HasTickets:true,HotelIsNotInStop:true,IsProVisa:false,IsVisa:false,OriginalName:"Russia",Rank:0,TicketsIncluded:true},
            resorts:  [{Name:'Любой'}],
            hotels:  [{Name:'Любой'}], //[]
            meal: [{Name:'Любое'}], // []
            price_from:  0,
            price_to:  0,
            adults: 1,
            children: 0,
            tour_operators: [{Name:'Любой'}],
            date_range: {start: new Date(), end: new Date((new Date).setDate((new Date).getDate() + 1))},
            nights_from: 1,
            nights_to: 10,
        },
        countries:[],
        cities:[],
        hotels:[],
        hotel_stars:[],
        tour_operators:[],
        tour_dates:[],
        isCountriesLoading: false,
        isCitiesLoading: false,
        isHotelsLoading: false,
        isTourOperatorsLoading: false,

        steps: JSON.parse(localStorage.getItem("tourModuleSteps")) || {
            step1: false,
            step2: false,
            step3: false,
            step4: false,
            step5: false,
        }
        // name: JSON.parse(localStorage.getItem("tour-module")).name || '',
        // phone: JSON.parse(localStorage.getItem("tour-module")).phone || '',
        // country: JSON.parse(localStorage.getItem("tour-module")).country || 'Россия',
        // resort_country: JSON.parse(localStorage.getItem("tour-module")).resort_country || '',
        // hotel: JSON.parse(localStorage.getItem("tour-module")).hotel || 'Любой',
        // meal: JSON.parse(localStorage.getItem("tour-module")).meal || 'Любое',
        // price_from: JSON.parse(localStorage.getItem("tour-module")).price_to || 0,
        // price_to: JSON.parse(localStorage.getItem("tour-module")).price_to || 0,
        // adults: JSON.parse(localStorage.getItem("tour-module")).adults || 1,
        // children: JSON.parse(localStorage.getItem("tour-module")).adults || 0,
        // tour_operator: JSON.parse(localStorage.getItem("tour-module")).tour_operator|| 'Любой',
        // date_range: JSON.parse(localStorage.getItem("tour-module")).date_range|| {start: new Date(), end: new Date((new Date).setDate((new Date).getDate() + 1))},
    },

    // getters
    getters : {
        tourModule (state) {
            return state.tourModule;
        },

        countries(state) {
            return state.countries;
        },
        cities(state) {
            return state.cities;
        },
        hotels(state) {
            return state.hotels;
        },
        hotel_stars(state) {
            return state.hotel_stars;
        },
        tour_operators(state) {
            return state.tour_operators;
        },
        tour_dates(state) {
            return state.tour_dates;
        },

        isCountriesLoading(state) {
            return state.isCountriesLoading;
        },
        isCitiesLoading(state) {
            return state.isCitiesLoading;
        },
        isHotelsLoading(state) {
            return state.isHotelsLoading;
        },
        isTourOperatorsLoading(state) {
            return state.isTourOperatorsLoading;
        },

        steps(state) {
            return state.steps
        },
        // step2(state) {
        //     return state.step2
        // },
        // step3(state) {
        //     return state.step3
        // },
        // step4(state) {
        //     return state.step4
        // },
        // step5(state) {
        //     return state.step5
        // },


        // name (state) {
        //     return state.name;
        // },
        // phone (state) {
        //     return state.phone;
        // },
        // country (state) {
        //     return state.country;
        // },
        // resort_country (state) {
        //     return state.resort_country;
        // },
        // hotel (state) {
        //     return state.hotel;
        // },
        // meal (state) {
        //     return state.meal;
        // },
        // price_from (state) {
        //     return state.price_from;
        // },
        // price_to (state) {
        //     return state.price_to;
        // },
        // adults (state) {
        //     return state.adults;
        // },
        // children (state) {
        //     return state.children;
        // },
        // tour_operator (state) {
        //     return state.tour_operator;
        // },
        // date_range (state) {
        //     return state.date_range;
        // },
    },

    // actions
    actions: {
        sendTourModuleOrder ({commit}, payload) {
            try{
               return axios.post('sendTourModuleOrder', payload);
                // commit('sendTourModuleOrder', payload)
            } catch (error) {
                console.log(error);
                throw error
            }
        },
        changeName({commit}, payload) {
            commit('changeName', payload)
        },
        changePhone({commit}, payload) {
            commit('changePhone', payload)
        },
        changeCountry({commit}, payload) {
            commit('changeCountry', payload)
        },
        changeResortCountry({commit}, payload) {
            commit('changeResortCountry', payload)
        },
        changeResorts({commit}, payload) {
            commit('changeResorts', payload)
        },
        changeHotels({commit}, payload) {
            commit('changeHotels', payload)
        },
        changeMeal({commit}, payload) {
            commit('changeMeal', payload)
        },
        changePriceFrom({commit}, payload) {
            commit('changePriceFrom', payload)
        },
        changePriceTo({commit}, payload) {
            commit('changePriceTo', payload)
        },
        changeAdults({commit}, payload) {
            commit('changeAdults', payload)
        },
        changeChildren({commit}, payload) {
            commit('changeChildren', payload)
        },
        changeTourOperator({commit}, payload) {
            commit('changeTourOperator', payload)
        },
        changeDateRange({commit}, payload) {
            commit('changeDateRange', payload)
        },
        changeNightsFrom({commit}, payload) {
            commit('changeNightsFrom', payload);
        },
        changeNightsTo({commit}, payload) {
            commit('changeNightsTo', payload);
        },

        getCountries({commit}, payload) {
            commit('isCountriesLoading', true);
            axios.get('/getCountries/'+ payload.town_id).then((response) => {
                commit('getCountries', response.data.res);
                commit('isCountriesLoading', false);
            });
        },
        getCities({commit}, payload) {
            commit('isCitiesLoading', true);
            axios.get('/getCities/'+payload).then((response) => {
                commit('getCities', response.data.res);
                commit('isCitiesLoading', false);
            });
        },
        async getHotels({commit}, payload) {
            commit('isHotelsLoading', true);
            await axios.get('/getHotels/'+payload.country_id+'/'+payload.town_id+'/'+payload.star_id).then((response) => {
                commit('getHotels', response.data.res);
                commit('isHotelsLoading', false);
            });

        },
        getHotelStars({commit}, payload) {
            axios.get('/getHotelStars/'+payload.country_id+'/'+payload.town_id).then((response) => {
                commit('getHotelStars', response.data.res);
            });
        },
        getTourOperators({commit}, payload) {
            commit('isTourOperatorsLoading', true);
            axios.get('/getTourOperators/'+payload.city_id+'/'+payload.country_id).then((response) => {
                commit('getTourOperators', response.data.res);
                commit('isTourOperatorsLoading', false);
            });
        },
        getTourDates({commit}, payload) {
            axios.get('/getTourDates/'+payload.city_id+'/'+payload.country_id).then((response) => {
                commit('getTourDates', response.data.res);
            });
        },

        incAdults({commit}) {
            commit('incrementAdults');
        },
        decAdults({commit}) {
            commit('decrementAdults');
        },
        incChildren({commit}) {
            commit('incrementChildren');
        },
        decChildren({commit}) {
            commit('decrementChildren');
        },

        changeStep1({commit}, payload) {
            commit('changeStep1', payload);
        },
        changeStep2({commit}, payload) {
            commit('changeStep2', payload);

        },
        changeStep3({commit}, payload) {
            commit('changeStep3', payload);

        },
        changeStep4({commit}, payload) {
            commit('changeStep4', payload);

        },
        changeStep5({commit}, payload) {
            commit('changeStep5', payload);
        },

    },

    // mutations
    mutations: {
        // sendTourModuleOrder(state) {
        //     axios.post('/sendTourModuleOrder', {toutModule: state.tourModule })
        // },
        changeName(state, payload) {
            state.tourModule.name = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changePhone(state, payload) {
            state.tourModule.phone = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changeCountry(state, payload) {
            state.tourModule.country = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changeResortCountry(state, payload) {
            state.tourModule.resort_country = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changeResorts(state, payload) {
            state.tourModule.resorts = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changeHotels(state, payload) {
            state.tourModule.hotels = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changeMeal(state, payload) {
            state.tourModule.meal = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changePriceFrom(state, payload) {
            state.tourModule.price_from = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changePriceTo(state, payload) {
            state.tourModule.price_to = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changeAdults(state, payload) {
            state.tourModule.adults = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changeChildren(state, payload) {
            state.tourModule.children = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changeTourOperator(state, payload) {
            state.tourModule.tour_operators = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changeDateRange(state, payload) {
            state.tourModule.date_range = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changeNightsFrom(state, payload) {
            state.tourModule.nights_from = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        changeNightsTo(state, payload) {
            state.tourModule.nights_to = payload;
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },



        getCountries(state, payload) {
            state.countries = payload;
        },
        getCities(state, payload) {
            state.cities = payload;
            state.cities.unshift({Name: 'Любой'})
        },
        getHotels(state, payload) {
            payload.forEach( item => {
                if (item.StarName.length == 2) {
                    item.StarName = item.StarName.slice(0, -1);
                }
            });
            state.hotels = payload;
            state.hotels.unshift({Name: 'Любой'})
        },
        getHotelStars(state, payload) {
            state.hotel_stars = payload;
        },
        getTourOperators(state, payload) {
            state.tour_operators = payload;
            state.tour_operators.unshift({Name: 'Любой'})
        },
        getTourDates(state, payload) {
            state.tour_dates = payload;
        },

        incrementAdults(state) {
            state.tourModule.adults++
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        decrementAdults(state) {
            state.tourModule.adults--
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        incrementChildren(state) {
            state.tourModule.children++
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },
        decrementChildren(state) {
            state.tourModule.children--
            localStorage.setItem("tourModule", JSON.stringify(state.tourModule));
        },

        isCountriesLoading(state, payload) {
             state.isCountriesLoading = payload;
        },
        isCitiesLoading(state, payload) {
             state.isCitiesLoading = payload;
        },
        isHotelsLoading(state, payload) {
             state.isHotelsLoading = payload;
        },
        isTourOperatorsLoading(state, payload) {
             state.isTourOperatorsLoading = payload;
        },


        changeStep1(state, payload) {
            state.steps.step1 = payload;
            localStorage.setItem("tourModuleSteps", JSON.stringify(state.steps));
        },
        changeStep2(state, payload) {
            state.steps.step2 = payload;
            localStorage.setItem("tourModuleSteps", JSON.stringify(state.steps));
        },
        changeStep3(state, payload) {
            state.steps.step3 = payload;
            localStorage.setItem("tourModuleSteps", JSON.stringify(state.steps));
        },
        changeStep4(state, payload) {
            state.steps.step4 = payload;
            localStorage.setItem("tourModuleSteps", JSON.stringify(state.steps));
        },
        changeStep5(state, payload) {
            state.steps.step5 = payload;
            localStorage.setItem("tourModuleSteps", JSON.stringify(state.steps));
        },

    }
};
