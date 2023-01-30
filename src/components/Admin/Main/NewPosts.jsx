import React, { useEffect, useState } from 'react';
import Post from './Post';
import requestAPI from '../../../api/axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';

const NewPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const data = await requestAPI('post');
      setPosts(data?.data?.resultData);
    }
    getPosts();
  }, []);

  const PrevArrow = (props) => {
    const onClick = props.onClick;
    return (
      <div>
        <IoIosArrowDropleftCircle
          onClick={onClick}
          className='absolute w-7 h-7 text-gray-500 left-0 top-1/2 bottom-1/2 cursor-pointer z-10'
        />
      </div>
    );
  };
  const NextArrow = (props) => {
    const onClick = props.onClick;
    return (
      <div>
        <IoIosArrowDroprightCircle
          onClick={onClick}
          className='absolute w-7 h-7 text-gray-500 top-1/2 bottom-1/2 right-0 cursor-pointer'
        />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToscroll: 1,
    draggable: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnFocus: true,
    pauseOnHover: true,
    appenDots: (dots) => (
      <div
        style={{
          backgroundColor: '#21A04D',
          borderRadius: '50%',
          width: '10px',
          height: '10px',
        }}
      >
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
  };
  return (
    <div className='w-3/5'>
      <h3 className='font-bold text-2xl'>최신 글 목록</h3>
      <div className='mt-3'>
        <Slider {...settings}>
          {posts ? (
            posts.map((post) => <Post key={post.postId} item={post} />)
          ) : (
            <p>새로운 글이 없습니다.</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default NewPosts;
