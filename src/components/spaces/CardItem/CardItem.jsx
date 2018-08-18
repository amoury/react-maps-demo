import React from "react";
import { Card, Icon, Image, Divider, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Tag from "../../../layout/Tag/Tag";
import backupImg from "../../../assets/images/social-cut.jpg";

const CardItem = (props) => {
  const { space } = props;
  const spaceImg = navigator.onLine ? `${space.mainImage}300x200` : backupImg; 

  return (
    <Card>
      <Image src={ spaceImg } />
      <Card.Content>
        <Card.Header>{space.name}</Card.Header>
        { space.distanceData && 
          <Card.Meta>
            <Icon name="location arrow" size="small" />{" "}
            {space.distanceData.distance.text !== undefined ? space.distanceData.distance.text : null } away | {space.distanceData.duration.text} by car
          </Card.Meta>
        }
        <Divider/>
        <Card.Description>
          {space.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        { space.tags && space.tags.map(tag => {
          return <Tag key={tag} tag={tag}/>
        })}
      </Card.Content>
      <Card.Content extra>
        <Button as={Link} to={`/spaces/${space.id}`}>Details</Button>
      </Card.Content>
    </Card>
  );
};

export default CardItem;
