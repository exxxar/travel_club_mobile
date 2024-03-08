"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Manager_Tours_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Edit",
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
      load: false,
      start: undefined,
      end: undefined,
      new_files: [],
      seconds: 0,
      interval: '',
      flag: false,
      edit_tour: '',
      minDate: '01/01/2000'
    };
  },
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    clients: function clients() {
      return this.$store.getters.clients;
    },
    isAdmin: function isAdmin() {
      return this.$store.getters.isAdmin;
    },
    isManager: function isManager() {
      return this.$store.getters.isManager;
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
  created: function created() {
    if (this.countries.length === 0) {
      this.$store.dispatch('getCountries', {
        town_id: 0
      });
    }
  },
  mounted: function mounted() {
    var _this = this;
    if (this.clients.length > 0) {
      this.load = true;
      var current_client = this.clients.find(function (client) {
        return client.id == _this.$route.params.client_id;
      });
      this.edit_tour = current_client.tours.find(function (tour) {
        return tour.id == _this.$route.params.id;
      });
      this.loadAdditionalData();
      this.load = false;
    } else {
      this.getClient();
    }
  },
  methods: {
    back: function back() {
      if (this.isAdmin) {
        this.$router.push('/admin/client-tours/' + this.$route.params.client_id);
      }
      if (this.isManager) {
        this.$router.push('/manager/client-tours/' + this.$route.params.client_id);
      }
    },
    loadAdditionalData: function loadAdditionalData() {
      var _this2 = this;
      this.$store.dispatch('getCities', this.edit_tour.TourInfo.country.Id);
      if (this.edit_tour.TourInfo.resort.Name != 'Любой') {
        var town_id = this.edit_tour.TourInfo.resort.Id;
        //поиск отелей по городам-курортам
        this.$store.dispatch('getHotels', {
          country_id: this.edit_tour.TourInfo.country.Id,
          town_id: town_id,
          star_id: '0'
        }).then(function () {
          if (_this2.hotels.findIndex(function (item) {
            return item.Id == _this2.edit_tour.TourInfo.hotel.Id;
          }) == -1) {
            _this2.edit_tour.TourInfo.hotel = {
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
      this.edit_tour.TourInfo.start = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.edit_tour.TourInfo.date_range.start, "DD/MM/YYYY").toDate();
      this.edit_tour.TourInfo.end = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.edit_tour.TourInfo.date_range.end, "DD/MM/YYYY").toDate();
      this.edit_tour.TourInfo.delete_files = [];
      this.edit_tour.TourInfo.new_files = [];
      this.edit_tour.new_files = [];
    },
    getClient: function getClient() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this3.load = true;
              _context.next = 3;
              return _this3.$store.dispatch('setClients').then(function (resp) {
                _this3.$store.commit('setClients', resp.data.users);
                _this3.$store.commit('setDeletedClients', resp.data.deleted_users);
                var current_client = _this3.clients.find(function (client) {
                  return client.id == _this3.$route.params.client_id;
                });
                _this3.edit_tour = current_client.tours.find(function (tour) {
                  return tour.id == _this3.$route.params.id;
                });
                _this3.loadAdditionalData();
                _this3.load = false;
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
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
      var _this4 = this;
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
          if (_this4.hotels.findIndex(function (item) {
            return item.Id == _this4.edit_tour.TourInfo.hotel.Id;
          }) == -1) {
            _this4.edit_tour.TourInfo.hotel = {
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
      var _this5 = this;
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
        _this5.edit_tour.TourInfo.delete_files = [];
        _this5.edit_tour.TourInfo.new_files = [];
        _this5.edit_tour.TourInfo.files = response.TourInfo.files;
        _this5.sendMessage('Тур клиента успешно обновлён');
        _this5.loading = false;
      });
    },
    getImagePreviews: function getImagePreviews(arr) {
      var _this6 = this;
      var _loop = function _loop(i) {
        if (/\.(jpe?g|png|svg)$/i.test(arr[i].name)) {
          var reader = new FileReader();
          reader.addEventListener("load", function () {
            this.$refs['preview' + parseInt(i)][0].src = reader.result;
          }.bind(_this6), false);
          reader.readAsDataURL(arr[i].data);
        } else {
          _this6.$nextTick(function () {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=template&id=0061e288&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=template&id=0061e288&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        return [!_vm.load ? _c("div", {
          staticClass: "row mb-5 mx-auto"
        }, [_c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Куда")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "country",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref2) {
              var errors = _ref2.errors;
              return [_c("multiselect", {
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
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Курорт")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "resort",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref3) {
              var errors = _ref3.errors;
              return [_c("multiselect", {
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
                  fn: function fn(_ref4) {
                    var values = _ref4.values,
                      search = _ref4.search,
                      isOpen = _ref4.isOpen;
                    return [values.length > 3 && !isOpen ? _c("span", {
                      staticClass: "multiselect__single"
                    }, [_vm._v(_vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeResorts")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)))]) : _vm._e()];
                  }
                }], null, true)
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Отель")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "hotel",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref5) {
              var errors = _ref5.errors;
              return [_c("multiselect", {
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
                  fn: function fn(_ref6) {
                    var values = _ref6.values,
                      search = _ref6.search,
                      isOpen = _ref6.isOpen;
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
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("label", {
          staticClass: "travel-label"
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
          staticClass: "travel-label"
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
            fn: function fn(_ref8) {
              var errors = _ref8.errors;
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
          staticClass: "travel-label"
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
            fn: function fn(_ref9) {
              var errors = _ref9.errors;
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
                  minDate: _vm.minDate,
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
          staticClass: "row align-items-center w-100 m-auto"
        }, [_c("label", {
          staticClass: "travel-label"
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
            fn: function fn(_ref10) {
              var errors = _ref10.errors;
              return [_c("b-form-input", {
                staticClass: "travel-input",
                attrs: {
                  type: "number",
                  step: "1",
                  min: "0"
                },
                on: {
                  input: _vm.changeEditPrice
                },
                model: {
                  value: _vm.edit_tour.TourInfo.price,
                  callback: function callback($$v) {
                    _vm.$set(_vm.edit_tour.TourInfo, "price", $$v);
                  },
                  expression: "edit_tour.TourInfo.price"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("div", {
          staticClass: "row align-items-center w-100 m-auto"
        }, [_c("label", {
          staticClass: "travel-label"
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
            fn: function fn(_ref11) {
              var errors = _ref11.errors;
              return [_c("b-form-input", {
                staticClass: "travel-input",
                attrs: {
                  type: "number",
                  step: "1",
                  min: "0"
                },
                on: {
                  input: _vm.changeEditPrice
                },
                model: {
                  value: _vm.edit_tour.TourInfo.paid,
                  callback: function callback($$v) {
                    _vm.$set(_vm.edit_tour.TourInfo, "paid", $$v);
                  },
                  expression: "edit_tour.TourInfo.paid"
                }
              }), _vm._v(" "), _c("span", {
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
          staticClass: "travel-label"
        }, [_vm._v("Дополнительные услуги")]), _vm._v(" "), _c("b-form-textarea", {
          staticClass: "travel-input",
          staticStyle: {
            padding: "5px 15px",
            border: "1px solid #f08b23",
            "border-radius": "20px !important"
          },
          attrs: {
            rows: "4",
            cols: "80",
            placeholder: "Дополнительные услуги"
          },
          model: {
            value: _vm.edit_tour.TourInfo.services,
            callback: function callback($$v) {
              _vm.$set(_vm.edit_tour.TourInfo, "services", $$v);
            },
            expression: "edit_tour.TourInfo.services"
          }
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Авиабилеты")]), _vm._v(" "), _c("avia-tickets-list", {
          attrs: {
            avia_tickets: _vm.edit_tour.TourInfo.avia_tickets
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Пассажиры")]), _vm._v(" "), _c("passengers-list", {
          attrs: {
            passengers: _vm.edit_tour.TourInfo.passengers
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "travel-label"
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
          staticClass: "travel-label"
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
            staticClass: "travel-label"
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
            staticClass: "travel-label"
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
        }), 0)])])])]) : _vm._e(), _vm._v(" "), !_vm.load ? _c("div", {
          staticClass: "row w-100 m-auto"
        }, [_c("div", {
          staticClass: "col-6 col-md-6 contact-btn text-center"
        }, [_c("button", {
          staticClass: "btn btn-travel",
          staticStyle: {
            width: "100%"
          },
          on: {
            click: _vm.back
          }
        }, [_vm._v("\n                    Отмена\n                ")])]), _vm._v(" "), _c("div", {
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
        }, [_vm._v("Loading...")]) : _vm._e(), _vm._v("\n                        Сохранить\n                    ")])])])]) : _vm._e(), _vm._v(" "), _vm.load ? _c("div", {
          staticClass: "row w-100 m-auto"
        }, [_c("div", {
          staticClass: "text-center text-warning my-2"
        }, [_c("b-spinner", {
          staticClass: "align-middle",
          attrs: {
            variant: "warning"
          }
        }), _vm._v(" "), _c("strong", [_vm._v("Загрузка...")])], 1)]) : _vm._e()];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=0&id=0061e288&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=0&id=0061e288&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=1&id=0061e288&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=1&id=0061e288&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[type=\"file\"][data-v-0061e288]{\n    opacity: 0;\n    width: 100%;\n    height: 200px;\n    position: absolute;\n    cursor: pointer;\n}\n.filezone[data-v-0061e288] {\n    outline: 2px dashed grey;\n    outline-offset: -10px;\n    background: #ccc;\n    color: dimgray;\n    padding: 10px 10px;\n    min-height: 200px;\n    position: relative;\n    cursor: pointer;\n}\n.filezone[data-v-0061e288]:hover {\n    background: #c0c0c0;\n}\n.filezone p[data-v-0061e288] {\n    font-size: 1.2em;\n    text-align: center;\n    padding: 50px 50px 50px 50px;\n}\ndiv.file-listing img[data-v-0061e288]{\n    max-width: 90%;\n}\ndiv.file-listing[data-v-0061e288]{\n    margin: auto;\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n}\ndiv.file-listing img[data-v-0061e288]{\n    height: 100px;\n}\n.preview[data-v-0061e288]{\n    height: 100px;\n    max-width: 90%;\n}\ndiv.success-container[data-v-0061e288]{\n    text-align: center;\n    color: green;\n}\ndiv.remove-container[data-v-0061e288]{\n    text-align: center;\n}\ndiv.remove-container a[data-v-0061e288]{\n    color: red;\n    cursor: pointer;\n}\na.submit-button[data-v-0061e288]{\n    display: block;\n    margin: auto;\n    text-align: center;\n    width: 200px;\n    padding: 10px;\n    text-transform: uppercase;\n    background-color: green;\n    color: white;\n    font-weight: bold;\n    margin-top: 20px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=0&id=0061e288&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=0&id=0061e288&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_0061e288_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=0061e288&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=0&id=0061e288&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_0061e288_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_0061e288_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=1&id=0061e288&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=1&id=0061e288&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_id_0061e288_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=1&id=0061e288&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=1&id=0061e288&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_id_0061e288_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_id_0061e288_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_2_id_0061e288_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_2_id_0061e288_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_2_id_0061e288_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Tours/Edit.vue":
/*!***********************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Edit.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_0061e288_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=0061e288&scoped=true */ "./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=template&id=0061e288&scoped=true");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=script&lang=js");
/* harmony import */ var _Edit_vue_vue_type_style_index_0_id_0061e288_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=0061e288&lang=css */ "./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=0&id=0061e288&lang=css");
/* harmony import */ var _Edit_vue_vue_type_style_index_1_id_0061e288_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=1&id=0061e288&lang=css */ "./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=1&id=0061e288&lang=css");
/* harmony import */ var _Edit_vue_vue_type_style_index_2_id_0061e288_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css */ "./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;




/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_0061e288_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_0061e288_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0061e288",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Manager/Tours/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=template&id=0061e288&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=template&id=0061e288&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0061e288_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0061e288_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0061e288_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=0061e288&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=template&id=0061e288&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=0&id=0061e288&lang=css":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=0&id=0061e288&lang=css ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_0061e288_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=0061e288&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=0&id=0061e288&lang=css");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=1&id=0061e288&lang=css":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=1&id=0061e288&lang=css ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_id_0061e288_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=1&id=0061e288&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=1&id=0061e288&lang=css");


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_2_id_0061e288_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Edit.vue?vue&type=style&index=2&id=0061e288&scoped=true&lang=css");


/***/ })

}]);