import React from 'react';
import NavBar from '../components/Admin/NavBar';
import Main from '../components/Admin/Main';

const Admin = () => {
  return (
    <div className='grid grid-cols-admin grid-rows-1'>
      <NavBar />
      <Main />
    </div>
  );
};

export default Admin;
