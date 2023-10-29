import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Carousel from '../Component/Carousel/Carousel';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;