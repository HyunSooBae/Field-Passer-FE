import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full pt-5 border-t border-gray-200 border-solid bg-neutral-500'>
      <div className='bg-yellow-400 m-auto max-w-5xl relative text-xs p-7 flex-col'>
        <ul className='mb-2'>
          <li>
            <a href='/'>개인정보처리방침</a>
          </li>
          <li>
            <a href='/'>영상정보처리기기 운영관리 방침</a>
          </li>
          <li>
            <a href='/'>홈페이지 이용약관</a>
          </li>
          <li>
            <a href='/'>윤리경영 핫라인</a>
          </li>
        </ul>

        <div>
          <a href='/'>찾아오시는 길</a>
          <a href='/'>사이트 맵</a>
        </div>

        <div className='flex justify-around'>
          <span>사업자등록번호 001-01-00005</span>
          <span>(주)필드패서 대표이사 누구세요</span>
          <span>TEL : 02-0000-1000 / FAX : 02-0000-1000</span>
          <span>개인정보 책임자 : 누구세요</span>
        </div>

        <div className='font-semibold'>
          <a href='/'>
            <img src='images/logo-1.png' className='w-36' />
          </a>
          <span className=''>&copy; 2023 Field-Passer Company. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
