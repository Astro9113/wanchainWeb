"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getLange = function getLange() {
  var currentLang = navigator.language;
  if (!currentLang) {
    currentLang = navigator.browserLanguage;
  } else {
    currentLang = navigator.language;
  }
  return currentLang;
};
exports.default = getLange;

//# sourceMappingURL=getLange-compiled.js.map