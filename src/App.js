import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PaginaPrincipal, PaginaTimes, PaginaDetalhe } from './pages';
import './App.css';
import teams from './data';
import background from './images/background.png'

class App extends React.Component {
  constructor() {
    super();
    this.datateams = teams;
  };

  render() {
    return (
      <div
        className="AppContainer"
        style={ { background: `url('${background}') center / cover fixed` } }
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ PaginaPrincipal } />
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
      </div>
    );
  }
}

export default App;
