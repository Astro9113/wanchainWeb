'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _multireducer = require('multireducer');

var _multireducer2 = _interopRequireDefault(_multireducer);

var _reactRouterRedux = require('react-router-redux');

var _reduxAsyncConnect = require('redux-async-connect');

var _violetPaginator = require('violet-paginator');

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _warning = require('./warning');

var _warning2 = _interopRequireDefault(_warning);

var _counter = require('./counter');

var _counter2 = _interopRequireDefault(_counter);

var _reduxForm = require('redux-form');

var _info = require('./info');

var _info2 = _interopRequireDefault(_info);

var _widgets = require('./widgets');

var _widgets2 = _interopRequireDefault(_widgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  reduxAsyncConnect: _reduxAsyncConnect.reducer,
  auth: _auth2.default,
  warning: _warning2.default,
  form: _reduxForm.reducer,
  multireducer: (0, _multireducer2.default)({
    counter1: _counter2.default,
    counter2: _counter2.default,
    counter3: _counter2.default
  }),
  info: _info2.default,
  pagination: _violetPaginator.pagination,
  widgets: _widgets2.default
});

//# sourceMappingURL=reducer-compiled.js.map