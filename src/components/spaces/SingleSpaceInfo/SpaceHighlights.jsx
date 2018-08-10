import React from "react";
import { Segment, Header, Icon } from "semantic-ui-react";

const SpaceHighlights = () => {
  return (
    <Segment>
      <Header as="h2" className="segment_header">
        Space Highlights
      </Header>

      <div>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Icon name="caret right" color="teal" />
            Great Location - Since it is located in Jumeirah, it has direct
            connectivity from the metro station.
          </li>

          <li>
            <Icon name="caret right" color="teal" />
            High Speed Wifi - Wifi speeds reaching upto 10GB
          </li>
        </ul>
      </div>
    </Segment>
  );
};

export default SpaceHighlights;
