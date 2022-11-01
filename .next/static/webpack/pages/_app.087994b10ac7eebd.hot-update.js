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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Theme */ \"./src/components/Theme.js\");\n/* harmony import */ var _styled_Button_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled/Button.styled */ \"./src/components/styled/Button.styled.js\");\n/* harmony import */ var _Header_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/SearchBar */ \"./src/components/Header/SearchBar.js\");\n/* harmony import */ var _Header_MobileSearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header/MobileSearchBar */ \"./src/components/Header/MobileSearchBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/abhay/Desktop/nft/nft-reset/src/components/Header.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar HeaderEl = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].header.withConfig({\n  displayName: \"Header__HeaderEl\",\n  componentId: \"sc-1c4nsj4-0\"\n})([\"z-index:10;display:flex;color:\", \";width:100%;align-items:center;height:100%;gap:1rem;padding:1rem 1.5rem;top:0;background-color:\", \";box-shadow:0px 0px 3rem \", \";position:sticky;svg{font-size:2rem;cursor:pointer;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.White, _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.Background, _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.Primary);\n_c = HeaderEl;\nvar Center = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Header__Center\",\n  componentId: \"sc-1c4nsj4-1\"\n})([\"flex:1;display:flex;align-items:center;gap:0.5rem;\"]);\n_c2 = Center;\nvar LogoText = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n  displayName: \"Header__LogoText\",\n  componentId: \"sc-1c4nsj4-2\"\n})([\"font-size:1.2rem;font-weight:800;color:\", \";display:none;\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.White);\n_c3 = LogoText;\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img.withConfig({\n  displayName: \"Header__Logo\",\n  componentId: \"sc-1c4nsj4-3\"\n})([\"width:75px;padding-right:1rem;\"]);\n_c4 = Logo;\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].nav.withConfig({\n  displayName: \"Header__Nav\",\n  componentId: \"sc-1c4nsj4-4\"\n})([\"margin-left:auto;padding-right:1rem;display:none;ul{display:flex;align-items:center;list-style:none;gap:3rem;}@media \", \"{display:block;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Devices.Laptop);\n_c5 = Nav;\nvar NavItem = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n  displayName: \"Header__NavItem\",\n  componentId: \"sc-1c4nsj4-5\"\n})([\"font-size:1rem;font-weight:400;\"]);\n_c6 = NavItem;\nvar SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].span.withConfig({\n  displayName: \"Header__SearchIcon\",\n  componentId: \"sc-1c4nsj4-6\"\n})([\"display:flex;align-items:center;justify-content:center;@media \", \"{display:none;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Devices.Laptop);\n_c7 = SearchIcon;\nvar MenuIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(SearchIcon).withConfig({\n  displayName: \"Header__MenuIcon\",\n  componentId: \"sc-1c4nsj4-7\"\n})([\"\"]);\n_c8 = MenuIcon;\nvar AuthItems = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(NavItem).withConfig({\n  displayName: \"Header__AuthItems\",\n  componentId: \"sc-1c4nsj4-8\"\n})([\"font-size:1rem;display:none;@media \", \"{display:inherit;}\"], _Theme__WEBPACK_IMPORTED_MODULE_0__.Devices.Laptop);\nfunction Header(_ref) {\n  _s();\n\n  var mobileMenu = _ref.mobileMenu;\n  var MobileMenuIsOpen = mobileMenu.MobileMenuIsOpen,\n      setMobileMenuIsOpen = mobileMenu.setMobileMenuIsOpen;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      SearchIsOpen = _useState[0],\n      setSearchIsOpen = _useState[1];\n\n  function toggleMenu() {\n    setMobileMenuIsOpen(!MobileMenuIsOpen);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeaderEl, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MenuIcon, {\n      children: MobileMenuIsOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoClose, {\n        style: {\n          fontSize: \"2.5rem\"\n        },\n        color: _Theme__WEBPACK_IMPORTED_MODULE_0__.Colors.Primary,\n        onClick: function onClick() {\n          toggleMenu();\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiMenu, {\n        onClick: function onClick() {\n          toggleMenu();\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Center, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Logo, {\n        src: \"/images/logi.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LogoText, {\n        href: \"#\",\n        children: \"GRAVITY\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Nav, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavItem, {\n              href: \"https://event-ticket-marketplace.vercel.app/\",\n              children: \"Event Marketplace\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavItem, {\n              href: \"#\",\n              children: \"Warranty Management\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 137,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_Button_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n              children: \"Connect Wallet\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }, this), SearchIsOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_MobileSearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      SearchIsOpen: SearchIsOpen,\n      setSearchIsOpen: setSearchIsOpen\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 9\n    }, this) : \"\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SearchIcon, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_9__.CgSearch, {\n        onClick: function onClick() {\n          setSearchIsOpen(!SearchIsOpen);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 105,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"RO7KGB4m4fpa024M/FlvbZTvb+c=\");\n\n_c9 = Header;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"HeaderEl\");\n$RefreshReg$(_c2, \"Center\");\n$RefreshReg$(_c3, \"LogoText\");\n$RefreshReg$(_c4, \"Logo\");\n$RefreshReg$(_c5, \"Nav\");\n$RefreshReg$(_c6, \"NavItem\");\n$RefreshReg$(_c7, \"SearchIcon\");\n$RefreshReg$(_c8, \"MenuIcon\");\n$RefreshReg$(_c9, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFPRTtZQUFBLHVCQUNFLDhEQUFDLDZEQUFEO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1VBREY7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQVBGO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFKRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUF0QkYsRUEyQ0dGLFlBQVksZ0JBQ1gsOERBQUMsK0RBQUQ7TUFDRSxZQUFZLEVBQUVBLFlBRGhCO01BRUUsZUFBZSxFQUFFQztJQUZuQjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRFcsR0FPWCxFQWxESixlQXNERSw4REFBQyxVQUFEO01BQUEsdUJBQ0UsOERBQUMsb0RBQUQ7UUFDRSxPQUFPLEVBQUUsbUJBQU07VUFDYkEsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBZjtRQUNEO01BSEg7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUF0REY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFrRUQ7O0dBMUV1Qko7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcz8zMzJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBGaU1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IENnU2VhcmNoIH0gZnJvbSBcInJlYWN0LWljb25zL2NnXCI7XG5pbXBvcnQgeyBJb0Nsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuaW1wb3J0IHsgQ29sb3JzLCBEZXZpY2VzIH0gZnJvbSBcIi4vVGhlbWVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vc3R5bGVkL0J1dHRvbi5zdHlsZWRcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4vSGVhZGVyL1NlYXJjaEJhclwiO1xuaW1wb3J0IFNlYXJjaEJhck1vYiBmcm9tIFwiLi9IZWFkZXIvTW9iaWxlU2VhcmNoQmFyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIZWFkZXJFbCA9IHN0eWxlZC5oZWFkZXJgXG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogJHtDb2xvcnMuV2hpdGV9O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JzLkJhY2tncm91bmR9O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNyZW0gJHtDb2xvcnMuUHJpbWFyeX07XG4gIFxuXG4gIHBvc2l0aW9uOiBzdGlja3k7XG5cbiAgc3ZnIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbmA7XG5cbmNvbnN0IExvZ29UZXh0ID0gc3R5bGVkLmFgXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogJHtDb2xvcnMuV2hpdGV9O1xuICBkaXNwbGF5Om5vbmU7XG5cbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNzVweDtcbiAgXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG5cbmA7XG5cbmNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBkaXNwbGF5OiBub25lO1xuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBnYXA6IDNyZW07XG4gIH1cblxuICBAbWVkaWEgJHtEZXZpY2VzLkxhcHRvcH0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmFgXG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbmA7XG5cbmNvbnN0IFNlYXJjaEljb24gPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgQG1lZGlhICR7RGV2aWNlcy5MYXB0b3B9IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuY29uc3QgTWVudUljb24gPSBzdHlsZWQoU2VhcmNoSWNvbilgYDtcblxuY29uc3QgQXV0aEl0ZW1zID0gc3R5bGVkKE5hdkl0ZW0pYFxuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IG5vbmU7XG4gIEBtZWRpYSAke0RldmljZXMuTGFwdG9wfSB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgbW9iaWxlTWVudSB9KSB7XG4gIGNvbnN0IHsgTW9iaWxlTWVudUlzT3Blbiwgc2V0TW9iaWxlTWVudUlzT3BlbiB9ID0gbW9iaWxlTWVudTtcbiAgY29uc3QgW1NlYXJjaElzT3Blbiwgc2V0U2VhcmNoSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xuICAgIHNldE1vYmlsZU1lbnVJc09wZW4oIU1vYmlsZU1lbnVJc09wZW4pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZGVyRWw+XG5cblxuICAgICAgPE1lbnVJY29uPlxuICAgICAgICB7TW9iaWxlTWVudUlzT3BlbiA/IChcbiAgICAgICAgICA8SW9DbG9zZVxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMi41cmVtXCIgfX1cbiAgICAgICAgICAgIGNvbG9yPXtDb2xvcnMuUHJpbWFyeX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxGaU1lbnVcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9NZW51SWNvbj5cblxuXG4gICAgICA8Q2VudGVyPlxuICAgICAgICA8TG9nbyBzcmM9XCIvaW1hZ2VzL2xvZ2kucG5nXCIgLz5cbiAgICAgICAgPExvZ29UZXh0IGhyZWY9XCIjXCI+R1JBVklUWTwvTG9nb1RleHQ+XG4gICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgPE5hdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxOYXZJdGVtIGhyZWY9XCJodHRwczovL2V2ZW50LXRpY2tldC1tYXJrZXRwbGFjZS52ZXJjZWwuYXBwL1wiPkV2ZW50IE1hcmtldHBsYWNlPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIiNcIj5XYXJyYW50eSBNYW5hZ2VtZW50PC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPEJ1dHRvbj5Db25uZWN0IFdhbGxldDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L05hdj5cbiAgICAgIDwvQ2VudGVyPlxuXG5cblxuICAgICAge1NlYXJjaElzT3BlbiA/IChcbiAgICAgICAgPFNlYXJjaEJhck1vYlxuICAgICAgICAgIFNlYXJjaElzT3Blbj17U2VhcmNoSXNPcGVufVxuICAgICAgICAgIHNldFNlYXJjaElzT3Blbj17c2V0U2VhcmNoSXNPcGVufVxuXG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuXG5cbiAgICAgIDxTZWFyY2hJY29uPlxuICAgICAgICA8Q2dTZWFyY2hcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWFyY2hJc09wZW4oIVNlYXJjaElzT3Blbik7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VhcmNoSWNvbj5cblxuXG4gICAgPC9IZWFkZXJFbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJGaU1lbnUiLCJDZ1NlYXJjaCIsIklvQ2xvc2UiLCJDb2xvcnMiLCJEZXZpY2VzIiwiQnV0dG9uIiwiU2VhcmNoQmFyIiwiU2VhcmNoQmFyTW9iIiwidXNlU3RhdGUiLCJIZWFkZXJFbCIsImhlYWRlciIsIldoaXRlIiwiQmFja2dyb3VuZCIsIlByaW1hcnkiLCJDZW50ZXIiLCJkaXYiLCJMb2dvVGV4dCIsImEiLCJMb2dvIiwiaW1nIiwiTmF2IiwibmF2IiwiTGFwdG9wIiwiTmF2SXRlbSIsIlNlYXJjaEljb24iLCJzcGFuIiwiTWVudUljb24iLCJBdXRoSXRlbXMiLCJIZWFkZXIiLCJtb2JpbGVNZW51IiwiTW9iaWxlTWVudUlzT3BlbiIsInNldE1vYmlsZU1lbnVJc09wZW4iLCJTZWFyY2hJc09wZW4iLCJzZXRTZWFyY2hJc09wZW4iLCJ0b2dnbGVNZW51IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.js\n"));

/***/ })

});