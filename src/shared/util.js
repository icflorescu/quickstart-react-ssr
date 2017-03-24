export const isProd = process.env.NODE_ENV === 'production';

export const fetchJSON = (...args) => fetch(...args).then((res) => {
  if (!res.ok) throw new Error(`Got ${res.status} - ${res.statusText} from ${res.url}`);
  return res.json();
});
