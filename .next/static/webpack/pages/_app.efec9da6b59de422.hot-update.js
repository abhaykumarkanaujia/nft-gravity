"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_abhay_Desktop_nft_nft_reset_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Theme */ \"./src/components/Theme.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _src_components_styled_Button_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/styled/Button.styled */ \"./src/components/styled/Button.styled.js\");\n/* harmony import */ var _src_components_styled_Page_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/styled/Page.styled */ \"./src/components/styled/Page.styled.js\");\n/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/home/abhay/Desktop/nft/nft-reset/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_home_abhay_Desktop_nft_nft_reset_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\nvar GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.createGlobalStyle)([\"html,body{background-color:\", \";font-family:\\\"Poppins\\\",sans-serif;}p,a,h1,h2,h3,h5,h6,div,span{color:inherit;}a{color:inherit;text-decoration:none;}*{box-sizing:border-box;padding:0;margin:0;transition:all .3s;}body::-webkit-scrollbar{width:5px;}body::-webkit-scrollbar-track{background:#ffffff;}body::-webkit-scrollbar-thumb{background:#212121;border-radius:20px;}body::-webkit-scrollbar-thumb:hover{background:rgb(43,43,43);}\"], _src_components_Theme__WEBPACK_IMPORTED_MODULE_1__.Colors.Background);\n_c = GlobalStyle;\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n  displayName: \"_app__Main\",\n  componentId: \"sc-1z0djx3-0\"\n})([\"display:flex;flex-direction:column;width:100%;min-height:100vh;\"]);\n_c2 = Main;\nvar MobileMenu = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n  displayName: \"_app__MobileMenu\",\n  componentId: \"sc-1z0djx3-1\"\n})([\"background-color:\", \";color:\", \";z-index:\", \";position:absolute;padding:2rem 1rem 1rem 1.2rem;left:0;display:flex;width:\", \";height:100%;ul{opacity:\", \";transition:all 0.1s ease-out;text-decoration:none;list-style:none;display:flex;flex-direction:column;gap:2rem;width:100%;}\"], _src_components_Theme__WEBPACK_IMPORTED_MODULE_1__.Colors.Background, _src_components_Theme__WEBPACK_IMPORTED_MODULE_1__.Colors.White, function (p) {\n  return p.open ? \"9\" : \"-1\";\n}, function (p) {\n  return p.open ? \"100%\" : \"0\";\n}, function (p) {\n  return p.open ? \"1\" : \"0\";\n});\n_c3 = MobileMenu;\nvar NavItem = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].a.withConfig({\n  displayName: \"_app__NavItem\",\n  componentId: \"sc-1z0djx3-2\"\n})([\"font-size:1.2rem;font-weight:400;\"]);\n_c4 = NavItem;\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      MobileMenuIsOpen = _useState[0],\n      setMobileMenuIsOpen = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Main, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        mobileMenu: {\n          MobileMenuIsOpen: MobileMenuIsOpen,\n          setMobileMenuIsOpen: setMobileMenuIsOpen\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_components_styled_Page_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(MobileMenu, {\n          open: MobileMenuIsOpen,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"ul\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(NavItem, {\n                href: \"#\",\n                children: \"Event Marketplace\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(NavItem, {\n                href: \"#\",\n                children: \"Warranty Management\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 106,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_components_styled_Button_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: \"Account\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(MyApp, \"+TRjXMz3RPniEUynkhP6Uc2fwgI=\");\n\n_c5 = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c2, \"Main\");\n$RefreshReg$(_c3, \"MobileMenu\");\n$RefreshReg$(_c4, \"NavItem\");\n$RefreshReg$(_c5, \"MyApp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUSxXQUFXLEdBQUdQLG9FQUFILG1iQUtPQyxvRUFMUCxDQUFqQjtLQUFNTTtBQWdETixJQUFNRSxJQUFJLEdBQUdWLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHVFQUFWO01BQU1VO0FBT04sSUFBTUUsVUFBVSxHQUFHWix3RUFBSDtFQUFBO0VBQUE7QUFBQSw0UkFDTUUsb0VBRE4sRUFFTEEsK0RBRkssRUFHSCxVQUFDWSxDQUFEO0VBQUEsT0FBUUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVMsR0FBVCxHQUFlLElBQXZCO0FBQUEsQ0FIRyxFQVFMLFVBQUNELENBQUQ7RUFBQSxPQUFRQSxDQUFDLENBQUNDLElBQUYsR0FBUyxNQUFULEdBQWtCLEdBQTFCO0FBQUEsQ0FSSyxFQVlELFVBQUNELENBQUQ7RUFBQSxPQUFRQSxDQUFDLENBQUNDLElBQUYsR0FBUyxHQUFULEdBQWUsR0FBdkI7QUFBQSxDQVpDLENBQWhCO01BQU1IO0FBdUJOLElBQU1JLE9BQU8sR0FBR2hCLHNFQUFIO0VBQUE7RUFBQTtBQUFBLHlDQUFiO01BQU1nQjs7QUFLTixTQUFTRSxLQUFULE9BQXlDO0VBQUE7O0VBQUEsSUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtFQUFBLElBQWJDLFNBQWEsUUFBYkEsU0FBYTs7RUFDdkMsZ0JBQWdEakIsK0NBQVEsQ0FBQyxLQUFELENBQXhEO0VBQUEsSUFBT2tCLGdCQUFQO0VBQUEsSUFBeUJDLG1CQUF6Qjs7RUFDQSxvQkFDRTtJQUFBLHdCQUNFLDhEQUFDLFdBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBRUUsOERBQUMsSUFBRDtNQUFBLHdCQUNFLDhEQUFDLDhEQUFEO1FBQVEsVUFBVSxFQUFFO1VBQUVELGdCQUFnQixFQUFoQkEsZ0JBQUY7VUFBb0JDLG1CQUFtQixFQUFuQkE7UUFBcEI7TUFBcEI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBRUUsOERBQUMsMEVBQUQ7UUFBQSx3QkFDRSw4REFBQyxVQUFEO1VBQVksSUFBSSxFQUFFRCxnQkFBbEI7VUFBQSx1QkFDRTtZQUFBLHdCQUNFO2NBQUEsdUJBQ0UsOERBQUMsT0FBRDtnQkFBUyxJQUFJLEVBQUMsR0FBZDtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUE7WUFERjtjQUFBO2NBQUE7Y0FBQTtZQUFBLFFBREYsZUFJRTtjQUFBLHVCQUNFLDhEQUFDLE9BQUQ7Z0JBQVMsSUFBSSxFQUFDLEdBQWQ7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO1lBREY7Y0FBQTtjQUFBO2NBQUE7WUFBQSxRQUpGLGVBUUU7Y0FBQSx1QkFDRSw4REFBQyw0RUFBRDtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUE7WUFERjtjQUFBO2NBQUE7Y0FBQTtZQUFBLFFBUkY7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREY7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURGLGVBZUUsOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBZkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkYsZUFtQkUsOERBQUMsOERBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQW5CRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRjtFQUFBLGdCQURGO0FBMEJEOztHQTVCUUY7O01BQUFBO0FBOEJULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvVGhlbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0eWxlZC9CdXR0b24uc3R5bGVkXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3R5bGVkL1BhZ2Uuc3R5bGVkXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Gb290ZXJcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiBcblxuICBodG1sLFxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9ycy5CYWNrZ3JvdW5kfTtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBwLGEsaDEsaDIsaDMsaDUsaDYsZGl2LHNwYW57XG4gICAgLyogY29sb3I6JHtDb2xvcnMuV2hpdGV9OyAqL1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2l0aW9uOmFsbCAuM3M7XG4gIH1cblxuICAvKiB3aWR0aCAqL1xuICBib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDVweDtcbiAgfVxuXG4gIC8qIFRyYWNrICovXG4gIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG5cbiAgLyogSGFuZGxlICovXG4gIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cblxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYig0MywgNDMsIDQzKTtcbiAgfVxuYDtcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmNvbnN0IE1vYmlsZU1lbnUgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9ycy5CYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7Q29sb3JzLldoaXRlfTtcbiAgei1pbmRleDogJHsocCkgPT4gKHAub3BlbiA/IFwiOVwiIDogXCItMVwiKX07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMnJlbSAxcmVtIDFyZW0gMS4ycmVtO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogJHsocCkgPT4gKHAub3BlbiA/IFwiMTAwJVwiIDogXCIwXCIpfTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIHVsIHtcbiAgICBvcGFjaXR5OiAkeyhwKSA9PiAocC5vcGVuID8gXCIxXCIgOiBcIjBcIil9O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuYWBcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5gO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW01vYmlsZU1lbnVJc09wZW4sIHNldE1vYmlsZU1lbnVJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxNYWluPlxuICAgICAgICA8SGVhZGVyIG1vYmlsZU1lbnU9e3sgTW9iaWxlTWVudUlzT3Blbiwgc2V0TW9iaWxlTWVudUlzT3BlbiB9fSAvPlxuICAgICAgICA8UGFnZT5cbiAgICAgICAgICA8TW9iaWxlTWVudSBvcGVuPXtNb2JpbGVNZW51SXNPcGVufT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGhyZWY9XCIjXCI+RXZlbnQgTWFya2V0cGxhY2U8L05hdkl0ZW0+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiI1wiPldhcnJhbnR5IE1hbmFnZW1lbnQ8L05hdkl0ZW0+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbj5BY2NvdW50PC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvTW9iaWxlTWVudT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUGFnZT5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9NYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNvbG9ycyIsInVzZVN0YXRlIiwiSGVhZGVyIiwiQnV0dG9uIiwiUGFnZSIsIkZvb3RlciIsIkdsb2JhbFN0eWxlIiwiQmFja2dyb3VuZCIsIk1haW4iLCJkaXYiLCJNb2JpbGVNZW51IiwiV2hpdGUiLCJwIiwib3BlbiIsIk5hdkl0ZW0iLCJhIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJNb2JpbGVNZW51SXNPcGVuIiwic2V0TW9iaWxlTWVudUlzT3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});