import React, { Component, Fragment } from 'react';
import { Grid, Sticky } from 'semantic-ui-react';


class TwoColumn extends Component {
  state = {};

  handleContextRef = contextRef => this.setState({ contextRef })
  
  render() {
    const { top, left, right } = this.props;
    const { contextRef } = this.state;

    return (
      <Fragment>
        {top}
        <div ref={this.handleContextRef}>
          <Grid stackable>
            <Grid.Column width={10}>
              <div style={{ paddingLeft: "10px" }}>{left}</div>
            </Grid.Column>

            <Grid.Column width={6}>
              <Sticky context={contextRef}>{right}</Sticky>
            </Grid.Column>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default TwoColumn;

