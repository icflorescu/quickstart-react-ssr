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

export default (store) => { // eslint-disable-line no-unused-vars
  socket.on(IO_CONNECT, () => {
    console.log('[socket.io] Connected.'); // eslint-disable-line no-console
    socket.emit(IO_CLIENT_JOIN_ROOM, 'hello-1234');
    socket.emit(IO_CLIENT_HELLO, 'Hello!');
  });

  socket.on(IO_SERVER_HELLO, (serverMessage) => {
    console.log(`[socket.io] Server: ${serverMessage}`); // eslint-disable-line no-console
  });

  socket.on(IO_DISCONNECT, () => {
    console.log('[socket.io] Disconnected.'); // eslint-disable-line no-console
  });
};
