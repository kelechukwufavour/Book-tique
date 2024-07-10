import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi"; // Assuming CiMail was meant to be FiMail

const Footer = () => {
  return (
    <footer className="bg-[#6A5ACD] grid grid-cols-1 md:grid-cols-3 gap-8 justify-evenly items-start w-full text-white py-10 px-6 md:px-16">
      {/* About Us Section */}
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl md:text-3xl font-bold">About Us</h3>
        <p className="text-base md:text-lg">
          Booktique Bookstore came to life from our small reading table to your
          screens, Booktique was born from a love of books shared between my mom
          and me. Together we’ve curated a collection that celebrates stories
          and knowledge, hoping to inspire readers like you.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#" className="text-white hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FiMail />
          </a>
        </div>
      </div>

      {/* Join Booktique Nest Section */}
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl md:text-3xl font-bold">Join Booktique Nest</h3>
        <p className="text-base md:text-lg">
          Join Booktique nest, a platform where we share recommendations, bookish
          news, and discount codes.
        </p>
        <button className="bg-white text-[#6A5ACD] px-6 py-3 rounded-full mt-4 md:mt-8">
          Join Us
        </button>
      </div>

      {/* Our Location and Contact Us Section */}
      <div className="flex flex-col gap-8 md:gap-5">
        {/* Location Section */}
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl md:text-3xl font-bold">Our Location</h3>
          <p className="text-base md:text-lg">Akwa Ibom</p>
          <p className="text-base md:text-lg">Uyo 31, Nepa line</p>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl md:text-3xl font-bold">Contact Us</h3>
          <p className="text-base md:text-lg">Phone: +2348063687844</p>
          <p className="text-base md:text-lg">Phone: +2348062550514</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;