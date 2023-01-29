import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';


const MainSlider = () => {
  
  const PrevArrow = (props) => {
    const onClick  = props.onClick;
    return (
      <div>
        <IoIosArrowDropleftCircle
          onClick={onClick}
          className="absolute w-7 h-7 text-gray-500 left-0 top-1/2 bottom-1/2 cursor-pointer z-10" />
      </div>
    );
  }

  const NextArrow = (props) => {
    const onClick  = props.onClick;
    return (
      <div>
        <IoIosArrowDroprightCircle
          onClick={onClick}
          className="absolute w-7 h-7 text-gray-500 top-1/2 bottom-1/2 right-0 cursor-pointer" />
      </div>
    );
  }

  const settings = {
    arrow: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToscroll: 1,
    draggable: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoints: 480,
      }
    ]
  }

  return (
      <Slider {...settings}>
        <div className="relative">
          <img src="images/slider-1.png" />
        </div>
        <div className="relative">
          <img src="images/slider-2.png" />
        </div>
      </Slider>
  )
};


export default MainSlider;
