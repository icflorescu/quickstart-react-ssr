import {
  homePage,
  helloPage,
  helloAsyncPage,
  helloAPI
} from './controller';

import {
  HOME,
  HELLO,
  HELLO_ASYNC,
  API_HELLO
} from '../shared/routes';

import renderApp from './renderApp';

export default (app) => {
  app.get(HOME, (req, res) => {
    res.send(renderApp(req.url, homePage()));
  });

  app.get(HELLO, (req, res) => {
    res.send(renderApp(req.url, helloPage()));
  });

  app.get(HELLO_ASYNC, (req, res) => {
    res.send(renderApp(req.url, helloAsyncPage()));
  });

  app.get(`${API_HELLO}/:num`, (req, res) => {
    res.json(helloAPI(req.params.num));
  });

  app.get('/500', () => {
    throw Error('Fake Internal Server Error');
  });

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url));
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
};
