import axios from 'axios';

export default async function requestAPI(keyword: any) {
  try {
    const data = await axios(`http://localhost:3000/${keyword}`, {
      method: 'GET',
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

// // 요청 인터셉터
// instance.interceptors.request.use(
//   function (config) {
//     // 요청 전달 되기 전 작업 수행
//     const token = getCookie();
//     if (token) config.headers['Authrization'] = `Bearer ${token}`;
//     return config;
//   },
//   function (error) {
//     // 요청 오류가 있는 작업 수행
//     return Promise.reject(error);
//   },
// );

// // 응답 인터셉터
// instance.interceptors.response.use(
//   function (config) {
//     // 응답 데이터가 있는 작업 수행
//     return response;
//   },
//   function (error) {
//     // 응답 오류가 있는 작업 수행
//     return Promise.reject(error);
//   },
// );
