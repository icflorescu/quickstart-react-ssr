import { API_HELLO } from '../../shared/routes';

export const SAY_HELLO = 'SAY_HELLO';
export const SAY_HELLO_ASYNC = 'SAY_HELLO_ASYNC';

export const sayHello = payload => ({ type: SAY_HELLO, payload });

export const sayHelloAsync = payload => ({
  type: SAY_HELLO_ASYNC,
  payload: fetch(`${API_HELLO}/${payload}`).then(r => r.json())
});
