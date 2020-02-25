import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'mobx-react';
import store from 'store';
import i18n from 'i18n';
import Test from 'page/about';
import Home from 'page/home';
import Auth from 'page/auth';

class App extends Component {
  render() {
    return <I18nextProvider i18n={i18n}>
      <CookiesProvider>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Test />
              </Route>
              <Route exact path="/auth">
                <Auth />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </CookiesProvider>
    </I18nextProvider>
  } 
}

export default App;
