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

// export default async function requestAPI({ url, method, body }) {
//   try {
//     const data = await axios(`http://3.37.218.170:8080/api/${url}`, {
//       method: method,
//       body: body ? body : null,
//     });
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
