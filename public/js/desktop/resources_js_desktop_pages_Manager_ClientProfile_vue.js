"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Manager_ClientProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ClientTours_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientTours/Index */ "./resources/js/desktop/pages/Manager/ClientTours/Index.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ClientTours: _ClientTours_Index__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      current_client: {},
      clientTours: [],
      columns: [{
        label: 'ID тура',
        field: 'id'
      }, {
        label: 'Дата',
        field: 'created_at'
      }, {
        label: 'С',
        field: 'TourInfo.date_range.start'
      }, {
        label: 'По',
        field: 'TourInfo.date_range.end'
      }, {
        label: 'Страна',
        field: 'TourInfo.country.Name'
      }, {
        label: 'Курорт',
        field: 'TourInfo.resort.Name'
      }, {
        label: 'Цена',
        field: 'TourInfo.price'
      }, {
        label: 'Выплачено',
        field: 'TourInfo.paid'
      }],
      city_options: ['Донецк', 'Ростов-на-Дону'],
      new_tour: {
        UserId: '',
        TourId: '',
        TourInfo: {
          country: {
            Id: 150,
            Name: "Россия",
            Alias: "Russia",
            Flags: 8,
            HasTickets: true,
            HotelIsNotInStop: true,
            IsProVisa: false,
            IsVisa: false,
            OriginalName: "Russia",
            Rank: 0,
            TicketsIncluded: true
          },
          resort: {
            Name: 'Любой'
          },
          hotel: {
            Name: 'Любой'
          },
          room_type: '',
          meal: '',
          tour_operator: '',
          date_range: {
            start: '',
            end: ''
          },
          price: '',
          paid: '',
          left: 0,
          services: '',
          avia_tickets: [],
          passengers: [],
          files: []
        },
        StartAt: '',
        EndAt: '',
        Comment: ''
      },
      edit_tour: {
        UserId: '',
        TourId: '',
        TourInfo: {
          country: '',
          resort: '',
          hotel: '',
          room_type: '',
          meal: '',
          tour_operator: '',
          date_range: {
            start: '',
            end: ''
          },
          price: '',
          paid: '',
          left: 0,
          services: '',
          avia_tickets: [],
          passengers: [],
          files: [],
          delete_files: [],
          new_files: []
        },
        StartAt: '',
        EndAt: '',
        Comment: ''
      },
      new_mode: false,
      meals: [{
        Id: '115',
        Name: 'AI',
        desc: 'завтраки, обеды, ужины, напитки'
      }, {
        Id: '114',
        Name: 'BB',
        desc: 'завтраки'
      }, {
        Id: '112',
        Name: 'FB',
        desc: 'завтраки, обеды, ужины'
      }, {
        Id: '121',
        Name: 'FB+',
        desc: 'завтраки, обеды, ужины - расширенное меню'
      }, {
        Id: '113',
        Name: 'HB',
        desc: 'завтраки, ужины'
      }, {
        Id: '122',
        Name: 'HB+',
        desc: 'завтраки, ужины - расширенное меню'
      }, {
        Id: '117',
        Name: 'RO',
        desc: 'без питания'
      }, {
        Id: '116',
        Name: 'UAI',
        desc: 'завтраки, обеды, ужины, напитки - расширенное меню'
      }, {
        Id: '129',
        Name: 'SC',
        desc: 'самообслуживание'
      }],
      edit_loading: false,
      new_loading: false,
      load: true,
      new_files: [],
      current_manager: null,
      start: undefined,
      end: undefined
    };
  },
  created: function created() {
    var _this = this;
    if (this.countries.length === 0) {
      this.$store.dispatch('getCountries', {
        town_id: 0
      });
    }
    if (this.clients.length > 0) {
      this.load = true;
      this.current_client = this.clients.find(function (client) {
        return client.id == _this.$route.params.id;
      });
      // this.clientTours=this.client.tours;
      this.load = false;
      if (this.managers.length > 0) {
        this.current_manager = this.managers.find(function (manager) {
          return manager.id == _this.current_client.info.ManagerId;
        });
      } else {
        this.getManagers();
      }
    } else {
      this.getClient();
    }
    // console.log(this.client)
  },
  mounted: function mounted() {
    if (this.branches.length <= 0) {
      this.loadBranches();
    }
    // this.new_tour.TourInfo.country={Id:150,Name:"Россия",Alias:"Russia",Flags:8,HasTickets:true,HotelIsNotInStop:true,IsProVisa:false,IsVisa:false,OriginalName:"Russia",Rank:0,TicketsIncluded:true};
    // this.$store.dispatch('getCities', this.new_tour.TourInfo.country.Id);
    // this.$store.dispatch('getHotels', {country_id:this.new_tour.TourInfo.country.Id, town_id:'', star_id:''});
  },

  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    clients: function clients() {
      return this.$store.getters.clients;
    },
    client: function client() {
      return this.current_client;
    },
    managers: function managers() {
      return this.$store.getters.managers;
    },
    manager: function manager() {
      return this.current_manager;
    },
    tourModule: function tourModule() {
      return this.$store.getters.tourModule;
    },
    countries: function countries() {
      return this.$store.getters.countries;
    },
    cities: function cities() {
      return this.$store.getters.cities;
    },
    hotels: function hotels() {
      return this.$store.getters.hotels;
    },
    branches: function branches() {
      return this.$store.getters.branches;
    },
    //loadings
    isCountriesLoading: function isCountriesLoading() {
      return this.$store.getters.isCountriesLoading;
    },
    isCitiesLoading: function isCitiesLoading() {
      return this.$store.getters.isCitiesLoading;
    },
    isHotelsLoading: function isHotelsLoading() {
      return this.$store.getters.isHotelsLoading;
    }
  },
  methods: {
    //info
    updateClientInfo: function updateClientInfo() {
      var _this2 = this;
      this.client.info.ManagerId = this.manager.id;
      var data = {
        info: this.client.info,
        id: this.client.id
      };
      this.$store.dispatch('updateClientInfo', this.client.info).then(function (response) {
        _this2.sendMessage('Информация клиента успешно обновлена');
      });
    },
    getClient: function getClient() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // await this.$http.get(`auth/manager/clients/${this.$route.params.id}`)
              //     .then((response) => {
              //         this.client = response.data.client;
              //         this.clientTours=this.client.tours;
              //         this.clientTours.forEach( tour => {
              //             tour.show = false;
              //             tour.isLoading = false;
              //             tour.expand = {
              //                 country: tour.TourInfo.country,
              //                 resort: tour.TourInfo.resort,
              //                 hotel: tour.TourInfo.hotel,
              //                 meal:tour.TourInfo.meal,
              //                 room_type:tour.TourInfo.room_type,
              //                 tour_operator:tour.TourInfo.tour_operator,
              //                 date_range:{start:tour.TourInfo.date_range.start, end:tour.TourInfo.date_range.end},
              //                 price:tour.TourInfo.price,
              //                 paid:tour.TourInfo.paid,
              //                 left:tour.TourInfo.left,
              //                 services:tour.TourInfo.services,
              //                 avia_tickets:tour.TourInfo.avia_tickets,
              //                 passengers:tour.TourInfo.passengers,
              //                 files:tour.TourInfo.files,
              //             }
              //         })
              //         this.load = false;
              //     });
              // console.log(this.clientTours)
              _this3.load = true;
              _context.next = 3;
              return _this3.$store.dispatch('setClients').then(function (response) {
                _this3.current_client = _this3.clients.find(function (client) {
                  return client.id == _this3.$route.params.id;
                });
                // this.clientTours=this.client.tours;
                _this3.load = false;
                if (_this3.managers.length > 0) {
                  _this3.current_manager = _this3.managers.find(function (manager) {
                    return manager.id == _this3.current_client.info.ManagerId;
                  });
                } else {
                  _this3.getManagers();
                }
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getManagers: function getManagers() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this4.$store.dispatch('setManagers').then(function () {
                _this4.current_manager = _this4.managers.find(function (manager) {
                  return manager.id == _this4.current_client.info.ManagerId;
                });
                console.log(_this4.managers);
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    loadBranches: function loadBranches() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this5.$store.dispatch('setBranches');
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    selectCity: function selectCity(item) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              item.Department = '';
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    //edit
    editClientTour: function editClientTour(row) {
      this.edit_tour = row;
      this.start = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.edit_tour.TourInfo.date_range.start, "DD/MM/YYYY").toDate();
      this.end = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.edit_tour.TourInfo.date_range.end, "DD/MM/YYYY").toDate();
      // this.start =this.edit_tour.TourInfo.date_range.start;
      // this.end =this.edit_tour.TourInfo.date_range.end
      // this.edit_tour.TourInfo.date_range.start= this.start;
      // this.edit_tour.TourInfo.date_range.end= this.end;

      this.edit_tour.TourInfo.delete_files = [];
      this.edit_tour.TourInfo.new_files = [];
      this.edit_tour.new_files = [];
      this.$store.dispatch('getCities', this.edit_tour.TourInfo.country.Id);
      this.$store.dispatch('getHotels', {
        country_id: this.edit_tour.TourInfo.country.Id,
        town_id: '0',
        star_id: '0'
      });
      $('#editUserTourModalBox').modal('show');
    },
    chooseEditResortCountry: function chooseEditResortCountry(value) {
      this.edit_tour.TourInfo.resort = {
        Name: 'Любой'
      };
      this.edit_tour.TourInfo.hotel = {
        Name: 'Любой'
      };
      this.edit_tour.TourInfo.country = value;
      this.$store.dispatch('getCities', this.edit_tour.TourInfo.country.Id);
      this.$store.dispatch('getHotels', {
        country_id: this.edit_tour.TourInfo.country.Id,
        town_id: '0',
        star_id: '0'
      });
    },
    chooseEditResort: function chooseEditResort(value) {
      var _this6 = this;
      this.edit_tour.TourInfo.resort = value;
      if (this.edit_tour.TourInfo.resort.Name != 'Любой') {
        // this.new_tour.TourInfo.resort = this.tourModule.resorts[0];
        var town_id = this.edit_tour.TourInfo.resort.Id;
        //поиск отелей по городам-курортам
        this.$store.dispatch('getHotels', {
          country_id: this.edit_tour.TourInfo.country.Id,
          town_id: town_id,
          star_id: '0'
        }).then(function () {
          if (_this6.hotels.findIndex(function (item) {
            return item.Id == _this6.edit_tour.TourInfo.hotel.Id;
          }) == -1) {
            _this6.edit_tour.TourInfo.hotel = {
              Name: 'Любой'
            };
          }
        });
      } else {
        //если городов-курортов не выбрано, то поиск отелей по стране
        this.$store.dispatch('getHotels', {
          country_id: this.edit_tour.TourInfo.country.Id,
          town_id: '0',
          star_id: '0'
        });
      }
    },
    chooseEditHotel: function chooseEditHotel(value) {
      this.edit_tour.TourInfo.hotel = value;
    },
    changeEditDateRange: function changeEditDateRange(date_object) {
      this.edit_tour.TourInfo.date_range = date_object;
    },
    chooseEditMeal: function chooseEditMeal(value) {
      this.edit_tour.TourInfo.meal = value;
    },
    deleteClientTour: function deleteClientTour(row) {
      var _this7 = this;
      row.isLoading = true;
      this.$store.dispatch('deleteClientTour', row).then(function (response) {
        row.isLoading = false;
        _this7.sendMessage('Тур клиента успешно удалён');
      });
    },
    changeEditPrice: function changeEditPrice() {
      this.edit_tour.TourInfo.left = this.edit_tour.TourInfo.price - this.edit_tour.TourInfo.paid;
    },
    handleEditFiles: function handleEditFiles() {
      var uploadedFiles = this.$refs.edit_tour_files.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        if (/\.(jpe?g|png|svg|pdf|txt|docx|doc)$/i.test(uploadedFiles[i].name)) {
          var date = new Date();
          this.new_files.push({
            type: 'file',
            name: uploadedFiles[i].name,
            data: uploadedFiles[i],
            date: date
          });
          this.getImagePreviews(this.new_files);
        } else {
          break;
        }
      }
    },
    onEditResult: function onEditResult(data) {
      var time = Date.now();
      var date = new Date();
      this.new_files.push({
        type: 'audio',
        name: 'record-' + time + '.mp3',
        src: window.URL.createObjectURL(data),
        data: data,
        date: date
      });
      this.getImagePreviews(this.new_files);
    },
    deleteFile: function deleteFile(file, key) {
      // var data = {
      //     name: file.name,
      //     path: file.path
      // };
      // try {
      // const response = await axios.post('auth/manager/clients/tours/deleteFile',data);
      this.edit_tour.TourInfo.delete_files.push(file);
      this.edit_tour.TourInfo.files.splice(key, 1);
      // this.getImagePreviews(this.edit_tour.TourInfo.files);
      // }
      // catch (error) {
      // }
    },
    updateClientTour: function updateClientTour() {
      var _this8 = this;
      this.edit_loading = true;
      this.edit_tour.StartAt = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.edit_tour.TourInfo.date_range.start, "DD-MM-YYYY");
      this.edit_tour.EndAt = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.edit_tour.TourInfo.date_range.end, "DD-MM-YYYY");
      console.log(this.edit_tour.EndAt);
      this.edit_tour.new_files = this.new_files;
      var formData = new FormData();
      formData.append("UserTour", JSON.stringify(this.edit_tour));
      for (var i = 0; i < this.new_files.length; i++) {
        var file = this.new_files[i].data;
        formData.append('new_files[' + i + ']', file);
      }
      this.$store.dispatch('updateClientTour', formData).then(function (response) {
        console.log('response', response);
        _this8.edit_tour.TourInfo.delete_files = [];
        _this8.edit_tour.TourInfo.new_files = [];
        _this8.edit_tour.TourInfo.files = response.TourInfo.files;
        _this8.edit_tour.expand = response.expand;
        _this8.sendMessage('Тур клиента успешно обновлён');
        _this8.edit_tour = {
          UserId: '',
          TourId: '',
          TourInfo: {
            country: '',
            resort: '',
            hotel: '',
            meal: '',
            tour_operator: '',
            date_range: {
              start: '',
              end: ''
            },
            price: 0,
            paid: 0,
            left: 0,
            services: '',
            avia_tickets: [],
            passengers: [],
            files: []
          },
          new_files: [],
          StartAt: '',
          EndAt: '',
          Comment: ''
        };
        _this8.edit_loading = false;
        $('#editUserTourModalBox').modal('hide');
      });
    },
    //new
    addClientTour: function addClientTour() {
      this.$store.dispatch('getCities', this.new_tour.TourInfo.country.Id);
      this.$store.dispatch('getHotels', {
        country_id: this.new_tour.TourInfo.country.Id,
        town_id: '0',
        star_id: '0'
      });
      $('#newUserTourModalBox').modal('show');
    },
    chooseNewResortCountry: function chooseNewResortCountry(value) {
      this.new_tour.TourInfo.resort = {
        Name: 'Любой'
      };
      this.new_tour.TourInfo.hotel = {
        Name: 'Любой'
      };
      this.new_tour.TourInfo.country = value;
      this.$store.dispatch('getCities', this.new_tour.TourInfo.country.Id);
      this.$store.dispatch('getHotels', {
        country_id: this.new_tour.TourInfo.country.Id,
        town_id: '0',
        star_id: '0'
      });
    },
    chooseNewResorts: function chooseNewResorts(value) {
      var _this9 = this;
      this.new_tour.TourInfo.resort = value;
      if (this.new_tour.TourInfo.resort.Name != 'Любой') {
        // this.new_tour.TourInfo.resort = this.tourModule.resorts[0];
        var town_id = this.new_tour.TourInfo.resort.Id;
        //поиск отелей по городам-курортам
        this.$store.dispatch('getHotels', {
          country_id: this.new_tour.TourInfo.country.Id,
          town_id: town_id,
          star_id: '0'
        }).then(function () {
          if (_this9.hotels.findIndex(function (item) {
            return item.Id == _this9.new_tour.TourInfo.hotel.Id;
          }) == -1) {
            _this9.new_tour.TourInfo.hotel = {
              Name: 'Любой'
            };
          }
        });
      } else {
        //если городов-курортов не выбрано, то поиск отелей по стране
        this.$store.dispatch('getHotels', {
          country_id: this.new_tour.TourInfo.country.Id,
          town_id: '0',
          star_id: '0'
        });
      }
    },
    chooseNewHotel: function chooseNewHotel(value) {
      this.new_tour.TourInfo.hotel = value;
    },
    changeNewDateRange: function changeNewDateRange(date_object) {
      this.new_tour.TourInfo.date_range = date_object;
    },
    chooseNewMeal: function chooseNewMeal(value) {
      this.new_tour.TourInfo.meal = value;
    },
    changeNewPrice: function changeNewPrice() {
      this.new_tour.TourInfo.left = this.new_tour.TourInfo.price - this.new_tour.TourInfo.paid;
    },
    handleNewFiles: function handleNewFiles() {
      var uploadedFiles = this.$refs.new_tour_files.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        if (/\.(jpe?g|png|svg|pdf|txt|docx|doc)$/i.test(uploadedFiles[i].name)) {
          var date = new Date();
          this.new_tour.TourInfo.files.push({
            type: 'file',
            name: uploadedFiles[i].name,
            data: uploadedFiles[i],
            date: date
          });
          this.getImagePreviews(this.new_tour.TourInfo.files);
        } else {
          break;
        }
      }
    },
    onResult: function onResult(data) {
      var time = Date.now();
      var date = new Date();
      this.new_tour.TourInfo.files.push({
        type: 'audio',
        name: 'record-' + time + '.mp3',
        src: window.URL.createObjectURL(data),
        data: data,
        date: date
      });
      this.getImagePreviews(this.new_tour.TourInfo.files);
    },
    saveClientTour: function saveClientTour() {
      var _this10 = this;
      this.new_loading = true;
      this.new_tour.UserId = this.$route.params.id;
      this.new_tour.StartAt = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.new_tour.TourInfo.date_range.start, "DD-MM-YYYY");
      this.new_tour.EndAt = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.new_tour.TourInfo.date_range.end, "DD-MM-YYYY");
      var formData = new FormData();
      formData.append("UserTour", JSON.stringify(this.new_tour));
      for (var i = 0; i < this.new_tour.TourInfo.files.length; i++) {
        var file = this.new_tour.TourInfo.files[i].data;
        formData.append('files[' + i + ']', file);
      }
      this.$store.dispatch('newClientTour', formData).then(function (response) {
        _this10.sendMessage('Тур клиента успешно добавлен');
        _this10.new_tour = {
          UserId: '',
          TourId: '',
          TourInfo: {
            country: '',
            resort: '',
            hotel: '',
            meal: '',
            tour_operator: '',
            date_range: {
              start: '',
              end: ''
            },
            price: 0,
            paid: 0,
            left: 0,
            services: '',
            avia_tickets: [],
            passengers: [],
            files: []
          },
          StartAt: '',
          EndAt: '',
          Comment: '',
          Archive: false
        };
        _this10.new_loading = false;
        $('#newUserTourModalBox').modal('hide');
      });
    },
    //both
    getImagePreviews: function getImagePreviews(arr) {
      var _this11 = this;
      var _loop = function _loop(i) {
        if (/\.(jpe?g|png|svg)$/i.test(arr[i].name)) {
          var reader = new FileReader();
          reader.addEventListener("load", function () {
            this.$refs['preview' + parseInt(i)][0].src = reader.result;
          }.bind(_this11), false);
          reader.readAsDataURL(arr[i].data);
        } else {
          _this11.$nextTick(function () {
            this.$refs['preview' + parseInt(i)][0].src = '/images/LOGO-1.png';
          });
        }
      };
      for (var i = 0; i < arr.length; i++) {
        _loop(i);
      }
    },
    removeFile: function removeFile(arr, key) {
      arr.splice(key, 1);
      this.getImagePreviews(arr);
    },
    onStream: function onStream(stream) {
      console.log('Got a stream object:', stream);
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Сообщение от TravelClub',
        text: message
      });
    }
  },
  filters: {
    pluralizeResorts: function pluralizeResorts(n) {
      if (n === 1) {
        return 'курорт';
      }
      if (n > 1 && n < 5) {
        return 'курорта';
      }
      if (n > 4 && n < 20) {
        return 'курортов';
      }
      if (n > 19) {
        var last = n % 10;
        if (last === 1) {
          return 'курорт';
        }
        if (last > 1 && last < 5) {
          return 'курорта';
        }
        if (last > 4 && last < 10 && last === 0) {
          return 'курортов';
        }
        return 'курортов';
      }
      return 'курортов';
    },
    pluralizeHotels: function pluralizeHotels(n) {
      if (n === 1) {
        return 'отель';
      }
      if (n > 1 && n < 5) {
        return 'отеля';
      }
      if (n > 4 && n < 20) {
        return 'отелей';
      }
      if (n > 19) {
        var last = n % 10;
        if (last === 1) {
          return 'отель';
        }
        if (last > 1 && last < 5) {
          return 'отеля';
        }
        if (last > 4 && last < 10 && last === 0) {
          return 'отелей';
        }
        return 'отелей';
      }
      return 'отелей';
    },
    pluralizeChoose: function pluralizeChoose(n) {
      if (n === 1) {
        return 'выбран';
      }
      return 'выбрано';
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_0__.mask
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Create",
  data: function data() {
    return {
      city_options: ['Донецк', 'Ростов-на-Дону'],
      new_tour: {
        UserId: '',
        TourId: '',
        TourInfo: {
          country: {
            Id: 150,
            Name: "Россия",
            Alias: "Russia",
            Flags: 8,
            HasTickets: true,
            HotelIsNotInStop: true,
            IsProVisa: false,
            IsVisa: false,
            OriginalName: "Russia",
            Rank: 0,
            TicketsIncluded: true
          },
          resort: {
            Name: 'Любой'
          },
          hotel: {
            Name: 'Любой'
          },
          room_type: '',
          meal: '',
          tour_operator: '',
          date_range: {
            start: '',
            end: ''
          },
          price: '',
          paid: '',
          left: '',
          services: '',
          avia_tickets: [],
          passengers: [],
          files: []
        },
        StartAt: '',
        EndAt: '',
        Comment: ''
      },
      new_mode: false,
      meals: [{
        Id: '115',
        Name: 'AI',
        desc: 'завтраки, обеды, ужины, напитки'
      }, {
        Id: '114',
        Name: 'BB',
        desc: 'завтраки'
      }, {
        Id: '112',
        Name: 'FB',
        desc: 'завтраки, обеды, ужины'
      }, {
        Id: '121',
        Name: 'FB+',
        desc: 'завтраки, обеды, ужины - расширенное меню'
      }, {
        Id: '113',
        Name: 'HB',
        desc: 'завтраки, ужины'
      }, {
        Id: '122',
        Name: 'HB+',
        desc: 'завтраки, ужины - расширенное меню'
      }, {
        Id: '117',
        Name: 'RO',
        desc: 'без питания'
      }, {
        Id: '116',
        Name: 'UAI',
        desc: 'завтраки, обеды, ужины, напитки - расширенное меню'
      }, {
        Id: '129',
        Name: 'SC',
        desc: 'самообслуживание'
      }],
      loading: false,
      new_files: [],
      start: undefined,
      end: undefined,
      flag: false,
      seconds: 0,
      interval: ''
    };
  },
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    tourModule: function tourModule() {
      return this.$store.getters.tourModule;
    },
    countries: function countries() {
      return this.$store.getters.countries;
    },
    cities: function cities() {
      return this.$store.getters.cities;
    },
    hotels: function hotels() {
      return this.$store.getters.hotels;
    },
    branches: function branches() {
      return this.$store.getters.branches;
    },
    //loadings
    isCountriesLoading: function isCountriesLoading() {
      return this.$store.getters.isCountriesLoading;
    },
    isCitiesLoading: function isCitiesLoading() {
      return this.$store.getters.isCitiesLoading;
    },
    isHotelsLoading: function isHotelsLoading() {
      return this.$store.getters.isHotelsLoading;
    }
  },
  methods: {
    chooseNewResortCountry: function chooseNewResortCountry(value) {
      this.new_tour.TourInfo.resort = {
        Name: 'Любой'
      };
      this.new_tour.TourInfo.hotel = {
        Name: 'Любой'
      };
      this.new_tour.TourInfo.country = value;
      this.$store.dispatch('getCities', this.new_tour.TourInfo.country.Id);
      this.$store.dispatch('getHotels', {
        country_id: this.new_tour.TourInfo.country.Id,
        town_id: '0',
        star_id: '0'
      });
    },
    chooseNewResorts: function chooseNewResorts(value) {
      var _this = this;
      this.new_tour.TourInfo.resort = value;
      if (this.new_tour.TourInfo.resort.Name != 'Любой') {
        // this.new_tour.TourInfo.resort = this.tourModule.resorts[0];
        var town_id = this.new_tour.TourInfo.resort.Id;
        //поиск отелей по городам-курортам
        this.$store.dispatch('getHotels', {
          country_id: this.new_tour.TourInfo.country.Id,
          town_id: town_id,
          star_id: '0'
        }).then(function () {
          if (_this.hotels.findIndex(function (item) {
            return item.Id == _this.new_tour.TourInfo.hotel.Id;
          }) == -1) {
            _this.new_tour.TourInfo.hotel = {
              Name: 'Любой'
            };
          }
        });
      } else {
        //если городов-курортов не выбрано, то поиск отелей по стране
        this.$store.dispatch('getHotels', {
          country_id: this.new_tour.TourInfo.country.Id,
          town_id: '0',
          star_id: '0'
        });
      }
    },
    chooseNewHotel: function chooseNewHotel(value) {
      this.new_tour.TourInfo.hotel = value;
    },
    changeNewDateRange: function changeNewDateRange(date_object) {
      this.new_tour.TourInfo.date_range = date_object;
    },
    chooseNewMeal: function chooseNewMeal(value) {
      this.new_tour.TourInfo.meal = value;
    },
    changeNewPrice: function changeNewPrice() {
      this.new_tour.TourInfo.left = this.new_tour.TourInfo.price - this.new_tour.TourInfo.paid;
    },
    handleNewFiles: function handleNewFiles() {
      var uploadedFiles = this.$refs.new_tour_files.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        if (/\.(jpe?g|png|svg|pdf|txt|docx|doc)$/i.test(uploadedFiles[i].name)) {
          var date = new Date();
          this.new_tour.TourInfo.files.push({
            type: 'file',
            name: uploadedFiles[i].name,
            data: uploadedFiles[i],
            date: date
          });
          this.getImagePreviews(this.new_tour.TourInfo.files);
        } else {
          break;
        }
      }
    },
    onResult: function onResult(data) {
      var time = Date.now();
      var date = new Date();
      this.new_tour.TourInfo.files.push({
        type: 'audio',
        name: 'record-' + time + '.mp3',
        src: window.URL.createObjectURL(data),
        data: data,
        date: date,
        seconds: this.seconds
      });
      this.countSeconds();
      this.getImagePreviews(this.new_tour.TourInfo.files);
    },
    saveClientTour: function saveClientTour() {
      var _this2 = this;
      this.loading = true;
      this.new_tour.UserId = this.$route.params.id;
      this.new_tour.StartAt = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.new_tour.TourInfo.date_range.start, "DD-MM-YYYY");
      this.new_tour.EndAt = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.new_tour.TourInfo.date_range.end, "DD-MM-YYYY");
      var formData = new FormData();
      formData.append("UserTour", JSON.stringify(this.new_tour));
      for (var i = 0; i < this.new_tour.TourInfo.files.length; i++) {
        var file = this.new_tour.TourInfo.files[i].data;
        formData.append('files[' + i + ']', file);
      }
      this.$store.dispatch('newClientTour', formData).then(function (response) {
        _this2.sendMessage('Тур клиента успешно добавлен');
        _this2.new_tour = {
          UserId: '',
          TourId: '',
          TourInfo: {
            country: '',
            resort: '',
            hotel: '',
            meal: '',
            tour_operator: '',
            date_range: {
              start: '',
              end: ''
            },
            price: '',
            paid: '',
            left: '',
            services: '',
            avia_tickets: [],
            passengers: [],
            files: []
          },
          StartAt: '',
          EndAt: '',
          Comment: '',
          Archive: false
        };
        _this2.loading = false;
        _this2.$bvModal.hide('newUserTourModalBox');
      });
    },
    //both
    getImagePreviews: function getImagePreviews(arr) {
      var _this3 = this;
      var _loop = function _loop(i) {
        if (/\.(jpe?g|png|svg)$/i.test(arr[i].name)) {
          var reader = new FileReader();
          reader.addEventListener("load", function () {
            this.$refs['preview' + parseInt(i)][0].src = reader.result;
          }.bind(_this3), false);
          reader.readAsDataURL(arr[i].data);
        } else {
          _this3.$nextTick(function () {
            this.$refs['preview' + parseInt(i)][0].src = '/images/LOGO-1.png';
          });
        }
      };
      for (var i = 0; i < arr.length; i++) {
        _loop(i);
      }
    },
    removeFile: function removeFile(arr, key) {
      arr.splice(key, 1);
      this.getImagePreviews(arr);
    },
    onStream: function onStream(stream) {
      this.countSeconds();
      console.log('Got a stream object:', stream);
    },
    countSeconds: function countSeconds() {
      this.flag = !this.flag;
      if (this.flag == true) {
        this.seconds = 0;
        this.interval = setInterval(this.incrementSeconds, 1000);
      } else {
        clearInterval(this.interval);
      }
    },
    incrementSeconds: function incrementSeconds() {
      this.seconds += 1;
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Сообщение от TravelClub',
        text: message
      });
    }
  },
  filters: {
    pluralizeResorts: function pluralizeResorts(n) {
      if (n === 1) {
        return 'курорт';
      }
      if (n > 1 && n < 5) {
        return 'курорта';
      }
      if (n > 4 && n < 20) {
        return 'курортов';
      }
      if (n > 19) {
        var last = n % 10;
        if (last === 1) {
          return 'курорт';
        }
        if (last > 1 && last < 5) {
          return 'курорта';
        }
        if (last > 4 && last < 10 && last === 0) {
          return 'курортов';
        }
        return 'курортов';
      }
      return 'курортов';
    },
    pluralizeHotels: function pluralizeHotels(n) {
      if (n === 1) {
        return 'отель';
      }
      if (n > 1 && n < 5) {
        return 'отеля';
      }
      if (n > 4 && n < 20) {
        return 'отелей';
      }
      if (n > 19) {
        var last = n % 10;
        if (last === 1) {
          return 'отель';
        }
        if (last > 1 && last < 5) {
          return 'отеля';
        }
        if (last > 4 && last < 10 && last === 0) {
          return 'отелей';
        }
        return 'отелей';
      }
      return 'отелей';
    },
    pluralizeChoose: function pluralizeChoose(n) {
      if (n === 1) {
        return 'выбран';
      }
      return 'выбрано';
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_0__.mask
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Edit",
  props: ['edit_tour'],
  data: function data() {
    return {
      meals: [{
        Id: '115',
        Name: 'AI',
        desc: 'завтраки, обеды, ужины, напитки'
      }, {
        Id: '114',
        Name: 'BB',
        desc: 'завтраки'
      }, {
        Id: '112',
        Name: 'FB',
        desc: 'завтраки, обеды, ужины'
      }, {
        Id: '121',
        Name: 'FB+',
        desc: 'завтраки, обеды, ужины - расширенное меню'
      }, {
        Id: '113',
        Name: 'HB',
        desc: 'завтраки, ужины'
      }, {
        Id: '122',
        Name: 'HB+',
        desc: 'завтраки, ужины - расширенное меню'
      }, {
        Id: '117',
        Name: 'RO',
        desc: 'без питания'
      }, {
        Id: '116',
        Name: 'UAI',
        desc: 'завтраки, обеды, ужины, напитки - расширенное меню'
      }, {
        Id: '129',
        Name: 'SC',
        desc: 'самообслуживание'
      }],
      loading: false,
      start: undefined,
      end: undefined,
      new_files: [],
      seconds: 0,
      interval: '',
      flag: false
    };
  },
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    tourModule: function tourModule() {
      return this.$store.getters.tourModule;
    },
    countries: function countries() {
      return this.$store.getters.countries;
    },
    cities: function cities() {
      return this.$store.getters.cities;
    },
    hotels: function hotels() {
      return this.$store.getters.hotels;
    },
    branches: function branches() {
      return this.$store.getters.branches;
    },
    //loadings
    isCountriesLoading: function isCountriesLoading() {
      return this.$store.getters.isCountriesLoading;
    },
    isCitiesLoading: function isCitiesLoading() {
      return this.$store.getters.isCitiesLoading;
    },
    isHotelsLoading: function isHotelsLoading() {
      return this.$store.getters.isHotelsLoading;
    }
  },
  methods: {
    chooseEditResortCountry: function chooseEditResortCountry(value) {
      this.edit_tour.TourInfo.resort = {
        Name: 'Любой'
      };
      this.edit_tour.TourInfo.hotel = {
        Name: 'Любой'
      };
      this.edit_tour.TourInfo.country = value;
      this.$store.dispatch('getCities', this.edit_tour.TourInfo.country.Id);
      this.$store.dispatch('getHotels', {
        country_id: this.edit_tour.TourInfo.country.Id,
        town_id: '0',
        star_id: '0'
      });
    },
    chooseEditResort: function chooseEditResort(value) {
      var _this = this;
      this.edit_tour.TourInfo.resort = value;
      if (this.edit_tour.TourInfo.resort.Name != 'Любой') {
        // this.new_tour.TourInfo.resort = this.tourModule.resorts[0];
        var town_id = this.edit_tour.TourInfo.resort.Id;
        //поиск отелей по городам-курортам
        this.$store.dispatch('getHotels', {
          country_id: this.edit_tour.TourInfo.country.Id,
          town_id: town_id,
          star_id: '0'
        }).then(function () {
          if (_this.hotels.findIndex(function (item) {
            return item.Id == _this.edit_tour.TourInfo.hotel.Id;
          }) == -1) {
            _this.edit_tour.TourInfo.hotel = {
              Name: 'Любой'
            };
          }
        });
      } else {
        //если городов-курортов не выбрано, то поиск отелей по стране
        this.$store.dispatch('getHotels', {
          country_id: this.edit_tour.TourInfo.country.Id,
          town_id: '0',
          star_id: '0'
        });
      }
    },
    chooseEditHotel: function chooseEditHotel(value) {
      this.edit_tour.TourInfo.hotel = value;
    },
    changeEditDateRange: function changeEditDateRange(date_object) {
      this.edit_tour.TourInfo.date_range = date_object;
    },
    chooseEditMeal: function chooseEditMeal(value) {
      this.edit_tour.TourInfo.meal = value;
    },
    changeEditPrice: function changeEditPrice() {
      this.edit_tour.TourInfo.left = this.edit_tour.TourInfo.price - this.edit_tour.TourInfo.paid;
    },
    handleEditFiles: function handleEditFiles() {
      var uploadedFiles = this.$refs.edit_tour_files.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        if (/\.(jpe?g|png|svg|pdf|txt|docx|doc)$/i.test(uploadedFiles[i].name)) {
          var date = new Date();
          this.new_files.push({
            type: 'file',
            name: uploadedFiles[i].name,
            data: uploadedFiles[i],
            date: date
          });
          this.getImagePreviews(this.new_files);
        } else {
          break;
        }
      }
    },
    onEditResult: function onEditResult(data) {
      var time = Date.now();
      var date = new Date();
      this.new_files.push({
        type: 'audio',
        name: 'record-' + time + '.mp3',
        src: window.URL.createObjectURL(data),
        data: data,
        date: date,
        seconds: this.seconds
      });
      this.countSeconds();
      this.getImagePreviews(this.new_files);
    },
    deleteFile: function deleteFile(file, key) {
      this.edit_tour.TourInfo.delete_files.push(file);
      this.edit_tour.TourInfo.files.splice(key, 1);
    },
    updateClientTour: function updateClientTour() {
      var _this2 = this;
      this.loading = true;
      this.edit_tour.StartAt = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.edit_tour.TourInfo.date_range.start, "DD-MM-YYYY");
      this.edit_tour.EndAt = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.edit_tour.TourInfo.date_range.end, "DD-MM-YYYY");
      console.log(this.edit_tour.EndAt);
      this.edit_tour.new_files = this.new_files;
      var formData = new FormData();
      formData.append("UserTour", JSON.stringify(this.edit_tour));
      for (var i = 0; i < this.new_files.length; i++) {
        var file = this.new_files[i].data;
        formData.append('new_files[' + i + ']', file);
      }
      this.$store.dispatch('updateClientTour', formData).then(function (response) {
        console.log('response', response);
        _this2.edit_tour.TourInfo.delete_files = [];
        _this2.edit_tour.TourInfo.new_files = [];
        _this2.edit_tour.TourInfo.files = response.TourInfo.files;
        _this2.edit_tour.expand = response.expand;
        _this2.sendMessage('Тур клиента успешно обновлён');
        _this2.edit_tour = {
          UserId: '',
          TourId: '',
          TourInfo: {
            country: '',
            resort: '',
            hotel: '',
            meal: '',
            tour_operator: '',
            date_range: {
              start: '',
              end: ''
            },
            price: '',
            paid: '',
            left: '',
            services: '',
            avia_tickets: [],
            passengers: [],
            files: []
          },
          new_files: [],
          StartAt: '',
          EndAt: '',
          Comment: ''
        };
        _this2.loading = false;
        _this2.$bvModal.hide('editUserTourModalBox');
      });
    },
    getImagePreviews: function getImagePreviews(arr) {
      var _this3 = this;
      var _loop = function _loop(i) {
        if (/\.(jpe?g|png|svg)$/i.test(arr[i].name)) {
          var reader = new FileReader();
          reader.addEventListener("load", function () {
            this.$refs['preview' + parseInt(i)][0].src = reader.result;
          }.bind(_this3), false);
          reader.readAsDataURL(arr[i].data);
        } else {
          _this3.$nextTick(function () {
            this.$refs['preview' + parseInt(i)][0].src = '/images/LOGO-1.png';
          });
        }
      };
      for (var i = 0; i < arr.length; i++) {
        _loop(i);
      }
    },
    removeFile: function removeFile(arr, key) {
      arr.splice(key, 1);
      this.getImagePreviews(arr);
    },
    onStream: function onStream(stream) {
      this.countSeconds();
      console.log('Got a stream object:', stream);
    },
    countSeconds: function countSeconds() {
      this.flag = !this.flag;
      if (this.flag == true) {
        this.seconds = 0;
        this.interval = setInterval(this.incrementSeconds, 1000);
      } else {
        clearInterval(this.interval);
      }
    },
    incrementSeconds: function incrementSeconds() {
      this.seconds += 1;
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Сообщение от TravelClub',
        text: message
      });
    }
  },
  filters: {
    pluralizeResorts: function pluralizeResorts(n) {
      if (n === 1) {
        return 'курорт';
      }
      if (n > 1 && n < 5) {
        return 'курорта';
      }
      if (n > 4 && n < 20) {
        return 'курортов';
      }
      if (n > 19) {
        var last = n % 10;
        if (last === 1) {
          return 'курорт';
        }
        if (last > 1 && last < 5) {
          return 'курорта';
        }
        if (last > 4 && last < 10 && last === 0) {
          return 'курортов';
        }
        return 'курортов';
      }
      return 'курортов';
    },
    pluralizeHotels: function pluralizeHotels(n) {
      if (n === 1) {
        return 'отель';
      }
      if (n > 1 && n < 5) {
        return 'отеля';
      }
      if (n > 4 && n < 20) {
        return 'отелей';
      }
      if (n > 19) {
        var last = n % 10;
        if (last === 1) {
          return 'отель';
        }
        if (last > 1 && last < 5) {
          return 'отеля';
        }
        if (last > 4 && last < 10 && last === 0) {
          return 'отелей';
        }
        return 'отелей';
      }
      return 'отелей';
    },
    pluralizeChoose: function pluralizeChoose(n) {
      if (n === 1) {
        return 'выбран';
      }
      return 'выбрано';
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_0__.mask
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit */ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create */ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  components: {
    Edit: _Edit__WEBPACK_IMPORTED_MODULE_1__["default"],
    Create: _Create__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['tours', 'load'],
  data: function data() {
    return {
      columns: [{
        label: 'ID тура',
        field: 'id'
      }, {
        label: 'Дата',
        field: 'created_at'
      }, {
        label: 'С',
        field: 'TourInfo.date_range.start'
      }, {
        label: 'По',
        field: 'TourInfo.date_range.end'
      }, {
        label: 'Страна',
        field: 'TourInfo.country.Name'
      }, {
        label: 'Курорт',
        field: 'TourInfo.resort.Name'
      }, {
        label: 'Цена',
        field: 'TourInfo.price'
      }, {
        label: 'Выплачено',
        field: 'TourInfo.paid'
      }],
      new_tour: {
        UserId: '',
        TourId: '',
        TourInfo: {
          country: {
            Id: 150,
            Name: "Россия",
            Alias: "Russia",
            Flags: 8,
            HasTickets: true,
            HotelIsNotInStop: true,
            IsProVisa: false,
            IsVisa: false,
            OriginalName: "Russia",
            Rank: 0,
            TicketsIncluded: true
          },
          resort: {
            Name: 'Любой'
          },
          hotel: {
            Name: 'Любой'
          },
          room_type: '',
          meal: '',
          tour_operator: '',
          date_range: {
            start: '',
            end: ''
          },
          price: '',
          paid: '',
          left: 0,
          services: '',
          avia_tickets: [],
          passengers: [],
          files: []
        },
        StartAt: '',
        EndAt: '',
        Comment: ''
      },
      edit_tour: {
        UserId: '',
        TourId: '',
        TourInfo: {
          country: '',
          resort: '',
          hotel: '',
          room_type: '',
          meal: '',
          tour_operator: '',
          date_range: {
            start: '',
            end: ''
          },
          price: '',
          paid: '',
          left: 0,
          services: '',
          avia_tickets: [],
          passengers: [],
          files: [],
          delete_files: [],
          new_files: []
        },
        StartAt: '',
        EndAt: '',
        Comment: ''
      }
      // load:false,
    };
  },

  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    tourModule: function tourModule() {
      return this.$store.getters.tourModule;
    },
    countries: function countries() {
      return this.$store.getters.countries;
    },
    cities: function cities() {
      return this.$store.getters.cities;
    },
    hotels: function hotels() {
      return this.$store.getters.hotels;
    },
    branches: function branches() {
      return this.$store.getters.branches;
    },
    //loadings
    isCountriesLoading: function isCountriesLoading() {
      return this.$store.getters.isCountriesLoading;
    },
    isCitiesLoading: function isCitiesLoading() {
      return this.$store.getters.isCitiesLoading;
    },
    isHotelsLoading: function isHotelsLoading() {
      return this.$store.getters.isHotelsLoading;
    }
  },
  methods: {
    //edit
    editClientTour: function editClientTour(row) {
      this.edit_tour = row;
      this.edit_tour.TourInfo.start = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.edit_tour.TourInfo.date_range.start, "DD/MM/YYYY").toDate();
      this.edit_tour.TourInfo.end = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.edit_tour.TourInfo.date_range.end, "DD/MM/YYYY").toDate();
      // this.start =this.edit_tour.TourInfo.date_range.start;
      // this.end =this.edit_tour.TourInfo.date_range.end
      // this.edit_tour.TourInfo.date_range.start= this.start;
      // this.edit_tour.TourInfo.date_range.end= this.end;

      this.edit_tour.TourInfo.delete_files = [];
      this.edit_tour.TourInfo.new_files = [];
      this.edit_tour.new_files = [];
      this.$store.dispatch('getCities', this.edit_tour.TourInfo.country.Id);
      this.$store.dispatch('getHotels', {
        country_id: this.edit_tour.TourInfo.country.Id,
        town_id: '0',
        star_id: '0'
      });
      this.$bvModal.show('editUserTourModalBox');
    },
    deleteClientTour: function deleteClientTour(row) {
      var _this = this;
      row.isLoading = true;
      this.$store.dispatch('deleteClientTour', row).then(function (response) {
        row.isLoading = false;
        _this.sendMessage('Тур клиента успешно удалён');
      });
    },
    //new
    addClientTour: function addClientTour() {
      this.$store.dispatch('getCities', this.new_tour.TourInfo.country.Id);
      this.$store.dispatch('getHotels', {
        country_id: this.new_tour.TourInfo.country.Id,
        town_id: '0',
        star_id: '0'
      });
      this.$bvModal.show('newUserTourModalBox');
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Сообщение от TravelClub',
        text: message
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=template&id=287510b0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=template&id=287510b0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row mx-auto"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("ValidationObserver", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_c("card", {
          attrs: {
            id: "client-profile"
          }
        }, [_c("div", {
          staticClass: "row w-100 p-2 m-auto"
        }, [_c("div", {
          staticClass: "col-md-4 pr-md-1"
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
            fn: function fn(_ref2) {
              var errors = _ref2.errors;
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
                  value: _vm.client.info.LastName,
                  callback: function callback($$v) {
                    _vm.$set(_vm.client.info, "LastName", $$v);
                  },
                  expression: "client.info.LastName"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-4 px-md-1"
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
            fn: function fn(_ref3) {
              var errors = _ref3.errors;
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
                  value: _vm.client.info.FirstName,
                  callback: function callback($$v) {
                    _vm.$set(_vm.client.info, "FirstName", $$v);
                  },
                  expression: "client.info.FirstName"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-4 pl-md-1"
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
            value: _vm.client.info.MiddleName,
            callback: function callback($$v) {
              _vm.$set(_vm.client.info, "MiddleName", $$v);
            },
            expression: "client.info.MiddleName"
          }
        })], 1)], 1)]), _vm._v(" "), _c("div", {
          staticClass: "row w-100 p-2 m-auto"
        }, [_c("div", {
          staticClass: "col-md-4 pr-md-1"
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
            fn: function fn(_ref4) {
              var errors = _ref4.errors;
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
                  type: "email",
                  placeholder: "client@email.com"
                },
                model: {
                  value: _vm.client.email,
                  callback: function callback($$v) {
                    _vm.$set(_vm.client, "email", $$v);
                  },
                  expression: "client.email"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-4 px-md-1"
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
            fn: function fn(_ref5) {
              var errors = _ref5.errors;
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
                  value: _vm.client.info.Phone,
                  callback: function callback($$v) {
                    _vm.$set(_vm.client.info, "Phone", $$v);
                  },
                  expression: "client.info.Phone"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "row w-100 p-2 m-auto"
        }, [_c("div", {
          staticClass: "col-md-4 pr-md-1"
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
            fn: function fn(_ref6) {
              var errors = _ref6.errors;
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
                on: {
                  input: function input($event) {
                    return _vm.selectCity(_vm.client.info);
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
                  value: _vm.client.info.City,
                  callback: function callback($$v) {
                    _vm.$set(_vm.client.info, "City", $$v);
                  },
                  expression: "client.info.City"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-4 px-md-1"
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
            fn: function fn(_ref7) {
              var errors = _ref7.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Отделение",
                  "label-size": "sm"
                }
              }, [_c("multiselect", {
                attrs: {
                  options: _vm.client.info.City.departments,
                  "option-height": 25,
                  placeholder: "Выберите отделение",
                  "show-labels": false,
                  maxHeight: 200,
                  disabled: _vm.client.info.City.departments.length === 0,
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
                  value: _vm.client.info.Department,
                  callback: function callback($$v) {
                    _vm.$set(_vm.client.info, "Department", $$v);
                  },
                  expression: "client.info.Department"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "row w-100 p-2 m-auto"
        }, [_c("div", {
          staticClass: "col-md-12"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Дополнительная информация",
            "label-size": "sm"
          }
        }, [_c("b-form-textarea", {
          staticClass: "travel-input p-2",
          staticStyle: {
            "border-radius": "20px !important"
          },
          attrs: {
            rows: "4",
            cols: "80",
            placeholder: "Дополнительная информация о клиенте"
          },
          model: {
            value: _vm.client.info.About,
            callback: function callback($$v) {
              _vm.$set(_vm.client.info, "About", $$v);
            },
            expression: "client.info.About"
          }
        })], 1)], 1)]), _vm._v(" "), _c("b-button", {
          staticClass: "btn btn-travel float-right",
          attrs: {
            slot: "footer",
            disabled: invalid
          },
          on: {
            click: _vm.updateClientInfo
          },
          slot: "footer"
        }, [_vm._v("Сохранить")])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm.client != null ? _c("div", {
    staticClass: "col-md-12"
  }) : _vm._e()])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "row mx-auto mt-3 mb-5 justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      "border-top": "4px solid #f08b23"
    }
  }, [_c("span", {
    staticClass: "white--text active-tour",
    staticStyle: {
      background: "#062348",
      "font-size": "24px",
      position: "absolute"
    }
  }, [_vm._v("Профиль")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "row mx-auto mt-5 mb-5 justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      "border-top": "4px solid #f08b23"
    }
  }, [_c("span", {
    staticClass: "white--text active-tour",
    staticStyle: {
      background: "#062348",
      "font-size": "24px",
      position: "absolute"
    }
  }, [_vm._v("Туры")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=template&id=1ec27f99&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=template&id=1ec27f99&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ValidationObserver", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_c("b-modal", {
          attrs: {
            id: "newUserTourModalBox",
            title: "Новый тур клиента",
            centered: "",
            scrollable: "",
            size: "lg"
          },
          scopedSlots: _vm._u([{
            key: "modal-footer",
            fn: function fn() {
              return [_c("div", {
                staticClass: "row w-100 m-auto"
              }, [_c("div", {
                staticClass: "col-6 col-md-6 contact-btn text-center"
              }, [_c("button", {
                staticClass: "btn btn-travel",
                staticStyle: {
                  width: "100%"
                },
                on: {
                  click: function click($event) {
                    return _vm.$bvModal.hide("newUserTourModalBox");
                  }
                }
              }, [_vm._v("\n                        Отмена\n                    ")])]), _vm._v(" "), _c("div", {
                staticClass: "col-6 col-md-6 contact-btn text-center"
              }, [_c("button", {
                staticClass: "btn btn-travel",
                staticStyle: {
                  width: "100%"
                },
                attrs: {
                  type: "submit",
                  disabled: invalid || _vm.loading
                },
                on: {
                  click: _vm.saveClientTour
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
              }, [_vm._v("Loading...")]) : _vm._e(), _vm._v("\n                            Сохранить\n                        ")])])])])];
            },
            proxy: true
          }], null, true)
        }, [_c("div", {
          staticClass: "row mb-5 mx-auto"
        }, [_c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Куда")]), _vm._v(" "), _c("multiselect", {
          attrs: {
            options: _vm.countries,
            "option-height": 25,
            placeholder: "Выберите страну",
            "show-labels": false,
            maxHeight: 200,
            label: "Name",
            "track-by": "Name",
            loading: _vm.isCountriesLoading,
            disabled: _vm.isCountriesLoading,
            "allow-empty": false
          },
          on: {
            input: _vm.chooseNewResortCountry
          },
          scopedSlots: _vm._u([{
            key: "singleLabel",
            fn: function fn(props) {
              return [_c("b", {
                "class": "slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_" + props.option.Id
              }), _vm._v(" "), _c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))])])];
            }
          }, {
            key: "option",
            fn: function fn(props) {
              return [_c("b", {
                "class": "slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_" + props.option.Id
              }), _vm._v(" "), _c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))])])];
            }
          }], null, true),
          model: {
            value: _vm.new_tour.TourInfo.country,
            callback: function callback($$v) {
              _vm.$set(_vm.new_tour.TourInfo, "country", $$v);
            },
            expression: "new_tour.TourInfo.country"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Курорт")]), _vm._v(" "), _c("multiselect", {
          attrs: {
            options: _vm.cities,
            placeholder: "Введите название курорта",
            "show-labels": false,
            maxHeight: 200,
            label: "Name",
            "track-by": "Name",
            "close-on-select": true,
            "clear-on-select": true,
            loading: _vm.isCountriesLoading || _vm.isCitiesLoading,
            disabled: _vm.isCountriesLoading || _vm.isCitiesLoading,
            preselectFirst: true
          },
          on: {
            input: _vm.chooseNewResorts
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function fn(_ref2) {
              var values = _ref2.values,
                search = _ref2.search,
                isOpen = _ref2.isOpen;
              return [values.length > 3 && !isOpen ? _c("span", {
                staticClass: "multiselect__single"
              }, [_vm._v("\n                            " + _vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeResorts")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)) + "\n                        ")]) : _vm._e()];
            }
          }], null, true),
          model: {
            value: _vm.new_tour.TourInfo.resort,
            callback: function callback($$v) {
              _vm.$set(_vm.new_tour.TourInfo, "resort", $$v);
            },
            expression: "new_tour.TourInfo.resort"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Отель")]), _vm._v(" "), _c("multiselect", {
          attrs: {
            options: _vm.hotels,
            placeholder: "Введите название отеля",
            "show-labels": false,
            maxHeight: 200,
            label: "Name",
            "track-by": "Name",
            "close-on-select": true,
            "clear-on-select": true,
            loading: _vm.isCountriesLoading || _vm.isHotelsLoading,
            disabled: _vm.isCountriesLoading || _vm.isHotelsLoading,
            "allow-empty": false,
            preselectFirst: true
          },
          on: {
            input: _vm.chooseNewHotel
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function fn(_ref3) {
              var values = _ref3.values,
                search = _ref3.search,
                isOpen = _ref3.isOpen;
              return [values.length > 3 && !isOpen ? _c("span", {
                staticClass: "multiselect__single"
              }, [_vm._v("\n                            " + _vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeHotels")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)) + "\n                        ")]) : _vm._e()];
            }
          }, {
            key: "singleLabel",
            fn: function fn(props) {
              return [_c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))]), _vm._v(" "), props.option.CommonRate != 0 ? _c("span", {
                staticClass: "option__title",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.CommonRate))]) : _vm._e(), _vm._v(" "), props.option.StarName ? _c("span", {
                staticClass: "values__hotel-rating",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.StarName))]) : _vm._e()])];
            }
          }, {
            key: "option",
            fn: function fn(props) {
              return [_c("div", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))]), _vm._v(" "), props.option.CommonRate != 0 ? _c("span", {
                staticClass: "option__title",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.CommonRate))]) : _vm._e(), _vm._v(" "), props.option.StarName ? _c("span", {
                staticClass: "values__hotel-rating",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.StarName))]) : _vm._e()])];
            }
          }], null, true),
          model: {
            value: _vm.new_tour.TourInfo.hotel,
            callback: function callback($$v) {
              _vm.$set(_vm.new_tour.TourInfo, "hotel", $$v);
            },
            expression: "new_tour.TourInfo.hotel"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Питание")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "meal",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref4) {
              var errors = _ref4.errors;
              return [_c("multiselect", {
                attrs: {
                  options: _vm.meals,
                  "option-height": 25,
                  placeholder: "Выберите питание",
                  "show-labels": false,
                  maxHeight: 200,
                  label: "Name",
                  "track-by": "Name",
                  "close-on-select": true,
                  "clear-on-select": true,
                  "allow-empty": false
                },
                on: {
                  input: _vm.chooseNewMeal
                },
                scopedSlots: _vm._u([{
                  key: "singleLabel",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.Name))])])];
                  }
                }, {
                  key: "option",
                  fn: function fn(props) {
                    return [_c("div", [_c("div", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.Name))])]), _vm._v(" "), _c("div", {
                      staticClass: "row align-items-center m-auto",
                      staticStyle: {
                        width: "100%",
                        height: "100%"
                      }
                    }, [_c("p", {
                      staticStyle: {
                        "font-size": "12px",
                        margin: "0px"
                      }
                    }, [_vm._v(_vm._s(props.option.desc))])])])];
                  }
                }], null, true),
                model: {
                  value: _vm.new_tour.TourInfo.meal,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_tour.TourInfo, "meal", $$v);
                  },
                  expression: "new_tour.TourInfo.meal"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Категория номера")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "room_type",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref5) {
              var errors = _ref5.errors;
              return [_c("div", {
                staticClass: "row multiselect__tags align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%"
                }
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.new_tour.TourInfo.room_type,
                  expression: "new_tour.TourInfo.room_type"
                }],
                staticClass: "multiselect__input price",
                attrs: {
                  type: "text",
                  placeholder: "Категория номера"
                },
                domProps: {
                  value: _vm.new_tour.TourInfo.room_type
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.new_tour.TourInfo, "room_type", $event.target.value);
                  }
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("div", {
          staticClass: "row align-items-center justify-content-center m-auto",
          staticStyle: {
            width: "100%"
          }
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Даты тура")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "date_range",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref6) {
              var errors = _ref6.errors;
              return [_c("div", {
                staticClass: "row align-items-center justify-content-center m-auto w-100",
                staticStyle: {
                  width: "100%"
                }
              }, [_c("VueHotelDatepicker", {
                staticClass: "w-100",
                attrs: {
                  startDate: _vm.new_tour.TourInfo.date_range.start,
                  endDate: _vm.new_tour.TourInfo.date_range.end,
                  placeholder: "Даты тура",
                  format: "DD/MM/YYYY",
                  weekList: ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."],
                  monthList: ["Янв.", "Фев.", "Мар.", "Апр.", "Май.", "Июн.", "Июл.", "Авг.", "Сен.", "Окт", "Ноя.", "Дек."],
                  fromText: "С",
                  toText: "По",
                  resetText: "Очистить",
                  confirmText: "Подтвердить",
                  mobile: "mobile"
                },
                on: {
                  update: _vm.changeNewDateRange
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("div", {
          staticClass: "row align-items-center justify-content-center m-auto",
          staticStyle: {
            width: "100%"
          }
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Цена")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "price",
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
                  value: _vm.new_tour.TourInfo.price,
                  expression: "new_tour.TourInfo.price"
                }],
                staticClass: "multiselect__input price",
                attrs: {
                  type: "number",
                  step: "1",
                  min: "0"
                },
                domProps: {
                  value: _vm.new_tour.TourInfo.price
                },
                on: {
                  input: [function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.new_tour.TourInfo, "price", $event.target.value);
                  }, _vm.changeNewPrice]
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("div", {
          staticClass: "row align-items-center justify-content-center m-auto",
          staticStyle: {
            width: "100%"
          }
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Выплачено")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "left",
            rules: "required"
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
                  value: _vm.new_tour.TourInfo.paid,
                  expression: "new_tour.TourInfo.paid"
                }],
                staticClass: "multiselect__input price",
                attrs: {
                  type: "number",
                  step: "1",
                  min: "0"
                },
                domProps: {
                  value: _vm.new_tour.TourInfo.paid
                },
                on: {
                  input: [function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.new_tour.TourInfo, "paid", $event.target.value);
                  }, _vm.changeNewPrice]
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("div", {
          staticClass: "row align-items-center justify-content-center mx-auto mt-3",
          staticStyle: {
            width: "100%"
          }
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Дополнительные услуги")]), _vm._v(" "), _c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.new_tour.TourInfo.services,
            expression: "new_tour.TourInfo.services"
          }],
          staticClass: "form-control",
          staticStyle: {
            padding: "5px 15px",
            border: "1px solid #f08b23",
            "border-radius": "20px"
          },
          attrs: {
            rows: "4",
            cols: "80",
            placeholder: "Дополнительные услуги"
          },
          domProps: {
            value: _vm.new_tour.TourInfo.services
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.new_tour.TourInfo, "services", $event.target.value);
            }
          }
        })])]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Авиабилеты")]), _vm._v(" "), _c("avia-tickets-list", {
          attrs: {
            avia_tickets: _vm.new_tour.TourInfo.avia_tickets
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Пассажиры")]), _vm._v(" "), _c("passengers-list", {
          attrs: {
            passengers: _vm.new_tour.TourInfo.passengers
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Файлы для клиента")]), _vm._v(" "), _c("div", {
          staticClass: "form-group row mt-2"
        }, [_c("div", {
          staticClass: "col-md-12"
        }, [_c("div", {
          staticClass: "large-12 medium-12 small-12 filezone"
        }, [_c("input", {
          ref: "new_tour_files",
          attrs: {
            type: "file",
            id: "new_files",
            multiple: ""
          },
          on: {
            change: function change($event) {
              return _vm.handleNewFiles();
            }
          }
        }), _vm._v(" "), _c("p", [_vm._v("\n                                Перетащите файл(ы) сюда"), _c("br"), _vm._v("или нажмите для поиска\n                            ")])]), _vm._v(" "), _c("label", {
          staticClass: "control-label"
        }, [_vm._v("Или запишите голосовое сообщение")]), _vm._v(" "), _c("div", {
          staticClass: "d-flex justify-content-center mt-2"
        }, [_c("vue-record-audio", {
          attrs: {
            mode: "press"
          },
          on: {
            stream: _vm.onStream,
            result: _vm.onResult
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "file-listing"
        }, _vm._l(_vm.new_tour.TourInfo.files, function (file, index) {
          return _c("div", {
            key: file.name,
            staticClass: "list-group-item"
          }, [_c("div", {
            staticClass: "row m-auto w-100 align-items-center justify-content-center"
          }, [_c("div", {
            staticClass: "col-4 text-center"
          }, [_c("img", {
            ref: "preview" + parseInt(index),
            refInFor: true,
            staticClass: "preview"
          })]), _vm._v(" "), _c("div", {
            staticClass: "col-8"
          }, [file.type == "file" ? _c("div", [_c("p", {
            staticClass: "control-label"
          }, [_vm._v(_vm._s(file.data.name))])]) : _vm._e(), _vm._v(" "), file.type == "audio" ? _c("div", [_c("audio-player", {
            attrs: {
              audio: file
            }
          })], 1) : _vm._e()])]), _vm._v(" "), _c("div", {
            staticClass: "remove-container"
          }, [_vm.loading == false ? _c("a", {
            staticClass: "remove",
            on: {
              click: function click($event) {
                return _vm.removeFile(_vm.new_tour.TourInfo.files, index);
              }
            }
          }, [_vm._v("Отменить")]) : _vm._e()])]);
        }), 0)])])])])])];
      }
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=4077d2e7&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=4077d2e7&scoped=true& ***!
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
  return _c("ValidationObserver", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_c("b-modal", {
          attrs: {
            id: "editUserTourModalBox",
            title: "Редактировать тур клиента",
            centered: "",
            scrollable: "",
            size: "lg"
          },
          scopedSlots: _vm._u([{
            key: "modal-footer",
            fn: function fn() {
              return [_c("div", {
                staticClass: "row w-100 m-auto"
              }, [_c("div", {
                staticClass: "col-6 col-md-6 contact-btn text-center"
              }, [_c("button", {
                staticClass: "btn btn-travel",
                staticStyle: {
                  width: "100%"
                },
                on: {
                  click: function click($event) {
                    return _vm.$bvModal.hide("editUserTourModalBox");
                  }
                }
              }, [_vm._v("\n                        Отмена\n                    ")])]), _vm._v(" "), _c("div", {
                staticClass: "col-6 col-md-6 contact-btn text-center"
              }, [_c("button", {
                staticClass: "btn btn-travel",
                staticStyle: {
                  width: "100%"
                },
                attrs: {
                  type: "submit",
                  disabled: invalid || _vm.loading
                },
                on: {
                  click: _vm.updateClientTour
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
              }, [_vm._v("Loading...")]) : _vm._e(), _vm._v("\n                            Сохранить\n                        ")])])])])];
            },
            proxy: true
          }], null, true)
        }, [_c("div", {
          staticClass: "row mb-5 mx-auto"
        }, [_c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Куда")]), _vm._v(" "), _c("multiselect", {
          attrs: {
            options: _vm.countries,
            "option-height": 25,
            placeholder: "Выберите страну",
            "show-labels": false,
            maxHeight: 200,
            label: "Name",
            "track-by": "Name",
            loading: _vm.isCountriesLoading,
            disabled: _vm.isCountriesLoading,
            "allow-empty": false
          },
          on: {
            input: _vm.chooseEditResortCountry
          },
          scopedSlots: _vm._u([{
            key: "singleLabel",
            fn: function fn(props) {
              return [_c("b", {
                "class": "slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_" + props.option.Id
              }), _vm._v(" "), _c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))])])];
            }
          }, {
            key: "option",
            fn: function fn(props) {
              return [_c("b", {
                "class": "slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_" + props.option.Id
              }), _vm._v(" "), _c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))])])];
            }
          }], null, true),
          model: {
            value: _vm.edit_tour.TourInfo.country,
            callback: function callback($$v) {
              _vm.$set(_vm.edit_tour.TourInfo, "country", $$v);
            },
            expression: "edit_tour.TourInfo.country"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Курорт")]), _vm._v(" "), _c("multiselect", {
          attrs: {
            value: _vm.edit_tour.TourInfo.resort,
            options: _vm.cities,
            placeholder: "Введите название курорта",
            "show-labels": false,
            maxHeight: 200,
            label: "Name",
            "track-by": "Name",
            "close-on-select": true,
            "clear-on-select": true,
            loading: _vm.isCountriesLoading || _vm.isCitiesLoading,
            disabled: _vm.isCountriesLoading || _vm.isCitiesLoading,
            "allow-empty": false,
            preselectFirst: true
          },
          on: {
            input: _vm.chooseEditResort
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function fn(_ref2) {
              var values = _ref2.values,
                search = _ref2.search,
                isOpen = _ref2.isOpen;
              return [values.length > 3 && !isOpen ? _c("span", {
                staticClass: "multiselect__single"
              }, [_vm._v(_vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeResorts")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)))]) : _vm._e()];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Отель")]), _vm._v(" "), _c("multiselect", {
          attrs: {
            value: _vm.edit_tour.TourInfo.hotel,
            options: _vm.hotels,
            placeholder: "Введите название отеля",
            "show-labels": false,
            limit: 2,
            maxHeight: 200,
            label: "Name",
            "track-by": "Name",
            "allow-empty": false,
            "close-on-select": true,
            "clear-on-select": true,
            loading: _vm.isCountriesLoading || _vm.isHotelsLoading,
            disabled: _vm.isCountriesLoading || _vm.isHotelsLoading
          },
          on: {
            input: _vm.chooseEditHotel
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function fn(_ref3) {
              var values = _ref3.values,
                search = _ref3.search,
                isOpen = _ref3.isOpen;
              return [values.length > 3 && !isOpen ? _c("span", {
                staticClass: "multiselect__single"
              }, [_vm._v(_vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeHotels")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)) + "\n                                ")]) : _vm._e()];
            }
          }, {
            key: "singleLabel",
            fn: function fn(props) {
              return [_c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))]), _vm._v(" "), props.option.CommonRate != 0 ? _c("span", {
                staticClass: "option__title",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.CommonRate))]) : _vm._e(), _vm._v(" "), props.option.StarName ? _c("span", {
                staticClass: "values__hotel-rating",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.StarName))]) : _vm._e()])];
            }
          }, {
            key: "option",
            fn: function fn(props) {
              return [_c("div", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))]), _vm._v(" "), props.option.CommonRate != 0 ? _c("span", {
                staticClass: "option__title",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.CommonRate))]) : _vm._e(), _vm._v(" "), props.option.StarName ? _c("span", {
                staticClass: "values__hotel-rating",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.StarName))]) : _vm._e()])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Категория номера")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "room_type",
            rules: "required"
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
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.edit_tour.TourInfo.room_type,
                  expression: "edit_tour.TourInfo.room_type"
                }],
                staticClass: "multiselect__input price",
                attrs: {
                  type: "text",
                  placeholder: "Категория номера"
                },
                domProps: {
                  value: _vm.edit_tour.TourInfo.room_type
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.edit_tour.TourInfo, "room_type", $event.target.value);
                  }
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Питание")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "meal",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref5) {
              var errors = _ref5.errors;
              return [_c("multiselect", {
                attrs: {
                  options: _vm.meals,
                  "option-height": 25,
                  placeholder: "Выберите питание",
                  "show-labels": false,
                  maxHeight: 200,
                  label: "Name",
                  "track-by": "Name",
                  "close-on-select": true,
                  "clear-on-select": true,
                  "allow-empty": false
                },
                on: {
                  input: _vm.chooseEditMeal
                },
                scopedSlots: _vm._u([{
                  key: "singleLabel",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.Name))])])];
                  }
                }, {
                  key: "option",
                  fn: function fn(props) {
                    return [_c("div", [_c("div", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.Name))])]), _vm._v(" "), _c("div", {
                      staticClass: "row align-items-center m-auto",
                      staticStyle: {
                        width: "100%",
                        height: "100%"
                      }
                    }, [_c("p", {
                      staticStyle: {
                        "font-size": "12px",
                        margin: "0px"
                      }
                    }, [_vm._v(_vm._s(props.option.desc))])])])];
                  }
                }], null, true),
                model: {
                  value: _vm.edit_tour.TourInfo.meal,
                  callback: function callback($$v) {
                    _vm.$set(_vm.edit_tour.TourInfo, "meal", $$v);
                  },
                  expression: "edit_tour.TourInfo.meal"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("div", {
          staticClass: "row align-items-center w-100 mx-auto",
          staticStyle: {
            width: "100%"
          }
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Даты тура")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "date_range",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref6) {
              var errors = _ref6.errors;
              return [_c("div", {
                staticClass: "row align-items-center justify-content-center m-auto w-100",
                staticStyle: {
                  width: "100%"
                }
              }, [_c("VueHotelDatepicker", {
                ref: "datepickerId",
                staticClass: "w-100",
                attrs: {
                  startDate: _vm.edit_tour.TourInfo.start,
                  endDate: _vm.edit_tour.TourInfo.end,
                  placeholder: "Даты тура",
                  format: "DD/MM/YYYY",
                  weekList: ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."],
                  monthList: ["Янв.", "Фев.", "Мар.", "Апр.", "Май.", "Июн.", "Июл.", "Авг.", "Сен.", "Окт", "Ноя.", "Дек."],
                  fromText: "С",
                  toText: "По",
                  resetText: "Очистить",
                  confirmText: "Подтвердить",
                  mobile: "mobile"
                },
                on: {
                  update: _vm.changeEditDateRange
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("div", {
          staticClass: "row align-items-center w-100 m-auto",
          staticStyle: {
            width: "100%",
            height: "100%"
          }
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Цена")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "price",
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
                  value: _vm.edit_tour.TourInfo.price,
                  expression: "edit_tour.TourInfo.price"
                }],
                staticClass: "multiselect__input price",
                attrs: {
                  type: "number",
                  step: "1",
                  min: "0"
                },
                domProps: {
                  value: _vm.edit_tour.TourInfo.price
                },
                on: {
                  input: [function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.edit_tour.TourInfo, "price", $event.target.value);
                  }, _vm.changeEditPrice]
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("div", {
          staticClass: "row align-items-center w-100 m-auto",
          staticStyle: {
            width: "100%",
            height: "100%"
          }
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Выплачено")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "paid",
            rules: "required"
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
                  value: _vm.edit_tour.TourInfo.paid,
                  expression: "edit_tour.TourInfo.paid"
                }],
                staticClass: "multiselect__input price",
                attrs: {
                  type: "number",
                  step: "1",
                  min: "0"
                },
                domProps: {
                  value: _vm.edit_tour.TourInfo.paid
                },
                on: {
                  input: [function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.edit_tour.TourInfo, "paid", $event.target.value);
                  }, _vm.changeEditPrice]
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("div", {
          staticClass: "row align-items-center w-100 mx-auto mt-3",
          staticStyle: {
            width: "100%"
          }
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Дополнительные услуги")]), _vm._v(" "), _c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.edit_tour.TourInfo.services,
            expression: "edit_tour.TourInfo.services"
          }],
          staticClass: "form-control",
          staticStyle: {
            padding: "5px 15px",
            border: "1px solid #f08b23",
            "border-radius": "20px"
          },
          attrs: {
            rows: "4",
            cols: "80",
            placeholder: "Дополнительные услуги"
          },
          domProps: {
            value: _vm.edit_tour.TourInfo.services
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.edit_tour.TourInfo, "services", $event.target.value);
            }
          }
        })])]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Авиабилеты")]), _vm._v(" "), _c("avia-tickets-list", {
          attrs: {
            avia_tickets: _vm.edit_tour.TourInfo.avia_tickets
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Пассажиры")]), _vm._v(" "), _c("passengers-list", {
          attrs: {
            passengers: _vm.edit_tour.TourInfo.passengers
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("Файлы для клиента")]), _vm._v(" "), _c("div", {
          staticClass: "form-group row mt-2"
        }, [_c("div", {
          staticClass: "col-md-12"
        }, [_c("div", {
          staticClass: "large-12 medium-12 small-12 filezone"
        }, [_c("input", {
          ref: "edit_tour_files",
          attrs: {
            type: "file",
            id: "files",
            multiple: ""
          },
          on: {
            change: function change($event) {
              return _vm.handleEditFiles();
            }
          }
        }), _vm._v(" "), _c("p", [_vm._v("\n                                Перетащите файл(ы) сюда"), _c("br"), _vm._v("или нажмите для поиска\n                            ")])]), _vm._v(" "), _c("label", {
          staticClass: "control-label"
        }, [_vm._v("Или запишите голосовое сообщение")]), _vm._v(" "), _c("div", {
          staticClass: "d-flex justify-content-center mt-2"
        }, [_c("vue-record-audio", {
          attrs: {
            mode: "press"
          },
          on: {
            stream: _vm.onStream,
            result: _vm.onEditResult
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "file-listing"
        }, _vm._l(_vm.edit_tour.TourInfo.files, function (file, index) {
          return _c("div", {
            key: file.name,
            staticClass: "list-group-item"
          }, [_c("div", {
            staticClass: "row m-auto w-100 align-items-center justify-content-center"
          }, [_c("div", {
            staticClass: "col-4 text-center"
          }, [/\.(jpe?g|png|svg)$/i.test(file.name) ? _c("img", {
            staticClass: "preview",
            attrs: {
              src: file.path
            }
          }) : _c("img", {
            staticClass: "preview",
            attrs: {
              src: "/images/LOGO-1.png"
            }
          })]), _vm._v(" "), _c("div", {
            staticClass: "col-8"
          }, [file.type == "file" ? _c("div", [_c("p", {
            staticClass: "control-label"
          }, [_vm._v(_vm._s(file.name))])]) : _vm._e(), _vm._v(" "), file.type == "audio" ? _c("div", [_c("audio-player", {
            attrs: {
              audio: file
            }
          })], 1) : _vm._e()])]), _vm._v(" "), _c("div", {
            staticClass: "remove-container"
          }, [_vm.loading == false ? _c("a", {
            staticClass: "remove",
            on: {
              click: function click($event) {
                return _vm.deleteFile(file, index);
              }
            }
          }, [_vm._v("Удалить")]) : _vm._e()])]);
        }), 0), _vm._v(" "), _c("div", {
          staticClass: "file-listing"
        }, _vm._l(_vm.new_files, function (file, index) {
          return _c("div", {
            staticClass: "list-group-item"
          }, [_c("div", {
            staticClass: "row m-auto w-100 align-items-center justify-content-center"
          }, [_c("div", {
            staticClass: "col-4 text-center"
          }, [_c("img", {
            ref: "preview" + parseInt(index),
            refInFor: true,
            staticClass: "preview"
          })]), _vm._v(" "), _c("div", {
            staticClass: "col-8"
          }, [file.type == "file" ? _c("div", [_c("p", {
            staticClass: "control-label"
          }, [_vm._v(_vm._s(file.data.name))])]) : _vm._e(), _vm._v(" "), file.type == "audio" ? _c("div", [_c("audio-player", {
            attrs: {
              audio: file
            }
          })], 1) : _vm._e()])]), _vm._v(" "), _c("div", {
            staticClass: "remove-container"
          }, [_vm.loading == false ? _c("a", {
            staticClass: "remove",
            on: {
              click: function click($event) {
                return _vm.removeFile(_vm.new_files, index);
              }
            }
          }, [_vm._v("Отменить")]) : _vm._e()])]);
        }), 0)])])])])])];
      }
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=template&id=103a43c5&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=template&id=103a43c5&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.tours != null || _vm.tours != undefined ? _c("div", [_c("create"), _vm._v(" "), _c("edit", {
    attrs: {
      edit_tour: _vm.edit_tour
    }
  }), _vm._v(" "), _c("data-table", {
    attrs: {
      title: "Туры",
      columns: _vm.columns,
      rows: _vm.tours,
      perPage: [5, 10, 25, 50],
      expandMode: true,
      addButton: true,
      addButtonClick: _vm.addClientTour,
      loadingAnimation: _vm.load
    },
    scopedSlots: _vm._u([{
      key: "tbody-tr",
      fn: function fn(props) {
        return [_c("td", {
          attrs: {
            "data-title": "Действия"
          }
        }, [!props.row.isLoading ? _c("button", {
          staticClass: "btn waves-effect",
          staticStyle: {
            outline: "none"
          },
          on: {
            click: function click($event) {
              return _vm.deleteClientTour(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "material-icons",
          staticStyle: {
            color: "#0d274b"
          }
        }, [_vm._v("delete")])]) : _vm._e(), _vm._v(" "), props.row.isLoading ? _c("div", {
          staticClass: "d-flex align-items-center float-left",
          staticStyle: {
            padding: ".375rem .75rem"
          }
        }, [_c("div", {
          staticClass: "spinner-border text-center",
          staticStyle: {
            width: "24px",
            height: "24px"
          },
          attrs: {
            role: "status"
          }
        }, [_c("span", {
          staticClass: "sr-only"
        }, [_vm._v("Loading...")])])]) : _vm._e(), _vm._v(" "), !props.row.isLoading ? _c("button", {
          directives: [{
            name: "b-modal",
            rawName: "v-b-modal.editUserTourModalBox",
            modifiers: {
              editUserTourModalBox: true
            }
          }],
          staticClass: "btn waves-effect",
          staticStyle: {
            outline: "none"
          },
          on: {
            click: function click($event) {
              return _vm.editClientTour(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "material-icons",
          staticStyle: {
            color: "#0d274b"
          }
        }, [_vm._v("edit")])]) : _vm._e()])];
      }
    }, {
      key: "expand-panel",
      fn: function fn(props) {
        return [_c("div", {
          staticStyle: {
            width: "100%",
            height: "100%"
          }
        }, [_c("div", {
          staticClass: "row align-items-center justify-content-center m-auto",
          staticStyle: {
            width: "100%",
            height: "100%"
          }
        }, [_c("div", {
          staticClass: "col-md-6 col-sm-12 mx-auto"
        }, [_c("div", {
          staticClass: "list-group"
        }, [_c("div", {
          staticClass: "list-group-item flex-column align-items-start p-1"
        }, [_c("div", {
          staticClass: "d-flex w-100 justify-content-between"
        }, [_c("label", {
          staticClass: "mb-1 control-label",
          staticStyle: {
            color: "#f08b23"
          }
        }, [_vm._v("Страна")])]), _vm._v(" "), _c("p", {
          staticClass: "mb-1"
        }, [_vm._v(_vm._s(props.row.expand.country.Name))])]), _vm._v(" "), _c("div", {
          staticClass: "list-group-item flex-column align-items-start p-1"
        }, [_c("div", {
          staticClass: "d-flex w-100 justify-content-between"
        }, [_c("label", {
          staticClass: "mb-1 control-label",
          staticStyle: {
            color: "#f08b23"
          }
        }, [_vm._v("Курорт")])]), _vm._v(" "), _c("p", {
          staticClass: "mb-1"
        }, [_vm._v("\n                                    " + _vm._s(props.row.expand.resort.Name) + "\n                                ")])]), _vm._v(" "), _c("div", {
          staticClass: "list-group-item flex-column align-items-start p-1"
        }, [_c("div", {
          staticClass: "d-flex w-100 justify-content-between"
        }, [_c("label", {
          staticClass: "mb-1 control-label",
          staticStyle: {
            color: "#f08b23"
          }
        }, [_vm._v("Отель")])]), _vm._v(" "), _c("p", {
          staticClass: "mb-1"
        }, [_vm._v("\n                                    " + _vm._s(props.row.expand.hotel.Name) + "\n                                ")])]), _vm._v(" "), _c("div", {
          staticClass: "list-group-item flex-column align-items-start p-1"
        }, [_c("div", {
          staticClass: "d-flex w-100 justify-content-between"
        }, [_c("label", {
          staticClass: "mb-1 control-label",
          staticStyle: {
            color: "#f08b23"
          }
        }, [_vm._v("Питание")])]), _vm._v(" "), _c("p", {
          staticClass: "mb-1"
        }, [_vm._v("\n                                    " + _vm._s(props.row.expand.meal.Name) + "\n                                ")])])])]), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-sm-12 mx-auto"
        }, [_c("div", {
          staticClass: "list-group"
        }, [_c("div", {
          staticClass: "list-group-item flex-column align-items-start p-1"
        }, [_c("div", {
          staticClass: "d-flex w-100 justify-content-between"
        }, [_c("label", {
          staticClass: "mb-1 control-label",
          staticStyle: {
            color: "#f08b23"
          }
        }, [_vm._v("Даты тура")])]), _vm._v(" "), _c("p", {
          staticClass: "mb-1"
        }, [_vm._v(_vm._s(props.row.expand.date_range.start) + " - " + _vm._s(props.row.expand.date_range.end))])]), _vm._v(" "), _c("div", {
          staticClass: "list-group-item flex-column align-items-start p-1"
        }, [_c("div", {
          staticClass: "d-flex w-100 justify-content-between"
        }, [_c("label", {
          staticClass: "mb-1 control-label",
          staticStyle: {
            color: "#f08b23"
          }
        }, [_vm._v("Цена")])]), _vm._v(" "), _c("p", {
          staticClass: "mb-1"
        }, [_vm._v(_vm._s(props.row.expand.price))])]), _vm._v(" "), _c("div", {
          staticClass: "list-group-item flex-column align-items-start p-1"
        }, [_c("div", {
          staticClass: "d-flex w-100 justify-content-between"
        }, [_c("label", {
          staticClass: "mb-1 control-label",
          staticStyle: {
            color: "#f08b23"
          }
        }, [_vm._v("Выплачено")])]), _vm._v(" "), _c("p", {
          staticClass: "mb-1"
        }, [_vm._v(_vm._s(props.row.expand.paid))])]), _vm._v(" "), _c("div", {
          staticClass: "list-group-item flex-column align-items-start p-1"
        }, [_c("div", {
          staticClass: "d-flex w-100 justify-content-between"
        }, [_c("label", {
          staticClass: "mb-1 control-label",
          staticStyle: {
            color: "#f08b23"
          }
        }, [_vm._v("Остаток")])]), _vm._v(" "), _c("p", {
          staticClass: "mb-1"
        }, [_vm._v(_vm._s(props.row.expand.left))])])])]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12 col-sm-12 mx-auto"
        }, [_c("label", {
          staticClass: "mb-1 control-label",
          staticStyle: {
            color: "#f08b23"
          }
        }, [_vm._v("Дополнительные услуги")]), _vm._v(" "), _c("div", {
          staticClass: "list-group-item flex-column align-items-start p-1"
        }, [_c("p", {
          staticClass: "mb-1"
        }, [_vm._v(_vm._s(props.row.expand.services))])])]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12 col-sm-12 mx-auto"
        }, [_c("label", {
          staticClass: "mb-1 control-label",
          staticStyle: {
            color: "#f08b23"
          }
        }, [_vm._v("Файлы")]), _vm._v(" "), _vm._l(props.row.expand.files, function (file, index) {
          return _c("div", {
            key: file.name,
            staticClass: "list-group-item"
          }, [file.type == "file" ? _c("div", {
            staticClass: "row m-auto w-100 align-items-center justify-content-center"
          }, [_c("div", {
            staticClass: "col-4 text-center"
          }, [/\.(jpe?g|png|svg)$/i.test(file.name) ? _c("img", {
            staticClass: "preview",
            attrs: {
              src: file.path
            }
          }) : _c("img", {
            staticClass: "preview",
            attrs: {
              src: "/images/LOGO-1.png"
            }
          })]), _vm._v(" "), _c("div", {
            staticClass: "col-8"
          }, [_c("div", [_c("p", {
            staticClass: "control-label"
          }, [_vm._v(_vm._s(file.name))])])])]) : _vm._e(), _vm._v(" "), file.type == "audio" ? _c("div", {
            staticClass: "row m-auto w-100 align-items-center justify-content-center"
          }, [_c("div", {
            staticClass: "audio-container w-100"
          }, [_c("audio-player", {
            staticClass: "w-100",
            attrs: {
              audio: file,
              type: "url"
            }
          })], 1)]) : _vm._e()]);
        })], 2)])])];
      }
    }], null, false, 1445396570)
  }, [_c("th", {
    staticStyle: {
      width: "auto"
    },
    attrs: {
      slot: "thead-tr"
    },
    slot: "thead-tr"
  }, [_vm._v("\n            Действия\n        ")])])], 1) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal-dialog{\n    transform: none !important;\n}\n#client .modal-dialog{\n    max-width: 900px !important;\n}\n.modal-title{\n    color: #062348;\n    font-weight: 900;\n    font-family: \"Open Sans\";\n}\n.travel-card-description{\n    color: #062348;\n    font-size: 13px;\n    font-weight: 900;\n    font-family: \"Open Sans\";\n}\n.more-text {\n    font-family: \"Open Sans\";\n    text-transform: uppercase;\n    color: #f08b23;\n    font-weight: 600;\n    font-size: 16px;\n    cursor:pointer;\n}\n.more-button {\n    cursor:pointer;\n    margin: 0 10px;\n    right: 10px;\n}\n.more-button div {\n    width: 40px;\n    height: 40px;\n    display: block;\n    border-radius: 50px;\n    text-decoration: none;\n    font-size: 40px;\n    /*line-height: 50px;*/\n    color:  white;\n    background: #f08b23;\n    padding: 0px !important;\n}\n.travel-card {\n    border-radius: 20px;\n    background: white;\n    box-shadow: 0px 3px 15px #0000006b;\n    -moz-box-shadow: 0px 3px 15px #0000006b;\n    -webkit-box-shadow: 0px 3px 15px #0000006b;\n}\n.white--text {\n    color: #fff !important;\n    caret-color: #fff !important;\n}\n.active-tour {\n    background: #f08b23;\n    border-radius: 20px;\n    padding: 3px 20px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n    font-weight: 900;\n    text-transform: uppercase;\n    font-family: 'Open Sans';\n}\n/*.card label {*/\n/*    font-family: \"Open Sans\" !important;*/\n/*    font-weight: 900 !important;*/\n/*    font-size: 0.7500000025rem;*/\n/*}*/\n.control-label {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n    color: #344675;\n    font-size: 0.7500000025rem;\n}\n.white-content .form-control::-moz-placeholder {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.white-content .form-control::placeholder {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.white-content .form-control{\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n    color: #062348;\n}\n.white-content  .form-control {\n    border-color: #f08b23;\n    border-radius: 20px;\n}\n.v-card > :last-child:not(.v-btn):not(.v-chip) {\n    border-bottom-left-radius: inherit;\n    border-bottom-right-radius: inherit;\n}\n.v-card > :first-child:not(.v-btn):not(.v-chip), .v-card > .v-card__progress + :not(.v-btn):not(.v-chip) {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n}\n.v-card > :last-child:not(.v-btn):not(.v-chip) {\n    border-bottom-left-radius: inherit;\n    border-bottom-right-radius: inherit;\n}\n.v-card > .v-card__progress + :not(.v-btn):not(.v-chip), .v-card > :first-child:not(.v-btn):not(.v-chip) {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n}\n.v-responsive {\n    position: relative;\n    overflow: hidden;\n    flex: 1 0 auto;\n    max-width: 100%;\n    display: flex;\n}\n.v-image {\n    z-index: 0;\n}\n.v-card {\n    overflow-wrap: break-word;\n    white-space: normal;\n}\n.v-responsive__sizer {\n    background: #0d274b61;\n    transition: padding-bottom .2s cubic-bezier(.25,.8,.5,1);\n    flex: 1 0 0px;\n}\n.v-image__image--cover {\n    background-size: cover;\n}\n.v-image__image {\n    background-repeat: no-repeat;\n}\n.v-image__image, .v-image__placeholder {\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.v-responsive__sizer ~ .v-responsive__content {\n    margin-left: -100%;\n}\n.v-responsive__content {\n    flex: 1 0 0px;\n    max-width: 100%;\n}\n.elevation-24 {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.v-card__title {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: .0125em;\n    line-height: 2rem;\n    word-break: break-all;\n}\n.v-card__subtitle, .v-card__text, .v-card__title {\n    padding: 16px;\n}\n.v-card__subtitle {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n.v-card__subtitle h3{\n    font-weight: 900;\n    font-family: 'Open Sans';\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n@media only screen and (max-width:767.98px) {\n.vhd-container:not(.desktop) .vhd-picker {\n        width: 100% !important;\n        padding: 8px\n}\n.qty input {\n        border: 0;\n        width: 50%;\n}\n}\n@media screen and (max-width: 477px) {\n.vhd-input {\n        min-width: 100% !important;\n}\n.vhd-container {\n        width: 100% !important;\n}\n}\n#client .vhd-picker {\n    z-index: 3 !important;\n    min-height: 362px!important;\n    padding: 18px!important;\n}\n#client .vhd-container{\n    width: 100% !important;\n}\n#client .vhd-input {\n    min-width: 100px;\n    padding: 8px;\n    border: 1px solid #f08b23 !important;\n    color: #062348!important;\n    font-size: 16px;\n    line-height: 32px;\n    outline: none;\n    border-radius: 20px;\n    min-height: 40px;\n    height: 40px !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n    width: 100%;\n}\n.vhd-input::-moz-placeholder {\n    color: #062348 !important;\n}\n.vhd-input::placeholder {\n    color: #062348 !important;\n}\n.vhd-container:not(.desktop) .vhd-picker {\n    min-height: 362px;\n}\n.vhd-calendar .calendar-date .week .day[data-v-0cb4ff92] {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 30px;\n    color: #505050;\n    text-align: center;\n    cursor: pointer;\n}\n.vhd-calendar .calendar-date .week .day{\n    background-image: none!important;\n    height: 30px !important;\n}\n.vhd-calendar-header {\n    height: 20px!important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header {\n    height:60px !important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header>.info {\n    display:block;\n    width:100%;\n    height:60px;\n    padding-top:32px!important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-footer {\n    height: 36px !important;\n}\n.vhd-calendar-footer {\n    height: 24px!important;\n}\n.vhd-calendar .calendar-date .week {\n    height: 30px !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date::before {\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date::after{\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.in-date-range {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.today {\n    border: 1px solid #ffa500 !important;\n}\n.vhd-calendar-footer .confirm, .vhd-calendar-footer .reset {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.vhd-calendar-footer .reset {\n    color: #062348!important;\n}\n.vhd-calendar-footer .confirm{\n    color: #ffa500 !important;\n}\n.vhd-calendar .calendar-week-item,  .vhd-calendar .calendar-month-title{\n    color: #062348!important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.values__hotel-rating::after{\n    content: '';\n    display: inline-block;\n    margin-left: 2px;\n    width: 13px;\n    height: 12px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.multiselect__option.multiselect__option--group.multiselect__option--disabled{\n    text-align: center;\n    background: white !important;\n    color:#f08b23 !important;\n}\n.multiselect__tags .price{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .price:focus{\n    outline: none!important;\n    box-shadow: none !important;\n}\n.multiselect-title {\n    color: #062348 !important;\n    font-family: \"Open Sans\";\n    font-weight: 600;\n    font-size: 1rem;\n}\n#client-profile .multiselect{\n    min-height: 38px;\n}\n#client-profile .multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 0.7500000025rem;\n    min-height: 38px;\n    line-height: 1.428571 !important;\n}\n#client .multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tag {\n    background: #062348;\n}\n.multiselect__tag-icon::after {\n    color:#fff;\n}\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n    background: #f08b23;\n}\n.multiselect__option--selected.multiselect__option--highlight::after {\n    background: #ff6a6a00;\n    content: attr(data-deselect);\n    color: #fff;\n}\n.multiselect__option--highlight::after {\n    background: #f08b2300;\n}\n.multiselect__option--highlight{\n    background: #f08b23;\n}\n.multiselect__option {\n    white-space: break-spaces !important;\n}\n.multiselect{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n}\n.multiselect__placeholder {\n    color: #062348;\n}\n.multiselect__input:focus, .multiselect__single:focus {\n    border-color: #062348;\n}\n#client-profile .multiselect__input::-moz-placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n    font-size: 0.7500000025rem !important;\n    line-height: 1.428571 !important;\n}\n#client-profile .multiselect__input::placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n    font-size: 0.7500000025rem !important;\n    line-height: 1.428571 !important;\n}\n.multiselect--disabled {\n    background: white;\n}\n.multiselect--disabled .multiselect__select {\n    background: transparent;\n}\n.multiselect__spinner::after, .multiselect__spinner::before {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border: 3px solid transparent;\n    border-top-color: transparent;\n    border-top-color: #ffa500;\n    box-shadow: 0 0 0 1px transparent;\n    background: transparent;\n}\n.multiselect__spinner{\n    border-radius: 50px;\n}\n.qty .count {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 30px;\n    padding: 0 2px;\n    min-width: 35px;\n    text-align: center;\n    font-family: \"Open Sans\";\n    color: #0f213d!important;\n}\n#client .qty button{\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: top;\n    color: white;\n    width: 20px;\n    height: 20px;\n    font: 20px/1 Arial,sans-serif;\n    text-align: center;\n    border-radius: 50%;\n    padding: 0;\n    background: #f08b23;\n}\n.qty div {\n    text-align: center;\n}\n.qty .minus:hover{\n    background: #0f213d!important;\n    color: white;\n}\n.qty .plus:hover{\n    background: #0f213d !important;\n    color: white;\n}\n#client .qty input{\n    border: 0;\n    width: 50%;\n}\n.qty input::-webkit-outer-spin-button,\n.qty input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.qty input:disabled{\n    background-color:white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[type=\"file\"][data-v-287510b0]{\n    opacity: 0;\n    width: 100%;\n    height: 200px;\n    position: absolute;\n    cursor: pointer;\n}\n.filezone[data-v-287510b0] {\n    outline: 2px dashed grey;\n    outline-offset: -10px;\n    background: #ccc;\n    color: dimgray;\n    padding: 10px 10px;\n    min-height: 200px;\n    position: relative;\n    cursor: pointer;\n}\n.filezone[data-v-287510b0]:hover {\n    background: #c0c0c0;\n}\n.filezone p[data-v-287510b0] {\n    font-size: 1.2em;\n    text-align: center;\n    padding: 50px 50px 50px 50px;\n}\ndiv.file-listing img[data-v-287510b0]{\n    max-width: 90%;\n}\ndiv.file-listing[data-v-287510b0]{\n    margin: auto;\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n}\ndiv.file-listing img[data-v-287510b0]{\n    height: 100px;\n}\n.preview[data-v-287510b0]{\n    height: 100px;\n    max-width: 90%;\n}\ndiv.success-container[data-v-287510b0]{\n    text-align: center;\n    color: green;\n}\ndiv.remove-container[data-v-287510b0]{\n    text-align: center;\n}\ndiv.remove-container a[data-v-287510b0]{\n    color: red;\n    cursor: pointer;\n}\na.submit-button[data-v-287510b0]{\n    display: block;\n    margin: auto;\n    text-align: center;\n    width: 200px;\n    padding: 10px;\n    text-transform: uppercase;\n    background-color: green;\n    color: white;\n    font-weight: bold;\n    margin-top: 20px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-travel {\n    color: #fff !important;\n    background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);\n    background-color: rgba(0, 0, 0, 0);\n    background-color: #f08b23 !important;\n    border-color: #f08b23 !important;\n    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;\n}\n@media only screen and (max-width:767.98px) {\n.vdp-container:not(.desktop) .vdp-picker {\n        width: 100% !important;\n        padding: 8px\n}\n.tour-module .cont .row{\n        width: 100% !important;\n}\n.qty input {\n        border: 0;\n        width: 50%;\n}\n}\n@media screen and (max-width: 477px) {\n.vdp-input {\n        min-width: 100% !important;\n}\n.vdp-container {\n        width: 100% !important;\n}\n}\n@media screen and (max-width: 576px) {\n.tour-module .cont {\n        height: 100% !important;\n}\n}\n.vdp-datepicker__calendar {\n    position: absolute;\n    z-index: 2!important;\n    padding: 18px!important;\n    background: #fff;\n    width: 300px;\n    border: 1px solid #ccc;\n}\n.vdp-datepicker input {\n    /*min-width: 300px;*/\n    padding: 8px;\n    border: 1px solid #ffa500 !important;\n    color: #062348!important;\n    font-size: 16px;\n    line-height: 32px;\n    outline: none;\n    border-radius: 20px;\n    min-height: 40px;\n    height: 40px !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n    width: 100%;\n}\n.vdp-datepicker input::-moz-placeholder {\n    color: #062348 !important;\n}\n.vdp-datepicker input::placeholder {\n    color: #062348 !important;\n}\n.vdp-datepicker__calendar .day-header\n{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.vdp-datepicker__clear-button\n{\n    position: absolute;\n    right: 20px;\n    top: -11px;\n    color: #0f213d;\n    font-size: 36px;\n}\n.vdp-datepicker__calendar .cell {\n    display: inline-block;\n    padding: 0 5px;\n    width: 14.285714285714286%;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .day {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 30px;\n    color: #0f213d;\n    text-align: center;\n    cursor: pointer;\n}\n.vdp-datepicker__calendar .day{\n    background-image: none!important;\n    height: 30px !important;\n}\n.vdp-datepicker__calendar .cell {\n    display: inline-block;\n    padding: 0 5px;\n    width: 14.285714285714286%;\n    height: 30px !important;\n    line-height: 30px !important;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n    border: 1px solid #ffa500 !important;\n}\n.vdp-datepicker__calendar .cell.selected {\n    background: #ffa50070 !important;\n    background-image: none;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n    background: #ffa50070 !important;\n    background-image: none;\n}\n.vdp-calendar .calendar-date .week .day.start-date::before {\n    background-color: #ffa500 !important;\n}\n.vdp-calendar .calendar-date .week .day.end-date::after{\n    background-color: #ffa500 !important;\n}\n.vdp-calendar .calendar-date .week .day.in-date-range {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.start-date {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.end-date {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.today {\n    border: 1px solid #ffa500 !important;\n}\n.vdp-calendar-footer .confirm, .vdp-calendar-footer .reset {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.vdp-calendar-footer .reset {\n    color: #062348!important;\n}\n.vdp-calendar-footer .confirm{\n    color: #ffa500 !important;\n}\n.vdp-calendar .calendar-week-item,  .vdp-calendar .calendar-month-title{\n    color: #062348!important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.values__hotel-rating::after{\n    content: '';\n    display: inline-block;\n    margin-left: 2px;\n    width: 13px;\n    height: 12px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.multiselect__tags .price{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .price:focus{\n    outline: none!important;\n    box-shadow: none !important;\n}\n.multiselect-title {\n    color: #062348 !important;\n    font-family: \"Bello Pro\";\n    /*font-weight: 700;*/\n}\n.multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tag {\n    background: #062348;\n}\n.multiselect__tag-icon::after {\n    color:#fff;\n}\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n    background: #f08b23;\n}\n.multiselect__option--highlight::after {\n    background: #f08b23;\n}\n.multiselect__option--highlight{\n    background: #f08b23;\n}\n.multiselect{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n}\n.multiselect__placeholder {\n    color: #062348;\n}\n.multiselect__input:focus, .multiselect__single:focus {\n    border-color: #062348;\n}\n.multiselect__input::-moz-placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect__input::placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect--disabled {\n    background: white;\n}\n.multiselect--disabled .multiselect__select {\n    background: transparent;\n}\n.multiselect__spinner::after, .multiselect__spinner::before {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border: 3px solid transparent;\n    border-top-color: transparent;\n    border-top-color: #ffa500;\n    box-shadow: 0 0 0 1px transparent;\n    background: transparent;\n}\n.multiselect__spinner{\n    border-radius: 50px;\n}\n.qty .count {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 30px;\n    padding: 0 2px;\n    min-width: 35px;\n    text-align: center;\n    font-family: \"Open Sans\";\n    color: #0f213d!important;\n}\n.qty button{\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: top;\n    color: white;\n    width: 30px;\n    height: 30px;\n    font: 30px/1 Arial,sans-serif;\n    text-align: center;\n    border-radius: 50%;\n    padding: 0;\n    background: #f08b23;\n    border: 0;\n}\n.qty div {\n    text-align: center;\n}\n.qty .minus:hover{\n    background: #0f213d!important;\n    color: white;\n}\n.qty .plus:hover{\n    background: #0f213d !important;\n    color: white;\n}\n.qty input{\n    border: 0;\n    width: 60%;\n}\n.qty input::-webkit-outer-spin-button,\n.qty input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.qty input:disabled{\n    background-color:white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n@media only screen and (max-width:767.98px) {\n.vhd-container:not(.desktop) .vhd-picker {\n        width: 100% !important;\n        padding: 8px\n}\n.tour-module .cont .row{\n        width: 100% !important;\n}\n.qty input {\n        border: 0;\n        width: 50%;\n}\n}\n@media screen and (max-width: 477px) {\n.vhd-input {\n        min-width: 100% !important;\n}\n.vhd-container {\n        width: 100% !important;\n}\n}\n@media screen and (max-width: 576px) {\n.tour-module .cont {\n        height: 100% !important;\n}\n}\n.vhd-picker {\n    z-index: 2!important;\n    min-height: 362px!important;\n    padding: 18px!important;\n}\n.vhd-input {\n    /*min-width: 300px;*/\n    padding: 8px;\n    border: 1px solid #ffa500 !important;\n    color: #062348!important;\n    font-size: 16px;\n    line-height: 32px;\n    outline: none;\n    border-radius: 20px;\n    min-height: 40px;\n    height: 40px !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n    width: 100%;\n}\n.vhd-input::-moz-placeholder {\n    color: #062348 !important;\n}\n.vhd-input::placeholder {\n    color: #062348 !important;\n}\n.vhd-container:not(.desktop) .vhd-picker {\n    min-height: 362px;\n}\n.vhd-calendar .calendar-date .week .day[data-v-0cb4ff92] {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 30px;\n    color: #505050;\n    text-align: center;\n    cursor: pointer;\n}\n.vhd-calendar .calendar-date .week .day{\n    background-image: none!important;\n    height: 30px !important;\n}\n.vhd-calendar-header {\n    height: 20px!important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header {\n    height:60px !important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header>.info {\n    display:block;\n    width:100%;\n    height:60px;\n    padding-top:32px!important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-footer {\n    height: 36px !important;\n}\n.vhd-calendar-footer {\n    height: 24px!important;\n}\n.vhd-calendar .calendar-date .week {\n    height: 30px !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date::before {\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date::after{\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.in-date-range {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.today {\n    border: 1px solid #ffa500 !important;\n}\n.vhd-calendar-footer .confirm, .vhd-calendar-footer .reset {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.vhd-calendar-footer .reset {\n    color: #062348!important;\n}\n.vhd-calendar-footer .confirm{\n    color: #ffa500 !important;\n}\n.vhd-calendar .calendar-week-item,  .vhd-calendar .calendar-month-title{\n    color: #062348!important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.values__hotel-rating::after{\n    content: '';\n    display: inline-block;\n    margin-left: 2px;\n    width: 13px;\n    height: 12px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.multiselect__tags .price{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .price:focus{\n    outline: none!important;\n    box-shadow: none !important;\n}\n.multiselect-title {\n    color: #062348 !important;\n    font-family: \"Bello Pro\";\n    /*font-weight: 700;*/\n}\n.multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tag {\n    background: #062348;\n}\n.multiselect__tag-icon::after {\n    color:#fff;\n}\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n    background: #f08b23;\n}\n.multiselect__option--highlight::after {\n    background: #f08b23;\n}\n.multiselect__option--highlight{\n    background: #f08b23;\n}\n.multiselect{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n}\n.multiselect__placeholder {\n    color: #062348;\n}\n.multiselect__input:focus, .multiselect__single:focus {\n    border-color: #062348;\n}\n.multiselect__input::-moz-placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect__input::placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect--disabled {\n    background: white;\n}\n.multiselect--disabled .multiselect__select {\n    background: transparent;\n}\n.multiselect__spinner::after, .multiselect__spinner::before {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border: 3px solid transparent;\n    border-top-color: transparent;\n    border-top-color: #ffa500;\n    box-shadow: 0 0 0 1px transparent;\n    background: transparent;\n}\n.multiselect__spinner{\n    border-radius: 50px;\n}\n.qty .count {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 30px;\n    padding: 0 2px;\n    min-width: 35px;\n    text-align: center;\n    font-family: \"Open Sans\";\n    color: #0f213d!important;\n}\n.qty button{\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: top;\n    color: white;\n    width: 30px;\n    height: 30px;\n    font: 30px/1 Arial,sans-serif;\n    text-align: center;\n    border-radius: 50%;\n    padding: 0;\n    background: #f08b23;\n}\n/*.qty .plus {*/\n/*    cursor: pointer;*/\n/*    display: inline-block;*/\n/*    vertical-align: top;*/\n/*    color: white;*/\n/*    width: 30px;*/\n/*    height: 30px;*/\n/*    font: 30px/1 Arial,sans-serif;*/\n/*    text-align: center;*/\n/*    border-radius: 50%;*/\n/*}*/\n/*.qty .minus {*/\n/*    cursor: pointer;*/\n/*    display: inline-block;*/\n/*    vertical-align: top;*/\n/*    color: white;*/\n/*    width: 30px;*/\n/*    height: 30px;*/\n/*    font: 30px/1 Arial,sans-serif;*/\n/*    text-align: center;*/\n/*    border-radius: 50%;*/\n/*    background-clip: padding-box;*/\n/*}*/\n.qty div {\n    text-align: center;\n}\n.qty .minus:hover{\n    background: #0f213d!important;\n    color: white;\n}\n.qty .plus:hover{\n    background: #0f213d !important;\n    color: white;\n}\n.qty input{\n    border: 0;\n    width: 60%;\n}\n.qty input::-webkit-outer-spin-button,\n.qty input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.qty input:disabled{\n    background-color:white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[type=\"file\"][data-v-1ec27f99]{\n    opacity: 0;\n    width: 100%;\n    height: 200px;\n    position: absolute;\n    cursor: pointer;\n}\n.filezone[data-v-1ec27f99] {\n    outline: 2px dashed grey;\n    outline-offset: -10px;\n    background: #ccc;\n    color: dimgray;\n    padding: 10px 10px;\n    min-height: 200px;\n    position: relative;\n    cursor: pointer;\n}\n.filezone[data-v-1ec27f99]:hover {\n    background: #c0c0c0;\n}\n.filezone p[data-v-1ec27f99] {\n    font-size: 1.2em;\n    text-align: center;\n    padding: 50px 50px 50px 50px;\n}\ndiv.file-listing img[data-v-1ec27f99]{\n    max-width: 90%;\n}\ndiv.file-listing[data-v-1ec27f99]{\n    margin: auto;\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n}\ndiv.file-listing img[data-v-1ec27f99]{\n    height: 100px;\n}\n.preview[data-v-1ec27f99]{\n    height: 100px;\n    max-width: 90%;\n}\ndiv.success-container[data-v-1ec27f99]{\n    text-align: center;\n    color: green;\n}\ndiv.remove-container[data-v-1ec27f99]{\n    text-align: center;\n}\ndiv.remove-container a[data-v-1ec27f99]{\n    color: red;\n    cursor: pointer;\n}\na.submit-button[data-v-1ec27f99]{\n    display: block;\n    margin: auto;\n    text-align: center;\n    width: 200px;\n    padding: 10px;\n    text-transform: uppercase;\n    background-color: green;\n    color: white;\n    font-weight: bold;\n    margin-top: 20px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-travel {\n    color: #fff !important;\n    background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);\n    background-color: rgba(0, 0, 0, 0);\n    background-color: #f08b23 !important;\n    border-color: #f08b23 !important;\n    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;\n}\n@media only screen and (max-width:767.98px) {\n.vdp-container:not(.desktop) .vdp-picker {\n        width: 100% !important;\n        padding: 8px\n}\n.tour-module .cont .row{\n        width: 100% !important;\n}\n.qty input {\n        border: 0;\n        width: 50%;\n}\n}\n@media screen and (max-width: 477px) {\n.vdp-input {\n        min-width: 100% !important;\n}\n.vdp-container {\n        width: 100% !important;\n}\n}\n@media screen and (max-width: 576px) {\n.tour-module .cont {\n        height: 100% !important;\n}\n}\n.vdp-datepicker__calendar {\n    position: absolute;\n    z-index: 2!important;\n    padding: 18px!important;\n    background: #fff;\n    width: 300px;\n    border: 1px solid #ccc;\n}\n.vdp-datepicker input {\n    /*min-width: 300px;*/\n    padding: 8px;\n    border: 1px solid #ffa500 !important;\n    color: #062348!important;\n    font-size: 16px;\n    line-height: 32px;\n    outline: none;\n    border-radius: 20px;\n    min-height: 40px;\n    height: 40px !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n    width: 100%;\n}\n.vdp-datepicker input::-moz-placeholder {\n    color: #062348 !important;\n}\n.vdp-datepicker input::placeholder {\n    color: #062348 !important;\n}\n.vdp-datepicker__calendar .day-header\n{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.vdp-datepicker__clear-button\n{\n    position: absolute;\n    right: 20px;\n    top: -11px;\n    color: #0f213d;\n    font-size: 36px;\n}\n.vdp-datepicker__calendar .cell {\n    display: inline-block;\n    padding: 0 5px;\n    width: 14.285714285714286%;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .day {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 30px;\n    color: #0f213d;\n    text-align: center;\n    cursor: pointer;\n}\n.vdp-datepicker__calendar .day{\n    background-image: none!important;\n    height: 30px !important;\n}\n.vdp-datepicker__calendar .cell {\n    display: inline-block;\n    padding: 0 5px;\n    width: 14.285714285714286%;\n    height: 30px !important;\n    line-height: 30px !important;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n    border: 1px solid #ffa500 !important;\n}\n.vdp-datepicker__calendar .cell.selected {\n    background: #ffa50070 !important;\n    background-image: none;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n    background: #ffa50070 !important;\n    background-image: none;\n}\n.vdp-calendar .calendar-date .week .day.start-date::before {\n    background-color: #ffa500 !important;\n}\n.vdp-calendar .calendar-date .week .day.end-date::after{\n    background-color: #ffa500 !important;\n}\n.vdp-calendar .calendar-date .week .day.in-date-range {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.start-date {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.end-date {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.today {\n    border: 1px solid #ffa500 !important;\n}\n.vdp-calendar-footer .confirm, .vdp-calendar-footer .reset {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.vdp-calendar-footer .reset {\n    color: #062348!important;\n}\n.vdp-calendar-footer .confirm{\n    color: #ffa500 !important;\n}\n.vdp-calendar .calendar-week-item,  .vdp-calendar .calendar-month-title{\n    color: #062348!important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.values__hotel-rating::after{\n    content: '';\n    display: inline-block;\n    margin-left: 2px;\n    width: 13px;\n    height: 12px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.multiselect__tags .price{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .price:focus{\n    outline: none!important;\n    box-shadow: none !important;\n}\n.multiselect-title {\n    color: #062348 !important;\n    font-family: \"Bello Pro\";\n    /*font-weight: 700;*/\n}\n.multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tag {\n    background: #062348;\n}\n.multiselect__tag-icon::after {\n    color:#fff;\n}\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n    background: #f08b23;\n}\n.multiselect__option--highlight::after {\n    background: #f08b23;\n}\n.multiselect__option--highlight{\n    background: #f08b23;\n}\n.multiselect{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n}\n.multiselect__placeholder {\n    color: #062348;\n}\n.multiselect__input:focus, .multiselect__single:focus {\n    border-color: #062348;\n}\n.multiselect__input::-moz-placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect__input::placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect--disabled {\n    background: white;\n}\n.multiselect--disabled .multiselect__select {\n    background: transparent;\n}\n.multiselect__spinner::after, .multiselect__spinner::before {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border: 3px solid transparent;\n    border-top-color: transparent;\n    border-top-color: #ffa500;\n    box-shadow: 0 0 0 1px transparent;\n    background: transparent;\n}\n.multiselect__spinner{\n    border-radius: 50px;\n}\n.qty .count {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 30px;\n    padding: 0 2px;\n    min-width: 35px;\n    text-align: center;\n    font-family: \"Open Sans\";\n    color: #0f213d!important;\n}\n.qty button{\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: top;\n    color: white;\n    width: 30px;\n    height: 30px;\n    font: 30px/1 Arial,sans-serif;\n    text-align: center;\n    border-radius: 50%;\n    padding: 0;\n    background: #f08b23;\n    border: 0;\n}\n.qty div {\n    text-align: center;\n}\n.qty .minus:hover{\n    background: #0f213d!important;\n    color: white;\n}\n.qty .plus:hover{\n    background: #0f213d !important;\n    color: white;\n}\n.qty input{\n    border: 0;\n    width: 60%;\n}\n.qty input::-webkit-outer-spin-button,\n.qty input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.qty input:disabled{\n    background-color:white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n@media only screen and (max-width:767.98px) {\n.vhd-container:not(.desktop) .vhd-picker {\n        width: 100% !important;\n        padding: 8px\n}\n.tour-module .cont .row{\n        width: 100% !important;\n}\n.qty input {\n        border: 0;\n        width: 50%;\n}\n}\n@media screen and (max-width: 477px) {\n.vhd-input {\n        min-width: 100% !important;\n}\n.vhd-container {\n        width: 100% !important;\n}\n}\n@media screen and (max-width: 576px) {\n.tour-module .cont {\n        height: 100% !important;\n}\n}\n.vhd-picker {\n    z-index: 2!important;\n    min-height: 362px!important;\n    padding: 18px!important;\n}\n.vhd-input {\n    /*min-width: 300px;*/\n    padding: 8px;\n    border: 1px solid #ffa500 !important;\n    color: #062348!important;\n    font-size: 16px;\n    line-height: 32px;\n    outline: none;\n    border-radius: 20px;\n    min-height: 40px;\n    height: 40px !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n    width: 100%;\n}\n.vhd-input::-moz-placeholder {\n    color: #062348 !important;\n}\n.vhd-input::placeholder {\n    color: #062348 !important;\n}\n.vhd-container:not(.desktop) .vhd-picker {\n    min-height: 362px;\n}\n.vhd-calendar .calendar-date .week .day[data-v-0cb4ff92] {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 30px;\n    color: #505050;\n    text-align: center;\n    cursor: pointer;\n}\n.vhd-calendar .calendar-date .week .day{\n    background-image: none!important;\n    height: 30px !important;\n}\n.vhd-calendar-header {\n    height: 20px!important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header {\n    height:60px !important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header>.info {\n    display:block;\n    width:100%;\n    height:60px;\n    padding-top:32px!important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-footer {\n    height: 36px !important;\n}\n.vhd-calendar-footer {\n    height: 24px!important;\n}\n.vhd-calendar .calendar-date .week {\n    height: 30px !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date::before {\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date::after{\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.in-date-range {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.today {\n    border: 1px solid #ffa500 !important;\n}\n.vhd-calendar-footer .confirm, .vhd-calendar-footer .reset {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.vhd-calendar-footer .reset {\n    color: #062348!important;\n}\n.vhd-calendar-footer .confirm{\n    color: #ffa500 !important;\n}\n.vhd-calendar .calendar-week-item,  .vhd-calendar .calendar-month-title{\n    color: #062348!important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.values__hotel-rating::after{\n    content: '';\n    display: inline-block;\n    margin-left: 2px;\n    width: 13px;\n    height: 12px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.multiselect__tags .price{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .price:focus{\n    outline: none!important;\n    box-shadow: none !important;\n}\n.multiselect-title {\n    color: #062348 !important;\n    font-family: \"Bello Pro\";\n    /*font-weight: 700;*/\n}\n.multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tag {\n    background: #062348;\n}\n.multiselect__tag-icon::after {\n    color:#fff;\n}\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n    background: #f08b23;\n}\n.multiselect__option--highlight::after {\n    background: #f08b23;\n}\n.multiselect__option--highlight{\n    background: #f08b23;\n}\n.multiselect{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n}\n.multiselect__placeholder {\n    color: #062348;\n}\n.multiselect__input:focus, .multiselect__single:focus {\n    border-color: #062348;\n}\n.multiselect__input::-moz-placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect__input::placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect--disabled {\n    background: white;\n}\n.multiselect--disabled .multiselect__select {\n    background: transparent;\n}\n.multiselect__spinner::after, .multiselect__spinner::before {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border: 3px solid transparent;\n    border-top-color: transparent;\n    border-top-color: #ffa500;\n    box-shadow: 0 0 0 1px transparent;\n    background: transparent;\n}\n.multiselect__spinner{\n    border-radius: 50px;\n}\n.qty .count {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 30px;\n    padding: 0 2px;\n    min-width: 35px;\n    text-align: center;\n    font-family: \"Open Sans\";\n    color: #0f213d!important;\n}\n.qty button{\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: top;\n    color: white;\n    width: 30px;\n    height: 30px;\n    font: 30px/1 Arial,sans-serif;\n    text-align: center;\n    border-radius: 50%;\n    padding: 0;\n    background: #f08b23;\n}\n/*.qty .plus {*/\n/*    cursor: pointer;*/\n/*    display: inline-block;*/\n/*    vertical-align: top;*/\n/*    color: white;*/\n/*    width: 30px;*/\n/*    height: 30px;*/\n/*    font: 30px/1 Arial,sans-serif;*/\n/*    text-align: center;*/\n/*    border-radius: 50%;*/\n/*}*/\n/*.qty .minus {*/\n/*    cursor: pointer;*/\n/*    display: inline-block;*/\n/*    vertical-align: top;*/\n/*    color: white;*/\n/*    width: 30px;*/\n/*    height: 30px;*/\n/*    font: 30px/1 Arial,sans-serif;*/\n/*    text-align: center;*/\n/*    border-radius: 50%;*/\n/*    background-clip: padding-box;*/\n/*}*/\n.qty div {\n    text-align: center;\n}\n.qty .minus:hover{\n    background: #0f213d!important;\n    color: white;\n}\n.qty .plus:hover{\n    background: #0f213d !important;\n    color: white;\n}\n.qty input{\n    border: 0;\n    width: 60%;\n}\n.qty input::-webkit-outer-spin-button,\n.qty input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.qty input:disabled{\n    background-color:white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[type=\"file\"][data-v-4077d2e7]{\n    opacity: 0;\n    width: 100%;\n    height: 200px;\n    position: absolute;\n    cursor: pointer;\n}\n.filezone[data-v-4077d2e7] {\n    outline: 2px dashed grey;\n    outline-offset: -10px;\n    background: #ccc;\n    color: dimgray;\n    padding: 10px 10px;\n    min-height: 200px;\n    position: relative;\n    cursor: pointer;\n}\n.filezone[data-v-4077d2e7]:hover {\n    background: #c0c0c0;\n}\n.filezone p[data-v-4077d2e7] {\n    font-size: 1.2em;\n    text-align: center;\n    padding: 50px 50px 50px 50px;\n}\ndiv.file-listing img[data-v-4077d2e7]{\n    max-width: 90%;\n}\ndiv.file-listing[data-v-4077d2e7]{\n    margin: auto;\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n}\ndiv.file-listing img[data-v-4077d2e7]{\n    height: 100px;\n}\n.preview[data-v-4077d2e7]{\n    height: 100px;\n    max-width: 90%;\n}\ndiv.success-container[data-v-4077d2e7]{\n    text-align: center;\n    color: green;\n}\ndiv.remove-container[data-v-4077d2e7]{\n    text-align: center;\n}\ndiv.remove-container a[data-v-4077d2e7]{\n    color: red;\n    cursor: pointer;\n}\na.submit-button[data-v-4077d2e7]{\n    display: block;\n    margin: auto;\n    text-align: center;\n    width: 200px;\n    padding: 10px;\n    text-transform: uppercase;\n    background-color: green;\n    color: white;\n    font-weight: bold;\n    margin-top: 20px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_0_id_287510b0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_0_id_287510b0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_0_id_287510b0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_1_id_287510b0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_1_id_287510b0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_1_id_287510b0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_2_id_287510b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_2_id_287510b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_2_id_287510b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_1ec27f99_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_1ec27f99_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_1ec27f99_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_1ec27f99_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_1ec27f99_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_1ec27f99_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_1ec27f99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_1ec27f99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_1ec27f99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4077d2e7_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4077d2e7_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4077d2e7_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_id_4077d2e7_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_id_4077d2e7_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_id_4077d2e7_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_2_id_4077d2e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_2_id_4077d2e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_2_id_4077d2e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientProfile.vue":
