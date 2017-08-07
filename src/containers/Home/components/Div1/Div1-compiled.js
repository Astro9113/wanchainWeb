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
    Div1: {
        displayName: 'Div1'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Home/components/Div1/Div1.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

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
            // const {language, clientWidth} = this.props;
            var div1Img = require('../../image/div1.png');
            var styles = require('./Div1.scss');
            return _react3.default.createElement(
                'div',
                { className: styles.div1Header + ' container' },
                _react3.default.createElement(
                    'h2',
                    null,
                    ' ',
                    _react3.default.createElement('hr', { className: styles.div1HeaderImg }),
                    '\u4E07\u7EF4\u94FE\u662F\u4EC0\u4E48\uFF1F',
                    _react3.default.createElement('hr', { className: styles.div1HeaderImg })
                ),
                _react3.default.createElement(
                    'p',
                    null,
                    '\u57FA\u4E8E\u6570\u5B57\u8D44\u4EA7\u7684\u5206\u5E03\u5F0F\u91D1\u878D\u57FA\u7840\u8BBE\u65BD'
                ),
                _react3.default.createElement('img', { src: div1Img, className: styles.div1HeaderImg2, id: 'div1HeaderImg2' })
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
//
// export default connect(mapStateToProps, mapDispatchToProps)(Div1)


exports.default = Div1;

//# sourceMappingURL=Div1-compiled.js.map