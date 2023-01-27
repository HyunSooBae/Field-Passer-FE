import React from "react";
import Searchbar from "./home/Searchbar";
import MembersMenu from "./MembersMenu";

const Header = () => {
  
  return (
    <header className="md:mx-8 lg:mx-24 xl:mx-48 relative">
    <MembersMenu />
    <div className="w-full h-28 flex items-center justify-center bg-sky-700 text-whitex">
      <div className='w-28 h-16 absolute left-0 mx-8'>
        <img src="../public/english4-green.png" className="cursor-pointer"/>
      </div>
      <Searchbar />
      <div className="bg-slate-400">
        <button className="w-28 h-10 rounded-lg bg-field hover:bg-hoverfield text-white font-bold">양도글 작성</button>
      </div>
    </div>
  </header>
  )
};

export default Header;
