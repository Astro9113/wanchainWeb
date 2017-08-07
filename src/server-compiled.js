'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _httpProxy = require('http-proxy');

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _create = require('./redux/create');

var _create2 = _interopRequireDefault(_create);

var _ApiClient = require('./helpers/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Html = require('./helpers/Html');

var _Html2 = _interopRequireDefault(_Html);

var _prettyError = require('pretty-error');

var _prettyError2 = _interopRequireDefault(_prettyError);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _reduxAsyncConnect = require('redux-async-connect');

var _createMemoryHistory = require('react-router/lib/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactRedux = require('react-redux');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mysite = 'D:/zsunData/myPro/react-redux-universal-hot-example/src/cert/wanchain.org.key'; //key
var mysiteCrt = 'D:/zsunData/myPro/react-redux-universal-hot-example/src/cert/3bb55a3526ededcc.crt'; //
var gd1 = 'D:/zsunData/myPro/react-redux-universal-hot-example/src/cert/gd_bundle-g2-g1.crt';

var targetUrl = 'http://' + _config2.default.apiHost + ':' + _config2.default.apiPort;
var pretty = new _prettyError2.default();
var httpapp = new _express2.default();
var httpserver = new _http2.default.Server(httpapp);

httpapp.use('*', function (req, res) {
  console.log("HTTP: " + req.url);
  return res.redirect("https://" + req.headers["host"] + req.url);
});
httpapp.listen(80);

var app = new _express2.default();

// const server = new http.Server(app);
var server = _https2.default.createServer({
  key: _fs2.default.readFileSync(mysite),
  cert: _fs2.default.readFileSync(mysiteCrt),
  ca: [_fs2.default.readFileSync(gd1)],
  requestCert: false,
  rejectUnauthorized: false
}, app);

var proxy = _httpProxy2.default.createProxyServer({
  target: targetUrl,
  ws: true
});

app.use((0, _compression2.default)());
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '..', 'static', 'favicon.ico')));

app.use(_express2.default.static(_path2.default.join(__dirname, '..', 'static')));

// Proxy to API server
app.use('/api', function (req, res) {
  proxy.web(req, res, { target: targetUrl });
});

app.use('/ws', function (req, res) {
  proxy.web(req, res, { target: targetUrl + '/ws' });
});

server.on('upgrade', function (req, socket, head) {
  proxy.ws(req, socket, head);
});

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', function (error, req, res) {
  var json = void 0;
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }

  json = { error: 'proxy_error', reason: error.message };
  res.end((0, _stringify2.default)(json));
});

app.use(function (req, res) {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }
  var client = new _ApiClient2.default(req);
  var memoryHistory = (0, _createMemoryHistory2.default)(req.originalUrl);
  var store = (0, _create2.default)(memoryHistory, client);
  var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);

  function hydrateOnClient() {
    res.send('<!doctype html>\n' + _server2.default.renderToString(_react2.default.createElement(_Html2.default, { assets: webpackIsomorphicTools.assets(), store: store })));
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  (0, _reactRouter.match)({ history: history, routes: (0, _routes2.default)(store), location: req.originalUrl }, function (error, redirectLocation, renderProps) {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      (0, _reduxAsyncConnect.loadOnServer)((0, _extends3.default)({}, renderProps, { store: store, helpers: { client: client } })).then(function () {
        var component = _react2.default.createElement(
          _reactRedux.Provider,
          { store: store, key: 'provider' },
          _react2.default.createElement(_reduxAsyncConnect.ReduxAsyncConnect, renderProps)
        );

        res.status(200);

        global.navigator = { userAgent: req.headers['user-agent'] };

        res.send('<!doctype html>\n' + _server2.default.renderToString(_react2.default.createElement(_Html2.default, { assets: webpackIsomorphicTools.assets(), component: component, store: store })));
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

if (_config2.default.port) {
  server.listen(_config2.default.port, function (err) {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> ✅  %s is running, talking to API server on %s.', _config2.default.app.title, _config2.default.apiPort);
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', _config2.default.host, _config2.default.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}

//# sourceMappingURL=server-compiled.js.map