window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');

} catch (e) {
}

window.axios = require('axios');

window.axios.defaults.baseURL = '/api/admin/v1';

window.csrf = document.head.querySelector('meta[name="csrf-token"]').content

window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.csrf;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



