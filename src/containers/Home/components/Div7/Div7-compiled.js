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
    Div7: {
        displayName: 'Div7'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Home/components/Div7/Div7.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Div7 = _wrapComponent('Div7')(function (_React$Component) {
    (0, _inherits3.default)(Div7, _React$Component);

    function Div7() {
        (0, _classCallCheck3.default)(this, Div7);
        return (0, _possibleConstructorReturn3.default)(this, (Div7.__proto__ || (0, _getPrototypeOf2.default)(Div7)).apply(this, arguments));
    }

    (0, _createClass3.default)(Div7, [{
        key: 'render',

        // static propTypes = {
        //     language: PropTypes.string,
        // };

        value: function render() {
            // const {language} = this.props;

            var team1 = require('../../image/team1.png');
            var expert = require('../../image/expert.png');
            var community = require('../../image/community.png');
            var styles = require('./Div7.scss');

            return _react3.default.createElement(
                'div',
                { className: styles.div6 },
                _react3.default.createElement(
                    'div',
                    { className: styles.div6Header },
                    _react3.default.createElement(
                        'div',
                        { className: styles.div6Title + ' container' },
                        _react3.default.createElement(
                            'h2',
                            null,
                            _react3.default.createElement('hr', { className: styles.div1HeaderImg }),
                            '\u6211\u4EEC\u7684\u4F18\u52BF',
                            _react3.default.createElement('hr', { className: styles.div1HeaderImg })
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: styles.div6Body + ' clearfix' },
                        _react3.default.createElement(
                            'div',
                            { className: styles.div6BodyCard },
                            _react3.default.createElement('img', { src: team1 }),
                            _react3.default.createElement(
                                'p',
                                null,
                                '\u6838\u5FC3\u56E2\u961F\u533A\u5757\u94FE\u5E95\u5C42\u6280\u672F\u7684\u591A\u5E74\u79EF\u7D2F'
                            ),
                            _react3.default.createElement(
                                'small',
                                null,
                                '\u533A\u5757\u94FE\u8DE8\u94FE\u4EA4\u4E92\u7684\u7406\u5FF5\u548C\u6A21\u5F0F\u4ECEFACTOM\u8D77\u5C31',
                                _react3.default.createElement('br', null),
                                '\u6301\u7EED\u79EF\u7D2F\uFF0C\u4E07\u7EF4\u94FE\u9879\u76EE\u4ECE\u6A21\u5F0F\u5230\u6280\u672F\u5747\u915D\u917F\u5DF2',
                                _react3.default.createElement('br', null),
                                '\u4E45\u3002\u6838\u5FC3\u6210\u5458\u5728\u533A\u5757\u94FE\u9886\u57DF\u7684\u591A\u5E74\u79EF\u7D2F\uFF0C\u5BF9\u4E8E',
                                _react3.default.createElement('br', null),
                                '\u5171\u8BC6\u7B97\u6CD5\u3001\u667A\u80FD\u548C\u7EA6\u3001\u94B1\u5305\u7B49\u65B9\u9762\u5747\u5404\u6709\u6240\u957F\u3002'
                            ),
                            _react3.default.createElement(
                                'p',
                                null,
                                _react3.default.createElement(
                                    'b',
                                    null,
                                    'T '
                                ),
                                'E A M'
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: styles.div6BodyCard, id: styles.div6Card2 },
                            _react3.default.createElement('img', { src: expert }),
                            _react3.default.createElement(
                                'p',
                                null,
                                '\u9876\u5C16\u5BC6\u7801\u5B66\u4E13\u5BB6\u7684\u533A\u5757\u94FE\u56E2\u961F'
                            ),
                            _react3.default.createElement(
                                'small',
                                null,
                                '\u5728\u533A\u5757\u94FE\u5E95\u5C42\u8FDB\u884C\u6301\u7EED\u521B\u4E1A\u9700\u8981\u5BC6\u7801\u5B66\u7684\u7406\u8BBA',
                                _react3.default.createElement('br', null),
                                '\u8BBA\u8BC1\u652F\u6491\uFF0C\u4E07\u7EF4\u94FE\u56E2\u961F\u4E2D\u6709\u4E09\u4F4D\u5E94\u7528\u6570\u5B66\u535A\u58EB',
                                _react3.default.createElement('br', null),
                                '\u8D1F\u8D23\u8FDB\u884C\u4E07\u7EF4\u94FE\u9879\u76EE\u4E2D\u6D89\u53CA\u5230\u7684\u5BC6\u7801\u5B66\u5E94\u7528\u8FDB',
                                _react3.default.createElement('br', null),
                                '\u884C\u521B\u65B0\u3001\u8BBA\u8BC1\u53CA\u7B97\u6CD5\u7F16\u5199\u3002\u653E\u773C\u5168\u7403\u7684\u533A\u5757\u94FE',
                                _react3.default.createElement('br', null),
                                '\u9879\u76EE\uFF0C\u8FD9\u6837\u7684\u914D\u7F6E\u4E5F\u5F88\u5C11\u89C1\u3002'
                            ),
                            _react3.default.createElement(
                                'p',
                                null,
                                _react3.default.createElement(
                                    'b',
                                    null,
                                    'E '
                                ),
                                'X P E R T S'
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: styles.div6BodyCard },
                            _react3.default.createElement('img', { src: community }),
                            _react3.default.createElement(
                                'p',
                                null,
                                '\u5168\u7403\u5546\u4E1A\u5316\u53CA\u793E\u533A\u8FD0\u8425\u80FD\u529B'
                            ),
                            _react3.default.createElement(
                                'small',
                                null,
                                '\u8FD0\u8425\u56E2\u961F\u5728\u4E2D\u56FD\u3001\u7F8E\u56FD\u3001\u65B0\u52A0\u5761\u7B49\u591A\u5730\u5747\u6709\u4E30\u5BCC\u7684',
                                _react3.default.createElement('br', null),
                                '\u5546\u4E1A\u7ECF\u9A8C\u548C\u8D44\u6E90\uFF0C\u5728\u533A\u5757\u94FE\u793E\u533A\u4E2D\u591A\u5E74\u7684\u79EF\u7D2F\uFF0C\u4F17',
                                _react3.default.createElement('br', null),
                                '\u591A\u8D44\u6DF1\u4EBA\u58EB\u5747\u652F\u6301\uFF0C\u6295\u8D44\u53CA\u6307\u5BFC\u4E07\u7EF4\u94FE\u9879\u76EE\u3002'
                            ),
                            _react3.default.createElement(
                                'p',
                                null,
                                _react3.default.createElement(
                                    'b',
                                    null,
                                    'C '
                                ),
                                'A P A C I T Y'
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Div7;
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

// export default connect(mapStateToProps, mapDispatchToProps)(Div7)


exports.default = Div7;

//# sourceMappingURL=Div7-compiled.js.map