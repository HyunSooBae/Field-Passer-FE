import React from "react";
import Footer from "../components/Footer";
import ImminentBoard from "../components/home/ImminentBoard";
import MainSlider from '../components/home/MainSlider'

const Home = () => {
  return (
    <div className="m-auto max-w-7xl">
    <MainSlider />
    <ImminentBoard />
    <Footer />
    </div>
  )
};

export default Home;
