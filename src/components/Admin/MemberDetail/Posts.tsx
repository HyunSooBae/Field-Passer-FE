import React, { useEffect, useState } from 'react';
import { postType } from '@src/util/adminPageTypes';
import Post from './Post';

type Props = {
  items: postType[];
};
const Posts = ({ items }: Props) => {
  console.log(items);
  return (
    <table className='table-auto w-full text-sm mt-3 rounded-[10px] overflow-hidden bg-field border border-solid border-field'>
      <thead className='text-sm text-field bg-tableBg text-bold'>
        <tr>
          <th scope='col' className='px-6 py-4 text-left'>
            #
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            필드 종류
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            게시글 제목
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            작성 시간
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            채팅
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            양도 현황
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            상세 보기
          </th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((post) => <Post key={post.postId} item={post} />)
        ) : (
          <tr className='border-t-[1px] border-solid border-field bg-white text-center '>
            <td colSpan={7} className='h-8 align-middle'>
              작성한 글이 없습니다.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Posts;
