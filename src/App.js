import { AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './containers/Nav';
import Ranking from './containers/Ranking';

function App() {
  return (
    <div className="App" style={{ paddingLeft: 190 }}>
      <CssBaseline />

      <AppBar style={{ left: 190 }}>
        <Toolbar>
          <Typography type='title' color='inherit'>
            Yahoo! Shopping Ranking
          </Typography>
        </Toolbar>
      </AppBar>

      <Nav />

      <div style={{ marginTop: 64, padding: 32 }}>
        <Switch>
          <Route path='/all' component={Ranking} />
          <Route path='/category/:id' render={
            ({ match }) => <Ranking categoryId={match.params.id} />
          } />
        </Switch>
      </div>

    </div>
  );
}

export default App;
