import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, "")); // Convert price to a number

    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.title === item.title);

      if (existingItemIndex !== -1) {
        // If item already exists in cart, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        toast.success("Item quantity updated in cart!");
        return updatedItems;
      } else {
        // If item is new to cart, add it
        toast.success("Item added to cart!");
        return [...prevItems, { ...item, price: itemPrice, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (title) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (title, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === title
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
