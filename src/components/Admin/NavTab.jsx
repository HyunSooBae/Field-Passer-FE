import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavTab = ({ title, icon, address }) => {
  const navigate = useNavigate();
  const onClickHandler = (address) => {
    navigate(`/admin/${address}`);
  };
  return (
    <div
      className='flex flex-col justify-center items-center gap-5 w-20'
      onClick={() => onClickHandler(address)}
    >
      {icon}
      <span className='text-white text-center pt-2'>{title}</span>
    </div>
  );
};

export default NavTab;
