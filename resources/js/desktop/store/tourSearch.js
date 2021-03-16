export default {
    state: {
        tourSearch: JSON.parse(localStorage.getItem("tourSearch")) || {
            name:'',
            phone:'',
            depart_city: {Id:832, Name:"Москва", Default:true, DescriptionUrl:null, IsPopular:false, ParentId:null},
            resort_country: {Id:150,Name:"Россия",Alias:"Russia",Flags:8,HasTickets:true,HotelIsNotInStop:true,IsProVisa:false,IsVisa:false,OriginalName:"Russia",Rank:0,TicketsIncluded:true},
            resorts:  [{Name:'Любой'}],
            hotels:  [{Name:'Любой'}], //[]
            meals: [{Name:'Любое'}], // []
            hotel_stars:[{Name:'Любая'}],
            price_from:  0,
            price_to:  0,
            adults: 1,
            children: 0,
            tour_operators: [{Name:'Любой'}],
            date_range: {
                start:  ("0" + new Date().getDate()).slice(-2) + "/" + ("0"+(new Date().getMonth()+1)).slice(-2) + "/" + new Date().getFullYear(),
                end: ("0" + new Date((new Date).setDate((new Date).getDate() + 7)).getDate()).slice(-2) + "/" + ("0"+(new Date((new Date).setDate((new Date).getDate() + 7)).getMonth()+1)).slice(-2) + "/" + new Date((new Date).setDate((new Date).getDate() + 7)).getFullYear()
            },
            nights_from: 1,
            nights_to: 10,
        },
        search_depart_cities:[],
        search_countries:[],
        search_cities:[],
        search_hotels:[],
        search_hotel_stars:[],
        search_tour_operators:[],
        search_tour_dates:[],
        search_isDepartCitiesLoading: false,
        search_isCountriesLoading: false,
        search_isCitiesLoading: false,
        search_isHotelsLoading: false,
        search_isTourOperatorsLoading: false,
        search_isHotelStarsLoading: false,
        isToursLoading: false,
        tours_by_hotels:[],
        tours_by_price: [],
        search_was:false,
        request_id:'',
        tour:[]
    },

    // getters
    getters : {
        tourSearch (state) {
            return state.tourSearch;
        },
        search_depart_cities(state) {
            return state.search_depart_cities;
        },
        search_countries(state) {
            return state.search_countries;
        },
        search_cities(state) {
            return state.search_cities;
        },
        search_hotels(state) {
            return state.search_hotels;
        },
        search_hotel_stars(state) {
            return state.search_hotel_stars;
        },
        search_tour_operators(state) {
            return state.search_tour_operators;
        },
        search_tour_dates(state) {
            return state.search_tour_dates;
        },
        search_isDepartCitiesLoading(state) {
            return state.search_isDepartCitiesLoading;
        },
        search_isCountriesLoading(state) {
            return state.search_isCountriesLoading;
        },
        search_isCitiesLoading(state) {
            return state.search_isCitiesLoading;
        },
        search_isHotelsLoading(state) {
            return state.search_isHotelsLoading;
        },
        search_isHotelStarsLoading(state) {
            return state.search_isHotelStarsLoading;
        },
        search_isTourOperatorsLoading(state) {
            return state.search_isTourOperatorsLoading;
        },
        isToursLoading(state) {
            return state.isToursLoading;
        },
        tours_by_hotels(state)
        {
            return state.tours_by_hotels
        },
        tours_by_price(state) {
            return state.tours_by_price
        },
        search_was(state) {
            return state.search_was
        },
        request_id(state) {
            return state.request_id
        },
        tour(state) {
            return state.tour
        }
    },

    // actions
    actions: {
        sendTourSearchOrder ({commit}, payload) {
            axios.post('/sendTourSearchOrder', payload);
            // commit('sendTourSearchOrder', payload)
        },
        saveTourOrder({commit}, payload) {
            axios.post('/saveTourOrder', payload);
        },
        changeRequestId({commit}, payload) {
            commit('changeRequestId', payload)
        },
        changeTour({commit}, payload) {
            commit('changeTour', payload)
        },
        getTours({commit, dispatch}, payload) {
            commit('isToursLoading', true);
            axios.post('/testGetTours', payload).then((response) => {
                // commit('getToursByPrice', response.data.res);
                commit('changeRequestId', response.data.res.requestId)
                dispatch('getLoadState', response.data.res.requestId).then((respon) => {
                    payload.requestId=response.data.res.requestId;
                    dispatch('getToursUpdate', payload)
                })
                commit('isToursLoading', false);
                commit('changeSearch', true);
            });
        },
        getLoadState({commit, dispatch}, payload) {
            axios.get('/GetLoadState', payload).then((response) => {
                var state = response.data.res.every(item=> item.IsProcessed == true)
                if (state == false) {
                    setTimeout(dispatch('getLoadState', payload), 2000)
                }
                else {
                    // dispatch
                    return true
                }
            })
        },
        getToursUpdate({commit, dispatch}, payload) {
            // commit('isToursLoading', true);
            axios.post('/getToursUpdate', payload).then((response) => {
                commit('getToursByPrice', response.data.res);
                // commit('changeRequestId', response.data.res.requestId)
                // commit('isToursLoading', false);
                // commit('changeSearch', true);
            });
        },
        getToursByHotels({commit}, payload) {
            commit('isToursLoading', true);
            axios.post('/testGetToursByHotels', payload).then((response) => {
                commit('getToursByHotels', response.data.res);
                commit('changeRequestId', response.data.res.requestId)
                commit('isToursLoading', false);
                commit('changeSearch', true);
            });
        },
        getToursByPrice({commit}, payload) {
            // axios.post('/getTours', payload);
            commit('isToursLoading', true);
            axios.post('/testGetTours', payload).then((response) => {
                commit('getToursByPrice', response.data.res);
                commit('changeRequestId', response.data.res.requestId)
                commit('isToursLoading', false);
                commit('changeSearch', true);
            });
        },

        changeSearch({commit}, payload) {
            commit('changeSearch', payload)
        },

        changeSearchName({commit}, payload) {
            commit('changeSearchName', payload)
        },
        changeSearchPhone({commit}, payload) {
            commit('changeSearchPhone', payload)
        },
        changeSearchCountry({commit}, payload) {
            commit('changeSearchCountry', payload)
        },
        changeSearchDepartCity({commit}, payload) {
            commit('changeSearchDepartCity', payload)
        },
        changeSearchResortCountry({commit}, payload) {
            commit('changeSearchResortCountry', payload)
        },
        changeSearchResorts({commit}, payload) {
            commit('changeSearchResorts', payload)
        },
        changeSearchHotels({commit}, payload) {
            commit('changeSearchHotels', payload)
        },
        changeSearchHotelStars({commit}, payload) {
            commit('changeSearchHotelStars', payload)
        },
        changeSearchMeals({commit}, payload) {
            commit('changeSearchMeals', payload)
        },
        changeSearchPriceFrom({commit}, payload) {
            commit('changeSearchPriceFrom', payload)
        },
        changeSearchPriceTo({commit}, payload) {
            commit('changeSearchPriceTo', payload)
        },
        changeSearchAdults({commit}, payload) {
            commit('changeSearchAdults', payload)
        },
        changeSearchChildren({commit}, payload) {
            commit('changeSearchChildren', payload)
        },
        changeSearchTourOperator({commit}, payload) {
            commit('changeSearchTourOperator', payload)
        },
        changeSearchDateRange({commit}, payload) {
            commit('changeSearchDateRange', payload)
        },
        changeSearchNightsFrom({commit}, payload) {
            commit('changeSearchNightsFrom', payload);
        },
        changeSearchNightsTo({commit}, payload) {
            commit('changeSearchNightsTo', payload);
        },

        getSearchDepartCities({commit}) {
            commit('search_isDepartCitiesLoading', true);
            axios.get('/getDepartCities').then((response) => {
                commit('getSearchDepartCities', response.data.res);
                commit('search_isDepartCitiesLoading', false);
            });
        },
        getSearchCountries({commit}, payload) {
            commit('search_isCountriesLoading', true);

            axios.get('/getCountries/'+ payload.town_id).then((response) => {
                var result = [{type: 'Топовые', values:[]},{ type: 'Популярные', values:[]}, {type: 'Остальные', values:[]}]
                response.data.res.forEach( item => {
                    if(item.Rank == 0){
                        result[0].values.push(item);
                    }
                    if(item.Rank == 1){
                        result[1].values.push(item);
                    }
                    if(item.Rank == 2){
                        result[2].values.push(item);
                    }
                });
                commit('getSearchCountries', result);
                commit('search_isCountriesLoading', false);
            });
        },
        getSearchCities({commit}, payload) {
            commit('search_isCitiesLoading', true);
            axios.get('/getCities/'+payload).then((response) => {
                var result = [{ type: 'Популярные', values:[]}, {type: 'Остальные', values:[]}]
                response.data.res.forEach( item => {
                    if(item.IsPopular == true){
                        result[0].values.push(item);
                    }
                    if(item.IsPopular == false){
                        result[1].values.push(item);
                    }
                });
                commit('getSearchCities', result);
                commit('search_isCitiesLoading', false);
            });
        },
        async getSearchHotels({commit}, payload) {
            commit('search_isHotelsLoading', true);
            await axios.get('/getHotels/'+payload.country_id+'/'+payload.town_id+'/'+payload.star_id).then((response) => {
                commit('getSearchHotels', response.data.res);
                commit('search_isHotelsLoading', false);
            });

        },
        getSearchHotelStars({commit}, payload) {
            commit('search_isHotelStarsLoading', true);
            axios.get('/getHotelStars/'+payload.country_id+'/'+payload.town_id).then((response) => {
                commit('getSearchHotelStars', response.data.res);
                commit('search_isHotelStarsLoading', false);
            });
        },
        getSearchTourOperators({commit}, payload) {
            commit('search_isTourOperatorsLoading', true);
            axios.get('/getTourOperators/'+payload.city_id+'/'+payload.country_id).then((response) => {
                commit('getSearchTourOperators', response.data.res);
                commit('search_isTourOperatorsLoading', false);
            });
        },
        getSearchTourDates({commit}, payload) {
            axios.get('/getTourDates/'+payload.city_id+'/'+payload.country_id).then((response) => {
                commit('getSearchTourDates', response.data.res);
            });
        },

        search_incAdults({commit}) {
            commit('search_incrementAdults');
        },
        search_decAdults({commit}) {
            commit('search_decrementAdults');
        },
        search_incChildren({commit}) {
            commit('search_incrementChildren');
        },
        search_decChildren({commit}) {
            commit('search_decrementChildren');
        },

    },

    // mutations
    mutations: {
        changeRequestId(state, payload) {
            state.request_id = payload;
        },
        changeTour(state, payload) {
            state.tour = payload;
        },
        getToursByHotels(state, payload) {
            payload.aaData.forEach( item => {

                if (item[49].length == 2) {
                    item[49] = item[49].slice(0, -1);
                }

                if(item[29] !=='')
                {
                    var str = item[29];
                    var pos = str.lastIndexOf("_");
                    var tmp1 = item[29].slice(0, pos);
                    var tmp2 = item[29].slice(-4);
                    var url = tmp1 + '_0_400_400_1'+tmp2;
                    item[29] = url;
                }
            });
            state.tours_by_hotels = payload;
        },
        getToursByPrice(state, payload) {
            payload.aaData.forEach( item => {

                if (item[8].length == 2) {
                    item[8] = item[8].slice(0, -1);
                }

                if(item[29] !=='')
                {
                    var str = item[29];
                    var pos = str.lastIndexOf("_");
                    var tmp1 = item[29].slice(0, pos);
                    var tmp2 = item[29].slice(-4);
                    var url = tmp1 + '_0_400_400_1'+tmp2;
                    item[29] = url;
                }
            });
            state.tours_by_price = payload;
        },
        sendTourSearchOrder(state) {
            // axios.post('/sendTourSearchOrder', {toutSearch: state.tourSearch })
        },

        changeSearch(state, payload) {
            state.search_was = payload;
        },

        changeSearchName(state, payload) {
            state.tourSearch.name = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchPhone(state, payload) {
            state.tourSearch.phone = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchCountry(state, payload) {
            state.tourSearch.country = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchDepartCity(state, payload) {
            state.tourSearch.depart_city = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchResortCountry(state, payload) {
            state.tourSearch.resort_country = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchResorts(state, payload) {
            state.tourSearch.resorts = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchHotels(state, payload) {
            state.tourSearch.hotels = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchHotelStars(state, payload) {
            state.tourSearch.hotel_stars = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchMeals(state, payload) {
            state.tourSearch.meals = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchPriceFrom(state, payload) {
            state.tourSearch.price_from = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchPriceTo(state, payload) {
            state.tourSearch.price_to = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchAdults(state, payload) {
            state.tourSearch.adults = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchChildren(state, payload) {
            state.tourSearch.children = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchTourOperator(state, payload) {
            state.tourSearch.tour_operators = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchDateRange(state, payload) {
            state.tourSearch.date_range = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchNightsFrom(state, payload) {
            state.tourSearch.nights_from = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        changeSearchNightsTo(state, payload) {
            state.tourSearch.nights_to = payload;
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },


        getSearchDepartCities(state, payload) {
            state.search_depart_cities = payload;
        },
        getSearchCountries(state, payload) {
            state.search_countries = payload;
        },
        getSearchCities(state, payload) {
            state.search_cities = payload;
            state.search_cities.unshift({Name: 'Любой'})
        },
        getSearchHotels(state, payload) {
            payload.forEach( item => {
                if (item.StarName.length == 2) {
                    item.StarName = item.StarName.slice(0, -1);
                }
            });
            state.search_hotels = payload;
            state.search_hotels.unshift({Name: 'Любой'})
        },
        getSearchHotelStars(state, payload) {
            payload.forEach( item => {
                if (item.Name.length == 2) {
                    item.Name = item.Name.slice(0, -1);
                }
            });
            state.search_hotel_stars = payload;
            state.search_hotel_stars.unshift({Name: 'Любая'})
        },
        getSearchTourOperators(state, payload) {
            state.search_tour_operators = payload;
            state.search_tour_operators.unshift({Name: 'Любой'})
        },
        getSearchTourDates(state, payload) {
            state.search_tour_dates = payload;
        },

        search_incrementAdults(state) {
            state.tourSearch.adults++
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        search_decrementAdults(state) {
            state.tourSearch.adults--
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        search_incrementChildren(state) {
            state.tourSearch.children++
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },
        search_decrementChildren(state) {
            state.tourSearch.children--
            localStorage.setItem("tourSearch", JSON.stringify(state.tourSearch));
        },

        search_isDepartCitiesLoading(state, payload) {
            state.search_isDepartCitiesLoading = payload;
        },
        search_isCountriesLoading(state, payload) {
            state.search_isCountriesLoading = payload;
        },
        search_isCitiesLoading(state, payload) {
            state.search_isCitiesLoading = payload;
        },
        search_isHotelsLoading(state, payload) {
            state.search_isHotelsLoading = payload;
        },
        search_isHotelStarsLoading(state, payload) {
            state.search_isHotelStarsLoading = payload;
        },
        search_isTourOperatorsLoading(state, payload) {
            state.search_isTourOperatorsLoading = payload;
        },
        isToursLoading(state, payload) {
            state.isToursLoading = payload;
        },
    }
};
