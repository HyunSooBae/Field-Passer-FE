import React, { useState, useEffect } from 'react';
import requestAPI from '../../../api/axios';
import SearchBox from './SearchBox';
import PostsLists from './PostsLists';

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const data = await requestAPI('post');
      setPosts(data?.data?.resultData);
    }
    getPosts();
  }, []);

  console.log(posts);
  return (
    <div className='w-full p-10'>
      <h1 className='text-2xl text-field font-bold'>게시물 관리</h1>
      <SearchBox />
      <hr />
      <div className='mt-4'>
        <span className='mb-5 block text-field font-bold'>검색 결과 {posts?.length}</span>
        <PostsLists posts={posts} />
      </div>
    </div>
  );
};

export default Post;
