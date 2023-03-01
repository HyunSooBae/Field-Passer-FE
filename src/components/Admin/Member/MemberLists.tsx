import React from 'react';
import MemberList from './MemberList';
import { memberListsType } from '@src/util/adminPageTypes';

type Props = {
  members: memberListsType[];
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
        {members ? (
          members?.map((member) => <MemberList key={member.memberId} item={member} />)
        ) : (
          <tr className='border-t-[1px] border-solid border-field bg-white text-center '>
            <td colSpan={4} className='h-8 align-middle'>
              가입한 회원이 없습니다.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MemberLists;
