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
    Div6: {
        displayName: 'Div6'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Home/components/Div6/Div6.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Div6 = _wrapComponent('Div6')(function (_React$Component) {
    (0, _inherits3.default)(Div6, _React$Component);

    function Div6() {
        (0, _classCallCheck3.default)(this, Div6);
        return (0, _possibleConstructorReturn3.default)(this, (Div6.__proto__ || (0, _getPrototypeOf2.default)(Div6)).apply(this, arguments));
    }

    (0, _createClass3.default)(Div6, [{
        key: 'render',

        // static propTypes = {
        //     language: PropTypes.string,
        // };

        value: function render() {
            // const {language} = this.props;

            var down = require('../../image/down1.png');
            var up = require('../../image/up1.png');
            var styles = require('./Div6.scss');
            return _react3.default.createElement(
                'div',
                { className: styles.div5Header },
                _react3.default.createElement(
                    'div',
                    { className: styles.div5HeaderDiv + ' container' },
                    _react3.default.createElement(
                        'h2',
                        null,
                        _react3.default.createElement('hr', { className: styles.div1HeaderImg }),
                        'ROADMAP',
                        _react3.default.createElement('hr', { className: styles.div1HeaderImg })
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: styles.module8Div + ' clearfix container' },
                    _react3.default.createElement(
                        'div',
                        { className: styles.module8DivUp + ' col-lg-3' },
                        _react3.default.createElement('img', { src: up }),
                        _react3.default.createElement(
                            'h4',
                            null,
                            '\u5F00\u59CB\u7406\u8BBA\u8BBE\u8BA1\u53CA\u8BBA\u8BC1\uFF0C\u8DE8\u94FE\u4EA4\u6613\u53CA\u9690\u79C1\u4FDD\u62A4'
                        ),
                        _react3.default.createElement(
                            'p',
                            null,
                            '2016',
                            _react3.default.createElement(
                                'span',
                                null,
                                ' / ',
                                '06'
                            )
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: styles.module8DivUp + ' col-lg-3' },
                        _react3.default.createElement('img', { src: up }),
                        _react3.default.createElement(
                            'h4',
                            null,
                            '\u53D1\u5E03\u767D\u76AE\u4E66\uFF0C\u4E07\u7EF4\u94FE\u7F51\u7AD9\u4E0A\u7EBF\uFF0C\u8FDB\u5165ICO\u9636\u6BB5'
                        ),
                        _react3.default.createElement(
                            'p',
                            null,
                            '2017',
                            _react3.default.createElement(
                                'span',
                                null,
                                ' / ',
                                '06'
                            )
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: styles.module8DivUp + ' col-lg-3' },
                        _react3.default.createElement('img', { src: up }),
                        _react3.default.createElement(
                            'h4',
                            null,
                            '\u4E07\u7EF4\u94FE1.0\u4E0A\u7EBF\uFF0C\u5B9E\u73B0\u4E07\u7EF4\u94FE\u94B1\u5305\u53CA\u5E26\u9690\u79C1\u4FDD\u62A4\u7684\u667A\u80FD\u5408\u7EA6\u529F\u80FD\uFF0CWAN Coin\u53D1\u884C'
                        ),
                        _react3.default.createElement(
                            'p',
                            null,
                            '2017',
                            _react3.default.createElement(
                                'span',
                                null,
                                ' / ',
                                '11'
                            )
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: styles.module8DivUp + ' col-lg-3' },
                        _react3.default.createElement('img', { src: up }),
                        _react3.default.createElement(
                            'h4',
                            null,
                            '\u4E07\u7EF4\u94FE3.0\u4E0A\u7EBF\uFF0C\u652F\u6301\u6BD4\u7279\u5E01\u8DE8\u94FE\u4EA4\u6613\uFF0C\u4E07\u7EF4\u94FE\u8DE8\u94FE\u534F\u8BAE2.0\u4E0A\u7EBF\uFF0C\u591A\u5E01\u79CD\u4E07\u7EF4\u94FE\u94B1\u53052.0\u4E0A\u7EBF'
                        ),
                        _react3.default.createElement(
                            'p',
                            null,
                            '2018',
                            _react3.default.createElement(
                                'span',
                                null,
                                ' / ',
                                '12'
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: styles.module8Div2 + ' clearfix container' },
                    _react3.default.createElement(
                        'div',
                        { className: styles.module8DivUp2 + ' col-lg-3' },
                        _react3.default.createElement('img', { src: down }),
                        _react3.default.createElement(
                            'p',
                            null,
                            '2016',
                            _react3.default.createElement(
                                'span',
                                null,
                                ' / ',
                                '12'
                            )
                        ),
                        _react3.default.createElement(
                            'h4',
                            null,
                            '\u5B8C\u6210\u7406\u8BBA\u8BBE\u8BA1\uFF0C\u57FA\u4E8E\u667A\u80FD\u5408\u7EA6\u4EE3\u5E01\u9690\u79C1\u4FDD\u62A4\u7684POC\u5F00\u53D1'
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: styles.module8DivUp2 + ' col-lg-3' },
                        _react3.default.createElement('img', { src: down }),
                        _react3.default.createElement(
                            'p',
                            null,
                            '2017',
                            _react3.default.createElement(
                                'span',
                                null,
                                ' / ',
                                '09'
                            )
                        ),
                        _react3.default.createElement(
                            'h4',
                            null,
                            'ICO tokens\u9500\u552E\u5F00\u59CB\uFF0C\u53D1\u5E03\u4E07\u7EF4\u94FE\u6D4B\u8BD5\u7F51\u7EDC'
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: styles.module8DivUp2 + ' col-lg-3' },
                        _react3.default.createElement('img', { src: down }),
                        _react3.default.createElement(
                            'p',
                            null,
                            '2018',
                            _react3.default.createElement(
                                'span',
                                null,
                                ' / ',
                                '06'
                            )
                        ),
                        _react3.default.createElement(
                            'h4',
                            null,
                            '\u4E07\u7EF4\u94FE2.0\u4E0A\u7EBF\uFF0C\u652F\u6301\u4EE5\u592A\u574A\u8DE8\u94FE\u4EA4\u6613\uFF0C\u4E07\u7EF4\u94FE\u8DE8\u94FE\u534F\u8BAE1.0\u4E0A\u7EBF\uFF0C\u591A\u5E01\u79CD\u4E07\u7EF4\u94FE\u94B1\u53051.0\u4E0A\u7EBF'
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: styles.module8DivUp2 + ' col-lg-3' },
                        _react3.default.createElement('img', { src: down }),
                        _react3.default.createElement(
                            'p',
                            null,
                            '2019'
                        ),
                        _react3.default.createElement(
                            'h4',
                            null,
                            '\u4E07\u7EF4\u94FE4.0\u4E0A\u7EBF\uFF0C\u652F\u6301\u8054\u76DF\u94FE\u8DE8\u94FE\u4EA4\u6613\uFF0C\u4E07\u7EF4\u94FE\u8DE8\u94FE\u534F\u8BAE3.0\u4E0A\u7EBF\uFF0C\u591A\u5E01\u79CD\u4E07\u7EF4\u94FE\u94B1\u53053.0\u4E0A\u7EBF'
                        )
                    )
                )
            );
        }
    }]);
    return Div6;
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

// export default connect(mapStateToProps, mapDispatchToProps)(Div6)


exports.default = Div6;

//# sourceMappingURL=Div6-compiled.js.map