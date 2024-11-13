require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import router from './router.js';
import store from './store';
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueAxios, axios);
// Получение this.$baseUrl из .env
Vue.prototype.$baseUrl = process.env.MIX_APP_URL;
axios.defaults.baseURL = Vue.prototype.$baseUrl+'/api/desktop/v1';
axios.interceptors.response.use(
    (response) => {
        //Показывать на фронте с бэка сообщения, если стоит статус 201 и есть текст сообщения
        if((response.status === 201 || response.status === 501 ) && response.data.message) {
            app.$notify({
                type: response.status=== 201 ? 'success': 'error',
                title: 'TravelClub',
                text: response.data.message,
                duration: 5000
            });
        }
        return response
    },
    async function (error) {
        const originalRequest = error.config;
        if (error.response && error.config && error.config.url !== '/api/auth/refresh'
            && error.config.url !== '/api/logout')
        {
            console.log('interceptors have error.response', error , error.response);
            if (error.response.data) {
                if (error.response.data.code !== 401 && error.response.data.detail) {
                    app.$notify({
                        type: 'error',
                        title: 'TravelClub',
                        text: error.response.data.detail,
                        duration: 5000
                    });
                }
            }
            if (error.response.status === 401)
            {
                console.log('here error.response.status === 401')
                store.dispatch('simpleLogout');
                return Promise.reject(error);
            }
            if (error.response.status === 403 && !originalRequest._retry && !error.response.config.__isRetryRequest) {
                // && error.response.data.title==="ERR_AUTHORIZATION_CHECK_FAILED"
                console.log('interceptors have error.response.status === 1001');
                if (localStorage.getItem('token') || store.getters.isLoggedIn) {
                    console.log('interceptors have token in localStorage');
                    originalRequest._retry = true;
                    await store.dispatch('refresh')
                        .then(() => {
                            router.go(router.currentRoute)
                            // const access_token = localStorage.getItem('token');
                            // if (access_token) {
                            //     originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
                            //     console.log('access_token', access_token);
                            //     console.log('interceptors refresh token is successful');
                            //     console.log('originalRequest', originalRequest);
                            //     return axios(originalRequest);
                            // }
                            // else {
                            //     console.log('interceptors refresh token catch error');
                            //     return Promise.reject(error);
                            // }
                        }).catch(error => {
                            store.dispatch('simpleLogout');
                            return Promise.reject(error);
                        })
                }
                else {
                    store.dispatch('simpleLogout');
                }
            }
        }
        console.log('interceptors end without return by token case');
        return Promise.reject(error);
    }
);

const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer "+token;
}
Vue.config.productionTip = false;

//<editor-fold desc="Plugins">
import skeleton from 'tb-skeleton'
import 'tb-skeleton/dist/skeleton.css'
Vue.use(skeleton);

import VueFormWizard from 'vue-step-progress-bar'
import 'vue-step-progress-bar/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard);

const moment = require('moment');
require('moment/locale/ru');
Vue.use(require('vue-moment'), {
    moment
});

window.eventBus = new Vue();

