import React from "react";
import { Segment, Header, Icon, Divider, Card } from "semantic-ui-react";
import IconMeetingRoom from "../../../layout/Icons/IconMeetingRoom";
import IconClassRoom from '../../../layout/Icons/IconClassRoom';
import IconFlexiDesk from '../../../layout/Icons/IconFlexiDesk';

const SpaceAmenties = ({amenities}) => {
  if (amenities === undefined || amenities.length <= 0) return null;
  const renderAmenities = amenities.map( amenity => (
      <li key={amenity} style = {{ width: "50%", lineHeight: "2em" }}>
        <Icon name="check circle outline" color="teal" />
        {amenity}
      </li>
  ));

  return (
    <Segment.Group>
      <Segment>
        <Header as="h2" className="segment_header">
          <Icon name="universal access" color="teal" />
          Amenities
        </Header>
        <Divider />
        <div>
          <ul style={{ display:"flex", listStyle: "none", justifyContent:"space-between", flexWrap: "wrap" }}>
            {renderAmenities}
          </ul>
        </div>
      </Segment>
      <Segment>
        <Header as="h2" className="segment_header">
          <Icon name="universal access" color="teal" />
          Facilities
        </Header>
        <Divider />

        <Card.Group itemsPerRow={4} centered style={{ textAlign: 'center' }}>
          <Card>
            <Card.Content>
              <Card.Header>
                <IconMeetingRoom />
                Meeting Room
              </Card.Header>
              <Card.Meta>Can accomodate upto 12 people</Card.Meta>
            </Card.Content>
          </Card>
          
          <Card>
            <Card.Content>
              <Card.Header>
                <IconClassRoom/>
                Class Room
              </Card.Header>
            </Card.Content>
          </Card>
          
          <Card>
            <Card.Content>
              <Card.Header>
                <IconFlexiDesk/>
                Flexi Desk
              </Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    </Segment.Group>
  );
};

export default SpaceAmenties;
