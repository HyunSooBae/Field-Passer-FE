import React, { useState, useEffect } from 'react';
import requestAPI from '../../../api/axios';

const Question = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function getQuestions() {
      const data = await requestAPI('question');
      setQuestions(data?.data?.resultData);
    }
    getQuestions();
  }, []);

  const question = () => {
    return questions.map((question) => (
      <tr key={question.questionId} className='border-t-[1px] border-solid border-field bg-white'>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
          {question.questionId}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
          {question.title}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
          {question.memberId}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
          {question.response}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
          <button className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-20 ml-3'>
            상세 보기
          </button>
        </td>
      </tr>
    ));
  };

  return questions ? question() : <tr>질문 내역이 없습니다.</tr>;
};

export default Question;