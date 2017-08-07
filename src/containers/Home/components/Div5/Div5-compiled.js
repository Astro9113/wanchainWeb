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
    Div5: {
        displayName: 'Div5'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/Home/components/Div5/Div5.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Div5 = _wrapComponent('Div5')(function (_React$Component) {
    (0, _inherits3.default)(Div5, _React$Component);

    function Div5() {
        (0, _classCallCheck3.default)(this, Div5);
        return (0, _possibleConstructorReturn3.default)(this, (Div5.__proto__ || (0, _getPrototypeOf2.default)(Div5)).apply(this, arguments));
    }

    (0, _createClass3.default)(Div5, [{
        key: 'render',
        value: function render() {
            // const {language} = this.props;

            var styles = require('./Div5.scss');
            var style = { textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' };
            return _react3.default.createElement(
                'div',
                { className: styles.div4Header },
                _react3.default.createElement(
                    'div',
                    { className: styles.div4HeaderDiv + ' container' },
                    _react3.default.createElement(
                        'h2',
                        null,
                        _react3.default.createElement('hr', { className: styles.div1HeaderImg }),
                        '\u6700\u65B0\u901A\u544A',
                        _react3.default.createElement('hr', { className: styles.div1HeaderImg })
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'col-lg-12' },
                        _react3.default.createElement(
                            'div',
                            { className: 'col-lg-4' },
                            _react3.default.createElement(
                                'a',
                                { style: { textDecoration: 'none' }, href: 'https://finance.yahoo.com/news/wanchain-public-blockchain-project-releases-084300788.html', target: '_blank' },
                                _react3.default.createElement(
                                    'div',
                                    { className: styles.AstroModule7 },
                                    _react3.default.createElement(
                                        'h2',
                                        null,
                                        'Wanchain, a Public Blockchain Project...'
                                    ),
                                    _react3.default.createElement(
                                        'p',
                                        { style: style },
                                        'Wanchain, the first public blockchain project envisioned by the Chinese firm Wanglu Tech, recently released a white paper. Wanchain is a blockchain-based distributed financial infrastructure which allows the exchange of assets among different blockchain networks in a decentralized way. With Wanchain, more organizations are able to develop their own services and innovate in the distributed finance space.'
                                    ),
                                    _react3.default.createElement(
                                        'h4',
                                        null,
                                        'August 3, 2017'
                                    )
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'a',
                            { href: 'https://www.ethnews.com/wanchain-developed-to-spur-inter-blockchain-cooperation', target: '_blank' },
                            _react3.default.createElement(
                                'div',
                                { className: 'col-lg-4' },
                                _react3.default.createElement(
                                    'div',
                                    { className: styles.AstroModule7 },
                                    _react3.default.createElement(
                                        'h2',
                                        null,
                                        'Wanchain Developed To Spur Inter-Blockchain...'
                                    ),
                                    _react3.default.createElement(
                                        'p',
                                        { style: style },
                                        'Wanchain\'s architecture is built on the Ethereum blockchain. As stated in the whitepaper, Wanchain will act as a decentralized bank, allowing individuals to interact across the existing blockchain ecosystem by providing an intermediary platform that makes use of executable distributed code contracts (EDCCs).'
                                    ),
                                    _react3.default.createElement(
                                        'h4',
                                        null,
                                        'August 4, 2017'
                                    )
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'a',
                            { href: 'https://coinjournal.net/wanchain-enable-interoperability-blockchains/', target: '_blank' },
                            _react3.default.createElement(
                                'div',
                                { className: 'col-lg-4' },
                                _react3.default.createElement(
                                    'div',
                                    { className: styles.AstroModule7 },
                                    _react3.default.createElement(
                                        'h2',
                                        null,
                                        'Wanchain To Enable Interoperability Between...'
                                    ),
                                    _react3.default.createElement(
                                        'p',
                                        { style: style },
                                        'Wanchain, a public blockchain project by Chinese firm Wanglu Tech, is building a distributed financial infrastructure on the Ethereum network that allows for the exchange of assets among different blockchain networks. The initiative aims to enable more organizations to easily develop their own services and innovate in the \u201Cdistributed finance space.\u201D'
                                    ),
                                    _react3.default.createElement(
                                        'h4',
                                        null,
                                        'August 3, 2017'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Div5;
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

// export default connect(mapStateToProps, mapDispatchToProps)(Div5)


exports.default = Div5;

//# sourceMappingURL=Div5-compiled.js.map