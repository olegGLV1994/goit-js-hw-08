function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function g(t,e,n){var o,r,i,u,a,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,i=r;return o=r=void 0,c=e,u=t.apply(i,n)}function S(t){return c=t,a=setTimeout(O,e),l?b(t):u}function j(t){var n=t-f;return void 0===f||n>=e||n<0||s&&t-c>=i}function O(){var t=v();if(j(t))return T(t);a=setTimeout(O,function(t){var n=e-(t-f);return s?p(n,i-(t-c)):n}(t))}function T(t){return a=void 0,g&&o?b(t):(o=r=void 0,u)}function h(){var t=v(),n=j(t);if(o=arguments,r=this,f=t,n){if(void 0===a)return S(f);if(s)return a=setTimeout(O,e),b(f)}return void 0===a&&(a=setTimeout(O,e)),u}return e=y(e)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},h.flush=function(){return void 0===a?u:T(v())},h}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};const b=document.querySelector("form"),S=document.querySelector("input"),j=document.querySelector("textarea");b.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset();const e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(e)})),b.addEventListener("input",t(e)((function(t){O[t.target.name]=t.target.value;const e=JSON.stringify(O);localStorage.setItem("feedback-form-state",e)}),500));const O={};!function(){const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(S.value=t.email||"",j.value=t.message||"")}();
//# sourceMappingURL=03-feedback.4c5887df.js.map