import React from 'react';
import Post from './Post';

const NewPosts = () => {
  return (
    <div className='w-3/5'>
      <h3 className='font-bold text-2xl'>최신 글 목록</h3>
      <div className='flex'>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default NewPosts;
