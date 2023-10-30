import React, { useEffect } from "react";
import {
  FaFemale,
  FaHorseHead,
  FaLandmark,
  FaLongArrowAltRight,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div id="service" className="bg-[#F7F7F7] p-10 ">
        <div className="text-start text-3xl font-bold  mb-10">
          <h1> OUR SERVICES </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            data-aos="fade-right"
            className="p-10 bg-white   border-gray-800 shadow-md"
          >
            <p>
              {" "}
              <FaHorseHead className="rounded mb-5" size={50} />{" "}
            </p>
            <h1 className="text-xl font-semibold mb-5">Strategic Planning</h1>
            <p className="mb-5">
              At vero eos et accusamus et iusto odio <br /> dignissimos ducimus
              qui blanditiis <br /> praesentium
            </p>
            <p>
              {" "}
              <FaLongArrowAltRight />{" "}
            </p>
          </div>

          <div
            data-aos="fade-down"
            className="p-10 bg-white border-gray-800 shadow-md"
          >
            <p>
              {" "}
              <FaFemale className="rounded mb-5" size={50} />{" "}
            </p>
            <h1 className="text-xl font-semibold mb-5">
              Consulting & Marketing
            </h1>
            <p className="mb-5">
              At vero eos et accusamus et iusto odio <br /> dignissimos ducimus
              qui blanditiis <br /> praesentium
            </p>
            <p>
              {" "}
              <FaLongArrowAltRight />{" "}
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="p-10 bg-white border-gray-800 shadow-md"
          >
            <p>
              {" "}
              <FaLandmark className="rounded mb-5" size={50} />{" "}
            </p>
            <h1 className="text-xl font-semibold mb-5">Financial</h1>
            <p className="mb-5">
              At vero eos et accusamus et iusto odio <br /> dignissimos ducimus
              qui blanditiis <br /> praesentium
            </p>
            <p>
              {" "}
              <FaLongArrowAltRight />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
