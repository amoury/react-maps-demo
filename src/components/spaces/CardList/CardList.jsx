import React from "react";
import { Card } from "semantic-ui-react";
import CardItem from "../CardItem/CardItem";

const CardList = props => {

  const cards = props.spaces.map(space => ( <CardItem key={space.id} space={space} /> ));

  return (
    <Card.Group itemsPerRow={2}>
      {cards}
    </Card.Group>
  );
};

export default CardList;
