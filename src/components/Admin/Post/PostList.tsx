import React from 'react';
import { useNavigate } from 'react-router';
import { postType } from '@src/util/adminPageTypes';

type Props = {
  item: postType;
};

const PostList = ({ item }: Props) => {
  const navigate = useNavigate();
  const onClickHandler = (postId: number) => {
    navigate(`/admin/post/detail/${postId}`);
  };
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
          onClick={() => onClickHandler(item.postId)}
        >
          상세 조회
        </button>
      </td>
    </tr>
  );
};

export default PostList;
