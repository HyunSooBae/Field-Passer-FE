import { useDispatch, useSelector } from 'react-redux';
import Searchbar from '../components/home/search/Searchbar';
import PostList from '../components/PostList';
import { RootState } from '@src/store/store';
import { useCallback, useEffect, useRef, useState } from 'react';
import { scrollMorePost } from '@src/store/postSlice';
import { getSearchPostList } from '@src/api/request';

const BoardMore = () => {
  const dispatch = useDispatch();

  const target = useRef<HTMLDivElement>(null); // observer Element
  const [page, setPage] = useState<number>(1); // 현제 페이지
  const [load, setLoad] = useState(false); // 로딩 스피너
  const preventRef = useRef(true); // 옵저버 중복 실행 방지
  const endRef = useRef(false); // 모든 글 로드 확인

  const postMoreData = useSelector((state: RootState) => {
    return state.post.postMoreData;
  });
  const postMoreDistrict = useSelector((state: RootState) => {
    return state.post.postMoreDistrict;
  });

  useEffect(() => {
    //옵저버 생성
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (target.current) observer.observe(target.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (page > 1) getPost();
  }, [page]);

  const obsHandler = (entries: any) => {
    //옵저버 콜백함수
    const target = entries[0];
    if (!endRef.current && target.isIntersecting && preventRef.current) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev + 1); //페이지 값 증가
    }
  };

  const getPost = useCallback(async () => {
    setLoad(true); //로딩 시작
    try {
      const res = await getSearchPostList(false, postMoreDistrict, false, page);
      dispatch(scrollMorePost(res.content));
      preventRef.current = true;
      if (res.last) endRef.current = true;
    } catch (e) {
      console.error(e);
    } finally {
      setLoad(false); //로딩 종료
    }
  }, [page]);

  return (
    <div className='px-[20px]'>
      <Searchbar />
      <PostList data={postMoreData} />
      <div ref={target}></div>
    </div>
  );
};

export default BoardMore;
