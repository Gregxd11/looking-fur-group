import React from 'react';
import Card from '../components/Card/Card';

const homeContainer = props => {
  return (
    <div className="ui container center">
      <h1>LOOKING FUR GROUP</h1>
      <div className="ui segment">
        <h3>What is Looking Fur Group?</h3>
        <p>
          LFG is an app built by furries for furries to find either members or
          groups for the most popular online games
        </p>
      </div>

      <hr />
      <h2>GET STARTED</h2>
      <Card />
    </div>
  );
};

export default homeContainer;
