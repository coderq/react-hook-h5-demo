import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import { inject, observer } from 'mobx-react';
import { Store } from 'global';
import './index.sass'

interface IProps extends RouteComponentProps {
  store?:Store
}
interface IState {

}

@inject('store')
@observer
class HomePage extends Component<Readonly<IProps>, IState> {
  render() {
    return this.props.store ? <div className="pg-home">
      <div>Name: {this.props.store.user.fullName}</div>
      <div>Age: {this.props.store.user.age}</div>
      <div>Gender: {this.props.store.user.gender}</div>
      <button onClick={this.props.store.user.getUserInfo}>Get</button>
    </div> : ''
  }
}

export default withRouter(HomePage);