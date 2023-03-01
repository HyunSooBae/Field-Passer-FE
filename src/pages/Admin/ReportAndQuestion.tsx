import React from 'react';
import Questions from '../../components/Admin/ReportAndQuestion/Questions';
import Reports from '../../components/Admin/ReportAndQuestion/Reports';

const ReportAndQuestion = () => {
  return (
    <div className='w-[1520px] h-screen absolute left-[400px] p-10'>
      <h1 className='text-2xl text-field font-bold'>고객센터</h1>
      <hr />
      <div className='my-10'>
        <h2 className='font-bold text-lg'>회원 신고</h2>
        <Reports />
      </div>
      <hr />
      <div className='mt-10'>
        <h2 className='font-bold text-lg'>문의 게시판</h2>
        <Questions />
      </div>
    </div>
  );
};

export default ReportAndQuestion;
