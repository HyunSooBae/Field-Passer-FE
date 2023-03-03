import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';
import { getQuestionsList } from '@src/api/request';
import { questionType } from '@src/util/adminPageTypes';

const NewQuestions = () => {
  const [questions, setQuestions] = useState<questionType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { ok, questionsListData } = await getQuestionsList('2023-02-28', '2023-03-01');
      if (ok) {
        setQuestions(questionsListData.resultData);
      }
    }
    fetchData();
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
          {questions.length ? (
            questions?.map((question) => <Question key={question.questionId} item={question} />)
          ) : (
            <tr className='border-t-[1px] border-solid border-field bg-white text-center '>
              <td colSpan={3} className='h-8 align-middle'>
                작성한 글이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NewQuestions;
