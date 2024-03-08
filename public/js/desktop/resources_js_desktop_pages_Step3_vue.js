"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Step3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  computed: {},
  methods: {
    onComplete: function onComplete() {
      // alert('Yay. Done!');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=template&id=0a2a69bb":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=template&id=0a2a69bb ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container p-0 m-auto",
    staticStyle: {
      height: "100vh"
    }
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center m-auto",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("form-wizard", {
    staticStyle: {
      width: "100%"
    },
    attrs: {
      shape: "circle",
      color: "#f08b23",
      stepSize: "sm"
    },
    on: {
      "on-complete": _vm.onComplete
    },
    scopedSlots: _vm._u([{
      key: "custom-buttons-left",
      fn: function fn(props) {
        return [props.activeTabIndex > 0 ? _c("span", {
          staticClass: "backSpan"
        }, [_vm._v("Назад")]) : _vm._e()];
      }
    }, {
      key: "custom-buttons-right",
      fn: function fn(props) {
        return [_c("span", {
          staticClass: "nextSpan"
        }, [_vm._v("Далее")])];
      }
    }, {
      key: "footer",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "wizard-footer-left"
        }, [props.activeTabIndex > 0 ? _c("wizard-button", {
          staticClass: "backButton",
          staticStyle: {
            "background-color": "#f08b23",
            color: "white"
          },
          nativeOn: {
            click: function click($event) {
              return props.prevTab();
            }
          }
        }, [_c("span", {
          staticClass: "icon-keyboard_arrow_left"
        })]) : _vm._e()], 1), _vm._v(" "), _c("div", {
          staticClass: "wizard-footer-right"
        }, [!props.isLastStep ? _c("wizard-button", {
          staticClass: "nextButton wizard-footer-right",
          staticStyle: {
            "background-color": "#f08b23",
            color: "white"
          },
          nativeOn: {
            click: function click($event) {
              return props.nextTab();
            }
          }
        }, [_c("span", {
          staticClass: "icon-keyboard_arrow_right"
        })]) : _vm._e()], 1)];
      }
    }])
  }, [_c("tab-content", {
    attrs: {
      title: "Начало",
      route: "/tour-module/",
      icon: "",
      checkedIcon: "icon-check"
    }
  }), _vm._v(" "), _c("tab-content", {
    attrs: {
      title: "Выбор страны отправления",
      route: "/tour-module/country",
      icon: "",
      checkedIcon: "icon-check"
    }
  }), _vm._v(" "), _c("tab-content", {
    attrs: {
      title: "Подбор тура",
      route: "/tour-module/tour",
      icon: "",
      checkedIcon: "icon-check"
    }
  }), _vm._v(" "), _c("tab-content", {
    attrs: {
      title: "Формирование заявки",
      route: "/tour-module/order",
      icon: "",
      checkedIcon: "icon-check"
    }
  }), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade",
      mode: "out-in"
    }
  }, [_c("router-view")], 1)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade-enter-active, .fade-leave-active {\n    transition: opacity .5s\n}\n.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {\n    opacity: 0\n}\n.title {\n    font-family: 'Bello Pro';\n    color:#85b8e7;\n    cursor: pointer;\n}\n.active {\n    color:#f08b23 !important;\n}\n.switch{\n    transition: all .5s;\n    cursor:pointer;\n}\n.right{\n    transform: rotate(30deg);\n}\n.left{\n    transform: rotate(-108deg);\n}\n.vue-form-wizard .wizard-tab-content {\n    min-height: 100px;\n    padding: 30px 0px 10px;\n}\n@media screen and (min-width: 800px) {\n.backButton {\n        width: 60px !important;\n        height: 60px !important;\n        min-width: 60px !important;\n        display: block !important;\n        border-radius: 50px !important;\n        text-decoration: none !important;\n        font-size: 30px !important;\n        line-height: 50px !important;\n        color: white !important;\n        background: #9df !important;\n        padding: 0px !important;\n        top: 40% !important;\n        /*left: 10px;*/\n        left: 5% !important;\n        position: absolute !important;\n}\n.nextButton {\n        width: 60px !important;\n        height: 60px !important;\n        min-width: 60px !important;\n        display: block !important;\n        border-radius: 50px !important;\n        text-decoration: none !important;\n        font-size: 30px !important;\n        font-weight: 600 !important;\n        line-height: 50px !important;\n        color: white !important;\n        background: #9df !important;\n        padding: 0px !important;\n        top: 40% !important;\n        /* right: 10px;*/\n        right: 5% !important;\n        position: absolute !important;\n}\n.nextButton span {\n        font-size: 45px;\n        top: 4px !important;\n        position: relative;\n}\n.backButton span {\n        font-size: 45px;\n        top: 4px !important;\n        position: relative;\n}\n}\n@media screen and (max-width: 800px) {\n.nextSpan {\n        display: none;\n}\n    /*.nextButton {*/\n    /*    display: inline-block !important;*/\n    /*    margin-bottom: 0 !important;*/\n    /*    font-weight: 400 !important;*/\n    /*    text-align: center !important;*/\n    /*    vertical-align: middle !important;*/\n    /*    -ms-touch-action: manipulation !important;*/\n    /*    touch-action: manipulation !important;*/\n    /*    cursor: pointer !important;*/\n    /*    background-image: none !important;*/\n    /*    border: 1px solid transparent !important;*/\n    /*    border-top-color: transparent !important;*/\n    /*    border-top-width: 1px !important;*/\n    /*    border-right-color: transparent !important;*/\n    /*    border-right-width: 1px !important;*/\n    /*    border-bottom-color: transparent !important;*/\n    /*    border-bottom-width: 1px !important;*/\n    /*    border-left-color: transparent !important;*/\n    /*    border-left-width: 1px !important;*/\n    /*    white-space: nowrap !important;*/\n    /*    padding: 6px 12px !important;*/\n    /*    font-size: 14px !important;*/\n    /*    line-height: 1.42857 !important;*/\n    /*    border-radius: 4px !important;*/\n    /*    background: orange !important;*/\n    /*    color: white;*/\n    /*}*/\n.backSpan {\n        display: none;\n}\n}\n.backButton span {\n    font-size: 45px;\n    top: 0px;\n    position: relative;\n}\n.backSpan{\n    top: 43%;\n    left: 25%;\n    /*left: 30px;*/\n    position: absolute;\n    text-transform: uppercase;\n    font-weight: 600;\n}\n.nextButton span {\n    font-size: 45px;\n    top: 0px;\n    position: relative;\n}\n.nextSpan{\n    top: 43%;\n    /*right: 30px;*/\n    right: 25%;\n    position: absolute;\n    text-transform: uppercase;\n    font-weight: 600;\n}\n#ua {\n    width: 100%;\n    height: 40vh;\n    position: relative;\n    overflow: visible;\n}\n#russia {\n    /*width: 50vw;*/\n    width: 100%;\n    height: 40vh;\n    position: relative;\n    overflow: visible;\n}\nbutton:focus {\n    outline: 0;\n}\nbutton:hover {\n    cursor: pointer;\n}\n.style-two.switch-button.left button.left {\n    color: #fff;\n}\n.style-two.switch-button.left .switch {\n    left: 5%;\n}\n.style-two.switch-button.right button.right {\n    color: #fff;\n}\n.style-two.switch-button.right .switch {\n    left: 55%;\n}\n.style-two.switch-button .switch {\n    transition: all 0.5s;\n    float: left;\n    text-align: center;\n    z-index: 0;\n    background-color: #f08b23;\n    width: 40%;\n    height: 80%;\n    font-weight: 800;\n    position: absolute;\n    top: 10%;\n    border-radius: 100px;\n}\n.style-two.switch-button button {\n    float: left;\n    background-color: transparent !important;\n    color: #f08b23;\n    border: 0;\n    font-size: 1em;\n    padding: 2%;\n    width: 50%;\n    height: 3em;\n    font-weight: 500;\n    z-index: 1;\n    text-align: center;\n    position: relative;\n    transition-delay: 0.2s;\n}\n.style-two.switch-button {\n    position: relative;\n    font-size: 1.2em;\n    overflow: hidden;\n    width: 300px;\n    float: left;\n}\n.style-two.switch-button input {\n    display: none;\n}\n.cont {\n    height: 70vh;\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Step3_vue_vue_type_style_index_0_id_0a2a69bb_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Step3_vue_vue_type_style_index_0_id_0a2a69bb_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Step3_vue_vue_type_style_index_0_id_0a2a69bb_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/pages/Step3.vue":
/*!**********************************************!*\
  !*** ./resources/js/desktop/pages/Step3.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Step3_vue_vue_type_template_id_0a2a69bb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Step3.vue?vue&type=template&id=0a2a69bb */ "./resources/js/desktop/pages/Step3.vue?vue&type=template&id=0a2a69bb");
