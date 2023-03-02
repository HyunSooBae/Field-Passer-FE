import { useState } from 'react';
import MessageBubble from './MessageBubble';
import SendMessage from './SendMessage';

type Props = {};

const ChatBox = (props: Props) => {
  const [person, setPerson] = useState('me');
  const [message, setMessage] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  return (
    <>
      <section className='chatting xxs:h-[calc(100vh-220px)] sm:h-[calc(100vh-240px) flex flex-col gap-3 px-5 py-7 overflow-scroll border-2 border-solid border-lime-100 bg-lime-100'>
        <MessageBubble person={'me'} />
        <MessageBubble person={'other'} />
        <MessageBubble person={'me'} />
        <MessageBubble person={'other'} />
        <MessageBubble person={'me'} />
        <MessageBubble person={'other'} />
        <MessageBubble person={'me'} />
        <MessageBubble person={'other'} />
        <MessageBubble person={'me'} />
        <MessageBubble person={'other'} />
        <MessageBubble person={'me'} />
        <MessageBubble person={'other'} />
        <MessageBubble person={'me'} />
        <MessageBubble person={'other'} />
        <MessageBubble person={'me'} />
        <MessageBubble person={'other'} />
        <MessageBubble person={'me'} />
        <MessageBubble person={'other'} />
      </section>
      <SendMessage />
    </>
  );
};

export default ChatBox;
