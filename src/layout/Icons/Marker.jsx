import React, { Component } from "react";
import { Icon, Popup } from "semantic-ui-react";
import PropTypes from "prop-types";

class Marker extends Component {
  static propTypes = {
    hover: PropTypes.bool,
    text: PropTypes.string
  };

  state={}


  handleOpen = () => {
    console.log('Is open')
  }
  

  render() {
    return (
      <div>
        <Popup
          trigger={<Icon name="map marker alternate" size="big" color="teal" />}
          content={this.props.text}
          inverted
        />
      </div>
    );
  }
}

export default Marker;
