import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, DetailPage, TeamPage } from './pages';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={ MainPage } />
        <Route exact path='/team' component={ TeamPage } />
        <Route exact path='/team/:id' component={ DetailPage } />
      </Switch>
    </main>
  );
};

export default App;
