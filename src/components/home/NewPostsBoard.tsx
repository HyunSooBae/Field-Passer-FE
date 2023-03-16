import React, { useState, useEffect } from 'react';
import requestAPI from '../../api/axios';
import { GiSoccerField } from 'react-icons/gi';
import Board from '../../pages/Board';
import PostList from '../PostList';
import { ListType } from '@src/util/userPageTypes';
import { getNewPostList } from '@src/api/request';

const NewPostsBoard = () => {
  const [newPostList, setNewPostList] = useState<ListType[]>([]);

  useEffect(() => {
    async function getNewPost() {
      const res = await getNewPostList();
      setNewPostList(res?.data.content);
    }
    getNewPost();
  }, []);

  return (
    <section className='w-full my-5 text-center'>
      <GiSoccerField className='w-20 h-20 m-auto' />
      <div className='w-full font-bold xxs:text-2xl mm:text-3xl text-center py-3 mb-10'>
        새로 등록된 글
      </div>
      <div className='py-5 px-5'>
        <PostList data={newPostList} />
      </div>
    </section>
  );
};

export default NewPostsBoard;
