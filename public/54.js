(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/AviaSearch.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/AviaSearch.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AviaSearch",
  data: function data() {
    return {
      icons: ["fa fa-comment", "fas fa-microphone", "fas fa-phone"],
      menuUrlList: ["#contactModalBox", "#customVoiceModal", "#customPhoneModal"],
      titles: ["Написать сообщение", "Записать голосовое", "Заказать звонок"]
    };
  },
  created: function created() {
    var BiletixScript = document.createElement('script');
    BiletixScript.setAttribute('src', 'https://ps.biletix.ru/static/wl/build/biletix_wl.min.js');
    BiletixScript.setAttribute('id', '__biletix__wl__script');
    BiletixScript.defer = true;
    BiletixScript.async = true;
    document.head.appendChild(BiletixScript);
  },
  computed: {
    locationByIp: function locationByIp() {
      return this.$store.getters.locationByIp;
    }
  },
  methods: {
    toTourSearch: function toTourSearch() {
      this.$router.push('/tour-search');
    },
    toAviaSearch: function toAviaSearch() {
      this.$router.push('/avia-search');
      // this.$router.push('/avia-module')
    },
    toHotelSearch: function toHotelSearch() {
      // this.$router.push('/hotel-search')
      // this.$router.push('/hotel-module')
      this.$router.push('/russia-tour-search');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/AviaSearch.vue?vue&type=template&id=6216cc1e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/AviaSearch.vue?vue&type=template&id=6216cc1e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("quick-menu", {
    attrs: {
      "menu-count": 3,
      "icon-class": _vm.icons,
      titles: _vm.titles,
      menuUrlList: _vm.menuUrlList,
      position: "'bottom-left'",
      backgroundColor: "#f08b23"
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("section", {
    staticClass: "mb-5",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "container m-auto",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "row m-auto justify-content-center align-items-center w-100 h-100"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("promocode-image", {
    attrs: {
      title1: "Оформи",
      title2: "полёт",
      pos: "238"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "row family-row family-description m-auto",
    staticStyle: {
      width: "80%",
      color: "#062348",
      "font-size": "17px",
      "font-weight": "900",
      "font-family": "'Open Sans'"
    }
  }, [_c("p", {
    staticClass: "text-center"
  }, [_vm._v("\n                                Не получилось определиться самому? Оформи заявку и наш менеджер тебе поможет!\n                            ")]), _vm._v(" "), _c("b-button", {
    staticClass: "btn-travel btn-group-lg mt-2 mx-auto",
    attrs: {
      href: "/avia-module"
    }
  }, [_vm._v("\n                                Оформить заявку\n                            ")])], 1)])])])]), _vm._v(" "), _c("section", {
    staticClass: "footer",
    staticStyle: {
      overflow: "hidden"
    },
    attrs: {
      id: "contacts"
    }
  }, [_c("div", [_c("svg", {
    staticClass: "waves",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 24 150 28",
      preserveAspectRatio: "none",
      "shape-rendering": "auto"
    }
  }, [_c("defs", [_c("path", {
    attrs: {
      id: "gentle-wave",
      d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
    }
  })]), _vm._v(" "), _c("g", {
    staticClass: "parallax"
  }, [_c("use", {
    attrs: {
      "xlink:href": "#gentle-wave",
      x: "48",
      y: "0",
      fill: "rgba(255,255,153, 0.7)"
    }
  }), _vm._v(" "), _c("use", {
    attrs: {
      "xlink:href": "#gentle-wave",
      x: "48",
      y: "3",
      fill: "rgba(255,204,102, 0.6)"
    }
  }), _vm._v(" "), _c("use", {
    attrs: {
      "xlink:href": "#gentle-wave",
      x: "48",
      y: "6",
      fill: "rgba(255,153,0, 1)"
    }
  })])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "inner-content inner-flex"
  }, [_c("svg", {
    staticClass: "waves",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 24 150 28",
      preserveAspectRatio: "none",
      "shape-rendering": "auto"
    }
  }, [_c("defs", [_c("path", {
    attrs: {
      id: "gentle-wave",
      d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
    }
  })]), _vm._v(" "), _c("g", {
    staticClass: "parallax"
  }, [_c("use", {
    attrs: {
      "xlink:href": "#gentle-wave",
      x: "48",
      y: "1",
      fill: "#062348"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row w-100 m-auto",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 col-md-5 tablet-footer-col-12 mx-auto"
  }, [_c("div", {
    staticClass: "row w-100 mx-auto mt-5 justify-content-center"
  }, [_vm._m(2), _vm._v(" "), _vm.locationByIp.region == "Donetsk" ? _c("div", {
    staticClass: "col-12 col-sm-6 p-0"
  }, [_vm._m(3)]) : _vm._e(), _vm._v(" "), _vm.locationByIp.region == "Donetsk" ? _c("div", {
    staticClass: "col-12 col-sm-6 p-0"
  }, [_vm._m(4)]) : _vm._e(), _vm._v(" "), _vm.locationByIp.region != "Donetsk" ? _c("div", {
    staticClass: "col-sm-10 col-12 p-0"
  }, [_vm._m(5)]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-md-3 col-sm-12 tablet-footer-col mx-auto"
  }, [_c("div", {
    staticClass: "row mt-5 mx-auto",
    staticStyle: {
      height: "70%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 mb-3 mx-auto"
  }, [_c("div", {
    staticClass: "row m-auto",
    staticStyle: {
      height: "50px"
    }
  }, [_c("a", {
    directives: [{
      name: "scroll-to",
      rawName: "v-scroll-to",
      value: "#travel",
      expression: "'#travel'"
    }],
    staticClass: "more-text m-auto",
    staticStyle: {
      color: "#f08b23"
    }
  }, [_vm._v("Путешествуй")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("div", {
    staticClass: "row m-auto",
    staticStyle: {
      height: "50px"
    }
  }, [_c("a", {
    directives: [{
      name: "scroll-to",
      rawName: "v-scroll-to",
      value: "#avia",
      expression: "'#avia'"
    }],
    staticClass: "more-text m-auto",
    staticStyle: {
      color: "#f08b23"
    }
  }, [_vm._v("Летай")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("div", {
    staticClass: "row m-auto",
    staticStyle: {
      height: "50px"
    }
  }, [_c("a", {
    directives: [{
      name: "scroll-to",
      rawName: "v-scroll-to",
      value: "#hotel",
      expression: "'#hotel'"
    }],
    staticClass: "more-text m-auto",
    staticStyle: {
      color: "#f08b23"
    }
  }, [_vm._v("Живи")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-md-4 col-sm-12 tablet-footer-col mx-auto"
  }, [_c("div", {
    staticClass: "row mt-5 mx-auto",
    staticStyle: {
      height: "70%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 mb-3 mx-auto"
  }, [_c("div", {
    staticClass: "row m-auto",
    staticStyle: {
      height: "50px"
    }
  }, [_c("a", {
    staticClass: "more-text m-auto",
    staticStyle: {
      color: "#f08b23"
    },
    on: {
      click: _vm.toTourSearch
    }
  }, [_vm._v("Путешествуй")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("div", {
    staticClass: "row m-auto",
    staticStyle: {
      height: "50px"
    }
  }, [_c("a", {
    staticClass: "more-text m-auto",
    staticStyle: {
      color: "#f08b23"
    },
    on: {
      click: _vm.toAviaSearch
    }
  }, [_vm._v("Летай")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("div", {
    staticClass: "row m-auto",
    staticStyle: {
      height: "50px"
    }
  }, [_c("a", {
    staticClass: "more-text m-auto",
    staticStyle: {
      color: "#f08b23"
    },
    on: {
      click: _vm.toHotelSearch
    }
  }, [_vm._v("Познавай")])])])])]), _vm._v(" "), _vm._m(6)])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container mt-auto mb-auto",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "w-100 mb-0",
    staticStyle: {
      "margin-top": "60px",
      "z-index": "0 !important"
    },
    attrs: {
      id: "__biletix__wl__"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "footer-content flex"
  }, [_c("div", {
    staticClass: "row mb-5"
  }, [_c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("h1", [_vm._v("Готовы к незабываемым приключениям?")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("button", {
    staticClass: "footer-btn",
    attrs: {
      type: "text",
      "data-toggle": "modal",
      "data-target": "#customPhoneModal"
    }
  }, [_vm._v("Заказать звонок")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12"
  }, [_c("span", {
    staticClass: "my-3 mx-auto",
    staticStyle: {
      background: "#f08b23",
      padding: "5px 10px",
      "border-radius": "50px",
      "font-family": "'Open Sans Extrabold'",
      "text-transform": "uppercase",
      display: "inline-block"
    }
  }, [_vm._v("\n                                    Контакты\n                                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row w-100 m-auto",
    staticStyle: {
      "font-family": "'Open Sans'",
      "font-weight": "600"
    }
  }, [_c("div", {
    staticClass: "col-12 px-1"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("div", {
    staticClass: "col-1 p-0"
  }, [_c("div", {
    staticClass: "contact-icon icon icon-mail_outline mr-1"
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-11 p-0"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("a", {
    staticClass: "ml-2 mb-0",
    staticStyle: {
      color: "white"
    },
    attrs: {
      href: "mailto:travelclubdonetsk@gmail.com"
    }
  }, [_vm._v("travelclubdonetsk@gmail.com")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 px-1"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("div", {
    staticClass: "col-1 p-0"
  }, [_c("div", {
    staticClass: "contact-icon icon icon-building mr-1"
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-11 p-0"
  }, [_c("div", {
    staticClass: "row w-100 m-auto",
    staticStyle: {
      "text-align": "start"
    }
  }, [_c("p", {
    staticClass: "ml-2 mb-0"
  }, [_vm._v("Г. Донецк, ул. Артема 100Д")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 px-1"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("div", {
    staticClass: "col-1 p-0"
  }, [_c("div", {
    staticClass: "contact-icon icon icon-phone mr-1"
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-11 p-0"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("a", {
    staticClass: "ml-2 mb-0",
    staticStyle: {
      color: "white"
    },
    attrs: {
      href: "tel:+380713399089"
    }
  }, [_vm._v("071-339-90-89")]), _c("i", {
    staticClass: "mx-1 icon fab fa-viber",
    staticStyle: {
      "font-weight": "500"
    }
  }), _c("i", {
    staticClass: "icon icon-whatsapp"
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 px-1"
  }, [_c("div", {
    staticClass: "row w-100 m-auto",
    staticStyle: {
      "font-size": "10px",
      "text-align": "start"
    }
  }, [_c("p", {
    staticClass: "ml-1 mb-0"
  }, [_vm._v("Режим работы:")]), _vm._v(" "), _c("div", {
    staticClass: "mb-0 flex"
  }, [_c("span", {
    staticStyle: {
      width: "8px",
      height: "8px",
      background: "#f08b23",
      "border-radius": "50%",
      margin: "0px 5px",
      display: "block"
    }
  }), _vm._v("Пн-Пт 10:00 – 18:00")]), _vm._v(" "), _c("div", {
    staticClass: "mb-0 flex"
  }, [_c("span", {
    staticStyle: {
      width: "8px",
      height: "8px",
      background: "#f08b23",
      "border-radius": "50%",
      margin: "0px 5px",
      display: "block"
    }
  }), _vm._v("Суббота 10:00 – 17:00")]), _vm._v(" "), _c("div", {
    staticClass: "mb-0 flex"
  }, [_c("span", {
    staticStyle: {
      width: "8px",
      height: "8px",
      background: "#f08b23",
      "border-radius": "50%",
      margin: "0px 5px",
      display: "block"
    }
  }), _vm._v("Воскресенье – выходной")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row w-100 m-auto",
    staticStyle: {
      "font-family": "'Open Sans'",
      "font-weight": "600"
    }
  }, [_c("div", {
    staticClass: "col-12 px-1"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("div", {
    staticClass: "col-1 p-0"
  }, [_c("div", {
    staticClass: "contact-icon icon icon-building mr-1"
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-11 p-0"
  }, [_c("div", {
    staticClass: "row w-100 m-auto",
    staticStyle: {
      "text-align": "start"
    }
  }, [_c("p", {
    staticClass: "ml-2 mb-0"
  }, [_vm._v("Г. Донецк, Бульвар Пушкина 23")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 px-1"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("div", {
    staticClass: "col-1 p-0"
  }, [_c("div", {
    staticClass: "contact-icon icon icon-phone mr-1"
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-11 p-0"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("a", {
    staticClass: "ml-2 mb-0",
    staticStyle: {
      color: "white"
    },
    attrs: {
      href: "tel:+380712353322"
    }
  }, [_vm._v("071-235-33-22")]), _vm._v(" "), _c("i", {
    staticClass: "mx-1 icon fab fa-viber",
    staticStyle: {
      "font-weight": "500"
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "icon icon-whatsapp"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("div", {
    staticClass: "col-1 p-0"
  }, [_c("div", {
    staticClass: "contact-icon icon icon-phone mr-1"
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-11 p-0"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("a", {
    staticClass: "ml-2 mb-0",
    staticStyle: {
      color: "white"
    },
    attrs: {
      href: "tel:+380959359990"
    }
  }, [_vm._v("095-935-99-90")]), _vm._v(" "), _c("i", {
    staticClass: "mx-1 icon fab fa-viber",
    staticStyle: {
      "font-weight": "500"
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "icon icon-whatsapp"
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 px-1",
    staticStyle: {
      "font-size": "10px"
    }
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("p", {
    staticClass: "ml-1 mb-0"
  }, [_vm._v("Режим работы:")]), _vm._v(" "), _c("div", {
    staticClass: "mb-0 flex"
  }, [_c("span", {
    staticStyle: {
      width: "8px",
      height: "8px",
      background: "#f08b23",
      "border-radius": "50%",
      margin: "0px 5px",
      display: "block"
    }
  }), _vm._v("Пн-Пт 10:00 – 18:00")]), _vm._v(" "), _c("div", {
    staticClass: "mb-0 flex"
  }, [_c("span", {
    staticStyle: {
      width: "8px",
      height: "8px",
      background: "#f08b23",
      "border-radius": "50%",
      margin: "0px 5px",
      display: "block"
    }
  }), _vm._v("Суббота 10:00 – 17:00")]), _vm._v(" "), _c("div", {
    staticClass: "mb-0 flex"
  }, [_c("span", {
    staticStyle: {
      width: "8px",
      height: "8px",
      background: "#f08b23",
      "border-radius": "50%",
      margin: "0px 5px",
      display: "block"
    }
  }), _vm._v("Воскресенье – выходной")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row w-100 m-auto",
    staticStyle: {
      "font-family": "'Open Sans'",
      "font-weight": "600",
      color: "white"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("div", {
    staticClass: "col-1 p-0"
  }, [_c("div", {
    staticClass: "contact-icon icon icon-mail_outline mr-1"
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-11 p-0"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("a", {
    staticClass: "ml-2 mb-0",
    staticStyle: {
      color: "white"
    },
    attrs: {
      href: "mailto:travelclubrnd@bk.ru"
    }
  }, [_vm._v("travelclubrnd@bk.ru")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("div", {
    staticClass: "col-1 p-0"
  }, [_c("div", {
    staticClass: "contact-icon icon icon-building mr-1"
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-11 p-0"
  }, [_c("div", {
    staticClass: "row w-100 m-auto",
    staticStyle: {
      "text-align": "start"
    }
  }, [_c("p", {
    staticClass: "ml-2 mb-0"
  }, [_vm._v("Г. Ростов–на–Дону, Социалистическая 11 оф 2А")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("div", {
    staticClass: "col-1 p-0"
  }, [_c("div", {
    staticClass: "contact-icon icon icon-phone mr-1"
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-11 p-0"
  }, [_c("div", {
    staticClass: "row w-100 m-auto"
  }, [_c("a", {
    staticClass: "ml-2 mb-0",
    staticStyle: {
      color: "white"
    },
    attrs: {
      href: "tel:+79882534149"
    }
  }, [_vm._v("+7-988-253-41-49")]), _c("i", {
    staticClass: "mx-1 icon fab fa-viber",
    staticStyle: {
      "font-weight": "500"
    }
  }), _c("i", {
    staticClass: "icon icon-whatsapp"
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12",
    staticStyle: {
      "font-size": "10px"
    }
  }, [_c("div", {
    staticClass: "row w-100 mx-auto mt-2"
  }, [_c("p", {
    staticClass: "ml-1 mb-0"
  }, [_vm._v("Режим работы:")]), _vm._v(" "), _c("div", {
    staticClass: "mb-0 flex"
  }, [_c("span", {
    staticStyle: {
      width: "8px",
      height: "8px",
      background: "#f08b23",
      "border-radius": "50%",
      margin: "0px 5px",
      display: "block"
    }
  }), _vm._v("Пн-Пт 10:00 – 18:00")]), _vm._v(" "), _c("div", {
    staticClass: "mb-0 flex"
  }, [_c("span", {
    staticStyle: {
      width: "8px",
      height: "8px",
      background: "#f08b23",
      "border-radius": "50%",
      margin: "0px 5px",
      display: "block"
    }
  }), _vm._v("Суббота 10:00 – 17:00")]), _vm._v(" "), _c("div", {
    staticClass: "mb-0 flex"
  }, [_c("span", {
    staticStyle: {
      width: "8px",
      height: "8px",
      background: "#f08b23",
      "border-radius": "50%",
      margin: "0px 5px",
      display: "block"
    }
  }), _vm._v("Воскресенье – выходной")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12",
    staticStyle: {
      background: "#041e3f",
      "border-top": "1px solid #d9d9d942"
    }
  }, [_c("div", {
    staticClass: "row w-100 m-auto align-items-center justify-content-center"
  }, [_c("a", {
    staticClass: "mx-auto my-2",
    staticStyle: {
      color: "white",
      "font-family": "'Open Sans'",
      "font-weight": "900"
    },
    attrs: {
      target: "_blank",
      href: "https://donbassit.ru"
    }
  }, [_vm._v("Made by  "), _c("img", {
    staticClass: "mb-2",
    staticStyle: {
      height: "20px"
    },
    attrs: {
      src: "/images/do-it.png"
    }
  })])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-travel[data-v-6216cc1e] {\n    border-radius: 50px;\n    background: #f08b23;\n    color: white;\n    text-transform: uppercase;\n    font-family: \"Open Sans\";\n    font-weight: 900;\n    font-size: 20px;\n    outline: none;\n    border: none;\n}\n.footer[data-v-6216cc1e] {\n    position: relative;\n    text-align: center;\n//background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);\n    color: white;\n    /*height: 65vh;*/\n}\n.inner-header[data-v-6216cc1e] {\n    height: 65vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\n.flex[data-v-6216cc1e] {\n    /*Flexbox for containers*/\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n.waves[data-v-6216cc1e] {\n    position: relative;\n    width: 100%;\n    height: 15vh;\n    margin-bottom: -7px;\n    /*Fix for safari gap*/\n    min-height: 100px;\n    max-height: 150px;\n}\n.footer-content[data-v-6216cc1e] {\n    position: relative;\n    height: 35vh;\n    text-align: center;\n    background-color: #ff9900;\n}\n.footer-content h1[data-v-6216cc1e] {\n    font-family: 'Open Sans Extrabold';\n    /*font-family: 'Bello Pro';*/\n}\n.inner-content[data-v-6216cc1e]{\n    position: relative;\n    text-align: center;\n    background-color: #062348;\n    width:100%;\n}\n.inner-content .waves[data-v-6216cc1e] {\n    position: absolute;\n    top:-75px;\n    height: 12vh;\n    /*Fix for safari gap*/\n    min-height: 70px;\n    max-height: 120px;\n}\n.inner-flex[data-v-6216cc1e]{\n    /*Flexbox for containers*/\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    text-align: center;\n}\n/* Animation */\n.parallax>use[data-v-6216cc1e] {\n    animation: move-forever-6216cc1e 25s cubic-bezier(.55, .5, .45, .5) infinite;\n}\n.parallax>use[data-v-6216cc1e]:nth-child(1) {\n    animation-delay: -2s;\n    animation-duration: 7s;\n}\n.parallax>use[data-v-6216cc1e]:nth-child(2) {\n    animation-delay: -3s;\n    animation-duration: 10s;\n}\n.parallax>use[data-v-6216cc1e]:nth-child(3) {\n    animation-delay: -4s;\n    animation-duration: 13s;\n}\n.parallax>use[data-v-6216cc1e]:nth-child(4) {\n    animation-delay: -5s;\n    animation-duration: 20s;\n}\n@keyframes move-forever-6216cc1e {\n0% {\n        transform: translate3d(-90px, 0, 0);\n}\n100% {\n        transform: translate3d(85px, 0, 0);\n}\n}\n/*Shrinking for mobile*/\n@media (max-width: 768px) {\n.waves[data-v-6216cc1e] {\n        height: 50px;\n        min-height: 50px;\n        margin-bottom: 0px;\n}\n.footer-content[data-v-6216cc1e] {\n        height: 30vh;\n}\n.inner-content .waves[data-v-6216cc1e] {\n        top: -45px;\n        height: 50px;\n        min-height: 50px;\n}\n.footer-content h1[data-v-6216cc1e] {\n        font-size: 27px;\n}\n}\n.footer-btn[data-v-6216cc1e] {\n    background-color: #062348;\n    border: none;\n    color: white;\n    font-family: 'Open Sans';\n    font-weight: 900;\n    font-size: 20px;\n    border-radius: 50px;\n    text-transform: uppercase;\n    padding: 10px 32px;\n    text-decoration: none;\n    outline: none !important;\n}\n.footer-illustration[data-v-6216cc1e] {\n    /*position:absolute;*/\n    /*bottom:0px;*/\n    /*left: 0px;*/\n    width: 100%;\n    /*height: 100%;*/\n    display: block;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n.more-text[data-v-6216cc1e] {\n    font-family: \"Open Sans\";\n    text-transform: uppercase;\n    color: #f08b23;\n    font-weight: 600;\n    font-size: 16px;\n    cursor:pointer;\n}\n.more-button[data-v-6216cc1e] {\n    cursor:pointer;\n    margin: 0 10px;\n    right: 10px;\n}\n.more-button div[data-v-6216cc1e] {\n    width: 40px;\n    height: 40px;\n    display: block;\n    border-radius: 50px;\n    text-decoration: none;\n    font-size: 40px;\n    /*line-height: 50px;*/\n    color:  white;\n    background: #f08b23;\n    padding: 0px !important;\n}\n.footer .more-button div[data-v-6216cc1e] {\n    width: 50px;\n    height: 50px;\n    font-size: 30px;\n    padding-top: 10px !important\n}\n.footer .more-text[data-v-6216cc1e] {\n    color: white;\n    font-size: 20px;\n    font-weight: 900;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n@media screen and (max-width: 576px) {\n.tablet-footer-col[data-v-6216cc1e] {\n        flex: 0 0 55%;\n        max-width: 55%;\n}\n}\n@media screen and (max-width: 992px) {\n.tablet-footer-col[data-v-6216cc1e] {\n        flex: 0 0 50% ;\n        max-width: 50%;\n}\n}\n@media screen and (max-width: 477px) {\n.tablet-footer-col[data-v-6216cc1e] {\n        flex: 0 0 100% !important;\n        max-width: 100% !important;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/desktop/pages/AviaSearch.vue":
/*!***************************************************!*\
  !*** ./resources/js/desktop/pages/AviaSearch.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AviaSearch_vue_vue_type_template_id_6216cc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AviaSearch.vue?vue&type=template&id=6216cc1e&scoped=true& */ "./resources/js/desktop/pages/AviaSearch.vue?vue&type=template&id=6216cc1e&scoped=true&");
/* harmony import */ var _AviaSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AviaSearch.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/AviaSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AviaSearch_vue_vue_type_style_index_0_id_6216cc1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css& */ "./resources/js/desktop/pages/AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AviaSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AviaSearch_vue_vue_type_template_id_6216cc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AviaSearch_vue_vue_type_template_id_6216cc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6216cc1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/AviaSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/AviaSearch.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/desktop/pages/AviaSearch.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AviaSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AviaSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/AviaSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AviaSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AviaSearch_vue_vue_type_style_index_0_id_6216cc1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/AviaSearch.vue?vue&type=style&index=0&id=6216cc1e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AviaSearch_vue_vue_type_style_index_0_id_6216cc1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AviaSearch_vue_vue_type_style_index_0_id_6216cc1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AviaSearch_vue_vue_type_style_index_0_id_6216cc1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AviaSearch_vue_vue_type_style_index_0_id_6216cc1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/AviaSearch.vue?vue&type=template&id=6216cc1e&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/desktop/pages/AviaSearch.vue?vue&type=template&id=6216cc1e&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AviaSearch_vue_vue_type_template_id_6216cc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./AviaSearch.vue?vue&type=template&id=6216cc1e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/AviaSearch.vue?vue&type=template&id=6216cc1e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AviaSearch_vue_vue_type_template_id_6216cc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AviaSearch_vue_vue_type_template_id_6216cc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);