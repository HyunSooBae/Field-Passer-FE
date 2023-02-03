import React from 'react';
import Question from './Question';

const Questions = () => {
  return (
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
        <Question />
      </tbody>
    </table>
  );
};

export default Questions;
