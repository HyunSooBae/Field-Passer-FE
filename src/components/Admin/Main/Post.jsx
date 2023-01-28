import React from 'react';
import { BsEye } from 'react-icons/bs';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

const post = () => {
  return (
    <div className='p-3 box-border'>
      <img src='./images/jamsil.jpg' alt='' className='w-48' />
      <div className='flex flex-col'>
        <span>잠실실내체육관</span>
        <span>4PM - 6PM</span>
        <span>55,000원</span>
        <span>서울특별시 송파</span>
        <div className='flex gap-3'>
          <div className='flex'>
            <BsEye />
            <span>12</span>
          </div>
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
