import React from "react";
import GoogleMap from "google-map-react";

import Marker from "../../../layout/Icons/Marker";

const SingleSpaceMap = ({ coordinates }) => {
  return (
    <div style={{ height: "25vh", width: "100%" }}>
      <GoogleMap
        bootstrapURLKeys={{
          key: "AIzaSyBH8UsljlMRkbUNYkY1j4iOOem07wv9rbQ",
          language: "en"
        }}
        center={[coordinates.lat, coordinates.lng]}
        zoom={11}
      >
        <Marker
          key="001"
          lat={coordinates.lat}
          lng={coordinates.lng}
          text={"Impact Hub"}
        />
      </GoogleMap>
    </div>
  );
};

export default SingleSpaceMap;
