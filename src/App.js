import React from 'react';
import { Link, Route } from 'react-router-dom';
import Ranking from './containers/Ranking';

function App() {
  return (
    <div className="App">

      <ul>
        <li><Link to='/all'>All categories</Link></li>
        <li><Link to='/category/2502'>PC, Peripherals</Link></li>
        <li><Link to='/category/10001'>Book, Magazine, Comic</Link></li>
      </ul>

      <Route path='/all' component={Ranking} />

      <Route path='/category/:id' render={
        ({ match }) => <Ranking categoryId={match.params.id} />
      } />

    </div>
  );
}

export default App;
