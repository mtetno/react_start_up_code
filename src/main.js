import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import './styles/main.scss';

// Store Initialization
// ------------------------------------
const
  store = createStore(window.__INITIAL_STATE__),
  // Render Setup
  // ------------------------------------
  MOUNT_NODE = document.getElementById('root');

let render = () => {
  const
    App = require('./App').default,
    routes = require('./routes/index').default(store);

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE
  );
};


// Let's Go!
// ------------------------------------
if (!__TEST__) render();
