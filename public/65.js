(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Start",
  data: function data() {
    return {// choice: 'Россия',
    };
  },
  mounted: function mounted() {},
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    },
    tourModule: function tourModule() {
      return this.$store.getters.tourModule;
    },
    preloader: function preloader() {
      return this.$store.getters.preloader;
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.title-1[data-v-8237699a] {\n    position: absolute;\n    z-index: 1;\n    left: 20px;\n    top: 10px;\n    color:#062348;\n    font-family: 'Bello Pro' !important;\n    font-size: 35px;\n}\n.title-1 span[data-v-8237699a] {\n    font-size: 40px;\n}\n.title-2[data-v-8237699a] {\n    position: absolute;\n    z-index: 1;\n    left: 36px;\n    top: 18px;\n    color:white;\n    font-family: 'Open Sans' !important;\n    font-weight:900;\n    font-size: 19px;\n}\n.title-2 span[data-v-8237699a] {\n    text-transform: uppercase;\n}\n.orange-brush[data-v-8237699a]{\n    top: 2px;\n    left: 0px;\n    width: 350px;\n    height: 50px;\n}\n.blue-brush[data-v-8237699a]{\n    top: 10px;\n    left: -55px;\n    width: 425px;\n    height: 50px;\n    opacity: 1;\n}\n.ballon[data-v-8237699a] {\n    margin: 0 auto;\n    width: 150px;\n    position: relative;\n    top: 45%;\n    transform: translateY(-45%);\n}\n.ballon-inner[data-v-8237699a] {\n    -webkit-animation: drift-data-v-8237699a 5s ease-in-out infinite;\n    animation: drift-data-v-8237699a 5s ease-in-out infinite;\n}\n.ballon-ball[data-v-8237699a] {\n    height: 150px;\n    width: 150px;\n    position: relative;\n    /*background: yellow;*/\n    border-radius:150%;\n    border-bottom-left-radius: 425%;\n    border-bottom-right-radius: 425%;\n    border-top-left-radius: 425%;\n    border-top-radius: 220%;\n    background: orange;\n    transform: rotate(135deg);\n    /*border-radius: 50%;\n    border: 3px solid #bf5caa;*/\n    overflow: hidden;\n}\n.ballon-ball1[data-v-8237699a] {\n    height: 150px;\n    width: 150px;\n    position: relative;\n    /*background: yellow;*/\n    border-bottom-left-radius: 100%;\n    border-bottom-right-radius: 220%;\n    border-top-left-radius: 220%;\n    background: yellow;\n    overflow: hidden;\n}\n.ballon-ball2[data-v-8237699a] {\n    height: 150px;\n    width: 150px;\n    position: relative;\n    border-bottom-left-radius: 0%;\n    border-bottom-right-radius: 530%;\n    border-top-left-radius: 530%;\n    background: orange;\n    overflow: hidden;\n}\n.ballon-ball3[data-v-8237699a] {\n    height: 175px;\n    width: 37px;\n    position: relative;\n    background:yellow;\n    border-bottom-left-radius: 1000%;\n    border-bottom-right-radius: 1000%;\n    border-top-left-radius: 1000%;\n    overflow: hidden;\n    transform: rotate(45deg);\n    border-top-right-radius: 1000%;\n    margin-left: 64px;\n    margin-top: -20px\n}\n.ball-inner[data-v-8237699a] {\n    position: absolute;\n    height: 38px;\n    top: 60px;\n    left: 0;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 50%;\n    border-bottom: 5px solid black;\n    z-index: 1;\n}\n\n/*.ball-inner--0 {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 0;\n  left: -3px;\n  border: 3px solid #bf5caa;\n}\n\n.ball-inner--1 {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 0;\n  left: 17px;\n  border: 3px solid #bf5caa;\n}\n\n.ball-inner--2 {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 0;\n  left: 37px;\n  border: 3px solid #bf5caa;\n}\n\n.ball-inner--3 {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 0;\n  left: 57px;\n  border: 3px solid #bf5caa;\n}\n\n.ball-inner--4 {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 0;\n  left: 77px;\n  border: 3px solid #bf5caa;\n}\n*/\n.ballon-rope[data-v-8237699a] {\n    height: 130px;\n    width: 0px;\n    position: absolute;\n    z-index: 0;\n    left: 117px;\n    border: #010000 solid 1px;\n    border-right-color: rgb(1, 0, 0);\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right: #000 solid 1px;\n    transform: rotate(28deg);\n    top: 76px;\n    /*height: 55.5555555556px;\n    width: 55.5555555556px;\n    position: absolute;\n    z-index: -1;\n    left: 23.2558139535px;\n    top: 55.5555555556px;\n    border: #cd7856 solid 3px;\n    border-right: #cd7856 solid 3px;\n    -webkit-transform: rotate(53deg) skew(18deg);\n            transform: rotate(53deg) skew(18deg);*/\n}\n.ballon-rope1[data-v-8237699a] {\n    height: 130px;\n    width: 0px;\n    position: absolute;\n    z-index: 0;\n    left: 32px;\n    border: #010000 solid 1px;\n    border-right-color: rgb(1, 0, 0);\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right: #000 solid 1px;\n    transform: rotate(-28deg);\n    top: 76px;\n}\n.ballon-rope2[data-v-8237699a] {\n    height: 120px;\n    width: 0px;\n    position: absolute;\n    z-index: 0;\n    left: 41px;\n    border: #010000 solid 1px;\n    border-right-color: rgb(1, 0, 0);\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right: #000 solid 1px;\n    transform: rotate(-25deg);\n    top: 84px;\n}\n.ballon-rope3[data-v-8237699a] {\n    height: 120px;\n    width: 0px;\n    position: absolute;\n    z-index: 0;\n    left: 108px;\n    border: #010000 solid 1px;\n    border-right-color: rgb(1, 0, 0);\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right: #000 solid 1px;\n    transform: rotate(25deg);\n    top: 84px;\n}\n.ballon-rope4[data-v-8237699a] {\n    height: 130px;\n    width: 0px;\n    position: absolute;\n    z-index: 0;\n    left: 54px;\n    border: #010000 solid 1px;\n    border-right-color: rgb(1, 0, 0);\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right: #000 solid 1px;\n    transform: rotate(-20deg);\n    top: 90px;\n}\n.ballon-rope5[data-v-8237699a] {\n    height: 130px;\n    width: 0px;\n    position: absolute;\n    z-index: 0;\n    left: 94px;\n    border: #010000 solid 1px;\n    border-right-color: rgb(1, 0, 0);\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right: #000 solid 1px;\n    transform: rotate(20deg);\n    top: 90px;\n}\n.ballon-rope6[data-v-8237699a] {\n    height: 130px;\n    width: 0px;\n    position: absolute;\n    z-index: 0;\n    left: 66px;\n    border: #010000 solid 1px;\n    border-right-color: rgb(1, 0, 0);\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right: #000 solid 1px;\n    transform: rotate(-9deg);\n    top: 93px;\n}\n.ballon-rope7[data-v-8237699a] {\n    height: 130px;\n    width: 0px;\n    position: absolute;\n    z-index: 0;\n    left: 82px;\n    border: #010000 solid 1px;\n    border-right-color: rgb(1, 0, 0);\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right: #000 solid 1px;\n    transform: rotate(9deg);\n    top: 93px;\n}\n.ballon-rope8[data-v-8237699a] {\n    height: 120px;\n    width: 0px;\n    position: absolute;\n    z-index: 0;\n    left: 74.5px;\n    border: #010000 solid 1px;\n    border-right-color: rgb(1, 0, 0);\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right: #000 solid 1px;\n    transform: rotate(0deg);\n    top: 97px;\n}\n.ballon-rope9[data-v-8237699a] {\n    height: 30px;\n    width: 0px;\n    position: absolute;\n    z-index: 0;\n    left: 85px;\n    border: #010000 solid 1px;\n    border-right-color: rgb(1, 0, 0);\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right: #000 solid 1px;\n    transform: rotate(-3deg);\n    top: 167px;\n}\n.ballon-rope10[data-v-8237699a] {\n    height: 30px;\n    width: 0px;\n    position: absolute;\n    z-index: 0;\n    left: 63px;\n    border: #010000 solid 1px;\n    border-right-color: rgb(1, 0, 0);\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right: #000 solid 1px;\n    transform: rotate(3deg);\n    top: 167px;\n}\n.ballon-seat[data-v-8237699a] {\n    width: 28.5714285714px;\n    height: 28.5714285714px;\n    position: relative;\n    border: 3px solid #633421;\n    border-radius: 0 0 6px 6px;\n    margin: 25px auto;\n    background: linear-gradient(to right, #987359 0%, #89534d 50%, #4a2b21 85%);\n    top: 20px;\n}\n.ballon-seat[data-v-8237699a]:before {\n    content: '';\n    width: 28.5714285714px;\n    height: 14.2857142857px;\n    position: absolute;\n    border-radius: 0 0 6px 6px;\n    bottom: 0;\n    left: -2px;\n    border-top: 3px solid #633421;\n    background: transparent;\n}\n.sky[data-v-8237699a] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    max-width: 650px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    z-index: 0;\n    margin: 0 auto;\n}\n.cloud[data-v-8237699a] {\n    position: absolute;\n    background: #dcf6ff;\n    border-radius: 200px;\n}\n.cloud--inner1[data-v-8237699a]:before, .cloud--inner1[data-v-8237699a]:after {\n    content: '';\n    position: absolute;\n    background:#dcf6ff;\n    width: 48%;\n    height: 100%;\n    position: absolute;\n    top: -34%;\n    left: 2%;\n    border-radius: 300px;\n}\n.cloud--inner1[data-v-8237699a]:after {\n    width: 65%;\n\n    height: 120%;\n    top: -21%;\n    left: auto;\n    right: 2%;\n}\n.cloud--inner3[data-v-8237699a]:before, .cloud--inner3[data-v-8237699a]:after {\n    content: '';\n    position: absolute;\n    background: #dcf6ff;\n    width: 55%;\n    height: 91%;\n    position: absolute;\n    top: 21%;\n    left: -9%;\n    border-radius: 300px;\n}\n.cloud--inner3[data-v-8237699a]:after {\n    width: 55%;\n    height: 100%;\n    top: 34%;\n    left: auto;\n    right: 8%;\n}\n.cloud--inner2[data-v-8237699a]:before, .cloud--inner2[data-v-8237699a]:after {\n    content: '';\n    position: absolute;\n    background: #ace7f9;\n    width: 61%;\n    height: 100%;\n    position: absolute;\n    top: 30%;\n    left: -12%;\n    border-radius: 200px;\n}\n.cloud--inner2[data-v-8237699a]:after {\n    width: 55%;\n    height: 100%;\n    top: 54%;\n    left: auto;\n    right: 10%;\n}\n.cloud--inner4[data-v-8237699a]:before, .cloud--inner4[data-v-8237699a]:after {\n    content: '';\n    position: absolute;\n    border-radius: 200px;\n}\n.cloud--inner4[data-v-8237699a]:before {\n    background: #ace7f9;\n    width: 50%;\n    height: 89%;\n    top: 19%;\n    left: auto;\n    right: -20%;\n}\n.cloud--inner4[data-v-8237699a]:after {\n    background: #dcf6ff;\n    width: 50%;\n    height: 74%;\n    top: 18%;\n    left: auto;\n    right: -19%;\n}\n.cloud-1[data-v-8237699a] {\n    width: 110px;\n    height: 55px;\n    bottom: 50%;\n    left: 105%;\n    -webkit-animation: moveClouds-data-v-8237699a 17s linear infinite;\n    animation: moveClouds-data-v-8237699a 17s linear infinite;\n    -webkit-animation-delay: 3s;\n    animation-delay: 3s;\n}\n.cloud-2[data-v-8237699a] {\n    width: 83.3333333333px;\n    height: 41.6666666667px;\n    bottom: 15%;\n    left: 105%;\n    -webkit-animation: moveClouds-data-v-8237699a 12s linear infinite;\n    animation: moveClouds-data-v-8237699a 12s linear infinite;\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n}\n.cloud-3[data-v-8237699a] {\n    width: 66.6666666667px;\n    height: 33.3333333333px;\n    top: 5%;\n    left: 105%;\n    -webkit-animation: moveClouds-data-v-8237699a 15s linear infinite;\n    animation: moveClouds-data-v-8237699a 15s linear infinite;\n    -webkit-animation-delay: 2s;\n    animation-delay: 2s;\n}\n@-webkit-keyframes moveClouds-data-v-8237699a {\n0% {\n        transform: translateX(-15vw);\n        opacity: 0;\n}\n5% { opacity: 0.1;\n}\n10% { opacity: 0.5;\n}\n15% { opacity: 0.8;\n}\n20% { opacity: 1;\n}\n70% { opacity: 0.8;\n}\n80% { opacity: 0.5;\n}\n90% { opacity: 0.1;\n}\n100% {\n        transform: translateX(-650px);\n        opacity: 0;\n}\n}\n@keyframes moveClouds-data-v-8237699a {\n0% {\n        transform: translateX(-15vw);\n        opacity: 0;\n}\n5% { opacity: 0.1;\n}\n10% { opacity: 0.5;\n}\n15% { opacity: 0.8;\n}\n20% { opacity: 1;\n}\n70% { opacity: 0.8;\n}\n80% { opacity: 0.5;\n}\n90% { opacity: 0.1;\n}\n100% {\n        transform: translateX(-650px);\n        opacity: 0;\n}\n}\n@-webkit-keyframes drift-data-v-8237699a {\n0% {\n        transform: translateY(0px) rotate();\n}\n50% {\n        transform: translateY(-20px) rotate(-3deg);\n}\n100% {\n        transform: translateY(0px) rotate();\n}\n}\n@keyframes drift-data-v-8237699a {\n0% {\n        transform: translateY(0px) rotate();\n}\n50% {\n        transform: translateY(-20px) rotate(-3deg);\n}\n100% {\n        transform: translateY(0px) rotate();\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=template&id=8237699a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=template&id=8237699a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cont m-auto" }, [
      _c(
        "div",
        {
          staticClass: "ml-auto mr-auto",
          staticStyle: {
            position: "relative",
            height: "40vh",
            width: "100%",
            background: "url('/images/Resurs_7.svg') no-repeat center"
          }
        },
        [
          _c("div", { staticClass: "sky" }, [
            _c("div", { staticClass: "cloud-1 cloud" }, [
              _c("div", { staticClass: "cloud--inner1" }),
              _vm._v(" "),
              _c("div", { staticClass: "cloud--inner4" }),
              _vm._v(" "),
              _c("div", { staticClass: "cloud--inner2" }),
              _vm._v(" "),
              _c("div", { staticClass: "cloud--inner3" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "cloud-2 cloud" }, [
              _c("div", { staticClass: "cloud--inner1" }),
              _vm._v(" "),
              _c("div", { staticClass: "cloud--inner4" }),
              _vm._v(" "),
              _c("div", { staticClass: "cloud--inner2" }),
              _vm._v(" "),
              _c("div", { staticClass: "cloud--inner3" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "cloud-3 cloud" }, [
              _c("div", { staticClass: "cloud--inner1" }),
              _vm._v(" "),
              _c("div", { staticClass: "cloud--inner4" }),
              _vm._v(" "),
              _c("div", { staticClass: "cloud--inner2" }),
              _vm._v(" "),
              _c("div", { staticClass: "cloud--inner3" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ballon" }, [
              _c("div", { staticClass: "ballon-inner" }, [
                _c("div", { staticClass: "ball-inner" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-ball" }, [
                  _c("div", { staticClass: "ballon-ball1" }, [
                    _c("div", { staticClass: "ballon-ball2" }, [
                      _c("div", { staticClass: "ballon-ball3" })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-rope" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-rope1" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-rope2" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-rope3" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-rope4" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-rope5" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-rope6" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-rope7" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-rope8" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-rope9" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-rope10" }),
                _vm._v(" "),
                _c("div", { staticClass: "ballon-seat" })
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "row m-auto justify-content-center align-items-center",
          staticStyle: { width: "100%" }
        },
        [
          _c("div", { staticClass: "col-12 col-md-8 col-sm-12" }, [
            _c(
              "div",
              {
                staticClass:
                  "row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row",
                staticStyle: { height: "100px", width: "100%" }
              },
              [
                _c("div", { staticClass: "col-md-7 p-0" }, [
                  _c(
                    "div",
                    {
                      staticClass: "row mr-auto ml-0 my-auto travel-card-title",
                      staticStyle: {
                        position: "relative",
                        height: "50px",
                        width: "300px"
                      }
                    },
                    [
                      _c("h1", { staticClass: "title-1" }, [
                        _c("span", [_vm._v("Д")]),
                        _vm._v("обро пожаловать")
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "blue-brush",
                        staticStyle: { position: "absolute" },
                        attrs: { src: "/images/blue-brush.svg" }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-7 p-0" }, [
                  _c(
                    "div",
                    {
                      staticClass: "row ml-auto mr-0 my-auto travel-card-title",
                      staticStyle: {
                        position: "relative",
                        height: "50px",
                        width: "350px"
                      }
                    },
                    [
                      _c("h1", { staticClass: "title-2" }, [
                        _c("span", [_vm._v("в модуль подбора туров ")])
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "orange-brush",
                        staticStyle: { position: "absolute" },
                        attrs: { src: "/images/orange-brush.svg" }
                      })
                    ]
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
          staticClass:
            "row m-auto justify-content-center align-items-center px-5",
          staticStyle: { width: "80%" }
        },
        [
          _c(
            "p",
            {
              staticStyle: {
                color: "#0f213d",
                "font-family": "'Open Sans'",
                "font-weight": "900",
                "font-style": "italic"
              }
            },
            [
              _vm._v(
                "Надоело искать, подбирать туры и следить за их ценой самостоятельно? Мы предлагаем заполнить заявку на подбор туров и наши менеджеры сделают всё за Вас!"
              )
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/desktop/pages/TourModule/Start.vue":
/*!*********************************************************!*\
  !*** ./resources/js/desktop/pages/TourModule/Start.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Start_vue_vue_type_template_id_8237699a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Start.vue?vue&type=template&id=8237699a&scoped=true& */ "./resources/js/desktop/pages/TourModule/Start.vue?vue&type=template&id=8237699a&scoped=true&");
/* harmony import */ var _Start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Start.vue?vue&type=script&lang=js& */ "./resources/js/desktop/pages/TourModule/Start.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Start_vue_vue_type_style_index_0_id_8237699a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css& */ "./resources/js/desktop/pages/TourModule/Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Start_vue_vue_type_template_id_8237699a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Start_vue_vue_type_template_id_8237699a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8237699a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/desktop/pages/TourModule/Start.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/desktop/pages/TourModule/Start.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/desktop/pages/TourModule/Start.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Start.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/desktop/pages/TourModule/Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/TourModule/Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_style_index_0_id_8237699a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=style&index=0&id=8237699a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_style_index_0_id_8237699a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_style_index_0_id_8237699a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_style_index_0_id_8237699a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_style_index_0_id_8237699a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/desktop/pages/TourModule/Start.vue?vue&type=template&id=8237699a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/desktop/pages/TourModule/Start.vue?vue&type=template&id=8237699a&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_template_id_8237699a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Start.vue?vue&type=template&id=8237699a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/desktop/pages/TourModule/Start.vue?vue&type=template&id=8237699a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_template_id_8237699a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_template_id_8237699a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);