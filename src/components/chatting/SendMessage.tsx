import React from 'react';

type Props = {};

const SendMessage = (props: Props) => {
  return (
    <section className='h-16 bg-lime-500 flex justify-around'>
      <input
        type='text'
        placeholder='메시지를 입력해주세요.'
        className='h-12 min-w-[70%] text-center my-auto'
      />
      <button className='bg-black text-white h-12 p-3 my-auto'>보내기</button>
    </section>
  );
};

export default SendMessage;
