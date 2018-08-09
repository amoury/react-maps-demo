import React, {Fragment} from 'react';
import { Grid } from 'semantic-ui-react';

const TwoColumn = ({ top, left, right }) => {
  return (
    <Fragment>
        { top }
        
        <Grid stackable>
          <Grid.Column width={10}>
            <div style={{ paddingLeft: '10px'}}>
              { left }
            </div>
          </Grid.Column>

          <Grid.Column width={6}>
            { right }
          </Grid.Column>
        </Grid>
    </Fragment>
  )
}

export default TwoColumn;
