import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52"
            >
              <Link
                to="/"
                className=" mr-3 font-semibold active hover:text-black hover:border-b-2 hover:border-black"
              >
                <li>Home</li>
              </Link>
              <a
                href="#about"
                className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
              >
                <li>AboutUs</li>
              </a>
              <a
                href="#service"
                className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
              >
                <li>Services</li>
              </a>
              <a
                href="#team"
                className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
              >
                <li>Team</li>
              </a>
              <a
                href="#testamonial"
                className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
                to=""
              >
                <li>Testamonial</li>
              </a>
              <a
                href="#innovation"
                className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
                to=""
              >
                <li>Innovation</li>
              </a>
              <a
                href="#product"
                className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
                to=""
              >
                <li>Product</li>
              </a>
              <a
                href="#contact"
                className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
                to=""
              >
                <li>Contact</li>
              </a>
            </ul>
          </div>
          <Link to="/" className=" normal-case text-2xl font-bold">
            NITEX
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link
              to="/"
              className=" mr-3 font-semibold active hover:text-black hover:border-b-2 hover:border-black"
            >
              <li>Home</li>
            </Link>
            <a
              href="#about"
              className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
            >
              <li>AboutUs</li>
            </a>
            <a
              href="#service"
              className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
            >
              <li>Services</li>
            </a>
            <a
              href="#team"
              className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
            >
              <li>Team</li>
            </a>
            <a
              href="#testamonial"
              className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
              to=""
            >
              <li>Testamonial</li>
            </a>
            <a
              href="#innovation"
              className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
              to=""
            >
              <li>Innovation</li>
            </a>
            <a
              href="#product"
              className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
              to=""
            >
              <li>Product</li>
            </a>
            <a
              href="#contact"
              className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black"
              to=""
            >
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to=""
            className="btn bg-white border-none hover:bg-[#399fa6] hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
