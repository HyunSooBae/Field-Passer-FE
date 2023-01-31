import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Board from './Board';

const BoardDetails = () => {
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 1,
    slidesToscroll: 1,
    draggable: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    pauseOnHover: true,
    dotsClass: 'slick-dots !bottom-[10px] z-10',
  };

  return (
    <div className='my-[50px] mx-auto w-[600px]'>
      <Slider
        {...settings}
        className='relative h-[600px] mx-auto rounded-lg overflow-hidden'
      >
        <div className='w-full'>
          <img
            className='w-full object-cover aspect-square'
            src='https://ldb-phinf.pstatic.net/20200609_17/15916992874041Uh2W_JPEG/4vxRsS84aj20HB3TJ45pa9Vc.jpg'
          />
        </div>
        <div className='w-full'>
          <img
            className='w-full object-cover aspect-square'
            src='https://www.slnews.co.kr/news/photo/202201/39716_41365_2337.jpg'
          />
        </div>
      </Slider>

      <div className='flex items-center my-[20px] gap-[20px]'>
        <img src="https://img.freepik.com/free-photo/white-wall-with-texture-background_24836-60.jpg?auto=format&h=200" alt="" className='w-[50px] h-[50px] rounded-[50%] '/>
        <div className='flex justify-between w-full items-center'>
          <p className='text-sm font-black'>사용자 이름</p>
          <button className='rounded bg-field text-sm text-white p-[10px]'>채팅 하기</button>
        </div>
      </div>

      <div className='py-[20px] border-b border-t border-solid border-field flex flex-col gap-[20px]'>
        <p className='text-sm'>레드폭스케이지풋살</p>
        <p className='text-sm font-black'>41,000</p>
        <p className='text-sm leading-normal'>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </p>
        <div className='flex items-center justify-between'>
          <p className='flex gap-[5px]'>
            <span className='text-xs text-gray-500'>관심 0</span>
            <span className='text-xs text-gray-500'>· 채팅 0 ·</span>
            <span className='text-xs text-gray-500'>조회 0</span>
          </p>

          <div>
            <button className='px-[10px] py-[7px] text-xs bg-gray-300 text-white rounded mr-[10px]'>수정</button>
            <button className='px-[10px] py-[7px] text-xs bg-gray-300 text-white rounded'>삭제</button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between pt-[30px]">
          <p className='font-black'>성동구 다른 예약</p>
          <button className='text-xs text-gray-400'>더보기</button>
        </div>
        <Board />
      </div>
    </div>
  );
};

export default BoardDetails;
