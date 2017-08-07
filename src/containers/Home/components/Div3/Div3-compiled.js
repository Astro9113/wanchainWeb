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
    Div3: {
        displayName: 'Div3'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Home/components/Div3/Div3.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Div3 = _wrapComponent('Div3')(function (_React$Component) {
    (0, _inherits3.default)(Div3, _React$Component);

    function Div3() {
        (0, _classCallCheck3.default)(this, Div3);
        return (0, _possibleConstructorReturn3.default)(this, (Div3.__proto__ || (0, _getPrototypeOf2.default)(Div3)).apply(this, arguments));
    }

    (0, _createClass3.default)(Div3, [{
        key: 'render',

        // static propTypes = {
        //     language: PropTypes.string,
        // };

        value: function render() {
            // const {language} = this.props;
            var styles = require('./Div3.scss');

            var wanchain = require('../../image/wanchain.png');
            var one = require('../../image/1.png');
            var two = require('../../image/2.png');
            var download = require('../../image/download.png');

            return _react3.default.createElement(
                'div',
                { className: styles.div2Header + ' container' },
                _react3.default.createElement(
                    'h2',
                    null,
                    _react3.default.createElement('hr', { className: styles.div1HeaderImg }),
                    '\u4E07\u7EF4\u94FE\u6574\u4F53\u67B6\u6784',
                    _react3.default.createElement('hr', { className: styles.div1HeaderImg })
                ),
                _react3.default.createElement(
                    'p',
                    null,
                    '\u4E07\u7EF4\u94FE\u65E8\u5728\u5EFA\u7ACB\u4E00\u4E2A\u57FA\u7840\u8BBE\u65BD--\u80FD\u591F\u4EE5\u53BB\u4E2D\u5FC3\u5316\u7684\u65B9\u5F0F\u5B8C\u6210\u4E0D\u540C\u533A\u5757\u94FE\u7F51\u7EDC\u7684\u8FDE\u63A5\u53CA\u4EF7\u503C\u7684\u4EA4\u6362'
                ),
                _react3.default.createElement(
                    'div',
                    { className: styles.astroModule2 },
                    _react3.default.createElement('img', { src: wanchain, className: styles.astroModule2Img, id: 'astroModule2Img' }),
                    _react3.default.createElement(
                        'div',
                        { className: styles.astroModule2word + ' col-lg-4' },
                        _react3.default.createElement(
                            'div',
                            { className: styles.astroModule2wordDiv },
                            _react3.default.createElement('img', { src: one }),
                            _react3.default.createElement(
                                'p',
                                null,
                                '\u4E07\u7EF4\u94FE\u4E0D\u4EC5\u4EC5\u662F\u4E00\u4E2A',
                                _react3.default.createElement(
                                    'small',
                                    null,
                                    '\u901A\u7528\u7684\u8DE8\u94FE\u534F\u8BAE',
                                    _react3.default.createElement('br', null)
                                ),
                                '\u540C\u65F6\u662F\u4E00\u4E2A\u8BB0\u5F55\u8DE8\u94FE\u4EA4\u6613\u3001\u94FE\u5185\u4EA4\u6613\u7684',
                                _react3.default.createElement(
                                    'small',
                                    null,
                                    '\u5206\u5E03\u5F0F\u8D26\u672C'
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: styles.astroModule2wordDiv },
                            _react3.default.createElement('img', { src: two }),
                            _react3.default.createElement(
                                'p',
                                null,
                                '\u8FD9\u4E2A\u8D26\u672C\u4E0D\u4F46\u652F\u6301',
                                _react3.default.createElement(
                                    'small',
                                    null,
                                    '\u667A\u80FD\u5408\u7EA6\u865A\u62DF\u673A',
                                    _react3.default.createElement('br', null)
                                ),
                                '\u800C\u4E14\u80FD\u652F\u6301\u667A\u80FD\u5408\u7EA6\u4E0B\u7684',
                                _react3.default.createElement(
                                    'small',
                                    null,
                                    '\u4EA4\u6613\u9690\u79C1\u4FDD\u62A4'
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: styles['div2-submit-area'] },
                            _react3.default.createElement(
                                'a',
                                { className: styles['div2-submit-button'] + ' btn', href: '/files/Wanchain-Whitepaper-CH-version.pdf', target: '_blank' },
                                '\u767D\u76AE\u4E66',
                                _react3.default.createElement('img', { src: download })
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Div3;
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
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Div3)


exports.default = Div3;

//# sourceMappingURL=Div3-compiled.js.map