var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequire94c2;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},e.parcelRequire94c2=t),t.register("jCLg5",(function(e,n){function r(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var t=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,o;return n=e,(t=[{key:"adivinar",value:function(e){return 4==e.length?"Ganaste!":"Sigue intentando!"}}])&&r(n.prototype,t),o&&r(n,o),e}();e.exports.default=t}));var o,a=(o=t("jCLg5"))&&o.__esModule?o:{default:o};var i=document.querySelector("#numero"),u=document.querySelector("#form-adivinar"),l=document.querySelector("#resultado");u.addEventListener("submit",(function(e){e.preventDefault();Math.floor(Math.random()*n);var n,r=new a.default(i.value).adivinar(i.value);l.innerHTML=r}));
//# sourceMappingURL=codebreaker.539d7e00.js.map