import React from 'react';
import { GiSoccerField } from 'react-icons/gi';

const NewPostsBoard = () => {
  return (
    <section className='w-full my-5 text-center'>
      <GiSoccerField className='w-20 h-20 m-auto' />
      <div className='w-full font-bold xxs:text-2xl mm:text-3xl text-center py-3 mb-10'>
        새로 등록된 글
      </div>
      <div className='py-10 bg-red-400 h-[500px]'>새 게시물들을 넣을 자리입니다....</div>
    </section>
  );
};

export default NewPostsBoard;
