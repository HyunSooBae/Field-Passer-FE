import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';


const MainSlider = () => {
  
  const PrevArrow = (props) => {
    return (
      <IoIosArrowDropleftCircle
        onClick={props.onClick}
        className="xxs:hidden md:block w-8 h-8 absolute text-gray-300 bottom-1/2 left-1 cursor-pointer z-10" />
    );
  }

  const NextArrow = (props) => {
    return (
      <IoIosArrowDroprightCircle
        onClick={props.onClick}
        className="xxs:hidden md:block w-8 h-8 absolute text-gray-300 bottom-1/2 right-1 cursor-pointer" />
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
      <Slider {...settings} className="relative pb-5">
        <div>
          <img src="images/slider-1.png" />
        </div>
        <div>
          <img src="images/slider-2.png" />
        </div>
      </Slider>
  )
};


export default MainSlider;
