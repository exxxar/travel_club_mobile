"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_admin_Orders_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker/dist/locale */ "./node_modules/vuejs-datepicker/dist/locale/index.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Create",
  data: function data() {
    return {
      newItem: {
        name: '',
        phone: '',
        order_type: '',
        module: null
      },
      start: new Date(),
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
      nights: [],
      order_types: ['Тур', 'Авиабилеты', 'Отель'],
      depart_countries: ['Украина', 'Россия'],
      loading: false,
      options: [],
      classes: ['Эконом класс', 'Бизнес класс'],
      languages: vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_0__,
      disabledDates1: {
        to: new Date(new Date().setDate(new Date().getDate() - 1))
      },
      disabledDates2: {
        to: new Date(new Date().setDate(new Date().getDate() - 1))
      }
    };
  },
  mounted: function mounted() {
    if (this.countries.length === 0) {
      this.$store.dispatch('getCountries', {
        town_id: 0
      });
    }
    for (var i = 1; i < 31; i++) {
      this.nights.push(i);
    }
  },
  computed: {
    isAdmin: function isAdmin() {
      return this.$store.getters.isAdmin;
    },
    isManager: function isManager() {
      return this.$store.getters.isManager;
    },
    menu: function menu() {
      return this.$store.getters.menu;
    },
    moduleOrders: function moduleOrders() {
      return this.$store.getters.moduleOrders;
    },
    countries: function countries() {
      return this.$store.getters.countries;
    },
    cities: function cities() {
      return this.$store.getters.cities;
    },
    hotels: function hotels() {
      return this.$store.getters.hotels;
    },
    hotel_stars: function hotel_stars() {
      return this.$store.getters.hotel_stars;
    },
    tour_operators: function tour_operators() {
      return this.$store.getters.tour_operators;
    },
    tour_dates: function tour_dates() {
      return this.$store.getters.tour_dates;
    },
    aviaCities: function aviaCities() {
      return this.$store.getters.aviaCities;
    },
    isAviaCitiesLoading: function isAviaCitiesLoading() {
      return this.$store.getters.isAviaCitiesLoading;
    },
    //loadings
    isCountriesLoading: function isCountriesLoading() {
      return this.$store.getters.isCountriesLoading;
    },
    isCitiesLoading: function isCitiesLoading() {
      return this.$store.getters.isCitiesLoading;
    },
    isHotelsLoading: function isHotelsLoading() {
      return this.$store.getters.isHotelsLoading;
    },
    isTourOperatorsLoading: function isTourOperatorsLoading() {
      return this.$store.getters.isTourOperatorsLoading;
    }
  },
  methods: {
    back: function back() {
      if (this.isAdmin) {
        this.$router.push('/admin/orders');
      }
      if (this.isManager) {
        this.$router.push('/manager/orders');
      }
    },
    saveOrder: function saveOrder() {
      var _this = this;
      this.loading = true;
      this.$store.dispatch('newModuleOrder', this.newItem).then(function (response) {
        _this.sendMessage('Заказ успешно добавлен');
        _this.loading = false;
        _this.newItem = {
          name: '',
          phone: '',
          order_type: '',
          module: null
        };
      });
      this.loading = false;
    },
    changeOrderType: function changeOrderType() {
      if (this.newItem.order_type == 'Тур') {
        this.newItem.module = {
          name: '',
          phone: '',
          country: 'Россия',
          resort_country: {},
          resorts: [{
            Name: 'Любой'
          }],
          hotels: [{
            Name: 'Любой'
          }],
          meal: 'Любое',
          price_from: 0,
          price_to: 0,
          adults: 1,
          children: 0,
          tour_operators: [{
            Name: 'Любой'
          }],
          // date_range: {start: new Date(), end: new Date((new Date).setDate((new Date).getDate() + 1))},
          nights_from: 1,
          nights_to: 10
        };
      }
      if (this.newItem.order_type == 'Авиабилеты') {
        this.newItem.module = {
          name: '',
          phone: '',
          city_from: null,
          city_to: null,
          adults: 1,
          children_under_12: 0,
          children_under_2: 0,
          depart_date: new Date(),
          return_date: null,
          is_multi_city: false,
          routes: [],
          avia_class: 'Эконом класс'
        };
      }
      if (this.newItem.order_type == 'Отель') {}
    },
    whateverResort: function whateverResort(actionName) {
      if (actionName.Name == 'Любой') {
        this.$store.dispatch('getHotels', {
          country_id: this.resort_country.Id,
          town_id: '0',
          star_id: '0'
        });
      }
    },
    chooseNewResortCountry: function chooseNewResortCountry() {
      this.newItem.module.resorts = [];
      this.newItem.module.hotels = [];
      this.$store.dispatch('getCities', this.newItem.module.resort_country.Id);
      this.$store.dispatch('getHotels', {
        country_id: this.newItem.module.resort_country.Id,
        town_id: '0',
        star_id: '0'
      });
      this.$store.dispatch('getTourOperators', {
        city_id: '832',
        country_id: this.newItem.module.resort_country.Id
      });
      this.$store.dispatch('getTourDates', {
        city_id: '832',
        country_id: this.newItem.module.resort_country.Id
      });
    },
    chooseNewResorts: function chooseNewResorts(value) {
      var _this2 = this;
      this.newItem.module.resorts = value;
      if (this.newItem.module.resorts.length > 0) {
        if (value[this.newItem.module.resorts.length - 1].Name === 'Любой') {
          this.newItem.module.resorts = [{
            Name: 'Любой'
          }];
        } else {
          this.newItem.module.resorts = this.newItem.module.resorts.filter(function (item) {
            if (item.Name !== 'Любой') {
              return true;
            }
          });
          var town_id = '';
          this.newItem.module.resorts.forEach(function (item) {
            town_id += '' + item.Id + ',';
          });
          town_id = town_id.slice(0, -1);
          //поиск отелей по городам-курортам
          this.$store.dispatch('getHotels', {
            country_id: this.newItem.module.resort_country.Id,
            town_id: town_id,
            star_id: '0'
          }).then(function () {
            // фильтруем выбранные отели по городам курортам
            _this2.newItem.module.hotels = _this2.newItem.module.hotels.filter(function (item) {
              if (_this2.hotels.findIndex(function (i) {
                return i.Id == item.Id;
              }) !== -1) {
                return true;
              }
            });
          });
        }
      }
    },
    chooseNewHotel: function chooseNewHotel(value) {
      this.newItem.module.hotels = value;
      if (value[this.newItem.module.hotels.length - 1].Name === 'Любой') {
        this.newItem.module.hotels = [{
          Name: 'Любой'
        }];
      } else {
        this.newItem.module.hotels = this.newItem.module.hotels.filter(function (item) {
          if (item.Name !== 'Любой') {
            return true;
          }
        });
      }
    },
    chooseNewTourOperator: function chooseNewTourOperator(value) {
      this.newItem.module.tour_operators = value;
      if (value[this.newItem.module.tour_operators.length - 1].Name === 'Любой') {
        this.newItem.module.tour_operators = [{
          Name: 'Любой'
        }];
      } else {
        this.newItem.module.tour_operators = this.newItem.module.tour_operators.filter(function (item) {
          if (item.Name !== 'Любой') {
            return true;
          }
        });
      }
    },
    removeNewResort: function removeNewResort(removedOption, id) {
      if (removedOption.Name != 'Любой') {
        if (this.newItem.module.resorts.length == 1) {
          this.newItem.module.resorts.push({
            Name: 'Любой'
          });
          this.$store.dispatch('getHotels', {
            country_id: this.newItem.module.resort_country.Id,
            town_id: '0',
            star_id: '0'
          });
        }
      } else {
        this.newItem.module.resorts.push({
          Name: 'Любой'
        });
      }
    },
    removeNewHotels: function removeNewHotels(removedOption, id) {
      if (removedOption.Name != 'Любой') {
        if (this.newItem.module.hotels.length == 1) {
          this.newItem.module.hotels.push({
            Name: 'Любой'
          });
        }
      } else {
        this.newItem.module.hotels.push({
          Name: 'Любой'
        });
      }
    },
    removeNewTourOperators: function removeNewTourOperators(removedOption, id) {
      if (removedOption.Name != 'Любой') {
        if (this.newItem.module.tour_operators.length == 1) {
          this.newItem.module.tour_operators.push({
            Name: 'Любой'
          });
        }
      } else {
        this.newItem.module.tour_operators.push({
          Name: 'Любой'
        });
      }
    },
    changeNewDateRange: function changeNewDateRange(date_object) {
      this.newItem.module.date_range = date_object;
    },
    changeEditDateRange: function changeEditDateRange(date_object) {
      this.newItem.module.date_range = date_object;
    },
    getAviaCities: function getAviaCities(term) {
      var _this3 = this;
      if (term.length > 1) {
        this.$store.dispatch('getAviaCities', term).then(function () {
          _this3.options = _this3.aviaCities;
        });
      }
    },
    changeCityFrom: function changeCityFrom(value) {
      this.newItem.module.city_from = value;
    },
    changeCityTo: function changeCityTo(value) {
      this.newItem.module.city_to = value;
    },
    toggleAviaCities: function toggleAviaCities() {
      var tempCity = this.newItem.module.city_to;
      this.newItem.module.city_to = this.newItem.module.city_from;
      this.newItem.module.city_from = tempCity;
    },
    changeDepartDate: function changeDepartDate() {
      if (this.newItem.module.return_date != null) {
        var date1 = new Date(this.newItem.module.depart_date);
        var date2 = new Date(this.newItem.module.return_date);
        if (date1 > date2) {
          var return_date = this.newItem.module.depart_date;
          this.newItem.module.return_date = return_date;
          this.disabledDates2.to = this.newItem.module.depart_date;
        }
      }
    },
    incrementItem: function incrementItem(item) {
      this.newItem.module[item] = this.newItem.module[item] + 1;
    },
    decrementItem: function decrementItem(item) {
      this.newItem.module[item] = this.newItem.module[item] - 1;
    },
    changeClass: function changeClass(value) {
      this.newItem.module.avia_class = value;
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
  filters: {
    pluralizeResorts: function pluralizeResorts(n) {
      if (n === 1) {
        return 'курорт';
      }
      if (n > 1 && n < 5) {
        return 'курорта';
      }
      if (n > 4 && n < 20) {
        return 'курортов';
      }
      if (n > 19) {
        var last = n % 10;
        if (last === 1) {
          return 'курорт';
        }
        if (last > 1 && last < 5) {
          return 'курорта';
        }
        if (last > 4 && last < 10 && last === 0) {
          return 'курортов';
        }
        return 'курортов';
      }
      return 'курортов';
    },
    pluralizeHotels: function pluralizeHotels(n) {
      if (n === 1) {
        return 'отель';
      }
      if (n > 1 && n < 5) {
        return 'отеля';
      }
      if (n > 4 && n < 20) {
        return 'отелей';
      }
      if (n > 19) {
        var last = n % 10;
        if (last === 1) {
          return 'отель';
        }
        if (last > 1 && last < 5) {
          return 'отеля';
        }
        if (last > 4 && last < 10 && last === 0) {
          return 'отелей';
        }
        return 'отелей';
      }
      return 'отелей';
    },
    pluralizeTourOperators: function pluralizeTourOperators(n) {
      if (n === 1) {
        return 'туроператор';
      }
      if (n > 1 && n < 5) {
        return 'туроператора';
      }
      if (n > 4 && n < 20) {
        return 'туроператоров';
      }
      if (n > 19) {
        var last = n % 10;
        if (last === 1) {
          return 'туроператор';
        }
        if (last > 1 && last < 5) {
          return 'туроператора';
        }
        if (last > 4 && last < 10 && last === 0) {
          return 'туроператоров';
        }
        return 'туроператоров';
      }
      return 'туроператоров';
    },
    pluralizeChoose: function pluralizeChoose(n) {
      if (n === 1) {
        return 'выбран';
      }
      return 'выбрано';
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_1__.mask
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=template&id=18a03f1a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=template&id=18a03f1a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row m-auto w-100 align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "col-8"
  }, [_c("ValidationObserver", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_c("div", {
          staticClass: "row m-auto w-100 justify-content-center align-items-start",
          staticStyle: {
            "min-height": "210px"
          }
        }, [_c("div", {
          staticClass: "col-12 col-md-6 pr-md-1"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "name",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref2) {
              var errors = _ref2.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Имя",
                  "label-size": "sm"
                }
              }, [_c("b-form-input", {
                staticClass: "mb-0 travel-input",
                attrs: {
                  placeholder: "Имя"
                },
                model: {
                  value: _vm.newItem.name,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem, "name", $$v);
                  },
                  expression: "newItem.name"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6 pl-md-1"
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
            fn: function fn(_ref3) {
              var errors = _ref3.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Телефон",
                  "label-size": "sm"
                }
              }, [_c("b-form-input", {
                directives: [{
                  name: "mask",
                  rawName: "v-mask",
                  value: ["+# (###) ###-##-##", "+## (###) ###-##-##"],
                  expression: "['+# (###) ###-##-##','+## (###) ###-##-##']"
                }],
                staticClass: "travel-input",
                attrs: {
                  placeholder: "Номер телефона",
                  required: "",
                  type: "text"
                },
                model: {
                  value: _vm.newItem.phone,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem, "phone", $$v);
                  },
                  expression: "newItem.phone"
                }
              })], 1), _vm._v(" "), _c("span", {
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
            name: "order_type",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref4) {
              var errors = _ref4.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Тип заказа",
                  "label-size": "sm"
                }
              }, [_c("multiselect", {
                attrs: {
                  "allow-empty": false,
                  maxHeight: 200,
                  "option-height": 25,
                  options: _vm.order_types,
                  searchable: false,
                  "show-labels": false,
                  placeholder: "Тип заказа"
                },
                on: {
                  input: _vm.changeOrderType
                },
                model: {
                  value: _vm.newItem.order_type,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem, "order_type", $$v);
                  },
                  expression: "newItem.order_type"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _vm.newItem.order_type == "Тур" ? _c("div", {
          staticClass: "row w-100 mx-auto mb-5"
        }, [_c("div", {
          staticClass: "col-md-12"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Страна отправления",
            "label-size": "sm"
          }
        }, [_c("multiselect", {
          attrs: {
            "allow-empty": false,
            maxHeight: 200,
            "option-height": 25,
            options: _vm.depart_countries,
            "show-labels": false,
            placeholder: "Выберете страну отправления"
          },
          model: {
            value: _vm.newItem.module.country,
            callback: function callback($$v) {
              _vm.$set(_vm.newItem.module, "country", $$v);
            },
            expression: "newItem.module.country"
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Куда",
            "label-size": "sm"
          }
        }, [_c("multiselect", {
          attrs: {
            "allow-empty": false,
            disabled: _vm.isCountriesLoading,
            loading: _vm.isCountriesLoading,
            maxHeight: 200,
            "option-height": 25,
            options: _vm.countries,
            "show-labels": false,
            label: "Name",
            placeholder: "Выберете страну",
            "track-by": "Name"
          },
          on: {
            input: _vm.chooseNewResortCountry
          },
          scopedSlots: _vm._u([{
            key: "singleLabel",
            fn: function fn(props) {
              return [_c("b", {
                "class": "slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_" + props.option.Id
              }), _vm._v(" "), _c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))])])];
            }
          }, {
            key: "option",
            fn: function fn(props) {
              return [_c("b", {
                "class": "slsf-country-to__select-flag flag-ui_narrowtpl_flags_20x13_" + props.option.Id
              }), _vm._v(" "), _c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))])])];
            }
          }], null, true),
          model: {
            value: _vm.newItem.module.resort_country,
            callback: function callback($$v) {
              _vm.$set(_vm.newItem.module, "resort_country", $$v);
            },
            expression: "newItem.module.resort_country"
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Курорт",
            "label-size": "sm"
          }
        }, [_c("multiselect", {
          attrs: {
            "clear-on-select": false,
            "close-on-select": false,
            disabled: _vm.isCountriesLoading || _vm.isCitiesLoading,
            limit: 2,
            loading: _vm.isCountriesLoading || _vm.isCitiesLoading,
            maxHeight: 200,
            multiple: true,
            options: _vm.cities,
            preselectFirst: true,
            "show-labels": false,
            value: _vm.newItem.module.resorts,
            label: "Name",
            placeholder: "Введите название курорта",
            "track-by": "Name"
          },
          on: {
            input: _vm.chooseNewResorts,
            remove: _vm.removeNewResort,
            select: _vm.whateverResort
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function fn(_ref5) {
              var values = _ref5.values,
                search = _ref5.search,
                isOpen = _ref5.isOpen;
              return [values.length > 3 && !isOpen ? _c("span", {
                staticClass: "multiselect__single"
              }, [_vm._v(_vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeResorts")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)) + "\n                        ")]) : _vm._e()];
            }
          }], null, true)
        }, [_c("template", {
          slot: "limit"
        }, [_c("span", {
          staticClass: "multiselect__single"
        }, [_vm._v(" и ещё " + _vm._s(_vm.newItem.module.resorts.length - 2) + " " + _vm._s(_vm._f("pluralizeResorts")(_vm.newItem.module.resorts.length - 2)) + "\n                        ")])])], 2)], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Выбор отеля",
            "label-size": "sm"
          }
        }, [_c("multiselect", {
          attrs: {
            "allow-empty": false,
            "clear-on-select": false,
            "close-on-select": false,
            disabled: _vm.isCountriesLoading || _vm.isHotelsLoading,
            limit: 2,
            loading: _vm.isCountriesLoading || _vm.isHotelsLoading,
            maxHeight: 200,
            multiple: true,
            options: _vm.hotels,
            preselectFirst: true,
            "show-labels": false,
            value: _vm.newItem.module.hotels,
            label: "Name",
            placeholder: "Введите название отеля",
            "track-by": "Name"
          },
          on: {
            input: _vm.chooseNewHotel,
            remove: _vm.removeNewHotels
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function fn(_ref6) {
              var values = _ref6.values,
                search = _ref6.search,
                isOpen = _ref6.isOpen;
              return [values.length > 3 && !isOpen ? _c("span", {
                staticClass: "multiselect__single"
              }, [_vm._v(_vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeHotels")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)) + "\n                        ")]) : _vm._e()];
            }
          }, {
            key: "singleLabel",
            fn: function fn(props) {
              return [_c("span", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))]), _vm._v(" "), props.option.CommonRate != 0 ? _c("span", {
                staticClass: "option__title",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.CommonRate))]) : _vm._e(), _vm._v(" "), props.option.StarName ? _c("span", {
                staticClass: "values__hotel-rating",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.StarName))]) : _vm._e()])];
            }
          }, {
            key: "option",
            fn: function fn(props) {
              return [_c("div", {
                staticClass: "option__desc"
              }, [_c("span", {
                staticClass: "option__title"
              }, [_vm._v(_vm._s(props.option.Name))]), _vm._v(" "), props.option.CommonRate != 0 ? _c("span", {
                staticClass: "option__title",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.CommonRate))]) : _vm._e(), _vm._v(" "), props.option.StarName ? _c("span", {
                staticClass: "values__hotel-rating",
                staticStyle: {
                  "float": "right"
                }
              }, [_vm._v(_vm._s(props.option.StarName))]) : _vm._e()])];
            }
          }], null, true)
        }, [_c("template", {
          slot: "limit"
        }, [_c("span", {
          staticClass: "multiselect__single"
        }, [_vm._v(" и ещё " + _vm._s(_vm.newItem.module.hotels.length - 2) + " " + _vm._s(_vm._f("pluralizeHotels")(_vm.newItem.module.hotels.length - 2)) + "\n                        ")])])], 2)], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Туроператоры",
            "label-size": "sm"
          }
        }, [_c("multiselect", {
          attrs: {
            "allow-empty": false,
            "clear-on-select": false,
            "close-on-select": false,
            disabled: _vm.isCountriesLoading || _vm.isTourOperatorsLoading,
            limit: 2,
            loading: _vm.isCountriesLoading || _vm.isTourOperatorsLoading,
            maxHeight: 200,
            multiple: true,
            options: _vm.tour_operators,
            preselectFirst: true,
            "show-labels": false,
            label: "Name",
            placeholder: "Введите название туроператора",
            "track-by": "Name"
          },
          on: {
            input: _vm.chooseNewTourOperator,
            remove: _vm.removeNewTourOperators
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function fn(_ref7) {
              var values = _ref7.values,
                search = _ref7.search,
                isOpen = _ref7.isOpen;
              return [values.length > 3 && !isOpen ? _c("span", {
                staticClass: "multiselect__single"
              }, [_vm._v(_vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeTourOperators")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)))]) : _vm._e()];
            }
          }], null, true),
          model: {
            value: _vm.newItem.module.tour_operators,
            callback: function callback($$v) {
              _vm.$set(_vm.newItem.module, "tour_operators", $$v);
            },
            expression: "newItem.module.tour_operators"
          }
        }, [_c("template", {
          slot: "limit"
        }, [_c("span", {
          staticClass: "multiselect__single"
        }, [_vm._v(" и ещё " + _vm._s(_vm.newItem.module.tour_operators - 2) + " " + _vm._s(_vm._f("pluralizeTourOperators")(_vm.newItem.module.tour_operators - 2)))])])], 2)], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Интервал дат вылета",
            "label-size": "sm"
          }
        }, [_c("VueHotelDatepicker", {
          attrs: {
            confirmText: "Подтвердить",
            endDate: _vm.end,
            format: "DD-MM-YYYY",
            fromText: "С",
            mobile: "mobile",
            monthList: ["Янв.", "Фев.", "Мар.", "Апр.", "Май.", "Июн.", "Июл.", "Авг.", "Сен.", "Окт", "Ноя.", "Дек."],
            placeholder: "Интервал дат вылета",
            resetText: "Очистить",
            startDate: _vm.start,
            toText: "По",
            weekList: ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."]
          },
          on: {
            update: _vm.changeNewDateRange
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "adults",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref8) {
              var errors = _ref8.errors;
              return [_c("b-form-group", {
                staticClass: "mt-2 mb-0",
                attrs: {
                  label: "Взрослые",
                  "label-size": "sm"
                }
              }, [_c("div", {
                staticClass: "row qty align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%",
                  height: "100%"
                }
              }, [_c("button", {
                staticClass: "minus text-center",
                attrs: {
                  disabled: _vm.newItem.module.adults === 1,
                  type: "button"
                },
                on: {
                  click: function click($event) {
                    return _vm.decrementItem("adults");
                  }
                }
              }, [_vm._v("-\n                                ")]), _vm._v(" "), _c("b-form-input", {
                staticClass: "count",
                attrs: {
                  min: "1",
                  name: "qty",
                  step: "1",
                  type: "number"
                },
                model: {
                  value: _vm.newItem.module.adults,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem.module, "adults", $$v);
                  },
                  expression: "newItem.module.adults"
                }
              }), _vm._v(" "), _c("button", {
                staticClass: "plus text-center",
                attrs: {
                  type: "button"
                },
                on: {
                  click: function click($event) {
                    return _vm.incrementItem("adults");
                  }
                }
              }, [_vm._v("+\n                                ")])], 1)]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "children",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref9) {
              var errors = _ref9.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Дети",
                  "label-size": "sm"
                }
              }, [_c("div", {
                staticClass: "row qty align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%",
                  height: "100%"
                }
              }, [_c("button", {
                staticClass: "minus text-center",
                attrs: {
                  disabled: _vm.newItem.module.children === 0,
                  type: "button"
                },
                on: {
                  click: function click($event) {
                    return _vm.decrementItem("children");
                  }
                }
              }, [_vm._v("-\n                                ")]), _vm._v(" "), _c("b-form-input", {
                staticClass: "count",
                attrs: {
                  min: "0",
                  name: "qty",
                  step: "1",
                  type: "number"
                },
                model: {
                  value: _vm.newItem.module.children,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem.module, "children", $$v);
                  },
                  expression: "newItem.module.children"
                }
              }), _vm._v(" "), _c("button", {
                staticClass: "plus text-center",
                attrs: {
                  type: "button"
                },
                on: {
                  click: function click($event) {
                    return _vm.incrementItem("children");
                  }
                }
              }, [_vm._v("+\n                                ")])], 1)]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "price_from",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref10) {
              var errors = _ref10.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Цена от",
                  "label-size": "sm"
                }
              }, [_c("b-form-input", {
                staticClass: "travel-input",
                attrs: {
                  min: "0",
                  step: "1",
                  type: "number"
                },
                model: {
                  value: _vm.newItem.module.price_from,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem.module, "price_from", $$v);
                  },
                  expression: "newItem.module.price_from"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "price_to",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref11) {
              var errors = _ref11.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Цена до",
                  "label-size": "sm"
                }
              }, [_c("b-form-input", {
                staticClass: "travel-input",
                attrs: {
                  min: "0",
                  step: "1",
                  type: "number"
                },
                model: {
                  value: _vm.newItem.module.price_to,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem.module, "price_to", $$v);
                  },
                  expression: "newItem.module.price_to"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "nights_from",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref12) {
              var errors = _ref12.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Ночей от",
                  "label-size": "sm"
                }
              }, [_c("multiselect", {
                attrs: {
                  "allow-empty": false,
                  maxHeight: 200,
                  "option-height": 25,
                  options: _vm.nights,
                  searchable: false,
                  "show-labels": false,
                  placeholder: "От"
                },
                model: {
                  value: _vm.newItem.module.nights_from,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem.module, "nights_from", $$v);
                  },
                  expression: "newItem.module.nights_from"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "nights_to",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref13) {
              var errors = _ref13.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "До",
                  "label-size": "sm"
                }
              }, [_c("multiselect", {
                attrs: {
                  "allow-empty": false,
                  maxHeight: 200,
                  "option-height": 25,
                  options: _vm.nights,
                  searchable: false,
                  "show-labels": false,
                  placeholder: "До"
                },
                model: {
                  value: _vm.newItem.module.nights_to,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem.module, "nights_to", $$v);
                  },
                  expression: "newItem.module.nights_to"
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]) : _vm._e(), _vm._v(" "), _vm.newItem.order_type == "Авиабилеты" ? _c("div", {
          staticClass: "row w-100 mx-auto mb-5"
        }, [_c("div", {
          staticClass: "col-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "city_from",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref14) {
              var errors = _ref14.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Город вылета",
                  "label-size": "sm"
                }
              }, [_c("multiselect", {
                attrs: {
                  "clear-on-select": false,
                  "close-on-select": true,
                  "hide-selected": false,
                  "internal-search": false,
                  loading: _vm.isAviaCitiesLoading,
                  "max-height": 300,
                  multiple: false,
                  options: _vm.options,
                  "options-limit": 300,
                  searchable: true,
                  "show-labels": false,
                  "show-no-results": false,
                  label: "name",
                  placeholder: "Город вылета",
                  "track-by": "code"
                },
                on: {
                  input: _vm.changeCityFrom,
                  "search-change": _vm.getAviaCities
                },
                scopedSlots: _vm._u([{
                  key: "singleLabel",
                  fn: function fn(props) {
                    return _vm.options.length > 0 || _vm.newItem.module.city_from != null ? [!props.option.city_name ? _c("div", [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.name) + ", " + _vm._s(props.option.country_name))])]), _vm._v(" "), _c("span", {
                      staticClass: "option__desc float-right"
                    }, [_vm._v(_vm._s(props.option.code))])]) : _vm._e(), _vm._v(" "), props.option.city_name ? _c("div", [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.city_name) + ", " + _vm._s(props.option.country_name))])]), _vm._v(" "), _c("span", {
                      staticClass: "option__desc float-right"
                    }, [_vm._v(_vm._s(props.option.code))])]) : _vm._e()] : undefined;
                  }
                }, {
                  key: "option",
                  fn: function fn(props) {
                    return [!props.option.city_name ? _c("div", [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.name))])]), _vm._v(" "), _c("div", {
                      staticClass: "row align-items-center option__desc",
                      staticStyle: {
                        width: "100%",
                        height: "100%"
                      }
                    }, [_c("div", {
                      staticClass: "col-6"
                    }, [_c("span", {
                      staticClass: "option__desc"
                    }, [_vm._v("Все аэропорты")])]), _vm._v(" "), _c("div", {
                      staticClass: "col-6"
                    }, [_c("span", {
                      staticClass: "option__desc float-right"
                    }, [_vm._v(_vm._s(props.option.code))])])])]) : _vm._e(), _vm._v(" "), props.option.city_name ? _c("div", [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.city_name))])]), _vm._v(" "), _c("div", {
                      staticClass: "row align-items-center",
                      staticStyle: {
                        width: "100%",
                        height: "100%"
                      }
                    }, [_c("div", {
                      staticClass: "col-6"
                    }, [_c("span", {
                      staticClass: "option__desc"
                    }, [_vm._v(_vm._s(props.option.name))])]), _vm._v(" "), _c("div", {
                      staticClass: "col-6"
                    }, [_c("span", {
                      staticClass: "option__desc float-right"
                    }, [_vm._v(_vm._s(props.option.code))])])])]) : _vm._e()];
                  }
                }], null, true),
                model: {
                  value: _vm.newItem.module.city_from,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem.module, "city_from", $$v);
                  },
                  expression: "newItem.module.city_from"
                }
              }, [_vm._v(" "), _vm._v(" "), _c("span", {
                attrs: {
                  slot: "noResult"
                },
                slot: "noResult"
              }, [_vm._v("Упс! Ничего не найдено. Рассмотрите возможность изменения поискового запроса..")]), _vm._v(" "), _c("span", {
                attrs: {
                  slot: "noOptions"
                },
                slot: "noOptions"
              }, [_vm._v("Начните печатать название города...")])])], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            name: "city_to",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref15) {
              var errors = _ref15.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Город прибытия",
                  "label-size": "sm"
                }
              }, [_c("multiselect", {
                attrs: {
                  "clear-on-select": false,
                  "close-on-select": true,
                  "hide-selected": false,
                  "internal-search": false,
                  loading: _vm.isAviaCitiesLoading,
                  "max-height": 300,
                  multiple: false,
                  options: _vm.options,
                  "options-limit": 300,
                  searchable: true,
                  "show-labels": false,
                  "show-no-results": false,
                  label: "name",
                  placeholder: "Город прибытия",
                  "track-by": "code"
                },
                on: {
                  input: _vm.changeCityTo,
                  "search-change": _vm.getAviaCities
                },
                scopedSlots: _vm._u([{
                  key: "singleLabel",
                  fn: function fn(props) {
                    return _vm.options.length > 0 || _vm.newItem.module.city_to != null ? [!props.option.city_name ? _c("div", [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.name) + ", " + _vm._s(props.option.country_name))])]), _vm._v(" "), _c("span", {
                      staticClass: "option__desc float-right"
                    }, [_vm._v(_vm._s(props.option.code))])]) : _vm._e(), _vm._v(" "), props.option.city_name ? _c("div", [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.city_name) + ", " + _vm._s(props.option.country_name))])]), _vm._v(" "), _c("span", {
                      staticClass: "option__desc float-right"
                    }, [_vm._v(_vm._s(props.option.code))])]) : _vm._e()] : undefined;
                  }
                }, {
                  key: "option",
                  fn: function fn(props) {
                    return [!props.option.city_name ? _c("div", [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.name))])]), _vm._v(" "), _c("div", {
                      staticClass: "row align-items-center option__desc",
                      staticStyle: {
                        width: "100%",
                        height: "100%"
                      }
                    }, [_c("div", {
                      staticClass: "col-6"
                    }, [_c("span", {
                      staticClass: "option__desc"
                    }, [_vm._v("Все аэропорты")])]), _vm._v(" "), _c("div", {
                      staticClass: "col-6"
                    }, [_c("span", {
                      staticClass: "option__desc float-right"
                    }, [_vm._v(_vm._s(props.option.code))])])])]) : _vm._e(), _vm._v(" "), props.option.city_name ? _c("div", [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.city_name))])]), _vm._v(" "), _c("div", {
                      staticClass: "row align-items-center",
                      staticStyle: {
                        width: "100%",
                        height: "100%"
                      }
                    }, [_c("div", {
                      staticClass: "col-6"
                    }, [_c("span", {
                      staticClass: "option__desc"
                    }, [_vm._v(_vm._s(props.option.name))])]), _vm._v(" "), _c("div", {
                      staticClass: "col-6"
                    }, [_c("span", {
                      staticClass: "option__desc float-right"
                    }, [_vm._v(_vm._s(props.option.code))])])])]) : _vm._e()];
                  }
                }], null, true),
                model: {
                  value: _vm.newItem.module.city_to,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem.module, "city_to", $$v);
                  },
                  expression: "newItem.module.city_to"
                }
              }, [_vm._v(" "), _vm._v(" "), _c("span", {
                attrs: {
                  slot: "noResult"
                },
                slot: "noResult"
              }, [_vm._v("Упс! Ничего не найдено. Рассмотрите возможность изменения поискового запроса..")]), _vm._v(" "), _c("span", {
                attrs: {
                  slot: "noOptions"
                },
                slot: "noOptions"
              }, [_vm._v("Начните печатать название города...")])])], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Туда",
            "label-size": "sm"
          }
        }, [_c("datepicker", {
          attrs: {
            "disabled-dates": _vm.disabledDates1,
            language: _vm.languages["ru"],
            name: "depart_date"
          },
          on: {
            input: _vm.changeDepartDate
          },
          model: {
            value: _vm.newItem.module.depart_date,
            callback: function callback($$v) {
              _vm.$set(_vm.newItem.module, "depart_date", $$v);
            },
            expression: "newItem.module.depart_date"
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Обратно",
            "label-size": "sm"
          }
        }, [_c("datepicker", {
          attrs: {
            "clear-button": true,
            "disabled-dates": _vm.disabledDates2,
            language: _vm.languages["ru"],
            name: "return_date"
          },
          model: {
            value: _vm.newItem.module.return_date,
            callback: function callback($$v) {
              _vm.$set(_vm.newItem.module, "return_date", $$v);
            },
            expression: "newItem.module.return_date"
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12"
        }, [_c("b-form-group", {
          staticClass: "mb-0",
          attrs: {
            label: "Класс",
            "label-size": "sm"
          }
        }, [_c("multiselect", {
          attrs: {
            "allow-empty": false,
            maxHeight: 200,
            "option-height": 25,
            options: _vm.classes,
            searchable: false,
            "show-labels": false,
            placeholder: "Класс"
          },
          on: {
            input: _vm.changeClass
          },
          model: {
            value: _vm.newItem.module.avia_class,
            callback: function callback($$v) {
              _vm.$set(_vm.newItem.module, "avia_class", $$v);
            },
            expression: "newItem.module.avia_class"
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12"
        }, [_c("div", {
          staticClass: "row align-items-center justify-content-center mx-auto mt-3",
          staticStyle: {
            width: "100%",
            height: "100%"
          }
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "adults",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref16) {
              var errors = _ref16.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Взрослые",
                  "label-size": "sm"
                }
              }, [_c("div", {
                staticClass: "row qty align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%",
                  height: "100%"
                }
              }, [_c("button", {
                staticClass: "btn minus text-center",
                attrs: {
                  disabled: _vm.newItem.module.adults === 0,
                  type: "button"
                },
                on: {
                  click: function click($event) {
                    return _vm.decrementItem("adults");
                  }
                }
              }, [_vm._v("-\n                                    ")]), _vm._v(" "), _c("b-form-input", {
                staticClass: "count",
                attrs: {
                  min: "1",
                  name: "qty",
                  step: "1",
                  type: "number"
                },
                model: {
                  value: _vm.newItem.module.adults,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem.module, "adults", $$v);
                  },
                  expression: "newItem.module.adults"
                }
              }), _vm._v(" "), _c("button", {
                staticClass: "btn plus text-center",
                attrs: {
                  type: "button"
                },
                on: {
                  click: function click($event) {
                    return _vm.incrementItem("adults");
                  }
                }
              }, [_vm._v("+\n                                    ")])], 1)]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "children_under_12",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref17) {
              var errors = _ref17.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Дети до 12 лет",
                  "label-size": "sm"
                }
              }, [_c("div", {
                staticClass: "row qty align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%",
                  height: "100%"
                }
              }, [_c("button", {
                staticClass: "btn minus text-center",
                attrs: {
                  disabled: _vm.newItem.module.children_under_12 === 0,
                  type: "button"
                },
                on: {
                  click: function click($event) {
                    return _vm.decrementItem("children_under_12");
                  }
                }
              }, [_vm._v("-\n                                ")]), _vm._v(" "), _c("b-form-input", {
                staticClass: "count",
                attrs: {
                  min: "0",
                  name: "qty",
                  step: "1",
                  type: "number"
                },
                model: {
                  value: _vm.newItem.module.children_under_12,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem.module, "children_under_12", $$v);
                  },
                  expression: "newItem.module.children_under_12"
                }
              }), _vm._v(" "), _c("button", {
                staticClass: "btn plus text-center",
                attrs: {
                  type: "button"
                },
                on: {
                  click: function click($event) {
                    return _vm.incrementItem("children_under_12");
                  }
                }
              }, [_vm._v("+\n                                ")])], 1)]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12"
        }, [_c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "children_under_2",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref18) {
              var errors = _ref18.errors;
              return [_c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Дети до 2 лет",
                  "label-size": "sm"
                }
              }, [_c("div", {
                staticClass: "row qty align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%",
                  height: "100%"
                }
              }, [_c("button", {
                staticClass: "btn minus text-center",
                attrs: {
                  disabled: _vm.newItem.module.children_under_2 === 0,
                  type: "button"
                },
                on: {
                  click: function click($event) {
                    return _vm.decrementItem("children_under_2");
                  }
                }
              }, [_vm._v("-\n                                ")]), _vm._v(" "), _c("b-form-input", {
                staticClass: "count",
                attrs: {
                  min: "0",
                  name: "qty",
                  step: "1",
                  type: "number"
                },
                model: {
                  value: _vm.newItem.module.children_under_2,
                  callback: function callback($$v) {
                    _vm.$set(_vm.newItem.module, "children_under_2", $$v);
                  },
                  expression: "newItem.module.children_under_2"
                }
              }), _vm._v(" "), _c("button", {
                staticClass: "btn plus text-center",
                attrs: {
                  type: "button"
                },
                on: {
                  click: function click($event) {
                    return _vm.incrementItem("children_under_2");
                  }
                }
              }, [_vm._v("+\n                                ")])], 1)]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]) : _vm._e(), _vm._v(" "), _vm.newItem.order_type == "Отель" ? _c("div") : _vm._e(), _vm._v(" "), _c("div", {
          staticClass: "row w-100 mx-auto mb-5"
        }, [_c("div", {
          staticClass: "col-6 col-md-6 contact-btn"
        }, [_c("b-button", {
          staticClass: "btn btn-primary",
          staticStyle: {
            width: "100%"
          },
          on: {
            click: _vm.back
          }
        }, [_vm._v("\n                        Отмена\n                    ")])], 1), _vm._v(" "), _c("div", {
          staticClass: "col-6 col-md-6 contact-btn"
        }, [_c("b-button", {
          staticClass: "btn btn-primary",
          staticStyle: {
            width: "100%"
          },
          attrs: {
            disabled: invalid || _vm.loading,
            type: "submit"
          },
          on: {
            click: _vm.saveOrder
          }
        }, [_c("div", {
          staticClass: "row align-items-center justify-content-center m-auto w-100 h-100 text-center"
        }, [_vm.loading ? _c("span", {
          staticClass: "spinner-border spinner-border-sm mx-2",
          attrs: {
            "aria-hidden": "true",
            role: "status"
          }
        }) : _vm._e(), _vm._v(" "), _vm.loading ? _c("span", {
          staticClass: "sr-only"
        }, [_vm._v("Loading...")]) : _vm._e(), _vm._v("\n                            Сохранить\n                        ")])])], 1)])];
      }
    }])
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn.btn-primary[data-v-18a03f1a] {\n    color: #fff !important;\n    background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);\n    background-color: rgba(0, 0, 0, 0);\n    background-color: #f08b23 !important;\n    border-color: #f08b23 !important;\n    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n@media only screen and (max-width: 767.98px) {\n.vdp-container:not(.desktop) .vdp-picker {\n        width: 100% !important;\n        padding: 8px\n}\n.tour-module .cont .row {\n        width: 100% !important;\n}\n.qty input {\n        border: 0;\n        width: 50%;\n}\n}\n@media screen and (max-width: 477px) {\n.vdp-input {\n        min-width: 100% !important;\n}\n.vdp-container {\n        width: 100% !important;\n}\n}\n@media screen and (max-width: 576px) {\n.tour-module .cont {\n        height: 100% !important;\n}\n}\n.vdp-datepicker__calendar {\n    position: absolute;\n    z-index: 2 !important;\n    padding: 18px !important;\n    background: #fff;\n    width: 300px;\n    border: 1px solid #ccc;\n}\n.vdp-datepicker input {\n    /*min-width: 300px;*/\n    padding: 8px;\n    border: 1px solid #ffa500 !important;\n    color: #062348 !important;\n    font-size: 16px;\n    line-height: 32px;\n    outline: none;\n    border-radius: 20px;\n    min-height: 40px;\n    height: 40px !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n    width: 100%;\n}\n.vdp-datepicker input::-moz-placeholder {\n    color: #062348 !important;\n}\n.vdp-datepicker input::placeholder {\n    color: #062348 !important;\n}\n.vdp-datepicker__calendar .day-header {\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.vdp-datepicker__clear-button {\n    position: absolute;\n    right: 20px;\n    top: -11px;\n    color: #0f213d;\n    font-size: 36px;\n}\n.vdp-datepicker__calendar .cell {\n    display: inline-block;\n    padding: 0 5px;\n    width: 14.285714285714286%;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .day {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 30px;\n    color: #0f213d;\n    text-align: center;\n    cursor: pointer;\n}\n.vdp-datepicker__calendar .day {\n    background-image: none !important;\n    height: 30px !important;\n}\n.vdp-datepicker__calendar .cell {\n    display: inline-block;\n    padding: 0 5px;\n    width: 14.285714285714286%;\n    height: 30px !important;\n    line-height: 30px !important;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n    border: 1px solid #ffa500 !important;\n}\n.vdp-datepicker__calendar .cell.selected {\n    background: #ffa50070 !important;\n    background-image: none;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n    background: #ffa50070 !important;\n    background-image: none;\n}\n.vdp-calendar .calendar-date .week .day.start-date::before {\n    background-color: #ffa500 !important;\n}\n.vdp-calendar .calendar-date .week .day.end-date::after {\n    background-color: #ffa500 !important;\n}\n.vdp-calendar .calendar-date .week .day.in-date-range {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.start-date {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.end-date {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.today {\n    border: 1px solid #ffa500 !important;\n}\n.vdp-calendar-footer .confirm, .vdp-calendar-footer .reset {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.vdp-calendar-footer .reset {\n    color: #062348 !important;\n}\n.vdp-calendar-footer .confirm {\n    color: #ffa500 !important;\n}\n.vdp-calendar .calendar-week-item, .vdp-calendar .calendar-month-title {\n    color: #062348 !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.values__hotel-rating::after {\n    content: '';\n    display: inline-block;\n    margin-left: 2px;\n    width: 13px;\n    height: 12px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.multiselect__tags .price {\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .price:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.multiselect-title {\n    color: #062348 !important;\n    font-family: \"Bello Pro\";\n    /*font-weight: 700;*/\n}\n.multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tag {\n    background: #062348;\n}\n.multiselect__tag-icon::after {\n    color: #fff;\n}\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n    background: #f08b23;\n}\n.multiselect__option--highlight::after {\n    background: #f08b23;\n}\n.multiselect__option--highlight {\n    background: #f08b23;\n}\n.multiselect {\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n}\n.multiselect__placeholder {\n    color: #062348;\n}\n.multiselect__input:focus, .multiselect__single:focus {\n    border-color: #062348;\n}\n.multiselect__input::-moz-placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect__input::placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect--disabled {\n    background: white;\n}\n.multiselect--disabled .multiselect__select {\n    background: transparent;\n}\n.multiselect__spinner::after, .multiselect__spinner::before {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border: 3px solid transparent;\n    border-top-color: transparent;\n    border-top-color: #ffa500;\n    box-shadow: 0 0 0 1px transparent;\n    background: transparent;\n}\n.multiselect__spinner {\n    border-radius: 50px;\n}\n.qty .count {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 30px;\n    padding: 0 2px;\n    min-width: 35px;\n    text-align: center;\n    font-family: \"Open Sans\";\n    color: #0f213d !important;\n}\n.qty button {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: top;\n    color: white;\n    width: 30px;\n    height: 30px;\n    font: 30px/1 Arial, sans-serif;\n    text-align: center;\n    border-radius: 50%;\n    padding: 0;\n    background: #f08b23;\n    border: 0;\n}\n.qty div {\n    text-align: center;\n}\n.qty .minus:hover {\n    background: #0f213d !important;\n    color: white;\n}\n.qty .plus:hover {\n    background: #0f213d !important;\n    color: white;\n}\n.qty input {\n    border: 0;\n    width: 60%;\n}\n.qty input::-webkit-outer-spin-button,\n.qty input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.qty input:disabled {\n    background-color: white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n@media only screen and (max-width: 767.98px) {\n.vhd-container:not(.desktop) .vhd-picker {\n        width: 100% !important;\n        padding: 8px\n}\n.tour-module .cont .row {\n        width: 100% !important;\n}\n.qty input {\n        border: 0;\n        width: 50%;\n}\n}\n@media screen and (max-width: 477px) {\n.vhd-input {\n        min-width: 100% !important;\n}\n.vhd-container {\n        width: 100% !important;\n}\n}\n@media screen and (max-width: 576px) {\n.tour-module .cont {\n        height: 100% !important;\n}\n}\n.vhd-picker {\n    z-index: 2 !important;\n    min-height: 362px !important;\n    padding: 18px !important;\n}\n.vhd-input {\n    /*min-width: 300px;*/\n    padding: 8px;\n    border: 1px solid #ffa500 !important;\n    color: #062348 !important;\n    font-size: 16px;\n    line-height: 32px;\n    outline: none;\n    border-radius: 20px;\n    min-height: 40px;\n    height: 40px !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n    width: 100%;\n}\n.vhd-input::-moz-placeholder {\n    color: #062348 !important;\n}\n.vhd-input::placeholder {\n    color: #062348 !important;\n}\n.vhd-container:not(.desktop) .vhd-picker {\n    min-height: 362px;\n}\n.vhd-calendar .calendar-date .week .day[data-v-0cb4ff92] {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 30px;\n    color: #505050;\n    text-align: center;\n    cursor: pointer;\n}\n.vhd-calendar .calendar-date .week .day {\n    background-image: none !important;\n    height: 30px !important;\n}\n.vhd-calendar-header {\n    height: 20px !important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header {\n    height: 60px !important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header > .info {\n    display: block;\n    width: 100%;\n    height: 60px;\n    padding-top: 32px !important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-footer {\n    height: 36px !important;\n}\n.vhd-calendar-footer {\n    height: 24px !important;\n}\n.vhd-calendar .calendar-date .week {\n    height: 30px !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date::before {\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date::after {\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.in-date-range {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.today {\n    border: 1px solid #ffa500 !important;\n}\n.vhd-calendar-footer .confirm, .vhd-calendar-footer .reset {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.vhd-calendar-footer .reset {\n    color: #062348 !important;\n}\n.vhd-calendar-footer .confirm {\n    color: #ffa500 !important;\n}\n.vhd-calendar .calendar-week-item, .vhd-calendar .calendar-month-title {\n    color: #062348 !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.values__hotel-rating::after {\n    content: '';\n    display: inline-block;\n    margin-left: 2px;\n    width: 13px;\n    height: 12px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.multiselect__tags .price {\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .price:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.multiselect-title {\n    color: #062348 !important;\n    font-family: \"Bello Pro\";\n    /*font-weight: 700;*/\n}\n.multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tag {\n    background: #062348;\n}\n.multiselect__tag-icon::after {\n    color: #fff;\n}\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n    background: #f08b23;\n}\n.multiselect__option--highlight::after {\n    background: #f08b23;\n}\n.multiselect__option--highlight {\n    background: #f08b23;\n}\n.multiselect {\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n}\n.multiselect__placeholder {\n    color: #062348;\n}\n.multiselect__input:focus, .multiselect__single:focus {\n    border-color: #062348;\n}\n.multiselect__input::-moz-placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect__input::placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect--disabled {\n    background: white;\n}\n.multiselect--disabled .multiselect__select {\n    background: transparent;\n}\n.multiselect__spinner::after, .multiselect__spinner::before {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border: 3px solid transparent;\n    border-top-color: transparent;\n    border-top-color: #ffa500;\n    box-shadow: 0 0 0 1px transparent;\n    background: transparent;\n}\n.multiselect__spinner {\n    border-radius: 50px;\n}\n.qty .count {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 30px;\n    padding: 0 2px;\n    min-width: 35px;\n    text-align: center;\n    font-family: \"Open Sans\";\n    color: #0f213d !important;\n}\n.qty button {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: top;\n    color: white;\n    width: 30px;\n    height: 30px;\n    font: 30px/1 Arial, sans-serif;\n    text-align: center;\n    border-radius: 50%;\n    padding: 0;\n    background: #f08b23;\n}\n\n/*.qty .plus {*/\n/*    cursor: pointer;*/\n/*    display: inline-block;*/\n/*    vertical-align: top;*/\n/*    color: white;*/\n/*    width: 30px;*/\n/*    height: 30px;*/\n/*    font: 30px/1 Arial,sans-serif;*/\n/*    text-align: center;*/\n/*    border-radius: 50%;*/\n/*}*/\n/*.qty .minus {*/\n/*    cursor: pointer;*/\n/*    display: inline-block;*/\n/*    vertical-align: top;*/\n/*    color: white;*/\n/*    width: 30px;*/\n/*    height: 30px;*/\n/*    font: 30px/1 Arial,sans-serif;*/\n/*    text-align: center;*/\n/*    border-radius: 50%;*/\n/*    background-clip: padding-box;*/\n/*}*/\n.qty div {\n    text-align: center;\n}\n.qty .minus:hover {\n    background: #0f213d !important;\n    color: white;\n}\n.qty .plus:hover {\n    background: #0f213d !important;\n    color: white;\n}\n.qty input {\n    border: 0;\n    width: 60%;\n}\n.qty input::-webkit-outer-spin-button,\n.qty input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.qty input:disabled {\n    background-color: white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_18a03f1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_18a03f1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_18a03f1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_18a03f1a_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_18a03f1a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_18a03f1a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_18a03f1a_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_18a03f1a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_18a03f1a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Orders/Create.vue":
/*!************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Orders/Create.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_18a03f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=18a03f1a&scoped=true& */ "./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=template&id=18a03f1a&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _Create_vue_vue_type_style_index_0_id_18a03f1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css& */ "./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css&");
/* harmony import */ var _Create_vue_vue_type_style_index_1_id_18a03f1a_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css& */ "./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css&");
/* harmony import */ var _Create_vue_vue_type_style_index_2_id_18a03f1a_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css& */ "./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;




/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_18a03f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_18a03f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "18a03f1a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/admin/Orders/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=template&id=18a03f1a&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=template&id=18a03f1a&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_18a03f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_18a03f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_18a03f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=18a03f1a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=template&id=18a03f1a&scoped=true&");


/***/ }),

/***/ "./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_18a03f1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=0&id=18a03f1a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_18a03f1a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=1&id=18a03f1a&lang=css&");


/***/ }),

/***/ "./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_18a03f1a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/admin/Orders/Create.vue?vue&type=style&index=2&id=18a03f1a&lang=css&");


/***/ })

}]);