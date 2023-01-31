import React from 'react';
import NavBar from '../../components/Admin/NavBar';
import Main from '../../components/Admin/Main';

const Home = () => {
  return (
    <div className='grid grid-cols-admin grid-rows-1 max-w-screen h-full'>
      <NavBar />
      <Main />
    </div>
  );
};

export default Home;
