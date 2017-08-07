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
    Div2: {
        displayName: 'Div2'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Home/components/Div2/Div2.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Div2 = _wrapComponent('Div2')(function (_React$Component) {
    (0, _inherits3.default)(Div2, _React$Component);

    function Div2() {
        (0, _classCallCheck3.default)(this, Div2);
        return (0, _possibleConstructorReturn3.default)(this, (Div2.__proto__ || (0, _getPrototypeOf2.default)(Div2)).apply(this, arguments));
    }

    (0, _createClass3.default)(Div2, [{
        key: 'render',

        // static propTypes = {
        //     language: PropTypes.string,
        // };

        value: function render() {
            // const {language} = this.props;
            var card1 = require('../../image/car1.png');
            var card2 = require('../../image/card2.png');
            var card3 = require('../../image/card3.png');
            var card4 = require('../../image/card4.png');
            var divo1Line = require('../../image/divo1Line.png');
            var pot = require('../../image/pot.png');

            var styles = require('./Div2.scss');
            return _react3.default.createElement(
                'div',
                { className: styles.div1o, id: 'div1o' },
                _react3.default.createElement(
                    'div',
                    { className: styles.div1oHeader + ' container' },
                    _react3.default.createElement(
                        'h2',
                        null,
                        _react3.default.createElement('hr', { className: styles.div1HeaderImg }),
                        '\u4E07\u7EF4\u94FE\u5E94\u7528\u573A\u666F',
                        _react3.default.createElement('hr', { className: styles.div1HeaderImg })
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: styles.div1oBody },
                        _react3.default.createElement(
                            'div',
                            { className: styles.div1oBodyCard, id: styles.card1 },
                            _react3.default.createElement(
                                'div',
                                { className: styles.div1oBodyCardModule },
                                _react3.default.createElement('img', { src: card1, id: 'div1oimg1' }),
                                _react3.default.createElement(
                                    'p',
                                    null,
                                    '\u6570\u5B57\u8D27\u5E01',
                                    _react3.default.createElement('br', null),
                                    '\u4EA4\u6613',
                                    _react3.default.createElement(
                                        'small',
                                        null,
                                        '\u5151\u6362'
                                    )
                                )
                            ),
                            _react3.default.createElement('img', { className: styles.div1oBodyCardLine, src: divo1Line }),
                            _react3.default.createElement(
                                'ul',
                                null,
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    '\u591A\u79CD\u6570\u5B57\u8D27\u5E01\u7684\u4EA4\u6613\u5151\u6362'
                                ),
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    '\u4E0D\u540C\u673A\u6784\u6216\u4E2A\u4EBA\u4F9D\u6258\u4E07\u7EF4\u94FE\u63D0',
                                    _react3.default.createElement('br', null),
                                    '\u4F9B\u5206\u5E03\u5F0F\u8D27\u5E01\u4EA4\u6613\u5151\u6362\u670D\u52A1'
                                ),
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    '\u4E07\u7EF4\u94FE\u63D0\u4F9B\u5206\u5E03\u5F0F\u8DE8\u94FE\u4EA4\u6613\u673A\u5236'
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: styles.div1oBodyCard },
                            _react3.default.createElement(
                                'div',
                                { className: styles.div1oBodyCardModule },
                                _react3.default.createElement('img', { src: card2, id: 'div1oimg2' }),
                                _react3.default.createElement(
                                    'p',
                                    null,
                                    '\u6570\u5B57\u8D27\u5E01',
                                    _react3.default.createElement('br', null),
                                    _react3.default.createElement(
                                        'small',
                                        null,
                                        '\u501F\u8D37'
                                    )
                                )
                            ),
                            _react3.default.createElement('img', { className: styles.div1oBodyCardLine, src: divo1Line }),
                            _react3.default.createElement(
                                'ul',
                                null,
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    '\u6240\u6709\u4EA4\u6613\u8FC7\u7A0B\u5B9E\u73B0\u57FA\u4E8E\u8DE8\u94FE\u673A',
                                    _react3.default.createElement('br', null),
                                    '\u5236\u548C\u667A\u80FD\u5408\u7EA6\u7684\u975E\u4EBA\u4E3A\u6267\u884C'
                                ),
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    '\u7528\u6237\u4EE5\u53BB\u4E2D\u5FC3\u5316\u7684\u65B9\u5F0F\u6301\u6709\u81EA',
                                    _react3.default.createElement('br', null),
                                    '\u5DF1\u7684\u8D44\u4EA7\u548C\u8D1F\u503A(\u4E0D\u540Ctokens)'
                                ),
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    '\u4E07\u7EF4\u94FE\u786E\u4FDD\u8FC7\u7A0B\u4E2D\u8D44\u4EA7\u7684\u5B89\u5168',
                                    _react3.default.createElement('br', null),
                                    '\u6027\u548C\u5BA2\u89C2\u6027'
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: styles.div1oBodyCard },
                            _react3.default.createElement(
                                'div',
                                { className: styles.div1oBodyCardModule },
                                _react3.default.createElement('img', { src: card3, id: 'div1oimg3' }),
                                _react3.default.createElement(
                                    'p',
                                    null,
                                    '\u6570\u5B57\u8D44\u4EA7',
                                    _react3.default.createElement('br', null),
                                    _react3.default.createElement(
                                        'small',
                                        null,
                                        '\u6295\u8D44'
                                    )
                                )
                            ),
                            _react3.default.createElement('img', { className: styles.div1oBodyCardLine, src: divo1Line }),
                            _react3.default.createElement(
                                'ul',
                                null,
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    '\u901A\u8FC7\u4E07\u7EF4\u94FE\u5B9E\u73B0\u4E24\u79CD\u4E0D\u540C\u533A\u5757',
                                    _react3.default.createElement('br', null),
                                    '\u94FE\u8D44\u4EA7\u7684\u4EA4\u6613'
                                ),
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    '\u81EA\u52A8\u5316\u6267\u884C\u4EA4\u6613\u8FC7\u7A0B\uFF0C\u5B9E\u73B0',
                                    _react3.default.createElement('br', null),
                                    '"\u4E00\u624B\u4EA4\u94B1\u4E00\u624B\u4EA4\u8D27"'
                                ),
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    '\u4E07\u7EF4\u94FE\u786E\u4FDD\u8FC7\u7A0B\u4E2D\u8D44\u4EA7\u7684',
                                    _react3.default.createElement('br', null),
                                    '\u5B89\u5168\u6027'
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: styles.div1oBodyCard, id: styles.card4 },
                            _react3.default.createElement(
                                'div',
                                { className: styles.div1oBodyCardModule },
                                _react3.default.createElement('img', { src: card4, id: 'div1oimg4' }),
                                _react3.default.createElement(
                                    'p',
                                    null,
                                    '\u591A\u5E01\u79CDICO',
                                    _react3.default.createElement('br', null),
                                    _react3.default.createElement(
                                        'small',
                                        null,
                                        '\u4F17\u7B79'
                                    )
                                )
                            ),
                            _react3.default.createElement('img', { className: styles.div1oBodyCardLine, src: divo1Line }),
                            _react3.default.createElement(
                                'ul',
                                null,
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    '\u652F\u6301\u591A\u5E01\u79CD\u667A\u80FD\u5408\u7EA6\u8FDB\u884CICO'
                                ),
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    'ICO tokens\u8F6C\u6362\u4EE3\u5E01 \u81EA\u52A8\u5316'
                                ),
                                _react3.default.createElement('img', { src: pot }),
                                _react3.default.createElement(
                                    'li',
                                    null,
                                    'ICO\u8FC7\u7A0B\u5B8C\u5168 \u53BB\u4E2D\u5FC3\u5316'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Div2;
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

// export default connect(mapStateToProps, mapDispatchToProps)(Div1o)


exports.default = Div2;

//# sourceMappingURL=Div2-compiled.js.map