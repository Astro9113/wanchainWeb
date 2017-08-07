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

var _Div = require('./components/div/Div1');

var _Div2 = _interopRequireDefault(_Div);

var _Div3 = require('./components/div/Div2');

var _Div4 = _interopRequireDefault(_Div3);

var _Div5 = require('./components/div/Div3');

var _Div6 = _interopRequireDefault(_Div5);

var _Div7 = require('./components/div/Div4');

var _Div8 = _interopRequireDefault(_Div7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    Crowdsale: {
        displayName: 'Crowdsale'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Crowdsale/Crowdsale.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}
// import Div1En from './components/div/Div1En';

// import Div2En from './components/div/Div2En';

var Crowdsale = _wrapComponent('Crowdsale')(function (_Component) {
    (0, _inherits3.default)(Crowdsale, _Component);

    function Crowdsale() {
        (0, _classCallCheck3.default)(this, Crowdsale);
        return (0, _possibleConstructorReturn3.default)(this, (Crowdsale.__proto__ || (0, _getPrototypeOf2.default)(Crowdsale)).apply(this, arguments));
    }

    (0, _createClass3.default)(Crowdsale, [{
        key: 'render',

        // static propTypes = {
        //     language: PropTypes.string,
        //     clientWidth: PropTypes.number,
        // };

        value: function render() {
            // const {language, clientWidth} = this.props;
            // const blog1 = require('./image/crowdLogo.jpg');
            var corwdLogo = require('./image/corwdLogo.png');
            var cor2 = require('./image/crowdsale.jpg');
            var num = require('./image/crowdNum.png');
            // const crowdNumEn = require('./image/crowdNumEn.png');
            var styles = require('./Crowdsale.scss');

            return _react3.default.createElement(
                'div',
                { className: styles.crowdsaleDiv },
                _react3.default.createElement(
                    'div',
                    { className: styles.crowdsaleHeader },
                    _react3.default.createElement('img', { src: cor2, className: styles.crowdsaleHeaderDivImg, style: { width: '100%' } }),
                    _react3.default.createElement('img', { src: num, className: styles.crowdsaleHeaderDivNumPC }),
                    _react3.default.createElement(
                        'div',
                        { className: styles.crowdsaleHeaderDiv },
                        _react3.default.createElement(
                            'h2',
                            null,
                            _react3.default.createElement('img', { src: corwdLogo }),
                            '\u4E07\u7EF4\u94FE\u4EE3\u5E01\u5206\u914D'
                        ),
                        _react3.default.createElement(
                            'p',
                            null,
                            '\u4E07\u7EF4\u94FE\u4EE3\u5E01\uFF08\u4E07\u5E01Wancoin\uFF09\u603B\u91CF\u4E3A2.1\u4EBF\u4E2A\uFF0CICO\u9884\u671F\u76EE\u6807\u4E3A3000\u4E07\u7F8E\u5143\u7B49\u503C\u7684\u4EE5\u592A\u5E01\uFF0C\u516C\u5F00\u9500\u552E\u7684\u4EE3\u5E01\u4EE5\u4E07\u7EF4\u94FEERC-20 tokens\u8FDB\u884C\uFF0C',
                            _react3.default.createElement('br', null),
                            '\u6700\u7EC8\u4E0A\u7EBF\u7684\u4EE3\u5E01\u4E0EICO token\u6BD4\u4F8B\u4E3A1:1',
                            _react3.default.createElement('br', null),
                            '\u516C\u5F00\u9500\u552E\u5F00\u59CB\u65E5\u671F\u4E3A2017\u5E749\u670806\u65E5 12:00 UTC'
                        )
                    )
                ),
                _react3.default.createElement(_Div2.default, null),
                _react3.default.createElement(_Div4.default, null),
                _react3.default.createElement(_Div6.default, null),
                _react3.default.createElement(_Div8.default, null)
            );
        }
    }]);
    return Crowdsale;
}(_react2.Component));

// const mapDispatchToProps = (dispatch) => {
//     return {
//
//     };
// };
//
// const mapStateToProps = (state) => ({
//     language : state.lang.language,
//     clientWidth: state.lang.clientWidth,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Crowdsale)


exports.default = Crowdsale;

//# sourceMappingURL=Crowdsale-compiled.js.map