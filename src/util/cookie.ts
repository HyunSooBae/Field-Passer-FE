import { Cookies, useCookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (sessionId: string) => {
  return cookies.set('token', sessionId, {
    path: '/',
    // expire: ,
    maxAge: 2600000,
    secure: true,
  });
};

export const getCookie = () => {
  const token = cookies.get('token');
  return token;
};

export const removeCookie = () => {
  return cookies.set('token', '', {
    path: '/',
    maxAge: -1,
  });
};
