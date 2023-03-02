import { useState } from 'react';

const MessageBubble = ({ person }: { person: string }) => {
  return (
    <>
      {person === 'me' ? (
        <div className='flex justify-end'>
          <div className='w-fit bg-rose-400 p-3'>안녕하세요</div>
        </div>
      ) : (
        <div className='flex justify-start'>
          <div className='w-fit bg-violet-300 p-3'>안녕하세요</div>
        </div>
      )}
    </>
  );
};

export default MessageBubble;
