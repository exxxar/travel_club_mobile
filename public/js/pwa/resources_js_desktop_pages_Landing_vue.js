"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Landing_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Landing",
  data: function data() {
    return {
      labels: {
        days: 'Дни',
        hours: 'Часы',
        minutes: 'Минуты',
        seconds: 'Секунды'
      },
      icons: ["fa fa-comment", "fas fa-microphone", "fas fa-phone"],
      menuUrlList: ["#contactModalBox", "#customVoiceModal", "#customPhoneModal"],
      titles: ["Написать сообщение", "Записать голосовое", "Заказать звонок"],
      promocode: '',
      promocode_error: false,
      promocode_error_text: 'Неверно введен промокод',
      promocode_loading: false
    };
  },
  computed: {
    locationByIp: function locationByIp() {
      return this.$store.getters.locationByIp;
    }
  },
  methods: {
    sidebarOpen: function sidebarOpen() {
      if ($("body").hasClass("sidebar-open")) {
        $("body").removeClass("sidebar-open");
        $("body").addClass("sidebar-closed");
      } else if ($("body").hasClass("sidebar-closed")) {
        $("body").removeClass("sidebar-closed");
        $("body").addClass("sidebar-open");
      } else {
        $("body").addClass("sidebar-open");
      }
    },
    toTourSearch: function toTourSearch() {
      this.$router.push('/tour-search');
    },
    toAviaSearch: function toAviaSearch() {
      this.$router.push('/avia-search');
      // this.$router.push('/avia-module')
    },
    toHotelSearch: function toHotelSearch() {
      // this.$router.push('/hotel-search')
      this.$router.push('/russia-tour-search');
    },
    sendPromocode: function sendPromocode() {
      var _this = this;
      if (this.promocode !== '') {
        this.promocode_error = false;
        this.promocode_loading = true;
        axios.post('sendPromocode', {
          promocode: this.promocode
        }).then(function (resp) {
          _this.promocode_loading = false;
          if (resp.data.res) {
            _this.promocode_error = false;
            localStorage.setItem('promo', true);
            _this.$router.push('/signup');
          } else {
            _this.promocode_error_text = 'Неверно введен промокод';
            _this.promocode_error = true;
          }
        });
      } else {
        this.promocode_error_text = 'Введите промокод';
        this.promocode_error = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticStyle: {
      height: "100%",
      width: "100%",
      overflow: "hidden"
    },
    attrs: {
      id: "landing"
    }
  }, [_c("quick-menu", {
    attrs: {
      "menu-count": 3,
      "icon-class": _vm.icons,
      titles: _vm.titles,
      menuUrlList: _vm.menuUrlList,
      position: "'bottom-left'",
      backgroundColor: "#f08b23"
    }
  }), _vm._v(" "), _c("section", {
    staticClass: "ml-auto mr-auto parallax",
    staticStyle: {
      height: "100vh",
      width: "100%"
    },
    attrs: {
      id: "home"
    }
  }, [_c("div", {
    staticClass: "container mt-auto mb-auto",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "row m-auto desktop",
    staticStyle: {
      height: "100%",
      width: "90%"
    }
  }, [_c("div", {
    staticClass: "col-md-6 col-lg-4 col-sm-10 m-auto"
  }, [_c("router-link", {
    attrs: {
      to: "/tour-search"
    }
  }, [_c("div", {
    staticClass: "bg-panel ml-auto mr-auto pulse day-theme",
    staticStyle: {
      height: "520px",
      "max-width": "300px",
      position: "relative"
    }
  }, [_c("h1", [_vm._v("Подобрать путешествие")]), _vm._v(" "), _c("img", {
    staticStyle: {
      position: "absolute",
      bottom: "0",
      width: "100%"
    },
    attrs: {
      src: "images/1.png"
    }
  })])])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-lg-4 col-sm-10 m-auto"
  }, [_c("router-link", {
    attrs: {
      to: "/avia-search"
    }
  }, [_c("div", {
    staticClass: "bg-panel ml-auto mr-auto pulse day-theme soon-banner",
    staticStyle: {
      height: "520px",
      "max-width": "300px",
      position: "relative"
    }
  }, [_c("h1", [_vm._v("Горячие туры")]), _vm._v(" "), _c("img", {
    staticStyle: {
      position: "absolute",
      bottom: "0",
      width: "100%"
    },
    attrs: {
      src: "images/2.png"
    }
  })])])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-lg-4 col-sm-10 m-auto"
  }, [_c("router-link", {
    attrs: {
      to: "/russia-tour-search"
    }
  }, [_c("div", {
    staticClass: "bg-panel pulse ml-auto mr-auto day-theme russion-tours-btn",
    staticStyle: {
      height: "520px",
      "max-width": "300px",
      position: "relative"
    }
  }, [_c("h1", [_vm._v("Подобрать туры по России")]), _vm._v(" "), _c("img", {
    staticStyle: {
      position: "absolute",
      bottom: "0",
      width: "100%"
    },
    attrs: {
      src: "images/4.png"
    }
  })])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row m-auto mobile tablet d-lg-none",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-6 col-lg-4 col-sm-10 mt-3 m-auto"
  }, [_c("hooper", {
    staticClass: "mr-auto ml-auto",
    staticStyle: {
      height: "100%",
      "max-width": "300px",
      width: "100%",
      "box-shadow": "0px 3px 15px #0000006b",
      "-moz-box-shadow": "0px 3px 15px #0000006b",
      "-webkit-box-shadow": "0px 3px 15px #0000006b"
    }
  }, [_c("slide", [_c("router-link", {
    attrs: {
      to: "/tour-search"
    }
  }, [_c("div", {
    staticClass: "bg-panel ml-auto mr-auto day-theme",
    staticStyle: {
      height: "70vh",
      "max-width": "300px",
      position: "relative"
    }
  }, [_c("h1", [_vm._v("Подобрать путешествие")]), _vm._v(" "), _c("img", {
    staticStyle: {
      position: "absolute",
      bottom: "0",
      width: "100%"
    },
    attrs: {
      src: "images/1.png"
    }
  })])])], 1), _vm._v(" "), _c("slide", [_c("router-link", {
    attrs: {
      to: "/avia-search"
    }
  }, [_c("div", {
    staticClass: "bg-panel ml-auto mr-auto day-theme soon-banner",
    staticStyle: {
      height: "70vh",
      "max-width": "300px",
      position: "relative"
    }
  }, [_c("h1", [_vm._v("Горячие туры")]), _vm._v(" "), _c("img", {
    staticStyle: {
      position: "absolute",
      bottom: "0",
      width: "100%"
    },
    attrs: {
      src: "images/2.png"
    }
  })])])], 1), _vm._v(" "), _c("slide", [_c("router-link", {
    attrs: {
      to: "/russia-tour-search"
    }
  }, [_c("div", {
    staticClass: "bg-panel ml-auto mr-auto day-theme russion-tours-btn",
    staticStyle: {
      height: "70vh",
      "max-width": "300px",
      position: "relative"
    }
  }, [_c("h1", [_vm._v("Подобрать туры по России")]), _vm._v(" "), _c("img", {
    staticStyle: {
      position: "absolute",
      bottom: "0",
      width: "100%"
    },
    attrs: {
      src: "images/4.png"
    }
  })])])], 1), _vm._v(" "), _c("hooper-navigation", {
    attrs: {
      slot: "hooper-addons"
    },
    slot: "hooper-addons"
  }), _vm._v(" "), _c("hooper-pagination", {
    attrs: {
      slot: "hooper-addons"
    },
    slot: "hooper-addons"
  })], 1)], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "editorial-background",
    staticStyle: {
      background: "linear-gradient(0deg,rgb(255, 224, 134), rgb(248, 135, 6))"
    }
  }), _vm._v(" "), _c("svg", {
    staticClass: "editorial",
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
      fill: "#f8e30159"
    }
  }), _vm._v(" "), _c("use", {
    attrs: {
      "xlink:href": "#gentle-wave",
      x: "48",
      y: "6",
      fill: "rgb(255, 224, 134)"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "particles"
  }, _vm._l(26, function (n) {
    return _c("div", {
      staticClass: "cloud-1 cloud"
    }, [_c("div", {
      staticClass: "cloud--inner1"
    }), _vm._v(" "), _c("div", {
      staticClass: "cloud--inner4"
    }), _vm._v(" "), _c("div", {
      staticClass: "cloud--inner2"
    }), _vm._v(" "), _c("div", {
      staticClass: "cloud--inner3"
    })]);
  }), 0)]), _vm._v(" "), _c("section", {
    staticClass: "tablet desktop mb-5",
    staticStyle: {
      height: "100%"
    },
    attrs: {
      id: "welcome"
    }
  }, [_c("div", {
    staticClass: "container m-auto",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "row m-auto tablet desktop",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-12 col-sm-12 tablet-travel-card-col m-auto"
  }, [_c("div", {
    staticClass: "mr-0 ml-auto",
    staticStyle: {
      height: "auto"
    }
  }, [_c("div", {
    staticClass: "row m-auto justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-12 col-sm-12 p-0"
  }, [_c("div", {
    staticClass: "row mx-auto mt-4 mb-3 d-flex justify-content-center flex-wrap",
    staticStyle: {
      color: "#062348",
      "font-size": "14px",
      "font-weight": "700",
      width: "80%",
      "text-align": "justify"
    }
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "row d-flex justify-content-center"
  }, [_c("div", {
    staticClass: "col-10"
  }, [_c("employee-list", {
    attrs: {
      visible_title: false
    }
  })], 1)]), _vm._v(" "), _vm._m(4)])])]), _vm._v(" "), _c("img", {
    staticClass: "blue-inc tablet",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/blue-inc-d.svg"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "orange-inc tablet",
    staticStyle: {
      position: "absolute",
      top: "50px"
    },
    attrs: {
      src: "/images/orange-inc-d.svg"
    }
  })])])])])]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("section", {
    staticClass: "my-5",
    staticStyle: {
      height: "500px"
    },
    attrs: {
      id: "travel"
    }
  }, [_c("div", {
    staticClass: "container m-auto",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "row m-auto tablet desktop",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-sm-12 tablet-travel-card-col m-auto"
  }, [_c("div", {
    staticClass: "ml-0 mr-auto travel-card"
  }, [_vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "travel-card-more row align-items-center justify-content-center"
  }, [_c("h5", {
    staticClass: "more-text my-auto ml-auto mr-0",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toTourSearch
    }
  }, [_vm._v("\n                                    начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toTourSearch
    }
  }, [_c("div", {
    staticClass: "icon icon-keyboard_arrow_right"
  })])]), _vm._v(" "), _c("img", {
    staticClass: "blue-inc",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/blue-inc-d.svg"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "orange-inc",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/orange-inc-d.svg"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row m-auto mobile d-sm-none",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "card card-profile"
  }, [_vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "card-body row m-auto",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_vm._m(11), _vm._v(" "), _c("p", {
    staticClass: "card-description my-3 mx-auto"
  }, [_vm._v("\n                                Данный раздел позволяет сделать подбор пакетного тура по всему миру от ведущих\n                                туристических оператов.\n                                Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.\n                                Вам также будут доступны реальные отзывы на каждый объект размещения.\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center justify-content-center m-auto",
    staticStyle: {
      width: "100%"
    }
  }, [_c("h5", {
    staticClass: "more-text my-auto ml-auto mr-0",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toTourSearch
    }
  }, [_vm._v("\n                                    начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toTourSearch
    }
  }, [_c("div", {
    staticClass: "icon icon-keyboard_arrow_right"
  })])])]), _vm._v(" "), _c("img", {
    staticClass: "blue-inc",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/blue-inc.svg"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "orange-inc",
    staticStyle: {
      position: "absolute",
      top: "80px"
    },
    attrs: {
      src: "/images/orange-inc.svg"
    }
  })])])])]), _vm._v(" "), _c("section", {
    staticClass: "my-5",
    staticStyle: {
      height: "500px"
    },
    attrs: {
      id: "avia"
    }
  }, [_c("div", {
    staticClass: "container m-auto",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "row m-auto desktop tablet",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 col-md-6 col-sm-12 tablet-travel-card-col m-auto"
  }, [_c("div", {
    staticClass: "mr-0 ml-auto travel-card-orange"
  }, [_vm._m(12), _vm._v(" "), _vm._m(13), _vm._v(" "), _vm._m(14), _vm._v(" "), _c("div", {
    staticClass: "travel-card-more row align-items-center justify-content-center"
  }, [_c("h5", {
    staticClass: "more-text mt-auto mb-auto",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toAviaSearch
    }
  }, [_vm._v("\n                                    начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toAviaSearch
    }
  }, [_c("div", {
    staticClass: "icon icon-keyboard_arrow_right"
  })])]), _vm._v(" "), _c("img", {
    staticClass: "blue-inc",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/avia-blue-inc-d.svg"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "orange-inc",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/avia-orange-inc-d.svg"
    }
  })])]), _vm._v(" "), _vm._m(15)]), _vm._v(" "), _c("div", {
    staticClass: "row m-auto mobile d-sm-none",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "card card-profile"
  }, [_vm._m(16), _vm._v(" "), _c("div", {
    staticClass: "card-body row m-auto",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_vm._m(17), _vm._v(" "), _c("p", {
    staticClass: "card-description my-3 mx-auto"
  }, [_vm._v("\n                                В данном разделе Вы сможете приобрести авиабилет в любую точку.\n                                Возможна оплата онлайн или сделать заказ с сайта.\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center justify-content-center m-auto",
    staticStyle: {
      width: "100%"
    }
  }, [_c("h5", {
    staticClass: "more-text my-auto ml-auto mr-0",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toAviaSearch
    }
  }, [_vm._v("\n                                    начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toAviaSearch
    }
  }, [_c("div", {
    staticClass: "icon icon-keyboard_arrow_right"
  })])])]), _vm._v(" "), _c("img", {
    staticClass: "blue-inc",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/blue-inc.svg"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "orange-inc",
    staticStyle: {
      position: "absolute",
      top: "80px"
    },
    attrs: {
      src: "/images/orange-inc.svg"
    }
  })])])])]), _vm._v(" "), _c("section", {
    staticClass: "my-5",
    staticStyle: {
      height: "500px"
    },
    attrs: {
      id: "russia"
    }
  }, [_c("div", {
    staticClass: "container m-auto",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "row m-auto desktop tablet",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_vm._m(18), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-sm-12 tablet-travel-card-col m-auto"
  }, [_c("div", {
    staticClass: "ml-0 mr-auto travel-card"
  }, [_vm._m(19), _vm._v(" "), _vm._m(20), _vm._v(" "), _vm._m(21), _vm._v(" "), _c("div", {
    staticClass: "travel-card-more row align-items-center justify-content-center"
  }, [_c("h5", {
    staticClass: "more-text mt-auto mb-auto",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toHotelSearch
    }
  }, [_vm._v("\n                                    начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toHotelSearch
    }
  }, [_c("div", {
    staticClass: "icon icon-keyboard_arrow_right"
  })])]), _vm._v(" "), _c("img", {
    staticClass: "blue-inc",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/blue-inc-d.svg"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "orange-inc",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/orange-inc-d.svg"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row m-auto mobile d-sm-none",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "card card-profile"
  }, [_vm._m(22), _vm._v(" "), _c("div", {
    staticClass: "card-body row m-auto",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_vm._m(23), _vm._v(" "), _vm._m(24), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center justify-content-center m-auto",
    staticStyle: {
      width: "100%"
    }
  }, [_c("h5", {
    staticClass: "more-text my-auto ml-auto mr-0",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toHotelSearch
    }
  }, [_vm._v("начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.toHotelSearch
    }
  }, [_c("div", {
    staticClass: "icon icon-keyboard_arrow_right"
  })])])]), _vm._v(" "), _c("img", {
    staticClass: "blue-inc",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/blue-inc.svg"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "orange-inc",
    staticStyle: {
      position: "absolute",
      top: "80px"
    },
    attrs: {
      src: "/images/orange-inc.svg"
    }
  })])])])]), _vm._v(" "), _vm._m(25), _vm._v(" "), _vm._m(26), _vm._v(" "), _vm._m(27), _vm._v(" "), _c("div", {
    staticClass: "sidebar"
  }, [_c("a", {
    staticClass: "toggleButton sidebarTrigger",
    attrs: {
      href: "#sidbar"
    },
    on: {
      click: function click($event) {
        return _vm.sidebarOpen();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-right"
  })]), _vm._v(" "), _c("div", {
    staticClass: "sidebarTitle"
  }, [_vm._v("\n                Наши контакты\n            ")]), _vm._v(" "), _vm._m(28), _vm._v(" "), _c("div", {
    staticClass: "sidebarProducts"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("h2", [_vm._v("Ростов-на-Дону")]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("p", [_vm._v("Горького 140")]), _vm._v(" "), _c("p", [_vm._v("+7 906 416-78-72")]), _vm._v(" "), _c("p", [_vm._v("travelclubrnd@bk.ru")]), _vm._v(" "), _c("h4", [_vm._v(" Режим работы:")]), _vm._v(" "), _c("p", [_vm._v("Пн-Птн 10 00 – 18 00")]), _vm._v(" "), _c("p", [_vm._v("Суббота 10 00 – 17 00")]), _vm._v(" "), _c("p", [_vm._v("Воскресенье – выходной")]), _vm._v(" "), _c("employee-list", {
    attrs: {
      city: "Ростов-на-Дону"
    }
  })], 1), _vm._v(" "), _vm._m(29)])])]), _vm._v(" "), _c("Footer")], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12 col-md-8 col-sm-12 m-auto desktop"
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-7 mx-auto p-0"
  }, [_c("div", {
    staticClass: "row mr-auto ml-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("Д")]), _vm._v("авайте")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute",
      width: "250px",
      height: "50px"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7 mx-auto p-0"
  }, [_c("div", {
    staticClass: "row ml-auto mr-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "320px"
    }
  }, [_c("h1", {
    staticClass: "title-2"
  }, [_c("span", [_vm._v("познакомимся!")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute",
      width: "320px",
      height: "50px"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12 m-auto d-none d-md-none d-lg-block"
  }, [_c("img", {
    staticClass: "blue-inc blue-inc-1",
    staticStyle: {
      position: "absolute",
      top: "-44px",
      right: "0px"
    },
    attrs: {
      src: "/images/blue-inc-d.svg"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "orange-inc orange-inc-1",
    staticStyle: {
      position: "absolute",
      left: "0px"
    },
    attrs: {
      src: "/images/orange-inc-d.svg"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("img", {
    staticClass: "logo-1-1",
    staticStyle: {
      width: "100%",
      height: "100%",
      "max-width": "300px"
    },
    attrs: {
      src: "/images/LOGO-1.png"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12 col-md-12 col-sm-12 tablet"
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center mx-auto travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-7 ml-5 mr-auto p-0"
  }, [_c("div", {
    staticClass: "row mr-auto ml-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("Д")]), _vm._v("авайте")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute",
      width: "250px",
      height: "50px"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7 mx-auto p-0"
  }, [_c("div", {
    staticClass: "row ml-auto mr-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "320px"
    }
  }, [_c("h1", {
    staticClass: "title-2"
  }, [_c("span", [_vm._v("познакомимся!")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute",
      width: "320px",
      height: "50px"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_vm._v("\n                                            Сеть туристических агентств\n                                            "), _c("span", {
    staticStyle: {
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "#f08b23",
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Club")])]), _vm._v("\n\n                                            – это в первую очередь команда людей, которые не представляют свою жизнь без\n                                            путешествий и готовы делится своим опытом.\n                                            Настоящие профессионалы, обожающие свою работу!\n                                        ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_vm._v("\n                                            В основе\n                                            "), _c("span", {
    staticStyle: {
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "#f08b23",
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Club")])]), _vm._v("\n\n                                            лежит многолетний опыт работы. Все наши специалисты регулярную проходят\n                                            обязательную квалификацию, тем самым подтверждая свое право быть в команде\n                                        ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "tablet desktop my-5",
    staticStyle: {
      height: "100%"
    },
    attrs: {
      id: "why"
    }
  }, [_c("div", {
    staticClass: "container m-auto",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "row m-auto tablet desktop",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-12 m-auto d-none d-md-none d-lg-block"
  }, [_c("img", {
    staticClass: "blue-inc blue-inc-2",
    staticStyle: {
      position: "absolute",
      top: "-35px",
      right: "0px"
    },
    attrs: {
      src: "/images/blue-inc-d.svg"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "orange-inc orange-inc-2",
    staticStyle: {
      position: "absolute",
      left: "-17px",
      bottom: "-10px"
    },
    attrs: {
      src: "/images/avia-orange-inc-d.svg"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("img", {
    staticClass: "logo-1-2",
    staticStyle: {
      width: "100%",
      height: "100%",
      "max-width": "400px"
    },
    attrs: {
      src: "/images/avatar.png"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-12 col-sm-12 m-auto desktop"
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-7 mx-auto p-0"
  }, [_c("div", {
    staticClass: "row mr-auto ml-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("П")]), _vm._v("очему")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute",
      width: "250px",
      height: "50px"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7 mx-auto p-0 d-flex justify-content-center"
  }, [_c("div", {
    staticClass: "row travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-2"
  }, [_c("span", [_vm._v("TravelClub?")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute",
      width: "250px",
      height: "50px"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-12 col-sm-12 tablet-travel-card-col m-auto"
  }, [_c("div", {
    staticClass: "mr-0 ml-auto",
    staticStyle: {
      height: "auto"
    }
  }, [_c("div", {
    staticClass: "row m-auto justify-content-center align-items-center",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 col-md-12 col-sm-12 tablet"
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center mx-auto travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-7 ml-5 mr-auto p-0"
  }, [_c("div", {
    staticClass: "row mr-auto ml-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("П")]), _vm._v("очему")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute",
      width: "250px",
      height: "50px"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7 mx-auto p-0"
  }, [_c("div", {
    staticClass: "row ml-auto mr-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-2"
  }, [_c("span", [_vm._v("TravelClub?")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute",
      width: "250px",
      height: "50px"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-12 col-sm-12 p-0"
  }, [_c("div", {
    staticClass: "row mx-auto mt-4 mb-3",
    staticStyle: {
      color: "#062348",
      "font-size": "14px",
      "font-weight": "700",
      width: "80%",
      "text-align": "justify"
    }
  }, [_c("p", [_vm._v("\n                                            Современный туризм давно вышел за рамки пакетных туров, наши клиенты в\n                                            большинстве предпочитают яркий и динамичный отдых, путем создания\n                                            индивидульных и групповых туров.\n                                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                            Организовать свадебное торжество на Мальдивах или мальчишник в Вегасе,\n                                            Welcome!\n                                            Любая, даже самая крейзи идея имеет право на существование, все возможно,\n                                            вместе с\n                                            "), _c("span", {
    staticStyle: {
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "#f08b23",
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Club")])])]), _vm._v(" "), _c("p", [_vm._v("\n                                            Изучайте Мир и путешествуйте вместе с\n                                            "), _c("span", {
    staticStyle: {
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "#f08b23",
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Club")])]), _vm._v("\n\n                                            !\n                                        ")])])])]), _vm._v(" "), _c("img", {
    staticClass: "blue-inc tablet",
    staticStyle: {
      position: "absolute",
      top: "140px"
    },
    attrs: {
      src: "/images/avia-blue-inc-d.svg"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "orange-inc tablet",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/avia-orange-inc-d.svg"
    }
  })])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6 m-auto desktop"
  }, [_c("div", {
    staticClass: "travel-card-illustration"
  }, [_c("img", {
    staticClass: "travel-illustration",
    attrs: {
      src: "/images/travel-illustration.png"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "travel-mark trip-mark"
  }, [_c("img", {
    attrs: {
      src: "/images/trip-mark.svg"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "travel-card-title"
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("П")]), _vm._v("утешествуй")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute",
      top: "10px"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  }), _vm._v(" "), _c("h1", {
    staticClass: "title-2"
  }, [_vm._v("c "), _c("span", [_vm._v("TravelClub")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute",
      top: "57px"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "travel-card-description row"
  }, [_c("p", [_vm._v("Данный раздел позволяет сделать подбор пакетного тура по всему миру от ведущих\n                                    туристических оператов.")]), _vm._v(" "), _c("p", [_vm._v("Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.")]), _vm._v(" "), _c("p", [_vm._v("Вам также будут доступны реальные отзывы на каждый объект размещения.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-avatar"
  }, [_c("img", {
    staticClass: "img",
    attrs: {
      src: "/images/travel-mark.svg"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-8 p-0"
  }, [_c("div", {
    staticClass: "row mr-auto ml-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("П")]), _vm._v("утешествуй")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 p-0"
  }, [_c("div", {
    staticClass: "row ml-auto mr-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-2"
  }, [_vm._v("c "), _c("span", [_vm._v("TravelClub")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "travel-mark avia-mark"
  }, [_c("img", {
    attrs: {
      src: "/images/avia-mark-d.svg"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "travel-card-title"
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("Л")]), _vm._v("етай")]), _vm._v(" "), _c("h1", {
    staticClass: "title-2"
  }, [_vm._v("c "), _c("span", [_vm._v("TravelClub")])]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute",
      top: "10px"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute",
      top: "57px"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "travel-card-description row"
  }, [_c("p", [_vm._v("В данном разделе Вы сможете приобрести авиабилет в любую точку.")]), _vm._v(" "), _c("p", [_vm._v("Возможна оплата онлайн или сделать заказ с сайта.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6 m-auto d-none d-md-none d-lg-block"
  }, [_c("div", {
    staticClass: "travel-card-illustration"
  }, [_c("img", {
    staticClass: "illustration",
    attrs: {
      src: "/images/travel-illustration-2.png"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-avatar"
  }, [_c("img", {
    staticClass: "img",
    attrs: {
      src: "/images/avia-mark.svg"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-8 p-0"
  }, [_c("div", {
    staticClass: "row mr-auto ml-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("Л")]), _vm._v("етай")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 p-0"
  }, [_c("div", {
    staticClass: "row ml-auto mr-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-2"
  }, [_vm._v("c "), _c("span", [_vm._v("TravelClub")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6 m-auto desktop"
  }, [_c("div", {
    staticClass: "travel-card-illustration"
  }, [_c("img", {
    staticClass: "illustration",
    attrs: {
      src: "/images/section3.png"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "travel-mark hotel-mark"
  }, [_c("img", {
    staticClass: "img",
    staticStyle: {
      width: "150px",
      height: "150px"
    },
    attrs: {
      src: "/images/russia-mark.png"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "travel-card-title"
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("Т")]), _vm._v("уры")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute",
      top: "10px"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  }), _vm._v(" "), _c("h1", {
    staticClass: "title-2"
  }, [_vm._v("по "), _c("span", [_vm._v("России")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute",
      top: "57px"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "travel-card-description row"
  }, [_c("p", [_vm._v("Путешествуй с "), _c("span", {
    staticStyle: {
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "#f08b23",
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Club")])]), _vm._v("\n\n                                    по всей России.")]), _vm._v(" "), _c("p", [_vm._v("Возможна оплата онлайн или сделать заказ с сайта.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-avatar"
  }, [_c("img", {
    staticClass: "img",
    staticStyle: {
      width: "130px",
      height: "130px"
    },
    attrs: {
      src: "/images/russia-mark.png"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-8 p-0"
  }, [_c("div", {
    staticClass: "row mr-auto ml-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-1"
  }, [_c("span", [_vm._v("Т")]), _vm._v("уры")]), _vm._v(" "), _c("img", {
    staticClass: "blue-brush",
    staticStyle: {
      position: "absolute",
      width: "250px",
      height: "50px"
    },
    attrs: {
      src: "/images/blue-brush.svg"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 p-0"
  }, [_c("div", {
    staticClass: "row ml-auto mr-0 my-auto travel-card-title",
    staticStyle: {
      position: "relative",
      height: "50px",
      width: "250px"
    }
  }, [_c("h1", {
    staticClass: "title-2"
  }, [_vm._v("по "), _c("span", [_vm._v("России")])]), _vm._v(" "), _c("img", {
    staticClass: "orange-brush",
    staticStyle: {
      position: "absolute",
      width: "250px",
      height: "50px"
    },
    attrs: {
      src: "/images/orange-brush.svg"
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-description my-3 mx-auto"
  }, [_c("p", [_vm._v("Путешествуй с "), _c("span", {
    staticStyle: {
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "#f08b23",
      "font-family": "'Open Sans'",
      "font-weight": "900"
    }
  }, [_vm._v("Club")])]), _vm._v("\n\n                                    по всей России.")]), _vm._v(" "), _c("p", [_vm._v("Возможна оплата онлайн или сделать заказ с сайта.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "hero"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "hero-header"
  }, [_c("div", {
    staticClass: "itemLogo"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "https://travel-club.tours/img/logo.png",
      alt: "logo"
    }
  })])]), _vm._v(" "), _c("h1", {
    staticClass: "heroTitle"
  }, [_vm._v("\n                            Сеть туристических агентств Travel"), _c("span", {
    staticStyle: {
      color: "orange"
    }
  }, [_vm._v("Club")])]), _vm._v(" "), _c("div", {
    staticClass: "hero-content"
  }, [_c("ul", {
    staticClass: "heroList"
  }, [_c("li", [_c("i", {
    staticClass: "far fa-check-square md hydrated m-2"
  }), _vm._v("\n                                    Подбор туров для каждого\n                                ")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "far fa-check-square md hydrated m-2"
  }), _vm._v("\n                                    Современные туры по РФ\n\n                                ")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "far fa-check-square md hydrated m-2"
  }), _vm._v("\n                                    Доступные авиобилеты\n                                ")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "far fa-check-square md hydrated m-2"
  }), _vm._v("\n                                    Комфортабельные отели\n                                ")])]), _vm._v(" "), _c("div", {
    staticClass: "previewArrow"
  }, [_c("img", {
    attrs: {
      src: "/img/item/demo-arrow.png",
      alt: "preview"
    }
  }), _vm._v(" Используй\n                                мышку для скрола\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "buttonWrapper"
  }, [_c("a", {
    staticClass: "btn btn-orange d-flex justify-content-center align-items-center",
    attrs: {
      href: "#qr",
      id: "hero-qr-button"
    }
  }, [_c("i", {
    staticClass: "fas fa-qrcode mr-1"
  }), _vm._v("\n                                Попробуй с телефона\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "qrBlock",
    staticStyle: {
      display: "none"
    }
  }, [_c("img", {
    staticClass: "qr",
    attrs: {
      src: "https://travel-club.tours/img/qr.jpg",
      alt: "qr"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text"
  }, [_c("strong", [_vm._v("Посмотреть на своём телефоне.")]), _vm._v(" Сканируй QR-код для установки приложения\n                            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "phoneContent"
  }, [_c("div", {
    staticClass: "phoneWrapper"
  }, [_c("div", {
    staticClass: "in"
  }, [_c("iframe", {
    staticClass: "getFrame",
    attrs: {
      src: "http://test-task/m/mobile",
      frameborder: "0"
    }
  })])])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "gridBox"
  }, [_c("div", {
    staticClass: "section-heading"
  }, [_c("h2", {
    staticClass: "title"
  }, [_vm._v("\n                        Путешествуй"), _c("br"), _vm._v("вместе с Travel"), _c("span", {
    staticStyle: {
      color: "orange"
    }
  }, [_vm._v("Club")])]), _vm._v(" "), _c("div", {
    staticClass: "text"
  }, [_c("em", [_vm._v("Изучайте Мир вместе с семьей Travel Club!")])])]), _vm._v(" "), _c("div", {
    staticClass: "itemWrapper"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item4.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "item-title"
  }, [_vm._v("Путешествуй c TravelClub")]), _vm._v(" "), _c("div", {
    staticClass: "item-text"
  }, [_vm._v("\n                                Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.\n\n\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item1.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "item-title"
  }, [_vm._v("Туры по России")]), _vm._v(" "), _c("div", {
    staticClass: "item-text"
  }, [_vm._v("\n                                Путешествуй с Travel Club по всей России.\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item2.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "item-title"
  }, [_vm._v("Мы - Travel Club Family")]), _vm._v(" "), _c("div", {
    staticClass: "item-text"
  }, [_vm._v("\n                                Стань частью семьи и получай все наши привелегии!\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item3.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "item-title"
  }, [_vm._v("Летай вместе с нами")]), _vm._v(" "), _c("div", {
    staticClass: "item-text"
  }, [_vm._v("\n                                Вы сможете приобрести авиабилет в любую точку самостоятельно или через наших менеджеров.\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item5.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "item-title"
  }, [_vm._v("Отели любого уровня")]), _vm._v(" "), _c("div", {
    staticClass: "item-text"
  }, [_vm._v("\n                                Мы подбираем отель под любой ваш критерий!\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item6.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "item-title"
  }, [_vm._v("Новый уровень путешествий")]), _vm._v(" "), _c("div", {
    staticClass: "item-text"
  }, [_vm._v("\n                                Качество превыше всего! Сервис - для нас главное кредо.\n                            ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "qrWidget",
    attrs: {
      id: "qr"
    }
  }, [_c("div", {
    staticClass: "section-heading"
  }, [_c("h2", {
    staticClass: "title"
  }, [_vm._v("\n                        Попробуй "), _c("br"), _vm._v("приложение "), _c("br"), _vm._v("на телефоне!\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "text"
  }, [_vm._v("\n                        Сканируй чтоб установить себе!\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "qrCodeImg"
  }, [_c("img", {
    staticClass: "img",
    attrs: {
      src: "/img/qr.jpg",
      alt: "qr"
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mobileDetected"
  }, [_c("div", {
    staticClass: "in"
  }, [_c("div", [_c("img", {
    staticClass: "logo",
    staticStyle: {
      width: "50px",
      height: "80px",
      "object-fit": "contain"
    },
    attrs: {
      src: "/img/travel/logo-1.png",
      alt: "logo"
    }
  })]), _vm._v(" "), _c("h3", {
    staticStyle: {
      "font-weight": "bold",
      color: "#1F1212"
    }
  }, [_vm._v("Travel Club Family")]), _vm._v("\n                Попробуйте перейти на мобильную версию приложения\n                "), _c("div", {
    staticClass: "mt-5 p-4"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("a", {
    staticClass: "btn btn-secondary btn-block",
    staticStyle: {
      height: "56px"
    },
    attrs: {
      href: "https://travel-club.tours"
    }
  }, [_c("i", {
    staticClass: "far fa-eye mr-2"
  }), _vm._v("\n                                Попробовать\n                            ")])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "sidebarFooter"
  }, [_c("a", {
    staticClass: "button",
    attrs: {
      rel: "noreferrer",
      href: "https://t.me/travelclubtours",
      target: "_blank",
      "aria-label": "мы в телеграм"
    }
  }, [_c("i", {
    staticClass: "fab fa-telegram-plane"
  })]), _vm._v(" "), _c("a", {
    staticClass: "button",
    attrs: {
      rel: "noreferrer",
      href: "https://www.instagram.com/travelclub_tours",
      target: "_blank",
      "aria-label": "мы в иснтаграм"
    }
  }, [_c("i", {
    staticClass: "fab fa-instagram"
  })]), _vm._v(" "), _c("a", {
    staticClass: "button",
    attrs: {
      rel: "noreferrer",
      href: "https://wa.me/79492353322",
      target: "_blank",
      "aria-label": "наш контакт в вотспап"
    }
  }, [_c("i", {
    staticClass: "fab fa-whatsapp"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12"
  }, [_c("h2", [_vm._v("Донецк")]), _vm._v(" "), _c("p", [_vm._v("Бульвар Пушкина 23\n                        ")]), _vm._v(" "), _c("p", [_vm._v("+7 949 235-33-22\n                            "), _c("span", {
    staticClass: "ml-2"
  }, [_c("i", {
    staticClass: "fab fa-whatsapp"
  })])]), _vm._v(" "), _c("h4", [_vm._v("Режим работы:")]), _vm._v(" "), _c("p", [_vm._v(" Пн-Птн 10 00 – 18 00")]), _vm._v(" "), _c("p", [_vm._v("Суббота 10 00 – 17 00")]), _vm._v(" "), _c("p", [_vm._v(" Воскресенье - выходной")]), _vm._v(" "), _c("div", {
    staticClass: "ya-map"
  }, [_c("a", {
    staticStyle: {
      color: "#eee",
      "font-size": "12px",
      position: "absolute",
      top: "0px"
    },
    attrs: {
      href: "https://yandex.ru/MAPS/142/donetsk/?utm_medium=mapframe&utm_source=maps"
    }
  }, [_vm._v("Донецк")]), _c("a", {
    staticStyle: {
      color: "#eee",
      "font-size": "12px",
      position: "absolute",
      top: "14px"
    },
    attrs: {
      href: "https://yandex.ru/MAPS/142/donetsk/house/bulvar_pushkina_23/Z04YfgdiSEwDQFpifXxxc3VhbQ==/?ll=37.802194%2C48.002930&utm_medium=mapframe&utm_source=maps&z=16.65"
    }
  }, [_vm._v("Бульвар Пушкина, 23 —\n                            Яндекс.Карты")]), _vm._v(" "), _c("iframe", {
    attrs: {
      src: "https://yandex.ru/map-widget/v1/-/CCUQ72AL2A",
      allowfullscreen: "true"
    }
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.editorial .parallax > use {\n  animation: move-forever 12s linear infinite;\n}\n.editorial .parallax > use:nth-child(1) {\n  animation-delay: -2s;\n  animation-duration: 12s;\n  opacity: 0.6;\n}\n.editorial .parallax > use:nth-child(2) {\n  animation-delay: -2s;\n  animation-duration: 14s;\n  opacity: 0.8;\n}\n.editorial .parallax > use:nth-child(3) {\n  animation-delay: -4s;\n  animation-duration: 16s;\n}\n.editorial .parallax > use:nth-child(4) {\n  animation-delay: -2s;\n  animation-duration: 10s;\n  opacity: 0.4;\n}\n@keyframes move-forever {\n0% {\n    transform: translate(-90px, 0%);\n}\n100% {\n    transform: translate(85px, 0%);\n}\n}\n@keyframes move-forever {\n0% {\n    transform: translate(-90px, 0%);\n}\n100% {\n    transform: translate(85px, 0%);\n}\n}\n/* ----------------------- PARTICLES ----------------------- */\n.particles {\n  position: absolute;\n  top: 0px;\n  left: 10px;\n  right: 10px;\n  height: 50vh;\n  z-index: -1;\n  overflow: hidden;\n}\n.particles .cloud {\n  position: absolute;\n  opacity: 0.7;\n  background: #fff;\n  animation-iteration-count: infinite !important;\n}\n.cloud-1 {\n  width: 110px;\n  height: 55px;\n  bottom: 50%;\n  left: 105%;\n}\n.cloud {\n  position: absolute;\n  opacity: 0.7;\n  background: #fff;\n  border-radius: 200px;\n  animation-iteration-count: infinite !important;\n  top: 65%;\n  left: 10%;\n  animation: floating 28s linear;\n}\n.cloud--inner1:before, .cloud--inner1:after {\n  content: \"\";\n  position: absolute;\n  background: #fff;\n  width: 48%;\n  height: 100%;\n  position: absolute;\n  top: -34%;\n  left: 2%;\n  border-radius: 300px;\n}\n.cloud--inner1:after {\n  width: 65%;\n  height: 120%;\n  top: -21%;\n  left: auto;\n  right: 2%;\n}\n.cloud--inner3:before, .cloud--inner3:after {\n  content: \"\";\n  position: absolute;\n  background: #fff;\n  width: 55%;\n  height: 91%;\n  position: absolute;\n  top: 21%;\n  left: -9%;\n  border-radius: 300px;\n}\n.cloud--inner3:after {\n  width: 55%;\n  height: 100%;\n  top: 34%;\n  left: auto;\n  right: 8%;\n}\n.cloud--inner2:before, .cloud--inner2:after {\n  content: \"\";\n  position: absolute;\n  background: #fff;\n  width: 61%;\n  height: 100%;\n  position: absolute;\n  top: 30%;\n  left: -12%;\n  border-radius: 200px;\n}\n.cloud--inner2:after {\n  width: 55%;\n  height: 100%;\n  top: 54%;\n  left: auto;\n  right: 10%;\n}\n.cloud--inner4:before, .cloud--inner4:after {\n  content: \"\";\n  position: absolute;\n  border-radius: 200px;\n}\n.cloud--inner4:before {\n  background: #fff;\n  width: 50%;\n  height: 89%;\n  top: 19%;\n  left: auto;\n  right: -20%;\n}\n.cloud--inner4:after {\n  background: #fff;\n  width: 50%;\n  height: 74%;\n  top: 18%;\n  left: auto;\n  right: -19%;\n}\n.cloud-1:nth-child(1) {\n  /*height: 25px;*/\n  /*width: 25px;*/\n  width: 110px;\n  height: 55px;\n  border-radius: 100%;\n  animation: floating 28s linear;\n  top: 65%;\n  left: 5%;\n}\n.cloud-1:nth-child(2) {\n  /*height: 12px;*/\n  /*width: 12px;*/\n  width: 90px;\n  height: 35px;\n  border-radius: 100%;\n  animation: floating 35s linear;\n  top: 15%;\n  left: 13%;\n}\n.cloud-1:nth-child(25),\n.cloud-1:nth-child(3) {\n  -webkit-animation: floating 28s linear;\n  border-radius: 100%;\n}\n.cloud-1:nth-child(3) {\n  height: 21px;\n  width: 51px;\n  animation: floating 28s linear;\n  top: 48%;\n  left: 36%;\n}\n.cloud-1:nth-child(4) {\n  height: 35px;\n  width: 70px;\n  border-radius: 100%;\n  animation: floating 25s linear;\n  top: 85%;\n  left: 95%;\n}\n.cloud-1:nth-child(5) {\n  width: 83.3333333333px;\n  height: 41.6666666667px;\n  border-radius: 100%;\n  animation: floating 32s linear;\n  top: 36%;\n  left: 88%;\n}\n.cloud-1:nth-child(6) {\n  width: 60px;\n  height: 35px;\n  border-radius: 100%;\n  animation: floating 23s linear;\n  top: 87%;\n  left: 10%;\n}\n.cloud-1:nth-child(7) {\n  height: 21px;\n  width: 51px;\n  border-radius: 100%;\n  animation: floating 36s linear;\n  top: 63%;\n  left: 78%;\n}\n.cloud-1:nth-child(8) {\n  height: 35px;\n  width: 80px;\n  border-radius: 100%;\n  animation: floating 27s linear;\n  top: 35%;\n  left: 86%;\n}\n.cloud-1:nth-child(9) {\n  height: 15px;\n  width: 45px;\n  border-radius: 100%;\n  animation: floating 31s linear;\n  top: 20%;\n  left: 70%;\n}\n.cloud-1:nth-child(10) {\n  height: 23px;\n  width: 43px;\n  border-radius: 100%;\n  animation: floating 32s linear;\n  top: 42%;\n  left: 27%;\n}\n.cloud-1:nth-child(11) {\n  height: 20px;\n  width: 44px;\n  border-radius: 100%;\n  animation: floating 30s linear;\n  top: 62%;\n  left: 17%;\n}\n.cloud-1:nth-child(12) {\n  height: 23px;\n  width: 53px;\n  border-radius: 100%;\n  animation: floating 29s linear;\n  top: 9%;\n  left: 63%;\n}\n.cloud-1:nth-child(13) {\n  height: 26px;\n  width: 44px;\n  border-radius: 100%;\n  animation: floating 21s linear;\n  top: 14%;\n  left: 30%;\n}\n.cloud-1:nth-child(14) {\n  height: 18px;\n  width: 41px;\n  border-radius: 100%;\n  animation: floating 34s linear;\n  top: 29%;\n  left: 33%;\n}\n.cloud-1:nth-child(15) {\n  height: 19px;\n  width: 47px;\n  border-radius: 100%;\n  animation: floating 23s linear;\n  top: 68%;\n  left: 31%;\n}\n.cloud-1:nth-child(16) {\n  height: 28px;\n  width: 58px;\n  border-radius: 100%;\n  animation: floating 21s linear;\n  top: 29%;\n  left: 57%;\n}\n.cloud-1:nth-child(17) {\n  height: 38px;\n  width: 68px;\n  border-radius: 100%;\n  animation: floating 32s linear;\n  top: 49%;\n  left: 21%;\n}\n.cloud-1:nth-child(18) {\n  height: 17px;\n  width: 37px;\n  border-radius: 100%;\n  animation: floating 37s linear;\n  top: 35%;\n  left: 94%;\n}\n.cloud-1:nth-child(19) {\n  height: 20px;\n  width: 40px;\n  border-radius: 100%;\n  animation: floating 35s linear;\n  top: 42%;\n  left: 50%;\n}\n.cloud-1:nth-child(20) {\n  height: 18px;\n  width: 48px;\n  border-radius: 100%;\n  animation: floating 35s linear;\n  top: 94%;\n  left: 20%;\n}\n.cloud-1:nth-child(21) {\n  height: 24px;\n  width: 54px;\n  border-radius: 100%;\n  animation: floating 37s linear;\n  top: 7%;\n  left: 23%;\n}\n.cloud-1:nth-child(22) {\n  height: 24px;\n  width: 54px;\n  border-radius: 100%;\n  animation: floating 34s linear;\n  top: 49%;\n  left: 33%;\n}\n.cloud-1:nth-child(23) {\n  height: 25px;\n  width: 55px;\n  border-radius: 100%;\n  animation: floating 29s linear;\n  top: 82%;\n  left: 58%;\n}\n.cloud-1:nth-child(24) {\n  height: 24px;\n  width: 64px;\n  border-radius: 100%;\n  animation: floating 32s linear;\n  top: 60%;\n  left: 85%;\n}\n.cloud-1:nth-child(25) {\n  height: 35px;\n  width: 75px;\n  animation: floating 28s linear;\n  top: 53%;\n  left: 81%;\n}\n.cloud-1:nth-child(26) {\n  height: 23px;\n  width: 43px;\n  border-radius: 100%;\n  animation: floating 28s linear;\n  top: 63%;\n  left: 94%;\n}\n@keyframes floating {\n0% {\n    transform: translate(0, 0) scale(0.5);\n    opacity: 0;\n}\n5% {\n    opacity: 0.1;\n}\n50% {\n    transform: translate(0, -250px) scale(0.8);\n    opacity: 0.7;\n}\n75% {\n    opacity: 0.3;\n}\n95% {\n    opacity: 0;\n}\n100% {\n    transform: translate(0, -500px) scale(0.5);\n}\n}\n.editorial {\n  position: absolute;\n  top: 50%;\n  display: block;\n  width: 100%;\n  height: 10em;\n  max-height: 100vh;\n  margin: 0;\n  transform: rotate(180deg);\n  z-index: -1;\n}\n.editorial-background {\n  /*background: #aed1ff;*/\n  /*background:rgba(255,153,0, 1);*/\n  /*background-image: linear-gradient(0deg,#ffbf00, #e17e4e);*/\n  position: absolute;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 50%;\n  max-height: 100vh;\n  z-index: -1;\n}\n@media (max-width: 50em) {\n.editorial {\n    height: 17vw;\n}\n}\n#promocode svg {\n  /*max-height:300px;*/\n  width: 100%;\n  margin: auto;\n}\n#promocode .travel-input {\n  border: 1px solid #f08b23;\n  border-radius: 50px;\n  font-size: 1rem;\n  min-height: 40px;\n  color: #062348 !important;\n  font-family: \"Open Sans\" !important;\n  font-weight: 900 !important;\n  padding: 30px;\n}\n#promocode .travel-input:focus {\n  outline: none !important;\n  box-shadow: none !important;\n  border-color: #f08b23 !important;\n}\n.btn-travel {\n  border-radius: 50px;\n  background: #f08b23;\n  color: white;\n  text-transform: uppercase;\n  font-family: \"Open Sans\";\n  font-weight: 900;\n  font-size: 20px;\n  outline: none;\n}\n#promocode .btn-travel:hover {\n  background: #f08b23;\n  color: white;\n}\n.card .travel-card-features {\n  width: 50%;\n}\n@media screen and (max-width: 477px) {\n.tablet-footer-col {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n}\n.tablet-footer-col-12 {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n}\n#landing {\n    /*width:;*/\n    overflow-x: hidden;\n}\n  /*#travel {*/\n  /*    height: 85vh !important;*/\n  /*}*/\n#travel .card .card-body {\n    padding: 0 !important;\n}\n#travel .card .card-body .card-description {\n    padding: 0 30px !important;\n    text-align: center;\n}\n  /*#avia {*/\n  /*    height: 85vh!important;*/\n  /*}*/\n#avia .card .card-body {\n    padding: 0 !important;\n}\n#avia .card .card-body .card-description {\n    padding: 0 30px !important;\n    text-align: center;\n}\n  /*#hotel {*/\n  /*    height: 85vh!important;*/\n  /*}*/\n#hotel .card .card-body {\n    padding: 0 !important;\n}\n#hotel .card .card-body .card-description {\n    padding: 0 30px !important;\n    text-align: center;\n}\n}\n@media screen and (max-width: 768px) {\n.family-row {\n    margin: auto;\n}\n.family-title {\n    text-align: center;\n}\n.family-description {\n    width: 100% !important;\n}\n.tablet-travel-card-col {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n}\n}\n@media screen and (max-width: 992px) {\n.tablet-footer-col {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.tablet-footer-col-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.tablet-travel-card-col {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.travel-card {\n    margin: auto !important;\n    border-radius: 20px;\n}\n.travel-card-orange {\n    margin: auto !important;\n    border-radius: 20px;\n}\n}\n@media screen and (max-width: 576px) {\n#landing {\n    /*width:;*/\n    overflow-x: hidden;\n}\n#family {\n    height: 100% !important;\n}\n.tablet-footer-col {\n    flex: 0 0 55%;\n    max-width: 55%;\n}\n.tablet-footer-col-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.mobile .travel-card-title {\n    width: 100% !important;\n}\n.mobile .travel-card-title-row {\n    width: 280px !important;\n}\n.card .orange-brush {\n    left: 5px !important;\n}\n.card .title-1 {\n    left: 23px;\n}\n.card .title-2 {\n    left: 34px;\n}\n.card .travel-card-features {\n    width: 100%;\n}\n.modal .card-body {\n    flex: 1 1 auto;\n    min-height: 1px;\n    padding: 0.25rem;\n}\n}\n.card-title {\n  font-weight: 700 !important;\n  margin-top: 10px;\n  color: #3c4858;\n  font-family: Roboto Slab, Times New Roman, serif;\n}\n.card {\n  border: 0;\n  margin-bottom: 30px;\n  margin-top: 100px;\n  border-radius: 20px !important;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  max-height: 450px;\n}\n.card .card-body {\n  padding: 0.9375rem 1.875rem;\n}\n.card-description {\n  color: #062348;\n  font-size: 13px;\n  font-weight: 900;\n  font-family: \"Open Sans\";\n}\n.card.card-profile {\n  /*text-align: center;*/\n}\n.card .card-body + .card-footer {\n  padding-top: 0;\n  border: 0;\n  border-radius: 6px;\n}\n.card .card-footer {\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n}\n.card-profile .card-footer .btn.btn-just-icon {\n  font-size: 20px;\n  padding: 12px 13px;\n  line-height: 1em;\n}\n.card .card-footer {\n  padding: 0.9375rem 1.875rem;\n}\n.card-profile .card-body + .card-footer {\n  margin-top: -15px;\n}\n.card .text-info {\n  color: #00bcd4 !important;\n}\n.card-profile .card-avatar {\n  width: 130px;\n  height: 130px;\n  max-width: 130px;\n  max-height: 130px;\n  margin: -50px auto 0;\n  border-radius: 50%;\n  /*overflow: hidden;*/\n  padding: 0;\n  background: white;\n  /*box-shadow: 0 -1px 2px 0 rgba(0,0,0,.14), 0 -1px 1px -6px rgba(0,0,0,.2), 0 -1px 1px 0 rgba(0,0,0,.12);*/\n}\n.card-profile .card-avatar img {\n  width: 100%;\n}\n.card-profile .card-avatar + .card-body {\n  /* margin-top: 15px;*/\n}\n#avia .card .title-1 {\n  left: 89px;\n}\n#hotel .card .title-1 {\n  left: 89px;\n}\n.card .title-1 {\n  position: absolute;\n  z-index: 1;\n  left: 42px;\n  top: 5px;\n  color: #062348;\n  font-family: \"Bello Pro\" !important;\n  font-size: 36px;\n}\n.card .title-1 span {\n  font-size: 40px;\n}\n.card .title-2 {\n  position: absolute;\n  z-index: 1;\n  left: 40px;\n  top: 17px;\n  color: white;\n  font-family: \"Open Sans\" !important;\n  font-weight: 900;\n  font-size: 25px;\n}\n.card .title-2 span {\n  text-transform: uppercase;\n}\n.card .blue-brush {\n  top: 5px;\n  left: 10px;\n}\n.parallax {\n  /* The image used */\n  /*background-image: url('~/images/Home.png');*/\n  /* Set a specific height */\n  /*height: 500px;*/\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: initial;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media screen and (min-width: 992px) {\n.bg-panel {\n    cursor: pointer;\n    transition: transform 0.2s linear;\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4196078431);\n    -moz-box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4196078431);\n    -webkit-box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4196078431);\n}\n.bg-panel:hover {\n    transform: translateY(-10px);\n}\n}\n.hooper-indicator:hover, .hooper-indicator.is-active {\n  background-color: #062348 !important;\n}\n.hooper-next {\n  outline: 0 !important;\n  right: 5% !important;\n  top: 0 !important;\n  animation: bounce 0.6s;\n  animation-direction: alternate;\n  animation-iteration-count: infinite;\n}\n.hooper-prev {\n  outline: 0 !important;\n  left: 5% !important;\n  top: 0 !important;\n  animation: bounce 0.6s;\n  animation-direction: alternate;\n  animation-iteration-count: infinite;\n}\n.hooper-next svg {\n  fill: white;\n  height: 36px;\n  width: 36px;\n}\n.hooper-prev svg {\n  fill: white;\n  height: 36px;\n  width: 36px;\n}\n@keyframes bounce {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(10px, 0, 0);\n}\n}\n.bg-panel {\n  cursor: pointer;\n  transition: transform 0.2s linear;\n}\n.bg-panel h1 {\n  text-transform: uppercase;\n  text-align: center;\n  color: white;\n  position: absolute;\n  top: 60px;\n  font-weight: 200;\n  font-size: 2.3em;\n  margin: 0px;\n  left: 0;\n  right: 0;\n}\n.day-theme {\n  /*background:orange;*/\n  background: rgb(249, 231, 1);\n  background: linear-gradient(0deg, rgb(249, 231, 1) 0%, rgb(248, 146, 9) 50%, rgb(248, 117, 1) 100%);\n}\n.travel-card {\n  height: 330px;\n  /* width: 470px; */\n  position: relative;\n  border-radius: 20px;\n  margin-top: 21px;\n  /* border-top-right-radius: 20px; */\n  /* border-bottom-right-radius: 20px; */\n  background: white;\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4196078431);\n  -moz-box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4196078431);\n  -webkit-box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4196078431);\n}\n.travel-card svg {\n  position: absolute;\n}\n.travel-card .title-1 {\n  position: absolute;\n  z-index: 1;\n  left: 30px;\n  top: 10px;\n  color: #062348;\n  font-family: \"Bello Pro\" !important;\n  font-size: 36px;\n}\n.travel-card .title-1 span {\n  font-size: 40px;\n}\n.travel-card .title-2 {\n  position: absolute;\n  z-index: 1;\n  left: 40px;\n  top: 70px;\n  color: white;\n  font-family: \"Open Sans\" !important;\n  font-weight: 900;\n  font-size: 25px;\n}\n.travel-card .title-2 span {\n  text-transform: uppercase;\n}\n.orange-brush {\n  top: 5px;\n  left: 10px;\n}\n.orange-inc {\n  z-index: -1;\n  left: -90px;\n}\n.blue-inc {\n  z-index: -1;\n  top: -110px;\n  right: -90px;\n}\n.travel-card-illustration {\n  position: relative;\n}\n.travel-card-illustration img {\n  position: absolute;\n}\n.travel-illustration {\n  height: 500px;\n  top: -225px;\n  left: 34px;\n  z-index: -1;\n}\n.features {\n  /*font-size: 16px;*/\n  /*font-family: \"Open Sans\";*/\n  /*color: rgb(13, 39, 75);*/\n  /*text-transform: uppercase;*/\n  /*line-height: 2.25;*/\n  /*-moz-transform: matrix( 1.07369588784081,0,0,1.07369588784081,0,0);*/\n  /*-webkit-transform: matrix( 1.07369588784081,0,0,1.07369588784081,0,0);*/\n  /*-ms-transform: matrix( 1.07369588784081,0,0,1.07369588784081,0,0);*/\n  position: absolute;\n  left: 50px;\n  top: 120px;\n  /*z-index: 286;*/\n}\n.feature {\n  font-family: \"Open Sans\";\n  text-transform: uppercase;\n  line-height: 2.25;\n}\n.feature-1 {\n  font-size: 10px;\n  color: rgb(13, 39, 75);\n  letter-spacing: 2px;\n  font-weight: 900;\n}\n.feature-2 {\n  font-size: 18px;\n  color: #f08b23;\n  font-weight: 900;\n}\n.travel-card-description {\n  width: 80%;\n  color: #062348;\n  font-size: 17px;\n  font-weight: 700;\n  /*font-family: \"Open Sans\";*/\n  position: absolute;\n  left: 50px;\n  top: 150px;\n}\n#travel .travel-card-description {\n  width: 85%;\n  font-size: 14px;\n  top: 115px;\n}\n#hotel .travel-card-description {\n  top: 120px;\n}\n.travel-card-more {\n  position: absolute;\n  right: 30px;\n  top: 270px;\n}\n.more-text {\n  font-family: \"Open Sans\";\n  text-transform: uppercase;\n  color: #f08b23;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n}\n.more-button {\n  cursor: pointer;\n  margin: 0 10px;\n  right: 10px;\n}\n.more-button div {\n  width: 40px;\n  height: 40px;\n  display: block;\n  border-radius: 50px;\n  text-decoration: none;\n  font-size: 40px;\n  /*line-height: 50px;*/\n  color: white;\n  background: #f08b23;\n  padding: 0px !important;\n}\n.footer .more-button div {\n  width: 50px;\n  height: 50px;\n  font-size: 30px;\n  padding-top: 10px !important;\n}\n.footer .more-text {\n  color: white;\n  font-size: 20px;\n  font-weight: 900;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.travel-card-orange {\n  height: 330px;\n  /* width: 470px; */\n  position: relative;\n  border-radius: 20px;\n  /* border-top-left-radius: 20px; */\n  /* border-bottom-left-radius: 20px; */\n  /* background: #f08b23; */\n  background: white;\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4196078431);\n  -moz-box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4196078431);\n  -webkit-box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4196078431);\n}\n.travel-card-orange svg {\n  position: absolute;\n}\n.travel-card-orange .title-1 {\n  position: absolute;\n  z-index: 1;\n  right: 45px;\n  top: 10px;\n  color: #062348;\n  font-family: \"Bello Pro\" !important;\n  font-size: 36px;\n}\n.travel-card-orange .title-1 span {\n  font-size: 40px;\n}\n.travel-card-orange .title-2 {\n  position: absolute;\n  z-index: 1;\n  right: 30px;\n  top: 70px;\n  /*color: #f08b23;*/\n  color: white;\n  font-family: \"Open Sans\" !important;\n  font-weight: 900;\n  font-size: 25px;\n}\n.travel-card-orange .title-2 span {\n  text-transform: uppercase;\n}\n.travel-card-orange .blue-brush {\n  right: 0px;\n}\n.travel-card-orange .orange-brush {\n  top: 5px;\n  right: 0px;\n  left: auto;\n}\n.travel-card-orange .orange-inc {\n  z-index: -1;\n  left: -90px;\n}\n.travel-card-orange .blue-inc {\n  z-index: -1;\n  top: -110px;\n  right: -90px;\n}\n.travel-card-orange .travel-card-illustration {\n  position: relative;\n}\n.travel-card-orange .travel-card-illustration svg {\n  position: absolute;\n}\n.travel-card-orange .travel-illustration {\n  top: -200px;\n  left: 10px;\n  z-index: -1;\n}\n.travel-card-orange .features {\n  position: absolute;\n  left: 250px;\n  top: 120px;\n}\n.travel-card-orange .feature {\n  font-family: \"Open Sans\";\n  text-transform: uppercase;\n  line-height: 2.25;\n}\n.travel-card-orange .feature-1 {\n  font-size: 10px;\n  color: rgb(13, 39, 75);\n  letter-spacing: 2px;\n  font-weight: 900;\n}\n.travel-card-orange .feature-2 {\n  font-size: 18px;\n  color: white;\n  font-weight: 900;\n}\n.travel-card-orange .travel-card-description {\n  width: 80%;\n  /*color: white;*/\n  color: #062348;\n  /*font-size: 13px;*/\n  /*font-weight: 900;*/\n  /*font-family: \"Open Sans\";*/\n  /*position: absolute;*/\n  /*left: 50px;*/\n  /*top: 190px;*/\n  font-size: 17px;\n  font-weight: 700;\n  position: absolute;\n  left: 50px;\n  top: 130px;\n}\n.travel-card-orange .travel-card-more {\n  position: absolute;\n  right: 30px;\n  top: 270px;\n}\n.travel-card-orange .more-text {\n  font-family: \"Open Sans\";\n  text-transform: uppercase;\n  /*color: white;*/\n  font-weight: 600;\n  font-size: 16px;\n}\n.travel-card-orange .more-button {\n  margin: 0 10px;\n  right: 10px;\n}\n.travel-card-orange .more-button div {\n  width: 40px;\n  height: 40px;\n  display: block;\n  border-radius: 50px;\n  text-decoration: none;\n  font-size: 40px;\n  /*line-height: 50px;*/\n  color: white;\n  /*color: #062348;*/\n  background: #f08b23;\n  /*background: white;*/\n  padding: 0px !important;\n}\n.illustration {\n  position: absolute;\n}\n#hotel .illustration {\n  height: 580px;\n  top: -300px;\n  left: 0px;\n  z-index: -3;\n}\n#russia .illustration {\n  height: 580px;\n  top: -300px;\n  left: 0px;\n  z-index: -3;\n}\n#avia .illustration {\n  height: 530px;\n  width: 100%;\n  top: -266px;\n  left: -56px;\n  z-index: -2;\n}\n.travel-mark {\n  position: absolute;\n}\n.trip-mark {\n  right: -40px;\n  top: -83px;\n}\n.avia-mark {\n  left: -68px;\n  top: -79px;\n}\n.hotel-mark {\n  right: -40px;\n  top: -50px;\n}\n.travel-card-orange .orange-inc {\n  z-index: -1;\n  left: 119px;\n  top: -94px;\n}\n.travel-card-orange .blue-inc {\n  z-index: -1;\n  top: 73px;\n  right: 103px;\n}\n.footer {\n  position: relative;\n  text-align: center;\n  /*background: linear-gradient(60 deg, rgba(84, 58, 183, 1) 0 %, rgba(0, 172, 193, 1) 100 %);*/\n  color: white;\n  /*height: 65vh;*/\n}\n.inner-header {\n  height: 65vh;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.flex {\n  /*Flexbox for containers*/\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.waves {\n  position: relative;\n  width: 100%;\n  height: 15vh;\n  margin-bottom: -7px;\n  /*Fix for safari gap*/\n  min-height: 100px;\n  max-height: 150px;\n}\n.footer-content {\n  position: relative;\n  height: 35vh;\n  text-align: center;\n  background-color: #ff9900;\n}\n.footer-content h1 {\n  /*font-family: 'Bello Pro';*/\n}\n.inner-content {\n  position: relative;\n  text-align: center;\n  background-color: #062348;\n  width: 100%;\n  height: 50px;\n}\n.inner-content .waves {\n  position: absolute;\n  bottom: 50px;\n  height: 12vh;\n  /*Fix for safari gap*/\n  min-height: 70px;\n  max-height: 120px;\n}\n.inner-flex {\n  /*Flexbox for containers*/\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  text-align: center;\n}\n\n/* Animation */\n.parallax > use {\n  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;\n}\n.parallax > use:nth-child(1) {\n  animation-delay: -2s;\n  animation-duration: 7s;\n}\n.parallax > use:nth-child(2) {\n  animation-delay: -3s;\n  animation-duration: 10s;\n}\n.parallax > use:nth-child(3) {\n  animation-delay: -4s;\n  animation-duration: 13s;\n}\n.parallax > use:nth-child(4) {\n  animation-delay: -5s;\n  animation-duration: 20s;\n}\n@keyframes move-forever {\n0% {\n    transform: translate3d(-90px, 0, 0);\n}\n100% {\n    transform: translate3d(85px, 0, 0);\n}\n}\n/*Shrinking for mobile*/\n@media (max-width: 768px) {\n.waves {\n    height: 50px;\n    min-height: 50px;\n    margin-bottom: 0px;\n}\n.footer-content {\n    height: 30vh;\n}\n.inner-content .waves {\n    top: -45px;\n    height: 50px;\n    min-height: 50px;\n}\n.footer-content h1 {\n    font-size: 27px;\n}\n}\n.footer-btn {\n  background-color: #062348;\n  border: none;\n  color: white;\n  font-family: \"Open Sans\";\n  font-weight: 900;\n  font-size: 20px;\n  border-radius: 50px;\n  text-transform: uppercase;\n  padding: 10px 32px;\n  text-decoration: none;\n  outline: none !important;\n}\n.footer-illustration {\n  /*position:absolute;*/\n  /*bottom:0px;*/\n  /*left: 0px;*/\n  width: 100%;\n  /*height: 100%;*/\n  display: block;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n#family div .row {\n  position: relative;\n}\n#family svg {\n  position: absolute;\n}\n#family .title-1 {\n  position: absolute;\n  z-index: 1;\n  left: 30px;\n  top: 10px;\n  color: #062348;\n  font-family: \"Bello Pro\" !important;\n  font-size: 36px;\n}\n#family .title-1 span {\n  font-size: 40px;\n}\n#family .title-2 {\n  position: absolute;\n  z-index: 1;\n  left: 52px;\n  top: 18px;\n  color: white;\n  font-family: \"Open Sans\" !important;\n  font-weight: 900;\n  font-size: 25px;\n}\n#family .title-2 span {\n  text-transform: uppercase;\n}\n#family .orange-brush {\n  top: 5px;\n  left: 10px;\n}\n#family .blue-brush {\n  top: 5px;\n  left: 10px;\n}\n#welcome div .row, #why div .row {\n  position: relative;\n}\n#welcome svg, #why svg {\n  position: absolute;\n}\n#welcome .title-1, #why .title-1 {\n  position: absolute;\n  z-index: 1;\n  left: 60px;\n  top: 5px;\n  color: #062348;\n  font-family: \"Bello Pro\" !important;\n  font-size: 36px;\n}\n#welcome .title-1 span, #why .title-1 span {\n  font-size: 40px;\n}\n#welcome .title-2, #why .title-2 {\n  position: absolute;\n  z-index: 1;\n  left: 52px;\n  top: 18px;\n  color: white;\n  font-family: \"Open Sans\" !important;\n  font-weight: 900;\n  font-size: 25px;\n}\n#welcome .title-2 span, #why .title-2 span {\n  text-transform: uppercase;\n}\n#welcome .orange-brush, #why .orange-brush {\n  top: 5px;\n  left: 10px;\n}\n#welcome .blue-brush, #why .blue-brush {\n  top: 5px;\n  left: 10px;\n}\n#promocode .title-1 {\n  position: absolute;\n  z-index: 1;\n  left: 50px;\n  top: 0px;\n  color: #062348;\n  font-family: \"Bello Pro\" !important;\n  font-size: 36px;\n}\n#promocode .title-1 span {\n  font-size: 40px;\n}\n#promocode .title-2 {\n  position: absolute;\n  z-index: 1;\n  left: 40px;\n  top: 18px;\n  color: white;\n  font-family: \"Open Sans\" !important;\n  font-weight: 900;\n  font-size: 25px;\n}\n#promocode .title-2 span {\n  text-transform: uppercase;\n}\n#promocode .orange-brush {\n  top: 5px;\n  left: 10px;\n}\n#promocode blue-brush {\n  top: 5px;\n  left: 10px;\n}\n.contact-icon {\n  width: 22px;\n  height: 22px;\n  font-size: 14px;\n  padding-top: 4px !important;\n  background: #f08b23;\n  color: white;\n  border-radius: 50%;\n}\n.flip-card__top, .flip-card__bottom,\n.flip-card__back-bottom, .flip-card__back::before,\n.flip-card__back::after {\n  color: #062348 !important;\n  background: #f7f7f7 !important;\n}\n.flip-card__bottom {\n  color: #062348 !important;\n  background: #fff !important;\n}\n.flip-card {\n  border-radius: 20px !important;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2), inset 2px 4px 0 0 rgba(255, 255, 255, 0.08) !important;\n}\n.flip-clock__slot {\n  font-family: \"Open Sans\" !important;\n  font-weight: 900 !important;\n  color: #062348 !important;\n  text-transform: uppercase !important;\n}\n\n/*.flip-card__top {\ncolor: #062348 !important;\nbackground: #f9f9f9 !important;\n}\n.flip-card__bottom {\ncolor: #062348 !important;\nbackground: #fff !important;\n}\n.flip-card__back {\ncolor: #062348 !important;\nbackground: #f9f9f9 !important;\n    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2), inset 2px 4px 0 0 rgba(255, 255, 255, 0.08) !important;\n}\n.flip-card__back-bottom {\ncolor: #062348 !important;\nbackground: #f9f9f9 !important;\n}\n.flip-card__back::before, .flip-card__back::after {\ncolor: #062348 !important;\nbackground: #f9f9f9 !important;\n}*/\n.russion-tours-btn {\n  overflow: hidden;\n}\n.russion-tours-btn:after {\n  content: \"Новинка\";\n  width: 278px;\n  height: 40px;\n  background: linear-gradient(#1d8cf8, #5eacff);\n  position: absolute;\n  transform: rotate(45deg);\n  right: -97px;\n  text-align: center;\n  color: white;\n  display: flex;\n  top: 17px;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 1px 1px 3px 0px #777777;\n}\n.soon-banner {\n  overflow: hidden;\n}\n.soon-banner:after {\n  content: \"Скоро\";\n  width: 278px;\n  height: 40px;\n  background: linear-gradient(#c30000, #ff0b2f);\n  position: absolute;\n  transform: rotate(45deg);\n  right: -97px;\n  text-align: center;\n  color: white;\n  display: flex;\n  top: 17px;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 1px 1px 3px 0px #777777;\n  font-weight: 700;\n}\n.hero {\n  padding: 50px 0;\n}\n.hero .container {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.hero .textContent {\n  width: calc(100% - 500px);\n  position: relative;\n  margin-top: 20px;\n}\n.hero .phoneContent {\n  width: 500px;\n  display: flex;\n  justify-content: flex-end;\n}\n.previewArrow {\n  width: 304px;\n  position: absolute;\n  right: -60px;\n  top: 50%;\n  transform: translate(0% -50%);\n  text-align: center;\n  font-size: 10px;\n  color: rgba(130, 146, 166, 0.5);\n  font-weight: 500;\n}\n.previewArrow img {\n  width: 304px;\n  height: 59px;\n  margin-bottom: -20px;\n}\n.qr-button {\n  display: block;\n  text-align: center;\n  z-index: 100;\n  border: 0;\n  position: fixed;\n  right: 20px;\n  bottom: 10px;\n  background: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.26);\n  padding: 12px;\n  border-radius: 10px;\n}\n.qr-button .close-button {\n  position: absolute;\n  right: -6px;\n  top: -6px;\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  border-radius: 100px;\n  color: #8292a6;\n}\n.qr-button .qr {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 8px;\n}\n.qr-button .qr-text {\n  width: 100px;\n  font-size: 12px;\n  line-height: 1.1em;\n  color: #161e29;\n  font-weight: 500;\n}\n.logoDropdown {\n  display: flex;\n}\n.logoDropdown .button {\n  font-size: 16px;\n  display: inline-flex;\n  align-items: center;\n  color: #161e29;\n  border: 1px solid #d9dfe4;\n  padding: 10px 10px;\n  border-radius: 10px;\n  text-decoration: none;\n  background: #fff;\n  transition: 0.2s all;\n}\n.logoDropdown .button .logo {\n  height: 72px;\n  width: auto;\n  margin-right: 16px;\n  border-radius: 10px;\n}\n.logoDropdown .button .item-title {\n  max-width: 300px;\n  font-weight: 500;\n  font-size: 16px;\n  color: #161e29;\n}\n.logoDropdown .button ion-icon {\n  width: 24px;\n  height: 24px;\n  margin-left: 20px;\n  margin-right: 10px;\n  font-size: 24px;\n  color: #bbc6cf;\n}\n.logoDropdown .button:hover {\n  background: rgba(217, 223, 228, 0.25);\n}\n.heroTitle {\n  font-size: 52px;\n  font-weight: 700;\n  color: #161e29;\n  max-width: 560px;\n  line-height: 1.2em;\n  letter-spacing: -0.03em;\n  margin: 60px 0 40px 0;\n}\n.heroList {\n  padding: 0;\n  margin: 0 0 60px 0;\n}\n.heroList li {\n  font-size: 24px;\n  color: #161e29;\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.heroList li ion-icon {\n  font-size: 28px;\n  margin-right: 10px;\n}\n.btn {\n  font-size: 16px;\n  letter-spacing: -0.01em;\n  font-weight: 500;\n  line-height: 1.2em;\n  border-radius: 10px;\n  box-shadow: none !important;\n  transition: 0.3s all;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  padding: 0 32px 0 32px;\n}\n.btn ion-icon {\n  font-size: 32px;\n  margin-right: 10px;\n}\n.btn-success {\n  background: #1dcc70;\n  border: 0;\n}\n.btn-success:hover {\n  background: rgba(29, 204, 112, 0.9) !important;\n}\n.btn-success:active {\n  background: #19b161 !important;\n}\n.btn-secondary {\n  background: #3b4859;\n  border: 0;\n}\n.btn-secondary:hover {\n  background: rgba(59, 72, 89, 0.9) !important;\n}\n.btn-secondary:active {\n  background: #2f3947 !important;\n}\n.buttonWrapper {\n  display: flex;\n  align-items: center;\n}\n.section-heading {\n  margin-bottom: 70px;\n}\n.section-heading .title {\n  font-size: 48px;\n  font-weight: 700;\n  color: #161e29;\n  line-height: 1.15em;\n  letter-spacing: -0.03em;\n  margin: 0;\n}\n.section-heading .text {\n  font-size: 20px;\n  line-height: 34px;\n  margin-top: 20px;\n}\n.gridBox {\n  margin: 90px 0 50px 0;\n}\n.gridBox .image {\n  width: 100%;\n  height: auto;\n  border-radius: 10px;\n}\n.gridBox .row {\n  margin: 0 -30px;\n}\n.gridBox .col-4 {\n  padding-left: 40px;\n  padding-right: 40px;\n  margin-bottom: 60px;\n}\n.gridBox .item-title {\n  font-size: 20px;\n  font-weight: 500;\n  color: #161e29;\n  margin: 30px 0 16px 0;\n}\n.features {\n  margin: 90px 0;\n}\n.feature-list .row {\n  margin: 0 -40px;\n}\n.feature-list .col-4 {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.feature-list .iconWrapper {\n  width: 40px;\n  height: 40px;\n  min-width: 56px;\n  min-height: 56px;\n  background: #ff9d00 !important;\n  border-radius: 400px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.feature-list .iconWrapper ion-icon {\n  font-size: 28px;\n}\n.feature-list .iconWrapper img {\n  height: 26px;\n}\n.feature-list .item {\n  margin-bottom: 70px;\n  max-width: 280px;\n}\n.feature-list .text {\n  padding-left: 0;\n}\n.feature-list .text strong {\n  display: block;\n  font-size: 20px;\n  font-weight: 500;\n  color: #161e29;\n  margin: 24px 0 10px 0;\n}\n.footer {\n  padding: 0;\n  background: rgb(255, 255, 255);\n  font-size: 11px;\n  margin-top: 0;\n  /* border-top: 1px solid #d9dfe4; */\n  text-align: center;\n  position: relative;\n}\n.footer .gotopButton {\n  width: 36px;\n  height: 36px;\n  background: #fff;\n  border: 1px solid #d9dfe4;\n  color: #161e29;\n  font-size: 20px;\n  display: flex;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  top: -21px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n}\n.footer a {\n  text-decoration: none !important;\n  color: #161e29;\n  font-weight: 500;\n}\n.qrWidget {\n  margin: 0 0 130px 0;\n  padding: 80px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: url(\"/img/item/arrow.png\") no-repeat center right 250px;\n  background-size: 507px 56px;\n}\n.qrWidget .section-heading {\n  margin: 0;\n}\n.qrWidget .qrCodeImg {\n  background: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.26);\n  border-radius: 10px;\n  padding: 10px;\n  margin-right: 20px;\n}\n.qrWidget .qrCodeImg .img {\n  width: 180px;\n  height: 180px;\n}\n.qrWidget .arrow {\n  width: 100%;\n  height: auto;\n}\n.itemLogo .image {\n  width: 86px;\n  border-radius: 10px;\n}\n.sidebar {\n  background: #ffffff;\n  width: 360px;\n  position: fixed;\n  z-index: 500;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  transform: translate(-360px, 0);\n  transition: 0.3s ease-in-out;\n}\n.sidebar .toggleButton {\n  width: 36px;\n  height: 36px;\n  background: #d9dfe4;\n  border-radius: 0 10px 10px 0;\n  position: absolute;\n  right: -36px;\n  top: 50%;\n  transform: translate(0, -50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 26px;\n  transition: 0.3s all;\n}\n.sidebar .toggleButton:hover {\n  background: #cad2d9;\n}\n.sidebar-open .sidebar {\n  transform: translate(0, 0);\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.sidebar-open .sidebar .toggleButton {\n  background: #161e29;\n}\n.sidebar-open .sidebar .toggleButton ion-icon {\n  transform: rotate(180deg);\n}\n.mobileDetected {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n  z-index: 8000;\n  align-items: center;\n  justify-content: center;\n}\n.mobileDetected .in {\n  text-align: center;\n}\n.mobileDetected .in img {\n  width: 90px;\n  height: 90px;\n  border-radius: 10px;\n  margin-bottom: 30px;\n}\n.mobileDetected .in .btn {\n  height: 50px;\n}\n.phoneWrapper {\n  width: 400px;\n  height: 740px;\n  border-radius: 20px;\n  background: #000000;\n  border: 3px solid #999;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n}\n.phoneWrapper .in {\n  width: 370px;\n  height: 710px;\n  background: #000000;\n  border-radius: 15px;\n  overflow: hidden;\n}\n.phoneWrapper .in .getFrame {\n  width: 370px;\n  height: 710px;\n  border: 0 !important;\n  padding: 0;\n  margin: 0;\n}\n@media only screen and (max-height: 800px) {\n.phoneWrapper {\n    width: 400px;\n    height: 670px;\n}\n.phoneWrapper .in {\n    width: 370px;\n    height: 640px;\n}\n.phoneWrapper .in .getFrame {\n    width: 370px;\n    height: 640px;\n}\n}\n@media only screen and (max-height: 730px) {\n.hero {\n    padding: 0;\n}\n.heroTitle {\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n.phoneWrapper {\n    width: 400px;\n    height: 670px;\n}\n.phoneWrapper .in {\n    width: 370px;\n    height: 640px;\n}\n.phoneWrapper .in .getFrame {\n    width: 370px;\n    height: 640px;\n}\n}\n@media only screen and (max-height: 630px) {\n.phoneWrapper {\n    width: 380px;\n    height: 630px;\n}\n.phoneWrapper .in {\n    width: 350px;\n    height: 600px;\n}\n.phoneWrapper .in .getFrame {\n    width: 350px;\n    height: 600px;\n}\n}\n@media only screen and (max-width: 1199px) {\n.container {\n    max-width: 100%;\n    padding-left: 60px;\n    padding-right: 60px;\n}\n.previewArrow {\n    display: none;\n}\n}\n@media only screen and (max-width: 991px) {\n.mobileDetected {\n    display: flex;\n}\n}\n@media only screen and (max-width: 1400px) {\n.qr-button {\n    right: auto;\n    left: 20px;\n}\n}\n.sidebarTitle {\n  height: 56px;\n  border-bottom: 1px solid #d9dfe4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 500;\n  color: #161e29;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.04), 0 2px 1px -1px rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.sidebarFooter {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 16px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sidebarFooter .btn {\n  width: 100%;\n  height: 48px;\n}\n.sidebarProducts {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 56px;\n  bottom: 80px;\n  overflow: auto;\n  padding: 20px;\n}\n.sidebarProducts::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 100px;\n}\n.sidebarProducts::-webkit-scrollbar-track {\n  background: rgba(130, 146, 166, 0.1);\n}\n.sidebarProducts::-webkit-scrollbar-thumb {\n  background: rgba(130, 146, 166, 0.4);\n}\n.sidebarProducts::-webkit-scrollbar-thumb:hover {\n  background: rgba(130, 146, 166, 0.5);\n}\n.sidebarProducts .row {\n  margin: 0;\n}\n.sidebarProducts .row .col-6 {\n  padding: 20px;\n}\n.sidebarProducts .item {\n  transition: 0.1s all;\n  text-align: center;\n  border-radius: 10px;\n  text-decoration: none !important;\n}\n.sidebarProducts .item:hover {\n  background: rgba(217, 223, 228, 0.4);\n}\n.sidebarProducts .item .productlogo {\n  width: 80px;\n  height: 80px;\n  border-radius: 10px;\n}\n.sidebarProducts .item strong {\n  display: block;\n  color: #161e29;\n  font-size: 16px;\n  line-height: 1.2em;\n  margin: 12px 0 6px 0;\n}\n.sidebarProducts .item .text {\n  color: #8292a6;\n  font-size: 12px;\n  line-height: 1.3em;\n  max-width: 120px;\n  margin: auto;\n}\n.is-hidden {\n  display: none !important;\n}\n.cacheWarning {\n  display: none;\n}\n@media only screen and (max-height: 760px) {\n.phoneWrapper {\n    margin-top: 10px;\n}\n}\n@media only screen and (max-height: 675px) {\n.phoneWrapper {\n    margin-top: 0;\n}\n}\n.btn-orange {\n  background-color: orange;\n  border: 1px orange solid;\n  color: white;\n}\n.btn-orange:hover {\n  background-color: darkorange;\n}\n.bg-orange {\n  background-color: orange;\n}\n.ya-map {\n  position: relative;\n  height: 500px;\n  width: 100%;\n  border: none;\n}\n.ya-map iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.sidebarFooter {\n  display: flex;\n  justify-content: space-around;\n}\n.sidebarFooter a {\n  font-size: 32px;\n  color: #062348;\n}\n.btn-footer-contact {\n  font-size: 20px;\n  border-radius: 50px !important;\n  margin-top: 50px;\n}\n.footer-last {\n  height: 100%;\n  min-height: 300px;\n  border-bottom: 2px white solid;\n  background: url(/images/footer.png);\n  background-position: bottom;\n  background-repeat-y: no-repeat;\n}\n.city-list {\n  position: absolute;\n  background: white;\n  /* border-bottom: 2px orange solid; */\n  box-shadow: 1px 1px 2px 0px #858585;\n  padding: 21px;\n}\n.city-list li {\n  list-style: none;\n  cursor: pointer;\n  padding: 0;\n  width: 100%;\n  text-align: left;\n}\n.phone-by-city {\n  padding: 10px;\n  border-radius: 5px;\n  border: 2px white solid;\n  margin-bottom: 10px;\n}\n.phone-by-city p {\n  color: white;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_3ba08c2a_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_3ba08c2a_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_3ba08c2a_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/pages/Landing.vue":
/*!************************************************!*\
  !*** ./resources/js/desktop/pages/Landing.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Landing_vue_vue_type_template_id_3ba08c2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing.vue?vue&type=template&id=3ba08c2a& */ "./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a&");
/* harmony import */ var _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js&");
/* harmony import */ var _Landing_vue_vue_type_style_index_0_id_3ba08c2a_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss& */ "./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Landing_vue_vue_type_template_id_3ba08c2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Landing_vue_vue_type_template_id_3ba08c2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/Landing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_3ba08c2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_3ba08c2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_3ba08c2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=template&id=3ba08c2a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a&");


/***/ }),

/***/ "./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_3ba08c2a_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss&");


/***/ })

}]);