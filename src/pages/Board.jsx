import React, { useEffect, useState } from 'react'
import requestAPI from '../api/axios';
import Searchbar from '../components/home/search/Searchbar';
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

  return (
    <div className='px-[20px]'>
      <Searchbar />
      <PostList data={data}/>
    </div>
  )
}

export default Board