import axios from 'axios';

<<<<<<<< HEAD:src/api/axios.tsx
export default async function requestAPI(keyword: any) {
========
export default async function requestAPI(keyword: string) {
>>>>>>>> a7814443af215d6b82f82109b0789bc72f85089d:src/api/axios.ts
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
