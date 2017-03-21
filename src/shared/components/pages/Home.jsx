import React from 'react';
import Helmet from 'react-helmet';

import { APP_NAME } from '../../config';

export default () =>
  <div>
    <Helmet>
      <meta property="og:title" content={APP_NAME} />
      <meta name="description" content="Hello App is an app to say hello" />
    </Helmet>
    <h1>{APP_NAME}</h1>
  </div>;
