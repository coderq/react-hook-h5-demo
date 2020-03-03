import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import { CookiesProvider } from 'react-cookie';
import i18n from 'i18n';
import Provider from 'store';
// import About from 'page/about';
import Home from 'page/home';
import Auth from 'page/auth';
import AuthCaptcha from 'page/auth/captcha'
import Test from 'page/test';

class App extends Component {
  render() {
    return <I18nextProvider i18n={i18n}>
      <CookiesProvider>
        <Provider>
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
              <Route exact path="/auth/captcha">
                <AuthCaptcha />
              </Route>
              <Route exact path="/test">
                <Test />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </CookiesProvider>
    </I18nextProvider>
  } 
}

export default App;
