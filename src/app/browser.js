import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './modules';
import App from './index';

const initialState = window.__APP_INITIAL_STATE__;
const store = createStore(reducers, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
