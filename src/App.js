import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage, TeamsGeneral, TeamDetails } from './pages';
import './App.css';
import teams from './data';

class App extends React.Component {
  constructor() {
    super();
    this.datateams = teams;
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route exact path="/team/:id" component={ TeamDetails } />
          <Route
            exact path="/team"
            render={ (props) => (
              <TeamsGeneral { ...props } databaseTeams={ this.datateams } />
            )}
          />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
