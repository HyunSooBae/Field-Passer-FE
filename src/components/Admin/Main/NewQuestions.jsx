import React, { useEffect, useState } from 'react';
import Question from './Question';
import requestAPI from '../../../api/axios';

const NewQuestions = () => {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    async function getReports() {
      const data = await requestAPI('report');
      setReports(data?.data?.resultData);
    }
    getReports();
  }, []);

  return (
    <div className='w-2/5'>
      <h3 className='font-bold text-2xl'>문의 게시판</h3>
      <table className='table-auto w-full text-sm text-left mt-3'>
        <thead className='text-xs text-field bg-tableBg'>
          <tr>
            <th scope='col' className='text-sm font-bold text-field px-6 py-4 text-left'>
              제목
            </th>
            <th scope='col' className='text-sm font-bold text-field px-6 py-4 text-left'>
              닉네임
            </th>
            <th scope='col' className='text-sm font-bold text-field px-6 py-4 text-left'>
              상태
            </th>
          </tr>
        </thead>
        <tbody>
          {reports ? (
            reports?.map((report) => <Question key={report.questionId} item={report} />)
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
