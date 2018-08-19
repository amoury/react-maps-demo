import React from "react";
import { Card, Icon, Image, Divider, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import backupImg from "../../../assets/images/social-cut.jpg";

const CardItem = props => {
  const { space } = props;
  const spaceImg = navigator.onLine ? `${space.mainImage}300x200` : backupImg;

  return (
    <Card>
      <Image src={spaceImg} />
      <Card.Content>
        <Card.Header>{space.name}</Card.Header>
        {space.distanceData !== undefined && (
          <Card.Meta>
            <Icon name="location arrow" size="small" />{" "}
            {space.distanceData.distance.text} away |{" "}
            {space.distanceData.duration.text} by car
          </Card.Meta>
        )}
        <Divider />
        <Card.Description>
          { space.contactInfo.contactNumber.length >= 1 && 
            <p>
              <Icon name="phone volume" color="teal" />
              {space.contactInfo.contactNumber}
            </p>
          }
          { space.location.address && 
             <p>
              <Icon name="marker map alternate" color="teal" />
              {space.location.address}
            </p>
          }
        </Card.Description> 
      </Card.Content>
      <Card.Content extra>
        <Button as={Link} to={`/spaces/${space.id}`}>
          Details
        </Button>
      </Card.Content>
    </Card>
  );
};

export default CardItem;
