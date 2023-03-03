import React from 'react';
import { Link } from 'react-router-dom';

const MembersMenu = () => {
  // if (로그인되지 않은 상태) {고객센터/회원가입/로그인}
  // else {고객센터/마이페이지/로그아웃}

  return (
    <div className='h-10 flex justify-end items-center  pr-8 text-sm text-hoverfield'>
      <Link to='/help' className='mx-8 hover:font-bold'>
        고객센터
      </Link>
      <Link to='/join' className='mr-8 hover:font-bold'>
        회원가입
      </Link>
      <Link to='/login' className='hover:font-bold'>
        로그인
      </Link>
    </div>
  );
};

export default MembersMenu;
