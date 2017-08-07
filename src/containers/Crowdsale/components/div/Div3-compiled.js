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

var _question = require('../../data/question');

var _question2 = _interopRequireDefault(_question);

var _questionEn = require('../../data/questionEn');

var _questionEn2 = _interopRequireDefault(_questionEn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Div3: {
        displayName: 'Div3'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Crowdsale/components/div/Div3.js',
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
            var styles = require('../div.scss');

            var questionList = void 0;
            questionList = _question2.default.map(function (value, index) {
                return _react3.default.createElement(
                    'div',
                    { className: styles['crowd-div3HeaderFaq'], key: index },
                    _react3.default.createElement(
                        'b',
                        null,
                        value.title
                    ),
                    _react3.default.createElement(
                        'p',
                        null,
                        value.describe
                    )
                );
            });

            return _react3.default.createElement(
                'div',
                { className: styles['crowd-div3Header'] + ' container' },
                _react3.default.createElement(
                    'h2',
                    null,
                    _react3.default.createElement('hr', { className: styles['crowd-div1HeaderImg'] }),
                    '\u5E38\u89C1\u95EE\u9898',
                    _react3.default.createElement('hr', { className: styles['crowd-div1HeaderImg'] })
                ),
                questionList
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

// const mapStateToProps = (state) => ({
//     language : state.lang.language,
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Div3)


exports.default = Div3;

//# sourceMappingURL=Div3-compiled.js.map