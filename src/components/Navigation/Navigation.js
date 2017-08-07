import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
// import cookie from 'react-cookie';

import { getClientWidthFunc, getNavButtonFunc, changeLangFunc } from 'redux/modules/auth';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton}),
    {getClientWidthFunc, getNavButtonFunc, changeLangFunc})
class Navigation extends Component {
    static propTypes = {
      clientWidth: PropTypes.number,
      getClientWidthFunc: PropTypes.func,

      navButton: PropTypes.bool,
      getNavButtonFunc: PropTypes.func,
      changeLangFunc: PropTypes.func,
    };

    componentDidMount() {
      const width = document.documentElement.clientWidth;
      this.props.getClientWidthFunc(width);
    }

    onChangeEn() {
      this.props.changeLangFunc('en');
    }

    onChangeZn() {
      this.props.changeLangFunc('zn');
    }

    getNav() {
      const navButton = this.props.navButton;
      this.props.getNavButtonFunc(!navButton);
    }

    render() {
      // const {language} = this.props;
      const styles = require('./Navigation.scss');

      const logo = require('./image/logo2.png');
      const nav = require('./image/nav2.png');
      const github = require('./image/github2.png');

      const {navButton, clientWidth} = this.props;

      const style = {display: 'none'};
      const style1 = {display: 'inline_block'};

      return (
            <div className={styles.navRoot}>
                <div className={styles.navHeader + ' container'}>
                    <IndexLink to="/"><img src={logo} /></IndexLink>
                    <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)}/>
                    {!navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style}>
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li><a href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">白皮书</a></li>
                            <li><Link to="/about">关于</Link></li>
                            <li><Link to="/">博客</Link></li>
                        </ul>
                    </div>
                    }

                    {navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style1}>
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li><a href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">白皮书</a></li>
                            <li><Link to="/about">关于</Link></li>
                            <li><Link to="/">博客</Link></li>
                        </ul>
                    </div>
                    }

                    {!navButton && clientWidth >= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style1}>
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li><a href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">白皮书</a></li>
                            <li><Link to="/about">关于</Link></li>
                            <li><Link to="/">博客</Link></li>
                        </ul>
                    </div>
                    }

                    <div className={styles.navGit}>
                        <a href="https://github.com/wanchain" target="_blank"><img src={github} /></a>
                        <a onClick={() => {this.onChangeZn();}}>中文</a>{' | '}
                        <a onClick={() => {this.onChangeEn();}}>English</a>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeLanguage: (step) => {
//             dispatch(changeLanguage(step));
//         },
//         login: () => {
//             dispatch(login());
//         },
//         users: () => {
//             dispatch(users());
//         },
//     };
// };
//
// const mapStateToProps = (state) => ({
//     language : state.lang.language,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
export default Navigation;
