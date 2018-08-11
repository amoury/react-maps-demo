import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Progress } from 'semantic-ui-react';
import CenteredColumn from '../layout/CenteredColumn/CenteredColumn';
import FormBasicInfo from '../components/spaces/AddSpaceForm/FormBasicInfo';
import FormContactInfo from '../components/spaces/AddSpaceForm/FormContactInfo';

class NewSpacePage extends Component {
  state={
    progress: 40
  }

  render () {
    const { match, location } = this.props;
    let shouldRedirect = match.url === location.pathname;

    return (
      <Fragment>
        <CenteredColumn top={ <Progress percent={this.state.progress} color='teal' /> }>

          { shouldRedirect && <Redirect to="/spaces/add/basic-info" /> }
          <Switch>
            <Route path="/spaces/add/basic-info" component={FormBasicInfo} />
            <Route path="/spaces/add/contact-info" component={FormContactInfo} />
          </Switch>
          
        
        </CenteredColumn>
      </Fragment>
    );
  }
}

export default NewSpacePage;