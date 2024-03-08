import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import navigation from './navigation';
import tours from './tours';
import users from './users';
import clients from './clients';

import todos from './todos';
import messages from './messages';

import tourSearch from './tourSearch';


import tourModule from './tourModule';
import aviaModule from './aviaModule';

import moduleOrders from "./moduleOrders";

import chats from './chats';
import branches from "./branches";
import employees from "./employeesModule";

import shared from "./shared";
import documents from "./documents";
import reviews from "./reviews";
import articles from "./articles";

Vue.use(Vuex);

export default new Vuex.Store({
	namespaced: true,
	modules: {
		auth, navigation, users, tours, todos,
        messages, tourModule, aviaModule, moduleOrders, tourSearch,
        clients, chats, branches, employees, shared, documents, reviews, articles
	}
})
