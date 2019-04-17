(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/style.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/styles/style.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400|Source+Sans+Pro:900);", ""]);

// module
exports.push([module.i, ".yellow {\n  color: #000 !important;\n  background-color: #FFFB56 !important; }\n\n.red {\n  color: #000 !important;\n  background-color: #FF6356 !important; }\n\n.blue {\n  color: #000 !important;\n  background-color: #57DEF4 !important; }\n\n.green {\n  color: #000 !important;\n  background-color: #69D88A !important; }\n\n.lightdark {\n  color: #fff !important;\n  background-color: #363537 !important; }\n\n.hero-text {\n  font-size: 64px;\n  line-height: 95px;\n  color: #fff;\n  background-color: #131414;\n  padding: 0 3rem 0 1rem;\n  text-align: center; }\n\n.heading {\n  font-size: 32px;\n  line-height: 38px;\n  color: #fff;\n  background-color: #131414;\n  padding: 0 3rem 0 1rem;\n  text-align: center; }\n\n.text-lg {\n  font-size: 24px;\n  color: #fff;\n  background-color: #131414;\n  padding: 0.5rem 3rem 0.5rem 1rem; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Open Sans\", sans-serif; }\n\n.content {\n  min-height: 100vh;\n  padding: 0 10vw; }\n  @media screen and (max-width: 1028px) {\n    .content {\n      padding: 0 5vw; } }\n\n.icon {\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer; }\n\nimg {\n  object-fit: contain;\n  height: 100%; }\n\n.header {\n  display: flex;\n  position: fixed;\n  justify-content: space-between;\n  width: 100vw;\n  height: 70px;\n  padding: 0 10vw;\n  background-color: #fff;\n  z-index: 9999; }\n  .header .brand {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    padding: 0.5rem; }\n    .header .brand .brandlogo {\n      object-fit: contain;\n      height: 100%; }\n\n/* Push all content down by Header height */\n.header-offset {\n  height: 70px; }\n\n.hamburger {\n  width: auto;\n  padding: 1rem;\n  display: none; }\n\n.navitems {\n  display: flex;\n  align-items: center;\n  height: 100%; }\n\n.navitem {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  padding: 1rem;\n  text-decoration: none; }\n  .navitem span {\n    font-size: 20px;\n    line-height: 20px;\n    color: #000; }\n  .navitem:hover {\n    background-color: #363537 !important; }\n    .navitem:hover span {\n      color: #fff; }\n\n@media screen and (max-width: 768px) {\n  .header {\n    padding: 5px 5vw;\n    justify-content: space-between; }\n    .header .navigation {\n      position: fixed;\n      top: 0;\n      right: 0;\n      width: 0;\n      height: 100%;\n      margin-top: 70px;\n      background-color: #fff; }\n    .header .navitems {\n      opacity: 0;\n      flex-direction: column;\n      align-items: flex-end; }\n    .header .navigation.open {\n      width: 100%;\n      -webkit-transition: width 0.3s;\n      transition: width 0.3s; }\n      .header .navigation.open .navitems {\n        opacity: 1;\n        -webkit-transition: opacity 1s;\n        transition: opacity 1s; }\n        .header .navigation.open .navitems .navitem {\n          display: block;\n          height: auto;\n          width: 60vw;\n          margin: 12px 16px; }\n    .header .hamburger {\n      display: block; }\n    .header .navitem {\n      display: none; }\n      .header .navitem:nth-child(1) {\n        background-color: #F2F4F3; }\n      .header .navitem:nth-child(2) {\n        background-color: #FFFB56; }\n      .header .navitem:nth-child(3) {\n        background-color: #FF6356; }\n      .header .navitem:nth-child(4) {\n        background-color: #69D88A; }\n      .header .navitem:nth-child(5) {\n        background-color: #57DEF4; }\n      .header .navitem:nth-child(6) {\n        background-color: #131414; }\n        .header .navitem:nth-child(6) span {\n          color: #fff; } }\n\n.footer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background-color: #131414;\n  color: #fff; }\n  .footer .sections {\n    padding: 2rem 5rem 3rem;\n    display: flex;\n    justify-content: space-around; }\n    .footer .sections .section {\n      display: flex;\n      flex-direction: column; }\n      .footer .sections .section .title {\n        font-size: 24px;\n        text-decoration: underline;\n        font-weight: bold; }\n      .footer .sections .section .link {\n        color: #fff;\n        text-decoration: none; }\n        .footer .sections .section .link:hover {\n          opacity: 0.5; }\n  .footer .bottom {\n    width: 100%;\n    text-align: center;\n    color: #fff;\n    opacity: 0.5; }\n\n@media screen and (max-width: 1028px) {\n  .sections {\n    flex-direction: column; }\n    .sections .section .title, .sections .section .link {\n      text-align: center; } }\n\n.hero {\n  height: 100vh;\n  width: 100vw;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  .hero .text {\n    position: absolute;\n    bottom: 20%;\n    left: 10%; }\n\n.card {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: #fff; }\n  .card .card-content {\n    position: relative;\n    flex: 1 1 auto;\n    padding: 0 1.25rem; }\n    .card .card-content .text {\n      font-size: 20px;\n      line-height: 28px;\n      font-weight: 300; }\n  .card .link {\n    padding: 0 1.25rem 1.25rem; }\n\n.textbox {\n  padding: 1rem;\n  width: 100%; }\n  .textbox .title {\n    margin: 0 0 1rem;\n    font-weight: 300; }\n    .textbox .title span {\n      padding: 0 0 1rem;\n      border-bottom: 1px solid #000; }\n  .textbox .text {\n    padding: 1rem 0;\n    margin: 0 0 1rem;\n    font-family: \"Source Sans Pro\", sans-serif;\n    font-size: 24px; }\n    @media screen and (max-width: 1028px) {\n      .textbox .text {\n        font-size: 16px; } }\n\n/* Fix for lightdark cards */\n.textbox.lightdark > .title > span {\n  border-bottom: 1px solid #fff; }\n\n.textbox.large {\n  grid-row: span 2;\n  grid-column: span 2; }\n  .textbox.large .text {\n    font-size: 32px; }\n    @media screen and (max-width: 1028px) {\n      .textbox.large .text {\n        font-size: 20px; } }\n\n.textbox.wide {\n  grid-column: 1 / span 2 !important; }\n\n.image {\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100%; }\n\n.image.is-1x1 {\n  padding-top: 100%; }\n\n.image.is-3x4 {\n  padding-top: 75%; }\n\n.list ul {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: 1fr;\n  list-style-image: url(\"/static/icons/arrow.svg\");\n  padding: 0; }\n  @media screen and (max-width: 1028px) {\n    .list ul {\n      display: flex;\n      flex-direction: column; } }\n  .list ul .list-item {\n    margin-left: 2rem;\n    padding-right: 1rem;\n    padding-bottom: 1rem; }\n\n@media screen and (min-width: 1028px) {\n  .list.wide {\n    grid-column-end: span 2; } }\n\n.list.wide ul {\n  grid-template-columns: repeat(auto-fit, minmax(200px, 50%)); }\n\n.container {\n  background-color: #F2F4F3;\n  margin: 4rem 0;\n  padding: 1rem; }\n  .container .container-title {\n    margin: 0;\n    padding: 0.5rem 0; }\n  .container .container-content {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2rem;\n    background-color: #fff;\n    padding: 1rem; }\n    @media screen and (max-width: 1028px) {\n      .container .container-content {\n        grid-template-columns: 1fr; } }\n\n.container.wide .container-content {\n  display: flex; }\n\n.box-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-auto-flow: row;\n  grid-gap: 8px; }\n  .box-container::before {\n    content: '';\n    width: 0;\n    padding-bottom: 100%;\n    grid-row: 1 / 1;\n    grid-column: 1 / 1; }\n  .box-container *:first-child {\n    grid-row: 1;\n    grid-column: 1; }\n\n.box-container.single {\n  display: flex; }\n\n.divider {\n  display: flex;\n  justify-content: flex-end;\n  background-color: #363537; }\n  .divider *:first-child {\n    width: unset;\n    min-width: 33.33%; }\n\n.masonry {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-template-areas: \"A1 A1 .\" \"B1 . .\" \"B1 . .\";\n  grid-gap: 8px;\n  min-height: 1000px; }\n  .masonry > *:nth-child(1) {\n    grid-area: A1; }\n  .masonry > *:nth-child(3) {\n    grid-area: B1; }\n\n@media screen and (max-width: 1028px) {\n  .masonry {\n    display: flex;\n    flex-direction: column;\n    min-height: 0px; }\n    .masonry > * {\n      margin-bottom: 8px; } }\n\n.supporters {\n  grid-column: 1 / span 3;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 1fr;\n  justify-items: center; }\n  @media screen and (max-width: 1028px) {\n    .supporters {\n      grid-template-columns: 1fr; } }\n  .supporters img {\n    height: unset;\n    padding: 1rem;\n    max-width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "./src/_layout.js":
/*!************************!*\
  !*** ./src/_layout.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Content */ "./src/components/Content/index.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Hero */ "./src/components/Hero/index.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/_layout.js";







var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      header: {
        brand: {
          name: "Support Group Network",
          logo: "/static/images/logo.png"
        },
        navitems: [{
          'name': 'Who we are',
          'link': '/'
        }, {
          'name': 'What we do',
          'link': '/'
        }, {
          'name': 'Where we are',
          'link': '/'
        }, {
          'name': 'Job applications',
          'link': '/'
        }, {
          'name': 'Get involved',
          'link': '/'
        }, {
          'name': 'Donate',
          'link': '/'
        }]
      },
      footer: {
        'information': ['Kungsladugårdsvägen 5', 'Restad Gård, 462 54 Vänersborg Sweden', '+4676-884 08 84', 'info@supportgroup.se'],
        'sections': [{
          'title': 'Contact',
          'links': [{
            'text': "Get in touch",
            'link': "/"
          }, {
            'text': "Get involved",
            'link': "/"
          }, {
            'text': "Where we are",
            'link': "/"
          }]
        }, {
          'title': 'Integrity',
          'links': [{
            'text': "GDPR",
            'link': "/"
          }, {
            'text': "Cookies",
            'link': "/"
          }]
        }, {
          'title': 'Friends',
          'links': [{
            'text': "Wir Project",
            'link': "/"
          }, {
            'text': "Fier Project",
            'link': "/"
          }]
        }, {
          'title': 'Social',
          'links': [{
            'text': "Instagram",
            'link': "/"
          }, {
            'text': "Facebook",
            'link': "/"
          }, {
            'text': "Twitter",
            'link': "/"
          }]
        }]
      }
    };
    return _this;
  }

  Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          footer = _this$state.footer,
          header = _this$state.header;
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        brand: header.brand,
        navitems: header.navitems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        information: footer.information,
        sections: footer.sections,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/BoxContainer/index.js":
