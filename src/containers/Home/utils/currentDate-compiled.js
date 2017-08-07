"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var currentDate = function currentDate(offset) {
  // get client's current date
  var date = new Date();

  // turn date to utc
  var utc = date.getTime() + date.getTimezoneOffset() * 60000;

  // set new Date object
  return new Date(utc + 3600000 * offset);
};

exports.default = currentDate;

//# sourceMappingURL=currentDate-compiled.js.map