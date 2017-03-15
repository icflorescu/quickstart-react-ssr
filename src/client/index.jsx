// TODO Bundle split - only needed on certain browsers...
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from '../shared/App';
import hello from '../shared/reducer/hello';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import { isProd } from '../shared/util';
import setupSocket from './setupSocket';

/* eslint-disable no-undef */
const composeEnhancers = (isProd ? null : __REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const preloadedState = __PRELOADED_STATE__;
/* eslint-enable no-undef */

const store = createStore(
  combineReducers({ hello }),
  preloadedState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = (AppComponent, reduxStore) => {
  let content;
  if (isProd) {
    content = <AppComponent />;
  } else {
    // eslint-disable-next-line global-require
    const AppContainer = require('react-hot-loader/lib/AppContainer');
    content = (
      <AppContainer>
        <AppComponent />
      </AppContainer>
    );
  }
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>{content}</BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(wrapApp(App, store), rootEl);

if (!isProd && module.hot) {
  module.hot.accept('../shared/App', () => {
    // eslint-disable-next-line global-require
    ReactDOM.render(wrapApp(require('../shared/App').default, store), rootEl);
  });
}

setupSocket(store);
