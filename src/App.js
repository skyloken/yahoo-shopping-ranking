import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './containers/Nav';
import Ranking from './containers/Ranking';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/all' component={Ranking} />
        <Route path='/category/:id' render={
          ({ match }) => <Ranking categoryId={match.params.id} />
        } />
      </Switch>
    </div>
  );
}

export default App;
