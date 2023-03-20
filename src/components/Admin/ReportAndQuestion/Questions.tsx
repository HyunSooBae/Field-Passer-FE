import { useState, useEffect } from 'react';
import Question from './Question';
import { questionType } from '@src/util/adminPageTypes';
import { getQuestionsList } from '@src/api/request';
import { startDate, endDate } from '@src/util/dateCalc';
import FormDatePicker from '@src/components/Admin/FormDatePicker';

const Questions = () => {
  const [questions, setQuestions] = useState<questionType[]>([]);
  const [newStartDate, setStartDate] = useState('');
  const [newEndDate, setEndDate] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const { ok, questionsListData } = await getQuestionsList(startDate(), endDate());
      if (ok) {
        setQuestions(questionsListData.resultData);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='flex items-center '>
        <FormDatePicker title={'시작 날짜'} setDate={setStartDate} />
        <span className='mr-3'>~</span>
        <FormDatePicker title={'마지막 날짜'} setDate={setEndDate} />
        <button
          type='submit'
          className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-16'
        >
          검색
        </button>
      </div>
      <table className='table-auto w-full text-sm mt-3 rounded-[10px] overflow-hidden bg-field border border-solid border-field'>
        <thead className='text-sm text-field bg-tableBg text-bold'>
          <tr>
            <th scope='col' className='px-6 py-4 text-left'>
              #
            </th>
            <th scope='col' className='px-6 py-4 text-left'>
              제목
            </th>
            <th scope='col' className='px-6 py-4 text-left'>
              작성자
            </th>
            <th scope='col' className='px-6 py-4 text-left'>
              상태
            </th>
            <th scope='col' className='px-6 py-4 text-left'>
              상세 보기
            </th>
          </tr>
        </thead>
        <tbody>
          {questions.length > 0 ? (
            questions.map((question) => <Question item={question} />)
          ) : (
            <tr className='border-t-[1px] border-solid border-field bg-white text-center '>
              <td colSpan={5} className='h-8 align-middle'>
                작성한 글이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Questions;
