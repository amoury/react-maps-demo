import React, { Component } from "react";
import PropTypes from 'prop-types';
import GoogleMap from "google-map-react";
import { Popup } from "semantic-ui-react";

import Marker from './Marker';

class TrialMap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    hoverKey: PropTypes.string,
    clickKey: PropTypes.string,
    onCenterChange: PropTypes.func,
    onZoomChange: PropTypes.func,
    onHoverKeyChange: PropTypes.func,

    greatPlaces: PropTypes.array
  };

  static defaultProps = {
    center: [59.838043, 30.337157],
    zoom: 9,
    greatPlaces: [
      { id: "A", lat: 59.955413, lng: 30.337844 },
      { id: "B", lat: 59.724, lng: 30.08 }
    ]
  };

  // _onBoundsChange = (center, zoom /* , bounds, marginBounds */) => {
  //   this.props.onCenterChange(center);
  //   this.props.onZoomChange(zoom);
  // };

  _onChildClick = (key, childProps) => {
    console.log('key ', key);
    // this.props.onCenterChange([childProps.lat, childProps.lng]);
  };

  _onChildMouseEnter = (key) => {
    console.log(key);
    // this.props.onHoverKeyChange(key);
  };

  _onChildMouseLeave = () => {
    console.log('mouse leave');
    // this.props.onHoverKeyChange(null);
  };

  render() {

    const places = this.props.greatPlaces.map( place => {
      const {id, ...coords} = place;

      return (
        <Marker 
          key={id}
          {...coords}
          text={id}
          hover={this.props.hoverKey === id}
        /> 
      );
    });

    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{
            key: "AIzaSyBrtQTf_1K6cTuUxdL_tukzuig5ph84KNQ",
            language: "en"
          }}
          center={this.props.center}
          zoom={this.props.zoom}
          onChildClick={this._onChildClick}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
        >
          {places}
        </GoogleMap>
      </div>
    );
  }
}

export default TrialMap;
