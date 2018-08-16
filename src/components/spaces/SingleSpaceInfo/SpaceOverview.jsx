import React from "react";
import { Grid, Header, Segment, Icon } from "semantic-ui-react";

const SpaceOverview = ({description}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <Header as="h2" className="segment_header">
          Overview
        </Header>
        <p>
          {description}
        </p>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment style={{ textAlign: "center" }}>
          <Header as="h2" className="segment_header">
            <Icon name="clock outline" color="teal" />
            Timings
          </Header>

          <div>
            <p>
              <strong>Mon-Fri</strong>
              <br/>
              8:00 am - 9:00 pm
            </p>
            <p>
              <strong>Sat</strong>
              <br/>
              8:00 am - 2:00 pm
            </p>
            <p>
              <strong>Sun</strong>
              <br/>
              Off
            </p>
            
          </div>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default SpaceOverview;
