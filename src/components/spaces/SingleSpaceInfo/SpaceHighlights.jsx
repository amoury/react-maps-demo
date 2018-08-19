import React from "react";
import { Segment, Header, Icon } from "semantic-ui-react";

const SpaceHighlights = ({highlights}) => {
  if(highlights === undefined) return null;
  const renderHighlights = highlights.map( highlight => {
    return (
      <li key={highlight.field}>
        <Icon name="heart" color="teal" />
        { highlight.value }
      </li>
    )
  })
  return (
    <Segment>
      <Header as="h2" className="segment_header">
        Space Highlights
      </Header>

      <div>
        <ul style={{ listStyle: "none" }}>
          { renderHighlights }
        </ul>
      </div>
    </Segment>
  );
};

export default SpaceHighlights;
