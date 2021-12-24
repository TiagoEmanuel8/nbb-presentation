import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Provider from './context/provider';
import { debugContextDevtool } from 'react-context-devtool';

import App from './App';

const container = document.getElementById('root');

ReactDOM.render(
  // <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  /* </Provider> */, container
);

debugContextDevtool(container);
