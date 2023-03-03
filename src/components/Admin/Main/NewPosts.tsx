import { useEffect, useState } from 'react';
import Post from './Post';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getPostsList } from '@src/api/request';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import { postType } from '@src/util/adminPageTypes';

const NewPosts = () => {
  const [posts, setPosts] = useState<postType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { ok, postsListData } = await getPostsList('2023-02-28', '2023-03-01');
      if (ok) {
        setPosts(postsListData);
      }
    };
    fetchData();
  }, []);

  const PrevArrow = (props: any) => {
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
  const NextArrow = (props: any) => {
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
    dotsClass: 'slick-dots slick-thumb',
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
    customPaging: function () {
      return <div></div>;
    },
  };
  return (
    <div className='w-3/5'>
      <h3 className='font-bold text-2xl'>최신 글 목록</h3>
      <div className='mt-3'>
        <Slider {...settings}>
          {posts.length ? (
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
