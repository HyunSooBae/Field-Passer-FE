import React, { useEffect, useState } from 'react';
import { BsPatchQuestion } from 'react-icons/bs';

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState<String>('account');

  return (
    <>
      <section className=''>
        <div className='mb-16'>
          <BsPatchQuestion className='w-20 h-20 m-auto mb-4' />
          <h1 className='text-center h-10 leading-10 text-4xl'>자주 묻는 질문</h1>
        </div>
        <div className='flex justify-around'>
          <div>
            <input
              type='radio'
              id='account'
              value='account'
              name='category'
              className='peer hidden'
              defaultChecked
            />
            <label
              htmlFor='account'
              className='xxs:text-xs xs:text-base mm:text-lg md:text-lg font-bold w-full text-center py-2 align-middle cursor-pointer peer-checked:border-b-[3px] border-solid peer-checked:transition-[.5s]'
              onClick={() => {
                setSelectedCategory('account');
              }}
            >
              회원/계정
            </label>
          </div>
          <div>
            <input
              type='radio'
              id='policy'
              value='policy'
              name='category'
              className='peer hidden'
            />
            <label
              htmlFor='policy'
              className='xxs:text-xs xs:text-base mm:text-lg md:text-lg font-bold w-full text-center py-2 align-middle cursor-pointer peer-checked:border-b-[3px] border-solid peer-checked:transition-[.5s]'
              onClick={() => {
                setSelectedCategory('policy');
              }}
            >
              거래분쟁/운영정책
            </label>
          </div>
          <div>
            <input type='radio' id='etc' value='etc' name='category' className='peer hidden' />
            <label
              htmlFor='etc'
              className='xxs:text-xs xs:text-base mm:text-lg md:text-lg font-bold w-full text-center py-2 align-middle cursor-pointer peer-checked:border-b-[3px] border-solid peer-checked:transition-[.5s]'
              onClick={() => {
                setSelectedCategory('etc');
              }}
            >
              이용방법/기타
            </label>
          </div>
        </div>
      </section>
      <section className='mt-10 flex flex-col gap-8'>
        {selectedCategory === 'account' && (
          <div>
            <ul className='flex flex-col gap-5 border-2 border-solid border-field px-5 py-8 rounded-lg'>
              <li className='flex flex-col gap-3'>
                <div className='text-lg'>
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
        )}

        {selectedCategory === 'policy' && (
          <div>
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
        )}

        {selectedCategory === 'etc' && (
          <div>
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
                <div className='text-lg '>
                  양도받은 이후 사정이 생겨 못 가게 된다면 재판매도 가능한가요?
                </div>
                <div className='bg-green-200 py-5 px-3'>그러게요...</div>
              </li>
              <li className='flex flex-col gap-3'>
                <div className='text-lg '>고객센터 운영시간은 어떻게 되나요?</div>
                <div className='bg-green-200 py-5 px-3'>평일 오전 9시 ~ 오후 6시 입니다.</div>
              </li>
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default FAQ;
