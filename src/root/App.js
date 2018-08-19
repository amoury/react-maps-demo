import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

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
          <Route path="/spaces/:id/edit" component={NewSpacePage} />
          <Route path="/spaces/add" component={NewSpacePage} />
          <Route path="/spaces/:id" component={SingleSpacePage} />
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
        <ReduxToastr />
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchSpacesAsync })(App));
