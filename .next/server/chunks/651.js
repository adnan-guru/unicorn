"use strict";
exports.id = 651;
exports.ids = [651];
exports.modules = {

/***/ 651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xu": () => (/* reexport */ ui_Box),
  "zx": () => (/* reexport */ ui_Button),
  "kC": () => (/* reexport */ ui_Flex),
  "Ee": () => (/* reexport */ ui_Image),
  "xv": () => (/* reexport */ ui_Text)
});

// UNUSED EXPORTS: Container, Footer

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/ui/Container.tsx


const Container = ({ children , className  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: `max-w-7xl mx-auto ${className}`,
        children: children
    });
};
/* harmony default export */ const ui_Container = ((/* unused pure expression or super */ null && (Container)));

;// CONCATENATED MODULE: ./components/ui/Image.tsx


const Image = ({ src , alt , width , height , h , className , w  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("img", {
        src: src,
        alt: alt,
        width: w || width,
        height: h || height,
        className: className
    });
};
/* harmony default export */ const ui_Image = (Image);

;// CONCATENATED MODULE: ./components/ui/Text.tsx


const Text = ({ text , className , onClick , styles  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: `font-[Rubik] ${className}`,
        onClick: onClick,
        style: styles,
        children: text
    });
};
/* harmony default export */ const ui_Text = (Text);

;// CONCATENATED MODULE: ./components/ui/Box.tsx


const Box = ({ children , className , style , onClick , onMouseOver , onMouseLeave , id  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        style: style,
        onClick: onClick,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave,
        id: id,
        children: children
    });
};
/* harmony default export */ const ui_Box = (Box);

;// CONCATENATED MODULE: ./components/ui/Flex.tsx


const Flex = ({ children , className , onClick , styles  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `flex items-center ${className}`,
        style: styles,
        onClick: onClick,
        children: children
    });
};
/* harmony default export */ const ui_Flex = (Flex);

;// CONCATENATED MODULE: ./components/ui/Button.tsx


const Button = ({ children , className , onClick  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: className,
        onClick: onClick,
        children: children
    });
};
/* harmony default export */ const ui_Button = (Button);

;// CONCATENATED MODULE: ./components/ui/Footer.tsx


const Footer = ({ children , className  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: `fixed bottom-4 ${className}`,
        children: children
    });
};
/* harmony default export */ const ui_Footer = ((/* unused pure expression or super */ null && (Footer)));

;// CONCATENATED MODULE: ./components/ui/index.tsx










/***/ })

};
;