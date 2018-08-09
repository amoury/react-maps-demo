/* global google */
import React, { Component, Fragment } from "react";
import TwoColumn from "../layout/TwoColumn/TwoColumn";
import CardList from "../components/spaces/CardList/CardList";
import MegaMap from "../components/map/MegaMap/MegaMap";

const spaces = [
  {
    id: "001",
    name: "In5",
    description:
      "In5 is a platform that gives designers, entrepreneurs and professionals of all design, tech and media disciplines and career levels access to a comprehensive suite of benefits for promotion, talent development, business support in addition to workspace, facilities and equipment.",
    coords: { lat: 25.0359, lng: 55.1816 },
    mainImage: "https://source.unsplash.com/random/",
    tags: ["Free Wifi", "Pet-friendly", "Good Music"]
  },
  {
    id: "002",
    name: "Impact Hub",
    description:
      "Impact Hub Dubai is one of UAE’s largest community of entrepreneurs, creatives and techies. ",
    coords: { lat: 25.2028, lng: 55.276 },
    mainImage: "https://source.unsplash.com/random/",
    tags: ["Free Coffee", "Pet-friendly", "Good Music"]
  },
  {
    id: "003",
    name: "Nest",
    description:
      "NEST is one of the world’s first fully integrated co-working spaces within a worldwide branded hotel.",
    coords: { lat: 25.0974, lng: 55.1744 },
    mainImage: "https://source.unsplash.com/random/",
    tags: ["Free Coffee", "Pet-friendly", "Good Music"]
  }
];

class HomePage extends Component {
  state = {
    spaces: spaces
  };

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
    const destinationCoords = this.state.spaces.map(
      space => new google.maps.LatLng(space.coords.lat, space.coords.lng)
    );

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
      let _spaces = [...this.state.spaces];
      let distanceData = res.rows[0].elements;
      let addressData = res.destinationAddresses;

      distanceData.forEach((data, index) => {
        _spaces[index].distanceData = data;
      });

      addressData.forEach((data, index) => {
        _spaces[index].addressData = data;
      })

      this.setState({ spaces: _spaces, gotDistance: true });
      return;
    }
    console.log(status);
  };

  render() {
    return (
      <Fragment>
        <TwoColumn
          left={ <CardList spaces={this.state.spaces} /> }
          right={ <MegaMap spaces={this.state.spaces} /> }
        />
      </Fragment>
    );
  }
}

export default HomePage;