/*!**************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientProfile.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientProfile_vue_vue_type_template_id_287510b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientProfile.vue?vue&type=template&id=287510b0&scoped=true& */ "./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=template&id=287510b0&scoped=true&");
/* harmony import */ var _ClientProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientProfile.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _ClientProfile_vue_vue_type_style_index_0_id_287510b0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css& */ "./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css&");
/* harmony import */ var _ClientProfile_vue_vue_type_style_index_1_id_287510b0_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css& */ "./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css&");
/* harmony import */ var _ClientProfile_vue_vue_type_style_index_2_id_287510b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css& */ "./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;




/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _ClientProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientProfile_vue_vue_type_template_id_287510b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClientProfile_vue_vue_type_template_id_287510b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "287510b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Manager/ClientProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Create.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_1ec27f99_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=1ec27f99&scoped=true& */ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=template&id=1ec27f99&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _Create_vue_vue_type_style_index_0_id_1ec27f99_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css& */ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css&");
/* harmony import */ var _Create_vue_vue_type_style_index_1_id_1ec27f99_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css& */ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css&");
/* harmony import */ var _Create_vue_vue_type_style_index_2_id_1ec27f99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css& */ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;




/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_1ec27f99_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_1ec27f99_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1ec27f99",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Manager/ClientTours/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Edit.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_4077d2e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=4077d2e7&scoped=true& */ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=4077d2e7&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _Edit_vue_vue_type_style_index_0_id_4077d2e7_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css& */ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css&");
/* harmony import */ var _Edit_vue_vue_type_style_index_1_id_4077d2e7_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css& */ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css&");
/* harmony import */ var _Edit_vue_vue_type_style_index_2_id_4077d2e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css& */ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;




