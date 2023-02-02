import React, { useState, useState } from 'react';
import requestAPI from '../../api/axios';
import SearchBox from '../../components/Admin/Member/SearchBox';
import MemberLists from '../../components/Admin/Member/MemberLists';

const AdminMember = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    async function getMembers() {
      const data = await requestAPI('membersList');
      setMembers(data?.data?.resultData);
    }
    getMembers();
  }, []);
  return (
    <div className='w-[1520px] h-screen absolute left-[400px] p-10'>
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

export default AdminMember;
