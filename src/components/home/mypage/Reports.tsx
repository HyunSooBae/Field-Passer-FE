import React from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';
import Pagination from '../../Pagination';

type ReprotType = {
  reports: any;
  offset: any;
  limitPerPage: any;
  page: any;
  setPage: any;
};

const Reports = ({ reports, offset, limitPerPage, page, setPage }: ReprotType) => {
  return (
    <div className='content pb-60'>
      <div className='flex justify-between mt-48 mb-10'>
        <h3 className='text-2xl font-bold'>문의 게시판</h3>
        <Link to=''>더보기</Link>
      </div>
      <table className='table-auto w-full border border-solid border-gray-200 rounded-[10px] overflow-hidden bg-gray-200'>
        <thead className='bg-gray-100'>
          <tr>
            <th scope='col' className='p-4 text-sm font-bold text-gray-500 text-left'>
              제목
            </th>
            <th scope='col' className='p-4 text-sm font-bold text-gray-500 text-left'>
              등록 일자
            </th>
            <th scope='col' className='p-4 text-sm font-bold text-gray-500 text-left'>
              답변 상태
            </th>
            <th scope='col' className='p-4 text-sm font-bold text-gray-500 text-left'>
              작성자 닉네임
            </th>
          </tr>
        </thead>
        <tbody className='devide-y'>
          {reports ? (
            reports?.slice(offset, offset + limitPerPage).map((report: any, index: any) => (
              <Question
                // key={report.questionId}
                key={index}
                item={report}
              />
            ))
          ) : (
            <tr className='text-center'>
              <td colSpan={4} className='p-10 bg-white'>
                문의 내역이 없습니다.
              </td>
            </tr>
          )}{' '}
        </tbody>
      </table>
      <Pagination total={reports.length} limit={limitPerPage} page={page} setPage={setPage} />
    </div>
  );
};

export default Reports;
