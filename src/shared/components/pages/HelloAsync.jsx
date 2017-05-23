import React from 'react';
import Helmet from 'react-helmet';

import HelloAsyncButton from '../../containers/HelloAsyncButton';
import MessageAsync from '../../containers/MessageAsync';

const title = 'Async Hello Page';

export default () => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content="A page to say hello asynchronously" />
    </Helmet>

    <h1>{title}</h1>
    <MessageAsync />
    <HelloAsyncButton />
  </div>
);
