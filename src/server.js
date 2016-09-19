import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './app/modules';
import { enableMobile } from './app/modules/device';

import App from './app';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const store = createStore(reducers);

  store.dispatch(enableMobile());
  const state = store.getState();

  const appString = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(state)
  }));
});

server.listen(8080);
console.log('listening');
