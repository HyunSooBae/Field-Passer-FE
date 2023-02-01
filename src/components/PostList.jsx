import React from "react";
import { Link } from "react-router-dom";
import { BsEye } from 'react-icons/bs';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import Searchbar from "./home/search/Searchbar";

const PostList = ({data}) => {
  return (
    <>
      <Searchbar />
      <div className="max-w-5xl ml-auto mr-auto my-[50px] ">
        <div className="mx-[-15px] flex flex-wrap gap-[10px] pl-[10px]">
          {
            data.map((item, index) => {
              console.log(typeof item.endTime)
              return (
                <div key={index} className="w-[calc((100%/2)-10px)] mm:w-[calc((100%/4)-10px)] px-[5px] py-[10px] mb-[10px]">
                  <Link to='./details/postName' className="flex flex-col gap-[15px]">
                    <img role="img" className="w-full border border-gray-500 border-solid object-cover aspect-square rounded-lg" src={item.imageURL}/>
                    <div className="flex flex-col gap-[10px]">
                      <p className="text-xxs text-gray-500">{item.category}</p>
                      <p className="text-sm">{item.stadiumName}</p>
                      <p className="text-xs">{item.reservedDate} / {item.endTime.slice(0, 5)}</p>
                      <p className='text-xs font-black'>{item.price}</p>
                      <p className="text-xs text-gray-700">{item.district}</p>
                      <p className="flex gap-[10px] text-[10px] text-gray-500"> <span className="flex gap-[5px]"><BsEye/>{item.viewCount}</span> <span className="flex gap-[5px]"><HiOutlineChatBubbleLeftRight/>1</span></p>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
};

export default PostList;
