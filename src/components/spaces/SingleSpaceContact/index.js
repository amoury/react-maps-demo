import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SingleSpaceMap from './SingleSpaceMap';
import Loader from '../../../layout/Loader/Loader';

const SingleSpaceContact = ({space, handleDelete}) => {
  if(!space) return <div><Loader/></div>;
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
      <Segment attached="bottom" style={{ display: "flex", justifyContent: "center" }}>
        <Button color="teal" as={Link} to={`/spaces/${space.id}/edit`}>Edit</Button>
        <Button color="red" onClick={() => handleDelete(space.id)}>Delete</Button>
      </Segment>
    </Segment.Group>
  )
}

export default SingleSpaceContact
