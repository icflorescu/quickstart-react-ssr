// eslint-disable-next-line import/no-extraneous-dependencies
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
// eslint-disable-next-line global-require, import/no-extraneous-dependencies
import promiseMiddleware from 'redux-promise-middleware';

import App from '../shared/App';
import reducers from '../shared/reducers';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import { isProd } from '../shared/util';
import setupSocket from './setupSocket';

/* eslint-disable no-undef, no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const preloadedState = window.__PRELOADED_STATE__;
/* eslint-enable no-undef, no-underscore-dangle */

const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = (AppComponent, reduxStore) => {
  let content;
  if (isProd) {
    content = <AppComponent />;
  } else {
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
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
