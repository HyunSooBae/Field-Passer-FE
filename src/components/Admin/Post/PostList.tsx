import React from 'react';
import { useNavigate } from 'react-router';
import { postType } from '@src/util/adminPageTypes';

const PostList = (props: { item: postType }) => {
  const navigate = useNavigate();
  const onClickHandler = (postId: string) => {
    navigate(`/admin/post/detail/${postId}`);
  };
  return (
    <tr className='border-t-[1px] border-solid border-field bg-white'>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {props.item.postId}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {props.item.category}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {props.item.district}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {props.item.stadiumName}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {props.item.title}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {props.item.registerDate}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {props.item.memberId}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {props.item.transactionStatus}
      </td>
      <td className='px-6 py-4'>
        <button
          className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-16'
          onClick={() => onClickHandler(props.item.postId)}
        >
          상세 조회
        </button>
      </td>
    </tr>
  );
};

export default PostList;
