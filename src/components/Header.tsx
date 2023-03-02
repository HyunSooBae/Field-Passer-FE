import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import MembersMenu from './MembersMenu';

const Header = () => {
  const location = useLocation();
  const mobileForm = useMediaQuery({
    query: '(max-width:540px)',
  });

  return (
    <header className='border-b border-solid border-gray-200 sm:h-16'>
      <div className='relative m-auto max-w-5xl xxs:flex-col sm:flex'>
        <MembersMenu />
        {location.pathname.includes('chatting') && mobileForm ? null : (
          <div className='w-48 xxs:m-auto cursor-pointer sm:absolute sm:left-5'>
            <Link to='/'>
              <img src='/images/logo-1.png' />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
