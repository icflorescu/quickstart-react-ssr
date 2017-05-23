import React from 'react';
import Helmet from 'react-helmet';

const title = 'Page Not Found';

export default () => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content="Page not found" />
    </Helmet>
    <h1>{title}</h1>
  </div>
);
