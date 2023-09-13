"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_mobile_pages_Manager_Clients_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Clients",
  data: function data() {
    return {
      columns: [{
        label: 'ID',
        field: 'id'
      }, {
        label: 'Имя',
        field: 'info.FullName'
      },
      // {
      //     label: 'Логин',
      //     field: 'login',
      // },
      {
        label: 'Email',
        field: 'email'
      }, {
        label: 'Телефон',
        field: 'info.Phone'
      }],
      window: {
        width: 0,
        height: 0
      },
      manager: null,
      countItems: 3,
      newClient: {
        email: '',
        role: 'client',
        is_admin: 0,
        is_manager: 0,
        FullName: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        // name: '',
        Phone: '',
        ManagerId: '',
        City: '',
        Department: ''
        // email: '',
        // password: '',
      },

      load: true,
      loading: false
    };
  },
  created: function created() {
    if (this.managers.length === 0) {
      this.$store.dispatch('setManagers');
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.load = true;
    if (this.clients.length === 0) {
      this.$store.dispatch('setClients').then(function (response) {
        _this.load = false;
      });
    }
    console.log(this.managers);
  },
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    clients: function clients() {
      return this.$store.getters.clients;
    },
    managers: function managers() {
      return this.$store.getters.managers;
    },
    preloader: function preloader() {
      return this.$store.getters.preloader;
    }
  },
  methods: {
    addClient: function addClient() {
      $('#newClientModalBox').modal('show');
    },
    saveClient: function saveClient() {
      var _this2 = this;
      this.loading = true;
      this.newClient.FullName = this.newClient.LastName + ' ' + this.newClient.FirstName + ' ' + this.newClient.MiddleName;
      this.newClient.ManagerId = this.manager.id;
      console.log(this.newClient);
      this.$store.dispatch('newClient', this.newClient).then(function (response) {
        _this2.sendMessage('Клиент успешно сохранён');
        _this2.loading = false;
        $('#newClientModalBox').modal('hide');
      });
    },
    editClient: function editClient(id) {
      this.sendMessage('Клиент успешно обнавлён');
    },
    deleteClient: function deleteClient(row) {
      var _this3 = this;
      row.isLoading = true;
      this.$store.dispatch('deleteClient', row.id).then(function (response) {
        row.isLoading = false;
        _this3.sendMessage('Клиент успешно удалён');
      });
    },
    seeClientProfile: function seeClientProfile(id) {
      this.$router.push('/manager/client-profile/' + id);
    },
    onRowClick: function onRowClick(row) {
      this.$router.push('/manager/client-profile/' + row.id);
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Сообщение от TravelClub',
        text: message
      });
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_0__.mask
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=template&id=23561d7f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=template&id=23561d7f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "row m-auto mb-4 px-4 justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    },
    attrs: {
      id: "mobile-table"
    }
  }, [_c("div", {
    staticClass: "modal fade modalbox show",
    attrs: {
      id: "newClientModalBox",
      "data-backdrop": "static",
      tabindex: "-1",
      role: "dialog",
      "aria-modal": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "start-form",
    staticStyle: {
      "margin-bottom": "110px"
    }
  }, [_c("div", {
    staticClass: "section mx-auto"
  }, [_c("div", {
    staticClass: "row my-3"
  }, [_c("ValidationObserver", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_c("div", {
          staticClass: "col-12"
        }, [_c("div", {
          staticClass: "row w-100 m-auto"
        }, [_c("div", {
          staticClass: "col-md-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "email",
            rules: "required|email"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref2) {
              var errors = _ref2.errors;
              return [_c("base-input", {
                staticClass: "mb-0",
                attrs: {
                  label: "Email",
                  placeholder: "Email"
                },
                model: {
                  value: _vm.newClient.email,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newClient, "email", $$v);
                  },
                  expression: "newClient.email"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "lastName",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref3) {
              var errors = _ref3.errors;
              return [_c("base-input", {
                staticClass: "mb-0",
                attrs: {
                  label: "Фамилия",
                  placeholder: "Фамилия"
                },
                model: {
                  value: _vm.newClient.LastName,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newClient, "LastName", $$v);
                  },
                  expression: "newClient.LastName"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "firstName",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref4) {
              var errors = _ref4.errors;
              return [_c("base-input", {
                staticClass: "mb-0",
                attrs: {
                  label: "Имя",
                  placeholder: "Имя"
                },
                model: {
                  value: _vm.newClient.FirstName,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newClient, "FirstName", $$v);
                  },
                  expression: "newClient.FirstName"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("base-input", {
          staticClass: "mb-0",
          attrs: {
            label: "Отчество",
            placeholder: "Отчество"
          },
          model: {
            value: _vm.newClient.MiddleName,
            callback: function callback($$v) {
              _vm.$set(_vm.newClient, "MiddleName", $$v);
            },
            expression: "newClient.MiddleName"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "phone",
            rules: "required|phone"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref5) {
              var errors = _ref5.errors;
              return [_c("base-input", {
                directives: [{
                  name: "mask",
                  rawName: "v-mask",
                  value: ["+# (###) ###-##-##", "+## (###) ###-##-##"],
                  expression: "['+# (###) ###-##-##','+## (###) ###-##-##']"
                }],
                staticClass: "mb-0",
                attrs: {
                  label: "Телефон",
                  placeholder: "Телефон"
                },
                model: {
                  value: _vm.newClient.Phone,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newClient, "Phone", $$v);
                  },
                  expression: "newClient.Phone"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12 pr-md-1"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "City",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref6) {
              var errors = _ref6.errors;
              return [_c("div", {
                staticClass: "form-group mb-0"
              }, [_c("label", {
                staticClass: "control-label"
              }, [_vm._v("Город")]), _vm._v(" "), _c("multiselect", {
                attrs: {
                  options: _vm.branches,
                  "option-height": 25,
                  placeholder: "Выберите город",
                  "show-labels": false,
                  maxHeight: 200,
                  loading: _vm.branches.length === 0,
                  disabled: _vm.branches.length === 0,
                  "allow-empty": false,
                  "track-by": "city",
                  label: "city"
                },
                scopedSlots: _vm._u([{
                  key: "singleLabel",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [props.option.city ? _c("span", {
                      staticClass: "option__title",
                      staticStyle: {
                        "font-size": "0.7500000025rem",
                        "line-height": "1.428571"
                      }
                    }, [_vm._v(_vm._s(props.option.city))]) : _vm._e()])];
                  }
                }, {
                  key: "option",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title",
                      staticStyle: {
                        "font-size": "0.7500000025rem",
                        "line-height": "1.428571"
                      }
                    }, [_vm._v(_vm._s(props.option.city))])])];
                  }
                }], null, true),
                model: {
                  value: _vm.newClient.City,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newClient, "City", $$v);
                  },
                  expression: "newClient.City"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12 px-md-1"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "department",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref7) {
              var errors = _ref7.errors;
              return [_c("label", {
                staticClass: "control-label"
              }, [_vm._v("Отделение")]), _vm._v(" "), _c("multiselect", {
                attrs: {
                  options: _vm.newClient.City.departments,
                  "option-height": 25,
                  placeholder: "Выберите отделение",
                  "show-labels": false,
                  maxHeight: 200,
                  loading: _vm.newClient.City.departments.length === 0,
                  disabled: _vm.newClient.City.departments.length === 0,
                  "allow-empty": false,
                  label: "address",
                  "track-by": "address"
                },
                scopedSlots: _vm._u([{
                  key: "singleLabel",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title",
                      staticStyle: {
                        "font-size": "0.7500000025rem",
                        "line-height": "1.428571"
                      }
                    }, [_vm._v(_vm._s(props.option.address))])])];
                  }
                }, {
                  key: "option",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title",
                      staticStyle: {
                        "font-size": "0.7500000025rem",
                        "line-height": "1.428571"
                      }
                    }, [_vm._v(_vm._s(props.option.address))])])];
                  }
                }], null, true),
                model: {
                  value: _vm.newClient.Department,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newClient, "Department", $$v);
                  },
                  expression: "newClient.Department"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "control-label"
        }, [_vm._v("\n                                                        Менеджер\n                                                    ")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "manager",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref8) {
              var errors = _ref8.errors;
              return [_c("multiselect", {
                attrs: {
                  options: _vm.managers,
                  "option-height": 25,
                  placeholder: "Выберите менеджера",
                  "show-labels": false,
                  maxHeight: 200,
                  label: "info",
                  "track-by": "id",
                  loading: _vm.managers.length <= 0,
                  disabled: _vm.managers.length <= 0,
                  "allow-empty": false
                },
                scopedSlots: _vm._u([{
                  key: "singleLabel",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.info.FullName))])])];
                  }
                }, {
                  key: "option",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.info.FullName))])])];
                  }
                }], null, true),
                model: {
                  value: _vm.manager,
                  callback: function callback($$v) {
                    _vm.manager = $$v;
                  },
                  expression: "manager"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)])]), _vm._v(" "), _c("div", {
          staticClass: "col-12"
        }, [_c("div", {
          staticClass: "row w-100 m-auto"
        }, [_c("p", [_vm._v("Пароль для входа в систему созданного пользователя: "), _c("span", {
          staticStyle: {
            "font-weight": "700",
            color: "#f8a105"
          }
        }, [_vm._v("TravelClub")])])])]), _vm._v(" "), _c("div", {
          staticClass: "col-12 contact-btn form-button-group"
        }, [_c("button", {
          staticClass: "btn btn-block btn-lg",
          staticStyle: {
            width: "100%"
          },
          attrs: {
            type: "submit",
            disabled: invalid || _vm.loading
          },
          on: {
            click: _vm.saveClient
          }
        }, [_c("div", {
          staticClass: "row align-items-center justify-content-center m-auto w-100 h-100 text-center"
        }, [_vm.loading ? _c("span", {
          staticClass: "spinner-border spinner-border-sm mx-2",
          attrs: {
            role: "status",
            "aria-hidden": "true"
          }
        }) : _vm._e(), _vm._v(" "), _vm.loading ? _c("span", {
          staticClass: "sr-only"
        }, [_vm._v("Loading...")]) : _vm._e(), _vm._v("\n                                                    Сохранить\n                                                ")])])])];
      }
    }])
  })], 1)])])])])])]), _vm._v(" "), _c("data-table", {
    attrs: {
      title: "Клиенты",
      columns: _vm.columns,
      rows: _vm.clients,
      clickable: true,
      perPage: [5, 10, 25, 50],
      expandMode: false,
      addButton: true,
      addButtonClick: _vm.addClient,
      loadingAnimation: _vm.load
    },
    scopedSlots: _vm._u([{
      key: "tbody-tr",
      fn: function fn(props) {
        return [_c("td", {
          attrs: {
            "data-title": "Действия"
          }
        }, [!props.row.isLoading ? _c("button", {
          staticClass: "btn waves-effect",
          staticStyle: {
            outline: "none"
          },
          on: {
            click: function click($event) {
              return _vm.deleteClient(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "material-icons",
          staticStyle: {
            color: "#0d274b"
          }
        }, [_vm._v("delete")])]) : _vm._e(), _vm._v(" "), props.row.isLoading ? _c("div", {
          staticClass: "d-flex align-items-center float-left",
          staticStyle: {
            padding: ".375rem .75rem"
          }
        }, [_c("div", {
          staticClass: "spinner-border text-center",
          staticStyle: {
            width: "24px",
            height: "24px"
          },
          attrs: {
            role: "status"
          }
        }, [_c("span", {
          staticClass: "sr-only"
        }, [_vm._v("Loading...")])])]) : _vm._e(), _vm._v(" "), !props.row.isLoading ? _c("button", {
          staticClass: "btn waves-effect",
          on: {
            click: function click($event) {
              return _vm.seeClientProfile(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "material-icons",
          staticStyle: {
            color: "#0d274b"
          }
        }, [_vm._v("edit")])]) : _vm._e()])];
      }
    }])
  }, [_c("th", {
    staticStyle: {
      width: "auto"
    },
    attrs: {
      slot: "thead-tr"
    },
    slot: "thead-tr"
  }, [_vm._v("\n               Действия\n            ")])])], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v("Создать клиента")]), _vm._v(" "), _c("a", {
    staticStyle: {
      "text-decoration": "none"
    },
    attrs: {
      href: "javascript:;",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Закрыть")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.section[data-v-23561d7f] {\n    padding: 0 16px;\n}\n.modalbox[data-v-23561d7f] {\n    padding-top: env(safe-area-inset-top);\n    overflow: hidden;\n}\n.modalbox .modal-dialog[data-v-23561d7f] {\n    transform: translate(0, 100%) !important;\n    min-width: 100%;\n    margin: 0;\n    transition: 0.5s all !important;\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin-top: env(safe-area-inset-top);\n}\n.modalbox .modal-dialog .modal-content[data-v-23561d7f] {\n    border-radius: 0;\n    border: 0;\n    margin: auto;\n    overflow: hidden;\n    padding-top: 56px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n}\n.modalbox .modal-dialog .modal-content .modal-header[data-v-23561d7f] {\n    border: 0;\n    padding: 0;\n    min-height: 56px;\n    padding: 10px 16px;\n    border-radius: 0;\n    display: flex;\n    border-bottom: 1px solid #E1E1E1;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n    background: #FFF;\n}\n.modalbox .modal-dialog .modal-content .modal-header .modal-title[data-v-23561d7f] {\n    margin: 0;\n    color: #063065;\n    font-size: 17px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n}\n.modalbox .modal-dialog .modal-content .modal-header a[data-v-23561d7f]{\n    color: #063065;\n}\n.modalbox .modal-dialog .modal-content .modal-body[data-v-23561d7f] {\n    padding: 20px 16px;\n    overflow: auto;\n}\n.modalbox.show .modal-dialog[data-v-23561d7f] {\n    transform: translate(0, 0) !important;\n}\n.form-group[data-v-23561d7f] {\n    width: 100%;\n}\n.form-group .label[data-v-23561d7f] {\n    font-size: 12px;\n    margin: 0;\n    font-weight: 900;\n    color: #063065;\n    display: block;\n    line-height: 1.2em;\n    text-align: left;\n    font-family: Open Sans;\n}\n.form-group textarea[data-v-23561d7f] {\n    resize: none;\n}\n.form-group .input-info[data-v-23561d7f] {\n    font-size: 11px;\n    color: #A1A1A2;\n}\n.form-group .clear-input[data-v-23561d7f] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #4F5050;\n    height: 38px;\n    font-size: 22px;\n    position: absolute;\n    right: 6px;\n    top: 0px;\n    bottom: 0;\n    width: 32px;\n    opacity: 0.5;\n}\n.form-group .clear-input[data-v-23561d7f]:hover, .form-group .clear-input[data-v-23561d7f]:active {\n    opacity: 0.8;\n}\n.form-group .input-wrapper[data-v-23561d7f] {\n    position: relative;\n}\n.form-group .input-wrapper.not-empty .clear-input[data-v-23561d7f] {\n    display: flex;\n}\n.form-group .input-wrapper.active .label[data-v-23561d7f] {\n    color: #f08b23 !important;\n}\n.form-group.basic[data-v-23561d7f] {\n    padding: 8px 0;\n    margin: 0;\n}\n.form-group.basic .form-control[data-v-23561d7f],\n.form-group.basic .custom-select[data-v-23561d7f] {\n    background: transparent;\n    border: none;\n    border-bottom: 1px solid #E1E1E1;\n    padding: 0 30px 0 0;\n    border-radius: 0;\n    height: 40px;\n    color: #141515;\n    font-size: 15px;\n}\n.form-group.basic .form-control[data-v-23561d7f]:focus,\n.form-group.basic .custom-select[data-v-23561d7f]:focus {\n    border-bottom-color: #f08b23;\n    box-shadow: inset 0 -1px 0 0 #f08b23;\n}\n.form-group.basic textarea.form-control[data-v-23561d7f] {\n    height: auto;\n    padding: 7px 40px 7px 0;\n}\n.form-group.basic.animated .label[data-v-23561d7f] {\n    margin-top: 20px;\n    opacity: 0;\n    top: -3px;\n    transition: 0.2s all;\n    position: absolute;\n}\n.form-group.basic.animated .input-wrapper[data-v-23561d7f] {\n    padding-top: 5px;\n}\n.form-group.basic.animated .input-wrapper.not-empty .label[data-v-23561d7f] {\n    margin-top: 0;\n    opacity: 1;\n}\n.form-button-group[data-v-23561d7f] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    padding-left: 16px;\n    padding-right: 16px;\n    background: #FFF;\n    min-height: 84px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: env(safe-area-inset-bottom);\n}\n.form-button-group .btn[data-v-23561d7f] {\n    background: #f08b23;\n    color: white;\n    text-transform: uppercase;\n    font-size: 24px;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    border: 0;\n    border-radius: 50px;\n    outline: none;\n}\nform-button-group .btn[data-v-23561d7f]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.modal-title[data-v-23561d7f]{\n    color: #062348;\n    font-weight: 900;\n    font-family: \"Open Sans\";\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_23561d7f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_23561d7f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_23561d7f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/Clients.vue":
/*!***************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/Clients.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Clients_vue_vue_type_template_id_23561d7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clients.vue?vue&type=template&id=23561d7f&scoped=true& */ "./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=template&id=23561d7f&scoped=true&");
/* harmony import */ var _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clients.vue?vue&type=script&lang=js& */ "./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=script&lang=js&");
/* harmony import */ var _Clients_vue_vue_type_style_index_0_id_23561d7f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css& */ "./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Clients_vue_vue_type_template_id_23561d7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Clients_vue_vue_type_template_id_23561d7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "23561d7f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/mobile/pages/Manager/Clients.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Clients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=template&id=23561d7f&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=template&id=23561d7f&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_23561d7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_23561d7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_23561d7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Clients.vue?vue&type=template&id=23561d7f&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=template&id=23561d7f&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_23561d7f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/mobile/pages/Manager/Clients.vue?vue&type=style&index=0&id=23561d7f&scoped=true&lang=css&");


/***/ })

}]);