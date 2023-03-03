import React from 'react';
import SendMessage from './SendMessage';

type Props = {};

const ChatBox = (props: Props) => {
  return (
    <>
      <section className=' xxs:h-[calc(100vh-220px)] sm:h-[calc(100vh-240px) bg-blue-200 p-5'>
        // 채팅 내용 : 본인은 오른쪽, 상대방 말은 왼쪽에 텍스트 배치
        <div>dsfsdf</div>
      </section>
      <SendMessage />
    </>
  );
};

export default ChatBox;
