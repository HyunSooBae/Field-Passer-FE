import React from 'react';
import MembersMenu from './MembersMenu';

const Header = () => {
  return (
    <header className='border-b border-solid border-gray-200 sm:h-16'>
      <div className='relative m-auto max-w-5xl xxs:flex-col sm:flex'>
        <MembersMenu />
        <div className='w-48 xxs:m-auto cursor-pointer sm:absolute sm:left-5'>
          <a href='/'>
            <img src='/images/logo-1.png' />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
