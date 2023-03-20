import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PostList from '../components/PostList';
import { useParams } from 'react-router-dom';
import { getDetailPostData, getSearchPostList } from '@src/api/request';
import { PostType } from './../util/userPageTypes';
const BoardDetails = () => {
  let { id } = useParams();
  const mapElement = useRef(null);
  const [data, setData] = useState<PostType>();
  const [district, setDistrict] = useState<PostType[]>([]);
  // 상세 게시글 api
  useEffect(() => {
    const getData = async () => {
      const res = await getDetailPostData(id);
      setData(res);
    };
    getData();
  }, []);
  useEffect(() => {
    const getDistrictData = async () => {
      const res = await getSearchPostList('', data?.districtName, '', 1);
      console.log(data?.districtName);
      setDistrict(res);
    };
    getDistrictData();
  }, [data]);
  // 지도 api
  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;
    const location = new naver.maps.LatLng(data?.latitude, data?.longitude);
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
    <div className='my-[50px] mx-auto max-w-[600px] px-[20px] mm:px-[0]'>
      <Slider {...settings} className='relative max-h-[600px] mx-auto rounded-lg overflow-hidden'>
        <div className='w-full'>
          <img className='w-full object-cover aspect-square' src={data?.defaultImageUrl} />
        </div>
        <div className='w-full'>
          <img className='w-full object-cover aspect-square' src={data?.imageUrl} />
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
        <p className='text-sm'>{data?.title}</p>
        <p className='text-sm font-black'>{data?.price}</p>
        <p className='text-sm leading-normal'>{data?.content}</p>
        <div className='flex items-center justify-between'>
          <p className='flex gap-[5px]'>
            <span className='text-xs text-gray-500'>관심 {data?.wishCount}</span>
            <span className='text-xs text-gray-500'>· 채팅 0 ·</span>
            <span className='text-xs text-gray-500'>조회 {data?.viewCount}</span>
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
          <p className='text-sm'>장소 이름 : {data?.stadiumName}</p>
          <p className='text-sm'>장소 번호 : {data?.phone}</p>
        </div>
      </section>
      <div>
        <div className='flex items-center justify-between py-[20px]'>
          <p className='font-black'>{data?.districtName} 다른 예약</p>
          <button className='text-xs text-gray-400'>더보기</button>
        </div>
        <PostList data={district} />
      </div>
    </div>
  );
};
export default BoardDetails;
