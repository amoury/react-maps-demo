import React from "react";
import { Grid, Header, Segment, Icon } from "semantic-ui-react";

const SpaceOverview = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <Header as="h2" className="segment_header">
          Overview
        </Header>
        <p>
          Impact Hub offers a professional working space, perfect for your
          business needs. Whether you are a freelancer, a startup or an
          experienced professional, here you will get the opportunity to work
          with like minded people. Productivity is often dictated by the work
          environment, and The Works At KRDS is aware of this aspect. Therefore,
          you are welcomed to join a beautiful community of talented people and
          enjoy the perks of working in a creative office. There are 40 seats
          available in the coworking area, a conference room featuring eight
          seats and a power backup supply in case the power runs out.
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
