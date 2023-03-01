import React, { useState, useEffect } from 'react';
import { getMembersList } from '@src/api/request';
import SearchBox from '../../components/Admin/Member/SearchBox';
import MemberLists from '../../components/Admin/Member/MemberLists';
import Paging from '../../components/Admin/Paging';
import { memberListsType } from '@src/util/adminPageTypes';

const AdminMember = () => {
  const [members, setMembers] = useState<memberListsType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { ok, memberListData } = await getMembersList();
      if (ok) {
        setMembers(memberListData);
      }
    };
    fetchData();
  }, []);
  console.log(members);
  return (
    <div className='w-[1520px] h-screen absolute left-[400px] p-10'>
      <h1 className='text-2xl text-field font-bold'>회원 관리</h1>
      <SearchBox />
      <hr />
      <div className='mt-4'>
        <span className='mb-5 block text-field font-bold'>검색 결과 {members?.length}</span>
        <MemberLists members={members} />
      </div>
      <Paging />
    </div>
  );
};

export default AdminMember;
