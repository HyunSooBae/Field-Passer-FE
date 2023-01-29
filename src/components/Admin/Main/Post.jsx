import React from 'react';
import { BsEye } from 'react-icons/bs';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

const post = ({ item }) => {
  return (
    <div className='p-3 box-border'>
      <img
        src='https://www.newspeak.kr/news/photo/202209/440903_288757_4514.jpg'
        alt=''
        className='w-[180px] rounded-lg'
      />
      <div className='flex flex-col'>
        <span className='text-xs'>{item.category}</span>
        <span className='font-bold'>{item.title}</span>
        <span className='font-bold'>
          {item.resevedDate} {item.startTime}
        </span>
        <span className='font-bold'>{Number(item.price).toLocaleString()}원</span>
        <div className='flex gap-3'>
          <div className='flex'>
            <BsEye />
            <span>{item.viewCount}</span>
          </div>
          <span>·</span>
          <div className='flex'>
            <HiOutlineChatBubbleLeftRight />
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default post;
