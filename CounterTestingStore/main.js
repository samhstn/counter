import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store.js';
import Counter from './src/components/Counter.js';

ReactDOM.render(
  <Provider store={ store }>
    <Counter />
  </Provider>,
  document.getElementById('app')
);
