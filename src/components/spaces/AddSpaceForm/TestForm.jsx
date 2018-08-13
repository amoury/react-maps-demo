/* global google */

import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Script from 'react-load-script';

// var icon = {
//   url:
//     "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//   size: new google.maps.Size(71, 71),
//   origin: new google.maps.Point(0, 0),
//   anchor: new google.maps.Point(17, 34),
//   scaledSize: new google.maps.Size(25, 25)
// };

class TestForm extends Component {
  state={
    coords: {}
  }

  componentDidMount = () => {
    this.getUserCoordinates();
  }


  handleScript = () => {
    const { lat: userLat = 25.3506523, lng: userLng = 55.393124099999994} = this.state.coords;

    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: userLat, lng: userLng },
      zoom: 11,
      mapTypeId: "roadmap"
    });

    const searchBox = new google.maps.places.SearchBox(document.getElementById("searchTextField"));

     map.addListener("bounds_changed", function() {
       searchBox.setBounds(map.getBounds());
     });

     var markers = [];

     searchBox.addListener("places_changed", () => {
        var places = searchBox.getPlaces();
        if (places.length == 0) {
          return;
        }
    
        this.setState({places})
        
        // Clear out the old markers.
        markers.forEach(function(marker) {
          marker.setMap(null);
        });
        markers = [];
        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
    
        places.forEach(function(place) {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }

          var icon = { url: place.icon, size: new google.maps.Size(71, 71), origin: new google.maps.Point(0, 0), anchor: new google.maps.Point(17, 34), scaledSize: new google.maps.Size(25, 25) };

          // Create a marker for each place.
          markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
     })




  };



  getUserCoordinates = () => {
    if (!navigator.geolocation) return null;
    const userCoords = {};
    navigator.geolocation.getCurrentPosition(position => {
      userCoords.lat = position.coords.latitude;
      userCoords.lng = position.coords.longitude;
    });
    // return userCoords;
    this.setState({coords: userCoords});
  };


  render() {
    return (
      <div>
        <Segment.Group>
          <Segment attached="top">
            <input type="text" id="searchTextField" onChange={this.callback}/>
          </Segment>
          <Segment attached>
            <div id="map" style={{ height: "300px", width: "100%" }}/>
          </Segment>
        </Segment.Group>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6kIS7kVZhRHNLCgfBCYy7X77D9MRNKFg&libraries=places"
          onLoad={this.handleScript}
        />
      </div>
    );
  }
}

export default TestForm;