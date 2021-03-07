import Vue from 'vue';
import Vuex from 'vuex';

import tourModule from './modules/tourModule';
import aviaModule from './modules/aviaModule';


Vue.use(Vuex);

export default new Vuex.Store({
	namespaced: true,
	modules: {
		tourModule, aviaModule
	}
})
