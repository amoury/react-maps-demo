import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import Navigation from '../layout/Navigation/Navigation';
import SingleSpacePage from '../pages/SingleSpacePage';
import NewSpacePage from '../pages/NewSpacePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/about" component={ AboutPage } />
          <Route path="/spaces/add" component={ NewSpacePage } />
          <Route path="/spaces/:id" component={ SingleSpacePage } />
          <Route exact path="/" component={ HomePage } />
        </Switch>
      </div>
    );
  }
}

export default App;
