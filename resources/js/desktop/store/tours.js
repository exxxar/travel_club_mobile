import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(Vuex)

export default {
  state: {
    tours: [],
    popularTours: [],
  },
  getters: {
    tours(state) {
      return state.tours;
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
      
    }
  },
  actions: {
    addTour ({commit}, payload) {
      commit('addTour', payload)
    },
    async setTours({commit}) {
      try {
        const resp = await axios.get('tours')
        .then((response) => {
          commit('setTours', response.data.tours);
          
        });
      } catch (error) {
        console.log(error)
        throw error
      }   
    },
    addPopularTour ({commit}, payload) {
      commit('addPopularTour', payload)
    },
    async setPopularTours({commit}) {
      try {
        const resp = await axios.get('popularTours')
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
      try{
        const resp = await axios.post('tours/new', payload)
        .then((response) => {
          commit('addTour', response.data.tour)
        });
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async updateTour ({commit}, payload) {
      const resp = await axios.post('tours/update', payload)
    },
  }
};