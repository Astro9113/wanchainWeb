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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Div2: {
        displayName: 'Div2'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Crowdsale/components/div/Div2.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

// import { connect } from 'react-redux';


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

        // onEnter(name) {
        //     const img = document.getElementById(name);
        //     if (name === 'img1') {img.src = bizhongchou2;}
        //     if (name === 'img2') {img.src = icoage2;}
        //     if (name === 'img3') {img.src = token2;}
        // }
        //
        // onLeave(name) {
        //     const img = document.getElementById(name);
        //     if (name === 'img1') {img.src = bizhongchou1;}
        //     if (name === 'img2') {img.src = icoage1;}
        //     if (name === 'img3') {img.src = token1;}
        // }
        value: function render() {
            // const {language} = this.props;

            // const bizhongchou1 = require('../../image/bizhongchou.png');
            // const bizhongchou2 = require('../../image/bizhongchou2.png');
            // const icoage1 = require('../../image/icoage.png');
            // const icoage2 = require('../../image/icoage2.png');
            // const token1 = require('../../image/token.png');
            // const token2 = require('../../image/token2.png');

            var styles = require('../div.scss');

            return _react3.default.createElement(
                'div',
                { className: styles['crowd-div2Header'] },
                _react3.default.createElement(
                    'h2',
                    null,
                    _react3.default.createElement('hr', { className: styles['crowd-div1HeaderImg'] }),
                    '\u53C2\u4E0E\u65B9\u5F0F',
                    _react3.default.createElement('hr', { className: styles['crowd-div1HeaderImg'] })
                ),
                _react3.default.createElement(
                    'div',
                    { className: styles['crowd-div2HeaderDiv'] },
                    _react3.default.createElement(
                        'div',
                        { className: styles['crowd-div2HeaderDivLeft'] },
                        _react3.default.createElement('hr', null),
                        _react3.default.createElement(
                            'h4',
                            null,
                            _react3.default.createElement(
                                'strong',
                                null,
                                '\u53C2\u4E0E\u65B9\u5F0F 1 : '
                            ),
                            '\u901A\u8FC7\u4EE5\u592A\u574A\u94B1\u5305\u8D2D\u4E70'
                        ),
                        _react3.default.createElement(
                            'small',
                            null,
                            '\u53C2\u4E0E\u8005\u9700\u8981\u62E5\u6709\u4EE5\u592A\u574A\u94B1\u5305\uFF0C\u5E76\u5C06ETH\u53D1\u9001\u5230\u667A\u80FD\u5408\u7EA6\u5730\u5740\uFF0C\u5B8C\u6210\u8BA4\u8D2D\u3002\u8BA4\u8D2D\u7ED3\u675F\u540E\uFF0C\u5BF9\u5E94\u7684token\u5C06\u53D1\u9001\u5230\u8BA4\u8D2D\u8005\u7684\u4EE5\u592A\u574A\u94B1\u5305\u3002'
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: styles['crowd-div2HeaderDivLeft-Div'] },
                            _react3.default.createElement(
                                'div',
                                { className: styles['crowd-div2HeaderDivLeft-Div1'] },
                                _react3.default.createElement(
                                    'span',
                                    null,
                                    ' * '
                                ),
                                _react3.default.createElement(
                                    'p',
                                    null,
                                    '\u4EE5\u592A\u574A\u94B1\u5305\u662F\u6307\u80FD\u591F\u7531\u7528\u6237\u5B8C\u5168\u63A7\u5236\u80FD\u591F\u5BFC\u51FA\u79C1\u94A5\u7684\u94B1\u5305\uFF0C\u63A8\u8350\u5982\u4E0B \u4EE5\u592A\u574A\u94B1\u5305\uFF1A\u4EE5\u592A\u574A\u5B98\u65B9\u94B1\u5305\uFF08Mist\uFF09'
                                )
                            ),
                            _react3.default.createElement(
                                'div',
                                { className: styles['crowd-div2HeaderDivLeft-Div1'] },
                                _react3.default.createElement(
                                    'span',
                                    null,
                                    ' * '
                                ),
                                _react3.default.createElement(
                                    'p',
                                    null,
                                    '\u4E0D\u80FD\u4ECE\u4EA4\u6613\u6240\u3001\u4E2D\u5FC3\u5316\u94B1\u5305\u7B49\u7B2C\u4E09\u65B9\u5E73\u53F0\u7684\u8D26\u53F7\u4E2D\u76F4\u63A5\u5411\u667A\u80FD\u5408\u7EA6\u5730\u5740\u8F6C\u8D26\uFF0C \u5982\u679C\u8FD9\u6837\u64CD\u4F5Ctoken\u5C06\u88AB\u53D1\u9001\u5230\u4EA4\u6613\u6240\u7BA1\u7406\u7684\u5730\u5740\u4E2D'
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { id: styles['crowd-div2HeaderDivLeft-foot'] },
                            _react3.default.createElement(
                                'p',
                                null,
                                'token\u8D2D\u4E70\u7684\u4EE5\u592A\u574A\u5730\u5740\u4E3A : '
                            ),
                            _react3.default.createElement(
                                'span',
                                null,
                                '\u5408\u7EA6\u4E0A\u7EBF\u524D\u516C\u5E03'
                            )
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: styles['crowd-div2HeaderDivRight'] },
                        _react3.default.createElement('hr', null),
                        _react3.default.createElement(
                            'h4',
                            null,
                            _react3.default.createElement(
                                'strong',
                                null,
                                '\u53C2\u4E0E\u65B9\u5F0F 2 : '
                            ),
                            '\u901A\u8FC7\u6307\u5B9A\u5E73\u53F0\u8D2D\u4E70'
                        ),
                        _react3.default.createElement(
                            'small',
                            null,
                            '\u4EE5\u4E0B\u5E73\u53F0\u662F\u4E0E\u4E07\u7EF4\u94FE\u5B98\u65B9\u5408\u4F5C\u7684\u5E73\u53F0\uFF0C\u5E73\u53F0\u5C06\u4EE3\u7528\u6237\u5B8C\u6210\u8BA4\u8D2D\u7684\u64CD\u4F5C\uFF0C\u8BA4\u8D2D\u7ED3\u675F\u540E\uFF0C\u7531\u5E73\u53F0\u5C06\u5BF9\u5E94\u7684token\u53D1\u9001\u5230\u8BA4\u8D2D\u8005\u7684\u4EE5\u592A\u574A\u94B1\u5305\u3002'
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: styles['rowd-div2HeaderDivRight-Div'] },
                            _react3.default.createElement(
                                'h2',
                                null,
                                '\u6307\u5B9A\u5E73\u53F0\u5F85\u5B9A'
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

// export default connect(mapStateToProps, mapDispatchToProps)(Div2)


exports.default = Div2;

// {/*<img src={bizhongchou1} id="img1" onMouseEnter={() => this.onEnter('img1')} onMouseLeave={() => this.onLeave('img1')}/>*/}
// {/*<img src={icoage1} id="img2" onMouseEnter={() => this.onEnter('img2')} onMouseLeave={() => this.onLeave('img2')}/>*/}
// {/*<img src={token1} id="img3" onMouseEnter={() => this.onEnter('img3')} onMouseLeave={() => this.onLeave('img3')}/>*/}

//# sourceMappingURL=Div2-compiled.js.map