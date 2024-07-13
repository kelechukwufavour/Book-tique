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
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="bg-yellow-300">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <header className="flex flex-wrap justify-between items-center py-4 px-4 md:px-24">
      <div className="flex items-center">
        <a href="/">
          <img src="/logo.png" alt="logo" className="h-8 md:h-10" />
        </a>
        <a href="/" className="ml-4 text-sm md:text-base">
          Home
        </a>
      </div>

      <div className="flex items-center mt-4 md:mt-0 ml-0 md:ml-4 w-full md:w-auto">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 md:w-64 md:rounded-full"
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md max-h-48 overflow-y-auto">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <Link
                    to={`/product/${item.id}`}
                    key={index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {highlightText(item.title, searchTerm)}
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="ml-0 md:ml-4 mt-4 md:mt-0">
        <Link to="/cart">
          <button className="flex items-center px-4 py-2 bg-[#6A5ACD] text-white rounded-full">
            <FaCartPlus className="mr-2" />
            <span className="text-xs bg-red-600 text-white rounded-full px-2 py-1">
              {cartItems.length}
            </span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;