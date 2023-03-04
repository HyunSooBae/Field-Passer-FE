import ChatBox from '@src/components/chatting/ChatBox';
import SendMessage from '@src/components/chatting/SendMessage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscMenu, VscArrowLeft } from 'react-icons/vsc';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

type Props = {};

// 접속id와 다를경우 접근 불가
const Chatting = (props: Props) => {
  const [userData, setUserData] = useState({
    username: '',
    recievername: '',
    connected: false,
    message: '',
  });

  const modalOpen = () => {
    // 모달 열기
    // 거래예약(입금대기), 대화상대 신고
  };

  const checkUser = () => {
    let sock = new SockJS(import.meta.env.VITE_BASE_URL + '/chat/room');
  };

  return (
    <main className='m-auto relative max-w-4xl'>
      {userData.connected ? (
        <>
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
              onClick={() => modalOpen()}
            />
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
          <ChatBox />
        </>
      ) : null}
    </main>
  );
};

export default Chatting;
