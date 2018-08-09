import React from "react";
import { Card, Icon, Image, Divider, Button } from "semantic-ui-react";
import Tag from "../../../layout/Tag/Tag";

const CardItem = (props) => {
  const { space } = props;

  return (
    <Card>
      <Image src={`${space.mainImage}300x200`} />
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
      <Card.Content extra>
        <Button>Details</Button>
      </Card.Content>
    </Card>
  );
};

export default CardItem;
