import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import requestAPI from '../api/axios';
// import Pagination from '../components/Pagination';
// import Question from '../components/home/mypage/Question';
import Reports from '../components/home/mypage/Reports';
import PostList from '../components/PostList';

const MyPage = () => {
  const [reports, setReports] = useState([]);
  const [limitPerPage, setLimitPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limitPerPage;

  // 비동기...
  const [totalPage, setTotalPage] = useState();

  // 문의글 & 페이지네이션
  useEffect(() => {
    async function getRequestAPI() {
      const data = await requestAPI('report');
      setReports(data?.data?.resultData);
      // console.log(data?.data?.resultData);
      // const totalPage = Math.ceil(data?.data?.resultData.length / limitPerPage);
      // setTotalPage(totalPage);
      // console.log(totalPage);
    }
    getRequestAPI();
  }, []);

  // 카드형 게시물
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await requestAPI('post');
      setData(res?.data.resultData);
    };
    getData();
  }, []);

  return (
    <div className='m-auto max-w-5xl'>
      <h1 className='text-3xl text-center font-bold my-28 m-auto'>마이페이지</h1>

      {/* 관심글 */}
      <div className='content'>
        <div className='flex justify-between mt-24 mb-10'>
          <h3 className='text-2xl font-bold'>관심글</h3>
          <Link to='' className='text-gray-500'>
            더보기
          </Link>
        </div>
        <div className='grid grid-cols-4 gap-10'>
          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 border border-solid border-field rounded-[6px] text-field hover:border-field'>
              양도중
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 rounded-[6px] bg-field text-white'>
              예약중
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 rounded-[6px] bg-gray-200 text-gray-400'>
              양도완료
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 border border-solid border-field rounded-[6px] text-field hover:border-field'>
              양도중
            </p>
          </div>
        </div>
      </div>

      {/* 내가 쓴 글 */}
      <div className='flex justify-between items-center mt-48 mb-10'>
        <h3 className='text-2xl font-bold'>내가 쓴 글</h3>
        <Link to=''>더보기</Link>
      </div>
      <PostList data={data} />

      {/* 문의 게시판 */}
      <Reports
        reports={reports}
        offset={offset}
        limitPerPage={limitPerPage}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default MyPage;