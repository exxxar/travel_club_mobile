(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
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
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_0__["mask"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.action-button[data-v-7fae0b94] {\n    display: inline-flex;\n    width: 50px;\n    height: 50px;\n    margin-left: -5px;\n    margin-right: -5px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 200px;\n    background: #f08b23;\n    color: white;\n    font-size: 40px;\n    outline: none !important;\n    text-decoration: none !important;\n    box-shadow: none !important;\n}\n.action-button[data-v-7fae0b94]:focus {\n    outline: none !important;\n    text-decoration: none !important;\n    box-shadow: none !important;\n}\n.btn-visibility[data-v-7fae0b94]{\n    position: absolute;\n    background: transparent;\n    border: none;\n    outline: none!important;\n    color: #063065;\n    font-size: 20px;\n}\n.card-signin[data-v-7fae0b94] {\n    border: 0;\n    border-radius: 1rem;\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n}\n.card-signin .card-title[data-v-7fae0b94] {\n    margin-bottom: 2rem;\n    font-weight: 300;\n    font-size: 1.5rem;\n}\n.card-signin .card-body[data-v-7fae0b94] {\n    padding: 2rem;\n}\n.form-signin[data-v-7fae0b94] {\n    width: 100%;\n}\n.form-signin .btn[data-v-7fae0b94] {\n    font-size: 80%;\n    border-radius: 5rem;\n    letter-spacing: .1rem;\n    font-weight: bold;\n    padding: 1rem;\n    transition: all 0.2s;\n}\n.form-label-group[data-v-7fae0b94] {\n    position: relative;\n    margin-bottom: 1rem;\n}\n.form-label-group input[data-v-7fae0b94] {\n    height: auto;\n    border-radius: 2rem;\n}\n.form-label-group>input[data-v-7fae0b94],\n.form-label-group>label[data-v-7fae0b94] {\n    padding: var(--input-padding-y) var(--input-padding-x);\n}\n.form-label-group>label[data-v-7fae0b94] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    margin-bottom: 0;\n    /* Override default `<label>` margin */\n    line-height: 1.5;\n    color: #495057;\n    border: 1px solid transparent;\n    border-radius: .25rem;\n    transition: all .1s ease-in-out;\n}\n.form-label-group input[data-v-7fae0b94]::-moz-placeholder {\n    color: transparent;\n}\n.form-label-group input[data-v-7fae0b94]::placeholder {\n    color: transparent;\n}\n.form-label-group input[data-v-7fae0b94]:not(:-moz-placeholder-shown) {\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n    padding-bottom: calc(var(--input-padding-y) / 3);\n}\n.form-label-group input[data-v-7fae0b94]:not(:placeholder-shown) {\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n    padding-bottom: calc(var(--input-padding-y) / 3);\n}\n.form-label-group input:not(:-moz-placeholder-shown)~label[data-v-7fae0b94] {\n    padding-top: calc(var(--input-padding-y) / 3);\n    padding-bottom: calc(var(--input-padding-y) / 3);\n    font-size: 12px;\n    color: #777;\n}\n.form-label-group input:not(:placeholder-shown)~label[data-v-7fae0b94] {\n    padding-top: calc(var(--input-padding-y) / 3);\n    padding-bottom: calc(var(--input-padding-y) / 3);\n    font-size: 12px;\n    color: #777;\n}\n\n\n/* Fallback for Edge\n-------------------------------------------------- */\n@supports (-ms-ime-align: auto) {\n.form-label-group>label[data-v-7fae0b94] {\n        display: none;\n}\n.form-label-group input[data-v-7fae0b94]::-ms-input-placeholder {\n        color: #777;\n}\n}\n\n/* Fallback for IE\n-------------------------------------------------- */\n@media all and (-ms-high-contrast: none),\n(-ms-high-contrast: active) {\n.form-label-group>label[data-v-7fae0b94] {\n        display: none;\n}\n.form-label-group input[data-v-7fae0b94]:-ms-input-placeholder {\n        color: #777;\n}\n}\n.title-1[data-v-7fae0b94] {\n    position: absolute;\n    z-index: 1;\n    left: 0px;\n    top: 10px;\n    color:#062348;\n    font-family: 'Bello Pro' !important;\n    font-size: 30px;\n}\n.title-1 span[data-v-7fae0b94] {\n    font-size: 40px;\n}\n.title-2[data-v-7fae0b94] {\n    position: absolute;\n    z-index: 1;\n    left: 42px;\n    top: 22px;\n    color: white;\n    font-family: 'Open Sans' !important;\n    font-weight: 900;\n    font-size: 20px;\n}\n.title-2 span[data-v-7fae0b94] {\n    text-transform: uppercase;\n}\n.orange-brush[data-v-7fae0b94] {\n    top: 2px;\n    left: 10px;\n    width: 283px;\n    height: 60px;\n}\n.blue-brush[data-v-7fae0b94]{\n    top: 10px;\n    left: -55px;\n    width: 330px;\n    height: 50px;\n    opacity: 1;\n}\n.multiselect-title[data-v-7fae0b94] {\n    color: #062348 !important;\n    font-family: \"Bello Pro\";\n    /*font-weight: 700;*/\n}\n.multiselect__tags[data-v-7fae0b94] {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tags .travel-text-control[data-v-7fae0b94]{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .travel-text-control[data-v-7fae0b94]:focus{\n    outline: none!important;\n    box-shadow: none !important;\n}\n.validate-error[data-v-7fae0b94]{\n    display: block !important;\n    height: 17px;\n}\n.btn[data-v-7fae0b94] {\n    background: #0f213d;\n    color: white;\n    text-transform: uppercase;\n    font-size: 24px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    border: 0;\n    border-radius: 50px;\n    outline: none;\n}\n.btn[data-v-7fae0b94]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.btn-travel[data-v-7fae0b94] {\n    border-radius: 50px;\n    background: #f08b23;\n    color: white;\n    text-transform: uppercase;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    font-size: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/desktop/pages/SignUp.vue":
/*!***********************************************!*\
  !*** ./resources/js/desktop/pages/SignUp.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.vue?vue&type=template&id=7fae0b94&scoped=true& */ "./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true&");
/* harmony import */ var _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SignUp_vue_vue_type_style_index_0_id_7fae0b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& */ "./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7fae0b94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/SignUp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/SignUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_7fae0b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/SignUp.vue?vue&type=style&index=0&id=7fae0b94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_7fae0b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_7fae0b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_7fae0b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_7fae0b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=template&id=7fae0b94&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/SignUp.vue?vue&type=template&id=7fae0b94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_7fae0b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);