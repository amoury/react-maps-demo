import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Input, Menu } from "semantic-ui-react";

class Navigation extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {

    return (
      <Menu secondary style={{ padding: '10px 30px'}}>
        <Menu.Item
          as={NavLink}
          exact
          to="/"
          name="home"
        />
        <Menu.Item as={NavLink} 
          to="/about" 
          name="about"
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
          />
        </Menu.Menu>
      </Menu>
    );
  }
}


export default Navigation;