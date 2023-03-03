import React from 'react';

type Props = {};

const SendMessage = (props: Props) => {
  return (
    <section className='fixed bottom-0 w-full h-16 bg-gray-300 flex justify-around'>
      <input
        type='text'
        placeholder='메시지를 입력해주세요.'
        className='h-12 min-w-[70%] text-center my-auto focus:text-start focus:pl-5 focus:outline-none'
      />
      <button className='bg-black text-white h-12 p-3 my-auto min-w-[15%] rounded-[10px]'>
        보내기
      </button>
    </section>
  );
};

export default SendMessage;
