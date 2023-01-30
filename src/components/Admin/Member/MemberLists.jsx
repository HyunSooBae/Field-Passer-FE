import React, { useEffect, useState } from 'react';
import requestAPI from '../../../api/axios';
import MemberList from './MemberList';

const MemberLists = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    async function getMembers() {
      const data = await requestAPI('membersList');
      setMembers(data?.data?.resultData);
    }
    getMembers();
  }, []);

  return (
    <table className='w-full table-auto'>
      <thead className='text-xs text-field bg-tableBg'>
        <tr>
          <th scope='col' className='text-sm font-bold text-field px-6 py-4 text-left'>
            닉네임
          </th>
          <th scope='col' className='text-sm font-bold text-field px-6 py-4 text-left'>
            이메일
          </th>
          <th scope='col' className='text-sm font-bold text-field px-6 py-4 text-left'>
            가입일
          </th>
          <th scope='col' className='text-sm font-bold text-field px-6 py-4 text-left'>
            관리
          </th>
        </tr>
      </thead>
      <tbody>
        {members ? members?.map((member) => <MemberList key={member.email} item={member} />) : null}
      </tbody>
    </table>
  );
};

export default MemberLists;
