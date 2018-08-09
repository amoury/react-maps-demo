import React from "react";
import { Card } from "semantic-ui-react";
import CardItem from "../CardItem/CardItem";

const CardList = props => {

  const selectedCardId = props.selectedCard;

  const cards = props.spaces.map(space => {
    return selectedCardId === space.id ? (
      <CardItem
        key={space.id}
        space={space}
        _handleImageClick={props._handleImageClick}
        raised={true}
        color="red"
      />
    ) : (
      <CardItem
        key={space.id}
        space={space}
        _handleImageClick={props._handleImageClick}
      />
    );
  });

  return (
    <Card.Group itemsPerRow={3}>
      {cards}
    </Card.Group>
  );
};

export default CardList;
