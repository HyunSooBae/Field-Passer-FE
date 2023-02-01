import React from 'react';

const RenderList = ({ district, reservedDate, startTime, stadiumName }) => {
  //버튼 누르면 postId로 게시물 이동
  //category, postID 받아야됨..

  return (
    <>
      <tr className='border-t-[1px] border-solid border-field bg-white'>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap text-center'>
          {district}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap text-center'>
          {reservedDate}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap text-center'>
          {startTime}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap text-center'>
          {stadiumName}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap text-center'>
          <button className='p-3 rounded-[10px] bg-field text-white'>거래하기</button>
        </td>
      </tr>
    </>
  );
};

export default RenderList;
