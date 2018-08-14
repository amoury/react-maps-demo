import React from "react";
import {
  Form,
  Header,
  Segment,
  Divider,
  Button
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const FormAmenitiesInfo = props => {
  const commonAmenities = [
    "High Speed WiFi",
    "Lounge / Chill-out Area",
    "Free Coffee / Tea",
    "Air Conditioning",
    "Heating",
    "Kitchen",
    "Free Drinking Water",
    "Standing Desks"
  ];

  const additionalAmenities = [
    "Pool Table",
    "Table Football / Foosball",
    "Beanbags",
    "Outdoor Terrace",
    "Swimming Pool",
    "Free parking on premise",
    "Wheelchair Accessibility",
    "Free Beer",
    "On-site Cafe / Restaurant",
    "Ergnomic Chairs"
  ];

  const renderAmenities = amenitiesArr =>
    amenitiesArr.map(amenity => (
      <Form.Field
        key={amenity}
        label={amenity}
        control="input"
        type="checkbox"
        name="amenities"
        value={amenity}
        onChange={handleCheckBox}
        checked={props.amenities.indexOf(amenity) >= 0 ? true : false}
      />
    ));


  const handleCheckBox = event => {
    const { name, value } = event.target;
    let updatedAmenities = [...props.amenities];

    if (updatedAmenities.indexOf(value) >= 0) {
      updatedAmenities = [
        ...updatedAmenities.filter(amenity => amenity !== value)
      ];
      return props.onCheckboxChange(name, updatedAmenities);
    }
    updatedAmenities.push(value);
    props.onCheckboxChange(name, updatedAmenities);
  };

  return <Segment.Group>
      <Segment attached="top">
        <Header as="h2" className="segment_header" color="teal">
          Common Amenities
        </Header>
        <Divider />

        <div className="amenities_box" style={{ display: "flex", flexWrap: "wrap" }}>
          {renderAmenities(commonAmenities)}
        </div>
      </Segment>
      <Segment attached>
        <Header as="h2" className="segment_header" color="teal">
          Additional Amenities
        </Header>
        <Divider />

        <div className="amenities_box" style={{ display: "flex", flexWrap: "wrap" }}>
          {renderAmenities(additionalAmenities)}
        </div>

        <Button color="teal" icon="left arrow" labelPosition="left" content="Back" as={Link} to={`/spaces/add/contact-info`} onClick={props.back} />
        <Button color="teal" icon="upload" labelPosition="right" content="Submit"/>
      </Segment>
    </Segment.Group>;
};

export default FormAmenitiesInfo;
