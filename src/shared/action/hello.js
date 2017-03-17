import 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import { API_HELLO } from '../../shared/routes';

export const SAY_HELLO = 'SAY_HELLO';
export const SAY_HELLO_ASYNC = 'SAY_HELLO_ASYNC';

export const sayHello = createAction(SAY_HELLO);

export const sayHelloAsync = createAction(
  SAY_HELLO_ASYNC,
  num => fetch(`${API_HELLO}/${num}`).then(r => r.json())
);
