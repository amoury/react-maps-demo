import React from "react";
import SpaceKeyDetails from './SpaceKeyDetails';
import SpaceHighlights from './SpaceHighlights';
import SpaceOverview from './SpaceOverview';
import SpaceAmenties from './SpaceAmenties';


const SingleSpaceInfo = () => {
  return (
    <div>
      <SpaceKeyDetails />
      <SpaceHighlights />
      <SpaceOverview/>
      <SpaceAmenties/>
    </div>
  );
};

export default SingleSpaceInfo;
