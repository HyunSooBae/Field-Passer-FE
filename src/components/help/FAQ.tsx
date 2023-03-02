import React, { useEffect, useState } from 'react';
import { BsPatchQuestion } from 'react-icons/bs';
import { qnaAccount, qnaPolicy, qnaEtc } from '@src/util/options';

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
      <section className='mt-10'>
        {selectedCategory === 'account' && (
          <div>
            <ul className='flex flex-col gap-10 border-2 border-solid border-field px-7 py-10 rounded-lg'>
              {qnaAccount.map((item, index) => (
                <li
                  className='flex flex-col gap-3 xxs:text-sm xs:text-base mm:text-lg md:text-lg'
                  key={index}
                >
                  <div>Q. {Object.keys(item)}</div>
                  <div className='bg-gray-200 py-7 px-5 leading-7'>A. {Object.values(item)}</div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedCategory === 'policy' && (
          <div>
            <ul className='flex flex-col gap-10 border-2 border-solid border-field px-7 py-10 rounded-lg'>
              {qnaPolicy.map((item, index) => (
                <li
                  className='flex flex-col gap-3 xxs:text-sm xs:text-base mm:text-lg md:text-lg'
                  key={index}
                >
                  <div>Q. {Object.keys(item)}</div>
                  <div className='bg-gray-200 py-7 px-5 leading-7'>A. {Object.values(item)}</div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedCategory === 'etc' && (
          <div>
            <ul className='flex flex-col gap-10 border-2 border-solid border-field px-7 py-10 rounded-lg'>
              {qnaEtc.map((item, index) => (
                <li
                  className='flex flex-col gap-3 xxs:text-sm xs:text-base mm:text-lg md:text-lg'
                  key={index}
                >
                  <div>Q. {Object.keys(item)}</div>
                  <div className='bg-gray-200 py-7 px-5 leading-7'>A. {Object.values(item)}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default FAQ;
