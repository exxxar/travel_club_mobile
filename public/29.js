(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
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
    } // if (!this.user) {
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
  mounted: function mounted() {// this.$store.dispatch('getUser')
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

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var now;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
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

                  now = moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date());
                  _this.current_tour = _this.tours.find(function (tour) {
                    var start = moment__WEBPACK_IMPORTED_MODULE_1___default()(tour.StartAt);
                    var end = moment__WEBPACK_IMPORTED_MODULE_1___default()(tour.EndAt);
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
          }
        }, _callee);
      }))();
    },
    loadBranches: function loadBranches() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch('setBranches');

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.title-1[data-v-9379e71e] {\n    position: absolute;\n    z-index: 1;\n    left: 0px;\n    top: 10px;\n    color:#062348;\n    font-family: 'Bello Pro' !important;\n    font-size: 35px;\n}\n.title-1 span[data-v-9379e71e] {\n    font-size: 40px;\n}\n.title-2[data-v-9379e71e] {\n    position: absolute;\n    z-index: 1;\n    left: 52px;\n    top: 25px;\n    color:white;\n    font-family: 'Open Sans' !important;\n    font-weight:900;\n    font-size: 15px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.title-2 span[data-v-9379e71e] {\n    text-transform: uppercase;\n}\n.orange-brush[data-v-9379e71e]{\n    top: 5px;\n    left: 10px;\n    width: 265px;\n}\n.blue-brush[data-v-9379e71e]{\n    top: 10px;\n    left: -55px;\n    width: 330px;\n    height: 50px;\n    opacity: 1;\n}\n.title[data-v-9379e71e] {\n    font-size: 15px;\n    color: rgb(13, 39, 75);\n    letter-spacing: 2px;\n    font-weight: 900;\n}\n.subtitle[data-v-9379e71e] {\n    font-size: 18px;\n    color: #f08b23;\n    font-weight: 900;\n}\n@media screen and (max-width: 576px) {\n.title[data-v-9379e71e] {\n        font-size: 12px;\n}\n.subtitle[data-v-9379e71e] {\n        font-size: 15px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.travel-card-description{\n    color: #062348;\n    font-size: 13px;\n    font-weight: 900;\n    font-family: \"Open Sans\";\n}\n.more-text {\n    font-family: \"Open Sans\";\n    text-transform: uppercase;\n    color: #f08b23;\n    font-weight: 600;\n    font-size: 16px;\n    cursor:pointer;\n}\n.more-button {\n    cursor:pointer;\n    margin: 0 10px;\n    right: 10px;\n}\n.more-button div {\n    width: 40px;\n    height: 40px;\n    display: block;\n    border-radius: 50px;\n    text-decoration: none;\n    font-size: 40px;\n    /*line-height: 50px;*/\n    color:  white;\n    background: #f08b23;\n    padding: 0px !important;\n}\n.travel-card {\n    border-radius: 20px;\n    background: white;\n    box-shadow: 0px 3px 15px #0000006b;\n    -moz-box-shadow: 0px 3px 15px #0000006b;\n    -webkit-box-shadow: 0px 3px 15px #0000006b;\n}\n#client .hooper-slide {\n    padding-left: 5px !important;\n    padding-right: 5px !important;\n}\n/*#client .tablet .hooper-slide {*/\n/*    padding-left: 5px !important;*/\n/*    padding-right: 5px !important;*/\n/*}*/\n#client .hooper-next{\n    outline: 0 !important;\n}\n#client .hooper-prev{\n    outline: 0 !important;\n}\n#client .desktop .hooper-next{\n    outline: 0 !important;\n    right: -5% !important;\n}\n#client .desktop .hooper-prev{\n    outline: 0 !important;\n    left: -5% !important;\n}\n#client .tablet .hooper-next{\n    outline: 0 !important;\n    right: -10% !important;\n}\n#client .tablet .hooper-prev{\n    outline: 0 !important;\n    left: -10% !important;\n}\n#client .hooper-next svg{\n    fill: #062348;\n    height: 40px;\n    width: 40px;\n}\n#client .mobile .hooper-next svg{\n    fill: white;\n}\n#client .mobile .hooper-prev svg{\n    fill: white;\n}\n#client .hooper-prev svg{\n    fill: #062348;\n    height: 40px;\n    width: 40px;\n}\n.active-tour {\n    background: #f08b23;\n    border-radius: 20px;\n    padding: 3px 20px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n    font-weight: 900;\n    text-transform: uppercase;\n    font-family: 'Open Sans';\n}\n.v-card > :last-child:not(.v-btn):not(.v-chip) {\n    border-bottom-left-radius: inherit;\n    border-bottom-right-radius: inherit;\n}\n.v-card > :first-child:not(.v-btn):not(.v-chip), .v-card > .v-card__progress + :not(.v-btn):not(.v-chip) {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n}\n.v-card > :last-child:not(.v-btn):not(.v-chip) {\n    border-bottom-left-radius: inherit;\n    border-bottom-right-radius: inherit;\n}\n.v-card > .v-card__progress + :not(.v-btn):not(.v-chip), .v-card > :first-child:not(.v-btn):not(.v-chip) {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n}\n.v-responsive {\n    position: relative;\n    overflow: hidden;\n    flex: 1 0 auto;\n    max-width: 100%;\n    display: flex;\n}\n.v-image {\n    z-index: 0;\n}\n.v-card {\n    overflow-wrap: break-word;\n    white-space: normal;\n}\n.v-responsive__sizer {\n    background: #0d274b61;\n    transition: padding-bottom .2s cubic-bezier(.25,.8,.5,1);\n    flex: 1 0 0px;\n}\n.v-image__image--cover {\n    background-size: cover;\n}\n.v-image__image {\n    background-repeat: no-repeat;\n}\n.v-image__image, .v-image__placeholder {\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.v-responsive__sizer ~ .v-responsive__content {\n    margin-left: -100%;\n}\n.v-responsive__content {\n    flex: 1 0 0px;\n    max-width: 100%;\n}\n.elevation-24 {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.v-card__title {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: .0125em;\n    line-height: 2rem;\n    word-break: break-all;\n}\n.v-card__subtitle, .v-card__text, .v-card__title {\n    padding: 16px;\n}\n.v-card__subtitle {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n.v-card__subtitle h4{\n    font-weight: 900;\n    font-family: 'Open Sans';\n}\n.white--text {\n    color: #fff !important;\n    caret-color: #fff !important;\n}\n/*#main-title {*/\n/*    position: relative;*/\n/*}*/\n/*#main-title svg {*/\n/*    position: absolute;*/\n/*}*/\n/*#main-title .title-1 {*/\n/*    position: absolute;*/\n/*    z-index: 1;*/\n/*    left: 30px;*/\n/*    top: 10px;*/\n/*    color:#062348;*/\n/*    font-family: 'Bello Pro' !important;*/\n/*    font-size: 30px;*/\n/*}*/\n/*#main-title .title-1 span {*/\n/*    font-size: 40px;*/\n/*}*/\n/*#main-title .title-2 {*/\n/*    position: absolute;*/\n/*    z-index: 1;*/\n/*    left: 40px;*/\n/*    top: 79px;*/\n/*    color:white;*/\n/*    font-family: 'Open Sans' !important;*/\n/*    font-weight:900;*/\n/*    font-size: 13px;*/\n/*}*/\n/*#main-title .title-2 span {*/\n/*    text-transform: uppercase;*/\n/*}*/\n/*#main-title .orange-brush{*/\n/*    top: 52px;*/\n/*    left: -65px;*/\n/*}*/\n/*#main-title .blue-brush{*/\n/*    top: 5px;*/\n/*    left: 10px;*/\n/*}*/\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "client" } }, [
    _c(
      "div",
      { staticClass: "container m-auto", staticStyle: { height: "100%" } },
      [
        _c(
          "div",
          {
            staticClass: "row m-auto justify-content-center align-items-center",
            staticStyle: { width: "100%", height: "100%" },
            attrs: { id: "main-title" }
          },
          [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                {
                  staticClass:
                    "row m-auto justify-content-center align-items-center",
                  staticStyle: { width: "100%", height: "100%" }
                },
                [
                  _c("div", { staticClass: "col-12 col-md-8 col-sm-12" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
                        staticStyle: { height: "100px", width: "100%" }
                      },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-7 p-0" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "row ml-auto mr-0 my-auto travel-card-title",
                              staticStyle: {
                                position: "relative",
                                height: "50px",
                                width: "250px"
                              }
                            },
                            [
                              _c("h1", { staticClass: "title-2" }, [
                                _c("span", [
                                  _vm._v(_vm._s(_vm.user.info.FullName))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "orange-brush",
                                staticStyle: { position: "absolute" },
                                attrs: { src: "/images/orange-brush.svg" }
                              })
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _vm.tours.length > 0
          ? _c(
              "div",
              {
                staticClass:
                  "row mx-auto mt-3 mb-3 justify-content-center align-items-center",
                staticStyle: { width: "100%", height: "100%" }
              },
              [
                _c("div", { staticClass: "col-md-12 p-0" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "row m-auto travel-card justify-content-center",
                      staticStyle: { width: "100%", height: "100%" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-6 col-sm-12 p-0",
                          on: {
                            click: function($event) {
                              return _vm.toTourInfo(_vm.current_tour.id)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "mx-auto v-card elevation-24",
                              staticStyle: {
                                height: "400px",
                                "max-width": "100%",
                                "border-radius": "20px"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "v-responsive v-image",
                                  staticStyle: { height: "100%" }
                                },
                                [
                                  _c("div", {
                                    staticClass: "v-responsive__sizer"
                                  }),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "v-image__image v-image__image--cover",
                                    staticStyle: {
                                      "background-image":
                                        "url('/images/test.jpg')",
                                      "background-position": "center center"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "v-responsive__content" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "v-card__title" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "white--text active-tour d-sm-block d-md-none"
                                            },
                                            [_vm._v(_vm._s(_vm.tour_title))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "v-card__subtitle white--text d-sm-block d-md-none"
                                        },
                                        [
                                          _c("div", { staticClass: "row" }, [
                                            _c(
                                              "div",
                                              { staticClass: "col-md-12" },
                                              [
                                                _c("h3", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.current_tour.TourInfo
                                                        .resort.Name
                                                    ) +
                                                      ", " +
                                                      _vm._s(
                                                        _vm.current_tour
                                                          .TourInfo.country.Name
                                                      )
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "col-md-12" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "white--text active-tour float-right"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.current_tour
                                                          .TourInfo.price
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6 d-none d-md-block" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "row mx-auto mt-3 mb-3 align-items-center justify-content-center"
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "white--text active-tour",
                                staticStyle: {
                                  background: "#062348",
                                  "font-size": "24px"
                                }
                              },
                              [_vm._v(_vm._s(_vm.tour_title) + " тур")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "row m-auto align-items-center justify-content-center"
                          },
                          [
                            _c("h3", { staticClass: "subtitle" }, [
                              _vm._v(
                                _vm._s(_vm.current_tour.TourInfo.resort.Name) +
                                  ",\n                                    "
                              ),
                              _c("b", {
                                staticClass: "ml-1 mr-1",
                                class:
                                  "slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_" +
                                  _vm.current_tour.TourInfo.country.Id,
                                staticStyle: { border: "1px solid #063065" }
                              }),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm.current_tour.TourInfo.country.Name
                                  ) +
                                  "\n                                "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "row features align-items-center justify-content-center m-auto",
                            staticStyle: { width: "100%" }
                          },
                          [
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "row align-items-center justify-content-center m-auto",
                                  staticStyle: { width: "100%" }
                                },
                                [
                                  _vm._m(1),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-12" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "row align-items-center w-100 m-auto"
                                      },
                                      [
                                        _c("div", { staticClass: "subtitle" }, [
                                          _vm._v(
                                            _vm._s(
                                              _vm.current_tour.TourInfo.hotel
                                                .Name
                                            ) + " "
                                          ),
                                          _c(
                                            "span",
                                            {
                                              staticClass: "ml-3",
                                              staticStyle: { color: "#0f213d" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.current_tour.TourInfo
                                                    .hotel.StarName
                                                )
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "svg",
                                          {
                                            staticClass:
                                              "icon-star my-auto ml-1",
                                            staticStyle: {
                                              width: "20px",
                                              height: "20px"
                                            },
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 19 19"
                                            }
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                fill: "#ffca00",
                                                d:
                                                  "M9.5 0l3.131 5.97 6.367 1.29-4.432 4.97.804 6.77-5.87-2.9L3.63 19l.804-6.77L.002 7.26l6.367-1.29L9.5 0"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "row align-items-center justify-content-center m-auto",
                                  staticStyle: { width: "100%", height: "100%" }
                                },
                                [
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-12" }, [
                                    _c("div", { staticClass: "subtitle" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.current_tour.TourInfo.room_type
                                        )
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "row align-items-center justify-content-center m-auto",
                                  staticStyle: { width: "100%", height: "100%" }
                                },
                                [
                                  _vm._m(3),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-12" }, [
                                    _c("div", { staticClass: "subtitle" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.current_tour.TourInfo.meal.Name
                                        )
                                      ),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "my-auto",
                                          staticStyle: {
                                            color: "#0f213d",
                                            "font-size": "14px"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            " - " +
                                              _vm._s(
                                                _vm.current_tour.TourInfo.meal
                                                  .desc
                                              )
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass:
                            "travel-card-description row m-auto align-items-center justify-content-center"
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "travel-card-more row m-auto float-right align-items-center"
                          },
                          [
                            _c(
                              "h5",
                              {
                                staticClass: "more-text mt-auto mb-auto",
                                on: {
                                  click: function($event) {
                                    return _vm.toTourInfo(_vm.current_tour.id)
                                  }
                                }
                              },
                              [_vm._v("подробнее")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "more-button",
                                on: {
                                  click: function($event) {
                                    return _vm.toTourInfo(_vm.current_tour.id)
                                  }
                                }
                              },
                              [
                                _c("div", {
                                  staticClass: "icon icon-keyboard_arrow_right"
                                })
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _vm.tours.length > 0
          ? _c(
              "div",
              {
                staticClass:
                  "row mx-auto mt-3 mb-3 justify-content-center align-items-center",
                staticStyle: { width: "100%", height: "100%" }
              },
              [
                _c(
                  "hooper",
                  {
                    staticClass: "mr-auto ml-auto desktop",
                    staticStyle: { height: "100%" },
                    attrs: { itemsToShow: 3, infiniteScroll: false }
                  },
                  [
                    _vm._l(_vm.tours, function(tour) {
                      return _c(
                        "slide",
                        {
                          key: tour.id,
                          on: {
                            click: function($event) {
                              return _vm.toTourInfo(tour.id)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "mx-auto v-card elevation-24",
                              staticStyle: {
                                height: "350px",
                                "max-width": "100%",
                                width: "350px",
                                "border-radius": "20px",
                                cursor: "pointer"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toTourInfo(tour.id)
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "v-responsive v-image",
                                  staticStyle: { height: "100%" }
                                },
                                [
                                  _c("div", {
                                    staticClass: "v-responsive__sizer"
                                  }),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "v-image__image v-image__image--cover",
                                    staticStyle: {
                                      "background-image":
                                        "url('/images/test.jpg')",
                                      "background-position": "center center"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "v-responsive__content" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "v-card__title" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "ml-auto white--text active-tour"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "row m-auto align-items-center justify-content-center",
                                                  staticStyle: {
                                                    height: "100%",
                                                    width: "100%"
                                                  }
                                                },
                                                [
                                                  _c("div", {
                                                    staticClass:
                                                      "icon icon-calendar mr-2"
                                                  }),
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("moment")(
                                                        tour.StartAt,
                                                        "DD.MM"
                                                      )
                                                    ) +
                                                      " - " +
                                                      _vm._s(
                                                        _vm._f("moment")(
                                                          tour.EndAt,
                                                          "DD.MM"
                                                        )
                                                      ) +
                                                      "\n                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "v-card__subtitle white--text"
                                        },
                                        [
                                          _c("div", { staticClass: "row" }, [
                                            _c(
                                              "div",
                                              { staticClass: "col-md-12 mb-2" },
                                              [
                                                _c("h4", [
                                                  _vm._v(
                                                    _vm._s(
                                                      tour.TourInfo.resort.Name
                                                    ) +
                                                      ", " +
                                                      _vm._s(
                                                        tour.TourInfo.country
                                                          .Name
                                                      )
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "col-md-12" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "white--text active-tour float-right"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        tour.TourInfo.price
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("hooper-navigation", {
                      attrs: { slot: "hooper-addons" },
                      slot: "hooper-addons"
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "hooper",
                  {
                    staticClass: "mr-auto ml-auto tablet",
                    staticStyle: { height: "100%" },
                    attrs: { itemsToShow: 2, infiniteScroll: false }
                  },
                  [
                    _vm._l(_vm.tours, function(tour) {
                      return _c(
                        "slide",
                        {
                          key: tour.id,
                          on: {
                            click: function($event) {
                              return _vm.toTourInfo(tour.id)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "mx-auto v-card elevation-24",
                              staticStyle: {
                                height: "350px",
                                "max-width": "100%",
                                width: "350px",
                                "border-radius": "20px",
                                cursor: "pointer"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toTourInfo(tour.id)
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "v-responsive v-image",
                                  staticStyle: { height: "100%" }
                                },
                                [
                                  _c("div", {
                                    staticClass: "v-responsive__sizer"
                                  }),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "v-image__image v-image__image--cover",
                                    staticStyle: {
                                      "background-image":
                                        "url('/images/test.jpg')",
                                      "background-position": "center center"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "v-responsive__content" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "v-card__title" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "ml-auto white--text active-tour"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "row m-auto align-items-center justify-content-center",
                                                  staticStyle: {
                                                    height: "100%",
                                                    width: "100%"
                                                  }
                                                },
                                                [
                                                  _c("div", {
                                                    staticClass:
                                                      "icon icon-calendar mr-2"
                                                  }),
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("moment")(
                                                        tour.StartAt,
                                                        "DD.MM"
                                                      )
                                                    ) +
                                                      " - " +
                                                      _vm._s(
                                                        _vm._f("moment")(
                                                          tour.EndAt,
                                                          "DD.MM"
                                                        )
                                                      ) +
                                                      "\n                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "v-card__subtitle white--text"
                                        },
                                        [
                                          _c("div", { staticClass: "row" }, [
                                            _c(
                                              "div",
                                              { staticClass: "col-md-12 mb-2" },
                                              [
                                                _c("h4", [
                                                  _vm._v(
                                                    _vm._s(
                                                      tour.TourInfo.resort.Name
                                                    ) +
                                                      ", " +
                                                      _vm._s(
                                                        tour.TourInfo.country
                                                          .Name
                                                      )
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "col-md-12" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "white--text active-tour float-right"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        tour.TourInfo.price
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("hooper-navigation", {
                      attrs: { slot: "hooper-addons" },
                      slot: "hooper-addons"
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "hooper",
                  {
                    staticClass: "mr-auto ml-auto mobile",
                    staticStyle: { height: "100%" },
                    attrs: { itemsToShow: 1, infiniteScroll: true }
                  },
                  [
                    _vm._l(_vm.tours, function(tour) {
                      return _c(
                        "slide",
                        {
                          key: tour.id,
                          on: {
                            click: function($event) {
                              return _vm.toTourInfo(tour.id)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "mx-auto v-card elevation-24",
                              staticStyle: {
                                height: "350px",
                                "max-width": "100%",
                                width: "350px",
                                "border-radius": "20px",
                                cursor: "pointer"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toTourInfo(tour.id)
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "v-responsive v-image",
                                  staticStyle: { height: "100%" }
                                },
                                [
                                  _c("div", {
                                    staticClass: "v-responsive__sizer"
                                  }),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "v-image__image v-image__image--cover",
                                    staticStyle: {
                                      "background-image":
                                        "url('/images/test.jpg')",
                                      "background-position": "center center"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "v-responsive__content" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "v-card__title" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "ml-auto white--text active-tour"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "row m-auto align-items-center justify-content-center",
                                                  staticStyle: {
                                                    height: "100%",
                                                    width: "100%"
                                                  }
                                                },
                                                [
                                                  _c("div", {
                                                    staticClass:
                                                      "icon icon-calendar mr-2"
                                                  }),
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("moment")(
                                                        tour.StartAt,
                                                        "DD.MM"
                                                      )
                                                    ) +
                                                      " - " +
                                                      _vm._s(
                                                        _vm._f("moment")(
                                                          tour.EndAt,
                                                          "DD.MM"
                                                        )
                                                      ) +
                                                      "\n                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "v-card__subtitle white--text"
                                        },
                                        [
                                          _c("div", { staticClass: "row" }, [
                                            _c(
                                              "div",
                                              { staticClass: "col-md-12 mb-2" },
                                              [
                                                _c("h4", [
                                                  _vm._v(
                                                    _vm._s(
                                                      tour.TourInfo.resort.Name
                                                    ) +
                                                      ", " +
                                                      _vm._s(
                                                        tour.TourInfo.country
                                                          .Name
                                                      )
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "col-md-12" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "white--text active-tour float-right"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        tour.TourInfo.price
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("hooper-navigation", {
                      attrs: { slot: "hooper-addons" },
                      slot: "hooper-addons"
                    })
                  ],
                  2
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.tours.length == 0
          ? _c(
              "div",
              {
                staticClass:
                  "row mx-auto mt-3 mb-3 justify-content-center align-items-center",
                staticStyle: { width: "100%", height: "100%" }
              },
              [
                _vm._v(
                  "\n                У Вас пока нет туров :( Возможно они все в архиве.\n            "
                )
              ]
            )
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 p-0" }, [
      _c(
        "div",
        {
          staticClass: "row mr-auto ml-0 my-auto travel-card-title",
          staticStyle: { position: "relative", height: "50px", width: "250px" }
        },
        [
          _c("h1", { staticClass: "title-1" }, [
            _c("span", [_vm._v("З")]),
            _vm._v("дравствуйте,")
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "blue-brush",
            staticStyle: { position: "absolute" },
            attrs: { src: "/images/blue-brush.svg" }
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "title" }, [
        _c(
          "i",
          {
            staticClass: "icon-icon-list mr-1",
            staticStyle: { "font-size": "11px" }
          },
          [
            _c("span", { staticClass: "path1" }, [
              _c("span", { staticClass: "path2" })
            ])
          ]
        ),
        _vm._v("название отеля:\n                                            ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "title" }, [
        _c(
          "i",
          {
            staticClass: "icon-icon-list mr-1",
            staticStyle: { "font-size": "11px" }
          },
          [
            _c("span", { staticClass: "path1" }, [
              _c("span", { staticClass: "path2" })
            ])
          ]
        ),
        _vm._v(
          "\n                                                категория номера:\n                                            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "title" }, [
        _c(
          "i",
          {
            staticClass: "icon-icon-list mr-1",
            staticStyle: { "font-size": "11px" }
          },
          [
            _c("span", { staticClass: "path1" }, [
              _c("span", { staticClass: "path2" })
            ])
          ]
        ),
        _vm._v(
          "\n                                                питание\n                                            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "row mx-auto mt-5 mb-5 justify-content-center align-items-center",
        staticStyle: {
          width: "100%",
          height: "100%",
          "border-top": "4px solid #f08b23"
        }
      },
      [
        _c(
          "span",
          {
            staticClass: "white--text active-tour",
            staticStyle: {
              background: "#062348",
              "font-size": "24px",
              position: "absolute"
            }
          },
          [_vm._v("Туры")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/desktop/pages/Client/Main.vue":
/*!****************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Main.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=9379e71e&scoped=true& */ "./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_id_9379e71e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& */ "./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&");
/* harmony import */ var _Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=1&lang=css& */ "./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9379e71e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Client/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_9379e71e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=0&id=9379e71e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_9379e71e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_9379e71e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_9379e71e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_9379e71e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=9379e71e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/Main.vue?vue&type=template&id=9379e71e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_9379e71e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);