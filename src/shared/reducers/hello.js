import {
  SAY_HELLO,
  SAY_HELLO_ASYNC_START,
  SAY_HELLO_ASYNC_DONE,
  SAY_HELLO_ASYNC_ERROR
} from '../actions/types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SAY_HELLO:
      return { ...state, message: payload };
    case SAY_HELLO_ASYNC_START:
      return { ...state, messageAsync: 'Loading...' };
    case SAY_HELLO_ASYNC_DONE:
      return { ...state, messageAsync: payload };
    case SAY_HELLO_ASYNC_ERROR:
      return { ...state, messageAsync: 'Error, please check your connection...' };
    default:
      return state;
  }
};
