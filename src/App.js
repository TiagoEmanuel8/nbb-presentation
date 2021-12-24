import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage, TeamsGeneral, TeamDetails } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/team/:id" component={ TeamDetails } />
        {/* <Route exact path="/team" component={ TeamsGeneral } /> */}
        <Route
          exact path="/team"
          render={ () => (<TeamsGeneral/>) }
        />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
