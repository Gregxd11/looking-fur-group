import React, { Component } from 'react';
import PostingContainer from './Containers/PostingContainer';
import HomeContainer from './Containers/HomeContainer';
import Nav from './components/Nav/Nav';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route
            path="/lfg"
            render={() => <PostingContainer header="Looking For Group" />}
          />
          <Route
            path="/lfm"
            render={() => <PostingContainer header="Looking For Members" />}
          />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
