import React from 'react';

const Card = props => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.name}</div>
        <div className="description">{props.rank}</div>
        <div className="description">{props.discord}</div>
        <div className="description">{props.twitter}</div>
      </div>
      <div className="ui bottom attached button">
        <i className="add icon" />
        {props.btntxt}
      </div>
    </div>
  );
};

export default Card;
