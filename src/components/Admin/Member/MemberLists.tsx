import React from 'react';
import MemberList from './MemberList';
import { memberType } from '@src/util/adminPageTypes';

type Props = {
  members: memberType[];
};

const MemberLists = ({ members }: Props) => {
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
