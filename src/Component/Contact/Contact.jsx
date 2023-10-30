import React from 'react';

const Contact = () => {
  return (
    <div className='p-10'>
       <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-md w-full">
            <h1 class="text-2xl font-semibold mb-4">Contact Us</h1>
            <form>
                <div class="mb-4">
                    <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Name</label>
                    <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500" placeholder="Your Name" required/>
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500" placeholder="youremail@example.com" required/>
                </div>

                <div class="mb-4">
                    <label for="message" class="block text-gray-600 text-sm font-medium mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500" placeholder="Your Message" required></textarea>
                </div>

                <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>
            </form>
        </div>
    </div>
    </div>
  );
};

export default Contact;