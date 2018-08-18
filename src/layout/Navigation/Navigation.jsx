import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import { Input, Menu, Button } from "semantic-ui-react";

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
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Button as={Link} to="spaces/add" color="teal">
            List your space
          </Button>
        </Menu.Menu>
      </Menu>
    );
  }
}


export default Navigation;