import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const AboutUs = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div id="about" className="bg-[#fcfbfb] p-14 ">
      <div className="text-start text-3xl font-bold  mb-7">
        <h1>ABOUT US </h1>
      </div>

      {/* about us content section */}
      <div className="md:flex md:ml-20 justify-between">

        <div data-aos='fade-left'>
          <h1 className="font-semibold text-3xl">
            Keep Your Business Safe & Ensure <br /> High Availability
          </h1>
          <div className="flex" >
            <div>
              <img
                className="h-20 w-20 rounded mt-10"
                src="https://media.licdn.com/dms/image/C4D03AQF9ikGu95h89w/profile-displayphoto-shrink_800_800/0/1655803294321?e=2147483647&v=beta&t=aG_aaQB6kXVJ5YDtz0lezvHbxrccl7BarMt3zy_n-94"
                alt=""
              />
            </div>
            <div className="mt-14 ml-8">
              <h1 className="font-semibold text-xl">Arifin Hasan</h1>
              <p>CEO, NITEX</p>
            </div>
          </div>
        </div>

        <div data-aos='fade-right' className="ml-0">
          <p className="md:text-justify md:mt-0 mt-5">
          A business consulting agency is involved in the planning,implementation,<br /> and education of  businesses. We work directly with business owners on a <br /> developing a business plan, identifying marketing needs and developing <br /> the necessary skills for business ownership.
          </p>
          <p className="mt-3">
          Marketing consultant is an advisor who works with companies to create and <br /> implement marketing strategies.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;
