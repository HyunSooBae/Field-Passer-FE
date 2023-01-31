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
    <table className='table-auto w-full text-sm mt-3 rounded-[10px] overflow-hidden bg-field border border-solid border-field'>
      <colgroup>
        <col className='w-auto' />
        <col className='w-auto' />
        <col className='w-auto' />
        <col className='w-[250px]' />
      </colgroup>
      <thead className='text-sm text-field bg-tableBg text-bold'>
        <tr>
          <th scope='col' className='px-6 py-4 text-left'>
            닉네임
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            이메일
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            가입일
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
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
