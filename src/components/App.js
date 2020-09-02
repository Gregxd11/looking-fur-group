import React, { Component } from 'react';
import PostingContainer from './Containers/PostingContainer';
import Nav from './Nav/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <PostingContainer header="Looking For Group" />
        <PostingContainer header="Looking For Members" />
      </div>
    );
  }
}

export default App;
