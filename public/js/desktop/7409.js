/*! For license information please see 7409.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7409],{17409:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),s=new N(n||[]);return i(a,"_invoke",{value:k(t,r,s)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",v="suspendedYield",m="executing",y="completed",g={};function b(){}function _(){}function w(){}var x={};f(x,l,(function(){return this}));var C=Object.getPrototypeOf,T=C&&C(C(P([])));T&&T!==r&&a.call(T,l)&&(x=T);var I=w.prototype=b.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,s,l){var c=p(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,l)}),(function(t){r("throw",t,s,l)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,l)}))}l(c.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function k(e,r,n){var o=h;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var l=j(s,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var c=p(e,r,n);if("normal"===c.type){if(o=n.done?y:v,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=y,n.method="throw",n.arg=c.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return _.prototype=w,i(I,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:_,configurable:!0}),_.displayName=f(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,u,"GeneratorFunction")),t.prototype=Object.create(I),t},e.awrap=function(t){return{__await:t}},L(S.prototype),f(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(d(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(I),f(I,u,"Generator"),f(I,l,(function(){return this})),f(I,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function a(t,e,r,n,o,a,i){try{var s=t[a](i),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,o)}const i={name:"Archive",data:function(){return{columns:[{label:"ID тура",field:"id"},{label:"Дата",field:"created_at"},{label:"С",field:"TourInfo.date_range.start"},{label:"По",field:"TourInfo.date_range.end"},{label:"Страна",field:"TourInfo.country.Name"},{label:"Курорт",field:"TourInfo.resort.Name"},{label:"Цена",field:"TourInfo.price"},{label:"Выплачено",field:"TourInfo.paid"}],load:!0}},created:function(){},mounted:function(){this.getUser()},computed:{menu:function(){return this.$store.getters.menu},user:function(){return this.$store.getters.user}},methods:{getUser:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.user){t.next=5;break}return t.next=3,e.$store.dispatch("getUser").then((function(){(e.user.archive.length>0||null!=e.user.archive)&&e.user.archive.forEach((function(t){t.show=!1,t.isLoading=!1,t.expand={country:t.TourInfo.country,resort:t.TourInfo.resort,hotel:t.TourInfo.hotel,meal:t.TourInfo.meal,room_type:t.TourInfo.room_type,tour_operator:t.TourInfo.tour_operator,date_range:{start:t.TourInfo.date_range.start,end:t.TourInfo.date_range.end},price:t.TourInfo.price,paid:t.TourInfo.paid,left:t.TourInfo.left,services:t.TourInfo.services,avia_tickets:t.TourInfo.avia_tickets,passengers:t.TourInfo.passengers,files:t.TourInfo.files}})),e.load=!1}));case 3:t.next=7;break;case 5:(e.user.archive.length>0||null!=e.user.archive)&&e.user.archive.forEach((function(t){t.show=!1,t.isLoading=!1,t.expand={country:t.TourInfo.country,resort:t.TourInfo.resort,hotel:t.TourInfo.hotel,meal:t.TourInfo.meal,room_type:t.TourInfo.room_type,tour_operator:t.TourInfo.tour_operator,date_range:{start:t.TourInfo.date_range.start,end:t.TourInfo.date_range.end},price:t.TourInfo.price,paid:t.TourInfo.paid,left:t.TourInfo.left,services:t.TourInfo.services,avia_tickets:t.TourInfo.avia_tickets,passengers:t.TourInfo.passengers,files:t.TourInfo.files}})),e.load=!1;case 7:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,l,"next",t)}function l(t){a(i,n,o,s,l,"throw",t)}s(void 0)}))})()},toTourInfo:function(t){this.$router.push("/client/tour-info/"+t)},sendMessage:function(t){this.$notify({group:"info",type:"travel",title:"Сообщение от ВПУТЬ",text:t})}},directives:{mask:r(29928).mask}};const s=(0,r(14486).A)(i,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row m-auto w-100 h-100 align-items-center justify-content-center",attrs:{id:"mobile-table"}},[e("div",{staticClass:"col-md-12"},[e("data-table",{attrs:{title:"Архив",columns:t.columns,rows:t.user.archive,perPage:[5,10,25,50],clickable:!1,loadingAnimation:t.load},scopedSlots:t._u([{key:"tbody-tr",fn:function(r){return[e("td",{attrs:{"data-title":"Действия"}},[r.row.isLoading?t._e():e("button",{staticClass:"btn waves-effect",staticStyle:{outline:"none"},on:{click:function(e){return t.toTourInfo(r.row.id)}}},[e("i",{staticClass:"icon icon-eye",staticStyle:{color:"#0d274b"}})])])]}},{key:"expand-panel",fn:function(r){return[e("div",{staticStyle:{width:"100%",height:"100%"}},[e("div",{staticClass:"row align-items-center justify-content-center m-auto",staticStyle:{width:"100%",height:"100%"}},[e("div",{staticClass:"col-md-6 col-sm-12 mx-auto"},[e("div",{staticClass:"list-group"},[e("div",{staticClass:"list-group-item flex-column align-items-start p-1"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("label",{staticClass:"mb-1 control-label",staticStyle:{color:"#f08b23"}},[t._v("Страна")])]),t._v(" "),e("p",{staticClass:"mb-1"},[t._v(t._s(r.row.expand.country.Name))])]),t._v(" "),e("div",{staticClass:"list-group-item flex-column align-items-start p-1"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("label",{staticClass:"mb-1 control-label",staticStyle:{color:"#f08b23"}},[t._v("Курорт")])]),t._v(" "),e("p",{staticClass:"mb-1"},[t._v("\n                                            "+t._s(r.row.expand.resort.Name)+"\n                                        ")])]),t._v(" "),e("div",{staticClass:"list-group-item flex-column align-items-start p-1"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("label",{staticClass:"mb-1 control-label",staticStyle:{color:"#f08b23"}},[t._v("Отель")])]),t._v(" "),e("p",{staticClass:"mb-1"},[t._v("\n                                            "+t._s(r.row.expand.hotel.Name)+"\n                                        ")])]),t._v(" "),e("div",{staticClass:"list-group-item flex-column align-items-start p-1"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("label",{staticClass:"mb-1 control-label",staticStyle:{color:"#f08b23"}},[t._v("Питание")])]),t._v(" "),e("p",{staticClass:"mb-1"},[t._v("\n                                            "+t._s(r.row.expand.meal.Name)+"\n                                        ")])])])]),t._v(" "),e("div",{staticClass:"col-md-6 col-sm-12 mx-auto"},[e("div",{staticClass:"list-group"},[e("div",{staticClass:"list-group-item flex-column align-items-start p-1"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("label",{staticClass:"mb-1 control-label",staticStyle:{color:"#f08b23"}},[t._v("Даты тура")])]),t._v(" "),e("p",{staticClass:"mb-1"},[t._v(t._s(r.row.expand.date_range.start)+" - "+t._s(r.row.expand.date_range.end))])]),t._v(" "),e("div",{staticClass:"list-group-item flex-column align-items-start p-1"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("label",{staticClass:"mb-1 control-label",staticStyle:{color:"#f08b23"}},[t._v("Цена")])]),t._v(" "),e("p",{staticClass:"mb-1"},[t._v(t._s(r.row.expand.price))])]),t._v(" "),e("div",{staticClass:"list-group-item flex-column align-items-start p-1"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("label",{staticClass:"mb-1 control-label",staticStyle:{color:"#f08b23"}},[t._v("Выплачено")])]),t._v(" "),e("p",{staticClass:"mb-1"},[t._v(t._s(r.row.expand.paid))])]),t._v(" "),e("div",{staticClass:"list-group-item flex-column align-items-start p-1"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("label",{staticClass:"mb-1 control-label",staticStyle:{color:"#f08b23"}},[t._v("Остаток")])]),t._v(" "),e("p",{staticClass:"mb-1"},[t._v(t._s(r.row.expand.left))])])])]),t._v(" "),e("div",{staticClass:"col-md-12 col-sm-12 mx-auto"},[e("label",{staticClass:"mb-1 control-label",staticStyle:{color:"#f08b23"}},[t._v("Дополнительные услуги")]),t._v(" "),e("div",{staticClass:"list-group-item flex-column align-items-start p-1"},[e("p",{staticClass:"mb-1"},[t._v(t._s(r.row.expand.services))])])]),t._v(" "),e("div",{staticClass:"col-md-12 col-sm-12 mx-auto"},[e("label",{staticClass:"mb-1 control-label",staticStyle:{color:"#f08b23"}},[t._v("Файлы")]),t._v(" "),t._l(r.row.expand.files,(function(r,n){return e("div",{key:r.name,staticClass:"list-group-item"},[e("div",{staticClass:"row m-auto w-100 align-items-center justify-content-center"},[e("div",{staticClass:"col-4 text-center"},[/\.(jpe?g|png|svg)$/i.test(r.name)?e("img",{staticClass:"preview",attrs:{src:r.path}}):e("img",{staticClass:"preview",attrs:{src:"/images/LOGO-1.png"}})]),t._v(" "),e("div",{staticClass:"col-8"},["file"==r.type?e("div",[e("p",{staticClass:"control-label"},[t._v(t._s(r.name))])]):t._e(),t._v(" "),"audio"==r.type?e("div",[e("audio-player",{attrs:{audio:r}})],1):t._e()])])])}))],2)])])]}}])},[e("th",{staticStyle:{width:"auto"},attrs:{slot:"thead-tr"},slot:"thead-tr"},[t._v("\n                    Действия\n                ")])])],1)])])}),[],!1,null,"98fb927c",null).exports}}]);
//# sourceMappingURL=7409.js.map