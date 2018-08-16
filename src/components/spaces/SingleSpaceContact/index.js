import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import SingleSpaceMap from './SingleSpaceMap';

const SingleSpaceContact = ({space}) => {
  return (
    <Segment.Group>
      <Segment attached="top">
        <SingleSpaceMap coordinates= {space.location.coordinates}/>
      </Segment>
      <Segment attached>
        <Header as="h2" className="segment_header">
          Events (coming soon)
        </Header>
      </Segment>
    </Segment.Group>
  )
}

export default SingleSpaceContact
