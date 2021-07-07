(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      load: false,
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
    this.getTour(); // this.start = new Date(this.tour.TourInfo.date_range.start)
    // console.log(this.start)
    // this.end = new Date(this.tour.TourInfo.date_range.end)
  },
  mounted: function mounted() {
    // this.$refs.Calendar;
    // console.log(this.$refs.Calendar)
    // console.log(this.$refs['Calendar'])
    // console.log(this.$refs.Calendar.calendar)
    // let self = this
    // this.$nextTick(()=>{
    //
    //     console.log(self.$refs)
    //     console.log(self.$refs.Calendar)
    // });
    this.toCalendar();
  },
  methods: {
    getTour: function getTour() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var now, end, after;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.load = true;

                if (_this.user) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return _this.$store.dispatch('getUser').then(function () {
                  _this.tour = _this.user.tours.find(function (tour) {
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

                  _this.load = false;
                });

              case 4:
                _context.next = 14;
                break;

              case 6:
                _this.tour = _this.user.tours.find(function (tour) {
                  return tour.id == _this.$route.params.id;
                });
                _this.start = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.tour.TourInfo.date_range.start, "DD-MM-YYYY").toDate();
                _this.end = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.tour.TourInfo.date_range.end, "DD-MM-YYYY").toDate();
                now = moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date());
                end = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this.tour.EndAt).add(3, 'days');
                after = now.isAfter(end) ? true : false;

                if (after == true) {
                  _this.invalid = false;
                }

                _this.load = false;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    toCalendar: function toCalendar() {
      var _this2 = this;

      if (this.$refs.Calendar == undefined) {
        setTimeout(function () {
          return _this2.$refs.Calendar.ChooseDate(_this2.start);
        }, 2000);
      } else {
        this.$refs.Calendar.ChooseDate(this.start);
      } // this.$nextTick(function() {
      //     console.log(this.$refs.Calendar)
      //     this.$refs.Calendar.ChooseDate(this.start);
      //     // this.$refs.Calendar.ChooseDate('25/10/2020');
      // });

    },
    toBalance: function toBalance() {
      this.$router.push('/client/balance/' + this.$route.params.id);
    },
    addToArchive: function addToArchive(tour) {
      var _this3 = this;

      var data = {
        id: tour.id,
        UserId: tour.UserId,
        Archive: true,
        status: 'add'
      };
      this.$store.dispatch('updateArchive', data).then(function () {
        console.log('updateArchive', 'true');
        tour.Archive = true;

        _this3.sendMessage('Тур успешно перемещен в архив');
      });
    },
    returnFromArchive: function returnFromArchive(tour) {
      var _this4 = this;

      var data = {
        id: tour.id,
        UserId: tour.UserId,
        Archive: false,
        status: 'return'
      };
      this.$store.dispatch('updateArchive', data).then(function () {
        tour.Archive = false;

        _this4.sendMessage('Тур успешно перемещен из архива');
      });
    },
    addReview: function addReview() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this5.loading = true;
                data = {
                  review: _this5.review,
                  date: new Date()
                };

                if (_this5.tour.Comment.length > 0) {
                  _this5.tour.Comment.push(data);
                } else {
                  _this5.tour.Comment = [];

                  _this5.tour.Comment.push(data);
                }

                _context2.next = 5;
                return _this5.$store.dispatch('updateReview', _this5.tour).then(function () {
                  _this5.sendMessage('Новый отзыв успешно добавлен');

                  _this5.loading = false;
                });

              case 5:
                _this5.loading = false;
                $('#reviewModalBox').modal('hide');

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.start-form[data-v-5e4ee9fa] {\n    max-width: 500px;\n    margin: auto;\n    margin-top: auto;\n    /*text-align: center;*/\n}\n.section[data-v-5e4ee9fa] {\n    padding: 0 16px;\n}\n.modalbox[data-v-5e4ee9fa] {\n    padding-top: env(safe-area-inset-top);\n    overflow: hidden;\n}\n.modalbox .modal-dialog[data-v-5e4ee9fa] {\n    transform: translate(0, 100%) !important;\n    min-width: 100%;\n    margin: 0;\n    transition: 0.5s all !important;\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin-top: env(safe-area-inset-top);\n}\n.modalbox .modal-dialog .modal-content[data-v-5e4ee9fa] {\n    border-radius: 0;\n    border: 0;\n    margin: auto;\n    overflow: hidden;\n    padding-top: 56px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n}\n.modalbox .modal-dialog .modal-content .modal-header[data-v-5e4ee9fa] {\n    border: 0;\n    padding: 0;\n    min-height: 56px;\n    padding: 10px 16px;\n    border-radius: 0;\n    display: flex;\n    border-bottom: 1px solid #E1E1E1;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n    background: #FFF;\n}\n.modalbox .modal-dialog .modal-content .modal-header .modal-title[data-v-5e4ee9fa] {\n    margin: 0;\n    color: #063065;\n    font-size: 17px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n}\n.modalbox .modal-dialog .modal-content .modal-header a[data-v-5e4ee9fa]{\n    color: #063065;\n}\n.modalbox .modal-dialog .modal-content .modal-body[data-v-5e4ee9fa] {\n    padding: 20px 16px;\n    overflow: auto;\n}\n.modalbox.show .modal-dialog[data-v-5e4ee9fa] {\n    transform: translate(0, 0) !important;\n}\n.form-group[data-v-5e4ee9fa] {\n    width: 100%;\n}\n.form-group .label[data-v-5e4ee9fa] {\n    font-size: 12px;\n    margin: 0;\n    font-weight: 900;\n    color: #063065;\n    display: block;\n    line-height: 1.2em;\n    text-align: left;\n    font-family: Open Sans;\n}\n.form-group textarea[data-v-5e4ee9fa] {\n    resize: none;\n}\n.form-group .input-info[data-v-5e4ee9fa] {\n    font-size: 11px;\n    color: #A1A1A2;\n}\n.form-group .clear-input[data-v-5e4ee9fa] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #4F5050;\n    height: 38px;\n    font-size: 22px;\n    position: absolute;\n    right: 6px;\n    top: 0px;\n    bottom: 0;\n    width: 32px;\n    opacity: 0.5;\n}\n.form-group .clear-input[data-v-5e4ee9fa]:hover, .form-group .clear-input[data-v-5e4ee9fa]:active {\n    opacity: 0.8;\n}\n.form-group .input-wrapper[data-v-5e4ee9fa] {\n    position: relative;\n}\n.form-group .input-wrapper.not-empty .clear-input[data-v-5e4ee9fa] {\n    display: flex;\n}\n.form-group .input-wrapper.active .label[data-v-5e4ee9fa] {\n    color: #f08b23 !important;\n}\n.form-group.basic[data-v-5e4ee9fa] {\n    padding: 8px 0;\n    margin: 0;\n}\n.form-group.basic .form-control[data-v-5e4ee9fa],\n.form-group.basic .custom-select[data-v-5e4ee9fa] {\n    background: transparent;\n    border: none;\n    border-bottom: 1px solid #E1E1E1;\n    padding: 0 30px 0 0;\n    border-radius: 0;\n    height: 40px;\n    color: #141515;\n    font-size: 15px;\n}\n.form-group.basic .form-control[data-v-5e4ee9fa]:focus,\n.form-group.basic .custom-select[data-v-5e4ee9fa]:focus {\n    border-bottom-color: #f08b23;\n    box-shadow: inset 0 -1px 0 0 #f08b23;\n}\n.form-group.basic textarea.form-control[data-v-5e4ee9fa] {\n    height: auto;\n    padding: 7px 40px 7px 0;\n}\n.form-group.basic.animated .label[data-v-5e4ee9fa] {\n    margin-top: 20px;\n    opacity: 0;\n    top: -3px;\n    transition: 0.2s all;\n    position: absolute;\n}\n.form-group.basic.animated .input-wrapper[data-v-5e4ee9fa] {\n    padding-top: 5px;\n}\n.form-group.basic.animated .input-wrapper.not-empty .label[data-v-5e4ee9fa] {\n    margin-top: 0;\n    opacity: 1;\n}\n.form-button-group[data-v-5e4ee9fa] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    padding-left: 16px;\n    padding-right: 16px;\n    background: #FFF;\n    min-height: 84px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: env(safe-area-inset-bottom);\n}\n.form-button-group .btn[data-v-5e4ee9fa] {\n    background: #f08b23;\n    color: white;\n    text-transform: uppercase;\n    font-size: 24px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    border: 0;\n    border-radius: 50px;\n    outline: none;\n}\nform-button-group .btn[data-v-5e4ee9fa]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.title-1[data-v-5e4ee9fa] {\n    position: absolute;\n    z-index: 1;\n    right: 130px;\n    top: 10px;\n    color:#062348;\n    font-family: 'Bello Pro' !important;\n    font-size: 35px;\n}\n.title-1 span[data-v-5e4ee9fa] {\n    font-size: 40px;\n}\n.title-2[data-v-5e4ee9fa] {\n    position: absolute;\n    z-index: 1;\n    left: 87px;\n    top: 18px;\n    color:white;\n    font-family: 'Open Sans' !important;\n    font-weight:900;\n    font-size: 25px;\n}\n.title-2 span[data-v-5e4ee9fa] {\n    text-transform: uppercase;\n}\n.orange-brush[data-v-5e4ee9fa]{\n    top: 5px;\n    left: 0px;\n    width: 265px;\n}\n.blue-brush[data-v-5e4ee9fa]{\n    top: 10px;\n    right: 47px;\n    width: 330px;\n    height: 50px;\n    opacity: 1;\n}\n.section p[data-v-5e4ee9fa] {\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    font-style: italic;\n    font-size: 13px;\n    color: #062348;\n}\n.btn-tour-info[data-v-5e4ee9fa] {\n    border: 2px solid #f08b23;\n    border-radius: 50%;\n    /*padding: 3px 20px;*/\n    font-weight: 900;\n    text-transform: uppercase;\n    font-family: 'Open Sans';\n    /*min-width: 206px;*/\n    text-align: center;\n    color: #063065;\n    margin-right: 5px;\n    margin-left: 5px;\n    font-size: 1.35rem;\n}\n.btn-tour-info-title[data-v-5e4ee9fa] {\n    text-transform: uppercase;\n    font-family: 'Open Sans';\n    text-align: center;\n    font-size: 10px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    color: #063065;\n}\n.btn-tour-info[data-v-5e4ee9fa]:hover{\n    border: 2px solid rgb(13, 39, 75);\n    background: rgb(13, 39, 75);\n    color: #fff !important;\n}\n.btn-tour-info[data-v-5e4ee9fa]:disabled {\n    border: 2px solid #c6e2f7;\n    color: #c6e2f7;\n}\n.btn-tour-info[data-v-5e4ee9fa]:disabled:hover{\n    border: 2px solid #c6e2f7;\n    color: #c6e2f7 !important;\n    background: white;\n}\n.white--text[data-v-5e4ee9fa] {\n    color: #fff !important;\n    caret-color: #fff !important;\n}\n.active-tour[data-v-5e4ee9fa] {\n    background: #f08b23;\n    border-radius: 20px;\n    padding: 3px 20px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n    font-weight: 900;\n    text-transform: uppercase;\n    font-family: 'Open Sans';\n    width: 160px;\n    text-align: center;\n    float: left;\n}\n.features[data-v-5e4ee9fa] {\n    font-family: \"Open Sans\";\n    text-transform: uppercase;\n    line-height: 2.25;\n}\n.title[data-v-5e4ee9fa] {\n    font-size: 13px;\n    color: rgb(13, 39, 75);\n    letter-spacing: 2px;\n    font-weight: 900;\n}\n.subtitle[data-v-5e4ee9fa] {\n    font-size: 18px;\n    color: #f08b23;\n    font-weight: 900;\n}\n@media screen and (max-width: 576px) {\n.title[data-v-5e4ee9fa] {\n        font-size: 12px;\n}\n.subtitle[data-v-5e4ee9fa] {\n        font-size: 15px;\n}\n}\n.main[data-v-5e4ee9fa] {\n    position: relative;\n    z-index: 2;\n    /*border-top: 1px solid #f08b23;*/\n    padding: 0px 15px;\n}\n.ticket-list[data-v-5e4ee9fa] {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.ticket-list li[data-v-5e4ee9fa] {\n    position: relative;\n    font-size: 14px;\n    border-bottom: 1px solid #f08b23;\n    border-top: 1px solid #f08b23;\n}\n\n/*.ticket-list li:last-child {*/\n/*    border-bottom: none;*/\n/*}*/\n.ticket-list li label[data-v-5e4ee9fa] {\n    word-break: break-all;\n    padding: 5px 5px 5px 10px;\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n    color: #0d274b;\n    font-family: \"Open Sans\";\n    font-weight: 700;\n}\n.passenger-list[data-v-5e4ee9fa] {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.passenger-list li[data-v-5e4ee9fa] {\n    position: relative;\n    font-size: 14px;\n    border-bottom: 1px solid #f08b23;\n    border-top: 1px solid #f08b23;\n}\n/*.passenger-list li:last-child {*/\n/*    border-bottom: none;*/\n/*}*/\n.passenger-list li label[data-v-5e4ee9fa] {\n    word-break: break-all;\n    padding: 5px 5px 5px 5px;\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n    color: #0d274b;\n    font-family: \"Open Sans\";\n    font-weight: 700;\n    text-align: center;\n}\n.lists[data-v-5e4ee9fa] {\n    background: #fff;\n    position: relative;\n    border-radius: 20px;\n    border: 1px solid #f08b23;\n    font-weight: 700;\n    font-family: \"Open Sans\";\n}\n.preview[data-v-5e4ee9fa]{\n    height: 100px;\n    max-width: 90%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=1&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=1&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.calendars a {\n    text-decoration: none;\n    color: #063065;\n    margin-right: 10px;\n}\n.calendars a:hover {\n    text-decoration: none;\n}\n.icon-windows::before {\n    color: #063065;\n}\n.icon-microsoftoutlook::before {\n    color: #063065;\n}\n#tour-info .vfc-week .vfc-day span.vfc-span-day.vfc-today{\n    color: black !important;\n}\n#tour-info .vfc-separately-navigation-buttons.vfc-space-between{\n    background: #f08b23 !important;\n}\n#tour-info .vfc-week .vfc-day span.vfc-span-day.vfc-marked {\n    background-color: #f08b23;\n}\n.vfc-week .vfc-day span.vfc-span-day.vfc-marked::before {\n    background-color: #ffe7ce;\n}\n#tour-info .vfc-week .vfc-day .vfc-base-start, .vfc-week .vfc-day .vfc-base-end {\n    background: #ffe7ce;\n    background-color: rgb(255, 231, 206);\n}\n#tour-info .vfc-main-container {\n    border-radius:20px;\n}\n#tour-info .vfc-calendars-container {\n    border-radius:20px;\n}\n#tour-info .vfc-top-date span {\n    cursor: default;\n    text-decoration: unset;\n    margin: 0 2px;\n    color: #fff;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n}\n#tour-info .vfc-navigation-buttons div .vfc-arrow-left, .vfc-separately-navigation-buttons div .vfc-arrow-left {\n    width: 12px;\n    height: 12px;\n    border-top: 2px solid;\n    border-top-color: currentcolor;\n    border-left: 2px solid;\n    border-left-color: currentcolor;\n    border-color: #fff;\n    transform: rotate(-45deg);\n}\n#tour-info .vfc-navigation-buttons div, .vfc-separately-navigation-buttons div {\n    z-index: 2;\n    display: flex;\n    color: #fff;\n    font-size: 18px;\n    margin: 20px 10px;\n}\n#tour-info .vfc-navigation-buttons div .vfc-arrow-right, .vfc-separately-navigation-buttons div .vfc-arrow-right {\n    width: 12px;\n    height: 12px;\n    border-top: 2px solid;\n    border-top-color: currentcolor;\n    border-right: 2px solid;\n    border-right-color: currentcolor;\n    border-color: #fff;\n    transform: rotate(45deg);\n}\n#tour-info .vfc-content {\n    margin: 0 20px;\n    margin-bottom: 0px;\n    z-index: 1;\n}\n.vfc-popover-container {\n    width: 100%;\n    max-width: 300px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TourInfo.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=1&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=template&id=5e4ee9fa&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=template&id=5e4ee9fa&scoped=true& ***!
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
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: !_vm.load,
          expression: "!load"
        }
      ],
      staticClass: "mx-auto mt-4",
      staticStyle: { "margin-bottom": "70px" },
      attrs: { id: "tour-info" }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal fade modalbox show",
          attrs: {
            id: "reviewModalBox",
            "data-backdrop": "static",
            tabindex: "-1",
            role: "dialog",
            "aria-modal": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "modal-body",
                    staticStyle: { overflow: "hidden" }
                  },
                  [
                    _c("div", { staticClass: "start-form" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "section mt-4 mb-5" },
                        [
                          _c("ValidationObserver", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var invalid = ref.invalid
                                  return [
                                    _c(
                                      "div",
                                      { staticClass: "form-group basic" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "input-wrapper" },
                                          [
                                            _c("ValidationProvider", {
                                              staticStyle: { width: "95%" },
                                              attrs: {
                                                name: "review",
                                                rules: "required"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(ref) {
                                                      var errors = ref.errors
                                                      return [
                                                        _c("textarea", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value: _vm.review,
                                                              expression:
                                                                "review"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control pl-2 pr-4",
                                                          staticStyle: {
                                                            "min-height":
                                                              "100px",
                                                            "border-radius":
                                                              "20px",
                                                            border:
                                                              "2px solid #063065"
                                                          },
                                                          attrs: {
                                                            rows: "8",
                                                            cols: "80",
                                                            placeholder:
                                                              "Начните писать здесь..."
                                                          },
                                                          domProps: {
                                                            value: _vm.review
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.review =
                                                                $event.target.value
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c("i", {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value:
                                                                _vm.review
                                                                  .length > 0,
                                                              expression:
                                                                "review.length >0"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "clear-input icon icon-close",
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              _vm.review = ""
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "validate-error"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ],
                                                null,
                                                true
                                              )
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-12 contact-btn form-button-group"
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-block btn-lg",
                                            staticStyle: { width: "100%" },
                                            attrs: {
                                              type: "submit",
                                              disabled: invalid || _vm.loading
                                            },
                                            on: { click: _vm.addReview }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "row align-items-center justify-content-center m-auto w-100 h-100 text-center"
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
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass: "sr-only"
                                                      },
                                                      [_vm._v("Loading...")]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(
                                                  "\n                                                Отправить\n                                            "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "row align-items-center mx-auto mb-2 mt-auto",
          staticStyle: { width: "100%", height: "100%" }
        },
        [
          _c(
            "hooper",
            {
              staticClass: "mr-auto ml-auto",
              staticStyle: { height: "100%" },
              attrs: { itemsToShow: 3, infiniteScroll: false }
            },
            [
              _c("slide", [
                _c("div", { staticClass: "row w-100 m-auto" }, [
                  _c("div", { staticClass: "col-12 text-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-tour-info",
                        on: { click: _vm.toBalance }
                      },
                      [_c("i", { staticClass: "fas fa-wallet" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 btn-tour-info-title" }, [
                    _vm._v(
                      "\n                           Баланс\n                       "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("slide", [
                _c("div", { staticClass: "row w-100 m-auto" }, [
                  _c("div", { staticClass: "col-12  text-center" }, [
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
                          [_c("i", { staticClass: "fas fa-archive" })]
                        )
                      : _c(
                          "button",
                          {
                            staticClass: "btn btn-tour-info",
                            on: {
                              click: function($event) {
                                return _vm.returnFromArchive(_vm.tour)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-archive" })]
                        )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 text-center" }, [
                    !_vm.tour.Archive
                      ? _c("div", { staticClass: "btn-tour-info-title" }, [
                          _vm._v("В архив")
                        ])
                      : _c("div", { staticClass: "btn-tour-info-title" }, [
                          _vm._v("Из архива")
                        ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("slide", [
                _c("div", { staticClass: "row w-100 m-auto" }, [
                  _c("div", { staticClass: "col-12 text-center" }, [
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
                      [_c("i", { staticClass: "fas fa-comment-dots" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 btn-tour-info-title" }, [
                    _vm._v(
                      "\n                            Отзыв\n                        "
                    )
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
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
                    { staticClass: "row align-items-center w-100 m-auto" },
                    [
                      _c("div", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          {
                            staticClass: "row align-items-center w-100 m-auto"
                          },
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
            _vm._m(4),
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
      _vm._m(5),
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
                _vm._m(6),
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
                _vm._m(7),
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
                _vm._m(8),
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
      _vm._m(9),
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
                  "row mx-auto my-4 align-items-center justify-content-center",
                staticStyle: { width: "100%", height: "100%" }
              },
              [
                _c("functional-calendar", {
                  ref: "Calendar",
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
                    return _c(
                      "div",
                      { staticClass: "calendars row w-100 m-auto" },
                      [
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
                                  " Добавить в Google календарь\n                            "
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
                                  " Добавить в Microsoft live календарь\n                            "
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
                                _c("i", {
                                  staticClass: "icon-microsoftoutlook"
                                }),
                                _vm._v(
                                  " Добавить в  Office365 outlook календарь\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
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
      _vm.tour.TourInfo.avia_tickets.length > 0
        ? _c(
            "div",
            {
              staticClass: "row mx-auto my-4  align-items-center",
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
                  staticClass: "white--text active-tour ml-3",
                  staticStyle: {
                    background: "#062348",
                    "font-size": "14px",
                    position: "absolute"
                  }
                },
                [_vm._v("Авиабилеты")]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.tour.TourInfo.avia_tickets.length > 0
        ? _c(
            "div",
            {
              staticClass:
                "row features align-items-center justify-content-center m-auto",
              staticStyle: { width: "100%", height: "100%" }
            },
            [
              _c("div", { staticClass: "col-12 p-0" }, [
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
                        _vm._l(_vm.tour.TourInfo.avia_tickets, function(
                          ticket
                        ) {
                          return _c(
                            "li",
                            { key: ticket.id, staticClass: "ticket" },
                            [
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
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.tour.TourInfo.passengers.length > 0
        ? _c(
            "div",
            {
              staticClass: "row mx-auto my-4  align-items-center",
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
                  staticClass: "white--text active-tour ml-3",
                  staticStyle: {
                    background: "#062348",
                    "font-size": "14px",
                    position: "absolute"
                  }
                },
                [_vm._v("Пассажиры")]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.tour.TourInfo.passengers.length > 0
        ? _c(
            "div",
            {
              staticClass:
                "row features align-items-center justify-content-center m-auto",
              staticStyle: { width: "100%", height: "100%" }
            },
            [
              _c("div", { staticClass: "col-12 p-0" }, [
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
                        _vm._l(_vm.tour.TourInfo.passengers, function(
                          passenger
                        ) {
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
                                      [
                                        _c("label", [
                                          _vm._v(_vm._s(passenger.Name))
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
                                      [
                                        _c("label", [
                                          _vm._v(_vm._s(passenger.DoB))
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
                                      [
                                        _c("label", [
                                          _vm._v(_vm._s(passenger.Date))
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
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.tour.TourInfo.services.trim() != ""
        ? _c(
            "div",
            {
              staticClass:
                "row mx-auto my-4 justify-content-center align-items-center",
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
                  staticClass: "white--text active-tour mx-auto",
                  staticStyle: {
                    background: "#062348",
                    "font-size": "14px",
                    width: "330px",
                    position: "absolute"
                  }
                },
                [_vm._v("Дополнительные услуги")]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.tour.TourInfo.services.trim() != ""
        ? _c(
            "div",
            {
              staticClass:
                "row features align-items-center justify-content-center mx-auto mt-auto mb-5",
              staticStyle: { width: "100%", height: "100%" }
            },
            [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "div",
                  { staticClass: "row align-items-center w-100 m-auto" },
                  [
                    _c("div", { staticClass: "title" }, [
                      _vm._v(_vm._s(_vm.tour.TourInfo.services))
                    ])
                  ]
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.tour.TourInfo.files.length > 0
        ? _c(
            "div",
            {
              staticClass:
                "row mx-auto my-4 justify-content-center align-items-center",
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
                  staticClass: "white--text active-tour mx-auto",
                  staticStyle: {
                    background: "#062348",
                    "font-size": "14px",
                    width: "330px",
                    position: "absolute"
                  }
                },
                [_vm._v("Файлы")]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.tour.TourInfo.files.length > 0
        ? _c(
            "div",
            { staticClass: "file-listing" },
            _vm._l(_vm.tour.TourInfo.files, function(file, index) {
              return _c(
                "div",
                { key: file.name, staticClass: "list-group-item" },
                [
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
                ]
              )
            }),
            0
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Оставить отзыв")]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticStyle: { "text-decoration": "none" },
          attrs: { href: "javascript:;", "data-dismiss": "modal" }
        },
        [_vm._v("Закрыть")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section mx-auto" }, [
      _c(
        "div",
        {
          staticClass: "row m-auto justify-content-center align-items-center",
          staticStyle: { width: "100%", height: "100%" }
        },
        [
          _c("div", { staticClass: "col-12 col-8 col-sm-12" }, [
            _c(
              "div",
              {
                staticClass:
                  "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
                staticStyle: { height: "100px", width: "100%" }
              },
              [
                _c("div", { staticClass: "col-7 p-0" }, [
                  _c(
                    "div",
                    {
                      staticClass: "row mr-auto ml-0 my-auto travel-card-title",
                      staticStyle: {
                        position: "relative",
                        height: "50px",
                        width: "250px"
                      }
                    },
                    [
                      _c("h1", { staticClass: "title-1" }, [
                        _c("span", [_vm._v("Н")]),
                        _vm._v("апишите")
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "blue-brush",
                        staticStyle: { position: "absolute" },
                        attrs: { src: "/images/blue-brush.svg" }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-7 p-0" }, [
                  _c(
                    "div",
                    {
                      staticClass: "row ml-auto mr-0 my-auto travel-card-title",
                      staticStyle: {
                        position: "relative",
                        height: "50px",
                        width: "250px"
                      }
                    },
                    [
                      _c("h1", { staticClass: "title-2" }, [
                        _c("span", [_vm._v("отзыв")])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section mt-2 text-center" }, [
      _c("p", [_vm._v("Напишите Ваши впечатления...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row mx-auto my-4 align-items-center",
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
            staticClass: "white--text active-tour ml-3",
            staticStyle: {
              background: "#062348",
              "font-size": "14px",
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
        staticClass: "row mx-auto my-4  align-items-center",
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
            staticClass: "white--text active-tour ml-3",
            staticStyle: {
              background: "#062348",
              "font-size": "14px",
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
        staticClass: "row mx-auto my-4  align-items-center",
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
            staticClass: "white--text active-tour ml-3",
            staticStyle: {
              background: "#062348",
              "font-size": "14px",
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
        _vm._v("название отеля:\n                        ")
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
          "\n                            категория номера:\n                        "
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
          "\n                            питание\n                        "
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
        staticClass: "row mx-auto my-4  align-items-center",
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
            staticClass: "white--text active-tour ml-3",
            staticStyle: {
              background: "#062348",
              "font-size": "14px",
              position: "absolute"
            }
          },
          [_vm._v("Даты")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Client/TourInfo.vue":
/*!***************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Client/TourInfo.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TourInfo_vue_vue_type_template_id_5e4ee9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TourInfo.vue?vue&type=template&id=5e4ee9fa&scoped=true& */ "./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=template&id=5e4ee9fa&scoped=true&");
/* harmony import */ var _TourInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TourInfo.vue?vue&type=script&lang=js& */ "./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TourInfo_vue_vue_type_style_index_0_id_5e4ee9fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css& */ "./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css&");
/* harmony import */ var _TourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TourInfo.vue?vue&type=style&index=1&lang=css& */ "./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _TourInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TourInfo_vue_vue_type_template_id_5e4ee9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TourInfo_vue_vue_type_template_id_5e4ee9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e4ee9fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/mobile/pages/Client/TourInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TourInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_style_index_0_id_5e4ee9fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=0&id=5e4ee9fa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_style_index_0_id_5e4ee9fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_style_index_0_id_5e4ee9fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_style_index_0_id_5e4ee9fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_style_index_0_id_5e4ee9fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TourInfo.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=template&id=5e4ee9fa&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=template&id=5e4ee9fa&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_template_id_5e4ee9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TourInfo.vue?vue&type=template&id=5e4ee9fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/TourInfo.vue?vue&type=template&id=5e4ee9fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_template_id_5e4ee9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourInfo_vue_vue_type_template_id_5e4ee9fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);