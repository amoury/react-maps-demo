import React from 'react';
import { Label } from 'semantic-ui-react';

const style = {
  marginTop: '5px',
  fontSize: '0.9em',
  fontFamily: 'monotype',
  fontWeight: '400'
}

const Tag = ({tag}) => {
  return (
    <Label color='teal' style={ style }>
      { tag }
    </Label>
  )
}

export default Tag;
