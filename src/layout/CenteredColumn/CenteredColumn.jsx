import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';

const CenteredColumn = ({ top, children }) => {
  return (
    <Fragment>
      { top }
      <Grid>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>
          {children}
        </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid>
    </Fragment>
  )
}

export default CenteredColumn
