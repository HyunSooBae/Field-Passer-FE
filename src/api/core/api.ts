import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosConfig: AxiosRequestConfig = {
  // baseURL: 'http://localhost:3000/',
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'content-type': 'application/json',
    // Authroization 작성해야 함
  },
  timeout: 10000,
};
export const request = axios.create(axiosConfig);

// 요청 인터셉터
request.interceptors.request.use(
  function (config) {
    // 요청 전달 되기 전 작업 수행
    // console.log('req interceptor : ', config);
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터
request.interceptors.response.use(
  function (config) {
    // 응답 데이터가 있는 작업 수행
    // console.log('res interceptor : ', config);
    return config;
  },
  function (error) {
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 폼데이터용 axiosConfig
const axiosConfigForm: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'content-type': 'multipart/form-data',
    withCredentials: true,
    // credentials: 'include',
  },
  withCredentials: true,

  // timeout: 10000,
};
export const requestForm = axios.create(axiosConfigForm);