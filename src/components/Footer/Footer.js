import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

// import WarningModal from '../../../container/Warn';
// import { subscribe } from '../../../store/home';
// import { warningOpenFunc, warningCloseFunc, warningMsgFunc} from '../../../store/warning';

// import emailCheck from './utils/emailCheck';

@connect(
    state => ({clientWidth: state.auth.clientWidth, }),
    )
class Footer extends React.Component {

    static propTypes = {
      // language: PropTypes.string,
      // subscribe: PropTypes.func,
      // subscribeState: PropTypes.object,
      clientWidth: PropTypes.number,

      // warningOpenFunc: PropTypes.func,
      // warningCloseFunc: PropTypes.func,
      // warningMsgFunc: PropTypes.func,
      // warningModal: PropTypes.bool,
      // warningMsg: PropTypes.string,
    };

    // componentWillMount() {
    //     this.props.warningCloseFunc();
    // }

    onSubmit = () => {
      document.getElementById('wechat').style.position = 'absolute';
      document.getElementById('wechat').style.display = 'inline-block';
      if ( this.props.clientWidth >= 320 && this.props.clientWidth <= 767) {
        document.getElementById('wechat').style.top = '-170px';
      } else if (this.props.clientWidth >= 1025) {
        document.getElementById('wechat').style.top = '-90px';
      } else {
        document.getElementById('wechat').style.top = '-118px';
        document.getElementById('wechat').style.left = '-28px';
      }
    };

    onLeave =() => {
      document.getElementById('wechat').style.display = 'none';
    };

    onQQ = () => {
      document.getElementById('qq').style.position = 'absolute';
      document.getElementById('qq').style.top = '-90px';
      document.getElementById('qq').style.display = 'inline-block';
    };

    onQQLeave = () => {
      document.getElementById('qq').style.display = 'none';
    };

    // onClick = () => {
    //     const {wanchain_subscribe} = this.refs;
    //
    //     let msg;
    //     if (emailCheck(wanchain_subscribe.value)) {
    //         const data = {email: wanchain_subscribe.value};
    //         this.props.subscribe(data);
    //
    //         wanchain_subscribe.value = '';
    //
    //         const self = this;
    //         global.dataFeedback.once('onSubscribeComplete', () => {
    //             if (self.props.subscribeState && self.props.subscribeState.message === 'Subscribe created!') {
    //                 if (self.props.language === 'zn') {msg = '订阅成功，请注意查收邮箱'} else {msg= 'Success! Please check the mailbox'}
    //                 self.props.warningMsgFunc(msg);
    //             } else if (self.props.subscribeState && self.props.subscribeState.errors && self.props.subscribeState.errors[0].message === 'email must be unique') {
    //                 if (self.props.language === 'zn') {msg = '您已订阅成功，无需重复订阅'} else {msg= 'You have subscribed successfully, Not need subscribe again'}
    //                 self.props.warningMsgFunc(msg);
    //             } else { if (self.props.language === 'zn') {msg = '订阅失败，请稍后再试'} else {msg= 'Failed! Please try again later'}
    //                 self.props.warningMsgFunc(msg);
    //             }
    //             self.props.warningOpenFunc();
    //         });
    //     } else {
    //         if (this.props.language === 'zn') {msg = '电子邮件地址必须包括 ( @ 和 . )'} else {msg= 'E-mail addresses must include (@ and .)'}
    //         this.props.warningMsgFunc(msg);
    //         this.props.warningOpenFunc();
    //     }
    // };

    // showWarn = () => {
    //     this.props.warningOpenFunc();
    // };
    // closeWarn = () => {
    //     this.props.warningMsgFunc('');
    //     this.props.warningCloseFunc();
    // };

    render() {
      // const {language} = this.props;

      const styles = require('./Footer.scss');
      const email = require('./image/email.png');
      const robot1 = require('./image/reddit.png');
      const slack1 = require('./image/slack.png');

      const twitter1 = require('./image/twitter.png');
      const webo1 = require('./image/web.png');
      const wechat1 = require('./image/webcat.png');
      const qq1 = require('./image/qq.png');

      const wecater = require('./image/wecatZn.png');
      const qqer = require('./image/qqer.png');

      return (
            <div className={styles.FooterRoot}>
                <div className={styles.FooterContainer + ' container'}>
                    <div className={styles.FooterformGroup + ' form-group col-lg-4'}>
                        <img src={email}/>
                        <input type="text" className="form-control" id="name" ref="wanchain_subscribe" placeholder="Please enter the email address" disabled="disabled"/>
                        <div className={styles['submit-area']}>
                            <a className={styles['submit-button'] + ' btn'} data-toggle="modal" data-target=".bs-example-modal-lg">{' + '}订阅</a>
                        </div>
                        <p>更多项目请咨询：<span>info@wanchain.org</span></p>
                    </div>

                    <div className={styles.formGroupDiv + ' form-group col-lg-4'}>
                        <img src={wecater} className={styles.wechat} id="wechat"/>
                        <img src={qqer} className={styles.qq} id="qq"/>
                        <a ><img src={robot1}/></a>
                        <a href="https://wanchain.herokuapp.com/" target="_blank"><img src={slack1}/></a>
                        <a href="https://twitter.com/wanchain_org" target="_blank"><img src={twitter1}/></a>
                        <a href="http://weibo.com/wanchain" target="_blank"><img src={webo1}/></a>
                        <a onClick={this.onSubmit.bind(this)} onMouseOver={this.onSubmit.bind(this)} onMouseLeave={this.onLeave.bind(this)}><img src={wechat1}/></a>
                        <a onClick={this.onQQ.bind(this)} onMouseOver={this.onQQ.bind(this)} onMouseLeave={this.onQQLeave.bind(this)}><img src={qq1}/></a>
                    </div>
                </div>
                <div className={styles.FooterEnd}><span>©wanchain 2017 版权所有 all rights reserved</span></div>
            </div>
      );
    }
}

export default Footer;

// <WarningModal show={this.props.warningModal} onHide={this.showWarn} onClose={this.closeWarn} message={this.props.warningMsg}/>
