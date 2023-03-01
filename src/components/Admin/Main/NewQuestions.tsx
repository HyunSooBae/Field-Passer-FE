import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';
import requestAPI from '../../../api/axios';
import { questionType } from '@src/util/adminPageTypes';

const NewQuestions = () => {
  const [questions, setQuestions] = useState<questionType[]>([]);

  useEffect(() => {
    async function getQuestions() {
      const data = await requestAPI('question');
      setQuestions(data?.data?.resultData);
    }
    getQuestions();
  }, []);

  return (
    <div className='w-2/5'>
      <Link to='/admin/service'>
        <h3 className='font-bold text-2xl'>문의 게시판</h3>
      </Link>
      <table className='table-auto w-full text-sm mt-3 rounded-[10px] overflow-hidden border border-solid border-field bg-field'>
        <thead className='text-sm text-field bg-tableBg text-bold'>
          <tr>
            <th scope='col' className='px-6 py-4 text-left'>
              제목
            </th>
            <th scope='col' className='px-6 py-4 text-left'>
              작성자
            </th>
            <th scope='col' className='px-6 py-4 text-left'>
              상태
            </th>
          </tr>
        </thead>
        <tbody>
          {questions ? (
            questions?.map((question) => <Question key={question.questionId} item={question} />)
          ) : (
            <tr>
              <td>문의가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NewQuestions;
