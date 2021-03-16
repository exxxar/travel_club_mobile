import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    menu: false,
    showForms: false,
      time:'day',
      preloader:false,
      isMobile:false,
      fromRoute:null,
      locationByIp:''
  },
  getters: {
    menu(state) {
      return state.menu;
    },
    showForms(state) {
      return state.showForms;
    },
    time(state) {
        return state.time;
    },
      preloader(state) {
            return state.preloader;
          },
      isMobile(state) {
          return state.isMobile
      },
      fromRoute(state) {
          return state.fromRoute;
      },
      locationByIp(state) {
          return state.locationByIp
      }

    // drawer(state) {
    //   return state.drawer;
    // },
    // snackbar(state) {
    //   return state.snackbar;
    // },

  },
  mutations: {
    // setDrawer: (state, payload) => (state.drawer = payload),
    // toggleDrawer: state => (state.drawer = !state.drawer),
    setMenu: (state, payload) => (state.menu = payload),
    //toggleMenu: state => (state.menu = !state.menu),
    setShowForms: (state, payload) => (state.showForms = payload),
    setTime: (state, payload) => (state.time = payload),
      setPreloader: (state, payload) => (state.preloader = payload),
      setFromRoute: (state, payload) => (state.fromRoute = payload),
      // toggleSnackbar: state => (state.snackbar = !state.snackbar),
      setAppMode (state, payload){
        state.isMobile = payload
    },
      setLocationByIp (state, payload){
        state.locationByIp = payload
    }
  },
  actions: {
      setAppMode ({commit}, payload) {
          commit('setAppMode', payload)
      },
      setLocationByIp ({commit}, payload) {
          commit('setLocationByIp', payload)
      },
  }
};
