import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="bg-[#F7F7F7] p-14 my-10">
      <div className="text-start text-3xl font-bold  mb-10">
        <h1>About Us </h1>
      </div>

      {/* about us content section */}
      <div className="md:flex md:ml-20 justify-between">
        <div>
          <h1 className="font-bold text-3xl">
            Keep Your Business Safe & Ensure <br /> High Availability
          </h1>

          <div className="flex">
            <div>
              <img
                className="h-20 w-20 rounded mt-10"
                src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"
                alt=""
              />
            </div>

            <div className="mt-14 ml-8">
              <h1 className="font-semibold text-xl">Arifin Hasan</h1>
              <p>CEO, NITEX</p>
            </div>

          </div>
        </div>

        <div className="ml-0">
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
