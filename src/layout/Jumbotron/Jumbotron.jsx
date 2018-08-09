import React from "react";

const Jumbotron = props => {
  const styles = { 
    backgroundImage: `url(${props.bgImage})`,
    minHeight: '50vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: '50px'
  };
  return <div style={styles}>{props.children}</div>;
};

export default Jumbotron;
