"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_admin_Clients_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isNewLoading: false,
      new_user: {
        email: '',
        role: '',
        is_admin: 0,
        is_manager: 0,
        FullName: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        // name: '',
        Phone: '',
        ManagerId: '',
        City: '',
        Department: ''
        // password: '',
      },

      roles: [{
        value: 'client',
        text: 'Клиент'
      }, {
        value: 'manager',
        text: 'Менеджер'
      }, {
        value: 'admin',
        text: 'Администратор'
      }],
      template: null,
      manager: ''
    };
  },
  mounted: function mounted() {
    this.template = JSON.parse(JSON.stringify(this.new_user));
  },
  computed: {
    managers: function managers() {
      return this.$store.getters.managers;
    }
  },
  methods: {
    saveUser: function saveUser() {
      var _this = this;
      this.loading = true;
      this.new_user.FullName = this.new_user.LastName + ' ' + this.new_user.FirstName + ' ' + this.new_user.MiddleName;
      this.new_user.ManagerId = this.manager.id;
      if (this.new_user.role == 'admin') {
        this.new_user.is_admin = 1;
      } else if (this.new_user.role == 'manager') {
        this.new_user.is_manager = 1;
      } else {
        this.new_user.is_admin = 0;
        this.new_user.is_manager = 0;
      }
      this.$store.dispatch('new_user', this.new_user).then(function (response) {
        _this.sendMessage('Клиент успешно сохранён');
        _this.loading = false;
        _this.$bvModal.hide("new-user");
      });
    },
    cancel: function cancel() {
      this.$bvModal.hide("new-user");
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Пользователи',
        text: message
      });
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_0__.mask
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_desktop_pages_admin_Clients_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/desktop/pages/admin/Clients/Table */ "./resources/js/desktop/pages/admin/Clients/Table.vue");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create */ "./resources/js/desktop/pages/admin/Clients/Create.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    UserTable: _js_desktop_pages_admin_Clients_Table__WEBPACK_IMPORTED_MODULE_0__["default"],
    Create: _Create__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: false,
      usersTotalRows: 0,
      deletedUsersTotalRows: 0
    };
  },
  computed: {
    users: function users() {
      return this.$store.getters.users;
    },
    deleted_users: function deleted_users() {
      return this.$store.getters.deleted_users;
    }
  },
  mounted: function mounted() {
    if (this.users.length <= 0) {
      this.loadUsers();
    }
  },
  methods: {
    loadUsers: function loadUsers() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.next = 3;
              return _this.$store.dispatch('setUsers').then(function (resp) {
                _this.$store.commit('setUsers', resp.data.users);
                _this.$store.commit('setDeletedUsers', resp.data.deleted_users);
                _this.usersTotalRows = resp.data.users.length;
                _this.deletedUsersTotalRows = resp.data.deleted_users.length;
                _this.loading = false;
                var managers = resp.data.users.filter(function (user) {
                  return user.role == 'manager';
                });
                _this.$store.commit('setManagers', managers);
                var clients = resp.data.users.filter(function (user) {
                  return user.role == 'client';
                });
                _this.$store.commit('setClients', clients);
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Пользователи',
        text: message
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    users: {
      type: Array,
      required: true,
      "default": function _default() {
        return [];
      }
    },
    loading: {
      type: Boolean,
      "default": true
    },
    totalRows: {
      type: Number,
      required: true,
      "default": 0
    }
  },
  data: function data() {
    return {
      sortBy: 'id',
      sortDesc: false,
      // totalRows: 1,
      currentPage: 1,
      perPage: 5,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      pageOptions: [5, 10, 15, 25, 50, 100],
      fields: [{
        key: 'id',
        label: 'ID',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'info.FullName',
        label: 'ФИО',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'email',
        label: 'Email',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'info.Phone',
        label: 'Телефон',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'role',
        label: 'Роль',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'action1',
        label: 'Показать'
      }, {
        key: 'action2',
        label: 'Действия'
      }],
      in_process: [],
      isLoading: false,
      isNewLoading: false,
      roles: [{
        value: 'client',
        text: 'Клиент'
      }, {
        value: 'manager',
        text: 'Менеджер'
      }, {
        value: 'admin',
        text: 'Администратор'
      }],
      city_options: ['Донецк', 'Ростов-на-Дону'],
      addresses: [{
        city: 'Донецк',
        department: 'Артёма 100д'
      }, {
        city: 'Донецк',
        department: 'Бульвар Пушкина 23'
      }, {
        city: 'Ростов-на-Дону',
        department: 'Not found'
      }],
      branches: [{
        country: 'Украина',
        city: 'Донецк',
        departments: [{
          address: 'Артёма 100д',
          phone: '',
          sheldue: ''
        }, {
          address: 'Бульвар Пушкина 23',
          phone: '',
          sheldue: ''
        }]
      }, {
        country: 'Россия',
        city: 'Ростов-на-Дону',
        departments: []
      }],
      branch: [],
      cities: [],
      departments: [],
      departments_loading: false
    };
  },
  mounted: function mounted() {
    // this.totalRows = this.users.length;
    // this.cities
  },
  computed: {
    sortOptions: function sortOptions() {
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    },
    managers: function managers() {
      return this.$store.getters.managers;
    }
  },
  methods: {
    seeClientTours: function seeClientTours(id) {
      this.$router.push('/admin/client-tours/' + id);
    },
    seeClientProfile: function seeClientProfile(id) {
      this.$router.push('/admin/client-profile/' + id);
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Пользователи',
        text: message
      });
    },
    // city(user) {
    //     var city = user.info.City;
    //     var tmp = this.branches.filter(item => {
    //         return item.city === city;
    //     });
    //     return tmp
    // },
    // department(user) {
    //     var city = user.info.City;
    //     var dep = user.info.Department;
    //
    //     var tmp = this.branches.filter(item => {
    //         return item.city === city;
    //     });
    //     var temp = tmp.filter(item => {
    //         return item.address === dep;
    //     });
    //     return temp
    // },
    selectCity: function selectCity(value, item) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // var tmp = value;
              // this.branch = tmp.departments;
              _this.departments_loading = true;
              _context.next = 3;
              return _this.saveInfo(value, item.id, 'City');
            case 3:
              item.Department = '';
              // item.info.City = this.city(item);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    selectDepartment: function selectDepartment(value, item) {
      this.saveInfo(value, item.id, 'Department');
      // item.info.Department = this.department(item);
    },
    selectManager: function selectManager(value, item) {
      this.saveInfo(value, item.id, 'ManagerId');
    },
    remove: function remove(id) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.$store.dispatch('removeUser', id).then(function (resp) {
                _this2.sendMessage(resp.data.message);
              });
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    destroy: function destroy(id) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.$store.dispatch('forceDeleteUser', id).then(function (resp) {
                _this3.sendMessage(resp.data.message);
              });
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    restore: function restore(id) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.$store.dispatch('restoreUser', id).then(function (resp) {
                _this4.sendMessage(resp.data.message);
              });
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    save: function save(value, id, key) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              console.log('save', key);
              _this5.$store.dispatch('saveUser', {
                id: id,
                key: key,
                value: value
              }).then(function (resp) {
                _this5.$store.commit('saveUser', resp.data.user);
                _this5.sendMessage(resp.data.message);
              });
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    saveInfo: function saveInfo(value, id, key) {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this6.$store.dispatch('saveUserInfo', {
                id: id,
                key: key,
                value: value
              }).then(function (resp) {
                if (key == 'City') {
                  _this6.saveInfo('', id, 'Department');
                  _this6.departments_loading = false;
                }
                // this.$store.commit('saveUserInfo', resp.data.info);
                _this6.sendMessage(resp.data.message);
              });
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    onFiltered: function onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_0__.mask
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=template&id=d48f90c2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=template&id=d48f90c2&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("ValidationObserver", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_c("b-modal", {
          attrs: {
            id: "new-user",
            scrollable: "",
            title: "Создать нового пользователя"
          },
          scopedSlots: _vm._u([{
            key: "modal-footer",
            fn: function fn() {
              return [_c("div", {
                staticClass: "w-100"
              }, [_c("b-button", {
                staticClass: "float-right btn-travel",
                attrs: {
                  variant: "primary",
                  disabled: invalid || _vm.loading
                },
                on: {
                  click: _vm.saveUser
                }
              }, [_c("div", {
                staticClass: "row align-items-center justify-content-center m-auto w-100 h-100 text-center"
              }, [_vm.loading ? _c("span", {
                staticClass: "spinner-border spinner-border-sm mx-2",
                attrs: {
                  role: "status",
                  "aria-hidden": "true"
                }
              }) : _vm._e(), _vm._v(" "), _vm.loading ? _c("span", {
                staticClass: "sr-only"
              }, [_vm._v("Loading...")]) : _vm._e(), _vm._v("\n                            Сохранить\n                        ")])]), _vm._v(" "), _c("b-button", {
                staticClass: "float-right mr-2 btn-travel",
                attrs: {
                  variant: "primary"
                },
                on: {
                  click: _vm.cancel
                }
              }, [_vm._v("\n                        Отмена\n                    ")])], 1)];
            },
            proxy: true
          }], null, true)
        }, [_c("div", {
          staticClass: "row w-100 mx-auto my-3"
        }, [_c("div", {
          staticClass: "col-md-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "email",
            rules: "required|email"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref2) {
              var errors = _ref2.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Email",
                  "label-size": "sm"
                }
              }, [_c("b-form-input", {
                staticClass: "mb-0 travel-input",
                attrs: {
                  label: "Email",
                  placeholder: "Email"
                },
                model: {
                  value: _vm.new_user.email,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_user, "email", $$v);
                  },
                  expression: "new_user.email"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "role",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref3) {
              var errors = _ref3.errors;
              return [_c("div", {
                staticClass: "form-group mb-0"
              }, [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Роль",
                  "label-size": "sm"
                }
              }, [_c("b-form-select", {
                staticClass: "travel-input",
                attrs: {
                  options: _vm.roles,
                  placeholder: "Выберите роль пользователя"
                },
                model: {
                  value: _vm.new_user.role,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_user, "role", $$v);
                  },
                  expression: "new_user.role"
                }
              })], 1)], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "lastName",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref4) {
              var errors = _ref4.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Фамилия",
                  "label-size": "sm"
                }
              }, [_c("b-form-input", {
                staticClass: "mb-0 travel-input",
                attrs: {
                  label: "Фамилия",
                  placeholder: "Фамилия"
                },
                model: {
                  value: _vm.new_user.LastName,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_user, "LastName", $$v);
                  },
                  expression: "new_user.LastName"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "firstName",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref5) {
              var errors = _ref5.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Имя",
                  "label-size": "sm"
                }
              }, [_c("b-form-input", {
                staticClass: "mb-0 travel-input",
                attrs: {
                  label: "Имя",
                  placeholder: "Имя"
                },
                model: {
                  value: _vm.new_user.FirstName,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_user, "FirstName", $$v);
                  },
                  expression: "new_user.FirstName"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Отчество",
            "label-size": "sm"
          }
        }, [_c("b-form-input", {
          staticClass: "mb-0 travel-input",
          attrs: {
            label: "Отчество",
            placeholder: "Отчество"
          },
          model: {
            value: _vm.new_user.MiddleName,
            callback: function callback($$v) {
              _vm.$set(_vm.new_user, "MiddleName", $$v);
            },
            expression: "new_user.MiddleName"
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "phone",
            rules: "required|phone"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref6) {
              var errors = _ref6.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Телефон",
                  "label-size": "sm"
                }
              }, [_c("b-form-input", {
                directives: [{
                  name: "mask",
                  rawName: "v-mask",
                  value: ["+# (###) ###-##-##", "+## (###) ###-##-##"],
                  expression: "['+# (###) ###-##-##','+## (###) ###-##-##']"
                }],
                staticClass: "mb-0 travel-input",
                attrs: {
                  label: "Телефон",
                  placeholder: "Телефон"
                },
                model: {
                  value: _vm.new_user.Phone,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_user, "Phone", $$v);
                  },
                  expression: "new_user.Phone"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12 pr-md-1"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "City",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref7) {
              var errors = _ref7.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Город",
                  "label-size": "sm"
                }
              }, [_c("multiselect", {
                attrs: {
                  options: _vm.branches,
                  "option-height": 25,
                  placeholder: "Выберите город",
                  "show-labels": false,
                  maxHeight: 200,
                  loading: _vm.branches.length === 0,
                  disabled: _vm.branches.length === 0,
                  "allow-empty": false,
                  "track-by": "city",
                  label: "city"
                },
                scopedSlots: _vm._u([{
                  key: "singleLabel",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [props.option.city ? _c("span", {
                      staticClass: "option__title",
                      staticStyle: {
                        "font-size": "0.7500000025rem",
                        "line-height": "1.428571"
                      }
                    }, [_vm._v(_vm._s(props.option.city))]) : _vm._e()])];
                  }
                }, {
                  key: "option",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title",
                      staticStyle: {
                        "font-size": "0.7500000025rem",
                        "line-height": "1.428571"
                      }
                    }, [_vm._v(_vm._s(props.option.city))])])];
                  }
                }], null, true),
                model: {
                  value: _vm.new_user.City,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_user, "City", $$v);
                  },
                  expression: "new_user.City"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12 px-md-1"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "department",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref8) {
              var errors = _ref8.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Отделение",
                  "label-size": "sm"
                }
              }, [_c("multiselect", {
                attrs: {
                  options: _vm.new_user.City.departments,
                  "option-height": 25,
                  placeholder: "Выберите отделение",
                  "show-labels": false,
                  maxHeight: 200,
                  loading: _vm.new_user.City.departments.length === 0,
                  disabled: _vm.new_user.City.departments.length === 0,
                  "allow-empty": false,
                  label: "address",
                  "track-by": "address"
                },
                scopedSlots: _vm._u([{
                  key: "singleLabel",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title",
                      staticStyle: {
                        "font-size": "0.7500000025rem",
                        "line-height": "1.428571"
                      }
                    }, [_vm._v(_vm._s(props.option.address))])])];
                  }
                }, {
                  key: "option",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title",
                      staticStyle: {
                        "font-size": "0.7500000025rem",
                        "line-height": "1.428571"
                      }
                    }, [_vm._v(_vm._s(props.option.address))])])];
                  }
                }], null, true),
                model: {
                  value: _vm.new_user.Department,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_user, "Department", $$v);
                  },
                  expression: "new_user.Department"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "manager",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref9) {
              var errors = _ref9.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Менеджер",
                  "label-size": "sm"
                }
              }, [_c("multiselect", {
                attrs: {
                  options: _vm.managers,
                  "option-height": 25,
                  placeholder: "Выберите менеджера",
                  "show-labels": false,
                  maxHeight: 200,
                  label: "info",
                  "track-by": "id",
                  loading: _vm.managers.length <= 0,
                  disabled: _vm.managers.length <= 0,
                  "allow-empty": false
                },
                scopedSlots: _vm._u([{
                  key: "singleLabel",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.info.FullName))])])];
                  }
                }, {
                  key: "option",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.info.FullName))])])];
                  }
                }], null, true),
                model: {
                  value: _vm.manager,
                  callback: function callback($$v) {
                    _vm.manager = $$v;
                  },
                  expression: "manager"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "row w-100 mx-automy-3"
        }, [_c("p", {
          staticClass: "text-center"
        }, [_vm._v("Пароль для входа в систему созданного пользователя:\n                    "), _c("span", {
          staticStyle: {
            "font-weight": "700",
            color: "#f8a105"
          }
        }, [_vm._v("TravelClub")])])])])];
      }
    }])
  }), _vm._v(" "), _c("b-button", {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.new-user",
      modifiers: {
        "new-user": true
      }
    }],
    staticClass: "btn-travel",
    attrs: {
      variant: "primary"
    }
  }, [_vm._v("Создать пользователя")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=template&id=096b1a02&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=template&id=096b1a02& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("div", {
    staticClass: "row w-100 my-3"
  }, [_c("create")], 1), _vm._v(" "), _c("b-tabs", {
    attrs: {
      "content-class": "mt-3"
    }
  }, [_c("b-tab", {
    attrs: {
      title: "Все",
      active: ""
    }
  }, [_c("user-table", {
    attrs: {
      users: _vm.users,
      loading: _vm.loading,
      totalRows: _vm.usersTotalRows
    }
  })], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: "Удаленные"
    }
  }, [_c("user-table", {
    attrs: {
      users: _vm.deleted_users,
      loading: _vm.loading,
      totalRows: _vm.deletedUsersTotalRows
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=template&id=9634b00a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=template&id=9634b00a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-row", [_c("b-col", {
    staticClass: "my-1",
    attrs: {
      lg: "6"
    }
  }, [_c("b-form-group", {
    staticClass: "mb-0",
    attrs: {
      label: "Сортировка",
      "label-cols-sm": "3",
      "label-align-sm": "right",
      "label-size": "sm",
      "label-for": "sortBySelect1"
    }
  }, [_c("b-input-group", {
    attrs: {
      size: "sm"
    }
  }, [_c("b-form-select", {
    staticClass: "w-75",
    attrs: {
      id: "sortBySelect1",
      options: _vm.sortOptions
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function fn() {
        return [_c("option", {
          attrs: {
            value: ""
          }
        }, [_vm._v("-- none --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.sortBy,
      callback: function callback($$v) {
        _vm.sortBy = $$v;
      },
      expression: "sortBy"
    }
  }), _vm._v(" "), _c("b-form-select", {
    staticClass: "w-25",
    attrs: {
      size: "sm",
      disabled: !_vm.sortBy
    },
    model: {
      value: _vm.sortDesc,
      callback: function callback($$v) {
        _vm.sortDesc = $$v;
      },
      expression: "sortDesc"
    }
  }, [_c("option", {
    domProps: {
      value: false
    }
  }, [_vm._v("Asc")]), _vm._v(" "), _c("option", {
    domProps: {
      value: true
    }
  }, [_vm._v("Desc")])])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "my-1",
    attrs: {
      lg: "6"
    }
  }, [_c("b-form-group", {
    staticClass: "mb-0",
    attrs: {
      label: "Поиск",
      "label-cols-sm": "3",
      "label-align-sm": "right",
      "label-size": "sm",
      "label-for": "filterInput"
    }
  }, [_c("b-input-group", {
    attrs: {
      size: "sm"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "search",
      id: "filterInput",
      placeholder: "Введите для поиска"
    },
    model: {
      value: _vm.filter,
      callback: function callback($$v) {
        _vm.filter = $$v;
      },
      expression: "filter"
    }
  }), _vm._v(" "), _c("b-input-group-append", [_c("b-button", {
    attrs: {
      disabled: !_vm.filter
    },
    on: {
      click: function click($event) {
        _vm.filter = "";
      }
    }
  }, [_vm._v("Очистить")])], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "my-1",
    attrs: {
      sm: "5",
      md: "6"
    }
  }, [_c("b-form-group", {
    staticClass: "mb-0",
    attrs: {
      label: "На странице",
      "label-cols-sm": "6",
      "label-cols-md": "4",
      "label-cols-lg": "3",
      "label-align-sm": "right",
      "label-size": "sm",
      "label-for": "perPageSelect1"
    }
  }, [_c("b-form-select", {
    attrs: {
      id: "perPageSelect1",
      size: "sm",
      options: _vm.pageOptions
    },
    model: {
      value: _vm.perPage,
      callback: function callback($$v) {
        _vm.perPage = $$v;
      },
      expression: "perPage"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "my-1",
    attrs: {
      sm: "7",
      md: "6"
    }
  }, [_c("b-pagination", {
    staticClass: "my-0",
    attrs: {
      "total-rows": _vm.totalRows,
      "per-page": _vm.perPage,
      align: "fill",
      size: "sm"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)], 1), _vm._v(" "), _c("b-table", {
    attrs: {
      "show-empty": "",
      small: "",
      stacked: "md",
      items: _vm.users,
      fields: _vm.fields,
      "current-page": _vm.currentPage,
      "per-page": _vm.perPage,
      filter: _vm.filter,
      filterIncludedFields: _vm.filterOn,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      "sort-direction": _vm.sortDirection,
      busy: _vm.loading,
      "empty-text": "Нет записей для отображения",
      "empty-filtered-text": "Нет записей, соответствующих вашему запросу"
    },
    on: {
      "update:sortBy": function updateSortBy($event) {
        _vm.sortBy = $event;
      },
      "update:sort-by": function updateSortBy($event) {
        _vm.sortBy = $event;
      },
      "update:sortDesc": function updateSortDesc($event) {
        _vm.sortDesc = $event;
      },
      "update:sort-desc": function updateSortDesc($event) {
        _vm.sortDesc = $event;
      },
      filtered: _vm.onFiltered
    },
    scopedSlots: _vm._u([{
      key: "cell(info.FullName)",
      fn: function fn(data) {
        return [_c("b-input-group", {
          attrs: {
            size: "sm"
          }
        }, [_c("b-form-input", {
          staticClass: "travel-input",
          attrs: {
            value: data.item.info.FullName,
            placeholder: "Введите ФИО"
          },
          on: {
            blur: function blur($event) {
              return _vm.saveInfo($event.target.value, data.item.info.id, "FullName");
            }
          }
        })], 1)];
      }
    }, {
      key: "cell(email)",
      fn: function fn(data) {
        return [_c("b-input-group", {
          attrs: {
            size: "sm"
          }
        }, [_c("b-form-input", {
          staticClass: "travel-input",
          attrs: {
            disabled: "",
            type: "email"
          },
          on: {
            blur: function blur($event) {
              return _vm.save($event.target.value, data.item.id, "email");
            }
          },
          model: {
            value: data.item.email,
            callback: function callback($$v) {
              _vm.$set(data.item, "email", $$v);
            },
            expression: "data.item.email"
          }
        })], 1)];
      }
    }, {
      key: "cell(info.Phone)",
      fn: function fn(data) {
        return [_c("b-input-group", {
          attrs: {
            size: "sm"
          }
        }, [_c("b-form-input", {
          directives: [{
            name: "mask",
            rawName: "v-mask",
            value: ["+# (###) ###-##-##", "+## (###) ###-##-##"],
            expression: "['+# (###) ###-##-##','+## (###) ###-##-##']"
          }],
          staticClass: "travel-input",
          attrs: {
            type: "text"
          },
          on: {
            blur: function blur($event) {
              return _vm.saveInfo($event.target.value, data.item.info.id, "Phone");
            }
          },
          model: {
            value: data.item.info.Phone,
            callback: function callback($$v) {
              _vm.$set(data.item.info, "Phone", $$v);
            },
            expression: "data.item.info.Phone"
          }
        })], 1)];
      }
    }, {
      key: "cell(role)",
      fn: function fn(data) {
        return [_c("b-input-group", {
          attrs: {
            size: "sm"
          }
        }, [_c("b-form-select", {
          staticClass: "travel-input",
          attrs: {
            disabled: data.item.id === null,
            options: _vm.roles
          },
          on: {
            blur: function blur($event) {
              return _vm.save(data.item.role, data.item.id, "role");
            }
          },
          model: {
            value: data.item.role,
            callback: function callback($$v) {
              _vm.$set(data.item, "role", $$v);
            },
            expression: "data.item.role"
          }
        })], 1)];
      }
    }, {
      key: "cell(action1)",
      fn: function fn(data) {
        return [_c("b-input-group", {
          attrs: {
            size: "sm"
          }
        }, [_c("b-button", {
          staticClass: "w-100 btn btn-travel mr-1 mb-1 btn-travel",
          on: {
            click: data.toggleDetails
          }
        }, [_vm._v("\n                    " + _vm._s(data.detailsShowing ? "Свернуть" : "Развернуть") + "\n                ")])], 1)];
      }
    }, {
      key: "cell(action2)",
      fn: function fn(data) {
        return [_c("b-input-group", {
          attrs: {
            size: "sm"
          }
        }, [data.item.role == "client" ? _c("b-button", {
          staticClass: "btn btn-info mr-1 mb-1 btn-travel w-100",
          attrs: {
            disabled: data.item.id === null
          },
          on: {
            click: function click($event) {
              return _vm.seeClientTours(data.item.id);
            }
          }
        }, [_vm._v("\n                       Туры\n                ")]) : _vm._e(), _vm._v(" "), data.item.deleted_at == null ? _c("b-button", {
          staticClass: "btn btn-info mr-1 mb-1 btn-travel w-100",
          attrs: {
            disabled: data.item.id === null
          },
          on: {
            click: function click($event) {
              return _vm.remove(data.item.id);
            }
          }
        }, [_vm._v("\n                        Удалить\n                ")]) : _c("b-button", {
          staticClass: "btn btn-info mr-1 mb-1 btn-travel w-100",
          attrs: {
            disabled: data.item.id === null
          },
          on: {
            click: function click($event) {
              return _vm.restore(data.item.id);
            }
          }
        }, [_vm._v("\n                    Восстановить\n                ")]), _vm._v(" "), data.item.deleted_at != null ? _c("b-button", {
          staticClass: "btn btn-info mr-1 mb-1 btn-travel w-100",
          attrs: {
            disabled: data.item.id === null
          },
          on: {
            click: function click($event) {
              return _vm.destroy(data.item.id);
            }
          }
        }, [_vm._v("\n                    Удалить\n                ")]) : _vm._e()], 1)];
      }
    }, {
      key: "row-details",
      fn: function fn(row) {
        return [_c("b-card", [_c("div", {
          staticClass: "row align-items-center justify-content-center m-auto"
        }, [_c("div", {
          staticClass: "col-sm-12 px-1 col-md-4 mb-2"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Фамилия",
            "label-size": "sm"
          }
        }, [_c("b-form-input", {
          staticClass: "mb-0 travel-input",
          attrs: {
            label: "Фамилия",
            placeholder: "Фамилия"
          },
          on: {
            blur: function blur($event) {
              return _vm.saveInfo($event.target.value, row.item.info.id, "LastName");
            }
          },
          model: {
            value: row.item.info.LastName,
            callback: function callback($$v) {
              _vm.$set(row.item.info, "LastName", $$v);
            },
            expression: "row.item.info.LastName"
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-sm-12 px-1 col-md-4 mb-2"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Имя",
            "label-size": "sm"
          }
        }, [_c("b-form-input", {
          staticClass: "mb-0 travel-input",
          attrs: {
            label: "Имя",
            placeholder: "Имя"
          },
          on: {
            blur: function blur($event) {
              return _vm.saveInfo($event.target.value, row.item.info.id, "FirstName");
            }
          },
          model: {
            value: row.item.info.FirstName,
            callback: function callback($$v) {
              _vm.$set(row.item.info, "FirstName", $$v);
            },
            expression: "row.item.info.FirstName"
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-sm-12 px-1 col-md-4 mb-2"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Отчество",
            "label-size": "sm"
          }
        }, [_c("b-form-input", {
          staticClass: "mb-0 travel-input",
          attrs: {
            label: "Отчество",
            placeholder: "Отчество"
          },
          on: {
            blur: function blur($event) {
              return _vm.saveInfo($event.target.value, row.item.info.id, "MiddleName");
            }
          },
          model: {
            value: row.item.info.MiddleName,
            callback: function callback($$v) {
              _vm.$set(row.item.info, "MiddleName", $$v);
            },
            expression: "row.item.info.MiddleName"
          }
        })], 1)], 1)]), _vm._v(" "), _c("div", {
          staticClass: "row align-items-center justify-content-center m-auto"
        }, [_c("div", {
          staticClass: "col-sm-12 px-1 col-md-4 mb-2"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Город",
            "label-size": "sm"
          }
        }, [_c("multiselect", {
          attrs: {
            options: _vm.branches,
            "option-height": 25,
            placeholder: "Выберите город",
            "show-labels": false,
            maxHeight: 200,
            loading: _vm.branches.length === 0,
            disabled: _vm.branches.length === 0,
            "allow-empty": false,
            "track-by": "city",
            label: "city"
          },
          on: {
            input: function input($event) {
              return _vm.selectCity(row.item.info.City, row.item.info);
            }
          },
          scopedSlots: _vm._u([{
            key: "singleLabel",
            fn: function fn(props) {
              return [_c("span", {
                staticClass: "option__desc"
              }, [props.option.city ? _c("span", {
                staticClass: "option__title",
                staticStyle: {
                  "font-size": "0.7500000025rem",
                  "line-height": "1.428571"
                }
              }, [_vm._v(_vm._s(props.option.city))]) : _vm._e()])];
            }
          }, {
            key: "option",
            fn: function fn(props) {
              return [_c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title",
                staticStyle: {
                  "font-size": "0.7500000025rem",
                  "line-height": "1.428571"
                }
              }, [_vm._v(_vm._s(props.option.city))])])];
            }
          }], null, true),
          model: {
            value: row.item.info.City,
            callback: function callback($$v) {
              _vm.$set(row.item.info, "City", $$v);
            },
            expression: "row.item.info.City"
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-sm-12 px-1 col-md-4 mb-2"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Отделение",
            "label-size": "sm"
          }
        }, [_c("multiselect", {
          attrs: {
            options: row.item.info.City.departments,
            "option-height": 25,
            placeholder: "Выберите отделение",
            "show-labels": false,
            maxHeight: 200,
            loading: _vm.departments_loading,
            disabled: row.item.info.City.departments.length === 0,
            "allow-empty": false,
            label: "address",
            "track-by": "address"
          },
          on: {
            input: function input($event) {
              return _vm.selectDepartment(row.item.info.Department, row.item.info);
            }
          },
          scopedSlots: _vm._u([{
            key: "singleLabel",
            fn: function fn(props) {
              return [_c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title",
                staticStyle: {
                  "font-size": "0.7500000025rem",
                  "line-height": "1.428571"
                }
              }, [_vm._v(_vm._s(props.option.address))])])];
            }
          }, {
            key: "option",
            fn: function fn(props) {
              return [_c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title",
                staticStyle: {
                  "font-size": "0.7500000025rem",
                  "line-height": "1.428571"
                }
              }, [_vm._v(_vm._s(props.option.address))])])];
            }
          }], null, true),
          model: {
            value: row.item.info.Department,
            callback: function callback($$v) {
              _vm.$set(row.item.info, "Department", $$v);
            },
            expression: "row.item.info.Department"
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-sm-12 px-1 col-md-4 mb-2"
        }, [row.item.role == "client" ? _c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Менеджер",
            "label-size": "sm"
          }
        }, [_c("b-form-select", {
          staticClass: "travel-input",
          staticStyle: {
            "min-height": "40px"
          },
          attrs: {
            options: _vm.managers,
            "value-field": "id",
            "text-field": "info.FullName"
          },
          on: {
            input: function input($event) {
              return _vm.selectManager(row.item.info.ManagerId, row.item.info);
            }
          },
          model: {
            value: row.item.info.ManagerId,
            callback: function callback($$v) {
              _vm.$set(row.item.info, "ManagerId", $$v);
            },
            expression: "row.item.info.ManagerId"
          }
        })], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
          staticClass: "col-sm-12 px-1 col-md-12 mb-2"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Дополнительная информация",
            "label-size": "sm"
          }
        }, [_c("b-form-textarea", {
          staticClass: "travel-input",
          staticStyle: {
            padding: "5px 15px",
            border: "1px solid #f08b23",
            "border-radius": "20px !important"
          },
          attrs: {
            rows: "4",
            cols: "80",
            placeholder: "Дополнительная информация"
          },
          on: {
            blur: function blur($event) {
              return _vm.saveInfo($event.target.value, row.item.info.id, "About");
            }
          },
          model: {
            value: row.item.info.About,
            callback: function callback($$v) {
              _vm.$set(row.item.info, "About", $$v);
            },
            expression: "row.item.info.About"
          }
        })], 1)], 1)])])];
      }
    }, {
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center text-warning my-2"
        }, [_c("b-spinner", {
          staticClass: "align-middle",
          attrs: {
            variant: "warning"
          }
        }), _vm._v(" "), _c("strong", [_vm._v("Загрузка...")])], 1)];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-travel[data-v-d48f90c2]{\n    background: #e17e4e;\n    background-color: rgb(225, 126, 78);\n    background-position-x: 0%;\n    background-position-y: 0%;\n    background-image: none;\n    background-size: auto;\n    background-image: linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e);\n    background-size: 210% 210%;\n    background-position: top right;\n    background-color: #e17e4e;\n    transition: all 0.15s ease;\n    box-shadow: none;\n    color: #ffffff;\n    max-width: 300px;\n    border: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=style&index=0&id=096b1a02&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=style&index=0&id=096b1a02&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.nav-link {\n   color: #f08b23;\n}\n.nav-link:hover {\n   color: #0d274b;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-travel[data-v-9634b00a]{\n    background: #e17e4e;\n    background-color: rgb(225, 126, 78);\n    background-position-x: 0%;\n    background-position-y: 0%;\n    background-image: none;\n    background-size: auto;\n    background-image: linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e);\n    background-size: 210% 210%;\n    background-position: top right;\n    background-color: #e17e4e;\n    transition: all 0.15s ease;\n    box-shadow: none;\n    color: #ffffff;\n    max-width: 300px;\n    border: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=1&id=9634b00a&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=1&id=9634b00a&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-item.active .page-link {\n    background: #f08b23;\n    border: 1px solid #f08b23;\n    transition: all 0.15s ease;\n    box-shadow: none;\n    color: #ffffff;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d48f90c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d48f90c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d48f90c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=style&index=0&id=096b1a02&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=style&index=0&id=096b1a02&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_096b1a02_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=096b1a02&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=style&index=0&id=096b1a02&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_096b1a02_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_096b1a02_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_9634b00a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_9634b00a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_9634b00a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=1&id=9634b00a&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=1&id=9634b00a&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_1_id_9634b00a_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=style&index=1&id=9634b00a&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=1&id=9634b00a&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_1_id_9634b00a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_1_id_9634b00a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Create.vue":
/*!*************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Create.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_d48f90c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=d48f90c2&scoped=true& */ "./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=template&id=d48f90c2&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _Create_vue_vue_type_style_index_0_id_d48f90c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css& */ "./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_d48f90c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_d48f90c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d48f90c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/admin/Clients/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Index.vue":
/*!************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_096b1a02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=096b1a02& */ "./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=template&id=096b1a02&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_096b1a02_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=096b1a02&lang=css& */ "./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=style&index=0&id=096b1a02&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_096b1a02___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_096b1a02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/admin/Clients/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Table.vue":
/*!************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Table.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_vue_vue_type_template_id_9634b00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=9634b00a&scoped=true& */ "./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=template&id=9634b00a&scoped=true&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=script&lang=js&");
/* harmony import */ var _Table_vue_vue_type_style_index_0_id_9634b00a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css& */ "./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css&");
/* harmony import */ var _Table_vue_vue_type_style_index_1_id_9634b00a_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Table.vue?vue&type=style&index=1&id=9634b00a&lang=css& */ "./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=1&id=9634b00a&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_9634b00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Table_vue_vue_type_template_id_9634b00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9634b00a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/admin/Clients/Table.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=template&id=d48f90c2&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=template&id=d48f90c2&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d48f90c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d48f90c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d48f90c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=d48f90c2&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=template&id=d48f90c2&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=template&id=096b1a02&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=template&id=096b1a02& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_096b1a02___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_096b1a02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_096b1a02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=096b1a02& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=template&id=096b1a02&");


/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=template&id=9634b00a&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=template&id=9634b00a&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_9634b00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_9634b00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_9634b00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=template&id=9634b00a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=template&id=9634b00a&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d48f90c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Create.vue?vue&type=style&index=0&id=d48f90c2&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=style&index=0&id=096b1a02&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=style&index=0&id=096b1a02&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_096b1a02_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=096b1a02&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Index.vue?vue&type=style&index=0&id=096b1a02&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_9634b00a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=0&id=9634b00a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=1&id=9634b00a&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=1&id=9634b00a&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_1_id_9634b00a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=style&index=1&id=9634b00a&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Clients/Table.vue?vue&type=style&index=1&id=9634b00a&lang=css&");


/***/ })

}]);