import React from 'react';
import Helmet from 'react-helmet';

import HelloButton from '../../container/HelloButton';
import Message from '../../container/Message';

const title = 'Hello Page';

export default () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title }
      ]}
    />
    <h1>{title}</h1>
    <Message />
    <HelloButton />
  </div>;
