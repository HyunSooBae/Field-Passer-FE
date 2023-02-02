import React from 'react';
import Footer from '../components/Footer';
import ImminentBoard from '../components/home/imminent/ImminentBoard';
import MainSlider from '../components/home/MainSlider';
import Searchbar from '../components/home/search/Searchbar';

const Home = () => {
  return (
    <>
      <main className='m-auto max-w-5xl relative px-3'>
        <Searchbar />
        <MainSlider />
        <ImminentBoard />
      </main>
      <Footer />
    </>
  );
};

export default Home;
