import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from "react-router";
import { inject, observer } from 'mobx-react';
import { Store, BackendResponse } from 'global';
import { useCookies, withCookies, ReactCookieProps } from 'react-cookie';
import './index.sass'

import HeaderBar from 'component/HeaderBar'
import imgLogo from 'asset/image/Start the_logo@2x.png';
import { getExistsByMobile } from 'api/security'
import { AxiosResponse } from 'axios';

interface IProps extends RouteComponentProps, WithTranslation, ReactCookieProps {
  store?: Store
}
interface IState {
  mobile: String
}

@inject('store')
@observer
class AuthPage extends Component<Readonly<IProps>, IState> {
  state = {
    mobile: ''
  }
  changeLanguage = () => {
    this.props.i18n.changeLanguage('zhCn')
  }
  handleChange = (key:String) => (event:any) => {
    switch (key) {
      case 'otp': {
        this.setState({
          mobile: event.target.value
        })
        break
      }
    }
  }
  handleNext = () => {
    const { mobile } = this.state
    this.checkMobileExists(mobile)
  }
  checkMobileExists = (mobile:String) => {
    console.log('----mobile', mobile, getExistsByMobile)
    getExistsByMobile({ mobile })
      .then((res:AxiosResponse<BackendResponse>) => console.log(res))
  }
  render() {
    // const [ cookies ] = useCookies([ 'token' ])
    // console.log('----cookies', cookies)
    const { cookies } = this.props
    console.log('----cookies', cookies)
    return <div className="pg auth">
      <HeaderBar />
      <div className="body">
        <img className="img logo" src={imgLogo} alt="logo" />
        <div className="text logo">{this.props.t('logo.text')}</div>
        <div className="form auth">
          <div className="form-item">
            <div className="label">{this.props.t('form.label.otp')}</div>
            <div className="input">
              <input
                placeholder={this.props.t('form.placeholder.otp')}
                onChange={this.handleChange('otp')}
              />
              <div className="suffix">56s</div>
            </div>
          </div>
          <div className="form-item button">
            <div className="btn" onClick={this.handleNext}>Next</div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default withTranslation()(withRouter(withCookies(AuthPage)));