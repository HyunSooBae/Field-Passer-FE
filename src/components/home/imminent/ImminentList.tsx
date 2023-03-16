import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListType } from '@src/util/userPageTypes';

interface ImminentListType extends ListType {
  mobile: boolean;
}

const ImminentList = ({
  postId,
  category,
  district,
  startTime,
  stadiumName,
  mobile,
}: ImminentListType) => {
  //버튼 누르면 postId로 게시물 이동
  //category, postID 받아야됨..
  const navigate = useNavigate();
  const reservedDate = startTime.slice(5, 10).replace('-', '월 ') + '일';
  const liClassNameMobile = 'border-b border-solid border-gray-200 h-7 leading-6';
  const liClassNameTable = 'text-gray-900 font-light px-2 py-4 whitespace-nowrap text-center';

  const goToPost = () => {
    navigate(`/post/${postId}`);
  };

  return mobile ? (
    <div className='flex h-52 py-2 px-1 border-2 border-solid border-field mb-2 rounded-[10px] xxs:text-sm sm:text-base'>
      <ul className='py-1 w-32 flex flex-col justify-center gap-2  bg-tableBg rounded-md'>
        <li className={liClassNameMobile}>종목</li>
        <li className={liClassNameMobile}>지역</li>
        <li className={liClassNameMobile}>일시</li>
        <li className={liClassNameMobile}>구장</li>
        <li className='h-6 leading-6'>거래하기</li>
      </ul>
      <ul className='py-1 w-full flex flex-col justify-center gap-2'>
        <li className={liClassNameMobile + ' text-field'}>{category}</li>
        <li className={liClassNameMobile}>{district}</li>
        <li className={liClassNameMobile}>
          <span className='mr-3'>{reservedDate}</span>/
          <span className='ml-3'>{startTime.slice(11, 16)}</span>
        </li>
        <li className={liClassNameMobile + ' font-semibold'}>{stadiumName}</li>
        <li className='h-6'>
          <button
            onClick={goToPost}
            className='p-2 rounded-[10px] bg-field text-white hover:bg-hoverField'
          >
            거래하기
          </button>
        </li>
      </ul>
    </div>
  ) : (
    <>
      <tr className='border-t-[1px] border-solid border-field bg-white xxs:text-sm lg:text-base'>
        <td className={liClassNameTable + ' text-field'}>{category}</td>
        <td className={liClassNameTable}>{district}</td>
        <td className={liClassNameTable}>{reservedDate}</td>
        <td className={liClassNameTable}>{startTime.slice(11, 16)}</td>
        <td className={liClassNameTable}>
          <span className='cursor-pointer hover:text-field font-semibold' onClick={goToPost}>
            {stadiumName}
          </span>
        </td>
        <td className={liClassNameTable + ' text-sm'}>
          <button
            onClick={goToPost}
            className='p-3 rounded-[10px] bg-field text-white hover:bg-hoverField'
          >
            거래하기
          </button>
        </td>
      </tr>
    </>
  );
};

export default ImminentList;
