/* global google */
import React, { Component } from "react";
import { Form, Header, Segment, Divider, Button } from "semantic-ui-react";
import Script from "react-load-script";
import { Link } from "react-router-dom";

class FormLocationInfo extends Component {
  state={
    coords: {}
  }

  componentDidMount = () => {
    this.getUserCoordinates();
  };

  getUserCoordinates = () => {
    if (!navigator.geolocation) return null;
    const userCoords = {};
    navigator.geolocation.getCurrentPosition(position => {
      userCoords.lat = position.coords.latitude;
      userCoords.lng = position.coords.longitude;
    });
    // return userCoords;
    this.setState({ coords: userCoords });
  };

  handleSpaceUpdates = places => {
    const { name, international_phone_number, formatted_address, website, geometry } = places[0];
    const _space = { ...this.props._space };
    _space.name = name;
    _space.contactInfo.contactNumber = international_phone_number;
    _space.contactInfo.siteLink = website;
    _space.location.address = formatted_address;
    _space.location.coordinates = geometry.location;

    this.props.handleMapData(_space);
  }

  handleMarkers = (places, map, markers) => {
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
  }

  handleScript = () => {
    var markers = [];
    const { lat: userLat = 25.3506523, lng: userLng = 55.393124099999994 } = this.state.coords;
    const mapOptions = { center: { lat: userLat, lng: userLng }, zoom: 11, mapTypeId: "roadmap" };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const searchBox = new google.maps.places.SearchBox(
      document.getElementById("searchTextField")
    );

    map.addListener("bounds_changed", function() {
      searchBox.setBounds(map.getBounds());
    });


    searchBox.addListener("places_changed", () => {
      var places = searchBox.getPlaces();
      if (places.length == 0) return;

      this.handleSpaceUpdates(places);
      this.handleMarkers(places, map, markers);      
    });
  };

  render() {
    return (
      <Segment.Group>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6kIS7kVZhRHNLCgfBCYy7X77D9MRNKFg&libraries=places"
          onLoad={this.handleScript}
        />
        <Segment attached="top">
          <Header as="h2" className="segment_header" color="teal">
            Location Information
          </Header>
          <Divider />

          <Header as="h2" className="segment_header" color="black">
            Let's locate your space on the map
          </Header>
          <p>
            Type in the space name into the field below and select the coworking
            space from the dropdown menu. We will try and get as much info as
            possible from google, so the whole process will take less time.
          </p>
          <Form.Field>
            <label>Name of the Space</label>
            <input
              id="searchTextField"
              name="location"
              type="text"
              placeholder="Enter the Space title"
            />
          </Form.Field>
        </Segment>

        <Segment attached>
          <div id="map" style={{ height: "300px", width: "100%" }} />
        </Segment>

        <Segment attached="bottom">
          <Button
            color="teal"
            icon="right arrow"
            labelPosition="right"
            content="Next"
            as={Link}
            to={`/spaces/add/basic-info`}
            onClick={this.props.next}
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default FormLocationInfo;
