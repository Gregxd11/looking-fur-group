import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import axios from 'axios';

const PostingContainer = props => {
  const [ players, setPlayers ] = useState([]);

  // useEffect(() => {
  //   const dbFetch = async () => {
  //     const results = await axios.get(

  //     );
  //     const fetched = [];
  //     for (let key in results.data) {
  //       fetched.push({ ...results.data[key], id: key });
  //     }
  //     setPlayers(fetched);
  //   };
  //   dbFetch();
  // }, []);

  const playerCards = players.map(player => {
    return (
      <Card
        key={player.id}
        name={player.name}
        rank={player.rank}
        discord={player.discord}
        twitter={player.twitter}
      />
    );
  });

  return (
    <div className="ui container" style={{ marginTop: '25px' }}>
      <h1>{props.header}</h1>
      <hr />
      <div className="ui grid cards">{playerCards}</div>
    </div>
  );
};

export default PostingContainer;
