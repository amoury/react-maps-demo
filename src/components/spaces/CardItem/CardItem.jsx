import React from "react";
import { Card, Icon, Image, Divider } from "semantic-ui-react";
import Tag from "../../../layout/Tag/Tag";

const CardItem = (props) => {
  const { color, raised, space, _handleImageClick } = props;

  return (
    <Card color={color} raised={raised}>
      <Image src="https://source.unsplash.com/random/300x200" onClick={() => _handleImageClick(space.id)}/>
      <Card.Content>
        <Card.Header>{space.name}</Card.Header>
        { space.distanceData && 
          <Card.Meta>
            <Icon name="location arrow" size="small" />{" "}
            {space.distanceData.distance.text} away | {space.distanceData.duration.text} by car
          </Card.Meta>
        }
        <Divider/>
        <Card.Description>
          {space.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        { space.tags.map(tag => {
          return <Tag key={tag} tag={tag}/>
        })}
      </Card.Content>
    </Card>
  );
};

export default CardItem;
