import React, { useState, useEffect } from 'react';
import requestAPI from '../../../api/axios';

const Report = () => {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    async function getReports() {
      const data = await requestAPI('report');
      setReports(data?.data?.resultData);
    }
    getReports();
  }, []);

  const report = () => {
    return reports.map((report) => (
      <tr key={report.questionId} className='border-t-[1px] border-solid border-field bg-white'>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
          {report.reportCategory}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
          {report.reporterId}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
          {report.targetId}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
          {report.proccess}
        </td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
          <button className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-20 ml-3'>
            상세 보기
          </button>
        </td>
      </tr>
    ));
  };

  return reports ? report() : <tr>신고 내역이 없습니다.</tr>;
};

export default Report;
