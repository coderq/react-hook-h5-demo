import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import { inject, observer } from 'mobx-react';
import { Store } from 'global';
import './index.sass';

interface IProps extends RouteComponentProps {
  store?: Store
}
interface IState {

}

@inject('store')
@observer
class HeaderBar extends Component<Readonly<IProps>, IState> {
  render() {
    return <div className="nav header">
      <div className="btn return"></div>
    </div>
  }
}

export default withRouter(HeaderBar);