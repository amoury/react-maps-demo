import React from "react";
import { Card } from "semantic-ui-react";
import CardItem from "../CardItem/CardItem";

const CardList = props => {
  if(!props.spaces) return;
  const cards = props.spaces.map(space => ( <CardItem key={space.id} space={space} /> ));

  return (
    <Card.Group itemsPerRow={3} doubling>
      {cards}
    </Card.Group>
  );
};

export default CardList;
