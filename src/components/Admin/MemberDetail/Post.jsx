import React from 'react';
import { useNavigate } from 'react-router';

const Post = ({ item }) => {
  const navigate = useNavigate();
  const onClickHandler = (postId) => {
    navigate(`/admin/post/detail/${postId}`);
  };
  const reservState = (state) => {
    const reservConfir = 'bg-gray-200 text-gray-400';
    const reserv = 'bg-field text-white';
    const none = 'border border-solid border-fieldtext-field hover:border-field';
    if (state === '양도 완료') {
      return reservConfir;
    } else if (state === '예약 중') {
      return reserv;
    } else {
      return none;
    }
  };
  return (
    <tr className='border-t-[1px] border-solid border-field bg-white'>
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
        <button
          className='bg-field rounded-[6px] text-white hover:bg-hoverField h-8 w-12 ml-3 text-sm'
          onClick={() => onClickHandler(item.postId)}
        >
          조회
        </button>
      </td>
    </tr>
  );
};

export default Post;
