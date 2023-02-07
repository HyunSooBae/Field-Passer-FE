import React from 'react';
import FAQ from '../components/help/FAQ';
import QuestionBox from '../components/help/QuestionBox';

const Help = () => {
  //문의글 작성 컴포넌트 추가

  return (
    <main className='m-auto max-w-4xl my-12 py-10 relative px-3'>
      <QuestionBox />
      <FAQ />
    </main>
  );
};

export default Help;
