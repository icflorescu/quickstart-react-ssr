import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from '../shared/App';
import reducers from '../shared/reducers';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import { isProd } from '../shared/util';
import setupSocket from './setupSocket';

const composeEnhancers = (
  isProd
    ? null
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
) || compose;

const store = createStore(
  reducers,
  window.__PRELOADED_STATE__, // eslint-disable-line no-underscore-dangle
  composeEnhancers(applyMiddleware(thunk))
);

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = (AppComponent, reduxStore) => {
  let content;
  if (isProd) {
    content = <AppComponent />;
  } else {
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

render(wrapApp(App, store), rootEl);

if (!isProd && module.hot) {
  module.hot.accept('../shared/App', () => {
    render(wrapApp(require('../shared/App').default, store), rootEl);
  });
}

setupSocket(store);
