import React from 'react';

const Post = ({ item }) => {
  return (
    <tr>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.postId}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.category}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{item.title}</td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.registerDate}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.viewCount}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>2</td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.transactionStatus}
      </td>
      <td className='px-6 py-4'>
        <button className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-12 ml-3'>
          조회
        </button>
      </td>
    </tr>
  );
};

export default Post;
