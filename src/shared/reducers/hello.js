import {
  SAY_HELLO,
  SAY_HELLO_ASYNC
} from '../actions/hello';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SAY_HELLO:
      return { ...state, message: payload };
    case `${SAY_HELLO_ASYNC}_PENDING`:
      return { ...state, messageAsync: 'Loading...' };
    case `${SAY_HELLO_ASYNC}_FULFILLED`:
      return { ...state, messageAsync: payload };
    case `${SAY_HELLO_ASYNC}_REJECTED`:
      return { ...state, messageAsync: 'Error, please check your connection...' };
    default:
      return state;
  }
};
