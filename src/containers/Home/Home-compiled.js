'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _reactRouter = require('react-router');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = require('react-redux');

var _auth = require('redux/modules/auth');

var _currentDate = require('./utils/currentDate');

var _currentDate2 = _interopRequireDefault(_currentDate);

var _Div = require('./components/Div1/Div1');

var _Div2 = _interopRequireDefault(_Div);

var _Div3 = require('./components/Div2/Div2');

var _Div4 = _interopRequireDefault(_Div3);

var _Div5 = require('./components/Div3/Div3');

var _Div6 = _interopRequireDefault(_Div5);

var _Div7 = require('./components/Div4/Div4');

var _Div8 = _interopRequireDefault(_Div7);

var _Div9 = require('./components/Div5/Div5');

var _Div10 = _interopRequireDefault(_Div9);

var _Div11 = require('./components/Div6/Div6');

var _Div12 = _interopRequireDefault(_Div11);

var _Div13 = require('./components/Div7/Div7');

var _Div14 = _interopRequireDefault(_Div13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Home: {
        displayName: 'Home'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Home/Home.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Home = _wrapComponent('Home')(function (_Component) {
    (0, _inherits3.default)(Home, _Component);

    function Home(props) {
        (0, _classCallCheck3.default)(this, Home);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

        _this.state = {
            date: {
                days: '00', hours: '00', minutes: '00', seconds: '00',
                ref_days: 'DAY', ref_hours: 'HOUR', ref_minutes: 'MINUTE', ref_seconds: 'SECOND'
            },
            navButton: false
        };
        return _this;
    }

    (0, _createClass3.default)(Home, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // const width = document.documentElement.clientWidth;
            // console.log('style', width);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.interval = setInterval(function () {
                return _this2.tick();
            }, 1000);

            var width = document.documentElement.clientWidth;
            console.log('style', width);
            this.props.getClientWidthFunc(width);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.interval);
        }
    }, {
        key: 'tick',
        value: function tick() {
            // difference of dates
            var difference = new Date('09/06/2017 20:00:00') - (0, _currentDate2.default)(+10);

            // basic math variables
            var _second = 1000;
            var _minute = _second * 60;
            var _hour = _minute * 60;
            var _day = _hour * 24;

            // calculate dates
            var days = Math.floor(difference / _day);
            var hours = Math.floor(difference % _day / _hour);
            var minutes = Math.floor(difference % _hour / _minute);
            var seconds = Math.floor(difference % _minute / _second);

            // fix dates so that it will show two digets
            days = String(days).length >= 2 ? days : '0' + days;
            hours = String(hours).length >= 2 ? hours : '0' + hours;
            minutes = String(minutes).length >= 2 ? minutes : '0' + minutes;
            seconds = String(seconds).length >= 2 ? seconds : '0' + seconds;

            // based on the date change the refrence wording
            var refDays = days === 1 ? 'DAY' : 'DAYS';
            var refHours = hours === 1 ? 'HOUR' : 'HOURS';
            var refMinutes = minutes === 1 ? 'MINUTE' : 'MINUTES';
            var refSeconds = seconds === 1 ? 'SECOND' : 'SECONDS';

            this.setState(function () {
                return {
                    date: {
                        days: days, hours: hours, minutes: minutes, seconds: seconds,
                        ref_days: refDays, ref_hours: refHours, ref_minutes: refMinutes, ref_seconds: refSeconds
                    }
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var styles = require('./Home.scss');
            var logo = require('./image/logo.png');
            var nav = require('./image/nav1.png');
            var github = require('./image/github.png');
            return _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                    'div',
                    { className: styles.homeDiv },
                    _react3.default.createElement(_reactHelmet2.default, { title: 'Home' }),
                    _react3.default.createElement(
                        'div',
                        { className: styles.homeHeader + ' container' },
                        _react3.default.createElement(
                            _reactRouter.IndexLink,
                            { to: '/' },
                            _react3.default.createElement('img', { src: logo })
                        ),
                        _react3.default.createElement('img', { src: nav, className: styles.navbarImg, id: 'homeNav' }),
                        _react3.default.createElement(
                            'div',
                            { className: styles.homeHeaderUl, id: 'navbar-menu' },
                            _react3.default.createElement(
                                'ul',
                                null,
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    _react3.default.createElement(
                                        _reactRouter.IndexLink,
                                        { to: '/' },
                                        '\u9996\u9875'
                                    )
                                ),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    _react3.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/crowdsale' },
                                        'ICO'
                                    )
                                ),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    _react3.default.createElement(
                                        'a',
                                        { href: '/files/Wanchain-Whitepaper-CH-version.pdf', target: '_blank' },
                                        '\u767D\u76AE\u4E66'
                                    )
                                ),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    _react3.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/about' },
                                        '\u5173\u4E8E'
                                    )
                                ),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    _react3.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/' },
                                        '\u535A\u5BA2'
                                    )
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: styles.homeGit },
                            _react3.default.createElement(
                                'a',
                                { href: 'https://github.com/wanchain', target: '_blank' },
                                _react3.default.createElement('img', { src: github })
                            ),
                            _react3.default.createElement(
                                'a',
                                null,
                                '\u4E2D\u6587'
                            ),
                            ' | ',
                            _react3.default.createElement(
                                'a',
                                null,
                                'English'
                            )
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'container' },
                        _react3.default.createElement(
                            'div',
                            { className: styles.homeHeaderBodyDiv1 },
                            _react3.default.createElement(
                                'div',
                                { className: styles.scrolltext },
                                _react3.default.createElement(
                                    'div',
                                    { className: styles.quotation, id: 'quotation' },
                                    _react3.default.createElement(
                                        'ul',
                                        null,
                                        _react3.default.createElement(
                                            'li',
                                            null,
                                            _react3.default.createElement(
                                                'h2',
                                                null,
                                                '\u5206\u5E03\u5F0F\u672A\u6765"',
                                                _react3.default.createElement(
                                                    'small',
                                                    null,
                                                    '\u94F6\u884C'
                                                ),
                                                '"'
                                            )
                                        ),
                                        _react3.default.createElement(
                                            'li',
                                            null,
                                            _react3.default.createElement(
                                                'h2',
                                                null,
                                                '\u6570\u5B57\u7ECF\u6D4E\u8D85\u7EA7"',
                                                _react3.default.createElement(
                                                    'small',
                                                    null,
                                                    '\u91D1\u878D\u5E02\u573A'
                                                ),
                                                '"'
                                            )
                                        ),
                                        _react3.default.createElement(
                                            'li',
                                            null,
                                            _react3.default.createElement(
                                                'h2',
                                                null,
                                                '\u533A\u5757\u94FE\u7684"',
                                                _react3.default.createElement(
                                                    'small',
                                                    null,
                                                    '\u4E92\u8054\u7F51'
                                                ),
                                                '"'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react3.default.createElement(
                                'p',
                                null,
                                '\u8FDE\u63A5\u4E0D\u540C\u6570\u5B57\u8D44\u4EA7\uFF0C\u8FDE\u63A5\u73B0\u5728\u4E0E\u672A\u6765',
                                _react3.default.createElement(
                                    'small',
                                    null,
                                    '\u4E07\u7EF4\u94FE\u65E8\u5728\u5EFA\u7ACB\u4E00\u4E2A\u57FA\u7840\u8BBE\u65BD\uFF0C\u4EE5\u53BB\u4E2D\u5FC3\u5316\u7684\u65B9\u5F0F\u5B8C\u6210\u4E0D\u540C\u533A\u5757\u94FE\u7F51\u7EDC\u7684\u8FDE\u63A5\u53CA\u4EF7\u503C\u7684\u4EA4\u6362'
                                )
                            ),
                            _react3.default.createElement(
                                'ul',
                                { className: styles.countdown },
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    _react3.default.createElement(
                                        'span',
                                        null,
                                        this.state.date.days
                                    ),
                                    _react3.default.createElement(
                                        'small',
                                        null,
                                        ':'
                                    ),
                                    _react3.default.createElement(
                                        'p',
                                        null,
                                        this.state.date.ref_days
                                    )
                                ),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    _react3.default.createElement(
                                        'span',
                                        null,
                                        this.state.date.hours
                                    ),
                                    _react3.default.createElement(
                                        'small',
                                        null,
                                        ':'
                                    ),
                                    _react3.default.createElement(
                                        'p',
                                        null,
                                        this.state.date.ref_hours
                                    )
                                ),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    _react3.default.createElement(
                                        'span',
                                        null,
                                        this.state.date.minutes
                                    ),
                                    _react3.default.createElement(
                                        'small',
                                        null,
                                        ':'
                                    ),
                                    _react3.default.createElement(
                                        'p',
                                        null,
                                        this.state.date.ref_minutes
                                    )
                                ),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    _react3.default.createElement(
                                        'span',
                                        null,
                                        this.state.date.seconds
                                    ),
                                    _react3.default.createElement(
                                        'small',
                                        { style: { display: 'none' } },
                                        ':'
                                    ),
                                    _react3.default.createElement(
                                        'p',
                                        null,
                                        this.state.date.ref_seconds
                                    )
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: styles.homeHeaderBodyDiv2 },
                            _react3.default.createElement(
                                'a',
                                { className: styles['home-submit-button'] + ' btn', href: '/files/Wanchain-Whitepaper-CH-version.pdf', target: '_blank' },
                                '\u767D\u76AE\u4E66'
                            ),
                            _react3.default.createElement(
                                _reactRouter.Link,
                                { to: '/crowdsale' },
                                _react3.default.createElement(
                                    'a',
                                    { className: styles['home-submit-button2'] + ' btn' },
                                    'ICO'
                                )
                            )
                        )
                    )
                ),
                _react3.default.createElement(_Div2.default, null),
                _react3.default.createElement(_Div4.default, null),
                _react3.default.createElement(_Div6.default, null),
                _react3.default.createElement(_Div8.default, null),
                _react3.default.createElement(_Div10.default, null),
                _react3.default.createElement(_Div12.default, null),
                _react3.default.createElement(_Div14.default, null)
            );
        }
    }]);
    return Home;
}(_react2.Component));

exports.default = Home;

//# sourceMappingURL=Home-compiled.js.map