/*!**********************************************!*\
  !*** ./src/components/BoxContainer/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/BoxContainer/index.js";


var getLayout = function getLayout(count) {
  switch (count) {
    case 1:
      return [{
        isLarge: true
      }];

    case 2:
      return [{
        isWide: true
      }, {
        isLarge: true
      }];

    case 3:
      return [{}, {}, {
        isLarge: true
      }];

    case 4:
      return [{
        isWide: true
      }, {}, {}, {
        isWide: true
      }];

    case 5:
      return [{}, {}, {
        isWide: true
      }, {}, {}];

    default:
      return [{}, {}, {}, {}, {}, {}];
  }
};

var BoxContainer = function BoxContainer(props) {
  var children = props.children;
  var count = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children);
  var layout = getLayout(count);
  var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, layout[index]);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-container ".concat(count === 1 ? 'single' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, content);
};

/* harmony default export */ __webpack_exports__["default"] = (BoxContainer);

/***/ }),

/***/ "./src/components/Card/index.js":
/*!**************************************!*\
  !*** ./src/components/Card/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Image */ "./src/components/Image/index.js");
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/Card/index.js";




var Card = function Card(props) {
  var image = props.image,
      title = props.title,
      content = props.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: image,
    size: "3x4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg lightdark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, content)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "link",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Learn more..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/Container/index.js":
/*!*******************************************!*\
  !*** ./src/components/Container/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/Container/index.js";


var Container = function Container(props) {
  var children = props.children,
      title = props.title,
      wide = props.wide;
  var isWide = wide ? 'wide' : '';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container ".concat(isWide),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "container-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg lightdark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/components/Content/index.js":
/*!*****************************************!*\
  !*** ./src/components/Content/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/Content/index.js";


var Content = function Content(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/components/Divider/index.js":
/*!*****************************************!*\
  !*** ./src/components/Divider/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/Divider/index.js";



var Divider = function Divider(props) {
  var children = props.children;
  var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      color: 'lightdark'
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, content);
};

/* harmony default export */ __webpack_exports__["default"] = (Divider);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/Footer/index.js";



var Footer = function Footer(props) {
  var information = props.information,
      sections = props.sections;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, sections.map(function (section, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, section.title), section.links.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        key: index,
        className: "link",
        href: item.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, item.text);
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, information.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, item);
  })));
};

