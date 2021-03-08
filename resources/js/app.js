/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vuex from 'vuex';

Vue.use(Vuex);

import {ValidationProvider, extend, ValidationObserver} from 'vee-validate';
import {required, email} from 'vee-validate/dist/rules';

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
    validate(value, {target}) {
        return value === target;
    },
    message: 'Подтверждение пароля не совпадает с введённым паролем'
});

import store from './store';

window.eventBus = new Vue();

import Notifications from 'vue-notification'

Vue.use(Notifications)

import VueRecord from '@codekraft-studio/vue-record'

Vue.use(VueRecord)

import Tawk from 'vue-tawk'

Vue.use(Tawk, {
    tawkSrc: 'https://embed.tawk.to/6011a65ac31c9117cb73211e/1et2f3ktl/default'
})

import VuePwaInstallPlugin from "vue-pwa-install";

Vue.use(VuePwaInstallPlugin);

//Components
Vue.component('bottom-menu', require('./components/BottomMenu.vue').default);
Vue.component('header-block', require('./components/HeaderBlock.vue').default);
Vue.component('modals-block', require('./components/ModalsBlock.vue').default);
Vue.component('travel-notification', require('./components/TravelNotification.vue').default);
Vue.component('preloader', require('./components/Preloader.vue').default);
Vue.component('sidebar', require('./components/SideBar.vue').default);

Vue.component('chat-footer', require('./components/Chat/ChatFooter.vue').default);
Vue.component('chat-header', require('./components/Chat/ChatHeader.vue').default);
Vue.component('share-action-sheet', require('./components/Chat/ShareActionSheet.vue').default);

Vue.component('intro-header', require('./components/Intro/IntroHeader.vue').default);
Vue.component('text-callback-form', require('./components/TextCallbackFrom.vue').default);
Vue.component('voice-callback-form', require('./components/VoiceCallbackForm.vue').default);
Vue.component('header-anim-section', require('./components/HeaderAnimSection.vue').default);
Vue.component('promo-image-block', require('./components/PromoImageBlock.vue').default);
Vue.component('footer-anim-section', require('./components/FooterAnimBlock.vue').default);
Vue.component('story-list', require('./components/Stories/StoryList.vue').default);

//Pages
Vue.component('index-page', require('./pages/Index.vue').default);
Vue.component('about-page', require('./pages/About.vue').default);
Vue.component('contact-page', require('./pages/Contact.vue').default);
Vue.component('chat-page', require('./pages/Chat.vue').default);
Vue.component('faq-page', require('./pages/Faq.vue').default);
Vue.component('maintenance-page', require('./pages/Maintenance.vue').default);
Vue.component('profile-page', require('./pages/Profile.vue').default);
Vue.component('intro-page', require('./pages/Intro.vue').default);

Vue.component('adventure-page', require('./pages/Adenture.vue').default);
Vue.component('tours-page', require('./pages/Tours.vue').default);
Vue.component('hotels-page', require('./pages/Hotels.vue').default);
Vue.component('flies-page', require('./pages/Flies.vue').default);
Vue.component('tour-search-page', require('./pages/TourSearch.vue').default);
Vue.component('avia-search-page', require('./pages/AviaSearch.vue').default);

const app = new Vue({
    store,
    el: '#wrapper',
});
