import React, { useEffect, useRef, useState } from 'react';
import BoardDetails from '../BoardDetails';

const PostDetail = () => {
  return (
    <div className='w-[1520px] h-screen absolute left-[400px] p-10'>
      <h1 className='text-2xl text-field font-bold'>게시물 상세 보기</h1>
      <BoardDetails />
    </div>
  );
};

export default PostDetail;
