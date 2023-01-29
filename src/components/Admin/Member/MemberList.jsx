import React, { useEffect } from 'react';

const MemberList = ({ item }) => {
  return (
    <tr>
      <td>
        <span>{item.memberName}</span>
      </td>
      <td>
        <span>{item.email}</span>
      </td>
      <td>
        <span>{item.signUpDate}</span>
      </td>
      <td>
        <button>조회</button>
        <button>삭제</button>
      </td>
    </tr>
  );
};

export default MemberList;
