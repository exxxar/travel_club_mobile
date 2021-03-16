require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import router from './router.js';
import store from './store';

import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import VueFormWizard from 'vue-step-progress-bar'
import 'vue-step-progress-bar/dist/vue-form-wizard.min.css'
import App from './App.vue';
import SignInForm from './components/SignInForm.vue';
import Illuminator from './components/Illuminator.vue';
import Menu from './components/Menu.vue';
// import DataTable from "vue-materialize-datatable";
import DataTable from "./components/DataTable.vue";

import skeleton from 'tb-skeleton'
import  'tb-skeleton/dist/skeleton.css'
Vue.use(skeleton)
Vue.use(VueRouter);
Vue.use(Vuex);
// Vue.use(require('vue-moment'));

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
extend('email', {
    ...email,
    message: 'Поле E-mail должно быть действительным адресом электронной почты'
});
extend('required', {
    ...required,
    message: 'Это поле обязательно к заполнению'
});
extend('min', {
    validate(value, args) {
        return value.length >= args.length;
    },
    params: ['length'],
    message: 'Это поле должно содержать {length} или более знаков'
});

extend('phone', {
    validate(value, args) {
        return value.length >= 18;
    },
    message: 'Это поле должно быть действительным номером телефона'
});
extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    },
    message: 'Подтверждение пароля не совпадает с введённым паролем'
});

import { Hooper,
    Slide,
    Pagination as HooperPagination,
    Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

Vue.component('hooper',Hooper );
Vue.component('slide', Slide);
Vue.component('hooper-pagination', HooperPagination );
Vue.component('hooper-navigation',  HooperNavigation);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import Fuse from 'fuse.js'
Vue.prototype.$search = function (term, list, options) {
    return new Promise(function (resolve, reject) {
        var run = new Fuse(list, options)
        var results = run.search(term)
        resolve(results)
    })
}

Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'https://m.travel-club.tours/api/v1';
// axios.defaults.baseURL = 'https://travel-club/api/v1';

//Vue.prototype.$http = axios;
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer "+token;
}
Vue.config.productionTip = false;

Vue.use(VueFormWizard)
// Vue.component('sign-in', SignInForm);
// Vue.component('illuminator', Illuminator);
Vue.component('main-menu', Menu);
Vue.component('data-table', DataTable);

// import { Slide as sl } from 'vue-burger-menu'
import Slider from './components/Slider.vue';
Vue.component('slider', Slider);
import PenguinMenu from './components/PenguinMenu.vue';
Vue.component('quick-menu', PenguinMenu);

import Preloader from './components/Preloader.vue';
Vue.component('preloader', Preloader);
import Loader from './components/Loader.vue';
Vue.component('loader', Loader);
import PromocodeImage from './components/PromocodeImage.vue';
Vue.component('promocode-image',  PromocodeImage);
var VueScrollTo = require('vue-scrollto');
// You can also pass in the default options
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

import Sidebar from "./components/SideBar.vue";
import SidebarLink from "./components/SidebarLink.vue";
Vue.component("side-bar", Sidebar);
Vue.component("sidebar-link", SidebarLink);

// import "./components/Base/index.js";
import Card from "./components/Card.vue";
import BaseInput from "./components/Base/BaseInput";
import BaseButton from "./components/Base/BaseButton.vue";
Vue.component("card", Card);
Vue.component("base-input", BaseInput);
Vue.component("base-button", BaseButton);

Vue.component('contact-form', require('./components/CallbackForm.vue').default);
Vue.component('voice-callback-form', require('./components/VoiceCallbackForm.vue').default);
Vue.component('phone-order', require('./components/PhoneOrder.vue').default);
Vue.component('modal', require('./components/Modal.vue').default);
Vue.component('to-do-list', require('./components/ToDoList.vue').default);
Vue.component('avia-tickets-list', require('./components/AviaTicketsList.vue').default);
Vue.component('passengers-list', require('./components/PassengersList.vue').default);
Vue.component('chat-list', require('./components/Chat/ChatList.vue').default);
Vue.component('message', require('./components/Chat/Message.vue').default);


import TourCard from "./components/TourCard.vue";
Vue.component("tour-card", TourCard);
import MobileTourCard from "./mobile/components/TourCard.vue";
Vue.component("mobile-tour-card", MobileTourCard);

import Notifications from 'vue-notification'
Vue.use(Notifications);

import VueRecord from '@codekraft-studio/vue-record'
Vue.use(VueRecord);

const moment = require('moment');
require('moment/locale/ru');
Vue.use(require('vue-moment'), {
    moment
});

import VueEllipseProgress from 'vue-ellipse-progress';
Vue.use(VueEllipseProgress);

var AddToCalendar = require('vue-add-to-calendar');
Vue.use(AddToCalendar);

import "vue-multiselect/dist/vue-multiselect.min.css"
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)

import VueHotelDatepicker from '@northwalker/vue-hotel-datepicker';
Vue.component('VueHotelDatepicker', VueHotelDatepicker);
import Datepicker from 'vuejs-datepicker';
import {ru} from 'vuejs-datepicker/dist/locale'
Vue.component('datepicker', Datepicker);
import FunctionalCalendar from 'vue-functional-calendar';
Vue.use(FunctionalCalendar, {
    dayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    shortMonthNames: ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек']
});
// Vue.component('functional-calendar', FunctionalCalendar);

import AudioPlayer from "./components/AudioPlayer.vue";
Vue.component('audio-player', AudioPlayer);


import KProgress from 'k-progress';
Vue.component('k-progress', KProgress);

import index from './mobile/pages/index.vue';

//layouts
import DesktopLayout from './pages/DesktopLayout.vue';
Vue.component('default-layout', DesktopLayout);
//mobile-layouts
import MobileLayout from './mobile/pages/MobileLayout.vue';
Vue.component('mobile-layout', MobileLayout);
import TourModuleLayout from './mobile/pages/TourModuleLayout.vue';
Vue.component('tour-module-layout', TourModuleLayout);
import AviaModuleLayout from './mobile/pages/AviaModuleLayout.vue';
Vue.component('avia-module-layout', AviaModuleLayout);
import ClientLayout from './mobile/pages/ClientLayout.vue';
Vue.component('client-layout', ClientLayout);
import ManagerLayout from './mobile/pages/ManagerLayout.vue';
Vue.component('manager-layout', ManagerLayout);
import AdminLayout from './mobile/pages/AdminLayout.vue';
Vue.component('admin-layout', AdminLayout);

//mobile-menus
import MobileMenu from './mobile/components/MobileMenu.vue';
Vue.component('mobile-menu', MobileMenu );
import TourModuleMenu from './mobile/components/TourModuleMenu.vue';
Vue.component('tour-module-menu', TourModuleMenu);
import AviaModuleMenu from './mobile/components/AviaModuleMenu.vue';
Vue.component('avia-module-menu', AviaModuleMenu);
import ClientMenu from './mobile/components/ClientMenu.vue';
Vue.component('client-menu', ClientMenu );
import ManagerMenu from './mobile/components/ManagerMenu.vue';
Vue.component('manager-menu', ManagerMenu);
import AdminMenu from './mobile/components/AdminMenu.vue';
Vue.component('admin-menu', AdminMenu);


new Vue({
    router,
    store,
    ru: ru,
    render: h => h(App)
}).$mount('#app');


