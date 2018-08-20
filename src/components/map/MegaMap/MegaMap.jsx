import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMap from "google-map-react";

import Marker from "../../../layout/Icons/Marker";

class MegaMap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    hoverKey: PropTypes.string,
    clickKey: PropTypes.string,
    onCenterChange: PropTypes.func,
    onZoomChange: PropTypes.func,
    onHoverKeyChange: PropTypes.func,

    spaces: PropTypes.array
  };

  static defaultProps = {
    center: [25.2048, 55.2708],
    zoom: 11
  };


  _onChildMouseEnter = key => {
    console.log(key);
    // this.props.onHoverKeyChange(key);
  };

  _onChildMouseLeave = () => {
    console.log("mouse leave");
    // this.props.onHoverKeyChange(null);
  };

  render() {
    const { userCoords } = this.props;
    const spaces = this.props.spaces.map(space => {
      const { id, name, location } = space;
      return (
        <Marker
        key={id}
        lat={location.coordinates.lat}
        lng={location.coordinates.lng}
        text={name}
        hover={this.props.hoverKey === id}
        />
      );
    });
    
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{
            key: "AIzaSyBH8UsljlMRkbUNYkY1j4iOOem07wv9rbQ",
            language: "en"
          }}
          center={ userCoords ? [userCoords.lat, userCoords.lng] : this.props.center}
          zoom={this.props.zoom}
          >
          {spaces}
        </GoogleMap>
      </div>
    );
  }
}

export default MegaMap;
