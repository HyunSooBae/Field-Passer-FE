import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full mt-10 pt-5 border-t border-gray-200 border-solid'>
      <div className='bg-yellow-400 m-auto max-w-5xl text-xs p-10 flex gap-1 relative'>
        <div className='flex flex-col gap-1'>
          <span>(주)필드패서 대표이사 누구세요</span>
          <span>개인정보 책임자 : 누구세요</span>
          <span>사업자등록번호 001-01-00005</span>
          <span>주소 서울특별시 강남구 강남대로 364</span>
          <span>TEL : 02-1234-5678 / FAX : 02-9876-5432</span>
          <ul className='mb-2 flex gap-3 mt-3'>
            <li>개인정보처리방침</li>
            <li>영상정보처리기기 운영관리 방침</li>
            <li>홈페이지 이용약관</li>
          </ul>
        </div>
        <div className='flex flex-col bg-red-100 absolute right-0'>
          <div className='flex gap-6 justify-end'>
            <span>사이트 맵</span>
            <a href='https://github.com/Field-Passer' target='_blank' className='px-1'>
              찾아오시는 길
            </a>
          </div>
          <div className='flex justify-end'>
            <img src='images/logo-1.png' className='w-36 right-0' />
          </div>
          <span className='font-semibold text-right'>
            &copy; 2023 FIELD-PASSER. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
