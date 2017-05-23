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

const staticPath = isProd ? STATIC_PATH : '/dist';
const staticSuffix = isProd ? '.gz' : '';
const css = isProd
  ? `<link rel="stylesheet" href="${staticPath}/style.css${staticSuffix}">`
  : '';

export default (location, preloadedState = {}, routerContext = {}) => {
  const store = initStore(preloadedState);
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>);
  const head = Helmet.renderStatic();

  return (html`
    <!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        ${css}
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${staticPath}/index.js${staticSuffix}"></script>
      </body>
    </html>`
  );
};
