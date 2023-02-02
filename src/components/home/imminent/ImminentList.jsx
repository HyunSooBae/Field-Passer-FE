import React, { useState, useEffect } from 'react';

const ImminentList = ({ category, district, startTime, stadiumName, mobile }) => {
  //버튼 누르면 postId로 게시물 이동
  //category, postID 받아야됨..

  const reservedDate = startTime.slice(5, 10).replace('-', '월 ') + '일';

  const liClassName = 'border-b border-solid border-gray-200 h-7 leading-6 ';
  return mobile ? (
    <div className='flex h-52 py-2 px-1 border-2 border-solid border-field mb-2 rounded-[10px] xxs:text-sm sm:text-base'>
      <ul className='py-1 w-32 flex flex-col justify-center gap-2  bg-tableBg rounded-md'>
        <li className={liClassName}>종목</li>
        <li className={liClassName}>지역</li>
        <li className={liClassName}>일시</li>
        <li className={liClassName}>구장</li>
        <li className='h-6 leading-6'>거래하기</li>
      </ul>
      <ul className='py-1 w-full flex flex-col justify-center gap-2'>
        <li className={liClassName}>{category}</li>
        <li className={liClassName}>{district}</li>
        <li className={liClassName}>
          <span className='mr-5'>{reservedDate}</span>
          <span>{startTime.slice(11, 16)}</span>
          <span>{startTime.slice(11, 16)}</span>
        </li>
        <li className={liClassName}>{stadiumName}</li>
        <li className='h-6'>
          <button className='p-2 rounded-[10px] bg-field text-white hover:bg-hoverField'>
            거래하기
          </button>
        </li>
      </ul>
    </div>
  ) : (
    <>
      <tr className='border-t-[1px] border-solid border-field bg-white xxs:text-sm lg:text-base'>
        <td className=' text-gray-900 font-light px-2 py-4 whitespace-nowrap text-center'>
          {category}
        </td>
        <td className=' text-gray-900 font-light px-2 py-4 whitespace-nowrap text-center'>
          {district}
        </td>
        <td className=' text-gray-900 font-light px-2 py-4 whitespace-nowrap text-center'>
          {reservedDate}
        </td>
        <td className=' text-gray-900 font-light px-2 py-4 whitespace-nowrap text-center'>
          {startTime.slice(11, 16)}
        </td>
        <td className=' text-gray-900 font-light px-2 py-4 whitespace-nowrap text-center'>
          {stadiumName}
        </td>
        <td className='text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap text-center'>
          <button className='p-3 rounded-[10px] bg-field text-white hover:bg-hoverField'>
            거래하기
          </button>
        </td>
      </tr>
    </>
  );
};

export default ImminentList;
