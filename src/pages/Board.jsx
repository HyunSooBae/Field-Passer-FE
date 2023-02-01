import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requestAPI from '../api/axios';
import PostList from '../components/PostList'

const Board = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await requestAPI('report')
      setData(res)
    }
    getData();
  }, []);

  console.log(data)

  return (
    <PostList />
  )
}

export default Board