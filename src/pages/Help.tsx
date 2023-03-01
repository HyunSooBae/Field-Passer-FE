import React from 'react';
import FAQ from '../components/help/FAQ';
import QuestionBox from '../components/help/QuestionBox';
import { FaRegHandPointDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate = useNavigate();
  // 로그인 확인 후 1:1 문의로
  // 로그인 상태가 아닐 경우 로그인창으로 이동
  const goToPrivateQuestion = () => {
    navigate('/help/question');
    // if (로그인 아닌 상태 && window.confirm('로그인을 해 주세요')) {
    //   navigate('/login');
    // }
  };
  return (
    <main className='m-auto max-w-4xl mt-12 mb-28 py-10 relative px-3'>
      <FAQ />
      <section className='mt-20 text-center'>
        <div className='text-xl mb-5 flex gap-2 xxs:flex-col sm:flex-row justify-center'>
          <span>자주 묻는 질문에 </span>
          <span> 내가 찾는 내용이 없다면?</span>
        </div>
        <FaRegHandPointDown className='w-10 h-10 m-auto my-5' />
        <button
          className='text-2xl bg-field hover:bg-hoverField text-white p-3 rounded-full'
          onClick={goToPrivateQuestion}
        >
          1:1 문의하기
        </button>
      </section>
    </main>
  );
};

export default Help;
