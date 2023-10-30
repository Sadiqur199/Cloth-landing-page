import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  return (
    <div className="carousel w-full h-[600px] mt-5">
      <div id="slide1" className="carousel-item relative w-full">
        <img src='https://www.creditoncourier.co.uk/tindle-static/image/2022/10/05/14/nick-de-partee-5DLBoEX99Cs-unsplash.jpg?width=669&height=445&crop=669:445' className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
           <div className='text-white space-y-7 pl-16 w-1/2'>
            <h2 className='text-6xl font-semibold'>Our Men Product Collection</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis libero necessitatibus numquam ab iure rerum.</p>
            <div>
           <button class="btn btn-active border-none bg-[#529B03] mr-5 md:mt-0 mb-5 text-white hover:bg-[#399fa6]">Visit More</button>
           <button class="btn btn-outline hover:bg-[#399fa6] text-white">Latest Product</button>
           </div>

           </div>
      </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src='https://as1.ftcdn.net/v2/jpg/04/39/24/86/500_F_439248661_8e3pYgwroocknnYKmBFy0Ep9yOimi9yg.jpg' className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
           <div className='text-white space-y-7 pl-16 w-1/2'>
            <h2 className='text-6xl font-semibold'>Our Women Product Collection</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam unde ex in nam vero voluptas!</p>
            <div>
            <button class="btn btn-active border-none bg-[#529B03] mr-5 md:mt-0 mb-5 text-white hover:bg-[#399fa6]">Visit More</button>
           <button class="btn btn-outline hover:bg-[#399fa6] text-white">Latest Product</button>
           </div>

           </div>
      </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src='https://www.shopbcclothing.com/cdn/shop/files/banner6_41550f53-aacf-4dce-bd52-08eac9c1c529_1400x.progressive.jpg?v=1613741717' className="w-full rounded-xl" />
           
        <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
           <div className='text-white space-y-7 pl-16 w-1/2'>
            <h2 className='text-6xl font-semibold'>Our Kids product Collection</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In harum quia quam excepturi, adipisci corrupti!</p>
            <div>
            <button class="btn btn-active border-none bg-[#529B03] mr-5 md:mt-0 mb-5 text-white hover:bg-[#399fa6]">Visit More</button>
           <button class="btn btn-outline hover:bg-[#399fa6] text-white">Latest Product</button>
           </div>

           </div>
      </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
