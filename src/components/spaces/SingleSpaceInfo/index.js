import React from "react";
import SpaceKeyDetails from "./SpaceKeyDetails";
import SpaceHighlights from "./SpaceHighlights";
import SpaceOverview from "./SpaceOverview";
import SpaceAmenties from "./SpaceAmenties";

const SingleSpaceInfo = ({ space }) => {
  return (
    <div>
      <SpaceKeyDetails
        name={space.name}
        contactInfo={space.contactInfo}
        location={space.location}
      />
      <SpaceHighlights highlights={space.spaceHighlights} />
      <SpaceOverview description={space.description} />
      <SpaceAmenties amenities={space.amenities} />
    </div>
  );
};

export default SingleSpaceInfo;