/* harmony import */ var _Step3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Step3.vue?vue&type=script&lang=js */ "./resources/js/desktop/pages/Step3.vue?vue&type=script&lang=js");
/* harmony import */ var _Step3_vue_vue_type_style_index_0_id_0a2a69bb_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css */ "./resources/js/desktop/pages/Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Step3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Step3_vue_vue_type_template_id_0a2a69bb__WEBPACK_IMPORTED_MODULE_0__.render,
  _Step3_vue_vue_type_template_id_0a2a69bb__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Step3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Step3.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/desktop/pages/Step3.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Step3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Step3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Step3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Step3.vue?vue&type=template&id=0a2a69bb":
/*!****************************************************************************!*\
  !*** ./resources/js/desktop/pages/Step3.vue?vue&type=template&id=0a2a69bb ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Step3_vue_vue_type_template_id_0a2a69bb__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Step3_vue_vue_type_template_id_0a2a69bb__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Step3_vue_vue_type_template_id_0a2a69bb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Step3.vue?vue&type=template&id=0a2a69bb */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=template&id=0a2a69bb");


/***/ }),

/***/ "./resources/js/desktop/pages/Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css":
/*!******************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Step3_vue_vue_type_style_index_0_id_0a2a69bb_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Step3.vue?vue&type=style&index=0&id=0a2a69bb&lang=css");


/***/ })

}]);