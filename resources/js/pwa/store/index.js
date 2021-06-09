import Vue from 'vue';
import Vuex from 'vuex';

import tourModule from './modules/tourModule';
import aviaModule from './modules/aviaModule';
import storiesModule from './modules/storiesModule';
import employeesModule from './modules/employeesModule';
import telegramModule from './modules/telegramModule';


Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        tourModule, aviaModule, storiesModule, telegramModule, employeesModule
    }
})
