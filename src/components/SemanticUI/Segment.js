import React from 'react';

const segment = props => {
  return (
    <div className={`ui segment ${props.addClass}`}>
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </div>
  );
};

export default segment;
