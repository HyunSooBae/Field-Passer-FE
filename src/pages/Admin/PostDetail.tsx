import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import requestAPI from '../../api/axios';
import { AxiosResponse } from 'axios';

const PostDetail = () => {
  const mapElement = useRef(null);

  // api 나오면 특정 게시글 데이터로 교체
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res: AxiosResponse<any, any> | undefined = await requestAPI('post');
      setData(res!.data.resultData);
    };
    getData();
  }, []);

  // api 나오면 경도 위도 받아서 사용
  useEffect(() => {
    const { naver }: any = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.51557, 126.91228);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

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
    <div className='max-w-[1520px] h-screen grid-in-main p-10'>
      <div className='my-[50px] mx-auto max-w-[600px] px-[20px] mm:px-[0]'>
        <h1 className='text-2xl text-field font-bold mb-10'>게시물 상세 보기</h1>
        <Slider {...settings} className='relative max-h-[600px] mx-auto rounded-lg overflow-hidden'>
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
          <img
            src='https://img.freepik.com/free-photo/white-wall-with-texture-background_24836-60.jpg?auto=format&h=200'
            alt=''
            className='w-[50px] h-[50px] rounded-[50%] '
          />
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
              <button className='px-[10px] py-[7px] text-xs bg-gray-300 text-white rounded mr-[10px]'>
                수정
              </button>
              <button className='px-[10px] py-[7px] text-xs bg-gray-300 text-white rounded'>
                삭제
              </button>
            </div>
          </div>
        </div>

        <section className='flex w-full gap-[20px] my-[20px] mm:flex-row flex-col'>
          <div ref={mapElement} className='mm:w-[300px] w-[100%] aspect-[1/1]' />

          <div className='flex flex-col gap-[10px]'>
            <p className='text-sm'>장소 이름 : </p>
            <p className='text-sm'>장소 번호 : </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostDetail;
