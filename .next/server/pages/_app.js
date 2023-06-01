(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./public/footer/whiteLogo.svg
/* harmony default export */ const whiteLogo = ({"src":"/_next/static/media/whiteLogo.a66a96c8.svg","height":81,"width":319});
;// CONCATENATED MODULE: ./public/footer/linkedin.svg
/* harmony default export */ const linkedin = ({"src":"/_next/static/media/linkedin.35dd3e8b.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./public/footer/instagram.svg
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.48755e61.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./public/footer/twitter.svg
/* harmony default export */ const twitter = ({"src":"/_next/static/media/twitter.c2372838.svg","height":48,"width":48});
// EXTERNAL MODULE: ./components/ui/index.tsx + 7 modules
var ui = __webpack_require__(651);
;// CONCATENATED MODULE: ./components/Footer.tsx










function Footer() {
    const router = (0,router_.useRouter)();
    const path = router.pathname;
    const [pages, setPages] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (path === "/" || path === "/develop" || path === "/feed") {
            setPages(true);
        } else {
            setPages(false);
        }
    }, [
        path
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui/* Flex */.kC, {
        className: " justify-center lg:justify-between flex-col lg:flex-row bg-black lg:space-x-6 2xl:space-x-32 lg:pr-2 2xl:pr-6 sticky lg:fixed bottom-0 w-full lg:h-[12vh] h-[20vh]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Box */.xu, {
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: whiteLogo,
                    alt: "logo",
                    width: 318,
                    height: 81,
                    className: "max-w-[318px] max-h-[80px]"
                })
            }),
            pages && /*#__PURE__*/ jsx_runtime_.jsx(ui/* Flex */.kC, {
                className: "lg:pr-10 2xl:pr-20 lg:space-x-6 2xl:space-x-16",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui/* Flex */.kC, {
                    className: "pb-4 space-x-6 lg:pb-0 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: linkedin,
                            alt: "linkedin",
                            width: 31,
                            height: 31,
                            className: "w-[31px] h-[31px] md:w-[48px] md:h-[48px]"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: instagram,
                            alt: "logo",
                            width: 31,
                            height: 31,
                            className: "w-[31px] h-[31px] lg:w-[48px] lg:h-[48px]"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: twitter,
                            alt: "logo",
                            width: 31,
                            height: 31,
                            className: "w-[31px] h-[31px] lg:w-[48px] lg:h-[48px]"
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./public/navbar/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.8beee356.svg","height":81,"width":319});
;// CONCATENATED MODULE: external "react-icons/gi"
const gi_namespaceObject = require("react-icons/gi");
;// CONCATENATED MODULE: external "react-icons/rx"
const rx_namespaceObject = require("react-icons/rx");
;// CONCATENATED MODULE: ./components/Navbar.tsx








function Navbar() {
    const [openNavbarMenu, setopenNavbarMenu] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const navItems = [
        {
            key: "feed",
            value: "Feed"
        },
        {
            key: "blog",
            value: "Blog"
        },
        //{ key: "trends", value: "Trends" },
        //{ key: "caseStudies", value: "Case Studies" },
        {
            key: "develop",
            value: "Develop"
        }
    ];
    const path = router.pathname;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui/* Flex */.kC, {
                className: "justify-between pr-4 h-[12vh] lg:h-[10vh]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ui/* Box */.xu, {
                        onClick: ()=>router.push("/"),
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo,
                            alt: "logo"
                        })
                    }),
                    path !== "/develop" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Box */.xu, {
                                className: "justify-between hidden lg:flex lg:space-x-24 2xl:space-x-36",
                                children: path !== "/join" && /*#__PURE__*/ jsx_runtime_.jsx(ui/* Flex */.kC, {
                                    className: "px-4 lg:space-x-8 2xl:space-x-16",
                                    children: navItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(ui/* Text */.xv, {
                                            text: item.value,
                                            className: `cursor-pointer font-medium text-lg ${router.pathname.includes(item.key) ? "text-[#ED278F]" : "text-[#000]"}`,
                                            onClick: ()=>router.push(`/${item.key}`)
                                        }, item.key))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Box */.xu, {
                                className: " bg-[#ED278F] w-149 h-49 px-[1.4rem] py-[0.875rem] border-[3px] border-black rounded-[10px] drop-shadow-priceShadow cursor-pointer hidden lg:flex",
                                onClick: ()=>router.push("/join"),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui/* Text */.xv, {
                                    text: "Join For $0",
                                    className: "text-lg font-semibold text-white"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Box */.xu, {
                                className: "lg:hidden",
                                children: openNavbarMenu ? /*#__PURE__*/ jsx_runtime_.jsx(rx_namespaceObject.RxCross2, {
                                    width: 24,
                                    height: 24,
                                    className: "w-[30px] h-[20px]",
                                    onClick: ()=>setopenNavbarMenu(!openNavbarMenu)
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(gi_namespaceObject.GiHamburgerMenu, {
                                    width: 24,
                                    height: 24,
                                    className: "w-[30px] h-[20px]",
                                    onClick: ()=>setopenNavbarMenu(!openNavbarMenu)
                                })
                            })
                        ]
                    })
                ]
            }),
            openNavbarMenu && /*#__PURE__*/ jsx_runtime_.jsx(ui/* Box */.xu, {
                className: "pb-8 translate-y-3",
                children: path && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui/* Flex */.kC, {
                    className: "flex-col pr-4 ",
                    children: [
                        navItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(ui/* Text */.xv, {
                                text: item.value,
                                className: `cursor-pointer font-medium text-lg ${router.pathname.includes(item.key) ? "text-[#ED278F]" : "text-[#000]"}`,
                                onClick: ()=>{
                                    router.push(`/${item.key}`);
                                    setopenNavbarMenu(!openNavbarMenu);
                                }
                            }, item.key)),
                        /*#__PURE__*/ jsx_runtime_.jsx(ui/* Box */.xu, {
                            className: "bg-[#ED278F] px-[1.4rem] py-[0.5rem] border-[3px] border-black rounded-[10px] drop-shadow-priceShadow cursor-pointer",
                            onClick: ()=>{
                                router.push("/join");
                                setopenNavbarMenu(!openNavbarMenu);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui/* Text */.xv, {
                                text: "Join For $0",
                                className: "text-lg font-semibold text-white"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout.tsx





function Layout({ children  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui/* Box */.xu, {
        className: "flex flex-col h-full bg-yellow",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}


/***/ }),

/***/ 847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(663);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(715);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(590);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
react_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 819:
/***/ (() => {



/***/ }),

/***/ 663:
/***/ (() => {



/***/ }),

/***/ 715:
/***/ ((module) => {

"use strict";
module.exports = require("@material-tailwind/react");

/***/ }),

/***/ 918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,651], () => (__webpack_exec__(847)));
module.exports = __webpack_exports__;

})();