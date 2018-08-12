import React from "react";
import { Form, Header, Segment, Divider, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const FormLocationInfo = () => {
  return (
    <Segment>
      <Header as="h2" className="segment_header" color="teal">
        Location Information
      </Header>
      <Divider />

      <Header as="h2" className="segment_header" color="black">
        Let's locate your space on the map
      </Header>
      <p>Type in the space name into the field below and select the coworking space from the dropdown menu.</p>
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
  );
};

export default FormLocationInfo;
