import axios from 'axios';

export default async function requestAPI(keyword: string) {
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
//     const data = await axios(`${import.meta.env.VITE_API_BASE_URL}${url}`, {
//       method: method,
//       body: body ? body : null,
//     });
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