/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_4077d2e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_4077d2e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4077d2e7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Manager/ClientTours/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Index.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_103a43c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=103a43c5&scoped=true& */ "./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=template&id=103a43c5&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_103a43c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_103a43c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "103a43c5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Manager/ClientTours/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=template&id=287510b0&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=template&id=287510b0&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_template_id_287510b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_template_id_287510b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_template_id_287510b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=template&id=287510b0&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=template&id=287510b0&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=template&id=1ec27f99&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=template&id=1ec27f99&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1ec27f99_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1ec27f99_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1ec27f99_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=1ec27f99&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=template&id=1ec27f99&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=4077d2e7&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=4077d2e7&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4077d2e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4077d2e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4077d2e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=4077d2e7&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=4077d2e7&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=template&id=103a43c5&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=template&id=103a43c5&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_103a43c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_103a43c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_103a43c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=103a43c5&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Index.vue?vue&type=template&id=103a43c5&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_0_id_287510b0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=0&id=287510b0&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_1_id_287510b0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=287510b0&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_2_id_287510b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=287510b0&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_1ec27f99_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=1ec27f99&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_1ec27f99_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=1&id=1ec27f99&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_1ec27f99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Create.vue?vue&type=style&index=2&id=1ec27f99&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4077d2e7_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=4077d2e7&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_id_4077d2e7_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=1&id=4077d2e7&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_2_id_4077d2e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=2&id=4077d2e7&scoped=true&lang=css&");


/***/ })

}]);