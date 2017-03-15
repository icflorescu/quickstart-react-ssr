import initialState from '../shared/initialState';

export const homePage = () => ({});

export const helloPage = () => ({
  ...initialState,
  hello: {
    ...initialState.hello,
    message: 'Server-side preloaded message'
  }
});

export const helloAsyncPage = () => ({
  ...initialState,
  hello: {
    ...initialState.hello,
    messageAsync: 'Server-side preloaded async message'
  }
});

export const helloAPI = num => ({
  serverMessage: `Hello from the server! (received ${num})`
});
