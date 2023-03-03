import React from 'react';
import { Link } from 'react-router-dom';

const ReportDetail = () => {
  return (
    <div className='max-w-[1520px] h-screen grid-in-main p-10'>
      <h1 className='text-2xl text-field font-bold'>문의 상세 보기</h1>
      <div className='my-[30px]'>
        <div className='flex gap-[10px]'>
          <span className='font-bold'>풋살장 사기를 당했습니다.</span>
          <Link to='/admin/member/detail/123'>
            <span className='text-sm'>hello123</span>
          </Link>
          <span className='text-sm'>사기 / 신고 관련</span>
        </div>
        <hr className='my-3' />
        <span>5:5 풋살장이라면서 3:3 풋살장이었습니다.</span>
      </div>
      <hr className='my-3' />
      <div>
        <form action=''>
          <textarea
            placeholder='답글을 작성해 주세요.'
            className='h-[100px] w-[500px] rounded text-sm border-#94a3b8 border-solid border-2 px-3 focus:outline-none focus:border-field scroll'
          />
          <button
            type='submit'
            className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-20 ml-3'
          >
            답글
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportDetail;
