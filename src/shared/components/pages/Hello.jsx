import React from 'react';
import Helmet from 'react-helmet';

import HelloButton from '../../containers/HelloButton';
import Message from '../../containers/Message';

const title = 'Hello Page';

export default () => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content="A page to say hello" />
    </Helmet>
    <h1>{title}</h1>
    <Message />
    <HelloButton />
  </div>
);
