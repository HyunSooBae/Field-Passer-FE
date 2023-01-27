import React from 'react';

const NavTab = ({ title, icon }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-24'>
      {icon}
      <span className='text-white text-center pt-2'>{title}</span>
    </div>
  );
};

export default NavTab;
