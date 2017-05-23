// eslint-disable-next-line import/prefer-default-export
export const html = (strings, ...keys) => {
  strings.forEach(item => item.replace(/\n\s*/g, ''));
  return String.raw(strings, ...keys);
};
