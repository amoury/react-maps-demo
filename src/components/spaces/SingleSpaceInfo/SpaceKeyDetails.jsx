import React from "react";
import {
  Header,
  Icon,
  Divider,
  Rating,
  Label
} from "semantic-ui-react";

const SpaceKeyDetails = () => {
  return (
    <div className="space_keyDetails">
      <Header as="h1">Impact Hub</Header>
      <Divider />
      <p>
        <Rating icon="star" defaultRating={3} maxRating={5} />
        <Label
          as="a"
          href="https://www.impacthub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkify" color="teal" />
          website
        </Label>
      </p>
      <p>
        <Icon name="marker map alternate" color="teal" />
        Jumeirah Village Circle, Dubai
      </p>
      <p>
        <Icon name="phone volume" color="teal" />
        +971 4 272 1837
      </p>
    </div>
  );
};

export default SpaceKeyDetails;
