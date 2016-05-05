import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers/index.js';
import Counter from './src/components/Counter.js';

let store = createStore(reducers);

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('container')
);
