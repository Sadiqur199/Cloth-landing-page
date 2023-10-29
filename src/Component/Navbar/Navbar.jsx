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
              <Link to="/" className=" font-semibold active hover:text-black hover:border-b-2 hover:border-black">
                <li>Home</li>
              </Link>
              <Link to="" className=" font-semibold hover:text-black hover:border-b-2 hover:border-black">
                <li>AboutUs</li>
              </Link>
              <Link to="" className=" font-semibold hover:text-black hover:border-b-2 hover:border-black">
                <li>Services</li>
              </Link>
              <Link to="" className=" font-semibold hover:text-black hover:border-b-2 hover:border-black">
                <li>Team</li>
              </Link>
              <Link className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black" to="">
                <li>Testamonial</li>
              </Link>
              <Link className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black" to="">
                <li>Product</li>
              </Link>
              <Link className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black" to="">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <Link to="/" className=" normal-case text-2xl font-bold">
            NITEX
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="" className="active mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black">
              <li>Home</li>
            </Link>
            <Link className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black" to="">
              <li>AboutUs</li>
            </Link>
            <Link className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black" to="">
              <li>Testamonial</li>
            </Link>
            <Link className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black" to="">
              <li>Product</li>
            </Link>
            <Link className="mr-3 font-semibold hover:text-black hover:border-b-2 hover:border-black" to="">
              <li to="">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="" className="btn bg-white border-none hover:bg-slate-200">Login</Link>
        </div>
      </div>
    </>
  )
};

export default Navbar;
