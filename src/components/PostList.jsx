import React from "react";
import { Link } from "react-router-dom";
import { BsEye } from 'react-icons/bs';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

const PostList = () => {
  return (
    <div className="max-w-5xl ml-auto mr-auto my-[50px] ">
      <div className="mx-[-15px] flex flex-wrap gap-[10px] pl-[10px]">
        <div className="w-[calc((100%/2)-10px)] mm:w-[calc((100%/4)-10px)] px-[5px] py-[10px] mb-[10px]">
          <Link to='./details/postName' className="flex flex-col gap-[15px]">
            <img role="img" className="w-full border border-gray-500 border-solid object-cover aspect-square rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC"/>
            <div className="flex flex-col gap-[10px]">
              <p className="text-xxs text-gray-500">풋살장</p>
              <p className="text-sm">레드폭스케이지풋살</p>
              <p className="text-xs">2023 01 31/ 16:00</p>
              <p className='text-xs font-black'>40,100</p>
              <p className="text-xs text-gray-700">서울특별시 성복구</p>
              <p className="flex gap-[10px] text-[10px] text-gray-500"> <span className="flex gap-[5px]"><BsEye/>17</span> <span className="flex gap-[5px]"><HiOutlineChatBubbleLeftRight/>1</span></p>
            </div>
          </Link>
        </div>
        <div className="w-[calc((100%/2)-10px)] mm:w-[calc((100%/4)-10px)] px-[5px] py-[10px] mb-[10px]">
          <Link to='./details/postName' className="flex flex-col gap-[15px]">
            <img role="img" className="w-full border border-gray-500 border-solid object-cover aspect-square rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC"/>
            <div className="flex flex-col gap-[10px]">
              <p className="text-xxs text-gray-500">풋살장</p>
              <p className="text-sm">레드폭스케이지풋살</p>
              <p className="text-xs">2023 01 31/ 16:00</p>
              <p className='text-xs font-black'>40,100</p>
              <p className="text-xs text-gray-700">서울특별시 성복구</p>
              <p className="flex gap-[10px] text-[10px] text-gray-500"> <span className="flex gap-[5px]"><BsEye/>17</span> <span className="flex gap-[5px]"><HiOutlineChatBubbleLeftRight/>1</span></p>
            </div>
          </Link>
        </div>
        <div className="w-[calc((100%/2)-10px)] mm:w-[calc((100%/4)-10px)] px-[5px] py-[10px] mb-[10px]">
          <Link to='./details/postName' className="flex flex-col gap-[15px]">
            <img role="img" className="w-full border border-gray-500 border-solid object-cover aspect-square rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC"/>
            <div className="flex flex-col gap-[10px]">
              <p className="text-xxs text-gray-500">풋살장</p>
              <p className="text-sm">레드폭스케이지풋살</p>
              <p className="text-xs">2023 01 31/ 16:00</p>
              <p className='text-xs font-black'>40,100</p>
              <p className="text-xs text-gray-700">서울특별시 성복구</p>
              <p className="flex gap-[10px] text-[10px] text-gray-500"> <span className="flex gap-[5px]"><BsEye/>17</span> <span className="flex gap-[5px]"><HiOutlineChatBubbleLeftRight/>1</span></p>
            </div>
          </Link>
        </div>
        <div className="w-[calc((100%/2)-10px)] mm:w-[calc((100%/4)-10px)] px-[5px] py-[10px] mb-[10px]">
          <Link to='./details/postName' className="flex flex-col gap-[15px]">
            <img role="img" className="w-full border border-gray-500 border-solid object-cover aspect-square rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC"/>
            <div className="flex flex-col gap-[10px]">
              <p className="text-xxs text-gray-500">풋살장</p>
              <p className="text-sm">레드폭스케이지풋살</p>
              <p className="text-xs">2023 01 31/ 16:00</p>
              <p className='text-xs font-black'>40,100</p>
              <p className="text-xs text-gray-700">서울특별시 성복구</p>
              <p className="flex gap-[10px] text-[10px] text-gray-500"> <span className="flex gap-[5px]"><BsEye/>17</span> <span className="flex gap-[5px]"><HiOutlineChatBubbleLeftRight/>1</span></p>
            </div>
          </Link>
        </div>
        <div className="w-[calc((100%/2)-10px)] mm:w-[calc((100%/4)-10px)] px-[5px] py-[10px] mb-[10px]">
          <Link to='./details/postName' className="flex flex-col gap-[15px]">
            <img role="img" className="w-full border border-gray-500 border-solid object-cover aspect-square rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC"/>
            <div className="flex flex-col gap-[10px]">
              <p className="text-xxs text-gray-500">풋살장</p>
              <p className="text-sm">레드폭스케이지풋살</p>
              <p className="text-xs">2023 01 31/ 16:00</p>
              <p className='text-xs font-black'>40,100</p>
              <p className="text-xs text-gray-700">서울특별시 성복구</p>
              <p className="flex gap-[10px] text-[10px] text-gray-500"> <span className="flex gap-[5px]"><BsEye/>17</span> <span className="flex gap-[5px]"><HiOutlineChatBubbleLeftRight/>1</span></p>
            </div>
          </Link>
        </div>
        <div className="w-[calc((100%/2)-10px)] mm:w-[calc((100%/4)-10px)] px-[5px] py-[10px] mb-[10px]">
          <Link to='./details/postName' className="flex flex-col gap-[15px]">
            <img role="img" className="w-full border border-gray-500 border-solid object-cover aspect-square rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC"/>
            <div className="flex flex-col gap-[10px]">
              <p className="text-xxs text-gray-500">풋살장</p>
              <p className="text-sm">레드폭스케이지풋살</p>
              <p className="text-xs">2023 01 31/ 16:00</p>
              <p className='text-xs font-black'>40,100</p>
              <p className="text-xs text-gray-700">서울특별시 성복구</p>
              <p className="flex gap-[10px] text-[10px] text-gray-500"> <span className="flex gap-[5px]"><BsEye/>17</span> <span className="flex gap-[5px]"><HiOutlineChatBubbleLeftRight/>1</span></p>
            </div>
          </Link>
        </div>
        <div className="w-[calc((100%/2)-10px)] mm:w-[calc((100%/4)-10px)] px-[5px] py-[10px] mb-[10px]">
          <Link to='./details/postName' className="flex flex-col gap-[15px]">
            <img role="img" className="w-full border border-gray-500 border-solid object-cover aspect-square rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC"/>
            <div className="flex flex-col gap-[10px]">
              <p className="text-xxs text-gray-500">풋살장</p>
              <p className="text-sm">레드폭스케이지풋살</p>
              <p className="text-xs">2023 01 31/ 16:00</p>
              <p className='text-xs font-black'>40,100</p>
              <p className="text-xs text-gray-700">서울특별시 성복구</p>
              <p className="flex gap-[10px] text-[10px] text-gray-500"> <span className="flex gap-[5px]"><BsEye/>17</span> <span className="flex gap-[5px]"><HiOutlineChatBubbleLeftRight/>1</span></p>
            </div>
          </Link>
        </div>
        <div className="w-[calc((100%/2)-10px)] mm:w-[calc((100%/4)-10px)] px-[5px] py-[10px] mb-[10px]">
          <Link to='./details/postName' className="flex flex-col gap-[15px]">
            <img role="img" className="w-full border border-gray-500 border-solid object-cover aspect-square rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC"/>
            <div className="flex flex-col gap-[10px]">
              <p className="text-xxs text-gray-500">풋살장</p>
              <p className="text-sm">레드폭스케이지풋살</p>
              <p className="text-xs">2023 01 31/ 16:00</p>
              <p className='text-xs font-black'>40,100</p>
              <p className="text-xs text-gray-700">서울특별시 성복구</p>
              <p className="flex gap-[10px] text-[10px] text-gray-500"> <span className="flex gap-[5px]"><BsEye/>17</span> <span className="flex gap-[5px]"><HiOutlineChatBubbleLeftRight/>1</span></p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default PostList;
