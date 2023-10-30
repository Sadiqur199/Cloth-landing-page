import React, { useEffect } from "react";
import image1 from "../../assets/swatch-collage2-1-150x150.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Innovation = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="innovation" className="p-10">
      <h1 className="text-3xl font-bold mb-10">Innovation</h1>
      <div className="md:flex md:justify-between">
        <div data-aos="fade-right">
          <img className="h-[500px] w-[500px]" src={image1} alt="" />
        </div>
        <div>
          <div className="mb-5" data-aos="fade-left">
            <h4 className="font-bold text-xl mb-3">
              Brand new Materials Pack every week
            </h4>
            <p className="mb-3">
              Our in-house teams collaborate with international groups to
              develop innovative designs that <br /> are both sustainable and
              trendy. We publish brand new material packs every week as a result{" "}
              <br /> of our intensive research and development, and strive to
              make our designs long lasting, <br /> organic, and eco-friendly.
            </p>
          </div>

          <div className="mb-5" data-aos="fade-down">
            <h4 className="font-bold text-xl mb-3">
              Implementing Innovations That make an Impact
            </h4>
            <p className="mb-3">
              The commitment to protecting the environment drives our effort to
              create luxurious and sustainable materials, and <br /> to
              popularise them globally with innovative designs that put smiles{" "}
              <br /> on people’s faces.
            </p>
          </div>

          <div data-aos="fade-right">
            <h4 className="font-bold text-xl mb-3">
              Reducing Carbon Footprints with sustainable materials
            </h4>
            <p className="">
              With the support of our foreign research and development team, we
              recreate rare exquisite <br /> fabrics to ensure that you always
              find the masterpiece you are brewing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
