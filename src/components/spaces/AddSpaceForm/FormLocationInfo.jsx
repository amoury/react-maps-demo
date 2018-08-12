import React from "react";
import { Form, Header, Segment, Divider, Button } from "semantic-ui-react";
import GoogleMap from "google-map-react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Link } from "react-router-dom";
import Marker from '../../../layout/Icons/Marker';

const FormLocationInfo = () => {
  return (
    <Segment.Group>
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
          space from the dropdown menu.
        </p>
        <Form.Field>
          <label>Name of the Space</label>
          <input
            name="location"
            type="text"
            placeholder="Enter the Space title"
            value="location"
          />
        </Form.Field>
      </Segment>

      <Segment attached>
        <div style={{ height: "300px", width: "100%" }}>
          <GoogleMap
            bootstrapURLKeys={{
              key: "AIzaSyBH8UsljlMRkbUNYkY1j4iOOem07wv9rbQ",
              language: "en"
            }}
            center={[25.2048, 55.2708]}
            zoom={9}
          >
            <Marker
              lat="25.2048"
              lng="55.2708"
              text="trial" 
            />
          </GoogleMap>
        </div>
      </Segment>
    </Segment.Group>
  );
};

export default FormLocationInfo;
