import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";



const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id='contact' className='p-10' >
       <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-md w-full">
            <h1 class="text-3xl font-bold mb-5 ">Contact Us</h1>
            <p data-aos="fade-right" className='text-justify mb-5'>A contact form is a web-based form that allows website visitors to  communicate with the owner or operator of a website. It serves as a means for users to send messages, inquiries, feedback, or requests without the need for direct email communication.</p>
            <form>
                <div class="mb-4 ">
                    <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Name</label>
                    <input data-aos="fade-right" type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:border-blue-300" placeholder="Your Name" required/>
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
                    <input data-aos="fade-left" type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300" placeholder="youremail@example.com" required/>
                </div>

                <div class="mb-4">
                    <label for="message" class="block text-gray-600 text-sm font-medium mb-2">Message</label>
                    <textarea data-aos="fade-right" id="message" name="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300" placeholder="Your Message" required></textarea>
                </div>

                <button type="submit" class="bg-[#529B03] hover:bg-[#399FA6] text-white py-2 px-4 rounded-lg">Submit</button>
            </form>
        </div>
    </div>
    </div>
  );
};

export default Contact;