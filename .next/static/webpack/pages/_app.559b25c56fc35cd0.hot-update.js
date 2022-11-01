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

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Theme */ \"./src/components/Theme.js\");\n/* harmony import */ var _styled_Button_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled/Button.styled */ \"./src/components/styled/Button.styled.js\");\n/* harmony import */ var _Header_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/SearchBar */ \"./src/components/Header/SearchBar.js\");\n/* harmony import */ var _Header_MobileSearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header/MobileSearchBar */ \"./src/components/Header/MobileSearchBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/abhay/Desktop/nft/nft-reset/src/components/Header.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar HeaderEl = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].header.withConfig({\n  displayName: \"Header__HeaderEl\",\n  componentId: \"sc-1c4nsj4-0\"\n})([\"z-index:10;display:flex;color:\", \";width:100%;align-items:center;height:5%;gap:1rem;padding:1rem 1.5rem;top:0;background-color:\", \";box-shadow:0px 0px 3rem \", \";position:sticky;svg{font-size:2rem;cursor:pointer;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.White, _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.Background, _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.Primary);\n_c = HeaderEl;\nvar Center = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Header__Center\",\n  componentId: \"sc-1c4nsj4-1\"\n})([\"flex:1;display:flex;align-items:center;gap:0.5rem;\"]);\n_c2 = Center;\nvar LogoText = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n  displayName: \"Header__LogoText\",\n  componentId: \"sc-1c4nsj4-2\"\n})([\"font-size:1.2rem;font-weight:500;color:#bbbbbb;display:none;\"]);\n_c3 = LogoText;\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img.withConfig({\n  displayName: \"Header__Logo\",\n  componentId: \"sc-1c4nsj4-3\"\n})([\"width:75px;padding-right:1rem;\"]);\n_c4 = Logo;\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].nav.withConfig({\n  displayName: \"Header__Nav\",\n  componentId: \"sc-1c4nsj4-4\"\n})([\"margin-left:auto;padding-right:1rem;display:none;ul{display:flex;align-items:center;list-style:none;gap:3rem;}@media \", \"{display:block;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Devices.Laptop);\n_c5 = Nav;\nvar NavItem = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n  displayName: \"Header__NavItem\",\n  componentId: \"sc-1c4nsj4-5\"\n})([\"font-size:1rem;font-weight:400;\"]);\n_c6 = NavItem;\nvar SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].span.withConfig({\n  displayName: \"Header__SearchIcon\",\n  componentId: \"sc-1c4nsj4-6\"\n})([\"display:flex;align-items:center;justify-content:center;@media \", \"{display:none;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Devices.Laptop);\n_c7 = SearchIcon;\nvar MenuIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(SearchIcon).withConfig({\n  displayName: \"Header__MenuIcon\",\n  componentId: \"sc-1c4nsj4-7\"\n})([\"\"]);\n_c8 = MenuIcon;\nvar AuthItems = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(NavItem).withConfig({\n  displayName: \"Header__AuthItems\",\n  componentId: \"sc-1c4nsj4-8\"\n})([\"font-size:1rem;display:none;@media \", \"{display:inherit;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Devices.Laptop);\nfunction Header(_ref) {\n  _s();\n\n  var mobileMenu = _ref.mobileMenu;\n  var MobileMenuIsOpen = mobileMenu.MobileMenuIsOpen,\n      setMobileMenuIsOpen = mobileMenu.setMobileMenuIsOpen;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      SearchIsOpen = _useState[0],\n      setSearchIsOpen = _useState[1];\n\n  function toggleMenu() {\n    setMobileMenuIsOpen(!MobileMenuIsOpen);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeaderEl, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MenuIcon, {\n      children: MobileMenuIsOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoClose, {\n        style: {\n          fontSize: \"2.5rem\"\n        },\n        color: _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.Primary,\n        onClick: function onClick() {\n          toggleMenu();\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiMenu, {\n        onClick: function onClick() {\n          toggleMenu();\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Center, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Logo, {\n        src: \"/images/logi.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LogoText, {\n        href: \"#\",\n        children: \"GRAVITY\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Nav, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavItem, {\n              href: \"https://event-ticket-marketplace.vercel.app/\",\n              children: \"Event Marketplace\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 132,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavItem, {\n              href: \"#\",\n              children: \"Warranty Management\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_Button_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n              children: \"Connect Wallet\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }, this), SearchIsOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_MobileSearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      SearchIsOpen: SearchIsOpen,\n      setSearchIsOpen: setSearchIsOpen\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 9\n    }, this) : \"\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SearchIcon, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_9__.CgSearch, {\n        onClick: function onClick() {\n          setSearchIsOpen(!SearchIsOpen);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 103,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"RO7KGB4m4fpa024M/FlvbZTvb+c=\");\n\n_c9 = Header;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"HeaderEl\");\n$RefreshReg$(_c2, \"Center\");\n$RefreshReg$(_c3, \"LogoText\");\n$RefreshReg$(_c4, \"Logo\");\n$RefreshReg$(_c5, \"Nav\");\n$RefreshReg$(_c6, \"NavItem\");\n$RefreshReg$(_c7, \"SearchIcon\");\n$RefreshReg$(_c8, \"MenuIcon\");\n$RefreshReg$(_c9, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDRSw4REFBQyw2REFBRDtjQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURGO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFQRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBdEJGLEVBMkNHRixZQUFZLGdCQUNYLDhEQUFDLCtEQUFEO01BQ0UsWUFBWSxFQUFFQSxZQURoQjtNQUVFLGVBQWUsRUFBRUM7SUFGbkI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURXLEdBT1gsRUFsREosZUFzREUsOERBQUMsVUFBRDtNQUFBLHVCQUNFLDhEQUFDLG9EQUFEO1FBQ0UsT0FBTyxFQUFFLG1CQUFNO1VBQ2JBLGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQWY7UUFDRDtNQUhIO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBdERGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBa0VEOztHQTFFdUJKOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanM/MzMyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRmlNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBDZ1NlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xuaW1wb3J0IHsgSW9DbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcbmltcG9ydCB7IENvbG9ycywgRGV2aWNlcyB9IGZyb20gXCIuL1RoZW1lXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL3N0eWxlZC9CdXR0b24uc3R5bGVkXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL0hlYWRlci9TZWFyY2hCYXJcIjtcbmltcG9ydCBTZWFyY2hCYXJNb2IgZnJvbSBcIi4vSGVhZGVyL01vYmlsZVNlYXJjaEJhclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSGVhZGVyRWwgPSBzdHlsZWQuaGVhZGVyYFxuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICR7Q29sb3JzLldoaXRlfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNSU7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcnMuQmFja2dyb3VuZH07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3JlbSAke0NvbG9ycy5QcmltYXJ5fTtcbiAgXG5cbiAgcG9zaXRpb246IHN0aWNreTtcblxuICBzdmcge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IENlbnRlciA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuYDtcblxuY29uc3QgTG9nb1RleHQgPSBzdHlsZWQuYWBcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjYmJiYmJiO1xuICBkaXNwbGF5Om5vbmU7XG5gO1xuXG5jb25zdCBMb2dvID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDc1cHg7XG4gIFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuYDtcblxuY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGdhcDogM3JlbTtcbiAgfVxuXG4gIEBtZWRpYSAke0RldmljZXMuTGFwdG9wfSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuYWBcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuYDtcblxuY29uc3QgU2VhcmNoSWNvbiA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBAbWVkaWEgJHtEZXZpY2VzLkxhcHRvcH0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5jb25zdCBNZW51SWNvbiA9IHN0eWxlZChTZWFyY2hJY29uKWBgO1xuXG5jb25zdCBBdXRoSXRlbXMgPSBzdHlsZWQoTmF2SXRlbSlgXG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZGlzcGxheTogbm9uZTtcbiAgQG1lZGlhICR7RGV2aWNlcy5MYXB0b3B9IHtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBtb2JpbGVNZW51IH0pIHtcbiAgY29uc3QgeyBNb2JpbGVNZW51SXNPcGVuLCBzZXRNb2JpbGVNZW51SXNPcGVuIH0gPSBtb2JpbGVNZW51O1xuICBjb25zdCBbU2VhcmNoSXNPcGVuLCBzZXRTZWFyY2hJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG4gICAgc2V0TW9iaWxlTWVudUlzT3BlbighTW9iaWxlTWVudUlzT3Blbik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWFkZXJFbD5cblxuXG4gICAgICA8TWVudUljb24+XG4gICAgICAgIHtNb2JpbGVNZW51SXNPcGVuID8gKFxuICAgICAgICAgIDxJb0Nsb3NlXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIyLjVyZW1cIiB9fVxuICAgICAgICAgICAgY29sb3I9e0NvbG9ycy5QcmltYXJ5fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0b2dnbGVNZW51KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZpTWVudVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0b2dnbGVNZW51KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L01lbnVJY29uPlxuXG5cbiAgICAgIDxDZW50ZXI+XG4gICAgICAgIDxMb2dvIHNyYz1cIi9pbWFnZXMvbG9naS5wbmdcIiAvPlxuICAgICAgICA8TG9nb1RleHQgaHJlZj1cIiNcIj5HUkFWSVRZPC9Mb2dvVGV4dD5cbiAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICA8TmF2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cImh0dHBzOi8vZXZlbnQtdGlja2V0LW1hcmtldHBsYWNlLnZlcmNlbC5hcHAvXCI+RXZlbnQgTWFya2V0cGxhY2U8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiI1wiPldhcnJhbnR5IE1hbmFnZW1lbnQ8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8QnV0dG9uPkNvbm5lY3QgV2FsbGV0PC9CdXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9DZW50ZXI+XG5cblxuXG4gICAgICB7U2VhcmNoSXNPcGVuID8gKFxuICAgICAgICA8U2VhcmNoQmFyTW9iXG4gICAgICAgICAgU2VhcmNoSXNPcGVuPXtTZWFyY2hJc09wZW59XG4gICAgICAgICAgc2V0U2VhcmNoSXNPcGVuPXtzZXRTZWFyY2hJc09wZW59XG5cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIFwiXCJcbiAgICAgICl9XG5cblxuICAgICAgPFNlYXJjaEljb24+XG4gICAgICAgIDxDZ1NlYXJjaFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFNlYXJjaElzT3BlbighU2VhcmNoSXNPcGVuKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWFyY2hJY29uPlxuXG5cbiAgICA8L0hlYWRlckVsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkZpTWVudSIsIkNnU2VhcmNoIiwiSW9DbG9zZSIsIkNvbG9ycyIsIkRldmljZXMiLCJCdXR0b24iLCJTZWFyY2hCYXIiLCJTZWFyY2hCYXJNb2IiLCJ1c2VTdGF0ZSIsIkhlYWRlckVsIiwiaGVhZGVyIiwiV2hpdGUiLCJCYWNrZ3JvdW5kIiwiUHJpbWFyeSIsIkNlbnRlciIsImRpdiIsIkxvZ29UZXh0IiwiYSIsIkxvZ28iLCJpbWciLCJOYXYiLCJuYXYiLCJMYXB0b3AiLCJOYXZJdGVtIiwiU2VhcmNoSWNvbiIsInNwYW4iLCJNZW51SWNvbiIsIkF1dGhJdGVtcyIsIkhlYWRlciIsIm1vYmlsZU1lbnUiLCJNb2JpbGVNZW51SXNPcGVuIiwic2V0TW9iaWxlTWVudUlzT3BlbiIsIlNlYXJjaElzT3BlbiIsInNldFNlYXJjaElzT3BlbiIsInRvZ2dsZU1lbnUiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.js\n"));

/***/ })

});