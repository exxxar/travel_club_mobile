"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_SignUp_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SignUp",
  data: function data() {
    return {
      // login:'',
      email: '',
      password: '',
      confirm_password: '',
      wrongCredentials: '',
      passwordFieldType: 'password',
      passwordFieldType1: 'password',
      step1: true,
      step2: false,
      FullName: '',
      FirstName: '',
      MiddleName: '',
      LastName: '',
      Phone: '',
      loading: false
    };
  },
  computed: {
    isLoggedIn: function isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    isAdmin: function isAdmin() {
      return this.$store.getters.isAdmin;
    },
    isManager: function isManager() {
      return this.$store.getters.isManager;
    }
  },
  mounted: function mounted() {
    if (this.isLoggedIn) {
      if (this.isAdmin == true) {
        this.$router.push('/admin');
      } else if (this.isManager == true) {
        this.$router.push('/manager');
      } else {
        this.$router.push('/client');
      }
    }
  },
  methods: {
    switchVisibility: function switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    switchVisibility1: function switchVisibility1() {
      this.passwordFieldType1 = this.passwordFieldType1 === 'password' ? 'text' : 'password';
    },
    nextStep: function nextStep() {
      this.step1 = false;
      this.step2 = true;
    },
    prevStep: function prevStep() {
      this.step1 = true;
      this.step2 = false;
    },
    signup: function signup() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var promo, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.wrongCredentials = '';
              if (!(_this.email != '')) {
                _context.next = 9;
                break;
              }
              _this.FullName = _this.LastName + ' ' + _this.FirstName + ' ' + _this.MiddleName;
              promo = localStorage.getItem('promo');
              if (promo === 'true') {
                promo = 1;
              } else {
                promo = 0;
              }
              data = {
                // login: this.login,
                email: _this.email,
                password: _this.password,
                FullName: _this.FullName,
                FirstName: _this.FirstName,
                MiddleName: _this.MiddleName,
                LastName: _this.LastName,
                Phone: _this.Phone,
                Promocode: localStorage.getItem('promo')
              };
              _this.loading = true;
              _context.next = 9;
              return _this.$store.dispatch('register', data).then(function () {
                _this.loading = false;
                localStorage.setItem('promo', false);
                // this.$store.dispatch('getUser')
                if (_this.isAdmin == true) {
                  _this.$router.push('/admin');
                } else if (_this.isManager == true) {
                  _this.$router.push('/manager');
                } else {
                  _this.$router.push('/client');
                }
                // this.$store.commit('setMenu', false)
              })["catch"](function (err) {
                _this.loading = false;
                if (err.response != undefined) {
                  if (err.response.data.error) {
                    _this.wrongCredentials = 'Неверные учетные данные';
                    _this.sendMessage(_this.wrongCredentials);
                  }
                } else {
                  _this.wrongCredentials = 'Произошла ошибка, попробуйте снова';
                  _this.sendMessage(_this.wrongCredentials);
                }
              });
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'error',
        title: 'Сообщение от TravelClub',
        text: message
      });
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_0__.mask
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      width: "100%",
      height: "100vh",
      background: "#f08b23"
    }
  }, [_c("notifications", {
    attrs: {
      position: "top left",
      group: "info",
      classes: "my-style"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row m-auto justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      "min-height": "100%",
      background: "#f08b23"
    }
  }, [_c("div", {
    staticClass: "row m-auto justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%",
      background: "#f08b23"
    }
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row m-auto justify-content-center align-items-center w-100"
  }, [_c("div", {
    staticClass: "col-sm-12 col-md-4 col-lg-6 p-0 mx-auto"
  }, [_c("div", {
    staticClass: "row m-auto justify-content-center align-items-center w-100 h-100"
  }, [_vm.step1 ? _c("h1", {
    staticClass: "m-auto text-center",
    staticStyle: {
      color: "#fff",
      "font-size": "80px",
      "font-weight": "900",
      "text-transform": "uppercase",
      "font-family": "VAGWorld-Bold, VAG World"
    }
  }, [_vm._v("Шаг 1")]) : _vm._e(), _vm._v(" "), _vm.step2 ? _c("h1", {
    staticClass: "m-auto text-center",
    staticStyle: {
      color: "#fff",
      "font-size": "80px",
      "font-weight": "900",
      "text-transform": "uppercase",
      "font-family": "VAGWorld-Bold, VAG World"
    }
  }, [_vm._v("Шаг 2")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 col-md-8 col-lg-6 p-0 mx-auto"
  }, [_c("div", {
    staticClass: "card card-signin my-5",
    staticStyle: {
      "max-height": "none"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.step1,
      expression: "step1"
    }],
    staticClass: "row m-auto justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_vm._m(0)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.step2,
      expression: "step2"
    }],
    staticClass: "row mx-auto mb-3 justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "col-6 col-md-6 col-sm-6 p-0"
  }, [_c("div", {
    staticClass: "action-button",
    on: {
      click: _vm.prevStep
    }
  }, [_c("div", {
    staticClass: "icon icon-keyboard_arrow_left"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-md-6 col-sm-6 p-0"
  }, [_c("p", {
    staticClass: "m-auto text-center"
  }, [_vm._v("Уже есть аккаунт? "), _c("router-link", {
    staticStyle: {
      color: "#f8a105"
    },
    attrs: {
      to: "/login"
    }
  }, [_vm._v("Войти")])], 1)])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.step1,
      expression: "step1"
    }],
    staticClass: "form-signin"
  }, [_c("ValidationObserver", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_c("div", {
          staticClass: "form-label-group"
        }, [_c("h4", {
          staticClass: "multiselect-title"
        }, [_vm._v("Email")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center",
            "margin-bottom": "17px"
          },
          attrs: {
            name: "email",
            rules: "required|email"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref2) {
              var errors = _ref2.errors;
              return [_c("div", {
                staticClass: "row multiselect__tags align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%",
                  height: "100%"
                }
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }],
                staticClass: "multiselect__input travel-text-control form-control",
                attrs: {
                  type: "text",
                  placeholder: "Email"
                },
                domProps: {
                  value: _vm.email
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.email = $event.target.value;
                  }
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "form-label-group"
        }, [_c("h4", {
          staticClass: "multiselect-title"
        }, [_vm._v("Пароль")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "password",
            rules: "required|min:6|password:@confirm_password"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref3) {
              var errors = _ref3.errors;
              return [_c("div", {
                staticClass: "row multiselect__tags align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%"
                }
              }, [_vm.passwordFieldType === "checkbox" ? _c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password"
                }],
                staticClass: "multiselect__input travel-text-control form-control",
                attrs: {
                  placeholder: "Пароль",
                  type: "checkbox"
                },
                domProps: {
                  checked: Array.isArray(_vm.password) ? _vm._i(_vm.password, null) > -1 : _vm.password
                },
                on: {
                  keyup: function keyup($event) {
                    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                    return _vm.nextStep.apply(null, arguments);
                  },
                  change: function change($event) {
                    var $$a = _vm.password,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false;
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v);
                      if ($$el.checked) {
                        $$i < 0 && (_vm.password = $$a.concat([$$v]));
                      } else {
                        $$i > -1 && (_vm.password = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                      }
                    } else {
                      _vm.password = $$c;
                    }
                  }
                }
              }) : _vm.passwordFieldType === "radio" ? _c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password"
                }],
                staticClass: "multiselect__input travel-text-control form-control",
                attrs: {
                  placeholder: "Пароль",
                  type: "radio"
                },
                domProps: {
                  checked: _vm._q(_vm.password, null)
                },
                on: {
                  keyup: function keyup($event) {
                    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                    return _vm.nextStep.apply(null, arguments);
                  },
                  change: function change($event) {
                    _vm.password = null;
                  }
                }
              }) : _c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password"
                }],
                staticClass: "multiselect__input travel-text-control form-control",
                attrs: {
                  placeholder: "Пароль",
                  type: _vm.passwordFieldType
                },
                domProps: {
                  value: _vm.password
                },
                on: {
                  keyup: function keyup($event) {
                    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                    return _vm.nextStep.apply(null, arguments);
                  },
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.password = $event.target.value;
                  }
                }
              }), _vm._v(" "), _vm.passwordFieldType === "password" ? _c("button", {
                staticClass: "btn-visibility icon icon-eye",
                attrs: {
                  type: "password"
                },
                on: {
                  click: _vm.switchVisibility
                }
              }) : _c("button", {
                staticClass: "btn-visibility icon icon-eye-slash",
                attrs: {
                  type: "password"
                },
                on: {
                  click: _vm.switchVisibility
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "form-label-group"
        }, [_c("h4", {
          staticClass: "multiselect-title"
        }, [_vm._v("Подтверждение пароля")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "confirm_password",
            rules: "required|password:@password"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref4) {
              var errors = _ref4.errors;
              return [_c("div", {
                staticClass: "row multiselect__tags align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%"
                }
              }, [_vm.passwordFieldType1 === "checkbox" ? _c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.confirm_password,
                  expression: "confirm_password"
                }],
                staticClass: "multiselect__input travel-text-control form-control",
                attrs: {
                  placeholder: "Пароль",
                  type: "checkbox"
                },
                domProps: {
                  checked: Array.isArray(_vm.confirm_password) ? _vm._i(_vm.confirm_password, null) > -1 : _vm.confirm_password
                },
                on: {
                  keyup: function keyup($event) {
                    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                    return _vm.nextStep.apply(null, arguments);
                  },
                  change: function change($event) {
                    var $$a = _vm.confirm_password,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false;
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v);
                      if ($$el.checked) {
                        $$i < 0 && (_vm.confirm_password = $$a.concat([$$v]));
                      } else {
                        $$i > -1 && (_vm.confirm_password = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                      }
                    } else {
                      _vm.confirm_password = $$c;
                    }
                  }
                }
              }) : _vm.passwordFieldType1 === "radio" ? _c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.confirm_password,
                  expression: "confirm_password"
                }],
                staticClass: "multiselect__input travel-text-control form-control",
                attrs: {
                  placeholder: "Пароль",
                  type: "radio"
                },
                domProps: {
                  checked: _vm._q(_vm.confirm_password, null)
                },
                on: {
                  keyup: function keyup($event) {
                    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                    return _vm.nextStep.apply(null, arguments);
                  },
                  change: function change($event) {
                    _vm.confirm_password = null;
                  }
                }
              }) : _c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.confirm_password,
                  expression: "confirm_password"
                }],
                staticClass: "multiselect__input travel-text-control form-control",
                attrs: {
                  placeholder: "Пароль",
                  type: _vm.passwordFieldType1
                },
                domProps: {
                  value: _vm.confirm_password
                },
                on: {
                  keyup: function keyup($event) {
                    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                    return _vm.nextStep.apply(null, arguments);
                  },
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.confirm_password = $event.target.value;
                  }
                }
              }), _vm._v(" "), _vm.passwordFieldType1 === "password" ? _c("button", {
                staticClass: "btn-visibility icon icon-eye",
                attrs: {
                  type: "password"
                },
                on: {
                  click: _vm.switchVisibility1
                }
              }) : _c("button", {
                staticClass: "btn-visibility icon icon-eye-slash",
                attrs: {
                  type: "password"
                },
                on: {
                  click: _vm.switchVisibility1
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("button", {
          staticClass: "btn btn-lg btn-travel btn-block text-uppercase mt-3 mx-auto mb-2",
          attrs: {
            disabled: invalid
          },
          on: {
            click: _vm.nextStep
          }
        }, [_vm._v("Далее")]), _vm._v(" "), _c("p", {
          staticClass: "text-center m-auto"
        }, [_vm._v("Уже есть аккаунт? "), _c("router-link", {
          staticStyle: {
            color: "#f8a105"
          },
          attrs: {
            to: "/login"
          }
        }, [_vm._v("Войти")])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.step2,
      expression: "step2"
    }],
    staticClass: "form-signin"
  }, [_c("ValidationObserver", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref5) {
        var invalid = _ref5.invalid;
        return [_c("div", {
          staticClass: "form-label-group"
        }, [_c("h4", {
          staticClass: "multiselect-title"
        }, [_vm._v("* Фамилия")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center",
            "margin-bottom": "17px"
          },
          attrs: {
            name: "lastName",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref6) {
              var errors = _ref6.errors;
              return [_c("div", {
                staticClass: "row multiselect__tags align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%"
                }
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.LastName,
                  expression: "LastName"
                }],
                staticClass: "multiselect__input travel-text-control form-control",
                attrs: {
                  placeholder: "Фамилия"
                },
                domProps: {
                  value: _vm.LastName
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.LastName = $event.target.value;
                  }
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "form-label-group"
        }, [_c("h4", {
          staticClass: "multiselect-title"
        }, [_vm._v("* Имя")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center",
            "margin-bottom": "17px"
          },
          attrs: {
            name: "firstName",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref7) {
              var errors = _ref7.errors;
              return [_c("div", {
                staticClass: "row multiselect__tags align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%"
                }
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.FirstName,
                  expression: "FirstName"
                }],
                staticClass: "multiselect__input travel-text-control form-control",
                attrs: {
                  placeholder: "Имя"
                },
                domProps: {
                  value: _vm.FirstName
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.FirstName = $event.target.value;
                  }
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "form-label-group"
        }, [_c("h4", {
          staticClass: "multiselect-title"
        }, [_vm._v("Отчество")]), _vm._v(" "), _c("span", {
          staticStyle: {
            width: "100%",
            "text-align": "center",
            "margin-bottom": "17px"
          }
        }, [_c("div", {
          staticClass: "row multiselect__tags align-items-center justify-content-center m-auto",
          staticStyle: {
            width: "100%"
          }
        }, [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.MiddleName,
            expression: "MiddleName"
          }],
          staticClass: "multiselect__input travel-text-control form-control",
          attrs: {
            placeholder: "Отчество"
          },
          domProps: {
            value: _vm.MiddleName
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.MiddleName = $event.target.value;
            }
          }
        })])])]), _vm._v(" "), _c("div", {
          staticClass: "form-label-group"
        }, [_c("h4", {
          staticClass: "multiselect-title"
        }, [_vm._v("* Номер телефона")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center",
            "margin-bottom": "17px"
          },
          attrs: {
            name: "phone",
            rules: "required|phone"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref8) {
              var errors = _ref8.errors;
              return [_c("div", {
                staticClass: "row multiselect__tags align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%"
                }
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.Phone,
                  expression: "Phone"
                }, {
                  name: "mask",
                  rawName: "v-mask",
                  value: ["+# (###) ###-##-##", "+## (###) ###-##-##"],
                  expression: "['+# (###) ###-##-##','+## (###) ###-##-##']"
                }],
                staticClass: "multiselect__input travel-text-control form-control",
                attrs: {
                  type: "text",
                  placeholder: "Номер телефона",
                  required: ""
                },
                domProps: {
                  value: _vm.Phone
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.Phone = $event.target.value;
                  }
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("button", {
          staticClass: "btn btn-lg btn-travel btn-block text-uppercase text-center mt-3 mx-auto mb-2",
          attrs: {
            disabled: invalid
          },
          on: {
            click: _vm.signup
          }
        }, [_c("div", {
          staticClass: "row align-items-center justify-content-center m-auto w-100 h-100"
        }, [_vm.loading ? _c("span", {
          staticClass: "spinner-border spinner-border-sm mx-2",
          attrs: {
            role: "status",
            "aria-hidden": "true"
          }
        }) : _vm._e(), _vm._v(" "), _vm.loading ? _c("span", {
          staticClass: "sr-only"
        }, [_vm._v("Loading...")]) : _vm._e(), _vm._v("\n                                                Зарегистрироваться\n                                            ")])]), _vm._v(" "), _c("p", {
          staticClass: "text-center m-auto"
        }, [_vm._v("Уже есть аккаунт? "), _c("router-link", {
          staticStyle: {
            color: "#f8a105"
          },
          attrs: {
            to: "/login"
          }
        }, [_vm._v("Войти")])], 1)];
      }
    }])
  })], 1)])])])])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12 col-md-12 col-sm-12 p-0"
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-10 p-0"
  }, [_c("div", {
    staticClass: "row mr-auto ml-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("П")]), _vm._v("рисоединись")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7 p-0"
  }, [_c("div", {
    staticClass: "row ml-auto mr-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "280px"
    }
  }, [_c("h1", {
    staticClass: "title-2"
  }, [_vm._v("к "), _c("span", [_vm._v("TravelClub Family")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.action-button[data-v-7fae0b94] {\n    display: inline-flex;\n    width: 50px;\n    height: 50px;\n    margin-left: -5px;\n    margin-right: -5px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 200px;\n    background: #f08b23;\n    color: white;\n    font-size: 40px;\n    outline: none !important;\n    text-decoration: none !important;\n    box-shadow: none !important;\n}\n.action-button[data-v-7fae0b94]:focus {\n    outline: none !important;\n    text-decoration: none !important;\n    box-shadow: none !important;\n}\n.btn-visibility[data-v-7fae0b94]{\n    position: absolute;\n    background: transparent;\n    border: none;\n    outline: none!important;\n    color: #063065;\n    font-size: 20px;\n}\n.card-signin[data-v-7fae0b94] {\n    border: 0;\n    border-radius: 1rem;\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n}\n.card-signin .card-title[data-v-7fae0b94] {\n    margin-bottom: 2rem;\n    font-weight: 300;\n    font-size: 1.5rem;\n}\n.card-signin .card-body[data-v-7fae0b94] {\n    padding: 2rem;\n}\n.form-signin[data-v-7fae0b94] {\n    width: 100%;\n}\n.form-signin .btn[data-v-7fae0b94] {\n    font-size: 80%;\n    border-radius: 5rem;\n    letter-spacing: .1rem;\n    font-weight: bold;\n    padding: 1rem;\n    transition: all 0.2s;\n}\n.form-label-group[data-v-7fae0b94] {\n    position: relative;\n    margin-bottom: 1rem;\n}\n.form-label-group input[data-v-7fae0b94] {\n    height: auto;\n    border-radius: 2rem;\n}\n.form-label-group>input[data-v-7fae0b94],\n.form-label-group>label[data-v-7fae0b94] {\n    padding: var(--input-padding-y) var(--input-padding-x);\n}\n.form-label-group>label[data-v-7fae0b94] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    margin-bottom: 0;\n    /* Override default `<label>` margin */\n    line-height: 1.5;\n    color: #495057;\n    border: 1px solid transparent;\n    border-radius: .25rem;\n    transition: all .1s ease-in-out;\n}\n.form-label-group input[data-v-7fae0b94]::-moz-placeholder {\n    color: transparent;\n}\n.form-label-group input[data-v-7fae0b94]::placeholder {\n    color: transparent;\n}\n.form-label-group input[data-v-7fae0b94]:not(:-moz-placeholder-shown) {\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n    padding-bottom: calc(var(--input-padding-y) / 3);\n}\n.form-label-group input[data-v-7fae0b94]:not(:placeholder-shown) {\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n    padding-bottom: calc(var(--input-padding-y) / 3);\n}\n.form-label-group input:not(:-moz-placeholder-shown)~label[data-v-7fae0b94] {\n    padding-top: calc(var(--input-padding-y) / 3);\n    padding-bottom: calc(var(--input-padding-y) / 3);\n    font-size: 12px;\n    color: #777;\n}\n.form-label-group input:not(:placeholder-shown)~label[data-v-7fae0b94] {\n    padding-top: calc(var(--input-padding-y) / 3);\n    padding-bottom: calc(var(--input-padding-y) / 3);\n    font-size: 12px;\n    color: #777;\n}\n\n\n/* Fallback for Edge\n-------------------------------------------------- */\n@supports (-ms-ime-align: auto) {\n.form-label-group>label[data-v-7fae0b94] {\n        display: none;\n}\n.form-label-group input[data-v-7fae0b94]::-ms-input-placeholder {\n        color: #777;\n}\n}\n\n/* Fallback for IE\n-------------------------------------------------- */\n@media all and (-ms-high-contrast: none),\n(-ms-high-contrast: active) {\n.form-label-group>label[data-v-7fae0b94] {\n        display: none;\n}\n.form-label-group input[data-v-7fae0b94]:-ms-input-placeholder {\n        color: #777;\n}\n}\n.title-1[data-v-7fae0b94] {\n    position: absolute;\n    z-index: 1;\n    left: 0px;\n    top: 10px;\n    color:#062348;\n    font-family: 'Bello Pro' !important;\n    font-size: 30px;\n}\n.title-1 span[data-v-7fae0b94] {\n    font-size: 40px;\n}\n.title-2[data-v-7fae0b94] {\n    position: absolute;\n    z-index: 1;\n    left: 42px;\n    top: 22px;\n    color: white;\n    font-family: 'Open Sans' !important;\n    font-weight: 900;\n    font-size: 20px;\n}\n.title-2 span[data-v-7fae0b94] {\n    text-transform: uppercase;\n}\n.orange-brush[data-v-7fae0b94] {\n    top: 2px;\n    left: 10px;\n    width: 283px;\n    height: 60px;\n}\n.blue-brush[data-v-7fae0b94]{\n    top: 10px;\n    left: -55px;\n    width: 330px;\n    height: 50px;\n    opacity: 1;\n}\n.multiselect-title[data-v-7fae0b94] {\n    color: #062348 !important;\n    font-family: \"Bello Pro\";\n    /*font-weight: 700;*/\n}\n.multiselect__tags[data-v-7fae0b94] {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tags .travel-text-control[data-v-7fae0b94]{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .travel-text-control[data-v-7fae0b94]:focus{\n    outline: none!important;\n    box-shadow: none !important;\n}\n.validate-error[data-v-7fae0b94]{\n    display: block !important;\n    height: 17px;\n}\n.btn[data-v-7fae0b94] {\n    background: #0f213d;\n    color: white;\n    text-transform: uppercase;\n    font-size: 24px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    border: 0;\n    border-radius: 50px;\n    outline: none;\n}\n.btn[data-v-7fae0b94]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.btn-travel[data-v-7fae0b94] {\n    border-radius: 50px;\n    background: #f08b23;\n    color: white;\n    text-transform: uppercase;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    font-size: 20px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_7fae0b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_7fae0b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_7fae0b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/pages/SignUp.vue":
/*!***********************************************!*\
  !*** ./resources/js/desktop/pages/SignUp.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.vue?vue&type=template&id=7fae0b94&scoped=true& */ "./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true&");
/* harmony import */ var _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js&");
/* harmony import */ var _SignUp_vue_vue_type_style_index_0_id_7fae0b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& */ "./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7fae0b94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/SignUp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=template&id=7fae0b94&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_7fae0b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&");


/***/ })

}]);