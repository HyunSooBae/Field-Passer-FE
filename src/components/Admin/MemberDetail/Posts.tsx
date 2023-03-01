import React, { useEffect, useState } from 'react';
import { getPostsList } from '@src/api/request';
import { postType } from '@src/util/adminPageTypes';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState<postType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { ok, postsListData } = await getPostsList();
      if (ok) {
        setPosts(postsListData);
      }
    };
    fetchData();
  }, []);

  console.log(posts);

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
            조회
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
        {posts ? (
          posts.map((post) => <Post key={post.postId} item={post} />)
        ) : (
          <tr className='border-t-[1px] border-solid border-field bg-white text-center '>
            <td colSpan={8} className='h-8 align-middle'>
              작성한 글이 없습니다.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Posts;
