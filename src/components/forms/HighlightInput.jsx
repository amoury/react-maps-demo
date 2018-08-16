import React from 'react';

const styles = {
  margin: "5px 0"
};

const HighlightInput = ({highlight, handleInput}) => {
  return <input type="text" value={highlight.value} name={highlight.field} id={highlight.field} placeholder="Walking distance from the metro station" onChange={handleInput} style={styles}/>;
}

export default HighlightInput
