import React, { Component } from 'react';

import SpaceKeyDetails from "./SpaceKeyDetails";
import SpaceHighlights from "./SpaceHighlights";
import SpaceOverview from "./SpaceOverview";
import SpaceAmenties from "./SpaceAmenties";
import Loader from '../../../layout/Loader/Loader';


class SingleSpaceInfo extends Component {
  render () {
  if(!this.props.space) return <Loader/>;
    const { space } = this.props;
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
  }
}




export default SingleSpaceInfo;
