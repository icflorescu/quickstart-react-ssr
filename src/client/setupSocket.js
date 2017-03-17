// eslint-disable-next-line import/no-extraneous-dependencies
import socketIOClient from 'socket.io-client';

import {
  WEB_PORT,
  IO_CONNECT,
  IO_DISCONNECT,
  IO_CLIENT_HELLO,
  IO_CLIENT_JOIN_ROOM,
  IO_SERVER_HELLO
} from '../shared/config';

const socket = socketIOClient(`${location.hostname}:${WEB_PORT}`);

/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
export default (store) => {
  socket.on(IO_CONNECT, () => {
    console.log('[socket.io] Connected.');
    socket.emit(IO_CLIENT_JOIN_ROOM, 'hello-1234');
    socket.emit(IO_CLIENT_HELLO, 'Hello!');
  });

  socket.on(IO_SERVER_HELLO, (serverMessage) => {
    console.log(`[socket.io] Server: ${serverMessage}`);
  });

  socket.on(IO_DISCONNECT, () => {
    console.log('[socket.io] Disconnected.');
  });
};
/* eslint-enable no-console */
