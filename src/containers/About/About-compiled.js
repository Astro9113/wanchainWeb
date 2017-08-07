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

var _dataTeam = require('./data/dataTeam');

var _dataTeam2 = _interopRequireDefault(_dataTeam);

var _dataTeamEn = require('./data/dataTeamEn');

var _dataTeamEn2 = _interopRequireDefault(_dataTeamEn);

var _dataAdvisory = require('./data/dataAdvisory');

var _dataAdvisory2 = _interopRequireDefault(_dataAdvisory);

var _dataAdvisoryEn = require('./data/dataAdvisoryEn');

var _dataAdvisoryEn2 = _interopRequireDefault(_dataAdvisoryEn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    About: {
        displayName: 'About'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'D:/zsunData/myPro/react-redux-universal-hot-example/src/containers/About/About.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var About = _wrapComponent('About')(function (_Component) {
    (0, _inherits3.default)(About, _Component);

    function About() {
        (0, _classCallCheck3.default)(this, About);
        return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
    }

    (0, _createClass3.default)(About, [{
        key: 'render',

        // static propTypes = {
        //     language: PropTypes.string,
        // };

        value: function render() {
            // const {language} = this.props;
            var blog1 = require('./image/blog1.png');
            var blog2 = require('./image/team.png');
            var styles = require('./About.scss');

            var teamList = void 0;
            teamList = _dataTeam2.default.map(function (value, index) {
                return _react3.default.createElement(
                    'div',
                    { className: styles.aboutTitleDiv + ' col-lg-4', key: index },
                    _react3.default.createElement('img', { src: value.img }),
                    _react3.default.createElement(
                        'h4',
                        null,
                        value.title,
                        _react3.default.createElement(
                            'small',
                            null,
                            value.position
                        )
                    ),
                    _react3.default.createElement(
                        'p',
                        null,
                        value.describe
                    )
                );
            });

            var advisoryList = void 0;
            advisoryList = _dataAdvisory2.default.map(function (value, index) {
                return _react3.default.createElement(
                    'div',
                    { className: styles.aboutTitleDiv2 + ' col-lg-4', key: index },
                    _react3.default.createElement('img', { src: value.img }),
                    _react3.default.createElement(
                        'h4',
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
                { className: styles.aboutDiv },
                _react3.default.createElement(
                    'div',
                    { className: styles.aboutHeader },
                    _react3.default.createElement('img', { className: styles.aboutHeaderImg1, src: blog1 }),
                    _react3.default.createElement('img', { className: styles.aboutHeaderImg2, src: blog2 }),
                    _react3.default.createElement(
                        'h2',
                        null,
                        '\u9879\u76EE\u56E2\u961F'
                    ),
                    _react3.default.createElement(
                        'p',
                        null,
                        'WANCHAIN TEAM'
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: styles.aboutBody + ' container' },
                    _react3.default.createElement(
                        'div',
                        { className: styles.aboutTitle },
                        _react3.default.createElement(
                            'h2',
                            null,
                            '\u6838\u5FC3\u56E2\u961F'
                        ),
                        _react3.default.createElement(
                            'p',
                            null,
                            'WANCHAIN Team'
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'col-lg-12', style: { marginBottom: '20px' } },
                        teamList
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: styles.aboutTitle },
                        _react3.default.createElement(
                            'h2',
                            null,
                            '\u987E\u95EE\u56E2\u961F'
                        ),
                        _react3.default.createElement(
                            'p',
                            null,
                            'Advisory Group'
                        )
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'col-lg-12' },
                        advisoryList
                    )
                )
            );
        }
    }]);
    return About;
}(_react2.Component));

// const mapDispatchToProps = (dispatch) => {
//     return {
//
//     };
// };
//
// const mapStateToProps = (state) => ({
//     language : state.lang.language,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(About)


exports.default = About;

//# sourceMappingURL=About-compiled.js.map