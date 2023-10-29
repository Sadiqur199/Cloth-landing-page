import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import Carousel from '../Component/Carousel/Carousel';
import AboutUs from '../Component/AboutUs/AboutUs';
import Services from '../Component/Services/Services';
import OurTeam from '../Component/Our Team/OurTeam';
import Testamonial from '../Component/Testamonial/Testamonial';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <AboutUs></AboutUs>
      <Services></Services>
      <OurTeam></OurTeam>
      <Testamonial></Testamonial>
      <Footer></Footer>
    </div>
  );
};

export default Main;