Footer.propTypes = {
  information: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");





var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/Header/index.js";



var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      navigationOpen: false
    };

    _this.toggleMenu = function () {
      _this.setState({
        navigationOpen: !_this.state.navigationOpen
      });
    };

    return _this;
  }

  Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          brand = _this$props.brand,
          navitems = _this$props.navitems;
      var navClasses = this.state.navigationOpen ? "navigation open" : "navigation";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "brand",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "brandlogo",
        src: brand.logo,
        alt: brand.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: navClasses,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "navitems",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, navitems.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: item.link,
          className: "navitem",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, item.name));
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hamburger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "menu",
        onClick: this.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-offset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Hero/index.js":
/*!**************************************!*\
  !*** ./src/components/Hero/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/Hero/index.js";



var Hero = function Hero(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero",
    style: {
      backgroundImage: "url(/static/images/hero.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "hero-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Support Group\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), "\xA0Network")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg yellow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " Working together for a better future"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Icon/index.js":
/*!**************************************!*\
  !*** ./src/components/Icon/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/Icon/index.js";



var Icon = function Icon(props) {
  var onClick = props.onClick,
      icon = props.icon,
      link = props.link;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "icon",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icons/".concat(icon, ".svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

Icon.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/components/Image/index.js":
/*!***************************************!*\
  !*** ./src/components/Image/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/Image/index.js";



var Image = function Image(props) {
  var src = props.src,
      size = props.size;
  var aspectRatio = size ? "is-".concat(size) : 'is-1x1';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image ".concat(aspectRatio),
    style: {
      backgroundImage: "url('".concat(src, "')")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/List/index.js":
/*!**************************************!*\
  !*** ./src/components/List/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/List/index.js";



var List = function List(props) {
  var title = props.title,
      items = props.items,
      wide = props.wide;
  var isWide = wide ? 'wide' : '';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list ".concat(isWide),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-item",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, item);
  })));
};

List.propTypes = {
  Items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/components/MasonryCard/index.js":
/*!*********************************************!*\
  !*** ./src/components/MasonryCard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/MasonryCard/index.js";



var MasonryCard = function MasonryCard(props) {
  var children = props.children,
      title = props.title,
      content = props.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "masonry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg lightdark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, content)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "link",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Learn more..."));
};

/* harmony default export */ __webpack_exports__["default"] = (MasonryCard);

