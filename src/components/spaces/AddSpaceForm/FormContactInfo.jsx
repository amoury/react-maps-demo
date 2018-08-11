import React, { Component } from "react";
import { Form, Header, Segment, Divider, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class FormContactInfo extends Component {
  state = {
    contactInfo: {
      email: "",
      contactNumber: "",
      siteLink: ""
    },
    socialInfo: {
      facebook: "",
      twitter: "",
      instagram: ""
    }
  };

  onContactInfoUpdate = event => {
    const { contactInfo } = this.props.space;
    contactInfo[event.target.name] = event.target.value;
    this.props.onObjectChange({contactInfo})
  };

  render() {
    const { email, contactNumber, siteLink } = this.props.space.contactInfo;
    return (
      <Segment.Group>
        <Segment attached="top">
          <Header as="h2" className="segment_header" color="teal">
            Contact Information
          </Header>
          <Divider />

          <Form.Field>
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter the official email address"
              value={ email}
              onChange={this.onContactInfoUpdate}
            />
          </Form.Field>

          <Form.Field>
            <label>Office Number</label>
            <input
              name="contactNumber"
              type="text"
              placeholder="+971 4 123 2475"
              value={contactNumber}
              onChange={this.onContactInfoUpdate}
            />
          </Form.Field>

          <Form.Field>
            <label>Website Link</label>
            <input
              name="siteLink"
              type="text"
              placeholder="https://www.abc.com"
              value={siteLink}
              onChange={this.onContactInfoUpdate}
            />
          </Form.Field>
        </Segment>

        <Segment attached>
          <Header as="h2" className="segment_header" color="teal">
            Social Media
          </Header>
          <Divider />

          <Form.Field>
            <label>Facebook Link</label>
            <input
              name="facebook"
              type="text"
              placeholder="https://www.facebook.com/"
            />
          </Form.Field>

          <Form.Field>
            <label>Twitter Link</label>
            <input
              name="twitter"
              type="text"
              placeholder="https://www.twitter.com/"
            />
          </Form.Field>

          <Form.Field>
            <label>Instagram Handle</label>
            <input name="instagram" type="text" placeholder="@coworker" />
          </Form.Field>

          <Button
            color="teal"
            icon="left arrow"
            labelPosition="left"
            content="Back"
            as={Link}
            to={`/spaces/add/basic-info`}
            onClick={this.props.back}
          />
          <Button
            color="teal"
            icon="right arrow"
            labelPosition="right"
            content="Next"
            as={Link}
            to={`/spaces/add/amenities`}
            onClick={this.props.next}
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default FormContactInfo;
