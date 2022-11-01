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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Theme */ \"./src/components/Theme.js\");\n/* harmony import */ var _styled_Button_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled/Button.styled */ \"./src/components/styled/Button.styled.js\");\n/* harmony import */ var _Header_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/SearchBar */ \"./src/components/Header/SearchBar.js\");\n/* harmony import */ var _Header_MobileSearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header/MobileSearchBar */ \"./src/components/Header/MobileSearchBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/abhay/Desktop/nft/nft-reset/src/components/Header.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar HeaderEl = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].header.withConfig({\n  displayName: \"Header__HeaderEl\",\n  componentId: \"sc-1c4nsj4-0\"\n})([\"z-index:10;display:flex;color:\", \";width:100%;align-items:center;height:10%;gap:1rem;padding:1rem 1.5rem;top:0;background-color:\", \";box-shadow:0px 0px 3rem \", \";position:sticky;svg{font-size:2rem;cursor:pointer;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.White, _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.Background, _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.Primary);\n_c = HeaderEl;\nvar Center = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Header__Center\",\n  componentId: \"sc-1c4nsj4-1\"\n})([\"flex:1;display:flex;align-items:center;gap:0.5rem;\"]);\n_c2 = Center;\nvar LogoText = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n  displayName: \"Header__LogoText\",\n  componentId: \"sc-1c4nsj4-2\"\n})([\"font-size:1.2rem;font-weight:500;color:#bbbbbb;display:none;\"]);\n_c3 = LogoText;\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img.withConfig({\n  displayName: \"Header__Logo\",\n  componentId: \"sc-1c4nsj4-3\"\n})([\"width:75px;padding-right:1rem;\"]);\n_c4 = Logo;\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].nav.withConfig({\n  displayName: \"Header__Nav\",\n  componentId: \"sc-1c4nsj4-4\"\n})([\"margin-left:auto;padding-right:1rem;display:none;ul{display:flex;align-items:center;list-style:none;gap:3rem;}@media \", \"{display:block;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Devices.Laptop);\n_c5 = Nav;\nvar NavItem = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n  displayName: \"Header__NavItem\",\n  componentId: \"sc-1c4nsj4-5\"\n})([\"font-size:1rem;font-weight:400;\"]);\n_c6 = NavItem;\nvar SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].span.withConfig({\n  displayName: \"Header__SearchIcon\",\n  componentId: \"sc-1c4nsj4-6\"\n})([\"display:flex;align-items:center;justify-content:center;@media \", \"{display:none;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Devices.Laptop);\n_c7 = SearchIcon;\nvar MenuIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(SearchIcon).withConfig({\n  displayName: \"Header__MenuIcon\",\n  componentId: \"sc-1c4nsj4-7\"\n})([\"\"]);\n_c8 = MenuIcon;\nvar AuthItems = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(NavItem).withConfig({\n  displayName: \"Header__AuthItems\",\n  componentId: \"sc-1c4nsj4-8\"\n})([\"font-size:1rem;display:none;@media \", \"{display:inherit;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Devices.Laptop);\nfunction Header(_ref) {\n  _s();\n\n  var mobileMenu = _ref.mobileMenu;\n  var MobileMenuIsOpen = mobileMenu.MobileMenuIsOpen,\n      setMobileMenuIsOpen = mobileMenu.setMobileMenuIsOpen;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      SearchIsOpen = _useState[0],\n      setSearchIsOpen = _useState[1];\n\n  function toggleMenu() {\n    setMobileMenuIsOpen(!MobileMenuIsOpen);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeaderEl, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MenuIcon, {\n      children: MobileMenuIsOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoClose, {\n        style: {\n          fontSize: \"2.5rem\"\n        },\n        color: _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.Primary,\n        onClick: function onClick() {\n          toggleMenu();\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiMenu, {\n        onClick: function onClick() {\n          toggleMenu();\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Center, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Logo, {\n        src: \"/images/logi.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LogoText, {\n        href: \"#\",\n        children: \"GRAVITY\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Nav, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavItem, {\n              href: \"#\",\n              children: \"Event Marketplace\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 132,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavItem, {\n              href: \"#\",\n              children: \"Product Managment\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavItem, {\n              href: \"#\",\n              children: \"Brands\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_Button_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n              children: \"Connect Wallet\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 141,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }, this), SearchIsOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_MobileSearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      SearchIsOpen: SearchIsOpen,\n      setSearchIsOpen: setSearchIsOpen\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 9\n    }, this) : \"\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SearchIcon, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_9__.CgSearch, {\n        onClick: function onClick() {\n          setSearchIsOpen(!SearchIsOpen);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 161,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 103,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"RO7KGB4m4fpa024M/FlvbZTvb+c=\");\n\n_c9 = Header;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"HeaderEl\");\n$RefreshReg$(_c2, \"Center\");\n$RefreshReg$(_c3, \"LogoText\");\n$RefreshReg$(_c4, \"Logo\");\n$RefreshReg$(_c5, \"Nav\");\n$RefreshReg$(_c6, \"NavItem\");\n$RefreshReg$(_c7, \"SearchIcon\");\n$RefreshReg$(_c8, \"MenuIcon\");\n$RefreshReg$(_c9, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFLDhEQUFDLE9BQUQ7Y0FBUyxJQUFJLEVBQUMsR0FBZDtjQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURGO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFQRixlQVVFO1lBQUEsdUJBQ0UsOERBQUMsNkRBQUQ7Y0FBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFERjtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBVkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUpGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQXRCRixFQThDR0YsWUFBWSxnQkFDWCw4REFBQywrREFBRDtNQUNFLFlBQVksRUFBRUEsWUFEaEI7TUFFRSxlQUFlLEVBQUVDO0lBRm5CO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFEVyxHQU9YLEVBckRKLGVBeURFLDhEQUFDLFVBQUQ7TUFBQSx1QkFDRSw4REFBQyxvREFBRDtRQUNFLE9BQU8sRUFBRSxtQkFBTTtVQUNiQSxlQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFmO1FBQ0Q7TUFISDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQXpERjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQXFFRDs7R0E3RXVCSjs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzPzMzMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEZpTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgQ2dTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcbmltcG9ydCB7IElvQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5pbXBvcnQgeyBDb2xvcnMsIERldmljZXMgfSBmcm9tIFwiLi9UaGVtZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9zdHlsZWQvQnV0dG9uLnN0eWxlZFwiO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9IZWFkZXIvU2VhcmNoQmFyXCI7XG5pbXBvcnQgU2VhcmNoQmFyTW9iIGZyb20gXCIuL0hlYWRlci9Nb2JpbGVTZWFyY2hCYXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhlYWRlckVsID0gc3R5bGVkLmhlYWRlcmBcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAke0NvbG9ycy5XaGl0ZX07XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwJTtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9ycy5CYWNrZ3JvdW5kfTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcmVtICR7Q29sb3JzLlByaW1hcnl9O1xuICBcblxuICBwb3NpdGlvbjogc3RpY2t5O1xuXG4gIHN2ZyB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgQ2VudGVyID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG5gO1xuXG5jb25zdCBMb2dvVGV4dCA9IHN0eWxlZC5hYFxuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNiYmJiYmI7XG4gIGRpc3BsYXk6bm9uZTtcbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNzVweDtcbiAgXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG5gO1xuXG5jb25zdCBOYXYgPSBzdHlsZWQubmF2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgZGlzcGxheTogbm9uZTtcblxuICB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZ2FwOiAzcmVtO1xuICB9XG5cbiAgQG1lZGlhICR7RGV2aWNlcy5MYXB0b3B9IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hYFxuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5gO1xuXG5jb25zdCBTZWFyY2hJY29uID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIEBtZWRpYSAke0RldmljZXMuTGFwdG9wfSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcbmNvbnN0IE1lbnVJY29uID0gc3R5bGVkKFNlYXJjaEljb24pYGA7XG5cbmNvbnN0IEF1dGhJdGVtcyA9IHN0eWxlZChOYXZJdGVtKWBcbiAgZm9udC1zaXplOiAxcmVtO1xuICBkaXNwbGF5OiBub25lO1xuICBAbWVkaWEgJHtEZXZpY2VzLkxhcHRvcH0ge1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IG1vYmlsZU1lbnUgfSkge1xuICBjb25zdCB7IE1vYmlsZU1lbnVJc09wZW4sIHNldE1vYmlsZU1lbnVJc09wZW4gfSA9IG1vYmlsZU1lbnU7XG4gIGNvbnN0IFtTZWFyY2hJc09wZW4sIHNldFNlYXJjaElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgICBzZXRNb2JpbGVNZW51SXNPcGVuKCFNb2JpbGVNZW51SXNPcGVuKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEhlYWRlckVsPlxuXG5cbiAgICAgIDxNZW51SWNvbj5cbiAgICAgICAge01vYmlsZU1lbnVJc09wZW4gPyAoXG4gICAgICAgICAgPElvQ2xvc2VcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIuNXJlbVwiIH19XG4gICAgICAgICAgICBjb2xvcj17Q29sb3JzLlByaW1hcnl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8RmlNZW51XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvTWVudUljb24+XG5cblxuICAgICAgPENlbnRlcj5cbiAgICAgICAgPExvZ28gc3JjPVwiL2ltYWdlcy9sb2dpLnBuZ1wiIC8+XG4gICAgICAgIDxMb2dvVGV4dCBocmVmPVwiI1wiPkdSQVZJVFk8L0xvZ29UZXh0PlxuICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgIDxOYXY+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiI1wiPkV2ZW50IE1hcmtldHBsYWNlPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIiNcIj5Qcm9kdWN0IE1hbmFnbWVudDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxOYXZJdGVtIGhyZWY9XCIjXCI+QnJhbmRzPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPEJ1dHRvbj5Db25uZWN0IFdhbGxldDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L05hdj5cbiAgICAgIDwvQ2VudGVyPlxuXG5cblxuICAgICAge1NlYXJjaElzT3BlbiA/IChcbiAgICAgICAgPFNlYXJjaEJhck1vYlxuICAgICAgICAgIFNlYXJjaElzT3Blbj17U2VhcmNoSXNPcGVufVxuICAgICAgICAgIHNldFNlYXJjaElzT3Blbj17c2V0U2VhcmNoSXNPcGVufVxuXG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuXG5cbiAgICAgIDxTZWFyY2hJY29uPlxuICAgICAgICA8Q2dTZWFyY2hcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWFyY2hJc09wZW4oIVNlYXJjaElzT3Blbik7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VhcmNoSWNvbj5cblxuXG4gICAgPC9IZWFkZXJFbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJGaU1lbnUiLCJDZ1NlYXJjaCIsIklvQ2xvc2UiLCJDb2xvcnMiLCJEZXZpY2VzIiwiQnV0dG9uIiwiU2VhcmNoQmFyIiwiU2VhcmNoQmFyTW9iIiwidXNlU3RhdGUiLCJIZWFkZXJFbCIsImhlYWRlciIsIldoaXRlIiwiQmFja2dyb3VuZCIsIlByaW1hcnkiLCJDZW50ZXIiLCJkaXYiLCJMb2dvVGV4dCIsImEiLCJMb2dvIiwiaW1nIiwiTmF2IiwibmF2IiwiTGFwdG9wIiwiTmF2SXRlbSIsIlNlYXJjaEljb24iLCJzcGFuIiwiTWVudUljb24iLCJBdXRoSXRlbXMiLCJIZWFkZXIiLCJtb2JpbGVNZW51IiwiTW9iaWxlTWVudUlzT3BlbiIsInNldE1vYmlsZU1lbnVJc09wZW4iLCJTZWFyY2hJc09wZW4iLCJzZXRTZWFyY2hJc09wZW4iLCJ0b2dnbGVNZW51IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.js\n"));

/***/ })

});