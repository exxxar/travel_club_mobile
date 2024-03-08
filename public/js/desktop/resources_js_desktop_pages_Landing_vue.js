"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_pages_Landing_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Landing",
  data: function data() {
    return {};
  },
  computed: {},
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("LandingLayout", [_c("section", {
    staticClass: "ms-auto me-auto parallax",
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
    staticClass: "tc-row m-auto desktop",
    staticStyle: {
      height: "100%",
      width: "90%"
    }
  }, [_c("div", {
    staticClass: "col-md-6 col-lg-4 col-sm-10 m-auto"
  }, [_c("a", {
    attrs: {
      href: "/tours"
    }
  }, [_c("div", {
    staticClass: "bg-panel ms-auto me-auto pulse day-theme",
    staticStyle: {
      height: "520px",
      "max-width": "300px",
      position: "relative"
    }
  }, [_c("h1", [_vm._v("Подобрать"), _c("br"), _vm._v("путешествие")]), _vm._v(" "), _c("img", {
    staticStyle: {
      position: "absolute",
      bottom: "0",
      width: "100%"
    },
    attrs: {
      src: "images/1.png"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-lg-4 col-sm-10 m-auto"
  }, [_c("a", {
    attrs: {
      href: "/hot-tours"
    }
  }, [_c("div", {
    staticClass: "bg-panel ms-auto me-auto pulse day-theme",
    staticStyle: {
      height: "520px",
      "max-width": "300px",
      position: "relative"
    }
  }, [_c("h1", [_vm._v("Горячие"), _c("br"), _vm._v("туры")]), _vm._v(" "), _c("img", {
    staticStyle: {
      position: "absolute",
      bottom: "0",
      width: "100%"
    },
    attrs: {
      src: "images/2.png"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-lg-4 col-sm-10 m-auto"
  }, [_c("a", {
    attrs: {
      href: "/russia-tours"
    }
  }, [_c("div", {
    staticClass: "bg-panel pulse ms-auto me-auto day-theme",
    staticStyle: {
      height: "520px",
      "max-width": "300px",
      position: "relative"
    }
  }, [_c("h1", [_vm._v("Туры"), _c("br"), _vm._v("по России")]), _vm._v(" "), _c("img", {
    staticStyle: {
      position: "absolute",
      bottom: "0",
      width: "100%"
    },
    attrs: {
      src: "images/4.png"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "tc-row m-auto mobile tablet d-lg-none",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-6 col-lg-4 col-sm-10 mt-3 m-auto"
  }, [_c("hooper", {
    staticClass: "me-auto ms-auto",
    staticStyle: {
      height: "100%",
      "max-width": "300px",
      width: "100%",
      "box-shadow": "0px 3px 15px #0000006b",
      "-moz-box-shadow": "0px 3px 15px #0000006b",
      "-webkit-box-shadow": "0px 3px 15px #0000006b"
    }
  }, [_c("slide", [_c("a", {
    attrs: {
      href: "/tours"
    }
  }, [_c("div", {
    staticClass: "bg-panel ms-auto me-auto day-theme",
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
  })])])]), _vm._v(" "), _c("slide", [_c("a", {
    attrs: {
      href: "/hot-tours"
    }
  }, [_c("div", {
    staticClass: "bg-panel ms-auto me-auto day-theme",
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
  })])])]), _vm._v(" "), _c("slide", [_c("a", {
    attrs: {
      href: "/russia-tours"
    }
  }, [_c("div", {
    staticClass: "bg-panel ms-auto me-auto day-theme",
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
  })])])]), _vm._v(" "), _c("hooper-navigation", {
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
    staticClass: "mb-5",
    attrs: {
      id: "welcome"
    }
  }, [_c("div", {
    staticClass: "container m-auto",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "tc-row m-auto",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-6 m-auto d-none d-md-none d-lg-block position-relative"
  }, [_c("div", {
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
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-sm-12 m-auto"
  }, [_c("div", {
    staticClass: "two",
    staticStyle: {
      position: "relative",
      width: "80%",
      margin: "auto"
    }
  }, [_c("h1", {}, [_vm._v("О нас\n                                "), _c("span", [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "rgb(240, 139, 35)",
      display: "inline",
      padding: "0"
    }
  }, [_vm._v("Club")])])])]), _vm._v(" "), _c("div", {
    staticClass: "mx-auto mt-4 mb-3 justify-content-center flex-wrap",
    staticStyle: {
      color: "#062348",
      "font-size": "14px",
      "font-weight": "700",
      width: "80%",
      "text-align": "justify"
    }
  }, [_c("p", [_vm._v("\n                                Сеть туристических агентств\n                                "), _c("span", {
    staticStyle: {
      "font-weight": "900"
    }
  }, [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "#f08b23",
      "font-weight": "900"
    }
  }, [_vm._v("Club")])]), _vm._v("\n\n                                – это в первую очередь команда людей, которые не представляют свою жизнь без\n                                путешествий и готовы делится своим опытом.\n                                Настоящие профессионалы, обожающие свою работу!\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                В основе\n                                "), _c("span", {
    staticStyle: {
      "font-weight": "900"
    }
  }, [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "#f08b23",
      "font-weight": "900"
    }
  }, [_vm._v("Club")])]), _vm._v("\n\n                                лежит многолетний опыт работы. Все наши специалисты регулярную проходят\n                                обязательную квалификацию, тем самым подтверждая свое право быть в команде\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center landing-employees"
  }, [_c("employee-list", {
    staticClass: "w-100",
    attrs: {
      visible_title: false
    }
  })], 1)])])])])]), _vm._v(" "), _c("section", {
    staticClass: "my-5",
    attrs: {
      id: "why"
    }
  }, [_c("div", {
    staticClass: "container m-auto",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "tc-row m-auto",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 col-md-6 col-sm-12"
  }, [_c("div", {
    staticClass: "mx-auto mt-4 mb-3",
    staticStyle: {
      color: "#062348",
      "font-size": "14px",
      "font-weight": "700",
      width: "80%",
      "text-align": "justify"
    }
  }, [_c("div", {
    staticClass: "two"
  }, [_c("h1", [_vm._v("Почему\n                                    "), _c("span", [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "rgb(240, 139, 35)",
      display: "inline",
      padding: "0"
    }
  }, [_vm._v("Club")])])])]), _vm._v(" "), _c("p", [_vm._v("\n                                Современный туризм давно вышел за рамки пакетных туров, наши клиенты в\n                                большинстве предпочитают яркий и динамичный отдых, путем создания\n                                индивидульных и групповых туров.\n                                ")]), _vm._v(" "), _c("p", [_vm._v("\n                                Организовать свадебное торжество на Мальдивах или мальчишник в Вегасе,\n                                Welcome!\n                                Любая, даже самая крейзи идея имеет право на существование, все возможно,\n                                вместе с\n                                "), _c("span", {
    staticStyle: {
      "font-weight": "900"
    }
  }, [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "#f08b23",
      "font-weight": "900"
    }
  }, [_vm._v("Club")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 d-none d-md-none d-lg-block position-relative"
  }, [_c("div", {
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
  })])])])])]), _vm._v(" "), _c("section", {
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
    staticClass: "tc-row m-auto tablet desktop",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-6 desktop"
  }, [_c("div", {
    staticClass: "travel-card-illustration"
  }, [_c("base-icon", {
    attrs: {
      name: "TravelImage",
      height: "100%",
      width: "100%"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-sm-12 tablet-travel-card-col m-auto"
  }, [_c("div", {
    staticClass: "ms-0 me-auto travel-card"
  }, [_c("div", {
    staticClass: "travel-mark trip-mark"
  }, [_c("img", {
    attrs: {
      src: "/images/trip-mark.svg"
    }
  })]), _vm._v(" "), _c("div", {
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
  })]), _vm._v(" "), _c("div", {
    staticClass: "travel-card-description"
  }, [_c("p", [_vm._v("Данный раздел позволяет сделать подбор пакетного тура по всему миру от ведущих\n                                    туристических оператов.")]), _vm._v(" "), _c("p", [_vm._v("Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.")]), _vm._v(" "), _c("p", [_vm._v("Вам также будут доступны реальные отзывы на каждый объект размещения.")])]), _vm._v(" "), _c("a", {
    staticClass: "travel-card-more tc-row align-items-center justify-content-end",
    attrs: {
      href: "/tours"
    }
  }, [_c("h5", {
    staticClass: "more-text my-auto ms-auto me-0",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_vm._v("\n                                    начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_c("div", [_c("base-icon", {
    attrs: {
      name: "ChevronRight",
      width: "25",
      height: "25"
    }
  })], 1)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "tc-row m-auto mobile d-sm-none",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "card card-profile"
  }, [_c("div", {
    staticClass: "card-avatar"
  }, [_c("img", {
    staticClass: "img",
    attrs: {
      src: "/images/travel-mark.svg"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "card-body tc-row m-auto",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "tc-row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-8 p-0"
  }, [_c("div", {
    staticClass: "tc-row me-auto ms-0 my-auto travel-card-title",
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
    staticClass: "tc-row ms-auto me-0 my-auto travel-card-title",
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
  })])])]), _vm._v(" "), _c("p", {
    staticClass: "card-description my-3 mx-auto"
  }, [_vm._v("\n                                Данный раздел позволяет сделать подбор пакетного тура по всему миру от ведущих\n                                туристических оператов.\n                                Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.\n                                Вам также будут доступны реальные отзывы на каждый объект размещения.\n                            ")]), _vm._v(" "), _c("a", {
    staticClass: "tc-row align-items-center justify-content-end m-auto",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      href: "/tours"
    }
  }, [_c("h5", {
    staticClass: "more-text my-auto ms-auto me-0",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_vm._v("\n                                    начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_c("div", [_c("base-icon", {
    attrs: {
      name: "ChevronRight",
      width: "25",
      height: "25"
    }
  })], 1)])])])])])])]), _vm._v(" "), _c("section", {
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
    staticClass: "tc-row m-auto desktop tablet",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-12 col-md-6 col-sm-12 tablet-travel-card-col m-auto"
  }, [_c("div", {
    staticClass: "me-0 ms-auto travel-card-orange"
  }, [_c("div", {
    staticClass: "travel-mark avia-mark"
  }, [_c("img", {
    attrs: {
      src: "/images/avia-mark-d.svg"
    }
  })]), _vm._v(" "), _c("div", {
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
  })]), _vm._v(" "), _c("div", {
    staticClass: "travel-card-description"
  }, [_c("p", [_vm._v("В данном разделе Вы сможете приобрести авиабилет в любую точку.")]), _vm._v(" "), _c("p", [_vm._v("Возможна оплата онлайн или сделать заказ с сайта.")])]), _vm._v(" "), _c("a", {
    staticClass: "travel-card-more tc-row align-items-center justify-content-end",
    attrs: {
      href: "/hot-tours"
    }
  }, [_c("h5", {
    staticClass: "more-text mt-auto mb-auto",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_vm._v("\n                                    начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_c("div", [_c("base-icon", {
    attrs: {
      name: "ChevronRight",
      width: "25",
      height: "25"
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 d-none d-md-none d-lg-block"
  }, [_c("div", {
    staticClass: "travel-card-illustration"
  }, [_c("base-icon", {
    attrs: {
      name: "AviaImage",
      height: "100%",
      width: "100%"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "tc-row m-auto mobile d-sm-none",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "card card-profile"
  }, [_c("div", {
    staticClass: "card-avatar"
  }, [_c("img", {
    staticClass: "img",
    attrs: {
      src: "/images/avia-mark.svg"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "card-body row m-auto",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-8 p-0"
  }, [_c("div", {
    staticClass: "row me-auto ms-0 my-auto travel-card-title",
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
    staticClass: "row ms-auto me-0 my-auto travel-card-title",
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
  })])])]), _vm._v(" "), _c("p", {
    staticClass: "card-description my-3 mx-auto"
  }, [_vm._v("\n                                В данном разделе Вы сможете приобрести авиабилет в любую точку.\n                                Возможна оплата онлайн или сделать заказ с сайта.\n                            ")]), _vm._v(" "), _c("a", {
    staticClass: "tc-row align-items-center justify-content-end m-auto",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      href: "/hot-tours"
    }
  }, [_c("h5", {
    staticClass: "more-text my-auto ms-auto me-0",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_vm._v("\n                                    начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_c("div", [_c("base-icon", {
    attrs: {
      name: "ChevronRight",
      width: "25",
      height: "25"
    }
  })], 1)])])])])])])]), _vm._v(" "), _c("section", {
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
    staticClass: "tc-row m-auto desktop tablet",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-6 desktop"
  }, [_c("div", {
    staticClass: "travel-card-illustration"
  }, [_c("base-icon", {
    attrs: {
      name: "RussiaImage",
      width: "100%",
      height: "100%"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-sm-12 tablet-travel-card-col m-auto"
  }, [_c("div", {
    staticClass: "ms-0 me-auto travel-card"
  }, [_c("div", {
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
  })]), _vm._v(" "), _c("div", {
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
  })]), _vm._v(" "), _c("div", {
    staticClass: "travel-card-description"
  }, [_c("p", [_vm._v("Путешествуй с "), _c("span", {
    staticStyle: {
      "font-weight": "900"
    }
  }, [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "#f08b23",
      "font-weight": "900"
    }
  }, [_vm._v("Club")])]), _vm._v("\n\n                                    по всей России.")]), _vm._v(" "), _c("p", [_vm._v("Возможна оплата онлайн или сделать заказ с сайта.")])]), _vm._v(" "), _c("a", {
    staticClass: "travel-card-more tc-row align-items-center justify-content-end",
    attrs: {
      href: "/russia-tours"
    }
  }, [_c("h5", {
    staticClass: "more-text mt-auto mb-auto",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_vm._v("\n                                    начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_c("div", [_c("base-icon", {
    attrs: {
      name: "ChevronRight",
      width: "25",
      height: "25"
    }
  })], 1)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "tc-row m-auto mobile d-sm-none",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "card card-profile"
  }, [_c("div", {
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
  })]), _vm._v(" "), _c("div", {
    staticClass: "card-body tc-row m-auto",
    staticStyle: {
      height: "100%",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "tc-row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
    staticStyle: {
      height: "100px",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "col-md-8 p-0"
  }, [_c("div", {
    staticClass: "tc-row me-auto ms-0 my-auto travel-card-title",
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
    staticClass: "tc-row ms-auto me-0 my-auto travel-card-title",
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
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "card-description my-3 mx-auto"
  }, [_c("p", [_vm._v("Путешествуй с\n                                    "), _c("span", {
    staticStyle: {
      "font-weight": "900"
    }
  }, [_vm._v("Travel\n                                            "), _c("span", {
    staticStyle: {
      color: "#f08b23",
      "font-weight": "900"
    }
  }, [_vm._v("Club")])]), _vm._v(" по всей России.\n                                ")]), _vm._v(" "), _c("p", [_vm._v("Возможна оплата онлайн или сделать заказ с сайта.")])]), _vm._v(" "), _c("a", {
    staticClass: "tc-row align-items-center justify-content-end m-auto",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      href: "/russia-tours"
    }
  }, [_c("h5", {
    staticClass: "more-text my-auto ms-auto me-0",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_vm._v("начать прямо сейчас")]), _vm._v(" "), _c("div", {
    staticClass: "more-button",
    staticStyle: {
      cursor: "pointer"
    }
  }, [_c("div", [_c("base-icon", {
    attrs: {
      name: "ChevronRight",
      width: "25",
      height: "25"
    }
  })], 1)])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "hero"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "tc-row w-100"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "hero-header"
  }, [_c("div", {
    staticClass: "itemLogo"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/logo.png",
      alt: "logo"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "two"
  }, [_c("h1", [_vm._v("Сеть туристических агентств\n                                "), _c("span", [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "rgb(240, 139, 35)",
      display: "inline",
      padding: "0"
    }
  }, [_vm._v("Club")])])])]), _vm._v(" "), _c("div", {
    staticClass: "hero-content position-relative"
  }, [_c("ul", {
    staticClass: "heroList"
  }, [_c("li", [_c("base-icon", {
    staticClass: "m-2",
    attrs: {
      name: "CheckSquare",
      color: "secondary"
    }
  }), _vm._v("\n                                    Подбор туров для каждого\n                                ")], 1), _vm._v(" "), _c("li", [_c("base-icon", {
    staticClass: "m-2",
    attrs: {
      name: "CheckSquare",
      color: "secondary"
    }
  }), _vm._v("\n                                    Современные туры по РФ\n                                ")], 1), _vm._v(" "), _c("li", [_c("base-icon", {
    staticClass: "m-2",
    attrs: {
      name: "CheckSquare",
      color: "secondary"
    }
  }), _vm._v("\n                                    Доступные авиабилеты\n                                ")], 1), _vm._v(" "), _c("li", [_c("base-icon", {
    staticClass: "m-2",
    attrs: {
      name: "CheckSquare",
      color: "secondary"
    }
  }), _vm._v("\n                                    Комфортабельные отели\n                                ")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "previewArrow"
  }, [_c("img", {
    attrs: {
      src: "/img/item/demo-arrow.png",
      alt: "preview"
    }
  }), _vm._v("Используй\n                                мышку для скрола\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "buttonWrapper"
  }, [_c("a", {
    staticClass: "footer-btn d-flex",
    staticStyle: {
      color: "white !important"
    },
    attrs: {
      href: "#qr",
      id: "hero-qr-button"
    }
  }, [_c("base-icon", {
    staticClass: "me-1 my-auto",
    attrs: {
      name: "QrCode"
    }
  }), _vm._v("\n                                Попробуй с телефона\n                            ")], 1)]), _vm._v(" "), _c("div", {
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
      src: _vm.$baseUrl + "/m/mobile",
      title: "Приложение на телефон",
      frameborder: "0"
    }
  })])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "gridBox"
  }, [_c("div", {
    staticClass: "text"
  }, [_c("em", [_vm._v("Изучайте Мир вместе с семьей Travel Club!")])]), _vm._v(" "), _c("div", {
    staticClass: "two"
  }, [_c("h1", [_vm._v("Путешествуй вместе с\n                        "), _c("span", [_vm._v("Travel"), _c("span", {
    staticStyle: {
      color: "rgb(240, 139, 35)",
      display: "inline",
      padding: "0"
    }
  }, [_vm._v("Club")])])])]), _vm._v(" "), _c("div", {
    staticClass: "tc-row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item4.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "three"
  }, [_c("h4", {
    staticClass: "item-title"
  }, [_c("span"), _vm._v("Путешествуй c TravelClub")]), _vm._v(" "), _c("div", {
    staticClass: "item-text"
  }, [_vm._v("\n                                Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.\n                            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item1.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "three"
  }, [_c("h4", {
    staticClass: "item-title"
  }, [_c("span"), _vm._v("Туры по России")]), _vm._v(" "), _c("div", {
    staticClass: "item-text"
  }, [_vm._v("\n                                Путешествуй с Travel Club по всей России.\n                            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item2.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "three"
  }, [_c("h4", {
    staticClass: "item-title"
  }, [_c("span"), _vm._v("Мы - Travel Club Family")]), _vm._v(" "), _c("div", {
    staticClass: "item-text"
  }, [_vm._v("\n                                Стань частью семьи и получай все наши привелегии!\n                            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item3.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "three"
  }, [_c("h4", {
    staticClass: "item-title"
  }, [_c("span"), _vm._v("Летай вместе с нами")]), _vm._v(" "), _c("div", {
    staticClass: "item-text"
  }, [_vm._v("\n                                Вы сможете приобрести авиабилет в любую точку самостоятельно или через наших менеджеров.\n                            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item5.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "three"
  }, [_c("h4", {
    staticClass: "item-title"
  }, [_c("span"), _vm._v("Отели любого уровня")]), _vm._v(" "), _c("div", {
    staticClass: "item-text"
  }, [_vm._v("\n                                Мы подбираем отель под любой ваш критерий!\n                            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_c("div", {
    staticClass: "imgWrapper"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/item/item6.jpg",
      alt: "image"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "three"
  }, [_c("h4", {
    staticClass: "item-title"
  }, [_c("span"), _vm._v("Новый уровень путешествий")]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                        Сканируй QR-код, чтобы установить себе!\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "qrCodeImg"
  }, [_c("img", {
    staticClass: "img",
    attrs: {
      src: "/img/qr.jpg",
      alt: "qr"
    }
  })])])]), _vm._v(" "), _c("div", {
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
    staticClass: "tc-row"
  }, [_c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("a", {
    staticClass: "tc-button",
    staticStyle: {
      height: "56px"
    },
    attrs: {
      href: "https://travel-club.tours/m/mobile"
    }
  }, [_c("base-icon", {
    staticClass: "me-2",
    attrs: {
      name: "Eye"
    }
  }), _vm._v("\n                                Попробовать\n                            ")], 1)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "sidebar"
  }, [_c("div", {
    staticClass: "toggleButton sidebarTrigger",
    on: {
      click: function click($event) {
        return _vm.sidebarOpen();
      }
    }
  }, [_c("base-icon", {
    attrs: {
      name: "ArrowRight"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "sidebarTitle"
  }, [_vm._v("\n                Наши контакты\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "sidebarFooter"
  }, [_c("a", {
    staticClass: "button",
    attrs: {
      rel: "noreferrer",
      href: "https://t.me/travelclubtours",
      target: "_blank",
      "aria-label": "мы в телеграм"
    }
  }, [_c("base-icon", {
    attrs: {
      name: "Telegram",
      width: "32",
      height: "32"
    }
  })], 1), _vm._v(" "), _c("a", {
    staticClass: "button",
    attrs: {
      rel: "noreferrer",
      href: "https://www.instagram.com/travelclub_tours",
      target: "_blank",
      "aria-label": "мы в инстаграм"
    }
  }, [_c("base-icon", {
    attrs: {
      name: "Instagram",
      width: "32",
      height: "32"
    }
  })], 1), _vm._v(" "), _c("a", {
    staticClass: "button",
    attrs: {
      rel: "noreferrer",
      href: "https://wa.me/79064167872",
      target: "_blank",
      "aria-label": "наш контакт в вотспап"
    }
  }, [_c("base-icon", {
    attrs: {
      name: "WhatsApp",
      width: "32",
      height: "32"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "sidebarProducts"
  }, [_c("div", {
    staticClass: "tc-row"
  }, [_c("h2", [_vm._v("Ростов-на-Дону")]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("p", [_vm._v("Горького 140")]), _vm._v(" "), _c("p", [_vm._v("+7 906 416-78-72")]), _vm._v(" "), _c("p", [_vm._v("travelclubrnd@bk.ru")]), _vm._v(" "), _c("h4", [_vm._v(" Режим работы:")]), _vm._v(" "), _c("p", [_vm._v("Пн-Пт 10 00 – 18 00")]), _vm._v(" "), _c("p", [_vm._v("Суббота 10 00 – 17 00")]), _vm._v(" "), _c("p", [_vm._v("Воскресенье – выходной")]), _vm._v(" "), _c("employee-list", {
    attrs: {
      city: "Ростов-на-Дону"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "ya-map"
  }, [_c("a", {
    staticStyle: {
      color: "#eee",
      "font-size": "12px",
      position: "absolute",
      top: "0px"
    },
    attrs: {
      href: "https://yandex.ru/MAPS/39/rostov-na-donu/?utm_medium=mapframe&utm_source=maps"
    }
  }, [_vm._v("Ростов‑на‑Дону")]), _c("a", {
    staticStyle: {
      color: "#eee",
      "font-size": "12px",
      position: "absolute",
      top: "14px"
    },
    attrs: {
      href: "https://yandex.ru/MAPS/39/rostov-na-donu/house/sotsialisticheskaya_ulitsa_11_27/Z0AYcQdgTUQCQFptfX5wdnhkYg==/?ll=39.700415%2C47.217476&utm_medium=mapframe&utm_source=maps&z=16.65"
    }
  }, [_vm._v("Социалистическая улица, 11/27\n                                                    — Яндекс.Карты")]), _vm._v(" "), _c("iframe", {
    attrs: {
      src: "https://yandex.ru/map-widget/v1/-/CCUQ7XX1KD",
      allowfullscreen: "true"
    }
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("h2", [_vm._v("Донецк")]), _vm._v(" "), _c("p", [_vm._v("Бульвар Пушкина 23\n                        ")]), _vm._v(" "), _c("p", [_vm._v("+7 949 235-33-22\n                            "), _c("span", {
    staticClass: "ms-2"
  }, [_c("base-icon", {
    attrs: {
      name: "WhatsApp",
      width: "14px",
      height: "14px"
    }
  })], 1)]), _vm._v(" "), _c("h4", [_vm._v("Режим работы:")]), _vm._v(" "), _c("p", [_vm._v(" Пн-Пт 10 00 – 18 00")]), _vm._v(" "), _c("p", [_vm._v("Суббота 10 00 – 17 00")]), _vm._v(" "), _c("p", [_vm._v(" Воскресенье - выходной")]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Донецк")]), _vm._v(" "), _c("a", {
    staticStyle: {
      color: "#eee",
      "font-size": "12px",
      position: "absolute",
      top: "14px"
    },
    attrs: {
      href: "https://yandex.ru/MAPS/142/donetsk/house/bulvar_pushkina_23/Z04YfgdiSEwDQFpifXxxc3VhbQ==/?ll=37.802194%2C48.002930&utm_medium=mapframe&utm_source=maps&z=16.65"
    }
  }, [_vm._v("Бульвар Пушкина, 23 —\n                                Яндекс.Карты")]), _vm._v(" "), _c("iframe", {
    attrs: {
      src: "https://yandex.ru/map-widget/v1/-/CCUQ72AL2A",
      allowfullscreen: "true"
    }
  })])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".three h4 {\n  font-size: 19px !important;\n  font-family: \"Roboto\", sans-serif !important;\n  color: #032068 !important;\n  /*padding-left: 20px;*/\n  position: relative;\n  font-weight: 700 !important;\n  /*&:before {*/\n  /*    position: absolute;*/\n  /*    left: 0;*/\n  /*    bottom: 50%;*/\n  /*    width: 15px;*/\n  /*    height: 4px;*/\n  /*    content: \"\";*/\n  /*    background-color: #f08c1e;*/\n  /*    border-radius: 5px;*/\n  /*}*/\n}\n.three h4 span {\n  width: 15px;\n  height: 4px;\n  background-color: #f08c1e;\n  border-radius: 5px;\n  display: inline-block;\n  margin: 5px 5px 5px 0;\n}\n.three .item-text {\n  color: #032068;\n  font-weight: 300;\n}\n.two {\n  position: relative;\n}\n.two h1 {\n  font-weight: 800;\n  text-transform: uppercase;\n  color: #032068;\n  display: block;\n  position: relative;\n  font-family: \"Roboto\", sans-serif;\n}\n.two h1:before {\n  position: absolute;\n  left: 0;\n  bottom: 25px;\n  width: 60px;\n  height: 4px;\n  content: \"\";\n  background-color: #f08c1e;\n  border-radius: 5px;\n}\n.two h1 span {\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  line-height: 2em;\n  padding-left: 4.25em;\n  color: rgb(3, 32, 104);\n  padding-bottom: 10px;\n  font-family: Roboto, sans-serif;\n  display: block;\n}\n.nine h1 {\n  text-align: center;\n  font-size: 39px;\n  text-transform: uppercase;\n  color: #032068;\n  letter-spacing: 1px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 800;\n}\n.nine h1 span {\n  margin-top: 5px;\n  font-size: 15px;\n  color: #e17e4e;\n  word-spacing: 1px;\n  font-weight: normal;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 500;\n  display: grid;\n  grid-template-columns: 1fr max-content 1fr;\n  grid-template-rows: 27px 0;\n  grid-gap: 20px;\n  align-items: center;\n}\n.nine h1 span:after, .nine h1 span:before {\n  content: \" \";\n  display: block;\n  border-bottom: 1px solid #e17e4e;\n  border-top: 1px solid #e17e4e;\n  height: 5px;\n  background-color: #f8f8f8;\n}\n.city-list {\n  position: absolute;\n  background: white;\n  /* border-bottom: 2px orange solid; */\n  box-shadow: 1px 1px 2px 0px #858585;\n  padding: 21px;\n}\n.city-list li {\n  list-style: none;\n  cursor: pointer;\n  padding: 0;\n  width: 100%;\n  text-align: left;\n}\n.phone-by-city {\n  padding: 10px;\n  border-radius: 5px;\n  border: 2px white solid;\n  margin-bottom: 10px;\n}\n.phone-by-city p {\n  color: white;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_3ba08c2a_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_3ba08c2a_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_3ba08c2a_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _Landing_vue_vue_type_template_id_3ba08c2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing.vue?vue&type=template&id=3ba08c2a */ "./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a");
/* harmony import */ var _Landing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.vue?vue&type=script&lang=js */ "./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js");
/* harmony import */ var _Landing_vue_vue_type_style_index_0_id_3ba08c2a_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss */ "./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Landing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Landing_vue_vue_type_template_id_3ba08c2a__WEBPACK_IMPORTED_MODULE_0__.render,
  _Landing_vue_vue_type_template_id_3ba08c2a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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

/***/ "./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a":
/*!******************************************************************************!*\
  !*** ./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_3ba08c2a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_3ba08c2a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_3ba08c2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=template&id=3ba08c2a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=template&id=3ba08c2a");


/***/ }),

/***/ "./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss":
/*!*********************************************************************************************!*\
  !*** ./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_3ba08c2a_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/desktop/pages/Landing.vue?vue&type=style&index=0&id=3ba08c2a&lang=scss");


/***/ })

}]);