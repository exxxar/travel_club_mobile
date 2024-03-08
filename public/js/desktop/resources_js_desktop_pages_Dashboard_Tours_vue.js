"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Dashboard_Tours_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BasePagination.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BasePagination.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Pagination",
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    },
    limit: {
      type: Number,
      "default": 0
    },
    showDisabled: {
      type: Boolean,
      "default": true
    },
    size: {
      type: String,
      "default": 'default',
      validator: function validator(value) {
        return ['small', 'default', 'large'].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      "default": 'left',
      validator: function validator(value) {
        return ['left', 'center', 'right'].indexOf(value) !== -1;
      }
    },
    mainClass: {
      type: String,
      "default": ''
    },
    extraControls: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      // page: 1,
      // pages:[]
    };
  },
  computed: {
    isApiResource: function isApiResource() {
      return !!this.data.meta;
    },
    currentPage: function currentPage() {
      return this.isApiResource ? this.data.meta.currentPage : this.data.current_page;
    },
    firstPageUrl: function firstPageUrl() {
      return this.isApiResource ? this.data.links.first : this.data.first;
    },
    from: function from() {
      return this.isApiResource ? this.data.meta.from : this.data.from;
    },
    lastPage: function lastPage() {
      return this.isApiResource ? this.data.meta.lastPage : this.data.last_page;
    },
    lastPageUrl: function lastPageUrl() {
      return this.isApiResource ? this.data.links.last : this.data.last;
    },
    nextPageUrl: function nextPageUrl() {
      return this.isApiResource ? this.data.links.next : this.data.next;
    },
    perPage: function perPage() {
      return this.isApiResource ? this.data.meta.perPage : this.data.per_page;
    },
    prevPageUrl: function prevPageUrl() {
      return this.isApiResource ? this.data.links.prev : this.data.prev;
    },
    to: function to() {
      return this.isApiResource ? this.data.meta.to : this.data.to;
    },
    total: function total() {
      return this.isApiResource ? this.data.meta.total : this.data.total;
    },
    pageRange: function pageRange() {
      if (this.limit === -1) {
        return 0;
      }
      if (this.limit === 0) {
        return this.lastPage;
      }
      var current = this.currentPage;
      var last = this.lastPage;
      var delta = this.limit;
      var left = current - delta;
      var right = current + delta + 1;
      var range = [];
      var pages = [];
      var l;
      for (var i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
          range.push(i);
        }
      }
      range.forEach(function (i) {
        if (l) {
          if (i - l === 2) {
            // pages.push(l + 1);
            pages.push('...');
          } else if (i - l !== 1) {
            pages.push('...');
          }
        }
        pages.push(i);
        l = i;
      });
      return pages;
    }
  },
  methods: {
    changePage: function changePage(page) {
      if (page === '...') {
        return;
      }
      this.$emit("change-page", page);
    },
    previousPage: function previousPage() {
      this.changePage(this.currentPage - 1);
    },
    nextPage: function nextPage() {
      this.changePage(this.currentPage + 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/CardList.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/CardList.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound */ "./resources/js/desktop/components/NotFound.vue");
/* harmony import */ var _FilterBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterBlock */ "./resources/js/desktop/components/FilterBlock.vue");
/* harmony import */ var _SortBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortBlock */ "./resources/js/desktop/components/SortBlock.vue");
/* harmony import */ var _Base_BasePagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Base/BasePagination */ "./resources/js/desktop/components/Base/BasePagination.vue");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CardList",
  components: {
    NotFound: _NotFound__WEBPACK_IMPORTED_MODULE_0__["default"],
    FilterBlock: _FilterBlock__WEBPACK_IMPORTED_MODULE_1__["default"],
    SortBlock: _SortBlock__WEBPACK_IMPORTED_MODULE_2__["default"],
    BasePagination: _Base_BasePagination__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    name: {
      type: String,
      "default": ''
    },
    method_params: {
      type: String,
      "default": ''
    },
    // items: {
    //     type: Array,
    //     // required: true,
    //     default: function () {
    //         return [];
    //     }
    // },
    no_results: {
      type: Boolean,
      "default": false
    },
    not_found: {
      type: Object
    },
    loading: {
      type: Boolean,
      "default": false
    },
    // params: {
    //     type: Object,
    //     // required: true,
    //     default: ()=>[]
    // },
    fields: {
      type: Array,
      // required: true,
      "default": function _default() {
        return [];
      }
    },
    in_process: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    header_class: {
      type: String,
      "default": ''
    },
    main_class: {
      type: String,
      "default": ''
    },
    search_class: {
      type: String,
      "default": ''
    },
    current_component: {
      // type:String
    },
    infinite_params: {
      type: Object
    },
    no_infinite: {
      type: Boolean,
      "default": false
    },
    no_header: {
      type: Boolean,
      "default": false
    },
    no_search: {
      type: Boolean,
      "default": false
    },
    no_filters: {
      type: Boolean,
      "default": false
    },
    no_actions: {
      type: Boolean,
      "default": false
    },
    no_pagination: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      results: [],
      observer: null,
      params: {
        sortBy: '',
        sortDirection: 'asc',
        sortOptions: [],
        filter: null,
        filterOptions: [],
        search: '',
        // searchOptions: [],
        searchOptions: {
          shouldSort: false,
          threshold: 0.2,
          keys: []
        }
      },
      search: '',
      lower_name: ''
    };
  },
  created: function created() {
    this.lower_name = this.snakeCase(this.name);
  },
  mounted: function mounted() {
    var _this = this;
    this.$emit('mounted');
    this.getItems();
    if (this.no_infinite === false) {
      this.observer = new IntersectionObserver(function (entries) {
        _this.handleIntersect(entries[0]);
        // document.querySelector('.card-list__wrapper')
      }, {
        root: null,
        threshold: 0.9
      });
      this.observer.observe(this.$refs.infiniteLoad);
    }
    this.runSearch();
    this.makeSortOptions();
    this.makeFilterOptions();
    this.makeSearchOptions();
  },
  watch: {
    // 'params.search': function(){
    //     if(this.params.search && this.params.search.trim() !==''){
    //         this.inputSearch();
    //         // this.runSearch();
    //     }
    // },
    items: function items() {
      if (this.params.search && this.params.search.trim() !== '') {
        this.runSearch();
      }
    },
    loading: function loading() {
      if (this.no_infinite === false) {
        this.observer.observe(this.$refs.infiniteLoad);
      }
    }
    // infinite_params: function(newVal){
    //     console.log('infinite_params', newVal)
    // }
  },

  computed: {
    searchedItems: function searchedItems() {
      if (!this.params.search || this.params.search.trim() === '') {
        return this.items;
      } else {
        return this.results;
      }
    },
    filteredItems: function filteredItems() {
      var _this2 = this;
      var payload = {
        items: this.searchedItems,
        filter: this.params.filter,
        fields: this.fields
      };
      if (payload.filter) {
        var keys = Object.keys(payload.filter);
        return payload.items.filter(function (item) {
          return keys.every(function (key) {
            var arr = payload.filter[key].filter(function (obj) {
              if (_typeof(obj) === 'object' && obj !== null) {
                return true;
              }
              return false;
            });
            if (arr.length === 0) {
              return true;
            }
            if (item.hasOwnProperty(key) || item[key] === null) {
              if (payload.filter.hasOwnProperty(key) && payload.filter[key].length !== 0) {
                var index = payload.fields.findIndex(function (field) {
                  return field.key === key;
                });
                var tmp = [];
                if (index >= 0) {
                  if (payload.fields[index].filter_method) {
                    if (payload.fields[index].filter_method === 'Object') {
                      tmp = _this2.getObjectValue(item, key);
                      return payload.filter[key].filter(function (obj) {
                        if (_typeof(obj) === 'object' && obj !== null) {
                          return true;
                        }
                        return false;
                      }).some(function (el) {
                        return el.value === tmp;
                      });
                    }
                    if (payload.fields[index].filter_method === 'ArrayObject') {
                      var _arr = item[key];
                      return _arr.some(function (el) {
                        tmp = _this2.getObjectValue(el, payload.fields[index].nested_key);
                        return payload.filter[key].filter(function (obj) {
                          if (_typeof(obj) === 'object' && obj !== null) {
                            return true;
                          }
                          return false;
                        }).some(function (m) {
                          return m.value === tmp;
                        });
                      });
                    }
                    if (payload.fields[index].filter_method === 'isNull') {
                      tmp = payload.filter[key].filter(function (obj) {
                        if (_typeof(obj) === 'object' && obj !== null) {
                          return true;
                        }
                        return false;
                      }).map(function (f) {
                        return f.value;
                      });
                      if (tmp.includes('null') && tmp.includes('not_null')) {
                        return true;
                      }
                      if (!tmp.includes('null') && !tmp.includes('not_null')) {
                        return true;
                      }
                      if (tmp.includes('null') && !tmp.includes('not_null')) {
                        return item[key] === null;
                      }
                      if (!tmp.includes('null') && tmp.includes('not_null')) {
                        return item[key] !== null;
                      }
                    }
                  }
                  return payload.filter[key].filter(function (obj) {
                    if (_typeof(obj) === 'object' && obj !== null) {
                      return true;
                    }
                    return false;
                  }).some(function (el) {
                    return el.value === item[key];
                  });
                }
              }
              return true;
            }
            return true;
          });
        });
      }
      return payload.items;
    },
    sortedItems: function sortedItems() {
      var _this3 = this;
      var payload = {
        items: this.filteredItems,
        sortBy: this.params.sortBy,
        sortDirection: this.params.sortDirection
      };
      if (payload.sortBy && payload.sortBy !== '') {
        var arr = JSON.parse(JSON.stringify(payload.items));
        return arr.sort(function (a, b) {
          var modifier = 1;
          if (payload.sortDirection === 'desc') modifier = -1;
          var tmp_a = _this3.getObjectValue(a, payload.sortBy);
          var tmp_b = _this3.getObjectValue(b, payload.sortBy);
          if (typeof tmp_a === 'string') {
            if (tmp_a < tmp_b) {
              return -1 * modifier;
            }
            if (tmp_a > tmp_b) {
              return 1 * modifier;
            }
            return 0;
          } else if (typeof a[payload.sortBy] === 'number') {
            return a[payload.sortBy] * modifier - b[payload.sortBy] * modifier;
          } else if (typeof a[payload.sortBy] === 'boolean') {
            if (a[payload.sortBy] && !b[payload.sortBy]) {
              return -1 * modifier;
            } else if (!a[payload.sortBy] && b[payload.sortBy]) {
              return 1 * modifier;
            }
            return 0;
          }
          return 0;
        });
      }
      return payload.items;
    },
    items: function items() {
      return this.$store.getters[this.lower_name];
    },
    pagination: function pagination() {
      return this.$store.getters[this.lower_name + '_pagination'];
    },
    items_loading: function items_loading() {
      return this.$store.getters[this.lower_name + '_loading'];
    }
  },
  destroyed: function destroyed() {
    if (this.no_infinite === false) {
      this.observer.disconnect();
    }
  },
  methods: {
    // inputSearch: _.debounce(function(e) {
    //     this.runSearch()
    // }, 600),
    runSearch: function runSearch() {
      var _this4 = this;
      if (this.params.search && this.params.search.trim() !== '') {
        if (this.no_infinite === false) {
          if (this.$refs.infiniteLoading.status !== 1) {
            this.$refs.infiniteLoading.status = 1;
            this.$refs.infiniteLoading.$emit('infinite', this.$refs.infiniteLoading.stateChanger);
          }
        }
        this.$search(this.params.search, this.items, this.params.searchOptions).then(function (response) {
          _this4.results = response;
        });
      }
    },
    getObjectValue: function getObjectValue(object, nested_property) {
      nested_property = nested_property.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
      nested_property = nested_property.replace(/^\./, ''); // strip a leading dot
      var a = nested_property.split('.');
      for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (_typeof(object) === 'object' && object !== null && object.hasOwnProperty(k)) {
          object = object[k];
        } else {
          return;
        }
      }
      return object;
    },
    handleIntersect: function handleIntersect(entry) {
      var tmp = Math.round(this.$refs.cardList.scrollTop + this.$refs.cardList.clientHeight);
      if (tmp >= this.$refs.cardList.scrollHeight) {
        if (entry.isIntersecting) {
          if (this.$refs.infiniteLoading.status !== 1) {
            this.$refs.infiniteLoading.status = 1;
            this.$refs.infiniteLoading.$emit('infinite', this.$refs.infiniteLoading.stateChanger);
          }
        }
      }
    },
    infiniteHandler: function infiniteHandler($state) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var page, payload, _payload;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              page = 0;
              if (!_this5.infinite_params.pagination) {
                _context.next = 13;
                break;
              }
              page = _this5.infinite_params.pagination.meta.current_page;
              if (!(_this5.infinite_params.pagination.links.next !== null)) {
                _context.next = 10;
                break;
              }
              payload = page + 1;
              if (_this5.infinite_params.method_params) {
                payload = _this5.infinite_params.method_params;
                payload.page = page + 1;
              }
              _context.next = 8;
              return _this5.$store.dispatch(_this5.infinite_params.method_name, payload).then(function (resp) {
                if (_this5.infinite_params.pagination.links.next !== null) {
                  $state.loaded();
                } else {
                  $state.complete();
                }
              });
            case 8:
              _context.next = 11;
              break;
            case 10:
              $state.complete();
            case 11:
              _context.next = 17;
              break;
            case 13:
              _payload = page + 1;
              if (_this5.infinite_params.method_params) {
                _payload = _this5.infinite_params.method_params;
                _payload.page = page + 1;
              }
              _context.next = 17;
              return _this5.$store.dispatch(_this5.infinite_params.method_name, _payload).then(function (resp) {
                if (_this5.infinite_params.pagination.links.next !== null) {
                  $state.loaded();
                } else {
                  $state.complete();
                }
              });
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    makeSortOptions: function makeSortOptions() {
      this.params.sortOptions = this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        // return {text: f.label, value: f.key}
        return f;
      });
    },
    makeFilterOptions: function makeFilterOptions() {
      this.params.filterOptions = this.fields.filter(function (f) {
        return f.filterable;
      }).map(function (f) {
        return f;
      });
    },
    makeSearchOptions: function makeSearchOptions() {
      this.params.searchOptions.keys = this.fields.filter(function (f) {
        return f.searchable;
      }).map(function (f) {
        return f.key;
      });
    },
    inputSearch: _.debounce(function (e) {
      this.params.search = this.search;
      this.runSearch();
    }, 800),
    changePage: function changePage(page) {
      this.$emit('change-page', page);
      this.method_params.page = page;
      this.getItems();
    },
    snakeCase: function snakeCase(string) {
      return string.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map(function (word) {
        return word.toLowerCase();
      }).join('_');
    },
    getItems: function getItems() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this6.$store.commit('set' + _this6.name + 'Loading', true);
              _context2.next = 3;
              return _this6.$store.dispatch('set' + _this6.name, _this6.method_params).then(function () {
                _this6.$store.commit('set' + _this6.name + 'Loading', false);
              })["catch"](function () {
                _this6.$store.commit('set' + _this6.name + 'Loading', false);
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/FilterBlock.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/FilterBlock.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FilterBlock",
  props: ['fields', 'params'],
  model: {
    prop: 'params',
    event: 'input'
  },
  data: function data() {
    return {
      select_arr: {}
    };
  },
  methods: {
    reset: function reset() {
      this.select_arr = {};
      this.params.filter = null;
      $('#dropdownFilterButton').dropdown('hide');
    },
    submit: function submit() {
      this.params.filter = JSON.parse(JSON.stringify(this.select_arr));
      $('#dropdownFilterButton').dropdown('hide');
    },
    unselect: function unselect(key, option) {
      var index = this.select_arr[key].findIndex(function (item) {
        return item.text === option.text;
      });
      if (index >= 0) {
        this.select_arr[key].splice(index, 1);
      }
    },
    isSelected: function isSelected(key, option) {
      if (this.select_arr[key]) {
        if (this.select_arr[key].findIndex(function (item) {
          return item.text === option.text;
        }) > -1) {
          return true;
        }
      }
      return false;
    },
    addSelect: function addSelect(key) {
      if (!this.select_arr[key]) {
        Vue.set(this.select_arr, key, []);
        // this.select_arr[key] = [];
      }

      var len = this.select_arr[key].length;
      Vue.set(this.select_arr[key], len, len);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/NotFound.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/NotFound.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NotFound",
  props: {
    title: {
      type: String,
      "default": 'Здесь пока ничего нет'
    },
    subtitle: {
      type: String,
      "default": 'Скоро появится'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/SortBlock.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/SortBlock.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SortBlock",
  props: ['fields', 'params'],
  model: {
    prop: 'params',
    event: 'input'
  },
  data: function data() {
    return {
      sort: '',
      direction: '',
      toggle: false
    };
  },
  computed: {
    options: function options() {
      var _this = this;
      var index = this.fields.findIndex(function (item) {
        return item.key === _this.params.sortBy;
      });
      return index >= 0 ? this.fields[index].sortable_fields : [];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardTour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardTour */ "./resources/js/desktop/pages/Dashboard/CardTour.vue");
/* harmony import */ var _components_CardList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CardList */ "./resources/js/desktop/components/CardList.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Tours",
  components: {
    CardTour: _CardTour__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardList: _components_CardList__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  // props: ['tours'],
  data: function data() {
    return {
      tours: [{
        title: 'Test',
        country: 'Russia',
        city: 'Test',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta earum hic id ' + 'in ipsam molestiae necessitatibus! Architecto assumenda dolorum tenetur ullam voluptate? ' + 'Deleniti dolore, earum illum nostrum possimus recusandae?\n',
        status: 'Открыт',
        files_count: 0,
        reviews_count: 0
      }],
      fields: [
      //example of nested object
      // {key: 'test.name', label: 'Test', filterable: true, filter_method:'Object',
      //     filterable_fields: [{text:'Apple', value: "appleIdToken"},{text:'Google', value: "googleIdToken"}]
      // },
      {
        key: 'id',
        label: 'ID',
        searchable: true,
        sortable: true,
        sortable_fields: [{
          text: 'По возрастанию',
          value: 'asc'
        }, {
          text: 'По убыванию',
          value: 'desc'
        }]
      }, {
        key: 'title',
        label: 'Имя',
        searchable: true,
        sortable: true,
        sortable_fields: [{
          text: 'От А до Я',
          value: 'asc'
        }, {
          text: 'От Я до А',
          value: 'desc'
        }]
      }, {
        key: 'created_at',
        label: 'Дата создания',
        searchable: true,
        sortable: true,
        sortable_fields: [{
          text: 'По возрастанию',
          value: 'asc'
        }, {
          text: 'По убыванию',
          value: 'desc'
        }]
      }, {
        key: 'review',
        label: 'Отзыв',
        filterable: true,
        filter_method: 'isNull',
        clearable: true,
        control: 'select',
        filterable_fields: [{
          text: 'Есть отзыв',
          value: "not_null"
        }, {
          text: 'Нет отзыва',
          value: "null"
        }]
      }, {
        key: 'status',
        label: 'Статус',
        filterable: true,
        filter_method: 'ArrayObject',
        multiple: true,
        control: 'select',
        filterable_fields: [{
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
        }]
      }

      // {key: 'created_at', label: 'Дата создания', filterable: true, filter_method:'isNull',
      //     filterable_fields: [
      //         {text:'Заблокирован', value: 'not_null'},
      //         {text:'Не заблокирован', value: 'null'}
      //     ]
      // },
      ],

      method_name: 'getTours'
    };
  },
  computed: {
    isLoggedIn: function isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    user: function user() {
      return this.$store.getters.user;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BasePagination.vue?vue&type=template&id=09e13ea1&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BasePagination.vue?vue&type=template&id=09e13ea1&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.lastPage != 1 ? _c("nav", {
    staticClass: "tc-pagination",
    "class": _vm.mainClass,
    attrs: {
      "aria-label": "Page navigation"
    }
  }, [_vm.total > _vm.perPage ? _c("ul", {
    staticClass: "pagination",
    "class": {
      "pagination-sm": _vm.size == "small",
      "pagination-lg": _vm.size == "large",
      "justify-content-center": _vm.align == "center",
      "justify-content-end": _vm.align == "right"
    }
  }, [(_vm.prevPageUrl || _vm.showDisabled) && _vm.extraControls ? _c("li", {
    staticClass: "page-item page-item-control d-none d-sm-block",
    "class": {
      disabled: !_vm.prevPageUrl
    }
  }, [_c("div", {
    staticClass: "page-link",
    attrs: {
      "aria-label": "Previous",
      tabindex: !_vm.prevPageUrl && -1
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changePage(1);
      }
    }
  }, [_c("svg", {
    attrs: {
      fill: "#ffc515",
      width: "14",
      height: "12",
      viewBox: "0 0 14 12"
    }
  }, [_c("path", {
    attrs: {
      d: "M14 10.59L12.59 12L6.59 6L12.59 1.23266e-07L14 1.41L9.42 6L14 10.59ZM8 10.59L6.59 12L0.59 6L6.59 6.47803e-07L8 1.41L3.42 6L8 10.59Z"
    }
  })])])]) : _vm._e(), _vm._v(" "), _c("li", {
    staticClass: "page-item page-item-control",
    "class": {
      disabled: !_vm.prevPageUrl
    }
  }, [_c("div", {
    staticClass: "page-link",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.previousPage.apply(null, arguments);
      }
    }
  }, [_c("svg", {
    attrs: {
      width: "8",
      height: "12",
      viewBox: "0 0 8 12",
      fill: "#ffc515"
    }
  }, [_c("path", {
    attrs: {
      d: "M8 1.42L3.42 6L8 10.59L6.59 12L0.59 6L6.59 1.23266e-07L8 1.42Z"
    }
  })])])]), _vm._v(" "), _vm._l(_vm.pageRange, function (page, index) {
    return _c("li", {
      key: index,
      staticClass: "page-item",
      "class": {
        active: page == _vm.currentPage,
        dots: page == "..."
      }
    }, [_c("div", {
      staticClass: "page-link",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.changePage(page);
        }
      }
    }, [_vm._v("\n                " + _vm._s(page) + "\n            ")])]);
  }), _vm._v(" "), _c("li", {
    staticClass: "page-item page-item-control",
    "class": {
      disabled: !_vm.nextPageUrl
    }
  }, [_c("div", {
    staticClass: "page-link",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.nextPage.apply(null, arguments);
      }
    }
  }, [_c("svg", {
    attrs: {
      fill: "#ffc515",
      width: "8",
      height: "12",
      viewBox: "0 0 8 12"
    }
  }, [_c("path", {
    attrs: {
      d: "M0 10.5801L4.58 6.00012L0 1.41012L1.41 0.00012207L7.41 6.00012L1.41 12.0001L0 10.5801Z"
    }
  })])])]), _vm._v(" "), (_vm.nextPageUrl || _vm.showDisabled) && _vm.extraControls ? _c("li", {
    staticClass: "page-item page-item-control d-none d-sm-block",
    "class": {
      disabled: !_vm.nextPageUrl
    }
  }, [_c("div", {
    staticClass: "page-link",
    attrs: {
      "aria-label": "Next",
      tabindex: !_vm.nextPageUrl && -1
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changePage(_vm.lastPage);
      }
    }
  }, [_c("svg", {
    attrs: {
      fill: "#ffc515",
      width: "14",
      height: "12",
      viewBox: "0 0 14 12"
    }
  }, [_c("path", {
    attrs: {
      d: "M0 1.41012L1.41 0.00012207L7.41 6.00012L1.41 12.0001L0 10.5901L4.58 6.00012L0 1.41012ZM6 1.41012L7.41 0.00012207L13.41 6.00012L7.41 12.0001L6 10.5901L10.58 6.00012L6 1.41012Z"
    }
  })])])]) : _vm._e()], 2) : _vm._e()]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/CardList.vue?vue&type=template&id=7edd5346&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/CardList.vue?vue&type=template&id=7edd5346&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [!_vm.no_header ? _vm._t("header", function () {
    return [_c("div", {
      staticClass: "tc-card tc-wrapper align-items-center tc-gap-medium",
      "class": _vm.header_class
    }, [!_vm.no_search ? _vm._t("search", function () {
      return [_vm.params.searchOptions.keys.length > 0 ? _c("base-input", {
        "class": _vm.search_class,
        attrs: {
          type: "text",
          placeholder: "Поиск",
          name: "search"
        },
        on: {
          input: _vm.inputSearch
        },
        model: {
          value: _vm.search,
          callback: function callback($$v) {
            _vm.search = $$v;
          },
          expression: "search"
        }
      }) : _vm._e()];
    }, {
      params: _vm.params
    }) : _vm._e(), _vm._v(" "), !_vm.no_filters ? _vm._t("filters", function () {
      return [_vm.params.filterOptions.length > 0 ? _c("div", {
        staticClass: "icon panel-white__icon"
      }, [_c("filter-block", {
        attrs: {
          fields: _vm.params.filterOptions,
          params: _vm.params
        }
      })], 1) : _vm._e(), _vm._v(" "), _vm.params.sortOptions.length > 0 ? _c("div", {
        staticClass: "icon panel-white__icon"
      }, [_c("sort-block", {
        attrs: {
          fields: _vm.params.sortOptions
        },
        model: {
          value: _vm.params,
          callback: function callback($$v) {
            _vm.params = $$v;
          },
          expression: "params"
        }
      })], 1) : _vm._e(), _vm._v(" "), _vm._t("additionalFilter", null, {
        params: _vm.params
      })];
    }, {
      params: _vm.params
    }) : _vm._e(), _vm._v(" "), !_vm.no_actions ? _vm._t("actions", null, {
      params: _vm.params
    }) : _vm._e()], 2)];
  }, {
    params: _vm.params
  }) : _vm._e(), _vm._v(" "), _vm._t("main", function () {
    return [_c("div", {
      ref: "cardList",
      "class": _vm.main_class
    }, [_vm._t("list", function () {
      return [_vm._l(_vm.sortedItems, function (item, index) {
        return [_c(_vm.current_component, {
          key: index,
          tag: "component",
          attrs: {
            item: item,
            index: index
          }
        })];
      })];
    }, {
      sortedItems: _vm.sortedItems
    }), _vm._v(" "), !_vm.no_infinite ? _vm._t("infinite", function () {
      return [_c("div", {
        ref: "infiniteLoad"
      }, [_c("infinite-loading", {
        ref: "infiniteLoading",
        staticStyle: {
          height: "10px"
        },
        attrs: {
          distance: 10,
          spinner: "waveDots",
          "force-use-infinite-wrapper": "." + _vm.main_class
        },
        on: {
          infinite: _vm.infiniteHandler
        }
      }, [_c("span", {
        attrs: {
          slot: "no-results"
        },
        slot: "no-results"
      }), _vm._v(" "), _c("span", {
        attrs: {
          slot: "no-more"
        },
        slot: "no-more"
      })])], 1)];
    }) : _vm._e(), _vm._v(" "), !_vm.no_pagination && _vm.items.length > 0 && !_vm.loading ? _vm._t("pagination", function () {
      return [!_vm.pagination ? _c("base-pagination", {
        attrs: {
          limit: 1,
          data: _vm.pagination
        },
        on: {
          "change-page": _vm.changePage
        }
      }) : _vm._e()];
    }) : _vm._e()], 2)];
  }), _vm._v(" "), _vm._t("loading", function () {
    return [_vm.loading ? _c("div", [_vm._v("\n                Loading\n            ")]) : _vm._e()];
  }), _vm._v(" "), !_vm.loading && !_vm.no_results && _vm.items.length === 0 ? _vm._t("no_results", function () {
    return [_c("NotFound", _vm._b({}, "NotFound", _vm.not_found, false))];
  }) : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/FilterBlock.vue?vue&type=template&id=2c92f82d&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/FilterBlock.vue?vue&type=template&id=2c92f82d&scoped=true ***!
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
  return _vm.fields.length > 0 ? _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_c("div", {
    ref: "drop",
    staticClass: "filter-dropdown-menu__button",
    attrs: {
      type: "button",
      id: "dropdownFilterButton",
      "data-bs-toggle": "dropdown",
      "data-bs-auto-close": "outside",
      "aria-expanded": "false",
      title: "Фильтры"
    }
  }, [_c("svg", {
    staticClass: "tc-fill-secondary",
    attrs: {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M18.6711 1.50591e-06H0.840575C0.525893 -0.000593357 0.237584 0.175089 0.0938265 0.454871C-0.0519143 0.738421 -0.0263353 1.07987 0.159856 1.33883L6.69222 10.5411C6.6944 10.5443 6.69678 10.5473 6.69896 10.5504C6.93631 10.8709 7.0648 11.2591 7.06539 11.6579V19.1605C7.064 19.3825 7.15125 19.5961 7.3077 19.7537C7.46434 19.9112 7.6773 20 7.89939 20C8.01221 19.9998 8.12405 19.9774 8.22834 19.934L11.899 18.5345C12.2278 18.4339 12.4461 18.1236 12.4461 17.75V11.6579C12.4467 11.2591 12.5752 10.8709 12.8123 10.5504C12.8145 10.5473 12.8169 10.5443 12.8191 10.5411L19.3516 1.33864C19.5378 1.07987 19.5634 0.73862 19.4177 0.45507C19.2741 0.175089 18.9856 -0.000593357 18.6711 1.50591e-06Z"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu filter-dropdown-menu",
    attrs: {
      "aria-labelledby": "dropdownFilterButton",
      id: "dropmenu"
    }
  }, [_c("div", {
    staticClass: "filter-dropdown-menu__title"
  }, [_vm._v("\n            Фильтр\n        ")]), _vm._v(" "), _vm._l(_vm.fields, function (item) {
    return _c("div", {
      staticClass: "filter-dropdown-menu__select-wrapper"
    }, [_c("div", {
      staticClass: "filter-dropdown-menu__select-label"
    }, [_vm._v("\n                " + _vm._s(item.label) + "\n            ")]), _vm._v(" "), _vm._l(_vm.select_arr[item.key], function (slct, index) {
      return _c("div", {
        key: index,
        staticClass: "row w-100 align-items-center mx-auto"
      }, [_c("div", {
        staticClass: "col-10 p-0"
      }, [_c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.select_arr[item.key][index],
          expression: "select_arr[item.key][index]"
        }],
        staticClass: "form-select filter-dropdown-menu__select my-3",
        attrs: {
          "aria-label": "..."
        },
        on: {
          change: function change($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
              return o.selected;
            }).map(function (o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.$set(_vm.select_arr[item.key], index, $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }
        }
      }, _vm._l(item.filterable_fields, function (option, ind) {
        return _c("option", {
          key: ind,
          attrs: {
            disabled: _vm.isSelected(item.key, option)
          },
          domProps: {
            value: option
          }
        }, [_vm._v("\n                            " + _vm._s(option.text) + "\n                        ")]);
      }), 0)]), _vm._v(" "), _c("div", {
        staticClass: "col-2 p-1"
      }, [_c("div", {
        staticClass: "icon mx-auto",
        attrs: {
          type: "button",
          "aria-label": "Close"
        },
        on: {
          click: function click($event) {
            return _vm.unselect(item.key, _vm.select_arr[item.key][index]);
          }
        }
      }, [_c("svg", {
        attrs: {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }
      }, [_c("g", {
        attrs: {
          "clip-path": "url(#clip0)"
        }
      }, [_c("path", {
        attrs: {
          d: "M11.6837 10.0074L15.6293 13.9382C15.7572 14.0475 15.8586 14.1845 15.926 14.3387C15.9532 14.4908 15.9532 14.6465 15.926 14.7985C15.9241 14.9511 15.894 15.102 15.837 15.2435C15.7845 15.398 15.6924 15.5361 15.57 15.644C15.5219 15.7095 15.4614 15.7649 15.392 15.8072L15.1695 15.9258H14.947C14.8003 15.9571 14.6487 15.9571 14.502 15.9258H14.2795L14.057 15.8072C13.9874 15.7652 13.9268 15.7097 13.879 15.644L9.99272 11.6836L6.03228 15.6292C5.98415 15.6947 5.92368 15.7501 5.85428 15.7923L5.63178 15.911H5.40928C5.2626 15.9423 5.11098 15.9423 4.96429 15.911H4.74179L4.5193 15.7923C4.44966 15.7504 4.38913 15.6949 4.3413 15.6292C4.21553 15.5272 4.11842 15.3943 4.05947 15.2435C4.03244 15.0964 4.03244 14.9456 4.05947 14.7985C4.03226 14.6465 4.03226 14.4908 4.05947 14.3387C4.11818 14.1873 4.20931 14.0506 4.32647 13.9382L8.30174 10.0074L4.35613 6.04698C4.22281 5.9428 4.12028 5.80437 4.05947 5.64648C4.03244 5.49938 4.03244 5.34859 4.05947 5.20149C4.03568 5.05909 4.03568 4.91373 4.05947 4.77133C4.11818 4.61994 4.20931 4.48325 4.32647 4.37083C4.43824 4.25291 4.57512 4.16166 4.72696 4.10384C5.01791 3.99046 5.34083 3.99046 5.63178 4.10384C5.78362 4.16166 5.9205 4.25291 6.03228 4.37083L9.99272 8.31644L13.9532 4.356C14.0649 4.23808 14.2018 4.14683 14.3537 4.089C14.6446 3.97562 14.9675 3.97562 15.2585 4.089C15.4103 4.14683 15.5472 4.23808 15.659 4.356C15.778 4.4727 15.8692 4.61463 15.926 4.77133C15.9498 4.91373 15.9498 5.05909 15.926 5.20149C15.9241 5.35405 15.894 5.50495 15.837 5.64648C15.7845 5.801 15.6924 5.93908 15.57 6.04698L11.6837 10.0074Z",
          fill: "#52575C"
        }
      })]), _vm._v(" "), _c("defs", [_c("clipPath", {
        attrs: {
          id: "clip0"
        }
      }, [_c("rect", {
        attrs: {
          width: "12",
          height: "11.9852",
          fill: "white",
          transform: "translate(4 4)"
        }
      })])])])])])]);
    }), _vm._v(" "), item.multiple && (!_vm.select_arr[item.key] || _vm.select_arr[item.key].length === 0 || _vm.select_arr[item.key].length !== item.filterable_fields.length) ? _c("div", {
      staticClass: "icon panel-white__icon mx-auto",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.addSelect(item.key);
        }
      }
    }, [_c("svg", {
      attrs: {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [_c("path", {
      attrs: {
        d: "M14 8H2",
        stroke: "#52575C",
        "stroke-width": "3",
        "stroke-miterlimit": "10",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), _vm._v(" "), _c("path", {
      attrs: {
        d: "M8 14V2",
        stroke: "#52575C",
        "stroke-width": "3",
        "stroke-miterlimit": "10",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })])]) : _vm._e()], 2);
  }), _vm._v(" "), _c("div", {
    staticClass: "row w-100 mx-auto align-items-center justify-content-center"
  }, [_c("button", {
    staticClass: "button-white mx-1",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.reset
    }
  }, [_vm._v("\n                Сбросить\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "button-primary mx-1",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("\n                Применить\n            ")])])], 2)]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/NotFound.vue?vue&type=template&id=25b94b67&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/NotFound.vue?vue&type=template&id=25b94b67&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "tc-wrapper align-items-center"
  }, [_c("base-icon", {
    staticClass: "mx-down-md-auto",
    attrs: {
      name: "NotFound",
      width: "120",
      height: "50"
    }
  }), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "tc-text-1 mb-0"
  }, [_vm._v("\n            " + _vm._s(_vm.title) + "\n        ")]), _vm._v(" "), _c("p", {
    staticClass: "tc-text-neutral mb-0"
  }, [_vm._v(_vm._s(_vm.subtitle))])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/SortBlock.vue?vue&type=template&id=74e260c7&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/SortBlock.vue?vue&type=template&id=74e260c7&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.fields.length > 0 ? _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_c("div", {
    staticClass: "filter-dropdown-menu__button",
    attrs: {
      type: "button",
      id: "dropdownSortButton",
      "data-bs-toggle": "dropdown",
      "data-bs-flip": "false",
      "data-bs-auto-close": "outside",
      "aria-expanded": "false",
      title: "Сортировка"
    }
  }, [_c("svg", {
    staticClass: "tc-fill-secondary",
    attrs: {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M7.5 0C7.25 0 7.08333 0.0833333 6.91667 0.25L0.25 6.91667C0.0833333 7.08333 0 7.25 0 7.5C0 7.75 0.0833333 7.91667 0.25 8.08333L1.41667 9.25C1.58333 9.41667 1.83333 9.5 2 9.5C2.25 9.5 2.41667 9.41667 2.58333 9.25L4.25 7.58333C4.5 7.33333 5 7.5 5 7.91667V19.1667C5 19.5833 5.41667 20 5.83333 20H7.5C7.91667 20 8.33333 19.5833 8.33333 19.1667V0.833333C8.33333 0.583333 8.25 0.416667 8.08333 0.25C7.91667 0.0833333 7.75 0 7.5 0Z"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M19.7501 11.9167L18.5834 10.75C18.4167 10.5833 18.1667 10.5 18.0001 10.5C17.7501 10.5 17.5834 10.5833 17.4167 10.75L15.7501 12.4167C15.5001 12.6667 15.0001 12.5 15.0001 12.0833V0.833333C15.0001 0.416667 14.5834 0 14.1667 0H12.5001C12.0834 0 11.6667 0.416667 11.6667 0.833333V19.1667C11.6667 19.4167 11.7501 19.5833 11.9167 19.75C12.0834 19.9167 12.3334 20 12.5001 20C12.7501 20 12.9167 19.9167 13.0834 19.75L19.7501 13.0833C19.9167 12.9167 20.0001 12.75 20.0001 12.5C20.0001 12.25 19.9167 12.0833 19.7501 11.9167Z"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu filter-dropdown-menu",
    attrs: {
      "aria-labelledby": "dropdownSortButton"
    }
  }, [_c("div", {
    staticClass: "filter-dropdown-menu__title"
  }, [_vm._v("\n            Сортировка\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "filter-dropdown-menu__select-wrapper"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.params.sortBy,
      expression: "params.sortBy"
    }],
    staticClass: "filter-dropdown-menu__select",
    attrs: {
      "aria-label": ".."
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.params, "sortBy", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      selected: "",
      disabled: ""
    }
  }, [_vm._v("Выберите параметр сортировки")]), _vm._v(" "), _vm._l(_vm.fields, function (item) {
    return _c("option", {
      domProps: {
        value: item.key
      }
    }, [_vm._v(_vm._s(item.label))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "filter-dropdown-menu__select-wrapper"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.params.sortDirection,
      expression: "params.sortDirection"
    }],
    staticClass: "filter-dropdown-menu__select",
    attrs: {
      "aria-label": "..",
      disabled: !_vm.params.sortBy
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.params, "sortDirection", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      selected: "",
      disabled: ""
    }
  }, [_vm._v("Выберите параметр сортировки")]), _vm._v(" "), _vm._l(_vm.options, function (item) {
    return _c("option", {
      domProps: {
        value: item.value
      }
    }, [_vm._v(_vm._s(item.text))]);
  })], 2)])])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=template&id=43946914&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=template&id=43946914&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isLoggedIn && _vm.user ? _c("div", {
    staticClass: "tc-page container"
  }, [_c("h1", {
    staticClass: "tc-page__title"
  }, [_vm._v("\n            Туры\n        ")]), _vm._v(" "), _c("card-list", {
    staticClass: "tc-wrapper-column tc-gap-column-medium",
    attrs: {
      name: "Tours",
      no_infinite: "",
      fields: _vm.fields,
      current_component: "CardTour"
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn() {
        return [_c("base-button", {
          directives: [{
            name: "role",
            rawName: "v-role",
            value: "manager|admin",
            expression: "'manager|admin'"
          }],
          staticClass: "ms-auto",
          attrs: {
            "data-bs-toggle": "modal",
            "data-bs-target": "#tourModal"
          }
        }, [_vm._v("Создать тур")])];
      },
      proxy: true
    }], null, false, 635225737)
  })], 1) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/desktop/components/Base/BasePagination.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/desktop/components/Base/BasePagination.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BasePagination_vue_vue_type_template_id_09e13ea1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasePagination.vue?vue&type=template&id=09e13ea1&scoped=true */ "./resources/js/desktop/components/Base/BasePagination.vue?vue&type=template&id=09e13ea1&scoped=true");
/* harmony import */ var _BasePagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasePagination.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/Base/BasePagination.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasePagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasePagination_vue_vue_type_template_id_09e13ea1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _BasePagination_vue_vue_type_template_id_09e13ea1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "09e13ea1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/components/Base/BasePagination.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/components/CardList.vue":
/*!******************************************************!*\
  !*** ./resources/js/desktop/components/CardList.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardList_vue_vue_type_template_id_7edd5346_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardList.vue?vue&type=template&id=7edd5346&scoped=true */ "./resources/js/desktop/components/CardList.vue?vue&type=template&id=7edd5346&scoped=true");
/* harmony import */ var _CardList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardList.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/CardList.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardList_vue_vue_type_template_id_7edd5346_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CardList_vue_vue_type_template_id_7edd5346_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7edd5346",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/components/CardList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/components/FilterBlock.vue":
/*!*********************************************************!*\
  !*** ./resources/js/desktop/components/FilterBlock.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilterBlock_vue_vue_type_template_id_2c92f82d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterBlock.vue?vue&type=template&id=2c92f82d&scoped=true */ "./resources/js/desktop/components/FilterBlock.vue?vue&type=template&id=2c92f82d&scoped=true");
/* harmony import */ var _FilterBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterBlock.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/FilterBlock.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterBlock_vue_vue_type_template_id_2c92f82d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FilterBlock_vue_vue_type_template_id_2c92f82d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c92f82d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/components/FilterBlock.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/components/NotFound.vue":
/*!******************************************************!*\
  !*** ./resources/js/desktop/components/NotFound.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotFound_vue_vue_type_template_id_25b94b67_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.vue?vue&type=template&id=25b94b67&scoped=true */ "./resources/js/desktop/components/NotFound.vue?vue&type=template&id=25b94b67&scoped=true");
/* harmony import */ var _NotFound_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFound.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/NotFound.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotFound_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotFound_vue_vue_type_template_id_25b94b67_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NotFound_vue_vue_type_template_id_25b94b67_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "25b94b67",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/components/NotFound.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/components/SortBlock.vue":
/*!*******************************************************!*\
  !*** ./resources/js/desktop/components/SortBlock.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SortBlock_vue_vue_type_template_id_74e260c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortBlock.vue?vue&type=template&id=74e260c7&scoped=true */ "./resources/js/desktop/components/SortBlock.vue?vue&type=template&id=74e260c7&scoped=true");
/* harmony import */ var _SortBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortBlock.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/SortBlock.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SortBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SortBlock_vue_vue_type_template_id_74e260c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SortBlock_vue_vue_type_template_id_74e260c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "74e260c7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/components/SortBlock.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours.vue":
/*!********************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tours_vue_vue_type_template_id_43946914_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tours.vue?vue&type=template&id=43946914&scoped=true */ "./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=template&id=43946914&scoped=true");
/* harmony import */ var _Tours_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tours.vue?vue&type=script&lang=js */ "./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tours_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tours_vue_vue_type_template_id_43946914_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Tours_vue_vue_type_template_id_43946914_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "43946914",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Dashboard/Tours.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/components/Base/BasePagination.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/desktop/components/Base/BasePagination.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BasePagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BasePagination.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/components/CardList.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/desktop/components/CardList.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/CardList.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/components/FilterBlock.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/desktop/components/FilterBlock.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilterBlock.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/FilterBlock.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/components/NotFound.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/desktop/components/NotFound.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotFound.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/NotFound.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/components/SortBlock.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/desktop/components/SortBlock.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SortBlock.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/SortBlock.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tours_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tours.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tours_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/components/Base/BasePagination.vue?vue&type=template&id=09e13ea1&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/desktop/components/Base/BasePagination.vue?vue&type=template&id=09e13ea1&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_template_id_09e13ea1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_template_id_09e13ea1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_template_id_09e13ea1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BasePagination.vue?vue&type=template&id=09e13ea1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BasePagination.vue?vue&type=template&id=09e13ea1&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/components/CardList.vue?vue&type=template&id=7edd5346&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/desktop/components/CardList.vue?vue&type=template&id=7edd5346&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardList_vue_vue_type_template_id_7edd5346_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardList_vue_vue_type_template_id_7edd5346_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardList_vue_vue_type_template_id_7edd5346_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardList.vue?vue&type=template&id=7edd5346&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/CardList.vue?vue&type=template&id=7edd5346&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/components/FilterBlock.vue?vue&type=template&id=2c92f82d&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/desktop/components/FilterBlock.vue?vue&type=template&id=2c92f82d&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterBlock_vue_vue_type_template_id_2c92f82d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterBlock_vue_vue_type_template_id_2c92f82d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterBlock_vue_vue_type_template_id_2c92f82d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilterBlock.vue?vue&type=template&id=2c92f82d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/FilterBlock.vue?vue&type=template&id=2c92f82d&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/components/NotFound.vue?vue&type=template&id=25b94b67&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/desktop/components/NotFound.vue?vue&type=template&id=25b94b67&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_25b94b67_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_25b94b67_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_25b94b67_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotFound.vue?vue&type=template&id=25b94b67&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/NotFound.vue?vue&type=template&id=25b94b67&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/components/SortBlock.vue?vue&type=template&id=74e260c7&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/desktop/components/SortBlock.vue?vue&type=template&id=74e260c7&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SortBlock_vue_vue_type_template_id_74e260c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SortBlock_vue_vue_type_template_id_74e260c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SortBlock_vue_vue_type_template_id_74e260c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SortBlock.vue?vue&type=template&id=74e260c7&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/SortBlock.vue?vue&type=template&id=74e260c7&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=template&id=43946914&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=template&id=43946914&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tours_vue_vue_type_template_id_43946914_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tours_vue_vue_type_template_id_43946914_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tours_vue_vue_type_template_id_43946914_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tours.vue?vue&type=template&id=43946914&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours.vue?vue&type=template&id=43946914&scoped=true");


/***/ })

}]);