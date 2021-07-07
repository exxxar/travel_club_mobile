(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      email: null,
      has_error: false,
      loading: false
    };
  },
  methods: {
    requestResetPassword: function requestResetPassword() {
      var _this = this;

      this.loading = true;
      this.$http.post("/auth/reset-password", {
        email: this.email
      }).then(function (result) {
        _this.response = result.data;
        _this.loading = false;
        console.log(result.data);

        _this.sendMessage(result.data.message);
      }, function (error) {
        _this.loading = false;
        console.error(error);
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-visibility[data-v-6d0d863a]{\n    position: absolute;\n    background: transparent;\n    border: none;\n    outline: none!important;\n    color: #063065;\n    font-size: 20px;\n}\n.card-signin[data-v-6d0d863a] {\n    border: 0;\n    border-radius: 1rem;\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n}\n.card-signin .card-title[data-v-6d0d863a] {\n    margin-bottom: 2rem;\n    font-weight: 300;\n    font-size: 1.5rem;\n}\n.card-signin .card-body[data-v-6d0d863a] {\n    padding: 2rem;\n}\n.form-signin[data-v-6d0d863a] {\n    width: 100%;\n}\n.form-signin .btn[data-v-6d0d863a] {\n    font-size: 80%;\n    border-radius: 5rem;\n    letter-spacing: .1rem;\n    font-weight: bold;\n    padding: 1rem;\n    transition: all 0.2s;\n}\n.form-label-group[data-v-6d0d863a] {\n    position: relative;\n    margin-bottom: 1rem;\n}\n.form-label-group input[data-v-6d0d863a] {\n    height: auto;\n    border-radius: 2rem;\n}\n.form-label-group>input[data-v-6d0d863a],\n.form-label-group>label[data-v-6d0d863a] {\n    padding: var(--input-padding-y) var(--input-padding-x);\n}\n.form-label-group>label[data-v-6d0d863a] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    margin-bottom: 0;\n    /* Override default `<label>` margin */\n    line-height: 1.5;\n    color: #495057;\n    border: 1px solid transparent;\n    border-radius: .25rem;\n    transition: all .1s ease-in-out;\n}\n.form-label-group input[data-v-6d0d863a]:-ms-input-placeholder {\n    color: transparent;\n}\n.form-label-group input[data-v-6d0d863a]::-moz-placeholder {\n    color: transparent;\n}\n.form-label-group input[data-v-6d0d863a]::placeholder {\n    color: transparent;\n}\n.form-label-group input[data-v-6d0d863a]:not(:-moz-placeholder-shown) {\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n    padding-bottom: calc(var(--input-padding-y) / 3);\n}\n.form-label-group input[data-v-6d0d863a]:not(:-ms-input-placeholder) {\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n    padding-bottom: calc(var(--input-padding-y) / 3);\n}\n.form-label-group input[data-v-6d0d863a]:not(:placeholder-shown) {\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n    padding-bottom: calc(var(--input-padding-y) / 3);\n}\n.form-label-group input:not(:-moz-placeholder-shown)~label[data-v-6d0d863a] {\n    padding-top: calc(var(--input-padding-y) / 3);\n    padding-bottom: calc(var(--input-padding-y) / 3);\n    font-size: 12px;\n    color: #777;\n}\n.form-label-group input:not(:-ms-input-placeholder)~label[data-v-6d0d863a] {\n    padding-top: calc(var(--input-padding-y) / 3);\n    padding-bottom: calc(var(--input-padding-y) / 3);\n    font-size: 12px;\n    color: #777;\n}\n.form-label-group input:not(:placeholder-shown)~label[data-v-6d0d863a] {\n    padding-top: calc(var(--input-padding-y) / 3);\n    padding-bottom: calc(var(--input-padding-y) / 3);\n    font-size: 12px;\n    color: #777;\n}\n\n\n/* Fallback for Edge\n-------------------------------------------------- */\n@supports (-ms-ime-align: auto) {\n.form-label-group>label[data-v-6d0d863a] {\n        display: none;\n}\n.form-label-group input[data-v-6d0d863a]::-ms-input-placeholder {\n        color: #777;\n}\n}\n\n/* Fallback for IE\n-------------------------------------------------- */\n@media all and (-ms-high-contrast: none),\n(-ms-high-contrast: active) {\n.form-label-group>label[data-v-6d0d863a] {\n        display: none;\n}\n.form-label-group input[data-v-6d0d863a]:-ms-input-placeholder {\n        color: #777;\n}\n}\n.title-1[data-v-6d0d863a] {\n    position: absolute;\n    z-index: 1;\n    left: 50px;\n    top: 10px;\n    color:#062348;\n    font-family: 'Bello Pro' !important;\n    font-size: 30px;\n}\n.title-1 span[data-v-6d0d863a] {\n    font-size: 40px;\n}\n.title-2[data-v-6d0d863a] {\n    position: absolute;\n    z-index: 1;\n    left: 70px;\n    top: 22px;\n    color: white;\n    font-family: 'Open Sans' !important;\n    font-weight: 900;\n    font-size: 20px;\n}\n.title-2 span[data-v-6d0d863a] {\n    text-transform: uppercase;\n}\n.orange-brush[data-v-6d0d863a] {\n    top: 2px;\n    left: 10px;\n    width: 283px;\n    height: 60px;\n}\n.blue-brush[data-v-6d0d863a]{\n    top: 10px;\n    left: -55px;\n    width: 330px;\n    height: 50px;\n    opacity: 1;\n}\n.multiselect-title[data-v-6d0d863a] {\n    color: #062348 !important;\n    font-family: \"Bello Pro\";\n    /*font-weight: 700;*/\n}\n.multiselect__tags[data-v-6d0d863a] {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tags .travel-text-control[data-v-6d0d863a]{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .travel-text-control[data-v-6d0d863a]:focus{\n    outline: none!important;\n    box-shadow: none !important;\n}\n.validate-error[data-v-6d0d863a]{\n    display: block !important;\n    height: 17px;\n}\n.btn[data-v-6d0d863a] {\n    background: #0f213d;\n    color: white;\n    text-transform: uppercase;\n    font-size: 24px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    border: 0;\n    border-radius: 50px;\n    outline: none;\n}\n.btn[data-v-6d0d863a]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.btn-travel[data-v-6d0d863a] {\n    border-radius: 50px;\n    background: #f08b23;\n    color: white;\n    text-transform: uppercase;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    font-size: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=template&id=6d0d863a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=template&id=6d0d863a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { width: "100%", height: "100vh", background: "#f08b23" } },
    [
      _c(
        "div",
        {
          staticClass: "row m-auto justify-content-center align-items-center",
          staticStyle: {
            width: "100%",
            "min-height": "100%",
            background: "#f08b23"
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "row m-auto justify-content-center align-items-center",
              staticStyle: {
                width: "100%",
                height: "100%",
                background: "#f08b23"
              }
            },
            [
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-9 col-md-7 col-lg-5 mx-auto" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card card-signin mb-5",
                          staticStyle: { "margin-top": "70px" }
                        },
                        [
                          _c("div", { staticClass: "card-body" }, [
                            _vm._m(0),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-signin" },
                              [
                                _c(
                                  "p",
                                  {
                                    staticStyle: {
                                      "font-family": "'Open Sans'",
                                      "font-weight": "700",
                                      "font-style": "italic",
                                      "text-align": "center",
                                      color: "#0d274b",
                                      "font-size": "12px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Введите Ваш email. На него придёт письмо с ссылкой, перейдя по которой вы сможете поменять пароль "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("ValidationObserver", {
                                  scopedSlots: _vm._u([
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var invalid = ref.invalid
                                        return [
                                          _c(
                                            "form",
                                            {
                                              attrs: {
                                                autocomplete: "off",
                                                method: "post"
                                              },
                                              on: {
                                                submit: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.requestResetPassword(
                                                    $event
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-label-group"
                                                    },
                                                    [
                                                      _c(
                                                        "h4",
                                                        {
                                                          staticClass:
                                                            "multiselect-title"
                                                        },
                                                        [_vm._v("Email")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("ValidationProvider", {
                                                        staticStyle: {
                                                          width: "100%",
                                                          "text-align":
                                                            "center",
                                                          "margin-bottom":
                                                            "17px"
                                                        },
                                                        attrs: {
                                                          name: "email",
                                                          rules: "required"
                                                        },
                                                        scopedSlots: _vm._u(
                                                          [
                                                            {
                                                              key: "default",
                                                              fn: function(
                                                                ref
                                                              ) {
                                                                var errors =
                                                                  ref.errors
                                                                return [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "row multiselect__tags align-items-center justify-content-center m-auto",
                                                                      staticStyle: {
                                                                        width:
                                                                          "100%",
                                                                        height:
                                                                          "100%"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "input",
                                                                        {
                                                                          directives: [
                                                                            {
                                                                              name:
                                                                                "model",
                                                                              rawName:
                                                                                "v-model",
                                                                              value:
                                                                                _vm.email,
                                                                              expression:
                                                                                "email"
                                                                            }
                                                                          ],
                                                                          staticClass:
                                                                            "multiselect__input travel-text-control form-control",
                                                                          attrs: {
                                                                            type:
                                                                              "text",
                                                                            placeholder:
                                                                              "Email"
                                                                          },
                                                                          domProps: {
                                                                            value:
                                                                              _vm.email
                                                                          },
                                                                          on: {
                                                                            input: function(
                                                                              $event
                                                                            ) {
                                                                              if (
                                                                                $event
                                                                                  .target
                                                                                  .composing
                                                                              ) {
                                                                                return
                                                                              }
                                                                              _vm.email =
                                                                                $event.target.value
                                                                            }
                                                                          }
                                                                        }
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "validate-error"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          errors[0]
                                                                        )
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
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-lg btn-travel btn-block text-uppercase mt-3",
                                                  attrs: {
                                                    type: "submit",
                                                    disabled:
                                                      invalid || _vm.loading
                                                  }
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
                                                              "aria-hidden":
                                                                "true"
                                                            }
                                                          })
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _vm.loading
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "sr-only"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Loading..."
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(
                                                        "\n                                                        Отправить\n                                                    "
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
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row m-auto justify-content-center align-items-center",
        staticStyle: { width: "100%", height: "100%" }
      },
      [
        _c("div", { staticClass: "col-12 col-md-12 col-sm-12 p-0" }, [
          _c(
            "div",
            {
              staticClass:
                "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
              staticStyle: { height: "100px", width: "100%" }
            },
            [
              _c("div", { staticClass: "col-md-10 p-0" }, [
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
                      _c("span", [_vm._v(" З")]),
                      _vm._v("абыли")
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
              _c("div", { staticClass: "col-md-7 p-0" }, [
                _c(
                  "div",
                  {
                    staticClass: "row ml-auto mr-0 my-auto travel-card-title",
                    staticStyle: {
                      position: "relative",
                      height: "50px",
                      width: "280px"
                    }
                  },
                  [
                    _c("h1", { staticClass: "title-2" }, [
                      _c("span", [_vm._v("свой пароль ? ")])
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/desktop/pages/ForgotPassword.vue":
/*!*******************************************************!*\
  !*** ./resources/js/desktop/pages/ForgotPassword.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_6d0d863a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=6d0d863a&scoped=true& */ "./resources/js/desktop/pages/ForgotPassword.vue?vue&type=template&id=6d0d863a&scoped=true&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ForgotPassword_vue_vue_type_style_index_0_id_6d0d863a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css& */ "./resources/js/desktop/pages/ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_6d0d863a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPassword_vue_vue_type_template_id_6d0d863a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d0d863a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/ForgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/ForgotPassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/desktop/pages/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_6d0d863a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=style&index=0&id=6d0d863a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_6d0d863a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_6d0d863a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_6d0d863a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_6d0d863a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/ForgotPassword.vue?vue&type=template&id=6d0d863a&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/ForgotPassword.vue?vue&type=template&id=6d0d863a&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_6d0d863a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=6d0d863a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/ForgotPassword.vue?vue&type=template&id=6d0d863a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_6d0d863a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_6d0d863a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);