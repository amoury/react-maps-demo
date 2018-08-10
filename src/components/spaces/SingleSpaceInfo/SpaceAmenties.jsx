import React from "react";
import { Segment, Header, Icon, Divider, Card } from "semantic-ui-react";
import IconMeetingRoom from "../../../layout/Icons/IconMeetingRoom";
import IconClassRoom from '../../../layout/Icons/IconClassRoom';
import IconFlexiDesk from '../../../layout/Icons/IconFlexiDesk';

const SpaceAmenties = () => {
  return (
    <Segment.Group>
      <Segment>
        <Header as="h2" className="segment_header">
          <Icon name="universal access" color="teal" />
          Amenities
        </Header>
        <Divider />
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Icon name="check circle outline" color="teal" />
              Free Printer
            </li>
            <li>
              <Icon name="check circle outline" color="teal" />
              Free Coffee
            </li>
            <li>
              <Icon name="check circle outline" color="teal" />
              Free Parking on Premises
            </li>
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
