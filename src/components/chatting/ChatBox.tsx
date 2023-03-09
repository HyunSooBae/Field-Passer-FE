import { useEffect, useState } from 'react';
import MessageBubble from './MessageBubble';
import { ChatListType } from '../../pages/Chatting';

type PropsType = {
  chatList: ChatListType[];
};

const ChatBox = ({ chatList }: PropsType) => {
  return (
    <section className='chatting xxs:h-[calc(100vh-200px)] sm:h-[calc(100vh-220px)] flex flex-col gap-3 px-5 py-7 overflow-scroll border-2 border-solid border-gray-200 bg-gray-100'>
      {chatList.length >= 1 &&
        chatList.map((message, index) => (
          <MessageBubble
            key={index}
            person={message.person}
            time={message.time}
            message={message.message}
          />
        ))}
    </section>
  );
};

export default ChatBox;