import ru from 'vee-validate/dist/locale/ru';
import {ValidationProvider, extend, ValidationObserver, localize} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});
localize( 'ru', ru);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
extend('phone', {
    message: field => 'Поле ' + field + ' должно быть верным номером телефона',
    validate(value) {
        if (value) {
            let phone = value.replace(/\D/g, "")
            return /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/.test(phone) && phone.length >= 11 && phone.length <= 13;
        }
        return false;
    },
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

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

import Fuse from 'fuse.js';
Vue.prototype.$search = function (term, list, options) {
    return new Promise(function (resolve, reject) {
        var run = new Fuse(list, options)
        var results = run.search(term)
        resolve(results)
    })
}

import Notifications from 'vue-notification'
Vue.use(Notifications);
//
// import VueRecord from '@codekraft-studio/vue-record'
// Vue.use(VueRecord)
// import AudioRecorder from 'vue-audio-recorder'
// Vue.use(AudioRecorder);
//
// import VueEllipseProgress from 'vue-ellipse-progress';
// Vue.use(VueEllipseProgress);

// var AddToCalendar = require('vue-add-to-calendar');
// Vue.use(AddToCalendar);

import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

import "vue-multiselect/dist/vue-multiselect.min.css"
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect);
//
// import KProgress from 'k-progress';
// Vue.component('k-progress', KProgress);

import InfiniteLoading from 'vue-infinite-loading';
Vue.component('infinite-loading', InfiniteLoading);

import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
Vue.component("daterange-picker", DateRangePicker);
//</editor-fold>

//<editor-fold desc="Prototypes">

// Vue.prototype.$can = function(value){
//     if(window.Laravel.jsPermissions == 0){
//         return false
//     }
//     let permissions = window.Laravel.jsPermissions.permissions
//     let _return = false
//     if(!Array.isArray(permissions)){
//         return false
//     }
//     if(value.includes('|')){
//         value.split('|').forEach(function (item) {
//             if(permissions.includes(item.trim())){
//                 _return = true
//             }
//         })
//     }else if(value.includes('&')){
//         _return = true
//         value.split('&').forEach(function (item) {
//             if(!permissions.includes(item.trim())){
//                 _return = false
//             }
//         })
//     }else{
//         _return = permissions.includes(value.trim())
//     }
//     return _return
// }

Vue.prototype.$is = function(value) {
    if(!value) {
        return true
    }
    if(!localStorage.getItem('token')) {
        return false
    }
    let roles = store.getters.user && store.getters.user.roles ? store.getters.user.roles : [];
    if(roles.length>0) {
        roles = roles.map(item=>item.name)
    }
    let _return = false;
    if(!Array.isArray(roles)) {
        return false
    }
    if(value.includes('|')) {
        value.split('|').forEach(function (item) {
            if(roles.includes(item.trim())) {
                _return = true
            }
        })
    }
    else if(value.includes('&')) {
        _return = true;
        value.split('&').forEach(function (item) {
            if(!roles.includes(item.trim())) {
                _return = false
            }
        })
    }
    else{
        _return = roles.includes(value.trim())
    }
    return _return
};
Vue.prototype.$isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent || navigator.vendor || window.opera)
|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))
|| false;

Vue.directive('role', function (el, binding) {
    // if(store.getters.user !== undefined) {
    //     el.hidden = store.getters.user.roles.indexOf(binding.value)=== -1;
    // }
    let value = binding.value;
    if(!value) {
        return true
    }
    if(!localStorage.getItem('token')){
        return false
    }
    // let roles = ['user', 'manager', 'admin'];
    let roles = store.getters.user && store.getters.user.roles ? store.getters.user.roles : [];
    if(roles.length>0) {
        roles = roles.map(item=>item.name)
    }
    let _return = false;
    if(!Array.isArray(roles)) {
        return false
    }
    if(value.includes('|')) {
        value.split('|').forEach(function (item) {
            if(roles.includes(item.trim())){
                _return = true
            }
        })
    }
    else if(value.includes('&')) {
        _return = true;
        value.split('&').forEach(function (item) {
            if(!roles.includes(item.trim())) {
                _return = false
            }
        })
    }
    else {
        _return = roles.includes(value.trim())
    }
    el.hidden = !_return
})
//</editor-fold>

//<editor-fold desc="Components">

import App from './App.vue';
import Menu from './components/Menu.vue';
import DataTable from "./components/DataTable.vue";
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

import Sidebar from "./components/SideBar.vue";
import SidebarLink from "./components/SidebarLink.vue";
Vue.component("side-bar", Sidebar);
Vue.component("sidebar-link", SidebarLink);

// import * as base from "./components/Base/index.js";

import CardList from "./components/CardList";
Vue.component("card-list", CardList);

//<editor-fold desc="Base">
import BaseInput from "./components/Base/BaseInput";
import BaseButton from "./components/Base/BaseButton.vue";
import BaseIcon from "./components/Base/BaseIcon.vue";
import BaseTextarea from "./components/Base/BaseTextarea.vue";
import BaseModal from "./components/Base/BaseModal.vue";
import BaseSelect from "./components/Base/BaseSelect.vue";
import BaseCheckbox from "./components/Base/BaseCheckbox.vue";
import BaseDatepicker from "./components/Base/BaseDaterangePicker.vue";

