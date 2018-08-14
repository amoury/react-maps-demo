import React from "react";
import { Form, Header, Segment, Divider, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const FormBasicInfo = props => {
  const { name, description } = props.space;
  return <Segment>
      <Header as="h2" className="segment_header" color="teal">
        Basic Information
      </Header>
      <Divider />

      <Form.Field>
        <label>Name of the Space</label>
        <input name="name" type="text" placeholder="Enter the Space title" value={name} onChange={props.onInputChange} />
      </Form.Field>

      <Form.Field>
        <label>Short Description (250 words)</label>
        <textarea name="description" id="description" cols="30" rows="5" value={description} onChange={props.onInputChange} />
      </Form.Field>

      <Divider />
      <Button color="teal" icon="left arrow" labelPosition="left" content="Back" as={Link} to={`/spaces/add/location-info`} onClick={props.back} />
      <Button color="teal" icon="right arrow" labelPosition="right" content="Next" as={Link} to={`/spaces/add/contact-info`} onClick={props.next} />
    </Segment>;
};

export default FormBasicInfo;
