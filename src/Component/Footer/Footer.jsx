import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-5 p-10 text-black">
  <nav>
    <header className="footer text-black text-2xl font-bold">NITEX</header> 
  </nav> 
  <nav>
    <header className="footer text-black text-lg font-bold">Contact</header> 
    <a className="link link-hover">support@nitex.info</a> 
    <p>153 Curtain Rd, London EC2A 3QE,
      <br></br>
United Kingdom</p>
  </nav> 
  <nav>
    <header className="footer text-black text-lg font-bold">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer text-black text-lg font-bold ">Social</header> 
    <div className="grid grid-flow-col gap-4">
      <Link> <FaFacebook size={20}/> </Link>
      <Link> <FaLinkedin size={20}/> </Link>
      <Link> <FaTwitterSquare size={20}/> </Link>
    </div>
  </nav>
</footer>
    </div>
  );
};

export default Footer;