/* global google */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import TwoColumn from "../layout/TwoColumn/TwoColumn";
import CardList from "../components/spaces/CardList/CardList";
import MegaMap from "../components/map/MegaMap/MegaMap";

class HomePage extends Component {
  state = {};

  componentDidMount = () => {
    let currentCoords = this.getUserCoordinates();
    this.setState({ userCoords: currentCoords });

    setTimeout(() => {
      if (!google) return;
      if (google && !this.state.gotDistance) return this.getUserDistance();
    }, 8000);
  };

  getUserCoordinates = () => {
    if (!navigator.geolocation) return null;
    const userCoords = {};
    navigator.geolocation.getCurrentPosition(position => {
      userCoords.lat = position.coords.latitude;
      userCoords.lng = position.coords.longitude;
    });
    return userCoords;
  };

  getUserDistance = () => {
    if (!this.state.userCoords) return null;
    console.log("Getting Distance Now");

    const { lat: userLat, lng: userLng } = this.state.userCoords;
    const destinationCoords = this.props.spaces.map(space => { 
      return space.location.coordinates
    });
    // const destinationCoords = this.props.spaces.map(
    //   space => {
    //     console.log(space.location);
    //     return new google.maps.LatLng(
    //       space.location.coordinates.lat,
    //       space.location.coordinates.lng
    //     )
    //   })

    const origin = new google.maps.LatLng(userLat, userLng);
    const matrix = new google.maps.DistanceMatrixService();

    matrix.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [...destinationCoords],
        travelMode: "DRIVING"
      },
      this.renderDetails
    );
  };

  renderDetails = (res, status) => {
    if (status === "OK") {
      console.log(res);
      let _spaces = [...this.props.spaces];
      let distanceData = res.rows[0].elements;
      let addressData = res.destinationAddresses;

      distanceData.forEach((data, index) => {
        _spaces[index].distanceData = data;
      });

      addressData.forEach((data, index) => {
        _spaces[index].address = data;
      });

      this.setState({ spaces: _spaces, gotDistance: true });
      return;
    }
    console.log(status);
  };

  render() {
    return (
      <Fragment>
        <TwoColumn
          left={<CardList spaces={this.props.spaces} />}
          right={<MegaMap spaces={this.props.spaces} />}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  spaces: state.spaces
});

export default connect(mapStateToProps)(HomePage);
