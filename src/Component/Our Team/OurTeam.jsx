import React, { useEffect } from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurTeam = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='p-10'>
      <h1 className="text-start text-3xl font-bold  mb-10">Meet Our Team</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
         <div data-aos='fade-right'>
          <img className='mb-5' src="https://media.licdn.com/dms/image/C4D03AQF9ikGu95h89w/profile-displayphoto-shrink_800_800/0/1655803294321?e=2147483647&v=beta&t=aG_aaQB6kXVJ5YDtz0lezvHbxrccl7BarMt3zy_n-94" alt="" />
          <h1 className='mb-3 font-bold text-xl'>Arifin Hasan</h1>
          <p className='mb-3'>At vero eos et accusamus et iusto odio <br /> dignissimos ducimus qui blanditiis praesentium.</p>
          <p className='mb-3 font-semibold'>CEO,NITEX</p>
          <div className='flex '>
          <Link className="text-black mr-5">
              {" "}
              <FaFacebook size={20} />{" "}
            </Link>
            <Link className="text-black">
              {" "}
              <FaLinkedin size={20} />{" "}
            </Link>
          </div>
         </div>

         {/* 2nd image */}
         <div data-aos='fade-down'>
          <img className='mb-5' src="https://media.licdn.com/dms/image/C5103AQHZwgB0X71cwA/profile-displayphoto-shrink_800_800/0/1581774066055?e=2147483647&v=beta&t=1-Ewi8sAk7qn2oa52C_qA0EEPkihZzSjbbpwqeaDE7c" alt="" />
          <h1 className='mb-3 font-bold text-xl'>Aniket Bhattacharjee</h1>
          <p className='mb-3'>At vero eos et accusamus et iusto odio <br /> dignissimos ducimus qui blanditiis praesentium.</p>
          <p className='mb-3 font-semibold'>TEAM LEADER,NITEX</p>
          <div className='flex '>
          <Link className="text-black mr-5">
              {" "}
              <FaFacebook size={20} />{" "}
            </Link>
            <Link className="text-black">
              {" "}
              <FaLinkedin size={20} />{" "}
            </Link>
          </div>
         </div>

         {/* 3rd image */}

         <div data-aos='fade-left'>
          <img className='mb-5' src="https://media.licdn.com/dms/image/D5603AQHa04zHXD5Yug/profile-displayphoto-shrink_800_800/0/1694192888441?e=2147483647&v=beta&t=TvGFdsJCXoIvJvgLKM3ziX9A_diVrhLcf_yZWWCrKvw" alt="" />
          <h1 className='mb-3 font-bold text-xl'>MD Masud Rana</h1>
          <p className='mb-3'>At vero eos et accusamus et iusto odio <br /> dignissimos ducimus qui blanditiis praesentium.</p>
          <p className='mb-3 font-semibold'>Frontend Engineer,NITEX</p>
          <div className='flex '>
          <Link className="text-black mr-5">
              {" "}
              <FaFacebook size={20} />{" "}
            </Link>
            <Link className="text-black">
              {" "}
              <FaLinkedin size={20} />{" "}
            </Link>
          </div>
         </div>

      </div>
    </div>
  );
};

export default OurTeam;