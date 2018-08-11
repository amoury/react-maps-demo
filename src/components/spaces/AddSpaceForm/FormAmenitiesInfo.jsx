import React from "react";
import {
  Form,
  Header,
  Segment,
  Divider,
  Button,
  Column
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const FormAmenitiesInfo = (props) => {
  return (
    <Segment.Group>
      <Segment>
        <Header as="h2" className="segment_header" color="teal">
          Common Amenities
        </Header>
        <Divider />

        <Form.Field
          label="High Speed WiFi"
          control="input"
          type="checkbox"
          name="High Speed WiFi"
          value="High Speed WiFi"
        />
        <Form.Field
          label="Lounge / Chill-out Area"
          control="input"
          type="checkbox"
        />
        <Form.Field label="Free Coffee / Tea" control="input" type="checkbox" />
        <Form.Field label="Air Conditioning" control="input" type="checkbox" />

        <Button
          color="teal"
          icon="left arrow"
          labelPosition="left"
          content="Back"
          as={Link}
          to={`/spaces/add/contact-info`}
          onClick={props.back}
        />
        <Button
          color="teal"
          icon="right arrow"
          labelPosition="right"
          content="Submit"
          type="submit"
        />
      </Segment>
    </Segment.Group>
  );
};

export default FormAmenitiesInfo;
