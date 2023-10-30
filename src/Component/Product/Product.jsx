import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const Product = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="product" className="p-10">
      <h1 className="text-start text-3xl font-bold  mb-10">Our Product</h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="font-bold text-xl mb-5">MEN CATEGORY</h2>
            <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-right">
              <figure className="px-10 pt-10">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-clothing-store-casual-fashion-mens-photography-photos-with-pictures-image_796891.jpg"
                  alt="MEN"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <p className="text-justify">
                  Men's clothes are articles of clothing designed for and worn
                  by men. Typical men's clothes include trousers, shirts, jeans,
                  suits, sweaters, gloves, jackets, and hats. However, the
                  majority of those clothing items are also items of women's
                  clothing
                </p>
                <div className="card-actions">
                  <button className="btn bg-[#529B03] text-white hover:bg-[#399fa6] hover:text-white">
                    Visit Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* second category */}

          <div>
            <h2 className="font-bold text-xl mb-5 mt-5">WOMEN CATEGORY</h2>
            <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up">
              <figure className="px-10 pt-10">
                <img
                  src="https://res.cloudinary.com/purnesh/image/upload/f_auto/v1580899195/alchemy.jpg"
                  alt="MEN"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <p className="text-justify">
                  Women's wear is outfits made specifically for and worn by
                  women. Salwar suits, saaris, lehnga etc. in Indian tradition
                  and Skirts, shirts, sweaters, trousers, coats, chemises, and
                  jeans, etc., in western countries are examples of common
                  women's clothing.
                </p>
                <div className="card-actions">
                  <button className="btn bg-[#529B03] text-white hover:bg-[#399fa6] hover:text-white">
                    Visit Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* third category */}

          <div>
            <h2 className="font-bold text-xl mb-5 mt-5">KIDS CATEGORY</h2>
            <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-left">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.freepik.com/free-photo/children-s-bright-clothes-hang-display-baby-clothing-store-girls-section_627829-6483.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696896000&semt=ais"
                  alt="MEN"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <p className="text-justify">
                  Children's clothing or kids' clothing is clothing for children
                  who have not yet grown to full height. Children's clothing is
                  often more casual than adult clothing, fit for play and rest.
                  Children's clothing needs to be useful for playing.
                </p>
                <div className="card-actions">
                  <button className="btn bg-[#529B03] text-white hover:bg-[#399fa6] hover:text-white">
                    Visit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
