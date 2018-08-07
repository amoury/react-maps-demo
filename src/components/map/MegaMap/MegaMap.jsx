import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "semantic-ui-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MegaMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBrtQTf_1K6cTuUxdL_tukzuig5ph84KNQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Icon
            name="map marker alternate"
            lat={59.955413}
            lng={30.337844}
            size="large"
          />
          <Icon
            name="map marker alternate"
            lat={59.955413}
            lng={30.557844}
            size="large"
          />
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"Kreyser Avrora"}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MegaMap;
