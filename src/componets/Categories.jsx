import React, { useContext, useState } from "react";
import { CartContext } from "../CartContent";
import { toast } from "react-toastify";
import ProductList from "./Product";

const categoriesData = {
    Fiction: [
      {
        title: "The Golden Age 2",
        price: "₦4000",
        image: "/image1.jpg",
      },
      {
        title: "The Golden Age 2",
        price: "₦5,000",
        image: "/image 2.jpg",
      },
      {
        title: "Books of Magic",
        price: "₦10,000",
        image: "/image 3.jpg",
      },
      {
        title: "In the hand of the goddess",
        price: "₦8,000",
        image: "/image 4.jpg",
      },
      {
        title: "Ruskin Bond",
        price: "₦4,500",
        image: "/image 5.jpg",
      },
      {
        title: "Living Forward",
        price: "₦5,500",
        image: "/image 6.jpg",
      },
      {
        title: "The Earth Family Smith",
        price: "₦5,000",
        image: "/image 7.jpg",
      },
      { title: "Fire Dance", price: "₦8,000", image: "/image 8.jpg" },
    ],
    Business: [
      {
        title: "Habits of Success",
        price: "₦9,000",
        image: "/image 9.jpg",
      },
      {
        title: "How to Win Friends",
        price: "₦9,000",
        image: "/image 10.jpg",
      },
      {
        title: "Act Like a Success",
        price: "₦6,000",
        image: "/image11.jpg",
      },
      {
        title: "The Seven Keys to SUCCESS",
        price: "₦10,000",
        image: "/image 12.jpg",
      },
      {
        title: "The Success Principle",
        price: "₦6,000",
        image: "/image13.jpg",
      },
      {
        title: "The School of Money",
        price: "₦14,000",
        image: "/image14.jpg",
      },
      {
        title: "The Startup Way",
        price: "₦8,000",
        image: "/image15.jpg",
      },
      {
        title: "Atomic Habits",
        price: "₦8,000",
        image: "/image 16.jpg",
      },
    ],
  
    "Best Selling": [
      {
        title: "Think and Grow Rich",
        price: "₦12,000",
        image: "/image 17.jpg",
      },
      {
        title: "Zero to One",
        price: "₦12,000",
        image: "/image18.jpg",
      },
      {
        title: "The Millionaire FastLane",
        price: "₦10,000",
        image: "/image19.jpg",
      },
      { title: "Gone Girl", price: "₦4,000", image: "/image20.jpg" },
    ],
  };

const Book = ({ title, price, image }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={title} className="w-32 h-48 object-cover mb-2" />
      <h4 className="text-center text-lg">{title}</h4>
      <p className="text-center text-sm text-gray-600">{price}</p>
      <button
        className="w-full md:w-auto bg-[#6A5ACD] text-[#d8d9da] px-4 py-2 rounded-full"
        onClick={() => {
          addToCart({ title, price, image });
          toast.success("Item added to cart!");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getBooks = (category) => {
    if (category === "All") {
      return Object.keys(categoriesData).map((categoryKey) => ({
        category: categoryKey,
        books: categoriesData[categoryKey],
      }));
    } else {
      return [
        {
          category,
          books: categoriesData[category],
        },
      ];
    }
  };

  return (
    <div className="category-container p-6">
      <div className="category-header flex justify-between items-center mb-6">
      <ProductList 
        organizationId="123"
        supplierId="456"
        categoryId="789"
        searchValue="shoe"
        sortingKey="price"
        startDt="2024-01-01"
        endDt="2024-12-31"
        page={1}
        size={10}
        currencyCode="NGN"
        reverseSort={false}
      />
        <select
          className="categories-button bg-[#6A5ACD] text-white px-4 py-2 rounded-full mr-2"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {Object.keys(categoriesData).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="categories">
        {getBooks(selectedCategory).map(({ category, books }) => (
          <div key={category} className="category mb-6">
            <h3 className="text-4xl font-bold text-center mb-8">{category}</h3>
            <div className="books-grid grid grid-cols-2 md:grid-cols-4 gap-4">
              {books.map((book, index) => (
                <Book
                  key={index}
                  title={book.title}
                  price={book.price}
                  image={book.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;