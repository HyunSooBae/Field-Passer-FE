import React, { useState, useEffect } from 'react';
import SearchBox from '@src/components/Admin/Post/SearchBox';
import PostsLists from '@src/components/Admin/Post/PostsLists';
import Pagination from '@src/components/Pagination';
import { getPostsList } from '@src/api/request';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      const { ok, postsListData } = await getPostsList('2023-02-28', '2023-03-01', page);
      if (ok) {
        setPosts(postsListData.resultData);
        setTotal(postsListData.resultDataNum);
      }
    };
    fetchData();
  }, [page]);
  return (
    <div className='max-w-[1520px] h-screen grid-in-main p-10'>
      <h1 className='text-2xl text-field font-bold'>게시글 관리</h1>
      <SearchBox />
      <hr />
      <div className='mt-4'>
        <span className='mb-5 block text-field font-bold'>검색 결과 {posts?.length}</span>
        <PostsLists posts={posts} />
      </div>
      <Pagination total={total} limit={10} page={page} setPage={setPage} />
    </div>
  );
};

export default Post;
