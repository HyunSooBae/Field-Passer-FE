import React from "react";
import Footer from "../components/Footer";
import ImminentBoard from "../components/home/ImminentBoard";
import Slider from '../components/home/Slider'

const Home = () => {
  return (
    <div className="md:mx-8 lg:mx-24 xl:mx-48">
    <Slider />
    <ImminentBoard />
    <Footer />
    </div>
  )
};

export default Home;
