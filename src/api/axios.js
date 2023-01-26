import axios from 'axios';

export default async function requestAPI() {
  try {
    const data = await axios('http://localhost:3000/post', {
      method: 'GET',
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
