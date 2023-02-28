import axios from 'axios';

export default async function requestAPI(keyword: String) {
  try {
    const data = await axios(`http://localhost:3000/${keyword}`, {
      method: 'GET',
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
