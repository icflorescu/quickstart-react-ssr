import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import hello from '../shared/reducer/hello';

export default preloadedState => createStore(
  combineReducers({ hello }),
  preloadedState,
  applyMiddleware(thunkMiddleware)
);
