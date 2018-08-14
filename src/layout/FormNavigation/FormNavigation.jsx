import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react';
const FormNavigation = () => {
  return (
    <Menu>
      <Menu.Item name="location" as={NavLink} to={`/spaces/add/location-info`}>
        Location
      </Menu.Item>
      <Menu.Item name="basic" as={NavLink} to={`/spaces/add/basic-info`}>
        Basic Information
      </Menu.Item>
      <Menu.Item name="contact" as={NavLink} to={`/spaces/add/contact-info`}>
        Contact Information
      </Menu.Item>
      <Menu.Item name="amenities" as={NavLink} to={`/spaces/add/amenities`}>
        Amenities
      </Menu.Item>
    </Menu>
  );
};

export default FormNavigation;
