import React from 'react';
import NavTab from './NavTab';
import { BsPeopleFill } from 'react-icons/bs';
import { HiDocumentDuplicate } from 'react-icons/hi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';

const NavBar = () => {
  const iconClass = 'cursor-pointer w-16 h-16 text-white';
  const member = () => <BsPeopleFill className={iconClass} />;
  const post = () => <HiDocumentDuplicate className={iconClass} />;
  const service = () => <RiCustomerService2Fill className={iconClass} />;
  const main = () => <CgWebsite className={iconClass} />;
  return (
    <div className='flex bg-field flex-col box-border h-full justify-center items-center gap-5 w-[400px]'>
      <img src='./images/anony.png' alt='' className='w-24' />
      <div className='flex gap-5 text-white'>
        <span>관리자 ADMIN</span>
        <span>|</span>
        <button>로그아웃</button>
      </div>
      <div>
        <div className='flex gap-5 p-5 flex-wrap justify-center'>
          <NavTab title='회원 관리' icon={member()} address='member' />
          <NavTab title='게시글 관리' icon={post()} address='post' />
        </div>
        <div className='flex gap-5 p-5 flex-wrap justify-center'>
          <NavTab title='고객센터' icon={service()} address='service' />
          <NavTab title='FIELD-PASSER' icon={main()} address='/' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
