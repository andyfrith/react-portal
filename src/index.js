import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

render(
  <HashRouter>
    <App isAuthenticated />
  </HashRouter>,
  document.getElementById( 'root' ),
);

registerServiceWorker();
