import React, { useState, useEffect } from 'react';
import ImminentList from './ImminentList';
import { ImminentBoardType } from '@src/util/userPageTypes';

const BoxForm = ({ selectedCategory, selectedDistrict, list }: ImminentBoardType) => {
  const filteredList = list.filter(
    (item) =>
      item.categoryName === selectedCategory &&
      (selectedDistrict === 'all' || item.districtName === selectedDistrict),
  );

  return (
    <div className='flex mm:hidden text-center'>
      <div className='w-full'>
        {filteredList.length ? (
          filteredList?.map(({ categoryName, postId, districtName, stadiumName, startTime }) => (
            <ImminentList
              key={postId}
              postId={postId}
              categoryName={categoryName}
              districtName={districtName}
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
