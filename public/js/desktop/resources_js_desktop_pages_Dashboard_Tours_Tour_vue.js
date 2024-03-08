(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Dashboard_Tours_Tour_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Collapse",
  props: {
    id: {
      type: String,
      "default": 'tc-collapse',
      required: true
    },
    title: {
      type: String
    },
    title_class: {
      type: String,
      "default": 'tc-collapse__title'
    },
    main_class: {
      type: String,
      "default": 'tc-card tc-card__body'
    },
    header_class: {
      type: String
    },
    collapse_header: {
      type: Boolean,
      "default": true
    },
    collapse_class: {
      type: String
    },
    collapse_button_class: {
      type: String,
      "default": 'tc-bg-primary-light'
    },
    count: {
      type: [String, Number]
    },
    loading: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  }
  // mounted() {
  //     // var myCollapsible = document.getElementById(''+this.id)
  //     // if(myCollapsible) {
  //     //     myCollapsible.addEventListener('show.bs.collapse', () => {
  //     //         this.$emit('show');
  //     //     })
  //     // }
  // }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UploadFile",
  props: {
    id: {
      type: String,
      "default": ''
    },
    file: {},
    uploadButton: {
      type: Boolean,
      "default": true,
      description: "Показывать ли кнопку"
    },
    dropPlace: {
      type: Boolean,
      "default": false,
      description: "Показывать ли место куда можно поместить файл"
    },
    filePlace: {
      type: Boolean,
      "default": false,
      description: "Показывать ли список превью файлов"
    },
    multiple: {
      type: Boolean,
      "default": true
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    preview: {
      type: Boolean,
      "default": false
    },
    allowed_types: {
      type: String,
      "default": '\.(jpe?g|png|bmp|pdf|doc|docx|csv|xls|xlsx)$'
    },
    check: {
      type: Function
    }
  },
  model: {
    prop: 'file',
    event: 'change'
  },
  data: function data() {
    return {
      dragAndDropCapable: false,
      dragging: false,
      upload_files: []
    };
  },
  methods: {
    getImagePreview: function getImagePreview(upload_file) {
      if (upload_file) {
        if (/\.(jpe?g|png|gif|svg)$/i.test(upload_file.name)) {
          var reader = new FileReader();
          reader.addEventListener("load", function () {
            var index = this.upload_files.findIndex(function (file) {
              return file.id === upload_file.id;
            });
            this.$set(this.upload_files[index], 'data', reader.result);
            if (index >= 0) {
              if (this.$refs['file_preview_' + index]) {
                this.$refs['file_preview_' + index][0].src = reader.result;
              }
              // else {
              //     this.$set(this.upload_files[index], 'data', reader.result);
              // }
            }
          }.bind(this), false);
          reader.readAsDataURL(upload_file);
          reader.removeEventListener('load', function () {});
        }
      }
    },
    startUpload: function startUpload() {
      this.$refs['upload' + this.id].click();
    },
    removeFile: function removeFile(key) {
      this.$emit('removeFile', this.upload_files[key]);
      this.upload_files.splice(key, 1);
      this.$emit('change', this.upload_files);
    },
    clear: function clear() {
      this.$refs['upload' + this.id].value = null;
      this.$emit('change', null);
    },
    handleFile: function handleFile() {
      // this.upload_files = [];
      var uploadedFiles = this.$refs['upload' + this.id].files;
      var types = new RegExp(this.allowed_types, "i");
      for (var i = 0; i < uploadedFiles.length; i++) {
        if (types.test(uploadedFiles[i].name)) {
          if (this.check) {
            var result = this.check(uploadedFiles[i].name);
            if (result === 'break') {
              break;
            }
            if (result === 'continue') {
              continue;
            }
          }
          uploadedFiles[i].id = 'id' + new Date().getTime();
          uploadedFiles[i].fileType = 'file';
          if (/\.(jpe?g|png|bmp)$/i.test(uploadedFiles[i].name)) {
            uploadedFiles[i].fileType = 'image';
            if (this.preview) {
              this.getImagePreview(uploadedFiles[i]);
            }
          }
          uploadedFiles[i].file_size = this.formatBytes(uploadedFiles[i].size);
          this.upload_files.push(uploadedFiles[i]);
        }
      }
      this.dragging = false;
      if (this.multiple) {
        this.$emit('change', this.upload_files);
      } else {
        this.$emit('change', this.upload_files[0]);
      }
    },
    formatBytes: function formatBytes(bytes) {
      var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      if (bytes === 0) return '0 Bytes';
      var k = 1024;
      var dm = decimals < 0 ? 0 : decimals;
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-star-rating */ "./node_modules/vue-star-rating/dist/VueStarRating.common.js");
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_star_rating__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NotFound */ "./resources/js/desktop/components/NotFound.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Review",
  components: {
    StarRating: (vue_star_rating__WEBPACK_IMPORTED_MODULE_0___default()),
    NotFound: _components_NotFound__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    item: {
      type: Object,
      "default": function _default() {
        return {
          id: null,
          text: '',
          rate: 0
        };
      }
    },
    tour_id: {
      type: [String, Number]
    }
  },
  data: function data() {
    return {
      review: {
        text: '',
        rate: 0
      },
      loading: false
    };
  },
  computed: {
    user: function user() {
      return this.$store.getters.auth_user;
    }
  },
  mounted: function mounted() {
    this.review = this.item;
  },
  methods: {
    sendReview: function sendReview() {
      var _this = this;
      this.loading = true;
      var review = this.review;
      if (this.user) {
        review.user_id = this.user.id;
      }
      if (this.tour_id) {
        review.tour_id = this.tour_id;
      }
      if (this.item.id) {}
      this.$store.dispatch('addReview', review).then(function (resp) {
        _this.loading = false;
        _this.review = resp.data.review;
      })["catch"](function (error) {
        _this.loading = false;
      });
    },
    toggleApproval: function toggleApproval() {
      var payload = {
        id: this.item.id,
        param: 'is_approved',
        value: !this.item.is_approved
      };
      this.$store.dispatch('saveReview', payload);
    },
    togglePublication: function togglePublication() {
      var payload = {
        id: this.item.id,
        param: 'published_at',
        value: this.item.published_at ? null : new Date()
      };
      this.$store.dispatch('saveReview', payload);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardTour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardTour */ "./resources/js/desktop/pages/Dashboard/Tours/CardTour.vue");
/* harmony import */ var _components_Base_BaseCollapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Base/BaseCollapse */ "./resources/js/desktop/components/Base/BaseCollapse.vue");
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Review */ "./resources/js/desktop/pages/Dashboard/Review.vue");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/NotFound */ "./resources/js/desktop/components/NotFound.vue");
/* harmony import */ var _components_UploadFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/UploadFile */ "./resources/js/desktop/components/UploadFile.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Tour",
  components: {
    CardTour: _CardTour__WEBPACK_IMPORTED_MODULE_0__["default"],
    BaseCollapse: _components_Base_BaseCollapse__WEBPACK_IMPORTED_MODULE_1__["default"],
    Review: _Review__WEBPACK_IMPORTED_MODULE_2__["default"],
    NotFound: _components_NotFound__WEBPACK_IMPORTED_MODULE_3__["default"],
    UploadFile: _components_UploadFile__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      // tour:  {
      //     title: 'Test',
      //     country: 'Russia',
      //     city: 'Test',
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta earum hic id ' +
      //         'in ipsam molestiae necessitatibus! Architecto assumenda dolorum tenetur ullam voluptate? ' +
      //         'Deleniti dolore, earum illum nostrum possimus recusandae?\n',
      //     status: 'Открыт',
      //     files_count: 0,
      //     reviews_count: 0
      // },
      user: {
        last_name: 'Test',
        middle_name: 'Test',
        first_name: 'Test',
        phone: 'Test',
        email: 'Test'
      },
      loading: false,
      new_file: null
    };
  },
  computed: {
    tour: function tour() {
      if (this.loading) {
        return {};
      }
      return this.$store.getters.selected_tour;
    }
  },
  watch: {
    '$route.params.id': function $routeParamsId(newVal, oldVal) {
      this.getTour();
    }
  },
  mounted: function mounted() {
    this.getTour();
  },
  methods: {
    getTour: function getTour() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_this.$route.params.id) {
                _context.next = 5;
                break;
              }
              _this.loading = true;
              _this.clear();
              _context.next = 5;
              return _this.$store.dispatch('getTour', _this.$route.params.id).then(function (resp) {
                // this.$store.commit('setTour', resp.data);
                _this.loading = false;
              })["catch"](function (error) {
                _this.loading = false;
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    clear: function clear() {},
    test: function test() {
      console.log('test');
    },
    uploadFile: function uploadFile() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=template&id=159c78f4&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=template&id=159c78f4&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "tc-collapse",
    "class": _vm.main_class
  }, [!_vm.disabled ? _c("div", {
    staticClass: "collapse tc-collapse__body",
    "class": _vm.collapse_class,
    attrs: {
      id: _vm.id
    }
  }, [!_vm.loading ? _vm._t("collapse") : _vm._e(), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "d-flex w-100 justify-content-center mb-5"
  }, [_vm._t("loading", function () {
    return [_c("div", {
      staticClass: "spinner-border",
      staticStyle: {
        color: "#2953ff",
        "border-width": "2px"
      },
      attrs: {
        role: "status"
      }
    })];
  })], 2) : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "tc-collapse__header",
    "class": _vm.header_class,
    attrs: {
      "data-bs-toggle": _vm.collapse_header ? "collapse" : "",
      "data-bs-target": _vm.collapse_header ? "#" + _vm.id : ""
    }
  }, [_vm._t("title", function () {
    return [_vm.title ? _c("h3", {
      staticClass: "tc-card__title",
      "class": _vm.title_class,
      attrs: {
        "data-bs-toggle": "collapse",
        "data-bs-target": "#" + _vm.id
      }
    }, [_vm._t("title-inner", function () {
      return [_vm._v("\n                    " + _vm._s(_vm.title) + "\n                    "), _vm.count >= 0 ? _c("span", {
        "class": [_vm.count > 0 ? "tc-text-green" : "tc-text-neutral-dark"]
      }, [_vm._v("\n                        (" + _vm._s(_vm.count) + ")\n                    ")]) : _vm._e()];
    })], 2) : _vm._e()];
  }), _vm._v(" "), _c("button", {
    staticClass: "tc-collapse__button tc-button-icon",
    "class": [_vm.collapse_button_class, _vm.disabled ? "tc-button_disabled" : ""],
    attrs: {
      "data-bs-toggle": "collapse",
      "data-bs-target": "#" + _vm.id,
      "aria-expanded": "false",
      disabled: _vm.loading || _vm.disabled
    }
  }, [_vm.loading ? _c("span", {
    staticClass: "spinner-border spinner-border-sm tc-text-primary",
    attrs: {
      role: "status"
    }
  }) : _c("base-icon", {
    staticClass: "tc-button__icon",
    attrs: {
      name: "ArrowDown",
      color: _vm.disabled ? "neutral-dark" : "primary"
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=template&id=54b89315&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=template&id=54b89315&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      position: "relative"
    },
    attrs: {
      id: "file-drag-drop tc-gap-medium"
    }
  }, [!_vm.dropPlace ? _c("input", {
    ref: "upload" + _vm.id,
    attrs: {
      type: "file",
      id: "upload" + _vm.id,
      multiple: _vm.multiple
    },
    on: {
      change: function change($event) {
        return _vm.handleFile();
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.dropPlace ? _vm._t("dropPlace", function () {
    return [_c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.dragging,
        expression: "dragging"
      }],
      staticClass: "large-12 medium-12 small-12 filezone",
      on: {
        dragend: function dragend($event) {
          _vm.dragging = false;
        },
        dragleave: function dragleave($event) {
          _vm.dragging = false;
        },
        drop: function drop($event) {
          return _vm.handleFile();
        }
      }
    }, [_c("input", {
      ref: "upload" + _vm.id,
      attrs: {
        type: "file",
        multiple: _vm.multiple,
        id: "upload" + _vm.id
      },
      on: {
        change: function change($event) {
          return _vm.handleFile();
        }
      }
    }), _vm._v(" "), _vm._m(0)])];
  }) : _vm._e(), _vm._v(" "), _vm.uploadButton ? _vm._t("uploadButton", function () {
    return [_c("base-button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.dragging,
        expression: "!dragging"
      }],
      on: {
        dragenter: function dragenter($event) {
          _vm.dragging = true;
        },
        click: _vm.startUpload
      }
    }, [_vm._t("default", function () {
      return [_vm._v("Загрузить картинки")];
    })], 2)];
  }) : _vm._e(), _vm._v(" "), _vm.filePlace ? _vm._t("filePlace", function () {
    return [_vm.upload_files && _vm.upload_files.length > 0 ? [_c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.dragging,
        expression: "!dragging"
      }],
      staticClass: "tc-wrapper-column tc-gap-medium",
      on: {
        dragenter: function dragenter($event) {
          _vm.dragging = true;
        }
      }
    }, [_vm._l(_vm.upload_files, function (upload_file, index) {
      return [_c("div", {
        key: upload_file.id,
        staticClass: "tc-card tc-row align-items-center"
      }, [_c("div", {
        staticClass: "col-12 col-sm-3 p-0 text-center text-sm-left"
      }, [_vm.preview ? _c("img", {
        ref: "file_preview_" + index,
        refInFor: true,
        staticClass: "preview",
        staticStyle: {
          width: "100%",
          "max-width": "100px",
          "max-height": "100px",
          "object-fit": "cover"
        },
        attrs: {
          alt: "",
          src: upload_file.data
        }
      }) : _c("base-icon", {
        attrs: {
          name: "File",
          color: "secondary",
          width: "100%",
          height: "100px"
        }
      })], 1), _vm._v(" "), _c("div", {
        staticClass: "col-12 col-sm-6 text-truncate"
      }, [_c("div", {
        staticClass: "tc-feature"
      }, [_c("div", {
        staticClass: "tc-feature__title"
      }, [_vm._v("Имя файла")]), _vm._v(" "), _c("div", {
        staticClass: "tc-feature__text text-truncate"
      }, [_vm._v(_vm._s(_vm._f("empty_filter")(upload_file.name)))])])]), _vm._v(" "), _c("div", {
        staticClass: "col-12 col-sm-3 p-0 text-center text-sm-left"
      }, [_vm._t("actions", function () {
        return [_c("base-button", {
          on: {
            click: function click($event) {
              return _vm.removeFile(index);
            }
          }
        }, [_vm._v("Отменить")])];
      })], 2)])];
    })], 2)] : _vm._e()];
  }) : _vm._e()], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_vm._v("\n                Перетащите файл в область "), _c("br"), _vm._v(" или нажмите для поиска.\n            ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=template&id=18fa81a2&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=template&id=18fa81a2&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ValidationObserver", {
    attrs: {
      tag: "div"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_vm.$is("user") || _vm.$is("manager|admin") && _vm.item && _vm.item.id ? _c("div", {
          staticClass: "tc-row tc-wrapper align-items-baseline tc-gap-down-sm-large"
        }, [_c("div", {
          staticClass: "col-12 ps-md-0 d-none d-md-block"
        }, [_c("h5", {
          staticClass: "tc-form__label"
        }, [_vm._v("текст отзыва")])]), _vm._v(" "), _c("div", {
          staticClass: "col-12 p-md-0"
        }, [_c("base-textarea", {
          attrs: {
            name: "review_text",
            type: "text",
            label: "текст отзыва",
            rules: "required|max:255",
            placeholder: "",
            label_class: "d-md-none",
            no_group_item: "",
            disabled: _vm.$is("manager|admin")
          },
          model: {
            value: _vm.review.text,
            callback: function callback($$v) {
              _vm.$set(_vm.review, "text", $$v);
            },
            expression: "review.text"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-4 ps-md-0 d-none d-md-block"
        }, [_c("h5", {
          staticClass: "tc-form__label"
        }, [_vm._v(_vm._s(_vm.$is("manager|admin") ? "оценка" : "выберите оценку от 1 до 5"))])]), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-8 p-md-0"
        }, [_c("ValidationProvider", {
          staticClass: "tc-rating",
          staticStyle: {
            gap: "0"
          },
          attrs: {
            name: "Оценка",
            rules: "required|min_value:1|max_value:5",
            tag: "div"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref2) {
              var errors = _ref2.errors;
              return [_c("label", {
                staticClass: "tc-input__label text-center mb-0 d-md-none"
              }, [_vm._v(_vm._s(_vm.$is("manager|admin") ? "оценка" : "выберите оценку от 1 до 5"))]), _vm._v(" "), _c("star-rating", {
                staticClass: "mx-auto",
                attrs: {
                  "show-rating": false,
                  "star-size": 36,
                  increment: 1,
                  "rounded-corners": false,
                  disabled: _vm.$is("manager|admin")
                },
                model: {
                  value: _vm.review.rate,
                  callback: function callback($$v) {
                    _vm.$set(_vm.review, "rate", $$v);
                  },
                  expression: "review.rate"
                }
              }), _vm._v(" "), errors.length > 0 ? _c("p", {
                staticClass: "tc-input-error"
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 p-md-0"
        }, [_c("div", {
          staticClass: "tc-card__footer tc-wrapper-between tc-gap-large"
        }, [_vm.$is("user") && (!_vm.item || _vm.item && !_vm.item.is_approved) ? _c("button", {
          staticClass: "tc-button tc-button_plump tc-w-sm-100 tc-ms-auto",
          attrs: {
            disabled: _vm.loading || invalid
          },
          on: {
            click: _vm.sendReview
          }
        }, [_vm.loading ? _c("span", {
          staticClass: "spinner-border spinner-border-sm",
          attrs: {
            role: "status"
          }
        }) : _vm._e(), _vm._v("\n                    " + _vm._s(_vm.item.id ? "Сохранить изменения" : "Отправить") + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.$is("manager|admin") ? [_vm.item && !_vm.item.published_at ? _c("base-button", {
          staticClass: "tc-button tc-button_plump tc-w-sm-100 tc-ms-auto",
          attrs: {
            disabled: _vm.loading || invalid
          },
          on: {
            click: _vm.toggleApproval
          }
        }, [_vm._v("\n                        " + _vm._s(_vm.item.is_approved ? "Отозвать одобрение" : "Одобрить") + "\n                    ")]) : _vm._e(), _vm._v(" "), _vm.item && _vm.item.is_approved ? _c("base-button", {
          staticClass: "tc-button tc-button_plump tc-w-sm-100 tc-ms-auto",
          attrs: {
            disabled: _vm.loading || invalid
          },
          on: {
            click: _vm.togglePublication
          }
        }, [_vm._v("\n                        " + _vm._s(_vm.item.published_at ? "Отменить публикацию" : "Опубликовать") + "\n                    ")]) : _vm._e()] : _vm._e()], 2)])]) : _c("div", [_c("NotFound", {
          attrs: {
            subtitle: "Отзыв пока не написали"
          }
        })], 1)];
      }
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=template&id=56f0257a&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=template&id=56f0257a&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "tc-page container"
  }, [!_vm.loading && _vm.tour ? _c("div", {
    staticClass: "tc-row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-7 order-2 order-lg-1 ps-lg-0"
  }, [_c("card-tour", {
    staticClass: "h-100 tc-wrapper-column",
    attrs: {
      item: _vm.tour,
      mode: "card"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-5 order-1 order-lg-2 pe-lg-0"
  }, [_c("div", {
    staticClass: "tc-card tc-wrapper-column tc-gap-small h-100"
  }, [_c("div", {
    staticClass: "tc-card__title"
  }, [_vm._v(_vm._s(_vm.$is("admin|manager") ? "Клиент" : "Менеджер"))]), _vm._v(" "), _vm.tour.user.last_name ? _c("div", {
    staticClass: "tc-feature tc-feature_row"
  }, [_c("div", {
    staticClass: "tc-feature__title"
  }, [_vm._v("Фамилия")]), _vm._v(" "), _c("div", {
    staticClass: "tc-feature__text"
  }, [_vm._v(_vm._s(_vm._f("empty_filter")(_vm.tour.user.last_name)))])]) : _vm._e(), _vm._v(" "), _vm.tour.user.first_name ? _c("div", {
    staticClass: "tc-feature tc-feature_row"
  }, [_c("div", {
    staticClass: "tc-feature__title"
  }, [_vm._v("Имя")]), _vm._v(" "), _c("div", {
    staticClass: "tc-feature__text"
  }, [_vm._v(_vm._s(_vm._f("empty_filter")(_vm.tour.user.first_name)))])]) : _vm._e(), _vm._v(" "), _vm.tour.user.middle_name ? _c("div", {
    staticClass: "tc-feature tc-feature_row"
  }, [_c("div", {
    staticClass: "tc-feature__title"
  }, [_vm._v("Отчество")]), _vm._v(" "), _c("div", {
    staticClass: "tc-feature__text"
  }, [_vm._v(_vm._s(_vm._f("empty_filter")(_vm.tour.user.middle_name)))])]) : _vm._e(), _vm._v(" "), _vm.tour.user.email ? _c("div", {
    staticClass: "tc-feature tc-feature_row"
  }, [_c("div", {
    staticClass: "tc-feature__title"
  }, [_vm._v("Почта")]), _vm._v(" "), _c("div", {
    staticClass: "tc-feature__text"
  }, [_vm._v(_vm._s(_vm._f("empty_filter")(_vm.tour.user.email)))])]) : _vm._e(), _vm._v(" "), _vm.tour.user.phone ? _c("div", {
    staticClass: "tc-feature tc-feature_row"
  }, [_c("div", {
    staticClass: "tc-feature__title"
  }, [_vm._v("Телефон")]), _vm._v(" "), _c("div", {
    staticClass: "tc-feature__text"
  }, [_vm._v(_vm._s(_vm._f("empty_filter")(_vm.tour.user.phone)))])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "tc-wrapper mt-auto"
  }, [_c("button", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: "admin|manager",
      expression: "'admin|manager'"
    }],
    staticClass: "tc-button ms-auto"
  }, [_vm._v("Открыть профиль")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 order-3"
  }, [_c("base-collapse", {
    attrs: {
      title: "Документы",
      id: "tourDocuments",
      loading: _vm.loading,
      title_class: "tc-page__subtitle mb-0",
      disabled: _vm.loading,
      count: _vm.tour.documents.length
    },
    scopedSlots: _vm._u([{
      key: "collapse",
      fn: function fn() {
        return [_vm.tour.documents.length === 0 ? _c("NotFound") : _vm._e(), _vm._v(" "), _vm._l(_vm.tour.documents, function (doc) {
          return [_c("div", {
            staticClass: "tc-wrapper"
          }, [_c("base-icon", {
            attrs: {
              name: "File"
            }
          }), _vm._v(" "), _c("a", {
            attrs: {
              href: doc.storage_link
            }
          }, [_vm._v(_vm._s(doc.title))])], 1)];
        }), _vm._v(" "), _c("div", {
          staticClass: "tc-wrapper"
        }, [_c("upload-file", {
          staticClass: "ms-auto",
          on: {
            input: _vm.uploadFile
          },
          model: {
            value: _vm.new_file,
            callback: function callback($$v) {
              _vm.new_file = $$v;
            },
            expression: "new_file"
          }
        }, [_vm._v("Загрузить файл")])], 1)];
      },
      proxy: true
    }], null, false, 2055349385)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 order-3"
  }, [_c("base-collapse", {
    attrs: {
      title: "Отзыв",
      id: "tourReview",
      loading: _vm.loading,
      title_class: "tc-page__subtitle mb-0",
      disabled: _vm.loading
    },
    scopedSlots: _vm._u([{
      key: "collapse",
      fn: function fn() {
        return [_c("review", {
          attrs: {
            item: _vm.tour.review,
            tour_id: _vm.tour.id
          }
        })];
      },
      proxy: true
    }], null, false, 3112126575)
  })], 1)]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.shadow[data-v-54b89315] {\n    transition: all .15s ease;\n    box-shadow: 0 0 2rem 0 rgba(136,152,170,.15)!important;\n}\n.core-card[data-v-54b89315] {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid rgba(0,0,0,.05);\n    border-radius: .375rem;\n}\ninput[type=\"file\"][data-v-54b89315]{\n    opacity: 0;\n    width: 100%;\n    height: 1px;\n    position: absolute;\n    cursor: pointer;\n}\n.filezone input[type=\"file\"][data-v-54b89315]{\n    opacity: 0;\n    width: 100%;\n    height: 200px;\n    position: absolute;\n    cursor: pointer;\n}\n.filezone[data-v-54b89315] {\n    outline: 2px dashed grey;\n    outline-offset: -10px;\n    background: #ccc;\n    color: dimgray;\n    padding: 10px 10px;\n    min-height: 200px;\n    position: relative;\n    cursor: pointer;\n}\n.filezone[data-v-54b89315]:hover {\n    background: #c0c0c0;\n}\n.filezone p[data-v-54b89315] {\n    font-size: 1.2em;\n    text-align: center;\n    padding: 50px 50px 50px 50px;\n}\ndiv.file-listing img[data-v-54b89315]{\n    max-width: 90%;\n}\ndiv.file-listing[data-v-54b89315]{\n    margin: auto;\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n}\ndiv.file-listing img[data-v-54b89315]{\n    height: 100px;\n}\ndiv.success-container[data-v-54b89315]{\n    text-align: center;\n    color: green;\n}\ndiv.remove-container[data-v-54b89315]{\n    text-align: center;\n}\ndiv.remove-container a[data-v-54b89315]{\n    color: red;\n    cursor: pointer;\n}\na.submit-button[data-v-54b89315] {\n    display: block;\n    margin: auto;\n    text-align: center;\n    width: 200px;\n    padding: 10px;\n    text-transform: uppercase;\n    background-color: green;\n    color: white;\n    font-weight: bold;\n    margin-top: 20px;\n}\n.preview[data-v-54b89315] {\n    width:100%;\n    height:100px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_style_index_0_id_54b89315_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_style_index_0_id_54b89315_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_style_index_0_id_54b89315_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/components/Base/BaseCollapse.vue":
/*!***************************************************************!*\
  !*** ./resources/js/desktop/components/Base/BaseCollapse.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseCollapse_vue_vue_type_template_id_159c78f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseCollapse.vue?vue&type=template&id=159c78f4&scoped=true */ "./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=template&id=159c78f4&scoped=true");
/* harmony import */ var _BaseCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseCollapse.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BaseCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseCollapse_vue_vue_type_template_id_159c78f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _BaseCollapse_vue_vue_type_template_id_159c78f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "159c78f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/components/Base/BaseCollapse.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/components/UploadFile.vue":
/*!********************************************************!*\
  !*** ./resources/js/desktop/components/UploadFile.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UploadFile_vue_vue_type_template_id_54b89315_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadFile.vue?vue&type=template&id=54b89315&scoped=true */ "./resources/js/desktop/components/UploadFile.vue?vue&type=template&id=54b89315&scoped=true");
/* harmony import */ var _UploadFile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadFile.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/UploadFile.vue?vue&type=script&lang=js");
/* harmony import */ var _UploadFile_vue_vue_type_style_index_0_id_54b89315_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css */ "./resources/js/desktop/components/UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UploadFile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadFile_vue_vue_type_template_id_54b89315_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UploadFile_vue_vue_type_template_id_54b89315_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "54b89315",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/components/UploadFile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Review.vue":
/*!*********************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Review.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Review_vue_vue_type_template_id_18fa81a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Review.vue?vue&type=template&id=18fa81a2&scoped=true */ "./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=template&id=18fa81a2&scoped=true");
/* harmony import */ var _Review_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review.vue?vue&type=script&lang=js */ "./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Review_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Review_vue_vue_type_template_id_18fa81a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Review_vue_vue_type_template_id_18fa81a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "18fa81a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Dashboard/Review.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours/Tour.vue":
/*!*************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours/Tour.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tour_vue_vue_type_template_id_56f0257a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tour.vue?vue&type=template&id=56f0257a&scoped=true */ "./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=template&id=56f0257a&scoped=true");
/* harmony import */ var _Tour_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tour.vue?vue&type=script&lang=js */ "./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tour_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tour_vue_vue_type_template_id_56f0257a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Tour_vue_vue_type_template_id_56f0257a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "56f0257a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Dashboard/Tours/Tour.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseCollapse.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/components/UploadFile.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/desktop/components/UploadFile.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UploadFile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Review.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tour.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=template&id=159c78f4&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=template&id=159c78f4&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseCollapse_vue_vue_type_template_id_159c78f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseCollapse_vue_vue_type_template_id_159c78f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseCollapse_vue_vue_type_template_id_159c78f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseCollapse.vue?vue&type=template&id=159c78f4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/Base/BaseCollapse.vue?vue&type=template&id=159c78f4&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/components/UploadFile.vue?vue&type=template&id=54b89315&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/desktop/components/UploadFile.vue?vue&type=template&id=54b89315&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_template_id_54b89315_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_template_id_54b89315_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_template_id_54b89315_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UploadFile.vue?vue&type=template&id=54b89315&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=template&id=54b89315&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=template&id=18fa81a2&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=template&id=18fa81a2&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_template_id_18fa81a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_template_id_18fa81a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_template_id_18fa81a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Review.vue?vue&type=template&id=18fa81a2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Review.vue?vue&type=template&id=18fa81a2&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=template&id=56f0257a&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=template&id=56f0257a&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_template_id_56f0257a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_template_id_56f0257a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_template_id_56f0257a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tour.vue?vue&type=template&id=56f0257a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tour.vue?vue&type=template&id=56f0257a&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/components/UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/desktop/components/UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_style_index_0_id_54b89315_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/components/UploadFile.vue?vue&type=style&index=0&id=54b89315&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue-star-rating/dist/VueStarRating.common.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-star-rating/dist/VueStarRating.common.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_187__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_187__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_187__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_187__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "27c2":
/***/ (function(module, exports, __nested_webpack_require_3663__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __nested_webpack_require_3663__("4bad");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-star-rating-star[data-v-fde73a0c]{display:inline-block}.vue-star-rating-pointer[data-v-fde73a0c]{cursor:pointer}.vue-star-rating[data-v-fde73a0c]{display:flex;align-items:center}.vue-star-rating-inline[data-v-fde73a0c]{display:inline-flex}.vue-star-rating-rating-text[data-v-fde73a0c]{margin-left:7px}.vue-star-rating-rtl[data-v-fde73a0c]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-fde73a0c]{margin-right:10px;direction:rtl}.sr-only[data-v-fde73a0c]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2b2b":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_4521__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_fde73a0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4521__("3c76");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_fde73a0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_4521__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_fde73a0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_fde73a0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3c76":
/***/ (function(module, exports, __nested_webpack_require_6906__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_6906__("27c2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_6906__("499e").default
var update = add("af45d76c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "499e":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_7411__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_7411__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_7411__.d(__nested_webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4bad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "70a0":
/***/ (function(module, exports, __nested_webpack_require_17250__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_17250__("812a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_17250__("499e").default
var update = add("4599b915", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "812a":
/***/ (function(module, exports, __nested_webpack_require_17743__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __nested_webpack_require_17743__("4bad");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-star-rating-star[data-v-ef4bc576]{overflow:visible!important}.vue-star-rating-star-rotate[data-v-ef4bc576]{transition:all .25s}.vue-star-rating-star-rotate[data-v-ef4bc576]:hover{transition:transform .25s;transform:rotate(-15deg) scale(1.3)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "ab73":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_21536__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_ef4bc576_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21536__("70a0");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_ef4bc576_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_21536__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_ef4bc576_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_ef4bc576_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d4aa":
/***/ (function(module, exports) {

class AlphaColor {

    constructor(color) {
        this.color = color
    }

    parseAlphaColor() {
        if (/^rgba\((\d{1,3}%?\s*,\s*){3}(\d*(?:\.\d+)?)\)$/.test(this.color)) {
            return this.parseRgba()
        } else if (/^hsla\(\d+\s*,\s*([\d.]+%\s*,\s*){2}(\d*(?:\.\d+)?)\)$/.test(this.color)) {
            return this.parseHsla()
        } else if (/^#([0-9A-Fa-f]{4}|[0-9A-Fa-f]{8})$/.test(this.color)) {
            return this.parseAlphaHex()
        } else if (/^transparent$/.test(this.color)) {
            return this.parseTransparent()
        }

        return {
            color: this.color,
            opacity: '1'
        }
    }

    parseRgba() {
        return {
            color: this.color.replace(/,(?!.*,).*(?=\))|a/g, ''),
            opacity: this.color.match(/\.\d+|[01](?=\))/)[0]
        }
    }

    parseHsla() {
        return {
            color: this.color.replace(/,(?!.*,).*(?=\))|a/g, ''),
            opacity: this.color.match(/\.\d+|[01](?=\))/)[0]
        }
    }

    parseAlphaHex() {
        return {
            color: this.color.length === 5 ? this.color.substring(0, 4) : this.color.substring(0, 7),
            opacity: this.color.length === 5 ? (parseInt(this.color.substring(4, 5) + this.color.substring(4, 5), 16) / 255).toFixed(2) : (parseInt(this.color.substring(7, 9), 16) / 255).toFixed(2)

        }
    }

    parseTransparent() {
        return {
            color: '#fff',
            opacity: 0
        }
    }
}

module.exports = AlphaColor

/***/ }),

/***/ "fb15":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_25488__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_25488__.r(__nested_webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __nested_webpack_require_25488__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __nested_webpack_require_25488__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1c5cd387-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/star-rating.vue?vue&type=template&id=fde73a0c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['vue-star-rating', {'vue-star-rating-rtl':_vm.rtl}, {'vue-star-rating-inline': _vm.inline}]},[_c('div',{staticClass:"sr-only"},[_vm._t("screen-reader",[_c('span',[_vm._v("Rated "+_vm._s(_vm.selectedRating)+" stars out of "+_vm._s(_vm.maxRating))])],{"rating":_vm.selectedRating,"stars":_vm.maxRating})],2),_c('div',{staticClass:"vue-star-rating",on:{"mouseleave":_vm.resetRating}},[_vm._l((_vm.maxRating),function(n){return _c('span',{key:n,class:[{'vue-star-rating-pointer': !_vm.readOnly }, 'vue-star-rating-star'],style:({'margin-right': _vm.margin + 'px'})},[_c('star',{attrs:{"fill":_vm.fillLevel[n-1],"size":_vm.starSize,"points":_vm.starPoints,"star-id":n,"step":_vm.step,"active-color":_vm.currentActiveColor,"inactive-color":_vm.inactiveColor,"border-color":_vm.borderColor,"active-border-color":_vm.currentActiveBorderColor,"border-width":_vm.borderWidth,"rounded-corners":_vm.roundedCorners,"rtl":_vm.rtl,"glow":_vm.glow,"glow-color":_vm.glowColor,"animate":_vm.animate},on:{"star-selected":function($event){return _vm.setRating($event, true)},"star-mouse-move":_vm.setRating}})],1)}),(_vm.showRating)?_c('span',{class:['vue-star-rating-rating-text', _vm.textClass]},[_vm._v(" "+_vm._s(_vm.formattedRating))]):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/star-rating.vue?vue&type=template&id=fde73a0c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1c5cd387-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/star.vue?vue&type=template&id=ef4bc576&scoped=true&
var starvue_type_template_id_ef4bc576_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{class:['vue-star-rating-star', {'vue-star-rating-star-rotate' : _vm.shouldAnimate}],attrs:{"height":_vm.starSize,"width":_vm.starSize,"viewBox":_vm.viewBox},on:{"mousemove":_vm.mouseMoving,"click":_vm.selected,"touchstart":_vm.touchStart,"touchend":_vm.touchEnd}},[_c('linearGradient',{attrs:{"id":_vm.grad,"x1":"0","x2":"100%","y1":"0","y2":"0"}},[_c('stop',{attrs:{"offset":_vm.starFill,"stop-color":(_vm.rtl) ? _vm.getColor(_vm.inactiveColor) : _vm.getColor(_vm.activeColor),"stop-opacity":(_vm.rtl) ? _vm.getOpacity(_vm.inactiveColor) : _vm.getOpacity(_vm.activeColor)}}),_c('stop',{attrs:{"offset":_vm.starFill,"stop-color":(_vm.rtl) ? _vm.getColor(_vm.activeColor) : _vm.getColor(_vm.inactiveColor),"stop-opacity":(_vm.rtl) ? _vm.getOpacity(_vm.activeColor) : _vm.getOpacity(_vm.inactiveColor)}})],1),_c('filter',{attrs:{"id":_vm.glowId,"height":"130%","width":"130%","filterUnits":"userSpaceOnUse"}},[_c('feGaussianBlur',{attrs:{"stdDeviation":_vm.glow,"result":"coloredBlur"}}),_c('feMerge',[_c('feMergeNode',{attrs:{"in":"coloredBlur"}}),_c('feMergeNode',{attrs:{"in":"SourceGraphic"}})],1)],1),(_vm.glowColor && _vm.glow > 0)?_c('polygon',{directives:[{name:"show",rawName:"v-show",value:(_vm.fill > 1),expression:"fill > 1"}],attrs:{"points":_vm.starPointsToString,"fill":_vm.gradId,"stroke":_vm.glowColor,"filter":'url(#'+_vm.glowId+')',"stroke-width":_vm.border}}):_vm._e(),_c('polygon',{attrs:{"points":_vm.starPointsToString,"fill":_vm.gradId,"stroke":_vm.getBorderColor,"stroke-width":_vm.border,"stroke-linejoin":_vm.strokeLinejoin}}),_c('polygon',{attrs:{"points":_vm.starPointsToString,"fill":_vm.gradId}})],1)}
var starvue_type_template_id_ef4bc576_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/star.vue?vue&type=template&id=ef4bc576&scoped=true&

// EXTERNAL MODULE: ./src/classes/AlphaColor.js
var AlphaColor = __nested_webpack_require_25488__("d4aa");
var AlphaColor_default = /*#__PURE__*/__nested_webpack_require_25488__.n(AlphaColor);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/star.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var starvue_type_script_lang_js_ = ({
    name: 'Star',
    props: {
        fill: {
            type: Number,
            default: 0
        },
        points: {
            type: Array,
            default() {
                return []
            }
        },
        size: {
            type: Number,
            default: 50
        },
        starId: {
            type: Number,
            required: true
        },
        activeColor: {
            type: String,
            required: true
        },
        inactiveColor: {
            type: String,
            required: true
        },
        borderColor: {
            type: String,
            default: '#000'
        },
        activeBorderColor: {
            type: String,
            default: '#000'
        },
        borderWidth: {
            type: Number,
            default: 0
        },
        roundedCorners: {
            type: Boolean,
            default: false
        },
        rtl: {
            type: Boolean,
            default: false
        },
        glow: {
            type: Number,
            default: 0
        },
        glowColor: {
            type: String,
            default: null,
            required: false
        },
        animate: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            starPoints: [19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56],
            grad: '',
            glowId: '',
            isStarActive: true
        }
    },
    computed: {
        starPointsToString() {
            return this.starPoints.join(',')
        },
        gradId() {
            return 'url(#' + this.grad + ')'
        },
        starSize() {
            // Adjust star size when rounded corners are set with no border, to account for the 'hidden' border
            const size = (this.roundedCorners && this.borderWidth <= 0) ? parseInt(this.size) - parseInt(this.border) : this.size
            return parseInt(size) + parseInt(this.border)
        },
        starFill() {
            return (this.rtl) ? 100 - this.fill + '%' : this.fill + '%'
        },
        border() {
            return (this.roundedCorners && this.borderWidth <= 0) ? 6 : this.borderWidth
        },
        getBorderColor() {
            if (this.roundedCorners && this.borderWidth <= 0) {
                // create a hidden border
                return (this.fill <= 0) ? this.inactiveColor : this.activeColor
            }

            return (this.fill <= 0) ? this.borderColor : this.activeBorderColor
        },
        maxSize() {
            return this.starPoints.reduce(function(a, b) {
                return Math.max(a, b)
            })
        },
        viewBox() {
            return '0 0 ' + this.maxSize + ' ' + this.maxSize
        },
        shouldAnimate() {
            return this.animate && this.isStarActive
        },
        strokeLinejoin() {
            return this.roundedCorners ? 'round' : 'miter'
        }
    },
    created() {
        this.starPoints = (this.points.length) ? this.points : this.starPoints
        this.calculatePoints()
        this.grad = this.getRandomId()
        this.glowId = this.getRandomId()
    },
    methods: {
        mouseMoving($event) {
            if ($event.touchAction !== 'undefined') {
                this.$emit('star-mouse-move', {
                    event: $event,
                    position: this.getPosition($event),
                    id: this.starId
                })
            }
        },
        touchStart() {
            this.$nextTick(() => {
                this.isStarActive = true
            })
        },
        touchEnd() {
            this.$nextTick(() => {
                this.isStarActive = false
            })
        },
        getPosition($event) {
            // calculate position in percentage.
            var starWidth = (92 / 100) * this.size
            const offset = (this.rtl) ? Math.min($event.offsetX, 45) : Math.max($event.offsetX, 1)
            var position = Math.round((100 / starWidth) * offset)

            return Math.min(position, 100)
        },
        selected($event) {
            this.$emit('star-selected', {
                id: this.starId,
                position: this.getPosition($event)
            })
        },
        getRandomId() {
            return Math.random().toString(36).substring(7)
        },
        calculatePoints() {
            this.starPoints = this.starPoints.map((point, i) => {
                const offset = i % 2 === 0 ? this.border * 1.5 : 0
                return ((this.size / this.maxSize) * point) + offset
            })
        },
        getColor(color) {
            return new AlphaColor_default.a(color).parseAlphaColor().color
        },
        getOpacity(color) {
            return new AlphaColor_default.a(color).parseAlphaColor().opacity
        }
    }
});

// CONCATENATED MODULE: ./src/star.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_starvue_type_script_lang_js_ = (starvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/star.vue?vue&type=style&index=0&id=ef4bc576&scoped=true&lang=css&
var starvue_type_style_index_0_id_ef4bc576_scoped_true_lang_css_ = __nested_webpack_require_25488__("ab73");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/star.vue






/* normalize component */

var component = normalizeComponent(
  src_starvue_type_script_lang_js_,
  starvue_type_template_id_ef4bc576_scoped_true_render,
  starvue_type_template_id_ef4bc576_scoped_true_staticRenderFns,
  false,
  null,
  "ef4bc576",
  null
  
)

/* harmony default export */ var star = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/star-rating.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var star_ratingvue_type_script_lang_js_ = ({
    components: {
        star: star
    },
    model: {
        prop: 'rating',
        event: 'rating-selected'
    },
    props: {
        increment: {
            type: Number,
            default: 1
        },
        rating: {
            type: Number,
            default: 0
        },
        roundStartRating: {
            type: Boolean,
            default: true
        },
        activeColor: {
            type: [String, Array],
            default: '#ffd055'
        },
        inactiveColor: {
            type: String,
            default: '#d8d8d8'
        },
        maxRating: {
            type: Number,
            default: 5
        },
        starPoints: {
            type: Array,
            default() {
                return []
            }
        },
        starSize: {
            type: Number,
            default: 50
        },
        showRating: {
            type: Boolean,
            default: true
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        textClass: {
            type: String,
            default: ''
        },
        inline: {
            type: Boolean,
            default: false
        },
        borderColor: {
            type: String,
            default: '#999'
        },
        activeBorderColor: {
            type: [String, Array],
            default: null
        },
        borderWidth: {
            type: Number,
            default: 0
        },
        roundedCorners: {
            type: Boolean,
            default: false
        },
        padding: {
            type: Number,
            default: 0
        },
        rtl: {
            type: Boolean,
            default: false
        },
        fixedPoints: {
            type: Number,
            default: null
        },
        glow: {
            type: Number,
            default: 0
        },
        glowColor: {
            type: String,
            default: '#fff'
        },
        clearable: {
            type: Boolean,
            default: false
        },
        activeOnClick: {
            type: Boolean,
            default: false
        },
        animate: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            step: 0,
            fillLevel: [],
            currentRating: 0,
            selectedRating: 0,
            ratingSelected: false
        }
    },
    computed: {
        formattedRating() {
            return (this.fixedPoints === null) ? this.currentRating : this.currentRating.toFixed(this.fixedPoints)
        },
        shouldRound() {
            return this.ratingSelected || this.roundStartRating
        },
        margin() {
            return this.padding + this.borderWidth
        },
        activeColors() {
            if (Array.isArray(this.activeColor)) {
                return this.padColors(this.activeColor, this.maxRating, this.activeColor.slice(-1)[0])
            }
            return new Array(this.maxRating).fill(this.activeColor)
        },
        currentActiveColor() {
            if (!this.activeOnClick) {
                return (this.currentRating > 0) ? this.activeColors[Math.ceil(this.currentRating) - 1] : this.inactiveColor
            }
            return (this.selectedRating > 0) ? this.activeColors[Math.ceil(this.selectedRating) - 1] : this.inactiveColor
        },
        activeBorderColors() {
            if (Array.isArray(this.activeBorderColor)) {
                return this.padColors(this.activeBorderColor, this.maxRating, this.activeBorderColor.slice(-1)[0])
            }
            let borderColor = (this.activeBorderColor) ? this.activeBorderColor : this.borderColor
            return new Array(this.maxRating).fill(borderColor)
        },
        currentActiveBorderColor() {
            if (!this.activeOnClick) {
                return (this.currentRating > 0) ? this.activeBorderColors[Math.ceil(this.currentRating) - 1] : this.borderColor
            }
            return (this.selectedRating > 0) ? this.activeBorderColors[Math.ceil(this.selectedRating) - 1] : this.borderColor
        }
    },
    watch: {
        rating(val) {
            this.currentRating = val
            this.selectedRating = val
            this.createStars(this.shouldRound)
        }
    },
    created() {
        this.step = this.increment * 100
        this.currentRating = this.rating
        this.selectedRating = this.currentRating
        this.createStars(this.roundStartRating)
    },
    methods: {
        setRating($event, persist) {
            if (!this.readOnly) {
                const position = (this.rtl) ? (100 - $event.position) / 100 : $event.position / 100
                this.currentRating = (($event.id + position) - 1).toFixed(2)
                this.currentRating = (this.currentRating > this.maxRating) ? this.maxRating : this.currentRating
                if (persist) {
                    this.createStars(true, true)
                    if (this.clearable && this.currentRating === this.selectedRating) {
                        this.selectedRating = 0
                    } else {
                        this.selectedRating = this.currentRating
                    }

                    this.$emit('rating-selected', this.selectedRating)
                    this.ratingSelected = true
                } else {
                    this.createStars(true, !this.activeOnClick)
                    this.$emit('current-rating', this.currentRating)
                }
            }
        },
        resetRating() {
            if (!this.readOnly) {
                this.currentRating = this.selectedRating
                this.createStars(this.shouldRound)
            }
        },
        createStars(round = true, applyFill = true) {
            if (round) {
                this.round()
            }
            for (var i = 0; i < this.maxRating; i++) {
                let level = 0
                if (i < this.currentRating) {
                    level = (this.currentRating - i > 1) ? 100 : (this.currentRating - i) * 100
                }
                if (applyFill) {
                    this.fillLevel[i] = Math.round(level)
                }
            }
        },
        round() {
            var inv = 1.0 / this.increment
            this.currentRating = Math.min(this.maxRating, Math.ceil(this.currentRating * inv) / inv)
        },
        padColors(array, minLength, fillValue) {
            return Object.assign(new Array(minLength).fill(fillValue), array)
        }
    }
});

// CONCATENATED MODULE: ./src/star-rating.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_star_ratingvue_type_script_lang_js_ = (star_ratingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/star-rating.vue?vue&type=style&index=0&id=fde73a0c&scoped=true&lang=css&
var star_ratingvue_type_style_index_0_id_fde73a0c_scoped_true_lang_css_ = __nested_webpack_require_25488__("2b2b");

// CONCATENATED MODULE: ./src/star-rating.vue






/* normalize component */

var star_rating_component = normalizeComponent(
  src_star_ratingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "fde73a0c",
  null
  
)

/* harmony default export */ var star_rating = (star_rating_component.exports);
// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src_0 = (star_rating);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __nested_webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
//# sourceMappingURL=VueStarRating.common.js.map

/***/ })

}]);