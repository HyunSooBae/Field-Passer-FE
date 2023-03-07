import React, { SetStateAction, useState } from 'react';
import { RxPaperPlane } from 'react-icons/rx';

type PropsType = {
  setMyMessage: React.Dispatch<SetStateAction<string>>;
};

const SendMessage = ({ setMyMessage }: PropsType) => {
  const [text, setText] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMyMessage(text);
    setText('');
  };
  return (
    <form
      className='fixed bottom-0 max-w-4xl w-full h-14 bg-gray-200 flex justify-around'
      onSubmit={(e) => onSubmit(e)}
    >
      <input
        type='text'
        placeholder='메시지를 입력해주세요.'
        className='h-10 min-w-[70%] my-auto focus:text-start pl-5 focus:outline-none xxs:text-sm mm:text-base'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='bg-black text-white h-10 p-3 my-auto min-w-[15%] rounded-[10px] flex justify-center gap-3 xxs:text-sm mm:text-base'>
        <RxPaperPlane />
        전송
      </button>
    </form>
  );
};

export default SendMessage;
