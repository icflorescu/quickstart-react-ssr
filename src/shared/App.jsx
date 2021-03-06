import React from 'react';
import Helmet from 'react-helmet';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { APP_NAME } from './config';
import Nav from './components/Nav';
import HomePage from './components/pages/Home';
import HelloPage from './components/pages/Hello';
import HelloAsyncPage from './components/pages/HelloAsync';
import NotFoundPage from './components/pages/NotFound';
import {
  HOME,
  HELLO,
  HELLO_ASYNC
} from './routes';

export default () => (
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <Switch>
      <Route exact path={HOME} render={() => <HomePage />} />
      <Route path={HELLO} render={() => <HelloPage />} />
      <Route path={HELLO_ASYNC} render={() => <HelloAsyncPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);
