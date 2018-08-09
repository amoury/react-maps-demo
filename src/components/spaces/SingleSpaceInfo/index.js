import React from "react";
import SpaceKeyDetails from './SpaceKeyDetails';
import SpaceHighlights from './SpaceHighlights';
import SpaceOverview from './SpaceOverview';


const SingleSpaceInfo = () => {
  return (
    <div>
      <SpaceKeyDetails />
      <SpaceHighlights />
      <SpaceOverview/>
    </div>
  );
};

export default SingleSpaceInfo;
