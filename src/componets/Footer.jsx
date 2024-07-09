import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#6A5ACD] grid grid-flow-row  gap-32 grid-cols-3 justify-evenly items-start w-full h-[400px] text-white  py-[40px] px-[116px]">
      <div className="flex justify-start items-start  flex-col gap-5">
        <h3 className=" text-[30px] ">About Us</h3>
        <p className="text-[16px] ">
          Booktique Bookstore came to life from our small reading table to your
          screens, Booktique was born from a love of books shared between my mom
          and me. Together we’ve curated a collection that celebrates stories
          and knowledge, hoping to inspire readers like you.
        </p>
        <div className="flex justify-center gap-5 mt-8">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
          <a href="#">
            <CiMail />
          </a>
        </div>
      </div>
      <div className="flex justify-start items-start flex-col gap-5">
        <h3 className=" text-[30px] mb-6">Join Booktique Nest</h3>
        <p className="text-[14px] ">
          Join Booktique nest,a platform where we share recommdations,bookish
          new and discount Codes
        </p>
        <button className="px-5 py-3 rounded-full bg-white text-[#6A5ACD] mt-10">
          Join Us
        </button>
      </div>
      <div className="flex justify-start items-start  flex-col gap-5">
        <div className="flex justify-start items-start  flex-col gap-1">
          <h3 className="text-[30px] mb-6">Our Location</h3>
          <p className="text-[14px] ">Akwa Ibom</p>
          <p className="text-[14px] ">Uyo 31, Nepa line</p>
        </div>
        <div className="flex justify-start items-start  flex-col gap-1">
          <h3 className="text-[30px] mb-6">Contact Us</h3>
          <p className="text-[14px] ">Phone: +2348063687844</p>
          <p className="text-[14px] ">Phone: +2348062550514</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
