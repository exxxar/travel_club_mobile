(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Country",
  data: function data() {
    return {
      // choice: 'Россия',
    };
  },
  mounted: function mounted() {
    // this.$store.dispatch('setUsers')
    // this.$store.commit('setPreloader', false)
    if (!this.tourModule.country) {
      this.$store.dispatch('changeCountry', 'Россия');
    }
  },
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    tourModule: function tourModule() {
      return this.$store.getters.tourModule;
    },
    preloader: function preloader() {
      return this.$store.getters.preloader;
    }
  },
  methods: {
    chooseUkraine: function chooseUkraine() {
      this.$store.dispatch('changeCountry', 'Украина');
    },
    chooseRussia: function chooseRussia() {
      this.$store.dispatch('changeCountry', 'Россия');
    },
    toggleChoice: function toggleChoice() {
      if (this.tourModule.country == 'Россия') {
        // this.tourModule.country = 'Украина'
        this.$store.dispatch('changeCountry', 'Украина');
      } else {
        // this.tourModule.country='Россия'
        this.$store.dispatch('changeCountry', 'Россия');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=template&id=25a88bb2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=template&id=25a88bb2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "cont m-auto"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center justify-content-center country-choice m-auto",
    staticStyle: {
      width: "80%",
      height: "80%"
    }
  }, [_c("div", {
    staticClass: "col-md-5 col-sm-6 col-6 p-0"
  }, [_c("div", {
    staticClass: "row m-auto align-items-center justify-content-center text-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 p-0"
  }, [_vm.tourModule.country == "Украина" ? _c("img", {
    staticStyle: {
      "max-width": "250px",
      width: "90%",
      cursor: "pointer",
      "min-width": "160px"
    },
    attrs: {
      src: "/images/ukraine1.png"
    },
    on: {
      click: _vm.chooseUkraine
    }
  }) : _c("img", {
    staticStyle: {
      "max-width": "250px",
      width: "90%",
      cursor: "pointer",
      "min-width": "160px"
    },
    attrs: {
      src: "/images/ukraine0.png"
    },
    on: {
      click: _vm.chooseUkraine
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 p-0 text-center"
  }, [_c("h1", {
    "class": [_vm.tourModule.country == "Украина" ? "active" : "", "title"],
    on: {
      click: _vm.chooseUkraine
    }
  }, [_vm._v("Украина")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 d-md-block d-none"
  }, [_c("div", {
    staticClass: "row m-auto align-items-center justify-content-center text-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("img", {
    "class": [_vm.tourModule.country == "Украина" ? "left" : "right", "switch"],
    staticStyle: {
      width: "80px",
      height: "80px"
    },
    attrs: {
      src: "/images/plane.png"
    },
    on: {
      click: _vm.toggleChoice
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 col-sm-6 col-6 p-0"
  }, [_c("div", {
    staticClass: "row m-auto align-items-center justify-content-center text-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 p-0"
  }, [_vm.tourModule.country == "Россия" ? _c("img", {
    staticStyle: {
      "max-width": "250px",
      width: "90%",
      cursor: "pointer",
      "min-width": "160px"
    },
    attrs: {
      src: "/images/russia1.png"
    },
    on: {
      click: _vm.chooseRussia
    }
  }) : _c("img", {
    staticStyle: {
      "max-width": "250px",
      width: "90%",
      cursor: "pointer",
      "min-width": "160px"
    },
    attrs: {
      src: "/images/russia0.png"
    },
    on: {
      click: _vm.chooseRussia
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 p-0 text-center"
  }, [_c("h1", {
    "class": [_vm.tourModule.country == "Россия" ? "active" : "", "title"],
    on: {
      click: _vm.chooseRussia
    }
  }, [_vm._v("Россия")])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row m-auto justify-content-center align-items-center",
    staticStyle: {
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 col-md-8 col-sm-12"
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center m-auto travel-card-title-row",
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
  }, [_c("span", [_vm._v("В")]), _vm._v("ыберите страну")]), _vm._v(" "), _c("img", {
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
  }, [_c("span", [_vm._v("отправления")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media screen and (max-width: 576px) {\n.country-choice[data-v-25a88bb2] {\n        width: 100% !important;\n}\n}\n.title-1[data-v-25a88bb2] {\n    position: absolute;\n    z-index: 1;\n    left: 0px;\n    top: 10px;\n    color:#062348;\n    font-family: 'Bello Pro' !important;\n    font-size: 34px;\n}\n.title-1 span[data-v-25a88bb2] {\n    font-size: 40px;\n}\n.title-2[data-v-25a88bb2] {\n    position: absolute;\n    z-index: 1;\n    left: 48px;\n    top: 20px;\n    color:white;\n    font-family: 'Open Sans' !important;\n    font-weight:900;\n    font-size: 24px;\n}\n.title-2 span[data-v-25a88bb2] {\n    text-transform: uppercase;\n}\n.orange-brush[data-v-25a88bb2]{\n    top: 5px;\n    left: 10px;\n    width: 265px;\n}\n.blue-brush[data-v-25a88bb2]{\n    top: 10px;\n    left: -55px;\n    width: 330px;\n    height: 50px;\n    opacity: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css&");

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

/***/ "./resources/js/desktop/pages/TourModule/Country.vue":
/*!***********************************************************!*\
  !*** ./resources/js/desktop/pages/TourModule/Country.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Country_vue_vue_type_template_id_25a88bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Country.vue?vue&type=template&id=25a88bb2&scoped=true& */ "./resources/js/desktop/pages/TourModule/Country.vue?vue&type=template&id=25a88bb2&scoped=true&");
/* harmony import */ var _Country_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Country.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/TourModule/Country.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Country_vue_vue_type_style_index_0_id_25a88bb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css& */ "./resources/js/desktop/pages/TourModule/Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Country_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Country_vue_vue_type_template_id_25a88bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Country_vue_vue_type_template_id_25a88bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "25a88bb2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/TourModule/Country.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/TourModule/Country.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/desktop/pages/TourModule/Country.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Country_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Country.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Country_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/TourModule/Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/TourModule/Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Country_vue_vue_type_style_index_0_id_25a88bb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--8-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=style&index=0&id=25a88bb2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Country_vue_vue_type_style_index_0_id_25a88bb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Country_vue_vue_type_style_index_0_id_25a88bb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Country_vue_vue_type_style_index_0_id_25a88bb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Country_vue_vue_type_style_index_0_id_25a88bb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/TourModule/Country.vue?vue&type=template&id=25a88bb2&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/TourModule/Country.vue?vue&type=template&id=25a88bb2&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Country_vue_vue_type_template_id_25a88bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Country.vue?vue&type=template&id=25a88bb2&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Country.vue?vue&type=template&id=25a88bb2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Country_vue_vue_type_template_id_25a88bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Country_vue_vue_type_template_id_25a88bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);