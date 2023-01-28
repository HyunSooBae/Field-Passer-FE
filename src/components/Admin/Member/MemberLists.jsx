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

  const tableBorder = 'border-solid';

  return (
    <div>
      <table className='w-full table-auto'>
        <thead>
          <tr>
            <th>닉네임</th>
            <th>이메일</th>
            <th>가입일</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {members
            ? members?.map((member) => <MemberList key={member.email} item={member} />)
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default MemberLists;
