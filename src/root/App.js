import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import HomePage from "../pages/HomePage";
import Navigation from "../layout/Navigation/Navigation";
import SingleSpacePage from "../pages/SingleSpacePage";
import NewSpacePage from "../pages/NewSpacePage";
import NotFound from '../pages/NotFound';

import { fetchSpacesAsync } from '../components/spaces/spacesActions';


class App extends Component {

  componentDidMount = () => {
    this.props.fetchSpacesAsync();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/spaces/add" component={NewSpacePage} />
          <Route path="/spaces/:id" component={SingleSpacePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchSpacesAsync })(App);
