import { fetchJSON } from '../../shared/util';
import { API_HELLO } from '../../shared/routes';

import {
  SAY_HELLO,
  SAY_HELLO_ASYNC_START,
  SAY_HELLO_ASYNC_DONE,
  SAY_HELLO_ASYNC_ERROR
} from './types';

export const sayHello = payload => ({ type: SAY_HELLO, payload });

export const sayHelloAsync = payload => async (dispatch) => {
  dispatch({ type: SAY_HELLO_ASYNC_START });
  try {
    const data = await fetchJSON(`${API_HELLO}/${payload}`);
    dispatch({ type: SAY_HELLO_ASYNC_DONE, payload: data });
  } catch (err) {
    dispatch({ type: SAY_HELLO_ASYNC_ERROR, payload: err });
  }
};
