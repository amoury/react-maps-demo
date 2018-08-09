import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navigation from './layout/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/about" component={ AboutPage } />
          <Route exact path="/" component={ HomePage } />
        </Switch>
      </div>
    );
  }
}

export default App;
