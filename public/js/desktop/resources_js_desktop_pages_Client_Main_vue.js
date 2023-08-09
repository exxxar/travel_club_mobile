"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Client_Main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ClientProfile",
  data: function data() {
    return {
      perPage: ['10', '25', '50'],
      columns: [{
        label: 'ID',
        field: 'id'
      }, {
        label: 'Name',
        field: 'name'
      }, {
        label: 'Email',
        field: 'email'
      }],
      window: {
        width: 0,
        height: 0
      },
      countItems: 3,
      tours: [],
      current_tour: {},
      tour_title: 'Текущий'
    };
  },
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    user: function user() {
      return this.$store.getters.user;
    },
    preloader: function preloader() {
      return this.$store.getters.preloader;
    },
    branches: function branches() {
      return this.$store.getters.branches;
    }
  },
  created: function created() {
    // this.$store.commit('setPreloader', true)
    this.getUser();
    if (this.branches.length <= 0) {
      this.loadBranches();
    }
    // if (!this.user) {
    //     this.$store.dispatch('getUser').then( () => {
    //         this.tours = this.user.tours;
    //     })
    // }
    // else{
    //     this.tours = this.user.tours;
    // }
    // this.tours.sort(function(a,b){
    //     return new Date(b.EndAt) - new Date(a.EndAt);
    // });
  },
  mounted: function mounted() {
    // this.$store.dispatch('getUser')
    // this.$store.commit('setPreloader', false)
    // if( this.tours.length>0){
    //     var now = moment(new Date());
    //     this.current_tour = this.tours.find((tour) => {
    //
    //         var start = moment(tour.StartAt);
    //         var end = moment(tour.EndAt);
    //         var before = start.isBefore(now) ? true : false;
    //         var after = end.isAfter(now) ? true : false;
    //         if(before==true && after==true)
    //         {
    //             return true
    //         }
    //     });
    //     if(!this.current_tour)
    //     {
    //         this.current_tour = this.tours[0];
    //     }
    // }
  },
  methods: {
    toTourInfo: function toTourInfo(id) {
      this.$router.push('/client/tour-info/' + id);
    },
    getUser: function getUser() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var now;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this.user) {
                _context.next = 5;
                break;
              }
              _context.next = 3;
              return _this.$store.dispatch('getUser').then(function () {
                _this.tours = _this.user.tours.filter(function (item) {
                  if (item.Archive == false) {
                    return true;
                  }
                });
              });
            case 3:
              _context.next = 6;
              break;
            case 5:
              _this.tours = _this.user.tours.filter(function (item) {
                if (item.Archive == false) {
                  return true;
                }
              });
            case 6:
              if (_this.tours.length > 0) {
                _this.tours.sort(function (a, b) {
                  return new Date(b.EndAt) - new Date(a.EndAt);
                });
                now = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date());
                _this.current_tour = _this.tours.find(function (tour) {
                  var start = moment__WEBPACK_IMPORTED_MODULE_0___default()(tour.StartAt);
                  var end = moment__WEBPACK_IMPORTED_MODULE_0___default()(tour.EndAt);
                  var before = start.isBefore(now) ? true : false;
                  var after = end.isAfter(now) ? true : false;
                  if (before == true && after == true) {
                    return true;
                  }
                });
                if (!_this.current_tour) {
                  _this.current_tour = _this.tours[0];
                  _this.tour_title = 'Последний';
                }
              }
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    loadBranches: function loadBranches() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$store.dispatch('setBranches');
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      id: "client"
    }
  }, [_c("div", {
    staticClass: "container m-auto",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "row m-auto justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    },
    attrs: {
      id: "main-title"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row m-auto justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 col-md-8 col-sm-12"
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-7 p-0"
  }, [_c("div", {
    staticClass: "row ml-auto mr-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-2"
  }, [_c("span", [_vm._v(_vm._s(_vm.user.info.FullName))])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })])])])])])])]), _vm._v(" "), _vm.tours.length > 0 ? _c("div", {
    staticClass: "row mx-auto mt-3 mb-3 justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-12 p-0"
  }, [_c("div", {
    staticClass: "row m-auto travel-card justify-content-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-6 col-sm-12 p-0",
    on: {
      click: function click($event) {
        return _vm.toTourInfo(_vm.current_tour.id);
      }
    }
  }, [_c("div", {
    staticClass: "mx-auto v-card elevation-24",
    staticStyle: {
      height: "400px",
      "max-width": "100%",
      "border-radius": "20px"
    }
  }, [_c("div", {
    staticClass: "v-responsive v-image",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "v-responsive__sizer"
  }), _vm._v(" "), _c("div", {
    staticClass: "v-image__image v-image__image--cover",
    staticStyle: {
      "background-image": "url('/images/test.jpg')",
      "background-position": "center center"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "v-responsive__content"
  }, [_c("div", {
    staticClass: "v-card__title"
  }, [_c("div", {
    staticClass: "white--text active-tour d-sm-block d-md-none"
  }, [_vm._v(_vm._s(_vm.tour_title))])]), _vm._v(" "), _c("div", {
    staticClass: "v-card__subtitle white--text d-sm-block d-md-none"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("h3", [_vm._v(_vm._s(_vm.current_tour.TourInfo.resort.Name) + ", " + _vm._s(_vm.current_tour.TourInfo.country.Name))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("span", {
    staticClass: "white--text active-tour float-right"
  }, [_vm._v(_vm._s(_vm.current_tour.TourInfo.price))])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 d-none d-md-block"
  }, [_c("div", {
    staticClass: "row mx-auto mt-3 mb-3 align-items-center justify-content-center"
  }, [_c("span", {
    staticClass: "white--text active-tour",
    staticStyle: {
      background: "#062348",
      "font-size": "24px"
    }
  }, [_vm._v(_vm._s(_vm.tour_title) + " тур")])]), _vm._v(" "), _c("div", {
    staticClass: "row m-auto align-items-center justify-content-center"
  }, [_c("h3", {
    staticClass: "subtitle"
  }, [_vm._v(_vm._s(_vm.current_tour.TourInfo.resort.Name) + ",\n                                    "), _c("b", {
    staticClass: "ml-1 mr-1",
    "class": "slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_" + _vm.current_tour.TourInfo.country.Id,
    staticStyle: {
      border: "1px solid #063065"
    }
  }), _vm._v("\n                                    " + _vm._s(_vm.current_tour.TourInfo.country.Name) + "\n                                ")])]), _vm._v(" "), _c("div", {
    staticClass: "row features align-items-center justify-content-center m-auto",
    staticStyle: {
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center m-auto",
    staticStyle: {
      width: "100%"
    }
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row align-items-center w-100 m-auto"
  }, [_c("div", {
    staticClass: "subtitle"
  }, [_vm._v(_vm._s(_vm.current_tour.TourInfo.hotel.Name) + " "), _c("span", {
    staticClass: "ml-3",
    staticStyle: {
      color: "#0f213d"
    }
  }, [_vm._v(_vm._s(_vm.current_tour.TourInfo.hotel.StarName))])]), _vm._v(" "), _c("svg", {
    staticClass: "icon-star my-auto ml-1",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 19 19"
    }
  }, [_c("path", {
    attrs: {
      fill: "#ffca00",
      d: "M9.5 0l3.131 5.97 6.367 1.29-4.432 4.97.804 6.77-5.87-2.9L3.63 19l.804-6.77L.002 7.26l6.367-1.29L9.5 0"
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center m-auto",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "subtitle"
  }, [_vm._v(_vm._s(_vm.current_tour.TourInfo.room_type))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center m-auto",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "subtitle"
  }, [_vm._v(_vm._s(_vm.current_tour.TourInfo.meal.Name)), _c("span", {
    staticClass: "my-auto",
    staticStyle: {
      color: "#0f213d",
      "font-size": "14px"
    }
  }, [_vm._v(" - " + _vm._s(_vm.current_tour.TourInfo.meal.desc))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "travel-card-description row m-auto align-items-center justify-content-center"
  }), _vm._v(" "), _c("div", {
    staticClass: "travel-card-more row m-auto float-right align-items-center"
  }, [_c("h5", {
    staticClass: "more-text mt-auto mb-auto",
    on: {
      click: function click($event) {
        return _vm.toTourInfo(_vm.current_tour.id);
      }
    }
  }, [_vm._v("подробнее")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    on: {
      click: function click($event) {
        return _vm.toTourInfo(_vm.current_tour.id);
      }
    }
  }, [_c("div", {
    staticClass: "icon icon-keyboard_arrow_right"
  })])])])])])]) : _vm._e(), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm.tours.length > 0 ? _c("div", {
    staticClass: "row mx-auto mt-3 mb-3 justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("hooper", {
    staticClass: "mr-auto ml-auto desktop",
    staticStyle: {
      height: "100%"
    },
    attrs: {
      itemsToShow: 3,
      infiniteScroll: false
    }
  }, [_vm._l(_vm.tours, function (tour) {
    return _c("slide", {
      key: tour.id,
      on: {
        click: function click($event) {
          return _vm.toTourInfo(tour.id);
        }
      }
    }, [_c("div", {
      staticClass: "mx-auto v-card elevation-24",
      staticStyle: {
        height: "350px",
        "max-width": "100%",
        width: "350px",
        "border-radius": "20px",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.toTourInfo(tour.id);
        }
      }
    }, [_c("div", {
      staticClass: "v-responsive v-image",
      staticStyle: {
        height: "100%"
      }
    }, [_c("div", {
      staticClass: "v-responsive__sizer"
    }), _vm._v(" "), _c("div", {
      staticClass: "v-image__image v-image__image--cover",
      staticStyle: {
        "background-image": "url('/images/test.jpg')",
        "background-position": "center center"
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "v-responsive__content"
    }, [_c("div", {
      staticClass: "v-card__title"
    }, [_c("div", {
      staticClass: "ml-auto white--text active-tour"
    }, [_c("div", {
      staticClass: "row m-auto align-items-center justify-content-center",
      staticStyle: {
        height: "100%",
        width: "100%"
      }
    }, [_c("div", {
      staticClass: "icon icon-calendar mr-2"
    }), _vm._v(_vm._s(_vm._f("moment")(tour.StartAt, "DD.MM")) + " - " + _vm._s(_vm._f("moment")(tour.EndAt, "DD.MM")) + "\n                                            ")])])]), _vm._v(" "), _c("div", {
      staticClass: "v-card__subtitle white--text"
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-12 mb-2"
    }, [_c("h4", [_vm._v(_vm._s(tour.TourInfo.resort.Name) + ", " + _vm._s(tour.TourInfo.country.Name))])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-12"
    }, [_c("span", {
      staticClass: "white--text active-tour float-right"
    }, [_vm._v(_vm._s(tour.TourInfo.price))])])])])])])])]);
  }), _vm._v(" "), _c("hooper-navigation", {
    attrs: {
      slot: "hooper-addons"
    },
    slot: "hooper-addons"
  })], 2), _vm._v(" "), _c("hooper", {
    staticClass: "mr-auto ml-auto tablet",
    staticStyle: {
      height: "100%"
    },
    attrs: {
      itemsToShow: 2,
      infiniteScroll: false
    }
  }, [_vm._l(_vm.tours, function (tour) {
    return _c("slide", {
      key: tour.id,
      on: {
        click: function click($event) {
          return _vm.toTourInfo(tour.id);
        }
      }
    }, [_c("div", {
      staticClass: "mx-auto v-card elevation-24",
      staticStyle: {
        height: "350px",
        "max-width": "100%",
        width: "350px",
        "border-radius": "20px",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.toTourInfo(tour.id);
        }
      }
    }, [_c("div", {
      staticClass: "v-responsive v-image",
      staticStyle: {
        height: "100%"
      }
    }, [_c("div", {
      staticClass: "v-responsive__sizer"
    }), _vm._v(" "), _c("div", {
      staticClass: "v-image__image v-image__image--cover",
      staticStyle: {
        "background-image": "url('/images/test.jpg')",
        "background-position": "center center"
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "v-responsive__content"
    }, [_c("div", {
      staticClass: "v-card__title"
    }, [_c("div", {
      staticClass: "ml-auto white--text active-tour"
    }, [_c("div", {
      staticClass: "row m-auto align-items-center justify-content-center",
      staticStyle: {
        height: "100%",
        width: "100%"
      }
    }, [_c("div", {
      staticClass: "icon icon-calendar mr-2"
    }), _vm._v(_vm._s(_vm._f("moment")(tour.StartAt, "DD.MM")) + " - " + _vm._s(_vm._f("moment")(tour.EndAt, "DD.MM")) + "\n                                            ")])])]), _vm._v(" "), _c("div", {
      staticClass: "v-card__subtitle white--text"
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-12 mb-2"
    }, [_c("h4", [_vm._v(_vm._s(tour.TourInfo.resort.Name) + ", " + _vm._s(tour.TourInfo.country.Name))])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-12"
    }, [_c("span", {
      staticClass: "white--text active-tour float-right"
    }, [_vm._v(_vm._s(tour.TourInfo.price))])])])])])])])]);
  }), _vm._v(" "), _c("hooper-navigation", {
    attrs: {
      slot: "hooper-addons"
    },
    slot: "hooper-addons"
  })], 2), _vm._v(" "), _c("hooper", {
    staticClass: "mr-auto ml-auto mobile",
    staticStyle: {
      height: "100%"
    },
    attrs: {
      itemsToShow: 1,
      infiniteScroll: true
    }
  }, [_vm._l(_vm.tours, function (tour) {
    return _c("slide", {
      key: tour.id,
      on: {
        click: function click($event) {
          return _vm.toTourInfo(tour.id);
        }
      }
    }, [_c("div", {
      staticClass: "mx-auto v-card elevation-24",
      staticStyle: {
        height: "350px",
        "max-width": "100%",
        width: "350px",
        "border-radius": "20px",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.toTourInfo(tour.id);
        }
      }
    }, [_c("div", {
      staticClass: "v-responsive v-image",
      staticStyle: {
        height: "100%"
      }
    }, [_c("div", {
      staticClass: "v-responsive__sizer"
    }), _vm._v(" "), _c("div", {
      staticClass: "v-image__image v-image__image--cover",
      staticStyle: {
        "background-image": "url('/images/test.jpg')",
        "background-position": "center center"
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "v-responsive__content"
    }, [_c("div", {
      staticClass: "v-card__title"
    }, [_c("div", {
      staticClass: "ml-auto white--text active-tour"
    }, [_c("div", {
      staticClass: "row m-auto align-items-center justify-content-center",
      staticStyle: {
        height: "100%",
        width: "100%"
      }
    }, [_c("div", {
      staticClass: "icon icon-calendar mr-2"
    }), _vm._v(_vm._s(_vm._f("moment")(tour.StartAt, "DD.MM")) + " - " + _vm._s(_vm._f("moment")(tour.EndAt, "DD.MM")) + "\n                                            ")])])]), _vm._v(" "), _c("div", {
      staticClass: "v-card__subtitle white--text"
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-12 mb-2"
    }, [_c("h4", [_vm._v(_vm._s(tour.TourInfo.resort.Name) + ", " + _vm._s(tour.TourInfo.country.Name))])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-12"
    }, [_c("span", {
      staticClass: "white--text active-tour float-right"
    }, [_vm._v(_vm._s(tour.TourInfo.price))])])])])])])])]);
  }), _vm._v(" "), _c("hooper-navigation", {
    attrs: {
      slot: "hooper-addons"
    },
    slot: "hooper-addons"
  })], 2)], 1) : _vm._e(), _vm._v(" "), _vm.tours.length == 0 ? _c("div", {
    staticClass: "row mx-auto mt-3 mb-3 justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_vm._v("\n                У Вас пока нет туров :( Возможно они все в архиве.\n            ")]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-7 p-0"
  }, [_c("div", {
    staticClass: "row mr-auto ml-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("З")]), _vm._v("дравствуйте,")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "title"
  }, [_c("i", {
    staticClass: "icon-icon-list mr-1",
    staticStyle: {
      "font-size": "11px"
    }
  }, [_c("span", {
    staticClass: "path1"
  }, [_c("span", {
    staticClass: "path2"
  })])]), _vm._v("название отеля:\n                                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "title"
  }, [_c("i", {
    staticClass: "icon-icon-list mr-1",
    staticStyle: {
      "font-size": "11px"
    }
  }, [_c("span", {
    staticClass: "path1"
  }, [_c("span", {
    staticClass: "path2"
  })])]), _vm._v("\n                                                категория номера:\n                                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "title"
  }, [_c("i", {
    staticClass: "icon-icon-list mr-1",
    staticStyle: {
      "font-size": "11px"
    }
  }, [_c("span", {
    staticClass: "path1"
  }, [_c("span", {
    staticClass: "path2"
  })])]), _vm._v("\n                                                питание\n                                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row mx-auto mt-5 mb-5 justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%",
      "border-top": "4px solid #f08b23"
    }
  }, [_c("span", {
    staticClass: "white--text active-tour",
    staticStyle: {
      background: "#062348",
      "font-size": "24px",
      position: "absolute"
    }
  }, [_vm._v("Туры")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.title-1[data-v-9379e71e] {\n    position: absolute;\n    z-index: 1;\n    left: 0px;\n    top: 10px;\n    color:#062348;\n    font-family: 'Bello Pro' !important;\n    font-size: 35px;\n}\n.title-1 span[data-v-9379e71e] {\n    font-size: 40px;\n}\n.title-2[data-v-9379e71e] {\n    position: absolute;\n    z-index: 1;\n    left: 52px;\n    top: 25px;\n    color:white;\n    font-family: 'Open Sans' !important;\n    font-weight:900;\n    font-size: 15px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.title-2 span[data-v-9379e71e] {\n    text-transform: uppercase;\n}\n.orange-brush[data-v-9379e71e]{\n    top: 5px;\n    left: 10px;\n    width: 265px;\n}\n.blue-brush[data-v-9379e71e]{\n    top: 10px;\n    left: -55px;\n    width: 330px;\n    height: 50px;\n    opacity: 1;\n}\n.title[data-v-9379e71e] {\n    font-size: 15px;\n    color: rgb(13, 39, 75);\n    letter-spacing: 2px;\n    font-weight: 900;\n}\n.subtitle[data-v-9379e71e] {\n    font-size: 18px;\n    color: #f08b23;\n    font-weight: 900;\n}\n@media screen and (max-width: 576px) {\n.title[data-v-9379e71e] {\n        font-size: 12px;\n}\n.subtitle[data-v-9379e71e] {\n        font-size: 15px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&id=9379e71e&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&id=9379e71e&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.travel-card-description{\n    color: #062348;\n    font-size: 13px;\n    font-weight: 900;\n    font-family: \"Open Sans\";\n}\n.more-text {\n    font-family: \"Open Sans\";\n    text-transform: uppercase;\n    color: #f08b23;\n    font-weight: 600;\n    font-size: 16px;\n    cursor:pointer;\n}\n.more-button {\n    cursor:pointer;\n    margin: 0 10px;\n    right: 10px;\n}\n.more-button div {\n    width: 40px;\n    height: 40px;\n    display: block;\n    border-radius: 50px;\n    text-decoration: none;\n    font-size: 40px;\n    /*line-height: 50px;*/\n    color:  white;\n    background: #f08b23;\n    padding: 0px !important;\n}\n.travel-card {\n    border-radius: 20px;\n    background: white;\n    box-shadow: 0px 3px 15px #0000006b;\n    -moz-box-shadow: 0px 3px 15px #0000006b;\n    -webkit-box-shadow: 0px 3px 15px #0000006b;\n}\n#client .hooper-slide {\n    padding-left: 5px !important;\n    padding-right: 5px !important;\n}\n/*#client .tablet .hooper-slide {*/\n/*    padding-left: 5px !important;*/\n/*    padding-right: 5px !important;*/\n/*}*/\n#client .hooper-next{\n    outline: 0 !important;\n}\n#client .hooper-prev{\n    outline: 0 !important;\n}\n#client .desktop .hooper-next{\n    outline: 0 !important;\n    right: -5% !important;\n}\n#client .desktop .hooper-prev{\n    outline: 0 !important;\n    left: -5% !important;\n}\n#client .tablet .hooper-next{\n    outline: 0 !important;\n    right: -10% !important;\n}\n#client .tablet .hooper-prev{\n    outline: 0 !important;\n    left: -10% !important;\n}\n#client .hooper-next svg{\n    fill: #062348;\n    height: 40px;\n    width: 40px;\n}\n#client .mobile .hooper-next svg{\n    fill: white;\n}\n#client .mobile .hooper-prev svg{\n    fill: white;\n}\n#client .hooper-prev svg{\n    fill: #062348;\n    height: 40px;\n    width: 40px;\n}\n.active-tour {\n    background: #f08b23;\n    border-radius: 20px;\n    padding: 3px 20px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n    font-weight: 900;\n    text-transform: uppercase;\n    font-family: 'Open Sans';\n}\n.v-card > :last-child:not(.v-btn):not(.v-chip) {\n    border-bottom-left-radius: inherit;\n    border-bottom-right-radius: inherit;\n}\n.v-card > :first-child:not(.v-btn):not(.v-chip), .v-card > .v-card__progress + :not(.v-btn):not(.v-chip) {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n}\n.v-card > :last-child:not(.v-btn):not(.v-chip) {\n    border-bottom-left-radius: inherit;\n    border-bottom-right-radius: inherit;\n}\n.v-card > .v-card__progress + :not(.v-btn):not(.v-chip), .v-card > :first-child:not(.v-btn):not(.v-chip) {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n}\n.v-responsive {\n    position: relative;\n    overflow: hidden;\n    flex: 1 0 auto;\n    max-width: 100%;\n    display: flex;\n}\n.v-image {\n    z-index: 0;\n}\n.v-card {\n    overflow-wrap: break-word;\n    white-space: normal;\n}\n.v-responsive__sizer {\n    background: #0d274b61;\n    transition: padding-bottom .2s cubic-bezier(.25,.8,.5,1);\n    flex: 1 0 0px;\n}\n.v-image__image--cover {\n    background-size: cover;\n}\n.v-image__image {\n    background-repeat: no-repeat;\n}\n.v-image__image, .v-image__placeholder {\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.v-responsive__sizer ~ .v-responsive__content {\n    margin-left: -100%;\n}\n.v-responsive__content {\n    flex: 1 0 0px;\n    max-width: 100%;\n}\n.elevation-24 {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.v-card__title {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: .0125em;\n    line-height: 2rem;\n    word-break: break-all;\n}\n.v-card__subtitle, .v-card__text, .v-card__title {\n    padding: 16px;\n}\n.v-card__subtitle {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n.v-card__subtitle h4{\n    font-weight: 900;\n    font-family: 'Open Sans';\n}\n.white--text {\n    color: #fff !important;\n    caret-color: #fff !important;\n}\n/*#main-title {*/\n/*    position: relative;*/\n/*}*/\n/*#main-title svg {*/\n/*    position: absolute;*/\n/*}*/\n/*#main-title .title-1 {*/\n/*    position: absolute;*/\n/*    z-index: 1;*/\n/*    left: 30px;*/\n/*    top: 10px;*/\n/*    color:#062348;*/\n/*    font-family: 'Bello Pro' !important;*/\n/*    font-size: 30px;*/\n/*}*/\n/*#main-title .title-1 span {*/\n/*    font-size: 40px;*/\n/*}*/\n/*#main-title .title-2 {*/\n/*    position: absolute;*/\n/*    z-index: 1;*/\n/*    left: 40px;*/\n/*    top: 79px;*/\n/*    color:white;*/\n/*    font-family: 'Open Sans' !important;*/\n/*    font-weight:900;*/\n/*    font-size: 13px;*/\n/*}*/\n/*#main-title .title-2 span {*/\n/*    text-transform: uppercase;*/\n/*}*/\n/*#main-title .orange-brush{*/\n/*    top: 52px;*/\n/*    left: -65px;*/\n/*}*/\n/*#main-title .blue-brush{*/\n/*    top: 5px;*/\n/*    left: 10px;*/\n/*}*/\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_9379e71e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_9379e71e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_9379e71e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&id=9379e71e&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&id=9379e71e&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_id_9379e71e_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=style&index=1&id=9379e71e&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&id=9379e71e&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_id_9379e71e_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_id_9379e71e_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/pages/Client/Main.vue":
/*!****************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Main.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=9379e71e&scoped=true& */ "./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js&");
/* harmony import */ var _Main_vue_vue_type_style_index_0_id_9379e71e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& */ "./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&");
/* harmony import */ var _Main_vue_vue_type_style_index_1_id_9379e71e_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=1&id=9379e71e&lang=css& */ "./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&id=9379e71e&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9379e71e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Client/Main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=template&id=9379e71e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_9379e71e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&id=9379e71e&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&id=9379e71e&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_id_9379e71e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=style&index=1&id=9379e71e&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&id=9379e71e&lang=css&");


/***/ })

}]);