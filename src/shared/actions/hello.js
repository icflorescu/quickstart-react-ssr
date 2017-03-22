import { API_HELLO } from '../../shared/routes';

import {
  SAY_HELLO,
  SAY_HELLO_ASYNC_START,
  SAY_HELLO_ASYNC_DONE,
  SAY_HELLO_ASYNC_ERROR
} from './types';

export const sayHello = payload => ({ type: SAY_HELLO, payload });

export const sayHelloAsync = payload => (dispatch) => {
  dispatch({ type: SAY_HELLO_ASYNC_START });
  fetch(`${API_HELLO}/${payload}`).then((r) => {
    if (!r.ok) throw new Error();
    return r.json();
  })
  .then(data => dispatch({ type: SAY_HELLO_ASYNC_DONE, payload: data }))
  .catch(err => dispatch({ type: SAY_HELLO_ASYNC_ERROR, payload: err }));
};
