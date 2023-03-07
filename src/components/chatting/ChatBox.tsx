import { useEffect, useState } from 'react';
import MessageBubble from './MessageBubble';
import { timeNow, dateNow } from '@src/util/dateCalc';
import { currentTime, TimeFormatEnum } from '@src/util/CurrentTime';

type PropsType = {
  myMessage: string;
  recievedMessage: string;
};
export interface chatListType {
  person: string;
  time: string;
  message: string;
}

const ChatBox = ({ myMessage, recievedMessage }: PropsType) => {
  const [chatList, setChatList] = useState<Array<chatListType>>([]);
  const time = currentTime(1000, TimeFormatEnum.HHmm);

  useEffect(() => {
    myMessage.length >= 1 &&
      setChatList((prev) => [...prev, { person: 'me', time: time, message: myMessage }]);
  }, [myMessage]);
  useEffect(() => {
    recievedMessage.length >= 1 &&
      setChatList((prev) => [...prev, { person: 'other', time: time, message: recievedMessage }]);
  }, [recievedMessage]);

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
