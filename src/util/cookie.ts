import { Cookies, useCookies } from 'react-cookie';

const cookies = new Cookies();

const setCookie = (sessionId: string) => {
  return cookies.set('token', sessionId, {
    path: '/',
    // expire: ,
    maxAge: 2600000,
    secure: true,
  });
};

const getCookie = () => {};

const removeCookie = () => {};
