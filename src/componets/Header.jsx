import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContent";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = cartItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) => (
          part.toLowerCase() === highlight.toLowerCase() ? 
          <span key={index} className="bg-yellow-300">{part}</span> : 
          part
        ))}
      </span>
    );
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-4 mx-4 md:mx-24">
      <div>
        <a href="/">
          <img src="/logo.png" alt="logo" className="h-8 md:h-10" />
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[500px] mt-4 md:mt-0">
        <a href="/" className="mb-2 md:mb-0 md:mr-4">Home</a>
        <div className="relative border flex items-center justify-between w-full md:w-[300px] p-3 rounded-full border-[#F3EFEF]">
          <button className="m-0">
            <BsSearch className="text-[#0C0C0C]/50" />
          </button>
          <input
            type="text"
            placeholder="Search "
            name="search"
            value={searchTerm}
            onChange={handleSearch}
            className="placeholder:text-[14px] bg-transparent placeholder:text-[#0C0C0C]/50 w-full"
          />
          {searchTerm && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-md mt-1 max-h-48 overflow-y-auto z-10">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <Link to={`/product/${item.id}`} key={index} className="block p-2 border-b last:border-b-0 hover:bg-gray-100">
                    {highlightText(item.title, searchTerm)}
                  </Link>
                ))
              ) : (
                <div className="p-2 text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="relative mt-4 md:mt-0">
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
