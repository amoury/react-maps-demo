import React, { Component } from "react";
import { Form, Header, Segment, Divider, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import HighlightInput from "../../forms/HighlightInput";

class FormBasicInfo extends Component {
  state = {
    highlightFields: [{ field: "highlight-0", value: "" }]
  };

  componentDidMount = () => {
    const _spaceHighlights = [...this.props.space.spaceHighlights];
    if (_spaceHighlights.length <= 0) return;
    this.setState({ highlightFields: _spaceHighlights });
  };

  appendInputField = e => {
    e.preventDefault();
    const newInput = {
      field: `highlight-${this.state.highlightFields.length}`,
      value: ""
    };
    this.setState({
      highlightFields: this.state.highlightFields.concat([newInput])
    });
  };

  handleHighlightInput = e => {
    const _highlightFields = [...this.state.highlightFields];
    const currentField = _highlightFields.filter(
      highlight => highlight.field === e.target.name
    )[0];
    const remainingFields = _highlightFields.filter(
      highlight => highlight.field !== e.target.name
    );
    currentField.value = e.target.value;
    this.setState({ highlightFields: remainingFields.concat([currentField]) });
    this.props.onSpaceHighlightsChange(this.state.highlightFields);
  };

  render() {
    const { name, description } = this.props.space;
    const renderHighlightFields = this.state.highlightFields.map(highlight => (
      <HighlightInput
        key={highlight.field}
        highlight={highlight}
        handleInput={this.handleHighlightInput}
      />
    ));
    return (
      <Segment>
        <Header as="h2" className="segment_header" color="teal">
          Basic Information
        </Header>
        <Divider />

        <Form.Field>
          <label>Name of the Space</label>
          <input
            name="name"
            type="text"
            placeholder="Enter the Space title"
            value={name}
            onChange={this.props.onInputChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Short Description (250 words)</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={description}
            onChange={this.props.onInputChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Key Highlights of the Space (atleast 1)</label>
          <div id="highlights_fields">{renderHighlightFields}</div>
          <Button
            basic
            color="teal"
            size="tiny"
            icon="add"
            onClick={this.appendInputField}
            style={{
              margin: "20px auto",
              display: "block",
              borderRadius: "50%",
              padding: "10px 12px"
            }}
          />
        </Form.Field>

        <Divider />
        <Button
          color="teal"
          icon="left arrow"
          labelPosition="left"
          content="Back"
          as={Link}
          to={`/spaces/add/location-info`}
          onClick={this.props.back}
        />
        <Button
          color="teal"
          icon="right arrow"
          labelPosition="right"
          content="Next"
          as={Link}
          to={`/spaces/add/contact-info`}
          onClick={this.props.next}
        />
      </Segment>
    );
  }
}

export default FormBasicInfo;

/* 
@TODO https://stackoverflow.com/questions/36512686/react-dynamically-add-input-fields-to-form
*/
