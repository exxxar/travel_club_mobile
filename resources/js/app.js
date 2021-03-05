/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRecord from '@codekraft-studio/vue-record'

Vue.use(VueRecord)

import Tawk from 'vue-tawk'

Vue.use(Tawk, {
    tawkSrc: 'https://embed.tawk.to/6011a65ac31c9117cb73211e/1et2f3ktl/default'
})


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

//Components
Vue.component('bottom-menu', require('./components/BottomMenu.vue').default);
Vue.component('header-block', require('./components/HeaderBlock.vue').default);
Vue.component('modals-block', require('./components/ModalsBlock.vue').default);
Vue.component('notification-bar', require('./components/NotificationBar.vue').default);
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


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#wrapper',
});
