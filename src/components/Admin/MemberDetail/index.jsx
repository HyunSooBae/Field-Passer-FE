import React from 'react';
import Profile from './Profile';
import Posts from './Posts';

const Main = () => {
  return (
    <div className='w-full relative m-10'>
      <h1 className='text-2xl text-field font-bold'>회원 상세 정보</h1>
      <Profile />
      <Posts />
    </div>
  );
};

export default Main;
