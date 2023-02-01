import React, { useEffect, useState } from 'react'
import requestAPI from '../api/axios';
import PostList from '../components/PostList'

const Board = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await requestAPI('post')
      setData(res.data.resultData)
    }
    getData();
  }, []);

  console.log(data);

  return (
    <PostList data={data}/>
  )
}

export default Board