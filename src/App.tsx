import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Test from 'src/pages/app';
import Home from 'src/pages/home';

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Test />
        </Route>
      </Switch>
    </Router>
  } 
}

export default App;
