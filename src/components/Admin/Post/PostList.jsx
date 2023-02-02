import React from 'react';

const PostList = ({ item }) => {
  return (
    <tr className='border-t-[1px] border-solid border-field bg-white'>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.postId}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.category}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.district}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.stadiumName}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{item.title}</td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.registerDate}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.memberId}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.transactionStatus}
      </td>
      <td className='px-6 py-4'>
        <button
          className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-16'
          onClick={() => onClickHandler(item.email)}
        >
          상세 조회
        </button>
      </td>
    </tr>
  );
};

export default PostList;
