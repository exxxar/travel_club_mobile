(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "End",
  mounted: function mounted() {
    if (this.avia_steps.step3 == false) {
      this.$router.push('/avia-module');
    }
    this.$store.dispatch('changeAviaSteps', {
      key: 'step1',
      value: false
    });
    this.$store.dispatch('changeAviaSteps', {
      key: 'step2',
      value: false
    });
  },
  computed: {
    avia_steps: function avia_steps() {
      return this.$store.getters.avia_steps;
    }
  },
  methods: {
    newOrder: function newOrder() {
      this.$store.dispatch('changeAviaSteps', {
        key: 'step3',
        value: false
      });
      this.$router.push('/avia-module');
    },
    toHome: function toHome() {
      this.$store.dispatch('changeAviaSteps', {
        key: 'step3',
        value: false
      });
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=template&id=1b06761c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=template&id=1b06761c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "start-form mt-5"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "section"
  }, [_c("button", {
    staticClass: "btn btn-block btn-lg mt-3",
    on: {
      click: _vm.newOrder
    }
  }, [_vm._v("Новая заявка")])]), _vm._v(" "), _c("div", {
    staticClass: "section"
  }, [_c("button", {
    staticClass: "btn btn-block btn-lg mt-3",
    staticStyle: {
      background: "#f08b23"
    },
    on: {
      click: _vm.toHome
    }
  }, [_vm._v("На главную")])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section"
  }, [_c("img", {
    staticClass: "form-image",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      src: "/images/5.png"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "row m-auto justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-7 p-0"
  }, [_c("div", {
    staticClass: "row mr-auto ml-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_vm._v("Заявка")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7 p-0"
  }, [_c("div", {
    staticClass: "row ml-auto mr-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-2"
  }, [_c("span", [_vm._v("отправлена")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "row m-auto justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("p", {
    staticStyle: {
      color: "#0f213d",
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Пожалуйста, ожидайте, наши менеджеры скоро с Вами свяжутся")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.start-form[data-v-1b06761c] {\n    max-width: 500px;\n    margin: auto;\n    margin-top: auto;\n    /*text-align: center;*/\n}\n.section[data-v-1b06761c] {\n    padding: 0 16px;\n}\n.start-form p[data-v-1b06761c] {\n    font-style: italic;\n    font-size: 12px;\n}\n.form-button-group[data-v-1b06761c] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    padding-left: 16px;\n    padding-right: 16px;\n    background: #FFF;\n    max-height: 56px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: env(safe-area-inset-bottom);\n}\n.btn[data-v-1b06761c] {\n    background: #0f213d;\n    color: white;\n    text-transform: uppercase;\n    font-size: 24px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    border: 0;\n    border-radius: 50px;\n    outline: none;\n}\n.btn[data-v-1b06761c]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.title-1[data-v-1b06761c] {\n    position: absolute;\n    z-index: 1;\n    left: 50px;\n    top: 10px;\n    color:#062348;\n    font-family: 'Bello Pro' !important;\n    font-size: 35px;\n}\n.title-1 span[data-v-1b06761c] {\n    font-size: 40px;\n}\n.title-2[data-v-1b06761c] {\n    position: absolute;\n    z-index: 1;\n    left: 52px;\n    top: 18px;\n    color:white;\n    font-family: 'Open Sans' !important;\n    font-weight:900;\n    font-size: 25px;\n}\n.title-2 span[data-v-1b06761c] {\n    text-transform: uppercase;\n}\n.orange-brush[data-v-1b06761c]{\n    top: 5px;\n    left: 10px;\n    width: 265px;\n}\n.blue-brush[data-v-1b06761c]{\n    top: 10px;\n    left: -55px;\n    width: 330px;\n    height: 50px;\n    opacity: 1;\n}\n.form-image[data-v-1b06761c] {\n    width: 100%;\n    /*max-width: 200px;*/\n    height: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--8-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css&");

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

/***/ "./resources/js/desktop/mobile/pages/AviaModule/End.vue":
/*!**************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/AviaModule/End.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _End_vue_vue_type_template_id_1b06761c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./End.vue?vue&type=template&id=1b06761c&scoped=true& */ "./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=template&id=1b06761c&scoped=true&");
/* harmony import */ var _End_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./End.vue?vue&type=script&lang=js& */ "./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _End_vue_vue_type_style_index_0_id_1b06761c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css& */ "./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _End_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _End_vue_vue_type_template_id_1b06761c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _End_vue_vue_type_template_id_1b06761c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b06761c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/mobile/pages/AviaModule/End.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_End_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./End.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_End_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_End_vue_vue_type_style_index_0_id_1b06761c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--8-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=style&index=0&id=1b06761c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_End_vue_vue_type_style_index_0_id_1b06761c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_End_vue_vue_type_style_index_0_id_1b06761c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_End_vue_vue_type_style_index_0_id_1b06761c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_End_vue_vue_type_style_index_0_id_1b06761c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=template&id=1b06761c&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=template&id=1b06761c&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_End_vue_vue_type_template_id_1b06761c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./End.vue?vue&type=template&id=1b06761c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/AviaModule/End.vue?vue&type=template&id=1b06761c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_End_vue_vue_type_template_id_1b06761c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_End_vue_vue_type_template_id_1b06761c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);