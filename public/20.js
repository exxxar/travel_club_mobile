(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Edit",
  data: function data() {
    return {
      new_department: {
        address: '',
        phone: '',
        schedule: ''
      },
      departments: [],
      branch: null,
      loading: false
    };
  },
  computed: {
    branches: function branches() {
      return this.$store.getters.branches;
    }
  },
  mounted: function mounted() {
    this.setBranches();
  },
  methods: {
    setBranches: function setBranches() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;

                if (!(_this.branches.length <= 0)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return _this.$store.dispatch('setBranches').then(function () {
                  if (_this.$route.params.id !== undefined) {
                    _this.branch = _this.branches.find(function (branch) {
                      if (branch.id == _this.$route.params.id) {
                        return true;
                      }
                    });
                    _this.departments = _this.branch.departments;
                    _this.loading = false;
                  }
                });

              case 4:
                _context.next = 8;
                break;

              case 6:
                if (_this.$route.params.id !== undefined) {
                  _this.branch = _this.branches.find(function (branch) {
                    if (branch.id == _this.$route.params.id) {
                      return true;
                    }
                  });
                  _this.departments = _this.branch.departments;
                }

                _this.loading = false;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    save: function save(value, id, key) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$store.dispatch('saveBranch', {
                  id: id,
                  key: key,
                  value: value
                }).then(function (resp) {
                  _this2.$store.commit('saveBranch', resp.data.branch);

                  _this2.sendMessage(resp.data.message);
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addDepartment: function addDepartment() {
      this.departments.push(this.new_department);
      this.save(this.departments, this.$route.params.id, 'departments');
      this.new_department = {
        address: '',
        phone: '',
        schedule: ''
      };
    },
    removeDepartment: function removeDepartment(index) {
      // let branch = state.branches.findIndex(x => x.id === payload);
      // if (branch >= 0) {
      //     state.branches.splice(branch, 1);
      // }
      this.departments.splice(index, 1);
      this.save(this.departments, this.$route.params.id, 'departments');
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Отделения',
        text: message
      });
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_1__["mask"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-travel[data-v-e4c14dc6]{\n    background: #e17e4e;\n    background-color: rgb(225, 126, 78);\n    background-position-x: 0%;\n    background-position-y: 0%;\n    background-image: none;\n    background-size: auto;\n    background-image: linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e);\n    background-size: 210% 210%;\n    background-position: top right;\n    background-color: #e17e4e;\n    transition: all 0.15s ease;\n    box-shadow: none;\n    color: #ffffff;\n    max-width: 300px;\n    border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=template&id=e4c14dc6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=template&id=e4c14dc6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "p-2" }, [
    _c(
      "div",
      {
        staticClass:
          "row m-auto w-100 align-items-center justify-content-center p-3",
        staticStyle: { "border-radius": "5px", border: "1px solid #e8e8e8" }
      },
      [
        _c(
          "div",
          { staticClass: "col-12 col-sm-6 col-md-4" },
          [
            _c("b-form-input", {
              staticClass: "my-1 travel-input",
              attrs: { placeholder: "Адрес" },
              model: {
                value: _vm.new_department.address,
                callback: function($$v) {
                  _vm.$set(_vm.new_department, "address", $$v)
                },
                expression: "new_department.address"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-sm-6 col-md-4" },
          [
            _c("b-form-input", {
              directives: [
                {
                  name: "mask",
                  rawName: "v-mask",
                  value: ["+# (###) ###-##-##", "+## (###) ###-##-##"],
                  expression: "['+# (###) ###-##-##','+## (###) ###-##-##']"
                }
              ],
              staticClass: "my-1 travel-input",
              attrs: { placeholder: "Телефон" },
              model: {
                value: _vm.new_department.phone,
                callback: function($$v) {
                  _vm.$set(_vm.new_department, "phone", $$v)
                },
                expression: "new_department.phone"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-md-4" },
          [
            _c(
              "b-button",
              {
                staticClass: "my-1 mx-auto w-100 btn-travel",
                staticStyle: { "max-width": "300px" },
                attrs: { variant: "primary" },
                on: { click: _vm.addDepartment }
              },
              [_vm._v("\n                Добавить\n            ")]
            )
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
          "row mt-3 mx-auto w-100 align-items-center justify-content-center"
      },
      [
        _c(
          "div",
          { staticClass: "col-12 p-0" },
          _vm._l(_vm.departments, function(department, index) {
            return _c(
              "div",
              {
                staticClass:
                  "row mt-1 mx-auto w-100 align-items-center justify-content-center p-3",
                staticStyle: {
                  "border-radius": "5px",
                  border: "1px solid #e8e8e8"
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-6 col-md-4" },
                  [
                    _c("b-form-input", {
                      staticClass: "my-1 travel-input",
                      attrs: { placeholder: "Адрес" },
                      on: {
                        blur: function($event) {
                          return _vm.save(
                            _vm.departments,
                            _vm.branch.id,
                            "departments"
                          )
                        }
                      },
                      model: {
                        value: department.address,
                        callback: function($$v) {
                          _vm.$set(department, "address", $$v)
                        },
                        expression: "department.address"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-6 col-md-4" },
                  [
                    _c("b-form-input", {
                      directives: [
                        {
                          name: "mask",
                          rawName: "v-mask",
                          value: ["+# (###) ###-##-##", "+## (###) ###-##-##"],
                          expression:
                            "['+# (###) ###-##-##','+## (###) ###-##-##']"
                        }
                      ],
                      staticClass: "my-1 travel-input",
                      attrs: { placeholder: "Телефон" },
                      on: {
                        blur: function($event) {
                          return _vm.save(
                            _vm.departments,
                            _vm.branch.id,
                            "departments"
                          )
                        }
                      },
                      model: {
                        value: department.phone,
                        callback: function($$v) {
                          _vm.$set(department, "phone", $$v)
                        },
                        expression: "department.phone"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 col-md-4" },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "my-1 mx-auto w-100 btn-travel",
                        staticStyle: { "max-width": "300px" },
                        attrs: { variant: "primary" },
                        on: {
                          click: function($event) {
                            return _vm.removeDepartment(index)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Удалить\n                    "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          }),
          0
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/desktop/pages/admin/Branches/Edit.vue":
/*!************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Branches/Edit.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_e4c14dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=e4c14dc6&scoped=true& */ "./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=template&id=e4c14dc6&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_id_e4c14dc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css& */ "./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_e4c14dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_e4c14dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e4c14dc6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/admin/Branches/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_e4c14dc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=style&index=0&id=e4c14dc6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_e4c14dc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_e4c14dc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_e4c14dc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_e4c14dc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=template&id=e4c14dc6&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=template&id=e4c14dc6&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_e4c14dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=e4c14dc6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/admin/Branches/Edit.vue?vue&type=template&id=e4c14dc6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_e4c14dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_e4c14dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);