/***/ }),

/***/ "./src/components/Supporters/index.js":
/*!********************************************!*\
  !*** ./src/components/Supporters/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Image */ "./src/components/Image/index.js");
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/Supporters/index.js";




var Supporters = function Supporters(props) {
  var images = props.images;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "supporters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, images.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.src,
      alt: item.name,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }));
};

Supporters.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Supporters);

/***/ }),

/***/ "./src/components/TextBox/index.js":
/*!*****************************************!*\
  !*** ./src/components/TextBox/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/components/TextBox/index.js";



var TextBox = function TextBox(props) {
  var title = props.title,
      content = props.content,
      color = props.color,
      isWide = props.isWide,
      isLarge = props.isLarge,
      link = props.link;
  var classes = "".concat(color ? color : '', " ").concat(isWide ? 'wide' : '', " ").concat(isLarge ? 'large' : '');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "textbox ".concat(classes),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, content), link && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "link",
    href: link.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, link.text));
};

TextBox.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (TextBox);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index */ "./src/pages/index.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_layout */ "./src/_layout.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card/index.js");
/* harmony import */ var _components_BoxContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BoxContainer */ "./src/components/BoxContainer/index.js");
/* harmony import */ var _components_TextBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TextBox */ "./src/components/TextBox/index.js");
/* harmony import */ var _components_MasonryCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MasonryCard */ "./src/components/MasonryCard/index.js");
/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Divider */ "./src/components/Divider/index.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Image */ "./src/components/Image/index.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/List */ "./src/components/List/index.js");
/* harmony import */ var _components_Supporters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Supporters */ "./src/components/Supporters/index.js");





var _jsxFileName = "/Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/pages/index.js";












var Index =
/*#__PURE__*/
function (_Component) {
  Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index() {
    Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_Users_laykith_Documents_public_html_yrgo_Support_Group_Network_wordpress_wp_content_themes_support_group_network_react_src_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Test",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
        image: "/static/images/card.png",
        title: "Where we are",
        content: "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_BoxContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "yellow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "green",
        link: {
          url: "/",
          text: "Learn more..."
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
        image: "/static/images/card.png",
        title: "Really looooooooooong",
        content: "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_BoxContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "yellow",
        link: {
          url: "/",
          text: "Learn more..."
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
        image: "/static/images/card.png",
        title: "Really looooooooooong",
        content: "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_BoxContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "lightdark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
        wide: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_MasonryCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Where we are",
        content: "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
        src: "/static/images/card.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "yellow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
        src: "/static/images/hero.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
        src: "/static/images/card.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_14__["default"], {
        wide: true,
        title: "List test",
        items: ["Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities", "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities", "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities", "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities", "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Test title",
        content: "Test Content",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Supporters__WEBPACK_IMPORTED_MODULE_15__["default"], {
        images: [{
          name: "123",
          src: "/static/images/supporter.png"
        }, {
          name: "123",
          src: "/static/images/supporter.png"
        }, {
          name: "123",
          src: "/static/images/supporter.png"
        }, {
          name: "123",
          src: "/static/images/supporter.png"
        }, {
          name: "123",
          src: "/static/images/supporter.png"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./style.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/laykith/Documents/public_html/yrgo/Support_Group_Network/wordpress/wp-content/themes/support-group-network/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map