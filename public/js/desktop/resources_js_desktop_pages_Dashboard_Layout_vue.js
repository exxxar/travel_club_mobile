"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Dashboard_Layout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Layout */ "./resources/js/desktop/components/Layout.vue");
/* harmony import */ var _Tours_TourModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tours/TourModal */ "./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DashboardLayout",
  components: {
    Layout: _components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    TourModal: _Tours_TourModal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      menu: {
        "class": 'sticky sticky-border',
        no_socials: true,
        menu_icon_class: 'tc-d-up-md-none'
      },
      sidebar: {
        "class": "offcanvas-md offcanvas-start flex-shrink-0 tc-sidebar_static",
        header_class: "tc-d-up-md-none",
        footer_class: "tc-d-up-md-none"
      }
    };
  },
  computed: {
    auth_user: function auth_user() {
      return this.$store.getters.user;
    },
    auth_user_loading: function auth_user_loading() {
      return this.$store.getters.loading_user;
    },
    isLoggedIn: function isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function logout() {
      this.$store.dispatch('logout');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var initialState = {
  user_id: null,
  manager_id: null,
  title: '',
  country: '',
  city: '',
  description: '',
  type: '',
  status: '',
  is_archived: false,
  params: null,
  start_at: '',
  end_at: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TourModal",
  data: function data() {
    return {
      tour: initialState,
      statuses: [{
        text: 'Открыт',
        value: 'open'
      }, {
        text: 'Отменен',
        value: 'canceled'
      }, {
        text: 'Несостоялся',
        value: 'error'
      }, {
        text: 'Закрыт',
        value: 'closed'
      }
      // {text: '', value: ''},
      ],

      loading: false,
      mode: 'new'
    };
  },
  computed: {
    selected_tour: function selected_tour() {
      return this.$store.getters.selected_tour;
    },
    countries: function countries() {
      return this.$store.getters.countries;
    },
    countries_loading: function countries_loading() {
      return this.$store.getters.isCountriesLoading;
    },
    clients: function clients() {
      return this.$store.getters.clients;
    },
    clients_loading: function clients_loading() {
      return this.$store.getters.clients_loading;
    },
    clients_pagination: function clients_pagination() {
      return this.$store.getters.clients_pagination;
    }
  },
  watch: {
    'selected_tour': function selected_tour(newVal, oldVal) {
      if (newVal !== null) {
        this.setData('update');
      } else {
        this.setData('new');
      }
    }
  },
  methods: {
    setData: function setData() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'new';
      this.mode = mode;
      if (mode === 'update') {
        this.tour = JSON.parse(JSON.stringify(this.selected_tour));
      } else {
        this.tour = JSON.parse(JSON.stringify(initialState));
      }
    },
    saveTour: function saveTour() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.next = 3;
              return _this.$store.dispatch(_this.mode + 'Tour', _this.tour).then(function (response) {
                _this.loading = false;
                _this.exit();
              })["catch"](function (error) {
                _this.loading = false;
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    open: function open() {
      this.$store.commit('openModal', '#tourModal');
    },
    exit: function exit() {
      this.tour = JSON.parse(JSON.stringify(initialState));
      this.$store.commit('closeModal', '#tourModal');
      this.$store.commit('setTour', null);
    },
    getCountries: function getCountries() {
      this.$store.dispatch('getCountries', {
        town_id: 0
      });
    },
    getClients: function getClients() {
      this.$store.dispatch('setClients');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=template&id=78e48a01&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=template&id=78e48a01&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("layout", {
    attrs: {
      sidebar: _vm.sidebar,
      menu: _vm.menu
    },
    scopedSlots: _vm._u([{
      key: "modals",
      fn: function fn() {
        return [_c("TourModal", {
          ref: "tourModal"
        })];
      },
      proxy: true
    }, {
      key: "menu-user-controls",
      fn: function fn() {
        return [_vm.isLoggedIn && !_vm.auth_user_loading ? _c("div", {
          staticClass: "btn-group d-none d-md-block"
        }, [_c("div", {
          staticClass: "tc-navbar__user-wrapper",
          attrs: {
            id: "navbarDropdown",
            role: "button",
            "data-bs-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("div", {
          staticClass: "tc-navbar__user text-truncate me-1"
        }, [_c("div", {
          staticClass: "tc-navbar__user-name text-truncate"
        }, [_vm._v("\n                                " + _vm._s(_vm.auth_user ? _vm.auth_user.full_name : _vm.auth_user.email) + "\n                            ")])]), _vm._v(" "), _c("div", {
          staticClass: "tc-navbar__user-icon"
        }, [_c("base-icon", {
          attrs: {
            name: "ArrowDown",
            color: "primary"
          }
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu dropdown-menu-right tc-navbar__user-dropdown",
          attrs: {
            "aria-labelledby": "navbarDropdown"
          }
        }, [_c("div", {
          staticClass: "tc-navbar__user-dropdown-menu"
        }, [_c("a", {
          staticClass: "tc-navbar__user-dropdown-item",
          attrs: {
            href: "/dashboard/profile"
          }
        }, [_c("div", {
          staticClass: "tc-navbar__user-dropdown-item-icon tc-bg-primary-lighter"
        }, [_c("base-icon", {
          attrs: {
            name: "User",
            color: "primary"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "tc-navbar__user-dropdown-item-text"
        }, [_vm._v("Профиль")])]), _vm._v(" "), _c("div", {
          staticClass: "tc-navbar__user-dropdown-item",
          staticStyle: {
            cursor: "pointer"
          },
          on: {
            click: _vm.logout
          }
        }, [_c("div", {
          staticClass: "tc-navbar__user-dropdown-item-icon tc-bg-red-lighter"
        }, [_c("base-icon", {
          attrs: {
            name: "LogOut",
            color: "secondary"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "tc-navbar__user-dropdown-item-text"
        }, [_vm._v("Выйти")])])])])]) : _vm._e()];
      },
      proxy: true
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=template&id=5fc566da&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=template&id=5fc566da&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("base-modal", {
    attrs: {
      id: "tourModal",
      title: (_vm.mode === "new" ? "Создать" : "Редактировать") + " тур",
      right_action: _vm.saveTour,
      left_action: _vm.exit
    },
    on: {
      "close-modal": _vm.exit
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn() {
        return [_c("base-input", {
          attrs: {
            name: "title",
            label: "Название",
            disabled: _vm.loading,
            rules: "required"
          },
          model: {
            value: _vm.tour.title,
            callback: function callback($$v) {
              _vm.$set(_vm.tour, "title", $$v);
            },
            expression: "tour.title"
          }
        }), _vm._v(" "), _c("base-select", {
          attrs: {
            name: "country",
            label: "Страна",
            disabled: _vm.loading,
            rules: "required",
            options: _vm.countries,
            option_label: "Name",
            loading: _vm.countries_loading,
            reduce: function reduce(item) {
              return item.Name;
            }
          },
          on: {
            mounted: _vm.getCountries
          },
          model: {
            value: _vm.tour.country,
            callback: function callback($$v) {
              _vm.$set(_vm.tour, "country", $$v);
            },
            expression: "tour.country"
          }
        }), _vm._v(" "), _c("base-input", {
          attrs: {
            name: "city",
            label: "Город",
            disabled: _vm.loading
          },
          model: {
            value: _vm.tour.city,
            callback: function callback($$v) {
              _vm.$set(_vm.tour, "city", $$v);
            },
            expression: "tour.city"
          }
        }), _vm._v(" "), _c("base-select", {
          attrs: {
            name: "status",
            label: "Статус",
            disabled: _vm.loading,
            rules: "required",
            options: _vm.statuses,
            option_label: "text",
            reduce: function reduce(item) {
              return item.value;
            }
          },
          model: {
            value: _vm.tour.status,
            callback: function callback($$v) {
              _vm.$set(_vm.tour, "status", $$v);
            },
            expression: "tour.status"
          }
        }), _vm._v(" "), _c("base-select", {
          attrs: {
            name: "user_id",
            label: "Клиент",
            disabled: _vm.loading || _vm.clients_loading,
            rules: "required",
            options: _vm.clients,
            option_label: "full_name",
            reduce: function reduce(item) {
              return item.id;
            },
            method_name: "setClients",
            pagination: _vm.clients_pagination,
            infinite: ""
          },
          on: {
            mounted: _vm.getClients
          },
          model: {
            value: _vm.tour.user_id,
            callback: function callback($$v) {
              _vm.$set(_vm.tour, "user_id", $$v);
            },
            expression: "tour.user_id"
          }
        }), _vm._v(" "), _c("base-textarea", {
          attrs: {
            name: "description",
            label: "Описание",
            disabled: _vm.loading
          },
          model: {
            value: _vm.tour.description,
            callback: function callback($$v) {
              _vm.$set(_vm.tour, "description", $$v);
            },
            expression: "tour.description"
          }
        })];
      },
      proxy: true
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Layout.vue":
/*!*********************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Layout.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_78e48a01_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=78e48a01&scoped=true */ "./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=template&id=78e48a01&scoped=true");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js */ "./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_78e48a01_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Layout_vue_vue_type_template_id_78e48a01_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "78e48a01",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Dashboard/Layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue":
/*!******************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TourModal_vue_vue_type_template_id_5fc566da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TourModal.vue?vue&type=template&id=5fc566da&scoped=true */ "./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=template&id=5fc566da&scoped=true");
/* harmony import */ var _TourModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TourModal.vue?vue&type=script&lang=js */ "./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TourModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TourModal_vue_vue_type_template_id_5fc566da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TourModal_vue_vue_type_template_id_5fc566da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5fc566da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Dashboard/Tours/TourModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=template&id=78e48a01&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=template&id=78e48a01&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_78e48a01_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_78e48a01_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_78e48a01_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=template&id=78e48a01&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Layout.vue?vue&type=template&id=78e48a01&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=template&id=5fc566da&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=template&id=5fc566da&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourModal_vue_vue_type_template_id_5fc566da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourModal_vue_vue_type_template_id_5fc566da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourModal_vue_vue_type_template_id_5fc566da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourModal.vue?vue&type=template&id=5fc566da&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/TourModal.vue?vue&type=template&id=5fc566da&scoped=true");


/***/ })

}]);