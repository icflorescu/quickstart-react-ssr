import {
  SAY_HELLO,
  SAY_HELLO_ASYNC_REQUEST,
  SAY_HELLO_ASYNC_SUCCESS,
  SAY_HELLO_ASYNC_FAILURE
} from '../action/hello';

import initialState from '../initialState';

export default (state = initialState.hello, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return { ...state, message: action.payload };
    case SAY_HELLO_ASYNC_REQUEST:
      return { ...state, messageAsync: 'Loading...' };
    case SAY_HELLO_ASYNC_SUCCESS:
      return { ...state, messageAsync: action.payload };
    case SAY_HELLO_ASYNC_FAILURE:
      return { ...state, messageAsync: 'No message received, please check your connection' };
    default:
      return state;
  }
};
