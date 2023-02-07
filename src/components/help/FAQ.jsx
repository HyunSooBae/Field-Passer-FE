import React, { useState } from 'react';
import { BsPatchQuestion } from 'react-icons/bs';

const FAQ = () => {
  // false면 토글 닫힘, true면 열림
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');

  const clickToggle = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='mb-16'>
        <BsPatchQuestion className='w-20 h-20 m-auto mb-4' />
        <h1 className='text-center h-10 leading-10 text-4xl'>자주 묻는 질문</h1>
      </div>

      <section className=' flex flex-col gap-8'>
        <div>
          <div
            className='flex cursor-pointer text-center p-3 mx-5 text-2xl font-bold mb-8 border-b-4 border-solid justify-between'
            onClick={(e) => {
              clickToggle(e);
            }}
          >
            <h2 className=''>회원/계정</h2>
            <span>{isOpen ? '닫기' : '열기'}</span>
          </div>

          <ul className='flex flex-col gap-5 border-2 border-solid border-field px-5 py-8 rounded-lg'>
            <li className='flex flex-col gap-3'>
              <div className='text-lg '>
                거래사기로 제재된 사람이 다시 필드패서를 이용할 수 있나요?
              </div>
              <div className='bg-green-200 py-5 px-3'>안됩니다.</div>
            </li>
            <li className='flex flex-col gap-3'>
              <div className='text-lg '>등록한 게시물이 갑자기 삭제 됐어요.</div>
              <div className='bg-green-200 py-5 px-3'>제가 삭제함.</div>
            </li>
            <li className='flex flex-col gap-3'>
              <div className='text-lg '>회원 탈퇴를 하고 싶어요.</div>
              <div className='bg-green-200 py-5 px-3'>안됩니다.</div>
            </li>
          </ul>
        </div>

        <div>
          <div
            className='flex cursor-pointer text-center p-3 mx-5 text-2xl font-bold mb-8 border-b-4 border-solid justify-between'
            onClick={(e) => {
              clickToggle(e);
            }}
          >
            <h2 className=''>거래분쟁/운영정책</h2>
            <span>{isOpen ? '닫기' : '열기'}</span>
          </div>

          <ul className='flex flex-col gap-5 border-2 border-solid border-field px-5 py-8 rounded-lg'>
            <li className='flex flex-col gap-3'>
              <div className='text-lg '>사기꾼의 주요 사기패턴 유형이 궁금해요.</div>
              <div className='bg-green-200 py-5 px-3'>친절한 척 합니다.</div>
            </li>
            <li className='flex flex-col gap-3'>
              <div className='text-lg '>사기를 당하면 어떻게 처리해야 되나요?</div>
              <div className='bg-green-200 py-5 px-3'>경찰에 신고 하세요.</div>
            </li>
            <li className='flex flex-col gap-3'>
              <div className='text-lg '>
                필드패서 이용 시 지켜야 할 운영정책은 어떤 것들이 있나요?
              </div>
              <div className='bg-green-200 py-5 px-3'>🙏 기본적인 예의는 지켜 주세요.</div>
            </li>
          </ul>
        </div>

        <div>
          <div
            id='third'
            className='flex cursor-pointer text-center p-3 mx-5 text-2xl font-bold mb-8 border-b-4 border-solid justify-between'
            onClick={(e) => {
              clickToggle(e);
            }}
          >
            <h2 className=''>기타 이용방법</h2>
            <span>{isOpen ? '닫기' : '열기'}</span>
          </div>

          <ul className='flex flex-col gap-5 border-2 border-solid border-field px-5 py-8 rounded-lg'>
            <li className='flex flex-col gap-3'>
              <div className='text-lg '>사이트를 어떻게 이용하나요?</div>
              <div className='bg-green-200 py-5 px-3'>
                양도를 하려면 양도하기 누르시고 양도를 받으시려면 게시글을 누르세요
              </div>
            </li>
            <li className='flex flex-col gap-3'>
              <div className='text-lg '>거래를 취소하고 싶어요.</div>
              <div className='bg-green-200 py-5 px-3'>안됩니다.</div>
            </li>
            <li className='flex flex-col gap-3'>
              <div className='text-lg '>고객센터 운영시간은 어떻게 되나요?</div>
              <div className='bg-green-200 py-5 px-3'>평일 오전 9시 ~ 오후 6시 입니다.</div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default FAQ;
