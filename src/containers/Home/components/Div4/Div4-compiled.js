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

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Div4: {
        displayName: 'Div4'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Home/components/Div4/Div4.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Div4 = _wrapComponent('Div4')(function (_React$Component) {
    (0, _inherits3.default)(Div4, _React$Component);

    function Div4() {
        (0, _classCallCheck3.default)(this, Div4);
        return (0, _possibleConstructorReturn3.default)(this, (Div4.__proto__ || (0, _getPrototypeOf2.default)(Div4)).apply(this, arguments));
    }

    (0, _createClass3.default)(Div4, [{
        key: 'render',


        // static propTypes = {
        //     language: PropTypes.string,
        //     clientWidth: PropTypes.number,
        // };

        value: function render() {
            // const {language, clientWidth} = this.props;
            var part1 = require('../../image/part1.png');
            var part2 = require('../../image/part2.png');
            var part3 = require('../../image/part3.png');
            var part4 = require('../../image/part4.png');

            var one = require('../../image/one.png');
            var two = require('../../image/two.png');
            var three = require('../../image/three.png');
            var four = require('../../image/four.png');

            var styles = require('./Div4.scss');
            return _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                    'div',
                    { className: styles.officalModule3 },
                    _react3.default.createElement(
                        'div',
                        { className: 'container' },
                        _react3.default.createElement('img', { src: part1, id: 'div3img1' }),
                        _react3.default.createElement(
                            'div',
                            { className: styles.officalModule3Div + ' col-lg-8' },
                            _react3.default.createElement('img', { src: one }),
                            _react3.default.createElement(
                                'h2',
                                null,
                                '\u53BB\u4E2D\u5FC3\u5316\u7684\u8DE8\u94FE\u673A\u5236'
                            ),
                            _react3.default.createElement(
                                'p',
                                null,
                                '\u5728\u4E07\u7EF4\u94FE\u4E0A\uFF0C\u6211\u4EEC\u5C06\u652F\u6301\u4E3B\u6D41\u516C\u94FE\u7684\u8DE8\u94FE\u4EA4\u6613\uFF08\u5982BTC\u3001ETH\uFF09\u3001\u8054\u76DF\u94FE\u4E4B\u95F4\u7684\u8D44\u4EA7\u8DE8\u94FE\u4EA4\u6613\uFF0C\u4EE5\u53CA\u516C\u94FE\u4E0E\u8054\u76DF\u94FE\u7684\u8DE8\u94FE\u4EA4\u6613\u3002 \u901A\u8FC7\u7C7B\u8054\u5408\u951A\u5B9A\uFF0C\u591A\u65B9\u8BA1\u7B97\u548C\u95E8\u9650\u79D8\u94A5\u5171\u4EAB\u673A\u5236\u7ED3\u5408\u591A\u89D2\u8272\u8282\u70B9\u8BBE\u8BA1\uFF0C\u5B8C\u6210\u8DE8\u94FE\u9501\u5B9A\u8D26\u53F7\u7684\u5206\u5E03\u5F0F\u79D8\u94A5\u7BA1\u7406\u3002'
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: styles.officalModule4 },
                    _react3.default.createElement(
                        'div',
                        { className: 'container' },
                        _react3.default.createElement(
                            'div',
                            { className: styles.officalModule4Div + ' col-lg-7' },
                            _react3.default.createElement('img', { src: two }),
                            _react3.default.createElement(
                                'h2',
                                null,
                                '\u901A\u7528\u8DE8\u94FE\u534F\u8BAE'
                            ),
                            _react3.default.createElement(
                                'p',
                                null,
                                '\u4E07\u7EF4\u94FE\u901A\u7528\u8DE8\u94FE\u534F\u8BAE\u662F\u94B1\u5305\u4E0E\u4E07\u7EF4\u94FE\u8282\u70B9\uFF0C\u4E07\u7EF4\u94FE\u8282\u70B9\u4E0E\u540C\u6784\u94FE\u8282\u70B9\u7684\u901A\u4FE1\u534F\u8BAE\uFF0C\u901A\u8FC7\u534F\u8BAE\u5B8C\u6210\u8DE8\u94FE\u4EA4\u6613\u76F8\u5173\u6570\u636E\u7684\u8BF7\u6C42\u3001 \u786E\u8BA4\u7B49\u76F8\u5173\u901A\u4FE1\u3002\u6839\u636E\u901A\u7528\u534F\u8BAE\u793E\u533A\u5F00\u53D1\u8005\u53EF\u4EE5\u6839\u636E\u5E94\u7528\u573A\u666F\u5F00\u53D1\u72EC\u7ACB\u7684\u591A\u8D44\u4EA7\u94B1\u5305\u3001\u5EFA\u7ACB\u4E0D\u540C\u5F00\u653E\u7A0B\u5EA6\u7684\u94FE\u6761\u3002 \u901A\u8FC7\u7C7B\u8054\u5408\u951A\u5B9A\uFF0C\u591A\u65B9\u8BA1\u7B97\u548C\u95E8\u9650\u79D8\u94A5\u5171\u4EAB\u673A\u5236\u7ED3\u5408\u591A\u89D2\u8272\u8282\u70B9\u8BBE\u8BA1\uFF0C\u5B8C\u6210\u8DE8\u94FE\u9501\u5B9A\u8D26\u53F7\u7684\u5206\u5E03\u5F0F\u79D8\u94A5\u7BA1\u7406\u3002'
                            )
                        ),
                        _react3.default.createElement('img', { src: part2, id: 'div3img2' })
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: styles.officalModule3 },
                    _react3.default.createElement(
                        'div',
                        { className: 'container' },
                        _react3.default.createElement('img', { src: part3, id: 'div3img3' }),
                        _react3.default.createElement(
                            'div',
                            { className: styles.officalModule3Div + ' col-lg-8', id: 'officalModule3Div2' },
                            _react3.default.createElement('img', { src: three }),
                            _react3.default.createElement(
                                'h2',
                                null,
                                '\u4EA4\u6613\u9690\u79C1\u4FDD\u62A4'
                            ),
                            _react3.default.createElement(
                                'p',
                                null,
                                '\u4E07\u7EF4\u94FE\u4E0A\u672C\u8EAB\u53CA\u540C\u6784\u94FE\u652F\u6301\u57FA\u4E8E\u667A\u80FD\u5408\u7EA6\u7684\u8D44\u4EA7\u7684\u4EA4\u6613\u9690\u79C1\u4FDD\u62A4\u3002\u5229\u7528\u73AF\u7B7E\u540D\u548C\u4E00\u6B21\u6027\u5730\u5740\uFF0C\u4E07\u7EF4\u94FE\u5B9E\u73B0\u667A\u80FD\u5408\u7EA6\u4EE3\u5E01\u7684\u9690\u79C1\u4FDD\u62A4\uFF0C \u4E07\u7EF4\u94FE\u4E0D\u4F46\u662F\u5168\u7403\u7B2C\u4E00\u4E2A\u5B9E\u73B0\u667A\u80FD\u5408\u7EA6\u4EE3\u5E01\u4EA4\u6613\u7684\u9690\u79C1\u4FDD\u62A4\uFF0C\u66F4\u8BA9\u4E07\u7EF4\u94FE\u53CA\u540C\u6784\u8054\u76DF\u94FE\u66F4\u597D\u7684\u9002\u7528\u4E8E\u91D1\u878D\u7B49\u5E94\u7528\u573A\u666F\u3002'
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: styles.officalModule4 },
                    _react3.default.createElement(
                        'div',
                        { className: 'container' },
                        _react3.default.createElement(
                            'div',
                            { className: styles.officalModule4Div + ' col-lg-7' },
                            _react3.default.createElement('img', { src: four }),
                            _react3.default.createElement(
                                'h2',
                                null,
                                '\u590D\u6742\u573A\u666F\u652F\u6301'
                            ),
                            _react3.default.createElement(
                                'p',
                                null,
                                '\u4E8E\u667A\u80FD\u5408\u7EA6\u548C\u901A\u7528\u534F\u8BAE\uFF0C\u793E\u533A\u7684\u5F00\u53D1\u8005\u53EF\u4EE5\u5F00\u53D1\u66F4\u52A0\u590D\u6742\u7684\u573A\u666F\u5E94\u7528\u3002\u5C24\u5176\u662F\u9700\u8981\u591A\u5E01\u79CD\u652F\u6301\u7684\u573A\u666F\u3002 \u8054\u76DF\u94FE\u4E0E\u516C\u94FE\u7684\u8FDE\u63A5\uFF0C\u8054\u76DF\u94FE\u4E4B\u95F4\u7684\u8FDE\u63A5\u4E3A\u533A\u5757\u94FE\u4ECA\u540E\u7684\u5E94\u7528\u524D\u666F\u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u9009\u62E9\uFF0C\u5C01\u95ED\u4E0E\u5F00\u653E\u4E0D\u518D\u662F\u975E\u6B64\u5373\u5F7C\u7684\u9009\u62E9\u9898\u3002'
                            )
                        ),
                        _react3.default.createElement('img', { src: part4, id: 'div3img4' })
                    )
                )
            );
        }
    }]);
    return Div4;
}(_react3.default.Component));
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeLanguage: (data) => {
//             dispatch(changeLanguage(data))
//         },
//     };
// };
//
// const mapStateToProps = (state) => ({
//     language : state.lang.language,
//     clientWidth: state.lang.clientWidth,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Div4)


exports.default = Div4;

//# sourceMappingURL=Div4-compiled.js.map