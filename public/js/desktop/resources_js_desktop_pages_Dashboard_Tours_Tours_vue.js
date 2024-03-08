"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Dashboard_Tours_Tours_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardTour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardTour */ "./resources/js/desktop/pages/Dashboard/Tours/CardTour.vue");
/* harmony import */ var _components_CardList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/CardList */ "./resources/js/desktop/components/CardList.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Tours",
  components: {
    CardTour: _CardTour__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardList: _components_CardList__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      fields: [
      //example of nested object
      // {key: 'test.name', label: 'Test', filterable: true, filter_method:'Object',
      //     filterable_fields: [{text:'Apple', value: "appleIdToken"},{text:'Google', value: "googleIdToken"}]
      // },
      {
        key: 'id',
        label: 'ID',
        searchable: true,
        sortable: true,
        sortable_fields: [{
          text: 'По возрастанию',
          value: 'asc'
        }, {
          text: 'По убыванию',
          value: 'desc'
        }]
      }, {
        key: 'title',
        label: 'Имя',
        searchable: true,
        sortable: true,
        sortable_fields: [{
          text: 'От А до Я',
          value: 'asc'
        }, {
          text: 'От Я до А',
          value: 'desc'
        }]
      }, {
        key: 'created_at',
        label: 'Дата создания',
        searchable: true,
        sortable: true,
        sortable_fields: [{
          text: 'По возрастанию',
          value: 'asc'
        }, {
          text: 'По убыванию',
          value: 'desc'
        }]
      }, {
        key: 'review',
        label: 'Отзыв',
        filterable: true,
        filter_method: 'isNull',
        clearable: true,
        control: 'select',
        filterable_fields: [{
          text: 'Есть отзыв',
          value: "not_null"
        }, {
          text: 'Нет отзыва',
          value: "null"
        }]
      }, {
        key: 'status',
        label: 'Статус',
        filterable: true,
        filter_method: 'ArrayObject',
        multiple: true,
        control: 'select',
        filterable_fields: [{
          text: 'Открыт',
          value: 'open'
        }, {
          text: 'Отменен',
          value: 'canceled'
        }, {
          text: 'Несостоялся',
          value: 'error'
        }, {
          text: 'Закрыт',
          value: 'closed'
        }]
      }

      // {key: 'created_at', label: 'Дата создания', filterable: true, filter_method:'isNull',
      //     filterable_fields: [
      //         {text:'Заблокирован', value: 'not_null'},
      //         {text:'Не заблокирован', value: 'null'}
      //     ]
      // },
      ],

      method_name: 'getTours'
    };
  },
  computed: {
    isLoggedIn: function isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    user: function user() {
      return this.$store.getters.user;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=template&id=7fbd4780&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=template&id=7fbd4780&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isLoggedIn && _vm.user ? _c("div", {
    staticClass: "tc-page container"
  }, [_c("h1", {
    staticClass: "tc-page__title"
  }, [_vm._v("\n            Туры\n        ")]), _vm._v(" "), _c("card-list", {
    staticClass: "tc-wrapper-column tc-gap-column-medium",
    attrs: {
      name: "Tours",
      no_infinite: "",
      fields: _vm.fields,
      current_component: "CardTour"
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn() {
        return [_c("base-button", {
          directives: [{
            name: "role",
            rawName: "v-role",
            value: "manager|admin",
            expression: "'manager|admin'"
          }],
          staticClass: "ms-auto",
          attrs: {
            "data-bs-toggle": "modal",
            "data-bs-target": "#tourModal"
          }
        }, [_vm._v("Создать тур")])];
      },
      proxy: true
    }], null, false, 635225737)
  })], 1) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours/Tours.vue":
/*!**************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours/Tours.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tours_vue_vue_type_template_id_7fbd4780_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tours.vue?vue&type=template&id=7fbd4780&scoped=true */ "./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=template&id=7fbd4780&scoped=true");
/* harmony import */ var _Tours_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tours.vue?vue&type=script&lang=js */ "./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tours_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tours_vue_vue_type_template_id_7fbd4780_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Tours_vue_vue_type_template_id_7fbd4780_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7fbd4780",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Dashboard/Tours/Tours.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tours_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tours.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tours_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=template&id=7fbd4780&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=template&id=7fbd4780&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tours_vue_vue_type_template_id_7fbd4780_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tours_vue_vue_type_template_id_7fbd4780_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tours_vue_vue_type_template_id_7fbd4780_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tours.vue?vue&type=template&id=7fbd4780&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Dashboard/Tours/Tours.vue?vue&type=template&id=7fbd4780&scoped=true");


/***/ })

}]);