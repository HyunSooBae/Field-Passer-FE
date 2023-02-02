import React from 'react';
import Profile from '../../components/Admin/MemberDetail/Profile';
import Posts from '../../components/Admin/MemberDetail/Posts';
import Paging from '../../components/Admin/Paging';

const AdminMemberDetail = () => {
  return (
    <div className='w-[1520px] h-screen absolute left-[400px] p-10'>
      <h1 className='text-2xl text-field font-bold'>회원 상세 정보</h1>
      <Profile />
      <hr />
      <div className='mt-4'>
        <span className='mb-5 block text-field font-bold'>작성한 게시글 10</span>
        <Posts />
      </div>
      <Paging />
    </div>
  );
};

export default AdminMemberDetail;
