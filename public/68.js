(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Archive",
  data: function data() {
    return {
      columns: [{
        label: 'ID тура',
        field: 'id'
      }, {
        label: 'Дата',
        field: 'created_at'
      }, {
        label: 'С',
        field: 'TourInfo.date_range.start'
      }, {
        label: 'По',
        field: 'TourInfo.date_range.end'
      }, {
        label: 'Страна',
        field: 'TourInfo.country.Name'
      }, {
        label: 'Курорт',
        field: 'TourInfo.resort.Name'
      }, {
        label: 'Цена',
        field: 'TourInfo.price'
      }, {
        label: 'Выплачено',
        field: 'TourInfo.paid'
      }],
      load: true // archive:[]

    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getUser();
  },
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    user: function user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.user) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return _this.$store.dispatch('getUser').then(function () {
                  // this.archive = this.user.archive;
                  if (_this.user.archive.length > 0 || _this.user.archive != null) {
                    _this.user.archive.forEach(function (tour) {
                      tour.show = false;
                      tour.isLoading = false;
                      tour.expand = {
                        country: tour.TourInfo.country,
                        resort: tour.TourInfo.resort,
                        hotel: tour.TourInfo.hotel,
                        meal: tour.TourInfo.meal,
                        room_type: tour.TourInfo.room_type,
                        tour_operator: tour.TourInfo.tour_operator,
                        date_range: {
                          start: tour.TourInfo.date_range.start,
                          end: tour.TourInfo.date_range.end
                        },
                        price: tour.TourInfo.price,
                        paid: tour.TourInfo.paid,
                        left: tour.TourInfo.left,
                        services: tour.TourInfo.services,
                        avia_tickets: tour.TourInfo.avia_tickets,
                        passengers: tour.TourInfo.passengers,
                        files: tour.TourInfo.files
                      };
                    });
                  }

                  _this.load = false;
                });

              case 3:
                _context.next = 7;
                break;

              case 5:
                if (_this.user.archive.length > 0 || _this.user.archive != null) {
                  _this.user.archive.forEach(function (tour) {
                    tour.show = false;
                    tour.isLoading = false;
                    tour.expand = {
                      country: tour.TourInfo.country,
                      resort: tour.TourInfo.resort,
                      hotel: tour.TourInfo.hotel,
                      meal: tour.TourInfo.meal,
                      room_type: tour.TourInfo.room_type,
                      tour_operator: tour.TourInfo.tour_operator,
                      date_range: {
                        start: tour.TourInfo.date_range.start,
                        end: tour.TourInfo.date_range.end
                      },
                      price: tour.TourInfo.price,
                      paid: tour.TourInfo.paid,
                      left: tour.TourInfo.left,
                      services: tour.TourInfo.services,
                      avia_tickets: tour.TourInfo.avia_tickets,
                      passengers: tour.TourInfo.passengers,
                      files: tour.TourInfo.files
                    };
                  });
                }

                _this.load = false;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    toTourInfo: function toTourInfo(id) {
      this.$router.push('/client/tour-info/' + id); // this.$router.push('/client/archive-tour-info/'+id)
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
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_1__["mask"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=template&id=0547c175&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=template&id=0547c175&scoped=true& ***!
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "row m-auto w-100 h-100 align-items-center justify-content-center",
        attrs: { id: "mobile-table" }
      },
      [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c(
              "data-table",
              {
                attrs: {
                  title: "Архив",
                  columns: _vm.columns,
                  rows: _vm.user.archive,
                  perPage: [5, 10, 25, 50],
                  clickable: false,
                  loadingAnimation: _vm.load
                },
                scopedSlots: _vm._u([
                  {
                    key: "tbody-tr",
                    fn: function(props) {
                      return [
                        _c("td", { attrs: { "data-title": "Действия" } }, [
                          !props.row.isLoading
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn waves-effect",
                                  staticStyle: { outline: "none" },
                                  on: {
                                    click: function($event) {
                                      return _vm.toTourInfo(props.row.id)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "icon icon-eye",
                                    staticStyle: { color: "#0d274b" }
                                  })
                                ]
                              )
                            : _vm._e()
                        ])
                      ]
                    }
                  },
                  {
                    key: "expand-panel",
                    fn: function(props) {
                      return [
                        _c(
                          "div",
                          { staticStyle: { width: "100%", height: "100%" } },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "row align-items-center justify-content-center m-auto",
                                staticStyle: { width: "100%", height: "100%" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 col-sm-12 mx-auto" },
                                  [
                                    _c("div", { staticClass: "list-group" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "list-group-item flex-column align-items-start p-1"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex w-100 justify-content-between"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "mb-1 control-label",
                                                  staticStyle: {
                                                    color: "#f08b23"
                                                  }
                                                },
                                                [_vm._v("Страна")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              _vm._s(
                                                props.row.expand.country.Name
                                              )
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "list-group-item flex-column align-items-start p-1"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex w-100 justify-content-between"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "mb-1 control-label",
                                                  staticStyle: {
                                                    color: "#f08b23"
                                                  }
                                                },
                                                [_vm._v("Курорт")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  props.row.expand.resort.Name
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "list-group-item flex-column align-items-start p-1"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex w-100 justify-content-between"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "mb-1 control-label",
                                                  staticStyle: {
                                                    color: "#f08b23"
                                                  }
                                                },
                                                [_vm._v("Отель")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  props.row.expand.hotel.Name
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "list-group-item flex-column align-items-start p-1"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex w-100 justify-content-between"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "mb-1 control-label",
                                                  staticStyle: {
                                                    color: "#f08b23"
                                                  }
                                                },
                                                [_vm._v("Питание")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  props.row.expand.meal.Name
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 col-sm-12 mx-auto" },
                                  [
                                    _c("div", { staticClass: "list-group" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "list-group-item flex-column align-items-start p-1"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex w-100 justify-content-between"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "mb-1 control-label",
                                                  staticStyle: {
                                                    color: "#f08b23"
                                                  }
                                                },
                                                [_vm._v("Даты тура")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              _vm._s(
                                                props.row.expand.date_range
                                                  .start
                                              ) +
                                                " - " +
                                                _vm._s(
                                                  props.row.expand.date_range
                                                    .end
                                                )
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "list-group-item flex-column align-items-start p-1"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex w-100 justify-content-between"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "mb-1 control-label",
                                                  staticStyle: {
                                                    color: "#f08b23"
                                                  }
                                                },
                                                [_vm._v("Цена")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              _vm._s(props.row.expand.price)
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "list-group-item flex-column align-items-start p-1"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex w-100 justify-content-between"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "mb-1 control-label",
                                                  staticStyle: {
                                                    color: "#f08b23"
                                                  }
                                                },
                                                [_vm._v("Выплачено")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              _vm._s(props.row.expand.paid)
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "list-group-item flex-column align-items-start p-1"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex w-100 justify-content-between"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "mb-1 control-label",
                                                  staticStyle: {
                                                    color: "#f08b23"
                                                  }
                                                },
                                                [_vm._v("Остаток")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              _vm._s(props.row.expand.left)
                                            )
                                          ])
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-md-12 col-sm-12 mx-auto"
                                  },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "mb-1 control-label",
                                        staticStyle: { color: "#f08b23" }
                                      },
                                      [_vm._v("Дополнительные услуги")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "list-group-item flex-column align-items-start p-1"
                                      },
                                      [
                                        _c("p", { staticClass: "mb-1" }, [
                                          _vm._v(
                                            _vm._s(props.row.expand.services)
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-md-12 col-sm-12 mx-auto"
                                  },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "mb-1 control-label",
                                        staticStyle: { color: "#f08b23" }
                                      },
                                      [_vm._v("Файлы")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(props.row.expand.files, function(
                                      file,
                                      index
                                    ) {
                                      return _c(
                                        "div",
                                        {
                                          key: file.name,
                                          staticClass: "list-group-item"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "row m-auto w-100 align-items-center justify-content-center"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-4 text-center"
                                                },
                                                [
                                                  /\.(jpe?g|png|svg)$/i.test(
                                                    file.name
                                                  )
                                                    ? _c("img", {
                                                        staticClass: "preview",
                                                        attrs: {
                                                          src: file.path
                                                        }
                                                      })
                                                    : _c("img", {
                                                        staticClass: "preview",
                                                        attrs: {
                                                          src:
                                                            "/images/LOGO-1.png"
                                                        }
                                                      })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "col-8" },
                                                [
                                                  file.type == "file"
                                                    ? _c("div", [
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "control-label"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(file.name)
                                                            )
                                                          ]
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  file.type == "audio"
                                                    ? _c(
                                                        "div",
                                                        [
                                                          _c("audio-player", {
                                                            attrs: {
                                                              audio: file
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e()
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    })
                                  ],
                                  2
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              },
              [
                _c(
                  "th",
                  {
                    staticStyle: { width: "auto" },
                    attrs: { slot: "thead-tr" },
                    slot: "thead-tr"
                  },
                  [_vm._v("\n                    Действия\n                ")]
                )
              ]
            )
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Client/Archive.vue":
/*!**************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Client/Archive.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Archive_vue_vue_type_template_id_0547c175_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Archive.vue?vue&type=template&id=0547c175&scoped=true& */ "./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=template&id=0547c175&scoped=true&");
/* harmony import */ var _Archive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Archive.vue?vue&type=script&lang=js& */ "./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Archive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Archive_vue_vue_type_template_id_0547c175_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Archive_vue_vue_type_template_id_0547c175_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0547c175",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/mobile/pages/Client/Archive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Archive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Archive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Archive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=template&id=0547c175&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=template&id=0547c175&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Archive_vue_vue_type_template_id_0547c175_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Archive.vue?vue&type=template&id=0547c175&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/mobile/pages/Client/Archive.vue?vue&type=template&id=0547c175&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Archive_vue_vue_type_template_id_0547c175_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Archive_vue_vue_type_template_id_0547c175_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);