// Header.js
import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContent";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="flex justify-between items-center py-4 mx-24">
      <div>
        <a href="/">
          <img src="/logo.png" alt="logo" />
        </a>
      </div>

      <div className="flex justify-between items-center w-[500px]">
        <a href="/">Home</a>
        <div className="border flex items-center justify-between w-[300px] p-3 rounded-full border-[#F3EFEF]">
          <button className="m-0">
            <BsSearch className="text-[#0C0C0C]/50" />
          </button>
          <input
            type="text"
            placeholder="Search "
            name="search"
            className="placeholder:text-[14px] bg-transparent placeholder:text-[#0C0C0C]/50"
          />
        </div>
      </div>
      <div className="relative">
        <Link to="/cart">
          <button className="bg-[#6A5ACD] flex items-center justify-between min-w-24 py-2 px-4 rounded-full text-white">
            Cart <FaCartPlus />
            <span className="ml-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs">
              {cartItems.length}
            </span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
