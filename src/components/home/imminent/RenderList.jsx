import React from 'react';

const RenderList = () => {
  return (
    <>
      {/* {reports ? (
            reports?.map((report) => <Question key={report.questionId} item={report} />)
          ) : (
            <tr>
              <td>문의가 없습니다.</td>
            </tr>
          )} */}
      <tr className='border-t-[1px] border-solid border-field bg-white'>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>타이틀</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>아이템</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>날짜머시기</td>
      </tr>
      <tr className='border-t-[1px] border-solid border-field bg-white'>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>타이틀</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>아이템</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>날짜머시기</td>
      </tr>
      <tr className='border-t-[1px] border-solid border-field bg-white'>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>타이틀</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>아이템</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>날짜머시기</td>
      </tr>
      <tr className='border-t-[1px] border-solid border-field bg-white'>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>타이틀</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>아이템</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>날짜머시기</td>
      </tr>
      <tr className='border-t-[1px] border-solid border-field bg-white'>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>타이틀</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>아이템</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>날짜머시기</td>
      </tr>
      <tr className='border-t-[1px] border-solid border-field bg-white'>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>타이틀</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>아이템</td>
        <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>날짜머시기</td>
      </tr>
    </>
  );
};

export default RenderList;
