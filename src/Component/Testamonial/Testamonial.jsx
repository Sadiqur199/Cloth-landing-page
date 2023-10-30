import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Testamonial = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div id="testamonial" className="p-10">
      <h1 className="text-start text-3xl font-bold  mb-10">TESTAMONIAL</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div data-aos='fade-right' className= "p-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <div className="mb-4">
                <img
                  src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
                  alt="Testimonial Author"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Alex Caron</h3>
                <p className="text-gray-600">CEO, XYZ Company</p>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-800">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  hac habitasse platea dictumst. Sed euismod ullamcorper purus,
                  eget tincidunt."
                </p>
                <div className="mt-4">
                  <div className="flex justify-center">
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     

      {/* second testamonial  */}
      <div data-aos='fade-down' className=" p-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <div className="mb-4">
                <img
                  src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
                  alt="Testimonial Author"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Edward</h3>
                <p className="text-gray-600">CEO, NP Company</p>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-800">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  hac habitasse platea dictumst. Sed euismod ullamcorper purus,
                  eget tincidunt."
                </p>
                <div className="mt-4">
                  <div className="flex justify-center">
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third testamonial */}

        <div data-aos='fade-left' className="p-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <div className="mb-4">
                <img
                  src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
                  alt="Testimonial Author"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Lucy</h3>
                <p className="text-gray-600">CEO, TT Company</p>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-800">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  hac habitasse platea dictumst. Sed euismod ullamcorper purus,
                  eget tincidunt."
                </p>
                <div className="mt-4">
                  <div className="flex justify-center">
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="text-yellow-500 text-2xl">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Testamonial;
