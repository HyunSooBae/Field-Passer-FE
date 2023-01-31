import React from "react";
import Searchbar from './home/search/Searchbar';
import MembersMenu from "./MembersMenu";

const Header = () => {
  return (
    <header className="w-full h-full border-b border-gray-200 border-solid">
      <div className="m-auto max-w-7xl relative">
          <MembersMenu />
        <div className="w-full xxs:h-[320px] sm:h-48 flex items-center md:justify-center">
          <div className='xxs:w-60 absolute xxs:right-1/2 xxs:translate-x-1/2 top-12 xxs:flex sm:top-5 sm:mx-10 sm:left-0 sm:translate-x-0 cursor-pointer'>
            <a href="/">
              <img src="images/logo-1.png"/>
            </a>
          </div>
          <div className="xxs:mt-6 xxs:m-auto">
            <Searchbar />
          </div>
            <button className="w-28 h-10 absolute xxs:right-5 xs:right-2 md:right-10 lg:right-24 bottom-2 rounded-lg bg-field hover:bg-hoverField text-white font-bold">
              양도글 작성
            </button>
        </div>
      </div>
  </header>
  )
};

export default Header;
