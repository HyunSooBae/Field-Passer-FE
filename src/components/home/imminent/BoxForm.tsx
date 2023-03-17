import React, { useState, useEffect } from 'react';
import ImminentList from './ImminentList';
import { ImminentBoardType } from '@src/util/userPageTypes';

const BoxForm = ({ selectedCategory, selectedDistrict, list }: ImminentBoardType) => {
  const filteredList = list.filter(
    (item) =>
      item.category === selectedCategory &&
      (selectedDistrict === 'all' || item.district === selectedDistrict),
  );
  console.log(list);

  return (
    <div className='flex mm:hidden text-center'>
      <div className='w-full'>
        {filteredList.length ? (
          filteredList?.map(({ category, postId, district, stadiumName, startTime }) => (
            <ImminentList
              key={postId}
              postId={postId}
              category={category}
              district={district}
              startTime={startTime}
              stadiumName={stadiumName}
              mobile={true}
            />
          ))
        ) : (
          <div className='h-52 px-1 border-2 border-solid border-field mb-2 rounded-[10px] text-lg flex flex-col justify-center'>
            조건에 맞는 게시물이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default BoxForm;
