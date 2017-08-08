'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = reducer;
exports.isLoaded = isLoaded;
exports.load = load;
exports.login = login;
exports.logout = logout;
exports.getUserFunc = getUserFunc;
exports.getClientWidthFunc = getClientWidthFunc;
exports.getNavButtonFunc = getNavButtonFunc;
exports.changeLangFunc = changeLangFunc;
exports.insertSubscribeFunc = insertSubscribeFunc;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD = 'redux-example/auth/LOAD';
var LOAD_SUCCESS = 'redux-example/auth/LOAD_SUCCESS';
var LOAD_FAIL = 'redux-example/auth/LOAD_FAIL';
var LOGIN = 'redux-example/auth/LOGIN';
var LOGIN_SUCCESS = 'redux-example/auth/LOGIN_SUCCESS';
var LOGIN_FAIL = 'redux-example/auth/LOGIN_FAIL';
var LOGOUT = 'redux-example/auth/LOGOUT';
var LOGOUT_SUCCESS = 'redux-example/auth/LOGOUT_SUCCESS';
var LOGOUT_FAIL = 'redux-example/auth/LOGOUT_FAIL';

var USERS = 'redux-example/auth/USERS';
var USERS_SUCCESS = 'redux-example/auth/LOGOUT_SUCCESS';
var USERS_FAIL = 'redux-example/auth/LOGOUT_FAIL';

var CLIENT_WIDTH = 'redux-example/auth/CLIENT_WIDTH';
var HOME_NAV = 'redux-example/auth/HOME_NAV';
var HOME_LANG = 'redux-example/auth/HOME_LANG';

var SUBSCRIBE = 'redux-example/auth/SUBSCRIBE';
var SUBSCRIBE_SUCCESS = 'redux-example/auth/SUBSCRIBE_SUCCESS';
var SUBSCRIBE_FAIL = 'redux-example/auth/SUBSCRIBE_FAIL';

var initialState = {
  loaded: false,
  navButton: false,
  language: 'zn'
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case LOAD:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case LOAD_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        user: action.result
      });
    case LOAD_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        error: action.error
      });
    case LOGIN:
      return (0, _extends3.default)({}, state, {
        loggingIn: true
      });
    case LOGIN_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loggingIn: false,
        user: action.result
      });
    case LOGIN_FAIL:
      return (0, _extends3.default)({}, state, {
        loggingIn: false,
        user: null,
        loginError: action.error
      });
    case LOGOUT:
      return (0, _extends3.default)({}, state, {
        loggingOut: true
      });
    case LOGOUT_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loggingOut: false,
        user: null
      });
    case LOGOUT_FAIL:
      return (0, _extends3.default)({}, state, {
        loggingOut: false,
        logoutError: action.error
      });
    case CLIENT_WIDTH:
      return (0, _extends3.default)({}, state, {
        clientWidth: action.reload
      });
    case HOME_NAV:
      return (0, _extends3.default)({}, state, {
        navButton: action.reload
      });
    case HOME_LANG:
      return (0, _extends3.default)({}, state, {
        language: action.reload
      });

    case SUBSCRIBE_SUCCESS:
      setTimeout(function () {
        global.dataFeedback.emit('onSubscribeComplete');
      }, 50);
      return (0, _extends3.default)({}, state, {
        subscribeState: action.result
      });

    default:
      return state;
  }
}

function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: function promise(client) {
      return client.get('/loadAuth');
    }
  };
}

function login(name) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: function promise(client) {
      return client.post('/login', {
        data: {
          name: name
        }
      });
    }
  };
}

function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: function promise(client) {
      return client.get('/logout');
    }
  };
}

function getUserFunc() {
  return {
    types: [USERS, USERS_SUCCESS, USERS_FAIL],
    promise: function promise(client) {
      return client.get('/users');
    }
  };
}

function getClientWidthFunc(data) {
  return {
    type: CLIENT_WIDTH,
    reload: data
  };
}

function getNavButtonFunc(data) {
  return {
    type: HOME_NAV,
    reload: data
  };
}

function changeLangFunc(active) {
  return {
    type: HOME_LANG,
    reload: active
  };
}

function insertSubscribeFunc(data) {
  return {
    types: [SUBSCRIBE, SUBSCRIBE_SUCCESS, SUBSCRIBE_FAIL],
    promise: function promise(client) {
      return client.post('/subscribe', {
        data: data
      });
    }
  };
}

//# sourceMappingURL=auth-compiled.js.map