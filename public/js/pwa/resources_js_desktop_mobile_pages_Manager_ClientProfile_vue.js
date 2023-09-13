"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_mobile_pages_Manager_ClientProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ClientTours_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientTours/Index */ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      this.countSeconds();
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
      // this.getImagePreviews(this.new_tour.TourInfo.files);
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
        $('#newUserTourModalBox').modal('hide');
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
      console.log('Got a stream object:', stream);
      this.countSeconds();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      // this.getImagePreviews(this.new_files);
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
        $('#editUserTourModalBox').modal('hide');
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
        this.voice_record.seconds = this.seconds;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit */ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create */ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue");



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
      // $('#editUserTourModalBox').modal('show');
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
      $('#newUserTourModalBox').modal('show');
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=template&id=137afc95&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=template&id=137afc95&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
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
          staticClass: "row w-100 m-auto"
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
          staticClass: "row w-100 m-auto"
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
          staticClass: "row w-100 m-auto"
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
          staticClass: "row w-100 m-auto"
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
  }, [_c("client-tours", {
    attrs: {
      tours: _vm.client.tours,
      load: _vm.load
    }
  })], 1) : _vm._e()])])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=template&id=4f058a58&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=template&id=4f058a58&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "modal fade modalbox show",
    attrs: {
      id: "newUserTourModalBox",
      "data-backdrop": "static",
      tabindex: "-1",
      role: "dialog",
      "aria-modal": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "start-form",
    staticStyle: {
      "margin-bottom": "110px"
    }
  }, [_c("div", {
    staticClass: "section mx-auto"
  }, [_c("div", {
    staticClass: "row my-3"
  }, [_c("ValidationObserver", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_c("div", {
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
              }, [_vm._v("\n                        " + _vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeResorts")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)) + "\n                    ")]) : _vm._e()];
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
              }, [_vm._v("\n                        " + _vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeHotels")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)) + "\n                    ")]) : _vm._e()];
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
          staticClass: "row align-items-center w-100 m-auto",
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
          staticClass: "row align-items-center w-100 m-auto",
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
          staticClass: "row align-items-center w-100 m-auto",
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
          staticClass: "row w-100 mx-auto mt-2"
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
        }), _vm._v(" "), _c("p", [_vm._v("\n                                                    Перетащите файл(ы) сюда"), _c("br"), _vm._v("или нажмите для поиска\n                                                ")])])])])]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
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
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("div", {
          staticClass: "file-listing"
        }, _vm._l(_vm.new_tour.TourInfo.files, function (file, index) {
          return _c("div", {
            key: file.name,
            staticClass: "list-group-item"
          }, [file.type == "file" ? _c("div", {
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
          }, [_vm._v(_vm._s(file.data.name))])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), file.type == "audio" ? _c("div", {
            staticClass: "row m-auto w-100 align-items-center justify-content-center"
          }, [_c("div", {
            staticClass: "audio-container w-100"
          }, [_c("audio-player", {
            staticClass: "w-100",
            attrs: {
              audio: file
            }
          })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
            staticClass: "remove-container"
          }, [_vm.loading == false ? _c("a", {
            staticClass: "remove",
            on: {
              click: function click($event) {
                return _vm.removeFile(_vm.new_tour.TourInfo.files, index);
              }
            }
          }, [_vm._v("Отменить")]) : _vm._e()])]);
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "col-12 contact-btn form-button-group"
        }, [_c("button", {
          staticClass: "btn btn-block btn-lg",
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
        }, [_vm._v("Loading...")]) : _vm._e(), _vm._v("\n                                            Сохранить\n                                        ")])])])];
      }
    }])
  })], 1)])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v("Новый тур клиента")]), _vm._v(" "), _c("a", {
    staticStyle: {
      "text-decoration": "none"
    },
    attrs: {
      href: "javascript:;",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Закрыть")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=268e20e2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=268e20e2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "modal fade modalbox show",
    attrs: {
      id: "editUserTourModalBox",
      "data-backdrop": "static",
      tabindex: "-1",
      role: "dialog",
      "aria-modal": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "start-form",
    staticStyle: {
      "margin-bottom": "110px"
    }
  }, [_c("div", {
    staticClass: "section mx-auto"
  }, [_c("div", {
    staticClass: "row my-3"
  }, [_c("ValidationObserver", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_c("div", {
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
          staticClass: "row align-items-center justify-content-center mx-auto",
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
          staticClass: "row align-items-center justify-content-center m-auto",
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
          staticClass: "row align-items-center justify-content-center m-auto",
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
          staticClass: "row w-100 mx-auto mt-2"
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
        }), _vm._v(" "), _c("p", [_vm._v("\n                                                    Перетащите файл(ы) сюда"), _c("br"), _vm._v("или нажмите для поиска\n                                                ")])])])])]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
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
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("div", {
          staticClass: "file-listing"
        }, _vm._l(_vm.edit_tour.TourInfo.files, function (file, index) {
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
              audio: file
            }
          })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
            staticClass: "remove-container"
          }, [_vm.loading == false ? _c("a", {
            staticClass: "remove",
            on: {
              click: function click($event) {
                return _vm.deleteFile(file, index);
              }
            }
          }, [_vm._v("Удалить")]) : _vm._e()])]);
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("div", {
          staticClass: "file-listing"
        }, _vm._l(_vm.new_files, function (file, index) {
          return _c("div", {
            staticClass: "list-group-item"
          }, [file.type == "file" ? _c("div", {
            staticClass: "row m-auto w-100 align-items-center justify-content-center"
          }, [_c("div", {
            staticClass: "col-4 text-center"
          }, [_c("img", {
            ref: "preview" + parseInt(index),
            refInFor: true,
            staticClass: "preview"
          })]), _vm._v(" "), _c("div", {
            staticClass: "col-8"
          }, [_c("div", [_c("p", {
            staticClass: "control-label"
          }, [_vm._v(_vm._s(file.data.name))])])])]) : _vm._e(), _vm._v(" "), file.type == "audio" ? _c("div", {
            staticClass: "row m-auto w-100 align-items-center justify-content-center"
          }, [_c("div", {
            staticClass: "audio-container w-100"
          }, [_c("audio-player", {
            staticClass: "w-100",
            attrs: {
              audio: file
            }
          })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
            staticClass: "remove-container"
          }, [_vm.loading == false ? _c("a", {
            staticClass: "remove",
            on: {
              click: function click($event) {
                return _vm.removeFile(_vm.new_files, index);
              }
            }
          }, [_vm._v("Отменить")]) : _vm._e()])]);
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "col-12 contact-btn form-button-group"
        }, [_c("button", {
          staticClass: "btn btn-block btn-lg",
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
        }, [_vm._v("Loading...")]) : _vm._e(), _vm._v("\n                                            Сохранить\n                                        ")])])])];
      }
    }])
  })], 1)])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v("Редактировать тур клиента")]), _vm._v(" "), _c("a", {
    staticStyle: {
      "text-decoration": "none"
    },
    attrs: {
      href: "javascript:;",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Закрыть")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=template&id=262495ac&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=template&id=262495ac&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.tours != null || _vm.tours != undefined ? _c("div", {
    attrs: {
      id: "mobile-table"
    }
  }, [_c("create"), _vm._v(" "), _c("edit", {
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
          staticClass: "btn waves-effect",
          staticStyle: {
            outline: "none"
          },
          attrs: {
            "data-toggle": "modal",
            "data-target": "#editUserTourModalBox"
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
          }, [file.type == "file" ? _c("div", [_c("p", {
            staticClass: "control-label"
          }, [_vm._v(_vm._s(file.name))])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), file.type == "audio" ? _c("div", {
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
    }], null, false, 4126623548)
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal-dialog{\n    transform: none !important;\n}\n#client .modal-dialog{\n    max-width: 900px !important;\n}\n.modal-title{\n    color: #062348;\n    font-weight: 900;\n    font-family: \"Open Sans\";\n}\n.travel-card-description{\n    color: #062348;\n    font-size: 13px;\n    font-weight: 900;\n    font-family: \"Open Sans\";\n}\n.more-text {\n    font-family: \"Open Sans\";\n    text-transform: uppercase;\n    color: #f08b23;\n    font-weight: 600;\n    font-size: 16px;\n    cursor:pointer;\n}\n.more-button {\n    cursor:pointer;\n    margin: 0 10px;\n    right: 10px;\n}\n.more-button div {\n    width: 40px;\n    height: 40px;\n    display: block;\n    border-radius: 50px;\n    text-decoration: none;\n    font-size: 40px;\n    /*line-height: 50px;*/\n    color:  white;\n    background: #f08b23;\n    padding: 0px !important;\n}\n.travel-card {\n    border-radius: 20px;\n    background: white;\n    box-shadow: 0px 3px 15px #0000006b;\n    -moz-box-shadow: 0px 3px 15px #0000006b;\n    -webkit-box-shadow: 0px 3px 15px #0000006b;\n}\n.white--text {\n    color: #fff !important;\n    caret-color: #fff !important;\n}\n.active-tour {\n    background: #f08b23;\n    border-radius: 20px;\n    padding: 3px 20px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n    font-weight: 900;\n    text-transform: uppercase;\n    font-family: 'Open Sans';\n}\n/*.card label {*/\n/*    font-family: \"Open Sans\" !important;*/\n/*    font-weight: 900 !important;*/\n/*    font-size: 0.7500000025rem;*/\n/*}*/\n.control-label {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n    color: #344675;\n    font-size: 0.7500000025rem;\n}\n.white-content .form-control::-moz-placeholder {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.white-content .form-control::placeholder {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.white-content .form-control{\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n    color: #062348;\n}\n.white-content  .form-control {\n    border-color: #f08b23;\n    border-radius: 20px;\n}\n.v-card > :last-child:not(.v-btn):not(.v-chip) {\n    border-bottom-left-radius: inherit;\n    border-bottom-right-radius: inherit;\n}\n.v-card > :first-child:not(.v-btn):not(.v-chip), .v-card > .v-card__progress + :not(.v-btn):not(.v-chip) {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n}\n.v-card > :last-child:not(.v-btn):not(.v-chip) {\n    border-bottom-left-radius: inherit;\n    border-bottom-right-radius: inherit;\n}\n.v-card > .v-card__progress + :not(.v-btn):not(.v-chip), .v-card > :first-child:not(.v-btn):not(.v-chip) {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n}\n.v-responsive {\n    position: relative;\n    overflow: hidden;\n    flex: 1 0 auto;\n    max-width: 100%;\n    display: flex;\n}\n.v-image {\n    z-index: 0;\n}\n.v-card {\n    overflow-wrap: break-word;\n    white-space: normal;\n}\n.v-responsive__sizer {\n    background: #0d274b61;\n    transition: padding-bottom .2s cubic-bezier(.25,.8,.5,1);\n    flex: 1 0 0px;\n}\n.v-image__image--cover {\n    background-size: cover;\n}\n.v-image__image {\n    background-repeat: no-repeat;\n}\n.v-image__image, .v-image__placeholder {\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.v-responsive__sizer ~ .v-responsive__content {\n    margin-left: -100%;\n}\n.v-responsive__content {\n    flex: 1 0 0px;\n    max-width: 100%;\n}\n.elevation-24 {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.v-card__title {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: .0125em;\n    line-height: 2rem;\n    word-break: break-all;\n}\n.v-card__subtitle, .v-card__text, .v-card__title {\n    padding: 16px;\n}\n.v-card__subtitle {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n.v-card__subtitle h3{\n    font-weight: 900;\n    font-family: 'Open Sans';\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n@media only screen and (max-width:767.98px) {\n.vhd-container:not(.desktop) .vhd-picker {\n        width: 100% !important;\n        padding: 8px\n}\n.qty input {\n        border: 0;\n        width: 50%;\n}\n}\n@media screen and (max-width: 477px) {\n.vhd-input {\n        min-width: 100% !important;\n}\n.vhd-container {\n        width: 100% !important;\n}\n}\n#client .vhd-picker {\n    z-index: 3 !important;\n    min-height: 362px!important;\n    padding: 18px!important;\n}\n#client .vhd-container{\n    width: 100% !important;\n}\n#client .vhd-input {\n    min-width: 100px;\n    padding: 8px;\n    border: 1px solid #f08b23 !important;\n    color: #062348!important;\n    font-size: 16px;\n    line-height: 32px;\n    outline: none;\n    border-radius: 20px;\n    min-height: 40px;\n    height: 40px !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n    width: 100%;\n}\n.vhd-input::-moz-placeholder {\n    color: #062348 !important;\n}\n.vhd-input::placeholder {\n    color: #062348 !important;\n}\n.vhd-container:not(.desktop) .vhd-picker {\n    min-height: 362px;\n}\n.vhd-calendar .calendar-date .week .day[data-v-0cb4ff92] {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 30px;\n    color: #505050;\n    text-align: center;\n    cursor: pointer;\n}\n.vhd-calendar .calendar-date .week .day{\n    background-image: none!important;\n    height: 30px !important;\n}\n.vhd-calendar-header {\n    height: 20px!important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header {\n    height:60px !important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header>.info {\n    display:block;\n    width:100%;\n    height:60px;\n    padding-top:32px!important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-footer {\n    height: 36px !important;\n}\n.vhd-calendar-footer {\n    height: 24px!important;\n}\n.vhd-calendar .calendar-date .week {\n    height: 30px !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date::before {\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date::after{\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.in-date-range {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.today {\n    border: 1px solid #ffa500 !important;\n}\n.vhd-calendar-footer .confirm, .vhd-calendar-footer .reset {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.vhd-calendar-footer .reset {\n    color: #062348!important;\n}\n.vhd-calendar-footer .confirm{\n    color: #ffa500 !important;\n}\n.vhd-calendar .calendar-week-item,  .vhd-calendar .calendar-month-title{\n    color: #062348!important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.values__hotel-rating::after{\n    content: '';\n    display: inline-block;\n    margin-left: 2px;\n    width: 13px;\n    height: 12px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.multiselect__option.multiselect__option--group.multiselect__option--disabled{\n    text-align: center;\n    background: white !important;\n    color:#f08b23 !important;\n}\n.multiselect__tags .price{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .price:focus{\n    outline: none!important;\n    box-shadow: none !important;\n}\n.multiselect-title {\n    color: #062348 !important;\n    font-family: \"Open Sans\";\n    font-weight: 600;\n    font-size: 1rem;\n}\n#client-profile .multiselect{\n    min-height: 38px;\n}\n#client-profile .multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 0.7500000025rem;\n    min-height: 38px;\n    line-height: 1.428571 !important;\n}\n#client .multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tag {\n    background: #062348;\n}\n.multiselect__tag-icon::after {\n    color:#fff;\n}\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n    background: #f08b23;\n}\n.multiselect__option--selected.multiselect__option--highlight::after {\n    background: #ff6a6a00;\n    content: attr(data-deselect);\n    color: #fff;\n}\n.multiselect__option--highlight::after {\n    background: #f08b2300;\n}\n.multiselect__option--highlight{\n    background: #f08b23;\n}\n.multiselect__option {\n    white-space: break-spaces !important;\n}\n.multiselect{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n}\n.multiselect__placeholder {\n    color: #062348;\n}\n.multiselect__input:focus, .multiselect__single:focus {\n    border-color: #062348;\n}\n#client-profile .multiselect__input::-moz-placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n    font-size: 0.7500000025rem !important;\n    line-height: 1.428571 !important;\n}\n#client-profile .multiselect__input::placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n    font-size: 0.7500000025rem !important;\n    line-height: 1.428571 !important;\n}\n.multiselect--disabled {\n    background: white;\n}\n.multiselect--disabled .multiselect__select {\n    background: transparent;\n}\n.multiselect__spinner::after, .multiselect__spinner::before {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border: 3px solid transparent;\n    border-top-color: transparent;\n    border-top-color: #ffa500;\n    box-shadow: 0 0 0 1px transparent;\n    background: transparent;\n}\n.multiselect__spinner{\n    border-radius: 50px;\n}\n.qty .count {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 30px;\n    padding: 0 2px;\n    min-width: 35px;\n    text-align: center;\n    font-family: \"Open Sans\";\n    color: #0f213d!important;\n}\n#client .qty button{\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: top;\n    color: white;\n    width: 20px;\n    height: 20px;\n    font: 20px/1 Arial,sans-serif;\n    text-align: center;\n    border-radius: 50%;\n    padding: 0;\n    background: #f08b23;\n}\n.qty div {\n    text-align: center;\n}\n.qty .minus:hover{\n    background: #0f213d!important;\n    color: white;\n}\n.qty .plus:hover{\n    background: #0f213d !important;\n    color: white;\n}\n#client .qty input{\n    border: 0;\n    width: 50%;\n}\n.qty input::-webkit-outer-spin-button,\n.qty input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.qty input:disabled{\n    background-color:white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.section[data-v-137afc95] {\n    padding: 0 16px;\n}\n.modalbox[data-v-137afc95] {\n    padding-top: env(safe-area-inset-top);\n    overflow: hidden;\n}\n.modalbox .modal-dialog[data-v-137afc95] {\n    transform: translate(0, 100%) !important;\n    min-width: 100%;\n    margin: 0;\n    transition: 0.5s all !important;\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin-top: env(safe-area-inset-top);\n}\n.modalbox .modal-dialog .modal-content[data-v-137afc95] {\n    border-radius: 0;\n    border: 0;\n    margin: auto;\n    overflow: hidden;\n    padding-top: 56px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n}\n.modalbox .modal-dialog .modal-content .modal-header[data-v-137afc95] {\n    border: 0;\n    padding: 0;\n    min-height: 56px;\n    padding: 10px 16px;\n    border-radius: 0;\n    display: flex;\n    border-bottom: 1px solid #E1E1E1;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n    background: #FFF;\n}\n.modalbox .modal-dialog .modal-content .modal-header .modal-title[data-v-137afc95] {\n    margin: 0;\n    color: #063065;\n    font-size: 17px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n}\n.modalbox .modal-dialog .modal-content .modal-header a[data-v-137afc95]{\n    color: #063065;\n}\n.modalbox .modal-dialog .modal-content .modal-body[data-v-137afc95] {\n    padding: 20px 16px;\n    overflow: auto;\n}\n.modalbox.show .modal-dialog[data-v-137afc95] {\n    transform: translate(0, 0) !important;\n}\n.form-group[data-v-137afc95] {\n    width: 100%;\n}\n.form-group .label[data-v-137afc95] {\n    font-size: 12px;\n    margin: 0;\n    font-weight: 900;\n    color: #063065;\n    display: block;\n    line-height: 1.2em;\n    text-align: left;\n    font-family: Open Sans;\n}\n.form-group textarea[data-v-137afc95] {\n    resize: none;\n}\n.form-group .input-info[data-v-137afc95] {\n    font-size: 11px;\n    color: #A1A1A2;\n}\n.form-group .clear-input[data-v-137afc95] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #4F5050;\n    height: 38px;\n    font-size: 22px;\n    position: absolute;\n    right: 6px;\n    top: 0px;\n    bottom: 0;\n    width: 32px;\n    opacity: 0.5;\n}\n.form-group .clear-input[data-v-137afc95]:hover, .form-group .clear-input[data-v-137afc95]:active {\n    opacity: 0.8;\n}\n.form-group .input-wrapper[data-v-137afc95] {\n    position: relative;\n}\n.form-group .input-wrapper.not-empty .clear-input[data-v-137afc95] {\n    display: flex;\n}\n.form-group .input-wrapper.active .label[data-v-137afc95] {\n    color: #f08b23 !important;\n}\n.form-group.basic[data-v-137afc95] {\n    padding: 8px 0;\n    margin: 0;\n}\n.form-group.basic .form-control[data-v-137afc95],\n.form-group.basic .custom-select[data-v-137afc95] {\n    background: transparent;\n    border: none;\n    border-bottom: 1px solid #E1E1E1;\n    padding: 0 30px 0 0;\n    border-radius: 0;\n    height: 40px;\n    color: #141515;\n    font-size: 15px;\n}\n.form-group.basic .form-control[data-v-137afc95]:focus,\n.form-group.basic .custom-select[data-v-137afc95]:focus {\n    border-bottom-color: #f08b23;\n    box-shadow: inset 0 -1px 0 0 #f08b23;\n}\n.form-group.basic textarea.form-control[data-v-137afc95] {\n    height: auto;\n    padding: 7px 40px 7px 0;\n}\n.form-group.basic.animated .label[data-v-137afc95] {\n    margin-top: 20px;\n    opacity: 0;\n    top: -3px;\n    transition: 0.2s all;\n    position: absolute;\n}\n.form-group.basic.animated .input-wrapper[data-v-137afc95] {\n    padding-top: 5px;\n}\n.form-group.basic.animated .input-wrapper.not-empty .label[data-v-137afc95] {\n    margin-top: 0;\n    opacity: 1;\n}\n.form-button-group[data-v-137afc95] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    padding-left: 16px;\n    padding-right: 16px;\n    background: #FFF;\n    min-height: 84px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: env(safe-area-inset-bottom);\n}\n.form-button-group .btn[data-v-137afc95] {\n    background: #f08b23;\n    color: white;\n    text-transform: uppercase;\n    font-size: 24px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    border: 0;\n    border-radius: 50px;\n    outline: none;\n}\nform-button-group .btn[data-v-137afc95]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\ninput[type=\"file\"][data-v-137afc95]{\n    opacity: 0;\n    width: 100%;\n    height: 200px;\n    position: absolute;\n    cursor: pointer;\n}\n.filezone[data-v-137afc95] {\n    outline: 2px dashed grey;\n    outline-offset: -10px;\n    background: #ccc;\n    color: dimgray;\n    padding: 10px 10px;\n    min-height: 200px;\n    position: relative;\n    cursor: pointer;\n}\n.filezone[data-v-137afc95]:hover {\n    background: #c0c0c0;\n}\n.filezone p[data-v-137afc95] {\n    font-size: 1.2em;\n    text-align: center;\n    padding: 50px 50px 50px 50px;\n}\ndiv.file-listing img[data-v-137afc95]{\n    max-width: 90%;\n}\ndiv.file-listing[data-v-137afc95]{\n    margin: auto;\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n}\ndiv.file-listing img[data-v-137afc95]{\n    height: 100px;\n}\n.preview[data-v-137afc95]{\n    height: 100px;\n    max-width: 90%;\n}\ndiv.success-container[data-v-137afc95]{\n    text-align: center;\n    color: green;\n}\ndiv.remove-container[data-v-137afc95]{\n    text-align: center;\n}\ndiv.remove-container a[data-v-137afc95]{\n    color: red;\n    cursor: pointer;\n}\na.submit-button[data-v-137afc95]{\n    display: block;\n    margin: auto;\n    text-align: center;\n    width: 200px;\n    padding: 10px;\n    text-transform: uppercase;\n    background-color: green;\n    color: white;\n    font-weight: bold;\n    margin-top: 20px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.start-form[data-v-4f058a58] {\n    max-width: 500px;\n    margin: auto;\n    margin-top: auto;\n    /*text-align: center;*/\n}\n.section[data-v-4f058a58] {\n    padding: 0 16px;\n}\n.modalbox[data-v-4f058a58] {\n    padding-top: env(safe-area-inset-top);\n    overflow: hidden;\n}\n.modalbox .modal-dialog[data-v-4f058a58] {\n    transform: translate(0, 100%) !important;\n    min-width: 100%;\n    margin: 0;\n    transition: 0.5s all !important;\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin-top: env(safe-area-inset-top);\n}\n.modalbox .modal-dialog .modal-content[data-v-4f058a58] {\n    border-radius: 0;\n    border: 0;\n    margin: auto;\n    overflow: hidden;\n    padding-top: 56px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n}\n.modalbox .modal-dialog .modal-content .modal-header[data-v-4f058a58] {\n    border: 0;\n    padding: 0;\n    min-height: 56px;\n    padding: 10px 16px;\n    border-radius: 0;\n    display: flex;\n    border-bottom: 1px solid #E1E1E1;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n    background: #FFF;\n}\n.modalbox .modal-dialog .modal-content .modal-header .modal-title[data-v-4f058a58] {\n    margin: 0;\n    color: #063065;\n    font-size: 17px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n}\n.modalbox .modal-dialog .modal-content .modal-header a[data-v-4f058a58]{\n    color: #063065;\n}\n.modalbox .modal-dialog .modal-content .modal-body[data-v-4f058a58] {\n    padding: 20px 16px;\n    overflow: auto;\n}\n.modalbox.show .modal-dialog[data-v-4f058a58] {\n    transform: translate(0, 0) !important;\n}\n.form-group[data-v-4f058a58] {\n    width: 100%;\n}\n.form-group .label[data-v-4f058a58] {\n    font-size: 12px;\n    margin: 0;\n    font-weight: 900;\n    color: #063065;\n    display: block;\n    line-height: 1.2em;\n    text-align: left;\n    font-family: Open Sans;\n}\n.form-group textarea[data-v-4f058a58] {\n    resize: none;\n}\n.form-group .input-info[data-v-4f058a58] {\n    font-size: 11px;\n    color: #A1A1A2;\n}\n.form-group .clear-input[data-v-4f058a58] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #4F5050;\n    height: 38px;\n    font-size: 22px;\n    position: absolute;\n    right: 6px;\n    top: 0px;\n    bottom: 0;\n    width: 32px;\n    opacity: 0.5;\n}\n.form-group .clear-input[data-v-4f058a58]:hover, .form-group .clear-input[data-v-4f058a58]:active {\n    opacity: 0.8;\n}\n.form-group .input-wrapper[data-v-4f058a58] {\n    position: relative;\n}\n.form-group .input-wrapper.not-empty .clear-input[data-v-4f058a58] {\n    display: flex;\n}\n.form-group .input-wrapper.active .label[data-v-4f058a58] {\n    color: #f08b23 !important;\n}\n.form-group.basic[data-v-4f058a58] {\n    padding: 8px 0;\n    margin: 0;\n}\n.form-group.basic .form-control[data-v-4f058a58],\n.form-group.basic .custom-select[data-v-4f058a58] {\n    background: transparent;\n    border: none;\n    border-bottom: 1px solid #E1E1E1;\n    padding: 0 30px 0 0;\n    border-radius: 0;\n    height: 40px;\n    color: #141515;\n    font-size: 15px;\n}\n.form-group.basic .form-control[data-v-4f058a58]:focus,\n.form-group.basic .custom-select[data-v-4f058a58]:focus {\n    border-bottom-color: #f08b23;\n    box-shadow: inset 0 -1px 0 0 #f08b23;\n}\n.form-group.basic textarea.form-control[data-v-4f058a58] {\n    height: auto;\n    padding: 7px 40px 7px 0;\n}\n.form-group.basic.animated .label[data-v-4f058a58] {\n    margin-top: 20px;\n    opacity: 0;\n    top: -3px;\n    transition: 0.2s all;\n    position: absolute;\n}\n.form-group.basic.animated .input-wrapper[data-v-4f058a58] {\n    padding-top: 5px;\n}\n.form-group.basic.animated .input-wrapper.not-empty .label[data-v-4f058a58] {\n    margin-top: 0;\n    opacity: 1;\n}\n.form-button-group[data-v-4f058a58] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    padding-left: 16px;\n    padding-right: 16px;\n    background: #FFF;\n    min-height: 84px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: env(safe-area-inset-bottom);\n}\n.form-button-group .btn[data-v-4f058a58] {\n    background: #f08b23;\n    color: white;\n    text-transform: uppercase;\n    font-size: 24px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    border: 0;\n    border-radius: 50px;\n    outline: none;\n}\nform-button-group .btn[data-v-4f058a58]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.btn.btn-primary[data-v-4f058a58] {\n    color: #fff !important;\n    background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);\n    background-color: rgba(0, 0, 0, 0);\n    background-color: #f08b23 !important;\n    border-color: #f08b23 !important;\n    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.start-form[data-v-268e20e2] {\n    max-width: 500px;\n    margin: auto;\n    margin-top: auto;\n    /*text-align: center;*/\n}\n.section[data-v-268e20e2] {\n    padding: 0 16px;\n}\n.modalbox[data-v-268e20e2] {\n    padding-top: env(safe-area-inset-top);\n    overflow: hidden;\n}\n.modalbox .modal-dialog[data-v-268e20e2] {\n    transform: translate(0, 100%) !important;\n    min-width: 100%;\n    margin: 0;\n    transition: 0.5s all !important;\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin-top: env(safe-area-inset-top);\n}\n.modalbox .modal-dialog .modal-content[data-v-268e20e2] {\n    border-radius: 0;\n    border: 0;\n    margin: auto;\n    overflow: hidden;\n    padding-top: 56px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n}\n.modalbox .modal-dialog .modal-content .modal-header[data-v-268e20e2] {\n    border: 0;\n    padding: 0;\n    min-height: 56px;\n    padding: 10px 16px;\n    border-radius: 0;\n    display: flex;\n    border-bottom: 1px solid #E1E1E1;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n    background: #FFF;\n}\n.modalbox .modal-dialog .modal-content .modal-header .modal-title[data-v-268e20e2] {\n    margin: 0;\n    color: #063065;\n    font-size: 17px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n}\n.modalbox .modal-dialog .modal-content .modal-header a[data-v-268e20e2]{\n    color: #063065;\n}\n.modalbox .modal-dialog .modal-content .modal-body[data-v-268e20e2] {\n    padding: 20px 16px;\n    overflow: auto;\n}\n.modalbox.show .modal-dialog[data-v-268e20e2] {\n    transform: translate(0, 0) !important;\n}\n.form-group[data-v-268e20e2] {\n    width: 100%;\n}\n.form-group .label[data-v-268e20e2] {\n    font-size: 12px;\n    margin: 0;\n    font-weight: 900;\n    color: #063065;\n    display: block;\n    line-height: 1.2em;\n    text-align: left;\n    font-family: Open Sans;\n}\n.form-group textarea[data-v-268e20e2] {\n    resize: none;\n}\n.form-group .input-info[data-v-268e20e2] {\n    font-size: 11px;\n    color: #A1A1A2;\n}\n.form-group .clear-input[data-v-268e20e2] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #4F5050;\n    height: 38px;\n    font-size: 22px;\n    position: absolute;\n    right: 6px;\n    top: 0px;\n    bottom: 0;\n    width: 32px;\n    opacity: 0.5;\n}\n.form-group .clear-input[data-v-268e20e2]:hover, .form-group .clear-input[data-v-268e20e2]:active {\n    opacity: 0.8;\n}\n.form-group .input-wrapper[data-v-268e20e2] {\n    position: relative;\n}\n.form-group .input-wrapper.not-empty .clear-input[data-v-268e20e2] {\n    display: flex;\n}\n.form-group .input-wrapper.active .label[data-v-268e20e2] {\n    color: #f08b23 !important;\n}\n.form-group.basic[data-v-268e20e2] {\n    padding: 8px 0;\n    margin: 0;\n}\n.form-group.basic .form-control[data-v-268e20e2],\n.form-group.basic .custom-select[data-v-268e20e2] {\n    background: transparent;\n    border: none;\n    border-bottom: 1px solid #E1E1E1;\n    padding: 0 30px 0 0;\n    border-radius: 0;\n    height: 40px;\n    color: #141515;\n    font-size: 15px;\n}\n.form-group.basic .form-control[data-v-268e20e2]:focus,\n.form-group.basic .custom-select[data-v-268e20e2]:focus {\n    border-bottom-color: #f08b23;\n    box-shadow: inset 0 -1px 0 0 #f08b23;\n}\n.form-group.basic textarea.form-control[data-v-268e20e2] {\n    height: auto;\n    padding: 7px 40px 7px 0;\n}\n.form-group.basic.animated .label[data-v-268e20e2] {\n    margin-top: 20px;\n    opacity: 0;\n    top: -3px;\n    transition: 0.2s all;\n    position: absolute;\n}\n.form-group.basic.animated .input-wrapper[data-v-268e20e2] {\n    padding-top: 5px;\n}\n.form-group.basic.animated .input-wrapper.not-empty .label[data-v-268e20e2] {\n    margin-top: 0;\n    opacity: 1;\n}\n.form-button-group[data-v-268e20e2] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    padding-left: 16px;\n    padding-right: 16px;\n    background: #FFF;\n    min-height: 84px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: env(safe-area-inset-bottom);\n}\n.form-button-group .btn[data-v-268e20e2] {\n    background: #f08b23;\n    color: white;\n    text-transform: uppercase;\n    font-size: 24px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    border: 0;\n    border-radius: 50px;\n    outline: none;\n}\nform-button-group .btn[data-v-268e20e2]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.btn.btn-primary[data-v-268e20e2] {\n    color: #fff !important;\n    background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);\n    background-color: rgba(0, 0, 0, 0);\n    background-color: #f08b23 !important;\n    border-color: #f08b23 !important;\n    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./resources/sass/desktop/black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./resources/sass/desktop/black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*     brand Colors              */\n/* navbar color */\n.img-fluid[data-v-137afc95] {\n  max-width: 100%;\n  height: auto;\n}\n.img-thumbnail[data-v-137afc95] {\n  padding: 0.25rem;\n  background-color: #1e1e2f;\n  border: 0.0625rem solid #e3e3e3;\n  border-radius: 0.25rem;\n  box-shadow: 0 1px 2px rgba(34, 42, 66, 0.075);\n  max-width: 100%;\n  height: auto;\n}\n.figure[data-v-137afc95] {\n  display: inline-block;\n}\n.figure-img[data-v-137afc95] {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.figure-caption[data-v-137afc95] {\n  font-size: 90%;\n  color: #6c757d;\n}\n.form-control[data-v-137afc95] {\n  display: block;\n  width: 100%;\n  height: calc(2.249999625rem + 2px);\n  padding: 0.5rem 0.7rem;\n  font-size: 0.875rem;\n  line-height: 1.428571;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: transparent;\n  background-clip: padding-box;\n  border: 1px solid #cad1d7;\n  border-radius: 0.25rem;\n  box-shadow: none;\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.form-control[data-v-137afc95] {\n    transition: none;\n}\n}\n.form-control[data-v-137afc95]::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control[data-v-137afc95]:focus {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #ffffff;\n  border-color: rgba(50, 151, 211, 0.25);\n  outline: 0;\n  box-shadow: none, none;\n}\n.form-control[data-v-137afc95]::-moz-placeholder {\n  color: #adb5bd;\n  opacity: 1;\n}\n.form-control[data-v-137afc95]::placeholder {\n  color: #adb5bd;\n  opacity: 1;\n}\n.form-control[data-v-137afc95]:disabled, .form-control[readonly][data-v-137afc95] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\nselect.form-control[data-v-137afc95]:focus::-ms-value {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: transparent;\n}\n.form-control-file[data-v-137afc95],\n.form-control-range[data-v-137afc95] {\n  display: block;\n  width: 100%;\n}\n.col-form-label[data-v-137afc95] {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n.col-form-label-lg[data-v-137afc95] {\n  padding-top: calc(0.875rem + 1px);\n  padding-bottom: calc(0.875rem + 1px);\n  font-size: 0.99925rem;\n  line-height: 1.35;\n}\n.col-form-label-sm[data-v-137afc95] {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.7500000025rem;\n  line-height: 1.35;\n}\n.form-control-plaintext[data-v-137afc95] {\n  display: block;\n  width: 100%;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0;\n  line-height: 1.428571;\n  color: #525f7f;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm[data-v-137afc95], .form-control-plaintext.form-control-lg[data-v-137afc95] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.form-control-sm[data-v-137afc95] {\n  height: calc(1.5125000034rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.7500000025rem;\n  line-height: 1.35;\n  border-radius: 0.2857rem;\n}\n.form-control-lg[data-v-137afc95] {\n  height: calc(3.0989875rem + 2px);\n  padding: 0.875rem 1rem;\n  font-size: 0.99925rem;\n  line-height: 1.35;\n  border-radius: 0.4285rem;\n}\nselect.form-control[size][data-v-137afc95], select.form-control[multiple][data-v-137afc95] {\n  height: auto;\n}\ntextarea.form-control[data-v-137afc95] {\n  height: auto;\n}\n.form-group[data-v-137afc95] {\n  margin-bottom: 1rem;\n}\n.form-text[data-v-137afc95] {\n  display: block;\n  margin-top: 0.25rem;\n}\n.form-row[data-v-137afc95] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n.form-row > .col[data-v-137afc95],\n.form-row > [class*=col-][data-v-137afc95] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.form-check[data-v-137afc95] {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n.form-check-input[data-v-137afc95] {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n.form-check-input:disabled ~ .form-check-label[data-v-137afc95] {\n  color: #6c757d;\n}\n.form-check-label[data-v-137afc95] {\n  margin-bottom: 0;\n}\n.form-check-inline[data-v-137afc95] {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n.form-check-inline .form-check-input[data-v-137afc95] {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n.valid-feedback[data-v-137afc95] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #00f2c3;\n}\n.valid-tooltip[data-v-137afc95] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.7500000025rem;\n  line-height: 1.5;\n  color: #ffffff;\n  background-color: rgba(0, 242, 195, 0.9);\n  border-radius: 0.25rem;\n}\n.was-validated .form-control[data-v-137afc95]:valid, .form-control.is-valid[data-v-137afc95],\n.was-validated .custom-select[data-v-137afc95]:valid,\n.custom-select.is-valid[data-v-137afc95] {\n  border-color: #00f2c3;\n}\n.was-validated .form-control[data-v-137afc95]:valid:focus, .form-control.is-valid[data-v-137afc95]:focus,\n.was-validated .custom-select[data-v-137afc95]:valid:focus,\n.custom-select.is-valid[data-v-137afc95]:focus {\n  border-color: #00f2c3;\n  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.25);\n}\n.was-validated .form-control:valid ~ .valid-feedback[data-v-137afc95],\n.was-validated .form-control:valid ~ .valid-tooltip[data-v-137afc95], .form-control.is-valid ~ .valid-feedback[data-v-137afc95],\n.form-control.is-valid ~ .valid-tooltip[data-v-137afc95],\n.was-validated .custom-select:valid ~ .valid-feedback[data-v-137afc95],\n.was-validated .custom-select:valid ~ .valid-tooltip[data-v-137afc95],\n.custom-select.is-valid ~ .valid-feedback[data-v-137afc95],\n.custom-select.is-valid ~ .valid-tooltip[data-v-137afc95] {\n  display: block;\n}\n.was-validated .form-control-file:valid ~ .valid-feedback[data-v-137afc95],\n.was-validated .form-control-file:valid ~ .valid-tooltip[data-v-137afc95], .form-control-file.is-valid ~ .valid-feedback[data-v-137afc95],\n.form-control-file.is-valid ~ .valid-tooltip[data-v-137afc95] {\n  display: block;\n}\n.was-validated .form-check-input:valid ~ .form-check-label[data-v-137afc95], .form-check-input.is-valid ~ .form-check-label[data-v-137afc95] {\n  color: #00f2c3;\n}\n.was-validated .form-check-input:valid ~ .valid-feedback[data-v-137afc95],\n.was-validated .form-check-input:valid ~ .valid-tooltip[data-v-137afc95], .form-check-input.is-valid ~ .valid-feedback[data-v-137afc95],\n.form-check-input.is-valid ~ .valid-tooltip[data-v-137afc95] {\n  display: block;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label[data-v-137afc95], .custom-control-input.is-valid ~ .custom-control-label[data-v-137afc95] {\n  color: #00f2c3;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label[data-v-137afc95]::before, .custom-control-input.is-valid ~ .custom-control-label[data-v-137afc95]::before {\n  background-color: #73ffe4;\n}\n.was-validated .custom-control-input:valid ~ .valid-feedback[data-v-137afc95],\n.was-validated .custom-control-input:valid ~ .valid-tooltip[data-v-137afc95], .custom-control-input.is-valid ~ .valid-feedback[data-v-137afc95],\n.custom-control-input.is-valid ~ .valid-tooltip[data-v-137afc95] {\n  display: block;\n}\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label[data-v-137afc95]::before, .custom-control-input.is-valid:checked ~ .custom-control-label[data-v-137afc95]::before {\n  background-color: #26ffd5;\n}\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label[data-v-137afc95]::before, .custom-control-input.is-valid:focus ~ .custom-control-label[data-v-137afc95]::before {\n  box-shadow: 0 0 0 1px #1e1e2f, 0 0 0 0 rgba(0, 242, 195, 0.25);\n}\n.was-validated .custom-file-input:valid ~ .custom-file-label[data-v-137afc95], .custom-file-input.is-valid ~ .custom-file-label[data-v-137afc95] {\n  border-color: #00f2c3;\n}\n.was-validated .custom-file-input:valid ~ .custom-file-label[data-v-137afc95]::after, .custom-file-input.is-valid ~ .custom-file-label[data-v-137afc95]::after {\n  border-color: inherit;\n}\n.was-validated .custom-file-input:valid ~ .valid-feedback[data-v-137afc95],\n.was-validated .custom-file-input:valid ~ .valid-tooltip[data-v-137afc95], .custom-file-input.is-valid ~ .valid-feedback[data-v-137afc95],\n.custom-file-input.is-valid ~ .valid-tooltip[data-v-137afc95] {\n  display: block;\n}\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label[data-v-137afc95], .custom-file-input.is-valid:focus ~ .custom-file-label[data-v-137afc95] {\n  box-shadow: 0 0 0 0 rgba(0, 242, 195, 0.25);\n}\n.invalid-feedback[data-v-137afc95] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff8d72;\n}\n.invalid-tooltip[data-v-137afc95] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.7500000025rem;\n  line-height: 1.5;\n  color: #ffffff;\n  background-color: rgba(255, 141, 114, 0.9);\n  border-radius: 0.25rem;\n}\n.was-validated .form-control[data-v-137afc95]:invalid, .form-control.is-invalid[data-v-137afc95],\n.was-validated .custom-select[data-v-137afc95]:invalid,\n.custom-select.is-invalid[data-v-137afc95] {\n  border-color: #ff8d72;\n}\n.was-validated .form-control[data-v-137afc95]:invalid:focus, .form-control.is-invalid[data-v-137afc95]:focus,\n.was-validated .custom-select[data-v-137afc95]:invalid:focus,\n.custom-select.is-invalid[data-v-137afc95]:focus {\n  border-color: #ff8d72;\n  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.25);\n}\n.was-validated .form-control:invalid ~ .invalid-feedback[data-v-137afc95],\n.was-validated .form-control:invalid ~ .invalid-tooltip[data-v-137afc95], .form-control.is-invalid ~ .invalid-feedback[data-v-137afc95],\n.form-control.is-invalid ~ .invalid-tooltip[data-v-137afc95],\n.was-validated .custom-select:invalid ~ .invalid-feedback[data-v-137afc95],\n.was-validated .custom-select:invalid ~ .invalid-tooltip[data-v-137afc95],\n.custom-select.is-invalid ~ .invalid-feedback[data-v-137afc95],\n.custom-select.is-invalid ~ .invalid-tooltip[data-v-137afc95] {\n  display: block;\n}\n.was-validated .form-control-file:invalid ~ .invalid-feedback[data-v-137afc95],\n.was-validated .form-control-file:invalid ~ .invalid-tooltip[data-v-137afc95], .form-control-file.is-invalid ~ .invalid-feedback[data-v-137afc95],\n.form-control-file.is-invalid ~ .invalid-tooltip[data-v-137afc95] {\n  display: block;\n}\n.was-validated .form-check-input:invalid ~ .form-check-label[data-v-137afc95], .form-check-input.is-invalid ~ .form-check-label[data-v-137afc95] {\n  color: #ff8d72;\n}\n.was-validated .form-check-input:invalid ~ .invalid-feedback[data-v-137afc95],\n.was-validated .form-check-input:invalid ~ .invalid-tooltip[data-v-137afc95], .form-check-input.is-invalid ~ .invalid-feedback[data-v-137afc95],\n.form-check-input.is-invalid ~ .invalid-tooltip[data-v-137afc95] {\n  display: block;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label[data-v-137afc95], .custom-control-input.is-invalid ~ .custom-control-label[data-v-137afc95] {\n  color: #ff8d72;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label[data-v-137afc95]::before, .custom-control-input.is-invalid ~ .custom-control-label[data-v-137afc95]::before {\n  background-color: #fff4f2;\n}\n.was-validated .custom-control-input:invalid ~ .invalid-feedback[data-v-137afc95],\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip[data-v-137afc95], .custom-control-input.is-invalid ~ .invalid-feedback[data-v-137afc95],\n.custom-control-input.is-invalid ~ .invalid-tooltip[data-v-137afc95] {\n  display: block;\n}\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label[data-v-137afc95]::before, .custom-control-input.is-invalid:checked ~ .custom-control-label[data-v-137afc95]::before {\n  background-color: #ffb6a5;\n}\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label[data-v-137afc95]::before, .custom-control-input.is-invalid:focus ~ .custom-control-label[data-v-137afc95]::before {\n  box-shadow: 0 0 0 1px #1e1e2f, 0 0 0 0 rgba(255, 141, 114, 0.25);\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-label[data-v-137afc95], .custom-file-input.is-invalid ~ .custom-file-label[data-v-137afc95] {\n  border-color: #ff8d72;\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-label[data-v-137afc95]::after, .custom-file-input.is-invalid ~ .custom-file-label[data-v-137afc95]::after {\n  border-color: inherit;\n}\n.was-validated .custom-file-input:invalid ~ .invalid-feedback[data-v-137afc95],\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip[data-v-137afc95], .custom-file-input.is-invalid ~ .invalid-feedback[data-v-137afc95],\n.custom-file-input.is-invalid ~ .invalid-tooltip[data-v-137afc95] {\n  display: block;\n}\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label[data-v-137afc95], .custom-file-input.is-invalid:focus ~ .custom-file-label[data-v-137afc95] {\n  box-shadow: 0 0 0 0 rgba(255, 141, 114, 0.25);\n}\n.form-inline[data-v-137afc95] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n.form-inline .form-check[data-v-137afc95] {\n  width: 100%;\n}\n@media (min-width: 576px) {\n.form-inline label[data-v-137afc95] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n}\n.form-inline .form-group[data-v-137afc95] {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0;\n}\n.form-inline .form-control[data-v-137afc95] {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n}\n.form-inline .form-control-plaintext[data-v-137afc95] {\n    display: inline-block;\n}\n.form-inline .input-group[data-v-137afc95],\n  .form-inline .custom-select[data-v-137afc95] {\n    width: auto;\n}\n.form-inline .form-check[data-v-137afc95] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n}\n.form-inline .form-check-input[data-v-137afc95] {\n    position: relative;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n}\n.form-inline .custom-control[data-v-137afc95] {\n    align-items: center;\n    justify-content: center;\n}\n.form-inline .custom-control-label[data-v-137afc95] {\n    margin-bottom: 0;\n}\n}\n.fade[data-v-137afc95] {\n  transition: opacity 0.15s linear;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.fade[data-v-137afc95] {\n    transition: none;\n}\n}\n.fade[data-v-137afc95]:not(.show) {\n  opacity: 0;\n}\n.collapse[data-v-137afc95]:not(.show) {\n  display: none;\n}\n.collapsing[data-v-137afc95] {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.collapsing[data-v-137afc95] {\n    transition: none;\n}\n}\n.btn-group[data-v-137afc95],\n.btn-group-vertical[data-v-137afc95] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn[data-v-137afc95],\n.btn-group-vertical > .btn[data-v-137afc95] {\n  position: relative;\n  flex: 0 1 auto;\n}\n.btn-group > .btn[data-v-137afc95]:hover,\n.btn-group-vertical > .btn[data-v-137afc95]:hover {\n  z-index: 1;\n}\n.btn-group > .btn[data-v-137afc95]:focus, .btn-group > .btn[data-v-137afc95]:active, .btn-group > .btn.active[data-v-137afc95],\n.btn-group-vertical > .btn[data-v-137afc95]:focus,\n.btn-group-vertical > .btn[data-v-137afc95]:active,\n.btn-group-vertical > .btn.active[data-v-137afc95] {\n  z-index: 1;\n}\n.btn-group .btn + .btn[data-v-137afc95],\n.btn-group .btn + .btn-group[data-v-137afc95],\n.btn-group .btn-group + .btn[data-v-137afc95],\n.btn-group .btn-group + .btn-group[data-v-137afc95],\n.btn-group-vertical .btn + .btn[data-v-137afc95],\n.btn-group-vertical .btn + .btn-group[data-v-137afc95],\n.btn-group-vertical .btn-group + .btn[data-v-137afc95],\n.btn-group-vertical .btn-group + .btn-group[data-v-137afc95] {\n  margin-left: -1px;\n}\n.btn-toolbar[data-v-137afc95] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.btn-toolbar .input-group[data-v-137afc95] {\n  width: auto;\n}\n.btn-group > .btn[data-v-137afc95]:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn[data-v-137afc95]:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn[data-v-137afc95] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn[data-v-137afc95]:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn[data-v-137afc95] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.dropdown-toggle-split[data-v-137afc95] {\n  padding-right: 30px;\n  padding-left: 30px;\n}\n.dropdown-toggle-split[data-v-137afc95]::after, .dropup .dropdown-toggle-split[data-v-137afc95]::after, .dropright .dropdown-toggle-split[data-v-137afc95]::after {\n  margin-left: 0;\n}\n.dropleft .dropdown-toggle-split[data-v-137afc95]::before {\n  margin-right: 0;\n}\n.btn-sm + .dropdown-toggle-split[data-v-137afc95], .btn-group-sm > .btn + .dropdown-toggle-split[data-v-137afc95] {\n  padding-right: 11.25px;\n  padding-left: 11.25px;\n}\n.btn-lg + .dropdown-toggle-split[data-v-137afc95], .btn-group-lg > .btn + .dropdown-toggle-split[data-v-137afc95] {\n  padding-right: 36px;\n  padding-left: 36px;\n}\n.btn-group.show .dropdown-toggle[data-v-137afc95] {\n  box-shadow: none;\n}\n.btn-group.show .dropdown-toggle.btn-link[data-v-137afc95] {\n  box-shadow: none;\n}\n.btn-group-vertical[data-v-137afc95] {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.btn-group-vertical .btn[data-v-137afc95],\n.btn-group-vertical .btn-group[data-v-137afc95] {\n  width: 100%;\n}\n.btn-group-vertical > .btn + .btn[data-v-137afc95],\n.btn-group-vertical > .btn + .btn-group[data-v-137afc95],\n.btn-group-vertical > .btn-group + .btn[data-v-137afc95],\n.btn-group-vertical > .btn-group + .btn-group[data-v-137afc95] {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn[data-v-137afc95]:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn[data-v-137afc95] {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn[data-v-137afc95]:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn[data-v-137afc95] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-toggle > .btn[data-v-137afc95],\n.btn-group-toggle > .btn-group > .btn[data-v-137afc95] {\n  margin-bottom: 0;\n}\n.btn-group-toggle > .btn input[type=radio][data-v-137afc95],\n.btn-group-toggle > .btn input[type=checkbox][data-v-137afc95],\n.btn-group-toggle > .btn-group > .btn input[type=radio][data-v-137afc95],\n.btn-group-toggle > .btn-group > .btn input[type=checkbox][data-v-137afc95] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group[data-v-137afc95] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control[data-v-137afc95],\n.input-group > .custom-select[data-v-137afc95],\n.input-group > .custom-file[data-v-137afc95] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n.input-group > .form-control + .form-control[data-v-137afc95],\n.input-group > .form-control + .custom-select[data-v-137afc95],\n.input-group > .form-control + .custom-file[data-v-137afc95],\n.input-group > .custom-select + .form-control[data-v-137afc95],\n.input-group > .custom-select + .custom-select[data-v-137afc95],\n.input-group > .custom-select + .custom-file[data-v-137afc95],\n.input-group > .custom-file + .form-control[data-v-137afc95],\n.input-group > .custom-file + .custom-select[data-v-137afc95],\n.input-group > .custom-file + .custom-file[data-v-137afc95] {\n  margin-left: -1px;\n}\n.input-group > .form-control[data-v-137afc95]:focus,\n.input-group > .custom-select[data-v-137afc95]:focus,\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label[data-v-137afc95] {\n  z-index: 3;\n}\n.input-group > .custom-file .custom-file-input[data-v-137afc95]:focus {\n  z-index: 4;\n}\n.input-group > .form-control[data-v-137afc95]:not(:last-child),\n.input-group > .custom-select[data-v-137afc95]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .form-control[data-v-137afc95]:not(:first-child),\n.input-group > .custom-select[data-v-137afc95]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group > .custom-file[data-v-137afc95] {\n  display: flex;\n  align-items: center;\n}\n.input-group > .custom-file:not(:last-child) .custom-file-label[data-v-137afc95], .input-group > .custom-file:not(:last-child) .custom-file-label[data-v-137afc95]::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .custom-file:not(:first-child) .custom-file-label[data-v-137afc95] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-prepend[data-v-137afc95],\n.input-group-append[data-v-137afc95] {\n  display: flex;\n}\n.input-group-prepend .btn[data-v-137afc95],\n.input-group-append .btn[data-v-137afc95] {\n  position: relative;\n  z-index: 2;\n}\n.input-group-prepend .btn + .btn[data-v-137afc95],\n.input-group-prepend .btn + .input-group-text[data-v-137afc95],\n.input-group-prepend .input-group-text + .input-group-text[data-v-137afc95],\n.input-group-prepend .input-group-text + .btn[data-v-137afc95],\n.input-group-append .btn + .btn[data-v-137afc95],\n.input-group-append .btn + .input-group-text[data-v-137afc95],\n.input-group-append .input-group-text + .input-group-text[data-v-137afc95],\n.input-group-append .input-group-text + .btn[data-v-137afc95] {\n  margin-left: -1px;\n}\n.input-group-prepend[data-v-137afc95] {\n  margin-right: -1px;\n}\n.input-group-append[data-v-137afc95] {\n  margin-left: -1px;\n}\n.input-group-text[data-v-137afc95] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0.7rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.428571;\n  color: #adb5bd;\n  text-align: center;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #cad1d7;\n  border-radius: 0.25rem;\n}\n.input-group-text input[type=radio][data-v-137afc95],\n.input-group-text input[type=checkbox][data-v-137afc95] {\n  margin-top: 0;\n}\n.input-group-lg > .form-control[data-v-137afc95],\n.input-group-lg > .input-group-prepend > .input-group-text[data-v-137afc95],\n.input-group-lg > .input-group-append > .input-group-text[data-v-137afc95],\n.input-group-lg > .input-group-prepend > .btn[data-v-137afc95],\n.input-group-lg > .input-group-append > .btn[data-v-137afc95] {\n  height: calc(3.0989875rem + 2px);\n  padding: 0.875rem 1rem;\n  font-size: 0.99925rem;\n  line-height: 1.35;\n  border-radius: 0.4285rem;\n}\n.input-group-sm > .form-control[data-v-137afc95],\n.input-group-sm > .input-group-prepend > .input-group-text[data-v-137afc95],\n.input-group-sm > .input-group-append > .input-group-text[data-v-137afc95],\n.input-group-sm > .input-group-prepend > .btn[data-v-137afc95],\n.input-group-sm > .input-group-append > .btn[data-v-137afc95] {\n  height: calc(1.5125000034rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.7500000025rem;\n  line-height: 1.35;\n  border-radius: 0.2857rem;\n}\n.input-group > .input-group-prepend > .btn[data-v-137afc95],\n.input-group > .input-group-prepend > .input-group-text[data-v-137afc95],\n.input-group > .input-group-append:not(:last-child) > .btn[data-v-137afc95],\n.input-group > .input-group-append:not(:last-child) > .input-group-text[data-v-137afc95],\n.input-group > .input-group-append:last-child > .btn[data-v-137afc95]:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text[data-v-137afc95]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .input-group-append > .btn[data-v-137afc95],\n.input-group > .input-group-append > .input-group-text[data-v-137afc95],\n.input-group > .input-group-prepend:not(:first-child) > .btn[data-v-137afc95],\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text[data-v-137afc95],\n.input-group > .input-group-prepend:first-child > .btn[data-v-137afc95]:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text[data-v-137afc95]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.custom-control[data-v-137afc95] {\n  position: relative;\n  display: block;\n  min-height: 1.3125rem;\n  padding-left: 1.75rem;\n}\n.custom-control-inline[data-v-137afc95] {\n  display: inline-flex;\n  margin-right: 1rem;\n}\n.custom-control-input[data-v-137afc95] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n.custom-control-input:checked ~ .custom-control-label[data-v-137afc95]::before {\n  color: #ffffff;\n  background-color: #e14eca;\n  box-shadow: none;\n}\n.custom-control-input:focus ~ .custom-control-label[data-v-137afc95]::before {\n  box-shadow: none;\n}\n.custom-control-input:active ~ .custom-control-label[data-v-137afc95]::before {\n  color: #ffffff;\n  background-color: #e14eca;\n  box-shadow: none;\n}\n.custom-control-input:disabled ~ .custom-control-label[data-v-137afc95] {\n  color: #6c757d;\n}\n.custom-control-input:disabled ~ .custom-control-label[data-v-137afc95]::before {\n  background-color: #e9ecef;\n}\n.custom-control-label[data-v-137afc95] {\n  position: relative;\n  margin-bottom: 0;\n}\n.custom-control-label[data-v-137afc95]::before {\n  position: absolute;\n  top: 0.03125rem;\n  left: -1.75rem;\n  display: block;\n  width: 1.25rem;\n  height: 1.25rem;\n  pointer-events: none;\n  content: \"\";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  background-color: transparent;\n  box-shadow: none;\n}\n.custom-control-label[data-v-137afc95]::after {\n  position: absolute;\n  top: 0.03125rem;\n  left: -1.75rem;\n  display: block;\n  width: 1.25rem;\n  height: 1.25rem;\n  content: \"\";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n.custom-checkbox .custom-control-label[data-v-137afc95]::before {\n  border-radius: 0.2857rem;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label[data-v-137afc95]::before {\n  background-color: #e14eca;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label[data-v-137afc95]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label[data-v-137afc95]::before {\n  background-color: #e14eca;\n  box-shadow: none;\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label[data-v-137afc95]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23ffffff' d='M0 2h4'/%3E%3C/svg%3E\");\n}\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label[data-v-137afc95]::before {\n  background-color: rgba(225, 78, 202, 0.5);\n}\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label[data-v-137afc95]::before {\n  background-color: rgba(225, 78, 202, 0.5);\n}\n.custom-radio .custom-control-label[data-v-137afc95]::before {\n  border-radius: 50%;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-label[data-v-137afc95]::before {\n  background-color: #e14eca;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-label[data-v-137afc95]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23ffffff'/%3E%3C/svg%3E\");\n}\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label[data-v-137afc95]::before {\n  background-color: rgba(225, 78, 202, 0.5);\n}\n.custom-select[data-v-137afc95] {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.249999625rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.428571;\n  color: rgba(255, 255, 255, 0.8);\n  vertical-align: middle;\n  background: transparent url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%2332325d' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #cad1d7;\n  border-radius: 0.25rem;\n  box-shadow: inset 0 1px 2px rgba(34, 42, 66, 0.075);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.custom-select[data-v-137afc95]:focus {\n  border-color: rgba(50, 151, 211, 0.25);\n  outline: 0;\n  box-shadow: inset 0 1px 2px rgba(34, 42, 66, 0.075), 0 0 0 0 rgba(50, 151, 211, 0.5);\n}\n.custom-select[data-v-137afc95]:focus::-ms-value {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: transparent;\n}\n.custom-select[multiple][data-v-137afc95], .custom-select[size][data-v-137afc95]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.custom-select[data-v-137afc95]:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n.custom-select[data-v-137afc95]::-ms-expand {\n  opacity: 0;\n}\n.custom-select-sm[data-v-137afc95] {\n  height: calc(1.5125000034rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%;\n}\n.custom-select-lg[data-v-137afc95] {\n  height: calc(3.0989875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%;\n}\n.custom-file[data-v-137afc95] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.249999625rem + 2px);\n  margin-bottom: 0;\n}\n.custom-file-input[data-v-137afc95] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.249999625rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n.custom-file-input:focus ~ .custom-file-label[data-v-137afc95] {\n  border-color: rgba(50, 151, 211, 0.25);\n  box-shadow: none;\n}\n.custom-file-input:focus ~ .custom-file-label[data-v-137afc95]::after {\n  border-color: rgba(50, 151, 211, 0.25);\n}\n.custom-file-input:disabled ~ .custom-file-label[data-v-137afc95] {\n  background-color: #e9ecef;\n}\n.custom-file-input:lang(en) ~ .custom-file-label[data-v-137afc95]::after {\n  content: \"Browse\";\n}\n.custom-file-label[data-v-137afc95] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.249999625rem + 2px);\n  padding: 0.5rem 0.7rem;\n  line-height: 1.428571;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: transparent;\n  border: 1px solid #cad1d7;\n  border-radius: 0.25rem;\n  box-shadow: none;\n}\n.custom-file-label[data-v-137afc95]::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: 2.249999625rem;\n  padding: 0.5rem 0.7rem;\n  line-height: 1.428571;\n  color: rgba(255, 255, 255, 0.8);\n  content: \"Browse\";\n  background-color: transparent;\n  border-left: 1px solid #cad1d7;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n.custom-range[data-v-137afc95] {\n  width: 100%;\n  padding-left: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.custom-range[data-v-137afc95]:focus {\n  outline: none;\n}\n.custom-range[data-v-137afc95]:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #1e1e2f, none;\n}\n.custom-range[data-v-137afc95]:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #1e1e2f, none;\n}\n.custom-range[data-v-137afc95]:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #1e1e2f, none;\n}\n.custom-range[data-v-137afc95]::-moz-focus-outer {\n  border: 0;\n}\n.custom-range[data-v-137afc95]::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #e14eca;\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.1rem 0.25rem rgba(34, 42, 66, 0.1);\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n          appearance: none;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.custom-range[data-v-137afc95]::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n}\n}\n.custom-range[data-v-137afc95]::-webkit-slider-thumb:active {\n  background-color: #fbe7f8;\n}\n.custom-range[data-v-137afc95]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #e3e3e3;\n  border-color: transparent;\n  border-radius: 1rem;\n  box-shadow: inset 0 0.25rem 0.25rem rgba(34, 42, 66, 0.1);\n}\n.custom-range[data-v-137afc95]::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #e14eca;\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.1rem 0.25rem rgba(34, 42, 66, 0.1);\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.custom-range[data-v-137afc95]::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n}\n}\n.custom-range[data-v-137afc95]::-moz-range-thumb:active {\n  background-color: #fbe7f8;\n}\n.custom-range[data-v-137afc95]::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #e3e3e3;\n  border-color: transparent;\n  border-radius: 1rem;\n  box-shadow: inset 0 0.25rem 0.25rem rgba(34, 42, 66, 0.1);\n}\n.custom-range[data-v-137afc95]::-ms-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: 0;\n  margin-right: 0;\n  margin-left: 0;\n  background-color: #e14eca;\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.1rem 0.25rem rgba(34, 42, 66, 0.1);\n  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.custom-range[data-v-137afc95]::-ms-thumb {\n    -ms-transition: none;\n    transition: none;\n}\n}\n.custom-range[data-v-137afc95]::-ms-thumb:active {\n  background-color: #fbe7f8;\n}\n.custom-range[data-v-137afc95]::-ms-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0.5rem;\n  box-shadow: inset 0 0.25rem 0.25rem rgba(34, 42, 66, 0.1);\n}\n.custom-range[data-v-137afc95]::-ms-fill-lower {\n  background-color: #e3e3e3;\n  border-radius: 1rem;\n}\n.custom-range[data-v-137afc95]::-ms-fill-upper {\n  margin-right: 15px;\n  background-color: #e3e3e3;\n  border-radius: 1rem;\n}\n.custom-control-label[data-v-137afc95]::before,\n.custom-file-label[data-v-137afc95],\n.custom-select[data-v-137afc95] {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n.custom-control-label[data-v-137afc95]::before,\n  .custom-file-label[data-v-137afc95],\n  .custom-select[data-v-137afc95] {\n    transition: none;\n}\n}\n.card[data-v-137afc95] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #ffffff;\n  background-clip: border-box;\n  border: 0.0625rem solid rgba(34, 42, 66, 0.05);\n  border-radius: 0.2857rem;\n}\n.card > hr[data-v-137afc95] {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group:first-child .list-group-item[data-v-137afc95]:first-child {\n  border-top-left-radius: 0.2857rem;\n  border-top-right-radius: 0.2857rem;\n}\n.card > .list-group:last-child .list-group-item[data-v-137afc95]:last-child {\n  border-bottom-right-radius: 0.2857rem;\n  border-bottom-left-radius: 0.2857rem;\n}\n.card-body[data-v-137afc95] {\n  flex: 1 1 auto;\n  padding: 1.5rem;\n}\n.card-title[data-v-137afc95] {\n  margin-bottom: 1.25rem;\n}\n.card-subtitle[data-v-137afc95] {\n  margin-top: -0.625rem;\n  margin-bottom: 0;\n}\n.card-text[data-v-137afc95]:last-child {\n  margin-bottom: 0;\n}\n.card-link[data-v-137afc95]:hover {\n  text-decoration: none;\n}\n.card-link + .card-link[data-v-137afc95] {\n  margin-left: 1.5rem;\n}\n.card-header[data-v-137afc95] {\n  padding: 1.25rem 1.5rem;\n  margin-bottom: 0;\n  background-color: #f6f9fc;\n  border-bottom: 0.0625rem solid rgba(34, 42, 66, 0.05);\n}\n.card-header[data-v-137afc95]:first-child {\n  border-radius: calc(0.2857rem - 0.0625rem) calc(0.2857rem - 0.0625rem) 0 0;\n}\n.card-header + .list-group .list-group-item[data-v-137afc95]:first-child {\n  border-top: 0;\n}\n.card-footer[data-v-137afc95] {\n  padding: 1.25rem 1.5rem;\n  background-color: #f6f9fc;\n  border-top: 0.0625rem solid rgba(34, 42, 66, 0.05);\n}\n.card-footer[data-v-137afc95]:last-child {\n  border-radius: 0 0 calc(0.2857rem - 0.0625rem) calc(0.2857rem - 0.0625rem);\n}\n.card-header-tabs[data-v-137afc95] {\n  margin-right: -0.75rem;\n  margin-bottom: -1.25rem;\n  margin-left: -0.75rem;\n  border-bottom: 0;\n}\n.card-header-pills[data-v-137afc95] {\n  margin-right: -0.75rem;\n  margin-left: -0.75rem;\n}\n.card-img-overlay[data-v-137afc95] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n.card-img[data-v-137afc95] {\n  width: 100%;\n  border-radius: calc(0.2857rem - 0.0625rem);\n}\n.card-img-top[data-v-137afc95] {\n  width: 100%;\n  border-top-left-radius: calc(0.2857rem - 0.0625rem);\n  border-top-right-radius: calc(0.2857rem - 0.0625rem);\n}\n.card-img-bottom[data-v-137afc95] {\n  width: 100%;\n  border-bottom-right-radius: calc(0.2857rem - 0.0625rem);\n  border-bottom-left-radius: calc(0.2857rem - 0.0625rem);\n}\n.card-deck[data-v-137afc95] {\n  display: flex;\n  flex-direction: column;\n}\n.card-deck .card[data-v-137afc95] {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n.card-deck[data-v-137afc95] {\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n}\n.card-deck .card[data-v-137afc95] {\n    display: flex;\n    flex: 1 0 0%;\n    flex-direction: column;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n}\n}\n.card-group[data-v-137afc95] {\n  display: flex;\n  flex-direction: column;\n}\n.card-group > .card[data-v-137afc95] {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n.card-group[data-v-137afc95] {\n    flex-flow: row wrap;\n}\n.card-group > .card[data-v-137afc95] {\n    flex: 1 0 0%;\n    margin-bottom: 0;\n}\n.card-group > .card + .card[data-v-137afc95] {\n    margin-left: 0;\n    border-left: 0;\n}\n.card-group > .card[data-v-137afc95]:first-child {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.card-group > .card:first-child .card-img-top[data-v-137afc95],\n  .card-group > .card:first-child .card-header[data-v-137afc95] {\n    border-top-right-radius: 0;\n}\n.card-group > .card:first-child .card-img-bottom[data-v-137afc95],\n  .card-group > .card:first-child .card-footer[data-v-137afc95] {\n    border-bottom-right-radius: 0;\n}\n.card-group > .card[data-v-137afc95]:last-child {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.card-group > .card:last-child .card-img-top[data-v-137afc95],\n  .card-group > .card:last-child .card-header[data-v-137afc95] {\n    border-top-left-radius: 0;\n}\n.card-group > .card:last-child .card-img-bottom[data-v-137afc95],\n  .card-group > .card:last-child .card-footer[data-v-137afc95] {\n    border-bottom-left-radius: 0;\n}\n.card-group > .card[data-v-137afc95]:only-child {\n    border-radius: 0.2857rem;\n}\n.card-group > .card:only-child .card-img-top[data-v-137afc95],\n  .card-group > .card:only-child .card-header[data-v-137afc95] {\n    border-top-left-radius: 0.2857rem;\n    border-top-right-radius: 0.2857rem;\n}\n.card-group > .card:only-child .card-img-bottom[data-v-137afc95],\n  .card-group > .card:only-child .card-footer[data-v-137afc95] {\n    border-bottom-right-radius: 0.2857rem;\n    border-bottom-left-radius: 0.2857rem;\n}\n.card-group > .card[data-v-137afc95]:not(:first-child):not(:last-child):not(:only-child) {\n    border-radius: 0;\n}\n.card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top[data-v-137afc95],\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom[data-v-137afc95],\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header[data-v-137afc95],\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer[data-v-137afc95] {\n    border-radius: 0;\n}\n}\n.card-columns .card[data-v-137afc95] {\n  margin-bottom: 1.25rem;\n}\n@media (min-width: 576px) {\n.card-columns[data-v-137afc95] {\n    -moz-column-count: 3;\n         column-count: 3;\n    -moz-column-gap: 1.25rem;\n         column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1;\n}\n.card-columns .card[data-v-137afc95] {\n    display: inline-block;\n    width: 100%;\n}\n}\n.accordion .card[data-v-137afc95]:not(:first-of-type):not(:last-of-type) {\n  border-bottom: 0;\n  border-radius: 0;\n}\n.accordion .card:not(:first-of-type) .card-header[data-v-137afc95]:first-child {\n  border-radius: 0;\n}\n.accordion .card[data-v-137afc95]:first-of-type {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.accordion .card[data-v-137afc95]:last-of-type {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.media[data-v-137afc95] {\n  display: flex;\n  align-items: flex-start;\n}\n.media-body[data-v-137afc95] {\n  flex: 1;\n}\n.list-group[data-v-137afc95] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.list-group-item-action[data-v-137afc95] {\n  width: 100%;\n  color: #525f7f;\n  text-align: inherit;\n}\n.list-group-item-action[data-v-137afc95]:hover, .list-group-item-action[data-v-137afc95]:focus {\n  color: #525f7f;\n  text-decoration: none;\n  background-color: #f6f9fc;\n}\n.list-group-item-action[data-v-137afc95]:active {\n  color: #525f7f;\n  background-color: #e9ecef;\n}\n.list-group-item[data-v-137afc95] {\n  position: relative;\n  display: block;\n  padding: 1rem 1rem;\n  margin-bottom: -0.0625rem;\n  background-color: #ffffff;\n  border: 0.0625rem solid #e9ecef;\n}\n.list-group-item[data-v-137afc95]:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.list-group-item[data-v-137afc95]:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.list-group-item[data-v-137afc95]:hover, .list-group-item[data-v-137afc95]:focus {\n  z-index: 1;\n  text-decoration: none;\n}\n.list-group-item.disabled[data-v-137afc95], .list-group-item[data-v-137afc95]:disabled {\n  color: #6c757d;\n  background-color: #ffffff;\n}\n.list-group-item.active[data-v-137afc95] {\n  z-index: 2;\n  color: #ffffff;\n  background-color: #e14eca;\n  border-color: #e14eca;\n}\n.list-group-flush .list-group-item[data-v-137afc95] {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n.list-group-flush:first-child .list-group-item[data-v-137afc95]:first-child {\n  border-top: 0;\n}\n.list-group-flush:last-child .list-group-item[data-v-137afc95]:last-child {\n  border-bottom: 0;\n}\n.list-group-item-primary[data-v-137afc95] {\n  color: #853d89;\n  background-color: #f7cdf0;\n}\n.list-group-item-primary.list-group-item-action[data-v-137afc95]:hover, .list-group-item-primary.list-group-item-action[data-v-137afc95]:focus {\n  color: #853d89;\n  background-color: #f3b7e9;\n}\n.list-group-item-primary.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #853d89;\n  border-color: #853d89;\n}\n.list-group-item-secondary[data-v-137afc95] {\n  color: #8f94a0;\n  background-color: #fcfcfd;\n}\n.list-group-item-secondary.list-group-item-action[data-v-137afc95]:hover, .list-group-item-secondary.list-group-item-action[data-v-137afc95]:focus {\n  color: #8f94a0;\n  background-color: #ededf3;\n}\n.list-group-item-secondary.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #8f94a0;\n  border-color: #8f94a0;\n}\n.list-group-item-success[data-v-137afc95] {\n  color: #109285;\n  background-color: #b8fbee;\n}\n.list-group-item-success.list-group-item-action[data-v-137afc95]:hover, .list-group-item-success.list-group-item-action[data-v-137afc95]:focus {\n  color: #109285;\n  background-color: #a0fae8;\n}\n.list-group-item-success.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #109285;\n  border-color: #109285;\n}\n.list-group-item-info[data-v-137afc95] {\n  color: #1f5da1;\n  background-color: #c0dffd;\n}\n.list-group-item-info.list-group-item-action[data-v-137afc95]:hover, .list-group-item-info.list-group-item-action[data-v-137afc95]:focus {\n  color: #1f5da1;\n  background-color: #a7d2fc;\n}\n.list-group-item-info.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #1f5da1;\n  border-color: #1f5da1;\n}\n.list-group-item-warning[data-v-137afc95] {\n  color: #955d5b;\n  background-color: #ffdfd8;\n}\n.list-group-item-warning.list-group-item-action[data-v-137afc95]:hover, .list-group-item-warning.list-group-item-action[data-v-137afc95]:focus {\n  color: #955d5b;\n  background-color: #ffcabf;\n}\n.list-group-item-warning.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #955d5b;\n  border-color: #955d5b;\n}\n.list-group-item-danger[data-v-137afc95] {\n  color: #94456c;\n  background-color: #fed2e1;\n}\n.list-group-item-danger.list-group-item-action[data-v-137afc95]:hover, .list-group-item-danger.list-group-item-action[data-v-137afc95]:focus {\n  color: #94456c;\n  background-color: #fdb9d0;\n}\n.list-group-item-danger.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #94456c;\n  border-color: #94456c;\n}\n.list-group-item-light[data-v-137afc95] {\n  color: #6a7282;\n  background-color: #e8eaed;\n}\n.list-group-item-light.list-group-item-action[data-v-137afc95]:hover, .list-group-item-light.list-group-item-action[data-v-137afc95]:focus {\n  color: #6a7282;\n  background-color: #dadde2;\n}\n.list-group-item-light.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #6a7282;\n  border-color: #6a7282;\n}\n.list-group-item-dark[data-v-137afc95] {\n  color: #212735;\n  background-color: #c1c2c3;\n}\n.list-group-item-dark.list-group-item-action[data-v-137afc95]:hover, .list-group-item-dark.list-group-item-action[data-v-137afc95]:focus {\n  color: #212735;\n  background-color: #b4b5b6;\n}\n.list-group-item-dark.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #212735;\n  border-color: #212735;\n}\n.list-group-item-default[data-v-137afc95] {\n  color: #2b395d;\n  background-color: #c6cbd8;\n}\n.list-group-item-default.list-group-item-action[data-v-137afc95]:hover, .list-group-item-default.list-group-item-action[data-v-137afc95]:focus {\n  color: #2b395d;\n  background-color: #b7bdce;\n}\n.list-group-item-default.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #2b395d;\n  border-color: #2b395d;\n}\n.list-group-item-white[data-v-137afc95] {\n  color: #9599a4;\n  background-color: white;\n}\n.list-group-item-white.list-group-item-action[data-v-137afc95]:hover, .list-group-item-white.list-group-item-action[data-v-137afc95]:focus {\n  color: #9599a4;\n  background-color: #f2f2f2;\n}\n.list-group-item-white.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #9599a4;\n  border-color: #9599a4;\n}\n.list-group-item-neutral[data-v-137afc95] {\n  color: #9599a4;\n  background-color: white;\n}\n.list-group-item-neutral.list-group-item-action[data-v-137afc95]:hover, .list-group-item-neutral.list-group-item-action[data-v-137afc95]:focus {\n  color: #9599a4;\n  background-color: #f2f2f2;\n}\n.list-group-item-neutral.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #9599a4;\n  border-color: #9599a4;\n}\n.list-group-item-darker[data-v-137afc95] {\n  color: #101420;\n  background-color: #b8b8b8;\n}\n.list-group-item-darker.list-group-item-action[data-v-137afc95]:hover, .list-group-item-darker.list-group-item-action[data-v-137afc95]:focus {\n  color: #101420;\n  background-color: #ababab;\n}\n.list-group-item-darker.list-group-item-action.active[data-v-137afc95] {\n  color: #ffffff;\n  background-color: #101420;\n  border-color: #101420;\n}\n.btn[data-v-137afc95],\n.navbar .navbar-nav > a.btn[data-v-137afc95] {\n  border-width: 2px;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  margin: 4px 1px;\n  border-radius: 0.4285rem;\n  cursor: pointer;\n  background: #344675;\n  background-image: linear-gradient(to bottom left, #344675, #263148, #344675);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #344675;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n.btn.animation-on-hover[data-v-137afc95]:hover,\n.navbar .navbar-nav > a.btn.animation-on-hover[data-v-137afc95]:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n.btn[data-v-137afc95]:hover, .btn[data-v-137afc95]:focus, .btn[data-v-137afc95]:active, .btn.active[data-v-137afc95], .btn[data-v-137afc95]:active:focus, .btn[data-v-137afc95]:active:hover, .btn.active[data-v-137afc95]:focus, .btn.active[data-v-137afc95]:hover,\n.navbar .navbar-nav > a.btn[data-v-137afc95]:hover,\n.navbar .navbar-nav > a.btn[data-v-137afc95]:focus,\n.navbar .navbar-nav > a.btn[data-v-137afc95]:active,\n.navbar .navbar-nav > a.btn.active[data-v-137afc95],\n.navbar .navbar-nav > a.btn[data-v-137afc95]:active:focus,\n.navbar .navbar-nav > a.btn[data-v-137afc95]:active:hover,\n.navbar .navbar-nav > a.btn.active[data-v-137afc95]:focus,\n.navbar .navbar-nav > a.btn.active[data-v-137afc95]:hover {\n  background-color: #263148 !important;\n  background-image: linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  background-image: -moz-linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n.btn[data-v-137afc95]:active,\n.navbar .navbar-nav > a.btn[data-v-137afc95]:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all 0.15s ease;\n}\n.btn[data-v-137afc95]:not([data-action]):hover,\n.navbar .navbar-nav > a.btn[data-v-137afc95]:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n.btn.disabled[data-v-137afc95], .btn.disabled[data-v-137afc95]:hover, .btn.disabled[data-v-137afc95]:focus, .btn.disabled.focus[data-v-137afc95], .btn.disabled[data-v-137afc95]:active, .btn.disabled.active[data-v-137afc95], .btn[data-v-137afc95]:disabled, .btn[data-v-137afc95]:disabled:hover, .btn[data-v-137afc95]:disabled:focus, .btn:disabled.focus[data-v-137afc95], .btn[data-v-137afc95]:disabled:active, .btn:disabled.active[data-v-137afc95], .btn[disabled][data-v-137afc95], .btn[disabled][data-v-137afc95]:hover, .btn[disabled][data-v-137afc95]:focus, .btn[disabled].focus[data-v-137afc95], .btn[disabled][data-v-137afc95]:active, .btn[disabled].active[data-v-137afc95], fieldset[disabled] .btn[data-v-137afc95], fieldset[disabled] .btn[data-v-137afc95]:hover, fieldset[disabled] .btn[data-v-137afc95]:focus, fieldset[disabled] .btn.focus[data-v-137afc95], fieldset[disabled] .btn[data-v-137afc95]:active, fieldset[disabled] .btn.active[data-v-137afc95],\n.navbar .navbar-nav > a.btn.disabled[data-v-137afc95],\n.navbar .navbar-nav > a.btn.disabled[data-v-137afc95]:hover,\n.navbar .navbar-nav > a.btn.disabled[data-v-137afc95]:focus,\n.navbar .navbar-nav > a.btn.disabled.focus[data-v-137afc95],\n.navbar .navbar-nav > a.btn.disabled[data-v-137afc95]:active,\n.navbar .navbar-nav > a.btn.disabled.active[data-v-137afc95],\n.navbar .navbar-nav > a.btn[data-v-137afc95]:disabled,\n.navbar .navbar-nav > a.btn[data-v-137afc95]:disabled:hover,\n.navbar .navbar-nav > a.btn[data-v-137afc95]:disabled:focus,\n.navbar .navbar-nav > a.btn:disabled.focus[data-v-137afc95],\n.navbar .navbar-nav > a.btn[data-v-137afc95]:disabled:active,\n.navbar .navbar-nav > a.btn:disabled.active[data-v-137afc95],\n.navbar .navbar-nav > a.btn[disabled][data-v-137afc95],\n.navbar .navbar-nav > a.btn[disabled][data-v-137afc95]:hover,\n.navbar .navbar-nav > a.btn[disabled][data-v-137afc95]:focus,\n.navbar .navbar-nav > a.btn[disabled].focus[data-v-137afc95],\n.navbar .navbar-nav > a.btn[disabled][data-v-137afc95]:active,\n.navbar .navbar-nav > a.btn[disabled].active[data-v-137afc95],\nfieldset[disabled] .navbar .navbar-nav > a.btn[data-v-137afc95],\nfieldset[disabled] .navbar .navbar-nav > a.btn[data-v-137afc95]:hover,\nfieldset[disabled] .navbar .navbar-nav > a.btn[data-v-137afc95]:focus,\nfieldset[disabled] .navbar .navbar-nav > a.btn.focus[data-v-137afc95],\nfieldset[disabled] .navbar .navbar-nav > a.btn[data-v-137afc95]:active,\nfieldset[disabled] .navbar .navbar-nav > a.btn.active[data-v-137afc95] {\n  background-color: #344675;\n  border-color: #344675;\n}\n.btn.btn-simple[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-simple[data-v-137afc95] {\n  color: #344675;\n  border-color: #344675;\n  background: transparent;\n}\n.btn.btn-simple[data-v-137afc95]:hover, .btn.btn-simple[data-v-137afc95]:focus, .btn.btn-simple[data-v-137afc95]:active, .btn.btn-simple[data-v-137afc95]:not(:disabled):not(.disabled):active,\n.navbar .navbar-nav > a.btn.btn-simple[data-v-137afc95]:hover,\n.navbar .navbar-nav > a.btn.btn-simple[data-v-137afc95]:focus,\n.navbar .navbar-nav > a.btn.btn-simple[data-v-137afc95]:active,\n.navbar .navbar-nav > a.btn.btn-simple[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #344675;\n  border-color: #344675;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n.btn.btn-simple.active[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-simple.active[data-v-137afc95] {\n  border-color: #344675 !important;\n}\n.btn.btn-simple.active[data-v-137afc95]:hover, .btn.btn-simple.active[data-v-137afc95]:focus, .btn.btn-simple.active[data-v-137afc95]:active, .btn.btn-simple.active[data-v-137afc95]:not(:disabled):not(.disabled):active,\n.navbar .navbar-nav > a.btn.btn-simple.active[data-v-137afc95]:hover,\n.navbar .navbar-nav > a.btn.btn-simple.active[data-v-137afc95]:focus,\n.navbar .navbar-nav > a.btn.btn-simple.active[data-v-137afc95]:active,\n.navbar .navbar-nav > a.btn.btn-simple.active[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #344675;\n  background-image: linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  background-image: -moz-linear-gradient(to bottom left, #344675, #263148, #344675) !important;\n  background-color: #263148 !important;\n  box-shadow: none;\n}\n.btn.btn-link[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-link[data-v-137afc95] {\n  color: #344675;\n}\n.btn.btn-link[data-v-137afc95]:hover, .btn.btn-link[data-v-137afc95]:focus, .btn.btn-link[data-v-137afc95]:active,\n.navbar .navbar-nav > a.btn.btn-link[data-v-137afc95]:hover,\n.navbar .navbar-nav > a.btn.btn-link[data-v-137afc95]:focus,\n.navbar .navbar-nav > a.btn.btn-link[data-v-137afc95]:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n.btn[data-v-137afc95]:hover, .btn[data-v-137afc95]:focus,\n.navbar .navbar-nav > a.btn[data-v-137afc95]:hover,\n.navbar .navbar-nav > a.btn[data-v-137afc95]:focus {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  outline: 0 !important;\n}\n.btn[data-v-137afc95]:active, .btn.active[data-v-137afc95], .open > .btn.dropdown-toggle[data-v-137afc95],\n.navbar .navbar-nav > a.btn[data-v-137afc95]:active,\n.navbar .navbar-nav > a.btn.active[data-v-137afc95],\n.open > .navbar .navbar-nav > a.btn.dropdown-toggle[data-v-137afc95] {\n  box-shadow: none;\n  outline: 0 !important;\n}\n.btn .badge[data-v-137afc95],\n.navbar .navbar-nav > a.btn .badge[data-v-137afc95] {\n  margin: 0;\n}\n.btn.btn-icon[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon[data-v-137afc95] {\n  height: 2.375rem;\n  min-width: 2.375rem;\n  width: 2.375rem;\n  padding: 0;\n  font-size: 0.9375rem;\n  overflow: hidden;\n  position: relative;\n  line-height: normal;\n}\n.btn.btn-icon.btn-simple[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon.btn-simple[data-v-137afc95] {\n  padding: 0;\n}\n.btn.btn-icon.btn-sm[data-v-137afc95], .btn-group-sm > .btn.btn-icon[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm[data-v-137afc95] {\n  height: 1.875rem;\n  min-width: 1.875rem;\n  width: 1.875rem;\n}\n.btn.btn-icon.btn-sm .fa[data-v-137afc95], .btn-group-sm > .btn.btn-icon .fa[data-v-137afc95],\n.btn.btn-icon.btn-sm .far[data-v-137afc95],\n.btn-group-sm > .btn.btn-icon .far[data-v-137afc95],\n.btn.btn-icon.btn-sm .fas[data-v-137afc95],\n.btn-group-sm > .btn.btn-icon .fas[data-v-137afc95],\n.btn.btn-icon.btn-sm .tim-icons[data-v-137afc95],\n.btn-group-sm > .btn.btn-icon .tim-icons[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .fa[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .far[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .fas[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .tim-icons[data-v-137afc95] {\n  font-size: 0.6875rem;\n}\n.btn.btn-icon.btn-lg[data-v-137afc95], .btn-group-lg > .btn.btn-icon[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg[data-v-137afc95] {\n  height: 3.6rem;\n  min-width: 3.6rem;\n  width: 3.6rem;\n}\n.btn.btn-icon.btn-lg .fa[data-v-137afc95], .btn-group-lg > .btn.btn-icon .fa[data-v-137afc95],\n.btn.btn-icon.btn-lg .far[data-v-137afc95],\n.btn-group-lg > .btn.btn-icon .far[data-v-137afc95],\n.btn.btn-icon.btn-lg .fas[data-v-137afc95],\n.btn-group-lg > .btn.btn-icon .fas[data-v-137afc95],\n.btn.btn-icon.btn-lg .tim-icons[data-v-137afc95],\n.btn-group-lg > .btn.btn-icon .tim-icons[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .fa[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .far[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .fas[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .tim-icons[data-v-137afc95] {\n  font-size: 1.325rem;\n}\n.btn.btn-icon:not(.btn-footer) .tim-icons[data-v-137afc95], .btn.btn-icon:not(.btn-footer) .fa[data-v-137afc95], .btn.btn-icon:not(.btn-footer) .far[data-v-137afc95], .btn.btn-icon:not(.btn-footer) .fas[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .tim-icons[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .fa[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .far[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .fas[data-v-137afc95] {\n  position: absolute;\n  font-size: 1em;\n  top: 50%;\n  left: 50%;\n  transform: translate(-12px, -12px);\n  line-height: 1.5626rem;\n  width: 24px;\n}\n.btn:not(.btn-icon) .tim-icons[data-v-137afc95],\n.navbar .navbar-nav > a.btn:not(.btn-icon) .tim-icons[data-v-137afc95] {\n  position: relative;\n  top: 1px;\n}\n.btn span[data-v-137afc95],\n.navbar .navbar-nav > a.btn span[data-v-137afc95] {\n  position: relative;\n  display: block;\n}\n.btn.btn-link.dropdown-toggle[data-v-137afc95],\n.navbar .navbar-nav > a.btn.btn-link.dropdown-toggle[data-v-137afc95] {\n  color: #9A9A9A;\n}\n.btn.dropdown-toggle[data-v-137afc95]:after,\n.navbar .navbar-nav > a.btn.dropdown-toggle[data-v-137afc95]:after {\n  margin-left: 30px !important;\n}\n.btn-primary[data-v-137afc95] {\n  background: #e14eca;\n  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #e14eca;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n.btn-primary.animation-on-hover[data-v-137afc95]:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n.btn-primary[data-v-137afc95]:hover, .btn-primary[data-v-137afc95]:focus, .btn-primary[data-v-137afc95]:active, .btn-primary.active[data-v-137afc95], .btn-primary[data-v-137afc95]:active:focus, .btn-primary[data-v-137afc95]:active:hover, .btn-primary.active[data-v-137afc95]:focus, .btn-primary.active[data-v-137afc95]:hover {\n  background-color: #ba54f5 !important;\n  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  background-image: -moz-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n.btn-primary[data-v-137afc95]:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all 0.15s ease;\n}\n.btn-primary[data-v-137afc95]:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n.btn-primary.disabled[data-v-137afc95], .btn-primary.disabled[data-v-137afc95]:hover, .btn-primary.disabled[data-v-137afc95]:focus, .btn-primary.disabled.focus[data-v-137afc95], .btn-primary.disabled[data-v-137afc95]:active, .btn-primary.disabled.active[data-v-137afc95], .btn-primary[data-v-137afc95]:disabled, .btn-primary[data-v-137afc95]:disabled:hover, .btn-primary[data-v-137afc95]:disabled:focus, .btn-primary:disabled.focus[data-v-137afc95], .btn-primary[data-v-137afc95]:disabled:active, .btn-primary:disabled.active[data-v-137afc95], .btn-primary[disabled][data-v-137afc95], .btn-primary[disabled][data-v-137afc95]:hover, .btn-primary[disabled][data-v-137afc95]:focus, .btn-primary[disabled].focus[data-v-137afc95], .btn-primary[disabled][data-v-137afc95]:active, .btn-primary[disabled].active[data-v-137afc95], fieldset[disabled] .btn-primary[data-v-137afc95], fieldset[disabled] .btn-primary[data-v-137afc95]:hover, fieldset[disabled] .btn-primary[data-v-137afc95]:focus, fieldset[disabled] .btn-primary.focus[data-v-137afc95], fieldset[disabled] .btn-primary[data-v-137afc95]:active, fieldset[disabled] .btn-primary.active[data-v-137afc95] {\n  background-color: #e14eca;\n  border-color: #e14eca;\n}\n.btn-primary.btn-simple[data-v-137afc95] {\n  color: #e14eca;\n  border-color: #e14eca;\n  background: transparent;\n}\n.btn-primary.btn-simple[data-v-137afc95]:hover, .btn-primary.btn-simple[data-v-137afc95]:focus, .btn-primary.btn-simple[data-v-137afc95]:active, .btn-primary.btn-simple[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #e14eca;\n  border-color: #e14eca;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n.btn-primary.btn-simple.active[data-v-137afc95] {\n  border-color: #e14eca !important;\n}\n.btn-primary.btn-simple.active[data-v-137afc95]:hover, .btn-primary.btn-simple.active[data-v-137afc95]:focus, .btn-primary.btn-simple.active[data-v-137afc95]:active, .btn-primary.btn-simple.active[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #e14eca;\n  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  background-image: -moz-linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca) !important;\n  background-color: #ba54f5 !important;\n  box-shadow: none;\n}\n.btn-primary.btn-link[data-v-137afc95] {\n  color: #e14eca;\n}\n.btn-primary.btn-link[data-v-137afc95]:hover, .btn-primary.btn-link[data-v-137afc95]:focus, .btn-primary.btn-link[data-v-137afc95]:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n.btn-success[data-v-137afc95] {\n  background: #00f2c3;\n  background-image: linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #00f2c3;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n.btn-success.animation-on-hover[data-v-137afc95]:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n.btn-success[data-v-137afc95]:hover, .btn-success[data-v-137afc95]:focus, .btn-success[data-v-137afc95]:active, .btn-success.active[data-v-137afc95], .btn-success[data-v-137afc95]:active:focus, .btn-success[data-v-137afc95]:active:hover, .btn-success.active[data-v-137afc95]:focus, .btn-success.active[data-v-137afc95]:hover {\n  background-color: #0098f0 !important;\n  background-image: linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  background-image: -moz-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n.btn-success[data-v-137afc95]:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all 0.15s ease;\n}\n.btn-success[data-v-137afc95]:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n.btn-success.disabled[data-v-137afc95], .btn-success.disabled[data-v-137afc95]:hover, .btn-success.disabled[data-v-137afc95]:focus, .btn-success.disabled.focus[data-v-137afc95], .btn-success.disabled[data-v-137afc95]:active, .btn-success.disabled.active[data-v-137afc95], .btn-success[data-v-137afc95]:disabled, .btn-success[data-v-137afc95]:disabled:hover, .btn-success[data-v-137afc95]:disabled:focus, .btn-success:disabled.focus[data-v-137afc95], .btn-success[data-v-137afc95]:disabled:active, .btn-success:disabled.active[data-v-137afc95], .btn-success[disabled][data-v-137afc95], .btn-success[disabled][data-v-137afc95]:hover, .btn-success[disabled][data-v-137afc95]:focus, .btn-success[disabled].focus[data-v-137afc95], .btn-success[disabled][data-v-137afc95]:active, .btn-success[disabled].active[data-v-137afc95], fieldset[disabled] .btn-success[data-v-137afc95], fieldset[disabled] .btn-success[data-v-137afc95]:hover, fieldset[disabled] .btn-success[data-v-137afc95]:focus, fieldset[disabled] .btn-success.focus[data-v-137afc95], fieldset[disabled] .btn-success[data-v-137afc95]:active, fieldset[disabled] .btn-success.active[data-v-137afc95] {\n  background-color: #00f2c3;\n  border-color: #00f2c3;\n}\n.btn-success.btn-simple[data-v-137afc95] {\n  color: #00f2c3;\n  border-color: #00f2c3;\n  background: transparent;\n}\n.btn-success.btn-simple[data-v-137afc95]:hover, .btn-success.btn-simple[data-v-137afc95]:focus, .btn-success.btn-simple[data-v-137afc95]:active, .btn-success.btn-simple[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #00f2c3;\n  border-color: #00f2c3;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n.btn-success.btn-simple.active[data-v-137afc95] {\n  border-color: #00f2c3 !important;\n}\n.btn-success.btn-simple.active[data-v-137afc95]:hover, .btn-success.btn-simple.active[data-v-137afc95]:focus, .btn-success.btn-simple.active[data-v-137afc95]:active, .btn-success.btn-simple.active[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #00f2c3;\n  background-image: linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  background-image: -moz-linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3) !important;\n  background-color: #0098f0 !important;\n  box-shadow: none;\n}\n.btn-success.btn-link[data-v-137afc95] {\n  color: #00f2c3;\n}\n.btn-success.btn-link[data-v-137afc95]:hover, .btn-success.btn-link[data-v-137afc95]:focus, .btn-success.btn-link[data-v-137afc95]:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n.btn-info[data-v-137afc95] {\n  background: #1d8cf8;\n  background-image: linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #1d8cf8;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n.btn-info.animation-on-hover[data-v-137afc95]:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n.btn-info[data-v-137afc95]:hover, .btn-info[data-v-137afc95]:focus, .btn-info[data-v-137afc95]:active, .btn-info.active[data-v-137afc95], .btn-info[data-v-137afc95]:active:focus, .btn-info[data-v-137afc95]:active:hover, .btn-info.active[data-v-137afc95]:focus, .btn-info.active[data-v-137afc95]:hover {\n  background-color: #3358f4 !important;\n  background-image: linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  background-image: -moz-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n.btn-info[data-v-137afc95]:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all 0.15s ease;\n}\n.btn-info[data-v-137afc95]:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n.btn-info.disabled[data-v-137afc95], .btn-info.disabled[data-v-137afc95]:hover, .btn-info.disabled[data-v-137afc95]:focus, .btn-info.disabled.focus[data-v-137afc95], .btn-info.disabled[data-v-137afc95]:active, .btn-info.disabled.active[data-v-137afc95], .btn-info[data-v-137afc95]:disabled, .btn-info[data-v-137afc95]:disabled:hover, .btn-info[data-v-137afc95]:disabled:focus, .btn-info:disabled.focus[data-v-137afc95], .btn-info[data-v-137afc95]:disabled:active, .btn-info:disabled.active[data-v-137afc95], .btn-info[disabled][data-v-137afc95], .btn-info[disabled][data-v-137afc95]:hover, .btn-info[disabled][data-v-137afc95]:focus, .btn-info[disabled].focus[data-v-137afc95], .btn-info[disabled][data-v-137afc95]:active, .btn-info[disabled].active[data-v-137afc95], fieldset[disabled] .btn-info[data-v-137afc95], fieldset[disabled] .btn-info[data-v-137afc95]:hover, fieldset[disabled] .btn-info[data-v-137afc95]:focus, fieldset[disabled] .btn-info.focus[data-v-137afc95], fieldset[disabled] .btn-info[data-v-137afc95]:active, fieldset[disabled] .btn-info.active[data-v-137afc95] {\n  background-color: #1d8cf8;\n  border-color: #1d8cf8;\n}\n.btn-info.btn-simple[data-v-137afc95] {\n  color: #1d8cf8;\n  border-color: #1d8cf8;\n  background: transparent;\n}\n.btn-info.btn-simple[data-v-137afc95]:hover, .btn-info.btn-simple[data-v-137afc95]:focus, .btn-info.btn-simple[data-v-137afc95]:active, .btn-info.btn-simple[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #1d8cf8;\n  border-color: #1d8cf8;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n.btn-info.btn-simple.active[data-v-137afc95] {\n  border-color: #1d8cf8 !important;\n}\n.btn-info.btn-simple.active[data-v-137afc95]:hover, .btn-info.btn-simple.active[data-v-137afc95]:focus, .btn-info.btn-simple.active[data-v-137afc95]:active, .btn-info.btn-simple.active[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #1d8cf8;\n  background-image: linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  background-image: -moz-linear-gradient(to bottom left, #1d8cf8, #3358f4, #1d8cf8) !important;\n  background-color: #3358f4 !important;\n  box-shadow: none;\n}\n.btn-info.btn-link[data-v-137afc95] {\n  color: #1d8cf8;\n}\n.btn-info.btn-link[data-v-137afc95]:hover, .btn-info.btn-link[data-v-137afc95]:focus, .btn-info.btn-link[data-v-137afc95]:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n.btn-warning[data-v-137afc95] {\n  background: #ff8d72;\n  background-image: linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #ff8d72;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n.btn-warning.animation-on-hover[data-v-137afc95]:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n.btn-warning[data-v-137afc95]:hover, .btn-warning[data-v-137afc95]:focus, .btn-warning[data-v-137afc95]:active, .btn-warning.active[data-v-137afc95], .btn-warning[data-v-137afc95]:active:focus, .btn-warning[data-v-137afc95]:active:hover, .btn-warning.active[data-v-137afc95]:focus, .btn-warning.active[data-v-137afc95]:hover {\n  background-color: #ff6491 !important;\n  background-image: linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  background-image: -moz-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n.btn-warning[data-v-137afc95]:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all 0.15s ease;\n}\n.btn-warning[data-v-137afc95]:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n.btn-warning.disabled[data-v-137afc95], .btn-warning.disabled[data-v-137afc95]:hover, .btn-warning.disabled[data-v-137afc95]:focus, .btn-warning.disabled.focus[data-v-137afc95], .btn-warning.disabled[data-v-137afc95]:active, .btn-warning.disabled.active[data-v-137afc95], .btn-warning[data-v-137afc95]:disabled, .btn-warning[data-v-137afc95]:disabled:hover, .btn-warning[data-v-137afc95]:disabled:focus, .btn-warning:disabled.focus[data-v-137afc95], .btn-warning[data-v-137afc95]:disabled:active, .btn-warning:disabled.active[data-v-137afc95], .btn-warning[disabled][data-v-137afc95], .btn-warning[disabled][data-v-137afc95]:hover, .btn-warning[disabled][data-v-137afc95]:focus, .btn-warning[disabled].focus[data-v-137afc95], .btn-warning[disabled][data-v-137afc95]:active, .btn-warning[disabled].active[data-v-137afc95], fieldset[disabled] .btn-warning[data-v-137afc95], fieldset[disabled] .btn-warning[data-v-137afc95]:hover, fieldset[disabled] .btn-warning[data-v-137afc95]:focus, fieldset[disabled] .btn-warning.focus[data-v-137afc95], fieldset[disabled] .btn-warning[data-v-137afc95]:active, fieldset[disabled] .btn-warning.active[data-v-137afc95] {\n  background-color: #ff8d72;\n  border-color: #ff8d72;\n}\n.btn-warning.btn-simple[data-v-137afc95] {\n  color: #ff8d72;\n  border-color: #ff8d72;\n  background: transparent;\n}\n.btn-warning.btn-simple[data-v-137afc95]:hover, .btn-warning.btn-simple[data-v-137afc95]:focus, .btn-warning.btn-simple[data-v-137afc95]:active, .btn-warning.btn-simple[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #ff8d72;\n  border-color: #ff8d72;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n.btn-warning.btn-simple.active[data-v-137afc95] {\n  border-color: #ff8d72 !important;\n}\n.btn-warning.btn-simple.active[data-v-137afc95]:hover, .btn-warning.btn-simple.active[data-v-137afc95]:focus, .btn-warning.btn-simple.active[data-v-137afc95]:active, .btn-warning.btn-simple.active[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #ff8d72;\n  background-image: linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  background-image: -moz-linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72) !important;\n  background-color: #ff6491 !important;\n  box-shadow: none;\n}\n.btn-warning.btn-link[data-v-137afc95] {\n  color: #ff8d72;\n}\n.btn-warning.btn-link[data-v-137afc95]:hover, .btn-warning.btn-link[data-v-137afc95]:focus, .btn-warning.btn-link[data-v-137afc95]:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n.btn-warning[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n}\n.btn-danger[data-v-137afc95] {\n  background: #fd5d93;\n  background-image: linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #fd5d93;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n.btn-danger.animation-on-hover[data-v-137afc95]:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n.btn-danger[data-v-137afc95]:hover, .btn-danger[data-v-137afc95]:focus, .btn-danger[data-v-137afc95]:active, .btn-danger.active[data-v-137afc95], .btn-danger[data-v-137afc95]:active:focus, .btn-danger[data-v-137afc95]:active:hover, .btn-danger.active[data-v-137afc95]:focus, .btn-danger.active[data-v-137afc95]:hover {\n  background-color: #ec250d !important;\n  background-image: linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  background-image: -moz-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n.btn-danger[data-v-137afc95]:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all 0.15s ease;\n}\n.btn-danger[data-v-137afc95]:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n.btn-danger.disabled[data-v-137afc95], .btn-danger.disabled[data-v-137afc95]:hover, .btn-danger.disabled[data-v-137afc95]:focus, .btn-danger.disabled.focus[data-v-137afc95], .btn-danger.disabled[data-v-137afc95]:active, .btn-danger.disabled.active[data-v-137afc95], .btn-danger[data-v-137afc95]:disabled, .btn-danger[data-v-137afc95]:disabled:hover, .btn-danger[data-v-137afc95]:disabled:focus, .btn-danger:disabled.focus[data-v-137afc95], .btn-danger[data-v-137afc95]:disabled:active, .btn-danger:disabled.active[data-v-137afc95], .btn-danger[disabled][data-v-137afc95], .btn-danger[disabled][data-v-137afc95]:hover, .btn-danger[disabled][data-v-137afc95]:focus, .btn-danger[disabled].focus[data-v-137afc95], .btn-danger[disabled][data-v-137afc95]:active, .btn-danger[disabled].active[data-v-137afc95], fieldset[disabled] .btn-danger[data-v-137afc95], fieldset[disabled] .btn-danger[data-v-137afc95]:hover, fieldset[disabled] .btn-danger[data-v-137afc95]:focus, fieldset[disabled] .btn-danger.focus[data-v-137afc95], fieldset[disabled] .btn-danger[data-v-137afc95]:active, fieldset[disabled] .btn-danger.active[data-v-137afc95] {\n  background-color: #fd5d93;\n  border-color: #fd5d93;\n}\n.btn-danger.btn-simple[data-v-137afc95] {\n  color: #fd5d93;\n  border-color: #fd5d93;\n  background: transparent;\n}\n.btn-danger.btn-simple[data-v-137afc95]:hover, .btn-danger.btn-simple[data-v-137afc95]:focus, .btn-danger.btn-simple[data-v-137afc95]:active, .btn-danger.btn-simple[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #fd5d93;\n  border-color: #fd5d93;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n.btn-danger.btn-simple.active[data-v-137afc95] {\n  border-color: #fd5d93 !important;\n}\n.btn-danger.btn-simple.active[data-v-137afc95]:hover, .btn-danger.btn-simple.active[data-v-137afc95]:focus, .btn-danger.btn-simple.active[data-v-137afc95]:active, .btn-danger.btn-simple.active[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #fd5d93;\n  background-image: linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  background-image: -moz-linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93) !important;\n  background-color: #ec250d !important;\n  box-shadow: none;\n}\n.btn-danger.btn-link[data-v-137afc95] {\n  color: #fd5d93;\n}\n.btn-danger.btn-link[data-v-137afc95]:hover, .btn-danger.btn-link[data-v-137afc95]:focus, .btn-danger.btn-link[data-v-137afc95]:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n.btn-neutral[data-v-137afc95] {\n  background: #ffffff;\n  background-image: linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #ffffff;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #e14eca;\n}\n.btn-neutral.animation-on-hover[data-v-137afc95]:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n.btn-neutral[data-v-137afc95]:hover, .btn-neutral[data-v-137afc95]:focus, .btn-neutral[data-v-137afc95]:active, .btn-neutral.active[data-v-137afc95], .btn-neutral[data-v-137afc95]:active:focus, .btn-neutral[data-v-137afc95]:active:hover, .btn-neutral.active[data-v-137afc95]:focus, .btn-neutral.active[data-v-137afc95]:hover {\n  background-color: #ffffff !important;\n  background-image: linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  background-image: -moz-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n.btn-neutral[data-v-137afc95]:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all 0.15s ease;\n}\n.btn-neutral[data-v-137afc95]:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n.btn-neutral.disabled[data-v-137afc95], .btn-neutral.disabled[data-v-137afc95]:hover, .btn-neutral.disabled[data-v-137afc95]:focus, .btn-neutral.disabled.focus[data-v-137afc95], .btn-neutral.disabled[data-v-137afc95]:active, .btn-neutral.disabled.active[data-v-137afc95], .btn-neutral[data-v-137afc95]:disabled, .btn-neutral[data-v-137afc95]:disabled:hover, .btn-neutral[data-v-137afc95]:disabled:focus, .btn-neutral:disabled.focus[data-v-137afc95], .btn-neutral[data-v-137afc95]:disabled:active, .btn-neutral:disabled.active[data-v-137afc95], .btn-neutral[disabled][data-v-137afc95], .btn-neutral[disabled][data-v-137afc95]:hover, .btn-neutral[disabled][data-v-137afc95]:focus, .btn-neutral[disabled].focus[data-v-137afc95], .btn-neutral[disabled][data-v-137afc95]:active, .btn-neutral[disabled].active[data-v-137afc95], fieldset[disabled] .btn-neutral[data-v-137afc95], fieldset[disabled] .btn-neutral[data-v-137afc95]:hover, fieldset[disabled] .btn-neutral[data-v-137afc95]:focus, fieldset[disabled] .btn-neutral.focus[data-v-137afc95], fieldset[disabled] .btn-neutral[data-v-137afc95]:active, fieldset[disabled] .btn-neutral.active[data-v-137afc95] {\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n.btn-neutral.btn-danger[data-v-137afc95] {\n  color: #fd5d93;\n}\n.btn-neutral.btn-danger[data-v-137afc95]:hover, .btn-neutral.btn-danger[data-v-137afc95]:focus, .btn-neutral.btn-danger[data-v-137afc95]:active, .btn-neutral.btn-danger[data-v-137afc95]:active:focus {\n  color: #ec250d;\n}\n.btn-neutral.btn-info[data-v-137afc95] {\n  color: #1d8cf8;\n}\n.btn-neutral.btn-info[data-v-137afc95]:hover, .btn-neutral.btn-info[data-v-137afc95]:focus, .btn-neutral.btn-info[data-v-137afc95]:active, .btn-neutral.btn-info[data-v-137afc95]:active:focus {\n  color: #3358f4;\n}\n.btn-neutral.btn-warning[data-v-137afc95] {\n  color: #ff8d72;\n}\n.btn-neutral.btn-warning[data-v-137afc95]:hover, .btn-neutral.btn-warning[data-v-137afc95]:focus, .btn-neutral.btn-warning[data-v-137afc95]:active, .btn-neutral.btn-warning[data-v-137afc95]:active:focus {\n  color: #ff6491;\n}\n.btn-neutral.btn-success[data-v-137afc95] {\n  color: #00f2c3;\n}\n.btn-neutral.btn-success[data-v-137afc95]:hover, .btn-neutral.btn-success[data-v-137afc95]:focus, .btn-neutral.btn-success[data-v-137afc95]:active, .btn-neutral.btn-success[data-v-137afc95]:active:focus {\n  color: #0098f0;\n}\n.btn-neutral.btn-default[data-v-137afc95] {\n  color: #344675;\n}\n.btn-neutral.btn-default[data-v-137afc95]:hover, .btn-neutral.btn-default[data-v-137afc95]:focus, .btn-neutral.btn-default[data-v-137afc95]:active, .btn-neutral.btn-default[data-v-137afc95]:active:focus {\n  color: #263148;\n}\n.btn-neutral.active[data-v-137afc95], .btn-neutral[data-v-137afc95]:active, .btn-neutral[data-v-137afc95]:active:focus, .btn-neutral[data-v-137afc95]:active:hover, .btn-neutral.active[data-v-137afc95]:focus, .btn-neutral.active[data-v-137afc95]:hover, .show > .btn-neutral.dropdown-toggle[data-v-137afc95], .show > .btn-neutral.dropdown-toggle[data-v-137afc95]:focus, .show > .btn-neutral.dropdown-toggle[data-v-137afc95]:hover {\n  background-color: #ffffff;\n  color: #ba54f5;\n  box-shadow: none;\n}\n.btn-neutral[data-v-137afc95]:hover, .btn-neutral[data-v-137afc95]:focus {\n  color: #ba54f5;\n}\n.btn-neutral[data-v-137afc95]:hover:not(.nav-link), .btn-neutral[data-v-137afc95]:focus:not(.nav-link) {\n  box-shadow: none;\n}\n.btn-neutral.btn-simple[data-v-137afc95] {\n  color: #ffffff;\n  border-color: #ffffff;\n  background: transparent;\n}\n.btn-neutral.btn-simple[data-v-137afc95]:hover, .btn-neutral.btn-simple[data-v-137afc95]:focus, .btn-neutral.btn-simple[data-v-137afc95]:active, .btn-neutral.btn-simple[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #ffffff;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n.btn-neutral.btn-simple.active[data-v-137afc95] {\n  border-color: #ffffff !important;\n}\n.btn-neutral.btn-simple.active[data-v-137afc95]:hover, .btn-neutral.btn-simple.active[data-v-137afc95]:focus, .btn-neutral.btn-simple.active[data-v-137afc95]:active, .btn-neutral.btn-simple.active[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #ffffff;\n  background-image: linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  background-image: -moz-linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff) !important;\n  background-color: #ffffff !important;\n  box-shadow: none;\n}\n.btn-neutral.btn-link[data-v-137afc95] {\n  color: #ffffff;\n}\n.btn-neutral.btn-link[data-v-137afc95]:hover, .btn-neutral.btn-link[data-v-137afc95]:focus, .btn-neutral.btn-link[data-v-137afc95]:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n.btn-travel[data-v-137afc95] {\n  background: #e17e4e;\n  background-image: linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e);\n  background-size: 210% 210%;\n  background-position: top right;\n  background-color: #e17e4e;\n  transition: all 0.15s ease;\n  box-shadow: none;\n  color: #ffffff;\n}\n.btn-travel.animation-on-hover[data-v-137afc95]:hover {\n  background-position: bottom left;\n  transition: 0.3s ease-in-out;\n}\n.btn-travel[data-v-137afc95]:hover, .btn-travel[data-v-137afc95]:focus, .btn-travel[data-v-137afc95]:active, .btn-travel.active[data-v-137afc95], .btn-travel[data-v-137afc95]:active:focus, .btn-travel[data-v-137afc95]:active:hover, .btn-travel.active[data-v-137afc95]:focus, .btn-travel.active[data-v-137afc95]:hover {\n  background-color: #ffbf00 !important;\n  background-image: linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e) !important;\n  background-image: -moz-linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e) !important;\n  color: #ffffff;\n  box-shadow: none;\n}\n.btn-travel[data-v-137afc95]:active {\n  box-shadow: none !important;\n  transform: translateY(1px) !important;\n  transition: all 0.15s ease;\n}\n.btn-travel[data-v-137afc95]:not([data-action]):hover {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n.btn-travel.disabled[data-v-137afc95], .btn-travel.disabled[data-v-137afc95]:hover, .btn-travel.disabled[data-v-137afc95]:focus, .btn-travel.disabled.focus[data-v-137afc95], .btn-travel.disabled[data-v-137afc95]:active, .btn-travel.disabled.active[data-v-137afc95], .btn-travel[data-v-137afc95]:disabled, .btn-travel[data-v-137afc95]:disabled:hover, .btn-travel[data-v-137afc95]:disabled:focus, .btn-travel:disabled.focus[data-v-137afc95], .btn-travel[data-v-137afc95]:disabled:active, .btn-travel:disabled.active[data-v-137afc95], .btn-travel[disabled][data-v-137afc95], .btn-travel[disabled][data-v-137afc95]:hover, .btn-travel[disabled][data-v-137afc95]:focus, .btn-travel[disabled].focus[data-v-137afc95], .btn-travel[disabled][data-v-137afc95]:active, .btn-travel[disabled].active[data-v-137afc95], fieldset[disabled] .btn-travel[data-v-137afc95], fieldset[disabled] .btn-travel[data-v-137afc95]:hover, fieldset[disabled] .btn-travel[data-v-137afc95]:focus, fieldset[disabled] .btn-travel.focus[data-v-137afc95], fieldset[disabled] .btn-travel[data-v-137afc95]:active, fieldset[disabled] .btn-travel.active[data-v-137afc95] {\n  background-color: #e17e4e;\n  border-color: #e17e4e;\n}\n.btn-travel.btn-simple[data-v-137afc95] {\n  color: #e17e4e;\n  border-color: #e17e4e;\n  background: transparent;\n}\n.btn-travel.btn-simple[data-v-137afc95]:hover, .btn-travel.btn-simple[data-v-137afc95]:focus, .btn-travel.btn-simple[data-v-137afc95]:active, .btn-travel.btn-simple[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #e17e4e;\n  border-color: #e17e4e;\n  background-color: transparent !important;\n  background-image: none !important;\n  box-shadow: none;\n}\n.btn-travel.btn-simple.active[data-v-137afc95] {\n  border-color: #e17e4e !important;\n}\n.btn-travel.btn-simple.active[data-v-137afc95]:hover, .btn-travel.btn-simple.active[data-v-137afc95]:focus, .btn-travel.btn-simple.active[data-v-137afc95]:active, .btn-travel.btn-simple.active[data-v-137afc95]:not(:disabled):not(.disabled):active {\n  color: #ffffff;\n  border-color: #e17e4e;\n  background-image: linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e) !important;\n  background-image: -moz-linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e) !important;\n  background-color: #ffbf00 !important;\n  box-shadow: none;\n}\n.btn-travel.btn-link[data-v-137afc95] {\n  color: #e17e4e;\n}\n.btn-travel.btn-link[data-v-137afc95]:hover, .btn-travel.btn-link[data-v-137afc95]:focus, .btn-travel.btn-link[data-v-137afc95]:active {\n  background-color: transparent !important;\n  background-image: none !important;\n  color: #ffffff !important;\n  text-decoration: none;\n  box-shadow: none;\n}\n.btn[data-v-137afc95]:disabled, .btn[disabled][data-v-137afc95], .btn.disabled[data-v-137afc95] {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  pointer-events: none;\n}\n.btn-simple[data-v-137afc95] {\n  border: 1px solid;\n  border-color: #344675;\n  box-shadow: none;\n  padding: 10px 22px;\n  background-color: transparent;\n}\n.btn-simple.disabled[data-v-137afc95], .btn-simple.disabled[data-v-137afc95]:hover, .btn-simple.disabled[data-v-137afc95]:focus, .btn-simple.disabled.focus[data-v-137afc95], .btn-simple.disabled[data-v-137afc95]:active, .btn-simple.disabled.active[data-v-137afc95], .btn-simple[data-v-137afc95]:disabled, .btn-simple[data-v-137afc95]:disabled:hover, .btn-simple[data-v-137afc95]:disabled:focus, .btn-simple:disabled.focus[data-v-137afc95], .btn-simple[data-v-137afc95]:disabled:active, .btn-simple:disabled.active[data-v-137afc95], .btn-simple[disabled][data-v-137afc95], .btn-simple[disabled][data-v-137afc95]:hover, .btn-simple[disabled][data-v-137afc95]:focus, .btn-simple[disabled].focus[data-v-137afc95], .btn-simple[disabled][data-v-137afc95]:active, .btn-simple[disabled].active[data-v-137afc95], fieldset[disabled] .btn-simple[data-v-137afc95], fieldset[disabled] .btn-simple[data-v-137afc95]:hover, fieldset[disabled] .btn-simple[data-v-137afc95]:focus, fieldset[disabled] .btn-simple.focus[data-v-137afc95], fieldset[disabled] .btn-simple[data-v-137afc95]:active, fieldset[disabled] .btn-simple.active[data-v-137afc95],\n.btn-link.disabled[data-v-137afc95],\n.btn-link.disabled[data-v-137afc95]:hover,\n.btn-link.disabled[data-v-137afc95]:focus,\n.btn-link.disabled.focus[data-v-137afc95],\n.btn-link.disabled[data-v-137afc95]:active,\n.btn-link.disabled.active[data-v-137afc95],\n.btn-link[data-v-137afc95]:disabled,\n.btn-link[data-v-137afc95]:disabled:hover,\n.btn-link[data-v-137afc95]:disabled:focus,\n.btn-link:disabled.focus[data-v-137afc95],\n.btn-link[data-v-137afc95]:disabled:active,\n.btn-link:disabled.active[data-v-137afc95],\n.btn-link[disabled][data-v-137afc95],\n.btn-link[disabled][data-v-137afc95]:hover,\n.btn-link[disabled][data-v-137afc95]:focus,\n.btn-link[disabled].focus[data-v-137afc95],\n.btn-link[disabled][data-v-137afc95]:active,\n.btn-link[disabled].active[data-v-137afc95],\nfieldset[disabled] .btn-link[data-v-137afc95],\nfieldset[disabled] .btn-link[data-v-137afc95]:hover,\nfieldset[disabled] .btn-link[data-v-137afc95]:focus,\nfieldset[disabled] .btn-link.focus[data-v-137afc95],\nfieldset[disabled] .btn-link[data-v-137afc95]:active,\nfieldset[disabled] .btn-link.active[data-v-137afc95] {\n  background: transparent;\n}\n.btn[data-v-137afc95]:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active[data-v-137afc95] {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n}\n.btn-link[data-v-137afc95] {\n  border: 0;\n  box-shadow: none;\n  padding: 0.5rem 0.7rem;\n  background: transparent;\n  color: #e3e3e3;\n  font-weight: 600;\n}\n.btn-link[data-v-137afc95]:hover {\n  box-shadow: none !important;\n  transform: none !important;\n}\n.btn-lg[data-v-137afc95], .btn-group-lg > .btn[data-v-137afc95] {\n  font-size: 0.875rem;\n  border-radius: 0.4285rem;\n  padding: 15px 48px;\n}\n.btn-lg.btn-simple[data-v-137afc95], .btn-group-lg > .btn-simple.btn[data-v-137afc95] {\n  padding: 14px 47px;\n}\n.btn-sm[data-v-137afc95], .btn-group-sm > .btn[data-v-137afc95] {\n  font-size: 0.875rem;\n  border-radius: 0.2857rem;\n  padding: 5px 15px;\n}\n.btn-sm.btn-simple[data-v-137afc95], .btn-group-sm > .btn-simple.btn[data-v-137afc95] {\n  padding: 4px 14px;\n}\n.btn-wd[data-v-137afc95] {\n  min-width: 140px;\n}\n.btn-group.select[data-v-137afc95] {\n  width: 100%;\n}\n.btn-group .btn.active[data-v-137afc95] {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n.btn-group.select .btn[data-v-137afc95] {\n  text-align: left;\n}\n.btn-group.select .caret[data-v-137afc95] {\n  position: absolute;\n  top: 50%;\n  margin-top: -1px;\n  right: 8px;\n}\n.btn-group .btn.active[data-v-137afc95] {\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);\n  transform: translateY(-1px);\n  -webkit-transform: translateY(-1px);\n}\n.btn-round[data-v-137afc95] {\n  border-width: 1px;\n  border-radius: 30px;\n}\n.btn-round.btn-simple[data-v-137afc95] {\n  padding: 10px 22px;\n}\n.no-caret.dropdown-toggle[data-v-137afc95]::after {\n  display: none;\n}\n.btn-secondary[data-v-137afc95]:not(:disabled):not(.disabled):active,\n.btn-secondary:not(:disabled):not(.disabled).active[data-v-137afc95],\n.show > .btn-secondary.dropdown-toggle[data-v-137afc95] {\n  color: #ffffff;\n}\n.btn-group label.btn.active[data-v-137afc95] {\n  transform: translateY(0);\n  -webkit-transform: translateY(0);\n}\n\n/* Form controls */\n.form-control[data-v-137afc95]::-moz-placeholder {\n  color: #6c757c;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.form-control[data-v-137afc95]:-moz-placeholder {\n  color: #6c757c;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.form-control[data-v-137afc95]::-webkit-input-placeholder {\n  color: #6c757c;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.form-control[data-v-137afc95]:-ms-input-placeholder {\n  color: #6c757c;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.form-control[data-v-137afc95] {\n  border-color: #2b3553;\n  border-radius: 0.4285rem;\n  font-size: 0.7500000025rem;\n  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n}\n.form-control[data-v-137afc95]:focus {\n  border-color: #e14eca;\n  background-color: transparent;\n  box-shadow: none;\n}\n.form-control:focus + .input-group-append .input-group-text[data-v-137afc95], .form-control:focus ~ .input-group-append .input-group-text[data-v-137afc95], .form-control:focus + .input-group-prepend .input-group-text[data-v-137afc95], .form-control:focus ~ .input-group-prepend .input-group-text[data-v-137afc95] {\n  border: 1px solid #e14eca;\n  border-left: none;\n  background-color: transparent;\n}\n.has-success .form-control[data-v-137afc95], .has-error .form-control[data-v-137afc95], .has-success .form-control[data-v-137afc95]:focus, .has-error .form-control[data-v-137afc95]:focus {\n  box-shadow: none;\n}\n.has-danger .form-control.form-control-success[data-v-137afc95], .has-danger .form-control.form-control-danger[data-v-137afc95], .has-success .form-control.form-control-success[data-v-137afc95], .has-success .form-control.form-control-danger[data-v-137afc95] {\n  background-image: none;\n}\n.form-control + .form-control-feedback[data-v-137afc95] {\n  border-radius: 0.4285rem;\n  margin-top: -7px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  vertical-align: middle;\n}\n.open .form-control[data-v-137afc95] {\n  border-radius: 0.4285rem 0.4285rem 0 0;\n  border-bottom-color: transparent;\n}\n.form-control + .input-group-append .input-group-text[data-v-137afc95], .form-control + .input-group-prepend .input-group-text[data-v-137afc95] {\n  background-color: #ffffff;\n}\n.has-success .input-group-append .input-group-text[data-v-137afc95],\n.has-success .input-group-prepend .input-group-text[data-v-137afc95],\n.has-success .form-control[data-v-137afc95] {\n  border-color: #2b3553;\n}\n.has-success .form-control[data-v-137afc95]:focus,\n.has-success.input-group-focus .input-group-append .input-group-text[data-v-137afc95],\n.has-success.input-group-focus .input-group-prepend .input-group-text[data-v-137afc95] {\n  border-color: #00bf9a;\n}\n.has-danger .form-control[data-v-137afc95],\n.has-danger .input-group-append .input-group-text[data-v-137afc95],\n.has-danger .input-group-prepend .input-group-text[data-v-137afc95],\n.has-danger.input-group-focus .input-group-prepend .input-group-text[data-v-137afc95],\n.has-danger.input-group-focus .input-group-append .input-group-text[data-v-137afc95] {\n  border-color: #f33620;\n  color: #ec250d;\n  background-color: rgba(222, 222, 222, 0.1);\n}\n.has-danger .form-control[data-v-137afc95]:focus,\n.has-danger .input-group-append .input-group-text[data-v-137afc95]:focus,\n.has-danger .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.has-danger.input-group-focus .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.has-danger.input-group-focus .input-group-append .input-group-text[data-v-137afc95]:focus {\n  background-color: transparent;\n}\n.has-success[data-v-137afc95]:after,\n.has-danger[data-v-137afc95]:after {\n  font-family: \"nucleo\";\n  content: \"\\ea1b\";\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 13px;\n  color: #00f2c3;\n  font-size: 11px;\n}\n.has-success.form-control-lg[data-v-137afc95]:after,\n.has-danger.form-control-lg[data-v-137afc95]:after {\n  font-size: 13px;\n  top: 24px;\n}\n.has-success.has-label[data-v-137afc95]:after,\n.has-danger.has-label[data-v-137afc95]:after {\n  top: 37px;\n}\n.has-success.form-check[data-v-137afc95]:after,\n.has-danger.form-check[data-v-137afc95]:after {\n  display: none !important;\n}\n.has-success.form-check .form-check-label[data-v-137afc95],\n.has-danger.form-check .form-check-label[data-v-137afc95] {\n  color: #00f2c3;\n}\n.has-danger[data-v-137afc95]:after {\n  content: \"\\ea48\";\n  color: #ec250d;\n}\n.has-danger.form-check .form-check-label[data-v-137afc95] {\n  color: #ec250d;\n}\n.wrapper[data-v-137afc95] {\n  position: relative;\n  top: 0;\n  height: 100vh;\n}\n.wrapper.wrapper-full-page[data-v-137afc95] {\n  min-height: 100vh;\n  height: auto;\n}\n.sidebar-wrapper ul li div.collapse ul li div.collapse ul li a[data-v-137afc95],\n.sidebar-wrapper ul li div.collapse ul li div.collapsing ul li a[data-v-137afc95],\n.sidebar-wrapper ul li div.collapsing ul li div.collapse ul li a[data-v-137afc95] {\n  margin-left: 25px;\n}\n.sidebar[data-v-137afc95],\n.off-canvas-sidebar[data-v-137afc95] {\n  background: #ba54f5;\n  background: linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);\n  height: calc(100vh - 90px);\n  width: 230px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-size: cover;\n  background-position: center center;\n  display: block;\n  box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.6);\n  margin-top: 80px;\n  margin-left: 20px;\n  border-radius: 5px;\n  transition: 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n.sidebar .sidebar-wrapper[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper[data-v-137afc95] {\n  width: 100%;\n  min-height: 100%;\n  max-height: calc(100vh - 705px);\n  z-index: 4;\n  position: relative;\n  overflow: auto;\n}\n.sidebar .sidebar-wrapper .dropdown .dropdown-backdrop[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper .dropdown .dropdown-backdrop[data-v-137afc95] {\n  display: none !important;\n}\n.sidebar .sidebar-wrapper .navbar-form[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper .navbar-form[data-v-137afc95] {\n  border: none;\n}\n.sidebar .sidebar-wrapper > .nav [data-toggle=collapse] ~ div > ul > li > a span[data-v-137afc95],\n.sidebar .sidebar-wrapper .user .info [data-toggle=collapse] ~ div > ul > li > a span[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper > .nav [data-toggle=collapse] ~ div > ul > li > a span[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=collapse] ~ div > ul > li > a span[data-v-137afc95] {\n  display: inline-block;\n}\n.sidebar .sidebar-wrapper > .nav [data-toggle=collapse] ~ div > ul > li > a .sidebar-normal[data-v-137afc95],\n.sidebar .sidebar-wrapper .user .info [data-toggle=collapse] ~ div > ul > li > a .sidebar-normal[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper > .nav [data-toggle=collapse] ~ div > ul > li > a .sidebar-normal[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=collapse] ~ div > ul > li > a .sidebar-normal[data-v-137afc95] {\n  margin: 0;\n  position: relative;\n  transform: translateX(0px);\n  opacity: 1;\n  white-space: nowrap;\n  display: block;\n  line-height: 23px;\n  z-index: 1;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sidebar .sidebar-wrapper > .nav [data-toggle=collapse] ~ div > ul > li > a .sidebar-mini-icon[data-v-137afc95],\n.sidebar .sidebar-wrapper .user .info [data-toggle=collapse] ~ div > ul > li > a .sidebar-mini-icon[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper > .nav [data-toggle=collapse] ~ div > ul > li > a .sidebar-mini-icon[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=collapse] ~ div > ul > li > a .sidebar-mini-icon[data-v-137afc95] {\n  text-transform: uppercase;\n  width: 34px;\n  margin-right: 10px;\n  margin-left: 0px;\n  font-size: 12px;\n  text-align: center;\n  line-height: 25px;\n  position: relative;\n  float: left;\n  z-index: 1;\n  display: inherit;\n  line-height: 24px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sidebar .sidebar-wrapper > .nav [data-toggle=collapse] ~ div > ul > li > a i[data-v-137afc95],\n.sidebar .sidebar-wrapper .user .info [data-toggle=collapse] ~ div > ul > li > a i[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper > .nav [data-toggle=collapse] ~ div > ul > li > a i[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=collapse] ~ div > ul > li > a i[data-v-137afc95] {\n  font-size: 17px;\n  line-height: 20px;\n  width: 26px;\n}\n.sidebar .sidebar-wrapper [data-toggle=collapse] ~ div > ul > li:hover > a .sidebar-mini-icon[data-v-137afc95], .sidebar .sidebar-wrapper [data-toggle=collapse] ~ div > ul > li:hover > a .sidebar-normal[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper [data-toggle=collapse] ~ div > ul > li:hover > a .sidebar-mini-icon[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper [data-toggle=collapse] ~ div > ul > li:hover > a .sidebar-normal[data-v-137afc95] {\n  color: #ffffff;\n}\n.sidebar .sidebar-wrapper .nav [data-toggle=collapse] ~ div > ul > li > a .sidebar-mini-icon[data-v-137afc95],\n.off-canvas-sidebar .sidebar-wrapper .nav [data-toggle=collapse] ~ div > ul > li > a .sidebar-mini-icon[data-v-137afc95] {\n  opacity: 0;\n}\n.sidebar .navbar-minimize[data-v-137afc95],\n.off-canvas-sidebar .navbar-minimize[data-v-137afc95] {\n  position: absolute;\n  right: 20px;\n  top: 2px;\n  opacity: 1;\n}\n.sidebar .logo-tim[data-v-137afc95],\n.off-canvas-sidebar .logo-tim[data-v-137afc95] {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar .logo-tim img[data-v-137afc95],\n.off-canvas-sidebar .logo-tim img[data-v-137afc95] {\n  width: 60px;\n  height: 60px;\n}\n.sidebar .nav[data-v-137afc95],\n.off-canvas-sidebar .nav[data-v-137afc95] {\n  margin-top: 20px;\n  display: block;\n}\n.sidebar .nav .caret[data-v-137afc95],\n.off-canvas-sidebar .nav .caret[data-v-137afc95] {\n  top: 14px;\n  position: absolute;\n  right: 10px;\n}\n.sidebar .nav li > a + div .nav[data-v-137afc95],\n.off-canvas-sidebar .nav li > a + div .nav[data-v-137afc95] {\n  margin-top: 5px;\n}\n.sidebar .nav li > a + div .nav li > a[data-v-137afc95],\n.off-canvas-sidebar .nav li > a + div .nav li > a[data-v-137afc95] {\n  margin-top: 0px;\n  padding: 8px 8px;\n}\n.sidebar .nav li > a[data-v-137afc95],\n.off-canvas-sidebar .nav li > a[data-v-137afc95] {\n  margin: 10px 15px 0;\n  border-radius: 30px;\n  color: #ffffff;\n  display: block;\n  text-decoration: none;\n  position: relative;\n  text-transform: uppercase;\n  cursor: pointer;\n  font-size: 0.62475rem;\n  padding: 10px 8px;\n  line-height: 1.625rem;\n}\n.sidebar .nav li:first-child > a[data-v-137afc95],\n.off-canvas-sidebar .nav li:first-child > a[data-v-137afc95] {\n  margin: 0 15px;\n}\n.sidebar .nav li:hover:not(.active) > a p[data-v-137afc95], .sidebar .nav li:hover:not(.active) > a i[data-v-137afc95], .sidebar .nav li:focus:not(.active) > a p[data-v-137afc95], .sidebar .nav li:focus:not(.active) > a i[data-v-137afc95],\n.off-canvas-sidebar .nav li:hover:not(.active) > a p[data-v-137afc95],\n.off-canvas-sidebar .nav li:hover:not(.active) > a i[data-v-137afc95],\n.off-canvas-sidebar .nav li:focus:not(.active) > a p[data-v-137afc95],\n.off-canvas-sidebar .nav li:focus:not(.active) > a i[data-v-137afc95] {\n  color: #ffffff;\n}\n.sidebar .nav li:hover:not(.active) > a i[data-v-137afc95], .sidebar .nav li:focus:not(.active) > a i[data-v-137afc95],\n.off-canvas-sidebar .nav li:hover:not(.active) > a i[data-v-137afc95],\n.off-canvas-sidebar .nav li:focus:not(.active) > a i[data-v-137afc95] {\n  color: #ffffff;\n}\n.sidebar .nav li.active > a[data-v-137afc95]:not([data-toggle=collapse]),\n.off-canvas-sidebar .nav li.active > a[data-v-137afc95]:not([data-toggle=collapse]) {\n  background: transparent;\n}\n.sidebar .nav li.active > a:not([data-toggle=collapse]) i[data-v-137afc95], .sidebar .nav li.active > a:not([data-toggle=collapse]) p[data-v-137afc95],\n.off-canvas-sidebar .nav li.active > a:not([data-toggle=collapse]) i[data-v-137afc95],\n.off-canvas-sidebar .nav li.active > a:not([data-toggle=collapse]) p[data-v-137afc95] {\n  color: white;\n}\n.sidebar .nav li.active > a[data-v-137afc95]:not([data-toggle=collapse]):before,\n.off-canvas-sidebar .nav li.active > a[data-v-137afc95]:not([data-toggle=collapse]):before {\n  content: \" \";\n  position: absolute;\n  height: 6px;\n  width: 6px;\n  top: 22px;\n  left: -4px;\n  background: #ffffff;\n  border-radius: 50%;\n}\n.sidebar .nav li.active > a[data-toggle=collapse][data-v-137afc95],\n.off-canvas-sidebar .nav li.active > a[data-toggle=collapse][data-v-137afc95] {\n  background: transparent;\n  box-shadow: none;\n  color: #ffffff;\n}\n.sidebar .nav li.active > a[data-toggle=collapse] i[data-v-137afc95],\n.off-canvas-sidebar .nav li.active > a[data-toggle=collapse] i[data-v-137afc95] {\n  color: #ffffff;\n}\n.sidebar .nav li.active > a[data-toggle=collapse] + div .nav .active a[data-v-137afc95],\n.off-canvas-sidebar .nav li.active > a[data-toggle=collapse] + div .nav .active a[data-v-137afc95] {\n  box-shadow: none;\n}\n.sidebar .nav li.active > a[data-toggle=collapse] + div .nav .active a .sidebar-mini-icon[data-v-137afc95], .sidebar .nav li.active > a[data-toggle=collapse] + div .nav .active a .sidebar-normal[data-v-137afc95],\n.off-canvas-sidebar .nav li.active > a[data-toggle=collapse] + div .nav .active a .sidebar-mini-icon[data-v-137afc95],\n.off-canvas-sidebar .nav li.active > a[data-toggle=collapse] + div .nav .active a .sidebar-normal[data-v-137afc95] {\n  color: #ffffff;\n  font-weight: 400;\n}\n.sidebar .nav li.active > a[data-toggle=collapse] + div .nav .active a[data-v-137afc95]:before,\n.off-canvas-sidebar .nav li.active > a[data-toggle=collapse] + div .nav .active a[data-v-137afc95]:before {\n  content: \" \";\n  position: absolute;\n  height: 6px;\n  width: 6px;\n  top: 17px;\n  left: -4px;\n  background: #ffffff;\n  border-radius: 50%;\n}\n.sidebar .nav li.active > a[data-toggle=collapse][data-v-137afc95]:before,\n.off-canvas-sidebar .nav li.active > a[data-toggle=collapse][data-v-137afc95]:before {\n  content: \" \";\n  position: absolute;\n  height: 6px;\n  width: 6px;\n  top: 22px;\n  left: -4px;\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 50%;\n}\n.sidebar .nav p[data-v-137afc95],\n.off-canvas-sidebar .nav p[data-v-137afc95] {\n  margin: 0;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 30px;\n  position: relative;\n  display: block;\n  height: auto;\n  white-space: nowrap;\n}\n.sidebar .nav i[data-v-137afc95],\n.off-canvas-sidebar .nav i[data-v-137afc95] {\n  font-size: 20px;\n  float: left;\n  margin-right: 12px;\n  line-height: 30px;\n  width: 34px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  position: relative;\n}\n.sidebar .logo[data-v-137afc95],\n.off-canvas-sidebar .logo[data-v-137afc95] {\n  position: relative;\n  padding: 0.5rem 0.7rem;\n  z-index: 4;\n}\n.sidebar .logo a.logo-mini[data-v-137afc95],\n.off-canvas-sidebar .logo a.logo-mini[data-v-137afc95] {\n  opacity: 1;\n  float: left;\n  width: 34px;\n  text-align: center;\n  margin-left: 12px;\n  margin-right: 10px;\n}\n.sidebar .logo a.logo-mini .logo-img[data-v-137afc95],\n.off-canvas-sidebar .logo a.logo-mini .logo-img[data-v-137afc95] {\n  width: 32px;\n  display: inline-block;\n  height: 32px;\n  margin-left: 0;\n  margin-right: 15px;\n  background: #fff;\n  border-radius: 32px;\n  text-align: center;\n}\n.sidebar .logo a.logo-mini .logo-img img[data-v-137afc95],\n.off-canvas-sidebar .logo a.logo-mini .logo-img img[data-v-137afc95] {\n  max-width: 21px;\n}\n.sidebar .logo a.logo-mini .logo-img.logo-img-rtl[data-v-137afc95],\n.off-canvas-sidebar .logo a.logo-mini .logo-img.logo-img-rtl[data-v-137afc95] {\n  margin-right: 0;\n}\n.sidebar .logo a.logo-normal[data-v-137afc95],\n.off-canvas-sidebar .logo a.logo-normal[data-v-137afc95] {\n  display: block;\n  opacity: 1;\n  transform: translate3d(0px, 0, 0);\n}\n.sidebar .logo[data-v-137afc95]:after,\n.off-canvas-sidebar .logo[data-v-137afc95]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 15px;\n  height: 1px;\n  width: calc(100% - 30px);\n  background: rgba(255, 255, 255, 0.5);\n}\n.sidebar .logo p[data-v-137afc95],\n.off-canvas-sidebar .logo p[data-v-137afc95] {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  color: #ffffff;\n  line-height: 20px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.sidebar .logo .simple-text[data-v-137afc95],\n.off-canvas-sidebar .logo .simple-text[data-v-137afc95] {\n  text-transform: uppercase;\n  padding: 0.5rem 0;\n  display: block;\n  white-space: nowrap;\n  color: #ffffff;\n  text-decoration: none;\n  font-weight: 400;\n  line-height: 30px;\n  overflow: hidden;\n}\n.sidebar .logo-tim[data-v-137afc95],\n.off-canvas-sidebar .logo-tim[data-v-137afc95] {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar .logo-tim img[data-v-137afc95],\n.off-canvas-sidebar .logo-tim img[data-v-137afc95] {\n  width: 60px;\n  height: 60px;\n}\n.sidebar[data=blue][data-v-137afc95],\n.off-canvas-sidebar[data=blue][data-v-137afc95] {\n  background: #3358f4;\n  background: linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%);\n}\n.sidebar[data=green][data-v-137afc95],\n.off-canvas-sidebar[data=green][data-v-137afc95] {\n  background: #0098f0;\n  background: linear-gradient(0deg, #0098f0 0%, #00f2c3 100%);\n}\n.sidebar[data=vue][data-v-137afc95],\n.off-canvas-sidebar[data=vue][data-v-137afc95] {\n  background: #389466;\n  background: linear-gradient(0deg, #389466 0%, #42b883 100%);\n}\n.sidebar[data=travel][data-v-137afc95],\n.off-canvas-sidebar[data=travel][data-v-137afc95] {\n  background: #ffbf00;\n  background: linear-gradient(0deg, #ffbf00 0%, #e17e4e 100%);\n}\n.sidebar .user[data-v-137afc95],\n.off-canvas-sidebar .user[data-v-137afc95] {\n  padding-bottom: 20px;\n  margin: 20px auto 0;\n  position: relative;\n}\n.sidebar .user[data-v-137afc95]:after,\n.off-canvas-sidebar .user[data-v-137afc95]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 15px;\n  height: 1px;\n  width: calc(100% - 30px);\n  background: rgba(255, 255, 255, 0.5);\n}\n.sidebar .user .photo[data-v-137afc95],\n.off-canvas-sidebar .user .photo[data-v-137afc95] {\n  width: 34px;\n  height: 34px;\n  overflow: hidden;\n  float: left;\n  z-index: 5;\n  margin-right: 10px;\n  border-radius: 50%;\n  margin-left: 23px;\n  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);\n}\n.sidebar .user .photo img[data-v-137afc95],\n.off-canvas-sidebar .user .photo img[data-v-137afc95] {\n  width: 100%;\n}\n.sidebar .user a[data-v-137afc95],\n.off-canvas-sidebar .user a[data-v-137afc95] {\n  color: #ffffff;\n  text-decoration: none;\n  padding: 0.5rem 15px;\n  white-space: nowrap;\n}\n.sidebar .user .info > a[data-v-137afc95],\n.off-canvas-sidebar .user .info > a[data-v-137afc95] {\n  display: block;\n  line-height: 18px;\n}\n.sidebar .user .info > a > span[data-v-137afc95],\n.off-canvas-sidebar .user .info > a > span[data-v-137afc95] {\n  display: block;\n  position: relative;\n  opacity: 1;\n}\n.sidebar .user .info .caret[data-v-137afc95],\n.off-canvas-sidebar .user .info .caret[data-v-137afc95] {\n  position: absolute;\n  top: 8px;\n  right: 18px;\n}\n.visible-on-sidebar-regular[data-v-137afc95] {\n  display: inline-block !important;\n}\n.visible-on-sidebar-mini[data-v-137afc95] {\n  display: none !important;\n}\n.off-canvas-sidebar .nav > li > a[data-v-137afc95],\n.off-canvas-sidebar .nav > li > a[data-v-137afc95]:hover {\n  color: #ffffff;\n}\n.off-canvas-sidebar .nav > li > a[data-v-137afc95]:focus {\n  background: rgba(200, 200, 200, 0.2);\n}\n.main-panel[data-v-137afc95] {\n  position: relative;\n  float: right;\n  width: 100%;\n  min-height: 100vh;\n  background: linear-gradient(#1e1e2f, #1e1e24);\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n.main-panel > .content[data-v-137afc95] {\n  padding: 80px 30px 30px 280px;\n  min-height: calc(100vh - 70px);\n}\n.main-panel > .navbar[data-v-137afc95] {\n  margin-bottom: 0;\n}\n.main-panel .header[data-v-137afc95] {\n  margin-bottom: 50px;\n}\n.perfect-scrollbar-on .sidebar[data-v-137afc95],\n.perfect-scrollbar-on .main-panel[data-v-137afc95] {\n  height: 100%;\n  max-height: 100%;\n}\n@media (min-width: 991px) {\n.sidebar[data-v-137afc95],\n  .main-panel[data-v-137afc95],\n  .sidebar-wrapper[data-v-137afc95] {\n    transition-property: top, bottom, width;\n    transition-duration: 0.2s, 0.2s, 0.35s;\n    transition-timing-function: linear, linear, ease;\n    -webkit-overflow-scrolling: touch;\n}\n.sidebar-mini .visible-on-sidebar-regular[data-v-137afc95] {\n    display: none !important;\n}\n.sidebar-mini .visible-on-sidebar-mini[data-v-137afc95] {\n    display: inline-block !important;\n}\n.sidebar-mini .sidebar[data-v-137afc95] {\n    width: 80px;\n}\n.sidebar-mini .sidebar .sidebar-wrapper[data-v-137afc95] {\n    width: 100% !important;\n}\n.sidebar-mini .sidebar[data-v-137afc95] {\n    display: block;\n    z-index: 1030;\n    box-shadow: 0px 2px 22px 0 rgba(0, 0, 0, 0.2), 0px 2px 30px 0 rgba(0, 0, 0, 0.35);\n}\n.sidebar-mini .sidebar .logo a.logo-normal[data-v-137afc95] {\n    opacity: 0;\n    transform: translate3d(-25px, 0, 0);\n}\n.sidebar-mini .sidebar .sidebar-wrapper > .nav [data-toggle=collapse] ~ div > ul > li > a .sidebar-normal[data-v-137afc95],\n  .sidebar-mini .sidebar .sidebar-wrapper .user .info [data-toggle=collapse] ~ div > ul > li > a .sidebar-normal[data-v-137afc95],\n  .sidebar-mini .sidebar .sidebar-wrapper .user .info > a > span[data-v-137afc95],\n  .sidebar-mini .sidebar .sidebar-wrapper > .nav li > a p[data-v-137afc95] {\n    transform: translate3d(-25px, 0, 0);\n    opacity: 0;\n}\n.sidebar-mini .sidebar .nav [data-toggle=collapse] ~ div > ul > li > a .sidebar-mini-icon[data-v-137afc95] {\n    opacity: 1;\n}\n.sidebar-mini .sidebar[data-v-137afc95]:hover {\n    width: 260px;\n}\n.sidebar-mini .sidebar:hover .logo a.logo-normal[data-v-137afc95] {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n}\n.sidebar-mini .sidebar:hover .navbar-minimize[data-v-137afc95] {\n    opacity: 1;\n}\n.sidebar-mini .sidebar:hover .sidebar-wrapper[data-v-137afc95] {\n    width: 260px;\n}\n.sidebar-mini .sidebar:hover .sidebar-wrapper > .nav li > a p[data-v-137afc95],\n  .sidebar-mini .sidebar:hover .sidebar-wrapper > .nav [data-toggle=collapse] ~ div > ul > li > a .sidebar-normal[data-v-137afc95],\n  .sidebar-mini .sidebar:hover .sidebar-wrapper .user .info [data-toggle=collapse] ~ div > ul > li > a .sidebar-normal[data-v-137afc95],\n  .sidebar-mini .sidebar:hover .sidebar-wrapper .user .info > a > span[data-v-137afc95] {\n    transform: translate3d(0px, 0, 0);\n    opacity: 1;\n}\n.sidebar-mini .sidebar:hover .nav [data-toggle=collapse] ~ div > ul > li > a .sidebar-mini-icon[data-v-137afc95] {\n    opacity: 0;\n}\n.sidebar-mini .main-panel > .content[data-v-137afc95] {\n    padding-left: 130px;\n}\n.sidebar-mini footer[data-v-137afc95] {\n    padding-left: 130px;\n}\n.navbar-minimize button[data-v-137afc95] {\n    margin-left: 10px;\n}\n.navbar-minimize button i[data-v-137afc95] {\n    color: #ffffff;\n    font-size: 20px;\n}\n}\n.panel-header[data-v-137afc95] {\n  height: 260px;\n  padding-top: 80px;\n  padding-bottom: 45px;\n  background: #141E30; /* fallback for old browsers */\n  background: linear-gradient(to right, #0c2646 0%, #204065 60%, #2a5788 100%);\n  position: relative;\n  overflow: hidden;\n}\n.panel-header .header .title[data-v-137afc95] {\n  color: #ffffff;\n}\n.panel-header .header .category[data-v-137afc95] {\n  max-width: 600px;\n  color: rgba(255, 255, 255, 0.5);\n  margin: 0 auto;\n  font-size: 13px;\n}\n.panel-header .header .category a[data-v-137afc95] {\n  color: #ffffff;\n}\n.panel-header-sm[data-v-137afc95] {\n  height: 135px;\n}\n.panel-header-lg[data-v-137afc95] {\n  height: 380px;\n}\n@media screen and (max-width: 991px) {\n.sidebar[data-v-137afc95] {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100%;\n    width: 260px;\n    right: auto;\n    left: 0;\n    margin: 0;\n    border-radius: 0;\n    z-index: 1032;\n    visibility: visible;\n    overflow-y: visible;\n    padding: 0;\n    transition: 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    transform: translate3d(-260px, 0, 0);\n}\n}\n@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {\n.sidebar[data-v-137afc95] {\n    transition: none;\n}\n}\n@media screen and (max-width: 991px) {\n.wrapper[data-v-137afc95] {\n    transition: 0.5s, cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n}\n@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {\n.wrapper[data-v-137afc95] {\n    transition: none;\n}\n}\n@media screen and (max-width: 991px) {\n.main-panel[data-v-137afc95] {\n    width: 100%;\n}\n.main-panel .content[data-v-137afc95] {\n    padding-left: 30px;\n}\n.nav-open .main-panel[data-v-137afc95] {\n    right: 0;\n    transform: translate3d(260px, 0, 0);\n}\n.nav-open .sidebar[data-v-137afc95] {\n    transition: 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    transform: translate3d(0px, 0, 0);\n}\n}\n@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {\n.nav-open .sidebar[data-v-137afc95] {\n    transition: none;\n}\n}\n@media screen and (max-width: 991px) {\n.nav-open .sidebar[data-v-137afc95]:before {\n    content: unset;\n}\n.nav-open body[data-v-137afc95] {\n    position: relative;\n    overflow-x: hidden;\n}\n.nav-open .menu-on-right .main-panel[data-v-137afc95] {\n    transform: translate3d(-260px, 0, 0);\n}\n.nav-open .menu-on-right .navbar-collapse[data-v-137afc95],\n  .nav-open .menu-on-right .sidebar[data-v-137afc95] {\n    transform: translate3d(0px, 0, 0);\n}\n.nav-open .menu-on-right #bodyClick[data-v-137afc95] {\n    right: 260px;\n    left: auto;\n}\n.menu-on-right .sidebar[data-v-137afc95] {\n    left: auto;\n    right: 0;\n    transform: translate3d(260px, 0, 0);\n}\n#bodyClick[data-v-137afc95] {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    opacity: 1;\n    top: 0;\n    right: 0;\n    left: 260px;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden;\n    background-color: transparent;\n    transition: 0.5s, cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n}\n@media screen and (max-width: 991px) and (prefers-reduced-motion: reduce) {\n#bodyClick[data-v-137afc95] {\n    transition: none;\n}\n}\n@media screen and (max-width: 768px) {\n.main-panel .content[data-v-137afc95] {\n    padding-left: 15px;\n    padding-right: 15px;\n}\n}\n/* Animations */\n.nav-pills .nav-link[data-v-137afc95],\n.navbar[data-v-137afc95],\n.nav-tabs .nav-link[data-v-137afc95],\n.sidebar .nav a[data-v-137afc95],\n.sidebar .nav a i[data-v-137afc95],\n.sidebar .nav p[data-v-137afc95],\n.navbar-collapse .navbar-nav .nav-link[data-v-137afc95],\n.animation-transition-general[data-v-137afc95],\n.off-canvas-sidebar .nav p[data-v-137afc95],\n.sidebar .logo a.logo-mini[data-v-137afc95],\n.sidebar .logo a.logo-normal[data-v-137afc95],\n.off-canvas-sidebar .logo a.logo-mini[data-v-137afc95],\n.off-canvas-sidebar .logo a.logo-normal[data-v-137afc95],\n.sidebar .user .photo[data-v-137afc95],\n.off-canvas-sidebar .user .photo[data-v-137afc95],\n.sidebar .user a[data-v-137afc95],\n.off-canvas-sidebar .user a[data-v-137afc95],\n.sidebar .user .info > a > span[data-v-137afc95],\n.off-canvas-sidebar .user .info > a > span[data-v-137afc95],\n.tag[data-v-137afc95],\n.tag [data-role=remove][data-v-137afc95],\n.off-canvas-sidebar .nav p[data-v-137afc95],\n.off-canvas-sidebar .logo a.logo-normal[data-v-137afc95],\n.sidebar .user a[data-v-137afc95],\n.off-canvas-sidebar .user a[data-v-137afc95],\n.off-canvas-sidebar .user .info > a > span[data-v-137afc95] {\n  transition: all 300ms ease 0s;\n}\n.bootstrap-switch-label[data-v-137afc95]:before,\n.caret[data-v-137afc95] {\n  transition: all 150ms ease 0s;\n}\n.dropdown-toggle[aria-expanded=true][data-v-137afc95]:after,\na[data-toggle=collapse][aria-expanded=true] .caret[data-v-137afc95],\n.card-collapse .card a[data-toggle=collapse][aria-expanded=true] i[data-v-137afc95],\n.card-collapse .card a[data-toggle=collapse].expanded i[data-v-137afc95] {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  transform: rotate(180deg);\n}\n.caret[data-v-137afc95] {\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n  margin-top: -5px;\n  position: absolute;\n  top: 30px;\n  margin-left: 5px;\n}\n.pull-left[data-v-137afc95] {\n  float: left;\n}\n.pull-right[data-v-137afc95] {\n  float: right;\n}\n.card form label + .form-control[data-v-137afc95] {\n  margin-bottom: 20px;\n}\n.card .map-title[data-v-137afc95] {\n  color: #ffffff;\n}\n.card.card-chart .gmnoprint[data-v-137afc95],\n.card.card-chart .gm-style-cc[data-v-137afc95] {\n  display: none !important;\n}\n.bd-docs h1[data-v-137afc95], .bd-docs h2[data-v-137afc95], .bd-docs h3[data-v-137afc95], .bd-docs h4[data-v-137afc95], .bd-docs h5[data-v-137afc95], .bd-docs h6[data-v-137afc95], .bd-docs p[data-v-137afc95], .bd-docs ul li[data-v-137afc95], .bd-docs ol li[data-v-137afc95] {\n  color: #2c2c2c;\n}\n.bd-docs .bd-content > table > thead > tr > th[data-v-137afc95] {\n  color: #222a42;\n}\n.bd-docs .blockquote[data-v-137afc95], .bd-docs .blockquote p[data-v-137afc95], .bd-docs .card p[data-v-137afc95] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.bd-docs .bd-example[data-v-137afc95] {\n  background: linear-gradient(#1e1e2f, #1e1e24);\n}\n.bd-docs .navbar[data-v-137afc95] {\n  border-top: none;\n}\n.bd-docs .navbar .navbar-nav .nav-link[data-v-137afc95] {\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n.bd-docs .bd-example .btn[data-v-137afc95] {\n  margin: 4px 0;\n}\n.bd-docs .bd-example .btn .badge[data-v-137afc95] {\n  display: inline-block;\n}\n.bd-docs .bd-example .tim-icons[data-v-137afc95] {\n  color: #ffffff;\n}\n.bd-docs .bd-example .popover .popover-header[data-v-137afc95] {\n  color: hsla(0, 0%, 71%, 0.6);\n}\n.bd-docs .bd-example .popover-body p[data-v-137afc95] {\n  color: #212529;\n}\n.bd-docs .bd-example.tooltip-demo p[data-v-137afc95] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.bd-docs .card.card-body[data-v-137afc95],\n.bd-docs .card .card-body[data-v-137afc95] {\n  color: hsla(0, 0%, 100%, 0.8);\n}\n.bd-docs label[data-v-137afc95],\n.bd-docs .form-check[data-v-137afc95] {\n  color: hsla(0, 0%, 100%, 0.8);\n}\n.bd-docs .form-check + .btn[data-v-137afc95] {\n  margin-top: 20px;\n}\n.bd-docs .bd-example thead th[data-v-137afc95],\n.bd-docs table thead th[data-v-137afc95] {\n  color: hsla(0, 0%, 100%, 0.8);\n}\n.bd-docs .bd-example h1[data-v-137afc95], .bd-docs .bd-example h2[data-v-137afc95], .bd-docs .bd-example h3[data-v-137afc95], .bd-docs .bd-example h4[data-v-137afc95], .bd-docs .bd-example h5[data-v-137afc95], .bd-docs .bd-example h6[data-v-137afc95],\n.bd-docs .bd-example .h1[data-v-137afc95], .bd-docs .bd-example .h2[data-v-137afc95], .bd-docs .bd-example .h3[data-v-137afc95], .bd-docs .bd-example .h4[data-v-137afc95], .bd-docs .bd-example .h5[data-v-137afc95], .bd-docs .bd-example .h6[data-v-137afc95],\n.bd-docs table h1[data-v-137afc95],\n.bd-docs table h2[data-v-137afc95],\n.bd-docs table h3[data-v-137afc95],\n.bd-docs table h4[data-v-137afc95],\n.bd-docs table h5[data-v-137afc95],\n.bd-docs table h6[data-v-137afc95],\n.bd-docs table .h1[data-v-137afc95],\n.bd-docs table .h2[data-v-137afc95],\n.bd-docs table .h3[data-v-137afc95],\n.bd-docs table .h4[data-v-137afc95],\n.bd-docs table .h5[data-v-137afc95],\n.bd-docs table .h6[data-v-137afc95] {\n  color: hsla(0, 0%, 100%, 0.8);\n}\n.bd-docs .bd-example .datepicker thead th[data-v-137afc95], .bd-docs .bd-example .datepicker table thead th[data-v-137afc95], .bd-docs .bd-example .datepicker .tim-icons[data-v-137afc95],\n.bd-docs table .datepicker thead th[data-v-137afc95],\n.bd-docs table .datepicker table thead th[data-v-137afc95],\n.bd-docs table .datepicker .tim-icons[data-v-137afc95] {\n  color: #e14eca;\n}\n.bd-docs .bd-example .picker-switch .tim-icons[data-v-137afc95],\n.bd-docs table .picker-switch .tim-icons[data-v-137afc95] {\n  color: #e14eca;\n}\n.bd-docs .footer .container-fluid > nav[data-v-137afc95] {\n  display: inline-block;\n}\n.modal.show .modal-dialog[data-v-137afc95] {\n  transform: translate(0, 30%);\n}\ncode[data-v-137afc95] {\n  color: #f3a4b5;\n}\n@media screen and (max-width: 991px) {\n.profile-photo .profile-photo-small[data-v-137afc95] {\n    margin-left: -2px;\n}\n.button-dropdown[data-v-137afc95] {\n    display: none;\n}\n#searchModal .modal-dialog[data-v-137afc95] {\n    margin: 20px;\n}\n#minimizeSidebar[data-v-137afc95] {\n    display: none;\n}\n}\n@media screen and (max-width: 768px) {\n.landing-page .section-story-overview .image-container[data-v-137afc95]:nth-child(2) {\n    margin-left: 0;\n    margin-bottom: 30px;\n}\n}\n@media screen and (max-width: 576px) {\n.page-header .container h6.category-absolute[data-v-137afc95] {\n    width: 90%;\n}\n.form-horizontal .col-form-label[data-v-137afc95], .form-horizontal .label-on-right[data-v-137afc95] {\n    text-align: inherit;\n    padding-top: 0;\n}\n.form-horizontal .col-form-label code[data-v-137afc95], .form-horizontal .label-on-right code[data-v-137afc95] {\n    padding: 0 10px;\n}\n}\n.form-group.has-danger .error[data-v-137afc95],\n.input-group.has-danger .error[data-v-137afc95] {\n  color: #ec250d;\n}\n.form-group.has-success .error[data-v-137afc95],\n.input-group.has-success .error[data-v-137afc95] {\n  color: #00f2c3;\n}\n.form-group.no-border.form-control-lg .input-group-append .input-group-text[data-v-137afc95],\n.input-group.no-border.form-control-lg .input-group-append .input-group-text[data-v-137afc95] {\n  padding: 15px 0 15px 19px;\n}\n.form-group.no-border.form-control-lg .form-control[data-v-137afc95],\n.input-group.no-border.form-control-lg .form-control[data-v-137afc95] {\n  padding: 15px 19px;\n}\n.form-group.no-border.form-control-lg .form-control + .input-group-prepend .input-group-text[data-v-137afc95], .form-group.no-border.form-control-lg .form-control + .input-group-append .input-group-text[data-v-137afc95],\n.input-group.no-border.form-control-lg .form-control + .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group.no-border.form-control-lg .form-control + .input-group-append .input-group-text[data-v-137afc95] {\n  padding: 15px 19px 15px 0;\n}\n.form-group.form-control-lg .form-control[data-v-137afc95],\n.input-group.form-control-lg .form-control[data-v-137afc95] {\n  padding: 14px 18px;\n  height: 100%;\n}\n.form-group.form-control-lg .form-control + .input-group-prepend .input-group-text[data-v-137afc95], .form-group.form-control-lg .form-control + .input-group-append .input-group-text[data-v-137afc95],\n.input-group.form-control-lg .form-control + .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group.form-control-lg .form-control + .input-group-append .input-group-text[data-v-137afc95] {\n  padding: 14px 18px 14px 0;\n}\n.form-group.form-control-lg .input-group-prepend .input-group-text[data-v-137afc95],\n.form-group.form-control-lg .input-group-append .input-group-text[data-v-137afc95],\n.input-group.form-control-lg .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group.form-control-lg .input-group-append .input-group-text[data-v-137afc95] {\n  padding: 14px 0 15px 18px;\n}\n.form-group.form-control-lg .input-group-prepend .input-group-text + .form-control[data-v-137afc95],\n.form-group.form-control-lg .input-group-append .input-group-text + .form-control[data-v-137afc95],\n.input-group.form-control-lg .input-group-prepend .input-group-text + .form-control[data-v-137afc95],\n.input-group.form-control-lg .input-group-append .input-group-text + .form-control[data-v-137afc95] {\n  padding: 15px 18px 15px 16px;\n}\n.form-group.no-border .form-control[data-v-137afc95],\n.input-group.no-border .form-control[data-v-137afc95] {\n  padding: 11px 19px;\n}\n.form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95], .form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95],\n.input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95] {\n  padding: 11px 19px 11px 0;\n}\n.form-group.no-border .input-group-prepend .input-group-text[data-v-137afc95],\n.form-group.no-border .input-group-append .input-group-text[data-v-137afc95],\n.input-group.no-border .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group.no-border .input-group-append .input-group-text[data-v-137afc95] {\n  padding: 11px 0 11px 19px;\n}\n.form-group .form-control[data-v-137afc95],\n.input-group .form-control[data-v-137afc95] {\n  padding: 10px 18px 10px 18px;\n}\n.form-group .form-control + .input-group-prepend .input-group-text[data-v-137afc95], .form-group .form-control + .input-group-append .input-group-text[data-v-137afc95],\n.input-group .form-control + .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group .form-control + .input-group-append .input-group-text[data-v-137afc95] {\n  padding: 10px 18px 10px 0;\n}\n.form-group .input-group-prepend .input-group-text[data-v-137afc95],\n.form-group .input-group-append .input-group-text[data-v-137afc95],\n.input-group .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group .input-group-append .input-group-text[data-v-137afc95] {\n  padding: 10px 0 10px 18px;\n}\n.form-group .input-group-prepend .input-group-text + .form-control[data-v-137afc95], .form-group .input-group-prepend .input-group-text ~ .form-control[data-v-137afc95],\n.form-group .input-group-append .input-group-text + .form-control[data-v-137afc95],\n.form-group .input-group-append .input-group-text ~ .form-control[data-v-137afc95],\n.input-group .input-group-prepend .input-group-text + .form-control[data-v-137afc95],\n.input-group .input-group-prepend .input-group-text ~ .form-control[data-v-137afc95],\n.input-group .input-group-append .input-group-text + .form-control[data-v-137afc95],\n.input-group .input-group-append .input-group-text ~ .form-control[data-v-137afc95] {\n  padding: 10px 19px 11px 16px;\n}\n.form-group.no-border .form-control[data-v-137afc95],\n.form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95],\n.form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95],\n.input-group.no-border .form-control[data-v-137afc95],\n.input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: #242c45;\n  border: medium none;\n}\n.form-group.no-border .form-control[data-v-137afc95]:focus, .form-group.no-border .form-control[data-v-137afc95]:active, .form-group.no-border .form-control[data-v-137afc95]:active,\n.form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:focus,\n.form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active,\n.form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active,\n.input-group.no-border .form-control[data-v-137afc95]:focus,\n.input-group.no-border .form-control[data-v-137afc95]:active,\n.input-group.no-border .form-control[data-v-137afc95]:active,\n.input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:focus,\n.input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active,\n.input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active {\n  border: medium none;\n  background-color: #252e49;\n}\n.form-group.no-border .form-control:focus + .input-group-prepend .input-group-text[data-v-137afc95], .form-group.no-border .form-control:focus + .input-group-append .input-group-text[data-v-137afc95],\n.input-group.no-border .form-control:focus + .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group.no-border .form-control:focus + .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: #252e49;\n}\n.form-group.no-border .input-group-prepend .input-group-text[data-v-137afc95],\n.form-group.no-border .input-group-append .input-group-text[data-v-137afc95],\n.input-group.no-border .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group.no-border .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: #242c45;\n  border: none;\n}\n.has-error .form-control-feedback[data-v-137afc95], .has-error .control-label[data-v-137afc95] {\n  color: #ec250d;\n}\n.has-success .form-control-feedback[data-v-137afc95], .has-success .control-label[data-v-137afc95] {\n  color: #00f2c3;\n}\n.input-group-append .input-group-text[data-v-137afc95],\n.input-group-prepend .input-group-text[data-v-137afc95] {\n  background-color: transparent;\n  border: 1px solid #2b3553;\n  border-radius: 0.4285rem;\n  color: #ffffff;\n  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n}\n.input-group-append .input-group-text i[data-v-137afc95],\n.input-group-prepend .input-group-text i[data-v-137afc95] {\n  opacity: 0.5;\n}\n.has-danger.input-group-focus .input-group-append .input-group-text[data-v-137afc95],\n.has-danger.input-group-focus .input-group-prepend .input-group-text[data-v-137afc95] {\n  background-color: transparent;\n}\n.has-success .input-group-append .input-group-text[data-v-137afc95],\n.has-success .input-group-prepend .input-group-text[data-v-137afc95] {\n  background-color: transparent;\n}\n.has-danger .form-control:focus + .input-group-append .input-group-text[data-v-137afc95],\n.has-danger .form-control:focus + .input-group-prepend .input-group-text[data-v-137afc95] {\n  color: #ec250d;\n}\n.has-success .form-control:focus + .input-group-append .input-group-text[data-v-137afc95],\n.has-success .form-control:focus + .input-group-prepend .input-group-text[data-v-137afc95] {\n  color: #00f2c3;\n}\n.input-group-append .input-group-text + .form-control[data-v-137afc95], .input-group-append .input-group-text ~ .form-control[data-v-137afc95],\n.input-group-prepend .input-group-text + .form-control[data-v-137afc95],\n.input-group-prepend .input-group-text ~ .form-control[data-v-137afc95] {\n  padding: -0.5rem 0.7rem;\n  padding-left: 18px;\n}\n.input-group-append .input-group-text i[data-v-137afc95],\n.input-group-prepend .input-group-text i[data-v-137afc95] {\n  width: 17px;\n}\n.input-group-append[data-v-137afc95],\n.input-group-prepend .input-group-text[data-v-137afc95],\n.input-group-prepend .input-group-text[data-v-137afc95] {\n  background-color: transparent;\n  border: 1px solid #2b3553;\n  border-radius: 0.4285rem;\n  color: #ffffff;\n  margin: 0;\n}\n.input-group-append .input-group-text[data-v-137afc95] {\n  border-left: none;\n}\n.input-group-prepend .input-group-text[data-v-137afc95] {\n  border-right: none;\n}\n.input-group-focus .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group-focus .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: #ffffff;\n  border-color: #e14eca;\n  background-color: transparent;\n  border-color: #e14eca;\n}\n.input-group-focus.no-border .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group-focus.no-border .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: #252e49;\n}\n.input-group[data-v-137afc95],\n.form-group[data-v-137afc95] {\n  margin-bottom: 10px;\n  position: relative;\n}\n.input-group .form-control-static[data-v-137afc95],\n.form-group .form-control-static[data-v-137afc95] {\n  margin-top: 9px;\n}\n.input-group[disabled] .input-group-prepend .input-group-text[data-v-137afc95],\n.input-group[disabled] .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: #E3E3E3;\n}\n.input-group .form-control[data-v-137afc95]:not(:first-child):not(:last-child), .input-group-btn[data-v-137afc95]:not(:first-child):not(:last-child) {\n  border-radius: 0.4285rem;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left: 0 none;\n}\n.input-group .form-control[data-v-137afc95]:first-child,\n.input-group-btn:first-child > .dropdown-toggle[data-v-137afc95],\n.input-group-btn:last-child > .btn[data-v-137afc95]:not(:last-child):not(.dropdown-toggle) {\n  border-right: 0 none;\n}\n.input-group .form-control[data-v-137afc95]:last-child,\n.input-group-btn:last-child > .dropdown-toggle[data-v-137afc95],\n.input-group-btn:first-child > .btn[data-v-137afc95]:not(:first-child) {\n  border-left: 0 none;\n}\n.form-control[disabled][data-v-137afc95], .form-control[readonly][data-v-137afc95], fieldset[disabled] .form-control[data-v-137afc95] {\n  background-color: #1d253b;\n  color: #344675;\n  cursor: not-allowed;\n}\n.input-group-btn .btn[data-v-137afc95] {\n  border-width: 1px;\n  padding: 11px 0.7rem;\n}\n.input-group-btn .btn-default[data-v-137afc95]:not(.btn-fill) {\n  border-color: #DDDDDD;\n}\n.input-group-btn:last-child > .btn[data-v-137afc95] {\n  margin-left: 0;\n}\ntextarea.form-control[data-v-137afc95] {\n  max-width: 100%;\n  max-height: 80px;\n  padding: 10px 10px 0 0;\n  resize: none;\n  border: none;\n  border-bottom: 1px solid #2b3553;\n  border-radius: 0;\n  line-height: 2;\n}\ntextarea.form-control[data-v-137afc95]:focus, textarea.form-control[data-v-137afc95]:active {\n  border-left: none;\n  border-top: none;\n  border-right: none;\n}\n.has-success.form-group .form-control[data-v-137afc95], .has-success.form-group.no-border .form-control[data-v-137afc95],\n.has-danger.form-group .form-control[data-v-137afc95],\n.has-danger.form-group.no-border .form-control[data-v-137afc95] {\n  padding-right: 40px;\n}\n.form.form-newsletter .form-group[data-v-137afc95] {\n  float: left;\n  width: 78%;\n  margin-right: 2%;\n  margin-top: 9px;\n}\n.input-group .input-group-btn[data-v-137afc95] {\n  padding: 0 12px;\n}\n.form-group input[type=file][data-v-137afc95] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n.form-text[data-v-137afc95] {\n  font-size: 0.7500000025rem;\n  color: rgba(255, 255, 255, 0.8);\n}\n.form-control-lg[data-v-137afc95] {\n  padding: 0;\n  font-size: inherit;\n  line-height: 0;\n  border-radius: 0;\n}\n.form-control-lg .form-control[data-v-137afc95] {\n  height: calc(2.875rem + 2px);\n}\n.form-horizontal .col-form-label[data-v-137afc95],\n.form-horizontal .label-on-right[data-v-137afc95] {\n  padding: 10px 5px 0 15px;\n  text-align: right;\n  max-width: 180px;\n}\n.form-horizontal .checkbox-radios[data-v-137afc95] {\n  margin-bottom: 15px;\n}\n.form-horizontal .checkbox-radios .form-check[data-v-137afc95]:first-child {\n  margin-top: 8px;\n}\n.form-horizontal .label-on-right[data-v-137afc95] {\n  text-align: left;\n  padding: 10px 15px 0 5px;\n}\n.form-horizontal .form-check-inline[data-v-137afc95] {\n  margin-top: 6px;\n}\n.form-horizontal .form-check-inline .form-check-label[data-v-137afc95] {\n  margin-right: 1.5rem;\n}\n.search-bar[data-v-137afc95] {\n  margin-left: 30px;\n}\n.search-bar .btn[data-v-137afc95] {\n  margin: 0;\n}\n.search-bar.input-group[data-v-137afc95] {\n  border-radius: 25px;\n  z-index: 4;\n  margin-bottom: 0;\n  height: 43px;\n  padding-right: 5px;\n}\n.search-bar.input-group .input-group-addon[data-v-137afc95] {\n  padding: 10px;\n  background: transparent;\n  border: none;\n  color: rgba(255, 255, 255, 0.7);\n}\n.search-bar.input-group i[data-v-137afc95] {\n  font-size: 20px;\n  color: #ffffff;\n  margin-top: 0 !important;\n}\n.search-bar.input-group input[data-v-137afc95] {\n  background: transparent;\n  border: none !important;\n  border-radius: 0;\n  padding: 12px !important;\n  font-size: 12px;\n  opacity: 0.5;\n}\n.search-bar.input-group input[data-v-137afc95]:focus {\n  background: transparent;\n}\n.search-bar.input-group .form-control[data-v-137afc95] {\n  opacity: 1;\n  color: #ffffff;\n}\n.search-bar.input-group .form-control[data-v-137afc95]::-moz-placeholder {\n  color: white;\n}\n.search-bar.input-group .form-control[data-v-137afc95]::placeholder {\n  color: white;\n}\n.modal-search .modal-dialog[data-v-137afc95] {\n  max-width: 1000px;\n  margin: 20px auto;\n}\n.modal-search .modal-dialog .form-control[data-v-137afc95] {\n  border: none;\n  color: #222a42;\n}\n.modal-search .modal-dialog .form-control[data-v-137afc95]::-moz-placeholder {\n  color: #222a42;\n}\n.modal-search .modal-dialog .form-control[data-v-137afc95]::placeholder {\n  color: #222a42;\n}\n.input-group-prepend[data-v-137afc95] {\n  margin-right: 0;\n}\n.input-group-prepend .tim-icons[data-v-137afc95],\n.input-group-append .tim-icons[data-v-137afc95] {\n  font-size: 1rem;\n}\n\n/*\n * Container style\n */\n.ps[data-v-137afc95] {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x[data-v-137afc95] {\n  display: none;\n  opacity: 0;\n  transition: background-color 0.2s linear, opacity 0.2s linear;\n  -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__rail-y[data-v-137afc95] {\n  display: none;\n  opacity: 0;\n  transition: background-color 0.2s linear, opacity 0.2s linear;\n  -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps--active-x > .ps__rail-x[data-v-137afc95],\n.ps--active-y > .ps__rail-y[data-v-137afc95] {\n  display: block;\n  background-color: transparent;\n}\n.ps:hover > .ps__rail-x[data-v-137afc95],\n.ps:hover > .ps__rail-y[data-v-137afc95],\n.ps--focus > .ps__rail-x[data-v-137afc95],\n.ps--focus > .ps__rail-y[data-v-137afc95],\n.ps--scrolling-x > .ps__rail-x[data-v-137afc95],\n.ps--scrolling-y > .ps__rail-y[data-v-137afc95] {\n  opacity: 0.6;\n}\n.ps .ps__rail-x[data-v-137afc95]:hover,\n.ps .ps__rail-y[data-v-137afc95]:hover,\n.ps .ps__rail-x[data-v-137afc95]:focus,\n.ps .ps__rail-y[data-v-137afc95]:focus,\n.ps .ps__rail-x.ps--clicking[data-v-137afc95],\n.ps .ps__rail-y.ps--clicking[data-v-137afc95] {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x[data-v-137afc95] {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color 0.2s linear, height 0.2s ease-in-out;\n  -webkit-transition: background-color 0.2s linear, height 0.2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__thumb-y[data-v-137afc95] {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color 0.2s linear, width 0.2s ease-in-out;\n  -webkit-transition: background-color 0.2s linear, width 0.2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__rail-x:hover > .ps__thumb-x[data-v-137afc95],\n.ps__rail-x:focus > .ps__thumb-x[data-v-137afc95],\n.ps__rail-x.ps--clicking .ps__thumb-x[data-v-137afc95] {\n  background-color: #999;\n  height: 11px;\n}\n.ps__rail-y:hover > .ps__thumb-y[data-v-137afc95],\n.ps__rail-y:focus > .ps__thumb-y[data-v-137afc95],\n.ps__rail-y.ps--clicking .ps__thumb-y[data-v-137afc95] {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n.ps[data-v-137afc95] {\n    overflow: auto !important;\n}\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n.ps[data-v-137afc95] {\n    overflow: auto !important;\n}\n}\n.white-content[data-v-137afc95] {\n  background: white;\n}\n.white-content .navbar.navbar-transparent .navbar-brand[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .navbar.navbar-transparent .navbar-toggler-bar[data-v-137afc95] {\n  background: #1d253b;\n}\n.white-content .navbar.navbar-transparent .navbar-nav li a[data-v-137afc95]:not(.dropdown-item) {\n  color: #1d253b;\n}\n.white-content .navbar.navbar-transparent .navbar-nav li a:not(.dropdown-item) i[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .navbar.navbar-transparent .navbar-minimize button i[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .navbar.navbar-transparent .search-bar.input-group i[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .navbar.navbar-transparent .search-bar.input-group .form-control[data-v-137afc95] {\n  color: #344675;\n}\n.white-content .navbar.navbar-transparent .search-bar.input-group .form-control[data-v-137afc95]::-moz-placeholder {\n  color: #9A9A9A;\n}\n.white-content .navbar.navbar-transparent .search-bar.input-group .form-control[data-v-137afc95]::placeholder {\n  color: #9A9A9A;\n}\n.white-content .sidebar[data-v-137afc95] {\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.15);\n}\n.white-content .sidebar p[data-v-137afc95] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.white-content .main-panel[data-v-137afc95] {\n  background: white;\n}\n.white-content .form-control[data-v-137afc95]::-moz-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.white-content .form-control[data-v-137afc95]:-moz-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.white-content .form-control[data-v-137afc95]::-webkit-input-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.white-content .form-control[data-v-137afc95]:-ms-input-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.white-content .has-danger .form-control[data-v-137afc95], .white-content .has-danger .input-group-prepend .input-group-text[data-v-137afc95] {\n  border-color: #ec250d;\n}\n.white-content .input-group-prepend .input-group-text[data-v-137afc95] {\n  border-color: rgba(29, 37, 59, 0.5);\n  color: #1d253b;\n}\n.white-content .form-control[data-v-137afc95] {\n  color: #222a42;\n  border-color: rgba(29, 37, 59, 0.5);\n}\n.white-content .form-control[data-v-137afc95]:focus {\n  border-color: #e17e4e;\n}\n.white-content .form-group.no-border .form-control[data-v-137afc95],\n.white-content .form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95],\n.white-content .form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95],\n.white-content .form-group.no-border .input-group-prepend .input-group-text[data-v-137afc95],\n.white-content .form-group.no-border .input-group-append .input-group-text[data-v-137afc95],\n.white-content .input-group.no-border .form-control[data-v-137afc95],\n.white-content .input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95],\n.white-content .input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95],\n.white-content .input-group.no-border .input-group-prepend .input-group-text[data-v-137afc95],\n.white-content .input-group.no-border .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: rgba(222, 222, 222, 0.3);\n}\n.white-content .form-group.no-border .form-control[data-v-137afc95]:focus, .white-content .form-group.no-border .form-control[data-v-137afc95]:active, .white-content .form-group.no-border .form-control[data-v-137afc95]:active,\n.white-content .form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.white-content .form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.white-content .form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.white-content .form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:focus,\n.white-content .form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active,\n.white-content .form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active,\n.white-content .form-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.white-content .form-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.white-content .form-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.white-content .form-group.no-border .input-group-append .input-group-text[data-v-137afc95]:focus,\n.white-content .form-group.no-border .input-group-append .input-group-text[data-v-137afc95]:active,\n.white-content .form-group.no-border .input-group-append .input-group-text[data-v-137afc95]:active,\n.white-content .input-group.no-border .form-control[data-v-137afc95]:focus,\n.white-content .input-group.no-border .form-control[data-v-137afc95]:active,\n.white-content .input-group.no-border .form-control[data-v-137afc95]:active,\n.white-content .input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.white-content .input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.white-content .input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.white-content .input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:focus,\n.white-content .input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active,\n.white-content .input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active,\n.white-content .input-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.white-content .input-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.white-content .input-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.white-content .input-group.no-border .input-group-append .input-group-text[data-v-137afc95]:focus,\n.white-content .input-group.no-border .input-group-append .input-group-text[data-v-137afc95]:active,\n.white-content .input-group.no-border .input-group-append .input-group-text[data-v-137afc95]:active {\n  background-color: rgba(222, 222, 222, 0.5);\n}\n.white-content .form-group.no-border .form-control:focus + .input-group-prepend .input-group-text[data-v-137afc95], .white-content .form-group.no-border .form-control:focus + .input-group-append .input-group-text[data-v-137afc95],\n.white-content .input-group.no-border .form-control:focus + .input-group-prepend .input-group-text[data-v-137afc95],\n.white-content .input-group.no-border .form-control:focus + .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: transparent;\n}\n.white-content .input-group[disabled] .input-group-prepend .input-group-text[data-v-137afc95],\n.white-content .input-group[disabled] .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: #222a42;\n}\n.white-content .form-control[disabled][data-v-137afc95], .white-content .form-control[readonly][data-v-137afc95], .white-content fieldset[disabled] .form-control[data-v-137afc95] {\n  background: #E3E3E3;\n  border-color: rgba(29, 37, 59, 0.3);\n}\n.white-content .input-group-focus .input-group-prepend .input-group-text[data-v-137afc95],\n.white-content .input-group-focus .input-group-append .input-group-text[data-v-137afc95],\n.white-content .input-group-focus .form-control[data-v-137afc95] {\n  border-color: #e17e4e;\n}\n.white-content .input-group-focus.no-border .input-group-prepend .input-group-text[data-v-137afc95],\n.white-content .input-group-focus.no-border .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: rgba(222, 222, 222, 0.5);\n}\n.white-content .input-group-prepend .input-group-text[data-v-137afc95] {\n  border-right: none;\n}\n.white-content .input-group-append .input-group-text[data-v-137afc95] {\n  border-left: none;\n}\n.white-content .has-danger .form-control[data-v-137afc95]:focus, .white-content .has-success.input-group-focus .input-group-append .input-group-text[data-v-137afc95], .white-content .has-success.input-group-focus .input-group-prepend .input-group-text[data-v-137afc95] {\n  border-color: #ec250d;\n}\n.white-content .has-success .form-control[data-v-137afc95]:focus, .white-content .has-success.input-group-focus .input-group-append .input-group-text[data-v-137afc95], .white-content .has-success.input-group-focus .input-group-prepend .input-group-text[data-v-137afc95] {\n  border-color: #00bf9a;\n}\n.white-content .btn.btn-link[data-v-137afc95]:hover, .white-content .btn.btn-link[data-v-137afc95]:active, .white-content .btn.btn-link[data-v-137afc95]:focus {\n  color: #9A9A9A !important;\n}\n.white-content .btn-group .btn.active[data-v-137afc95] {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.white-content .card[data-v-137afc95]:not(.card-white) {\n  background: #ffffff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.white-content .card:not(.card-white) .card-header[data-v-137afc95] {\n  color: #222a42;\n}\n.white-content .card:not(.card-white) .card-header a[data-toggle=collapse][data-v-137afc95] {\n  color: #222a42;\n}\n.white-content .card:not(.card-white) .card-header .card-title[data-v-137afc95], .white-content .card:not(.card-white) .card-body .card-title[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .card:not(.card-white) .card-body .card-category[data-v-137afc95], .white-content .card:not(.card-white) .card-body .card-description[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .card:not(.card-white) label[data-v-137afc95]:not(.btn) {\n  color: #344675;\n}\n.white-content .card:not(.card-white).nav-pills .nav-item .nav-link[data-v-137afc95] {\n  color: #444444;\n  background-color: hsla(0, 0%, 87%, 0.3);\n}\n.white-content .card:not(.card-white).nav-pills .nav-item .nav-link[data-v-137afc95]:not(.active):hover {\n  background: hsla(0, 0%, 87%, 0.5);\n}\n.white-content .card:not(.card-white).nav-pills .nav-item .nav-link.active[data-v-137afc95] {\n  color: #ffffff;\n}\n.white-content .card:not(.card-white) .tab-content .tab-pane[data-v-137afc95] {\n  color: #444444;\n}\n.white-content .card:not(.card-white) .card[data-v-137afc95] {\n  box-shadow: none;\n}\n.white-content .card:not(.card-white).card-plain[data-v-137afc95] {\n  background: transparent;\n  box-shadow: none;\n}\n.white-content .card:not(.card-white).card-tasks .card-body i[data-v-137afc95] {\n  color: rgba(34, 42, 66, 0.7);\n}\n.white-content .card:not(.card-white).card-tasks .card-body i[data-v-137afc95]:hover {\n  color: #222a42;\n}\n.white-content .table > tbody > tr > td[data-v-137afc95] {\n  color: rgba(34, 42, 66, 0.7) !important;\n}\n.white-content .table > thead > tr > th[data-v-137afc95],\n.white-content .table > tbody > tr > th[data-v-137afc95],\n.white-content .table > tfoot > tr > th[data-v-137afc95],\n.white-content .table > thead > tr > td[data-v-137afc95],\n.white-content .table > tbody > tr > td[data-v-137afc95],\n.white-content .table > tfoot > tr > td[data-v-137afc95] {\n  border-color: rgba(34, 42, 66, 0.2);\n  padding: 12px 7px;\n  vertical-align: middle;\n}\n.white-content .table > thead > tr > th[data-v-137afc95], .white-content .table button.btn-neutral.btn-link[data-v-137afc95] {\n  color: rgba(34, 42, 66, 0.7);\n}\n.white-content .footer ul li a[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .footer .copyright[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .progress-container .progress[data-v-137afc95], .white-content .progress-container.progress.sm .progress[data-v-137afc95] {\n  background: rgba(34, 42, 66, 0.1);\n  box-shadow: 0 0 0 3px rgba(34, 42, 66, 0.1);\n}\n.white-content .progress-container .progress .progress-value[data-v-137afc95], .white-content .progress-container.progress.sm .progress .progress-value[data-v-137afc95] {\n  color: #344675;\n}\n.white-content .progress-container .progress-badge[data-v-137afc95], .white-content .progress-container.progress.sm .progress-badge[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .full-page[data-v-137afc95] {\n  background: #f5f6fa;\n}\n.white-content .full-page h1[data-v-137afc95], .white-content .full-page h2[data-v-137afc95], .white-content .full-page h3[data-v-137afc95], .white-content .full-page h4[data-v-137afc95], .white-content .full-page h5[data-v-137afc95], .white-content .full-page h6[data-v-137afc95], .white-content .full-page p[data-v-137afc95], .white-content .full-page ol li[data-v-137afc95], .white-content .full-page ul li[data-v-137afc95], .white-content .full-page pre[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .full-page .description[data-v-137afc95] {\n  color: #9A9A9A;\n}\n.white-content .full-page .footer ul li a[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .full-page .footer .copyright[data-v-137afc95] {\n  color: #1d253b;\n}\n.white-content .nav-pills .nav-item .nav-link[data-v-137afc95]:not(.active) {\n  background: #d3d7e9;\n  color: #1d253b;\n}\n.white-content .nav-pills .nav-item .nav-link[data-v-137afc95]:not(.active):hover {\n  background: #cccccc;\n}\n.card[data-v-137afc95] {\n  background: #27293d;\n  border: 0;\n  position: relative;\n  width: 100%;\n  margin-bottom: 30px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.card label[data-v-137afc95] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.card .card-title[data-v-137afc95] {\n  margin-bottom: 0.75rem;\n}\n.card .card-body[data-v-137afc95] {\n  padding: 15px;\n}\n.card .card-body.table-full-width[data-v-137afc95] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.card .card-body .card-title[data-v-137afc95] {\n  color: #ffffff;\n  text-transform: inherit;\n  font-weight: 300;\n  margin-bottom: 0.75rem;\n}\n.card .card-body .card-description[data-v-137afc95], .card .card-body .card-category[data-v-137afc95] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.card .card-header[data-v-137afc95] {\n  padding: 15px 15px 0;\n  border: 0;\n  color: rgba(255, 255, 255, 0.8);\n}\n.card .card-header[data-v-137afc95]:not([data-background-color]) {\n  background-color: transparent;\n}\n.card .card-header .card-title[data-v-137afc95] {\n  color: #ffffff;\n  font-weight: 100;\n}\n.card .card-header .card-category[data-v-137afc95] {\n  color: #9A9A9A;\n  margin-bottom: 5px;\n  font-weight: 300;\n}\n.card .map[data-v-137afc95] {\n  border-radius: 0.2857rem;\n}\n.card .map.map-big[data-v-137afc95] {\n  height: 420px;\n}\n.card.card-white[data-v-137afc95] {\n  background: #ffffff;\n}\n.card.card-white .card-title[data-v-137afc95] {\n  color: #222a42;\n}\n.card.card-white .card-category[data-v-137afc95], .card.card-white .stats[data-v-137afc95] {\n  color: #808080;\n}\n.card.card-white .form-control[data-v-137afc95]::-moz-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.card.card-white .form-control[data-v-137afc95]:-moz-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.card.card-white .form-control[data-v-137afc95]::-webkit-input-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.card.card-white .form-control[data-v-137afc95]:-ms-input-placeholder {\n  color: rgba(34, 42, 66, 0.4);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.card.card-white .has-danger .form-control[data-v-137afc95], .card.card-white .has-danger .input-group-prepend .input-group-text[data-v-137afc95] {\n  border-color: #ec250d;\n}\n.card.card-white .input-group-prepend .input-group-text[data-v-137afc95] {\n  border-color: rgba(29, 37, 59, 0.2);\n  color: #1d253b;\n}\n.card.card-white .form-control[data-v-137afc95] {\n  color: #222a42;\n  border-color: rgba(29, 37, 59, 0.2);\n}\n.card.card-white .form-control[data-v-137afc95]:focus {\n  border-color: #e14eca;\n}\n.card.card-white label[data-v-137afc95]:not(.btn) {\n  color: #344675;\n}\n.card.card-white .form-group.no-border .form-control[data-v-137afc95],\n.card.card-white .form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95],\n.card.card-white .form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95],\n.card.card-white .form-group.no-border .input-group-prepend .input-group-text[data-v-137afc95],\n.card.card-white .form-group.no-border .input-group-append .input-group-text[data-v-137afc95],\n.card.card-white .input-group.no-border .form-control[data-v-137afc95],\n.card.card-white .input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95],\n.card.card-white .input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95],\n.card.card-white .input-group.no-border .input-group-prepend .input-group-text[data-v-137afc95],\n.card.card-white .input-group.no-border .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: rgba(222, 222, 222, 0.3);\n}\n.card.card-white .form-group.no-border .form-control[data-v-137afc95]:focus, .card.card-white .form-group.no-border .form-control[data-v-137afc95]:active, .card.card-white .form-group.no-border .form-control[data-v-137afc95]:active,\n.card.card-white .form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.card.card-white .form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.card.card-white .form-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.card.card-white .form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:focus,\n.card.card-white .form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active,\n.card.card-white .form-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active,\n.card.card-white .form-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.card.card-white .form-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.card.card-white .form-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.card.card-white .form-group.no-border .input-group-append .input-group-text[data-v-137afc95]:focus,\n.card.card-white .form-group.no-border .input-group-append .input-group-text[data-v-137afc95]:active,\n.card.card-white .form-group.no-border .input-group-append .input-group-text[data-v-137afc95]:active,\n.card.card-white .input-group.no-border .form-control[data-v-137afc95]:focus,\n.card.card-white .input-group.no-border .form-control[data-v-137afc95]:active,\n.card.card-white .input-group.no-border .form-control[data-v-137afc95]:active,\n.card.card-white .input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.card.card-white .input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.card.card-white .input-group.no-border .form-control + .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.card.card-white .input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:focus,\n.card.card-white .input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active,\n.card.card-white .input-group.no-border .form-control + .input-group-append .input-group-text[data-v-137afc95]:active,\n.card.card-white .input-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:focus,\n.card.card-white .input-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.card.card-white .input-group.no-border .input-group-prepend .input-group-text[data-v-137afc95]:active,\n.card.card-white .input-group.no-border .input-group-append .input-group-text[data-v-137afc95]:focus,\n.card.card-white .input-group.no-border .input-group-append .input-group-text[data-v-137afc95]:active,\n.card.card-white .input-group.no-border .input-group-append .input-group-text[data-v-137afc95]:active {\n  background-color: rgba(222, 222, 222, 0.5);\n}\n.card.card-white .form-group.no-border .form-control:focus + .input-group-prepend .input-group-text[data-v-137afc95], .card.card-white .form-group.no-border .form-control:focus + .input-group-append .input-group-text[data-v-137afc95],\n.card.card-white .input-group.no-border .form-control:focus + .input-group-prepend .input-group-text[data-v-137afc95],\n.card.card-white .input-group.no-border .form-control:focus + .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: transparent;\n}\n.card.card-white .input-group[disabled] .input-group-prepend .input-group-text[data-v-137afc95],\n.card.card-white .input-group[disabled] .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: #222a42;\n}\n.card.card-white .form-control[disabled][data-v-137afc95], .card.card-white .form-control[readonly][data-v-137afc95], .card.card-white fieldset[disabled] .form-control[data-v-137afc95] {\n  background: #E3E3E3;\n  border-color: rgba(29, 37, 59, 0.3);\n}\n.card.card-white .input-group-focus .input-group-prepend .input-group-text[data-v-137afc95],\n.card.card-white .input-group-focus .input-group-append .input-group-text[data-v-137afc95],\n.card.card-white .input-group-focus .form-control[data-v-137afc95] {\n  background-color: #ffffff;\n  border-color: #e14eca;\n}\n.card.card-white .input-group-focus.no-border .input-group-prepend .input-group-text[data-v-137afc95],\n.card.card-white .input-group-focus.no-border .input-group-append .input-group-text[data-v-137afc95] {\n  background-color: rgba(222, 222, 222, 0.5);\n}\n.card.card-white .input-group-prepend .input-group-text[data-v-137afc95] {\n  border-right: none;\n}\n.card.card-white .input-group-append .input-group-text[data-v-137afc95] {\n  border-left: none;\n}\n.card.card-white .has-danger .form-control[data-v-137afc95]:focus, .card.card-white .has-success.input-group-focus .input-group-append .input-group-text[data-v-137afc95], .card.card-white .has-success.input-group-focus .input-group-prepend .input-group-text[data-v-137afc95] {\n  border-color: #ec250d;\n}\n.card.card-white .has-success .form-control[data-v-137afc95]:focus, .card.card-white .has-success.input-group-focus .input-group-append .input-group-text[data-v-137afc95], .card.card-white .has-success.input-group-focus .input-group-prepend .input-group-text[data-v-137afc95] {\n  border-color: #00bf9a;\n}\n.card.card-plain[data-v-137afc95] {\n  background: transparent;\n  box-shadow: none;\n}\n.card .image[data-v-137afc95] {\n  overflow: hidden;\n  height: 200px;\n  position: relative;\n}\n.card .avatar[data-v-137afc95] {\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-bottom: 15px;\n}\n.card label[data-v-137afc95] {\n  font-size: 0.7500000025rem;\n  margin-bottom: 5px;\n}\n.card .card-footer[data-v-137afc95] {\n  background-color: transparent;\n  border: 0;\n  padding: 15px;\n}\n.card .card-footer .stats i[data-v-137afc95] {\n  margin-right: 5px;\n  position: relative;\n}\n.card .card-footer h6[data-v-137afc95] {\n  margin-bottom: 0;\n  padding: 7px 0;\n}\n.card-body[data-v-137afc95] {\n  padding: 1.25rem;\n}\n@media (max-width: 767.98px) {\n.card.card-chart .card-header .btn-group-toggle .tim-icons[data-v-137afc95] {\n    font-size: 0.875rem;\n    top: -1px;\n}\n}\n.card-user[data-v-137afc95] {\n  overflow: hidden;\n}\n.card-user .image[data-v-137afc95] {\n  height: 120px;\n}\n.card-user .author[data-v-137afc95] {\n  text-align: center;\n  text-transform: none;\n  margin-top: 25px;\n}\n.card-user .author a + p.description[data-v-137afc95] {\n  margin-top: -7px;\n}\n.card-user .author .block[data-v-137afc95] {\n  position: absolute;\n  height: 100px;\n  width: 250px;\n}\n.card-user .author .block.block-one[data-v-137afc95] {\n  background: rgba(225, 78, 202, 0.6);\n  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);\n  transform: rotate(150deg);\n  margin-top: -90px;\n  margin-left: -50px;\n}\n.card-user .author .block.block-two[data-v-137afc95] {\n  background: rgba(225, 78, 202, 0.6);\n  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);\n  transform: rotate(30deg);\n  margin-top: -40px;\n  margin-left: -100px;\n}\n.card-user .author .block.block-three[data-v-137afc95] {\n  background: rgba(225, 78, 202, 0.6);\n  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);\n  transform: rotate(170deg);\n  margin-top: -70px;\n  right: -45px;\n}\n.card-user .author .block.block-four[data-v-137afc95] {\n  background: rgba(225, 78, 202, 0.6);\n  background: linear-gradient(to right, rgba(225, 78, 202, 0.6) 0%, rgba(225, 78, 202, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);\n  transform: rotate(150deg);\n  margin-top: -25px;\n  right: -45px;\n}\n.card-user .avatar[data-v-137afc95] {\n  width: 124px;\n  height: 124px;\n  border: 5px solid #2b3553;\n  border-bottom-color: transparent;\n  background-color: transparent;\n  position: relative;\n}\n.card-user .card-body[data-v-137afc95] {\n  min-height: 240px;\n}\n.card-user hr[data-v-137afc95] {\n  margin: 5px 15px;\n}\n.card-user .button-container[data-v-137afc95] {\n  margin-bottom: 6px;\n  text-align: center;\n}\n.card-user .card-description[data-v-137afc95] {\n  margin-top: 30px;\n}\n.card-tasks[data-v-137afc95] {\n  height: 473px;\n}\n.card-tasks .table-full-width[data-v-137afc95] {\n  max-height: 410px;\n  position: relative;\n}\n.card-tasks .card-header .title[data-v-137afc95] {\n  margin-right: 20px;\n  font-weight: 400;\n}\n.card-tasks .card-header .dropdown[data-v-137afc95] {\n  float: right;\n  color: #cccccc;\n}\n.card-tasks .card-body i[data-v-137afc95] {\n  color: #9A9A9A;\n  font-size: 1.4em;\n}\n.card-tasks .card-body i[data-v-137afc95]:hover {\n  color: #ffffff;\n}\n.card-plain[data-v-137afc95] {\n  background: transparent;\n  box-shadow: none;\n}\n.card-plain .card-header[data-v-137afc95],\n.card-plain .card-footer[data-v-137afc95] {\n  margin-left: 0;\n  margin-right: 0;\n  background-color: transparent;\n}\n.card-plain:not(.card-subcategories).card-body[data-v-137afc95] {\n  padding-left: 0;\n  padding-right: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_1_id_137afc95_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_1_id_137afc95_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_1_id_137afc95_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_2_id_137afc95_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_2_id_137afc95_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_2_id_137afc95_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_3_id_137afc95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_3_id_137afc95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_3_id_137afc95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_4f058a58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_4f058a58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_4f058a58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_268e20e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_268e20e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_268e20e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./resources/sass/desktop/black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./resources/sass/desktop/black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_black_dashboard_scss_vue_type_style_index_0_id_137afc95_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./resources/sass/desktop/black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_black_dashboard_scss_vue_type_style_index_0_id_137afc95_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_black_dashboard_scss_vue_type_style_index_0_id_137afc95_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientProfile_vue_vue_type_template_id_137afc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientProfile.vue?vue&type=template&id=137afc95&scoped=true& */ "./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=template&id=137afc95&scoped=true&");
/* harmony import */ var _ClientProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientProfile.vue?vue&type=script&lang=js& */ "./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _sass_desktop_black_dashboard_scss_vue_type_style_index_0_id_137afc95_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/sass/desktop/black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss& */ "./resources/sass/desktop/black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss&");
/* harmony import */ var _ClientProfile_vue_vue_type_style_index_1_id_137afc95_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css& */ "./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css&");
/* harmony import */ var _ClientProfile_vue_vue_type_style_index_2_id_137afc95_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css& */ "./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css&");
/* harmony import */ var _ClientProfile_vue_vue_type_style_index_3_id_137afc95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css& */ "./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;





/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
  _ClientProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientProfile_vue_vue_type_template_id_137afc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClientProfile_vue_vue_type_template_id_137afc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "137afc95",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/mobile/pages/Manager/ClientProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_4f058a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=4f058a58&scoped=true& */ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=template&id=4f058a58&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _Create_vue_vue_type_style_index_0_id_4f058a58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css& */ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_4f058a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_4f058a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4f058a58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue":
/*!************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_268e20e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=268e20e2&scoped=true& */ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=268e20e2&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _Edit_vue_vue_type_style_index_0_id_268e20e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css& */ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_268e20e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_268e20e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "268e20e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_262495ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=262495ac&scoped=true& */ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=template&id=262495ac&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_262495ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_262495ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "262495ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=template&id=137afc95&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=template&id=137afc95&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_template_id_137afc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_template_id_137afc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_template_id_137afc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=template&id=137afc95&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=template&id=137afc95&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=template&id=4f058a58&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=template&id=4f058a58&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_4f058a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_4f058a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_4f058a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=4f058a58&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=template&id=4f058a58&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=268e20e2&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=268e20e2&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_268e20e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_268e20e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_268e20e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=268e20e2&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=template&id=268e20e2&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=template&id=262495ac&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=template&id=262495ac&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_262495ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_262495ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_262495ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=262495ac&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Index.vue?vue&type=template&id=262495ac&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_1_id_137afc95_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=1&id=137afc95&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_2_id_137afc95_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=2&id=137afc95&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientProfile_vue_vue_type_style_index_3_id_137afc95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientProfile.vue?vue&type=style&index=3&id=137afc95&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_4f058a58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Create.vue?vue&type=style&index=0&id=4f058a58&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_268e20e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/ClientTours/Edit.vue?vue&type=style&index=0&id=268e20e2&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/sass/desktop/black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/sass/desktop/black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_black_dashboard_scss_vue_type_style_index_0_id_137afc95_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./resources/sass/desktop/black-dashboard.scss?vue&type=style&index=0&id=137afc95&scoped=true&lang=scss&");


/***/ })

}]);