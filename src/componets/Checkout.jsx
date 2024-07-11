import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import MastercardLogo from "../assets/mastercard.png"; // Replace with actual image paths
import VisaLogo from "../assets/visa.png"; // Replace with actual image paths
import PaystackLogo from "../assets/paystack.png"; // Replace with actual image paths
import VerveLogo from "../assets/verve.png"; // Replace with actual image paths

const Checkout = ({ cartItems }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // State to track selected payment method

  const handlePaymentMethodClick = (logo) => {
    setSelectedPaymentMethod(logo); // Update selected payment method state
  };

  // Calculate total from cart items
  const calculateTotal = () => {
    let total = 0;
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((item) => {
        total += item.quantity * item.price;
      });
    }
    return total.toFixed(2);
  };

  console.log(cartItems); // Log cart items to check if they are correctly received

  return (
    <div className="w-full h-auto flex items-center justify-center flex-col p-4 md:p-10">
      <h2 className="flex justify-center items-center text-2xl md:text-4xl text-[#626263]">
        Shopping Cart
        <FaAngleRight className="w-8 h-8 md:w-10 md:h-10" />
        <span className="text-[#6A5ACD]/50 ml-2">Checkout</span>
      </h2>
      <p className="text-black relative mt-4 md:mt-6">
        Returning customer?{" "}
        <Link to="/login" className="text-[#6A5ACD]/75">
          Click here to login
        </Link>
      </p>
      <hr className="w-full border-t-2 border-gray-500 mt-1" />
      <div className="flex flex-col md:flex-row w-full mt-4">
        {/* Billing Details Form */}
        <div className="md:w-2/3 md:pr-8">
          <div className="bg-white rounded shadow-md p-6 mb-6">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">BILLING DETAILS</h3>
            <form className="space-y-4" method="post">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block font-medium">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full p-2 border border-[#6A5ACD] rounded-full"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="state" className="block font-medium">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block font-medium">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="orderNotes" className="block font-medium">
                  Order Notes
                </label>
                <textarea
                  id="orderNotes"
                  className="w-full p-2 border border-[#6A5ACD] rounded-full"
                  rows="4"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        {/* Order Summary & Payment Options */}
        <div className="md:w-1/3 md:mt-6 md:ml-8 space-y-6">
          <div className="bg-white rounded shadow-md border border-[#6A5ACD] p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-1">YOUR ORDER</h3>
            <div className="flex justify-between mb-2 text-xs md:text-sm">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <hr className="border-t border-gray-300 my-2" />
            {/* Render cart items dynamically */}
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="flex justify-between mb-2 text-xs md:text-sm">
                  <span>{item.name}</span>
                  <span>₦{(item.quantity * item.price).toFixed(2)}</span>
                </div>
              ))
            ) : (
              <p>No items in cart</p>
            )}
            <hr className="border-t border-gray-300 my-2" />
            <div className="flex items-center justify-center mb-4">
              <p className="text-xs text-[black] mt-2">
                Secured by Paystack
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-4">
              {/* Logos in a rectangle box */}
              <div className="border border-[#6A5ACD] rounded-lg p-2 md:p-4 w-full text-center flex justify-center items-center space-x-4">
                <img
                  src={MastercardLogo}
                  alt="Mastercard"
                  className={`h-8 cursor-pointer ${
                    selectedPaymentMethod === MastercardLogo ? "opacity-50" : ""
                  }`}
                  onClick={() => handlePaymentMethodClick(MastercardLogo)}
                />
                <img
                  src={VisaLogo}
                  alt="Visa"
                  className={`h-8 cursor-pointer ${
                    selectedPaymentMethod === VisaLogo ? "opacity-50" : ""
                  }`}
                  onClick={() => handlePaymentMethodClick(VisaLogo)}
                />
                <img
                  src={PaystackLogo}
                  alt="Paystack"
                  className={`h-8 cursor-pointer ${
                    selectedPaymentMethod === PaystackLogo ? "opacity-50" : ""
                  }`}
                  onClick={() => handlePaymentMethodClick(PaystackLogo)}
                />
                <img
                  src={VerveLogo}
                  alt="Verve"
                  className={`h-8 cursor-pointer ${
                    selectedPaymentMethod === VerveLogo ? "opacity-50" : ""
                  }`}
                  onClick={() => handlePaymentMethodClick(VerveLogo)}
                />
              </div>
            </div>
            <p className="text-xs text-center text-[black] mt-2">
              Make your payment using debit and credit cards
            </p>
            <Link to="/final-checkout">
              <button className="w-full md:w-auto bg-[#6A5ACD] text-[#d8d9da] px-4 py-2 rounded-full mt-6">
                PROCEED TO CHECKOUT
              </button>
            </Link>
            <p className="text-[black] mt-1">
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
              <span className="text-[#6A5ACD]/75">Privacy policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;