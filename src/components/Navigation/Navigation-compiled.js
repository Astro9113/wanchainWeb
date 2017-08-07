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

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Navigation: {
        displayName: 'Navigation'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/components/Navigation/Navigation.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

// import cookie from 'react-cookie';

var Navigation = _wrapComponent('Navigation')(function (_Component) {
    (0, _inherits3.default)(Navigation, _Component);

    function Navigation() {
        (0, _classCallCheck3.default)(this, Navigation);
        return (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).apply(this, arguments));
    }

    (0, _createClass3.default)(Navigation, [{
        key: 'render',

        // static propTypes = {
        //     changeLanguage: PropTypes.func.isRequired,
        //     // language: PropTypes.string,
        //
        //     login: PropTypes.func,
        //     users: PropTypes.func,
        // };

        value: function render() {
            // const {language} = this.props;
            var styles = require('./Navigation.scss');

            var logo = require('./image/logo2.png');
            // const nav = require('./image/nav2.png');
            var github = require('./image/github2.png');

            return _react3.default.createElement(
                'div',
                { className: styles.navRoot },
                _react3.default.createElement(
                    'nav',
                    { className: styles.navHeader + ' container' },
                    _react3.default.createElement(
                        _reactRouter.IndexLink,
                        { to: '/' },
                        _react3.default.createElement('img', { src: logo })
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: styles.navHeaderUl, id: 'navbar-menu' },
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
                        { className: styles.navGit },
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
                )
            );
        }
    }]);
    return Navigation;
}(_react2.Component));

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeLanguage: (step) => {
//             dispatch(changeLanguage(step));
//         },
//         login: () => {
//             dispatch(login());
//         },
//         users: () => {
//             dispatch(users());
//         },
//     };
// };
//
// const mapStateToProps = (state) => ({
//     language : state.lang.language,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Navigation)


exports.default = Navigation;

//# sourceMappingURL=Navigation-compiled.js.map