"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Client_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dashboard",
  data: function data() {
    return {
      passwords: {
        newPassword: '',
        oldPassword: '',
        submitNewPassword: ''
      },
      passwords_types: {
        newPassword: 'password',
        oldPassword: 'password',
        submitNewPassword: 'password'
      },
      edit_user: {
        email: "",
        middle_name: '',
        first_name: "",
        phone: '',
        last_name: ""
      },
      edit_user_mode: false,
      loading: false,
      password_loading: false,
      edit_password_mode: false,
      grantTypes: [{
        title: 'Email',
        value: 'email'
      }, {
        title: 'Телефон',
        value: 'phone'
      }]
    };
  },
  mounted: function mounted() {
    if (this.isLoggedIn) {
      this.edit_user = JSON.parse(JSON.stringify(this.user));
    }
  },
  computed: {
    user: function user() {
      // return this.$store.getters.auth_user
      return {
        email: "infinitySoul13@gmail.com",
        middle_name: 'Test',
        first_name: "Test",
        phone: '+79490000000',
        last_name: "Test"
      };
    },
    isLoggedIn: function isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    changePassword: function changePassword() {
      var _this = this;
      this.password_loading = true;
      var data = this.passwords;
      this.$store.dispatch('changePassword', data).then(function (resp) {
        _this.password_loading = false;
        _this.$store.dispatch('sendNotification', {
          self: _this,
          message: 'Пароль успешно изменен'
        });
        requestAnimationFrame(function () {
          if (_this.$refs.change_password) {
            _this.$refs.change_password.reset();
          }
        });
        _this.edit_password_mode = false;
        _this.edit_user = JSON.parse(JSON.stringify(_this.user));
        _this.passwords = {
          newPassword: '',
          oldPassword: '',
          submitNewPassword: ''
        };
      })["catch"](function (err) {
        _this.password_loading = false;
        // this.$store.dispatch('sendNotification',
        //     {self: this, message:'Ошибка', type: 'error'})
      });
    },
    save: function save() {
      var _this2 = this;
      this.loading = true;
      this.$store.dispatch('updateAuthUser', this.edit_user).then(function (resp) {
        _this2.loading = false;
        _this2.$store.dispatch('sendNotification', {
          self: _this2,
          message: 'Ваши данные успешно обновлены'
        });
        _this2.cancel();
      })["catch"](function (error) {
        _this2.loading = false;
      });
    },
    cancel: function cancel() {
      this.edit_user_mode = false;
      this.edit_user = JSON.parse(JSON.stringify(this.user));
    },
    switchVisibility: function switchVisibility(type) {
      this.passwords_types[type] = this.passwords_types[type] === "password" ? "text" : "password";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=template&id=288882e8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=template&id=288882e8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "tc-wrapper tc-gap-row-medium tc-profile"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6"
  }, [_c("ValidationObserver", {
    staticClass: "tc-card tc-wrapper-column tc-gap-column-medium",
    attrs: {
      tag: "div"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_c("h3", {
          staticClass: "tc-card__title"
        }, [_vm._v("Ваши данные")]), _vm._v(" "), _c("base-input", {
          attrs: {
            name: "last_name",
            type: "text",
            rules: "required|alpha|min:2",
            label: "фамилия",
            placeholder: "Иванов",
            disabled: !_vm.edit_user_mode,
            no_group_item: ""
          },
          model: {
            value: _vm.edit_user.last_name,
            callback: function callback($$v) {
              _vm.$set(_vm.edit_user, "last_name", $$v);
            },
            expression: "edit_user.last_name"
          }
        }), _vm._v(" "), _c("base-input", {
          attrs: {
            name: "first_name",
            type: "text",
            rules: "required|alpha|min:2",
            label: "имя",
            placeholder: "Иван",
            disabled: !_vm.edit_user_mode,
            no_group_item: ""
          },
          model: {
            value: _vm.edit_user.first_name,
            callback: function callback($$v) {
              _vm.$set(_vm.edit_user, "first_name", $$v);
            },
            expression: "edit_user.first_name"
          }
        }), _vm._v(" "), _c("base-input", {
          attrs: {
            name: "middle_name",
            type: "text",
            rules: "alpha|min:2",
            label: "отчество",
            placeholder: "Петрович",
            disabled: !_vm.edit_user_mode,
            no_group_item: ""
          },
          model: {
            value: _vm.edit_user.middle_name,
            callback: function callback($$v) {
              _vm.$set(_vm.edit_user, "middle_name", $$v);
            },
            expression: "edit_user.middle_name"
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "tc-wrapper-between"
        }, [_vm.edit_user_mode ? _c("button", {
          staticClass: "tc-button tc-button_delete",
          attrs: {
            type: "button",
            disabled: _vm.loading
          },
          on: {
            click: _vm.cancel
          }
        }, [_vm._v("\n                    Отмена\n                ")]) : _vm._e(), _vm._v(" "), _vm.edit_user_mode ? _c("button", {
          staticClass: "tc-button tc-button_save",
          attrs: {
            type: "button",
            disabled: invalid || _vm.loading
          },
          on: {
            click: _vm.save
          }
        }, [_vm.loading ? _c("span", {
          staticClass: "spinner-border spinner-border-sm",
          attrs: {
            role: "status"
          }
        }) : _vm._e(), _vm._v("\n                    Сохранить\n                ")]) : _vm._e(), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !_vm.edit_user_mode,
            expression: "!edit_user_mode"
          }],
          staticClass: "tc-button ml-auto tc-button_save",
          attrs: {
            type: "button",
            disabled: _vm.loading
          },
          on: {
            click: function click($event) {
              _vm.edit_user_mode = true;
            }
          }
        }, [_vm._v("\n                    Редактировать\n                ")])])];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-6"
  }, [_c("ValidationObserver", {
    ref: "change_password",
    staticClass: "tc-card tc-wrapper-column tc-gap-column-medium",
    attrs: {
      tag: "div"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref2) {
        var invalid = _ref2.invalid;
        return [_c("h3", {
          staticClass: "tc-card__title"
        }, [_vm._v("Смена пароля")]), _vm._v(" "), _c("base-input", {
          attrs: {
            name: "old_password",
            type: _vm.passwords_types.oldPassword,
            label: "старый пароль",
            rules: "required|min:8",
            group_item_action: ""
          },
          on: {
            "click-group-item": function clickGroupItem($event) {
              return _vm.switchVisibility("oldPassword");
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function fn() {
              return [_c("base-icon", {
                attrs: {
                  name: _vm.passwords_types.oldPassword === "password" ? "Eye" : "EyeSlash",
                  color: "secondary"
                }
              })];
            },
            proxy: true
          }], null, true),
          model: {
            value: _vm.passwords.oldPassword,
            callback: function callback($$v) {
              _vm.$set(_vm.passwords, "oldPassword", $$v);
            },
            expression: "passwords.oldPassword"
          }
        }), _vm._v(" "), _c("base-input", {
          attrs: {
            name: "password",
            type: _vm.passwords_types.newPassword,
            label: "новый пароль",
            rules: "required|min:8",
            group_item_action: ""
          },
          on: {
            "click-group-item": function clickGroupItem($event) {
              return _vm.switchVisibility("newPassword");
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function fn() {
              return [_c("base-icon", {
                attrs: {
                  name: _vm.passwords_types.newPassword === "password" ? "Eye" : "EyeSlash",
                  color: "secondary"
                }
              })];
            },
            proxy: true
          }], null, true),
          model: {
            value: _vm.passwords.newPassword,
            callback: function callback($$v) {
              _vm.$set(_vm.passwords, "newPassword", $$v);
            },
            expression: "passwords.newPassword"
          }
        }), _vm._v(" "), _c("base-input", {
          attrs: {
            name: "confirmation",
            type: _vm.passwords_types.submitNewPassword,
            label: "повторите новый пароль",
            rules: "required|min:8|confirmed:password",
            group_item_action: ""
          },
          on: {
            "click-group-item": function clickGroupItem($event) {
              return _vm.switchVisibility("submitNewPassword");
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function fn() {
              return [_c("base-icon", {
                attrs: {
                  name: _vm.passwords_types.submitNewPassword === "password" ? "Eye" : "EyeSlash",
                  color: "secondary"
                }
              })];
            },
            proxy: true
          }], null, true),
          model: {
            value: _vm.passwords.submitNewPassword,
            callback: function callback($$v) {
              _vm.$set(_vm.passwords, "submitNewPassword", $$v);
            },
            expression: "passwords.submitNewPassword"
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "tc-card__footer tc-wrapper-between"
        }, [_c("button", {
          staticClass: "tc-button tc-button_save ml-auto",
          attrs: {
            type: "button",
            disabled: invalid
          },
          on: {
            click: _vm.changePassword
          }
        }, [_vm._v("\n                    Сохранить\n                ")])])];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "tc-card"
  }, [_c("div", {
    staticClass: "tc-wrapper"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-4 px-0"
  }, [_c("div", {
    staticClass: "ml-auto tc-wrapper tc-gap-small justify-content-end"
  }, [_c("div", {
    staticClass: "tc-badge tc-bg-purple-lighter tc-text-purple",
    attrs: {
      title: "кол-во документов:"
    }
  }, [_vm._v("\n                            0\n                            "), _c("base-icon", {
    staticClass: "m-0",
    attrs: {
      name: "File",
      color: "purple"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "tc-badge tc-bg-blue-lighter",
    attrs: {
      title: "есть отзыв"
    }
  }, [_c("base-icon", {
    staticClass: "m-0",
    attrs: {
      name: "Pencil",
      color: "blue"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "tc-badge tc-bg-green-lighter tc-text-green",
    attrs: {
      title: "статус"
    }
  }, [_vm._v("Status")])])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("h6", {
    staticClass: "tc-card__subtitle"
  }, [_vm._v("Дата")]), _vm._v(" "), _c("p", {
    staticClass: "tc-card__text"
  }, [_vm._v("\n                description\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "tc-wrapper justify-content-end"
  }, [_c("base-button", [_vm._v("Подробнее")])], 1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-8 px-0"
  }, [_c("h4", {
    staticClass: "tc-card__title"
  }, [_vm._v("Тур №")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "tc-card__subtitle"
  }, [_vm._v("Страна "), _c("span", {
    staticClass: "tc-circle"
  }), _vm._v(" Город")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/desktop/pages/Client/Dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Dashboard.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_288882e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=288882e8&scoped=true& */ "./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=template&id=288882e8&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_288882e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_288882e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "288882e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Client/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=template&id=288882e8&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=template&id=288882e8&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_288882e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_288882e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_288882e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=288882e8&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Client/Dashboard.vue?vue&type=template&id=288882e8&scoped=true&");


/***/ })

}]);