import { useDispatch, useSelector } from 'react-redux';
import Searchbar from '../components/home/search/Searchbar';
import PostList from '../components/PostList';
import { RootState } from '@src/store/store';
import { useEffect, useRef, useState } from 'react';
import { getSearchPostList } from '@src/api/request';
import { scrollPost } from '@src/store/postSlice';

const Board = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);

  const target = useRef<HTMLDivElement>(null);
  const postData = useSelector((state: RootState) => {
    return state.post.postData;
  });
  const catagoryVal = useSelector((state: RootState) => {
    return state.post.catagoryVal;
  });
  const districtVal = useSelector((state: RootState) => {
    return state.post.districtVal;
  });
  const stadiumVal = useSelector((state: RootState) => {
    return state.post.stadiumVal;
  });

  return (
    <div className='px-[20px]'>
      <Searchbar />
      <PostList data={postData} />
      <div ref={target}></div>
    </div>
  );
};

export default Board;
