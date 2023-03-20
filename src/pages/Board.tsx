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
  const [data, setData] = useState([]);

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

  // const selectSearch = async () => {
  //   setPage(() => page + 1);
  //   const res = await getSearchPostList(catagoryVal, districtVal, stadiumVal, page);
  //   setData(res);
  // };

  // useEffect(() => {
  //   let divEl = target.current as any;
  //   observer.observe(divEl);
  //   selectSearch();
  // }, []);
  // console.log(data);

  // const options = {
  //   threshold: 1.0,
  // };

  // const callback = () => {
  //   if (data.length > 0) {
  //     dispatch(scrollPost(data));
  //     selectSearch();
  //   }
  // };

  // const observer = new IntersectionObserver(callback, options);

  return (
    <div className='px-[20px]' ref={target}>
      <Searchbar />
      <PostList data={postData} />
    </div>
  );
};

export default Board;
