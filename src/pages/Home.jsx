import React from 'react';
import Footer from '../components/Footer';
import ImminentBoard from '../components/home/imminent/ImminentBoard';
import MainSlider from '../components/home/MainSlider';

const Home = () => {
  return (
    <>
      <main className='m-auto max-w-5xl relative'>
        <MainSlider />
        <ImminentBoard />
      </main>
      <Footer />
    </>
  );
};

export default Home;
