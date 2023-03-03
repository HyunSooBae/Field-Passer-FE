import { useState } from 'react';

const MessageBubble = ({ person }: { person: string }) => {
  return (
    <>
      {person === 'me' ? (
        <div className='flex justify-end'>
          <div className='w-fit bg-field p-3 text-white rounded-2xl text-sm'>안녕하세요</div>
        </div>
      ) : (
        <div className='flex justify-start'>
          <div className='w-fit bg-violet-300 p-3 rounded-2xl text-sm'>안녕하세요</div>
        </div>
      )}
    </>
  );
};

export default MessageBubble;
