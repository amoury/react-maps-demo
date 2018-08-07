import React, {Fragment} from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Navigation from '../Navigation/Navigation';

const TwoColumn = ({ left, right }) => {
  return (
    <Fragment>
      <Navigation />
      <Container>
        <Grid>
          <Grid.Column width={10}>
            { left }
          </Grid.Column>

          <Grid.Column width={6}>
            { right }
          </Grid.Column>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default TwoColumn;
