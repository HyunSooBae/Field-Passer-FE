import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = () => {
  return (
    <div className='m-auto max-w-7xl'>
      <h2 className='text-3xl text-center my-10 m-auto'>마이페이지</h2>
      {/* <div className='content'>
        <div className='flex justify-between mt-8 mb-4'>
          <h3 className='text-2xl'>관심구장</h3>
          <Link>더보기</Link>
        </div>
        <div className='grid grid-cols-6 gap-10'>
          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-3 mb-1'>풋살장</p>
            <p className='text-lg font-bold'>관심구장이름</p>
            <p className='text-sm mb-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
          </div>
        </div>
      </div> */}

      {/* 관심글 */}
      <div className='content'>
        <div className='flex justify-between mt-8 mb-4'>
          <h3 className='text-2xl'>관심글</h3>
          <Link className='text-gray-500'>더보기</Link>
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
            <p className='text-sm inline-block my-3 p-1.5 rounded-[6px] bg-gray-200 text-gray-500'>
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
            <p className='text-sm inline-block my-3 p-1.5 rounded-[6px] bg-gray-200 text-gray-500'>
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
            <p className='text-sm inline-block my-3 p-1.5 rounded-[6px] bg-gray-200 text-gray-500'>
              양도중
            </p>
          </div>
        </div>
      </div>

      {/* 내가 쓴 글 */}
      <div className='content'>
        <div className='title'>
          <h3>내가 쓴 글</h3>
          <Link>더보기</Link>
        </div>
        <div className=''>
          <div>
            <div>
              <img />
            </div>
            <p>풋살장</p>
            <p>영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다</p>
            <p>이용시간</p>
            <p>가격</p>
            <p>영등포구 | 영등포공원 풋살경기장</p>
            <p>조회 7 · 채팅 1</p>
            <p>거래완료</p>
          </div>
        </div>
      </div>

      <div className='content'></div>
    </div>
  );
};

export default MyPage;
