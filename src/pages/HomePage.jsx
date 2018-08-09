/* global google */
import React, { Component, Fragment } from 'react';
import TwoColumn from '../layout/TwoColumn/TwoColumn';
import CardList from '../components/spaces/CardList/CardList';
import MegaMap from '../components/map/MegaMap/MegaMap';

const spaces = 
  [
    {
      id: "001",
      name: "In5",
      description:
        "In5 is a platform that gives designers, entrepreneurs and professionals of all design, tech and media disciplines and career levels access to a comprehensive suite of benefits for promotion, talent development, business support in addition to workspace, facilities and equipment.",
      coords: { lat: 25.0359, lng: 55.1816 },
      tags: ["Free Wifi", "Pet-friendly", "Good Music"]
    },
    {
      id: "002",
      name: "Impact Hub",
      description:
        "Impact Hub Dubai is one of UAE’s largest community of entrepreneurs, creatives and techies. ",
      coords: { lat: 25.2028, lng: 55.2760 },
      tags: ["Free Coffee", "Pet-friendly", "Good Music"]
    },
    {
      id: "003",
      name: "Nest",
      description:
        "NEST is one of the world’s first fully integrated co-working spaces within a worldwide branded hotel.",
      coords: { lat: 25.0974, lng: 55.1744 },
      tags: ["Free Coffee", "Pet-friendly", "Good Music"]
    }
  ];

 
class HomePage extends Component {
  state = {
    spaces: spaces,
    selectedCardId: ''
  };

  componentDidMount = () => {
    let currentCoords = this.getUserCoordinates();
    this.setState({userCoords: currentCoords});
  }

  getUserCoordinates = () => {
    if (!navigator.geolocation) return null;
    const userCoords = {};
    navigator.geolocation.getCurrentPosition( position => {
      userCoords.lat = position.coords.latitude;
      userCoords.lng = position.coords.longitude;
    });
    return userCoords;
  }

  getUserDistance = () => {
    if(!this.state.userCoords) return null;
    const { lat: lat0, lng: lng0 } = this.state.spaces[0].coords;
    const { lat: lat1, lng: lng1 } = this.state.spaces[1].coords;
    
    const origin = new google.maps.LatLng(this.state.userCoords.lat, this.state.userCoords.lng);
    const destination0 = new google.maps.LatLng(lat0, lng0);
    const destination1 = new google.maps.LatLng(lat1, lng1);
    const matrix = new google.maps.DistanceMatrixService();
   
    matrix.getDistanceMatrix({
      origins: [origin],
      destinations: [destination0, destination1],
      travelMode: 'DRIVING'
    },
    this.renderDetails)
  }

  renderDetails = (res, status) => {
    if (status === "OK") {
      console.log(res.rows);
      this.setState({
        distanceData: res.rows[0].elements
      });
      return;
    }
    console.log(status);
  }


  onCardImageClick = (id) => {
    const currentCard = this.state.spaces.filter(space => space.id === id)[0];
    this.setState({ selectedCardId: currentCard.id });
  }

  handlePopup = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state.isOpen);
  };

  render() {
    return (
      <Fragment>
        <TwoColumn
          left={
            <CardList 
              _handleImageClick={this.onCardImageClick} 
              spaces={this.state.spaces} 
              selectedCard = {this.state.selectedCardId}
              getUserDistance = {this.getUserDistance}  
            />
          }
          right={<MegaMap _isOpen={this.state.isOpen} spaces={this.state.spaces} selectedCard={this.state.selectedCardId}/>}
        />
      </Fragment>
    );
  }
}

export default HomePage;