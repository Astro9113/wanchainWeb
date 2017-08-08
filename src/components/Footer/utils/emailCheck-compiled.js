'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var emailCheck = function emailCheck(email) {
  var regu = '^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$';
  var re = new RegExp(regu);
  if (email.search(re) !== -1) {
    return true;
  } else if (email.search(re) === -1) {
    return false;
  }
};

exports.default = emailCheck;

//# sourceMappingURL=emailCheck-compiled.js.map