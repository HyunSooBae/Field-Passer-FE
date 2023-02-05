import React from 'react';

// 임시입니다. 삭제될 예정.
const Paging = () => {
  const btnPage = 'w-[40px] h-[40px] border border-solid border-gray-300 rounded-[6px]';
  return (
    <div className='flex justify-center gap-2 my-8'>
      <button className={btnPage}>처음</button>
      <button className={btnPage}>이전</button>
      <button className={btnPage}>1</button>
      <button className={`bg-field text-white text-bold ${btnPage}`}>2</button>
      <button className={btnPage}>3</button>
      <button className={btnPage}>다음</button>
      <button className={btnPage}>끝</button>
    </div>
  );
};

export default Paging;
