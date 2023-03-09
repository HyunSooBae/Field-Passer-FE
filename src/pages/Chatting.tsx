import ChatBox from '@src/components/chatting/ChatBox';
import SendMessage from '@src/components/chatting/SendMessage';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { VscMenu, VscArrowLeft } from 'react-icons/vsc';
import { Client } from '@stomp/stompjs';
import { currentTime, TimeFormatEnum } from '@src/util/CurrentTime';
import { ChatListType } from '@src/util/mainPageTypes';

// 접속id와 다를경우 접근 불가
const Chatting = () => {
  const roomId = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [recievedMessage, setRecievedMessage] = useState<string>('');
  const [myMessage, setMyMessage] = useState<string>('');
  const [chatList, setChatList] = useState<Array<ChatListType>>([]);
  const time = currentTime(1000, TimeFormatEnum.HHmm);
  const [chatDate, setChatDate] = useState();
  // 서버에서 받아온 이전 채팅기록/오늘날짜 비교 -> 이전기록이 오늘일 경우 라벨 x

  const client = new Client({
    brokerURL: `wss:${import.meta.env.VITE_WS_URL}/ws`,
    connectHeaders: {
      postId: `1`,
      sellerId: `1`,
      buyerId: `3`,
    },
    debug: (notice) => {
      console.log(notice);
    },
    beforeConnect: () => {
      console.log('비동기/서버에서 대화기록 가져오기');
    },
    onConnect: () => {
      client.subscribe('/sub/chat/room/4', (message) => {
        console.log(`받은 메시지: ${message.body}`);
        message.body.length >= 1 && setRecievedMessage(message.body);
      });
      client.publish({
        destination: `/pub/chat/send`,
        body: myMessage,
      });
    },
    onDisconnect: () => {
      console.log('서버에 대화기록 저장');
    },
    heartbeatIncoming: 0,
    heartbeatOutgoing: 0,
  });

  useEffect(() => {
    client.activate();
    return () => {
      client.deactivate();
    };
  }, []);

  useEffect(() => {
    myMessage.length >= 1 &&
      setChatList((prev) => [...prev, { person: 'me', time: time, message: myMessage }]);
  }, [myMessage]);
  useEffect(() => {
    recievedMessage.length >= 1 &&
      setChatList((prev) => [...prev, { person: 'other', time: time, message: recievedMessage }]);
  }, [recievedMessage]);

  const reservation = () => {
    //거래예약 api
  };

  const report = () => {
    // 회원신고 api
  };

  return (
    <main className='m-auto relative max-w-4xl'>
      <section className='flex'>
        <VscArrowLeft
          onClick={() => history.back()}
          className='absolute w-7 h-7 top-4 left-5 hover:text-field cursor-pointer'
        />
        <div className='m-auto py-2 flex gap-5 justify-center '>
          <img
            src='/images/anony.png'
            alt='상대방 프로필'
            className='w-10 h-10 rounded-full my-auto'
          />
          {/* <div className='w-10 h-10 rounded-full my-auto'>{상대방 프로필}</div> */}
          <div className='bg-white my-auto text-lg font-bold text-field'>상대방 닉네임</div>
        </div>
        <VscMenu
          className='w-7 h-7 absolute top-4 right-5 cursor-pointer hover:text-field'
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
        {isModalOpen && (
          <div className='absolute right-5 top-12 flex flex-col h-fit w-36 border-2 border-solid border-field rounded-lg bg-white'>
            <button
              className=' h-12 hover:text-field hover:font-bold'
              onClick={() => reservation()}
            >
              거래 예약하기
            </button>
            <button className=' h-12 hover:text-field hover:font-bold' onClick={() => report()}>
              대화상대 신고
            </button>
          </div>
        )}
      </section>
      <section className='h-16 flex '>
        <img
          src='/images/background-track.jpg'
          alt='구장 사진'
          className='w-16 h-16 object-cover'
        />
        <div className='my-auto text-sm pl-4 leading-5'>
          <span className='text-base font-bold'>잠실 무슨무슨 운동장</span>
          <br />
          <span className='mr-2'>3월 4일 토요일</span>/<span className='ml-2'>4만원</span>
        </div>
      </section>
      <ChatBox chatList={chatList} />
      <SendMessage setMyMessage={setMyMessage} />
    </main>
  );
};

export default Chatting;
