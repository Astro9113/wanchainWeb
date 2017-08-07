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
    Div1: {
        displayName: 'Div1'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Crowdsale/components/div/Div1.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
} // import React, {PropTypes} from 'react';


// import { connect } from 'react-redux';


var Div1 = _wrapComponent('Div1')(function (_React$Component) {
    (0, _inherits3.default)(Div1, _React$Component);

    function Div1() {
        (0, _classCallCheck3.default)(this, Div1);
        return (0, _possibleConstructorReturn3.default)(this, (Div1.__proto__ || (0, _getPrototypeOf2.default)(Div1)).apply(this, arguments));
    }

    (0, _createClass3.default)(Div1, [{
        key: 'render',

        // static propTypes = {
        //     language: PropTypes.string,
        //     clientWidth: PropTypes.number,
        // };

        value: function render() {
            // const {language} = this.props;
            var mark = require('../../image/mark.png');

            var styles = require('../div.scss');
            return _react3.default.createElement(
                'div',
                { className: styles['crowd-div1Header'] + ' container' },
                _react3.default.createElement(
                    'h2',
                    null,
                    _react3.default.createElement('hr', { className: styles['crowd-div1HeaderImg'] }),
                    '\u516C\u5F00\u9500\u552E\u8BA1\u5212',
                    _react3.default.createElement('hr', { className: styles['crowd-div1HeaderImg'] })
                ),
                _react3.default.createElement(
                    'table',
                    { className: 'table table-striped' },
                    _react3.default.createElement(
                        'tbody',
                        null,
                        _react3.default.createElement(
                            'tr',
                            null,
                            _react3.default.createElement(
                                'td',
                                null,
                                '\u7B2C\u4E00\u9636\u6BB5'
                            ),
                            _react3.default.createElement(
                                'td',
                                null,
                                _react3.default.createElement(
                                    'h4',
                                    null,
                                    '8.5\u6298'
                                )
                            ),
                            _react3.default.createElement(
                                'td',
                                null,
                                '2017 09-06 12:00 -- 09-13 11:59 ',
                                _react3.default.createElement(
                                    'small',
                                    null,
                                    'UTC'
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'tr',
                            null,
                            _react3.default.createElement(
                                'td',
                                null,
                                '\u7B2C\u4E8C\u9636\u6BB5'
                            ),
                            _react3.default.createElement(
                                'td',
                                null,
                                _react3.default.createElement(
                                    'h4',
                                    null,
                                    '9.5\u6298'
                                )
                            ),
                            _react3.default.createElement(
                                'td',
                                null,
                                '2017 09-13 12:00 -- 09-20 11:59 ',
                                _react3.default.createElement(
                                    'small',
                                    null,
                                    'UTC'
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'tr',
                            null,
                            _react3.default.createElement(
                                'td',
                                null,
                                '\u7B2C\u4E09\u9636\u6BB5'
                            ),
                            _react3.default.createElement(
                                'td',
                                null,
                                _react3.default.createElement(
                                    'h4',
                                    null,
                                    '\u539F\u4EF7'
                                )
                            ),
                            _react3.default.createElement(
                                'td',
                                null,
                                '2017 09-20 12:00 -- 09-27 11:59 ',
                                _react3.default.createElement(
                                    'small',
                                    null,
                                    'UTC'
                                )
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: styles['crowd-div1HeaderDiv'] },
                    _react3.default.createElement(
                        'h4',
                        null,
                        _react3.default.createElement('img', { src: mark }),
                        '\u8BF4\u660E:'
                    ),
                    _react3.default.createElement('div', { className: styles['crowd-div4Header-pot'] }),
                    _react3.default.createElement(
                        'p',
                        null,
                        '\u4EE5\u592A\u574A\u4F5C\u4EF7\u7684\u5151\u6362\u6BD4\u4F8B\u5C06\u5728\u9500\u552E\u5F00\u59CB\u524D\u6839\u636E\u5F53\u65F6\u4EE5\u592A\u574A\u4EF7\u683C\u60C5\u51B5\u8FDB\u884C\u516C\u5E03\u3002'
                    ),
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('div', { className: styles['crowd-div4Header-pot'] }),
                    _react3.default.createElement(
                        'p',
                        null,
                        '\u5F53\u516C\u5F00\u9500\u552E\u90E8\u5206\u5B8C\u6BD5\u6216\u8005ICO\u65F6\u95F4\u7ED3\u675F\u667A\u80FD\u5408\u7EA6\u5C06\u81EA\u52A8\u5173\u95ED\u3002\u6BCF\u7B14\u4EA4\u6613\u7684\u6700\u5C0F\u8D2D\u4E70\u989D\u5EA6\u4E3A0.1ETH\u3002'
                    ),
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('div', { className: styles['crowd-div4Header-pot'] }),
                    _react3.default.createElement(
                        'p',
                        null,
                        'ICO\u7ED3\u675F\u540E\uFF0C\u667A\u80FD\u5408\u7EA6\u5C06\u5206\u914Dtoken\u5230\u6BCF\u4E2AICO\u5730\u5740\uFF0C\u8FD9\u4E9Btoken\u53EF\u4EE5\u901A\u8FC7\u4EE5\u592A\u574A\u94B1\u5305\u8FDB\u884C\u8F6C\u8D26\u3002'
                    ),
                    _react3.default.createElement('br', null),
                    _react3.default.createElement('div', { className: styles['crowd-div4Header-pot'] }),
                    _react3.default.createElement(
                        'p',
                        null,
                        '\u9879\u76EE\u4E0A\u7EBF\u65F6\uFF0C\u7528\u6237\u6839\u636E\u6240\u6301token\u7684\u4EFD\u989D\u7B49\u6BD4\u4F8B\u5151\u6362\u4E3A\u4E07\u7EF4\u94FE\u539F\u751F\u5E01 wancoin\uFF0C1.0\u7248\u672C\u7684\u9884\u8BA1\u4E0A\u7EBF\u65E5\u671F\u4E3A2017\u5E7411\u6708\u3002'
                    )
                )
            );
        }
    }]);
    return Div1;
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

// export default connect(mapStateToProps, mapDispatchToProps)(Div1)


exports.default = Div1;

// <img src={line} className="div1HeaderImg" />

//# sourceMappingURL=Div1-compiled.js.map