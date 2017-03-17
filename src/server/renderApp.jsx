import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import initStore from './initStore';
import App from './../shared/App';
import { APP_CONTAINER_CLASS, STATIC_PATH } from '../shared/config';
import { isProd } from '../shared/util';
import { html } from './util';

export default (location, preloadedState = {}, routerContext = {}) => {
  const store = initStore(preloadedState);
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>);
  const head = Helmet.rewind();

  return (html`
    <!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${isProd ? STATIC_PATH : '/dist'}/js/index.js${isProd ? '.gz' : ''}"></script>
      </body>
    </html>`
  );
};
