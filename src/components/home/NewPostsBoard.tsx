import React, { useState, useEffect } from 'react';
import requestAPI from '../../api/axios';
import { GiSoccerField } from 'react-icons/gi';
import Board from '../../pages/Board';
import PostList from '../PostList';

const NewPostsBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await requestAPI('post');
      setData(res?.data.resultData);
    };
    getData();
  }, []);

  return (
    <section className='w-full my-5 text-center'>
      <GiSoccerField className='w-20 h-20 m-auto' />
      <div className='w-full font-bold xxs:text-2xl mm:text-3xl text-center py-3 mb-10'>
        새로 등록된 글
      </div>
      <div className='py-5 px-5'>
        <PostList data={data} />
      </div>
    </section>
  );
};

export default NewPostsBoard;
