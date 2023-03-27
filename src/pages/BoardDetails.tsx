import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PostList from '../components/PostList';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { DeletePost, getDetailPostData, getSearchPostList } from '@src/api/request';
import { PostType } from './../util/userPageTypes';
import { useDispatch } from 'react-redux';
import { savePostMore } from '@src/store/postSlice';
import { unselected } from '@src/store/categorySlice';

const BoardDetails = () => {
  let { id } = useParams(); // 게시글 id
  let { userId } = useParams(); // 작성자 id

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mapElement = useRef(null);

  // 게시글 data
  const [data, setData] = useState<PostType>();
  // 게시글 지역 data
  const [district, setDistrict] = useState<PostType[]>([]);

  // 상세 게시글 api
  useEffect(() => {
    const getData = async () => {
      const res = await getDetailPostData(id);
      setData(res);
    };
    getData();
  }, []);

  // 해당 게시글 지역 기반 게시글 api
  useEffect(() => {
    const getDistrictData = async () => {
      const res = await getSearchPostList('', data?.districtName, '', 1);
      setDistrict(res);
    };
    getDistrictData();
  }, [data]);

  // 지도 api
  useEffect(() => {
    const getDistrictData = async () => {
      const res = await getSearchPostList('', data?.districtName, '', 1);
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
  }, [data]);

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

  // 더보기 버튼 함수
  const morePage = () => {
    dispatch(unselected('all'));
    dispatch(savePostMore(district));
    navigate('/boardMore');
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
        <Link to={`/userProfile/${userId}`} className='w-[50px] h-[50px] rounded-[50%] block '>
          <img
            src={data?.profileImg}
            alt='profileImg'
            className='w-[50px] h-[50px] rounded-[50%] block'
          />
        </Link>
        <div className='flex justify-between w-full items-center'>
          <p className='text-xm font-black'>{data?.memberName}</p>
          <button className='rounded bg-field text-sm text-white p-[10px]'>채팅 하기</button>
        </div>
      </div>
      <div className='pt-[20px] pb-[10px] border-b border-t border-solid border-field flex flex-col gap-[20px]'>
        <div className='flex justify-between'>
          <p className='inline-block max-w-[70%] whitespace-nowrap overflow-hidden text-ellipsis'>
            {data?.title}
          </p>
          <p className='text-sm font-black'>{data?.price.toLocaleString()} 원</p>
        </div>
        <p className='text-sm leading-normal pt-2 pb-2'>{data?.content}</p>
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
            <button
              className='px-[10px] py-[7px] text-xs bg-gray-300 text-white rounded'
              onClick={() => {
                if (confirm('삭제 하시겠습니까?') === true) {
                  DeletePost(id);
                  navigate('/');
                }
              }}
            >
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
          <button className='text-xs text-gray-400' onClick={() => morePage()}>
            더보기
          </button>
        </div>
        <PostList data={district} />
      </div>
    </div>
  );
};
export default BoardDetails;
