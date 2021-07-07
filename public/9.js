(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Main.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Main",
  data: function data() {
    return {
      clients: 0,
      managers: 0,
      myclients: 0,
      loading: false,
      sms_loading: false,
      message_type: {
        text: 'Всем клиентам',
        value: 'all'
      },
      options: [{
        text: 'Всем клиентам',
        value: 'all'
      }, {
        text: 'Одному клиенту',
        value: 'one'
      }, {
        text: 'Клиентам из файла',
        value: 'file'
      }],
      phone: '',
      phones: [],
      file: null,
      message: 'Сообщение от TravelClub: ',
      email: '',
      info: null
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getUser();
    this.getStatistics();

    if (this.branches.length <= 0) {
      this.loadBranches();
    } // if(!this.user || this.user==null)
    // {
    //     this.$store.dispatch('getUser').then( () => {
    //         // this.myclients = this.user.isManagerForCount;
    //     });
    // }
    // this.myclients = this.user.isManagerForCount;

  },
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    isAdmin: function isAdmin() {
      return this.$store.getters.isAdmin;
    },
    user: function user() {
      return this.$store.getters.user;
    },
    branches: function branches() {
      return this.$store.getters.branches;
    } // fullName() {
    //     return this.info.LastName+' '+ this.info.FirstName+' '+this.info.MiddleName
    // }

  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!_this.user || _this.user == null)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return _this.$store.dispatch('getUser').then(function () {
                  // console.log('getUser')
                  _this.info = _this.user.info;
                  _this.myclients = _this.user.isManagerForCount;
                });

              case 3:
                _context.next = 7;
                break;

              case 5:
                _this.info = _this.user.info;
                _this.myclients = _this.user.isManagerForCount;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getStatistics: function getStatistics() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('auth/statistics').then(function (resp) {
                  _this2.clients = resp.data.clients;
                  _this2.managers = resp.data.managers;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    loadBranches: function loadBranches() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$store.dispatch('setBranches');

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    selectCity: function selectCity(item) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                item.Department = '';

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    //info
    updateInfo: function updateInfo() {
      var _this4 = this;

      this.loading = true;
      this.info.FullName = this.info.LastName + ' ' + this.info.FirstName + ' ' + this.info.MiddleName;
      var param = {
        id: this.user.id,
        value: this.user.email,
        key: 'email'
      };
      this.$store.dispatch('saveUser', param);
      this.$store.dispatch('updateClientInfo', this.info).then(function (response) {
        _this4.loading = false; // let foundIndex = this.addresses.findIndex(item => item.department === this.info.Department);
        // this.department = this.addresses[foundIndex]

        _this4.sendMessage('Ваши личные данные успешно обновлены');
      });
    },
    changeMessageType: function changeMessageType() {
      this.phones = [];
      this.file = null;
    },
    handleFiles: function handleFiles() {
      var uploadedFiles = this.$refs.file.files;

      if (/\.(xlsx|xls)$/i.test(uploadedFiles[0].name)) {
        this.file = uploadedFiles[0];
      } else {
        this.sendMessage('Неверный формат файла', 'error');
      }
    },
    removeFile: function removeFile() {
      this.file = null;
    },
    sendSms: function sendSms() {
      var _this5 = this;

      this.sms_loading = true;

      if (this.phones !== [] && this.message !== '') {
        if (this.message_type.value === 'all') {
          axios.get("auth/manager/getPhones").then(function (resp) {
            _this5.phones = resp.data.phones;

            _this5.sendMessage(resp.data.message);
          });
        }

        if (this.message_type.value === 'one') {
          this.phones = [];
          this.phones.push(this.phone);
        }

        if (this.message_type.value === 'file') {
          var formData = new FormData();
          formData.append('file', this.file);
          axios.post("auth/manager/uploadPhones", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(function (resp) {
            _this5.sendMessage(resp.data.message);

            _this5.phones = resp.data.phones;
            console.log(_this5.phones);
          });
        }

        axios.post("auth/manager/sendSmsMessage", {
          message: this.message,
          phones: this.phones
        }).then(function (resp) {
          _this5.sendMessage(resp.data.message);
        });
      }

      this.sms_loading = false;
    },
    sendMessage: function sendMessage(message) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'travel';
      this.$notify({
        group: 'info',
        type: type,
        title: 'Сообщение от TravelClub',
        text: message
      });
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_1__["mask"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card[data-v-ea9cbe52] {\n    margin-top: 0 !important;\n}\n.card .card-header .card-category[data-v-ea9cbe52] {\n    color: #F08B23;\n}\n.white-content .card:not(.card-white) .card-header .card-title[data-v-ea9cbe52] {\n    color: #0d274b;\n    font-weight: 600;\n}\n.white--text[data-v-ea9cbe52] {\n    color: #fff !important;\n    caret-color: #fff !important;\n}\n.active-tour[data-v-ea9cbe52] {\n    background: #f08b23;\n    border-radius: 20px;\n    padding: 3px 20px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n    font-weight: 900;\n    text-transform: uppercase;\n    font-family: 'Open Sans';\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*#manager-profile .multiselect__tags {*/\n/*    border-color: rgba(29, 37, 59, 0.5) !important;*/\n/*}*/\n#manager-profile .multiselect__option.multiselect__option--group.multiselect__option--disabled{\n    text-align: center;\n    background: white !important;\n    color:#f08b23 !important;\n}\n#manager-profile .multiselect__option--highlight::after {\n    background: #f08b2300;\n}\n#manager-profile .multiselect__option--highlight{\n    background: #f08b23;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=1&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=template&id=ea9cbe52&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Main.vue?vue&type=template&id=ea9cbe52&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      staticClass: "container m-auto",
      staticStyle: { height: "100%" },
      attrs: { id: "manager-profile" }
    },
    [
      _c("div", { staticClass: "row w-100 mx-auto mb-4" }, [
        _vm.isAdmin
          ? _c("div", { staticClass: "col-lg-4" }, [
              _c("div", { staticClass: "card card-chart mb-2" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-category" }, [
                    _vm._v("Менеджеров")
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "card-title" }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.managers) +
                        "\n                        "
                    )
                  ])
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4" }, [
          _c("div", { staticClass: "card card-chart mb-2" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("h5", { staticClass: "card-category" }, [_vm._v("Клиентов")]),
              _vm._v(" "),
              _c("h3", { staticClass: "card-title" }, [
                _vm._v(
                  "\n                            " +
                    _vm._s(_vm.clients) +
                    "\n                        "
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row w-100 mx-auto" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-12" },
          [
            _c(
              "card",
              { staticClass: "mb-3" },
              [
                _c("div", { staticClass: "lw-dashboard-card" }, [
                  _c(
                    "div",
                    {
                      staticClass: "row p-2 m-auto",
                      staticStyle: { width: "100%" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "col-md-12" },
                        [
                          _c("label", { staticClass: "control-label" }, [
                            _vm._v("Выберите тип смс рассылки: ")
                          ]),
                          _vm._v(" "),
                          _c("multiselect", {
                            staticStyle: { "max-width": "300px" },
                            attrs: {
                              options: _vm.options,
                              disabled: _vm.sms_loading,
                              "option-height": 25,
                              placeholder: "Выберите тип смс рассылки",
                              "show-labels": false,
                              maxHeight: 200,
                              loading: _vm.sms_loading,
                              "allow-empty": false,
                              label: "text"
                            },
                            on: { change: _vm.changeMessageType },
                            scopedSlots: _vm._u([
                              {
                                key: "singleLabel",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "option__desc" },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "option__title",
                                            staticStyle: {
                                              "line-height": "1.428571"
                                            }
                                          },
                                          [_vm._v(_vm._s(props.option.text))]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              },
                              {
                                key: "option",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "option__desc" },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "option__title",
                                            staticStyle: {
                                              "line-height": "1.428571"
                                            }
                                          },
                                          [_vm._v(_vm._s(props.option.text))]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.message_type,
                              callback: function($$v) {
                                _vm.message_type = $$v
                              },
                              expression: "message_type"
                            }
                          }),
                          _vm._v(" "),
                          _vm.message_type.value == "one"
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "text-center ml-auto mr-auto mt-3"
                                },
                                [
                                  _c("b-form-input", {
                                    directives: [
                                      {
                                        name: "mask",
                                        rawName: "v-mask",
                                        value: [
                                          "+# (###) ###-##-##",
                                          "+## (###) ###-##-##"
                                        ],
                                        expression:
                                          "['+# (###) ###-##-##','+## (###) ###-##-##']"
                                      }
                                    ],
                                    attrs: {
                                      type: "text",
                                      placeholder:
                                        "Введите номер телефона клиента",
                                      name: "phone",
                                      required: "",
                                      disabled: _vm.sms_loading,
                                      pattern:
                                        "[\\+]\\d{2} [\\(]\\d{3}[\\)] \\d{3}[\\-]\\d{2}[\\-]\\d{2}"
                                    },
                                    model: {
                                      value: _vm.phone,
                                      callback: function($$v) {
                                        _vm.phone = $$v
                                      },
                                      expression: "phone"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message_type.value == "file"
                            ? _c("div", { staticClass: "ml-auto mr-auto" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-lg-12 my-1" }, [
                                    _vm.file == null
                                      ? _c("div", { staticClass: "filezone" }, [
                                          _c("input", {
                                            ref: "file",
                                            attrs: {
                                              type: "file",
                                              id: "file",
                                              disabled: _vm.sms_loading
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.handleFiles()
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              "\n                                                    Перетащите файл сюда "
                                            ),
                                            _c("br"),
                                            _vm._v(
                                              "или нажмите для поиска\n                                                "
                                            )
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.file != null
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "list-group-item flex-column align-items-start",
                                            staticStyle: {
                                              "border-radius": "0.25rem"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "row pt-5 pb-5" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "col-6" },
                                                  [
                                                    _c(
                                                      "p",
                                                      { staticClass: "mb-1" },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "amount"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Файл: " +
                                                                _vm._s(
                                                                  this.file.name
                                                                )
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
                                                  { staticClass: "col-6" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "remove-container",
                                                        staticStyle: {
                                                          float: "right"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "remove",
                                                            staticStyle: {
                                                              color: "red",
                                                              cursor: "pointer"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.removeFile()
                                                              }
                                                            }
                                                          },
                                                          [_vm._v("Удалить")]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("hr")
                                  ])
                                ])
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Сообщение: ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "row w-100 text-center m-auto" },
                          [
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.message,
                                  expression: "message"
                                }
                              ],
                              staticClass: "w-100 p-2 m-auto travel-input",
                              staticStyle: {
                                "border-radius": "20px !important"
                              },
                              attrs: {
                                id: "textarea",
                                placeholder: "Введите сообщение...",
                                rows: "4",
                                "max-rows": "8",
                                disabled: _vm.sms_loading
                              },
                              domProps: { value: _vm.message },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.message = $event.target.value
                                }
                              }
                            })
                          ]
                        )
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "btn btn-travel float-right",
                    attrs: { slot: "footer", disabled: _vm.sms_loading },
                    on: { click: _vm.sendSms },
                    slot: "footer"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "row align-items-center m-auto w-100 h-100"
                      },
                      [
                        _vm.sms_loading
                          ? _c("span", {
                              staticClass:
                                "spinner-border spinner-border-sm mx-2",
                              attrs: { role: "status", "aria-hidden": "true" }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.sms_loading
                          ? _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Loading...")
                            ])
                          : _vm._e(),
                        _vm._v(
                          "\n                            Отправить\n                        "
                        )
                      ]
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row w-100 mx-auto" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("ValidationObserver", {
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var invalid = ref.invalid
                    return [
                      _vm.user != null && _vm.info != null
                        ? _c(
                            "card",
                            [
                              _c("div", { staticClass: "row p-2 m-auto" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 pr-md-1" },
                                  [
                                    _c("ValidationProvider", {
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        name: "lastName",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    staticClass: "mb-0",
                                                    attrs: {
                                                      label: "Фамилия",
                                                      "label-size": "sm"
                                                    }
                                                  },
                                                  [
                                                    _c("b-form-input", {
                                                      staticClass:
                                                        "mb-0 travel-input",
                                                      attrs: {
                                                        label: "Фамилия",
                                                        placeholder: "Фамилия"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.info.LastName,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.info,
                                                            "LastName",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "info.LastName"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "validate-error"
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 px-md-1" },
                                  [
                                    _c("ValidationProvider", {
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        name: "firstName",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    staticClass: "mb-0",
                                                    attrs: {
                                                      label: "Имя",
                                                      "label-size": "sm"
                                                    }
                                                  },
                                                  [
                                                    _c("b-form-input", {
                                                      staticClass:
                                                        "mb-0 travel-input",
                                                      attrs: {
                                                        label: "Имя",
                                                        placeholder: "Имя"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.info.FirstName,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.info,
                                                            "FirstName",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "info.FirstName"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "validate-error"
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 pl-md-1" },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        staticClass: "mb-0",
                                        attrs: {
                                          label: "Отчество",
                                          "label-size": "sm"
                                        }
                                      },
                                      [
                                        _c("b-form-input", {
                                          staticClass: "mb-0 travel-input",
                                          attrs: {
                                            label: "Отчество",
                                            placeholder: "Отчество"
                                          },
                                          model: {
                                            value: _vm.info.MiddleName,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.info,
                                                "MiddleName",
                                                $$v
                                              )
                                            },
                                            expression: "info.MiddleName"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row p-2 m-auto" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 pr-md-1" },
                                  [
                                    _c("ValidationProvider", {
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        name: "email",
                                        rules: "required|email"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    staticClass: "mb-0",
                                                    attrs: {
                                                      label: "Email",
                                                      "label-size": "sm"
                                                    }
                                                  },
                                                  [
                                                    _c("b-form-input", {
                                                      staticClass:
                                                        "mb-0 travel-input",
                                                      attrs: {
                                                        label: "Email",
                                                        type: "email",
                                                        placeholder:
                                                          "client@email.com"
                                                      },
                                                      model: {
                                                        value: _vm.user.email,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.user,
                                                            "email",
                                                            $$v
                                                          )
                                                        },
                                                        expression: "user.email"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "validate-error"
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 px-md-1" },
                                  [
                                    _c("ValidationProvider", {
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        name: "phone",
                                        rules: "required|phone"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    staticClass: "mb-0",
                                                    attrs: {
                                                      label: "Телефон",
                                                      "label-size": "sm"
                                                    }
                                                  },
                                                  [
                                                    _c("b-form-input", {
                                                      directives: [
                                                        {
                                                          name: "mask",
                                                          rawName: "v-mask",
                                                          value: [
                                                            "+# (###) ###-##-##",
                                                            "+## (###) ###-##-##"
                                                          ],
                                                          expression:
                                                            "['+# (###) ###-##-##','+## (###) ###-##-##']"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "mb-0 travel-input",
                                                      attrs: {
                                                        label: "Телефон",
                                                        placeholder: "Телефон"
                                                      },
                                                      model: {
                                                        value: _vm.info.Phone,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.info,
                                                            "Phone",
                                                            $$v
                                                          )
                                                        },
                                                        expression: "info.Phone"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "validate-error"
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
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
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row p-2 m-auto" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 pr-md-1" },
                                  [
                                    _c("ValidationProvider", {
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        name: "City",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    staticClass: "mb-0",
                                                    attrs: {
                                                      label: "Город",
                                                      "label-size": "sm"
                                                    }
                                                  },
                                                  [
                                                    _c("multiselect", {
                                                      attrs: {
                                                        options: _vm.branches,
                                                        "option-height": 25,
                                                        placeholder:
                                                          "Выберите город",
                                                        "show-labels": false,
                                                        maxHeight: 200,
                                                        loading:
                                                          _vm.branches
                                                            .length === 0,
                                                        disabled:
                                                          _vm.branches
                                                            .length === 0,
                                                        "allow-empty": false,
                                                        "track-by": "city",
                                                        label: "city"
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          return _vm.selectCity(
                                                            _vm.info
                                                          )
                                                        }
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "singleLabel",
                                                            fn: function(
                                                              props
                                                            ) {
                                                              return [
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "option__desc"
                                                                  },
                                                                  [
                                                                    props.option
                                                                      .city
                                                                      ? _c(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "option__title",
                                                                            staticStyle: {
                                                                              "font-size":
                                                                                "0.7500000025rem",
                                                                              "line-height":
                                                                                "1.428571"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                props
                                                                                  .option
                                                                                  .city
                                                                              )
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  ]
                                                                )
                                                              ]
                                                            }
                                                          },
                                                          {
                                                            key: "option",
                                                            fn: function(
                                                              props
                                                            ) {
                                                              return [
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "option__desc"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "option__title",
                                                                        staticStyle: {
                                                                          "font-size":
                                                                            "0.7500000025rem",
                                                                          "line-height":
                                                                            "1.428571"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            props
                                                                              .option
                                                                              .city
                                                                          )
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        true
                                                      ),
                                                      model: {
                                                        value: _vm.info.City,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.info,
                                                            "City",
                                                            $$v
                                                          )
                                                        },
                                                        expression: "info.City"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "validate-error"
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 px-md-1" },
                                  [
                                    _c("ValidationProvider", {
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        name: "department",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    staticClass: "mb-0",
                                                    attrs: {
                                                      label: "Отделение",
                                                      "label-size": "sm"
                                                    }
                                                  },
                                                  [
                                                    _c("multiselect", {
                                                      attrs: {
                                                        options:
                                                          _vm.info.City
                                                            .departments,
                                                        "option-height": 25,
                                                        placeholder:
                                                          "Выберите отделение",
                                                        "show-labels": false,
                                                        maxHeight: 200,
                                                        disabled:
                                                          _vm.info.City
                                                            .departments
                                                            .length === 0,
                                                        "allow-empty": false,
                                                        label: "address",
                                                        "track-by": "address"
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "singleLabel",
                                                            fn: function(
                                                              props
                                                            ) {
                                                              return [
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "option__desc"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "option__title",
                                                                        staticStyle: {
                                                                          "font-size":
                                                                            "0.7500000025rem",
                                                                          "line-height":
                                                                            "1.428571"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            props
                                                                              .option
                                                                              .address
                                                                          )
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            }
                                                          },
                                                          {
                                                            key: "option",
                                                            fn: function(
                                                              props
                                                            ) {
                                                              return [
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "option__desc"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "option__title",
                                                                        staticStyle: {
                                                                          "font-size":
                                                                            "0.7500000025rem",
                                                                          "line-height":
                                                                            "1.428571"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            props
                                                                              .option
                                                                              .address
                                                                          )
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        true
                                                      ),
                                                      model: {
                                                        value:
                                                          _vm.info.Department,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.info,
                                                            "Department",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "info.Department"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "validate-error"
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
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
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "btn btn-travel float-right",
                                  attrs: {
                                    slot: "footer",
                                    disabled: _vm.loading || invalid
                                  },
                                  on: { click: _vm.updateInfo },
                                  slot: "footer"
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
                                        ? _c(
                                            "span",
                                            { staticClass: "sr-only" },
                                            [_vm._v("Loading...")]
                                          )
                                        : _vm._e(),
                                      _vm._v(
                                        "\n                                Сохранить\n                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e()
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c(
        "div",
        {
          staticClass:
            "row mx-auto mt-3 mb-5 justify-content-center align-items-center",
          staticStyle: { width: "100%", "border-top": "4px solid #f08b23" }
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
            [_vm._v("Форма смс рассылки")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c(
        "div",
        {
          staticClass:
            "row mx-auto mt-3 mb-5 justify-content-center align-items-center",
          staticStyle: { width: "100%", "border-top": "4px solid #f08b23" }
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
            [_vm._v("Профиль")]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Main.vue":
/*!*****************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Main.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_ea9cbe52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=ea9cbe52&scoped=true& */ "./resources/js/desktop/pages/Manager/Main.vue?vue&type=template&id=ea9cbe52&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Manager/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_id_ea9cbe52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css& */ "./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css&");
/* harmony import */ var _Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=1&lang=css& */ "./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_ea9cbe52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_ea9cbe52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ea9cbe52",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Manager/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Main.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Main.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_ea9cbe52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=0&id=ea9cbe52&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_ea9cbe52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_ea9cbe52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_ea9cbe52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_ea9cbe52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=1&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Main.vue?vue&type=template&id=ea9cbe52&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Main.vue?vue&type=template&id=ea9cbe52&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_ea9cbe52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=ea9cbe52&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Main.vue?vue&type=template&id=ea9cbe52&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_ea9cbe52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_ea9cbe52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);