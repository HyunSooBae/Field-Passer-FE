import React from "react";
import Searchbar from "./home/Searchbar";
import MembersMenu from "./MembersMenu";

const Header = () => {
  
  return (
    <header className="m-auto max-w-7xl relative bg-red-400">
    <MembersMenu />
    <div className="w-full h-52 flex items-center sm:justify-end md:justify-center">
      <div className='w-28 h-16 absolute left-0 top-8  mx-8'>
        <img src="../public/images/english4-green.png" className="cursor-pointer"/>
      </div>
      <Searchbar />
      <div className="bg-slate-400">
        <button className="w-28 h-10 absolute xxs:right-1 xs:right-2 sm:right-3  bottom-2 rounded-lg bg-field hover:bg-hoverfield text-white font-bold">양도글 작성</button>
      </div>
    </div>
  </header>
  )
};

export default Header;
