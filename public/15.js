(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TourInfo",
  data: function data() {
    return {
      tour: '',
      markedDates: ['2020-8-12', '14/08/2020'],
      start: new Date(),
      end: new Date(new Date().setDate(new Date().getDate() + 7)),
      review: '',
      loading: false,
      invalid: true
    };
  },
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    user: function user() {
      return this.$store.getters.user;
    }
  },
  created: function created() {
    var _this = this;

    if (!this.user) {
      this.$store.dispatch('getUser').then(function () {
        _this.tour = _this.user.archive.find(function (tour) {
          return tour.id == _this.$route.params.id;
        });
        _this.start = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.tour.TourInfo.date_range.start, "DD-MM-YYYY").toDate();
        _this.end = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.tour.TourInfo.date_range.end, "DD-MM-YYYY").toDate();
        var now = moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date());
        var end = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.tour.EndAt).add(3, 'days');
        var after = now.isAfter(end) ? true : false;

        if (after == true) {
          _this.invalid = false;
        }
      });
    } else {
      this.tour = this.user.archive.find(function (tour) {
        return tour.id == _this.$route.params.id;
      });
      this.start = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.tour.TourInfo.date_range.start, "DD-MM-YYYY").toDate();
      this.end = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.tour.TourInfo.date_range.end, "DD-MM-YYYY").toDate();
      var now = moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date());
      var end = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.tour.EndAt).add(3, 'days');
      var after = now.isAfter(end) ? true : false;

      if (after == true) {
        this.invalid = false;
      }
    } // this.start = new Date(this.tour.TourInfo.date_range.start)
    // console.log(this.start)
    // this.end = new Date(this.tour.TourInfo.date_range.end)

  },
  mounted: function mounted() {
    this.toCalendar();
  },
  methods: {
    toCalendar: function toCalendar() {
      this.$nextTick(function () {
        this.$refs.Calendar.ChooseDate(this.start);
      });
    },
    toBalance: function toBalance() {
      this.$router.push('/client/balance/' + this.$route.params.id);
    },
    addToArchive: function addToArchive(tour) {
      var _this2 = this;

      var data = {
        id: tour.id,
        UserId: tour.UserId,
        Archive: true
      };
      this.$store.dispatch('updateArchive', data).then(function () {
        _this2.sendMessage('Тур успешно перемещен в архив');
      });
    },
    addReview: function addReview() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.loading = true;
                data = {
                  review: _this3.review,
                  date: new Date()
                };

                if (_this3.tour.Comment.length > 0) {
                  _this3.tour.Comment.push(data);
                } else {
                  _this3.tour.Comment = [];

                  _this3.tour.Comment.push(data);
                }

                _context.next = 5;
                return _this3.$store.dispatch('updateReview', _this3.tour).then(function () {
                  _this3.sendMessage('Новый отзыв успешно добавлен');

                  _this3.loading = false;
                });

              case 5:
                _this3.loading = false;
                $('#reviewModalBox').modal('hide');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    returnFromArchive: function returnFromArchive(tour) {
      var _this4 = this;

      var data = {
        id: tour.id,
        UserId: tour.UserId,
        Archive: false
      };
      this.$store.dispatch('updateArchive', data).then(function () {
        _this4.sendMessage('Тур успешно перемещен из архива');
      });
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-dialog[data-v-5b81ac00]{\n    transform: none !important;\n}\n.modal-title[data-v-5b81ac00]{\n    color: #062348;\n    font-weight: 900;\n    font-family: \"Open Sans\";\n}\n.btn-tour-info[data-v-5b81ac00] {\n    border: 2px solid #f08b23;\n    border-radius: 20px;\n    padding: 3px 20px;\n    font-weight: 900;\n    text-transform: uppercase;\n    font-family: 'Open Sans';\n    min-width: 206px;\n    text-align: center;\n    color: #f08b23;\n    margin-right: 5px;\n    margin-left: 5px;\n    background: white !important;\n}\n.btn-tour-info[data-v-5b81ac00]:hover{\n    border: 2px solid rgb(13, 39, 75);\n    background: rgb(13, 39, 75) !important;\n    color: #fff !important;\n}\n.btn-tour-info[data-v-5b81ac00]:disabled {\n    border: 2px solid #c6e2f7;\n    color: #c6e2f7;\n    background: white !important;\n}\n.btn-tour-info[data-v-5b81ac00]:disabled:hover{\n    border: 2px solid #c6e2f7;\n    color: #c6e2f7 !important;\n    background: white !important;\n}\n.white--text[data-v-5b81ac00] {\n    color: #fff !important;\n    caret-color: #fff !important;\n}\n.active-tour[data-v-5b81ac00] {\n    background: #f08b23;\n    border-radius: 20px;\n    padding: 3px 20px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n    font-weight: 900;\n    text-transform: uppercase;\n    font-family: 'Open Sans';\n    width: 206px;\n    text-align: center;\n    float: left;\n}\n.features[data-v-5b81ac00] {\n    font-family: \"Open Sans\";\n    text-transform: uppercase;\n    line-height: 2.25;\n}\n.title[data-v-5b81ac00] {\n    font-size: 13px;\n    color: rgb(13, 39, 75);\n    letter-spacing: 2px;\n    font-weight: 900;\n}\n.subtitle[data-v-5b81ac00] {\n    font-size: 18px;\n    color: #f08b23;\n    font-weight: 900;\n}\n@media screen and (max-width: 576px) {\n.title[data-v-5b81ac00] {\n        font-size: 12px;\n}\n.subtitle[data-v-5b81ac00] {\n        font-size: 15px;\n}\n}\n.main[data-v-5b81ac00] {\n    position: relative;\n    z-index: 2;\n    /*border-top: 1px solid #f08b23;*/\n    padding: 0px 15px;\n}\n.ticket-list[data-v-5b81ac00] {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.ticket-list li[data-v-5b81ac00] {\n    position: relative;\n    font-size: 14px;\n    border-bottom: 1px solid #f08b23;\n    border-top: 1px solid #f08b23;\n}\n\n/*.ticket-list li:last-child {*/\n/*    border-bottom: none;*/\n/*}*/\n.ticket-list li label[data-v-5b81ac00] {\n    word-break: break-all;\n    padding: 5px 5px 5px 10px;\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n    color: #0d274b;\n    font-family: \"Open Sans\";\n    font-weight: 700;\n}\n.passenger-list[data-v-5b81ac00] {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.passenger-list li[data-v-5b81ac00] {\n    position: relative;\n    font-size: 14px;\n    border-bottom: 1px solid #f08b23;\n    border-top: 1px solid #f08b23;\n}\n/*.passenger-list li:last-child {*/\n/*    border-bottom: none;*/\n/*}*/\n.passenger-list li label[data-v-5b81ac00] {\n    word-break: break-all;\n    padding: 5px 5px 5px 5px;\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n    color: #0d274b;\n    font-family: \"Open Sans\";\n    font-weight: 700;\n    text-align: center;\n}\n.lists[data-v-5b81ac00] {\n    background: #fff;\n    position: relative;\n    border-radius: 20px;\n    border: 1px solid #f08b23;\n    font-weight: 700;\n    font-family: \"Open Sans\";\n}\n.preview[data-v-5b81ac00]{\n    height: 100px;\n    max-width: 90%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=1&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=1&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.calendars a {\n    text-decoration: none;\n    color: #063065;\n    margin-right: 10px;\n}\n.calendars a:hover {\n    text-decoration: none;\n}\n.icon-windows::before {\n    color: #063065;\n}\n.icon-microsoftoutlook::before {\n    color: #063065;\n}\n#tour-info .vfc-week .vfc-day span.vfc-span-day.vfc-today{\n    color: black !important;\n}\n#tour-info .vfc-separately-navigation-buttons.vfc-space-between{\n    background: #f08b23 !important;\n}\n#tour-info .vfc-week .vfc-day span.vfc-span-day.vfc-marked {\n    background-color: #f08b23;\n}\n.vfc-week .vfc-day span.vfc-span-day.vfc-marked::before {\n    background-color: #ffe7ce;\n}\n#tour-info .vfc-week .vfc-day .vfc-base-start, .vfc-week .vfc-day .vfc-base-end {\n    background: #ffe7ce;\n    background-color: rgb(255, 231, 206);\n}\n#tour-info .vfc-main-container {\n    border-radius:20px;\n}\n#tour-info .vfc-calendars-container {\n    border-radius:20px;\n}\n#tour-info .vfc-top-date span {\n    cursor: default;\n    text-decoration: unset;\n    margin: 0 2px;\n    color: #fff;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n}\n#tour-info .vfc-navigation-buttons div .vfc-arrow-left, .vfc-separately-navigation-buttons div .vfc-arrow-left {\n    width: 12px;\n    height: 12px;\n    border-top: 2px solid;\n    border-top-color: currentcolor;\n    border-left: 2px solid;\n    border-left-color: currentcolor;\n    border-color: #fff;\n    transform: rotate(-45deg);\n}\n#tour-info .vfc-navigation-buttons div, .vfc-separately-navigation-buttons div {\n    z-index: 2;\n    display: flex;\n    color: #fff;\n    font-size: 18px;\n    margin: 20px 10px;\n}\n#tour-info .vfc-navigation-buttons div .vfc-arrow-right, .vfc-separately-navigation-buttons div .vfc-arrow-right {\n    width: 12px;\n    height: 12px;\n    border-top: 2px solid;\n    border-top-color: currentcolor;\n    border-right: 2px solid;\n    border-right-color: currentcolor;\n    border-color: #fff;\n    transform: rotate(45deg);\n}\n#tour-info .vfc-content {\n    margin: 0 20px;\n    margin-bottom: 0px;\n    z-index: 1;\n}\n.vfc-popover-container {\n    width: 100%;\n    max-width: 300px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArchiveTourInfo.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=template&id=5b81ac00&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=template&id=5b81ac00&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "tour-info" } }, [
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "reviewModalBox",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "reviewModalBoxLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "modal-dialog modal-dialog-centered modal-dialog-scrollable"
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row mb-5 mx-auto" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "row align-items-center justify-content-center mx-auto mt-3",
                        staticStyle: { width: "100%" }
                      },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Напишите Ваши впечатления")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.review,
                              expression: "review"
                            }
                          ],
                          staticClass: "form-control",
                          staticStyle: {
                            padding: "5px 15px",
                            border: "1px solid #f08b23",
                            "border-radius": "20px"
                          },
                          attrs: {
                            rows: "6",
                            cols: "80",
                            placeholder: "Напишите Ваши впечатления..."
                          },
                          domProps: { value: _vm.review },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.review = $event.target.value
                            }
                          }
                        })
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12 contact-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-travel",
                        staticStyle: { width: "100%" },
                        attrs: { type: "submit", disabled: _vm.loading },
                        on: { click: _vm.addReview }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "row align-items-center m-auto w-100 h-100"
                          },
                          [
                            _vm.loading
                              ? _c("span", {
                                  staticClass:
                                    "spinner-border spinner-border-sm mx-2",
                                  attrs: {
                                    role: "status",
                                    "aria-hidden": "true"
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.loading
                              ? _c("span", { staticClass: "sr-only" }, [
                                  _vm._v("Loading...")
                                ])
                              : _vm._e(),
                            _vm._v(
                              "\n                                    Отправить\n                                "
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "row align-items-center m-auto",
        staticStyle: { width: "100%", height: "100%" }
      },
      [
        _c(
          "button",
          { staticClass: "btn btn-tour-info", on: { click: _vm.toBalance } },
          [_c("i", { staticClass: "fas fa-wallet mr-2" }), _vm._v("Баланс")]
        ),
        _vm._v(" "),
        !_vm.tour.Archive
          ? _c(
              "button",
              {
                staticClass: "btn btn-tour-info",
                on: {
                  click: function($event) {
                    return _vm.addToArchive(_vm.tour)
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-archive mr-2" }),
                _vm._v("Отправить в архив")
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.tour.Archive
          ? _c(
              "button",
              {
                staticClass: "btn btn-tour-info",
                on: {
                  click: function($event) {
                    return _vm.returnFromArchive(_vm.tour)
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-archive mr-2" }),
                _vm._v("Вернуть из архива")
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-tour-info",
            attrs: {
              disabled: _vm.invalid,
              "data-toggle": "modal",
              "data-target": "#reviewModalBox"
            }
          },
          [
            _c("i", { staticClass: "fas fa-comment-dots mr-2" }),
            _vm._v("Написать отзыв")
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "row align-items-center justify-content-center m-auto",
        staticStyle: { width: "100%", height: "100%" }
      },
      [
        _c("div", { staticClass: "col-md-6 p-0" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "row features align-items-center justify-content-center m-auto",
              staticStyle: { width: "100%", height: "100%" }
            },
            [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "div",
                  { staticClass: "row align-items-center w-100 m-auto" },
                  [
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        { staticClass: "row align-items-center w-100 m-auto" },
                        [
                          _c("b", {
                            staticClass: "mr-3",
                            class:
                              "slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_" +
                              _vm.tour.TourInfo.country.Id,
                            staticStyle: { border: "1px solid #063065" }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "subtitle" }, [
                            _vm._v(_vm._s(_vm.tour.TourInfo.country.Name))
                          ])
                        ]
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 p-0" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "row features align-items-center justify-content-center m-auto",
              staticStyle: { width: "100%", height: "100%" }
            },
            [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "div",
                  { staticClass: "row align-items-center w-100 m-auto" },
                  [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "subtitle" }, [
                        _vm._v(_vm._s(_vm.tour.TourInfo.resort.Name))
                      ])
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
    _vm._m(3),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "row features align-items-center justify-content-center m-auto",
        staticStyle: { width: "100%", height: "100%" }
      },
      [
        _c("div", { staticClass: "col-12" }, [
          _c(
            "div",
            {
              staticClass:
                "row align-items-center justify-content-center m-auto",
              staticStyle: { width: "100%", height: "100%" }
            },
            [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "div",
                  { staticClass: "row align-items-center w-100 m-auto" },
                  [
                    _c("div", { staticClass: "subtitle" }, [
                      _vm._v(_vm._s(_vm.tour.TourInfo.hotel.Name) + " "),
                      _c(
                        "span",
                        {
                          staticClass: "ml-3",
                          staticStyle: { color: "#0f213d" }
                        },
                        [_vm._v(_vm._s(_vm.tour.TourInfo.hotel.StarName))]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "svg",
                      {
                        staticClass: "icon-star my-auto ml-1",
                        staticStyle: { width: "20px", height: "20px" },
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
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
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "subtitle" }, [
                  _vm._v(_vm._s(_vm.tour.TourInfo.room_type))
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
              _vm._m(6),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "subtitle" }, [
                  _vm._v(_vm._s(_vm.tour.TourInfo.meal.Name)),
                  _c(
                    "span",
                    {
                      staticClass: "my-auto",
                      staticStyle: { color: "#0f213d", "font-size": "14px" }
                    },
                    [_vm._v(" - " + _vm._s(_vm.tour.TourInfo.meal.desc))]
                  )
                ])
              ])
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(7),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "row m-auto align-items-center justify-content-center",
        staticStyle: { width: "100%", height: "100%" }
      },
      [
        _c("div", { staticClass: "col-md-5 col-sm-12 m-auto" }, [
          _c(
            "div",
            {
              staticClass:
                "row mx-auto mt-5 mb-5 align-items-center justify-content-center",
              staticStyle: { width: "100%", height: "100%" }
            },
            [
              _c("functional-calendar", {
                attrs: {
                  "marked-date-range": {
                    start: _vm.tour.TourInfo.date_range.start,
                    end: _vm.tour.TourInfo.date_range.end
                  }
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-5 col-sm-12 m-auto" },
          [
            _c("add-to-calendar", {
              attrs: {
                title: "Тур",
                location:
                  _vm.tour.TourInfo.resort.Name +
                  ", " +
                  _vm.tour.TourInfo.country.Name,
                start: _vm.start,
                end: _vm.end,
                details: "Тур от TravelClub"
              },
              inlineTemplate: {
                render: function() {
                  var _vm = this
                  var _h = _vm.$createElement
                  var _c = _vm._self._c || _h
                  return _c("div", { staticClass: "calendars row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 mb-2" },
                      [
                        _c(
                          "google-calendar",
                          { attrs: { id: "google-calendar" } },
                          [
                            _c("i", { staticClass: "icon-google" }),
                            _vm._v(
                              " Добавить в Google календарь\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 mb-2" },
                      [
                        _c(
                          "microsoft-calendar",
                          { attrs: { id: "microsoft-calendar" } },
                          [
                            _c("i", { staticClass: "icon-windows" }),
                            _vm._v(
                              " Добавить в Microsoft live календарь\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 mb-2" },
                      [
                        _c(
                          "office365-calendar",
                          { attrs: { id: "office365-calendar" } },
                          [
                            _c("i", { staticClass: "icon-microsoftoutlook" }),
                            _vm._v(
                              " Добавить в  Office365 outlook календарь\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                },
                staticRenderFns: []
              }
            })
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _vm._m(8),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "row features align-items-center justify-content-center m-auto",
        staticStyle: { width: "100%", height: "100%" }
      },
      [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "lists" }, [
            _c(
              "section",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.tour.TourInfo.avia_tickets.length,
                    expression: "tour.TourInfo.avia_tickets.length"
                  }
                ],
                staticClass: "main"
              },
              [
                _c(
                  "ul",
                  { staticClass: "ticket-list" },
                  _vm._l(_vm.tour.TourInfo.avia_tickets, function(ticket) {
                    return _c("li", { key: ticket.id, staticClass: "ticket" }, [
                      _c("div", { staticClass: "view" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "row align-items-center justify-content-center m-auto w-100 h-100"
                          },
                          [
                            _c("div", { staticClass: "col-4 p-0" }, [
                              _c("label", [_vm._v(_vm._s(ticket.date))])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-8 p-0",
                                staticStyle: {
                                  "border-left": "1px solid #f08b23"
                                }
                              },
                              [
                                _c("label", [
                                  _vm._v(_vm._s(ticket.description))
                                ])
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(9),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "row features align-items-center justify-content-center m-auto",
        staticStyle: { width: "100%", height: "100%" }
      },
      [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "lists" }, [
            _c(
              "section",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.tour.TourInfo.passengers.length,
                    expression: "tour.TourInfo.passengers.length"
                  }
                ],
                staticClass: "main"
              },
              [
                _c(
                  "ul",
                  { staticClass: "passenger-list" },
                  _vm._l(_vm.tour.TourInfo.passengers, function(passenger) {
                    return _c(
                      "li",
                      { key: passenger.id, staticClass: "passenger" },
                      [
                        _c("div", { staticClass: "view" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "row align-items-center justify-content-center m-auto w-100 h-100"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "col-4 p-0",
                                  staticStyle: {
                                    "border-right": "1px solid #f08b23"
                                  }
                                },
                                [_c("label", [_vm._v(_vm._s(passenger.Name))])]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "col-2 p-0",
                                  staticStyle: {
                                    "border-left": "1px solid #f08b23"
                                  }
                                },
                                [_c("label", [_vm._v(_vm._s(passenger.DoB))])]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "col-2 p-0",
                                  staticStyle: {
                                    "border-left": "1px solid #f08b23"
                                  }
                                },
                                [
                                  _c("label", [
                                    _vm._v(_vm._s(passenger.Passport))
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "col-2 p-0",
                                  staticStyle: {
                                    "border-left": "1px solid #f08b23"
                                  }
                                },
                                [_c("label", [_vm._v(_vm._s(passenger.Date))])]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "col-2 p-0",
                                  staticStyle: {
                                    "border-left": "1px solid #f08b23"
                                  }
                                },
                                [
                                  _c("label", [
                                    _vm._v(_vm._s(passenger.ExpiryDate))
                                  ])
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(10),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "row features align-items-center justify-content-center mx-auto mt-auto mb-5",
        staticStyle: { width: "100%", height: "100%" }
      },
      [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "row align-items-center w-100 m-auto" }, [
            _c("div", { staticClass: "title" }, [
              _vm._v(_vm._s(_vm.tour.TourInfo.services))
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(11),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "file-listing" },
      _vm._l(_vm.tour.TourInfo.files, function(file, index) {
        return _c("div", { key: file.name, staticClass: "list-group-item" }, [
          _c(
            "div",
            {
              staticClass:
                "row m-auto w-100 align-items-center justify-content-center"
            },
            [
              _c("div", { staticClass: "col-4 text-center" }, [
                /\.(jpe?g|png|svg)$/i.test(file.name)
                  ? _c("img", {
                      staticClass: "preview",
                      attrs: { src: file.path }
                    })
                  : _c("img", {
                      staticClass: "preview",
                      attrs: { src: "/images/LOGO-1.png" }
                    })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-8" }, [
                file.type == "file"
                  ? _c("div", [
                      _c(
                        "a",
                        {
                          staticStyle: { color: "#f08b23" },
                          attrs: { href: file.path }
                        },
                        [
                          _c("p", { staticClass: "control-label" }, [
                            _vm._v(_vm._s(file.name))
                          ])
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                file.type == "audio"
                  ? _c(
                      "div",
                      [_c("audio-player", { attrs: { audio: file } })],
                      1
                    )
                  : _vm._e()
              ])
            ]
          )
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "reviewModalBoxLabel" } },
        [_vm._v("Оставить отзыв")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row mx-auto mt-5 mb-5  align-items-center",
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
            staticClass: "white--text active-tour ml-5",
            staticStyle: {
              background: "#062348",
              "font-size": "18px",
              position: "absolute"
            }
          },
          [_vm._v("Страна")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row mx-auto mt-5 mb-5  align-items-center",
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
            staticClass: "white--text active-tour ml-5",
            staticStyle: {
              background: "#062348",
              "font-size": "18px",
              position: "absolute"
            }
          },
          [_vm._v("Курорт")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row mx-auto mt-5 mb-5  align-items-center",
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
            staticClass: "white--text active-tour ml-5",
            staticStyle: {
              background: "#062348",
              "font-size": "18px",
              position: "absolute"
            }
          },
          [_vm._v("Отель")]
        )
      ]
    )
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
        _vm._v("название отеля:\n                    ")
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
          "\n                        категория номера:\n                    "
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
        _vm._v("\n                        питание\n                    ")
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
        staticClass: "row mx-auto mt-5 mb-5  align-items-center",
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
            staticClass: "white--text active-tour ml-5",
            staticStyle: {
              background: "#062348",
              "font-size": "18px",
              position: "absolute"
            }
          },
          [_vm._v("Даты")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row mx-auto mt-5 mb-5  align-items-center",
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
            staticClass: "white--text active-tour ml-5",
            staticStyle: {
              background: "#062348",
              "font-size": "18px",
              position: "absolute"
            }
          },
          [_vm._v("Авиабилеты")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row mx-auto mt-5 mb-5  align-items-center",
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
            staticClass: "white--text active-tour ml-5",
            staticStyle: {
              background: "#062348",
              "font-size": "18px",
              position: "absolute"
            }
          },
          [_vm._v("Пассажиры")]
        )
      ]
    )
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
            staticClass: "white--text active-tour ml-5",
            staticStyle: {
              background: "#062348",
              "font-size": "18px",
              width: "330px",
              position: "absolute"
            }
          },
          [_vm._v("Дополнительные услуги")]
        )
      ]
    )
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
            staticClass: "white--text active-tour ml-5",
            staticStyle: {
              background: "#062348",
              "font-size": "18px",
              width: "330px",
              position: "absolute"
            }
          },
          [_vm._v("Файлы")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/desktop/pages/Client/ArchiveTourInfo.vue":
/*!***************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/ArchiveTourInfo.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArchiveTourInfo_vue_vue_type_template_id_5b81ac00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArchiveTourInfo.vue?vue&type=template&id=5b81ac00&scoped=true& */ "./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=template&id=5b81ac00&scoped=true&");
/* harmony import */ var _ArchiveTourInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArchiveTourInfo.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ArchiveTourInfo_vue_vue_type_style_index_0_id_5b81ac00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css& */ "./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css&");
/* harmony import */ var _ArchiveTourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArchiveTourInfo.vue?vue&type=style&index=1&lang=css& */ "./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ArchiveTourInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArchiveTourInfo_vue_vue_type_template_id_5b81ac00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArchiveTourInfo_vue_vue_type_template_id_5b81ac00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b81ac00",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Client/ArchiveTourInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArchiveTourInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_style_index_0_id_5b81ac00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=0&id=5b81ac00&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_style_index_0_id_5b81ac00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_style_index_0_id_5b81ac00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_style_index_0_id_5b81ac00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_style_index_0_id_5b81ac00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArchiveTourInfo.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=template&id=5b81ac00&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=template&id=5b81ac00&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_template_id_5b81ac00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArchiveTourInfo.vue?vue&type=template&id=5b81ac00&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Client/ArchiveTourInfo.vue?vue&type=template&id=5b81ac00&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_template_id_5b81ac00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveTourInfo_vue_vue_type_template_id_5b81ac00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);