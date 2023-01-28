import React from 'react';
import Question from './Question';

const NewQuestions = () => {
  return (
    <div>
      <h3 className='font-bold text-2xl'>문의 게시판</h3>
      <div className='flex flex-col'>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
};

export default NewQuestions;
