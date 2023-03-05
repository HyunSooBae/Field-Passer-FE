import React, { useState, useEffect } from 'react';
import Profile from '@src/components/Admin/MemberDetail/Profile';
import Posts from '@src/components/Admin/MemberDetail/Posts';
import { memberType, initMember } from '@src/util/adminPageTypes';
import { getMemberDetail, getMemberPost } from '@src/api/request';
import { useLocation } from 'react-router-dom';
import Pagination from '@src/components/Pagination';

const AdminMemberDetail = () => {
  const [member, setMember] = useState<memberType>(initMember);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const location = useLocation();
  const memberId = location.pathname.slice(21);
  useEffect(() => {
    const fetchData = async () => {
      const { ok, memberData } = await getMemberDetail(memberId);
      const { memberPostData } = await getMemberPost(memberId, page);
      if (ok) {
        setMember(memberData);
        setPosts(memberPostData.resultData);
        setTotal(memberPostData.resultDataNum);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='max-w-[1520px] h-screen grid-in-main p-10'>
      <h1 className='text-2xl text-field font-bold'>회원 상세 정보</h1>
      <Profile item={member} />
      <hr />
      <div className='mt-4'>
        <span className='mb-5 block text-field font-bold'>작성한 게시글 {member.postCount}</span>
        <Posts items={posts} />
      </div>
      <Pagination total={total} limit={10} page={page} setPage={setPage} />
    </div>
  );
};

export default AdminMemberDetail;
