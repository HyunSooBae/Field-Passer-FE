import ChatBox from '@src/components/chatting/ChatBox';
import SendMessage from '@src/components/chatting/SendMessage';
import React from 'react';

type Props = {};

// 접속id와 다를경우 접근 불가
const Chatting = (props: Props) => {
  return (
    <main className='m-auto max-w-4xl py-10 relative px-3'>
      <section className='h-40 bg-cyan-400 flex justify-between'>
        <div className='bg-orange-300 h-28 my-auto'>판매자프로필/판매자닉네임</div>
        <div className='bg-orange-300 h-28 my-auto'>양도글정보 / 양도가격</div>
      </section>
      <section className='bg-fuchsia-200'>
        <div className='flex justify-between px-5'>
          <button className='bg-field text-white p-3'>거래 예약(입금 대기)</button>
          <button className='bg-field text-white p-3'>대화상대 신고</button>
        </div>
      </section>
      <ChatBox />
      <SendMessage />
    </main>
  );
};

export default Chatting;