Vue.component("base-input", BaseInput);
Vue.component("base-button", BaseButton);
Vue.component("base-icon", BaseIcon);
Vue.component("base-textarea", BaseTextarea);
Vue.component("base-modal", BaseModal);
Vue.component("base-select", BaseSelect);
Vue.component("base-checkbox", BaseCheckbox);
Vue.component("base-datepicker", BaseDatepicker);
//</editor-fold>


import Card from "./components/Card.vue";
Vue.component("card", Card);

Vue.component('contact-form', require('./components/CallbackForm.vue').default);
Vue.component('Footer', require('./components/Footer.vue').default);
Vue.component('phone-by-city-form', require('./components/PhoneByCity.vue').default);
Vue.component('voice-callback-form', require('./components/VoiceCallbackForm.vue').default);
Vue.component('phone-order', require('./components/PhoneOrder.vue').default);
Vue.component('modal', require('./components/Modal.vue').default);
Vue.component('to-do-list', require('./components/ToDoList.vue').default);
Vue.component('avia-tickets-list', require('./components/AviaTicketsList.vue').default);
Vue.component('passengers-list', require('./components/PassengersList.vue').default);
Vue.component('chat-list', require('./components/Chat/ChatList.vue').default);
Vue.component('message', require('./components/Chat/Message.vue').default);
Vue.component('CardTour', require('./pages/Dashboard/Tours/CardTour.vue').default);
Vue.component('CardDocument', require('./pages/Dashboard/Documents/CardDocument.vue').default);
Vue.component('CardArticle', require('./pages/Dashboard/News/Card.vue').default);

import TourCard from "./components/TourCard.vue";
Vue.component("tour-card", TourCard);
// import MobileTourCard from "./mobile/components/TourCard.vue";
// Vue.component("mobile-tour-card", MobileTourCard);

import AudioPlayer from "./components/AudioPlayer.vue";
Vue.component('audio-player', AudioPlayer);

import index from './mobile/pages/index.vue';

//<editor-fold desc="Layouts">
import DesktopLayout from './pages/DesktopLayout.vue';
Vue.component('default-layout', DesktopLayout);
import LandingLayout from './components/LandingLayout.vue';
Vue.component('LandingLayout', LandingLayout);
//mobile-layouts
// import MobileLayout from './mobile/pages/MobileLayout.vue';
// Vue.component('mobile-layout', MobileLayout);
// import TourModuleLayout from './mobile/pages/TourModuleLayout.vue';
// Vue.component('tour-module-layout', TourModuleLayout);
// import AviaModuleLayout from './mobile/pages/AviaModuleLayout.vue';
// Vue.component('avia-module-layout', AviaModuleLayout);
// import ClientLayout from './mobile/pages/ClientLayout.vue';
// Vue.component('client-layout', ClientLayout);
// import ManagerLayout from './mobile/pages/ManagerLayout.vue';
// Vue.component('manager-layout', ManagerLayout);
// import AdminLayout from './mobile/pages/AdminLayout.vue';
// Vue.component('admin-layout', AdminLayout);
//</editor-fold>

//<editor-fold desc="MobileMenus">
// import MobileMenu from './mobile/components/MobileMenu.vue';
// Vue.component('mobile-menu', MobileMenu );
// import TourModuleMenu from './mobile/components/TourModuleMenu.vue';
// Vue.component('tour-module-menu', TourModuleMenu);
// import AviaModuleMenu from './mobile/components/AviaModuleMenu.vue';
// Vue.component('avia-module-menu', AviaModuleMenu);
// import ClientMenu from './mobile/components/ClientMenu.vue';
// Vue.component('client-menu', ClientMenu );
// import ManagerMenu from './mobile/components/ManagerMenu.vue';
// Vue.component('manager-menu', ManagerMenu);
// import AdminMenu from './mobile/components/AdminMenu.vue';
// Vue.component('admin-menu', AdminMenu);
//</editor-fold>

Vue.component('employee-list', require('./components/Employees/EmployeeList.vue').default);
Vue.component('news-list', require('./components/News/NewsList.vue').default);

//</editor-fold>

Vue.filter('empty_filter', function (value) {
    if(value === '' || value === null || value === undefined) {
        value = '';
    }
    return value;
});

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

new Vue({
    store,
    el: '#landing',
});
