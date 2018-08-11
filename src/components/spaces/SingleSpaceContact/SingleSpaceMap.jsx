import React from "react";
import GoogleMap from "google-map-react";

import Marker from "../../../layout/Icons/Marker";

const SingleSpaceMap = () => {
  return (
    <div style={{ height: "25vh", width: "100%"}}>
      <GoogleMap
        bootstrapURLKeys={{
          key: "AIzaSyBH8UsljlMRkbUNYkY1j4iOOem07wv9rbQ",
          language: "en"
        }}
        center={[25.0359, 55.1816]}
        zoom={11}
      >
        <Marker
          key="001"
          lat={25.0359}
          lng={55.1816}
          text={'Impact Hub'}
        />
      </GoogleMap>
    </div>
  );
};

export default SingleSpaceMap;
