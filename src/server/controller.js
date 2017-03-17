export const homePage = () => {};

export const helloPage = () => ({
  hello: {
    message: 'preloaded from server'
  }
});

export const helloAsyncPage = () => ({
  hello: {
    messageAsync: 'preloaded from server'
  }
});

export const helloAPI = num => `Hello from the server! (received ${num})`;
