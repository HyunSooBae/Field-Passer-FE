import React, { useState, useEffect } from 'react';
import Profile from '../../components/Admin/MemberDetail/Profile';
import Posts from '../../components/Admin/MemberDetail/Posts';
import Paging from '../../components/Admin/Paging';
import { memberType, initMember } from '@src/util/adminPageTypes';
import { getMemberDetail } from '@src/api/request';
import { useLocation } from 'react-router-dom';

const AdminMemberDetail = () => {
  const [member, setMember] = useState<memberType>(initMember);

  const location = useLocation();
  const memberId = location.pathname.slice(21);
  useEffect(() => {
    const fetchData = async () => {
      const { ok, memberData } = await getMemberDetail(memberId);
      if (ok) {
        setMember(memberData);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='w-[1520px] h-screen absolute left-[400px] p-10'>
      <h1 className='text-2xl text-field font-bold'>회원 상세 정보</h1>
      <Profile item={member} />
      <hr />
      <div className='mt-4'>
        <span className='mb-5 block text-field font-bold'>작성한 게시글 {member.postCount}</span>
        <Posts />
      </div>
      <Paging />
    </div>
  );
};

export default AdminMemberDetail;
