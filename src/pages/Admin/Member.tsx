import React, { useState, useEffect } from 'react';
import { getMembersList } from '@src/api/request';
import SearchBox from '@src/components/Admin/Member/SearchBox';
import MemberLists from '@src/components/Admin/Member/MemberLists';
import { memberListsType } from '@src/util/adminPageTypes';
import Pagination from '@src/components/Pagination';

const AdminMember = () => {
  const [members, setMembers] = useState<memberListsType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const { ok, membersListData } = await getMembersList(page);
      if (ok) {
        setMembers(membersListData.resultData);
        setTotal(membersListData.resultDataNum);
      }
    };
    fetchData();
  }, [page]);
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
      <Pagination total={total} limit={10} page={page} setPage={setPage} />
    </div>
  );
};

export default AdminMember;
