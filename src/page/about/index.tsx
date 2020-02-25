import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Store } from 'global';
import logo from 'asset/logo.svg';
import './index.scss';

interface IProps extends RouteComponentProps {
  store?:Store
}
interface IState {

}
class App extends Component<Readonly<IProps>, IState> {
  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  } 
}
export default withRouter(App);
