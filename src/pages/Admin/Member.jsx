import React from 'react';
import Main from '../../components/Admin/Member';
import NavBar from '../../components/Admin/NavBar';

const AdminMember = () => {
  return (
    <div className='grid grid-cols-admin grid-rows-1 w-full'>
      <NavBar />
      <Main />
    </div>
  );
};

export default AdminMember;
