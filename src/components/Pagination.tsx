import React, { useState, useEffect } from 'react';
// import styles from './home/mypage/mypage.module.css';

export type PaginationType = {
  total: any;
  limit: any;
  page: any;
  setPage: any;
};

const Pagination = ({ total, limit, page, setPage }: PaginationType) => {
  const totalPage = Math.ceil(total / limit);
  // 총 페이지 갯수에 따라 Pagination 갯수 정하기, limit 단위로 페이지 리스트 넘기기
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  const sliceArrayByLimit = (totalPage?: any, limit?: any) => {
    const totalPageArray = Array(totalPage)
      .fill(null)
      .map((_, i) => i);
    return Array(Math.ceil(totalPage / limit))
      .fill(null)
      .map(() => totalPageArray.splice(0, limit));
  };

  useEffect(() => {
    const slicedPageArray: any = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage]);

  return (
    <div className='flex justify-center gap-2 my-8'>
      <button className='btnPage' onClick={() => setPage(1)} disabled={page === 1}>
        처음
      </button>
      <button className='btnPage' onClick={() => setPage(page - 1)} disabled={page === 1}>
        이전
      </button>
      <div className='flex gap-1'>
        {currentPageArray?.map((i) => (
          <button
            className='btnPage'
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : undefined}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button className='btnPage' onClick={() => setPage(page + 1)} disabled={page === totalPage}>
        다음
      </button>
      <button className='btnPage' onClick={() => setPage(totalPage)} disabled={page === totalPage}>
        끝
      </button>
    </div>
  );
};

export default Pagination;
