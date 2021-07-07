(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isNewLoading: false,
      new_user: {
        email: '',
        role: '',
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
        Department: '' // password: '',

      },
      roles: [{
        value: 'client',
        text: 'Клиент'
      }, {
        value: 'manager',
        text: 'Менеджер'
      }, {
        value: 'admin',
        text: 'Администратор'
      }],
      template: null,
      manager: ''
    };
  },
  mounted: function mounted() {
    this.template = JSON.parse(JSON.stringify(this.new_user));
  },
  computed: {
    managers: function managers() {
      return this.$store.getters.managers;
    }
  },
  methods: {
    saveUser: function saveUser() {
      var _this = this;

      this.loading = true;
      this.new_user.FullName = this.new_user.LastName + ' ' + this.new_user.FirstName + ' ' + this.new_user.MiddleName;
      this.new_user.ManagerId = this.manager.id;

      if (this.new_user.role == 'admin') {
        this.new_user.is_admin = 1;
      } else if (this.new_user.role == 'manager') {
        this.new_user.is_manager = 1;
      } else {
        this.new_user.is_admin = 0;
        this.new_user.is_manager = 0;
      }

      this.$store.dispatch('new_user', this.new_user).then(function (response) {
        _this.sendMessage('Клиент успешно сохранён');

        _this.loading = false;

        _this.$bvModal.hide("new-user");
      });
    },
    cancel: function cancel() {
      this.$bvModal.hide("new-user");
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Пользователи',
        text: message
      });
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_0__["mask"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_desktop_pages_Manager_Clients_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/desktop/pages/Manager/Clients/Table */ "./resources/js/desktop/pages/Manager/Clients/Table.vue");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create */ "./resources/js/desktop/pages/Manager/Clients/Create.vue");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UserTable: _js_desktop_pages_Manager_Clients_Table__WEBPACK_IMPORTED_MODULE_1__["default"],
    Create: _Create__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loading: false,
      clientsTotalRows: 0,
      deletedClientsTotalRows: 0
    };
  },
  computed: {
    clients: function clients() {
      return this.$store.getters.clients;
    },
    deleted_clients: function deleted_clients() {
      return this.$store.getters.deleted_clients;
    },
    managers: function managers() {
      return this.$store.getters.managers;
    }
  },
  created: function created() {
    if (this.managers.length === 0) {
      this.$store.dispatch('setManagers');
    }
  },
  mounted: function mounted() {
    if (this.clients.length <= 0) {
      this.loadClients();
    }
  },
  methods: {
    loadClients: function loadClients() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.next = 3;
                return _this.$store.dispatch('setClients').then(function (resp) {
                  _this.$store.commit('setClients', resp.data.users);

                  _this.$store.commit('setDeletedClients', resp.data.deleted_users);

                  _this.clientsTotalRows = resp.data.users.length;
                  _this.deletedUsersTotalRows = resp.data.deleted_users.length;
                  _this.loading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Пользователи',
        text: message
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    users: {
      type: Array,
      required: true,
      "default": function _default() {
        return [];
      }
    },
    loading: {
      type: Boolean,
      "default": true
    },
    totalRows: {
      type: Number,
      required: true,
      "default": 0
    }
  },
  data: function data() {
    return {
      sortBy: 'id',
      sortDesc: false,
      // totalRows: 1,
      currentPage: 1,
      perPage: 5,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      pageOptions: [5, 10, 15, 25, 50, 100],
      fields: [{
        key: 'id',
        label: 'ID',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'info.FullName',
        label: 'ФИО',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'email',
        label: 'Email',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'info.Phone',
        label: 'Телефон',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'action1',
        label: 'Показать'
      }, {
        key: 'action2',
        label: 'Действия'
      }],
      in_process: [],
      isLoading: false,
      isNewLoading: false,
      roles: [{
        value: 'client',
        text: 'Клиент'
      }, {
        value: 'manager',
        text: 'Менеджер'
      }, {
        value: 'admin',
        text: 'Администратор'
      }],
      city_options: ['Донецк', 'Ростов-на-Дону'],
      addresses: [{
        city: 'Донецк',
        department: 'Артёма 100д'
      }, {
        city: 'Донецк',
        department: 'Бульвар Пушкина 23'
      }, {
        city: 'Ростов-на-Дону',
        department: 'Not found'
      }],
      branches: [{
        country: 'Украина',
        city: 'Донецк',
        departments: [{
          address: 'Артёма 100д',
          phone: '',
          sheldue: ''
        }, {
          address: 'Бульвар Пушкина 23',
          phone: '',
          sheldue: ''
        }]
      }, {
        country: 'Россия',
        city: 'Ростов-на-Дону',
        departments: []
      }],
      branch: [],
      cities: [],
      departments: [],
      departments_loading: false
    };
  },
  mounted: function mounted() {// this.totalRows = this.users.length;
    // this.cities
  },
  computed: {
    sortOptions: function sortOptions() {
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    },
    managers: function managers() {
      return this.$store.getters.managers;
    }
  },
  methods: {
    seeClientTours: function seeClientTours(id) {
      this.$router.push('/manager/client-tours/' + id);
    },
    sendMessage: function sendMessage(message) {
      this.$notify({
        group: 'info',
        type: 'travel',
        title: 'Пользователи',
        text: message
      });
    },
    selectCity: function selectCity(value, item) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.departments_loading = true;
                _context.next = 3;
                return _this.saveInfo(value, item.id, 'City');

              case 3:
                item.Department = '';

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    selectDepartment: function selectDepartment(value, item) {
      this.saveInfo(value, item.id, 'Department');
    },
    selectManager: function selectManager(value, item) {
      this.saveInfo(value, item.id, 'ManagerId');
    },
    remove: function remove(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$store.dispatch('removeClient', id).then(function (resp) {
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
    destroy: function destroy(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.$store.dispatch('forceDeleteClient', id).then(function (resp) {
                  _this3.sendMessage(resp.data.message);
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    restore: function restore(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.$store.dispatch('restoreClient', id).then(function (resp) {
                  _this4.sendMessage(resp.data.message);
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    save: function save(value, id, key) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log('save', key);

                _this5.$store.dispatch('saveClient', {
                  id: id,
                  key: key,
                  value: value
                }).then(function (resp) {
                  _this5.$store.commit('saveClient', resp.data.user);

                  _this5.sendMessage(resp.data.message);
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    saveInfo: function saveInfo(value, id, key) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.$store.dispatch('saveClientInfo', {
                  id: id,
                  key: key,
                  value: value
                }).then(function (resp) {
                  if (key == 'City') {
                    _this6.saveInfo('', id, 'Department');

                    _this6.departments_loading = false;
                  }

                  _this6.sendMessage(resp.data.message);
                });

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    onFiltered: function onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_1__["mask"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-travel[data-v-294765a1]{\n    background: #e17e4e;\n    background-color: rgb(225, 126, 78);\n    background-position-x: 0%;\n    background-position-y: 0%;\n    background-image: none;\n    background-size: auto;\n    background-image: linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e);\n    background-size: 210% 210%;\n    background-position: top right;\n    background-color: #e17e4e;\n    transition: all 0.15s ease;\n    box-shadow: none;\n    color: #ffffff;\n    max-width: 300px;\n    border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.nav-link {\n   color: #f08b23;\n}\n.nav-link:hover {\n   color: #0d274b;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-travel[data-v-7797b1b9]{\n    background: #e17e4e;\n    background-color: rgb(225, 126, 78);\n    background-position-x: 0%;\n    background-position-y: 0%;\n    background-image: none;\n    background-size: auto;\n    background-image: linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e);\n    background-size: 210% 210%;\n    background-position: top right;\n    background-color: #e17e4e;\n    transition: all 0.15s ease;\n    box-shadow: none;\n    color: #ffffff;\n    max-width: 300px;\n    border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page-item.active .page-link {\n    background: #f08b23;\n    border: 1px solid #f08b23;\n    transition: all 0.15s ease;\n    box-shadow: none;\n    color: #ffffff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=template&id=294765a1&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=template&id=294765a1&scoped=true& ***!
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
    [
      _c("ValidationObserver", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var invalid = ref.invalid
              return [
                _c(
                  "b-modal",
                  {
                    attrs: {
                      id: "new-user",
                      scrollable: "",
                      title: "Создать нового пользователя"
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "modal-footer",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                { staticClass: "w-100" },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "float-right btn-travel",
                                      attrs: {
                                        variant: "primary",
                                        disabled: invalid || _vm.loading
                                      },
                                      on: { click: _vm.saveUser }
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
                                                { staticClass: "sr-only" },
                                                [_vm._v("Loading...")]
                                              )
                                            : _vm._e(),
                                          _vm._v(
                                            "\n                            Сохранить\n                        "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      staticClass:
                                        "float-right mr-2 btn-travel",
                                      attrs: { variant: "primary" },
                                      on: { click: _vm.cancel }
                                    },
                                    [
                                      _vm._v(
                                        "\n                        Отмена\n                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _c("div", { staticClass: "row w-100 mx-auto my-3" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-12" },
                        [
                          _c("ValidationProvider", {
                            staticStyle: { width: "100%" },
                            attrs: { name: "email", rules: "required|email" },
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
                                            staticClass: "mb-0 travel-input",
                                            attrs: {
                                              label: "Email",
                                              placeholder: "Email"
                                            },
                                            model: {
                                              value: _vm.new_user.email,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.new_user,
                                                  "email",
                                                  $$v
                                                )
                                              },
                                              expression: "new_user.email"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "validate-error" },
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
                        { staticClass: "col-md-12" },
                        [
                          _c("ValidationProvider", {
                            staticStyle: { width: "100%" },
                            attrs: { name: "role", rules: "required" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var errors = ref.errors
                                    return [
                                      _c(
                                        "div",
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              staticClass: "mb-0",
                                              attrs: {
                                                label: "Роль",
                                                "label-size": "sm"
                                              }
                                            },
                                            [
                                              _c("b-form-select", {
                                                staticClass: "travel-input",
                                                attrs: {
                                                  options: _vm.roles,
                                                  placeholder:
                                                    "Выберите роль пользователя"
                                                },
                                                model: {
                                                  value: _vm.new_user.role,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.new_user,
                                                      "role",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "new_user.role"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "validate-error" },
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
                        { staticClass: "col-md-12" },
                        [
                          _c("ValidationProvider", {
                            staticStyle: { width: "100%" },
                            attrs: { name: "lastName", rules: "required" },
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
                                            staticClass: "mb-0 travel-input",
                                            attrs: {
                                              label: "Фамилия",
                                              placeholder: "Фамилия"
                                            },
                                            model: {
                                              value: _vm.new_user.LastName,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.new_user,
                                                  "LastName",
                                                  $$v
                                                )
                                              },
                                              expression: "new_user.LastName"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "validate-error" },
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
                        { staticClass: "col-md-12" },
                        [
                          _c("ValidationProvider", {
                            staticStyle: { width: "100%" },
                            attrs: { name: "firstName", rules: "required" },
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
                                            staticClass: "mb-0 travel-input",
                                            attrs: {
                                              label: "Имя",
                                              placeholder: "Имя"
                                            },
                                            model: {
                                              value: _vm.new_user.FirstName,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.new_user,
                                                  "FirstName",
                                                  $$v
                                                )
                                              },
                                              expression: "new_user.FirstName"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "validate-error" },
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
                        { staticClass: "col-md-12" },
                        [
                          _c(
                            "b-form-group",
                            {
                              staticClass: "mb-0",
                              attrs: { label: "Отчество", "label-size": "sm" }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "mb-0 travel-input",
                                attrs: {
                                  label: "Отчество",
                                  placeholder: "Отчество"
                                },
                                model: {
                                  value: _vm.new_user.MiddleName,
                                  callback: function($$v) {
                                    _vm.$set(_vm.new_user, "MiddleName", $$v)
                                  },
                                  expression: "new_user.MiddleName"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-12" },
                        [
                          _c("ValidationProvider", {
                            staticStyle: { width: "100%" },
                            attrs: { name: "phone", rules: "required|phone" },
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
                                            staticClass: "mb-0 travel-input",
                                            attrs: {
                                              label: "Телефон",
                                              placeholder: "Телефон"
                                            },
                                            model: {
                                              value: _vm.new_user.Phone,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.new_user,
                                                  "Phone",
                                                  $$v
                                                )
                                              },
                                              expression: "new_user.Phone"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "validate-error" },
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
                        { staticClass: "col-md-12 pr-md-1" },
                        [
                          _c("ValidationProvider", {
                            staticStyle: { width: "100%" },
                            attrs: { name: "City", rules: "required" },
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
                                              placeholder: "Выберите город",
                                              "show-labels": false,
                                              maxHeight: 200,
                                              loading:
                                                _vm.branches.length === 0,
                                              disabled:
                                                _vm.branches.length === 0,
                                              "allow-empty": false,
                                              "track-by": "city",
                                              label: "city"
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "singleLabel",
                                                  fn: function(props) {
                                                    return [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "option__desc"
                                                        },
                                                        [
                                                          props.option.city
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
                                                  fn: function(props) {
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
                                                                  props.option
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
                                              value: _vm.new_user.City,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.new_user,
                                                  "City",
                                                  $$v
                                                )
                                              },
                                              expression: "new_user.City"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "validate-error" },
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
                        { staticClass: "col-md-12 px-md-1" },
                        [
                          _c("ValidationProvider", {
                            staticStyle: { width: "100%" },
                            attrs: { name: "department", rules: "required" },
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
                                                _vm.new_user.City.departments,
                                              "option-height": 25,
                                              placeholder: "Выберите отделение",
                                              "show-labels": false,
                                              maxHeight: 200,
                                              loading:
                                                _vm.new_user.City.departments
                                                  .length === 0,
                                              disabled:
                                                _vm.new_user.City.departments
                                                  .length === 0,
                                              "allow-empty": false,
                                              label: "address",
                                              "track-by": "address"
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "singleLabel",
                                                  fn: function(props) {
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
                                                                  props.option
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
                                                  fn: function(props) {
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
                                                                  props.option
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
                                              value: _vm.new_user.Department,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.new_user,
                                                  "Department",
                                                  $$v
                                                )
                                              },
                                              expression: "new_user.Department"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "validate-error" },
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
                        { staticClass: "col-md-12" },
                        [
                          _c("ValidationProvider", {
                            staticStyle: { width: "100%" },
                            attrs: { name: "manager", rules: "required" },
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
                                            label: "Менеджер",
                                            "label-size": "sm"
                                          }
                                        },
                                        [
                                          _c("multiselect", {
                                            attrs: {
                                              options: _vm.managers,
                                              "option-height": 25,
                                              placeholder: "Выберите менеджера",
                                              "show-labels": false,
                                              maxHeight: 200,
                                              label: "info",
                                              "track-by": "id",
                                              loading: _vm.managers.length <= 0,
                                              disabled:
                                                _vm.managers.length <= 0,
                                              "allow-empty": false
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "singleLabel",
                                                  fn: function(props) {
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
                                                                "option__title"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  props.option
                                                                    .info
                                                                    .FullName
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
                                                  fn: function(props) {
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
                                                                "option__title"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  props.option
                                                                    .info
                                                                    .FullName
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
                                              value: _vm.manager,
                                              callback: function($$v) {
                                                _vm.manager = $$v
                                              },
                                              expression: "manager"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "validate-error" },
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
                    _c("div", { staticClass: "row w-100 mx-automy-3" }, [
                      _c("p", { staticClass: "text-center" }, [
                        _vm._v(
                          "Пароль для входа в систему созданного пользователя:\n                    "
                        ),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-weight": "700",
                              color: "#f8a105"
                            }
                          },
                          [_vm._v("TravelClub")]
                        )
                      ])
                    ])
                  ]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "b-button",
        {
          directives: [
            {
              name: "b-modal",
              rawName: "v-b-modal.new-user",
              modifiers: { "new-user": true }
            }
          ],
          staticClass: "btn-travel",
          attrs: { variant: "primary" }
        },
        [_vm._v("Создать пользователя")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=template&id=84070686&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=template&id=84070686& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "b-container",
    { attrs: { fluid: "" } },
    [
      _c("div", { staticClass: "row w-100 my-3" }, [_c("create")], 1),
      _vm._v(" "),
      _c(
        "b-tabs",
        { attrs: { "content-class": "mt-3" } },
        [
          _c(
            "b-tab",
            { attrs: { title: "Все", active: "" } },
            [
              _c("user-table", {
                attrs: {
                  users: _vm.clients,
                  loading: _vm.loading,
                  totalRows: _vm.clientsTotalRows
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tab",
            { attrs: { title: "Удаленные" } },
            [
              _c("user-table", {
                attrs: {
                  users: _vm.deleted_clients,
                  loading: _vm.loading,
                  totalRows: _vm.deletedClientsTotalRows
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=template&id=7797b1b9&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=template&id=7797b1b9&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { lg: "6" } },
            [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "Сортировка",
                    "label-cols-sm": "3",
                    "label-align-sm": "right",
                    "label-size": "sm",
                    "label-for": "sortBySelect1"
                  }
                },
                [
                  _c(
                    "b-input-group",
                    { attrs: { size: "sm" } },
                    [
                      _c("b-form-select", {
                        staticClass: "w-75",
                        attrs: {
                          id: "sortBySelect1",
                          options: _vm.sortOptions
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "first",
                            fn: function() {
                              return [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("-- none --")
                                ])
                              ]
                            },
                            proxy: true
                          }
                        ]),
                        model: {
                          value: _vm.sortBy,
                          callback: function($$v) {
                            _vm.sortBy = $$v
                          },
                          expression: "sortBy"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form-select",
                        {
                          staticClass: "w-25",
                          attrs: { size: "sm", disabled: !_vm.sortBy },
                          model: {
                            value: _vm.sortDesc,
                            callback: function($$v) {
                              _vm.sortDesc = $$v
                            },
                            expression: "sortDesc"
                          }
                        },
                        [
                          _c("option", { domProps: { value: false } }, [
                            _vm._v("Asc")
                          ]),
                          _vm._v(" "),
                          _c("option", { domProps: { value: true } }, [
                            _vm._v("Desc")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { lg: "6" } },
            [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "Поиск",
                    "label-cols-sm": "3",
                    "label-align-sm": "right",
                    "label-size": "sm",
                    "label-for": "filterInput"
                  }
                },
                [
                  _c(
                    "b-input-group",
                    { attrs: { size: "sm" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          type: "search",
                          id: "filterInput",
                          placeholder: "Введите для поиска"
                        },
                        model: {
                          value: _vm.filter,
                          callback: function($$v) {
                            _vm.filter = $$v
                          },
                          expression: "filter"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { disabled: !_vm.filter },
                              on: {
                                click: function($event) {
                                  _vm.filter = ""
                                }
                              }
                            },
                            [_vm._v("Очистить")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { sm: "5", md: "6" } },
            [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "На странице",
                    "label-cols-sm": "6",
                    "label-cols-md": "4",
                    "label-cols-lg": "3",
                    "label-align-sm": "right",
                    "label-size": "sm",
                    "label-for": "perPageSelect1"
                  }
                },
                [
                  _c("b-form-select", {
                    attrs: {
                      id: "perPageSelect1",
                      size: "sm",
                      options: _vm.pageOptions
                    },
                    model: {
                      value: _vm.perPage,
                      callback: function($$v) {
                        _vm.perPage = $$v
                      },
                      expression: "perPage"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { sm: "7", md: "6" } },
            [
              _c("b-pagination", {
                staticClass: "my-0",
                attrs: {
                  "total-rows": _vm.totalRows,
                  "per-page": _vm.perPage,
                  align: "fill",
                  size: "sm"
                },
                model: {
                  value: _vm.currentPage,
                  callback: function($$v) {
                    _vm.currentPage = $$v
                  },
                  expression: "currentPage"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          "show-empty": "",
          small: "",
          stacked: "md",
          items: _vm.users,
          fields: _vm.fields,
          "current-page": _vm.currentPage,
          "per-page": _vm.perPage,
          filter: _vm.filter,
          filterIncludedFields: _vm.filterOn,
          "sort-by": _vm.sortBy,
          "sort-desc": _vm.sortDesc,
          "sort-direction": _vm.sortDirection,
          busy: _vm.loading,
          "empty-text": "Нет записей для отображения",
          "empty-filtered-text": "Нет записей, соответствующих вашему запросу"
        },
        on: {
          "update:sortBy": function($event) {
            _vm.sortBy = $event
          },
          "update:sort-by": function($event) {
            _vm.sortBy = $event
          },
          "update:sortDesc": function($event) {
            _vm.sortDesc = $event
          },
          "update:sort-desc": function($event) {
            _vm.sortDesc = $event
          },
          filtered: _vm.onFiltered
        },
        scopedSlots: _vm._u([
          {
            key: "cell(info.FullName)",
            fn: function(data) {
              return [
                _c(
                  "b-input-group",
                  { attrs: { size: "sm" } },
                  [
                    _c("b-form-input", {
                      staticClass: "travel-input",
                      attrs: {
                        value: data.item.info.FullName,
                        placeholder: "Введите ФИО"
                      },
                      on: {
                        blur: function($event) {
                          return _vm.saveInfo(
                            $event.target.value,
                            data.item.info.id,
                            "FullName"
                          )
                        }
                      }
                    })
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "cell(email)",
            fn: function(data) {
              return [
                _c(
                  "b-input-group",
                  { attrs: { size: "sm" } },
                  [
                    _c("b-form-input", {
                      staticClass: "travel-input",
                      attrs: { disabled: "", type: "email" },
                      on: {
                        blur: function($event) {
                          return _vm.save(
                            $event.target.value,
                            data.item.id,
                            "email"
                          )
                        }
                      },
                      model: {
                        value: data.item.email,
                        callback: function($$v) {
                          _vm.$set(data.item, "email", $$v)
                        },
                        expression: "data.item.email"
                      }
                    })
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "cell(info.Phone)",
            fn: function(data) {
              return [
                _c(
                  "b-input-group",
                  { attrs: { size: "sm" } },
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
                      staticClass: "travel-input",
                      attrs: { type: "text" },
                      on: {
                        blur: function($event) {
                          return _vm.saveInfo(
                            $event.target.value,
                            data.item.info.id,
                            "Phone"
                          )
                        }
                      },
                      model: {
                        value: data.item.info.Phone,
                        callback: function($$v) {
                          _vm.$set(data.item.info, "Phone", $$v)
                        },
                        expression: "data.item.info.Phone"
                      }
                    })
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "cell(action1)",
            fn: function(data) {
              return [
                _c(
                  "b-input-group",
                  { attrs: { size: "sm" } },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass:
                          "w-100 btn btn-travel mr-1 mb-1 btn-travel",
                        on: { click: data.toggleDetails }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              data.detailsShowing ? "Свернуть" : "Развернуть"
                            ) +
                            "\n                "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "cell(action2)",
            fn: function(data) {
              return [
                _c(
                  "b-input-group",
                  { attrs: { size: "sm" } },
                  [
                    data.item.role == "client"
                      ? _c(
                          "b-button",
                          {
                            staticClass:
                              "btn btn-info mr-1 mb-1 btn-travel w-100",
                            attrs: { disabled: data.item.id === null },
                            on: {
                              click: function($event) {
                                return _vm.seeClientTours(data.item.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                       Туры\n                "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    data.item.deleted_at == null
                      ? _c(
                          "b-button",
                          {
                            staticClass:
                              "btn btn-info mr-1 mb-1 btn-travel w-100",
                            attrs: { disabled: data.item.id === null },
                            on: {
                              click: function($event) {
                                return _vm.remove(data.item.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        Удалить\n                "
                            )
                          ]
                        )
                      : _c(
                          "b-button",
                          {
                            staticClass:
                              "btn btn-info mr-1 mb-1 btn-travel w-100",
                            attrs: { disabled: data.item.id === null },
                            on: {
                              click: function($event) {
                                return _vm.restore(data.item.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                    Восстановить\n                "
                            )
                          ]
                        )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "row-details",
            fn: function(row) {
              return [
                _c("b-card", [
                  _c(
                    "div",
                    {
                      staticClass:
                        "row align-items-center justify-content-center m-auto"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "col-sm-12 px-1 col-md-4 mb-2" },
                        [
                          _c(
                            "b-form-group",
                            {
                              staticClass: "mb-0",
                              attrs: { label: "Фамилия", "label-size": "sm" }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "mb-0 travel-input",
                                attrs: {
                                  label: "Фамилия",
                                  placeholder: "Фамилия"
                                },
                                on: {
                                  blur: function($event) {
                                    return _vm.saveInfo(
                                      $event.target.value,
                                      row.item.info.id,
                                      "LastName"
                                    )
                                  }
                                },
                                model: {
                                  value: row.item.info.LastName,
                                  callback: function($$v) {
                                    _vm.$set(row.item.info, "LastName", $$v)
                                  },
                                  expression: "row.item.info.LastName"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-12 px-1 col-md-4 mb-2" },
                        [
                          _c(
                            "b-form-group",
                            {
                              staticClass: "mb-0",
                              attrs: { label: "Имя", "label-size": "sm" }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "mb-0 travel-input",
                                attrs: { label: "Имя", placeholder: "Имя" },
                                on: {
                                  blur: function($event) {
                                    return _vm.saveInfo(
                                      $event.target.value,
                                      row.item.info.id,
                                      "FirstName"
                                    )
                                  }
                                },
                                model: {
                                  value: row.item.info.FirstName,
                                  callback: function($$v) {
                                    _vm.$set(row.item.info, "FirstName", $$v)
                                  },
                                  expression: "row.item.info.FirstName"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-12 px-1 col-md-4 mb-2" },
                        [
                          _c(
                            "b-form-group",
                            {
                              staticClass: "mb-0",
                              attrs: { label: "Отчество", "label-size": "sm" }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "mb-0 travel-input",
                                attrs: {
                                  label: "Отчество",
                                  placeholder: "Отчество"
                                },
                                on: {
                                  blur: function($event) {
                                    return _vm.saveInfo(
                                      $event.target.value,
                                      row.item.info.id,
                                      "MiddleName"
                                    )
                                  }
                                },
                                model: {
                                  value: row.item.info.MiddleName,
                                  callback: function($$v) {
                                    _vm.$set(row.item.info, "MiddleName", $$v)
                                  },
                                  expression: "row.item.info.MiddleName"
                                }
                              })
                            ],
                            1
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
                        "row align-items-center justify-content-center m-auto"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "col-sm-12 px-1 col-md-4 mb-2" },
                        [
                          _c(
                            "b-form-group",
                            {
                              staticClass: "mb-0",
                              attrs: { label: "Город", "label-size": "sm" }
                            },
                            [
                              _c("multiselect", {
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
                                on: {
                                  input: function($event) {
                                    return _vm.selectCity(
                                      row.item.info.City,
                                      row.item.info
                                    )
                                  }
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "singleLabel",
                                      fn: function(props) {
                                        return [
                                          _c(
                                            "span",
                                            { staticClass: "option__desc" },
                                            [
                                              props.option.city
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
                                                          props.option.city
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
                                                    "font-size":
                                                      "0.7500000025rem",
                                                    "line-height": "1.428571"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(props.option.city)
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
                                  value: row.item.info.City,
                                  callback: function($$v) {
                                    _vm.$set(row.item.info, "City", $$v)
                                  },
                                  expression: "row.item.info.City"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-12 px-1 col-md-4 mb-2" },
                        [
                          _c(
                            "b-form-group",
                            {
                              staticClass: "mb-0",
                              attrs: { label: "Отделение", "label-size": "sm" }
                            },
                            [
                              _c("multiselect", {
                                attrs: {
                                  options: row.item.info.City.departments,
                                  "option-height": 25,
                                  placeholder: "Выберите отделение",
                                  "show-labels": false,
                                  maxHeight: 200,
                                  loading: _vm.departments_loading,
                                  disabled:
                                    row.item.info.City.departments.length === 0,
                                  "allow-empty": false,
                                  label: "address",
                                  "track-by": "address"
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.selectDepartment(
                                      row.item.info.Department,
                                      row.item.info
                                    )
                                  }
                                },
                                scopedSlots: _vm._u(
                                  [
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
                                                    "font-size":
                                                      "0.7500000025rem",
                                                    "line-height": "1.428571"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(props.option.address)
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
                                                    "font-size":
                                                      "0.7500000025rem",
                                                    "line-height": "1.428571"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(props.option.address)
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
                                  value: row.item.info.Department,
                                  callback: function($$v) {
                                    _vm.$set(row.item.info, "Department", $$v)
                                  },
                                  expression: "row.item.info.Department"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-12 px-1 col-md-4 mb-2" },
                        [
                          _c(
                            "b-form-group",
                            {
                              staticClass: "mb-0",
                              attrs: { label: "Менеджер", "label-size": "sm" }
                            },
                            [
                              _c("b-form-select", {
                                staticClass: "travel-input",
                                staticStyle: { "min-height": "40px" },
                                attrs: {
                                  options: _vm.managers,
                                  "value-field": "id",
                                  "text-field": "info.FullName"
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.selectManager(
                                      row.item.info.ManagerId,
                                      row.item.info
                                    )
                                  }
                                },
                                model: {
                                  value: row.item.info.ManagerId,
                                  callback: function($$v) {
                                    _vm.$set(row.item.info, "ManagerId", $$v)
                                  },
                                  expression: "row.item.info.ManagerId"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-12 px-1 col-md-12 mb-2" },
                        [
                          _c(
                            "b-form-group",
                            {
                              staticClass: "mb-0",
                              attrs: {
                                label: "Дополнительная информация",
                                "label-size": "sm"
                              }
                            },
                            [
                              _c("b-form-textarea", {
                                staticClass: "travel-input",
                                staticStyle: {
                                  padding: "5px 15px",
                                  border: "1px solid #f08b23",
                                  "border-radius": "20px !important"
                                },
                                attrs: {
                                  rows: "4",
                                  cols: "80",
                                  placeholder: "Дополнительная информация"
                                },
                                on: {
                                  blur: function($event) {
                                    return _vm.saveInfo(
                                      $event.target.value,
                                      row.item.info.id,
                                      "About"
                                    )
                                  }
                                },
                                model: {
                                  value: row.item.info.About,
                                  callback: function($$v) {
                                    _vm.$set(row.item.info, "About", $$v)
                                  },
                                  expression: "row.item.info.About"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  )
                ])
              ]
            }
          },
          {
            key: "table-busy",
            fn: function() {
              return [
                _c(
                  "div",
                  { staticClass: "text-center text-warning my-2" },
                  [
                    _c("b-spinner", {
                      staticClass: "align-middle",
                      attrs: { variant: "warning" }
                    }),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Загрузка...")])
                  ],
                  1
                )
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Create.vue":
/*!***************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Create.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_294765a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=294765a1&scoped=true& */ "./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=template&id=294765a1&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Create_vue_vue_type_style_index_0_id_294765a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css& */ "./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_294765a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_294765a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "294765a1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Manager/Clients/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_294765a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=style&index=0&id=294765a1&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_294765a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_294765a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_294765a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_294765a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=template&id=294765a1&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=template&id=294765a1&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_294765a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=294765a1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Create.vue?vue&type=template&id=294765a1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_294765a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_294765a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_84070686___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=84070686& */ "./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=template&id=84070686&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_84070686___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_84070686___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Manager/Clients/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=template&id=84070686&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=template&id=84070686& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_84070686___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=84070686& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Index.vue?vue&type=template&id=84070686&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_84070686___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_84070686___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Table.vue":
/*!**************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Table.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_vue_vue_type_template_id_7797b1b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=7797b1b9&scoped=true& */ "./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=template&id=7797b1b9&scoped=true&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Table_vue_vue_type_style_index_0_id_7797b1b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css& */ "./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css&");
/* harmony import */ var _Table_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Table.vue?vue&type=style&index=1&lang=css& */ "./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_7797b1b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Table_vue_vue_type_template_id_7797b1b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7797b1b9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Manager/Clients/Table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_7797b1b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=0&id=7797b1b9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_7797b1b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_7797b1b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_7797b1b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_7797b1b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=template&id=7797b1b9&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=template&id=7797b1b9&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_7797b1b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=template&id=7797b1b9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Clients/Table.vue?vue&type=template&id=7797b1b9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_7797b1b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_7797b1b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);