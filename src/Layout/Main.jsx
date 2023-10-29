import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Carousel from '../Component/Carousel/Carousel';
import AboutUs from '../Component/AboutUs/AboutUs';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Main;