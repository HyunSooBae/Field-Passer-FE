import { useState } from 'react';
import { chatListType } from './ChatBox';

const MessageBubble = ({ person, time, message }: chatListType) => {
  return (
    <>
      {person === 'me' ? (
        <div className='flex justify-end'>
          <div className='text-xxs my-auto mr-1'>{time}</div>
          <div className='w-fit bg-field p-3 text-white rounded-2xl text-sm'>{message}</div>
        </div>
      ) : (
        <div className='flex justify-start'>
          <div className='w-fit bg-violet-300 p-3 rounded-2xl text-sm'>{message}</div>
          <div className='text-xxs my-auto ml-1'>{time}</div>
        </div>
      )}
    </>
  );
};

export default MessageBubble;
