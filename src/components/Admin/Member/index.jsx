import React from 'react';
import SearchBox from './SearchBox';
import MemberLists from './MemberLists';

const Main = () => {
  return (
    <div className='w-full p-10'>
      <h1 className='text-2xl text-field font-bold'>회원 관리</h1>
      <SearchBox />
      <hr />
      <div className='mt-4'>
        <span className='mb-5 block text-field font-bold'>검색 결과 10</span>
        <MemberLists />
      </div>
    </div>
  );
};

export default Main;
