/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** external "wp.editor" ***!
  \****************************/
/*! dynamic exports provided */
/*! exports used: InnerBlocks */
/***/ (function(module, exports) {

module.exports = wp.editor;

/***/ }),
/* 1 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_boxcontainer__ = __webpack_require__(/*! ./components/boxcontainer */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card__ = __webpack_require__(/*! ./components/card */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_card__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_container__ = __webpack_require__(/*! ./components/container */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_container___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_container__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_list__ = __webpack_require__(/*! ./components/list */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_masonrycard__ = __webpack_require__(/*! ./components/masonrycard */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_supporters__ = __webpack_require__(/*! ./components/supporters */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_textbox__ = __webpack_require__(/*! ./components/textbox */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_style_scss__ = __webpack_require__(/*! ./styles/style.scss */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_style_scss__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9jb21wb25lbnRzL2JveGNvbnRhaW5lcic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9jYXJkJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9saXN0JztcbmltcG9ydCAnLi9jb21wb25lbnRzL21hc29ucnljYXJkJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3N1cHBvcnRlcnMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvdGV4dGJveCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************************!*\
  !*** ./src/components/boxcontainer/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editor__ = __webpack_require__(/*! @wordpress/editor */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_editor__);\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nvar getLayout = function getLayout(count) {\n\tswitch (count) {\n\t\tcase 1:\n\t\t\treturn [{ isLarge: true }];\n\t\tcase 2:\n\t\t\treturn [{ isWide: true }, { isLarge: true }];\n\t\tcase 3:\n\t\t\treturn [{}, {}, { isLarge: true }];\n\t\tcase 4:\n\t\t\treturn [{ isWide: true }, {}, {}, { isWide: true }];\n\t\tcase 5:\n\t\t\treturn [{}, {}, { isWide: true }, {}, {}];\n\t\tdefault:\n\t\t\treturn [{}, {}, {}, {}, {}, {}];\n\t}\n};\n\nregisterBlockType('cgb/boxcontainer', {\n\n\ttitle: __('Textbox Container'),\n\ticon: 'shield',\n\tcategory: 'common',\n\n\tedit: function edit(props) {\n\t\tvar className = props.className;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_editor__[\"InnerBlocks\"], {\n\t\t\t\tallowedBlocks: ['sgnblocks/textblock']\n\t\t\t})\n\t\t);\n\t},\n\n\tsave: function save() {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_editor__[\"InnerBlocks\"].Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JveGNvbnRhaW5lci9pbmRleC5qcz8xMjAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElubmVyQmxvY2tzIH0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xuXG5cbnZhciBnZXRMYXlvdXQgPSBmdW5jdGlvbiBnZXRMYXlvdXQoY291bnQpIHtcblx0c3dpdGNoIChjb3VudCkge1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbeyBpc0xhcmdlOiB0cnVlIH1dO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbeyBpc1dpZGU6IHRydWUgfSwgeyBpc0xhcmdlOiB0cnVlIH1dO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbe30sIHt9LCB7IGlzTGFyZ2U6IHRydWUgfV07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt7IGlzV2lkZTogdHJ1ZSB9LCB7fSwge30sIHsgaXNXaWRlOiB0cnVlIH1dO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbe30sIHt9LCB7IGlzV2lkZTogdHJ1ZSB9LCB7fSwge31dO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gW3t9LCB7fSwge30sIHt9LCB7fSwge31dO1xuXHR9XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2JveGNvbnRhaW5lcicsIHtcblxuXHR0aXRsZTogX18oJ1RleHRib3ggQ29udGFpbmVyJyksXG5cdGljb246ICdzaGllbGQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG5cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcywge1xuXHRcdFx0XHRhbGxvd2VkQmxvY2tzOiBbJ3NnbmJsb2Nrcy90ZXh0YmxvY2snXVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYm94Y29udGFpbmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./src/components/card/index.js ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nregisterBlockType('cgb/card', {\n\ttitle: __('Card'),\n\ticon: 'shield',\n\tcategory: 'common',\n\n\tedit: function edit(props) {\n\t\tvar image = props.image,\n\t\t    title = props.title,\n\t\t    content = props.content;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'card' },\n\t\t\twp.element.createElement(Image, { src: image, size: '3x4' }),\n\t\t\twp.element.createElement(\n\t\t\t\t'h3',\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'text-lg lightdark' },\n\t\t\t\t\ttitle\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'card-content' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'text' },\n\t\t\t\t\tcontent\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'a',\n\t\t\t\t{ className: 'link', href: '#' },\n\t\t\t\t'Learn more...'\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmQvaW5kZXguanM/NzYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvY2FyZCcsIHtcblx0dGl0bGU6IF9fKCdDYXJkJyksXG5cdGljb246ICdzaGllbGQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBpbWFnZSA9IHByb3BzLmltYWdlLFxuXHRcdCAgICB0aXRsZSA9IHByb3BzLnRpdGxlLFxuXHRcdCAgICBjb250ZW50ID0gcHJvcHMuY29udGVudDtcblxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdjYXJkJyB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEltYWdlLCB7IHNyYzogaW1hZ2UsIHNpemU6ICczeDQnIH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnaDMnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAndGV4dC1sZyBsaWdodGRhcmsnIH0sXG5cdFx0XHRcdFx0dGl0bGVcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2FyZC1jb250ZW50JyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3AnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAndGV4dCcgfSxcblx0XHRcdFx0XHRjb250ZW50XG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdhJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdsaW5rJywgaHJlZjogJyMnIH0sXG5cdFx0XHRcdCdMZWFybiBtb3JlLi4uJ1xuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9jYXJkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*******************************************!*\
  !*** ./src/components/container/index.js ***!
  \*******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nregisterBlockType('cgb/container', {\n\n\ttitle: __('Container'),\n\ticon: 'shield',\n\tcategory: 'common',\n\n\tedit: function edit(props) {\n\t\tvar title = props.title,\n\t\t    wide = props.wide;\n\n\n\t\tvar isWide = wide ? 'wide' : '';\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'container ' + isWide },\n\t\t\ttitle && wp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\t{ className: 'container-title' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'text-lg lightdark' },\n\t\t\t\t\ttitle\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'container-content' },\n\t\t\t\twp.element.createElement(InnerBlocks, { templateLock: false })\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC5qcz8xZDBiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgSW5uZXJCbG9ja3MgPSB3cC5lZGl0b3IuSW5uZXJCbG9ja3M7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9jb250YWluZXInLCB7XG5cblx0dGl0bGU6IF9fKCdDb250YWluZXInKSxcblx0aWNvbjogJ3NoaWVsZCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIHRpdGxlID0gcHJvcHMudGl0bGUsXG5cdFx0ICAgIHdpZGUgPSBwcm9wcy53aWRlO1xuXG5cblx0XHR2YXIgaXNXaWRlID0gd2lkZSA/ICd3aWRlJyA6ICcnO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdjb250YWluZXIgJyArIGlzV2lkZSB9LFxuXHRcdFx0dGl0bGUgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnaDInLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NvbnRhaW5lci10aXRsZScgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RleHQtbGcgbGlnaHRkYXJrJyB9LFxuXHRcdFx0XHRcdHRpdGxlXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NvbnRhaW5lci1jb250ZW50JyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIHsgdGVtcGxhdGVMb2NrOiBmYWxzZSB9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9jb250YWluZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ./src/components/list/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editor__ = __webpack_require__(/*! @wordpress/editor */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_editor__);\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nregisterBlockType('cgb/list', {\n\n\ttitle: __('List'),\n\ticon: 'shield',\n\tcategory: 'common',\n\n\tedit: function edit(props) {\n\t\tvar title = props.title,\n\t\t    items = props.items,\n\t\t    wide = props.wide;\n\n\n\t\tvar isWide = wide ? 'wide' : '';\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'list ' + isWide },\n\t\t\twp.element.createElement(\n\t\t\t\t'h3',\n\t\t\t\tnull,\n\t\t\t\ttitle\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'ul',\n\t\t\t\tnull,\n\t\t\t\titems.map(function (item, index) {\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'li',\n\t\t\t\t\t\t{ className: 'list-item', key: index },\n\t\t\t\t\t\titem\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QvaW5kZXguanM/ODcyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lckJsb2NrcyB9IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcblxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2xpc3QnLCB7XG5cblx0dGl0bGU6IF9fKCdMaXN0JyksXG5cdGljb246ICdzaGllbGQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciB0aXRsZSA9IHByb3BzLnRpdGxlLFxuXHRcdCAgICBpdGVtcyA9IHByb3BzLml0ZW1zLFxuXHRcdCAgICB3aWRlID0gcHJvcHMud2lkZTtcblxuXG5cdFx0dmFyIGlzV2lkZSA9IHdpZGUgPyAnd2lkZScgOiAnJztcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAnbGlzdCAnICsgaXNXaWRlIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdoMycsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHRpdGxlXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQndWwnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdsaScsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2xpc3QtaXRlbScsIGtleTogaW5kZXggfSxcblx0XHRcdFx0XHRcdGl0ZW1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9saXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*********************************************!*\
  !*** ./src/components/masonrycard/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editor__ = __webpack_require__(/*! @wordpress/editor */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_editor__);\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nregisterBlockType('cgb/masonrycard', {\n\n\ttitle: __('MasonryCard'),\n\ticon: 'shield',\n\tcategory: 'common',\n\n\tedit: function edit(props) {\n\t\tvar children = props.children,\n\t\t    title = props.title,\n\t\t    content = props.content;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'card' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'masonry' },\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_editor__[\"InnerBlocks\"], null)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'h3',\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'text-lg lightdark' },\n\t\t\t\t\ttitle\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'card-content' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'text' },\n\t\t\t\t\tcontent\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'a',\n\t\t\t\t{ className: 'link', href: '' },\n\t\t\t\t'Learn more...'\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hc29ucnljYXJkL2luZGV4LmpzPzYwOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJCbG9ja3MgfSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9tYXNvbnJ5Y2FyZCcsIHtcblxuXHR0aXRsZTogX18oJ01hc29ucnlDYXJkJyksXG5cdGljb246ICdzaGllbGQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuXHRcdCAgICB0aXRsZSA9IHByb3BzLnRpdGxlLFxuXHRcdCAgICBjb250ZW50ID0gcHJvcHMuY29udGVudDtcblxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdjYXJkJyB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdtYXNvbnJ5JyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIG51bGwpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnaDMnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAndGV4dC1sZyBsaWdodGRhcmsnIH0sXG5cdFx0XHRcdFx0dGl0bGVcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2FyZC1jb250ZW50JyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3AnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAndGV4dCcgfSxcblx0XHRcdFx0XHRjb250ZW50XG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdhJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdsaW5rJywgaHJlZjogJycgfSxcblx0XHRcdFx0J0xlYXJuIG1vcmUuLi4nXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hc29ucnljYXJkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!********************************************!*\
  !*** ./src/components/supporters/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editor__ = __webpack_require__(/*! @wordpress/editor */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_editor__);\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nregisterBlockType('cgb/supporters', {\n\n\ttitle: __('Supporters'),\n\ticon: 'shield',\n\tcategory: 'common',\n\n\tedit: function edit(props) {\n\t\tvar images = props.images;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'supporters' },\n\t\t\timages.map(function (item, index) {\n\t\t\t\treturn wp.element.createElement('img', { src: item.src, alt: item.name, key: index });\n\t\t\t})\n\t\t);\n\t},\n\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N1cHBvcnRlcnMvaW5kZXguanM/MGRmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lckJsb2NrcyB9IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcblxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL3N1cHBvcnRlcnMnLCB7XG5cblx0dGl0bGU6IF9fKCdTdXBwb3J0ZXJzJyksXG5cdGljb246ICdzaGllbGQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBpbWFnZXMgPSBwcm9wcy5pbWFnZXM7XG5cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAnc3VwcG9ydGVycycgfSxcblx0XHRcdGltYWdlcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBpdGVtLnNyYywgYWx0OiBpdGVtLm5hbWUsIGtleTogaW5kZXggfSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9zdXBwb3J0ZXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*****************************************!*\
  !*** ./src/components/textbox/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editor__ = __webpack_require__(/*! @wordpress/editor */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_editor__);\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nregisterBlockType('cgb/textbox', {\n\n\ttitle: __('textbox - CGB Block'),\n\ticon: 'shield',\n\tcategory: 'common',\n\n\tedit: function edit(props) {\n\t\tvar title = props.title,\n\t\t    content = props.content,\n\t\t    color = props.color,\n\t\t    isWide = props.isWide,\n\t\t    isLarge = props.isLarge,\n\t\t    link = props.link;\n\n\n\t\tvar classes = (color ? color : '') + ' ' + (isWide ? 'wide' : '') + ' ' + (isLarge ? 'large' : '');\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'textbox ' + classes },\n\t\t\twp.element.createElement(\n\t\t\t\t'h3',\n\t\t\t\t{ className: 'title' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\tnull,\n\t\t\t\t\ttitle\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\t{ className: 'text' },\n\t\t\t\tcontent\n\t\t\t),\n\t\t\tlink && wp.element.createElement(\n\t\t\t\t'a',\n\t\t\t\t{ className: 'link', href: link.url },\n\t\t\t\tlink.text\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRib3gvaW5kZXguanM/NDlkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lckJsb2NrcyB9IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcblxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL3RleHRib3gnLCB7XG5cblx0dGl0bGU6IF9fKCd0ZXh0Ym94IC0gQ0dCIEJsb2NrJyksXG5cdGljb246ICdzaGllbGQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciB0aXRsZSA9IHByb3BzLnRpdGxlLFxuXHRcdCAgICBjb250ZW50ID0gcHJvcHMuY29udGVudCxcblx0XHQgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcblx0XHQgICAgaXNXaWRlID0gcHJvcHMuaXNXaWRlLFxuXHRcdCAgICBpc0xhcmdlID0gcHJvcHMuaXNMYXJnZSxcblx0XHQgICAgbGluayA9IHByb3BzLmxpbms7XG5cblxuXHRcdHZhciBjbGFzc2VzID0gKGNvbG9yID8gY29sb3IgOiAnJykgKyAnICcgKyAoaXNXaWRlID8gJ3dpZGUnIDogJycpICsgJyAnICsgKGlzTGFyZ2UgPyAnbGFyZ2UnIDogJycpO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICd0ZXh0Ym94ICcgKyBjbGFzc2VzIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdoMycsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAndGl0bGUnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR0aXRsZVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQncCcsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAndGV4dCcgfSxcblx0XHRcdFx0Y29udGVudFxuXHRcdFx0KSxcblx0XHRcdGxpbmsgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnYScsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnbGluaycsIGhyZWY6IGxpbmsudXJsIH0sXG5cdFx0XHRcdGxpbmsudGV4dFxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0Ym94L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz83ZWE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ })
/******/ ]);