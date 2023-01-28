import React from 'react';
import Main from '../components/Admin/Member';
import NavBar from '../components/Admin/NavBar';

const AdminMember = () => {
  return (
    <div className='flex'>
      <NavBar />
      <Main />
    </div>
  );
};

export default AdminMember;
