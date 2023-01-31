import React from 'react';
import Profile from './Profile';
import Posts from './Posts';

const Main = () => {
  return (
    <div className='w-full p-10'>
      <h1 className='text-2xl text-field font-bold'>회원 상세 정보</h1>
      <Profile />
      <hr />
      <div className='mt-4'>
        <span className='mb-5 block text-field font-bold'>작성한 게시글 10</span>
        <Posts />
      </div>
    </div>
  );
};

export default Main;
