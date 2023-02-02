import React, { useState, useEffect } from 'react';
import requestAPI from '../../../api/axios';
import SearchBox from './SearchBox';
import MemberLists from './MemberLists';

const Main = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    async function getMembers() {
      const data = await requestAPI('membersList');
      setMembers(data?.data?.resultData);
    }
    getMembers();
  }, []);
  return (
    <div className='w-full p-10'>
      <h1 className='text-2xl text-field font-bold'>회원 관리</h1>
      <SearchBox />
      <hr />
      <div className='mt-4'>
        <span className='mb-5 block text-field font-bold'>검색 결과 {members?.length}</span>
        <MemberLists members={members} />
      </div>
    </div>
  );
};

export default Main;
