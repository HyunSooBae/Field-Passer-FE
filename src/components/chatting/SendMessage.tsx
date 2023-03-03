import React from 'react';
import { RxPaperPlane } from 'react-icons/rx';

type Props = {};

const SendMessage = (props: Props) => {
  return (
    <section className='fixed bottom-0 max-w-4xl w-full h-14 bg-gray-200 flex justify-around'>
      <input
        type='text'
        placeholder='메시지를 입력해주세요.'
        className='h-10 min-w-[70%] text-center my-auto focus:text-start focus:pl-5 focus:outline-none xxs:text-sm mm:text-base'
      />
      <button className='bg-black text-white h-10 p-3 my-auto min-w-[15%] rounded-[10px] flex justify-center gap-2 xxs:text-sm mm:text-base'>
        <RxPaperPlane />
        전송
      </button>
    </section>
  );
};

export default SendMessage;
