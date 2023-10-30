import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="bg-black p-14">
        <footer className="footer mt-5 p-10text-white">
          <nav>
            <header className="footer text-white text-2xl font-bold">
              NITEX
            </header>
          </nav>

          <nav data-aos="fade-right">
            <header className="footer text-white text-lg font-bold">
              Contact
            </header>
            <a className="link link-hover text-white">support@nitex.info</a>
            <p className="text-white">
              153 Curtain Rd, London EC2A 3QE,
              <br></br>
              United Kingdom
            </p>
          </nav>

          <nav data-aos="fade-down">
            <header className="footer text-white text-lg font-bold">
              Services
            </header>
            <a className="link link-hover text-white">Branding</a>
            <a className="link link-hover text-white">Design</a>
            <a className="link link-hover text-white">Marketing</a>
            <a className="link link-hover text-white">Advertisement</a>
          </nav>
          <nav data-aos="fade-left">
            <header className="footer text-white text-lg font-bold ">
              Social
            </header>
            <div className="grid grid-flow-col gap-4">
              <Link className="text-white">
                {" "}
                <FaFacebook size={20} />{" "}
              </Link>
              <Link className="text-white">
                {" "}
                <FaLinkedin size={20} />{" "}
              </Link>
              <Link className="text-white">
                {" "}
                <FaTwitterSquare size={20} />{" "}
              </Link>
            </div>
          </nav>
        </footer>
      </div>
      <div className="bg-black">
        <p className="text-center text-white">
          Copyright © 2023 - MD SADIQUR RAHMAN ❣
        </p>
      </div>
    </>
  );
};

export default Footer;
