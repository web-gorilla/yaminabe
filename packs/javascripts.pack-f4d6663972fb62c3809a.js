!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=6)}([,function(n,t,e){var r=e(7);r.keys().forEach(r)},,,,,function(n,t,e){"use strict";e.r(t);e(1)},function(n,t,e){var r={"./index.js":1,"./rainbow.js":8};function o(n){var t=a(n);return e(t)}function a(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=a,n.exports=o,o.id=7},function(n,t){function e(){for(var n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split(""),t=0,e=n.length;t<e;t++)switch(n[t]){case"x":n[t]=Math.floor(16*Math.random()).toString(16);break;case"y":n[t]=(Math.floor(4*Math.random())+8).toString(16)}return n.join("")}function r(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=360/n,o=e+r*t;return o%=360,one_radian=o%60/60,o<60?"rgb(255, ".concat(255*one_radian,", 0)"):o<120?"rgb(".concat(255-255*one_radian,", 255, 0)"):o<180?"rgb(0, 255, ".concat(255*one_radian,")"):o<240?"rgb(0, ".concat(255-255*one_radian,", 255)"):o<300?"rgb(".concat(255*one_radian,", 0, 255)"):"rgb(255, 0, ".concat(255-255*one_radian,")")}$.fn.rainbow=function(){params={one_cycle_length:16,glow:2,animation_speed:70,object:this,text:$.trim(this.text()),uuid:e()};for(var n=[],t=new Array(params.one_cycle_length),o=0;o<params.one_cycle_length;o++)t[o]=r(params.one_cycle_length,o);params.text.split("").forEach((function(e,r){var o=t[r%params.one_cycle_length];n.push($("<span></span>").attr("id","".concat(params.uuid,"-").concat(r)).text(e).css("color",o))}));var a=0;return setInterval((function(){n.forEach((function(n,e){var r=t[(e+a)%params.one_cycle_length];n.css("color",r),params.glow>0&&n.css("text-shadow","0 0 ".concat(params.glow,"px ").concat(r))})),a=(a+1)%params.one_cycle_length}),params.animation_speed),this.html(n),this}}]);