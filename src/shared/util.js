export const isProd = process.env.NODE_ENV === 'production';
export const html = (...args) => String.raw(...args).replace(/\n\s*/g, '');
