require("source-map-support").install();
exports.ids = ["contact"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/contact/Contact.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Contact-root-3ydpW {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Contact-container-2rVw2 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n", "", {"version":3,"sources":["/Users/mac/Desktop/react-learn/src/routes/contact/Contact.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,oCAAoC;CACrC","file":"Contact.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Contact-root-3ydpW",
	"container": "Contact-container-2rVw2"
};

/***/ }),

/***/ "./src/routes/contact/Contact.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/contact/Contact.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/contact/Contact.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
        content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/contact/Contact.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/contact/Contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Contact_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/contact/Contact.css");
/* harmony import */ var _Contact_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Contact_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mac/Desktop/react-learn/src/routes/contact/Contact.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Contact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Contact_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Contact_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "...")));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Contact, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_Contact_css__WEBPACK_IMPORTED_MODULE_3___default.a)(Contact));

/***/ }),

/***/ "./src/routes/contact/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/contact/Contact.js");
var _jsxFileName = "/Users/mac/Desktop/react-learn/src/routes/contact/index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Contact Us';

function action() {
  return {
    chunks: ['contact'],
    title: title,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NvbnRhY3QuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9yZWFjdC1sZWFybi9zcmMvcm91dGVzL2NvbnRhY3QvQ29udGFjdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jb250YWN0L0NvbnRhY3QuY3NzPzIwMTQiLCIvVXNlcnMvbWFjL0Rlc2t0b3AvcmVhY3QtbGVhcm4vc3JjL3JvdXRlcy9jb250YWN0L0NvbnRhY3QuanMiLCIvVXNlcnMvbWFjL0Rlc2t0b3AvcmVhY3QtbGVhcm4vc3JjL3JvdXRlcy9jb250YWN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5Db250YWN0LXJvb3QtM3lkcFcge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLkNvbnRhY3QtY29udGFpbmVyLTJyVncyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAwIDQwcHg7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL21hYy9EZXNrdG9wL3JlYWN0LWxlYXJuL3NyYy9yb3V0ZXMvY29udGFjdC9Db250YWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RSxrRUFBa0U7O0VBRWxFOztnRkFFOEU7O0VBRTlFLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDO0NBQzNEOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9DQUFvQztDQUNyQ1wiLFwiZmlsZVwiOlwiQ29udGFjdC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4ucm9vdCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAwIDQwcHg7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkNvbnRhY3Qtcm9vdC0zeWRwV1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIkNvbnRhY3QtY29udGFpbmVyLTJyVncyXCJcbn07IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Db250YWN0LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Db250YWN0LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0NvbnRhY3QuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0NvbnRhY3QuY3NzJztcblxuY2xhc3MgQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgIDxwPi4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoQ29udGFjdCk7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XG5cbmNvbnN0IHRpdGxlID0gJ0NvbnRhY3QgVXMnO1xuXG5mdW5jdGlvbiBhY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ2NvbnRhY3QnXSxcbiAgICB0aXRsZSxcbiAgICBjb21wb25lbnQ6IChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb250YWN0IHRpdGxlPXt0aXRsZX0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7QUFkQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFlQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9