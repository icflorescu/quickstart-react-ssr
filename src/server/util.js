export const html = (strings, ...keys) => { // eslint-disable-line import/prefer-default-export
  strings.forEach(item => item.replace(/\n\s*/g, ''));
  return String.raw(strings, ...keys);
};
