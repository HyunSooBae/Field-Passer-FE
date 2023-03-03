import { Cookies, useCookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (JSESSIONID: string) => {
  return cookies.set('sessionId', JSESSIONID, {
    path: '/',
    // expire: ,
    maxAge: 604800, // 일주일
    secure: true,
  });
};

export const getCookie = () => {
  const sessionId = cookies.get('sessionId');
  return sessionId;
};

export const removeCookie = () => {
  return cookies.set('sessionId', '', {
    path: '/',
    maxAge: -1,
  });
};
