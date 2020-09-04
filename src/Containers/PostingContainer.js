import React from 'react';
import Card from '../components/Card/Card';

const PostingContainer = props => {
  return (
    <div className="ui container" style={{ marginTop: '25px' }}>
      <h1>{props.header}</h1>
      <hr />
      <div className="ui grid cards">
        <Card header={props.cardHeader} desc="Hex#0318" btntxt="Pick up" />
        <Card header="LFG - C3" desc="Hex#0318" btntxt="Pick up" />
        <Card header="LFG - C3" desc="Hex#0318" btntxt="Pick up" />
        <Card header="LFG - C3" desc="Hex#0318" btntxt="Pick up" />
      </div>
    </div>
  );
};

export default PostingContainer;
