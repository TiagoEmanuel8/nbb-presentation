import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PaginaPrincipal, PaginaTimes, PaginaDetalhe } from './pages';
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
          <Route exact path="/" component={ PaginaPrincipal } />
          {/* <Route exact path="/team/:id" component={ PaginaDetalhe } /> */}
          <Route
            exact path="/team/:id"
            render={ (props) => (
              <PaginaDetalhe { ...props } databaseTeams={ this.datateams } />
            )}
          />
          <Route
            exact path="/team"
            render={ (props) => (
              <PaginaTimes { ...props } databaseTeams={ this.datateams } />
            )}
          />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
