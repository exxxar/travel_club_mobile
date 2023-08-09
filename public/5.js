(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Create",
  data: function data() {
    return {
      city_options: ['Донецк', 'Ростов-на-Дону'],
      new_tour: {
        UserId: '',
        TourId: '',
        TourInfo: {
          country: {
            Id: 150,
            Name: "Россия",
            Alias: "Russia",
            Flags: 8,
            HasTickets: true,
            HotelIsNotInStop: true,
            IsProVisa: false,
            IsVisa: false,
            OriginalName: "Russia",
            Rank: 0,
            TicketsIncluded: true
          },
          resort: {
            Name: 'Любой'
          },
          hotel: {
            Name: 'Любой'
          },
          room_type: '',
          meal: '',
          tour_operator: '',
          date_range: {
            start: '',
            end: ''
          },
          price: '',
          paid: '',
          left: '',
          services: '',
          avia_tickets: [],
          passengers: [],
          files: []
        },
        StartAt: '',
        EndAt: '',
        Comment: ''
      },
      new_mode: false,
      meals: [{
        Id: '115',
        Name: 'AI',
        desc: 'завтраки, обеды, ужины, напитки'
      }, {
        Id: '114',
        Name: 'BB',
        desc: 'завтраки'
      }, {
        Id: '112',
        Name: 'FB',
        desc: 'завтраки, обеды, ужины'
      }, {
        Id: '121',
        Name: 'FB+',
        desc: 'завтраки, обеды, ужины - расширенное меню'
      }, {
        Id: '113',
        Name: 'HB',
        desc: 'завтраки, ужины'
      }, {
        Id: '122',
        Name: 'HB+',
        desc: 'завтраки, ужины - расширенное меню'
      }, {
        Id: '117',
        Name: 'RO',
        desc: 'без питания'
      }, {
        Id: '116',
        Name: 'UAI',
        desc: 'завтраки, обеды, ужины, напитки - расширенное меню'
      }, {
        Id: '129',
        Name: 'SC',
        desc: 'самообслуживание'
      }],
      loading: false,
      new_files: [],
      start: undefined,
      end: undefined,
      flag: false,
      seconds: 0,
      interval: ''
    };
  },
  created: function created() {
    if (this.countries.length === 0) {
      this.$store.dispatch('getCountries', {
        town_id: 0
      });
    }
    this.$store.dispatch('getCities', this.new_tour.TourInfo.country.Id);
    this.$store.dispatch('getHotels', {
      country_id: this.new_tour.TourInfo.country.Id,
      town_id: '0',
      star_id: '0'
    });
  },
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    isAdmin: function isAdmin() {
      return this.$store.getters.isAdmin;
    },
    isManager: function isManager() {
      return this.$store.getters.isManager;
    },
    tourModule: function tourModule() {
      return this.$store.getters.tourModule;
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
    branches: function branches() {
      return this.$store.getters.branches;
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
    }
  },
  methods: {
    back: function back() {
      if (this.isAdmin) {
        this.$router.push('/admin/client-tours/' + this.$route.params.id);
      }
      if (this.isManager) {
        this.$router.push('/manager/client-tours/' + this.$route.params.id);
      }
    },
    chooseNewResortCountry: function chooseNewResortCountry(value) {
      this.new_tour.TourInfo.resort = {
        Name: 'Любой'
      };
      this.new_tour.TourInfo.hotel = {
        Name: 'Любой'
      };
      this.new_tour.TourInfo.country = value;
      this.$store.dispatch('getCities', this.new_tour.TourInfo.country.Id);
      this.$store.dispatch('getHotels', {
        country_id: this.new_tour.TourInfo.country.Id,
        town_id: '0',
        star_id: '0'
      });
    },
    chooseNewResorts: function chooseNewResorts(value) {
      var _this = this;
      this.new_tour.TourInfo.resort = value;
      if (this.new_tour.TourInfo.resort.Name != 'Любой') {
        // this.new_tour.TourInfo.resort = this.tourModule.resorts[0];
        var town_id = this.new_tour.TourInfo.resort.Id;
        //поиск отелей по городам-курортам
        this.$store.dispatch('getHotels', {
          country_id: this.new_tour.TourInfo.country.Id,
          town_id: town_id,
          star_id: '0'
        }).then(function () {
          if (_this.hotels.findIndex(function (item) {
            return item.Id == _this.new_tour.TourInfo.hotel.Id;
          }) == -1) {
            _this.new_tour.TourInfo.hotel = {
              Name: 'Любой'
            };
          }
        });
      } else {
        //если городов-курортов не выбрано, то поиск отелей по стране
        this.$store.dispatch('getHotels', {
          country_id: this.new_tour.TourInfo.country.Id,
          town_id: '0',
          star_id: '0'
        });
      }
    },
    chooseNewHotel: function chooseNewHotel(value) {
      this.new_tour.TourInfo.hotel = value;
    },
    changeNewDateRange: function changeNewDateRange(date_object) {
      this.new_tour.TourInfo.date_range = date_object;
    },
    chooseNewMeal: function chooseNewMeal(value) {
      this.new_tour.TourInfo.meal = value;
    },
    changeNewPrice: function changeNewPrice() {
      this.new_tour.TourInfo.left = this.new_tour.TourInfo.price - this.new_tour.TourInfo.paid;
    },
    handleNewFiles: function handleNewFiles() {
      var uploadedFiles = this.$refs.new_tour_files.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        if (/\.(jpe?g|png|svg|pdf|txt|docx|doc)$/i.test(uploadedFiles[i].name)) {
          var date = new Date();
          this.new_tour.TourInfo.files.push({
            type: 'file',
            name: uploadedFiles[i].name,
            data: uploadedFiles[i],
            date: date
          });
          this.getImagePreviews(this.new_tour.TourInfo.files);
        } else {
          break;
        }
      }
    },
    onResult: function onResult(data) {
      var time = Date.now();
      var date = new Date();
      this.new_tour.TourInfo.files.push({
        type: 'audio',
        name: 'record-' + time + '.mp3',
        src: window.URL.createObjectURL(data),
        data: data,
        date: date,
        seconds: this.seconds
      });
      this.countSeconds();
      this.getImagePreviews(this.new_tour.TourInfo.files);
    },
    saveClientTour: function saveClientTour() {
      var _this2 = this;
      this.loading = true;
      this.new_tour.UserId = this.$route.params.id;
      this.new_tour.StartAt = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.new_tour.TourInfo.date_range.start, "DD-MM-YYYY");
      this.new_tour.EndAt = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.new_tour.TourInfo.date_range.end, "DD-MM-YYYY");
      var formData = new FormData();
      formData.append("UserTour", JSON.stringify(this.new_tour));
      for (var i = 0; i < this.new_tour.TourInfo.files.length; i++) {
        var file = this.new_tour.TourInfo.files[i].data;
        formData.append('files[' + i + ']', file);
      }
      this.$store.dispatch('newClientTour', formData).then(function (response) {
        _this2.sendMessage('Тур клиента успешно добавлен');
        _this2.new_tour = {
          UserId: '',
          TourId: '',
          TourInfo: {
            country: {
              Id: 150,
              Name: "Россия",
              Alias: "Russia",
              Flags: 8,
              HasTickets: true,
              HotelIsNotInStop: true,
              IsProVisa: false,
              IsVisa: false,
              OriginalName: "Russia",
              Rank: 0,
              TicketsIncluded: true
            },
            resort: {
              Name: 'Любой'
            },
            hotel: {
              Name: 'Любой'
            },
            meal: '',
            tour_operator: '',
            date_range: {
              start: '',
              end: ''
            },
            price: '',
            paid: '',
            left: '',
            services: '',
            avia_tickets: [],
            passengers: [],
            files: []
          },
          StartAt: '',
          EndAt: '',
          Comment: '',
          Archive: false
        };
        _this2.$store.dispatch('getCities', _this2.new_tour.TourInfo.country.Id);
        _this2.$store.dispatch('getHotels', {
          country_id: _this2.new_tour.TourInfo.country.Id,
          town_id: '0',
          star_id: '0'
        });
        _this2.loading = false;
      });
    },
    //both
    getImagePreviews: function getImagePreviews(arr) {
      var _this3 = this;
      var _loop = function _loop(i) {
        if (/\.(jpe?g|png|svg)$/i.test(arr[i].name)) {
          var reader = new FileReader();
          reader.addEventListener("load", function () {
            this.$refs['preview' + parseInt(i)][0].src = reader.result;
          }.bind(_this3), false);
          reader.readAsDataURL(arr[i].data);
        } else {
          _this3.$nextTick(function () {
            this.$refs['preview' + parseInt(i)][0].src = '/images/LOGO-1.png';
          });
        }
      };
      for (var i = 0; i < arr.length; i++) {
        _loop(i);
      }
    },
    removeFile: function removeFile(arr, key) {
      arr.splice(key, 1);
      this.getImagePreviews(arr);
    },
    onStream: function onStream(stream) {
      this.countSeconds();
      console.log('Got a stream object:', stream);
    },
    countSeconds: function countSeconds() {
      this.flag = !this.flag;
      if (this.flag == true) {
        this.seconds = 0;
        this.interval = setInterval(this.incrementSeconds, 1000);
      } else {
        clearInterval(this.interval);
      }
    },
    incrementSeconds: function incrementSeconds() {
      this.seconds += 1;
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
    pluralizeChoose: function pluralizeChoose(n) {
      if (n === 1) {
        return 'выбран';
      }
      return 'выбрано';
    }
  },
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_0__["mask"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=template&id=653a1a2e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=template&id=653a1a2e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("ValidationObserver", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var invalid = _ref.invalid;
        return [_c("div", {
          staticClass: "row mb-5 mx-auto"
        }, [_c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Куда")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "country",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref2) {
              var errors = _ref2.errors;
              return [_c("multiselect", {
                attrs: {
                  options: _vm.countries,
                  "option-height": 25,
                  placeholder: "Выберите страну",
                  "show-labels": false,
                  maxHeight: 200,
                  label: "Name",
                  "track-by": "Name",
                  loading: _vm.isCountriesLoading,
                  disabled: _vm.isCountriesLoading,
                  "allow-empty": false
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
                  value: _vm.new_tour.TourInfo.country,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_tour.TourInfo, "country", $$v);
                  },
                  expression: "new_tour.TourInfo.country"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Курорт")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "resort",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref3) {
              var errors = _ref3.errors;
              return [_c("multiselect", {
                attrs: {
                  options: _vm.cities,
                  placeholder: "Введите название курорта",
                  "show-labels": false,
                  maxHeight: 200,
                  label: "Name",
                  "track-by": "Name",
                  "close-on-select": true,
                  "clear-on-select": true,
                  loading: _vm.isCountriesLoading || _vm.isCitiesLoading,
                  disabled: _vm.isCountriesLoading || _vm.isCitiesLoading,
                  preselectFirst: true
                },
                on: {
                  input: _vm.chooseNewResorts
                },
                scopedSlots: _vm._u([{
                  key: "selection",
                  fn: function fn(_ref4) {
                    var values = _ref4.values,
                      search = _ref4.search,
                      isOpen = _ref4.isOpen;
                    return [values.length > 3 && !isOpen ? _c("span", {
                      staticClass: "multiselect__single"
                    }, [_vm._v("\n                            " + _vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeResorts")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)) + "\n                        ")]) : _vm._e()];
                  }
                }], null, true),
                model: {
                  value: _vm.new_tour.TourInfo.resort,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_tour.TourInfo, "resort", $$v);
                  },
                  expression: "new_tour.TourInfo.resort"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Отель")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "hotel",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref5) {
              var errors = _ref5.errors;
              return [_c("multiselect", {
                attrs: {
                  options: _vm.hotels,
                  placeholder: "Введите название отеля",
                  "show-labels": false,
                  maxHeight: 200,
                  label: "Name",
                  "track-by": "Name",
                  "close-on-select": true,
                  "clear-on-select": true,
                  loading: _vm.isCountriesLoading || _vm.isHotelsLoading,
                  disabled: _vm.isCountriesLoading || _vm.isHotelsLoading,
                  "allow-empty": false,
                  preselectFirst: true
                },
                on: {
                  input: _vm.chooseNewHotel
                },
                scopedSlots: _vm._u([{
                  key: "selection",
                  fn: function fn(_ref6) {
                    var values = _ref6.values,
                      search = _ref6.search,
                      isOpen = _ref6.isOpen;
                    return [values.length > 3 && !isOpen ? _c("span", {
                      staticClass: "multiselect__single"
                    }, [_vm._v("\n                            " + _vm._s(values.length) + " " + _vm._s(_vm._f("pluralizeHotels")(values.length)) + " " + _vm._s(_vm._f("pluralizeChoose")(values.length)) + "\n                        ")]) : _vm._e()];
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
                }], null, true),
                model: {
                  value: _vm.new_tour.TourInfo.hotel,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_tour.TourInfo, "hotel", $$v);
                  },
                  expression: "new_tour.TourInfo.hotel"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Питание")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "meal",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref7) {
              var errors = _ref7.errors;
              return [_c("multiselect", {
                attrs: {
                  options: _vm.meals,
                  "option-height": 25,
                  placeholder: "Выберите питание",
                  "show-labels": false,
                  maxHeight: 200,
                  label: "Name",
                  "track-by": "Name",
                  "close-on-select": true,
                  "clear-on-select": true,
                  "allow-empty": false
                },
                on: {
                  input: _vm.chooseNewMeal
                },
                scopedSlots: _vm._u([{
                  key: "singleLabel",
                  fn: function fn(props) {
                    return [_c("span", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.Name))])])];
                  }
                }, {
                  key: "option",
                  fn: function fn(props) {
                    return [_c("div", [_c("div", {
                      staticClass: "option__desc"
                    }, [_c("span", {
                      staticClass: "option__title"
                    }, [_vm._v(_vm._s(props.option.Name))])]), _vm._v(" "), _c("div", {
                      staticClass: "row align-items-center m-auto",
                      staticStyle: {
                        width: "100%",
                        height: "100%"
                      }
                    }, [_c("p", {
                      staticStyle: {
                        "font-size": "12px",
                        margin: "0px"
                      }
                    }, [_vm._v(_vm._s(props.option.desc))])])])];
                  }
                }], null, true),
                model: {
                  value: _vm.new_tour.TourInfo.meal,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_tour.TourInfo, "meal", $$v);
                  },
                  expression: "new_tour.TourInfo.meal"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Категория номера")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "room_type",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref8) {
              var errors = _ref8.errors;
              return [_c("div", {
                staticClass: "row multiselect__tags align-items-center justify-content-center m-auto",
                staticStyle: {
                  width: "100%"
                }
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.new_tour.TourInfo.room_type,
                  expression: "new_tour.TourInfo.room_type"
                }],
                staticClass: "multiselect__input price",
                attrs: {
                  type: "text",
                  placeholder: "Категория номера"
                },
                domProps: {
                  value: _vm.new_tour.TourInfo.room_type
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.new_tour.TourInfo, "room_type", $event.target.value);
                  }
                }
              })]), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-12 col-md-6"
        }, [_c("div", {
          staticClass: "row align-items-center m-auto",
          staticStyle: {
            width: "100%"
          }
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Даты тура")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "date_range",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref9) {
              var errors = _ref9.errors;
              return [_c("div", {
                staticClass: "row align-items-center justify-content-center m-auto w-100",
                staticStyle: {
                  width: "100%"
                }
              }, [_c("VueHotelDatepicker", {
                staticClass: "w-100",
                attrs: {
                  startDate: _vm.new_tour.TourInfo.date_range.start,
                  endDate: _vm.new_tour.TourInfo.date_range.end,
                  placeholder: "Даты тура",
                  format: "DD/MM/YYYY",
                  weekList: ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."],
                  monthList: ["Янв.", "Фев.", "Мар.", "Апр.", "Май.", "Июн.", "Июл.", "Авг.", "Сен.", "Окт", "Ноя.", "Дек."],
                  fromText: "С",
                  toText: "По",
                  resetText: "Очистить",
                  confirmText: "Подтвердить",
                  mobile: "mobile"
                },
                on: {
                  update: _vm.changeNewDateRange
                }
              })], 1), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("div", {
          staticClass: "row align-items-center m-auto",
          staticStyle: {
            width: "100%"
          }
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Цена")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "price",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref10) {
              var errors = _ref10.errors;
              return [_c("b-form-input", {
                staticClass: "travel-input",
                attrs: {
                  type: "number",
                  number: "",
                  step: "1",
                  min: "0"
                },
                on: {
                  input: _vm.changeNewPrice
                },
                model: {
                  value: _vm.new_tour.TourInfo.price,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_tour.TourInfo, "price", $$v);
                  },
                  expression: "new_tour.TourInfo.price"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-6 col-12"
        }, [_c("div", {
          staticClass: "row align-items-center m-auto",
          staticStyle: {
            width: "100%"
          }
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Выплачено")]), _vm._v(" "), _c("ValidationProvider", {
          staticStyle: {
            width: "100%",
            "text-align": "center"
          },
          attrs: {
            name: "left",
            rules: "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref11) {
              var errors = _ref11.errors;
              return [_c("b-form-input", {
                staticClass: "travel-input price",
                attrs: {
                  type: "number",
                  number: "",
                  step: "1",
                  min: "0"
                },
                on: {
                  input: _vm.changeNewPrice
                },
                model: {
                  value: _vm.new_tour.TourInfo.paid,
                  callback: function callback($$v) {
                    _vm.$set(_vm.new_tour.TourInfo, "paid", $$v);
                  },
                  expression: "new_tour.TourInfo.paid"
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "validate-error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("div", {
          staticClass: "row align-items-center justify-content-center mx-auto mt-3",
          staticStyle: {
            width: "100%"
          }
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Дополнительные услуги")]), _vm._v(" "), _c("b-form-textarea", {
          staticClass: "travel-input",
          staticStyle: {
            padding: "5px 15px",
            border: "1px solid #f08b23",
            "border-radius": "20px !important"
          },
          attrs: {
            rows: "4",
            cols: "80",
            placeholder: "Дополнительные услуги"
          },
          model: {
            value: _vm.new_tour.TourInfo.services,
            callback: function callback($$v) {
              _vm.$set(_vm.new_tour.TourInfo, "services", $$v);
            },
            expression: "new_tour.TourInfo.services"
          }
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Авиабилеты")]), _vm._v(" "), _c("avia-tickets-list", {
          attrs: {
            avia_tickets: _vm.new_tour.TourInfo.avia_tickets
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Пассажиры")]), _vm._v(" "), _c("passengers-list", {
          attrs: {
            passengers: _vm.new_tour.TourInfo.passengers
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "col-md-12"
        }, [_c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Файлы для клиента")]), _vm._v(" "), _c("div", {
          staticClass: "form-group row mt-2"
        }, [_c("div", {
          staticClass: "col-md-12"
        }, [_c("div", {
          staticClass: "large-12 medium-12 small-12 filezone"
        }, [_c("input", {
          ref: "new_tour_files",
          attrs: {
            type: "file",
            id: "new_files",
            multiple: ""
          },
          on: {
            change: function change($event) {
              return _vm.handleNewFiles();
            }
          }
        }), _vm._v(" "), _c("p", [_vm._v("\n                                Перетащите файл(ы) сюда"), _c("br"), _vm._v("или нажмите для поиска\n                            ")])]), _vm._v(" "), _c("label", {
          staticClass: "travel-label"
        }, [_vm._v("Или запишите голосовое сообщение")]), _vm._v(" "), _c("div", {
          staticClass: "d-flex justify-content-center mt-2"
        }, [_c("vue-record-audio", {
          attrs: {
            mode: "press"
          },
          on: {
            stream: _vm.onStream,
            result: _vm.onResult
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "file-listing"
        }, _vm._l(_vm.new_tour.TourInfo.files, function (file, index) {
          return _c("div", {
            key: file.name,
            staticClass: "list-group-item"
          }, [_c("div", {
            staticClass: "row m-auto w-100 align-items-center justify-content-center"
          }, [_c("div", {
            staticClass: "col-4 text-center"
          }, [_c("img", {
            ref: "preview" + parseInt(index),
            refInFor: true,
            staticClass: "preview"
          })]), _vm._v(" "), _c("div", {
            staticClass: "col-8"
          }, [file.type == "file" ? _c("div", [_c("p", {
            staticClass: "travel-label"
          }, [_vm._v(_vm._s(file.data.name))])]) : _vm._e(), _vm._v(" "), file.type == "audio" ? _c("div", [_c("audio-player", {
            attrs: {
              audio: file
            }
          })], 1) : _vm._e()])]), _vm._v(" "), _c("div", {
            staticClass: "remove-container"
          }, [_vm.loading == false ? _c("a", {
            staticClass: "remove",
            on: {
              click: function click($event) {
                return _vm.removeFile(_vm.new_tour.TourInfo.files, index);
              }
            }
          }, [_vm._v("Отменить")]) : _vm._e()])]);
        }), 0)])])])]), _vm._v(" "), _c("div", {
          staticClass: "row w-100 m-auto"
        }, [_c("div", {
          staticClass: "col-6 col-md-6 contact-btn text-center"
        }, [_c("button", {
          staticClass: "btn btn-travel",
          staticStyle: {
            width: "100%"
          },
          on: {
            click: _vm.back
          }
        }, [_vm._v("\n                    Отмена\n                ")])]), _vm._v(" "), _c("div", {
          staticClass: "col-6 col-md-6 contact-btn text-center"
        }, [_c("button", {
          staticClass: "btn btn-travel",
          staticStyle: {
            width: "100%"
          },
          attrs: {
            type: "submit",
            disabled: invalid || _vm.loading
          },
          on: {
            click: _vm.saveClientTour
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
        }, [_vm._v("Loading...")]) : _vm._e(), _vm._v("\n                        Сохранить\n                    ")])])])])];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-travel {\n    color: #fff !important;\n    background: linear-gradient(0deg, #ffbf00 0%, #f08b23 100%);\n    background-color: rgba(0, 0, 0, 0);\n    background-color: #f08b23 !important;\n    border-color: #f08b23 !important;\n    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12) !important;\n}\n@media only screen and (max-width:767.98px) {\n.vdp-container:not(.desktop) .vdp-picker {\n        width: 100% !important;\n        padding: 8px\n}\n.tour-module .cont .row{\n        width: 100% !important;\n}\n.qty input {\n        border: 0;\n        width: 50%;\n}\n}\n@media screen and (max-width: 477px) {\n.vdp-input {\n        min-width: 100% !important;\n}\n.vdp-container {\n        width: 100% !important;\n}\n}\n@media screen and (max-width: 576px) {\n.tour-module .cont {\n        height: 100% !important;\n}\n}\n.vdp-datepicker__calendar {\n    position: absolute;\n    z-index: 2!important;\n    padding: 18px!important;\n    background: #fff;\n    width: 300px;\n    border: 1px solid #ccc;\n}\n.vdp-datepicker input {\n    /*min-width: 300px;*/\n    padding: 8px;\n    border: 1px solid #ffa500 !important;\n    color: #062348!important;\n    font-size: 16px;\n    line-height: 32px;\n    outline: none;\n    border-radius: 20px;\n    min-height: 40px;\n    height: 40px !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n    width: 100%;\n}\n.vdp-datepicker input::-moz-placeholder {\n    color: #062348 !important;\n}\n.vdp-datepicker input::placeholder {\n    color: #062348 !important;\n}\n.vdp-datepicker__calendar .day-header\n{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.vdp-datepicker__clear-button\n{\n    position: absolute;\n    right: 20px;\n    top: -11px;\n    color: #0f213d;\n    font-size: 36px;\n}\n.vdp-datepicker__calendar .cell {\n    display: inline-block;\n    padding: 0 5px;\n    width: 14.285714285714286%;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .day {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 30px;\n    color: #0f213d;\n    text-align: center;\n    cursor: pointer;\n}\n.vdp-datepicker__calendar .day{\n    background-image: none!important;\n    height: 30px !important;\n}\n.vdp-datepicker__calendar .cell {\n    display: inline-block;\n    padding: 0 5px;\n    width: 14.285714285714286%;\n    height: 30px !important;\n    line-height: 30px !important;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n    border: 1px solid #ffa500 !important;\n}\n.vdp-datepicker__calendar .cell.selected {\n    background: #ffa50070 !important;\n    background-image: none;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n    background: #ffa50070 !important;\n    background-image: none;\n}\n.vdp-calendar .calendar-date .week .day.start-date::before {\n    background-color: #ffa500 !important;\n}\n.vdp-calendar .calendar-date .week .day.end-date::after{\n    background-color: #ffa500 !important;\n}\n.vdp-calendar .calendar-date .week .day.in-date-range {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.start-date {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.end-date {\n    background-color: #ffa50070 !important;\n}\n.vdp-calendar .calendar-date .week .day.today {\n    border: 1px solid #ffa500 !important;\n}\n.vdp-calendar-footer .confirm, .vdp-calendar-footer .reset {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.vdp-calendar-footer .reset {\n    color: #062348!important;\n}\n.vdp-calendar-footer .confirm{\n    color: #ffa500 !important;\n}\n.vdp-calendar .calendar-week-item,  .vdp-calendar .calendar-month-title{\n    color: #062348!important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.values__hotel-rating::after{\n    content: '';\n    display: inline-block;\n    margin-left: 2px;\n    width: 13px;\n    height: 12px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.multiselect__tags .price{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .price:focus{\n    outline: none!important;\n    box-shadow: none !important;\n}\n.multiselect-title {\n    color: #062348 !important;\n    font-family: \"Bello Pro\";\n    /*font-weight: 700;*/\n}\n.multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tag {\n    background: #062348;\n}\n.multiselect__tag-icon::after {\n    color:#fff;\n}\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n    background: #f08b23;\n}\n.multiselect__option--highlight::after {\n    background: #f08b23;\n}\n.multiselect__option--highlight{\n    background: #f08b23;\n}\n.multiselect{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n}\n.multiselect__placeholder {\n    color: #062348;\n}\n.multiselect__input:focus, .multiselect__single:focus {\n    border-color: #062348;\n}\n.multiselect__input::-moz-placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect__input::placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect--disabled {\n    background: white;\n}\n.multiselect--disabled .multiselect__select {\n    background: transparent;\n}\n.multiselect__spinner::after, .multiselect__spinner::before {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border: 3px solid transparent;\n    border-top-color: transparent;\n    border-top-color: #ffa500;\n    box-shadow: 0 0 0 1px transparent;\n    background: transparent;\n}\n.multiselect__spinner{\n    border-radius: 50px;\n}\n.qty .count {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 30px;\n    padding: 0 2px;\n    min-width: 35px;\n    text-align: center;\n    font-family: \"Open Sans\";\n    color: #0f213d!important;\n}\n.qty button{\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: top;\n    color: white;\n    width: 30px;\n    height: 30px;\n    font: 30px/1 Arial,sans-serif;\n    text-align: center;\n    border-radius: 50%;\n    padding: 0;\n    background: #f08b23;\n    border: 0;\n}\n.qty div {\n    text-align: center;\n}\n.qty .minus:hover{\n    background: #0f213d!important;\n    color: white;\n}\n.qty .plus:hover{\n    background: #0f213d !important;\n    color: white;\n}\n.qty input{\n    border: 0;\n    width: 60%;\n}\n.qty input::-webkit-outer-spin-button,\n.qty input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.qty input:disabled{\n    background-color:white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media only screen and (max-width:767.98px) {\n.vhd-container:not(.desktop) .vhd-picker {\n        width: 100% !important;\n        padding: 8px\n}\n.tour-module .cont .row{\n        width: 100% !important;\n}\n.qty input {\n        border: 0;\n        width: 50%;\n}\n}\n@media screen and (max-width: 477px) {\n.vhd-input {\n        min-width: 100% !important;\n}\n.vhd-container {\n        width: 100% !important;\n}\n}\n@media screen and (max-width: 576px) {\n.tour-module .cont {\n        height: 100% !important;\n}\n}\n.vhd-picker {\n    z-index: 2!important;\n    min-height: 362px!important;\n    padding: 18px!important;\n}\n.vhd-input {\n    /*min-width: 300px;*/\n    padding: 8px;\n    border: 1px solid #ffa500 !important;\n    color: #062348!important;\n    font-size: 16px;\n    line-height: 32px;\n    outline: none;\n    border-radius: 20px;\n    min-height: 40px;\n    height: 40px !important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n    width: 100%;\n}\n.vhd-input::-moz-placeholder {\n    color: #062348 !important;\n}\n.vhd-input::placeholder {\n    color: #062348 !important;\n}\n.vhd-container:not(.desktop) .vhd-picker {\n    min-height: 362px;\n}\n.vhd-calendar .calendar-date .week .day[data-v-0cb4ff92] {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 30px;\n    color: #505050;\n    text-align: center;\n    cursor: pointer;\n}\n.vhd-calendar .calendar-date .week .day{\n    background-image: none!important;\n    height: 30px !important;\n}\n.vhd-calendar-header {\n    height: 20px!important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header {\n    height:60px !important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-header>.info {\n    display:block;\n    width:100%;\n    height:60px;\n    padding-top:32px!important;\n}\n.vhd-container:not(.desktop) .vhd-calendar-footer {\n    height: 36px !important;\n}\n.vhd-calendar-footer {\n    height: 24px!important;\n}\n.vhd-calendar .calendar-date .week {\n    height: 30px !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date::before {\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date::after{\n    background-color: #ffa500 !important;\n}\n.vhd-calendar .calendar-date .week .day.in-date-range {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.start-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.end-date {\n    background-color: #ffa50070 !important;\n}\n.vhd-calendar .calendar-date .week .day.today {\n    border: 1px solid #ffa500 !important;\n}\n.vhd-calendar-footer .confirm, .vhd-calendar-footer .reset {\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.vhd-calendar-footer .reset {\n    color: #062348!important;\n}\n.vhd-calendar-footer .confirm{\n    color: #ffa500 !important;\n}\n.vhd-calendar .calendar-week-item,  .vhd-calendar .calendar-month-title{\n    color: #062348!important;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900!important;\n}\n.values__hotel-rating::after{\n    content: '';\n    display: inline-block;\n    margin-left: 2px;\n    width: 13px;\n    height: 12px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAXVBMVEVMaXH3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD3vzD4VMltAAAAHnRSTlMAJsstyPUCQnwB8Pl5osal+yqV2VVFVNp4e/MU8RdBDXhlAAAAV0lEQVR4AUXMNRLAMAADQYU5hjDp/8+Mxyq83TWHaGuQdHnepVrJHZA6O8glqxG0ZcWoKlug6CnsCwDNoBj0HVUnoks1qibyvclJNVv/fN7OKuMQOAPgBw0TBxaiVo4AAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.multiselect__tags .price{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900 !important;\n}\n.multiselect__tags .price:focus{\n    outline: none!important;\n    box-shadow: none !important;\n}\n.multiselect-title {\n    color: #062348 !important;\n    font-family: \"Bello Pro\";\n    /*font-weight: 700;*/\n}\n.multiselect__tags {\n    border: 1px solid #f08b23;\n    border-radius: 20px;\n    font-size: 1rem;\n    min-height: 40px;\n}\n.multiselect__tag {\n    background: #062348;\n}\n.multiselect__tag-icon::after {\n    color:#fff;\n}\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n    background: #f08b23;\n}\n.multiselect__option--highlight::after {\n    background: #f08b23;\n}\n.multiselect__option--highlight{\n    background: #f08b23;\n}\n.multiselect{\n    color: #062348;\n    font-family: \"Open Sans\" !important;\n    font-weight: 900;\n}\n.multiselect__placeholder {\n    color: #062348;\n}\n.multiselect__input:focus, .multiselect__single:focus {\n    border-color: #062348;\n}\n.multiselect__input::-moz-placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect__input::placeholder {\n    color: #062348 !important;\n    font-family: Open Sans !important;\n    font-weight: 700;\n}\n.multiselect--disabled {\n    background: white;\n}\n.multiselect--disabled .multiselect__select {\n    background: transparent;\n}\n.multiselect__spinner::after, .multiselect__spinner::before {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border: 3px solid transparent;\n    border-top-color: transparent;\n    border-top-color: #ffa500;\n    box-shadow: 0 0 0 1px transparent;\n    background: transparent;\n}\n.multiselect__spinner{\n    border-radius: 50px;\n}\n.qty .count {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 30px;\n    padding: 0 2px;\n    min-width: 35px;\n    text-align: center;\n    font-family: \"Open Sans\";\n    color: #0f213d!important;\n}\n.qty button{\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: top;\n    color: white;\n    width: 30px;\n    height: 30px;\n    font: 30px/1 Arial,sans-serif;\n    text-align: center;\n    border-radius: 50%;\n    padding: 0;\n    background: #f08b23;\n}\n/*.qty .plus {*/\n/*    cursor: pointer;*/\n/*    display: inline-block;*/\n/*    vertical-align: top;*/\n/*    color: white;*/\n/*    width: 30px;*/\n/*    height: 30px;*/\n/*    font: 30px/1 Arial,sans-serif;*/\n/*    text-align: center;*/\n/*    border-radius: 50%;*/\n/*}*/\n/*.qty .minus {*/\n/*    cursor: pointer;*/\n/*    display: inline-block;*/\n/*    vertical-align: top;*/\n/*    color: white;*/\n/*    width: 30px;*/\n/*    height: 30px;*/\n/*    font: 30px/1 Arial,sans-serif;*/\n/*    text-align: center;*/\n/*    border-radius: 50%;*/\n/*    background-clip: padding-box;*/\n/*}*/\n.qty div {\n    text-align: center;\n}\n.qty .minus:hover{\n    background: #0f213d!important;\n    color: white;\n}\n.qty .plus:hover{\n    background: #0f213d !important;\n    color: white;\n}\n.qty input{\n    border: 0;\n    width: 60%;\n}\n.qty input::-webkit-outer-spin-button,\n.qty input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.qty input:disabled{\n    background-color:white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"file\"][data-v-653a1a2e]{\n    opacity: 0;\n    width: 100%;\n    height: 200px;\n    position: absolute;\n    cursor: pointer;\n}\n.filezone[data-v-653a1a2e] {\n    outline: 2px dashed grey;\n    outline-offset: -10px;\n    background: #ccc;\n    color: dimgray;\n    padding: 10px 10px;\n    min-height: 200px;\n    position: relative;\n    cursor: pointer;\n}\n.filezone[data-v-653a1a2e]:hover {\n    background: #c0c0c0;\n}\n.filezone p[data-v-653a1a2e] {\n    font-size: 1.2em;\n    text-align: center;\n    padding: 50px 50px 50px 50px;\n}\ndiv.file-listing img[data-v-653a1a2e]{\n    max-width: 90%;\n}\ndiv.file-listing[data-v-653a1a2e]{\n    margin: auto;\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n}\ndiv.file-listing img[data-v-653a1a2e]{\n    height: 100px;\n}\n.preview[data-v-653a1a2e]{\n    height: 100px;\n    max-width: 90%;\n}\ndiv.success-container[data-v-653a1a2e]{\n    text-align: center;\n    color: green;\n}\ndiv.remove-container[data-v-653a1a2e]{\n    text-align: center;\n}\ndiv.remove-container a[data-v-653a1a2e]{\n    color: red;\n    cursor: pointer;\n}\na.submit-button[data-v-653a1a2e]{\n    display: block;\n    margin: auto;\n    text-align: center;\n    width: 200px;\n    padding: 10px;\n    text-transform: uppercase;\n    background-color: green;\n    color: white;\n    font-weight: bold;\n    margin-top: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--8-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--8-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--8-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css&");

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

/***/ "./resources/js/desktop/pages/Manager/Tours/Create.vue":
/*!*************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Create.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_653a1a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=653a1a2e&scoped=true& */ "./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=template&id=653a1a2e&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Create_vue_vue_type_style_index_0_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css& */ "./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css&");
/* harmony import */ var _Create_vue_vue_type_style_index_1_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css& */ "./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css&");
/* harmony import */ var _Create_vue_vue_type_style_index_2_id_653a1a2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css& */ "./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_653a1a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_653a1a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "653a1a2e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Manager/Tours/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--8-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=0&id=653a1a2e&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--8-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=1&id=653a1a2e&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_1_id_653a1a2e_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_653a1a2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--8-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=style&index=2&id=653a1a2e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_653a1a2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_653a1a2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_653a1a2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_2_id_653a1a2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=template&id=653a1a2e&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=template&id=653a1a2e&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_653a1a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=653a1a2e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/Manager/Tours/Create.vue?vue&type=template&id=653a1a2e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_653a1a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_653a1a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);