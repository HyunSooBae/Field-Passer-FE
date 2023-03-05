import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavTab from './NavTab';
import { BsPeopleFill } from 'react-icons/bs';
import { HiDocumentDuplicate } from 'react-icons/hi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);

  const iconClass = 'cursor-pointer w-16 h-16 text-white';
  const member = () => <BsPeopleFill className={iconClass} />;
  const post = () => <HiDocumentDuplicate className={iconClass} />;
  const service = () => <RiCustomerService2Fill className={iconClass} />;
  const main = () => <CgWebsite className={iconClass} />;

  const navigate = useNavigate();
  return (
    <div className='grid-in-nav flex bg-field flex-col justify-center items-center gap-5 fixed h-full w-[300px]'>
      <div className='flex gap-5 text-white'>
        {isLogin ? (
          <>
            <span>관리자 ADMIN</span>
            <span>|</span>
            <button>로그아웃</button>
          </>
        ) : (
          <>
            <span className='cursor-pointer' onClick={() => navigate('/admin/login')}>
              로그인
            </span>
          </>
        )}
      </div>
      <div>
        <div className='flex gap-5 p-5 flex-wrap justify-center'>
          <NavTab title='회원 관리' icon={member()} address='admin/member' />
          <NavTab title='게시글 관리' icon={post()} address='admin/post' />
        </div>
        <div className='flex gap-5 p-5 flex-wrap justify-center'>
          <NavTab title='고객센터' icon={service()} address='admin/service' />
          <NavTab title='FIELD-PASSER' icon={main()} address='' />
        </div>
      </div>
      <button className='text-white hover:text-hoverField' onClick={() => navigate('/admin')}>
        관리자 메인으로 가기
      </button>
    </div>
  );
};

export default NavBar;
