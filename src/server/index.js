import compression from 'compression';
import express from 'express';
import { Server } from 'http';
import socketIO from 'socket.io';

import { WEB_PORT, WDS_PORT, STATIC_PATH } from '../shared/config';
import staticOptions from './staticOptions';
import { isProd } from '../shared/util';
import setupRoutes from './setupRoutes';
import setupSocket from './setupSocket';

const app = express();
const server = Server(app);
setupSocket(socketIO(server));

app.use(STATIC_PATH, express.static('dist', staticOptions));
app.use(STATIC_PATH, express.static('public', staticOptions));

app.use(compression());
setupRoutes(app);

server.listen(WEB_PORT, () => {
  const msgSuffix = isProd
    ? '(production)'
    : `(development).\nRun "yarn start:wds" running in another terminal and point your browser to port ${WDS_PORT}.`;
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${msgSuffix}`);
});
