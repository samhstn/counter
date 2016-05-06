import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers/index.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);
export default createStoreWithMiddleware(reducers)
