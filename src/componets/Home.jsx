import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Category from "./Categories";


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
const Home = () => {
  return (
    <div>
      <Hero />
      <Category />

    </div>
  );
};

export default Home;
