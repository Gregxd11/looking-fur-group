import React from 'react';
import Segment from '../components/SemanticUI/Segment';
import axios from 'axios';

const homeContainer = props => {
  // const playerHandler = event => {
  //   event.preventDefault();
  //   const player = {
  //     name: 'Soarin',
  //     rank: 'Weatherman 3',
  //     discord: 'Soarin #8080',
  //     twitter: 'BigBappersPls'
  //   };
  //   axios
  //     .post('', player)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };
  return (
    <div className="ui container center aligned">
      <h1>LOOKING FUR GROUP</h1>
      <Segment title="What is Looking Fur Group?" addClass="raised">
        LFG is an app built by furries for furries to find either members or
        groups for the most popular online games
      </Segment>
      <hr />
      <Segment title="Get started" addClass="piled">
        <button onClick={playerHandler}>Seed the db</button>
      </Segment>
    </div>
  );
};

export default homeContainer;
