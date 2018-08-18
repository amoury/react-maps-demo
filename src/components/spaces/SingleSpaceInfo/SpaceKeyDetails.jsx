import React from "react";
import {
  Header,
  Icon,
  Divider,
  Rating,
  Label
} from "semantic-ui-react";

const SpaceKeyDetails = ({ name, contactInfo, location }) => {
  return (
    <div className="space_keyDetails">
      <Header as="h1">{name}</Header>
      <Divider />
      <div style={{ display: "flex", marginBottom: "20px", justifyContent: "space-between" }}>
        <Rating icon="star" defaultRating={3} maxRating={5} />
        <p>
          <Label
            as="a"
            href={ contactInfo.siteLink }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkify" color="teal" />
              website
          </Label>
        </p>
      </div>
      <p>
        <Icon name="marker map alternate" color="teal" />
        { location.address }
      </p>
      <p>
        <Icon name="phone volume" color="teal" />
        {contactInfo.contactNumber}
      </p>
    </div>
  );
};

export default SpaceKeyDetails;
