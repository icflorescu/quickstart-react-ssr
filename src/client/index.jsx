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

import './index.styl';

const composeEnhancers = (
  isProd
    ? null
    // eslint-disable-next-line no-underscore-dangle
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__PRELOADED_STATE__,
  composeEnhancers(applyMiddleware(thunk))
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

render(wrapApp(App, store), rootEl);

if (!isProd && module.hot) {
  module.hot.accept('../shared/App', () => {
    // eslint-disable-next-line global-require
    render(wrapApp(require('../shared/App').default, store), rootEl);
  });
}
