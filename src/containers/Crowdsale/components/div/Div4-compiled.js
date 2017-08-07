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

var _statement = require('../../data/statement');

var _statement2 = _interopRequireDefault(_statement);

var _statementEn = require('../../data/statementEn');

var _statementEn2 = _interopRequireDefault(_statementEn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Div4: {
        displayName: 'Div4'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Crowdsale/components/div/Div4.js',
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
            var styles = require('../div.scss');

            var statementList = void 0;
            statementList = _statement2.default.map(function (value, index) {
                return _react3.default.createElement(
                    'div',
                    { key: index },
                    _react3.default.createElement('div', { className: styles['crowd-div4Header-pot'] }),
                    _react3.default.createElement(
                        'p',
                        null,
                        value.describe
                    )
                );
            });

            return _react3.default.createElement(
                'div',
                { className: styles['crowd-div4Header'] + ' container' },
                _react3.default.createElement(
                    'h2',
                    null,
                    _react3.default.createElement('hr', { className: styles['crowd-div4HeaderImg'] }),
                    '\u4E07\u7EF4\u94FE\u7533\u660E',
                    _react3.default.createElement('hr', { className: styles['crowd-div4HeaderImg'] })
                ),
                statementList
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