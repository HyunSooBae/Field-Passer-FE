import React from 'react';
import BoardList from '../search/BoardList';
import RenderList from './RenderList';

const ImminentBoard = () => {
  return (
    <section className='my-5 bg-green-700'>
      <BoardList title='마감 임박' />
      <table className='table-auto w-full text-sm mt-3 rounded-[10px] overflow-hidden bg-field border border-solid border-field'>
        <thead className='text-sm text-field bg-tableBg text-bold'>
          <tr>
            <th scope='col' className='px-6 py-4 text-left'>
              지역
            </th>
            <th scope='col' className='px-6 py-4 text-left'>
              날짜+시간
            </th>
            <th scope='col' className='px-6 py-4 text-left'>
              구장
            </th>
            <th scope='col' className='px-6 py-4 text-left'>
              거래하기
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {reports ? (
            reports?.map((report) => <Question key={report.questionId} item={report} />)
          ) : (
            <tr>
              <td>문의가 없습니다.</td>
            </tr>
          )} */}
          <tr className='border-t-[1px] border-solid border-field bg-white'>
            <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
              지역이름
            </td>
            <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
              날짜와 시간
            </td>
            <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
              구장이름 (타이틀)
            </td>
            <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
              거래하기버튼
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ImminentBoard;
