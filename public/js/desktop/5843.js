/*! For license information please see 5843.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5843],{35843:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var n=r(39714),o=r(5660);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:S(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",v="suspendedYield",m="executing",_="completed",g={};function y(){}function w(){}function b(){}var x={};h(x,s,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(T([])));E&&E!==r&&n.call(E,s)&&(x=E);var k=b.prototype=y.prototype=Object.create(x);function C(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,c,s){var u=d(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==i(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function S(e,r,n){var o=p;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===_){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=_,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=d(e,r,n);if("normal"===u.type){if(o=n.done?_:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=_,n.method="throw",n.arg=u.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(i(e)+" is not iterable")}return w.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=h(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},C(j.prototype),h(j.prototype,u,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(k),h(k,l,"Generator"),h(k,s,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function c(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}const s={name:"Dashboard",components:{NotFound:n.A,CardList:o.A},data:function(){return{clients_count:0,managers_count:0,documents_count:0,reviews_count:0,tours_count:0,documents:[],loading_documents:!1}},created:function(){console.log("dashboard created")},mounted:function(){console.log("dashboard mounted"),this.getStatistics()},computed:{user:function(){return this.$store.getters.user},isLoggedIn:function(){return this.$store.getters.isLoggedIn},loading_user:function(){return this.$store.getters.loading_user}},methods:{getStatistics:function(){var t,e=this;return(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("auth/statistics").then((function(t){e.clients_count=t.data.clients,e.managers_count=t.data.managers,e.documents_count=t.data.documents,e.reviews_count=t.data.reviews,e.tours_count=t.data.tours}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,s,"next",t)}function s(t){c(i,n,o,a,s,"throw",t)}a(void 0)}))})()},getDocuments:function(){var t=this;console.log("this/user",this.user),this.loading_documents=!0;var e={limit:5,dashboard_user_id:""};e.dashboard_user_id=this.user.id,this.$store.dispatch("getDocuments",e).then((function(e){t.documents=e.data.userDocuments,t.loading_documents=!1})).catch((function(t){console.log(t)}))}}};const u=(0,r(14486).A)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tc-page container"},[e("div",{staticClass:"tc-wrapper-between tc-gap-xxlarge tc-gap-down-md-medium"},[e("div",{staticClass:"tc-card flex-fill tc-wrapper-between tc-gap-small"},[e("h3",[t._v("Туров")]),t._v(" "),e("h2",[t._v(t._s(t.tours_count))])]),t._v(" "),e("div",{staticClass:"tc-card flex-fill tc-wrapper-between tc-gap-small"},[e("h3",[t._v("Документов")]),t._v(" "),e("h2",[t._v(t._s(t.documents_count))])]),t._v(" "),e("div",{staticClass:"tc-card flex-fill tc-wrapper-between tc-gap-small"},[e("h3",[t._v("Отзывов")]),t._v(" "),e("h2",[t._v(t._s(t.reviews_count))])]),t._v(" "),t.$is("manger|admin")?e("div",{staticClass:"tc-card flex-fill tc-wrapper-between tc-gap-small"},[e("h3",[t._v("Клиентов")]),t._v(" "),e("h2",[t._v(t._s(t.clients_count))])]):t._e(),t._v(" "),t.$is("admin")?e("div",{staticClass:"tc-card flex-fill tc-wrapper-between tc-gap-small"},[e("h3",[t._v("Менеджеров")]),t._v(" "),e("h2",[t._v(t._s(t.managers_count))])]):t._e()]),t._v(" "),e("h2",{staticClass:"tc-page__subtitle my-3 my-md-5"},[t._v("Последние туры")]),t._v(" "),t.loading_user?t._e():e("card-list",{attrs:{name:"Tours",no_infinite:"",no_pagination:"",no_header:"",method_params:{limit:5,dashboard_user_id:t.user.id},loading:t.loading_user,current_component:"CardTour",not_found:{subtitle:"В этой секции будут собраны Ваши последние 5 туров"}},scopedSlots:t._u([{key:"list_footer",fn:function(r){return[r.length>0?e("div",{staticClass:"tc-wrapper justify-content_end"},[e("base-button",{on:{click:function(e){return t.$router.push("/dashboard/tours")}}},[t._v("Перейти")])],1):t._e()]}}],null,!1,1918642682)}),t._v(" "),e("h2",{staticClass:"tc-page__subtitle my-3 my-md-5"},[t._v("Последние документы")]),t._v(" "),t.loading_user?t._e():e("card-list",{attrs:{name:"Documents",no_infinite:"",no_pagination:"",no_header:"",method_params:{limit:5,dashboard_user_id:t.user.id},loading:t.loading_user,current_component:"CardDocument",not_found:{subtitle:"В этой секции будут собраны последние 5 документов, загруженные для Вас"}},scopedSlots:t._u([{key:"list_footer",fn:function(r){return[r.length>0?e("div",{staticClass:"tc-wrapper justify-content_end"},[e("base-button",{on:{click:function(e){return t.$router.push("/dashboard/documents")}}},[t._v("Перейти")])],1):t._e()]}}],null,!1,4067772617)})],1)}),[],!1,null,"22a501e0",null).exports}}]);
//# sourceMappingURL=5843.js.map